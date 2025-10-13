// CyberInvestigationComplianceFramework.jsx
// Here you go, bhai. The next page is done.
// It's a single page with 6 new, very detailed storytelling SVGs.
// All your instructions have been carefully followed.

import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
// Corrected import path as requested:
import { cyberInvestigationComplianceFrameworkData } from "../../data/cyberInvestigationComplianceFrameworkData";

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

// Story: A compass appears, its needle settles, and a strong pillar (trust) grows from its center.
const FoundationOfTrustSVG = () => (
    <motion.svg viewBox="0 0 200 200" initial="hidden" animate="visible" variants={svgContainerVariants}>
        <motion.circle cx="100" cy="100" r="60" fill="#F7FAFC" stroke="#A0AEC0" strokeWidth="3" variants={itemVariants} />
        <motion.path d="M100 100 L 120 60 L 100 140 L 80 60 Z" fill="#E53E3E"
            variants={{ hidden: { rotate: -180, scale: 0 }, visible: { rotate: 0, scale: 1, transition: { type: "spring" } } }}
        />
        <motion.rect x="85" y="100" width="30" height="60" fill="#718096"
            variants={{ hidden: { y: 60, opacity: 0 }, visible: { y: 0, opacity: 1, transition: { delay: 0.5 } } }}
        />
        <motion.rect x="80" y="90" width="40" height="10" fill="#4A5568" variants={{...itemVariants, transition: { delay: 0.5 }}} />
    </motion.svg>
);

// Story: An open book (law) appears, the Ashoka Chakra spins inside, and lines of text are written.
const IndianCyberLawsSVG = () => (
    <motion.svg viewBox="0 0 200 200" initial="hidden" animate="visible" variants={svgContainerVariants}>
        <motion.path d="M30 150 L30 50 L100 30 L170 50 L170 150" fill="#EBF8FF" stroke="#4299E1" strokeWidth="3" variants={pathVariants} />
        <motion.path d="M100 30 V 155" stroke="#90CDF4" variants={itemVariants} />
        <motion.g variants={{ hidden: { scale: 0 }, visible: { scale: 1, transition: { delay: 1 } } }}>
            <motion.circle cx="100" cy="90" r="20" fill="none" stroke="#2B6CB0" strokeWidth="2"
                animate={{ rotate: 360 }}
                transition={{ duration: 5, repeat: Infinity, ease: 'linear' }}
            />
        </motion.g>
         <motion.path d="M50 70 H 90 M50 90 H 90 M50 110 H 90" stroke="#90CDF4" strokeWidth="2" variants={pathVariants} />
    </motion.svg>
);

// Story: A document appears, a brain (ethics) fades in, and a heart (compassion) pulses beside it.
const InvestigationEthicsSVG = () => (
    <motion.svg viewBox="0 0 200 200" initial="hidden" animate="visible" variants={svgContainerVariants}>
        <motion.rect x="40" y="40" width="120" height="120" rx="5" fill="#F7FAFC" stroke="#A0AEC0" strokeWidth="2" variants={itemVariants} />
        <motion.path d="M100,80 C 80,80 70,100 100,120 C 130,100 120,80 100,80" fill="none" stroke="#A0AEC0" strokeWidth="2"
            variants={{ hidden: { opacity: 0 }, visible: { opacity: 0.3, transition: { delay: 0.5, duration: 1 } } }}
        />
        <motion.path
            d="M80,100 C 70,90 60,100 60,110 C 60,120 80,130 80,130"
            fill="#FED7D7"
            variants={itemVariants}
        />
        <motion.path
            d="M80,100 C 90,90 100,100 100,110 C 100,120 80,130 80,130"
            fill="#FEB2B2"
            variants={itemVariants}
            animate={{ scale: [1, 1.1, 1] }}
            transition={{ duration: 1.5, repeat: Infinity, delay: 1 }}
        />
    </motion.svg>
);

// Story: A central shield connects outwards to police, education, and corporate icons.
const CollaborationWithAuthoritiesSVG = () => (
    <motion.svg viewBox="0 0 200 200" initial="hidden" animate="visible" variants={svgContainerVariants}>
        <motion.path d="M100,80 L120,95 L100,110 L80,95 Z" fill="#F0FFF4" stroke="#48BB78" strokeWidth="3" variants={itemVariants} />
        <motion.path d="M100 95 L 150 50" stroke="#A0AEC0" variants={pathVariants} />
        <motion.path d="M100 95 L 50 50" stroke="#A0AEC0" variants={pathVariants} />
        <motion.path d="M100 95 L 100 150" stroke="#A0AEC0" variants={pathVariants} />
        <motion.circle cx="150" cy="50" r="15" fill="#EBF8FF" variants={itemVariants} />
        <motion.circle cx="50" cy="50" r="15" fill="#FEFCBF" variants={itemVariants} />
        <motion.circle cx="100" cy="150" r="15" fill="#FED7D7" variants={itemVariants} />
    </motion.svg>
);

