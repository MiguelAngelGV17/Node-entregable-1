const Repair = require("../models/repair.model");
const User = require("../models/user.model");
const catchAsync = require("../utils/catchAsync");

// Método GET global
exports.findAll = catchAsync(async (req, res) => {
  const users = await User.findAll({
    where: {
      status: "available",
    },
    attributes: { exclude: ["status", "password", "createdAt", "updatedAt"] },
    include: [
      {
        model: Repair,
        attributes: { exclude: ["createdAt", "updatedAt"] },
      },
    ],
  });

  res.status(200).json({
    status: "success",
    message: "The query has been done successfully",
    result: users.length,
    users,
  });
});

// Método GET individual/específico
exports.findOne = catchAsync(async (req, res) => {
  const { user } = req;

  res.status(200).json({
    status: "success",
    message: "The query has been done successfully",
    user,
  });
});

// Método PATCH
exports.update = catchAsync(async (req, res) => {
  const { user } = req;
  const { name, email } = req.body;

  await user.update({
    name,
    email,
  });

  res.status(200).json({
    status: "success",
    message: "User information has been updated  successfully",
  });
});

// Método DELETE
exports.delete = async (req, res) => {
  const { user } = req;

  await user.update({ status: "unusable" });

  res.json({
    message: "The user has been deleted",
  });
};
