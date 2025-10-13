// CyberLawComplianceStandards.jsx (Rebuilt with new data)
// Bhai, here is the updated page with the new data you provided.
// It features 7 new SVGs and is double-checked to be error-free.

import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
// Corrected import path as requested:
import { cyberLawComplianceStandardsData } from "../../data/cyberLawComplianceStandardsData";


// --- 1. Unique, Storytelling SVG Components ---

const svgContainerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3,
      delayChildren: 0.2,
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

// Story: A law book appears with a shield on its cover, symbolizing lawful commitment.
const IntroComplianceSVG = () => (
    <motion.svg viewBox="0 0 200 200" initial="hidden" animate="visible" variants={svgContainerVariants}>
        <motion.rect x="40" y="40" width="120" height="120" rx="5" fill="#EBF8FF" stroke="#4299E1" strokeWidth="3" variants={itemVariants} />
        <motion.path d="M100,70 L120,85 L100,100 L80,85 Z" fill="#90CDF4" variants={itemVariants} />
        <motion.path d="M100,100 V 140" stroke="#63B3ED" variants={pathVariants} />
    </motion.svg>
);

// Story: A scroll unrolls to reveal a checklist, representing legal frameworks.
const LegalFrameworksSVG = () => (
    <motion.svg viewBox="0 0 200 200" initial="hidden" animate="visible" variants={svgContainerVariants}>
        <motion.rect x="50" y="40" width="100" height="120" rx="5" fill="#F7FAFC" stroke="#A0AEC0" strokeWidth="2" variants={itemVariants} />
        <motion.path d="M70 70 L 85 85 L 110 60" stroke="#48BB78" fill="none" strokeWidth="5" variants={pathVariants} />
        <motion.path d="M70 100 L 130 100" stroke="#CBD5E0" strokeWidth="4" variants={itemVariants} />
        <motion.path d="M70 120 L 130 120" stroke="#CBD5E0" strokeWidth="4" variants={itemVariants} />
    </motion.svg>
);

// Story: Scales of justice are perfectly balanced with a heart on one side.
const EthicalOperationsSVG = () => (
    <motion.svg viewBox="0 0 200 200" initial="hidden" animate="visible" variants={svgContainerVariants}>
        <motion.g variants={itemVariants}>
            <path d="M40 60 L 160 60" stroke="#4A5568" strokeWidth="4" strokeLinecap="round" />
            <path d="M100 60 V 160" stroke="#4A5568" strokeWidth="4" />
        </motion.g>
        <motion.path d="M40 80 L 100 80" fill="none" stroke="#A0AEC0" strokeWidth="6" variants={{...itemVariants, hidden: {x:-20, opacity: 0}}}/>
        <motion.path d="M160 80 L 100 80" fill="none" stroke="#A0AEC0" strokeWidth="6" variants={{...itemVariants, hidden: {x:20, opacity: 0}}}/>
        <motion.path d="M65,70 C 60,65 50,70 50,75 C 50,80 65,85 65,85" fill="#FED7D7" variants={{ hidden: {scale:0}, visible: {scale:1, transition:{delay:1}}}}/>
        <motion.path d="M65,70 C 70,65 80,70 80,75 C 80,80 65,85 65,85" fill="#FEB2B2" variants={{ hidden: {scale:0}, visible: {scale:1, transition:{delay:1}}}}/>
    </motion.svg>
);

// Story: A data folder is placed into a secure vault which then locks.
const DataHandlingPrivacySVG = () => (
    <motion.svg viewBox="0 0 200 200" initial="hidden" animate="visible" variants={svgContainerVariants}>
        <motion.rect x="40" y="40" width="120" height="120" rx="10" fill="#E2E8F0" stroke="#A0AEC0" strokeWidth="3" variants={itemVariants} />
        <motion.circle cx="100" cy="100" r="15" fill="#718096" variants={itemVariants}/>
        <motion.rect x="95" y="110" width="10" height="20" fill="#4A5568" variants={itemVariants}/>
        <motion.path d="M60 40 V 160" stroke="#CBD5E0" variants={{...pathVariants, visible: {...pathVariants.visible, transition: {delay: 1}}}} />
    </motion.svg>
);

// Story: Government and police icons are connected by a central, cooperative handshake.
const GovCoordinationSVG = () => (
    <motion.svg viewBox="0 0 200 200" initial="hidden" animate="visible" variants={svgContainerVariants}>
        <motion.rect x="30" y="80" width="40" height="80" fill="#E2E8F0" variants={itemVariants}/>
        <motion.path d="M170 80 L170 160 L 130 160 L 130 80 L 150 60 Z" fill="#EBF8FF" variants={itemVariants}/>
        <motion.path d="M80 120 C 90 110, 110 110, 120 120" stroke="#A0AEC0" strokeWidth="4" variants={pathVariants} />
        <motion.path d="M80 120 L 120 120" stroke="#A0AEC0" strokeWidth="4" variants={{...pathVariants, visible: {...pathVariants.visible, transition: { delay: 0.5 }}}}/>
    </motion.svg>
);

