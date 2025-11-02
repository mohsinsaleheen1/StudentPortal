const mongoose = require("mongoose");
const teacherRegistrationSchema = mongoose.Schema({
  teacherFirstName: {
    type: String,
    required: true,
  },
  teacherLastName: {
    type: String,
    required: true,
  },
  teacherEmail: {
    type: String,
    required: true,
    unique: true,
  },
  teacherPass: {
    type: String,
    required: true,
  },
  teacherID: {
    type: String,
    required: true,
  },
  teacherSubject: {
    type: String,
    enum: [
      "English",
      "Urdu",
      "Math",
      "Islamiat",
      "Biology",
      "Chemistry",
      "Science",
      "Physics",
      "Social-Study",
      "Sindhi",
      "Computer",
    ],
  },
  qualification: {
    type: String,
    enum: ["FSC", "BSE", "MS", "PHD"],
  },
  experience: {
    type: Number,
    required: true,
  },
  phoneNumber: {
    type: String,
    required: true,
  },
  joiningDate: {
    type: Date,
    required: true,
  },
  Address: {
    type: String,
    required: true,
  },
  gender: {
    type: String,
    enum: ["Male", "Female", "Other"],
  },
  role: {
    type: String,
    enum:['admin','teacher','student']
  },
});
const teacherSchema = mongoose.model(
  "teacherSchema",
  teacherRegistrationSchema
);
module.exports = teacherSchema;
