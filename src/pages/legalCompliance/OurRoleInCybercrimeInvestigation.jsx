// OurRoleInCybercrimeInvestigation.jsx
// Bhai, here is the next page. I've focused on making these SVGs
// tell a multi-stage story, as you asked. This is a single page
// with all the correct paths and styles.

import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
// Corrected import path as requested:
import { ourRoleData } from "../../data/ourRoleData";

// --- 1. Unique, Storytelling SVG Components ---

const svgContainerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.4, // Increased stagger for more deliberate storytelling
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

// Story: A shield appears, sending out waves of awareness that connect a community.
const EmpoweringSocietySVG = () => (
  <motion.svg viewBox="0 0 200 200" initial="hidden" animate="visible" variants={svgContainerVariants}>
    <motion.g variants={itemVariants}>
      <circle cx="60" cy="60" r="15" fill="#CBD5E0" />
      <circle cx="140" cy="60" r="15" fill="#CBD5E0" />
      <circle cx="60" cy="140" r="15" fill="#CBD5E0" />
      <circle cx="140" cy="140" r="15" fill="#CBD5E0" />
    </motion.g>
    <motion.path
      d="M100,60 L130,80 L100,100 L70,80 Z"
      fill="#F0FFF4" stroke="#48BB78" strokeWidth="3"
      variants={{ hidden: { scale: 0 }, visible: { scale: 1, transition: { type: "spring" } } }}
    />
    <motion.circle cx="100" cy="90" r="30" fill="none" stroke="#48BB78"
      animate={{ scale: [1, 1.5], opacity: [0.7, 0] }}
      transition={{ duration: 2, repeat: Infinity, delay: 1 }}
    />
    <motion.path d="M70 68 L70 132 M130 68 L130 132" stroke="#9AE6B4" variants={pathVariants} />
  </motion.svg>
);

// Story: A police badge appears, then confusing data, which is then clarified by CRCCF's analysis.
const SupportingLawSVG = () => (
  <motion.svg viewBox="0 0 200 200" initial="hidden" animate="visible" variants={svgContainerVariants}>
    <motion.path d="M100 30 L150 70 L125 140 L75 140 L50 70 Z" fill="#EBF8FF" stroke="#4299E1" strokeWidth="3" variants={itemVariants} />
    <motion.path d="M100 50 L130 80 L100 120 L70 80 Z" fill="#90CDF4" variants={itemVariants} />
    <motion.rect x="30" y="150" width="140" height="20" fill="#EDF2F7" stroke="#CBD5E0" rx="5" variants={itemVariants} />
    <motion.path d="M40 160 L 60 160 L 65 155 L 70 160 L 90 160 L 95 155 L 100 160"
      stroke="#718096" fill="none" strokeDasharray="2 2"
      initial={{ pathLength: 0 }}
      animate={{ pathLength: 1 }}
      transition={{ duration: 1.5, delay: 1, repeat: Infinity, repeatType: "reverse" }}
    />
    <motion.path d="M110 155 L130 160 L140 155 L150 160 L160 155"
      stroke="#48BB78" fill="none" strokeWidth="2"
      variants={{ ...pathVariants, visible: { ...pathVariants.visible, transition: { duration: 1, delay: 1.5 } } }}
    />
  </motion.svg>
);

// Story: A broken heart is found, gently supported, and then mended, with justice appearing.
const VictimSupportSVG = () => (
  <motion.svg viewBox="0 0 200 200" initial="hidden" animate="visible" variants={svgContainerVariants}>
    <motion.path d="M100,80 C 80,60 60,70 60,90 C 60,110 100,140 100,140" fill="#FED7D7" stroke="#C53030" strokeWidth="3"
      variants={{...itemVariants, hidden: { ...itemVariants.hidden, x: -10 }, visible: { ...itemVariants.visible, x: 0 }}}
    />
    <motion.path d="M100,80 C 120,60 140,70 140,90 C 140,110 100,140 100,140" fill="#FED7D7" stroke="#C53030" strokeWidth="3"
      variants={{...itemVariants, hidden: { ...itemVariants.hidden, x: 10 }, visible: { ...itemVariants.visible, x: 0 }}}
    />
    <motion.path d="M50,160 C 60,130 90,120 100,120 C 110,120 140,130 150,160" fill="none" stroke="#4A5568" strokeWidth="5" variants={itemVariants} />
    <motion.g transform="scale(0.25) translate(300, 50)" variants={{ hidden: { opacity: 0 }, visible: { opacity: 1, transition: { delay: 1.5 } } }}>
      <path d="M40 60 L 160 60 M100 60 V 160 M140 160 H 60" stroke="#4A5568" strokeWidth="10" />
    </motion.g>
  </motion.svg>
);

