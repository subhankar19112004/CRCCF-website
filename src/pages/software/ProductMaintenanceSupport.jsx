import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const ProductMaintenanceSupport = () => {
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
        <span className="text-gray-700">Product Maintenance & Support</span>
      </nav>

      <h1 className="text-3xl font-bold text-gray-800 mb-4">Product Maintenance & Support</h1>

      <p className="text-gray-700 mb-4">
        Our product maintenance and support services ensure the continuous 
        performance and reliability of your applications.
      </p>
      <p className="text-gray-700 mb-4">
        We monitor, troubleshoot, and optimize your software to reduce downtime 
        and improve customer experience.
      </p>
      <p className="text-gray-700 mb-4">
        Our support services include bug fixing, updates, upgrades, and feature enhancements.
      </p>
      <p className="text-gray-700 mb-4">
        We deliver 24/7 technical support to keep your systems operational and secure.
      </p>

      <h2 className="text-2xl font-semibold text-gray-800 mt-6 mb-4">Key Offerings</h2>
      <ul className="list-disc ml-6 text-gray-700 space-y-2">
        <li>Application monitoring and health checks</li>
        <li>Bug fixes and performance tuning</li>
        <li>Security patches and version upgrades</li>
        <li>Feature enhancement and scaling support</li>
        <li>24/7 technical support desk</li>
      </ul>
    </motion.div>
  );
};

export default ProductMaintenanceSupport;
