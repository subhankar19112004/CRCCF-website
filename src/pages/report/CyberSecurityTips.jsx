import React from "react";
import { motion } from "framer-motion";

const CyberSecurityTips = () => {
  const tips = [
    "Always update your software",
    "Use strong and unique passwords",
    "Avoid public Wi-Fi for sensitive transactions",
    "Regularly back up important data",
  ];

  return (
    <section className="py-16 px-4 max-w-5xl mx-auto">
      <motion.h2 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-4xl font-bold text-gray-900 mb-6"
      >
        Cyber Security Tips
      </motion.h2>
      <ul className="list-disc pl-5 space-y-2 text-gray-700">
        {tips.map((tip, idx) => (
          <li key={idx}>{tip}</li>
        ))}
      </ul>
    </section>
  );
};

export default CyberSecurityTips;
