import { Follow } from "../models/followModel.js";

export const followUser = async (req, res) => {
  try {
    const { followerId, followingId } = req.body;

    if (followerId === followingId) {
      return res.status(400).json({ error: "Can't follow yourself" });
    }

    await Follow.create(followerId, followingId);
    res.status(200).json({ message: "Follow successful" });
  } catch (error) {
    console.error("Error following user:", error);
    res.status(500).json({ error: "Failed to follow user" });
  }
};

export const unfollowUser = async (req, res) => {
  try {
    const { followerId, followingId } = req.body;
    await Follow.delete(followerId, followingId);
    res.status(200).json({ message: "User unfollowed successfully" });
  } catch (error) {
    console.error("Error unfollowing user:", error);
    res.status(500).json({ error: "Failed to unfollow user" });
  }
};

export const getFollowing = async (req, res) => {
  try {
    const { userId } = req.params;
    const following = await Follow.getFollowing(userId);
    res.status(200).json(following);
  } catch (error) {
    console.error("Error fecthing following list:", error);
    res.status(500).json({ error: "Failed to fetch following list" });
  }
};

export const getFollowers = async (req, res) => {
    try {
      const { userId } = req.params;
      const followers = await Follow.getFollowers(userId);
      res.status(200).json(followers);
    } catch (error) {
      console.error('Error fetching followers list:', error);
      res.status(500).json({ error: 'Failed to fetch followers list' });
    }
  };