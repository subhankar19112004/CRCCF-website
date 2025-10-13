// OurCyberInvestigationCapacity.jsx
// Okay bhai, I've built this page carefully.
// Corrected the import path and used max-w-7xl as you said.
// It's a single page since the data is small, with 5 new unique SVGs.

import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
// Corrected import path as requested:
import { cyberInvestigationCapacityData } from "../../data/cyberInvestigationCapacityData";

// --- 1. Unique, Highly Animated SVG Components ---

const svgContainerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.1,
    },
  },
};

const pathVariants = {
  hidden: { pathLength: 0, opacity: 0 },
  visible: {
    pathLength: 1,
    opacity: 1,
    transition: {
      duration: 1.5,
      ease: "easeInOut",
    },
  },
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: { y: 0, opacity: 1 },
};

const DigitalNationSVG = () => (
  <motion.svg viewBox="0 0 200 200" initial="hidden" animate="visible" variants={svgContainerVariants}>
    <motion.circle cx="100" cy="100" r="60" fill="none" stroke="#4299E1" strokeWidth="3" variants={pathVariants} />
    <motion.path d="M100,30 L170,60 L170,120 C170,160 100,180 100,180 C100,180 30,160 30,120 L30,60 L100,30 Z"
      fill="rgba(199, 249, 204, 0.5)"
      stroke="#48BB78"
      strokeWidth="4"
      variants={{ hidden: { scale: 0 }, visible: { scale: 1, transition: { delay: 0.8, type: "spring" } } }}
    />
  </motion.svg>
);

const SkilledExpertsSVG = () => (
  <motion.svg viewBox="0 0 200 200" initial="hidden" animate="visible" variants={svgContainerVariants}>
    <motion.path d="M100,40 C 60,40 40,70 40,100 C 40,130 60,160 100,160" fill="none" stroke="#A0AEC0" strokeWidth="2" variants={pathVariants} />
    <motion.path d="M100,40 C 140,40 160,70 160,100 C 160,130 140,160 100,160" fill="none" stroke="#A0AEC0" strokeWidth="2" variants={{...pathVariants, visible: {...pathVariants.visible, transition: { ...pathVariants.visible.transition, delay: 0.2 }}}} />
    <motion.circle cx="100" cy="100" r="10" fill="#4299E1" variants={itemVariants} />
    <motion.path d="M100 90 L100 60 M130 85 L150 70 M70 85 L50 70" stroke="#718096" variants={pathVariants} />
    <motion.path d="M100 110 L100 140 M130 115 L150 130 M70 115 L50 130" stroke="#48BB78" variants={pathVariants} />
  </motion.svg>
);

const ForensicTechSVG = () => (
  <motion.svg viewBox="0 0 200 200" initial="hidden" animate="visible" variants={svgContainerVariants}>
    <motion.rect x="40" y="40" width="120" height="120" rx="5" fill="#F7FAFC" stroke="#A0AEC0" strokeWidth="2" variants={itemVariants} />
    <motion.path d="M60 70 L 140 70 M60 100 L 140 100 M60 130 L 140 130" stroke="#EDF2F7" variants={pathVariants} />
    <motion.circle cx="80" cy="100" r="25" fill="none" stroke="#4299E1" strokeWidth="4" variants={pathVariants} />
    <motion.line x1="100" y1="120" x2="130" y2="150" stroke="#4299E1" strokeWidth="5" variants={pathVariants} />
  </motion.svg>
);

