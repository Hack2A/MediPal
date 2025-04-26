const appointmentModel = require("../models/appointmentModel");

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
    return res.status(200).json({
      message: `Appointment status updated to ${status}`,
      appointment,
    });
  } catch (error) {
    return res
      .status(500)
      .json({ message: "Server error", error: error.message });
  }
};

module.exports = setAppointmentStatus;
