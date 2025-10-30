const mongoose = require("mongoose");
const studentRegistrationSchema = mongoose.Schema({
  studentFirstName: {
    type: String,
    required: true,
  },
  studentLastName: {
    type: String,
    required: true,
  },
  studentEmail: {
    type: String,
    required: true,
    unique: true,
  },
  studentpassword: {
    type: String,
    required: true,
  },
  studentRegistrationNumber: {
    type: String,
    required: true,
  },
  studentClass: {
    type: String,
    required: true,
  },
  studentSection: {
    type: String,
    enum: ["A", "B", "C"],
  },
  studentDOB: {
    type: Date,
    required: true,
  },
  studentGender: {
    type: String,
    enum: ["Male", "Female", "Other"],
  },
  studentPhoneNumber: {
    type: String,
    required: true,
  },
  studentAddress: {
    type: String,
    required: true,
  },
  guardianName: {
    type: String,
    required: true,
  },
  guardianContact: {
    type: String,
    required: true,
  },
  role: {
    type: String,
    required: true,
    default: "Admin",
  },
});
const student = mongoose.model("student", studentRegistrationSchema);
module.exports = student;
