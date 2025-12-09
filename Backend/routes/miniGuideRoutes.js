import express from 'express';
import MiniGuide from '../models/miniGuideModel.js';

const router = express.Router();

router.get('/', async (req, res) => {
  try {
    const { type } = req.query;

    const whereClause = type && type !== 'all' ? { type } : {};

    const guides = await MiniGuide.findAll({
      where: whereClause,
      order: [['createdAt', 'DESC']],
    });

    res.json(guides);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Помилка сервера' });
  }
});

export default router;
