import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const IdentityAccessManagementTools = () => {
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
        <span className="text-gray-700">Identity & Access Management Tools</span>
      </nav>

      <h1 className="text-3xl font-bold text-gray-800 mb-4">Identity & Access Management Tools</h1>

      <p className="text-gray-700 mb-4">
        We deliver advanced identity and access management (IAM) solutions to safeguard user 
        credentials and manage secure access to digital resources.
      </p>
      <p className="text-gray-700 mb-4">
        Our IAM tools include single sign-on (SSO), multi-factor authentication (MFA), and 
        role-based access control (RBAC) features.
      </p>
      <p className="text-gray-700 mb-4">
        These solutions ensure compliance with data protection regulations and prevent unauthorized 
        access to sensitive systems.
      </p>
      <p className="text-gray-700 mb-4">
        Our scalable IAM solutions are suitable for enterprises of all sizes, ensuring security 
        without compromising user convenience.
      </p>

      <h2 className="text-2xl font-semibold text-gray-800 mt-6 mb-4">Key Offerings</h2>
      <ul className="list-disc ml-6 text-gray-700 space-y-2">
        <li>Single sign-on and multi-factor authentication</li>
        <li>Role-based access management</li>
        <li>Privileged access management</li>
        <li>Directory integration and user provisioning</li>
        <li>Compliance and audit-ready logging</li>
      </ul>
    </motion.div>
  );
};

export default IdentityAccessManagementTools;
