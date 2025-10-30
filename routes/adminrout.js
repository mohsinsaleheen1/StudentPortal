const express = require("express");
const {
  getAllstudents,
  updateStudent,
  deleteStudent,
} = require("../controllers/student");
const {
  teacherRegister,
  updateteacher,
  deleteteacher,
} = require("../controllers/teacher");
const { studentregister } = require("../controllers/auth");
const router = express.Router();
// Student
router.post("/studentregister", studentregister);
router.get("/getallstudents", getAllstudents);
router.put("/:id", updateStudent);
router.delete("/:id", deleteStudent);

router.post("/teacherregister", teacherRegister);
router.put("/:id", updateteacher);

router.delete("/:id", deleteteacher);

module.exports = router;
