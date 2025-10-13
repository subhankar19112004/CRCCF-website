// InvestigationEthicsAndLegalStandards.jsx
// Enhanced with fixed variant handling, clean SVG logic, and consistent animation behavior.

import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { investigationEthicsAndLegalStandardsData } from "../../data/investigationEthicsAndLegalStandardsData";

// ==========================
// 1. Animation Variants
// ==========================
const svgContainerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.3, delayChildren: 0.2 },
  },
};

const pathVariants = {
  hidden: { pathLength: 0, opacity: 0 },
  visible: {
    pathLength: 1,
    opacity: 1,
    transition: { duration: 1.5, ease: "easeInOut" },
  },
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: { y: 0, opacity: 1 },
};

// ==========================
// 2. SVG Components
// ==========================

const UpholdingIntegritySVG = () => (
  <motion.svg viewBox="0 0 200 200" variants={svgContainerVariants} initial="hidden" animate="visible">
    <motion.circle cx="100" cy="100" r="70" fill="#F7FAFC" stroke="#A0AEC0" strokeWidth="3" variants={itemVariants} />
    <motion.path
      d="M100 100 L 125 55 L 100 145 L 75 55 Z"
      fill="#4299E1"
      variants={{
        hidden: { rotate: -180, scale: 0 },
        visible: { rotate: 0, scale: 1, transition: { type: "spring" } },
      }}
    />
    <motion.path
      d="M100,105 C 90,95 80,105 80,115 C 80,125 100,135 100,135 C 100,135 120,125 120,115 C 120,105 110,95 100,105 Z"
      fill="#FED7D7"
      variants={{
        hidden: { scale: 0 },
        visible: { scale: 1, transition: { delay: 0.8 } },
      }}
    />
  </motion.svg>
);

const IndianLegislationSVG = () => (
  <motion.svg viewBox="0 0 200 200" variants={svgContainerVariants} initial="hidden" animate="visible">
    <motion.path d="M30 150 L30 50 L100 30 L170 50 L170 150" fill="#EBF8FF" stroke="#4299E1" strokeWidth="3" variants={pathVariants} />
    <motion.path d="M100 30 V 155" stroke="#90CDF4" variants={itemVariants} />
    <motion.g variants={{ hidden: { scale: 0 }, visible: { scale: 1, transition: { delay: 1 } } }}>
      <motion.circle cx="100" cy="90" r="20" fill="none" stroke="#2B6CB0" strokeWidth="2" />
      <motion.path
        d="M 90 90 L 100 100 L 115 80"
        stroke="#48BB78"
        fill="none"
        strokeWidth="4"
        strokeLinecap="round"
        variants={pathVariants}
      />
    </motion.g>
  </motion.svg>
);

const ProtectingRightsSVG = () => (
  <motion.svg viewBox="0 0 200 200" variants={svgContainerVariants} initial="hidden" animate="visible">
    <motion.g variants={itemVariants}>
      <circle cx="100" cy="70" r="25" fill="#CBD5E0" />
      <path d="M70 110 H 130 V 160 H 70 Z" fill="#CBD5E0" />
    </motion.g>
    <motion.path
      d="M100,60 L130,80 L100,100 L70,80 Z"
      fill="#4A5568"
      variants={{ hidden: { opacity: 0, scale: 0.5 }, visible: { opacity: 1, scale: 1, transition: { delay: 0.5 } } }}
    />
    <motion.path
      d="M100,30 L150,50 L150,90 C150,120 100,140 100,140 C100,140 50,120 50,90 L50,50 L100,30 Z"
      fill="none"
      stroke="#48BB78"
      strokeWidth="4"
      variants={{
        hidden: pathVariants.hidden,
        visible: { ...pathVariants.visible, transition: { ...pathVariants.visible.transition, delay: 1 } },
      }}
    />
  </motion.svg>
);

const EthicalTrainingSVG = () => (
  <motion.svg viewBox="0 0 200 200" variants={svgContainerVariants} initial="hidden" animate="visible">
    <motion.path d="M130,40 C 100,40 80,60 80,80 C 80,100 100,120 130,120" fill="none" stroke="#A0AEC0" strokeWidth="2" variants={pathVariants} />
    <motion.path d="M130,40 C 160,40 180,60 180,80 C 180,100 160,120 130,120" fill="none" stroke="#A0AEC0" strokeWidth="2" variants={pathVariants} />
    <motion.rect x="30" y="140" width="80" height="10" fill="#718096" rx="2" variants={itemVariants} />
    <motion.rect x="30" y="120" width="80" height="20" fill="#A0AEC0" rx="2" variants={itemVariants} />
    <motion.path d="M70 120 C 80 100, 100 100, 110 80" stroke="#F6E05E" strokeDasharray="3 3" variants={pathVariants} />
    <motion.circle
      cx="130"
      cy="80"
      r="10"
      fill="#FEFCBF"
      variants={{ hidden: { scale: 0 }, visible: { scale: 1, transition: { delay: 1.5 } } }}
    />
  </motion.svg>
);

