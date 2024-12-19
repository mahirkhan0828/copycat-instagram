import { Post } from "../models/postModel.js";

export const createPost = async (req, res) => {
  try {
    const { userId, content, image } = req.body;

    if (!userId || !content) {
      return res
        .status(400)
        .json({ error: "User ID and content are required" });
    }

    const newPost = await Post.create(userId, content, image);
    res.status(201).json(newPost);
  } catch (error) {
    console.error("Error creating post:", error);
    res.status(500).json({ error: "Failed to create post" });
  }
};

export const getUserFeed = async (req, res) => {
  try {
    const { userId } = req.query; // Extract from query params
    if (!userId) {
      return res.status(400).json({ error: "User ID is required" });
    }

    const feed = await Post.getUserFeed(userId);
    res.status(200).json(feed);
  } catch (error) {
    console.error("Failed to fetch user feed:", error);
    res.status(500).json({ error: "Failed to fetch user feed" });
  }
};

export const getUserPosts = async (req, res) => {
  try {
    const { userId } = req.query;

    if (!userId) {
      return res.status(400).json({ error: "User ID is required" });
    }

    const posts = await Post.getUserPosts(userId);
    res.status(200).json(posts);
  } catch (error) {
    console.error("Error fetching user posts: ", error);
    res.status(500).json({ error: "Failed to fetch user posts" });
  }
};
