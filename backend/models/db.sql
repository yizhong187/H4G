-- info about volunteers and admins
CREATE TABLE users {
    id SERIAL PRIMARY KEY,
    firstName VARCHAR(50) NOT NULL,
    lastName VARCHAR(50) NOT NULL,
    email TEXT NOT NULL,
    gender VARCHAR(50) NOT NULL,
    yearOfBirth INT NOT NULL,
    available TEXT[], -- array of days available
    interests TEXT[], -- array of categories interested in
    volunteerHours INT DEFAULT 0,
    adminRights BOOLEAN DEFAULT false, 
    passwordHash TEXT NOT NULL
};

-- workshops/volunteer opportunities etc
CREATE TABLE events {
    id SERIAL PRIMARY KEY,
    eventName TEXT NOT NULL,
    startTime TIMESTAMP NOT NULL,
    endTIme TIMESTAMP NOT NULL,
    categories TEXT[], -- array of category tags
    available BOOLEAN -- whether it should be displayed to the volunteers
}

-- each event the volunteer registers for is tagged to one entry
CREATE TABLE registeredEvents {
    userID INT NOT NULL,
    eventID INT NOT NULL,
    attendance BOOLEAN, 
    FOREIGN KEY userID REFERENCES users(id),
    FOREIGN KEY eventID REFERENCES events(id)
}