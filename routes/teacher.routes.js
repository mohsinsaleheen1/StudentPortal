const express = require("express");
const {
  addTeacher,
  allTeacher,
  singleTeacher,
  deleteTeacher,
} = require("../controllers/teacher.con");
const router = express.Router();
router.post("/addTeacher", addTeacher);
router.get("/allTeacher", allTeacher);
router.get("/singleTeacher/:id", singleTeacher);
router.delete("/deleteTeacher/:id", deleteTeacher);
module.exports = router;
