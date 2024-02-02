// api routes

import express from "express";

import {authenticateToken, login, logout, registration} from "../controllers/auth.js"
import { getCertificate, getSingleVolunteer, getVolunteers, updateProfile } from "../controllers/volunteer.js"
import { createNewAdmin, generateReport } from "../controllers/admin.js";
import { createEvent, deleteEvent, deleteRegistration, getAllEvents, getRegisteredList, getSingleEvent, registerEvent, updateAttendance, updateEvent } from "../controllers/events.js";

const router = express.Router();

// authentication
router.post("/register", registration);
router.post("/login", login);
router.delete("/logout", authenticateToken, logout);

// volunteer related information
router.get("/volunteers", getVolunteers);
router.get("/volunteers/:userID", getSingleVolunteer);
router.get("/certificate/:userID", getCertificate);
router.put("/profile/:userID", updateProfile);

// admin functionality
router.post("/admin", createNewAdmin);
router.post("/report", generateReport);

// CRUD for events
router.get("/events", getAllEvents);
router.get("/events/:eventID", getSingleEvent);
router.post("/workshop", createEvent);
router.put("/workshop/:eventID", updateEvent);
router.delete("/workshop/:eventID", deleteEvent);

// registering for workshop
router.get("/events/:eventID/volunteers", getRegisteredList);
router.put("/events/:eventID/volunteers", updateAttendance);
router.post("/events/:eventID/:userID", registerEvent);
router.delete("/events/:eventID/:userID", deleteRegistration);

export default router;
