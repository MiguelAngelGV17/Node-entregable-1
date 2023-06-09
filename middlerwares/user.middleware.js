const Repair = require("../models/repair.model");
const User = require("../models/user.model");
const AppError = require("../utils/appError");

exports.validExistUser = async (req, res, next) => {
  const { id } = req.params;

  const user = await User.findOne({
    where: {
      id,
      status: "available",
    },
    attributes: { exclude: ["password", "createdAt", "updatedAt"] },
    include: [
      {
        model: Repair,
        attributes: { exclude: ["createdAt", "updatedAt"] },
      },
    ],
  });
  if (!user) {
    return next(new AppError(`User with id: ${id} wasn't found`, 404));
  }

  req.user = user;
  next();
};
