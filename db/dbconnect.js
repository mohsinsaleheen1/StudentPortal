const mongoose = require("mongoose");
const dotenv = require("dotenv");
dotenv.config();
const connectDb = () => {
  mongoose
    .connect(process.env.dblink)
    .then(() => console.log("Database Connected"))
    .catch((err) => {
      console.error("Error connecting to MongoDB:", err);
    });
};
module.exports = { connectDb };
