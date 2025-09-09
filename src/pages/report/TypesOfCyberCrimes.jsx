import React from "react";
import { motion } from "framer-motion";

const TypesOfCyberCrimes = () => {
  const crimes = [
    "Phishing Attacks",
    "Identity Theft",
    "Online Fraud",
    "Hacking",
    "Cyberbullying",
    "Ransomware Attacks",
  ];

  return (
    <section className="py-16 px-4 max-w-5xl mx-auto">
      <motion.h2 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-4xl font-bold text-gray-900 mb-6"
      >
        Types of Cyber Crimes
      </motion.h2>
      <p className="text-gray-600 mb-6">
        Learn about various forms of cybercrime to stay informed and safe online.
      </p>
      <ul className="grid sm:grid-cols-2 gap-4 list-none">
        {crimes.map((crime, idx) => (
          <motion.li 
            key={idx}
            whileHover={{ scale: 1.05 }}
            className="p-4 border rounded-lg shadow hover:shadow-lg"
          >
            {crime}
          </motion.li>
        ))}
      </ul>
    </section>
  );
};

export default TypesOfCyberCrimes;
