// For simplicity with deployment, have taken out calls to actual PostgreSQL database and replaced it with in memory preseeded data
// Backend is still available for view

export const users = [
    { id: 1, username: 'userA', email: 'userA@mail.com', password: 'passwordA' },
    { id: 2, username: 'userB', email: 'userB@mail.com', password: 'passwordB' },
  ];
  
  export const posts = [
    { id: 1, userId: 1, content: 'Hello World!', username: 'userA', created_at: new Date() },
    { id: 2, userId: 2, content: 'Another Post!', username: 'userB', created_at: new Date() },
  ];
  
  export const follows = [
    { followerId: 1, followingId: 2 },
  ];
  