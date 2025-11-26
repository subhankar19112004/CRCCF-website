// src/pages/about/Instruction.jsx
import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { FiArrowLeft } from "react-icons/fi";

const Instruction = () => {
  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-red-50 to-red-100 p-6">
      <motion.div
        initial={{ opacity: 0, y: 50, rotateX: -15 }}
        animate={{ opacity: 1, y: 0, rotateX: 0 }}
        transition={{ duration: 0.6 }}
        className="bg-white rounded-2xl shadow-2xl p-8 max-w-3xl w-full text-center"
      >
        <h1 className="text-3xl font-bold text-red-900 mb-4">Instructions</h1>
        <p className="text-gray-700 text-lg leading-relaxed mb-6">
          Instructions for handling cybercrime cases, filling out reports, and contacting the relevant departments.
        </p>
        <p className="text-gray-600 mb-8">
          These instructions are mandatory for smooth operations.
        </p>
        <Link to="/services#" className="inline-flex items-center px-5 py-2 rounded-lg bg-red-600 text-white hover:bg-red-700 transition-all">
          <FiArrowLeft className="mr-2" /> Explore more services
        </Link>
      </motion.div>
    </section>
  );
};

export default Instruction;
