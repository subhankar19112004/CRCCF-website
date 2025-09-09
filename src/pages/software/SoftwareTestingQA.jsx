import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const SoftwareTestingQA = () => {
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
        <span className="text-gray-700">Software Testing & QA</span>
      </nav>

      <h1 className="text-3xl font-bold text-gray-800 mb-4">Software Testing & QA</h1>

      <p className="text-gray-700 mb-4">
        We provide end-to-end software testing and quality assurance (QA) services to ensure 
        your applications are bug-free, secure, and performance-optimized before launch.
      </p>
      <p className="text-gray-700 mb-4">
        Our team leverages automated and manual testing techniques to validate functionality, 
        usability, compatibility, and scalability.
      </p>
      <p className="text-gray-700 mb-4">
        With a focus on early defect detection, we reduce production risks and accelerate 
        release cycles for our clients.
      </p>
      <p className="text-gray-700 mb-4">
        From functional testing to penetration testing, our QA processes ensure your product meets 
        the highest industry standards.
      </p>

      <h2 className="text-2xl font-semibold text-gray-800 mt-6 mb-4">Key Offerings</h2>
      <ul className="list-disc ml-6 text-gray-700 space-y-2">
        <li>Functional and regression testing</li>
        <li>Performance and load testing</li>
        <li>Security and penetration testing</li>
        <li>Automated test suite development</li>
        <li>User experience (UX) testing</li>
      </ul>
    </motion.div>
  );
};

export default SoftwareTestingQA;
