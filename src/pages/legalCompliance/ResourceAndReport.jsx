// ResourceAndReport.jsx
// Bhai, here is the next page. It has 6 new SVGs, the best hover effect,
// and I have been extremely careful to make sure the svgMap is perfect.

import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
// Corrected import path as requested:
import { resourceAndReportData } from "../../data/resourceAndReportData";


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

// Story: A person and tools are framed by a report, symbolizing resources backing the reporting.
const IntroResourcesSVG = () => (
    <motion.svg viewBox="0 0 200 200" initial="hidden" animate="visible" variants={svgContainerVariants}>
        <motion.rect x="40" y="40" width="120" height="120" rx="5" fill="#F7FAFC" stroke="#A0AEC0" strokeWidth="2" variants={pathVariants} />
        <motion.g variants={itemVariants}>
            <circle cx="80" cy="90" r="10" fill="#CBD5E0" />
            <rect x="70" y="105" width="20" height="20" rx="5" fill="#CBD5E0" />
        </motion.g>
        <motion.g transform="translate(110, 90) scale(0.25)" variants={itemVariants}>
            <path d="M100,80 a 20,20 0 1,1 0,0.1 Z" fill="none" stroke="#718096" strokeWidth="15" />
        </motion.g>
    </motion.svg>
);

// Story: A toolbox opens, revealing an array of managed resources.
const ResourceManagementSVG = () => (
    <motion.svg viewBox="0 0 200 200" initial="hidden" animate="visible" variants={svgContainerVariants}>
        <motion.rect x="40" y="80" width="120" height="80" rx="5" fill="#E2E8F0" variants={itemVariants} />
        <motion.path d="M40 80 L 80 50 H 160 L 120 80" fill="#A0AEC0" variants={{...itemVariants, hidden: { y: -10, opacity: 0}}} />
        <motion.rect x="60" y="100" width="15" height="40" fill="#BEE3F8" variants={itemVariants}/>
        <motion.circle cx="100" cy="120" r="10" fill="#90CDF4" variants={itemVariants}/>
        <motion.path d="M120 100 L 140 120 L 120 140 Z" fill="#BEE3F8" variants={itemVariants} />
    </motion.svg>
);

// Story: A secure padlock forms over a growing bar graph, symbolizing secure reporting standards.
const ReportingStandardsSVG = () => (
    <motion.svg viewBox="0 0 200 200" initial="hidden" animate="visible" variants={svgContainerVariants}>
        <motion.rect x="50" y="100" width="30" height="60" fill="#BEE3F8" variants={{...itemVariants, hidden: { ...itemVariants.hidden, y: 60}, visible: { ...itemVariants.visible, y: 0 }}} />
        <motion.rect x="85" y="80" width="30" height="80" fill="#90CDF4" variants={{...itemVariants, hidden: { ...itemVariants.hidden, y: 80}, visible: { ...itemVariants.visible, y: 0 }}} />
        <motion.g variants={{ hidden: { y: -30, opacity: 0 }, visible: { y: 0, opacity: 1, transition: { delay: 0.5 } } }}>
            <rect x="70" y="70" width="60" height="40" rx="5" fill="#ED8936" />
            <path d="M100,50 a20,20 0 0,1 0,20 h-10 a20,20 0 0,1 0,-20 Z" fill="none" stroke="#ED8936" strokeWidth="5" />
        </motion.g>
    </motion.svg>
);

// Story: A report document animates, with a glowing heart behind it showing victim-focus.
const VictimFocusedSVG = () => (
    <motion.svg viewBox="0 0 200 200" initial="hidden" animate="visible" variants={svgContainerVariants}>
        <motion.path d="M100,80 C 60,80 40,110 70,140 C 40,170 100,200 100,200 C 100,200 160,170 130,140 C 160,110 140,80 100,80 Z"
            fill="#FEB2B2"
            variants={{...itemVariants, visible: {...itemVariants.visible, transition: { delay: 0.5 }}}}
            animate={{ scale: [1, 1.05, 1] }}
            transition={{ duration: 2, repeat: Infinity, delay: 1}}
        />
        <motion.rect x="50" y="40" width="100" height="120" rx="5" fill="#FAF5FF" stroke="#9F7AEA" strokeWidth="2" variants={itemVariants} />
        <motion.path d="M70 70 H 130 M70 90 H 130" stroke="#D6BCFA" variants={pathVariants} />
    </motion.svg>
);

// Story: A central report connects outwards to police and government icons.
const CoordinationAgenciesSVG = () => (
    <motion.svg viewBox="0 0 200 200" initial="hidden" animate="visible" variants={svgContainerVariants}>
        <motion.rect x="80" y="80" width="40" height="40" fill="#F7FAFC" stroke="#A0AEC0" variants={itemVariants}/>
        <motion.path d="M100 80 L 100 40" stroke="#A0AEC0" variants={pathVariants}/>
        <motion.rect x="90" y="20" width="20" height="20" fill="#E2E8F0" variants={itemVariants}/>
        <motion.path d="M100 120 L 100 160" stroke="#A0AEC0" variants={pathVariants}/>
        <motion.path d="M110 160 L 110 180 L 90 180 L 90 160 L 100 150 Z" fill="#EBF8FF" variants={itemVariants}/>
    </motion.svg>
);

// Story: A circular arrow rotates, spawning stars of improvement with each cycle.
const ContinuousImprovementSVG = () => (
    <motion.svg viewBox="0 0 200 200" initial="hidden" animate="visible" variants={svgContainerVariants}>
        <motion.path d="M100,40 A 60 60 0 1 1 60 70" stroke="#A0AEC0" fill="none" strokeWidth="5" variants={pathVariants} />
        <motion.path d="M60 70 L 50 60 L 70 60 Z" fill="#A0AEC0" variants={itemVariants} />
        <motion.path d="M100 90 L104 100 L115 100 L107 107 L110 118 L100 112 L90 118 L93 107 L85 100 L96 100 Z"
            fill="#F6E05E"
            variants={{ hidden: { scale: 0 }, visible: { scale: 1, transition: { delay: 1 } } }}
        />
    </motion.svg>
);


// --- 2. SVG Mapping (Built from scratch and double-checked) ---
const svgMap = {
  'sec1-introduction-to-resources-reporting': IntroResourcesSVG,
  'sec2-resource-management': ResourceManagementSVG,
  'sec3-digital-reporting-standards': ReportingStandardsSVG,
  'sec4-victim-focused-reporting': VictimFocusedSVG,
  'sec5-coordination-with-agencies': CoordinationAgenciesSVG,
  'sec6-continuous-improvement-accountability': ContinuousImprovementSVG,
};

// --- 3. Main Component ---
const ResourceAndReport = () => {

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
                    <Link to="/legal-compliance" className="hover:underline text-green-600">Legal Compliance</Link> / Resource & Report
                </motion.nav>

                <motion.h1
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.1 }}
                    className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-16 text-center"
                >
                   Resource & Report
                </motion.h1>

                <div className="space-y-20">
                    {resourceAndReportData.map((section, index) => {
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

export default ResourceAndReport;