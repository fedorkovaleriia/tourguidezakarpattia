import express from 'express';
import Favorite from '../models/favoriteModel.js';
import Item from '../models/itemModel.js';
import authMiddleware from '../middleware/authMiddleware.js';

const router = express.Router();

router.get('/', authMiddleware, async (req, res) => {
  try {
    const favs = await Favorite.findAll({ where: { userId: req.user.id }, include: Item });
    res.json(favs);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'помилка сервера' });
  }
});

router.post('/:itemId', authMiddleware, async (req, res) => {
  try {
    const { itemId } = req.params;
    const exists = await Favorite.findOne({ where: { userId: req.user.id, itemId } });
    if (exists) return res.status(400).json({ message: 'додано в улюблені' });

    const fav = await Favorite.create({ userId: req.user.id, itemId });
    res.json(fav);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'помилка сервера' });
  }
});

router.delete('/:itemId', authMiddleware, async (req, res) => {
  try {
    const { itemId } = req.params;
    await Favorite.destroy({ where: { userId: req.user.id, itemId } });
    res.json({ ok: true });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'помилка сервера' });
  }
});

export default router;
