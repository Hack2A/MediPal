import React, { Suspense, lazy } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ProtectedRoute from "./ProtectedRoute";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Landing from "../pages/Landing";

// Lazy-loaded components for better performance
const Login = lazy(() => import("../pages/forms/Login"));
const UserRegister = lazy(() => import("../pages/forms/Register"));
const DocRegister = lazy(() => import("../pages/forms/DocRegister"));
const Home = lazy(() => import("../pages/Home"));

const AppRoutes = () => {
    return (
        <Router>
            <Suspense fallback={<div>Loading...</div>}>
                <Routes>
                    <Route path="/" element={
                        <>
                            <Landing />
                            <Footer />
                        </>
                    } />
                    <Route path="/login" element={
                        <>
                            <Login />
                        </>
                    } />
                    <Route path="/registeruser" element={
                        <>
                            <UserRegister />
                        </>
                    } />
                    <Route path="/registerdoctor" element={
                        <>
                            <DocRegister />
                        </>
                    } />
                    {/* Protected Routes */}
                    <Route path="/home" element={<ProtectedRoute>
                        <Navbar />
                        <Home />
                        <Footer />
                    </ProtectedRoute>} />
                </Routes>
            </Suspense>
        </Router>
    );
};

export default AppRoutes;
