// api routes

import express from "express";
import {authenticateToken, login, logout, registration} from "../controllers/auth.js"
import { getCertificate, getSingleVolunteer, getVolunteers, updateProfile } from "../controllers/volunteer.js"
import {  generateReport } from "../controllers/admin.js";
import { createEvent, deleteEvent, deleteRegistration, getAllEvents, getRegisteredList, getSingleEvent, registerEvent, updateAttendance, updateEvent } from "../controllers/events.js";

const router = express.Router();

// authentication
router.post("/register", registration);
// need to provide all the details in the body: firstName, lastName, email, mobileNumber, gender, yearOfBirth, employmentStatus, education, driving (boolean), vehicle (boolean), immigrationStatus, available (array), interests (array), adminRights (boolean), password
router.post("/login", login);
// provide in body: email and password
router.delete("/logout", authenticateToken, logout);
// need to include credentials

// volunteer related information
router.get("/volunteers", getVolunteers);
// returns as array of json all the details of the volunteers
router.get("/volunteers/:userID", getSingleVolunteer);
// returns as json the details of that single volunteer
router.get("/certificate/:userID", getCertificate);
// will prompt user to download pdf file
router.put("/profile/:userID", updateProfile);
// to allow volunteer to update the profile (need to include all the details as in register)

// admin functionality
router.post("/report", generateReport);
// will prompt user to download the report upon request

// CRUD for events
router.get("/events", getAllEvents);
// returns as array of json details of all the events
router.get("/events/:eventID", getSingleEvent);
// returns as json event details of the single event
router.post("/events", createEvent);
// create an event (specify eventName, startTime, endTime, duration (up to 2 decimal place), categories (array), available (boolean))
router.put("/events/:eventID", updateEvent);
// same as above but updating the event
router.delete("/events/:eventID", deleteEvent);
// delete the event specified

// registering for event
router.get("/events/:eventID/volunteers", getRegisteredList);
// returns the list of volunteers attending as array of json
router.put("/events/:eventID/volunteers", updateAttendance);
// specify the list of volunteers that have attended (in the body of the request)
router.post("/events/:eventID/:userID", registerEvent);
// register a user for the event
router.delete("/events/:eventID/:userID", deleteRegistration);
// delete a user from the event (withdraw or removed by admin)

export default router;