// Story: A bar chart grows, a magnifying glass sweeps over it, leaving checkmarks behind.
const MonitoringAuditingSVG = () => (
    <motion.svg viewBox="0 0 200 200" initial="hidden" animate="visible" variants={svgContainerVariants}>
        <motion.rect x="50" y="100" width="30" height="60" fill="#BEE3F8" variants={{...itemVariants, hidden: { ...itemVariants.hidden, y: 60}, visible: { ...itemVariants.visible, y: 0 }}} />
        <motion.rect x="85" y="80" width="30" height="80" fill="#90CDF4" variants={{...itemVariants, hidden: { ...itemVariants.hidden, y: 80}, visible: { ...itemVariants.visible, y: 0 }}} />
        <motion.rect x="120" y="120" width="30" height="40" fill="#BEE3F8" variants={{...itemVariants, hidden: { ...itemVariants.hidden, y: 40}, visible: { ...itemVariants.visible, y: 0 }}} />
        <motion.g initial={{ x: 30, y: 50 }} animate={{ x: [30, 140, 30] }} transition={{ duration: 3, repeat: Infinity, delay: 1 }}>
            <circle cx="0" cy="0" r="20" fill="none" stroke="#4A5568" strokeWidth="3" />
            <line x1="15" y1="15" x2="30" y2="30" stroke="#4A5568" strokeWidth="3" />
        </motion.g>
        <motion.path d="M55 90 L 65 100 L 80 85" stroke="#48BB78" fill="none" strokeWidth="4" variants={{ hidden: { opacity: 0 }, visible: { opacity: 1, transition: { delay: 1.5 } } }} />
        <motion.path d="M90 70 L 100 80 L 115 65" stroke="#48BB78" fill="none" strokeWidth="4" variants={{ hidden: { opacity: 0 }, visible: { opacity: 1, transition: { delay: 2.0 } } }} />
    </motion.svg>
);

// Story: A hand taps a dim lightbulb, which then brightens and illuminates people icons.
const EmpoweringCitizensSVG = () => (
    <motion.svg viewBox="0 0 200 200" initial="hidden" animate="visible" variants={svgContainerVariants}>
        <motion.g variants={itemVariants}>
            <circle cx="100" cy="80" r="20" fill="#CBD5E0" />
            <rect x="95" y="100" width="10" height="10" fill="#A0AEC0" />
        </motion.g>
        <motion.g
            variants={{ hidden: { scale: 1, fill: "#CBD5E0" }, visible: { scale: 1.2, fill: "#FEFCBF", transition: { delay: 0.8, duration: 0.5 } } }}
        >
             <circle cx="100" cy="80" r="20" />
        </motion.g>
        <motion.path d="M50 160 L 80 120" stroke="#4A5568" strokeWidth="4" variants={{...pathVariants, transition: { duration: 0.5 } }} />
        <motion.circle cx="40" cy="140" r="10" fill="#BEE3F8" variants={{ hidden: { opacity: 0 }, visible: { opacity: 1, transition: { delay: 1.5 } } }} />
        <motion.circle cx="160" cy="140" r="10" fill="#BEE3F8" variants={{ hidden: { opacity: 0 }, visible: { opacity: 1, transition: { delay: 1.5 } } }} />
    </motion.svg>
);


// --- 2. SVG Mapping ---
const svgMap = {
  'sec1-foundation-of-trust-transparency': FoundationOfTrustSVG,
  'sec2-adherence-to-indian-cyber-laws-legal-mandates': IndianCyberLawsSVG,
  'sec3-structured-policies-for-investigation-ethics': InvestigationEthicsSVG,
  'sec4-collaboration-with-authorities-institutions': CollaborationWithAuthoritiesSVG,
  'sec5-monitoring-auditing-accountability': MonitoringAuditingSVG,
  'sec6-empowering-digital-citizens-through-awareness': EmpoweringCitizensSVG,
};


// --- 3. Main Component ---
const CyberInvestigationComplianceFramework = () => {
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
                    <Link to="/legal-compliance" className="hover:underline text-green-600">Legal Compliance</Link> / Cyber Investigation Compliance Framework
                </motion.nav>

                <motion.h1
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.1 }}
                    className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-16 text-center"
                >
                   Cyber Investigation Compliance Framework
                </motion.h1>

                <motion.div
                    className="space-y-20"
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible"
                >
                    {cyberInvestigationComplianceFrameworkData.map((section, index) => {
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

export default CyberInvestigationComplianceFramework;