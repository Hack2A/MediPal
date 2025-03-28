const userModel = require("../models/userModel");
const appointmentModel = require("../models/appointmentModel");
const sendEmail = require("../utils/emailService");
const doctorModel = require("../models/doctorModel");

// Book an appointment & Notify Doctor
const appointmentController = async (req, res) => {
  const { doctorId, userId, appointmentDate, timeSlot } = req.body;

  try {
    const doctor = await doctorModel.findById(doctorId);
    if (!doctor) {
      return res.status(404).json({ message: "Doctor not found" });
    }
    const docName = doctor.name;
    const user = await userModel.findById(userId);
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }
    // Create appointment
    const appointment = new appointmentModel({
      doctorId,
      userId,
      userName: user.name,
      userEmail: user.email,
      docName: doctor.name,
      docEmail: doctor.email,
      appointmentDate,
      timeSlot,
    });

    await appointment.save();

    // Send email notification to doctor
    const emailSubject = "New Appointment Booked";
    const emailText = `Hello Dr. ${doctor.name},

        A new appointment has been booked:

        - Patient: ${user.name}
        - Email: ${user.email}
        - Date: ${new Date(appointmentDate).toLocaleDateString()}
        - Time Slot: ${timeSlot}

        Please confirm the appointment.

        Regards,
        Your Appointment System`;

    await sendEmail(doctor.email, emailSubject, emailText);

    return res.json({
      message: "Appointment booked successfully, doctor notified via email",
      appointment,
      docName,
    });
  } catch (error) {
    return res
      .status(500)
      .json({ message: "Server error", error: error.message });
  }
};

module.exports = appointmentController;
