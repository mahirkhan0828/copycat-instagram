import jwt from "jsonwebtoken";
import { User } from "../models/userModel.js";
import { Post } from "../models/postModel.js";
import {
  hashPassword,
  comparePasswords,
  generateToken,
} from "../service/authService.js";

export const register = async (req, res) => {
  const { username, email, password } = req.body;

  try {
    const hashedPassword = await hashPassword(password);
    const newUser = await User.create(username, email, hashedPassword);

    const token = generateToken(newUser);
    res.status(201).json({ user: newUser, token });
  } catch (error) {
    res.status(500).json({ error: `Registration Failed: ${error}` });
  }
};

export const login = async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await User.findByEmail(email);
    if (!user) return res.status(404).json({ error: "User not found" });
    const isMatch = await comparePasswords(password, user.password);
    if (!isMatch) return res.status(400).json({ error: "Invalid credentials" });

    const token = jwt.sign({ id: user.id }, process.env.JWT_SECRET, {
      expiresIn: "1h",
    });
    res.status(200).json({ user, token });
  } catch (error) {
    res.status(500).json({ error: "Login failed" });
  }
};

export const getUserProfile = async (req, res) => {
    try {
        const { userId } = req.params;
        const user = await User.findById(userId);
        const posts = await Post.getUserPosts(userId);
        if (!user) {
            return res.status(404).json({error: 'User not found'});
        }
        return res.status(200).json({user, posts});
    } catch (error) {
        console.error("Error fetching user profile:", error);
        res.status(500).json({error: 'Faild to fetch user profile'});
    }
}
