const Repair = require("../models/repair.model");

// Método GET global
exports.findAll = async (req, res) => {
  const repairs = await Repair.findAll({
    where: {
      status: "pending",
    },
  });

  res.status(200).json({
    status: "success",
    message: "The query has been done successfully",
    result: repairs.length,
    repairs,
  });
};

// Método GET individual/específico
exports.findOne = async (req, res) => {
  const { repair } = req;

  res.status(200).json({
    status: "success",
    message: "The query has been done successfully",
    repair,
  });
};

// Método POST
exports.create = async (req, res) => {
  const { id, date, status, userID } = req.body;

  const repair = await Repair.create({
    id,
    date,
    status,
    userID,
  });

  res.status(201).json({
    status: "success",
    message: "Repair information created successfully",
    repair,
  });
};

// Método PATCH
exports.update = async (req, res) => {
  const { repair } = req;

  const { id, date, status, userID } = req.body;

  await repair.update({
    status: "completed",
  });

  res.status(200).json({
    status: "success",
    message: "Repair information has been updated successfully",
  });
};

// Método DELETE
exports.delete = async (req, res) => {
  const { repair } = req;

  await repair.update({ status: "canceled" });

  res.json({
    message: "Repair information has been deleted",
  });
};
