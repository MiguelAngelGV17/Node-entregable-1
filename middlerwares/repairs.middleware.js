const AppError = require("../utils/appError");
const catchAsync = require("../utils/catchAsync");
const Repair = require("./../models/repair.model");
const User = require("./../models/user.model");

exports.validExistRepair = catchAsync(async (req, res, next) => {
  const { id } = req.params;

  const repair = await Repair.findOne({
    where: {
      id,
      status: "pending",
    },
    attributes: { exclude: ["date", "createdAt", "updatedAt"] },
    include: [
      {
        model: User,
        attributes: {
          exclude: ["id", "password", "status", "createdAt", "updatedAt"],
        },
      },
    ],
  });
  if (!repair) {
    next(new AppError(`Repair with id: ${id} not found`, 404));
  }

  req.repair = repair;
  next();
});
