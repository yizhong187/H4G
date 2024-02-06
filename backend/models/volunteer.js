import { pool } from "./db.js";

export async function findAllVolunteers() {
    try {
        const findAllVolunteersQuery = {
            text: "SELECT * FROM users WHERE adminRights = false" // select non-admins, ie volunteers
        }
        return await pool.query(findAllVolunteersQuery);
    } catch (error) {
        console.error("Error querying SQL: ", error);
        throw error;
    }
}

export async function findVolunteer(id) {
    try {
        const findVolunteerQuery = {
            text: "SELECT * FROM users WHERE id = $1",
            values: [id]
        }
        return await pool.query(findVolunteerQuery);
    } catch (error) {
        console.error("Error querying SQL: ", error);
        throw error;
    }
}

export async function updateVolunteerProfile(id, firstName, lastName, email, gender, yearOfBirth, employmentStatus, education,
    driving, vehicle, immigrationStatus, available, interests, skills) {
    try {
        const updateVolunteerProfileQuery = {
            text: `UPDATE users
                SET (id, firstName, lastName, email, gender, yearOfBirth, employmentStatus, education,
                    driving, vehicle, immigrationStatus, available, interests, skills) VALUES($2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13, $14)
                WHERE id=$1`,
            values: [id, firstName, lastName, email, gender, yearOfBirth, employmentStatus, education,
                driving, vehicle, immigrationStatus, available, interests, skills]
        }
        return await pool.query(updateVolunteerProfileQuery);
    } catch (error) {
        console.error("Error querying SQL: ", error);
        throw error;
    }
}

export async function deleteVolunteer(id) {
    try {
        const deleteVolunteerQuery = {
            text: "DELETE FROM users WHERE id = $1",
            values: [id]
        }
        return await pool.query(deleteVolunteerQuery);
    } catch (error) {
        console.error("Error querying SQL: ", error);
        throw error;
    }
}