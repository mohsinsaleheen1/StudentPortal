const express = require("express");
const {
  addStudent,
  allStudent,
  singleStudent,
  deleteStudent,
  updateStudent,
} = require("../controllers/student.con");
const router = express.Router();
router.post("/addStudent", addStudent);
router.get("/allStudent", allStudent);
router.get("/singleStudent/:id", singleStudent);
router.delete("/deleteStudent/:id", deleteStudent);
router.put("/updateStudent/:id", updateStudent);
module.exports = router;
