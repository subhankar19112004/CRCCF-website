import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const CybersecurityThreatProtection = () => {
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
        <span className="text-gray-700">Cybersecurity & Threat Protection</span>
      </nav>

      <h1 className="text-3xl font-bold text-gray-800 mb-4">Cybersecurity & Threat Protection</h1>

      <p className="text-gray-700 mb-4">
        We deliver advanced cybersecurity and threat protection solutions designed to safeguard 
        your digital ecosystem. From real-time threat detection to incident response, our tools and 
        strategies are built to mitigate risks proactively.
      </p>
      <p className="text-gray-700 mb-4">
        Our solutions are backed by cutting-edge technologies like AI-powered intrusion detection, 
        end-to-end encryption, and vulnerability scanning, ensuring your digital assets remain protected.
      </p>
      <p className="text-gray-700 mb-4">
        We also offer continuous monitoring, compliance management, and forensic investigation tools 
        to address both preventive and reactive security measures.
      </p>
      <p className="text-gray-700 mb-4">
        In a world of evolving threats, we empower businesses to stay ahead of cybercriminals 
        with reliable and scalable security frameworks.
      </p>

      <h2 className="text-2xl font-semibold text-gray-800 mt-6 mb-4">Key Offerings</h2>
      <ul className="list-disc ml-6 text-gray-700 space-y-2">
        <li>Advanced threat detection systems</li>
        <li>Endpoint and network protection</li>
        <li>Data encryption and access control</li>
        <li>Incident response and threat mitigation</li>
        <li>Regulatory compliance solutions</li>
      </ul>
    </motion.div>
  );
};

export default CybersecurityThreatProtection;
