import { Sequelize } from 'sequelize';

export const sequelize = new Sequelize(process.env.DATABASE_URL, {
  dialect: 'mysql',
  logging: false,
});

export async function connectDB() {
  try {
    await sequelize.authenticate();
    console.log('✅ DB connected');
    await sequelize.sync();
  } catch (error) {
    console.error('❌ DB error:', error);
  }
}
