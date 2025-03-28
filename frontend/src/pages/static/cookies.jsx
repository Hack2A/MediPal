import React from "react";

function CookiesPolicy() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50 px-6">
      <div className="bg-white p-8 md:p-12 rounded-lg shadow-lg max-w-2xl text-center">
        {/* Title */}
        <h1 className="text-3xl font-bold text-indigo-600">Cookies Policy</h1>
        <p className="text-gray-600 mt-4">
          This page explains how MediPal uses cookies to improve your experience.
        </p>

        {/* What are Cookies? */}
        <div className="mt-6 text-left">
          <h2 className="text-xl font-semibold text-purple-600">What Are Cookies?</h2>
          <p className="text-gray-600 mt-2">
            Cookies are small text files stored on your device when you visit a website.
            They help enhance functionality and provide a better user experience.
          </p>
        </div>

        {/* Types of Cookies */}
        <div className="mt-6 text-left">
          <h2 className="text-xl font-semibold text-purple-600">Types of Cookies We Use</h2>
          <ul className="list-disc pl-6 text-gray-600 mt-2">
            <li><strong>Essential Cookies:</strong> Required for website functionality.</li>
            <li><strong>Analytics Cookies:</strong> Help us understand how users interact with our site.</li>
            <li><strong>Marketing Cookies:</strong> Used for personalized advertisements.</li>
          </ul>
        </div>

        {/* Notice */}
        <p className="text-gray-500 text-sm mt-6">
          For more details, please read our 
          <a href="/terms" className="text-indigo-600 underline ml-1">Terms & Conditions</a>.
        </p>
      </div>
    </div>
  );
}

export default CookiesPolicy;
