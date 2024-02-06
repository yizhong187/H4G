// handles all the SQL querying, database management logic
import { pool } from "./db.js";


// basic user CRUD
export async function insertUser(id, firstName, lastName, email, gender, yearOfBirth, employmentStatus, education,
    driving, vehicle, immigrationStatus, available, interests, skills) {
    try {
        const insertUserQuery = {
            text: `INSERT INTO users(id, firstName, lastName, email, gender, yearOfBirth, employmentStatus, education, 
                driving, vehicle, immigrationStatus, available, interests, skills) VALUES($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13, $14)`,
            values: [id, firstName, lastName, email, gender, yearOfBirth, employmentStatus, education,
                driving, vehicle, immigrationStatus, available, interests, skills] 
        }
        return await pool.query(insertUserQuery); //returns a promise
    } catch (error) {
        console.error("Error querying SQL: ", error);
        throw error;
    }
}

export async function findUser(email) {
    try {
        const findUserQuery = {
            text: "SELECT * FROM users WHERE email = $1",
            values: [email]
        }

        return await pool.query(findUserQuery); //returns a promise
    } catch (error) {
        console.error("Error querying SQL: ", error);
        throw error;
    }
}

export async function findAllUsers() {
    try {
        const findAllUsersQuery = {
            text: "SELECT * FROM users"
        }

        return await pool.query(findAllUsersQuery); //returns a promise
    } catch (error) {
        console.error("Error querying SQL: ", error);
        throw error;
    }
}

// tokens can be used to link users to their signed up events
export async function insertToken(id, hash) {
    try {
        const insertTokenQuery = {
            text: "INSERT INTO activeUsers(userID, hashedToken) VALUES($1, $2)",
            values: [id, hash] 
        }
        return await pool.query(insertTokenQuery);
    } catch (error) {
        console.error("Error querying SQL: ", error);
        throw error;
    }
}

export async function removeToken(userID) {
    try {
        const removeTokenQuery = {
            text: 
            `DELETE FROM activeUsers WHERE user_id=$1`,
            values: [userID] 
        }
       return await pool.query(removeTokenQuery); //returns a promise
    } catch (error) {
        console.error("Error querying SQL: ", error);
        throw error;
    }
}

// export async function findToken(userID) {
//     try {
//         const findTokenQuery = {
//             text: "SELECT * FROM activeUsers user_id = $1",
//             values: [userID]
//         }
//         return await pool.query(findTokenQuery); //returns a promise
//     } catch (error) {
//         console.error("Error querying SQL: ", error);
//         throw error;
//     }
// }

