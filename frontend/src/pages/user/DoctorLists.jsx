import React from 'react';
import DoctorCard from '../../components/DoctorCard';
import useFetch from "../../hooks/useFetch";

const DoctorLists = () => {
    const { data, loading, error } = useFetch("http://localhost:8080/v1/getverified");

    if (loading) return <p className="text-blue-500">Loading doctors...</p>;
    if (error) return <p className="text-red-500">Error: {error}</p>;

    const verifiedDoctors = data?.doctor || []; // Ensure we get an array

    return (
        <div className="p-4">
            <h2 className="text-xl font-bold mb-4">Verified Doctors</h2>

            {verifiedDoctors.length > 0 ? (
                <div className="flex flex-col gap-4">
                    {verifiedDoctors.map((doctor) => (
                        <DoctorCard key={doctor._id} doctor={doctor} />
                    ))}
                </div>
            ) : (
                <p>No verified doctors found.</p>
            )}
        </div>
    );
};

export default DoctorLists;
