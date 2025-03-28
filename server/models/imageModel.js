const mongoose = require("mongoose");

const imageSchema = new mongoose.Schema({
  userId: { type: String, required: true },
  date: { type: Date, required: true },
  reason: { type: String, required: true },
  imageUrl: { type: String, required: true },
  uploadedAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model("Image", imageSchema);
