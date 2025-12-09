import User  from '../models/userModel.js';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

export const register = async (req, res) => {
  try {
    const { username, email, password } = req.body;

    if (!username) return res.status(400).json({ message: "Ім'я обовʼязкове" });
    if (!email.includes('@'))
      return res.status(400).json({ message: 'Некоректний email' });
    if (!password || password.length < 8)
      return res.status(400).json({ message: 'Пароль має бути ≥ 8 символів' });

    const exists = await User.findOne({ where: { email } });
    if (exists)
      return res.status(400).json({ message: 'Користувач вже існує' });

    const hashed = await bcrypt.hash(password, 10);

    const newUser = await User.create({
      email,
      password: hashed,
      name: username,
    });

    const token = jwt.sign(
      { id: newUser.id, email: newUser.email, name: newUser.name },
      process.env.JWT_SECRET,
      { expiresIn: process.env.JWT_EXPIRES_IN || '7d' }
    );

    res.json({
      user: { id: newUser.id, email: newUser.email, name: newUser.name },
      accessToken: token,
    });
  } catch (error) {
    console.error('Помилка реєстрації:', error.message);
    res.status(500).json({ error: error.message });
  }
};
export const login = async (req, res) => {
  try {
    const { email, password } = req.body;

    if (!email || !password)
      return res.status(400).json({ message: 'Email і пароль обовʼязкові' });

    const user = await User.findOne({ where: { email } });
    if (!user) return res.status(400).json({ message: 'Невірні дані' });

    const match = await bcrypt.compare(password, user.password);
    if (!match) return res.status(400).json({ message: 'Невірні дані' });

    const token = jwt.sign(
      { id: user.id, email: user.email, name: user.name },
      process.env.JWT_SECRET,
      { expiresIn: process.env.JWT_EXPIRES_IN || '7d' }
    );

    res.json({
      user: { id: user.id, email: user.email, name: user.name },
      accessToken: token,
    });
  } catch (error) {
    console.error('Помилка логіну:', error.message);
    res.status(500).json({ error: error.message });
  }
};

export const logout = async (req, res) => {
  console.log(`Користувач ${req.user?.email} вийшов`);
  res.json({ message: 'Вихід успішний' });
};
