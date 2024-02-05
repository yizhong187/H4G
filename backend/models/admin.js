// handles api requests for admin tasks
import { pool } from "./db.js";

export async function insertAdmin(username, hash) {
    try {
        const insertAdminQuery = {
            text: "INSERT INTO users(username, password_hash, adminRights) VALUES($1, $2)",
            values: [username, hash, true] 
        }
        return await pool.query(insertAdminQuery);
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
        return await pool.query(findUserQuery);
    } catch (error) {
        console.error("Error querying SQL: ", error);
        throw error;
    }
}

// to edit
export async function getHoursByMonth(month, year) {
    try {
        const fetchHoursByMonth = {
            text: `SELECT EXTRACT(MONTH FROM eventDate), SUM(hours), COUNT(DISTINCT eventID) 
                    FROM volunteerHours
                    WHERE `,
            values: [month, year]
        }
        return await pool.query(fetchHoursByMonth);
    } catch (error) {
        console.error("Error querying SQL: ", error);
        throw error;
    }
}

// to edit
export async function getGenderByMonth(year) {
    try {
        const fetchHoursByMonth = {
            text: `SELECT EXTRACT(MONTH FROM eventDate), SUM(hours), COUNT(DISTINCT eventID),  
                    FROM volunteerHours JOIN users
                    ON userID = id
                    WHERE `,
            values: [year]
        }
        return await pool.query(fetchHoursByMonth);
    } catch (error) {
        console.error("Error querying SQL: ", error);
        throw error;
    }
}

