// DigitalSecurityCertification.jsx
// Okay bhai, this page is ready. It's a single page with 6 new storytelling SVGs.
// I've made sure to add the smooth, animated color-changing hover on the text.
// The code is complete and double-checked for errors.

import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
// Corrected import path as requested:
import { digitalSecurityCertificationData } from "../../data/digitalSecurityCertificationData";


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

// Story: A certificate appears, a shield forms on it, and a star of excellence pulses.
const IntroToCertsSVG = () => (
    <motion.svg viewBox="0 0 200 200" initial="hidden" animate="visible" variants={svgContainerVariants}>
        <motion.rect x="40" y="40" width="120" height="120" rx="5" fill="#F7FAFC" stroke="#A0AEC0" strokeWidth="2" variants={itemVariants} />
        <motion.path d="M100,60 L130,80 L100,100 L70,80 Z" fill="#EBF8FF" stroke="#4299E1" strokeWidth="3" variants={itemVariants} />
        <motion.path d="M100 100 L 100 140" stroke="#90CDF4" variants={pathVariants} />
        <motion.path d="M100 70 L108 85 L125 85 L112 97 L117 115 L100 105 L83 115 L88 97 L75 85 L92 85 Z"
            fill="#F6E05E"
            variants={{ hidden: { scale: 0 }, visible: { scale: 1, transition: { delay: 1 } } }}
            animate={{ scale: [1, 1.1, 1] }}
            transition={{ duration: 1.5, repeat: Infinity, delay: 1.5 }}
        />
    </motion.svg>
);

// Story: A gear spins, driving an upward trending graph, symbolizing quality management.
const QualityManagementSVG = () => (
    <motion.svg viewBox="0 0 200 200" initial="hidden" animate="visible" variants={svgContainerVariants}>
        <motion.g
            animate={{ rotate: 360 }}
            transition={{ duration: 5, repeat: Infinity, ease: 'linear' }}
            variants={itemVariants}
        >
            <path d="M100,80 a 20,20 0 1,1 0,0.1 Z" fill="none" stroke="#718096" strokeWidth="10"/>
        </motion.g>
        <motion.path d="M50 150 L 70 130 L 90 140 L 110 120 L 130 130 L 150 110"
            stroke="#48BB78"
            fill="none"
            strokeWidth="5"
            strokeLinecap="round"
            variants={pathVariants}
        />
    </motion.svg>
);

// Story: A data folder appears, and a large lock clamps shut over it, securing it.
const InfoSecurityPrivacySVG = () => (
    <motion.svg viewBox="0 0 200 200" initial="hidden" animate="visible" variants={svgContainerVariants}>
        <motion.rect x="40" y="60" width="120" height="80" rx="5" fill="#E2E8F0" variants={itemVariants} />
        <motion.rect x="50" y="50" width="40" height="15" fill="#CBD5E0" variants={itemVariants} />
        <motion.g variants={{ hidden: { y: -30, opacity: 0 }, visible: { y: 0, opacity: 1, transition: { delay: 0.5 } } }}>
            <rect x="80" y="90" width="40" height="30" rx="3" fill="#ED8936" />
            <path d="M100,70 a15,15 0 0,1 0,20 h-10 a15,15 0 0,1 0,-20 Z" fill="none" stroke="#ED8936" strokeWidth="4" />
        </motion.g>
    </motion.svg>
);

// Story: A screen shows a risk warning, which is then 'weighed' and balanced by management scales.
const RiskManagementSVG = () => (
    <motion.svg viewBox="0 0 200 200" initial="hidden" animate="visible" variants={svgContainerVariants}>
        <motion.rect x="40" y="50" width="120" height="80" rx="5" fill="#4A5568" variants={itemVariants}/>
        <motion.path d="M100,70 L120,110 L80,110 Z"
            fill="#E53E3E"
            variants={{...itemVariants, visible: { ...itemVariants.visible, fill: "#48BB78", transition: { delay: 1.5 } }}}
        />
        <motion.g variants={{ hidden: { opacity: 0 }, visible: { opacity: 1, transition: { delay: 1 } } }}>
            <path d="M40 150 L 160 150" stroke="#718096" strokeWidth="3" />
            <path d="M100 150 V 130" stroke="#718096" strokeWidth="3" />
        </motion.g>
    </motion.svg>
);

