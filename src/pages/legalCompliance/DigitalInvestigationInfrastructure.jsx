// DigitalInvestigationInfrastructure.jsx
// Bhai, here is the next page, built carefully as you asked.
// It's a single page for the small dataset.
// Import path and max-width are corrected.
// 5 new unique SVGs are included, one for each section.

import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
// Corrected import path as requested:
import { digitalInvestigationInfrastructureData } from "../../data/digitalInvestigationInfrastructureData";

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

const SecureFoundationSVG = () => (
  <motion.svg viewBox="0 0 200 200" initial="hidden" animate="visible" variants={svgContainerVariants}>
    <motion.rect x="40" y="140" width="120" height="20" fill="#4A5568" variants={itemVariants} />
    <motion.rect x="50" y="120" width="100" height="20" fill="#718096" variants={itemVariants} />
    <motion.rect x="60" y="100" width="80" height="20" fill="#A0AEC0" variants={itemVariants} />
    <motion.path
      d="M100,30 L130,50 L100,70 L70,50 Z"
      fill="#F0FFF4" stroke="#48BB78" strokeWidth="3"
      variants={{ hidden: { y: -20, opacity: 0 }, visible: { y: 0, opacity: 1, transition: { delay: 0.6 } } }}
    />
    <motion.g transform="scale(0.2) translate(400, 260)"
      variants={{ hidden: { scale: 0, opacity: 0 }, visible: { scale: 0.2, opacity: 1, transition: { delay: 1 } } }}
    >
        <path d="M100 120 L100 130 L80 140 L120 140 L100 130" stroke="#38A169" strokeWidth="10" fill="none" />
        <rect x="90" y="60" width="20" height="60" fill="#38A169" />
    </motion.g>
  </motion.svg>
);

const ForensicLabsSVG = () => (
  <motion.svg viewBox="0 0 200 200" initial="hidden" animate="visible" variants={svgContainerVariants}>
    <motion.rect x="50" y="40" width="100" height="120" rx="10" fill="#E2E8F0" stroke="#A0AEC0" strokeWidth="2" variants={itemVariants} />
    <motion.rect x="60" y="55" width="80" height="15" fill="#718096" variants={itemVariants} />
    <motion.path d="M65 80 H 135" stroke="#CBD5E0" variants={pathVariants} />
    <motion.path d="M65 100 H 135" stroke="#CBD5E0" variants={pathVariants} />
    <motion.path d="M65 120 H 135" stroke="#CBD5E0" variants={pathVariants} />
    <motion.circle cx="75" cy="145" r="5" fill="#48BB78"
      animate={{ opacity: [0, 1, 0] }}
      transition={{ duration: 1, repeat: Infinity, delay: 1 }}
    />
    <motion.path
      d="M125,50 a15,15 0 0,1 0,20 h-10 a15,15 0 0,1 0,-20 Z" fill="none" stroke="#ED8936" strokeWidth="3"
      transform="translate(20, 100)"
      variants={{ hidden: { scale: 0 }, visible: { scale: 1, transition: { delay: 1.2 } } }}
    />
  </motion.svg>
);

const AiIntegrationSVG = () => (
  <motion.svg viewBox="0 0 200 200" initial="hidden" animate="visible" variants={svgContainerVariants}>
    <motion.path d="M100,40 C 60,40 40,70 40,100 C 40,130 60,160 100,160" fill="none" stroke="#A0AEC0" strokeWidth="2" variants={pathVariants} />
    <motion.path d="M100,40 C 140,40 160,70 160,100 C 160,130 140,160 100,160" fill="none" stroke="#A0AEC0" strokeWidth="2" variants={{...pathVariants, visible: {...pathVariants.visible, transition: { ...pathVariants.visible.transition, delay: 0.2 }}}} />
    <motion.circle cx="100" cy="100" r="10" fill="#4299E1" variants={itemVariants} />
    <motion.path d="M110 100 C 120 80, 150 80, 160 100" stroke="#718096" fill="none" variants={pathVariants} />
    <motion.path d="M90 100 C 80 120, 50 120, 40 100" stroke="#718096" fill="none" variants={pathVariants} />
    <motion.g transform="scale(0.3) translate(230,230)"
      variants={{ hidden: { scale: 0 }, visible: { scale: 0.3, transition: { delay: 1 } } }}
    >
        <path d="M100 120 L100 130 L80 140 L120 140 L100 130" stroke="#2D3748" strokeWidth="10" fill="none" />
        <rect x="90" y="60" width="20" height="60" fill="#2D3748" />
    </motion.g>
  </motion.svg>
);

