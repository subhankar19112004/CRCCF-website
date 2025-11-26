

import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { homeServicesData } from "../../data/homeServicesData";

const Indux = () => {
  // variants for a clean, professional feel (no scale)
  const titleVariants = {
    rest: { y: 0, opacity: 1, filter: "drop-shadow(0 0 0 rgba(0,0,0,0))" },
    hover: {
      y: -8,
      opacity: 1,
      filter: "drop-shadow(0 2px 6px rgba(0,0,0,0.6))",
      transition: { type: "tween", duration: 0.28, ease: "easeOut" },
    },
  };

  const imageVariants = {
    rest: { filter: "brightness(1) saturate(1)" },
    hover: {
      filter: "brightness(1.25) saturate(1.05)",
      transition: { type: "tween", duration: 0.28, ease: "easeOut" },
    },
  };

  const outerBorderVariants = {
    rest: { opacity: 0.45 },
    hover: { opacity: 0.85, transition: { duration: 0.25 } },
  };
  const innerBorderVariants = {
    rest: { opacity: 0.25 },
    hover: { opacity: 0.6, transition: { duration: 0.25 } },
  };

  // subtle moving sheen on hover
  const sheenVariants = {
    rest: { x: "-120%", opacity: 0 },
    hover: {
      x: "130%",
      opacity: 1,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  return (
    <section className="w-full mx-auto px-2 sm:px-4 md:px-6 py-10 sm:py-12 md:py-16">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8 }}
        className="text-center mb-10 sm:mb-16"
      >
        <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
          Your shield against cyber threats, providing legal guidance, IT solutions,
          and continuous support to empower society responsibly and securely.
        </p>
      </motion.div>

      {/* 2 cols on small, 4 on large */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 md:gap-5">
        {homeServicesData.map((service, i) => (
          <motion.div
            key={`${service.title}-${i}`}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55, delay: i * 0.05, ease: "easeOut" }}
            className="relative rounded-lg overflow-hidden shadow-md"
            initial="rest"
            animate="rest"
            whileHover="hover"
          >
            <Link to={service.path} role="link" aria-label={service.title} className="block h-full w-full relative">
              {/* image */}
              <div className="relative w-full h-40 sm:h-48 md:h-56 lg:h-64 xl:h-72">
                <motion.img
                  src={service.image}
                  alt={service.title}
                  className="absolute inset-0 w-full h-full object-cover"
                  variants={imageVariants}
                />

                {/* readability gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-black/25 to-transparent pointer-events-none" />

                {/* double border (animated + responds on hover) */}
                <motion.div
                  className="absolute inset-0 rounded-lg border-2 border-white/40 pointer-events-none"
                  animate={{ opacity: [0.4, 0.7, 0.4] }}
                  transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                  variants={outerBorderVariants}
                />
                <motion.div
                  className="absolute inset-1 rounded-lg border border-white/30 pointer-events-none"
                  animate={{ opacity: [0.2, 0.5, 0.2] }}
                  transition={{ duration: 2.2, repeat: Infinity, ease: "easeInOut", delay: 0.6 }}
                  variants={innerBorderVariants}
                />

                {/* sheen sweep */}
                <motion.div
                  className="absolute top-0 -left-1/3 h-full w-1/3 rotate-12 pointer-events-none
                             bg-gradient-to-r from-white/0 via-white/25 to-white/0"
                  variants={sheenVariants}
                />

                {/* title */}
                <motion.h3
                  className="absolute bottom-0 left-0 right-0 px-2 py-2 text-sm sm:text-base md:text-lg font-semibold text-white text-center"
                  variants={titleVariants}
                >
                  {service.title}
                </motion.h3>
              </div>
            </Link>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Indux;
