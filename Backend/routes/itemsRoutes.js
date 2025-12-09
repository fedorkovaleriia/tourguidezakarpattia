import express from 'express';
import Item from '../models/itemModel.js';
import authMiddleware from '../middleware/authMiddleware.js';
import { Op } from 'sequelize';

const router = express.Router();

router.get('/', async (req, res) => {
  try {
    const { type } = req.query;

    const where = {};

    if (type) {
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
    if (!item) return res.status(404).json({ message: 'не знайдено' });
    res.json(item);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Помилка сервера' });
  }
});

router.post('/', authMiddleware, async (req, res) => {
  try {
    const { title, description, price, image, duration, type } = req.body;

    if (!title || !description || !price || !type) {
      return res.status(400).json({ message: 'Заповніть всі поля' });
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
router.get('/favorites', async (req, res) => {
  try {
    const { ids } = req.query; // ids="1,3,5"
    if (!ids) return res.status(400).json({ message: 'No ids provided' });

    const idArray = ids.split(',').map(id => Number(id));

    const items = await Item.findAll({
      where: {
        id: idArray
      },
      order: [['createdAt', 'DESC']]
    });

    res.json(items);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Помилка сервера' });
  }
});

export default router;
