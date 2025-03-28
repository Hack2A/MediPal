import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { Eye, EyeOff } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from "framer-motion";

const Login = () => {
    const [showPassword, setShowPassword] = useState(false);
    const [isError, setIsError] = useState(false);
    const [error, setError] = useState("");
    const navigate = useNavigate();

    useEffect(() => {
        const tkn = localStorage.getItem('userToken');
        if (tkn) {
            navigate('/home');
        }
    }, [navigate]);

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    const handleLogin = async (data) => {
        try {
            const response = await axios.post("http://localhost:8080/v1/login", data);
            let curToken = response.data.token;
            localStorage.setItem('userToken', curToken);
            console.log(response.data);

            navigate('/home', { replace: true });
        } catch (error) {
            console.error("Login error: ", error.response?.data || error.message);
            setIsError(true);
            setError("Invalid Credentials!");
        }
    };

    return (
        <div className="flex min-h-screen items-center justify-center bg-gray-100">
            <div className="bg-white shadow-lg rounded-lg flex w-full max-w-5xl p-5">
                {/* Left Section - Illustration */}
                <div className="hidden md:flex w-1/2 justify-center items-center h-full">
                    <img src="/illustrations/medicine.svg" alt="Medicine Illustration" className="w-full h-auto" />
                </div>

                {/* Right Section - Form */}
                <div className="w-full md:w-1/2 p-6">
                    <h2 className="text-2xl font-bold text-gray-800 mb-6">Welcome Bank!</h2>
                    <form className="space-y-4" onSubmit={handleSubmit(handleLogin)}>
                        <div>
                            <input
                                type="email"
                                {...register("email", { required: "Email is required" })}
                                placeholder="Enter your email"
                                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                            />
                        </div>
                        <div className="relative">
                            <input
                                type={showPassword ? "text" : "password"}
                                placeholder="Password"
                                {...register("password", { required: "Password is required" })}
                                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                            />
                            <button
                                type="button"
                                className="absolute inset-y-0 right-3 flex items-center text-gray-600"
                                onClick={() => setShowPassword(!showPassword)}
                            >
                                {showPassword ? <Eye /> : <EyeOff />}
                            </button>
                        </div>
                        <button className="btn-primary" type="submit">
                            Log in
                        </button>
                    </form>
                    <p className="text-center mt-4">Don't have account? <Link to="/registeruser" className="text-blue-600">Sign Up</Link></p>
                    <div className="flex justify-center items-center space-x-3 mt-4">
                        <button className="bg-blue-600 text-white p-2 rounded-full">F</button>
                        <button className="bg-blue-400 text-white p-2 rounded-full">T</button>
                        <button className="bg-red-500 text-white p-2 rounded-full">G</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;
