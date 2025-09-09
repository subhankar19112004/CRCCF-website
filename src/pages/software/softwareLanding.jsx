// src/pages/software/softwareLanding.jsx
import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { softwareData } from "../../data/softwareData";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.2 },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 40, scale: 0.95 },
  visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.4 } },
  hover: { scale: 1.05, boxShadow: "0px 8px 24px rgba(0,0,0,0.15)" },
};

const SoftwareLanding = () => {
  return (
    <div className="min-h-screen pt-24 sm:pt-8 bg-gradient-to-br from-gray-50 to-gray-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-screen mx-auto">
        {/* Page Title */}
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-4xl font-bold text-gray-800 text-center mb-12"
        >
          Our Software Services
        </motion.h1>

        {/* Cards Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"
        >
          {softwareData.map((service) => (
            <motion.div
              key={service.slug}
              variants={cardVariants}
              whileHover="hover"
              className="bg-white rounded-2xl border border-gray-800 shadow-md p-6 flex flex-col justify-between transform transition-all duration-300"
            >
              {/* Icon + Title */}
              <div className="flex items-center space-x-4">
                <div className="flex-shrink-0 w-14 h-14 bg-blue-50 rounded-full flex items-center justify-center text-blue-600">
                  {service.icon}
                </div>
                <h2 className="text-lg font-semibold text-gray-800">
                  {service.title}
                </h2>
              </div>

              {/* Description */}
              <p className="text-gray-600 mt-4 flex-grow">{service.description}</p>

              {/* Link */}
              <Link
                to={`/software/${service.slug}`}
                className="mt-6 text-blue-600 font-medium hover:underline self-start"
              >
                Learn More →
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default SoftwareLanding;
