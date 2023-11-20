const { DataTypes } = require("sequelize");
const database = require("../../common/dbConnection");
const category = database.define(
  "category",
  {
    categoryID: {
      primaryKey: true,
      type: DataTypes.INTEGER,
      autoIncrement: true,
    },
    categoryName: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    timestamps: true,
    paranoid: true,
  }
);
module.exports = category;
