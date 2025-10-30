const express = require("express");
const { getAllstudents } = require("../controllers/student");
const { getTeachers } = require("../controllers/teacher");
const router = express.Router();
router.get("/getallstudents", getAllstudents);
// Teacher Routes
router.get("/:id", getTeachers);
module.exports = router;
