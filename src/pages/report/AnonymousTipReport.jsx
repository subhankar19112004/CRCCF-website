import React from "react";
import { motion } from "framer-motion";

const AnonymousTipReport = () => {
  return (
    <section className="py-16 px-4 max-w-5xl mx-auto">
      <motion.h2 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-4xl font-bold text-gray-900 mb-6"
      >
        Anonymous Tip / Report
      </motion.h2>
      <p className="text-lg text-gray-600 mb-6">
        Submit anonymous information related to cybercrime activities. 
        Your identity will remain confidential.
      </p>
      <button className="px-6 py-3 bg-blue-600 text-white rounded-md hover:bg-blue-700">
        Submit Tip
      </button>
    </section>
  );
};

export default AnonymousTipReport;
