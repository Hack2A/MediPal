const mongoose = require("mongoose");

const appointmentSchema = new mongoose.Schema({
  doctorId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Doctor",
    required: true,
  },
  userId: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
  userName: { type: String, required: true },
  docName: { type: String, required: true },
  userEmail: { type: String, required: true },
  appointmentDate: { type: Date, required: true },
  timeSlot: { type: String, required: true }, // Example: "10:00 AM - 11:00 AM"
  status: { type: String, default: "Pending" }, // Status can be Pending, Confirmed, or Cancelled
});

const Appointment = mongoose.model("Appointment", appointmentSchema);
module.exports = Appointment;
