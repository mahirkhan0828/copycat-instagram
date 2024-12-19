import { query } from "../db/index.js";

export const Post = {
    create: async (userId, content, image) => {
        const result = await query(
          `INSERT INTO posts (user_id, content, image, created_at)
           VALUES ($1, $2, $3, NOW()) RETURNING *`,
          [userId, content, image]
        );
        return result.rows[0];
      },

  getUserFeed: async (userId) => {
    const result = await query(
      `SELECT posts.*, users.username 
                 FROM posts 
                 JOIN users ON posts.user_id = users.id 
                 WHERE user_id IN (
                   SELECT following_id FROM follows WHERE follower_id = $1
                 ) ORDER BY created_at DESC`,
      [userId]
    );
    return result.rows;
  },

  getUserPosts: async (userId) => {
    const result = await query(
      `SELECT posts.*, users.username 
         FROM posts 
         JOIN users ON posts.user_id = users.id 
         WHERE posts.user_id = $1 
         ORDER BY posts.created_at DESC`,
      [userId]
    );
    return result.rows;
  },
};
