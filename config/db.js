const mongoose = require("mongoose");
const dotenv = require("dotenv");
dotenv.config();
const dbConnect = () => {
  mongoose
    .connect(process.env.DBURL)
    .then(() => {
      console.log(`Database is Connected`);
    })
    .catch((err) => {
      console.log(`Database is Can't Connected`, err);
    });
};
module.exports = dbConnect;