// Story: A circular arrow rotates around a law book, symbolizing continuous updates.
const ContinuousMonitoringSVG = () => (
    <motion.svg viewBox="0 0 200 200" initial="hidden" animate="visible" variants={svgContainerVariants}>
        <motion.rect x="70" y="70" width="60" height="60" fill="#FAF5FF" stroke="#805AD5" rx="5" variants={itemVariants}/>
        <motion.path d="M100,30 A 70 70 0 1 1 70 60" stroke="#B794F4" fill="none" strokeWidth="5" variants={pathVariants} />
        <motion.path d="M70 60 L 60 50 L 80 50 Z" fill="#B794F4"
            variants={{ hidden: { scale: 0 }, visible: { scale: 1, transition: { delay: 1 } } }}
        />
    </motion.svg>
);

// Story: A single person is empowered, radiating trust to a growing community.
const BuildingTrustSVG = () => (
    <motion.svg viewBox="0 0 200 200" initial="hidden" animate="visible" variants={svgContainerVariants}>
        <motion.circle cx="100" cy="100" r="15" fill="#CBD5E0" variants={itemVariants}/>
        <motion.circle cx="100" cy="100" r="30" fill="none" stroke="#9AE6B4" strokeWidth="3"
            variants={{ hidden: { opacity: 0}, visible: { opacity: 1, transition: {delay: 0.5}}}}
        />
        <motion.circle cx="100" cy="100" r="50" fill="none" stroke="#68D391" strokeWidth="2" strokeDasharray="4 4"
            variants={{ hidden: { opacity: 0}, visible: { opacity: 1, transition: {delay: 1}}}}
        />
    </motion.svg>
);


// --- 2. SVG Mapping (Built from scratch and double-checked) ---
const svgMap = {
  'sec1-introduction-to-cyber-law-compliance': IntroComplianceSVG,
  'sec2-legal-frameworks-followed-by-crccf': LegalFrameworksSVG,
  'sec3-ethical-and-lawful-operations': EthicalOperationsSVG,
  'sec4-compliance-in-data-handling-privacy': DataHandlingPrivacySVG,
  'sec5-coordination-with-government-law-agencies': GovCoordinationSVG,
  'sec6-continuous-monitoring-updates': ContinuousMonitoringSVG,
  'sec7-building-trust-public-confidence': BuildingTrustSVG,
};


// --- 3. Main Component ---
const CyberLawComplianceStandards = () => {

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
                    <Link to="/" className="hover:underline text-green-600">Home</Link> /{" "}
                    <Link to="/legal-compliance" className="hover:underline text-green-600">Legal Compliance</Link> / Cyber Law Compliance Standards
                </motion.nav>

                <motion.h1
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.1 }}
                    className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-16 text-center"
                >
                   Cyber Law Compliance Standards
                </motion.h1>

                <div className="space-y-20">
                    {cyberLawComplianceStandardsData.map((section, index) => {
                        const SvgComponent = svgMap[section.id];
                        const isReversed = index % 2 === 1;
                        
                        const currentSvgVariants = { ...svgVariants, hidden: { ...svgVariants.hidden, x: isReversed ? 50 : -50 }};
                        const currentTextVariants = { ...textVariants, hidden: { ...textVariants.hidden, x: isReversed ? -50 : 50 }};
                        
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
                                <motion.div
                                    className={`lg:col-span-2 ${isReversed ? 'lg:order-last' : ''}`}
                                    variants={currentSvgVariants}
                                >
                                    {SvgComponent && <SvgComponent />}
                                </motion.div>

                                <motion.div
                                    className="lg:col-span-3 p-6 rounded-xl cursor-pointer"
                                    variants={currentTextVariants}
                                    whileHover={{ 
                                        scale: 1.02, 
                                        backgroundColor: '#f0fdf4',
                                        boxShadow: '0px 10px 30px -5px rgba(72, 187, 120, 0.2)' 
                                    }}
                                    transition={{ type: 'spring', stiffness: 300, damping: 20 }}
                                >
                                    <h2 className="text-2xl lg:text-3xl font-semibold text-green-800 mb-4">
                                        {section.heading}
                                    </h2>
                                    <p className="text-gray-700 leading-relaxed text-lg whitespace-pre-line">
                                        {section.content.split('💬')[0]}
                                    </p>
                                    <p className="text-green-700/90 italic mt-4 font-semibold text-lg border-l-4 border-green-200 pl-4">
                                        {section.content.split('💬')[1]}
                                    </p>
                                </motion.div>
                            </motion.div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};

export default CyberLawComplianceStandards;