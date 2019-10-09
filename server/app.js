const express = require("express");
const bodyParser = require("body-parser");
const morgan = require("morgan");
const dotenv = require("dotenv");
const cors = require("cors");
dotenv.config();
const { todoRoutes, taskRoutes } = require("./routes/routes");
const setupDB = require("./helpers/setupDB.js");

setupDB();

const app = express();

app
  .use(morgan("dev"))
  .use(bodyParser.urlencoded({ extended: false }))
  .use(bodyParser.json())
  .use(cors())
  .use("/todo", todoRoutes)
  .use("/task", taskRoutes)
  .use((err, req, res, next) => {
    res.status(500).json(err);
  });

app.listen(process.env.PORT || 8080, () => {
  console.log(`server is running on ${process.env.PORT} port`);
});
