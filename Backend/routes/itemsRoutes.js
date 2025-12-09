import express from 'express';
import Item from '../models/itemModel.js';
import authMiddleware from '../middleware/authMiddleware.js';

const router = express.Router();

router.get('/', async (req, res) => {
  try {
    const { type } = req.query;

    const where = {};

    if (type && type !== 'all') {
      where.type = type;
    }

    const items = await Item.findAll({
      where,
      order: [['createdAt', 'DESC']]
    });

    res.json(items);

  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Помилка сервера' });
  }
});

router.get('/:id', async (req, res) => {
  try {
    const item = await Item.findByPk(req.params.id);

    if (!item) {
      return res.status(404).json({ message: 'не знайдено' });
    }

    res.json(item);

  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Помилка сервера' });
  }
});

router.post('/', authMiddleware, async (req, res) => {
  try {
    const { title, description, image, type } = req.body;

    if (!title || !description || !type) {
      return res.status(400).json({ message: 'Заповніть всі обовʼязкові поля' });
    }

    const item = await Item.create({
      title,
      description,
      image,
      type,
    });

    res.json(item);

  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Помилка сервера' });
  }
});

export default router;
