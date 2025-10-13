// CybercrimeComplianceFramework.jsx
// Bhai, here is the next page. I have been extremely careful to ensure the svgMap is
// perfect and there are no errors. This component includes 7 new SVGs and the
// improved hover effect on the text blocks.

import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
// Corrected import path as requested:
import { cybercrimeComplianceFrameworkData } from "../../data/cybercrimeComplianceFrameworkData";


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

// Story: A strong pillar (framework) appears, and a shield with a checkmark forms on it.
const IntroFrameworkSVG = () => (
    <motion.svg viewBox="0 0 200 200" initial="hidden" animate="visible" variants={svgContainerVariants}>
        <motion.rect x="80" y="60" width="40" height="100" fill="#E2E8F0" variants={itemVariants} />
        <motion.rect x="70" y="160" width="60" height="10" fill="#A0AEC0" variants={itemVariants} />
        <motion.rect x="70" y="50" width="60" height="10" fill="#A0AEC0" variants={itemVariants} />
        <motion.path
            d="M100,70 L130,85 L100,100 L70,85 Z"
            fill="#F0FFF4" stroke="#48BB78" strokeWidth="3"
            variants={{ hidden: { scale: 0 }, visible: { scale: 1, transition: { delay: 0.5 } } }}
        />
        <motion.path d="M95 85 L 100 90 L 110 80" stroke="#38A169" fill="none" strokeWidth="3"
            variants={{...pathVariants, visible: {...pathVariants.visible, transition: { delay: 1 } } }}
        />
    </motion.svg>
);

// Story: A scroll unrolls, and a magnifying glass sweeps over the newly drawn text.
const PoliciesProceduresSVG = () => (
    <motion.svg viewBox="0 0 200 200" initial="hidden" animate="visible" variants={svgContainerVariants}>
        <motion.rect x="50" y="40" width="100" height="120" rx="5" fill="#FAF5FF" stroke="#9F7AEA" strokeWidth="2" variants={itemVariants} />
        <motion.path d="M70 70 H 130 M70 90 H 130 M70 110 H 100" stroke="#D6BCFA" strokeWidth="4"
            variants={{...pathVariants, visible: {...pathVariants.visible, transition: { delay: 0.5 } } }}
        />
        <motion.g initial={{ x: 30, y: 70 }} animate={{ x: 130 }} transition={{ duration: 2, delay: 1, repeat: Infinity, repeatType: "mirror" }}>
            <circle cx="0" cy="0" r="15" fill="rgba(183, 148, 244, 0.5)" />
        </motion.g>
    </motion.svg>
);

// Story: Scales of justice animate in, perfectly balancing a law book and a heart.
const LegalEthicalSVG = () => (
    <motion.svg viewBox="0 0 200 200" initial="hidden" animate="visible" variants={svgContainerVariants}>
        <motion.g variants={itemVariants}>
            <path d="M40 60 L 160 60" stroke="#4A5568" strokeWidth="4" strokeLinecap="round" />
            <path d="M100 60 V 80" stroke="#4A5568" strokeWidth="4" />
        </motion.g>
        <motion.g variants={{ hidden: { y: 0, rotate: 10 }, visible: { y: 0, rotate: 0, transition: { type: 'spring', stiffness: 200, damping: 5, delay: 0.5 } } }}>
            <path d="M40 80 L 100 80" fill="none" stroke="#A0AEC0" strokeWidth="6"/>
            <rect x="50" y="85" width="20" height="20" fill="#EBF8FF"/>
        </motion.g>
        <motion.g variants={{ hidden: { y: 0, rotate: -10 }, visible: { y: 0, rotate: 0, transition: { type: 'spring', stiffness: 200, damping: 5, delay: 0.5 } } }}>
            <path d="M160 80 L 100 80" fill="none" stroke="#A0AEC0" strokeWidth="6"/>
            <path d="M140,85 C 135,80 125,85 125,90 C 125,95 140,100 140,100" fill="#FED7D7"/>
            <path d="M140,85 C 145,80 155,85 155,90 C 155,95 140,100 140,100" fill="#FEB2B2"/>
        </motion.g>
    </motion.svg>
);

