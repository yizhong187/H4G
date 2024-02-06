import { findAllEvents, findEvent, updateEventDetails, insertEvent, removeEvent } from "../models/events.js";

export async function getAllEvents(req, res) {
    try {
        const events = await findAllEvents();
        res.status(200).json(events.rows);
    } catch (error) {
        if (error instanceof CustomError) {
            res.status(error.code).json({error: error.message});
        } else {
            res.status(500).json({error: error.message});
        }
    }
}

export async function getSingleEvent(req, res) {
    try {
        const eventID = req.params.eventID;
        const event = await findEvent(eventID);
        res.status(200).json(event.rows[0]);
    } catch (error) {
        if (error instanceof CustomError) {
            res.status(error.code).json({error: error.message});
        } else {
            res.status(500).json({error: error.message});
        }
    }
}

export async function createEvent(req, res) {
    try {
        const { eventName, startTime, endTime, categories, available } = req.body;

        await insertEvent(eventName, startTime, endTime, categories, available);
        res.status(201).send("Event created successfully");
    } catch (error) {
        if (error instanceof CustomError) {
            res.status(error.code).json({error: error.message});
        } else {
            res.status(500).json({error: error.message});
        } 
    }
}

export async function updateEvent(req, res) {
    try {
        const eventID = req.params.eventID;
        const { eventName, startTime, endTime, categories, available } = req.body;

        const event = await findEvent(eventID);
    
        if (event.rows.length == 0) {
            throw new CustomError(400, "Event not found");
        } else {
                await updateEventDetails(eventName, startTime, endTime, categories, available);
                res.status(201).send("Event details updated successfully");
        }
    } catch (error) {
        if (error instanceof CustomError) {
            res.status(error.code).json({error: error.message});
        } else {
            res.status(500).json({error: error.message});
        }
    }
}

export async function deleteEvent(req, res) {
    try {
        const eventID = req.params.eventID;

        const event = await findEvent(eventID);
    
        if (event.rows.length == 0) {
            throw new CustomError(400, "Event not found");
        } else {
            await removeEvent(eventID);
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

export async function getRegisteredList(req, res) {
    try {
        const eventID = req.params.eventID;

        const list = await getRegisteredList(eventID);
        res.status(200).json(list.rows);
    } catch (error) {
        if (error instanceof CustomError) {
            res.status(error.code).json({error: error.message});
        } else {
            res.status(500).json({error: error.message});
        }
    }
}

export async function updateAttendance(req, res) {

}

export async function registerEvent(req, res) {
    
}

export async function deleteRegistration(req, res) {
    
}

