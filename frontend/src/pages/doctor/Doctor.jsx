import React from "react";
import useFetch from "../../hooks/useFetch";

const Doctor = () => {
    // Remove `await` and use destructuring
    const { data: user, loading, error } = useFetch("http://localhost:8080/v1/current-user");

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error fetching user data</p>;

    return (
        <div className="bg-gradient-to-b from-white to-blue-100 h-full w-full items-center align-middle text-[#222222]">
            <div className="flex justify-around bg-gradient-to-b from-white to-blue-100 p-8 border-none w-4xl items-center align-middle mx-auto my-10 rounded-3xl shadow:lg">
                <div className="text-xl">
                    <h1 className="text-3xl mb-5">
                        HELLO, <span className="text-4xl font-bold">Dr. {user.user.name.toUpperCase()}!</span> 👋
                    </h1>
                    <p className="ml-5 mb-2">
                        <span className="font-bold">Speciality :</span> {user.user.specialization}
                    </p>
                    <p className="ml-5 mb-2">
                        <span className="font-bold">Clinic Name :</span> d{user.user.clinicname}
                    </p>
                </div>
                <div>
                    <img src="/illustrations/docmale.png" alt="Doctor Profile Photo" className="rounded-full h-25 w-25" />
                    <p className="mt-3">
                        <span className="font-bold">Experience :</span> {user.user.yoe} years
                    </p>
                </div>
            </div>
            <div className="bg-gradient-to-b from-white to-blue-100 p-8 border-none w-4xl items-center align-middle mx-auto my-10 rounded-3xl shadow:lg mt-15">
                <h2 className="text-2xl font-bold">
                    Personal Details
                </h2>
                <div className="flex mt-5 ml-10">
                <div className="font-bold">
                    <p>Age</p>
                    <p>Gender</p>
                    <p>Email</p>
                    <p>Phone</p>
                    <p>Clinic Name</p>
                    <p>Clinic Location</p>
                    <p>Languages</p>
                </div>
                <div className="font-bold mx-5">
                    <p>:</p>
                    <p>:</p>
                    <p>:</p>
                    <p>:</p>
                    <p>:</p>
                    <p>:</p>
                    <p>:</p>
                </div>
                <div>
                    <p>{user.user.age}</p>
                    <p>{user.user.gender}</p>
                    <p>{user.user.email}</p>
                    <p>{user.user.phone}</p>
                    <p>{user.user.clinicname}</p>
                    <p>{user.user.clinicloc}</p>
                    <p>{user.user.language}</p>
                </div>
                </div>
            </div>
            <div className="bg-gradient-to-b from-white to-blue-100 p-8 border-none w-4xl items-center align-middle mx-auto my-10 rounded-3xl shadow:lg mt-15">
                <h2 className="text-2xl font-bold">
                    Professional Details
                </h2>
                <div className="flex mt-5 ml-10">
                    <div className="font-bold">
                        <p>Licence Number</p>
                        <p>Licensing Authority</p>
                        <p>Degree</p>
                        <p>Years of Experience</p>
                        <p>Availability</p>
                        <p>Fee (INR ₹)</p>
                    </div>
                    <div className="font-bold mx-5">
                        <p>:</p>
                        <p>:</p>
                        <p>:</p>
                        <p>:</p>
                        <p>:</p>
                        <p>:</p>
                    </div>
                    <div>
                        <p>{user.user.mlno}</p>
                        <p>{user.user.libody}</p>
                        <p>{user.user.degree}</p>
                        <p>{user.user.yoe}</p>
                        <p>{user.user.availability}</p>
                        <p>{user.user.fee}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Doctor;
