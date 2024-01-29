export interface EventAttendanceModel {
  EventId: string;
  attendees: Attendee[];
}

export interface Attendee {
  userId: string;
  name: string; // Optional, for easier display
  attended: boolean;
}

// Sample Event Attendance
const sampleEventAttendance: EventAttendanceModel = {
  EventId: "e456",
  attendees: [
    { userId: "u123", name: "Alice Smith", attended: true },
    { userId: "u456", name: "Bob Johnson", attended: false },
    { userId: "u789", name: "Carol Davis", attended: true }
  ]
};
