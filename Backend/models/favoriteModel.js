import { DataTypes } from 'sequelize';
import { sequelize } from '../config/db.js';
import User from './userModel.js';
import Item from './itemModel.js';

const Favorite = sequelize.define('Favorite', {
  userId: { type: DataTypes.INTEGER, allowNull: false },
  itemId: { type: DataTypes.INTEGER, allowNull: false }
});

User.hasMany(Favorite, { foreignKey: 'userId', onDelete: 'CASCADE' });
Favorite.belongsTo(User, { foreignKey: 'userId' });

Item.hasMany(Favorite, { foreignKey: 'itemId', onDelete: 'CASCADE' });
Favorite.belongsTo(Item, { foreignKey: 'itemId' });
export default Favorite;