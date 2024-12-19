export const db = {
  // Users
  users: [
    {
      id: 1,
      username: "user1",
      email: "user1@example.com",
      password: "password",
    },
    {
      id: 2,
      username: "user2",
      email: "user2@example.com",
      password: "password",
    },
    {
      id: 3,
      username: "user3",
      email: "user3@example.com",
      password: "password",
    },
    {
      id: 4,
      username: "user4",
      email: "user4@example.com",
      password: "password",
    },
    {
      id: 5,
      username: "testUser",
      email: "testuser@example.com",
      password: "password",
    },
  ],

  // Posts
  posts: [
    {
      id: 1,
      userId: 1,
      username: "user1",
      content: "Sunny day at the beach! 🌊",
      image: "https://plus.unsplash.com/premium_photo-1669750817438-3f7f3112de8d?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8YmVhY2h8ZW58MHx8MHx8fDA%3D",
      createdAt: new Date().toISOString(),
    },
    {
      id: 2,
      userId: 2,
      username: "user2",
      content: "New Painting! 🎨",
      image: "https://images.unsplash.com/photo-1533158388470-9a56699990c6?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fHBhaW50aW5nfGVufDB8fDB8fHww",
      createdAt: new Date().toISOString(),
    },
    {
      id: 3,
      userId: 3,
      username: "user3",
      content: "Exploring the best city in the world today 🚶‍♂️",
      image: "https://plus.unsplash.com/premium_photo-1661954654458-c673671d4a08?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8bmV3JTIweW9yayUyMGNpdHl8ZW58MHx8MHx8fDA%3D",
      createdAt: new Date().toISOString(),
    },
    {
      id: 4,
      userId: 4,
      username: "user4",
      content: "Found this amazing view while hiking! 🥾",
      image: "https://images.unsplash.com/photo-1465188466731-618dfc07a57d?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8aGlrZXxlbnwwfHwwfHx8MA%3D%3D",
      createdAt: new Date().toISOString(),
    },
    {
      id: 5,
      userId: 5,
      username: "testUser",
      content: "Go Rockets! 🚀",
      image: "https://images.unsplash.com/photo-1519861531473-9200262188bf?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YmFza2V0YmFsbHxlbnwwfHwwfHx8MA%3D%3D",
      createdAt: new Date().toISOString(),
    },
    {
      id: 6,
      userId: 2,
      username: "user2",
      content: "Coffee break! ☕",
      image: "https://images.unsplash.com/photo-1461023058943-07fcbe16d735?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y29mZmVlfGVufDB8fDB8fHww",
      createdAt: new Date().toISOString(),
    },
    {
      id: 7,
      userId: 3,
      username: "user3",
      content: "Workout done! 💪",
      image: "https://plus.unsplash.com/premium_photo-1671028547976-4b1e3300a350?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8d29ya291dHxlbnwwfHwwfHx8MA%3D%3D",
      createdAt: new Date().toISOString(),
    },
  ],

  // Follows
  follows: [
    { followerId: 1, followingId: 2 }, // user1 follows user2
    { followerId: 1, followingId: 3 }, // user1 follows user3
    { followerId: 1, followingId: 4 }, // user1 follows user4
    { followerId: 2, followingId: 1 }, // user2 follows user1
    { followerId: 3, followingId: 4 }, // user3 follows user4
    { followerId: 4, followingId: 5 }, // user4 follows testUser
    { followerId: 5, followingId: 1 }, // testUser follows user1
    { followerId: 5, followingId: 3 }, // testUser follows user3
  ],
};
