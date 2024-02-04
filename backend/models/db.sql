-- info about volunteers and admins
CREATE TABLE users (
    id SERIAL PRIMARY KEY,
    firstName VARCHAR(50) NOT NULL,
    lastName VARCHAR(50) NOT NULL,
    email TEXT NOT NULL,
    gender VARCHAR(50) NOT NULL,
    yearOfBirth INT NOT NULL,
    available TEXT[], -- array of days available
    interests TEXT[], -- array of categories interested in
    adminRights BOOLEAN, 
    passwordHash TEXT NOT NULL
);

-- events/volunteer opportunities etc
CREATE TABLE events (
    id SERIAL PRIMARY KEY,
    eventName TEXT NOT NULL,
    startTime TIMESTAMP NOT NULL,
    endTime TIMESTAMP NOT NULL,
    categories TEXT[], -- array of category tags
    available BOOLEAN -- whether it should be displayed to the volunteers
);

CREATE TABLE volunteerHours (
    userID INT NOT NULL,
    eventDate TIMESTAMP NOT NULL,
    hours DECIMAL(5, 2),
    FOREIGN KEY (userID) REFERENCES users(id)
);

-- each event the volunteer registers for is tagged to one entry
CREATE TABLE registeredEvents (
    userID INT NOT NULL,
    eventID INT NOT NULL,
    attendance BOOLEAN, 
    FOREIGN KEY (userID) REFERENCES users(id),
    FOREIGN KEY (eventID) REFERENCES events(id)
);

CREATE TABLE activeUsers (
    userID INT NOT NULL,
    hashedToken TEXT NOT NULL,
    FOREIGN KEY (userID) REFERENCES users(id)
);