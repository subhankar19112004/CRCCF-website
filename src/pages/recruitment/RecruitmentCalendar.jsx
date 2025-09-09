import React from "react";
import { motion } from "framer-motion";

const RecruitmentCalendar = () => {
  return (
    <section className="bg-gray-50 py-16 px-6">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="max-w-4xl mx-auto bg-white rounded-2xl shadow-lg p-8"
      >
        <h1 className="text-4xl font-bold mb-6 text-indigo-600">
          Recruitment Calendar
        </h1>
        <p className="text-gray-700 text-lg">
          Recruitment events and deadlines are published in our yearly calendar.
        </p>
      </motion.div>
    </section>
  );
};

export default RecruitmentCalendar;

