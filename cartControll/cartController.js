const Express = require("express");
const cartValidation = require("./cartValidation");
const cartService = require("./cartService");
module.exports = {
  getCart: async (req, res) => {
    const cart = await cartService.getCart(req.body);
    res.send(cart);
  },
  addToCart: async (req, res) => {
    try {
      const { error, value } = cartValidation.addToCart.validate(req.body);

      if (error) {
        return res.send(error.details[0].message);
      }

      const data = await cartService.addToCart(value);

      res.send(data);
    } catch (err) {
      res.status(500).send({
        data: {},
        message: err.message,
        error: err.stack,
      });
    }
  },
  updateCart: async (req, res, next) => {
    try {
      const { error, value } = cartValidation.updateCart.validate({
        cartID: req.params.cartID,
      });
      if (error) {
        return res.send(error.details[0].message);
      } else {
        const updateCart = req.body;
        const updated = await cartService.updateCart(
          req.params.cartID,
          updateCart,
          value
        );
        res.send(updated);
      }
    } catch (error) {
      res.send(error);
    }
  },
  deleteCart: async (req, res) => {
    try {
      const { error, value } = cartValidation.deleteCart.validate({
        cartID: req.params.cartID,
      });

      if (error) {
        return res.send(error.details[0].message);
      }

      const deleted = await cartService.deleteCart(req.params.cartID);
      if (!deleted) {
        return res.status(404).send("User not found");
      }
      res.send(deleted);
    } catch (err) {
      res.status(500).send({
        data: {},
        message: err.message,
        error: err.stack,
      });
    }
  },
};
