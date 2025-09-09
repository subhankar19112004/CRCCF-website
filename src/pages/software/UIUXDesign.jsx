import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const UIUXDesign = () => {
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
        <span className="text-gray-700">UI/UX Design</span>
      </nav>

      <h1 className="text-3xl font-bold text-gray-800 mb-4">UI/UX Design</h1>

      <p className="text-gray-700 mb-4">
        We create visually appealing and user-friendly interfaces designed to deliver 
        exceptional digital experiences for your customers.
      </p>
      <p className="text-gray-700 mb-4">
        Our design process includes user research, wireframing, prototyping, 
        and usability testing to ensure intuitive and functional designs.
      </p>
      <p className="text-gray-700 mb-4">
        By combining creativity with design thinking principles, 
        we craft solutions that enhance brand identity and usability.
      </p>
      <p className="text-gray-700 mb-4">
        Our UI/UX services cover websites, mobile apps, SaaS platforms, and enterprise solutions.
      </p>

      <h2 className="text-2xl font-semibold text-gray-800 mt-6 mb-4">Key Offerings</h2>
      <ul className="list-disc ml-6 text-gray-700 space-y-2">
        <li>User research and journey mapping</li>
        <li>Wireframing and interactive prototyping</li>
        <li>Responsive web and mobile interface design</li>
        <li>Usability testing and optimization</li>
        <li>Brand-centric visual design systems</li>
      </ul>
    </motion.div>
  );
};

export default UIUXDesign;
