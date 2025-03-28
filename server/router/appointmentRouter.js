const express = require("express");
const appointmentController = require("../controllers/appointmentController");

const router = express.Router();
router.post("/book-appointment", appointmentController);

module.exports = router;
