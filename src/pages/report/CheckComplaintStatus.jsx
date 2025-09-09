import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const CheckComplaintStatus = () => {
  return (
    <section className="max-w-6xl mx-auto px-4 py-16">
      <nav className="text-sm mb-8 text-gray-500">
        <Link to="/" className="hover:text-blue-600">Home</Link> / 
        <Link to="/report-a-cyber-crime" className="hover:text-blue-600"> Report a Cyber Crime </Link> / 
        <span className="text-gray-800"> Check Complaint Status</span>
      </nav>

      <motion.h1 initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}
        className="text-3xl font-bold text-gray-900 mb-4">
        Check Complaint Status
      </motion.h1>

      <p className="text-lg text-gray-700 mb-6">
        Track your complaint status using your unique complaint ID. Get updates in real-time.
      </p>

      <div className="bg-white rounded-lg p-6 shadow border border-gray-200">
        <h3 className="text-lg font-semibold mb-2">Enter Complaint ID:</h3>
        <input type="text" placeholder="e.g. CYB123456" className="border border-gray-300 px-4 py-2 rounded-lg w-full mb-4" />
        <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-2 rounded-lg transition">Check Status</button>
      </div>
    </section>
  );
};

export default CheckComplaintStatus;
