import React, { useState } from "react";
import axios from "axios"; // ✅ Import Axios

const UploadMedicalReport = () => {
  const [file, setFile] = useState(null);
  const [uploading, setUploading] = useState(false);
  const [imageUrl, setImageUrl] = useState("");

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleUpload = async () => {
    if (!file) {
      alert("Please select a file first!");
      return;
    }

    setUploading(true);

    const formData = new FormData();
    formData.append("image", file);
    formData.append("userId", "12345"); // Replace with actual user ID

    try {
      const response = await axios.post("http://localhost:8080/v1/upload", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
          Authorization: `Bearer ${localStorage.getItem("userToken")}`, // Replace with real token
        },
      });

      console.log("Upload response:", response.data); // Debugging
      setImageUrl(response.data.imageUrl);
      alert("File uploaded successfully!");
    } catch (error) {
      console.error("Upload error:", error); // Debugging
      if (error.response) {
        console.error("Server responded with:", error.response.data);
      }
      alert("File upload failed!");
    } finally {
      setUploading(false);
    }
  };
  return (
    <div className="p-4 bg-gray-100 min-h-screen">
      <h2 className="text-2xl font-semibold mb-4">Upload Medical Report</h2>
      <input type="file" onChange={handleFileChange} className="mb-2 p-2 border rounded" />
      <button
        onClick={handleUpload}
        disabled={uploading}
        className="bg-blue-500 text-white px-4 py-2 rounded disabled:bg-gray-400"
      >
        {uploading ? "Uploading..." : "Upload Report"}
      </button>

      {imageUrl && (
        <div className="mt-4">
          <p className="text-lg">Uploaded Image:</p>
          <img src={imageUrl} alt="Uploaded" className="w-48 rounded border" />
        </div>
      )}
    </div>
  );
};

export default UploadMedicalReport;
