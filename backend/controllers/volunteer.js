// handles api requests for all volunteer tasks
import { insertUser, findUser, insertToken, findToken, removeToken, findAllUsers } from "../models/auth.js";

export async function getVolunteers(req, res) {
    const volunteerList = findAllUsers();
    return volunteerList;
}

export async function getSingleVolunteer(req, res) {
    const {username} = req.body;
    const volunteer = findUser(username);
    return volunteer;
}

export async function getCertificate(req, res) {
    
}

// we can change this implementation to frontend only/emails depending on how much time we have
export async function createForm(req, res) {

}

export async function updateProfile(req, res) {
    
}