const doctorModel = require("../models/doctorModel");
const userModel = require("../models/userModel");

const currentUserController = async (req, res) => {
  try {
    let user = await userModel.findOne({ _id: req.body.userId });
    if (!user) {
      user = await doctorModel.findOne({ _id: req.body.userId });
    }
    return res.status(200).send({
      success: true,
      message: "user fetched susscessfully",
      user,
    });
  } catch (error) {
    console.log(error);
    return res.status(500).send({
      success: false,
      message: "unable to get current user",
      error,
    });
  }
};

module.exports = currentUserController;
