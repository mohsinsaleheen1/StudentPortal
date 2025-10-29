const express = require("express");
const router = express.Router();
const {
  studentregister,
  getAlltudents,
  updateStudent,
  deleteStudent,
} = require("../controllers/student");
const {
  teacherRegister,
  getTeachers,
  updateteacher,
  deleteteacher,
} = require("../controllers/teacher");
// Students Routes
router.post("/studentregister", studentregister);
router.get("/getallstudents", getAlltudents);
router.put("/updatestudent", updateStudent);
router.delete("/deletestudent", deleteStudent);
// Teacher Routes
router.post("/teacherregister", teacherRegister);
router.get("/getTeacher", getTeachers);
router.put("/updateteacher", updateteacher);
router.delete("/deleteteacher", deleteteacher);
module.exports = router;
