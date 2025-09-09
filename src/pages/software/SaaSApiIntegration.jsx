import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const SaaSApiIntegration = () => {
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
        <span className="text-gray-700">SaaS Product Development & API Integration</span>
      </nav>

      <h1 className="text-3xl font-bold text-gray-800 mb-4">SaaS Product Development & API Integration</h1>

      <p className="text-gray-700 mb-4">
        We specialize in creating SaaS products that are scalable, secure, and optimized for multi-tenant architectures.
        Our SaaS solutions are designed to reduce operational overhead and accelerate digital transformation.
      </p>
      <p className="text-gray-700 mb-4">
        We also provide API integration services to connect your application with third-party systems,
        enabling seamless data exchange and enhanced functionality.
      </p>
      <p className="text-gray-700 mb-4">
        With our SaaS expertise, we ensure fast deployment, robust performance, and cost efficiency for businesses of all sizes.
      </p>
      <p className="text-gray-700 mb-4">
        We deliver subscription management, billing, analytics, and end-user customization features with our SaaS platforms.
      </p>

      <h2 className="text-2xl font-semibold text-gray-800 mt-6 mb-4">Key Offerings</h2>
      <ul className="list-disc ml-6 text-gray-700 space-y-2">
        <li>Custom SaaS product development</li>
        <li>Third-party API and system integration</li>
        <li>Cloud-native architecture design</li>
        <li>Subscription and billing solutions</li>
        <li>Real-time analytics and reporting modules</li>
      </ul>
    </motion.div>
  );
};

export default SaaSApiIntegration;
