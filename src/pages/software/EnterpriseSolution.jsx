import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const EnterpriseSolution = () => {
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
        <span className="text-gray-700">Enterprise Solution (CRM/ERP)</span>
      </nav>

      <h1 className="text-3xl font-bold text-gray-800 mb-4">Enterprise Solution (CRM/ERP)</h1>
      
      <p className="text-gray-700 mb-4">
        Our enterprise solutions are designed to optimize workflows, improve decision-making, and deliver 
        seamless connectivity across various business functions. Whether it’s a CRM to improve customer 
        relationships or an ERP to streamline resources, we’ve got you covered.
      </p>
      <p className="text-gray-700 mb-4">
        We integrate modern technologies and custom modules tailored to your industry and business model, ensuring 
        maximum efficiency and scalability. Our solutions are secure, user-friendly, and highly customizable.
      </p>
      <p className="text-gray-700 mb-4">
        We also ensure seamless integration with your existing infrastructure, allowing you to manage 
        resources, finances, and customer relations effortlessly in one place.
      </p>
      <p className="text-gray-700 mb-4">
        With real-time reporting and AI-driven analytics, you gain insights that support smarter 
        business strategies and growth planning.
      </p>

      <h2 className="text-2xl font-semibold text-gray-800 mt-6 mb-4">Key Offerings</h2>
      <ul className="list-disc ml-6 text-gray-700 space-y-2">
        <li>Custom CRM and ERP solution development</li>
        <li>Integration with existing systems</li>
        <li>Business process automation</li>
        <li>Real-time data analytics and reporting</li>
        <li>Cloud-based deployment for easy access</li>
      </ul>
    </motion.div>
  );
};

export default EnterpriseSolution;
