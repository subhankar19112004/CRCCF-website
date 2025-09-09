import React from "react";
import { motion } from "framer-motion";

const CyberLawsRights = () => {
  return (
    <section className="py-16 px-4 max-w-5xl mx-auto">
      <motion.h2 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-4xl font-bold text-gray-900 mb-6"
      >
        Cyber Laws & Rights
      </motion.h2>
      <p className="text-gray-600 mb-6">
        Understand your rights and the legal framework governing cyber activities in India.
      </p>
      <ul className="list-disc pl-5 space-y-2 text-gray-700">
        <li>Information Technology Act, 2000</li>
        <li>Data Protection and Privacy Laws</li>
        <li>Right to be Forgotten</li>
      </ul>
    </section>
  );
};

export default CyberLawsRights;
