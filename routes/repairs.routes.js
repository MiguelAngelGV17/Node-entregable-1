const express = require("express");

const repairController = require("../controllers/repairs.controllers.js");
const repairMiddleware = require("./../middlerwares/repairs.middleware");

const router = express.Router();

router
  .route("/")
  .get(repairController.findAll)
  .post(repairMiddleware.validRepair, repairController.create);

router
  .route("/:id")
  .get(repairMiddleware.validExistRepair, repairController.findOne)
  .patch(repairMiddleware.validExistRepair, repairController.update)
  .delete(repairMiddleware.validExistRepair, repairController.delete);

module.exports = router;
