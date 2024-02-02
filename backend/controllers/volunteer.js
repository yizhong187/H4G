// handles api requests for all volunteer tasks
import PDFDocument from "pdfkit";
import CustomError from "../error.js";
import { findUser } from "../models/auth.js";
import { deleteVolunteer, findAllVolunteers, findVolunteer, updateVolunteerProfile } from "../models/volunteer.js";

export async function getVolunteers(req, res) {
    try {
        const volunteers = await findAllVolunteers();
        res.status(200).json(volunteers.rows);
    } catch (error) {
        if (error instanceof CustomError) {
            res.status(error.code).json({error: error.message});
        } else {
            res.status(500).json({error: error.message});
        }
    }
}

export async function getSingleVolunteer(req, res) {
    try {
        const userID = req.params.userID;
        const volunteer = await findVolunteer(userID);
        res.status(200).json(volunteer.rows[0]);
    } catch (error) {
        if (error instanceof CustomError) {
            res.status(error.code).json({error: error.message});
        } else {
            res.status(500).json({error: error.message});
        }
    }
}

export async function getCertificate(req, res) {
    const userID = req.params.userID;
    const userData = await findVolunteer(userID);

    const firstName = userData.rows[0].firstname;
    const lastName = userData.rows[0].lastname;
    const volunteerHours = userData.rows[0].volunteerhours;

    const doc = new PDFDocument({size: "A4", margin: 0});

    // Set response to "attachment" -> triggers download
    res.setHeader('Content-disposition', 'attachment: filename="certificate.pdf"');
    res.setHeader('Content-type', 'application/pdf');
    
    // pipe the pdf into the response
    doc.pipe(res);

    const pageHeight = doc.page.height; // Get page height from the doc
    const pageWidth = doc.page.width; // Get page width from the doc
    const fontSizeMain = 25;
    const fontSizeName = 40;
    const lineGap = 40;
    
    // Calculate total height of the text block
    const totalTextHeight = (
        (fontSizeMain + lineGap) + // Height of first line + line gap
        (fontSizeName + lineGap) + // Height of second line + line gap
        fontSizeMain // Height of third line, no line gap after the last line
    );

    // Calculate starting Y position to center the text block vertically
    const startY = (pageHeight - totalTextHeight) / 2;

    doc.image('/Users/caspe2/NUS/Hackathon/H4G/H4G/backend/public/images/background.jpeg', {fit: [pageWidth, pageHeight], align: 'center', valign: 'center'});
    doc.image('/Users/caspe2/NUS/Hackathon/H4G/H4G/backend/public/images/logo.png', (pageWidth - 200)/2, 50, {fit: [200, 200], align: 'center', valign: 'center'});

    // Draw the text, starting from the calculated Y position
    doc.fontSize(fontSizeMain).text("This certifies that", doc.x, startY - fontSizeMain - lineGap, {
        align: "center",
        lineGap: lineGap
    });

    doc.fontSize(fontSizeName).text(`${firstName} ${lastName}`, doc.x, startY, {
        align: "center",
        oblique: true,
        lineGap: lineGap
    });

    doc.fontSize(fontSizeMain).text(`has completed ${volunteerHours} hours of community service with Big At Heart`, doc.x + 50, startY + fontSizeName + lineGap, {
        align: "center",
        width: 500
    });

    // end the stream
    doc.end();
}

// we can change this implementation to frontend only/emails depending on how much time we have
export async function createForm(req, res) {

}

export async function updateProfile(req, res) {
    try {
        const userID = req.params.userID;
        const { firstName, lastName, email, gender, yearOfBirth, available, interests } = req.body;

        const user = await findVolunteer(userID);
    
        if (user.rows.length == 0) {
            throw new CustomError(400, "Account not found");
        } else {
            const existingUser = await findUser(email);
            if (existingUser.rows.length != 0) {
                throw new CustomError(400, "This email is linked to another account");
            } else {
                await updateVolunteerProfile(userID, firstName, lastName, email, gender, yearOfBirth, available, interests);
                res.status(201).send("Volunteer profile updated successfully");
            }
        }
    } catch (error) {
        if (error instanceof CustomError) {
            res.status(error.code).json({error: error.message});
        } else {
            res.status(500).json({error: error.message});
        }
    }
}

export async function deleteAccount(req, res) {
    try {
        const userID = req.params.userID;

        const existingUser = await findVolunteer(userID);
    
        if (existingUser.rows.length == 0) {
            throw new CustomError(400, "Account not found");
        } else {
            await deleteVolunteer(userID);
            res.status(204);
        }
    } catch (error) {
        if (error instanceof CustomError) {
            res.status(error.code).json({error: error.message});
        } else {
            res.status(500).json({error: error.message});
        }
    }
}