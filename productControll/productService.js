const { models } = require("../models");

module.exports = {
  getProduct: async () => {
    const product = await models.product.findAll();
    return product;
  },
  getProductByID: async (value) => {
    const productByID = await models.product.findByPk(value);
    return productByID;
  },
  createProduct: async (data) => {
    const product = await models.product.create(data);

    return product;
  },
  updateProduct: async (productID, updateProductData) => {
    const product = await models.product.findByPk(productID);
    if (product) {
      product.update(updateProductData);
    }
    return product;
  },
  deleteProduct: async (value) => {
    const deleted = await models.product.findByPk(value);

    if (deleted) {
      deleted.destroy();
      return "deleted successfully";
    }
    return null;
  },
};
