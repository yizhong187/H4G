export interface FeedbackModel {
  id: string;
  userId: string;
  subject: string;
  message: string;
}

const sampleFeedback: FeedbackModel = {
  id: "f321",
  userId: "u123",
  subject: "Event Experience",
  message: "I really enjoyed the Beach Cleanup event and learned a lot."
};
