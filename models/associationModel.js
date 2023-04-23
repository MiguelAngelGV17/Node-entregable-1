const Repair = require("./repair.model");
const User = require("./user.model");

const associationModel = () => {
  User.hasMany(Repair, { foreignKey: "userID" });
  Repair.belongsTo(User, { foreignKey: "userID" });
};

module.exports = { associationModel };
