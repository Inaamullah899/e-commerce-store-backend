const joi = require("joi");
module.exports = {
  getCart: joi.object().keys({
    userID: joi.number(),
  }),
  addToCart: joi.object().keys({
    id: joi.number(),
    userID: joi.number(),
  }),
  updateCart: joi.object().keys({
    productID: joi.number(),
  }),
  deleteCart: joi.object().keys({
    cartID: joi.number().required(),
  }),
};
