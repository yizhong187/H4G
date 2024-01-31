// handles api requests for admin tasks
import { pool } from "./db.js";

export async function insertAdmin(username, hash) {
    try {
        const insertAdminQuery = {
            text: "INSERT INTO users(username, password_hash, adminRights) VALUES($1, $2)",
            values: [username, hash, true] 
        }
        return await pool.query(insertAdminQuery); //returns a promise
    } catch (error) {
        console.error("Error querying SQL: ", error);
        throw error;
    }
}


export async function findUserEvents(username) {
    try {
        const findUserQuery = {
            text: "SELECT * FROM registeredEvents WHERE username = $1",
            values: [username]
        }
        return await pool.query(findUserQuery); //returns a promise
    } catch (error) {
        console.error("Error querying SQL: ", error);
        throw error;
    }
}

