export interface EventModel {
  id: string;
  title: string;
  description: string;
  date: string;
  time: string;
  location: string;
  volunteers: string[]; // Array of user IDs
  status: 'open' | 'closed'; 
}

const sampleEvent: EventModel = {
  id: "e456",
  title: "Beach Cleanup",
  description: "A community event to clean the local beach.",
  date: "2024-02-20",
  time: "09:00-12:00",
  location: "West Coast Park",
  volunteers: ["u123", "u789"],
  status: 'open'
};
