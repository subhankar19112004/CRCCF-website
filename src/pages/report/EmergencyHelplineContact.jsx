import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const EmergencyHelplineContact = () => {
  return (
    <section className="max-w-6xl mx-auto px-4 py-16">
      <nav className="text-sm mb-8 text-gray-500">
        <Link to="/" className="hover:text-blue-600">Home</Link> / 
        <Link to="/report-a-cyber-crime" className="hover:text-blue-600"> Report a Cyber Crime </Link> / 
        <span className="text-gray-800"> Emergency Helpline & Contact</span>
      </nav>

      <motion.h1 initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}
        className="text-3xl font-bold text-gray-900 mb-4">
        Emergency Helpline & Contact
      </motion.h1>

      <p className="text-lg text-gray-700 mb-8">
        Connect with immediate cybercrime response teams and emergency support services available 24/7.
      </p>

      <div className="grid md:grid-cols-2 gap-8">
        <div className="bg-red-50 border-l-4 border-red-500 p-6 rounded-lg shadow">
          <h3 className="text-xl font-semibold mb-2">Emergency Numbers</h3>
          <ul className="list-disc pl-5 space-y-2 text-gray-700">
            <li>Cyber Helpline: 1800-123-4567</li>
            <li>Women Safety Cell: 1091</li>
            <li>Child Helpline: 1098</li>
          </ul>
        </div>
        <div className="bg-blue-50 border-l-4 border-blue-500 p-6 rounded-lg shadow">
          <h3 className="text-xl font-semibold mb-2">Email Support</h3>
          <p className="text-gray-700">Write to us at: support@cybercrime.gov.in</p>
        </div>
      </div>
    </section>
  );
};

export default EmergencyHelplineContact;
