const express = require("express");

// Controllers
const repairController = require("../controllers/repairs.controllers.js");

// Middlewares
const repairMiddleware = require("./../middlerwares/repairs.middleware");
const authMiddleware = require("../middlerwares/auth.middleware.js");
const validation = require("../middlerwares/validations.middleware");

const router = express.Router();

router.post(
  "/",
  validation.CreateRepairValidation,
  repairMiddleware.validUserForRepair,
  repairController.create
);

router.use(authMiddleware.protect);

router.use(authMiddleware.restrictTo("employee"));

router.get("/", repairController.findAll);

router
  .route("/:id")
  .get(repairMiddleware.validExistRepair, repairController.findOne)
  .patch(repairMiddleware.validExistRepair, repairController.update)
  .delete(repairMiddleware.validExistRepair, repairController.delete);

module.exports = router;
