export interface UserModel {
  id: string;
  name: string;
  yearOfBirth: number;
  email: string;
  type: string;
  gender: string;
  interests: string[];
  availability: string[];
}

const sampleUser: UserModel = {
  id: "u123",
  name: "John Doe",
  yearOfBirth: 2000,
  email: "johndoe@example.com",
  type: "volunteer",
  gender: "male",
  interests: ["environment", "community service"],
  availability: ["Monday", "Tuesday", "Friday"]
};