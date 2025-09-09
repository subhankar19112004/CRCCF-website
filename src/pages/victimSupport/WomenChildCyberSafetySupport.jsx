import React from "react";
import { motion } from "framer-motion";

const WomenChildCyberSafetySupport = () => {
  return (
    <motion.section
      className="max-w-5xl mx-auto px-4 py-16"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <motion.h1
        className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.5 }}
      >
        Women & Child Cyber Safety Support
      </motion.h1>
      <motion.p
        className="text-lg text-gray-700 leading-relaxed mb-6"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.5 }}
      >
        Special assistance for women and children to handle online threats,
        abuse, and cyber harassment.
      </motion.p>
      <motion.ul
        className="list-disc pl-6 text-gray-700 space-y-3"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4, duration: 0.5 }}
      >
        <li>Women & child safety helpline</li>
        <li>Education on safe online habits</li>
        <li>Quick response protection programs</li>
      </motion.ul>
    </motion.section>
  );
};

export default WomenChildCyberSafetySupport;
