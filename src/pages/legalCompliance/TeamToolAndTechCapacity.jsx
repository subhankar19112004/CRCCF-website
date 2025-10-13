// TeamToolAndTechCapacity.jsx
// Advanced, scroll-animated storytelling SVGs + hover text animation.

import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { teamToolAndTechCapacityData } from "../../data/teamToolAndTechCapacityData";

// ====================== Variants ======================
const svgContainerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.3, delayChildren: 0.2 } },
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

// ====================== SVG Components ======================

// 1️⃣ Introduction to CRCCF Team & Technology
const IntroTeamTechSVG = () => (
  <motion.svg viewBox="0 0 200 200" initial="hidden" animate="visible" variants={svgContainerVariants}>
    <motion.circle cx="100" cy="100" r="80" fill="#EBF8FF" stroke="#3182CE" strokeWidth="3" variants={itemVariants}/>
    <motion.path d="M60 120 L100 50 L140 120 Z" fill="#90CDF4" variants={pathVariants}/>
    <motion.circle cx="100" cy="80" r="10" fill="#63B3ED" variants={{ hidden: { scale: 0 }, visible: { scale: 1, transition: { delay: 0.8 } } }}/>
  </motion.svg>
);

// 2️⃣ Expert Team of Professionals
const ExpertTeamSVG = () => (
  <motion.svg viewBox="0 0 200 200" initial="hidden" animate="visible" variants={svgContainerVariants}>
    <motion.circle cx="80" cy="90" r="20" fill="#CBD5E0" variants={itemVariants}/>
    <motion.circle cx="120" cy="90" r="20" fill="#A0AEC0" variants={itemVariants}/>
    <motion.rect x="50" y="120" width="100" height="40" rx="10" fill="#EDF2F7" stroke="#718096" strokeWidth="2" variants={pathVariants}/>
  </motion.svg>
);

// 3️⃣ Advanced Cyber Tools & Software
const ToolsSoftwareSVG = () => (
  <motion.svg viewBox="0 0 200 200" initial="hidden" animate="visible" variants={svgContainerVariants}>
    <motion.rect x="40" y="60" width="120" height="80" rx="10" fill="#E6FFFA" stroke="#319795" strokeWidth="3" variants={itemVariants}/>
    <motion.circle cx="100" cy="100" r="25" fill="#81E6D9" variants={pathVariants}/>
    <motion.path d="M85 100 L100 115 L120 90" stroke="#2C7A7B" strokeWidth="5" strokeLinecap="round" fill="none" variants={pathVariants}/>
  </motion.svg>
);

// 4️⃣ Infrastructure & Operational Capacity
const InfrastructureSVG = () => (
  <motion.svg viewBox="0 0 200 200" initial="hidden" animate="visible" variants={svgContainerVariants}>
    <motion.rect x="30" y="100" width="40" height="60" fill="#C6F6D5" stroke="#38A169" strokeWidth="2" variants={itemVariants}/>
    <motion.rect x="85" y="80" width="40" height="80" fill="#9AE6B4" stroke="#2F855A" strokeWidth="2" variants={itemVariants}/>
    <motion.rect x="140" y="60" width="40" height="100" fill="#68D391" stroke="#276749" strokeWidth="2" variants={pathVariants}/>
  </motion.svg>
);

// 5️⃣ Integration of Team & Technology
const IntegrationSVG = () => (
  <motion.svg viewBox="0 0 200 200" initial="hidden" animate="visible" variants={svgContainerVariants}>
    <motion.path d="M60 100 C80 80,120 80,140 100" stroke="#63B3ED" strokeWidth="5" fill="none" variants={pathVariants}/>
    <motion.circle cx="60" cy="100" r="10" fill="#3182CE" variants={itemVariants}/>
    <motion.circle cx="140" cy="100" r="10" fill="#38A169" variants={itemVariants}/>
    <motion.circle cx="100" cy="80" r="8" fill="#F6E05E" variants={{ hidden: { scale: 0 }, visible: { scale: 1, transition: { delay: 0.8 } } }}/>
  </motion.svg>
);

