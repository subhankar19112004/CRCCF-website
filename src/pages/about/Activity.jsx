// src/pages/about/Activity.jsx
import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { FiArrowLeft } from "react-icons/fi";

const Activity = () => {
  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-purple-50 to-purple-100 p-6">
      <motion.div
        initial={{ opacity: 0, y: 50, rotateX: -15 }}
        animate={{ opacity: 1, y: 0, rotateX: 0 }}
        transition={{ duration: 0.6 }}
        className="bg-white rounded-2xl shadow-2xl p-8 max-w-3xl w-full text-center"
      >
        <h1 className="text-3xl font-bold text-purple-900 mb-4">
          Activities of CRCCF
        </h1>
        <p className="text-gray-700 text-lg leading-relaxed mb-6">
          We conduct awareness programs, digital safety workshops, cybercrime
          victim support camps, and collaborate with law enforcement for
          investigations.
        </p>
        <p className="text-gray-600 mb-8">
          Our activities also include capacity building for organizations and
          research in cybersecurity.
        </p>
        <Link
          to="/about"
          className="inline-flex items-center px-5 py-2 rounded-lg bg-purple-600 text-white hover:bg-purple-700 transition-all"
        >
          <FiArrowLeft className="mr-2" /> Back to About Us
        </Link>
      </motion.div>
    </section>
  );
};

export default Activity;
