import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import cyberEducationData from "../../data/cyberEducationData";

const CyberEducationLanding = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br pt-24 sm:pt-8 from-gray-50 via-white to-gray-100 py-16 px-6 md:px-12 lg:px-20">
      <div className="max-w-7xl mx-auto">
        {/* Page Heading */}
        <motion.h1
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-5xl font-bold text-gray-800 text-center mb-12"
        >
          Training Programs
        </motion.h1>

        {/* Cards Grid */}
        <motion.div
          className="grid grid-cols-2 lg:grid-cols-4 gap-6"
          initial="hidden"
          animate="show"
          variants={{
            hidden: {},
            show: { transition: { staggerChildren: 0.2 } },
          }}
        >
          {cyberEducationData.map((item, index) => (
            <motion.div
              key={item.id}
              variants={{
                hidden: { opacity: 0, y: 40 },
                show: { opacity: 1, y: 0 },
              }}
              transition={{ duration: 0.5, ease: "easeOut" }}
            >
              <Link to={`/cyber-education/${item.slug}`}>
                <div className="relative group h-full bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-800 hover:shadow-2xl hover:border-blue-500 transition-all duration-300">
                  {/* Icon Container */}
                  <div className="flex justify-center mt-8">
                    <div className="p-4 rounded-full bg-gradient-to-br from-blue-100 to-blue-50 shadow-inner group-hover:scale-110 transform transition-transform duration-300">
                      {item.icon}
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6 text-center">
                    <h2 className="text-xl font-semibold text-gray-800 mb-2 group-hover:text-blue-600 transition-colors duration-300">
                      {item.title}
                    </h2>
                    <p className="text-gray-500 text-sm">{item.description}</p>
                  </div>

                  {/* Bottom Accent */}
                  <div className="absolute inset-x-0 bottom-0 h-1 bg-gradient-to-r from-blue-500 to-blue-300 scale-x-0 group-hover:scale-x-100 transform origin-left transition-transform duration-300" />
                </div>
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default CyberEducationLanding;
