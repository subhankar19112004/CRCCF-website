// InvestigationScopeAndSocialResponsibility.jsx (Remade with new data)
// Bhai, I have rebuilt this page with the new data and 6 new storytelling SVGs.
// All your instructions for layout and imports have been followed perfectly.

import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
// Corrected import path with the new data file:
import { investigationScopeAndResponsibilityData } from "../../data/investgationScopeData";

// --- 1. Unique, Storytelling SVG Components ---

const svgContainerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3, // Slowed down for more deliberate storytelling
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

// Story: A magnifying glass (research) transforms into a lightbulb (awareness), while a gavel (authority) is explicitly crossed out.
const AwarenessNotAuthoritySVG = () => (
    <motion.svg viewBox="0 0 200 200" initial="hidden" animate="visible" variants={svgContainerVariants}>
        <motion.g variants={itemVariants}>
            <circle cx="90" cy="90" r="30" fill="none" stroke="#4299E1" strokeWidth="5" />
            <line x1="110" y1="110" x2="140" y2="140" stroke="#4299E1" strokeWidth="6" />
        </motion.g>
        <motion.circle cx="90" cy="90" r="35" fill="#FEFCBF"
            variants={{ hidden: { scale: 0 }, visible: { scale: 1, transition: { delay: 0.5 } } }}
        />
        <motion.g transform="translate(140, 50) scale(0.4)" variants={itemVariants}>
            <path d="M100 120 L100 130 L80 140 L120 140 L100 130" stroke="#718096" strokeWidth="10" fill="none" />
            <rect x="90" y="60" width="20" height="60" fill="#718096" />
        </motion.g>
        <motion.path d="M130 50 L 190 110" stroke="#E53E3E" strokeWidth="6" strokeLinecap="round" variants={pathVariants} />
    </motion.svg>
);

// Story: A bar graph animates upwards, and a protective shield forms around it.
const AnalyticalSupportSVG = () => (
    <motion.svg viewBox="0 0 200 200" initial="hidden" animate="visible" variants={svgContainerVariants}>
        <motion.rect x="50" y="100" width="30" height="60" fill="#BEE3F8" variants={{...itemVariants, hidden: { ...itemVariants.hidden, y: 60}, visible: { ...itemVariants.visible, y: 0 }}} />
        <motion.rect x="85" y="80" width="30" height="80" fill="#90CDF4" variants={{...itemVariants, hidden: { ...itemVariants.hidden, y: 80}, visible: { ...itemVariants.visible, y: 0 }}} />
        <motion.rect x="120" y="120" width="30" height="40" fill="#BEE3F8" variants={{...itemVariants, hidden: { ...itemVariants.hidden, y: 40}, visible: { ...itemVariants.visible, y: 0 }}} />
        <motion.path
            d="M100,20 L180,50 L180,110 C180,150 100,170 100,170 C100,170 20,150 20,110 L20,50 L100,20 Z"
            fill="none" stroke="#48BB78" strokeWidth="4"
            variants={pathVariants}
        />
    </motion.svg>
);

// Story: A guiding path leads a person to justice, where they are joined by a supportive community.
const VictimGuidanceSVG = () => (
    <motion.svg viewBox="0 0 200 200" initial="hidden" animate="visible" variants={svgContainerVariants}>
        <motion.g variants={itemVariants}>
            <circle cx="50" cy="100" r="15" fill="#CBD5E0"/>
        </motion.g>
        <motion.path d="M65 100 C 100 120, 130 80, 160 90" stroke="#A0AEC0" strokeDasharray="4 4" fill="none" variants={pathVariants} />
        <motion.g transform="translate(150, 70) scale(0.3)" variants={{ hidden: { opacity: 0 }, visible: { opacity: 1 } }}>
             <path d="M40 60 L 160 60 M100 60 V 160 M140 160 H 60" stroke="#4A5568" strokeWidth="10" />
        </motion.g>
        <motion.g variants={{ hidden: { opacity: 0 }, visible: { opacity: 1, transition: { delay: 1.5 } } }}>
            <circle cx="30" cy="80" r="10" fill="#9AE6B4"/>
            <circle cx="70" cy="80" r="10" fill="#9AE6B4"/>
        </motion.g>
    </motion.svg>
);

