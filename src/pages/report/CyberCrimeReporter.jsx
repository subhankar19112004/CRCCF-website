import React from "react";
import { motion } from "framer-motion";

const CyberCrimeReporter = () => {
  return (
    <section className="py-16 px-4 max-w-5xl mx-auto">
      <motion.h2 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-4xl font-bold text-gray-900 mb-6"
      >
        Cybercrime Reporter
      </motion.h2>
      <p className="text-gray-600 mb-6">
        A platform for cybersecurity journalists to report on emerging threats and trends.
      </p>
      <button className="px-6 py-3 bg-blue-600 text-white rounded-md hover:bg-blue-700">
        Submit a Report
      </button>
    </section>
  );
};

export default CyberCrimeReporter;
