import React from "react";
import useFetch from "../../hooks/useFetch";

const User = () => {
    const { data: user, loading, error } = useFetch("http://localhost:8080/v1/current-user");

    if (loading) return <p className="text-center text-xl text-indigo-600">Loading...</p>;
    if (error) return <p className="text-center text-xl text-red-500">Error fetching user data</p>;

    const getUserData = (value) => value ? value : "N/A";

    return (
        <div className="w-full mx-auto p-8 bg-gradient-to-b from-blue-50 to-indigo-50 min-h-screen">
            {/* User Profile Section */}
            <div className="w-4xl mx-auto bg-white p-10 rounded-2xl shadow-md flex items-center justify-around border border-indigo-300">
                <div className="w-32 h-32 border-4 border-indigo-600 rounded-full overflow-hidden">
                    <img src="https://img.freepik.com/premium-vector/body-patient-image-icon-flat-vector-clinic-examination_98396-69431.jpg" alt="User" className="w-full h-full" />
                </div>
                <div>
                    <h1 className="text-3xl font-bold text-indigo-600">Hi, {user.user.name.toUpperCase()} 👋</h1>
                    <div className="mt-5 ml-5">
                        <p className="text-lg text-gray-700"><strong>Age :</strong> {user.user.age}</p>
                        <p className="text-lg text-gray-700"><strong>Gender :</strong> {user.user.gender}</p>
                    </div>
                </div>
            </div>

            {/* Personal Details Section */}
            <div className="w-4xl mx-auto bg-white p-10 rounded-2xl shadow-md items-center border border-indigo-300 mt-10">
                <div>
                    <h2 className="text-2xl font-semibold mb-4 text-indigo-600">Personal Details</h2>
                </div>
                <div className="flex">
                    <div className="ml-5">
                        <p><strong>Name</strong></p>
                        <p><strong>Email</strong></p>
                        <p><strong>Phone</strong></p>
                        <p><strong>Emergency Phone</strong></p>
                    </div>
                    <div className="mx-5">
                        <p><strong>:</strong></p>
                        <p><strong>:</strong></p>
                        <p><strong>:</strong></p>
                        <p><strong>:</strong></p>
                    </div>
                    <div>
                        <p>{user.user.name}</p>
                        <p>{user.user.email}</p>
                        <p>{user.user.phone}</p>
                        <p>{user.user.ephone}</p>
                    </div>
                </div>
            </div>

            {/* Medical Details Section */}
            <div className="w-4xl mx-auto bg-white p-10 rounded-2xl shadow-md items-center border border-indigo-300 mt-10">
                <div>
                    <h2 className="text-2xl font-semibold mb-4 text-indigo-600">Medical Details</h2>
                </div>
                <div className="flex">
                    <div className="ml-5">
                        <p><strong>Blood Group</strong></p>
                        <p><strong>Known Allergies</strong></p>
                        <p><strong>Chronic Illness</strong></p>
                        <p><strong>Current Medications</strong></p>
                        <p><strong>Surgeries</strong></p>
                    </div>
                    <div className="mx-5">
                        <p><strong>:</strong></p>
                        <p><strong>:</strong></p>
                        <p><strong>:</strong></p>
                        <p><strong>:</strong></p>
                        <p><strong>:</strong></p>
                    </div>
                    <div>
                        <p>{user.user.blood}</p>
                        <p>{user.user.allergy}</p>
                        <p>{user.user.chronic}</p>
                        <p>{user.user.currentmed}</p>
                        <p>{user.user.pastsur}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default User;
