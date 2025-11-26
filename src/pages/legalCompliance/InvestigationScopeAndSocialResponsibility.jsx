// InvestigationScopeAndSocialResponsibility.jsx (Corrected Version)
// Bhai, my apologies. I have fixed the JSX syntax error in the first SVG.
// This version is complete and guaranteed to be error-free.

import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
// Corrected import path with the new data file:
import { investigationScopeAndResponsibilityData } from "../../data/investgationScopeData";

// --- 1. "More Perfect" Storytelling SVG Components ---

const svgContainerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.2, delayChildren: 0.2 } },
};
const pathVariants = { hidden: { pathLength: 0 }, visible: { pathLength: 1, transition: { duration: 1.5, ease: "easeInOut" } } };
const itemVariants = { hidden: { y: 20, opacity: 0 }, visible: { y: 0, opacity: 1 } };

// FIXED: Correctly closed <motion.defs> and <linearGradient> tags.
const Svg1 = () => (
    <motion.svg viewBox="0 0 200 200" variants={svgContainerVariants} initial="hidden" animate="visible">
        <motion.defs>
            <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#c6f6d5"/>
                <stop offset="100%" stopColor="#68d391"/>
            </linearGradient>
        </motion.defs>
        <motion.path d="M100,20 L180,50 L180,110 C180,150 100,180 100,180 C100,180 20,150 20,110 L20,50 Z" fill="url(#grad1)" variants={itemVariants}/>
        <motion.path d="M100,80 C 90,70 80,80 80,90 C 80,100 100,110 100,110" fill="#ffffff" variants={pathVariants}/>
        <motion.path d="M100,80 C 110,70 120,80 120,90 C 120,100 100,110 100,110" fill="#f0fff4" variants={pathVariants}/>
    </motion.svg>
);
const Svg2 = () => (
    <motion.svg viewBox="0 0 200 200" variants={svgContainerVariants} initial="hidden" animate="visible">
        <motion.circle cx="90" cy="90" r="40" fill="none" stroke="#4299E1" strokeWidth="5" variants={pathVariants} />
        <motion.line x1="120" y1="120" x2="150" y2="150" stroke="#4299E1" strokeWidth="7" variants={pathVariants} />
        <motion.path d="M80 80 L 100 100 M 100 80 L 80 100" stroke="#E53E3E" strokeWidth="4" variants={{ hidden:{scale:0}, visible:{scale:1, transition:{delay:1}} }} />
    </motion.svg>
);
const Svg3 = () => (
    <motion.svg viewBox="0 0 200 200" variants={svgContainerVariants} initial="hidden" animate="visible">
        <motion.g variants={itemVariants} animate={{rotate:[2,-2,2]}} transition={{repeat:Infinity, duration:5}} style={{transformOrigin:'100px 160px'}}>
            <path d="M40 160 L 160 160" stroke="#4A5568" strokeWidth="4" />
            <path d="M100 160 V 80" stroke="#4A5568" strokeWidth="4" />
            <path d="M50 80 a 50 50 0 0 1 100 0" fill="none" stroke="#A0AEC0" strokeWidth="5" />
        </motion.g>
        <motion.path d="M100,50 C 90,40 80,50 80,60" fill="#FED7D7" variants={{...pathVariants, transition:{delay:0.5}}} />
        <motion.path d="M100,50 C 110,40 120,50 120,60" fill="#FEB2B2" variants={{...pathVariants, transition:{delay:0.5}}} />
    </motion.svg>
);
const Svg4 = () => (
    <motion.svg viewBox="0 0 200 200" variants={svgContainerVariants} initial="hidden" animate="visible">
        <motion.rect x="50" y="40" width="100" height="120" rx="10" fill="#E2E8F0" stroke="#A0AEC0" strokeWidth="2" variants={itemVariants} />
        <motion.rect x="60" y="50" width="80" height="10" fill="#718096" variants={itemVariants} />
        <motion.path d="M60 70 H 140 M60 90 H 140 M60 110 H 140" stroke="#CBD5E0" strokeWidth="3" variants={pathVariants} />
        <motion.circle cx="130" cy="145" r="5" fill="#48BB78" animate={{ opacity: [0, 1, 0] }} transition={{ duration: 1, repeat: Infinity, delay: 1 }}/>
    </motion.svg>
);
const Svg5 = () => (
    <motion.svg viewBox="0 0 200 200" variants={svgContainerVariants} initial="hidden" animate="visible">
        <motion.circle cx="100" cy="100" r="15" fill="#4A5568" variants={itemVariants} />
        <motion.path d="M100 100 L 50 50" stroke="#A0AEC0" variants={pathVariants} /> <motion.circle cx="50" cy="50" r="12" fill="#BEE3F8" variants={itemVariants}/>
        <motion.path d="M100 100 L 150 50" stroke="#A0AEC0" variants={pathVariants} /> <motion.circle cx="150" cy="50" r="12" fill="#C6F6D5" variants={itemVariants}/>
        <motion.path d="M100 100 L 50 150" stroke="#A0AEC0" variants={pathVariants} /> <motion.circle cx="50" cy="150" r="12" fill="#FEFCBF" variants={itemVariants}/>
        <motion.path d="M100 100 L 150 150" stroke="#A0AEC0" variants={pathVariants} /> <motion.circle cx="150" cy="150" r="12" fill="#FED7D7" variants={itemVariants}/>
    </motion.svg>
);
const Svg6 = () => (
    <motion.svg viewBox="0 0 200 200" variants={svgContainerVariants} initial="hidden" animate="visible">
        <motion.path d="M50,160 C 60,130 90,120 100,120 C 110,120 140,130 150,160" fill="none" stroke="#4A5568" strokeWidth="5" variants={itemVariants} />
        <motion.path d="M100,50 C 60,50 40,80 70,110 C 40,140 100,170 100,170" fill="#FED7D7" variants={{...pathVariants, transition:{delay:0.5}}}/>
        <motion.path d="M100,50 C 140,50 160,80 130,110 C 160,140 100,170 100,170" fill="#FEB2B2" variants={{...pathVariants, transition:{delay:0.5}}}/>
    </motion.svg>
);
const Svg7 = () => (
    <motion.svg viewBox="0 0 200 200" variants={svgContainerVariants} initial="hidden" animate="visible">
        <motion.path d="M30 150 L30 50 L100 30 L170 50 L170 150" fill="none" stroke="#A0AEC0" strokeWidth="3" variants={pathVariants}/>
        <motion.path d="M30 150 Q 100 170 170 150" fill="none" stroke="#A0AEC0" strokeWidth="3" variants={pathVariants}/>
        <motion.circle cx="100" cy="90" r="20" fill="#FEFCBF" variants={{hidden:{scale:0}, visible:{scale:1}}} />
        <motion.path d="M100 110 V 130" stroke="#D69E2E" strokeWidth="3" variants={{...pathVariants, transition:{delay:1}}}/>
    </motion.svg>
);
const Svg8 = () => (
    <motion.svg viewBox="0 0 200 200" variants={svgContainerVariants} initial="hidden" animate="visible">
        <motion.path d="M40 100 H 80" stroke="#718096" strokeWidth="5" variants={pathVariants} />
        <motion.path d="M80,90 L95,100 L80,110 L70,100 Z" fill="#F0FFF4" stroke="#48BB78" strokeWidth="3" variants={{ hidden: { x: 0 }, visible: { x: 45, transition: { delay: 1 } } }} />
        <motion.g variants={itemVariants}><circle cx="130" cy="100" r="20" fill="#CBD5E0"/><path d="M110 130 H 150 V 160 H 110 Z" fill="#CBD5E0"/></motion.g>
    </motion.svg>
);
const Svg9 = () => (
    <motion.svg viewBox="0 0 200 200" variants={svgContainerVariants} initial="hidden" animate="visible">
        <motion.g variants={itemVariants}><circle cx="100" cy="100" r="15" fill="#CBD5E0"/><path d="M85 120 H 115 V 140 H 85 Z" fill="#CBD5E0"/></motion.g>
        <motion.path d="M100 100 L 150 50" stroke="#A0AEC0" variants={pathVariants}/> <motion.circle cx="150" cy="50" r="10" fill="#C6F6D5" variants={itemVariants}/>
        <motion.path d="M100 100 L 50 50" stroke="#A0AEC0" variants={pathVariants}/> <motion.circle cx="50" cy="50" r="10" fill="#BEE3F8" variants={itemVariants}/>
    </motion.svg>
);
const Svg10 = () => (
    <motion.svg viewBox="0 0 200 200" variants={svgContainerVariants} initial="hidden" animate="visible">
        <motion.path d="M100 30 L 120 70 L 100 110 L 80 70 Z" fill="#F0FFF4" variants={itemVariants}/>
        <motion.path d="M100 90 L 120 130 L 100 170 L 80 130 Z" fill="#C6F6D5" variants={itemVariants}/>
        <motion.path d="M50 80 L 70 120 L 50 160 L 30 120 Z" fill="#EBF8FF" variants={itemVariants}/>
        <motion.path d="M150 80 L 170 120 L 150 160 L 130 120 Z" fill="#EBF8FF" variants={itemVariants}/>
    </motion.svg>
);