const NationwideReachSVG = () => (
  <motion.svg viewBox="0 0 200 200" initial="hidden" animate="visible" variants={svgContainerVariants}>
    {/* Simplified India Map Outline */}
    <motion.path d="M100 30 L 110 50 L 140 60 L 150 90 L 130 120 L 120 160 L 80 160 L 70 120 L 50 90 L 60 60 L 90 50 Z"
      fill="#F0FFF4" stroke="#48BB78" strokeWidth="3" variants={pathVariants}
    />
    <motion.circle cx="100" cy="100" r="5" fill="#C53030" variants={itemVariants} />
    <motion.path d="M100 100 L 140 60" stroke="#ED8936" strokeWidth="2" variants={pathVariants} />
    <motion.path d="M100 100 L 60 60" stroke="#ED8936" strokeWidth="2" variants={pathVariants} />
    <motion.path d="M100 100 L 120 160" stroke="#ED8936" strokeWidth="2" variants={pathVariants} />
    <motion.path d="M100 100 L 70 120" stroke="#ED8936" strokeWidth="2" variants={pathVariants} />
  </motion.svg>
);

const EthicalCommitmentSVG = () => (
  <motion.svg viewBox="0 0 200 200" initial="hidden" animate="visible" variants={svgContainerVariants}>
    <motion.g variants={itemVariants}>
      <path d="M40 60 L 160 60" stroke="#4A5568" strokeWidth="4" strokeLinecap="round" />
      <path d="M100 60 V 160" stroke="#4A5568" strokeWidth="4" />
      <path d="M140 160 H 60" stroke="#4A5568" strokeWidth="4" />
    </motion.g>
    <motion.path d="M100,80 C 90,70 70,80 70,100 C 70,120 100,130 100,130" fill="#FED7D7" variants={itemVariants} />
    <motion.path d="M100,80 C 110,70 130,80 130,100 C 130,120 100,130 100,130" fill="#EBF8FF" variants={itemVariants} />
  </motion.svg>
);

// --- 2. SVG Mapping ---
const svgMap = {
  'sec1-empowering-a-safe-just-digital-nation': DigitalNationSVG,
  'sec2-skilled-experts-driving-justice': SkilledExpertsSVG,
  'sec3-advanced-forensic-technology-secure-infrastructure': ForensicTechSVG,
  'sec4-nationwide-reach-inclusive-support': NationwideReachSVG,
  'sec5-ethical-commitment-responsible-action': EthicalCommitmentSVG,
};

// --- 3. Main Component ---
const OurCyberInvestigationCapacity = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.3 } },
  };

  const sectionVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
  };

  return (
    <section className="bg-gray-50 min-h-screen">
      <div className="px-4 sm:px-6 lg:px-8 py-12 max-w-7xl mx-auto">
        <motion.nav
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-sm mb-8 text-gray-600"
        >
          <Link to="/" className="hover:underline text-green-600">Home</Link> /{" "}
          <Link to="/legal-compliance" className="hover:underline text-green-600">Legal Compliance</Link> / Our Cyber Investigation Capacity
        </motion.nav>

        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-16 text-center"
        >
          Our Cyber Investigation Capacity
        </motion.h1>

        <motion.div
          className="space-y-20"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {cyberInvestigationCapacityData.map((section, index) => {
            const SvgComponent = svgMap[section.id];
            // Alternate layout direction for visual variety
            const isReversed = index % 2 === 1;
            return (
              <motion.div
                key={section.id}
                id={section.id}
                className="grid grid-cols-1 lg:grid-cols-5 gap-8 lg:gap-12 items-center"
                variants={sectionVariants}
              >
                {/* SVG Column */}
                <motion.div
                  className={`lg:col-span-2 ${isReversed ? 'lg:order-last' : ''}`}
                  whileHover={{ scale: 1.05, rotate: isReversed ? -2 : 2 }}
                  transition={{ type: "spring", stiffness: 300, damping: 10 }}
                >
                  {SvgComponent && <SvgComponent />}
                </motion.div>

                {/* Text Content Column */}
                <div className="lg:col-span-3">
                  <h2 className="text-2xl lg:text-3xl font-semibold text-green-800 mb-4">
                    {section.heading}
                  </h2>
                  <p className="text-gray-700 leading-relaxed text-lg whitespace-pre-line">
                    {section.content.split('✨ Tagline:')[0]}
                  </p>
                  <p className="text-green-700/90 italic mt-4 font-semibold text-lg">
                    {section.content.split('✨ Tagline:')[1]}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default OurCyberInvestigationCapacity;