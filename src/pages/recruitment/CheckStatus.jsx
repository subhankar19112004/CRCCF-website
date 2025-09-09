import React from "react";
import { motion } from "framer-motion";

const CheckStatus = () => {
  return (
    <section className="bg-gray-50 py-16 px-6">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="max-w-4xl mx-auto bg-white rounded-2xl shadow-lg p-8"
      >
        <h1 className="text-4xl font-bold mb-6 text-indigo-600">
          Check Recruitment Status
        </h1>
        <p className="text-gray-700 text-lg">
          Applicants can check their recruitment status online using their registration ID.
        </p>
      </motion.div>
    </section>
  );
};

export default CheckStatus;
