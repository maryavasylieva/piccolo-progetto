const mongoose = require("mongoose");

const dbName = process.env.DB_NAME || "name";
const dbUser = process.env.DB_USER || "default-name";
const dbPass = process.env.DB_PASS || "************";
const host = process.env.DB_HOST || "localhost";

module.exports = async () => {
  try {
    await mongoose.connect(
      `mongodb+srv://${dbUser}:${dbPass}@${host}/${dbName}`,
      {
        useNewUrlParser: true,
        useUnifiedTopology: true
      }
    );
    console.log("connected to DB");
  } catch (e) {
    throw new Error(`error while starting DB: ${e}`);
  }
};
