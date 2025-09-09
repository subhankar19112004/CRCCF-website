// src/pages/about/IntroductionOfCRCCF.jsx
import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { FiArrowLeft } from "react-icons/fi";

const IntroductionOfCRCCF = () => {
  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-blue-100 p-6">
      <motion.div
        initial={{ opacity: 0, y: 50, rotateX: -15 }}
        animate={{ opacity: 1, y: 0, rotateX: 0 }}
        transition={{ duration: 0.6 }}
        className="bg-white rounded-2xl shadow-2xl p-8 max-w-3xl w-full text-center"
        style={{ transformStyle: "preserve-3d", perspective: "1000px" }}
      >
        <h1 className="text-3xl font-bold text-blue-900 mb-4">
          Introduction of CRCCF
        </h1>
        <p className="text-gray-700 text-lg leading-relaxed mb-6">
          CRCCF (Cyber Crime Foundation) was established in 2025 under Section 8
          of the Companies Act as a non-profit organization focused on building
          a secure digital future.
        </p>
        <p className="text-gray-600 mb-8">
          We empower citizens, support victims of cybercrime, and promote
          digital safety awareness throughout India.
        </p>
        <motion.div whileHover={{ scale: 1.05 }}>
          <Link
            to="/about"
            className="inline-flex items-center px-5 py-2 rounded-lg bg-blue-600 text-white hover:bg-blue-700 transition-all"
          >
            <FiArrowLeft className="mr-2" /> Back to About Us
          </Link>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default IntroductionOfCRCCF;
