import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const MembersRegistration = () => {
  return (
    <section className="max-w-6xl mx-auto px-4 py-16">
      <nav className="text-sm mb-8 text-gray-500">
        <Link to="/" className="hover:text-blue-600">Home</Link> / 
        <Link to="/report-a-cyber-crime" className="hover:text-blue-600"> Report a Cyber Crime </Link> / 
        <span className="text-gray-800"> Members Registration</span>
      </nav>

      <motion.h1 
        initial={{ opacity: 0, y: -20 }} 
        animate={{ opacity: 1, y: 0 }} 
        transition={{ duration: 0.5 }}
        className="text-3xl font-bold text-gray-900 mb-4"
      >
        Members Registration
      </motion.h1>

      <p className="text-lg text-gray-700 mb-6">
        Join CRCCF as a member and be part of our initiative in fighting cyber crime through awareness, research, and real-time action.
      </p>

      <div className="grid sm:grid-cols-2 gap-8">
        <motion.div 
          whileHover={{ scale: 1.02 }}
          className="bg-green-50 p-6 rounded-lg shadow border-l-4 border-green-500"
        >
          <h3 className="text-xl font-semibold mb-3">Benefits</h3>
          <ul className="list-disc pl-5 space-y-2 text-gray-700">
            <li>Exclusive training and webinars.</li>
            <li>Access to research papers and cyber tools.</li>
            <li>Certificate of membership.</li>
          </ul>
        </motion.div>

        <motion.div 
          whileHover={{ scale: 1.02 }}
          className="bg-white p-6 rounded-lg shadow border-l-4 border-blue-500"
        >
          <h3 className="text-xl font-semibold mb-3">How to Register?</h3>
          <ul className="list-decimal pl-5 space-y-2 text-gray-700">
            <li>Fill out the member registration form.</li>
            <li>Submit required documents.</li>
            <li>Complete payment (if applicable).</li>
          </ul>
        </motion.div>
      </div>
    </section>
  );
};

export default MembersRegistration;
