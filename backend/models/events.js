import { pool } from "./db.js";

export async function findAllEvents() {
    try {
        const findAllEventsQuery = {
            text: "SELECT * FROM events"
        }
        return await pool.query(findAllEventsQuery);
    } catch (error) {
        console.error("Error querying SQL: ", error);
        throw error;
    }
}

export async function findEvent(id) {
    try {
        const findEventQuery = {
            text: "SELECT * FROM events WHERE id = $1",
            values: [id]
        }
        return await pool.query(findEventQuery);
    } catch (error) {
        console.error("Error querying SQL: ", error);
        throw error;
    }
}

export async function findRegisteredList(id) {
    try {
        const findRegisteredListQuery = {
            text: "SELECT * FROM registeredEvents WHERE id = $1",
            values: [id]
        }
        return await pool.query(findRegisteredListQuery);
    } catch (error) {
        console.error("Error querying SQL: ", error);
        throw error;
    }
}

export async function updateEventDetails(eventName, startTime, endTime, categories, available) {
    try {
        const updateEventDetailsQuery = {
            text: `UPDATE events
                SET (eventName, startTime, endTime, categories, available) VALUES($2, $3, $4, $5, $6)
                WHERE id=$1`,
            values: [id, eventName, startTime, endTime, categories, available]
        }
        return await pool.query(updateEventDetailsQuery);
    } catch (error) {
        console.error("Error querying SQL: ", error);
        throw error;
    }
}

export async function insertEvent(eventName, startTime, endTime, categories, available) {
    try {
        const insertEventQuery = {
            text: "INSERT INTO events(eventName, startTime, endTime, categories, available) VALUES($1, $2, $3, $4, $5)",
            values: [eventName, startTime, endTime, categories, available] 
        }
        return await pool.query(insertEventQuery); //returns a promise
    } catch (error) {
        console.error("Error querying SQL: ", error);
        throw error;
    }
}

export async function deleteEvent(id) {
    try {
        const deleteEventQuery = {
            text: "DELETE FROM events WHERE id = $1",
            values: [id]
        }
        return await pool.query(deleteEventQuery);
    } catch (error) {
        console.error("Error querying SQL: ", error);
        throw error;
    }
}