// Story: A book opens, revealing digital evidence which sparks an idea (awareness).
const ForensicAwarenessSVG = () => (
  <motion.svg viewBox="0 0 200 200" initial="hidden" animate="visible" variants={svgContainerVariants}>
    <motion.path d="M30 150 L30 50 L100 30 L170 50 L170 150" fill="none" stroke="#A0AEC0" strokeWidth="3" variants={pathVariants} />
    <motion.path d="M30 150 Q 100 170 170 150" fill="none" stroke="#A0AEC0" strokeWidth="3" variants={pathVariants} />
    <motion.path d="M100 30 V 160" stroke="#A0AEC0" strokeWidth="2" variants={itemVariants} />
    <motion.text x="60" y="100" fontFamily="monospace" fontSize="18" fill="#718096" variants={itemVariants}>01</motion.text>
    <motion.circle cx="130" cy="90" r="10" fill="none" stroke="#718096" strokeWidth="2" variants={itemVariants} />
    <motion.circle cx="100" cy="40" r="15" fill="#FEFCBF" variants={{ hidden: { scale: 0 }, visible: { scale: 1, transition: { delay: 1 } } }} />
  </motion.svg>
);

// Story: Separate pillars (public, private) are connected by a bridge, forming a unified, protective structure.
const PartnershipSVG = () => (
  <motion.svg viewBox="0 0 200 200" initial="hidden" animate="visible" variants={svgContainerVariants}>
    <motion.rect x="40" y="100" width="30" height="60" fill="#BEE3F8" variants={itemVariants} />
    <motion.rect x="130" y="100" width="30" height="60" fill="#C6F6D5" variants={itemVariants} />
    <motion.path d="M55 100 C 75 70, 125 70, 145 100" fill="none" stroke="#A0AEC0" strokeWidth="5" variants={pathVariants} />
    <motion.path d="M100,40 L130,60 L100,80 L70,60 Z" fill="#F7FAFC" stroke="#A0AEC0" strokeWidth="3"
      variants={{ hidden: { y: -20, opacity: 0 }, visible: { y: 0, opacity: 1, transition: { delay: 1 } } }}
    />
  </motion.svg>
);

// Story: A sapling (youth) grows, and its leaves become digital tools under a protective shield.
const ResponsibleGenerationSVG = () => (
  <motion.svg viewBox="0 0 200 200" initial="hidden" animate="visible" variants={svgContainerVariants}>
    <motion.path d="M100 160 C 120 120, 80 80, 100 40" stroke="#68D391" strokeWidth="5" fill="none" variants={pathVariants} />
    <motion.circle cx="80" cy="80" r="10" fill="#9AE6B4" variants={itemVariants} />
    <motion.rect x="110" y="60" width="15" height="20" fill="#9AE6B4" rx="2" variants={itemVariants} />
    <motion.path d="M30 100 C 30 50, 170 50, 170 100" fill="none" stroke="#4299E1" strokeDasharray="5 5"
      variants={{ hidden: { pathLength: 0 }, visible: { pathLength: 1, transition: { delay: 1 } } }}
    />
  </motion.svg>
);

// --- 2. SVG Mapping ---
const svgMap = {
  'sec1-empowering-society-through-cyber-justice': EmpoweringSocietySVG,
  'sec2-supporting-law-enforcement-with-digital-insights': SupportingLawSVG,
  'sec3-victim-centric-support-legal-guidance': VictimSupportSVG,
  'sec4-building-digital-forensic-awareness': ForensicAwarenessSVG,
  'sec5-public-private-partnership-for-cyber-safety': PartnershipSVG,
  'sec6-inspiring-a-responsible-digital-generation': ResponsibleGenerationSVG,
};


// --- 3. Main Component ---
const OurRoleInCybercrimeInvestigation = () => {
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
          <Link to="/legal-compliance" className="hover:underline text-green-600">Legal Compliance</Link> / Our Role in Cybercrime Investigation
        </motion.nav>

        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-16 text-center"
        >
          Our Role in Cybercrime Investigation
        </motion.h1>

        <motion.div
          className="space-y-20"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {ourRoleData.map((section, index) => {
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
                  whileHover={{ scale: 1.05 }}
                  transition={{ type: "spring", stiffness: 300, damping: 10 }}
                >
                  {SvgComponent && <SvgComponent />}
                </motion.div>

                <div className="lg:col-span-3">
                  <h2 className="text-2xl lg:text-3xl font-semibold text-green-800 mb-4">
                    {section.heading}
                  </h2>
                  <p className="text-gray-700 leading-relaxed text-lg whitespace-pre-line">
                    {section.content.split('💬')[0]}
                  </p>
                  <p className="text-green-700/90 italic mt-4 font-semibold text-lg border-l-4 border-green-200 pl-4">
                    {section.content.split('💬')[1]}
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

export default OurRoleInCybercrimeInvestigation;