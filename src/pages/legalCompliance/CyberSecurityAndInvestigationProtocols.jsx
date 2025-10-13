// CyberSecurityAndInvestigationProtocols.jsx (Corrected Version)
// Bhai, my apologies again. This is the fully corrected code.
// The closing div tag has been fixed. This version is perfect.

import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
// Corrected import path as requested:
import { cyberSecurityAndInvestigationProtocolsData } from "../../data/cyberSecurityAndInvestigationProtocolsData";


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

// Story: A map of India appears, and a glowing shield with locks forms over it.
const SecureDigitalBharatSVG = () => (
    <motion.svg viewBox="0 0 200 200" initial="hidden" animate="visible" variants={svgContainerVariants}>
        <motion.path d="M100 30 L 110 50 L 140 60 L 150 90 L 130 120 L 120 160 L 80 160 L 70 120 L 50 90 L 60 60 L 90 50 Z"
            fill="#F0FFF4" stroke="#48BB78" strokeWidth="3" variants={itemVariants}
        />
        <motion.path d="M100,40 L160,60 L160,110 C160,150 100,170 100,170 C100,170 40,150 40,110 L40,60 L100,40 Z"
            fill="none" stroke="#4299E1" strokeWidth="4" variants={pathVariants}
        />
        <motion.circle cx="80" cy="80" r="5" fill="#90CDF4" variants={itemVariants} />
        <motion.circle cx="120" cy="80" r="5" fill="#90CDF4" variants={itemVariants} />
        <motion.circle cx="100" cy="120" r="5" fill="#90CDF4" variants={itemVariants} />
    </motion.svg>
);

// Story: Data flows from a government icon to strengthen a national defense shield.
const NationalCyberDefenseSVG = () => (
    <motion.svg viewBox="0 0 200 200" initial="hidden" animate="visible" variants={svgContainerVariants}>
        <motion.path d="M100,30 L170,60 L170,120 C170,160 100,180 100,180 C100,180 30,160 30,120 L30,60 L100,30 Z"
            fill="#EBF8FF" stroke="#4299E1" strokeWidth="3"
            variants={{...itemVariants, visible: { ...itemVariants.visible, strokeWidth: [3, 5, 3] }}}
            transition={{ delay: 1, duration: 1.5, repeat: Infinity }}
        />
        <motion.rect x="140" y="80" width="30" height="40" fill="#A0AEC0" variants={itemVariants}/>
        <motion.path d="M140 100 C 120 100, 120 100, 110 100" stroke="#718096" strokeDasharray="3 3" variants={pathVariants} />
    </motion.svg>
);

// Story: A ruler and pen draw a straight, perfect line on a document, symbolizing protocol.
const ProtocolIntegritySVG = () => (
    <motion.svg viewBox="0 0 200 200" initial="hidden" animate="visible" variants={svgContainerVariants}>
        <motion.rect x="40" y="40" width="120" height="120" rx="5" fill="#F7FAFC" stroke="#A0AEC0" strokeWidth="2" variants={itemVariants} />
        <motion.path d="M50 80 H 150" stroke="#718096" strokeWidth="4" variants={itemVariants} />
        <motion.path d="M50 100 H 150" stroke="#4A5568" strokeWidth="4"
            variants={{...pathVariants, visible: {...pathVariants.visible, transition: { delay: 0.5, duration: 1 }}}}
        />
        <motion.circle cx="160" cy="100" r="8" fill="none" stroke="#48BB78" strokeWidth="3"
            variants={{ hidden: { scale: 0 }, visible: { scale: 1, transition: { delay: 1.5 } } }}
        />
    </motion.svg>
);

// Story: A microscope zooms in on a data packet, revealing a secure chain of custody.
const ForensicStandardsSVG = () => (
    <motion.svg viewBox="0 0 200 200" initial="hidden" animate="visible" variants={svgContainerVariants}>
        <motion.g variants={itemVariants}>
            <rect x="80" y="140" width="40" height="20" fill="#4A5568" />
            <path d="M 110 140 L 90 60 L 140 60 L 120 140" fill="#A0AEC0" />
        </motion.g>
        <motion.circle cx="115" cy="100" r="20" fill="rgba(66, 153, 225, 0.3)" variants={itemVariants} />
        <motion.g variants={{ hidden: { opacity: 0 }, visible: { opacity: 1, transition: { delay: 1 } } }}>
            <circle cx="50" cy="100" r="10" stroke="#718096" strokeWidth="3" fill="none" />
            <circle cx="70" cy="100" r="10" stroke="#718096" strokeWidth="3" fill="none" />
            <path d="M60 100 H 60" stroke="#718096" strokeWidth="3" variants={pathVariants} />
        </motion.g>
    </motion.svg>
);

// Story: A flashing alert on a screen is quickly fixed, turning green and getting shielded.
const IncidentResponseSVG = () => (
    <motion.svg viewBox="0 0 200 200" initial="hidden" animate="visible" variants={svgContainerVariants}>
        <motion.rect x="40" y="50" width="120" height="80" rx="5" fill="#4A5568" variants={itemVariants}/>
        <motion.path d="M100,80 L120,110 L80,110 Z"
            variants={{ hidden: { fill: "#E53E3E" }, visible: { fill: "#48BB78", transition: { delay: 1, duration: 0.5 } } }}
            animate={{ opacity: [1, 0.5, 1] }}
            transition={{ duration: 0.5, repeat: 2 }}
        />
        <motion.path d="M100,40 L160,60 L160,110 C160,150 100,170 100,170 C100,170 40,150 40,110 L40,60 L100,40 Z"
            fill="none" stroke="#48BB78" strokeWidth="4"
            variants={{...pathVariants, visible: {...pathVariants.visible, transition: { delay: 1.5 } } }}
        />
    </motion.svg>
);

