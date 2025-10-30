const express = require("express");
const { getAlltudents } = require("../controllers/student");
const { getTeachers } = require("../controllers/teacher");
const router = express.Router();
router.get("/getallstudents", getAlltudents);
// Teacher Routes
router.get("/getTeacher", getTeachers);
module.exports = router;
