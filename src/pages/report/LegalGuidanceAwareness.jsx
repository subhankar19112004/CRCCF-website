import React from "react";
import { motion } from "framer-motion";

const LegalGuidanceAwareness = () => {
  return (
    <section className="py-16 px-4 max-w-5xl mx-auto">
      <motion.h2 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-4xl font-bold text-gray-900 mb-6"
      >
        Legal Guidance & Awareness
      </motion.h2>
      <p className="text-lg text-gray-600 mb-6">
        Get expert legal guidance and awareness resources to better understand your 
        rights and actions you can take when facing cybercrime incidents.
      </p>
      <ul className="list-disc pl-5 space-y-2 text-gray-700">
        <li>Know your rights under cyber laws</li>
        <li>Get legal advisory support</li>
        <li>Educational sessions and awareness programs</li>
      </ul>
    </section>
  );
};

export default LegalGuidanceAwareness;
