import { query } from "../db/index.js";

export const Follow = {
  create: async (followerId, followingId) => {
    await query(
      `INSERT INTO follows (follower_id, following_id)
            VALUES ($1, $2) ON CONFLICT DO NOTHING`,
      [followerId, followingId]
    );
  },

  delete: async (followerId, followingId) => {
    await query(
      `DELETE FROM follows 
             WHERE follower_id = $1 AND following_id = $2`,
      [followerId, followingId]
    );
  },

  getFollowing: async (userId) => {
    const result = await query(
      `SELECT users.id, users.username
            FROM follows
            JOIN users on follows.following_id = users.id
            WHERE follows.follower_id = $1`,
      [userId]
    );
    return result.rows;
  },

  getFollowers: async (userId) => {
    const result = await query(
      `SELECT users.id, users.username 
       FROM follows 
       JOIN users ON follows.follower_id = users.id 
       WHERE follows.following_id = $1`,
      [userId]
    );
    return result.rows;
  },
};
