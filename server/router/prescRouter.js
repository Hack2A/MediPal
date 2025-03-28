const express = require("express");
const multer = require("multer");
const cloudinary = require("cloudinary").v2;
const fs = require("fs");
const authMiddleware = require("../middleware/authMiddleware");

const router = express.Router();

cloudinary.config({
  cloud_name: "dtuwnmpoe",
  api_key: "781677795381688",
  api_secret: "Jae3q33hDTjodSgHgLm3zJmeF_s",
});

// Multer setup (store file temporarily)
const upload = multer({ dest: "uploads/" });

// 🚀 Upload API
router.post(
  "/upload",
  upload.single("image"),
  authMiddleware,
  async (req, res) => {
    try {
      if (!req.file) {
        return res.status(400).json({ error: "No file uploaded" });
      }

      const { userId } = req.body.userId; // Get user ID from request
      const filePath = req.file.path;

      // 🔥 Upload to Cloudinary
      const result = await cloudinary.uploader.upload(filePath, {
        folder: "medical_reports",
      });

      // 🗑️ Delete temp file
      fs.unlinkSync(filePath);

      // 📥 Save image URL in database (replace this with actual DB code)
      const imageUrl = result.secure_url;

      return res.json({
        message: "File uploaded successfully",
        imageUrl,
        userId,
      });
    } catch (error) {
      console.error(error);
      return res.status(500).json({ error: "Upload failed" });
    }
  }
);

module.exports = router;
