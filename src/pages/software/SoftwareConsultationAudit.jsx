import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const SoftwareConsultationAudit = () => {
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
        <span className="text-gray-700">Software Consultation & Audit</span>
      </nav>

      <h1 className="text-3xl font-bold text-gray-800 mb-4">Software Consultation & Audit</h1>

      <p className="text-gray-700 mb-4">
        Our software consultation and audit service focuses exclusively on identifying critical 
        performance issues and security risks within your applications.
      </p>
      <p className="text-gray-700 mb-4">
        We deliver actionable recommendations for optimization and ensure your systems comply 
        with industry best practices.
      </p>
      <p className="text-gray-700 mb-4">
        Our approach includes reviewing source code, checking infrastructure dependencies, and 
        assessing scalability limitations.
      </p>
      <p className="text-gray-700 mb-4">
        With our insights, you can significantly improve software reliability, security, and cost efficiency.
      </p>

      <h2 className="text-2xl font-semibold text-gray-800 mt-6 mb-4">Key Offerings</h2>
      <ul className="list-disc ml-6 text-gray-700 space-y-2">
        <li>Code review and quality analysis</li>
        <li>Security audit and compliance check</li>
        <li>Architecture scalability assessment</li>
        <li>Performance bottleneck analysis</li>
        <li>Future-proofing technology recommendations</li>
      </ul>
    </motion.div>
  );
};

export default SoftwareConsultationAudit;
