const express = require("express");
const studentData = require("../models/student.model.js");

const getAllstudents = async (req, res) => {
  try {
    const student = await studentData.find();
    if (!student) {
      res.send({
        status: 404,
        message: "Students Not Found",
      });
    }
    res.status(200).json({ student });
  } catch (err) {
    res.send({
      status: 500,
      error: err.message,
      message: "Error",
    });
  }
};
const getsinglestudent = async (req, res) => {
  try {
    const stdId = req.params.id;
    const singleStd = await studentData.findById(stdId);
    if (!singleStd) {
      res.send({
        status: 404,
        message: "Student Not Found",
      });
    }
    res.status(200).json({ singleStd });
  } catch (err) {
    res.send({
      status: 500,
      error: err.message,
      message: "Error",
    });
  }
};
const updateStudent = async (req, res) => {
  try {
    const stdId = req.params.id;
    const updateStd = await studentData.findByIdAndUpdate(stdId, req.body, {
      new: true,
    });
    if (!updateStd) {
      res.send({
        status: 404,
        message: "Student Not Found",
      });
    }
    res.status(200).json({ updateStd });
  } catch (err) {
    res.send({
      status: 500,
      error: err.message,
      message: "Error",
    });
  }
};
const deleteStudent = async (req, res) => {
  try {
    const stdId = req.params.id;
    const delstudent = await studentData.findByIdAndDelete(stdId);
    if (!delstudent) {
      res.send({
        status: 404,
        message: "Student Not Found",
      });
    }
    res.json({ message: "Student Deleted" });
  } catch (err) {
    res.send({
      status: 500,
      error: err.message,
      message: "Error",
    });
  }
};
module.exports = {
  getAllstudents,
  getsinglestudent,
  updateStudent,
  deleteStudent,
};
