import React from "react";
import { ArrowRight, Shield, UserPlus, MessageSquareText, CalendarClock, Heart } from "lucide-react";

function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-b from-blue-50 to-indigo-50">
      {/* Header */}
      <header className="border-b bg-white shadow-sm">
        <div className="container flex h-20 items-center justify-between px-4 md:px-6">
          <div className="flex items-center gap-2 font-bold text-2xl">
            <Shield className="h-8 w-8 text-indigo-600" />
            <span className="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
              MediPal
            </span>
          </div>
          {/* <nav className="hidden md:flex gap-8">
            <a href="#features" className="text-base font-medium text-gray-700 hover:text-indigo-600 transition-colors">
              Features
            </a>
            <a href="#how-it-works" className="text-base font-medium text-gray-700 hover:text-indigo-600 transition-colors">
              How It Works
            </a>
            <a href="#testimonials" className="text-base font-medium text-gray-700 hover:text-indigo-600 transition-colors">
              Testimonials
            </a>
          </nav> */}
          <div className="flex items-center gap-4">
            <a href="/login" className="border px-4 py-2 border-indigo-600 text-indigo-600 hover:bg-indigo-50 rounded">
              Log In
            </a>
            <a href="/signup" className="bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white px-4 py-2 rounded shadow-md">
              Sign Up
            </a>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1">
        {/* Hero Section */}
        <section className="w-full py-12 md:py-24 lg:py-32 text-center">
          <h1 className="text-4xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
            Your Health, Connected
          </h1>
          <p className="max-w-xl mx-auto text-gray-600 mt-4">
            Access healthcare from anywhere. Connect with verified doctors, store your medical history, and get the care you need.
          </p>
          <div className="flex justify-center gap-4 mt-6">
            <a href="/signup" className="bg-indigo-600 text-white px-6 py-3 rounded-full flex items-center gap-2">
              Get Started <ArrowRight className="h-4 w-4" />
            </a>
            <a href="/doctor-signup" className="border border-indigo-600 text-indigo-600 px-6 py-3 rounded-full">
              Register as a Doctor
            </a>
          </div>
        </section>

        {/* Features Section */}
        <section id="features" className="w-full py-12 md:py-24 bg-white text-center">
          <h2 className="text-3xl font-bold text-indigo-600">Everything You Need</h2>
          <p className="max-w-xl mx-auto text-gray-500 mt-2">
            A seamless telemedicine experience at your fingertips.
          </p>
          <div className="grid gap-6 md:grid-cols-3 max-w-4xl mx-auto mt-8">
            <Feature icon={<UserPlus className="h-8 w-8" />} title="Secure Medical Records" description="Store and access your complete medical history securely." />
            <Feature icon={<MessageSquareText className="h-8 w-8" />} title="Connect with Doctors" description="Consult with verified healthcare professionals." />
            <Feature icon={<CalendarClock className="h-8 w-8" />} title="Virtual Adviser" description="AI driven chat bot at your service 24/7." />
          </div>
        </section>

        {/* Testimonials Section */}
        <section id="testimonials" className="w-full py-12 md:py-24 text-center">
          <h2 className="text-3xl font-bold text-indigo-600">What Our Users Say</h2>
          <p className="max-w-xl mx-auto text-gray-500 mt-2">
            Hear from people who have benefited from MediConnect.
          </p>
          <div className="grid gap-6 md:grid-cols-2 max-w-4xl mx-auto mt-8">
            <Testimonial
              name="Jane Doe"
              review="MediPal made it super easy to consult with a doctor. No long waits, and I got my prescription online!"
            />
            <Testimonial
              name="Dr. John Doe"
              review="As a physician, MediPal has given me a great platform to connect with and help more patients efficiently."
            />
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t bg-white text-center py-6">
        <p className="text-gray-500 text-sm">© 2025 MediConnect. All rights reserved.</p>
      </footer>
    </div>
  );
}

/* Feature Component */
function Feature({ icon, title, description }) {
  return (
    <div className="flex flex-col items-center text-center p-4 border rounded shadow">
      <div className="h-16 w-16 flex items-center justify-center bg-gradient-to-br from-indigo-500 to-purple-600 rounded-full text-white">
        {icon}
      </div>
      <h3 className="text-xl font-bold mt-4">{title}</h3>
      <p className="text-gray-500 mt-2">{description}</p>
    </div>
  );
}

/* Testimonial Component */
function Testimonial({ name, review }) {
  return (
    <div className="p-6 border rounded shadow">
      <p className="text-gray-700 italic">"{review}"</p>
      <h4 className="mt-4 font-bold text-indigo-600">{name}</h4>
    </div>
  );
import React from 'react'

import ChatBotBtn from '../components/ChatBotBtn'

const Landing = () => {
    return (
        <div>
            <div>
                Landing
            </div>
            <ChatBotBtn />
        </div>

    )
}

export default Home;
