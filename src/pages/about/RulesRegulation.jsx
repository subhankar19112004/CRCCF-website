// src/pages/about/RulesRegulation.jsx
import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { FiArrowLeft } from "react-icons/fi";

const RulesRegulation = () => {
  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-green-50 to-green-100 p-6">
      <motion.div
        initial={{ opacity: 0, y: 50, rotateX: -15 }}
        animate={{ opacity: 1, y: 0, rotateX: 0 }}
        transition={{ duration: 0.6 }}
        className="bg-white rounded-2xl shadow-2xl p-8 max-w-3xl w-full text-center"
      >
        <h1 className="text-3xl font-bold text-green-900 mb-4">Rules & Regulations</h1>
        <p className="text-gray-700 text-lg leading-relaxed mb-6">
          Our operational rules and organizational regulations ensure proper governance and smooth workflows.
        </p>
        <p className="text-gray-600 mb-8">
          These are in compliance with government guidelines and best practices.
        </p>
        <Link to="/about" className="inline-flex items-center px-5 py-2 rounded-lg bg-green-600 text-white hover:bg-green-700 transition-all">
          <FiArrowLeft className="mr-2" /> Back to About Us
        </Link>
      </motion.div>
    </section>
  );
};

export default RulesRegulation;
