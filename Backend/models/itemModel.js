import { DataTypes } from 'sequelize';
import { sequelize } from '../config/db.js';

const Item = sequelize.define('Item', {
  title: DataTypes.STRING,
  description: DataTypes.STRING,
  image:  DataTypes.STRING,
  lat: {
    type: DataTypes.FLOAT,
    allowNull: true
  },
  lng: {
    type: DataTypes.FLOAT,
    allowNull: true
  },
  type: {
  type: DataTypes.STRING,
  allowNull: false,
},

});
export default Item;