import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const IndustrySpecificSolutions = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen bg-gray-50 p-6 md:p-12"
    >
      <nav className="text-sm text-gray-500 mb-6">
        <Link to="/" className="hover:text-blue-600">Home</Link> /{" "}
        <Link to="/software" className="hover:text-blue-600">Software Services</Link> /{" "}
        <span className="text-gray-700">Industry-Specific Solutions</span>
      </nav>

      <h1 className="text-3xl font-bold text-gray-800 mb-4">Industry-Specific Solutions</h1>

      <p className="text-gray-700 mb-4">
        We develop tailored solutions designed for specific industries like healthcare, finance, 
        manufacturing, retail, and government organizations.
      </p>
      <p className="text-gray-700 mb-4">
        Our approach focuses on addressing unique industry challenges while 
        meeting compliance and operational requirements.
      </p>
      <p className="text-gray-700 mb-4">
        We bring domain expertise and advanced technologies to deliver 
        solutions that maximize efficiency and competitiveness.
      </p>
      <p className="text-gray-700 mb-4">
        Our industry-focused products help businesses streamline operations, 
        reduce costs, and enhance user experience.
      </p>

      <h2 className="text-2xl font-semibold text-gray-800 mt-6 mb-4">Key Offerings</h2>
      <ul className="list-disc ml-6 text-gray-700 space-y-2">
        <li>Healthcare software solutions</li>
        <li>Fintech and banking applications</li>
        <li>Retail and eCommerce platforms</li>
        <li>Manufacturing and supply chain tools</li>
        <li>Government and public sector solutions</li>
      </ul>
    </motion.div>
  );
};

export default IndustrySpecificSolutions;
