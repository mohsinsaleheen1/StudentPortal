const express = require("express");
const bcrypt = require("bcrypt");
const teacherData = require("../models/teacher.model");
const getTeachers = async (req, res) => {
  try {
    const teacher = await teacherData.find();
    if (!teacher) {
      res.send({
        status: 404,
        message: "teacher Not Found",
      });
    }
    res.status(200).json({ teacher });
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
    const singletea = await teacherData.findById(teaId,req.body, {
      new: true,
    });
    if (!singletea) {
      res.send({
        status: 404,
        message: "Teacher Not Found",
      });
    }
    res.status(200).json({ singletea });
  } catch (err) {
    res.send({
      status: 500,
      error: err.message,
      message: "Error",
    });
  }
};
const deleteteacher = async (req, res) => {
  try {
    const stdtea = req.params.id;
    const delteach = await teacherData.findByIdAndDelete(stdtea);
    if (!delteach) {
      res.send({
        status: 404,
        message: "Teacher Not Found",
      });
    }
    res.json({ message: "Teacher Deleted" });
  } catch (err) {
    res.send({
      status: 500,
      error: err.message,
      message: "Error",
    });
  }
};
module.exports = { getTeachers, updateteacher, deleteteacher };
