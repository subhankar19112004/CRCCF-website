// CybercrimeResponseCapabilities.jsx
// Okay bhai, the next page is ready. This one includes 7 new storytelling SVGs
// and the smooth, animated background-color hover on the text blocks.
// The code is complete and error-free.

import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
// Corrected import path as requested:
import { cybercrimeResponseCapabilitiesData } from "../../data/cybercrimeResponseCapabilitiesData";

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

// Story: A shield forms, and lightning bolts (threats) bounce off it.
const IntroResponseSVG = () => (
    <motion.svg viewBox="0 0 200 200" initial="hidden" animate="visible" variants={svgContainerVariants}>
        <motion.path
            d="M100,30 L170,60 L170,120 C170,160 100,180 100,180 C100,180 30,160 30,120 L30,60 L100,30 Z"
            fill="#F0FFF4" stroke="#48BB78" strokeWidth="4"
            variants={pathVariants}
        />
        <motion.path d="M20 50 L 50 80 L 30 80" stroke="#ED8936" strokeWidth="3" fill="none"
            variants={{ hidden: { x: 0 }, visible: { x: [0, 15, 0], transition: { delay: 1, repeat: Infinity, duration: 1 } } }}
        />
        <motion.path d="M180 70 L 150 100 L 170 100" stroke="#ED8936" strokeWidth="3" fill="none"
             variants={{ hidden: { x: 0 }, visible: { x: [0, -15, 0], transition: { delay: 1.2, repeat: Infinity, duration: 1 } } }}
        />
    </motion.svg>
);

// Story: A clock's hand spins rapidly, stopping on a screen with a green checkmark.
const RapidResponseSVG = () => (
    <motion.svg viewBox="0 0 200 200" initial="hidden" animate="visible" variants={svgContainerVariants}>
        <motion.circle cx="100" cy="100" r="60" fill="none" stroke="#A0AEC0" strokeWidth="3" variants={itemVariants} />
        <motion.path d="M100 100 L 100 50" stroke="#4A5568" strokeWidth="4"
            variants={{ hidden: { rotate: 0 }, visible: { rotate: 720, transition: { duration: 1 } } }}
            style={{ transformOrigin: "100px 100px" }}
        />
        <motion.rect x="70" y="70" width="60" height="60" fill="#48BB78" rx="5"
            variants={{ hidden: { scale: 0 }, visible: { scale: 1, transition: { delay: 1 } } }}
        />
    </motion.svg>
);

// Story: A supportive hand rises to protect a person icon, and a heart glows above.
const VictimSupportSVG = () => (
    <motion.svg viewBox="0 0 200 200" initial="hidden" animate="visible" variants={svgContainerVariants}>
        <motion.path d="M50,160 C 60,130 90,120 100,120 C 110,120 140,130 150,160" fill="none" stroke="#4A5568" strokeWidth="5" variants={itemVariants} />
        <motion.g variants={itemVariants}>
            <circle cx="100" cy="90" r="15" fill="#CBD5E0"/>
        </motion.g>
        <motion.path d="M100,60 C 90,50 80,60 80,70 C 80,80 100,90 100,90" fill="#FED7D7"
            variants={{ hidden: { scale: 0 }, visible: { scale: 1, transition: { delay: 1 } } }}
        />
        <motion.path d="M100,60 C 110,50 120,60 120,70 C 120,80 100,90 100,90" fill="#FEB2B2"
            variants={{ hidden: { scale: 0 }, visible: { scale: 1, transition: { delay: 1 } } }}
        />
    </motion.svg>
);

// Story: A magnifying glass scans a document, and a secure chain forms around it.
const EvidenceHandlingSVG = () => (
    <motion.svg viewBox="0 0 200 200" initial="hidden" animate="visible" variants={svgContainerVariants}>
        <motion.rect x="60" y="60" width="80" height="80" rx="5" fill="#F7FAFC" stroke="#A0AEC0" strokeWidth="2" variants={itemVariants} />
        <motion.circle cx="70" cy="70" r="15" fill="none" stroke="#4299E1" strokeWidth="3"
            animate={{ x: [0, 40, 0], y: [0, 40, 0]}}
            transition={{ duration: 3, repeat: Infinity }}
        />
        <motion.path d="M40 40 H 160 V 160 H 40 Z" fill="none" stroke="#718096" strokeWidth="3" strokeDasharray="10 10"
            variants={pathVariants}
        />
    </motion.svg>
);

