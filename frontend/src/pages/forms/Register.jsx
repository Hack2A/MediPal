import React, { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { Eye, EyeOff } from "lucide-react";
import { motion } from "framer-motion";
import axios from "axios";

const Register = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const [step, setStep] = useState(1);
    const [formData, setFormData] = useState({});
    const [showPassword, setShowPassword] = useState(false);
    const [errorMessage, setErrorMessage] = useState("");
    const navigate = useNavigate();

    useEffect(() => {
        const token = localStorage.getItem("userToken");
        if (token) navigate("/home");
    }, [navigate]);

    const handleNext = (data) => {
        setFormData({ ...formData, ...data });
        setStep(step + 1);
    };

    const handleRegister = async (data) => {
        const finalData = { ...formData, ...data };
        try {
            const response = await axios.post("http://localhost:8080/v1/register", finalData);
            if (response.data.success) {
                localStorage.setItem("userToken", response.data.token);
                navigate("/home", { replace: true });
            } else {
                throw new Error("Username or Email already exists");
            }
        } catch (error) {
            setErrorMessage(error.message || "Something went wrong!");
        }
    };

    return (
        <div className="flex flex-col min-h-screen items-center justify-center bg-gray-100">
            <div className="bg-white shadow-lg rounded-lg flex w-full max-w-5xl p-5 min-h-[80vh] my-3 relative">
                {/* Left Section - Illustration */}
                <div className="flex w-1/2 justify-center items-center h-full flex-col">
                    {step === 1 ? "" : <button onClick={() => setStep(step - 1)} className="bg-indigo-600 font-bold text-white py-1 px-5 rounded-full absolute left-3 top-3 hover:cursor-pointer">Back</button>}
                    <h2 className="text-2xl font-bold text-center mb-4">Welcome to HealthCare</h2>
                    <img src="/illustrations/patientReg.svg" alt="Medicine Illustration" className="my-auto" />
                </div>

                {/* Right Section - Form */}
                <div className="w-full md:w-1/2 p-6">
                    <h2 className="text-2xl font-bold text-center mb-4">{step === 1 ? "Step 1: Basic Details" : "Step 2: Account Details"}</h2>
                    <hr className="mb-4" />

                    {step === 1 ? (
                        <form onSubmit={handleSubmit(handleNext)} className="space-y-4">
                            <div>
                                <input
                                    type="text"
                                    {...register("name")}
                                    required
                                    placeholder="Enter your name"
                                    className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                                />
                            </div>
                            <div className="flex gap-2">
                                <input
                                    type="number"
                                    {...register("age", { min: 1, max: 120 })}
                                    required
                                    placeholder="Enter your age"
                                    className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                                />
                                <select
                                    {...register("gender")}
                                    required
                                    className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                                >
                                    <option value="">Select Gender</option>
                                    <option value="male">Male</option>
                                    <option value="female">Female</option>
                                </select>
                            </div>
                            <input
                                type="email"
                                {...register("email")}
                                required
                                placeholder="Enter your email"
                                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                            />
                            <div>
                                <input
                                    type="tel"
                                    {...register("phone", { pattern: /^[0-9]{10}$/ })}
                                    required
                                    placeholder="Enter your Contact"
                                    className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                                />
                            </div>
                            <div>
                                <input
                                    type="tel"
                                    {...register("emergencyContact", { pattern: /^[0-9]{10}$/ })}
                                    required
                                    placeholder="Enter your Emergency Contact"
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
                            <button type="submit" className="btn-primary">Next</button>
                        </form>
                    ) : (
                        <form onSubmit={handleSubmit(handleRegister)} className="space-y-4">

                            <button type="submit" className="btn-primary">Register</button>
                        </form>
                    )}

                    {errorMessage && <p className="error text-center">{errorMessage}</p>}
                    <p className="text-center mt-4">Already registered? <Link to="/login" className="text-blue-600">Sign in</Link></p>
                </div>
            </div>
        </div>

    );
};

export default Register;