// src/pages/about/GDPR.jsx
import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { FiArrowLeft } from "react-icons/fi";

const GDPR = () => {
  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-teal-50 to-teal-100 p-6">
      <motion.div
        initial={{ opacity: 0, y: 50, rotateX: -15 }}
        animate={{ opacity: 1, y: 0, rotateX: 0 }}
        transition={{ duration: 0.6 }}
        className="bg-white rounded-2xl shadow-2xl p-8 max-w-3xl w-full text-center"
      >
        <h1 className="text-3xl font-bold text-teal-900 mb-4">GDPR</h1>
        <p className="text-gray-700 text-lg leading-relaxed mb-6">
          We comply with the EU’s General Data Protection Regulation (GDPR) to
          ensure privacy and data safety for global users.
        </p>
        <p className="text-gray-600 mb-8">
          Our practices include transparency in how we handle personal
          information and providing full rights to data owners.
        </p>
        <Link
          to="/services#"
          className="inline-flex items-center px-5 py-2 rounded-lg bg-teal-600 text-white hover:bg-teal-700 transition-all"
        >
          <FiArrowLeft className="mr-2" /> Explore more services
        </Link>
      </motion.div>
    </section>
  );
};

export default GDPR;
