-- info about volunteers and admins
CREATE TABLE users (
    id SERIAL PRIMARY KEY,
    firstName VARCHAR(50),
    lastName VARCHAR(50),
    email TEXT NOT NULL,
    mobileNumber INT,
    gender VARCHAR(50),
    yearOfBirth INT,
    employmentStatus TEXT,
    education TEXT,
    driving BOOLEAN,
    vehicle BOOLEAN,
    immigrationStatus TEXT,
    available TEXT[], -- array of days available
    interests TEXT[], -- array of categories interested in
    skills TEXT[],
    adminRights BOOLEAN, 
    passwordHash TEXT NOT NULL
);

-- events/volunteer opportunities etc
CREATE TABLE events (
    id SERIAL PRIMARY KEY,
    eventName TEXT NOT NULL,
    startTime TIMESTAMP NOT NULL,
    endTime TIMESTAMP NOT NULL,
    duration DECIMAL(5, 2),
    categories TEXT[], -- array of category tags
    available BOOLEAN -- whether it should be displayed to the volunteers
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