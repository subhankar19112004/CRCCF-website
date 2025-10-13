// OperationalResourcesAndTeam.jsx
// Bhai, this is the next page. I have implemented the new hover effect:
// the background of the text block now changes color on hover, slowly and animately.
// It also has 7 new storytelling SVGs and is error-free.

import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
// Corrected import path as requested:
import { operationalResourcesAndTeamData } from "../../data/operationalResourcesAndTeamData";

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

// Story: A central shield radiates strength to a team, technology, and infrastructure.
const OperationalStrengthSVG = () => (
    <motion.svg viewBox="0 0 200 200" initial="hidden" animate="visible" variants={svgContainerVariants}>
        <motion.path d="M100,80 L120,95 L100,110 L80,95 Z" fill="#F0FFF4" stroke="#48BB78" strokeWidth="3"
            variants={{...itemVariants, hidden: { scale: 0 }, visible: { scale: 1 }}}
            animate={{ scale: [1, 1.1, 1] }}
            transition={{ repeat: Infinity, duration: 2 }}
        />
        <motion.path d="M100 95 L 150 50" stroke="#A0AEC0" variants={pathVariants} />
        <motion.path d="M100 95 L 50 50" stroke="#A0AEC0" variants={pathVariants} />
        <motion.path d="M100 95 L 100 150" stroke="#A0AEC0" variants={pathVariants} />
        <motion.circle cx="150" cy="50" r="15" fill="#EBF8FF" variants={itemVariants} />
        <motion.circle cx="50" cy="50" r="15" fill="#FEFCBF" variants={itemVariants} />
        <motion.circle cx="100" cy="150" r="15" fill="#FED7D7" variants={itemVariants} />
    </motion.svg>
);

// Story: Various tools (shield, etc.) fly into a secure computer screen.
const AdvancedToolsSVG = () => (
    <motion.svg viewBox="0 0 200 200" initial="hidden" animate="visible" variants={svgContainerVariants}>
        <motion.rect x="40" y="60" width="120" height="80" rx="5" fill="#4A5568" variants={itemVariants}/>
        <motion.rect x="30" y="140" width="140" height="10" fill="#718096" variants={itemVariants}/>
        <motion.path d="M50 40 L 60 50 L 50 60" stroke="#48BB78" strokeWidth="4" fill="none"
             variants={{ hidden: { x: 0 }, visible: { x: 40, transition: { delay: 0.5, duration: 1 } } }}
        />
         <motion.path d="M150 40 L 140 50 L 150 60" stroke="#4299E1" strokeWidth="4" fill="none"
             variants={{ hidden: { x: 0 }, visible: { x: -40, transition: { delay: 0.8, duration: 1 } } }}
        />
    </motion.svg>
);

// Story: A team of people appears, with a brain (skill) and heart (dedication) highlighted.
const SkilledTeamSVG = () => (
    <motion.svg viewBox="0 0 200 200" initial="hidden" animate="visible" variants={svgContainerVariants}>
        <motion.g variants={itemVariants}><circle cx="100" cy="90" r="25" fill="#CBD5E0"/><path d="M70 130 H 130 V 160 H 70 Z" fill="#CBD5E0"/></motion.g>
        <motion.g variants={itemVariants}><circle cx="60" cy="100" r="20" fill="#E2E8F0"/><path d="M40 130 H 80 V 160 H 40 Z" fill="#E2E8F0"/></motion.g>
        <motion.g variants={itemVariants}><circle cx="140" cy="100" r="20" fill="#E2E8F0"/><path d="M120 130 H 160 V 160 H 120 Z" fill="#E2E8F0"/></motion.g>
        <motion.path d="M100,60 C 90,60 80,70 80,80 C 80,90 90,100 100,100" fill="none" stroke="#4299E1" strokeWidth="3" variants={pathVariants}/>
        <motion.path d="M100,105 C 95,100 90,105 90,110 C 90,115 100,120 100,120" fill="#E53E3E" variants={itemVariants}/>
    </motion.svg>
);

// Story: A government building and university are connected by a growing network.
const CollaborativeNetworkSVG = () => (
    <motion.svg viewBox="0 0 200 200" initial="hidden" animate="visible" variants={svgContainerVariants}>
        <motion.rect x="30" y="80" width="40" height="80" fill="#E2E8F0" variants={itemVariants}/>
        <motion.path d="M170 80 L170 160 L 130 160 L 130 110 L 150 90 Z" fill="#F0FFF4" variants={itemVariants}/>
        <motion.circle cx="100" cy="120" r="10" fill="#A0AEC0" variants={itemVariants}/>
        <motion.path d="M70 120 H 90" stroke="#A0AEC0" variants={pathVariants} />
        <motion.path d="M130 120 H 110" stroke="#A0AEC0" variants={pathVariants} />
    </motion.svg>
);

