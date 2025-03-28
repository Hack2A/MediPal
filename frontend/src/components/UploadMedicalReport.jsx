import React, { useState } from "react";
import { storage, db } from "../firebase";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";

const UploadMedicalReport = () => {
  const [file, setFile] = useState(null);
  const [uploading, setUploading] = useState(false);

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleUpload = () => {
    if (!file) {
      alert("Please select a file first!");
      return;
    }

    setUploading(true);
    const fileRef = ref(storage, `medical_reports/${Date.now()}_${file.name}`);
    const uploadTask = uploadBytesResumable(fileRef, file);

    uploadTask.on(
      "state_changed",
      null,
      (error) => {
        console.error("Upload error:", error);
        setUploading(false);
      },
      async () => {
        const url = await getDownloadURL(uploadTask.snapshot.ref);
        await addDoc(collection(db, "medicalReports"), {
          url,
          createdAt: serverTimestamp(),
        });
        setUploading(false);
        alert("File uploaded successfully!");
      }
    );
  };

  return (
    <div>
      <input type="file" onChange={handleFileChange} />
      <button onClick={handleUpload} disabled={uploading}>
        {uploading ? "Uploading..." : "Upload Report"}
      </button>
    </div>
  );
};

export default UploadMedicalReport;
