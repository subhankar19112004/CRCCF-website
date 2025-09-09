import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const DigitalForensicEvidenceManagement = () => {
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
        <span className="text-gray-700">Digital Forensic & Evidence Management</span>
      </nav>

      <h1 className="text-3xl font-bold text-gray-800 mb-4">Digital Forensic & Evidence Management</h1>

      <p className="text-gray-700 mb-4">
        Our digital forensic and evidence management solutions help law enforcement agencies, 
        enterprises, and legal teams collect, preserve, and analyze digital evidence efficiently 
        and securely.
      </p>
      <p className="text-gray-700 mb-4">
        We deliver advanced forensic tools capable of retrieving data from multiple sources, 
        including computers, mobile devices, and cloud services, while maintaining chain of custody.
      </p>
      <p className="text-gray-700 mb-4">
        These tools support investigations involving cybercrime, fraud, intellectual property theft, 
        and other digital offenses.
      </p>
      <p className="text-gray-700 mb-4">
        Our systems ensure evidence integrity, regulatory compliance, and scalability for handling 
        high volumes of forensic data.
      </p>

      <h2 className="text-2xl font-semibold text-gray-800 mt-6 mb-4">Key Offerings</h2>
      <ul className="list-disc ml-6 text-gray-700 space-y-2">
        <li>Advanced evidence collection and storage</li>
        <li>Mobile and cloud forensics</li>
        <li>Chain of custody compliance</li>
        <li>AI-powered data analysis tools</li>
        <li>Custom forensic reporting systems</li>
      </ul>
    </motion.div>
  );
};

export default DigitalForensicEvidenceManagement;
