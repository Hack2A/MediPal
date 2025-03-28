import { collection, getDocs, orderBy, query } from "firebase/firestore";
import React, { useEffect, useState } from "react";
import { db } from "../../firebase";
import UploadMedicalReport from "../../components/UploadMedicalReport";

const MedicalReports = () => {
  const [reports, setReports] = useState([]);

  useEffect(() => {
    const fetchReports = async () => {
      try {
        const q = query(collection(db, "medicalReports"), orderBy("createdAt", "desc"));
        const snapshot = await getDocs(q);
        const reportsList = snapshot.docs.map((doc) => doc.data().url);
        setReports(reportsList);
      } catch (error) {
        console.error("Error fetching reports:", error);
      }
    };

    fetchReports();
  }, []);

  return (
    <>
      <div>
        <h2>Medical Reports</h2>
        {reports.length === 0 ? (
          <p>No reports found</p>
        ) : (
          <div style={{ display: "flex", flexWrap: "wrap", gap: "10px" }}>
            {reports.map((report, index) => (
              <div key={index} style={{ textAlign: "center" }}>
                <img
                  src={report}
                  alt={`Medical Report ${index + 1}`}
                  style={{ width: "200px", height: "200px", objectFit: "cover" }}
                />
                <p>
                  <a href={report} target="_blank" rel="noopener noreferrer">
                    View Full Image
                  </a>
                </p>
              </div>
            ))}
          </div>
        )}
      </div>
      <div>
        <UploadMedicalReport />
      </div>
    </>
  );
};

export default MedicalReports;
