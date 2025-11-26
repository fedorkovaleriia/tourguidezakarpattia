import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import { connectDB, sequelize } from './config/db.js';
import authRoutes from './routes/authRoutes.js';
import itemsRoutes from './routes/itemsRoutes.js';
import favoritesRoutes from './routes/favoritesRoutes.js';

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());

connectDB();

app.use('/favorites', favoritesRoutes);
app.use('/api/auth', authRoutes);
app.use('/api/items', itemsRoutes);

sequelize
  .sync({ alter: true })
  .then(() => console.log('✅ Таблиці успішно синхронізовані з моделями'))
  .catch((err) => console.error('❌ Помилка синхронізації таблиць:', err));

app.listen(process.env.PORT, () =>
  console.log(` Сервер запущено на порті ${process.env.PORT}`)
);
