const express = require("express");
const multer = require("multer");
const cloudinary = require("cloudinary").v2;
const fs = require("fs");
const mongoose = require("mongoose");

const authMiddleware = require("../middleware/authMiddleware");
const imageModel = require("../models/imageModel");

const router = express.Router();

// ✅ Load environment variables
require("dotenv").config();

cloudinary.config({
  cloud_name: "dtuwnmpoe",
  api_key: "781677795381688",
  api_secret: "Jae3q33hDTjodSgHgLm3zJmeF_s",
  secure: true,
});

// ✅ Multer setup (temporary storage)
const upload = multer({ dest: "uploads/" });

// 🚀 Upload API
router.post(
  "/upload",
  authMiddleware, // Validate user token
  upload.single("image"), // Handle file upload
  async (req, res) => {
    const filePath = req.file?.path;
    const { userId } = req.body;
    const { date, reason } = req.body;
    if (!req.file) {
      return res.status(400).json({ error: "No file uploaded" });
    }

    if (!userId) {
      return res.status(400).json({ error: "User ID is required" });
    }

    try {
      // 🔥 Upload to Cloudinary
      const result = await cloudinary.uploader.upload(filePath, {
        folder: "medical_reports",
      });

      // 🗑️ Delete temp file
      fs.unlinkSync(filePath);
      const newImage = new imageModel({
        userId,
        imageUrl: result.secure_url,
        date,
        reason,
      });

      await newImage.save();
      // 📥 Save image URL (replace with DB storage logic)
      return res.json({
        message: "File uploaded successfully",
        imageUrl: result.secure_url,
        userId,
        date,
        reason,
      });
    } catch (error) {
      console.error("Upload error:", error);
      return res
        .status(500)
        .json({ error: "Upload failed", details: error.message });
    } finally {
      // Ensure temp file is deleted
      if (fs.existsSync(filePath)) {
        fs.unlinkSync(filePath);
      }
    }
  }
);
router.post("/images", async (req, res) => {
  try {
    const images = await imageModel
      .find({ userId: req.body })
      .select("-_id date reason imageUrl");
    return res.json(images);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: "Failed to fetch images" });
  }
});
module.exports = router;
