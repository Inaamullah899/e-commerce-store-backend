const sequelize = require("sequelize");
const config = require("../config");
const database = new sequelize(config.db);
database
  .authenticate()
  .then(() => {
    console.log("db connected");
  })
  .catch((err) => {
    console.log(err);
  });
module.exports = database;
