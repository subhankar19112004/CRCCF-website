import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const AIBigDataAnalytics = () => {
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
        <span className="text-gray-700">AI, Big Data & Analytics</span>
      </nav>

      <h1 className="text-3xl font-bold text-gray-800 mb-4">AI, Big Data & Analytics</h1>
      
      <p className="text-gray-700 mb-4">
        We empower businesses with data-driven decision-making by harnessing Artificial Intelligence (AI) 
        and Big Data Analytics. Our services help organizations unlock hidden patterns, predict trends, and 
        gain actionable insights from large volumes of structured and unstructured data.
      </p>
      <p className="text-gray-700 mb-4">
        Our solutions utilize advanced machine learning models, natural language processing, and real-time 
        analytics, enabling businesses to enhance customer experience, improve efficiency, and optimize operations.
      </p>
      <p className="text-gray-700 mb-4">
        From data collection and cleaning to building predictive models and visual dashboards, our team provides 
        end-to-end support for analytics-driven transformation.
      </p>
      <p className="text-gray-700 mb-4">
        By implementing AI and data intelligence, you can stay ahead in the competitive landscape with 
        informed, strategic decisions backed by accurate insights.
      </p>

      <h2 className="text-2xl font-semibold text-gray-800 mt-6 mb-4">Key Offerings</h2>
      <ul className="list-disc ml-6 text-gray-700 space-y-2">
        <li>Machine Learning model development</li>
        <li>Data pipeline engineering</li>
        <li>Predictive and prescriptive analytics</li>
        <li>Big data infrastructure management</li>
        <li>Custom AI-powered automation solutions</li>
      </ul>
    </motion.div>
  );
};

export default AIBigDataAnalytics;