// Story: A book opens, and binary code flows out to form a strong firewall.
const DigitalLiteracySVG = () => (
    <motion.svg viewBox="0 0 200 200" initial="hidden" animate="visible" variants={svgContainerVariants}>
        <motion.path d="M30 150 L30 50 L100 30 L170 50 L170 150" fill="none" stroke="#A0AEC0" strokeWidth="3" variants={pathVariants} />
        <motion.path d="M100 30 V 160" stroke="#A0AEC0" strokeWidth="2" variants={itemVariants} />
        <motion.text x="50" y="80" fontFamily="monospace" fill="#718096" variants={{ hidden: { opacity: 0 }, visible: { opacity: 1, transition: { delay: 1, repeat: Infinity, repeatType: "reverse", duration: 1} } }}>01</motion.text>
        <motion.path d="M40 160 H 160 M40 140 H 160 M60 120 H 180" stroke="#ED8936" variants={{ hidden: { opacity: 0 }, visible: { opacity: 1, transition: { staggerChildren: 0.2, delay: 1 } } }}>
             <motion.path d="M40 160 H 160" variants={itemVariants}/>
             <motion.path d="M40 140 H 160" variants={itemVariants}/>
             <motion.path d="M60 120 H 180" variants={itemVariants}/>
        </motion.path>
    </motion.svg>
);

// Story: Various institutions (education, police, corporate) are connected by a central, pulsing network.
const CollaborationSVG = () => (
    <motion.svg viewBox="0 0 200 200" initial="hidden" animate="visible" variants={svgContainerVariants}>
        <motion.circle cx="100" cy="100" r="15" fill="#4A5568" variants={itemVariants} animate={{ scale: [1, 1.2, 1]}} transition={{ repeat: Infinity, duration: 1.5}}/>
        <motion.g variants={itemVariants}><circle cx="50" cy="50" r="15" fill="#BEE3F8"/><path d="M60 50 L 90 90" stroke="#A0AEC0" /></motion.g>
        <motion.g variants={itemVariants}><rect x="135" y="35" width="30" height="30" fill="#C6F6D5"/><path d="M150 60 L 110 90" stroke="#A0AEC0" /></motion.g>
        <motion.g variants={itemVariants}><path d="M50 150 L 35 135 L 65 135 Z" fill="#FED7D7"/><path d="M50 140 L 90 110" stroke="#A0AEC0" /></motion.g>
        <motion.g variants={itemVariants}><circle cx="150" cy="150" r="15" fill="#FEFCBF"/><path d="M150 140 L 110 110" stroke="#A0AEC0" /></motion.g>
    </motion.svg>
);

// Story: A sapling grows, and its final leaf transforms into a protective shield.
const ResponsibleFutureSVG = () => (
    <motion.svg viewBox="0 0 200 200" initial="hidden" animate="visible" variants={svgContainerVariants}>
        <motion.path d="M100 160 C 120 120, 80 80, 100 40" stroke="#68D391" strokeWidth="5" fill="none" variants={pathVariants} />
        <motion.circle cx="80" cy="120" r="10" fill="#9AE6B4" variants={itemVariants} />
        <motion.circle cx="120" cy="90" r="10" fill="#9AE6B4" variants={itemVariants} />
        <motion.path d="M100,20 L120,35 L100,50 L80,35 Z" fill="#F0FFF4" stroke="#48BB78" strokeWidth="3"
            variants={{ hidden: { scale: 0, opacity: 0 }, visible: { scale: 1, opacity: 1, transition: { delay: 1 } } }}
        />
    </motion.svg>
);


// --- 2. SVG Mapping ---
const svgMap = {
  'sec1-our-mission-investigating-for-awareness-not-authority': AwarenessNotAuthoritySVG,
  'sec2-analytical-support-for-safer-communities': AnalyticalSupportSVG,
  'sec3-victim-guidance-social-accountability': VictimGuidanceSVG,
  'sec4-spreading-digital-literacy-ethical-conduct': DigitalLiteracySVG,
  'sec5-collaboration-with-institutions-stakeholders': CollaborationSVG,
  'sec6-building-a-responsible-digital-future': ResponsibleFutureSVG,
};


// --- 3. Main Component ---
const InvestigationScopeAndSocialResponsibility = () => {
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
                    <Link to="/legal-compliance" className="hover:underline text-green-600">Legal Compliance</Link> / Investigation Scope & Social Responsibility
                </motion.nav>

                <motion.h1
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.1 }}
                    className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-16 text-center"
                >
                    Investigation Scope & Social Responsibility
                </motion.h1>

                <motion.div
                    className="space-y-20"
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible"
                >
                    {investigationScopeAndResponsibilityData.map((section, index) => {
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

export default InvestigationScopeAndSocialResponsibility;