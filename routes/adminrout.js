const express = require("express");
const {
  getAlltudents,
  updateStudent,
  deleteStudent,
} = require("../controllers/student");
const {
  teacherRegister,
  updateteacher,
  deleteteacher,
} = require("../controllers/teacher");
const { studentregister } = require("../models/auth");
const router = express.Router();
// Student
router.post("/studentregister", studentregister);
router.get("/getallstudents", getAlltudents);
router.put("/updatestudent", updateStudent);
router.delete("/deletestudent", deleteStudent);

router.post("/teacherregister", teacherRegister);
router.put("/updateteacher", updateteacher);

router.delete("/deleteteacher", deleteteacher);

module.exports = router;
