const mongoose = require("mongoose");
const studentform = new mongoose.Schema({
  sName: {
    type: String,
    required: true,
  },
  sFather: {
    type: String,
    required: true,
  },
  sClass: {
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
  sSection: {
    type: String,
    enum: ["A", "C"],
    required: true,
  },
  sDOB: {
    type: Date,
    default: Date.now,
    required: true,
  },
  sFatherphone: {
    type: String,
    required: true,
  },
  sAddress: {
    type: String,
    required: true,
  },
});
const studentData = mongoose.model("studentData", studentform);
module.exports = studentData;
