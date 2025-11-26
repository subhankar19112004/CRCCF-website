import React from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { recruitmentData } from "../../data/recruitmentData";

const RecruitmentLanding = () => {
  const navigate = useNavigate();
  const borderColors = [
    "#3b82f6",
    "#10b981",
    "#8b5cf6",
    "#ec4899",
    "#f59e0b",
    "#ef4444",
    "#14b8a6",
    "#6366f1"
  ];

  return (
    <section className="bg-gray-50 pt-24 sm:pt-8 py-16 sm:py-20">
      <div className="max-w-full mx-auto px-4 sm:px-6 lg:px-8">

        {/* ✅ Updated Header */}
        <div className="text-center mb-16 sm:mb-20">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl lg:text-5xl"
          >
            Recruitment Portal — CRCCF
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="max-w-2xl mx-auto text-lg text-gray-600"
          >
            Access and explore recruitment rules, career opportunities, official
            notices, selection process and track your application status — all in one place.
          </motion.p>
        </div>

        {/* ✅ Small Label */}
        <p className="text-center text-sm uppercase tracking-wide font-semibold text-gray-500 mb-4">
          Explore Recruitment Sections
        </p>

        {/* ✅ Cards Grid */}
        <div className="grid grid-cols-1 gap-y-10 sm:grid-cols-2 sm:gap-x-6 lg:grid-cols-4 lg:gap-x-8 lg:gap-y-6">
          {recruitmentData.map((item, index) => (
            <motion.div
              key={item.slug}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 + 0.2 }}
              whileHover="hover"
              className="relative p-1 rounded-xl cursor-pointer group"
              onClick={() => navigate(`/recruitment-process/${item.slug}`)}
            >

              {/* Hover Border & Effect */}
              <motion.div
                className="absolute inset-0 rounded-xl border-2 border-gray-300 mt-4"
                variants={{
                  hover: {
                    borderColor: borderColors[index],
                    transition: { duration: 0.3 }
                  }
                }}
              />
              <motion.div
                className="absolute inset-0 rounded-xl"
                style={{
                  background: `radial-gradient(circle at var(--x, 50%) var(--y, 50%), ${borderColors[index]}33, transparent 40%)`,
                  opacity: 0
                }}
                variants={{ hover: { opacity: 1, transition: { duration: 0.4 } } }}
              />

              {/* ✅ Card Content */}
              <motion.div
                className="relative bg-white rounded-lg p-6 h-full flex flex-col z-10 border border-gray-900 group-hover:border-transparent transition-colors duration-300"
                variants={{
                  hover: { y: -8, transition: { type: "spring", stiffness: 300 } }
                }}
              >
                <div
                  className="w-12 h-12 rounded-lg mb-5 flex items-center justify-center"
                  style={{ backgroundColor: `${borderColors[index]}1A` }}
                >
                  {item.icon}
                </div>

                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {item.title}
                </h3>

                <p className="text-gray-600 text-base mb-5 flex-grow">
                  {item.description}
                </p>

                <div
                  className="flex items-center font-semibold text-sm"
                  style={{ color: borderColors[index] }}
                >
                  Learn more
                  <motion.svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-4 ml-1.5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2.5}
                    variants={{
                      hover: {
                        x: 4,
                        transition: {
                          type: "spring",
                          stiffness: 400,
                          damping: 15
                        }
                      }
                    }}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M13 7l5 5m0 0l-5 5m5-5H6"
                    />
                  </motion.svg>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default RecruitmentLanding;