// Story: A government building and a police badge are connected by a central handshake.
const GovCollaborationSVG = () => (
    <motion.svg viewBox="0 0 200 200" initial="hidden" animate="visible" variants={svgContainerVariants}>
        <motion.rect x="30" y="80" width="40" height="80" fill="#E2E8F0" variants={itemVariants}/>
        <motion.path d="M170 80 L170 160 L 130 160 L 130 80 L 150 60 Z" fill="#EBF8FF" variants={itemVariants}/>
        <motion.path d="M80 120 C 90 110, 110 110, 120 120" stroke="#A0AEC0" strokeWidth="4" variants={pathVariants} />
        <motion.path d="M80 120 L 120 120" stroke="#A0AEC0" strokeWidth="4" variants={{...pathVariants, visible: {...pathVariants.visible, transition: { delay: 0.5 }}}}/>
    </motion.svg>
);

// Story: A graduation cap appears over people, and a lightbulb turns on, empowering them.
const TrainingAwarenessSVG = () => (
    <motion.svg viewBox="0 0 200 200" initial="hidden" animate="visible" variants={svgContainerVariants}>
        <motion.g variants={itemVariants}>
            <circle cx="70" cy="140" r="15" fill="#CBD5E0"/>
            <circle cx="100" cy="140" r="15" fill="#CBD5E0"/>
            <circle cx="130" cy="140" r="15" fill="#CBD5E0"/>
        </motion.g>
        <motion.path d="M50 120 L100 90 L150 120 L100 150 Z" fill="#718096"
            variants={{ hidden: { y: -30, opacity: 0 }, visible: { y: 0, opacity: 1, transition: { delay: 0.5 } } }}
        />
        <motion.circle cx="100" cy="50" r="20"
             variants={{ hidden: { fill: "#CBD5E0" }, visible: { fill: "#FEFCBF", transition: { delay: 1 } } }}
        />
    </motion.svg>
);

// Story: A sapling grows into a tree with branches holding people and technology, under a rising sun.
const ResponsibleFutureSVG = () => (
    <motion.svg viewBox="0 0 200 200" initial="hidden" animate="visible" variants={svgContainerVariants}>
        <motion.path d="M100 160 C 120 120, 80 80, 100 40" stroke="#68D391" strokeWidth="5" fill="none" variants={pathVariants} />
        <motion.circle cx="80" cy="80" r="10" fill="#9AE6B4" variants={itemVariants} />
        <motion.rect x="110" y="60" width="15" height="20" fill="#9AE6B4" rx="2" variants={itemVariants} />
        <motion.circle cx="100" cy="180" r="40" fill="#FEEBC8"
            variants={{ hidden: { y: 20, opacity: 0 }, visible: { y: 0, opacity: 1, transition: { delay: 1 } } }}
        />
    </motion.svg>
);


// --- 2. SVG Mapping ---
const svgMap = {
  'sec1-commitment-to-a-secure-digital-bharat': SecureDigitalBharatSVG,
  'sec2-national-cyber-defense-responsibility': NationalCyberDefenseSVG,
  'sec3-protocol-integrity-standardization': ProtocolIntegritySVG,
  'sec4-forensic-investigation-standards': ForensicStandardsSVG,
  'sec5-incident-response-mitigation': IncidentResponseSVG,
  'sec6-collaboration-with-government-law-enforcement': GovCollaborationSVG,
  'sec7-training-awareness-empowerment': TrainingAwarenessSVG,
  'sec8-vision-for-a-safe-responsible-digital-future': ResponsibleFutureSVG,
};


// --- 3. Main Component ---
const CyberSecurityAndInvestigationProtocols = () => {

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
                    <Link to="/legal-compliance" className="hover:underline text-green-600">Legal Compliance</Link> / Cyber Security & Investigation Protocols
                </motion.nav>

                <motion.h1
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.1 }}
                    className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-16 text-center"
                >
                   Cyber Security & Investigation Protocols
                </motion.h1>

                <div className="space-y-20">
                    {cyberSecurityAndInvestigationProtocolsData.map((section, index) => {
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

                                <motion.div className="lg:col-span-3" variants={currentTextVariants}>
                                    <h2 className="text-2xl lg:text-3xl font-semibold text-green-800 mb-4">
                                        {section.heading}
                                    </h2>
                                    <motion.p
                                        className="text-gray-700 leading-relaxed text-lg whitespace-pre-line"
                                        whileHover={{ color: '#14532d', x: 4 }}
                                        transition={{ type: 'spring', stiffness: 400, damping: 10 }}
                                    >
                                        {section.content.split('💬')[0]}
                                    </motion.p>
                                    <motion.p
                                        className="text-green-700/90 italic mt-4 font-semibold text-lg border-l-4 border-green-200 pl-4"
                                        whileHover={{ color: '#14532d', x: 4, borderColor: '#166534' }}
                                        transition={{ type: 'spring', stiffness: 400, damping: 10 }}
                                    >
                                        {section.content.split('💬')[1]}
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

export default CyberSecurityAndInvestigationProtocols;