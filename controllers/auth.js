const bcrypt = require("bcrypt");
const studentData = require("../models/student.model.js");
const jwt = require("jsonwebtoken");
const dotenv = require("dotenv");
dotenv.config();
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
      role,
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
      role,
    };
    const result = new studentData(newStudent);
    const savedstd = await result.save();
    res.json(savedstd);
    res.send({
      message: "Reistered successfully",
      result,
      status: 200,
    });
  } catch (err) {
    res.send({
      status: 500,
      err:err,
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
      role,
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
      roles,
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
    const { userEmail, userPass, role } = req.body;
    const dbUser = await userModel.findOne({ userEmail });
    const isMatch = await bcrypt.compare(userPass, dbUser.userPass);
    if (!isMatch)
      return res.status(400).json({ message: "Invalid Credentials" });
    res.send();
    let token = jwt.sign(
      {
        email: dbUser.userEmail,
        role: dbUser.role,
      },
      process.env.JWTSECRET
    );
    res.send({
      status: 200,
      message: "user login successfully",
      token,
    });
  } catch (err) {
    res.send({
      status: 500,
      err,
      message: "sorry! server is not responding",
    });
  }
};
module.exports = { studentregister, teacherRegister, login };
