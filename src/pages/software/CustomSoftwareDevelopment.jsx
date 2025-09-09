import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const CustomSoftwareDevelopment = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen bg-gray-50 p-6 md:p-12"
    >
      {/* Breadcrumb */}
      <nav className="text-sm text-gray-500 mb-6">
        <Link to="/" className="hover:text-blue-600">Home</Link> /{" "}
        <Link to="/software" className="hover:text-blue-600">Software Services</Link> /{" "}
        <span className="text-gray-700">Custom Software Development</span>
      </nav>

      {/* Heading */}
      <h1 className="text-3xl font-bold text-gray-800 mb-4">Custom Software Development</h1>
      
      {/* Content */}
      <p className="text-gray-700 mb-4">
        Our custom software development service focuses on building scalable, secure, and future-ready
        applications tailored to your unique business requirements. Whether you need internal business process automation 
        or customer-facing solutions, our team ensures every aspect of the application aligns perfectly with your goals.
      </p>
      <p className="text-gray-700 mb-4">
        We follow industry best practices and proven methodologies to ensure that every product we deliver meets the highest 
        quality standards. With a focus on performance, flexibility, and seamless user experience, our solutions enable you 
        to stay ahead in a competitive market.
      </p>
      <p className="text-gray-700 mb-4">
        We specialize in building applications from scratch or enhancing your existing infrastructure. From planning and UI/UX 
        design to development, testing, and post-deployment support, our experts take full ownership of delivering success.
      </p>
      <p className="text-gray-700 mb-4">
        By leveraging cutting-edge technologies like microservices architecture, cloud-native tools, and advanced analytics, 
        we ensure your software can adapt to changing demands and business growth with ease.
      </p>

      {/* Bullet Points */}
      <h2 className="text-2xl font-semibold text-gray-800 mt-6 mb-4">Key Offerings</h2>
      <ul className="list-disc ml-6 text-gray-700 space-y-2">
        <li>End-to-end software design and development</li>
        <li>Legacy software modernization and migration</li>
        <li>Integration with third-party systems and APIs</li>
        <li>Scalable and secure architectures</li>
        <li>Comprehensive post-launch support and maintenance</li>
      </ul>
    </motion.div>
  );
};

export default CustomSoftwareDevelopment;
