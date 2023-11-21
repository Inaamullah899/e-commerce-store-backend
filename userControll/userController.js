const Express = require("express");
const userValidation = require("./userValidation");
const userService = require("./userService");
module.exports = {
  getUsers: async (req, res) => {
    const data = await userService.getUser();
    res.send(data);
  },
  createUser: async (req, res) => {
    try {
      const { error, value } = userValidation.createUser.validate(req.body);

      if (error) {
        return res.send(error.details[0].message);
      }

      const data = await userService.createUser(value);
      res.send(data);
    } catch (err) {
      res.status(500).send({
        data: {},
        message: err.message,
        error: err.stack,
      });
    }
  },
  updateUser: async (req, res, next) => {
    try {
      const { error, value } = userValidation.updateUser.validate({
        userId: req.params.userId,
      });
      if (error) {
        return res.send(error.details[0].message);
      } else {
        const updateUser = req.body;
        const updated = await userService.updateUser(
          req.params.userId,
          updateUser,
          value
        );
        res.send(updated);
      }
    } catch (error) {
      res.send(error);
    }
  },
  deleteUser: async (req, res) => {
    try {
      const { error, value } = userValidation.deleteUser.validate({
        userId: req.params.userId,
      });

      if (error) {
        return res.send(error.details[0].message);
      }

      const deleted = await userService.deleteUser(req.params.userId);
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
