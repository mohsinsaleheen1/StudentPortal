const express = require("express");
const studentData = require("../models/student.model.js");

const getAlltudents = async (req, res) => {
  try {
    const student = await studentData.find();
  } catch (err) {}
};
const getsinglestudent = async (req, res) => {
  try {
  } catch (err) {}
};
const updateStudent = async (req, res) => {
  try {
  } catch (err) {}
};
const deleteStudent = async (req, res) => {
  try {
  } catch (err) {}
};
module.exports = {
  getAlltudents,
  getsinglestudent,
  updateStudent,
  deleteStudent,
};
