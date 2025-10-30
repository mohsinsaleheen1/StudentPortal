const bcrypt = require("bcrypt");
const saltRounds = 10;
const studentregister = async (req, res) => {
  try {
    const {
      studentFirstName,
      studentLastName,
      studentEmail,
      studentpassword,
      studentRegistrationNumber,
      studentClass,
      studentSection,
      studentDOF,
      studentGender,
      studentPhoneNumber,
      studentAddress,
      guardianName,
      guardianContact,
    } = req.body;
    const student = await studentData.find({ studentEmail });
    if (student) {
      res.send({
        status: 505,
        message: "user already exist",
      });
    }
    bcrypt.genSalt(saltRounds, function (err, salt) {
      bcrypt.hash(studentpassword, salt, function (err, hash) {
        const newStudent = {
          studentFirstName,
          studentLastName,
          studentEmail,
          studentpassword: hash,
          studentRegistrationNumber,
          studentClass,
          studentSection,
          studentDOF,
          studentGender,
          studentPhoneNumber,
          studentAddress,
          guardianName,
          guardianContact,
          role: admin,
        };
        const result = new studentData(newStudent).save();
        res.send({
          message: "Reistered successfully",
          result,
          status: 200,
        });
      });
    });
  } catch (err) {
    res.send({
      status: 500,
      err,
      message: "sorry! server is not responding",
    });
  }
};
module.exports = { studentregister };
