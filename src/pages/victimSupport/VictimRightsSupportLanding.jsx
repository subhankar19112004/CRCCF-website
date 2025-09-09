import React from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { victimRightsSupportData } from "../../data/victimRightsSupportData";

const VictimRightsSupportLanding = () => {
  const navigate = useNavigate();

  const cardColors = [
    "#2563eb", "#059669", "#d97706", "#dc2626",
    "#7c3aed", "#db2777", "#0891b2", "#65a30d"
  ];

  return (
    <section className="bg-gray-50 py-16 pt-24 sm:pt-8 sm:py-20 relative overflow-hidden">
      {/* Animated Background Circles */}
      <motion.div
        className="absolute top-0 left-0 w-96 h-96 rounded-full bg-blue-100 opacity-40 blur-3xl"
        animate={{ x: [0, 30, -30, 0], y: [0, 20, -20, 0] }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute bottom-0 right-0 w-[28rem] h-[28rem] rounded-full bg-pink-100 opacity-40 blur-3xl"
        animate={{ x: [0, -20, 20, 0], y: [0, -30, 30, 0] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
      />

      <div className="relative z-10 max-w-screen mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl lg:text-5xl"
          >
            Victim Rights & Support
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="max-w-2xl mx-auto text-lg text-gray-600"
          >
            Explore dedicated services, resources, and help centers built to protect and support cybercrime victims.
          </motion.p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {victimRightsSupportData.map((item, index) => {
            const color = cardColors[index % cardColors.length];
            return (
              <motion.div
                key={item.slug}
                whileHover={{ scale: 1.05, rotate: 0.5 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => navigate(`/report/victim-rights-support/${item.slug}`)}
                className="cursor-pointer group relative rounded-2xl bg-white shadow-xl hover:shadow-2xl transition-all p-6 flex flex-col items-start"
              >
                {/* Icon */}
                <div
                  className="w-14 h-14 flex items-center justify-center rounded-xl mb-4"
                  style={{ backgroundColor: `${color}1A`, color: color }}
                >
                  {React.cloneElement(item.icon, { className: "w-7 h-7" })}
                </div>

                {/* Title */}
                <h3 className="text-lg font-semibold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
                  {item.title}
                </h3>

                {/* Description */}
                <p className="text-gray-600 text-sm flex-grow">{item.description}</p>

                {/* Arrow CTA */}
                <motion.div
                  whileHover={{ x: 5 }}
                  className="mt-4 text-sm font-semibold"
                  style={{ color: color }}
                >
                  Learn More →
                </motion.div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default VictimRightsSupportLanding;
