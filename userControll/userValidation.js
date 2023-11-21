const joi = require("joi");
module.exports = {
  createUser: joi.object().keys({
    userName: joi.string().required(),
    email: joi.string().email().required(),
    password: joi.string().required(),
  }),
  updateUser: joi.object().keys({
    userId: joi.number(),
    userName: joi.string(),
    email: joi.string().email(),
    password: joi.string(),
  }),
  deleteUser: joi.object().keys({
    userId: joi.number(),
  }),
};
