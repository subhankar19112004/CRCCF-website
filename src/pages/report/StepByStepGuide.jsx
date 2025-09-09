import React from "react";
import { motion } from "framer-motion";

const StepByStepGuide = () => {
  const steps = [
    "Identify and collect evidence",
    "Submit complaint via official portal",
    "Track complaint status online",
    "Follow up with provided support team",
  ];

  return (
    <section className="py-16 px-4 max-w-5xl mx-auto">
      <motion.h2 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-4xl font-bold text-gray-900 mb-6"
      >
        Step-by-Step Reporting Guide
      </motion.h2>
      <ol className="list-decimal pl-5 space-y-2 text-gray-700">
        {steps.map((step, idx) => (
          <li key={idx}>{step}</li>
        ))}
      </ol>
    </section>
  );
};

export default StepByStepGuide;
