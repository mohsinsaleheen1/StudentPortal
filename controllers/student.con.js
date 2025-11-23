const studentData = require("../models/student.model.js");
const addStudent = async (req, res) => {
  try {
    const { sName, sFather, sClass, sSection, sDOB, sFatherphone, sAddress } =
      req.body;
    
  } catch (err) {
    res.send({
      status: 500,
      message: "Server error",
      err,
    });
  }
};
const allStudent = async (req, res) => {
  try {
  } catch (err) {
    res.send({
      status: 500,
      message: "Server error",
      err,
    });
  }
};
const singleStudent = async (req, res) => {
  try {
  } catch (err) {
    res.send({
      status: 500,
      message: "Server error",
      err,
    });
  }
};
const deleteStudent = async (req, res) => {
  try {
  } catch (err) {
    res.send({
      status: 500,
      message: "Server error",
      err,
    });
  }
};
const updateStudent = async (req, res) => {
  try {
  } catch (err) {
    res.send({
      status: 500,
      message: "Server error",
      err,
    });
  }
};
module.exports = {
  addStudent,
  allStudent,
  singleStudent,
  deleteStudent,
  updateStudent,
};
