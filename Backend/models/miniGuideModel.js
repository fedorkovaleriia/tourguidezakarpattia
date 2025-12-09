import { DataTypes } from "sequelize";
import { sequelize } from "../config/db.js";

const MiniGuide = sequelize.define("MiniGuide", {
  title: {
    type: DataTypes.STRING,
    allowNull: false
  },
  description: {
    type: DataTypes.TEXT
  },
  image: {
    type: DataTypes.STRING
  },
  type: {
    type: DataTypes.STRING 
  }
});

export default MiniGuide;
