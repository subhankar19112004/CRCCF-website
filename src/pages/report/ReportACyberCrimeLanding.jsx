import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
// 1. Import the correct data
import { reportCyberCrimeData } from '../../data/reportCyberCrimeData';

// 2. Rename the component
const ReportACyberCrimeLanding = () => {
  // --- FUTURISTIC VARIANTS ---

  // Main card: Added 3D rotation on hover
  const cardVariants = {
    rest: {
      rotateY: 0,
      rotateX: 0,
      transition: { type: 'spring', stiffness: 100, damping: 20 },
    },
    hover: {
      rotateY: 8, // Tilts on the Y-axis
      rotateX: -10, // Tilts on the X-axis
      transition: { type: 'spring', stiffness: 200, damping: 20 },
    },
  };

  // Title: Added "frosted glass" (glassmorphism) effect on hover
  const titleVariants = {
    rest: {
      y: 0,
      opacity: 1,
      filter: 'drop-shadow(0 0 0 rgba(0,0,0,0))',
      backgroundColor: 'rgba(0, 0, 0, 0)',
      backdropFilter: 'blur(0px)',
    },
    hover: {
      y: -8,
      opacity: 1,
      filter: 'drop-shadow(0 2px 6px rgba(0,0,0,0.6))',
      backgroundColor: 'rgba(0, 0, 0, 0.35)', // Semi-transparent black
      backdropFilter: 'blur(5px)', // The "frosted glass" effect
      transition: { type: 'tween', duration: 0.28, ease: 'easeOut' },
    },
  };

  // Image: Added a "counter-parallax" scale and movement
  const imageVariants = {
    rest: {
      filter: 'brightness(1) saturate(1)',
      scale: 1,
    },
    hover: {
      filter: 'brightness(1.25) saturate(1.05)',
      scale: 1.15, // Image zooms *inside* the card
      transition: { type: 'tween', duration: 0.28, ease: 'easeOut' },
    },
  };

  // --- Original variants from Indux ---
  const outerBorderVariants = {
    rest: { opacity: 0.45 },
    hover: { opacity: 0.85, transition: { duration: 0.25 } },
  };
  const innerBorderVariants = {
    rest: { opacity: 0.25 },
    hover: { opacity: 0.6, transition: { duration: 0.25 } },
  };
  const sheenVariants = {
    rest: { x: '-120%', opacity: 0 },
    hover: {
      x: '130%',
      opacity: 1,
      transition: { duration: 0.8, ease: 'easeOut' },
    },
  };
  // --- End of variants ---

  return (
    <section className="w-full mx-auto px-2 sm:px-4 md:px-6 py-10 sm:py-12 md:py-16">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-100px' }}
        transition={{ duration: 0.8 }}
        className="text-center mb-10 sm:mb-16"
      >
        {/* 3. Updated heading and paragraph */}
        <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl lg:text-5xl mb-4">
          Report a Cyber Crime with CRCCF
        </h2>
        <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
          Explore resources, guidance, and tools to report cyber crimes
          effectively and securely.
        </p>
      </motion.div>

      {/* 2 cols on small, 4 on large */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 md:gap-5">
        {/* 4. Map over the correct data */}
        {reportCyberCrimeData.map((service, i) => (
          // Added perspective for the 3D effect
          <div key={`${service.title}-${i}`} style={{ perspective: '1000px' }}>
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.55, delay: i * 0.05, ease: 'easeOut' }}
              className="relative rounded-lg overflow-hidden shadow-md"
              style={{ transformStyle: 'preserve-3d' }} // Required for 3D effect
              initial="rest"
              animate="rest"
              whileHover="hover"
              variants={cardVariants} // Use the new 3D card variant
            >
              <Link
                to={service.path} // This uses the path from your new data file
                role="link"
                aria-label={service.title}
                className="block h-full w-full relative"
              >
                {/* image */}
                <div className="relative w-full h-40 sm:h-48 md:h-56 lg:h-64 xl:h-72 overflow-hidden">
                  <motion.img
                    src={service.image}
                    alt={service.title}
                    className="absolute inset-0 w-full h-full object-cover"
                    variants={imageVariants} // Use new parallax image variant
                  />

                  {/* readability gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-black/25 to-transparent pointer-events-none" />

                  {/* double border (animated + responds on hover) */}
                  <motion.div
                    className="absolute inset-0 rounded-lg border-2 border-white/40 pointer-events-none"
                    animate={{ opacity: [0.4, 0.7, 0.4] }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      ease: 'easeInOut',
                    }}
                    variants={outerBorderVariants}
                  />
                  <motion.div
                    className="absolute inset-1 rounded-lg border border-white/30 pointer-events-none"
                    animate={{ opacity: [0.2, 0.5, 0.2] }}
                    transition={{
                      duration: 2.2,
                      repeat: Infinity,
                      ease: 'easeInOut',
                      delay: 0.6,
                    }}
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
                    variants={titleVariants} // Use new "glassmorphism" title variant
                  >
                    {service.title}
                  </motion.h3>
                </div>
              </Link>
            </motion.div>
          </div>
        ))}
      </div>
    </section>
  );
};

// 5. Export the correct component name
export default ReportACyberCrimeLanding;