const CollaborativeNetworksSVG = () => (
  <motion.svg viewBox="0 0 200 200" initial="hidden" animate="visible" variants={svgContainerVariants}>
    <motion.circle cx="100" cy="100" r="20" fill="#A0AEC0" variants={itemVariants} />
    <motion.circle cx="50" cy="60" r="15" fill="#CBD5E0" variants={itemVariants} />
    <motion.circle cx="150" cy="60" r="15" fill="#CBD5E0" variants={itemVariants} />
    <motion.circle cx="50" cy="140" r="15" fill="#CBD5E0" variants={itemVariants} />
    <motion.circle cx="150" cy="140" r="15" fill="#CBD5E0" variants={itemVariants} />
    <motion.path d="M100 100 L 50 60" stroke="#A0AEC0" variants={pathVariants} />
    <motion.path d="M100 100 L 150 60" stroke="#A0AEC0" variants={pathVariants} />
    <motion.path d="M100 100 L 50 140" stroke="#A0AEC0" variants={pathVariants} />
    <motion.path d="M100 100 L 150 140" stroke="#A0AEC0" variants={pathVariants} />
  </motion.svg>
);

const EthicalGovernanceSVG = () => (
  <motion.svg viewBox="0 0 200 200" initial="hidden" animate="visible" variants={svgContainerVariants}>
    <motion.path d="M40 40 H 160 V 160 H 40 Z" fill="#F7FAFC" stroke="#A0AEC0" strokeWidth="2" variants={itemVariants} />
    <motion.path d="M60 70 H 140" stroke="#E2E8F0" variants={pathVariants} />
    <motion.path d="M60 90 H 140" stroke="#E2E8F0" variants={pathVariants} />
    <motion.path d="M60 110 H 120" stroke="#E2E8F0" variants={pathVariants} />
    <motion.path d="M 80 130 L 95 145 L 125 115"
      stroke="#48BB78"
      fill="none"
      strokeWidth="6"
      strokeLinecap="round"
      variants={{ hidden: { pathLength: 0 }, visible: { pathLength: 1, transition: { delay: 1 } } }}
    />
  </motion.svg>
);


// --- 2. SVG Mapping ---
const svgMap = {
  'sec1-building-a-secure-foundation-for-digital-justice': SecureFoundationSVG,
  'sec2-state-of-the-art-forensic-labs-secure-systems': ForensicLabsSVG,
  'sec3-integration-of-ai-cyber-tools-legal-frameworks': AiIntegrationSVG,
  'sec4-collaborative-networks-nationwide-reach': CollaborativeNetworksSVG,
  'sec5-ethical-governance-lawful-operations': EthicalGovernanceSVG,
};

// --- 3. Main Component ---
const DigitalInvestigationInfrastructure = () => {
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
          <Link to="/legal-compliance" className="hover:underline text-green-600">Legal Compliance</Link> / Digital Investigation Infrastructure
        </motion.nav>

        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-16 text-center"
        >
          Digital Investigation Infrastructure
        </motion.h1>

        <motion.div
          className="space-y-20"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {digitalInvestigationInfrastructureData.map((section, index) => {
            const SvgComponent = svgMap[section.id];
            const isReversed = index % 2 === 1;
            return (
              <motion.div
                key={section.id}
                id={section.id}
                className="grid grid-cols-1 lg:grid-cols-5 gap-8 lg:gap-12 items-center"
                variants={sectionVariants}
              >
                <motion.div
                  className={`lg:col-span-2 ${isReversed ? 'lg:order-last' : ''}`}
                  whileHover={{ scale: 1.05, rotate: isReversed ? -2 : 2 }}
                  transition={{ type: "spring", stiffness: 300, damping: 10 }}
                >
                  {SvgComponent && <SvgComponent />}
                </motion.div>

                <div className="lg:col-span-3">
                  <h2 className="text-2xl lg:text-3xl font-semibold text-green-800 mb-4">
                    {section.heading}
                  </h2>
                  <p className="text-gray-700 leading-relaxed text-lg whitespace-pre-line">
                    {section.content.split('✨ Tagline:')[0]}
                  </p>
                  <p className="text-green-700/90 italic mt-4 font-semibold text-lg">
                   ✨ Tagline: {section.content.split('✨ Tagline:')[1]}
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

export default DigitalInvestigationInfrastructure;