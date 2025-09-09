import React from "react";
import { motion } from "framer-motion";

const JobVacancy = () => {
  return (
    <section className="bg-gray-50 py-16 px-6">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="max-w-4xl mx-auto bg-white rounded-2xl shadow-lg p-8"
      >
        <h1 className="text-4xl font-bold mb-6 text-indigo-600">
          Job Vacancy
        </h1>
        <p className="text-gray-700 text-lg mb-4">
          CRCCF regularly updates job opportunities for talented professionals across cybersecurity and IT domains.
        </p>
        <ul className="list-disc list-inside text-gray-600 space-y-2">
          <li>Check new openings regularly</li>
          <li>Apply online with complete details</li>
        </ul>
      </motion.div>
    </section>
  );
};

export default JobVacancy;
