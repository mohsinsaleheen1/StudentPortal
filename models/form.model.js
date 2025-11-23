const mongoose = require("mongoose");
const formSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  phone: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    unique: true,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  role: {
    type: String,
    enum: ["Admin", "Student", "Teacher"],
  },
});
const formData = mongoose.model("formData", formSchema);
module.exports = formData;
