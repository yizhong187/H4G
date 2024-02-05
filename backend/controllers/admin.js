// handles all admin-related requests
import Excel from "exceljs";
import {findUserEvents} from "../models/admin.js";
import CustomError from "../error.js";
import { age, education, ethnicity, fillHome, gender, home, immigration, interests, occupation, skills } from "./excel.js";

// find out how to export as pdf/csv/json 
export async function generateReport(req, res) {
    try {
        const userEvents = await findUserEvents(username);

        // initialise the workbook with worksheets of the different fields
        const workbook = new Excel.Workbook();
        const homeWorksheet = workbook.addWorksheet("Volunteer Report");
        const genderWorksheet = workbook.addWorksheet("Gender");
        const ageWorksheet = workbook.addWorksheet("Age");
        const ethnicityWorksheet = workbook.addWorksheet("Ethnicity");
        const educationWorksheet = workbook.addWorksheet("Education levels");
        const occupationWorksheet = workbook.addWorksheet("Occupation");
        const immigrationWorksheet = workbook.addWorksheet("Immmigration");
        const interestsWorksheet = workbook.addWorksheet("Interests");
        const skillsWorksheet = workbook.addWorksheet("Skills");

        // initalise the columns of each worksheet
        homeWorksheet.columns = home;
        genderWorksheet.columns = gender;
        ageWorksheet.columns = age;
        ethnicityWorksheet.columns = ethnicity;
        educationWorksheet.columns = education;
        occupationWorksheet.columns = occupation;
        immigrationWorksheet.columns = immigration;
        interestsWorksheet.columns = interests;
        skillsWorksheet.columns = skills;

        // get current year and month to fetch last 12 months
        const currentDate = new Date();
        const year = currentDate.getFullYear();
        const month = currentDate.getMonth();

        homeWorksheet.addRows(await fillHome(month, year));



        res.status(201).send("Events fetched successfully");
    } catch (error) {
        if (error instanceof CustomError) {
            res.status(error.code).json({error: error.message});
        } else {
            res.status(500).json({error: error.message});
        } 
    }
}

// same as the volunteer one
export async function viewAllForms (req, res) {

}