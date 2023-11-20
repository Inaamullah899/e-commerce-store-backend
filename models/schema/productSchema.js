const { DataTypes } = require("sequelize");
const database = require("../../common/dbConnection");
const product = database.define(
  "product",
  {
    productID: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },

    productName: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    description: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    price: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  },
  { timestamps: true, paranoid: true }
);
module.exports = product;
