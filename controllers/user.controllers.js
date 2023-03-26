const User = require("../models/user.model");

// Método GET global
exports.findAll = async (req, res) => {
  const users = await User.findAll({
    where: {
      status: "available",
    },
  });

  res.status(200).json({
    status: "success",
    message: "The query has been done successfully",
    result: users.length,
    users,
  });
};

// Método GET individual/específico
exports.findOne = async (req, res) => {
  const { user } = req;

  res.status(200).json({
    status: "success",
    message: "The query has been done successfully",
    user,
  });
};

// Método POST
exports.create = async (req, res) => {
  const { id, name, email, password, role, status } = req.body;

  const user = await User.create({
    id: id,
    name: name,
    email: email,
    password: password,
    role: role,
    status: status,
  });

  res.status(201).json({
    status: "success",
    message: "User created successfully",
    user,
  });
};

// Método PATCH
exports.update = async (req, res) => {
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
};

// Método DELETE
exports.delete = async (req, res) => {
  const { user } = req;

  await user.update({ status: "unusable" });

  res.json({
    message: "The user has been deleted",
  });
};
