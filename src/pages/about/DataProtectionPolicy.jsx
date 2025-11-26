// src/pages/about/DataProtectionPolicy.jsx
import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { FiArrowLeft } from "react-icons/fi";

const DataProtectionPolicy = () => {
  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-blue-100 p-6">
      <motion.div
        initial={{ opacity: 0, y: 50, rotateX: -15 }}
        animate={{ opacity: 1, y: 0, rotateX: 0 }}
        transition={{ duration: 0.6 }}
        className="bg-white rounded-2xl shadow-2xl p-8 max-w-3xl w-full text-center"
      >
        <h1 className="text-3xl font-bold text-blue-900 mb-4">
          Privacy Data Protection Policy
        </h1>
        <p className="text-gray-700 text-lg leading-relaxed mb-6">
          We are committed to complying with national and international data
          protection laws to ensure confidentiality and safety of digital data.
        </p>
        <p className="text-gray-600 mb-8">
          Our systems are built to minimize risks related to unauthorized data
          access.
        </p>
        <Link
          to="/#services"
          className="inline-flex items-center px-5 py-2 rounded-lg bg-blue-600 text-white hover:bg-blue-700 transition-all"
        >
          <FiArrowLeft className="mr-2" />Explore more services
        </Link>
      </motion.div>
    </section>
  );
};

export default DataProtectionPolicy;
