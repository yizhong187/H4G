// handles all login/signup authentication
import dotenv from "dotenv";
import jsonwebtoken from "jsonwebtoken";
import bcrypt from "bcrypt";
import { insertUser, findUser, insertToken, findToken, removeToken } from "../models/auth.js";
import CustomError from "../error.js";

dotenv.config();

export async function registration (req, res) {
    try {
        const { username, password } = req.body;
        const existingUser = await findUser(username);
    
        if (existingUser.rows.length !== 0) {
            throw new CustomError(400, "Username is already taken");
        }

        const hashedPassword = await bcrypt.hash(password, 10); //10 corresponds to the salt generated
        await insertUser(username, hashedPassword);
        res.status(201).send("User registered successfully");
    } catch (error) {
        if (error instanceof CustomError) {
            res.status(error.code).json({error: error.message});
        } else {
            res.status(500).json({error: error.message});
        } 
    }
}

export async function login (req, res) {
    try {
        const { username, password } = req.body;
        const user = await findUser(username);

        //compare the input pw and the hashed pw stored in the db
        if (user.rows.length === 0 || !await bcrypt.compare(password, user.rows[0].password_hash)) {
            throw new CustomError(401, "Invalid username or password");
        }
        
        // payload that is attached to the jwt
        const jwtUser = { name: username, id: user.rows[0].id };

        const accessToken = generateAccessToken(jwtUser); //short-term use, expires after some set time
        const refreshToken = jsonwebtoken.sign(jwtUser, process.env.REFRESH_TOKEN_SECRET); //longer-term, valid until the user chooses to logout

        const hashedToken = await bcrypt.hash(refreshToken, 10);
        await insertToken(username, hashedToken); // stores the refresh token in the database

        //stores both JWTs as cookies
        res.cookie("accessToken", accessToken, {httpOnly: true, secure: true});
        res.cookie("refreshToken", refreshToken, {httpOnly: true, secure: true});

        //returns user data as JSON in response body
        res.status(200).json(user.rows[0]);
    } catch(error) {
        if (error instanceof CustomError) {
            res.status(error.code).json({error: error.message});
        } else {
            res.status(500).json({error: error.message});
        }
    }
}

export async function authenticateToken (req, res, next) {
    const token = req.cookies.accessToken; // retrieve the jwt stored in a cookie in the HTTP request

    if (token == null) {
        throw new CustomError(401, "Invalid username or password");
    }

    jsonwebtoken.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, user) => {
        if (err) {
            throw new CustomError(403, "Permission denied: Invalid token");
        }
        req.user = user; // stores the user data in the request object which will be passed to the next middleware
        next();
    })
}

export async function logout (req, res) {
    try {
        const userID = req.user.id;

        // delete refresh token and user details from active user table
        await removeToken(userID);
        res.status(204).send("Logout successful");
    } catch (error) {
        if (error instanceof CustomError) {
            res.status(error.code).json({error: error.message});
        } else {
            res.status(500).json({error: error.message});
        } 
    }
}

function generateAccessToken(user) {
    return jsonwebtoken.sign(user, process.env.ACCESS_TOKEN_SECRET, { expiresIn: '1h' })
}