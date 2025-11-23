const formData = require("../models/form.model.js");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const dotenv = require("dotenv");
dotenv.config();
const singup = async (req, res) => {
  try {
    const { name, phone, email, password, role } = req.body;
    const existingUser = await formData.find({ email });
    if (!existingUser)
      return res.status(400).json({ message: "UserEmail is already exists." });
    const hashpassword = await bcrypt.hash(password, 10);
    const user = new formData({
      name,
      phone,
      email,
      password: hashpassword,
      role,
    });
    const saveduser = await user.save();
    res.json(saveduser);
  } catch (err) {
    res.send({
      status: 500,
      message: "Server error",
      err,
    });
  }
};
const login = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await formData.findOne({ email });
    if (!user) return res.status(404).json({ message: "User Not Found" });
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch)
      return res.status(400).json({ message: "Invalid Credentials" });
    const token = jwt.sign(
      {
        userId: user._id,
        username: user.name,
      },
      process.env.JWT_SECRET,
      { expiresIn: "1h" }
    );
    res.json({ token });
  } catch (err) {
    res.send({
      status: 500,
      message: "Server error",
      err,
    });
  }
};
const logout = async (req, res) => {
  try {
    res.json({ message: "Logged Out Sucessfully" });
  } catch (err) {
    res.send({
      status: 500,
      message: "Server error",
      err,
    });
  }
};
module.exports = { singup, login, logout };
