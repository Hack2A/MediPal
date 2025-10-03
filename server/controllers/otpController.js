const { otpService } = require("../utils/emailService");

const otpStore = new Map();

// Generate OTP
const otpGenerateController = async (req, res) => {
  const { email } = req.body;

  if (!email) {
    return res.status(400).json({ success: false, message: "Email is required" });
  }

  try {
    const otp = Math.floor(100000 + Math.random() * 900000).toString(); // 6-digit OTP
    const expiresAt = Date.now() + 5 * 60 * 1000; // valid for 5 mins

    otpStore.set(email, { otp, expiresAt });

    const subject = "MediPal OTP Verification";
    const text = `Hello Customer,

Your OTP for verification is: ${otp}
It is valid for 5 minutes.

Do not share this OTP with anyone.

Regards,
MediPal Team`;

    await otpService(email, subject, text);

    return res.json({
      success: true,
      message: "OTP sent successfully, please check your email",
    });
  } catch (error) {
    console.error("OTP generation error:", error);
    return res.status(500).json({
      success: false,
      message: "Server error while sending OTP",
      error: error.message,
    });
  }
};

// Verify OTP
const otpVerifyController = async (req, res) => {
  const { email, otp } = req.body;

  if (!email || !otp) {
    return res.status(400).json({ success: false, message: "Email and OTP are required" });
  }

  const data = otpStore.get(email);

  if (!data) {
    return res.status(400).json({ success: false, message: "No OTP found for this email" });
  }

  const { otp: storedOtp, expiresAt } = data;

  if (Date.now() > expiresAt) {
    otpStore.delete(email);
    return res.status(400).json({ success: false, message: "OTP expired" });
  }

  if (otp.toString() === storedOtp) {
    otpStore.delete(email);
    return res.json({ success: true, message: "OTP verified successfully" });
  } else {
    return res.status(400).json({ success: false, message: "Invalid OTP" });
  }
};

module.exports = { otpGenerateController, otpVerifyController };
