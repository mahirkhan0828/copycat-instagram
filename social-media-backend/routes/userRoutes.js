import express from 'express';
import { register, login, getUserProfile } from '../controllers/userController.js';

const router = express.Router();

router.post('/register', register);
router.post('/login', login);
router.get('/:userId', getUserProfile);

export default router;