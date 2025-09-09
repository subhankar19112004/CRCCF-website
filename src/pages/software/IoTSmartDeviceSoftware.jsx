import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const IoTSmartDeviceSoftware = () => {
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
        <span className="text-gray-700">IoT & Smart Device Software</span>
      </nav>

      <h1 className="text-3xl font-bold text-gray-800 mb-4">IoT & Smart Device Software</h1>

      <p className="text-gray-700 mb-4">
        We build IoT and smart device software solutions that connect, monitor, 
        and control devices remotely, empowering businesses with real-time data 
        and automation.
      </p>
      <p className="text-gray-700 mb-4">
        From smart home applications to industrial IoT platforms, our solutions 
        enable seamless device integration and efficient data exchange.
      </p>
      <p className="text-gray-700 mb-4">
        We focus on security, scalability, and compatibility across multiple devices 
        and ecosystems, ensuring long-term usability.
      </p>
      <p className="text-gray-700 mb-4">
        With predictive analytics and AI-driven controls, our IoT solutions 
        improve productivity and deliver exceptional user experiences.
      </p>

      <h2 className="text-2xl font-semibold text-gray-800 mt-6 mb-4">Key Offerings</h2>
      <ul className="list-disc ml-6 text-gray-700 space-y-2">
        <li>IoT device connectivity and integration</li>
        <li>Smart home and industrial automation</li>
        <li>IoT cloud platforms and dashboards</li>
        <li>Edge computing and real-time analytics</li>
        <li>IoT data security solutions</li>
      </ul>
    </motion.div>
  );
};

export default IoTSmartDeviceSoftware;