// Story: A handshake forms in front of a government building, radiating connection.
const CoordinationSVG = () => (
    <motion.svg viewBox="0 0 200 200" initial="hidden" animate="visible" variants={svgContainerVariants}>
        <motion.rect x="60" y="60" width="80" height="100" fill="#E2E8F0" variants={itemVariants}/>
        <motion.path d="M60 60 L 100 30 L 140 60" fill="#A0AEC0" variants={itemVariants}/>
        <motion.path d="M90 120 C 95 115, 105 115, 110 120" stroke="#4A5568" strokeWidth="4" variants={pathVariants} />
        <motion.path d="M90 120 L 110 120" stroke="#4A5568" strokeWidth="4" variants={{...pathVariants, visible: {...pathVariants.visible, transition: { delay: 0.5 }}}}/>
    </motion.svg>
);

// Story: A circular arrow represents a continuous process, resulting in an audited checkmark.
const MonitoringAuditSVG = () => (
    <motion.svg viewBox="0 0 200 200" initial="hidden" animate="visible" variants={svgContainerVariants}>
        <motion.path d="M100,40 A 60 60 0 1 1 60 70" stroke="#A0AEC0" fill="none" strokeWidth="5" variants={pathVariants} />
        <motion.path d="M60 70 L 50 60 L 70 60 Z" fill="#A0AEC0" variants={{ hidden: {scale:0}, visible: {scale:1, transition: {delay:1}}}}/>
        <motion.path d="M85 90 L 100 105 L 125 75"
            stroke="#48BB78"
            fill="none"
            strokeWidth="8"
            strokeLinecap="round"
            variants={{...pathVariants, visible: {...pathVariants.visible, transition: {delay:0.8}}}}
        />
    </motion.svg>
);

// Story: A group of people are covered by a large, glowing star of assurance.
const PublicAssuranceSVG = () => (
    <motion.svg viewBox="0 0 200 200" initial="hidden" animate="visible" variants={svgContainerVariants}>
        <motion.g variants={itemVariants}>
            <circle cx="80" cy="140" r="10" fill="#CBD5E0"/>
            <circle cx="100" cy="140" r="10" fill="#CBD5E0"/>
            <circle cx="120" cy="140" r="10" fill="#CBD5E0"/>
        </motion.g>
        <motion.path d="M100 40 L115 75 L155 80 L125 105 L135 145 L100 125 L65 145 L75 105 L45 80 L85 75 Z"
            fill="#FEFCBF"
            variants={{ hidden: { scale: 0, y: 20 }, visible: { scale: 1, y: 0, transition: { delay: 0.5 } } }}
        />
    </motion.svg>
);

// Story: A hand taps a person icon, causing a lightbulb above them to glow brightly.
const EmpoweringSVG = () => (
    <motion.svg viewBox="0 0 200 200" initial="hidden" animate="visible" variants={svgContainerVariants}>
        <motion.g variants={itemVariants}>
            <circle cx="100" cy="110" r="15" fill="#CBD5E0"/>
            <path d="M85 130 H 115 V 150 H 85 Z" fill="#CBD5E0"/>
        </motion.g>
        <motion.path d="M40 100 H 80" stroke="#718096" strokeWidth="5" variants={pathVariants} />
        <motion.circle cx="100" cy="70" r="20"
             variants={{ hidden: { fill: "#E2E8F0" }, visible: { fill: "#FEFCBF", transition: { delay: 1 } } }}
        />
    </motion.svg>
);


// --- 2. SVG Mapping (Built from scratch and double-checked) ---
const svgMap = {
  'sec1-introduction-to-compliance-framework': IntroFrameworkSVG,
  'sec2-policies-procedures': PoliciesProceduresSVG,
  'sec3-legal-ethical-alignment': LegalEthicalSVG,
  'sec4-coordination-with-regulatory-authorities': CoordinationSVG,
  'sec5-continuous-monitoring-audit': MonitoringAuditSVG,
  'sec6-victim-public-assurance': PublicAssuranceSVG,
  'sec7-empowering-institutions-individuals': EmpoweringSVG,
};

// --- 3. Main Component ---
const CybercrimeComplianceFramework = () => {

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
                    <Link to="/legal-compliance" className="hover:underline text-green-600">Legal Compliance</Link> / Cybercrime Compliance Framework
                </motion.nav>

                <motion.h1
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.1 }}
                    className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-16 text-center"
                >
                   Cybercrime Compliance Framework
                </motion.h1>

                <div className="space-y-20">
                    {cybercrimeComplianceFrameworkData.map((section, index) => {
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

export default CybercrimeComplianceFramework;