import axios from "axios";
import React, { useState, useEffect } from "react";

const MedicalRecords = () => {
  const [newPrescription, setNewPrescription] = useState({ date: "", reason: "", image: "" });
  const [filter, setFilter] = useState("all");
  const [sortOrder, setSortOrder] = useState("desc");
  const [selectedPrescription, setSelectedPrescription] = useState(null);
  const [zoom, setZoom] = useState(1);
  const [uploading, setUploading] = useState(false);
  const [userId, setUserId] = useState(null);
  const [prescriptions, setPrescriptions] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Fetch images from backend
  useEffect(() => {
    const fetchPrescriptions = async () => {
      try {
        const response = await axios.get("http://localhost:8080/images"); // ✅ API call
        setPrescriptions(response.data); // ✅ Store fetched data
      } catch (error) {
        console.error("Error fetching prescriptions:", error);
        setError("Failed to load prescriptions.");
      } finally {
        setLoading(false);
      }
    };

    fetchPrescriptions();
  }, []);
  // Fetch user ID from localStorage
  useEffect(() => async () => {
    const token = localStorage.getItem("userToken"); // Ensure token is available
    const response = await axios.get("http://localhost:8080/v1/current-user", {
      headers: { Authorization: `Bearer ${token}` },
    });
    const storedUserId = response.data.user._id; // Ensure user ID is stored in localStorage

    if (storedUserId) {
      setUserId(storedUserId);
    } else {
      console.error("User ID not found in localStorage");
    }
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewPrescription({ ...newPrescription, [name]: value });
  };

  const handleFileUpload = async (e) => {
    const file = e.target.files[0];
    if (!file) return;

    if (!userId) {
      alert("User ID is missing! Please log in again.");
      return;
    }

    setUploading(true);
    const formData = new FormData();
    formData.append("image", file);
    formData.append("userId", userId);
    formData.append("date", newPrescription.date);  // ✅ Added
    formData.append("reason", newPrescription.reason);  // ✅ Added

    try {
      const response = await axios.post("http://localhost:8080/v1/upload", formData, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("userToken")}`,
          "Content-Type": "multipart/form-data",
        },
      });

      setNewPrescription({ ...newPrescription, image: response.data.imageUrl });
      alert("File uploaded successfully!");
    } catch (error) {
      console.error("Upload error:", error.response?.data || error.message);
      alert("File upload failed: " + (error.response?.data?.error || error.message));
    } finally {
      setUploading(false);
    }
  };

  const addPrescription = () => {
    if (!newPrescription.date || !newPrescription.reason || !newPrescription.image) {
      alert("Please fill all fields (Date, Reason, and Image).");
      return;
    }

    const newId = prescriptions.length ? Math.max(...prescriptions.map(p => p.id)) + 1 : 1;
    setPrescriptions([...prescriptions, { ...newPrescription, id: newId }]);
    setNewPrescription({ date: "", reason: "", image: "" });
  };

  const deletePrescription = (id) => {
    setPrescriptions(prescriptions.filter(p => p.id !== id));
  };

  const filterPrescriptions = () => {
    const now = new Date();
    return prescriptions.filter(p => {
      const prescriptionDate = new Date(p.date);
      if (isNaN(prescriptionDate)) return false; // Ignore invalid dates

      if (filter === "week") {
        return (now - prescriptionDate) / (1000 * 60 * 60 * 24) <= 7;
      } else if (filter === "month") {
        return (now - prescriptionDate) / (1000 * 60 * 60 * 24) <= 30;
      } else if (filter === "year") {
        return (now - prescriptionDate) / (1000 * 60 * 60 * 24) <= 365;
      }
      return true;
    });
  };

  const sortedPrescriptions = [...filterPrescriptions()].sort((a, b) =>
    sortOrder === "desc" ? new Date(b.date) - new Date(a.date) : new Date(a.date) - new Date(b.date)
  );

  return (
    <div className="w-full max-w-4xl mx-auto p-6 bg-gradient-to-b from-blue-50 to-indigo-50 min-h-screen">
      <h1 className="text-3xl font-bold text-indigo-600 mb-6">Medical Records</h1>

      {/* Add New Prescription */}
      <div className="bg-white p-6 rounded-lg shadow-md mb-6">
        <h2 className="text-2xl font-semibold mb-4 text-indigo-600">Add New Prescription</h2>
        <div className="grid gap-4">
          <input type="date" name="date" value={newPrescription.date} onChange={handleInputChange} className="border p-2 rounded w-full" />
          <input type="text" name="reason" placeholder="Reason" value={newPrescription.reason} onChange={handleInputChange} className="border p-2 rounded w-full" />
          <div>
            <input type="file" onChange={handleFileUpload} />
            {uploading && <p>Uploading...</p>}
          </div>
          <button onClick={addPrescription} className="bg-indigo-600 text-white px-4 py-2 rounded shadow hover:bg-indigo-700">Add Prescription</button>
        </div>
      </div>

      {/* Prescription List */}
      <div className="bg-white p-6 rounded-lg shadow-md">
        <div className="flex justify-between mb-4">
          <h2 className="text-2xl font-semibold text-indigo-600">Previous Prescriptions</h2>
          <div className="flex gap-2">
            <select onChange={(e) => setFilter(e.target.value)} className="border px-3 py-1 rounded">
              <option value="all">All</option>
              <option value="week">Past Week</option>
              <option value="month">Past Month</option>
              <option value="year">Past Year</option>
            </select>
            <button onClick={() => setSortOrder(sortOrder === "desc" ? "asc" : "desc")} className="bg-gray-200 px-3 py-1 rounded">Sort {sortOrder === "desc" ? "Oldest" : "Newest"}</button>
          </div>
        </div>
        <div className="overflow-x-auto flex gap-4 p-2">
          {sortedPrescriptions.map(prescription => (
            <div key={prescription.id} className="border p-4 rounded-lg shadow-md bg-indigo-100 min-w-[200px] cursor-pointer">
              <p className="font-semibold">{prescription.date}</p>
              <p className="text-gray-700">{prescription.reason}</p>
              <img src={prescription.image} alt="Prescription" className="w-32 h-32 mt-2 rounded" />
              <div className="flex justify-between mt-2">
                <button onClick={() => deletePrescription(prescription.id)} className="bg-red-500 text-white px-3 py-1 rounded shadow hover:bg-red-700">Delete</button>
                <button onClick={() => { setSelectedPrescription(prescription); setZoom(1); }} className="bg-blue-500 text-white px-3 py-1 rounded shadow hover:bg-blue-700">View</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MedicalRecords;
