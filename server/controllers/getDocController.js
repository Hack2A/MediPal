const doctorModel = require("../models/doctorModel");

const getUnderReview = async (req, res) => {
  try {
    const doctor = await doctorModel.find({ verify: "Under Review" });
    return res.status(200).send({
      success: true,
      doctor,
    });
  } catch (error) {
    console.log(error);
    return res.status(500).send({
      success: false,
      message: "Unable to get the doctor",
      error,
    });
  }
};
const getVerify = async (req, res) => {
  try {
    const doctor = await doctorModel.find({ verify: "Verified" });
    return res.status(200).send({
      success: true,
      doctor,
    });
  } catch (error) {
    console.log(error);
    return res.status(500).send({
      success: false,
      message: "Unable to get the doctor",
      error,
    });
  }
};

module.exports = { getUnderReview, getVerify };
