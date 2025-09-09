import React from "react";
import { motion } from "framer-motion";

const CyberCrimeLawyers = () => {
  const lawyers = [
    { name: "Adv. A. Sharma", expertise: "Cyber Fraud & Data Theft" },
    { name: "Adv. R. Mehta", expertise: "Online Harassment & Privacy" },
    { name: "Adv. P. Nair", expertise: "Hacking & Intellectual Property" },
  ];

  return (
    <section className="py-16 px-4 max-w-5xl mx-auto">
      <motion.h2 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-4xl font-bold text-gray-900 mb-6"
      >
        Cyber Crime Lawyers
      </motion.h2>
      <div className="space-y-4">
        {lawyers.map((lawyer, idx) => (
          <div key={idx} className="border rounded-lg p-4 shadow hover:shadow-lg transition">
            <h3 className="font-semibold text-xl">{lawyer.name}</h3>
            <p className="text-gray-600">{lawyer.expertise}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default CyberCrimeLawyers;
