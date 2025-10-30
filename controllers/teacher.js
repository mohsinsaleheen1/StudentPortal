const express = require("express");
const bcrypt = require("bcrypt");
const teacherData = require("../models/teacher.model");
const teacherRegister = async (req, res) => {
  try {
    const {
      teacherFirstName,
      teacherLastName,
      teacherEmail,
      teacherPass,
      teacherID,
      teacherSubject,
      qualification,
      experience,
      phoneNumber,
      joiningDate,
      Address,
      gender,
    } = req.body;
    const teacher = await teacherData.find({ teacherEmail });
    
  } catch (err) {
    res.send({
      status: 500,
      err,
      message: "sorry! server is not responding",
    });
  }
};
const getTeachers = async (req, res) => {
  try {
  } catch (err) {}
};
const updateteacher = async (req, res) => {
  try {
  } catch (err) {}
};
const deleteteacher = async (req, res) => {
  try {
  } catch (err) {}
};
module.exports = { teacherRegister, getTeachers, updateteacher, deleteteacher };
