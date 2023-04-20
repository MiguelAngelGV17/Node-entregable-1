const express = require("express");

// Controllers
const userController = require("../controllers/user.controllers");
const authController = require("../controllers/auth.controller");

// Middleware
const userMiddleware = require("../middlerwares/user.middleware");
const authMiddleware = require("../middlerwares/auth.middleware");
const validationMiddleware = require("../middlerwares/validations.middleware");

const router = express.Router();

router.use(authMiddleware.protect);

router.route("/").get(userController.findAll);

router
  .route("/:id")
  .get(userMiddleware.validExistUser, userController.findOne)
  .patch(
    userMiddleware.validExistUser,
    authMiddleware.protectAccountOwner,
    userController.update
  )
  .delete(
    userMiddleware.validExistUser,
    authMiddleware.protectAccountOwner,
    userController.delete
  );

module.exports = router;
