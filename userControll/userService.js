const { models } = require("../models");
const bcrypt = require("bcryptjs");
module.exports = {
  getUser: async () => {
    const user = await models.user.findAll();
    return user;
  },
  createUser: async (data) => {
    data.password = bcrypt.hashSync(data.password, 10);
    const user = await models.user.create(data);

    return user;
  },
  deleteUser: async (value) => {
    // const { userId } = value;
    const deleted = await models.user.findByPk(value);

    if (deleted) {
      deleted.destroy();
      return "deleted successfully";
    }
    return null;
  },
};
