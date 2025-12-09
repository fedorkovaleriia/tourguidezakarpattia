import express from 'express';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';
import User from '../models/userModel.js';

dotenv.config();
export const router = express.Router();
router.post('/register', async (req, res) => {
  try {
    const { username, email, password, passwordConfirm } = req.body;
    if (!username || !email || !password || !passwordConfirm) {
      return res.status(400).json({ message: 'Заповніть усі поля' });
    }

    if (password !== passwordConfirm) {
      return res.status(400).json({ message: 'паролі не співпадаюють' });
    }

    const existing = await User.findOne({ where: { username } });
    if (existing) return res.status(400).json({ message: 'такий користувач уже існує' });

    const existingEmail = await User.findOne({ where: { email } });
    if (existingEmail) return res.status(400).json({ message: 'Такий е-мейл вже існує' });

    const hash = await bcrypt.hash(password, 10);
    const user = await User.create({ username, email, password: hash });

    const token = jwt.sign({ id: user.id, username: user.username }, process.env.JWT_SECRET, { expiresIn: '7d' });
    res.json({ user: { id: user.id, username: user.username, email: user.email }, token });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'помилка сервера' });
  }
});


router.post('/login', async (req, res) => {
  try {
    const { username, password } = req.body;
    if (!username || !password) return res.status(400).json({ message: 'Заповніть усі поля' });

    const user = await User.findOne({ where: { username } });
    if (!user) return res.status(401).json({ message: 'Невірні дані для входу' });

    const valid = await bcrypt.compare(password, user.password);
    if (!valid) return res.status(401).json({ message: 'Невірні дані для входу' });

    const token = jwt.sign({ id: user.id, username: user.username }, process.env.JWT_SECRET, { expiresIn: '7d' });
    res.json({ token, user: { id: user.id, username: user.username, email: user.email } });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Помилка сервера' });
  }
});
export default router;
