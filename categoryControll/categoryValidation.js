const joi = require("joi");
module.exports = {
  createCategory: joi.object().keys({
    categoryName: joi.string().required(),
  }),
};
