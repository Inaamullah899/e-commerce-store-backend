const { models } = require("../models");

module.exports = {
  getCart: async (userID) => {
    console.log("Service Debug", userID);
    try {
      const cart = await models.cart.findOne({
        where: userID,
        include: [
          {
            model: models.product,
            through: models.product_cart,
          },
        ],
      });
      return cart;
    } catch (error) {
      console.log(error);
    }
  },
  addToCart: async (data) => {
    // console.log(data);
    const cart = await models.cart.create(data.userID);
    const product = await models.product.findByPk(data.id);
    await cart.addProduct(data.product);
    return cart;
  },
  updatCart: async (userId, updateCartData) => {
    const cart = await models.user.findByPk(userId);
    if (cart) {
      cart.update(updateCartData);
    }
    return cart;
  },
  deleteCart: async (value) => {
    // const { userId } = value;
    const deleted = await models.cart.findByPk(value);

    if (deleted) {
      deleted.destroy();
      return "deleted successfully";
    }
    return null;
  },
};
