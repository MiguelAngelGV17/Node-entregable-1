require("dotenv").config();
const app = require("./app");
const { db } = require("./database/db");
const { associationModel } = require("./models/associationModel");

db.authenticate()
  .then(() => console.log("Database Authenticated"))
  .catch((err) => console.log(err));

associationModel();

db.sync()
  .then(() => console.log("Database Synced", new Date()))
  .catch((err) => console.log(err));

const port = +process.env.PORT || 4000;
app.listen(port, () => {
  console.log(`App running on port ${port}`);
});
