const config = require("../common/dbConnection");
const cart = require("./schema/cartSchema");
const category = require("./schema/categorySchema");
const product = require("./schema/productSchema");
const user = require("./schema/userSchema");

user.hasOne(cart, {
  onDelete: "CASCADE",
  foreignKey: {
    name: "userID",
    allowNull: false,
    unique: "true",
  },
});
cart.belongsTo(user, {
  onDelete: "CASCADE",
  foreignKey: {
    name: "userID",
    allowNull: false,
    unique: "true",
  },
});
category.hasMany(product, {
  onDelete: "CASCADE",
  foreignKey: {
    name: "categoryID",
    allowNull: "false",
    unique: "true",
  },
});
product.belongsTo(category, {
  onDelete: "CASCADE",
  foreignKey: {
    name: "categoryID",
    allowNull: "false",
    unique: "true",
  },
});
product.belongsToMany(cart, {
  through: "product-category",
  foreignKey: "productID",
});
cart.belongsToMany(product, {
  through: "product-category",
  foreignKey: "cartID",
});
const models = config.models;

module.exports = { config, models };
