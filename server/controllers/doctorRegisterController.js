const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const doctorModel = require("../models/doctorModel");
const userModel = require("../models/userModel");
const registerController = async (req, res) => {
  try {
    const existingUser = await doctorModel.findOne({ email: req.body.email });
    const existingUser1 = await userModel.findOne({ email: req.body.email });
    if (existingUser || existingUser1) {
      return res.status(200).send({
        success: false,
        message: "User already existes",
      });
    }
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(req.body.password, salt);
    req.body.password = hashedPassword;
    const user = new doctorModel(req.body);
    await user.save();
    const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET, {
      expiresIn: "1d",
    });
    return res.status(201).send({
      success: true,
      message: "User Registered successfully",
      user,
      token,
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      message: "Error in register API",
      error,
    });
  }
};

module.exports = registerController;
