import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const CloudBasedSoftwareSolutions = () => {
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
        <span className="text-gray-700">Cloud-Based Software Solutions</span>
      </nav>

      <h1 className="text-3xl font-bold text-gray-800 mb-4">Cloud-Based Software Solutions</h1>
      
      <p className="text-gray-700 mb-4">
        Our cloud-based solutions help businesses scale quickly, enhance agility, and reduce infrastructure costs. 
        We design secure and efficient cloud-native applications that can seamlessly integrate into your existing systems.
      </p>
      <p className="text-gray-700 mb-4">
        Whether it’s migrating to the cloud, building SaaS platforms, or deploying microservices, our expertise ensures 
        resilience, flexibility, and robust data security.
      </p>
      <p className="text-gray-700 mb-4">
        We work with leading cloud providers like AWS, Azure, and Google Cloud, ensuring optimal utilization 
        of resources and cost efficiency.
      </p>
      <p className="text-gray-700 mb-4">
        With containerized deployments and serverless architectures, we make sure your applications are ready for 
        the future of digital transformation.
      </p>

      <h2 className="text-2xl font-semibold text-gray-800 mt-6 mb-4">Key Offerings</h2>
      <ul className="list-disc ml-6 text-gray-700 space-y-2">
        <li>Cloud migration and modernization</li>
        <li>SaaS platform development</li>
        <li>Serverless and microservices architecture</li>
        <li>Cloud security and compliance management</li>
        <li>Continuous cloud monitoring and support</li>
      </ul>
    </motion.div>
  );
};

export default CloudBasedSoftwareSolutions;
