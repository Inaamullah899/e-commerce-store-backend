const { models } = require("../models");

module.exports = {
  getCategory: async () => {
    const category = await models.category.findAll({ include: models.product });
    return category;
  },
  createCategory: async (data) => {
    const category = await models.category.create(data);
    return category;
  },
};
