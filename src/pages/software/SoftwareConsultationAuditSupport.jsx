import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const SoftwareConsultationAuditSupport = () => {
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
        <span className="text-gray-700">Software Consultation, Audit & Support</span>
      </nav>

      <h1 className="text-3xl font-bold text-gray-800 mb-4">Software Consultation, Audit & Support</h1>

      <p className="text-gray-700 mb-4">
        Our software consultation and audit services help organizations identify performance gaps, 
        security vulnerabilities, and opportunities for improvement in their software systems.
      </p>
      <p className="text-gray-700 mb-4">
        We conduct in-depth code reviews, infrastructure assessments, and compliance checks to 
        ensure your software meets business and industry standards.
      </p>
      <p className="text-gray-700 mb-4">
        Our support team provides ongoing assistance, ensuring uninterrupted software performance and 
        rapid resolution of technical issues.
      </p>
      <p className="text-gray-700 mb-4">
        With strategic consulting, we guide your technology investments and help build a future-ready roadmap.
      </p>

      <h2 className="text-2xl font-semibold text-gray-800 mt-6 mb-4">Key Offerings</h2>
      <ul className="list-disc ml-6 text-gray-700 space-y-2">
        <li>Software performance audits</li>
        <li>Security assessments and risk mitigation</li>
        <li>Strategic software roadmap consultation</li>
        <li>24/7 software support and maintenance</li>
        <li>Compliance and standards validation</li>
      </ul>
    </motion.div>
  );
};

export default SoftwareConsultationAuditSupport;
