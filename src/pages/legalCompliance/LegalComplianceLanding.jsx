import React from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { legalComplianceData } from "../../data/legalComplianceData";

const LegalComplianceLanding = () => {
  const navigate = useNavigate();
  const borderColors = [
    "#3b82f6", "#10b981", "#8b5cf6", "#ec4899",
    "#f59e0b", "#6366f1", "#ef4444", "#14b8a6"
  ];

  return (
    <section className="bg-gray-50 py-12 pt-24 sm:pt-8 sm:py-20">
      <div className="max-w-full mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12 sm:mb-20">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl lg:text-4xl xl:text-5xl"
          >
            Legal Compliance Framework
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="max-w-2xl mx-auto text-sm sm:text-lg text-gray-600 mt-2"
          >
            Explore how CRCCF adheres to legal and ethical standards in cybersecurity investigations.
          </motion.p>
        </div>

        {/* Cards Grid - EXACT MATCH to AboutUsLanding */}
        <div className="grid grid-cols-1 gap-y-6 sm:grid-cols-2 sm:gap-x-6 lg:grid-cols-4 lg:gap-x-8 lg:gap-y-6">
          {legalComplianceData.map((item, index) => (
            <motion.div
              key={item.slug}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 + 0.2 }}
              whileHover="hover"
              className="relative p-0.5 sm:p-1 rounded-xl cursor-pointer group"
              onClick={() => navigate(`/about/legal-compliance/${item.slug}`)}
            >
              {/* Hover Effects */}
              <motion.div
                className="absolute inset-0 rounded-xl border border-gray-300 mt-2 sm:mt-4"
                variants={{ hover: { borderColor: borderColors[index % borderColors.length], transition: { duration: 0.3 } } }}
              />
              <motion.div
                className="absolute inset-0 rounded-xl"
                style={{
                  background: `radial-gradient(circle at var(--x, 50%) var(--y, 50%), ${borderColors[index % borderColors.length]}33, transparent 40%)`,
                  opacity: 0,
                }}
                variants={{ hover: { opacity: 1, transition: { duration: 0.4 } } }}
              />
              
              {/* Card Content - Mobile-optimized */}
              <motion.div
                className="relative bg-white hover:border-gray-900 rounded-lg p-4 sm:p-6 h-full flex flex-col z-10 border border-gray-900 group-hover:border-transparent transition-colors duration-300"
                variants={{ hover: { y: -6, transition: { type: "spring", stiffness: 300 } } }}
              >
                <div
                  className="w-10 h-10 sm:w-12 sm:h-12 rounded-lg mb-3 sm:mb-5 flex items-center justify-center"
                  style={{ backgroundColor: `${borderColors[index % borderColors.length]}1A` }}
                >
                  {React.cloneElement(item.icon, {
                    className: "w-5 h-5 sm:w-6 sm:h-6"
                  })}
                </div>
                
                <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-1 sm:mb-2">
                  {item.title}
                </h3>
                
                <p className="text-gray-600 text-sm sm:text-base mb-4 sm:mb-5 flex-grow">
                  {item.description}
                </p>
                
                <div 
                  className="flex items-center font-semibold text-xs sm:text-sm"
                  style={{ color: borderColors[index % borderColors.length] }}
                >
                  Learn more
                  <motion.svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-3 w-3 sm:h-4 sm:w-4 ml-1 sm:ml-1.5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2.5}
                    variants={{
                      hover: { x: 3, transition: { type: "spring", stiffness: 400, damping: 15 } },
                    }}
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </motion.svg>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="text-center mt-16 sm:mt-20"
        >
          <motion.button
            whileHover={{
              boxShadow: `0 0 0 2px ${borderColors[0]}`,
              transition: { duration: 0.3 },
            }}
            whileTap={{ scale: 0.98 }}
            className="px-6 py-3 sm:px-8 sm:py-4 bg-gray-900 text-white rounded-lg text-base sm:text-lg font-medium relative overflow-hidden"
            onClick={() => navigate("/contact-us")}
          >
            <span className="relative z-10 flex items-center justify-center">
              Contact Us
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4 sm:h-5 sm:w-5 ml-1 sm:ml-2"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </span>
            <motion.span
              className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 opacity-0"
              variants={{
                hover: { opacity: 1 },
              }}
              transition={{ duration: 0.4 }}
            />
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default LegalComplianceLanding;