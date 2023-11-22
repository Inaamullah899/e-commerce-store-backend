const { models } = require("../models");

module.exports = {
  getCart: async ({ userID }) => {
    try {
      const cart = await models.cart.findOne({
        where: { userID: userID },
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
    const cart = await models.cart.create(data);
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
