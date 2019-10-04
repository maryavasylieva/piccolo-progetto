const express = require("express");
const bodyParser = require("body-parser");
const morgan = require("morgan");
const dotenv = require("dotenv");
dotenv.config();
const { todoRoutes } = require("./routes/routes");
const setupDB = require("./helpers/setupDB.js");

setupDB();

const app = express();

app
  .use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization");
    next();
  })
  .use(morgan("dev"))
  .use(bodyParser.urlencoded({ extended: false }))
  .use(bodyParser.json())
  .use("/todo", todoRoutes)
  .use((err, req, res, next) => {
    res.status(500).json(err);
  });

app.listen(process.env.PORT || 8080, () => {
  console.log(`server is running on ${process.env.PORT} port`);
});
