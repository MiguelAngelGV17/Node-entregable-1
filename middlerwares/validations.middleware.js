const { body, validationResult } = require("express-validator");

const validFields = (req, res, next) => {
  const errors = validationResult(req);

  if (!errors.isEmpty()) {
    return res.status(400).json({
      status: "error",
      errors: errors.mapped(),
    });
  }

  next();
};

exports.createUserValidation = [
  body("name").notEmpty().withMessage("Name field cannot be empty"),
  body("email")
    .notEmpty()
    .withMessage("Email field cannot be empty")
    .isEmail()
    .withMessage("Must be a valid email"),
  body("password")
    .notEmpty()
    .withMessage("Password field cannot be empty")
    .isLength({ min: 8 })
    .withMessage("Password must be at least 8 characters long"),
  validFields,
];

exports.updateUserValidation = [
  body("name").notEmpty().withMessage("Name field cannot be empty"),
  body("email")
    .notEmpty()
    .withMessage("Email field cannot be empty")
    .isEmail()
    .withMessage("Must be a valid email"),
  validFields,
];

exports.loginUserValidation = [
  body("email")
    .notEmpty()
    .withMessage("Email field cannot be empty")
    .isEmail()
    .withMessage("Must be a valid email"),
  body("password")
    .notEmpty()
    .withMessage("Password field cannot be empty")
    .isLength({ min: 8 })
    .withMessage("Password must be at least 8 characters long"),
  validFields,
];

exports.CreateRepairValidation = [
  body("date")
    .notEmpty()
    .withMessage("Date field cannot be empty")
    .isDate()
    .withMessage("Must be a valid date"),
  body("userID")
    .notEmpty()
    .withMessage("UserID field cannot be empty")
    .isNumeric()
    .withMessage("UserID must be a number"),
  validFields,
];
