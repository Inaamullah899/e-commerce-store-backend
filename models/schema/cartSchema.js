const { DataTypes } = require("sequelize");
const database = require("../../common/dbConnection");
const cart = database.define(
  "cart",
  {
    cartID: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
  },

  { timestamps: true, paranoid: true }
);
module.exports = cart;
