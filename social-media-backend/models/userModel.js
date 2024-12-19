import { query } from "../db/index.js";

export const User = {
  create: async (username, email, password) => {
    const result = await query(
      `INSERT INTO users (username, email, password) 
               VALUES ($1, $2, $3) RETURNING *`,
      [username, email, password]
    );
    return result.rows[0];
  },

  findByEmail: async (email) => {
    const result = await query("SELECT * FROM users WHERE email = $1", [email]);
    return result.rows[0];
  },

  findById: async (id) => {
    const result = await query("SELECT * FROM users WHERE id = $1", [id]);
    return result.rows[0];
  },
};
