const Express = require("express");
const categoryValidation = require("./categoryValidation");
const categoryService = require("./categoryService");
module.exports = {
  getCategory: async (req, res) => {
    const data = await categoryService.getCategory();
    res.send(data);
  },
  createCategory: async (req, res) => {
    try {
      const { error, value } = categoryValidation.createCategory.validate(
        req.body
      );

      if (error) {
        return res.send(error.details[0].message);
      }

      const data = await categoryService.createCategory(value);
      res.send(data);
    } catch (err) {
      res.status(500).send({
        data: {},
        message: err.message,
        error: err.stack,
      });
    }
  },
};
