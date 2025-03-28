import React from "react";
import useFetch from "../../hooks/useFetch";

const User = () => {
    const { data: user, loading, error } = useFetch("http://localhost:8080/v1/current-user");

    if (loading) return <p className="text-center text-xl text-indigo-600">Loading...</p>;
    if (error) return <p className="text-center text-xl text-red-500">Error fetching user data</p>;

    const getUserData = (value) => value ? value : "N/A";

    return (
        <div className="w-full max-w-5xl mx-auto p-8 bg-gradient-to-b from-blue-50 to-indigo-50 min-h-screen">            
            {/* User Profile Section */}
            <div className="w-full bg-white p-8 rounded-2xl shadow-md flex items-center justify-start border border-indigo-300">
                <div className="w-32 h-32 border-4 border-indigo-600 rounded-full overflow-hidden">
                    <img src="https://img.freepik.com/premium-vector/body-patient-image-icon-flat-vector-clinic-examination_98396-69431.jpg" alt="User" className="w-full h-full" />
                </div>
                <div className="ml-8">
                    <h1 className="text-3xl font-bold text-indigo-600">Hi, {getUserData(user.user.name)} 👋</h1>
                    <p className="text-lg text-gray-700">Age: {getUserData(user.user.age)}</p>
                    <p className="text-lg text-gray-700">Gender: {getUserData(user.user.gender)}</p>
                </div>
            </div>

            {/* Personal Details Section */}
            <div className="mt-8 bg-white p-8 rounded-lg shadow-md text-lg border border-indigo-300">
                <h2 className="text-2xl font-semibold mb-4 text-indigo-600">Personal Details</h2>
                <p><strong>Name:</strong> {getUserData(user.user.name)}</p>
                <p><strong>Email:</strong> {getUserData(user.user.email)}</p>
                <p><strong>Phone:</strong> {getUserData(user.user.phone)}</p>
                {/* <p><strong>Address:</strong> {getUserData(user.user.address)}</p> */}
            </div>

            {/* Medical Details Section */}
            <div className="mt-8 bg-white p-8 rounded-lg shadow-md text-lg border border-indigo-300">
                <h2 className="text-2xl font-semibold mb-4 text-indigo-600">Medical Details</h2>
                <p><strong>Blood Group:</strong> {getUserData(user.user.bloodGroup)}</p>
                <p><strong>Known Allergies:</strong> {getUserData(user.user.allergies)}</p>
                <p><strong>Current Medications:</strong> {getUserData(user.user.medications)}</p>
                <p><strong>Medical History:</strong> {getUserData(user.user.medicalHistory)}</p>
            </div>

            {/* User Images Section */}
           
        </div>
    );
};

export default User;
