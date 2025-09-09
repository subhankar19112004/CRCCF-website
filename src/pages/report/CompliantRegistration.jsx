import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const CompliantRegistration = () => {
  return (
    <section className="max-w-6xl mx-auto px-4 py-16">
      {/* Breadcrumb */}
      <nav className="text-sm mb-8 text-gray-500">
        <Link to="/" className="hover:text-blue-600">Home</Link> / 
        <Link to="/report-a-cyber-crime" className="hover:text-blue-600"> Report a Cyber Crime </Link> / 
        <span className="text-gray-800"> Compliant Registration</span>
      </nav>

      <motion.h1 
        initial={{ opacity: 0, y: -20 }} 
        animate={{ opacity: 1, y: 0 }} 
        transition={{ duration: 0.5 }}
        className="text-3xl font-bold text-gray-900 mb-4"
      >
        Compliant Registration
      </motion.h1>

      <motion.p 
        initial={{ opacity: 0 }} 
        animate={{ opacity: 1 }} 
        transition={{ delay: 0.2 }} 
        className="text-gray-700 text-lg mb-8"
      >
        Register your complaint online in a secure and streamlined way. This platform ensures quick acknowledgement, safe data handling, and transparent tracking.
      </motion.p>

      <motion.div 
        initial={{ opacity: 0, y: 20 }} 
        animate={{ opacity: 1, y: 0 }} 
        transition={{ delay: 0.4 }}
        className="bg-blue-50 border-l-4 border-blue-500 p-6 rounded-lg shadow"
      >
        <h2 className="text-xl font-semibold mb-2">Steps to Register</h2>
        <ul className="list-disc pl-6 space-y-2 text-gray-700">
          <li>Fill personal and incident details.</li>
          <li>Attach supporting documents/screenshots.</li>
          <li>Submit securely and get your complaint ID instantly.</li>
        </ul>
      </motion.div>
    </section>
  );
};

export default CompliantRegistration;
