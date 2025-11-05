const express = require("express");
const {
  getAllstudents,
  updateStudent,
  deleteStudent,
} = require("../controllers/student");
const {
  updateteacher,
  deleteteacher,
  getTeachers,
} = require("../controllers/teacher");
const { studentregister, teacherRegister } = require("../controllers/auth");
const router = express.Router();
// Student
router.post("/studentregister", studentregister);
router.get("/getallstudents", getAllstudents);
router.put("/updateStudent/:id", updateStudent);
router.delete("/deleteStudent/:id", deleteStudent);

router.post("/teacherregister", teacherRegister);
router.get("/getallteacher",getTeachers)
router.put("/updateteacher/:id", updateteacher);
router.delete("/deleteteacher/:id", deleteteacher);

module.exports = router;
