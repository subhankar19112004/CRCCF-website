import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { FiArrowLeft } from "react-icons/fi";

const WhatWeDo = () => (
  <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-green-50 to-green-100 p-6">
    <motion.div
      initial={{ opacity: 0, y: 50, rotateX: -15 }}
      animate={{ opacity: 1, y: 0, rotateX: 0 }}
      transition={{ duration: 0.6 }}
      className="bg-white rounded-2xl shadow-2xl p-8 max-w-3xl w-full text-center"
      style={{ transformStyle: "preserve-3d", perspective: "1000px" }}
    >
      <h1 className="text-3xl font-bold text-green-900 mb-4">What We Do</h1>
      <p className="text-gray-700 text-lg leading-relaxed mb-6">
        We focus on cybersecurity awareness, digital investigation, legal
        support, and providing technical assistance to victims of cybercrimes.
      </p>
      <p className="text-gray-600 mb-8">
        Our teams work tirelessly to ensure safety in the digital ecosystem of
        India.
      </p>
      <motion.div whileHover={{ scale: 1.05 }}>
        <Link
          to="/about"
          className="inline-flex items-center px-5 py-2 rounded-lg bg-green-600 text-white hover:bg-green-700 transition-all"
        >
          <FiArrowLeft className="mr-2" /> Back to About Us
        </Link>
      </motion.div>
    </motion.div>
  </section>
);

export default WhatWeDo;
