const express = require("express");

// Middlewares
const validations = require("../middlerwares/validations.middleware");
const authMiddleware = require("../middlerwares/auth.middleware");

// Controllers
const authController = require("../controllers/auth.controller");

const router = express.Router();

router.post("/signup", validations.createUserValidation, authController.signUp);

router.post("/login", validations.loginUserValidation, authController.login);

module.exports = router;
