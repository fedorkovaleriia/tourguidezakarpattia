import express from 'express';
import MiniGuide from '../models/miniGuideModel.js';

const router = express.Router();

// Отримати всі міні-гіди
router.get('/', async (req, res) => {
  try {
    const guides = await MiniGuide.findAll();
    res.json(guides);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Помилка сервера' });
  }
});

// Отримати обрані міні-гіди по id
router.get('/favorites', async (req, res) => {
  const { ids } = req.query;
  if (!ids) return res.status(400).json({ message: 'No ids provided' });

  const idArray = ids.split(',').map(id => Number(id));

  try {
    const guides = await MiniGuide.findAll({ where: { id: idArray } });
    res.json(guides);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Помилка сервера' });
  }
});

export default router;
