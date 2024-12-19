import express from 'express';
import { createPost, getUserFeed, getUserPosts } from '../controllers/postController.js';

const router = express.Router();

router.post('/', createPost);

router.get('/feed', getUserFeed);

router.get('/my-posts', getUserPosts);

export default router;