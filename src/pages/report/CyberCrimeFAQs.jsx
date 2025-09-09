import React from "react";
import { motion } from "framer-motion";

const CyberCrimeFAQs = () => {
  return (
    <section className="py-16 px-4 max-w-5xl mx-auto">
      <motion.h2 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-4xl font-bold text-gray-900 mb-6"
      >
        Cyber Crime FAQs
      </motion.h2>
      <div className="space-y-4 text-gray-700">
        <div>
          <h3 className="text-lg font-semibold">What is cybercrime?</h3>
          <p>Cybercrime is any crime that involves a computer and a network.</p>
        </div>
        <div>
          <h3 className="text-lg font-semibold">How can I report a cybercrime?</h3>
          <p>You can use our complaint registration portal to file a cybercrime complaint online.</p>
        </div>
      </div>
    </section>
  );
};

export default CyberCrimeFAQs;