const LawfulCollaborationSVG = () => (
  <motion.svg viewBox="0 0 200 200" variants={svgContainerVariants} initial="hidden" animate="visible">
    <motion.path
      d="M40 100 C 60 80, 80 80, 100 100 L 100 140 H 40 Z"
      fill="#BEE3F8"
      variants={{ hidden: { x: -30, opacity: 0 }, visible: { x: 0, opacity: 1 } }}
    />
    <motion.path
      d="M160 100 C 140 80, 120 80, 100 100 L 100 140 H 160 Z"
      fill="#C6F6D5"
      variants={{ hidden: { x: 30, opacity: 0 }, visible: { x: 0, opacity: 1 } }}
    />
    <motion.g transform="translate(90, 40) scale(0.2)" variants={itemVariants}>
      <path d="M100 120 L100 130 L80 140 L120 140 L100 130" stroke="#4A5568" strokeWidth="10" fill="none" />
      <rect x="90" y="60" width="20" height="60" fill="#4A5568" />
    </motion.g>
  </motion.svg>
);

const AccountabilityCultureSVG = () => (
  <motion.svg viewBox="0 0 200 200" variants={svgContainerVariants} initial="hidden" animate="visible">
    <motion.rect x="40" y="40" width="120" height="120" rx="5" fill="#F7FAFC" stroke="#A0AEC0" strokeWidth="2" variants={itemVariants} />
    <motion.path d="M60 70 L 75 85 L 100 60" stroke="#48BB78" fill="none" strokeWidth="5" variants={pathVariants} />
    <motion.path
      d="M60 100 L 75 115 L 100 90"
      stroke="#48BB78"
      fill="none"
      strokeWidth="5"
      variants={{
        hidden: pathVariants.hidden,
        visible: { ...pathVariants.visible, transition: { ...pathVariants.visible.transition, delay: 0.5 } },
      }}
    />
    <motion.path
      d="M140,100 C 130,90 120,100 120,110 C 120,120 140,130 140,130"
      fill="#FED7D7"
      variants={{ hidden: { scale: 0 }, visible: { scale: 1, transition: { delay: 1 } } }}
    />
  </motion.svg>
);

// ==========================
// 3. SVG Mapping
// ==========================
const svgMap = {
  "sec1-upholding-integrity-in-every-digital-step": UpholdingIntegritySVG,
  "sec2-lawful-adherence-to-indian-cyber-legislation": IndianLegislationSVG,
  "sec3-protecting-rights-privacy-human-dignity": ProtectingRightsSVG,
  "sec4-training-teams-with-ethical-wisdom-legal-clarity": EthicalTrainingSVG,
  "sec5-collaboration-with-lawful-authorities-experts": LawfulCollaborationSVG,
  "sec6-building-a-culture-of-accountability-compassion": AccountabilityCultureSVG,
};

// ==========================
// 4. Main Component
// ==========================
const InvestigationEthicsAndLegalStandards = () => {
  const sectionContainerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.2 } },
  };

  const svgVariants = {
    hidden: { x: -50, opacity: 0 },
    visible: { x: 0, opacity: 1, transition: { duration: 0.6, ease: "easeOut" } },
  };

  const textVariants = {
    hidden: { x: 50, opacity: 0 },
    visible: { x: 0, opacity: 1, transition: { duration: 0.6, ease: "easeOut" } },
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
          <Link to="/" className="hover:underline text-green-600">
            Home
          </Link>{" "}
          /{" "}
          <Link to="/legal-compliance" className="hover:underline text-green-600">
            Legal Compliance
          </Link>{" "}
          / Investigation Ethics & Legal Standards
        </motion.nav>

        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-16 text-center"
        >
          Investigation Ethics & Legal Standards
        </motion.h1>

        <div className="space-y-20">
          {investigationEthicsAndLegalStandardsData.map((section, index) => {
            const SvgComponent = svgMap[section.id];
            const isReversed = index % 2 === 1;

            return (
              <motion.div
                key={section.id}
                id={section.id}
                className={`grid grid-cols-1 lg:grid-cols-5 gap-8 lg:gap-12 items-center ${
                  isReversed ? "lg:flex-row-reverse" : ""
                }`}
                variants={sectionContainerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.4 }}
              >
                <motion.div
                  className={`lg:col-span-2 ${isReversed ? "lg:order-last" : ""}`}
                  variants={svgVariants}
                >
                  {SvgComponent && <SvgComponent />}
                </motion.div>

                <motion.div className="lg:col-span-3" variants={textVariants}>
                  <h2 className="text-2xl lg:text-3xl font-semibold text-green-800 mb-4">
                    {section.heading}
                  </h2>

                  <motion.p
                    className="text-gray-700 leading-relaxed text-lg whitespace-pre-line"
                    whileHover={{ color: "#14532d", x: 4 }}
                    transition={{ type: "spring", stiffness: 400, damping: 10 }}
                  >
                    {section.content.split("💬")[0]}
                  </motion.p>

                  {section.content.includes("💬") && (
                    <motion.p
                      className="text-green-700/90 italic mt-4 font-semibold text-lg border-l-4 border-green-200 pl-4"
                      whileHover={{ color: "#14532d", x: 4, borderColor: "#166534" }}
                      transition={{ type: "spring", stiffness: 400, damping: 10 }}
                    >
                      {section.content.split("💬")[1]}
                    </motion.p>
                  )}
                </motion.div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default InvestigationEthicsAndLegalStandards;
