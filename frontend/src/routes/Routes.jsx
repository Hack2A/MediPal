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
const Register = lazy(() => import("../pages/Register"));
const AboutUs = lazy(() => import("../pages/static/aboutus"));
const Contact = lazy(() => import("../pages/static/contact"));
const Terms = lazy(() => import("../pages/static/terms"));
const Consent = lazy(() => import("../pages/static/consent"));
const Cookies = lazy(() => import("../pages/static/cookies"));
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
                    <Route path="/register" element={
                        <>
                         
                            <Register />
                           
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
                    <Route path="/about" element={
                        <>
                            <Navbar />
                            <AboutUs />
                            <Footer />
                        </>

                    } />
                    <Route path="/contact" element={
                        <>
                            <Navbar />
                            <Contact />
                            <Footer />
                        </>

                    } />
                    <Route path="/terms" element={
                        <>
                            <Navbar />
                            <Terms />
                            <Footer />
                        </>

                    } />
                    <Route path="/consent" element={
                        <>
                            <Navbar />
                            <Consent />
                            <Footer />
                        </>

                    } />
                    <Route path="/cookies" element={
                        <>
                            <Navbar />
                            <Cookies />
                            <Footer />
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
