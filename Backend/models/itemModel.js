import { DataTypes } from 'sequelize';
import { sequelize } from '../config/db.js';

export const Item = sequelize.define('Item', {
  title: DataTypes.STRING,
  description: DataTypes.STRING,
});
