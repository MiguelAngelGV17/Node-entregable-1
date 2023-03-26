const User = require("../models/user.model");

exports.validUser = (req, res, next) => {
  const { name, email, password, role } = req.body;
  if (!name) {
    return res.status(400).json({
      status: "Error",
      message: "The name user is required",
    });
  }
  if (!email) {
    return res.status(400).json({
      status: "Error",
      message: "The email address is required",
    });
  }
  if (!password) {
    return res.status(400).json({
      status: "Error",
      message: "The password is required",
    });
  }
  if (!role) {
    return res.status(400).json({
      status: "Error",
      message: "The role type is required",
    });
  }
  next();
};

exports.validExistUser = async (req, res, next) => {
  const { id } = req.params;

  const user = await User.findOne({
    where: {
      id,
      status: "available",
    },
  });
  if (!user) {
    return res.status(404).json({
      status: "Error",
      message: `User with id: ${id} wasn't found`,
    });
  }

  req.user = user;
  next();
};
