const express = require("express");
const bcrypt = require("bcrypt");
const studentregister = async (req, res) => {
  try {
    const {
      studentFirstName,
      studentLastName,
      studentEmail,
      studentpassword,
      studentRegistrationNumber,
      studentClass,
      studentSection,
      studentDOF,
      StudentGender,
      studentPhoneNumber,
      studentAddress,
      guardianName,
      guardianContact,
    } = req.body;
  } catch (err) {}
};
const getAlltudents = async (req, res) => {
  try {
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
  studentregister,
  getAlltudents,
  getsinglestudent,
  updateStudent,
  deleteStudent,
};
