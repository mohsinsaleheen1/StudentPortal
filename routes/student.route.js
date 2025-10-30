const express = require("express");
const router = express.Router();
const { getsinglestudent } = require("../controllers/student");
// Students Routes
router.get("/getsinglestudent", getsinglestudent);
module.exports = router;
