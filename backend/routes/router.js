// api routes

import express from "express";

import {authenticateToken, login, logout, registration} from "../controllers/auth.js"
import { getCertificate, getSingleVolunteer, getVolunteers, updateProfile } from "../controllers/volunteer.js"
import { createNewAdmin, generateReport } from "../controllers/admin.js";
import { createWorkshop, deleteRegistration, deleteWorkshop, getAllWorkshops, getRegisteredList, getSingleWorkshop, registerWorkshop, updateAttendance, updateWorkshop } from "../controllers/workshops.js";

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

// CRUD for workshops
router.get("/workshops", getAllWorkshops);
router.get("/workshops/:workshopID", getSingleWorkshop);
router.post("/workshop", createWorkshop);
router.put("/workshop/:workshopID", updateWorkshop);
router.delete("/workshop/:workshopID", deleteWorkshop);

// registering for workshop
router.get("/workshops/:workshopID/volunteers", getRegisteredList);
router.put("/workshops/:workshopID/volunteers", updateAttendance);
router.post("/workshops/:workshopID/:userID", registerWorkshop);
router.delete("/workshops/:workshopID/:userID", deleteRegistration);

export default router;
