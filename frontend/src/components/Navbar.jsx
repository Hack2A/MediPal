import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Shield } from "lucide-react";

export default function Header() {
  const [userToken, setUserToken] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    setUserToken(localStorage.getItem("userToken"));
  }, []);

  const handleSignout = () => {
    localStorage.removeItem("userToken");
    setUserToken(null);
    navigate("/");
  };

  return (
    <header className="border-b bg-white shadow-sm w-full">
      <div className="flex h-20 items-center justify-between px-4 md:px-6 w-full">

        {/* Brand Name with Shield Icon */}
        <Link to={userToken ? "/home" : "/"} className="flex items-center gap-2">
          <Shield className="h-8 w-8 text-indigo-600" />
          <span className="text-3xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 text-transparent bg-clip-text">
            MediPal
          </span>
        </Link>

        {/* Navigation Buttons */}
        <nav className="flex items-center gap-4 ml-auto">
          {userToken ? (
            <button
              onClick={handleSignout}
              className="hover:cursor-pointer bg-gradient-to-r from-indigo-600 to-purple-600 text-white px-4 py-2 rounded shadow-md
                         hover:from-indigo-700 hover:to-purple-700 transition"
            >
              Sign Out
            </button>
          ) : (
            <>
              <Link
                to="/login"
                className="border px-4 py-2 border-indigo-600 text-indigo-600 hover:bg-indigo-50 rounded"
              >
                Log In
              </Link>
              <Link
                to="/register"
                className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white px-4 py-2 rounded shadow-md 
                           hover:from-indigo-700 hover:to-purple-700 transition"
              >
                Sign Up
              </Link>
            </>
          )}
        </nav>
      </div>
    </header>
  );
}
