const express = require("express");
const router = express.Router();
const { getsinglestudent } = require("../controllers/student");
// Students Routes
router.get("/getsinglestudent/:id", getsinglestudent);
module.exports = router;
