const bcrypt = require("bcrypt");
const saltRounds = 10;
const studentData = require("../models/student.model.js");
const teacherData = require("../models/teacher.model.js");
const studentregister = async (req, res) => {
  try {
    const {
      studentFirstName,
      studentLastName,
      userEmail,
      userPass,
      studentRegistrationNumber,
      studentClass,
      studentSection,
      studentDOB,
      studentGender,
      studentPhoneNumber,
      studentAddress,
      guardianName,
      guardianContact,
    } = req.body;
    const hashpassword = await bcrypt.hash(userPass, 10);
    const newStudent = {
      studentFirstName,
      studentLastName,
      userEmail,
      userPass: hashpassword,
      studentRegistrationNumber,
      studentClass,
      studentSection,
      studentDOB,
      studentGender,
      studentPhoneNumber,
      studentAddress,
      guardianName,
      guardianContact,
    };
    const result = new studentData(newStudent);
    const savedstd = await result.save();
    res.send({
      message: "Reistered successfully",
      result,
      status: 200,
    });
  } catch (err) {
    res.send({
      status: 500,
      err,
      message: "sorry! server is not responding",
    });
  }
};
const teacherRegister = async (req, res) => {
  try {
    const {
      teacherFirstName,
      teacherLastName,
      userEmail,
      userPass,
      teacherID,
      teacherSubject,
      qualification,
      experience,
      phoneNumber,
      joiningDate,
      Address,
      gender,
    } = req.body;
    const hashpassword = await bcrypt.hash(userPass, 10);
    const newteacher = {
      teacherFirstName,
      teacherLastName,
      userEmail,
      userPass: hashpassword,
      teacherID,
      teacherSubject,
      qualification,
      experience,
      phoneNumber,
      joiningDate,
      Address,
      gender,
    };
    const result = new studentData(newteacher);
    const savedstd = await result.save();
    res.send({
      message: "Reistered successfully",
      result,
      status: 200,
    });
  } catch (err) {
    res.send({
      status: 500,
      error: err.message,
      message: "Error",
    });
  }
};
const login = async (req, res) => {
  try {
    const { studentEmail, studentpassword } = req.body;
    const dbUser = await userModel.findOne({ studentEmail });
    const isMatch = await bcrypt.compare(
      studentpassword,
      dbUser.studentpassword
    );
    if (!isMatch)
      return res.status(400).json({ message: "Invalid Credentials" });
    res.send();
  } catch (err) {
    res.send({
      status: 500,
      err,
      message: "sorry! server is not responding",
    });
  }
};
module.exports = { studentregister, teacherRegister, login };
