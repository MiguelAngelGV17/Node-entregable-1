const AppError = require("../utils/appError");
const Repair = require("./../models/repair.model");
const User = require("./../models/user.model");

exports.validUserForRepair = async (req, res, next) => {
  const { userID } = req.body;

  const user = await User.findOne({
    where: {
      id: userID,
    },
  });
  if (!user) {
    return next(new AppError("UserID wasn't found on server", 404));
  }
  next();
};

exports.validExistRepair = async (req, res, next) => {
  const { id } = req.params;

  const repair = await Repair.findOne({
    where: {
      id,
      status: "pending",
    },
  });
  if (!repair) {
    next(new AppError(`Repair with id: ${id} not found`, 404));
  }

  req.repair = repair;
  next();
};

//id, date, status, userId
