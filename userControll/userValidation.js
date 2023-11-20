const joi = require("joi");
module.exports = {
  createUser: joi.object().keys({
    userName: joi.string().required(),
    email: joi.string().email().required(),
    password: joi.string().required(),
  }),
  deleteUser: joi.object().keys({
    userId: joi.number(),
  }),
};