// 6️⃣ Training & Continuous Skill Enhancement
const TrainingSVG = () => (
  <motion.svg viewBox="0 0 200 200" initial="hidden" animate="visible" variants={svgContainerVariants}>
    <motion.rect x="40" y="50" width="120" height="100" rx="10" fill="#FAF5FF" stroke="#805AD5" strokeWidth="3" variants={itemVariants}/>
    <motion.path d="M60 80 L100 60 L140 80" stroke="#9F7AEA" strokeWidth="4" fill="none" variants={pathVariants}/>
    <motion.circle cx="100" cy="120" r="12" fill="#B794F4" variants={{ hidden: { scale: 0 }, visible: { scale: 1, transition: { delay: 1 } } }}/>
  </motion.svg>
);

// 7️⃣ Empowering Public Confidence
const PublicConfidenceSVG = () => (
  <motion.svg viewBox="0 0 200 200" initial="hidden" animate="visible" variants={svgContainerVariants}>
    <motion.path d="M100,40 A60,60 0 1,1 99.9,40" fill="#EBF8FF" stroke="#2B6CB0" strokeWidth="3" variants={pathVariants}/>
    <motion.path d="M70 110 L95 135 L130 90" stroke="#48BB78" strokeWidth="6" fill="none" strokeLinecap="round" variants={pathVariants}/>
    <motion.circle cx="100" cy="100" r="15" fill="#68D391" variants={itemVariants}/>
  </motion.svg>
);

// ====================== SVG Map ======================
const svgMap = {
  "sec1-introduction-to-crccf-team-technology": IntroTeamTechSVG,
  "sec2-expert-team-of-professionals": ExpertTeamSVG,
  "sec3-advanced-cyber-tools-software": ToolsSoftwareSVG,
  "sec4-infrastructure-operational-capacity": InfrastructureSVG,
  "sec5-integration-of-team-and-technology": IntegrationSVG,
  "sec6-training-continuous-skill-enhancement": TrainingSVG,
  "sec7-empowering-public-confidence": PublicConfidenceSVG,
};

// ====================== Main Component ======================
const TeamToolAndTechCapacity = () => {
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
        <motion.nav initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} className="text-sm mb-8 text-gray-600">
          <Link to="/" className="hover:underline text-green-600">Home</Link> /{" "}
          <Link to="/legal-compliance" className="hover:underline text-green-600">Legal Compliance</Link> / Team, Tool & Tech Capacity
        </motion.nav>

        <motion.h1 initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.1 }} className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-16 text-center">
          Team, Tool & Tech Capacity
        </motion.h1>

        <div className="space-y-20">
          {teamToolAndTechCapacityData.map((section, index) => {
            const SvgComponent = svgMap[section.id];
            const isReversed = index % 2 === 1;

            const currentSvgVariants = { ...svgVariants, hidden: { ...svgVariants.hidden, x: isReversed ? 50 : -50 } };
            const currentTextVariants = { ...textVariants, hidden: { ...textVariants.hidden, x: isReversed ? -50 : 50 } };

            return (
              <motion.div
                key={section.id}
                id={section.id}
                className="grid grid-cols-1 lg:grid-cols-5 gap-8 lg:gap-12 items-center"
                variants={sectionContainerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.4 }}
              >
                <motion.div className={`lg:col-span-2 ${isReversed ? "lg:order-last" : ""}`} variants={currentSvgVariants}>
                  {SvgComponent ? (
                    <SvgComponent />
                  ) : (
                    <div className="flex items-center justify-center h-48 bg-orange-50 text-orange-800 border border-orange-200 rounded-md">
                      <p className="text-lg font-medium">SVG missing: {section.id}</p>
                    </div>
                  )}
                </motion.div>

                <motion.div className="lg:col-span-3" variants={currentTextVariants}>
                  <h2 className="text-2xl lg:text-3xl font-semibold text-green-800 mb-4">{section.heading}</h2>
                  <motion.p className="text-gray-700 leading-relaxed text-lg whitespace-pre-line" whileHover={{ color: "#14532d", x: 4 }} transition={{ type: "spring", stiffness: 400, damping: 10 }}>
                    {section.content.split("💬")[0]}
                  </motion.p>
                  <motion.p className="text-green-700/90 italic mt-4 font-semibold text-lg border-l-4 border-green-200 pl-4" whileHover={{ color: "#14532d", x: 4, borderColor: "#166534" }} transition={{ type: "spring", stiffness: 400, damping: 10 }}>
                    {section.content.split("💬")[1]}
                  </motion.p>
                </motion.div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default TeamToolAndTechCapacity;
