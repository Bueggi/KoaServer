const userModel = require('../model/model.js');

const userController = {};

userController.getAllUsers = function (ctx) {
  ctx.body = userModel.all();
}

module.exports = userController;