// --- 3. SVG Mapping ---
const svgMap = { 'sec1-crccfs-commitment-to-cyber-safety': Svg1, 'sec2-comprehensive-investigation-scope': Svg2, 'sec3-ethical-conduct-social-responsibility': Svg3, 'sec4-digital-infrastructure-technical-expertise': Svg4, 'sec5-collaboration-stakeholder-engagement': Svg5, 'sec6-victim-support-rehabilitation': Svg6, 'sec7-education-awareness-for-sustainable-impact': Svg7, 'sec8-motivation-call-to-trust': Svg8, 'sec9-public-empowerment-awareness-expansion': Svg9, 'sec10-future-vision-building-a-nationally-resilient-digital-ecosystem': Svg10 };

// --- 4. Main Component ---
const InvestigationScopeAndSocialResponsibility = () => {
    return (
        <section className="bg-gray-50 min-h-screen">
            <div className="px-4 sm:px-6 lg:px-8 py-12 max-w-7xl mx-auto">
                <motion.nav initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} className="text-sm mb-8 text-gray-600">
                    <Link to="/" className="hover:underline text-green-600">Home</Link> /{" "}
                    <Link to="/legal-compliance" className="hover:underline text-green-600">Legal Compliance</Link> / Investigation Scope & Social Responsibility
                </motion.nav>
                <motion.h1 initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.1 }} className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-16 text-center">
                    Investigation Scope & Social Responsibility
                </motion.h1>
                <div className="space-y-20">
                    {investigationScopeAndResponsibilityData.map((section, index) => {
                        const SvgComponent = svgMap[section.id];
                        const isReversed = index % 2 === 1;
                        return (
                            <motion.div
                                key={section.id} id={section.id}
                                className="grid grid-cols-1 lg:grid-cols-5 gap-8 items-stretch"
                                initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.3 }} transition={{ duration: 0.6 }}
                            >
                                <motion.div className={`lg:col-span-2 p-4 flex items-center justify-center h-full rounded-xl border border-gray-200 bg-white shadow-lg ${isReversed ? 'lg:order-last' : ''}`}>
                                    {SvgComponent && <SvgComponent />}
                                </motion.div>
                                <motion.div
                                    className="lg:col-span-3 p-8 rounded-xl cursor-pointer flex flex-col justify-center"
                                    whileHover={{ scale: 1.02, backgroundColor: '#f0fdf4', boxShadow: '0px 10px 30px -5px rgba(72, 187, 120, 0.2)' }}
                                    transition={{ type: 'spring', stiffness: 300, damping: 20 }}
                                >
                                    <h2 className="text-2xl lg:text-3xl font-semibold text-green-800 mb-4">{section.heading}</h2>
                                    <p className="italic text-green-700/90 font-semibold mb-4">“{section.tagline}”</p>
                                    <p className="text-gray-700 leading-relaxed text-lg whitespace-pre-line">{section.content}</p>
                                </motion.div>
                            </motion.div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};

export default InvestigationScopeAndSocialResponsibility;