import express from 'express';
import Item from '../models/itemModel.js';

const router = express.Router();

router.get('/', async (req, res) => {
  try {
    const { ids } = req.query;
    if (!ids) return res.status(400).json({ message: 'No ids provided' });

    // trim() на всякий випадок
    const idArray = ids.split(',').map(id => Number(id.trim()));

    const items = await Item.findAll({
      where: { id: idArray },
      order: [['createdAt', 'DESC']]
    });

    res.json(items);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Помилка сервера' });
  }
});

export default router;
