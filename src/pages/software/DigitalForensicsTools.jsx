import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const DigitalForensicsTools = () => {
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
        <span className="text-gray-700">Digital Forensics Tools</span>
      </nav>

      <h1 className="text-3xl font-bold text-gray-800 mb-4">Digital Forensics Tools</h1>

      <p className="text-gray-700 mb-4">
        We provide advanced digital forensics tools that allow investigators to extract, analyze, and preserve 
        digital evidence from multiple sources, including mobile devices, networks, and cloud platforms.
      </p>
      <p className="text-gray-700 mb-4">
        Our tools ensure data integrity, chain of custody, and legal admissibility while speeding up 
        investigation processes.
      </p>
      <p className="text-gray-700 mb-4">
        With AI-powered analysis and automation features, investigators can uncover hidden evidence quickly 
        and accurately.
      </p>
      <p className="text-gray-700 mb-4">
        These tools are built for scalability, allowing forensic teams to handle complex digital cases efficiently.
      </p>

      <h2 className="text-2xl font-semibold text-gray-800 mt-6 mb-4">Key Offerings</h2>
      <ul className="list-disc ml-6 text-gray-700 space-y-2">
        <li>Mobile and cloud forensic solutions</li>
        <li>Network traffic analysis tools</li>
        <li>AI-driven evidence correlation</li>
        <li>Automated reporting systems</li>
        <li>Compliance-ready evidence management</li>
      </ul>
    </motion.div>
  );
};

export default DigitalForensicsTools;
