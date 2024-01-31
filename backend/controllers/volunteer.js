// handles api requests for all volunteer tasks

export async function getVolunteers(req, res) {
    try {
        const getVolunteersQuery = {
            text: "SELECT * FROM users",
        }

        return await pool.query(getVolunteersQuery); //returns a promise
    } catch (error) {
        console.error("Error querying SQL: ", error);
        throw error;
    }
}

export async function getSingleVolunteer(req, res) {
    try {
        const getVolunteerQuery = {
            text: "SELECT * FROM users WHERE username = $1",
            values: [username]
        }

        return await pool.query(getVolunteerQuery); //returns a promise
    } catch (error) {
        console.error("Error querying SQL: ", error);
        throw error;
    }
}

export async function getCertificate(req, res) {
    
}

// we can change this implementation to frontend only/emails depending on how much time we have
export async function createForm(req, res) {

}

export async function updateProfile(req, res) {
    
}