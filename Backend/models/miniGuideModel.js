import { DataTypes } from 'sequelize';
import { sequelize } from '../config/db.js';

const MiniGuide = sequelize.define('MiniGuide', {
  title: {
    type: DataTypes.STRING,
    allowNull: false
  },
  description: {
    type: DataTypes.STRING,
    allowNull: false
  },
  image: {
    type: DataTypes.STRING,
    allowNull: true
  },
  type: {
    type: DataTypes.STRING,
    allowNull: false
  }
});

export default MiniGuide;
