const express = require("express");

const userController = require("../controllers/user.controllers");
const userMiddleware = require("./../middlerwares/user.middleware");

const router = express.Router();

router
  .route("/")
  .get(userController.findAll)
  .post(userMiddleware.validUser, userController.create);

router
  .route("/:id")
  .get(userMiddleware.validExistUser, userController.findOne)
  .patch(userMiddleware.validExistUser, userController.update)
  .delete(userMiddleware.validExistUser, userController.delete);

module.exports = router;
