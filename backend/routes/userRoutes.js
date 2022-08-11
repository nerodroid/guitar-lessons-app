import express from 'express';
import { addUser, getUsers, getUser } from '../controllers/userController.js';
import { authenticateToken } from '../middlewares/authMiddleware.js';

const router = express.Router();

router.get('/', authenticateToken, getUsers)

router.get('/:username', authenticateToken, getUser)

router.post('/', addUser)

export default router;