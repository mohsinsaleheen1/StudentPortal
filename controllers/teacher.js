const express = require("express");
const bcrypt = require("bcrypt");
const teacherData = require("../models/teacher.model");
const getTeachers = async (req, res) => {
  try {
    const teacher = await studentData.find();
    if (!teacher) {
      res.send({
        status: 404,
        message: "teacher Not Found",
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
const updateteacher = async (req, res) => {
  try {
    const teaId = req.params.id;
    const singletea = await studentData.findById(teaId);
    if (!singletea) {
      res.send({
        status: 404,
        message: "Teacher Not Found",
      });
    }
    res.status(200).json({ singleStd });
  } catch (err) {}
};
const deleteteacher = async (req, res) => {
  try {
    const stdtea = req.params.id;
    const delteach = await studentData.findByIdAndDelete(stdtea);
    if (!delteach) {
      res.send({
        status: 404,
        message: "Teacher Not Found",
      });
    }
    res.json({ message: "Teacher Deleted" });
  } catch (err) {}
};
module.exports = { getTeachers, updateteacher, deleteteacher };
