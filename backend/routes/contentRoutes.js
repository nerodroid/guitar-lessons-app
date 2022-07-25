import express from 'express';
import { addContentItem, getContent } from '../controllers/contentController.js';
import { authenticateToken } from '../middlewares/authMiddleware.js';

const router = express.Router();

router.post('/', authenticateToken, addContentItem)

router.get('/', authenticateToken, getContent)

export default router;