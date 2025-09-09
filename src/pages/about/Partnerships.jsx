// src/pages/about/Partnerships.jsx
import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { FiArrowLeft } from "react-icons/fi";

const Partnerships = () => {
  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-cyan-50 to-cyan-100 p-6">
      <motion.div
        initial={{ opacity: 0, y: 50, rotateX: -15 }}
        animate={{ opacity: 1, y: 0, rotateX: 0 }}
        transition={{ duration: 0.6 }}
        className="bg-white rounded-2xl shadow-2xl p-8 max-w-3xl w-full text-center"
      >
        <h1 className="text-3xl font-bold text-cyan-900 mb-4">Partnerships & Collaborations</h1>
        <p className="text-gray-700 text-lg leading-relaxed mb-6">
          CRCCF works with government bodies, private organizations, and international agencies to fight cybercrime.
        </p>
        <p className="text-gray-600 mb-8">
          Our partnerships strengthen our digital safety mission globally.
        </p>
        <Link to="/about" className="inline-flex items-center px-5 py-2 rounded-lg bg-cyan-600 text-white hover:bg-cyan-700 transition-all">
          <FiArrowLeft className="mr-2" /> Back to About Us
        </Link>
      </motion.div>
    </section>
  );
};

export default Partnerships;
