import React from "react";
import useFetch from "../../hooks/useFetch";

const User = () => {
    // Remove `await` and use destructuring
    const { data: user, loading, error } = useFetch("http://localhost:8080/v1/current-user");

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error fetching user data</p>;

    return (
        <>
            <div className="w-[80%] relative bg-indigo-50 p-6 rounded-2xl shadow-md flex items-center justify-center bg-cover bg-center" style={{ backgroundImage: "url('/path-to-your-background-image.jpg')" }}>
                <div className="absolute left-6 top-1/2 transform -translate-y-1/2 w-20 h-20 border-4 border-black rounded-full overflow-hidden">
                    <img src="https://img.freepik.com/premium-vector/body-patient-image-icon-flat-vector-clinic-examination_98396-69431.jpg" alt="Doctor" className="w-full h-full" />
                </div>
                <div className="ml-24 text-center">
                    <h1 className="text-2xl font-bold">{user.user.name}</h1>
                    <p className="text-gray-600">{user.user.email}</p>
                    <p className="text-gray-600">{user.user.role}</p>
                </div>
            </div>


            <h2>User Data:</h2>
            <pre>{JSON.stringify(user, null, 2)}</pre>
        </>
    );
};

export default User;
