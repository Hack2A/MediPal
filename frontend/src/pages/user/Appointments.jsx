import React, { useState, useEffect } from "react";

const AppointmentsPage = () => {
    const [appointments, setAppointments] = useState([]);

    useEffect(() => {
        fetch("http://localhost:8080/api/appointments")
            .then((response) => response.json())
            .then((data) => setAppointments(data))
            .catch((error) => console.error("Error fetching appointments:", error));
    }, []);

    const currentDate = new Date();
    const upcomingAppointments = appointments.filter(app => new Date(app.date) >= currentDate);
    const pastAppointments = appointments.filter(app => new Date(app.date) < currentDate);

    return (
        <div className="w-full max-w-6xl mx-auto p-6 bg-gradient-to-b from-blue-50 to-indigo-50 min-h-screen">
            <h1 className="text-3xl font-bold text-indigo-600 mb-6">My Appointments</h1>

            {/* Upcoming Appointments Section */}
            <div className="mb-8">
                <h2 className="text-2xl font-semibold text-indigo-700 mb-4">Upcoming Appointments</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {upcomingAppointments.length > 0 ? upcomingAppointments.map((appointment) => (
                        <div key={appointment.id} className="bg-white shadow-md rounded-lg p-4">
                            <h3 className="text-lg font-semibold">Dr. {appointment.doctorName}</h3>
                            <p className="text-gray-600">Date: {appointment.date}</p>
                            <p className="text-gray-600">Time: {appointment.time}</p>
                        </div>
                    )) : <p className="text-gray-500">No upcoming appointments.</p>}
                </div>
            </div>

            {/* Past Appointments Section */}
            <div>
                <h2 className="text-2xl font-semibold text-indigo-700 mb-4">Past Appointments</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {pastAppointments.length > 0 ? pastAppointments.map((appointment) => (
                        <div key={appointment.id} className="bg-white shadow-md rounded-lg p-4">
                            <h3 className="text-lg font-semibold">Dr. {appointment.doctorName}</h3>
                            <p className="text-gray-600">Date: {appointment.date}</p>
                            <p className="text-gray-600">Time: {appointment.time}</p>
                            <p className="text-gray-600">Remarks: {appointment.remarks || "No remarks provided"}</p>
                        </div>
                    )) : <p className="text-gray-500">No past appointments.</p>}
                </div>
            </div>
        </div>
    );
};

export default AppointmentsPage;
