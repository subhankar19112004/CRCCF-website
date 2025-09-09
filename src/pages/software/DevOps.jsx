import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const DevOps = () => {
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
        <span className="text-gray-700">DevOps</span>
      </nav>

      <h1 className="text-3xl font-bold text-gray-800 mb-4">DevOps</h1>

      <p className="text-gray-700 mb-4">
        Our DevOps services bridge the gap between development and operations, enabling faster, 
        more reliable software delivery with continuous integration and continuous deployment (CI/CD).
      </p>
      <p className="text-gray-700 mb-4">
        We automate build, test, and deployment pipelines to ensure rapid iteration and stable production releases.
      </p>
      <p className="text-gray-700 mb-4">
        By leveraging containerization and cloud-native tools, we ensure scalability, consistency, 
        and high availability across environments.
      </p>
      <p className="text-gray-700 mb-4">
        Our DevOps approach enhances collaboration, reduces downtime, and improves customer satisfaction.
      </p>

      <h2 className="text-2xl font-semibold text-gray-800 mt-6 mb-4">Key Offerings</h2>
      <ul className="list-disc ml-6 text-gray-700 space-y-2">
        <li>CI/CD pipeline automation</li>
        <li>Infrastructure as Code (IaC) solutions</li>
        <li>Cloud orchestration and containerization</li>
        <li>Monitoring and logging frameworks</li>
        <li>Automated deployment and rollback systems</li>
      </ul>
    </motion.div>
  );
};

export default DevOps;
