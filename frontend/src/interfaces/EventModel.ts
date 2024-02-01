export interface EventModel {
  id: string;
  title: string;
  description: string;
  personInCharge: string;
  date: string;
  location: string;
  quota: number;
  volunteers: string[]; // Array of user IDs
  status: 'open' | 'closed'; 
}

export const sampleEvent: EventModel = {
  id: "e456",
  title: "Beach Cleanup",
  description: "Phasellus rhoncus turpis nisl, ac aliquam elit venenatis ac. Maecenas elementum pretium libero, in pharetra nisl pharetra quis. Nunc placerat purus eu hendrerit rutrum. Cras dignissim urna ut neque sodales condimentum. Nulla feugiat volutpat ex eget consectetur. Suspendisse mattis tortor sit amet massa congue, eget vehicula ipsum pretium. In hac habitasse platea dictumst. Ut nec fermentum odio. Maecenas id rutrum massa, eget rutrum quam. Proin at sapien sapien. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Quisque fermentum quis leo non pulvinar. Suspendisse et luctus neque. Phasellus ullamcorper a ipsum vitae vestibulum. Aliquam erat volutpat. Proin vitae enim nisi.",
  personInCharge: "Mr Lee Chong Tok",
  date: "2024-02-20",
  location: "West Coast Park",
  quota: 50,
  volunteers: ["u123", "u789"],
  status: 'open'
};