// Story: A pie chart animates, and an arrow points to the largest, most effective slice.
const ResourceAllocationSVG = () => (
    <motion.svg viewBox="0 0 200 200" initial="hidden" animate="visible" variants={svgContainerVariants}>
        <motion.circle cx="100" cy="100" r="60" fill="none" stroke="#A0AEC0" strokeWidth="10"
            variants={{...pathVariants, hidden: { ...pathVariants.hidden, strokeDasharray: "377 377", strokeDashoffset: 377 }, visible: { ...pathVariants.visible, strokeDashoffset: 150 }}}
        />
        <motion.circle cx="100" cy="100" r="60" fill="none" stroke="#48BB78" strokeWidth="10"
             variants={{...pathVariants, hidden: { ...pathVariants.hidden, strokeDasharray: "377 377", strokeDashoffset: 377 }, visible: { ...pathVariants.visible, strokeDashoffset: 280 }}}
        />
        <motion.path d="M100 30 V 70 L 120 50" stroke="#4A5568" fill="none" strokeWidth="5" variants={itemVariants} />
    </motion.svg>
);

// Story: A person's skill graph goes up, and they earn a graduation cap.
const ContinuousTrainingSVG = () => (
    <motion.svg viewBox="0 0 200 200" initial="hidden" animate="visible" variants={svgContainerVariants}>
        <motion.g variants={itemVariants}>
            <circle cx="100" cy="130" r="20" fill="#CBD5E0" />
            <path d="M80 150 H 120 V 160 H 80 Z" fill="#CBD5E0" />
        </motion.g>
        <motion.path d="M50 120 L 70 100 L 90 110 L 110 90 L 130 100 L 150 80" stroke="#48BB78" strokeWidth="4" variants={pathVariants}/>
        <motion.path d="M80 110 L100 90 L120 110 L100 130 Z" fill="#718096"
            variants={{ hidden: { y: 30, opacity: 0 }, visible: { y: 0, opacity: 1, transition: { delay: 1 } } }}
        />
    </motion.svg>
);

// Story: A hand gives a shield to a person, empowering their trust and confidence.
const EmpoweringTrustSVG = () => (
    <motion.svg viewBox="0 0 200 200" initial="hidden" animate="visible" variants={svgContainerVariants}>
        <motion.g variants={itemVariants}>
            <circle cx="130" cy="100" r="20" fill="#CBD5E0"/>
            <path d="M110 130 H 150 V 160 H 110 Z" fill="#CBD5E0"/>
        </motion.g>
        <motion.path d="M40 100 H 80" stroke="#718096" strokeWidth="5" variants={pathVariants} />
        <motion.path d="M80,90 L95,100 L80,110 L70,100 Z" fill="#F0FFF4" stroke="#48BB78" strokeWidth="3"
             variants={{ hidden: { x: 0 }, visible: { x: 25, transition: { delay: 1 } } }}
        />
    </motion.svg>
);


// --- 2. SVG Mapping ---
const svgMap = {
  'sec1-introduction-to-crccfs-operational-strength': OperationalStrengthSVG,
  'sec2-advanced-digital-tools-technology': AdvancedToolsSVG,
  'sec3-skilled-dedicated-team': SkilledTeamSVG,
  'sec4-collaborative-network-partnerships': CollaborativeNetworkSVG,
  'sec5-resource-allocation-for-effective-action': ResourceAllocationSVG,
  'sec6-continuous-training-development': ContinuousTrainingSVG,
  'sec7-empowering-trust-confidence': EmpoweringTrustSVG,
};

// --- 3. Main Component ---
const OperationalResourcesAndTeam = () => {

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
                    <Link to="/legal-compliance" className="hover:underline text-green-600">Legal Compliance</Link> / Operational Resources & Team
                </motion.nav>

                <motion.h1
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.1 }}
                    className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-16 text-center"
                >
                   Operational Resources & Team
                </motion.h1>

                <div className="space-y-20">
                    {operationalResourcesAndTeamData.map((section, index) => {
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
                                    whileHover={{ backgroundColor: '#f0fdf4' }}
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

export default OperationalResourcesAndTeam;