const express = require("express");
const morgan = require("morgan");

const userRoutes = require("./routes/user.routes");
const repairRoutes = require("./routes/repairs.routes");

const app = express();

app.use(morgan("dev"));

app.use(express.json());

app.use("/api/v1/users", userRoutes);
app.use("/api/v1/repairs", repairRoutes);

module.exports = app;
