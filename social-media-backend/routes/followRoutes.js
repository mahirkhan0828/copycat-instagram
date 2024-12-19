import express from 'express';
import { followUser, unfollowUser, getFollowing } from '../controllers/followController.js';

const router = express.Router();

router.post('/follow', followUser);
router.post('/unfollow', unfollowUser);
router.get('/:userId/following', getFollowing);

export default router;