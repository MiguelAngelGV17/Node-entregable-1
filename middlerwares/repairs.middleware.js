const Repair = require("./../models/repair.model");

exports.validRepair = (req, res, next) => {
  const { date, userID } = req.body;
  if (!date) {
    return res.status(404).json({
      status: "Error",
      message: "date wasn't found",
    });
  }
  if (!userID) {
    return res.status(404).json({
      status: "Error",
      message: "UserID wasn't found",
    });
  }
  next();
};

exports.validExistRepair = async (req, res, next) => {
  const { id } = req.params;

  const repair = await Repair.findOne({
    where: {
      id,
      // status: "pending" && "completed",
      status: "pending",
    },
  });
  if (!repair) {
    return res.status(404).json({
      status: "Error",
      message: `Repair with id: ${id} not found`,
    });
  }

  req.repair = repair;
  next();
};

//id, date, status, userId
