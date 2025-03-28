import React from "react";

export default function DoctorDashboard() {
    return (
      <div className="min-h-screen bg-gray-100 p-6 font-[Poppins]">
        <div className="max-w-6xl mx-auto bg-white shadow-lg rounded-xl p-6">
          {/* Header */}
          <div className="flex justify-between items-center">
            <h1 className="text-2xl font-bold text-[#3E36B0]">Good Morning, Dr. Kim!</h1>
            <img 
              src="https://lh3.googleusercontent.com/gg-dl/AA8i_VKd82DFac_GBzlrgbuKkaza3QgVKeYPJqPyAEjGSnaYT6iMTLNfk38WYXOxfaxJEtPQ9pqvvSB_cTIa8bKt9PdWWP3s4QD5iqSUtMCR6oR2zuDpEMBbS5eDRXF1QKEtgXIy9jhbJUhF61UbC_XgasLFpyf6DKAxhXbisvpNtSlMjmbG1w"
              alt="Dr. Kim"
              width={50}
              height={50}
              className="rounded-full"
            />
          </div>
          
          {/* Image Display */}
          <div className="mt-6 flex justify-center">
            <img src="/image.png" alt="Dashboard" width={800} height={400} className="rounded-lg shadow-md" />
          </div>
          
          {/* Stats Section */}
          <div className="mt-6 grid grid-cols-2 gap-4">
            <div className="bg-[#A6DEF7] p-4 rounded-lg text-center shadow-md">
              <h2 className="text-lg font-bold">New Patients</h2>
              <p className="text-2xl font-bold">40</p>
            </div>
            <div className="bg-[#D9D9FF] p-4 rounded-lg text-center shadow-md">
              <h2 className="text-lg font-bold">Old Patients</h2>
              <p className="text-2xl font-bold">64</p>
            </div>
          </div>
        </div>
      </div>
    );
  }