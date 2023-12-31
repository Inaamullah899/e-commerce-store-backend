const joi = require("joi");
module.exports = {
  createProduct: joi.object().keys({
    productName: joi.string().required(),
    description: joi.string().required(),
    price: joi.number().required(),
    categoryID: joi.number().required(),
  }),
  getProductByID: joi.object().keys({
    productID: joi.number(),
  }),
  updateProduct: joi.object().keys({
    productID: joi.number(),
    productName: joi.string(),
    description: joi.string(),
    price: joi.number(),
    categoryID: joi.number(),
  }),
  deleteProduct: joi.object().keys({
    productID: joi.number(),
  }),
};
