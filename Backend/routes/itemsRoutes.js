import express from 'express';
import { getItems, createItem } from '../controllers/itemsController.js';
import { authMiddleware } from '../middleware/authMiddleware.js';

const router = express.Router();

router.get('/', authMiddleware, getItems);
router.post('/', authMiddleware, createItem);

export default router;
