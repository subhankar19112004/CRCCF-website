import React from "react";
import { motion } from "framer-motion";

const OnlineSafetyTips = () => {
  return (
    <section className="py-16 px-4 max-w-5xl mx-auto">
      <motion.h2 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-4xl font-bold text-gray-900 mb-6"
      >
        Online Safety & Prevention Tips
      </motion.h2>
      <ul className="list-disc pl-5 space-y-2 text-gray-700">
        <li>Use strong and unique passwords</li>
        <li>Enable two-factor authentication</li>
        <li>Avoid clicking on suspicious links</li>
        <li>Keep software updated regularly</li>
      </ul>
    </section>
  );
};

export default OnlineSafetyTips;
