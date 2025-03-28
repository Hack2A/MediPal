import React, { useState } from "react";
import { ArrowRight, Shield, UserPlus, MessageSquareText, CalendarClock, Heart } from "lucide-react";
import { motion } from "framer-motion";

function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-b from-blue-50 to-indigo-50">

      {/* Main Content */}
      <main className="flex-1">
        {/* Hero Section */}
        <motion.section
          className="w-full py-12 md:py-24 lg:py-32 text-center"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <h1 className="text-4xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
            Your Health, Connected
          </h1>
          <p className="max-w-xl mx-auto text-gray-600 mt-4">
            Access healthcare from anywhere. Connect with verified doctors, store your medical history, and get the care you need.
          </p>
          <div className="flex justify-center gap-4 mt-6">
            <a href="/registeruser" className="bg-indigo-600 text-white px-6 py-3 rounded-full flex items-center gap-2 hover:scale-105 transition">
              Register as a Patient <ArrowRight className="h-4 w-4" />
            </a>
            <a href="/registerdoctor" className="border border-indigo-600 text-indigo-600 px-6 py-3 rounded-full hover:bg-indigo-50 transition">
              Register as a Doctor
            </a>
          </div>
        </motion.section>

        {/* Features Section */}
        <motion.section
          id="features"
          className="w-full py-12 md:py-24 bg-white text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl font-bold text-indigo-600">Everything You Need</h2>
          <p className="max-w-xl mx-auto text-gray-500 mt-2">
            A seamless telemedicine experience at your fingertips.
          </p>
          <div className="grid gap-6 md:grid-cols-3 max-w-4xl mx-auto mt-8">
            <Feature icon={<UserPlus className="h-8 w-8" />} title="Secure Medical Records" description="Store and access your complete medical history securely." />
            <Feature icon={<MessageSquareText className="h-8 w-8" />} title="Connect with Doctors" description="Consult with verified healthcare professionals." />
            <Feature icon={<CalendarClock className="h-8 w-8" />} title="Virtual Adviser" description="AI-driven chatbot at your service 24/7." />
          </div>
        </motion.section>

        {/* FAQ Section */}
        <motion.section
          id="faq"
          className="w-full py-12 md:py-24 bg-gray-50"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        >
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-indigo-600 text-center">Frequently Asked Questions</h2>
            <p className="text-gray-500 text-center mt-2">
              Find answers to common questions about our platform.
            </p>
            <div className="mt-8 space-y-4">
              <FAQItem question="What is MediPal?" answer="MediPal is a telemedicine platform that connects patients with healthcare providers online." />
              <FAQItem question="Is my medical data secure on MediPal?" answer="Yes, we use state-of-the-art encryption and follow industry standards to ensure your medical records are secure and private." />
              <FAQItem question="Can I consult with any doctor?" answer="MediPal only connects you with verified healthcare professionals to ensure high-quality medical consultations." />
              <FAQItem question="Do I need insurance to use MediPal?" answer="No, MediPal offers flexible payment options, including out-of-pocket payments, so you can access care without insurance." />
            </div>
          </div>
        </motion.section>
      </main>
    </div>
  );
}

/* Feature Component */
function Feature({ icon, title, description }) {
  return (
    <motion.div
      className="flex flex-col items-center text-center p-4 border rounded shadow"
      whileHover={{ scale: 1.05 }}
      transition={{ duration: 0.3 }}
    >
      <div className="h-16 w-16 flex items-center justify-center bg-gradient-to-br from-indigo-500 to-purple-600 rounded-full text-white">
        {icon}
      </div>
      <h3 className="text-xl font-bold mt-4">{title}</h3>
      <p className="text-gray-500 mt-2">{description}</p>
    </motion.div>
  );
}

/* FAQ Item Component */
function FAQItem({ question, answer }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.div
      className="border rounded-lg shadow-md p-4"
      initial={{ opacity: 0.8 }}
      animate={{ opacity: 1 }}
    >
      <button
        className="flex justify-between items-center w-full text-left font-medium text-indigo-600"
        onClick={() => setIsOpen(!isOpen)}
      >
        {question}
        <span className="text-2xl">{isOpen ? "−" : "+"}</span>
      </button>
      <motion.div
        initial={{ height: 0, opacity: 0 }}
        animate={{ height: isOpen ? "auto" : 0, opacity: isOpen ? 1 : 0 }}
        className="overflow-hidden mt-2 text-gray-600"
      >
        {isOpen && <p>{answer}</p>}
      </motion.div>
    </motion.div>
  );
}
export default Home;