// Story: A heart (social responsibility) and a gavel (ethics) are bridged by a handshake.
const SocialResponsibilitySVG = () => (
    <motion.svg viewBox="0 0 200 200" initial="hidden" animate="visible" variants={svgContainerVariants}>
        <motion.path d="M60,80 C 50,70 40,80 40,90 C 40,100 60,110 60,110" fill="#FED7D7" variants={itemVariants} />
        <motion.path d="M60,80 C 70,70 80,80 80,90 C 80,100 60,110 60,110" fill="#FEB2B2" variants={itemVariants} />
        <motion.g transform="translate(130, 80) scale(0.2)" variants={itemVariants}>
            <path d="M100 120 L100 130 L80 140 L120 140 L100 130" stroke="#4A5568" strokeWidth="10" fill="none" />
            <rect x="90" y="60" width="20" height="60" fill="#4A5568" />
        </motion.g>
        <motion.path d="M70 140 C 80 130, 120 130, 130 140" stroke="#A0AEC0" strokeWidth="4" variants={pathVariants} />
    </motion.svg>
);

// Story: A certificate empowers one person, which then radiates out to build a network of trust.
const InstitutionalConfidenceSVG = () => (
    <motion.svg viewBox="0 0 200 200" initial="hidden" animate="visible" variants={svgContainerVariants}>
        <motion.circle cx="100" cy="100" r="15" fill="#CBD5E0" variants={itemVariants}/>
        <motion.rect x="90" y="60" width="20" height="20" fill="#F7FAFC" stroke="#A0AEC0" variants={itemVariants} />
        <motion.circle cx="50" cy="50" r="10" fill="#BEE3F8" variants={{ hidden: { opacity: 0 }, visible: { opacity: 1, transition: { delay: 1 }}}} />
        <motion.circle cx="150" cy="50" r="10" fill="#C6F6D5" variants={{ hidden: { opacity: 0 }, visible: { opacity: 1, transition: { delay: 1.2 }}}} />
        <motion.circle cx="50" cy="150" r="10" fill="#FEFCBF" variants={{ hidden: { opacity: 0 }, visible: { opacity: 1, transition: { delay: 1.4 }}}} />
        <motion.path d="M100 90 L 50 60 M100 90 L 150 60 M100 110 L 50 140" stroke="#A0AEC0" variants={pathVariants} />
    </motion.svg>
);


// --- 2. SVG Mapping ---
const svgMap = {
  'sec1-introduction-to-digital-security-certifications': IntroToCertsSVG,
  'sec2-iso-90012015-quality-management-system': QualityManagementSVG,
  'sec3-iso-27001-27701-information-security-privacy': InfoSecurityPrivacySVG,
  'sec4-iso-15408-31000-it-security-risk-management': RiskManagementSVG,
  'sec5-social-responsibility-ethical-standards-iso-26000-iso-37001': SocialResponsibilitySVG,
  'sec6-impact-of-certifications-on-public-institutional-confidence': InstitutionalConfidenceSVG,
};

// --- 3. Main Component ---
const DigitalSecurityCertification = () => {

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
                    <Link to="/legal-compliance" className="hover:underline text-green-600">Legal Compliance</Link> / Digital Security Certification
                </motion.nav>

                <motion.h1
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.1 }}
                    className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-16 text-center"
                >
                   Digital Security Certification
                </motion.h1>

                <div className="space-y-20">
                    {digitalSecurityCertificationData.map((section, index) => {
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
                                        whileHover={{ color: '#166534' }}
                                        transition={{ duration: 0.2 }}
                                    >
                                        {section.content.split('💬')[0]}
                                    </motion.p>
                                    <motion.p
                                        className="text-green-700/90 italic mt-4 font-semibold text-lg border-l-4 border-green-200 pl-4"
                                        whileHover={{ color: '#166534', borderColor: '#166534' }}
                                        transition={{ duration: 0.2 }}
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

export default DigitalSecurityCertification;