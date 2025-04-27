const appointmentModel = require("../models/appointmentModel");
const { sendEmail } = require("../utils/emailService"); // 🛠️ make sure to import sendEmail

const setAppointmentStatus = async (req, res) => {
  const { appointmentId, status } = req.body;

  try {
    // Find the appointment by ID
    const appointment = await appointmentModel.findById(appointmentId);
    if (!appointment) {
      return res.status(404).json({ message: "Appointment not found" });
    }

    appointment.status = status; // Update the status
    await appointment.save(); // Save the updated appointment

    // 🔥 Send confirmation email to customer if appointment is confirmed
    if (status === "Confirmed") {
      const emailSubject = "Your Appointment is Confirmed";
      const emailText = `Hello ${appointment.userName},

Good news! Your appointment has been confirmed:

- Doctor: Dr. ${appointment.docName}
- Date: ${new Date(appointment.appointmentDate).toLocaleDateString()}
- Time Slot: ${appointment.timeSlot}

Please make sure to arrive 10 minutes before your scheduled time.

Thank you for choosing our service!

Best Regards,
Your Appointment System`;

      console.log("Sending confirmation email to user...");
      await sendEmail(appointment.userEmail, emailSubject, emailText);
      console.log("Confirmation email sent to user.");
    }

    return res.status(200).json({
      message: `Appointment status updated to ${status}`,
      appointment,
      success: true,
    });
  } catch (error) {
    return res
      .status(500)
      .json({ message: "Server error", error: error.message, success: false });
  }
};

module.exports = setAppointmentStatus;
