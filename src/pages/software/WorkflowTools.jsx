import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const WorkflowTools = () => {
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
        <span className="text-gray-700">Workflow Tools</span>
      </nav>

      <h1 className="text-3xl font-bold text-gray-800 mb-4">Workflow Tools</h1>

      <p className="text-gray-700 mb-4">
        Our workflow tools help organizations automate routine processes, 
        improve team collaboration, and enhance overall productivity.
      </p>
      <p className="text-gray-700 mb-4">
        We design intuitive dashboards, task automation modules, and 
        approval workflows that streamline business operations.
      </p>
      <p className="text-gray-700 mb-4">
        These solutions reduce manual efforts, minimize human errors, 
        and deliver real-time insights into operational efficiency.
      </p>
      <p className="text-gray-700 mb-4">
        By integrating AI-driven automation, our workflow tools can adapt 
        to business-specific needs and scale with organizational growth.
      </p>

      <h2 className="text-2xl font-semibold text-gray-800 mt-6 mb-4">Key Offerings</h2>
      <ul className="list-disc ml-6 text-gray-700 space-y-2">
        <li>Custom workflow automation</li>
        <li>Collaboration and task management platforms</li>
        <li>Approval and compliance tracking systems</li>
        <li>AI-based workflow optimization</li>
        <li>Real-time performance analytics</li>
      </ul>
    </motion.div>
  );
};

export default WorkflowTools;