// Story: Icons for government and university are connected by a central handshake.
const CollaborationAuthoritiesSVG = () => (
    <motion.svg viewBox="0 0 200 200" initial="hidden" animate="visible" variants={svgContainerVariants}>
        <motion.rect x="30" y="80" width="40" height="80" fill="#E2E8F0" variants={itemVariants}/>
        <motion.path d="M170 80 L170 160 L 130 160 L 130 110 L 150 90 Z" fill="#F0FFF4" variants={itemVariants}/>
        <motion.path d="M80 120 C 90 110, 110 110, 120 120" stroke="#A0AEC0" strokeWidth="4" variants={pathVariants} />
        <motion.path d="M80 120 L 120 120" stroke="#A0AEC0" strokeWidth="4" variants={{...pathVariants, visible: {...pathVariants.visible, transition: { delay: 0.5 }}}}/>
    </motion.svg>
);

// Story: Warning signs disappear as a strong firewall is built in front of them.
const PreventiveMeasuresSVG = () => (
    <motion.svg viewBox="0 0 200 200" initial="hidden" animate="visible" variants={svgContainerVariants}>
        <motion.path d="M100 60 L 120 90 L 80 90 Z" fill="#E53E3E" variants={{...itemVariants, visible: { ...itemVariants.visible, opacity: 0, transition: { delay: 1, duration: 0.5 }}}} />
        <motion.g variants={{ hidden: { opacity: 0 }, visible: { opacity: 1, transition: { staggerChildren: 0.2, delay: 0.8 } } }}>
            <motion.path d="M40 160 H 160" stroke="#ED8936" strokeWidth="8" variants={itemVariants}/>
            <motion.path d="M40 140 H 160" stroke="#ED8936" strokeWidth="8" variants={itemVariants}/>
            <motion.path d="M40 120 H 160" stroke="#ED8936" strokeWidth="8" variants={itemVariants}/>
        </motion.g>
    </motion.svg>
);

// Story: A single star appears, inspiring a constellation of trust to form around it.
const PublicTrustSVG = () => (
    <motion.svg viewBox="0 0 200 200" initial="hidden" animate="visible" variants={svgContainerVariants}>
        <motion.path d="M100 80 L108 95 L125 95 L112 107 L117 125 L100 115 L83 125 L88 107 L75 95 L92 95 Z"
            fill="#F6E05E"
            variants={{...itemVariants, hidden: { scale: 0 }, visible: { scale: 1 }}}
        />
        <motion.circle cx="60" cy="60" r="5" fill="#FEFCBF" variants={itemVariants}/>
        <motion.circle cx="140" cy="60" r="5" fill="#FEFCBF" variants={itemVariants}/>
        <motion.circle cx="60" cy="140" r="5" fill="#FEFCBF" variants={itemVariants}/>
        <motion.circle cx="140" cy="140" r="5" fill="#FEFCBF" variants={itemVariants}/>
    </motion.svg>
);

// --- 2. SVG Mapping ---
const svgMap = {
  'sec1-introduction-to-crccfs-cybercrime-response': IntroResponseSVG,
  'sec2-rapid-response-mechanisms': RapidResponseSVG,
  'sec3-victim-support-assistance': VictimSupportSVG,
  'sec4-investigation-evidence-handling': EvidenceHandlingSVG,
  'sec5-collaboration-with-authorities-institutions': CollaborationAuthoritiesSVG,
  'sec6-preventive-measures-awareness-programs': PreventiveMeasuresSVG,
  'sec7-building-public-trust-confidence': PublicTrustSVG,
};

// --- 3. Main Component ---
const CybercrimeResponseCapabilities = () => {

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
                    <Link to="/legal-compliance" className="hover:underline text-green-600">Legal Compliance</Link> / Cybercrime Response Capabilities
                </motion.nav>

                <motion.h1
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.1 }}
                    className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-16 text-center"
                >
                   Cybercrime Response Capabilities
                </motion.h1>

                <div className="space-y-20">
                    {cybercrimeResponseCapabilitiesData.map((section, index) => {
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
                                    className="lg:col-span-3 p-6 rounded-lg"
                                    variants={currentTextVariants}
                                    whileHover={{ backgroundColor: '#f0fdf4' }} // Light green background on hover
                                    transition={{ duration: 0.4 }}
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

export default CybercrimeResponseCapabilities;