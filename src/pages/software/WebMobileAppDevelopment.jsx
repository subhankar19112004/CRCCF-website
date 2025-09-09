import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const WebMobileAppDevelopment = () => {
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
        <span className="text-gray-700">Web & Mobile App Development</span>
      </nav>

      <h1 className="text-3xl font-bold text-gray-800 mb-4">Web & Mobile App Development</h1>
      
      <p className="text-gray-700 mb-4">
        We deliver high-performance web and mobile applications designed to engage users, streamline workflows, 
        and drive business growth. Our development team leverages modern frameworks and agile methodologies 
        to ensure secure, scalable, and visually appealing apps.
      </p>
      <p className="text-gray-700 mb-4">
        Whether it’s a native app, a cross-platform solution, or a progressive web app (PWA), our expertise ensures 
        your project is future-ready and user-centric. We prioritize performance, usability, and seamless integrations.
      </p>
      <p className="text-gray-700 mb-4">
        Our process includes wireframing, UX research, development, testing, and post-launch support, ensuring your 
        app runs flawlessly across all devices and platforms.
      </p>
      <p className="text-gray-700 mb-4">
        By blending design thinking and robust engineering, we help businesses turn their ideas into functional digital products 
        that leave a lasting impact.
      </p>

      <h2 className="text-2xl font-semibold text-gray-800 mt-6 mb-4">Key Offerings</h2>
      <ul className="list-disc ml-6 text-gray-700 space-y-2">
        <li>Cross-platform and native mobile apps</li>
        <li>Progressive Web Applications (PWA)</li>
        <li>Custom web application development</li>
        <li>API-driven architecture for better integrations</li>
        <li>Complete lifecycle support and maintenance</li>
      </ul>
    </motion.div>
  );
};

export default WebMobileAppDevelopment;
