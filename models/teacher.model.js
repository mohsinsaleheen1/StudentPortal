const mongoose = require("mongoose");
const teacherform = new mongoose.Schema({
  tName: {
    type: String,
    required: true,
  },
  tClass: {
    type: String,
    enum: [
      "1st",
      "2nd",
      "3rd",
      "4th",
      "5th",
      "6th",
      "7th",
      "8th",
      "9th",
      "10th",
    ],
    required: true,
  },
  tSection: {
    type: String,
    enum: ["A", "C"],
    required: true,
  },
  joiningDate: {
    type: Date,
    default: Date.now,
  },
  tphone: {
    type: String,
    required: true,
  },
  tAddress: {
    type: String,
    required: true,
  },
});
const teacherData = mongoose.model("teacherData", teacherform);
module.exports = teacherData;
