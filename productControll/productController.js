const Express = require("express");
const productValidation = require("./productValidation");
const productService = require("./productService");
module.exports = {
  getProduct: async (req, res) => {
    const data = await productService.getProduct();
    res.send(data);
  },
  getProductByID: async (req, res) => {
    try {
      const { error, value } = productValidation.getProductByID.validate({
        productID: req.params.productID,
      });

      if (error) {
        return res.send(error.details[0].message);
      }

      const product = await productService.getProductByID(req.params.productID);
      if (!product) {
        return res.status(404).send("product not found");
      }
      res.send(product);
    } catch (err) {
      res.status(500).send({
        data: {},
        message: err.message,
        error: err.stack,
      });
    }
  },
  updateProduct: async (req, res, next) => {
    try {
      const { error, value } = productValidation.updateProduct.validate({
        productID: req.params.productID,
      });
      if (error) {
        return res.send(error.details[0].message);
      } else {
        const updateProduct = req.body;
        const updated = await productService.updateProduct(
          req.params.productID,
          updateProduct,
          value
        );
        res.send(updated);
      }
    } catch (error) {
      res.send(error);
    }
  },
  createProduct: async (req, res) => {
    try {
      const { error, value } = productValidation.createProduct.validate(
        req.body
      );

      if (error) {
        return res.send(error.details[0].message);
      }

      const data = await productService.createProduct(value);
      res.send(data);
    } catch (err) {
      res.status(500).send({
        data: {},
        message: err.message,
        error: err.stack,
      });
    }
  },
  deleteProduct: async (req, res) => {
    try {
      const { error, value } = productValidation.deleteProduct.validate({
        productID: req.params.productID,
      });

      if (error) {
        return res.send(error.details[0].message);
      }

      const deleted = await productService.deleteProduct(req.params.productID);
      if (!deleted) {
        return res.status(404).send("product not found");
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
