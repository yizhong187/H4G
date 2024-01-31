// handles all admin-related requests
import dotenv from "dotenv";
import jsonwebtoken from "jsonwebtoken";
import bcrypt from "bcrypt";
import {findUser} from "../models/auth.js";
import {insertAdmin, findUserEvents} from "../models/admin.js";
import CustomError from "../error.js";


export async function createNewAdmin(req, res) {
    try {
        const { username, password } = req.body;
        const existingUser = await findUser(username);
    
        if (existingUser.rows.length !== 0) {
            throw new CustomError(400, "Username is already taken");
        }

        const hashedPassword = await bcrypt.hash(password, 10); //10 corresponds to the salt generated
        await insertAdmin(username, hashedPassword);
        res.status(201).send("User registered successfully");
    } catch (error) {
        if (error instanceof CustomError) {
            res.status(error.code).json({error: error.message});
        } else {
            res.status(500).json({error: error.message});
        } 
    }
}

// find out how to export as pdf/csv/json 
export async function generateReport(req, res) {
    try {
        // this const line correct?
        const { username } = req.body;

        const userEvents = await findUserEvents(username);

        // do something, generate report here
        
        res.status(201).send("Events fetched successfully");
    } catch (error) {
        if (error instanceof CustomError) {
            res.status(error.code).json({error: error.message});
        } else {
            res.status(500).json({error: error.message});
        } 
    }
}

// same as the volunteer one
export async function viewAllForms (req, res) {

}