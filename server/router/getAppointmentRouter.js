const express = require("express");
const authMiddleware = require("../middleware/authMiddleware");
const {
  getPastAppointments,
  getUpcommingAppointments,
} = require("../controllers/getAppointmentController");

const router = express.Router();
router.get("/past-appointments", authMiddleware, getPastAppointments);
router.get("/upcomming-appointments", authMiddleware, getUpcommingAppointments);

module.exports = router;
