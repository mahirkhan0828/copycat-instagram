import axios from "axios";

const API_URL = "http://localhost:5001/api";

export const registerUser = async (userData) => {
  const response = await axios.post(`${API_URL}/users/register`, userData);
  return response.data;
};

export const loginUser = async (userData) => {
  const response = await axios.post(`${API_URL}/users/login`, userData);
  return response.data;
};

export const fetchUserFeed = async (userId) => {
  const response = await axios.get(`${API_URL}/posts/feed`, {
    params: { userId },
  });
  return response.data;
};

export const createPost = async (postData) => {
  const response = await axios.post(`${API_URL}/posts`, postData);
  return response.data;
};

export const fetchUserPosts = async (userId) => {
  const response = await axios.get(`${API_URL}/posts/my-posts`, {
    params: { userId },
  });
  return response.data;
};

export const unfollowUser = async (data) => {
    const response = await axios.post(`${API_URL}/follows/unfollow`, data);
    return response.data;
  };
  
  export const followUser = async (data) => {
    const response = await axios.post(`${API_URL}/follows/follow`, data);
    return response.data;
  };

export const fetchFollowing = async (userId) => {
  const response = await axios.get(`${API_URL}/follows/${userId}/following`);
  return response.data;
};

export const fetchFollowers = async (userId) => {
  const response = await axios.get(`${API_URL}/follows/${userId}/followers`);
  return response.data;
};

export const fetchUserProfile = async (userId) => {
    const response = await axios.get(`${API_URL}/users/${userId}`);
    return response.data;
}