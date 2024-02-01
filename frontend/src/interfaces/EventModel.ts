export interface EventModel {
  id: string;
  title: string;
  description: string;
  date: string;
  location: string;
  quota: number;
  volunteers: string[]; // Array of user IDs
  status: 'open' | 'closed'; 
}

const sampleEvent: EventModel = {
  id: "e456",
  title: "Beach Cleanup",
  description: "A community event to clean the local beach.",
  date: "2024-02-20",
  location: "West Coast Park",
  quota: 50,
  volunteers: ["u123", "u789"],
  status: 'open'
};
