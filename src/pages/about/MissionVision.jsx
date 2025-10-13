import React, { useState, useEffect, useMemo, useRef } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { missionAndVisionData } from '../../data/missionAndVisionData';
import { FiArrowLeft } from 'react-icons/fi';

// --- CONFIGURATION ---
const WORDS_PER_PAGE = 1200;

// --- PAGINATION ICONS ---
const FirstPageIcon = () => <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5"><path strokeLinecap="round" strokeLinejoin="round" d="M18.75 19.5l-7.5-7.5 7.5-7.5m-6 15L5.25 12l7.5-7.5" /></svg>;
const PrevPageIcon = () => <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5"><path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" /></svg>;
const NextPageIcon = () => <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5"><path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" /></svg>;
const LastPageIcon = () => <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5"><path strokeLinecap="round" strokeLinejoin="round" d="M5.25 4.5l7.5 7.5-7.5 7.5m6-15l7.5 7.5-7.5 7.5" /></svg>;


// --- ALL 100 UNIQUE ANIMATED SVG COMPONENTS ---

const svgContainerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.1, delayChildren: 0.1 } },
};

const pathVariants = {
  hidden: { pathLength: 0, opacity: 0 },
  visible: { pathLength: 1, opacity: 1, transition: { duration: 1.2, ease: "easeInOut" } },
};

const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1 }
};

// SVGs 1-10
const Svg1 = () => <motion.svg viewBox="0 0 200 200" initial="hidden" animate="visible" variants={svgContainerVariants}><motion.g variants={itemVariants}><path d="M100 180 L80 120 H120 L100 180 Z" fill="#4A5568" /><rect x="85" y="80" width="30" height="40" fill="#718096" /><path d="M70 80 H130 L120 70 H80 Z" fill="#4A5568" /><circle cx="100" cy="60" r="15" fill="#FBBF24" /></motion.g><motion.path d="M100 60 L 20 20" stroke="url(#g1)" strokeWidth="30" strokeLinecap="round" variants={{ hidden: { opacity: 0 }, visible: { opacity: [0, 0.5, 0], transition: { duration: 2, repeat: Infinity, delay: 1 } } }} /><motion.g variants={itemVariants}><path d="M150 120 L170 120 M160 120 L160 130 L140 140 L180 140 L160 130" stroke="#A0AEC0" strokeWidth="2" variants={pathVariants} /></motion.g><defs><radialGradient id="g1"><stop offset="0%" stopColor="#FBBF24" stopOpacity="0.7" /><stop offset="100%" stopColor="#FBBF24" stopOpacity="0" /></radialGradient></defs></motion.svg>;
const Svg2 = () => <motion.svg viewBox="0 0 200 200" initial="hidden" animate="visible" variants={svgContainerVariants}><motion.path d="M100,30 L170,60 L170,120 C170,160 100,180 100,180 C100,180 30,160 30,120 L30,60 L100,30 Z" stroke="#38A169" strokeWidth="4" fill="rgba(199, 249, 204, 0.5)" variants={pathVariants} /><motion.path d="M 80 100 L 95 115 L 125 85" stroke="#38A169" fill="none" strokeWidth="8" strokeLinecap="round" variants={{ hidden: { pathLength: 0 }, visible: { pathLength: 1, transition: { delay: 1, duration: 0.5 } } }} /><motion.circle cx="100" cy="100" r="10" fill="#38A169" animate={{ scale: [1, 1.2, 1] }} transition={{ delay: 1.5, duration: 2, repeat: Infinity }} /></motion.svg>;
const Svg3 = () => <motion.svg viewBox="0 0 200 200" initial="hidden" animate="visible" variants={svgContainerVariants}><motion.path d="M50,150 C 60,120 90,110 100,110 C 110,110 140,120 150,150" fill="none" stroke="#4A5568" strokeWidth="6" variants={itemVariants} /><motion.g variants={itemVariants}><circle cx="100" cy="70" r="15" fill="#A0AEC0" /><path d="M90 90 L110 90 L100 120 Z" fill="#A0AEC0" transform="scale(0.8) translate(25, -15)" /></motion.g><motion.circle cx="100" cy="70" r="20" fill="none" stroke="#FBBF24" strokeWidth="3" animate={{ scale: [1, 1.3], opacity: [0.8, 0] }} transition={{ delay: 1, duration: 1.5, repeat: Infinity }} /></motion.svg>;
const Svg4 = () => <motion.svg viewBox="0 0 200 200" initial="hidden" animate="visible" variants={svgContainerVariants}><motion.rect x="30" y="100" width="20" height="60" fill="#718096" variants={itemVariants} /><motion.rect x="90" y="100" width="20" height="60" fill="#718096" variants={itemVariants} /><motion.rect x="150" y="100" width="20" height="60" fill="#718096" variants={itemVariants} /><motion.path d="M40 100 C 65 70, 135 70, 160 100" fill="none" stroke="#4299E1" strokeWidth="6" variants={pathVariants} /><motion.text x="40" y="175" textAnchor="middle" fill="#2D3748" variants={itemVariants}>LAW</motion.text><motion.text x="100" y="175" textAnchor="middle" fill="#2D3748" variants={itemVariants}>TECH</motion.text><motion.text x="160" y="175" textAnchor="middle" fill="#2D3748" variants={itemVariants}>HUMANITY</motion.text></motion.svg>;
const Svg5 = () => <motion.svg viewBox="0 0 200 200" initial="hidden" animate="visible" variants={svgContainerVariants}><motion.g variants={itemVariants}><path d="M100,50 C 60,50 40,80 70,110 C 40,140 100,170 100,170 C 100,170 160,140 130,110 C 160,80 140,50 100,50 Z" fill="#C6F6D5" /></motion.g><motion.g variants={{...itemVariants, hidden: {rotate: -90, opacity: 0}, visible: {rotate: 0, opacity: 1}}}><path d="M100 120 L100 130 L80 140 L120 140 L100 130" stroke="#38A169" strokeWidth="3" fill="none" /><rect x="95" y="80" width="10" height="40" fill="#38A169" /></motion.g></motion.svg>;
const Svg6 = () => <motion.svg viewBox="0 0 200 200" initial="hidden" animate="visible" variants={svgContainerVariants}><motion.path d="M100,30 L170,60 L170,120 C170,160 100,180 100,180 C100,180 30,160 30,120 L30,60 L100,30 Z" fill="#F0FFF4" stroke="#48BB78" strokeWidth="4" variants={pathVariants} /><motion.path d="M80 80 L120 120 M120 80 L80 120" stroke="#E53E3E" strokeWidth="6" variants={{hidden:{scale:0, opacity:0}, visible:{scale:1, opacity:1, transition:{delay:1}}}} /><motion.path d="M100,30 L170,60 L170,120 C170,160 100,180 100,180 C100,180 30,160 30,120 L30,60 L100,30 Z" fill="none" stroke="#48BB78" strokeWidth="4" variants={{...pathVariants, visible:{...pathVariants.visible, transition:{delay:0.2, ...pathVariants.visible.transition}}}} /></motion.svg>;
const Svg7 = () => <motion.svg viewBox="0 0 200 200" initial="hidden" animate="visible" variants={svgContainerVariants}><motion.path d="M100 30 L170 100 L100 170 L30 100 Z" fill="#EBF8FF" stroke="#4299E1" strokeWidth="3" variants={itemVariants}/><motion.path d="M100 50 L150 100 L100 150 L50 100 Z" fill="#BEE3F8" variants={itemVariants}/><motion.path d="M100 70 L130 100 L100 130 L70 100 Z" fill="#90CDF4" variants={itemVariants}/><motion.circle cx="100" cy="100" r="10" fill="white" variants={itemVariants}/></motion.svg>;
const Svg8 = () => <motion.svg viewBox="0 0 200 200" initial="hidden" animate="visible" variants={svgContainerVariants}><motion.path d="M 50 150 A 50 50 0 0 1 150 150" stroke="#A0AEC0" strokeWidth="4" fill="none" variants={pathVariants}/><motion.rect x="40" y="150" width="120" height="10" fill="#A0AEC0" variants={itemVariants}/><motion.g variants={itemVariants}><circle cx="100" cy="100" r="20" fill="#90CDF4"/><path d="M90 120 L 110 120 L 100 150 Z" fill="#90CDF4" transform="scale(0.8) translate(25, -25)"/></motion.g><motion.path d="M100 50 V 80" stroke="#F6E05E" strokeWidth="4" strokeLinecap="round" variants={{...pathVariants, visible:{...pathVariants.visible, transition:{delay:0.5, ...pathVariants.visible.transition}}}}/></motion.svg>;
const Svg9 = () => <motion.svg viewBox="0 0 200 200" initial="hidden" animate="visible" variants={svgContainerVariants}><motion.path d="M40 40 H160 V160 H40Z" fill="white" stroke="#CBD5E0" strokeWidth="2" variants={itemVariants}/><motion.path d="M60 70 L100 110 L140 70" stroke="#48BB78" strokeWidth="6" fill="none" variants={pathVariants}/><motion.path d="M60 100 H140" stroke="#E2E8F0" variants={pathVariants}/><motion.path d="M60 120 H120" stroke="#E2E8F0" variants={pathVariants}/></motion.svg>;
const Svg10 = () => <motion.svg viewBox="0 0 200 200" initial="hidden" animate="visible" variants={svgContainerVariants}><motion.circle cx="100" cy="100" r="60" fill="#F0FFF4" variants={itemVariants}/><motion.circle cx="100" cy="100" r="60" stroke="#48BB78" strokeWidth="4" strokeDasharray="10 5" variants={pathVariants} animate={{rotate:360}} transition={{duration:10, repeat:Infinity, ease:'linear'}}/><motion.path d="M100,80 C 90,70 70,80 70,100 C 70,120 100,130 100,130 C 100,130 130,120 130,100 C 130,80 110,70 100,80 Z" fill="#9AE6B4" variants={itemVariants}/></motion.svg>;

// SVGs 11-20
const Svg11 = () => <motion.svg viewBox="0 0 200 200" initial="hidden" animate="visible" variants={svgContainerVariants}><motion.path d="M50 150 L100 50 L150 150 Z" fill="#FEFCBF" stroke="#F6E05E" strokeWidth="3" variants={itemVariants}/><motion.path d="M100 60 V 40" stroke="black" strokeWidth="4" variants={{...pathVariants, visible:{...pathVariants.visible, transition:{delay:0.5}}}}/><motion.circle cx="100" cy="110" r="10" fill="black" variants={itemVariants}/></motion.svg>;
const Svg12 = () => <motion.svg viewBox="0 0 200 200" initial="hidden" animate="visible" variants={svgContainerVariants}><motion.circle cx="100" cy="100" r="70" fill="none" stroke="#A0AEC0" strokeWidth="2" variants={pathVariants}/><motion.path d="M100,100 L170,100" stroke="#4299E1" strokeWidth="4" variants={{hidden:{rotate:-90, pathLength:0}, visible:{rotate:0, pathLength:1, transition:{delay:0.5}}}}/><motion.path d="M100,100 L100,30" stroke="#4299E1" strokeWidth="4" variants={{hidden:{pathLength:0}, visible:{pathLength:1, transition:{delay:0.8}}}}/><motion.circle cx="100" cy="100" r="5" fill="#4299E1"/></motion.svg>;
const Svg13 = () => <motion.svg viewBox="0 0 200 200" initial="hidden" animate="visible" variants={svgContainerVariants}><motion.g variants={itemVariants}><path d="M100,50 C 60,50 40,80 70,110 C 40,140 100,170 100,170 C 100,170 160,140 130,110 C 160,80 140,50 100,50 Z" fill="#FEEBC8" stroke="#ED8936" strokeWidth="3"/></motion.g><motion.circle cx="100" cy="110" r="30" fill="none" stroke="white" strokeWidth="20" variants={{hidden:{scale:0}, visible:{scale:1, transition:{delay:0.5}}}}/></motion.svg>;
const Svg14 = () => <motion.svg viewBox="0 0 200 200" initial="hidden" animate="visible" variants={svgContainerVariants}><motion.rect x="30" y="30" width="140" height="140" rx="10" stroke="#A0AEC0" fill="none" strokeWidth="2" variants={pathVariants}/><motion.path d="M60 80 H 140 M60 100 H 140 M60 120 H 100" stroke="#CBD5E0" strokeWidth="4" variants={{...pathVariants, visible:{...pathVariants.visible, transition:{delay:0.5}}}}/><motion.circle cx="100" cy="100" r="40" fill="#48BB78" variants={{hidden:{scale:0}, visible:{scale:1, transition:{delay:1}}}}/><motion.path d="M85 100 L100 115 L115 95" stroke="white" strokeWidth="6" fill="none" variants={{...pathVariants, visible:{...pathVariants.visible, transition:{delay:1.5}}}}/></motion.svg>;
const Svg15 = () => <motion.svg viewBox="0 0 200 200" initial="hidden" animate="visible" variants={svgContainerVariants}><motion.path d="M40 160 L 160 160" stroke="#A0AEC0" strokeWidth="2" variants={itemVariants}/><motion.rect x="60" y="60" width="80" height="100" fill="#EBF8FF" variants={{...itemVariants, hidden:{y:100, opacity:0}}}/><motion.rect x="90" y="40" width="20" height="20" fill="#90CDF4" variants={itemVariants}/><motion.path d="M80 160 L80 80 L120 80 L120 160" fill="none" stroke="#4299E1" strokeWidth="4" variants={pathVariants}/></motion.svg>;
const Svg16 = () => <motion.svg viewBox="0 0 200 200" initial="hidden" animate="visible" variants={svgContainerVariants}><motion.g variants={itemVariants}><circle cx="60" cy="100" r="20" fill="#BEE3F8"/><path d="M50 120 L 70 120 L 60 150 Z" fill="#BEE3F8" transform="scale(0.8) translate(15, -25)"/></motion.g><motion.g variants={itemVariants}><circle cx="140" cy="100" r="20" fill="#BEE3F8"/><path d="M130 120 L 150 120 L 140 150 Z" fill="#BEE3F8" transform="scale(0.8) translate(35, -25)"/></motion.g><motion.path d="M75 100 C 85 80, 115 80, 125 100" stroke="#4299E1" strokeWidth="3" variants={pathVariants}/></motion.svg>;
const Svg17 = () => <motion.svg viewBox="0 0 200 200" initial="hidden" animate="visible" variants={svgContainerVariants}><motion.circle cx="100" cy="100" r="50" fill="#FEFCBF" variants={itemVariants}/><motion.path d="M100 50 V20 M100 150 V180 M50 100 H20 M150 100 H180" stroke="#F6E05E" strokeWidth="4" strokeLinecap="round" variants={pathVariants}/><motion.path d="M100 90 L110 110 L90 110 Z" fill="#2D3748" variants={{hidden:{scale:0}, visible:{scale:1, transition:{delay:1}}}} animate={{y:[0, 10, 0]}} transition={{duration:2, repeat:Infinity}}/></motion.svg>;
const Svg18 = () => <motion.svg viewBox="0 0 200 200" initial="hidden" animate="visible" variants={svgContainerVariants}><motion.path d="M100,30 L170,60 L170,120 C170,160 100,180 100,180 C100,180 30,160 30,120 L30,60 L100,30 Z" fill="none" stroke="#4A5568" strokeWidth="4" variants={pathVariants} /><motion.rect x="30" y="70" width="140" height="20" fill="#FF9933" variants={{...itemVariants, hidden:{scaleX:0}}} /><motion.rect x="30" y="90" width="140" height="20" fill="white" stroke="#4A5568" strokeWidth="0.5" variants={{...itemVariants, hidden:{scaleX:0}}} /><motion.rect x="30" y="110" width="140" height="20" fill="#138808" variants={{...itemVariants, hidden:{scaleX:0}}} /><motion.circle cx="100" cy="100" r="8" fill="#000080" variants={itemVariants} /></motion.svg>;
const Svg19 = () => <motion.svg viewBox="0 0 200 200" initial="hidden" animate="visible" variants={svgContainerVariants}><motion.g variants={itemVariants}><path d="M100,50 C 60,50 40,80 70,110 C 40,140 100,170 100,170 C 100,170 160,140 130,110 C 160,80 140,50 100,50 Z" fill="#FED7D7" /></motion.g><motion.path d="M100 120 L100 130 L80 140 L120 140 L100 130" stroke="#C53030" strokeWidth="3" fill="none" variants={{...pathVariants, visible:{...pathVariants.visible, transition:{delay:0.5}}}}/><rect x="95" y="80" width="10" height="40" fill="#C53030" variants={itemVariants} /></motion.svg>;
const Svg20 = () => <motion.svg viewBox="0 0 200 200" initial="hidden" animate="visible" variants={svgContainerVariants}><motion.path d="M40,100 a 60,60 0 1,1 120,0 a 60,60 0 1,1 -120,0" fill="#F7FAFC" stroke="#A0AEC0" strokeWidth="2" variants={pathVariants}/><motion.circle cx="100" cy="100" r="30" fill="#EBF8FF" variants={itemVariants}/><motion.circle cx="100" cy="100" r="10" fill="#90CDF4" variants={itemVariants} animate={{scale:[1, 1.2, 1]}} transition={{duration:2, repeat:Infinity, delay:0.5}}/></motion.svg>;

// SVGs 21-30
const Svg21 = () => <motion.svg viewBox="0 0 200 200" initial="hidden" animate="visible" variants={svgContainerVariants}><motion.g variants={itemVariants}><path d="M50 40 H150 L 130 160 H 70 Z" fill="#E2E8F0" stroke="#A0AEC0" strokeWidth="2"/></motion.g><motion.path d="M100,50 C 60,50 40,80 70,110 C 40,140 100,170 100,170 C 100,170 160,140 130,110 C 160,80 140,50 100,50 Z" fill="#FED7D7" variants={itemVariants}/></motion.svg>;
const Svg22 = () => <motion.svg viewBox="0 0 200 200" initial="hidden" animate="visible" variants={svgContainerVariants}><motion.path d="M100,30 L170,60 L170,120 C170,160 100,180 100,180 C100,180 30,160 30,120 L30,60 L100,30 Z" fill="#FEFCBF" stroke="#D69E2E" strokeWidth="4" variants={pathVariants}/><motion.rect x="30" y="70" width="140" height="20" fill="#FF9933" variants={{...itemVariants, hidden:{scaleX:0}}} /><motion.rect x="30" y="90" width="140" height="20" fill="white" variants={{...itemVariants, hidden:{scaleX:0}}} /><motion.rect x="30" y="110" width="140" height="20" fill="#138808" variants={{...itemVariants, hidden:{scaleX:0}}} /></motion.svg>;
const Svg23 = () => <motion.svg viewBox="0 0 200 200" initial="hidden" animate="visible" variants={svgContainerVariants}><motion.rect x="40" y="40" width="120" height="120" fill="none" stroke="#A0AEC0" strokeWidth="2" variants={pathVariants}/><motion.path d="M100 40 V 160" stroke="#CBD5E0" variants={pathVariants}/><motion.path d="M70 70 L 130 70 M 70 100 L 130 100 M 70 130 L 130 130" stroke="#4299E1" strokeWidth="4" variants={pathVariants}/></motion.svg>;
const Svg24 = () => <motion.svg viewBox="0 0 200 200" initial="hidden" animate="visible" variants={svgContainerVariants}><motion.path d="M100,30 L170,60 L170,120 C170,160 100,180 100,180 C100,180 30,160 30,120 L30,60 L100,30 Z" fill="none" stroke="#4A5568" strokeWidth="4" variants={pathVariants} /><motion.path d="M80 80 L120 120 M120 80 L80 120" stroke="#E53E3E" strokeWidth="6" variants={{hidden:{scale:0, opacity:0}, visible:{scale:1, opacity:1, transition:{delay:1}}}} /><motion.path d="M100,30 L170,60 L170,120 C170,160 100,180 100,180 C100,180 30,160 30,120 L30,60 L100,30 Z" fill="none" stroke="#4A5568" strokeWidth="4" variants={{...pathVariants, visible:{...pathVariants.visible, transition:{delay:0.2, ...pathVariants.visible.transition}}}} /></motion.svg>;
const Svg25 = () => <motion.svg viewBox="0 0 200 200" initial="hidden" animate="visible" variants={svgContainerVariants}><motion.rect x="40" y="40" width="120" height="120" rx="10" fill="#F7FAFC" stroke="#A0AEC0" strokeWidth="2" variants={itemVariants}/><motion.path d="M100 70 L120 90 L100 110 L80 90Z" fill="#90CDF4" variants={itemVariants}/><motion.path d="M100 110 V 140" stroke="#A0AEC0" strokeWidth="3" variants={pathVariants}/></motion.svg>;
const Svg26 = () => <motion.svg viewBox="0 0 200 200" initial="hidden" animate="visible" variants={svgContainerVariants}><motion.circle cx="100" cy="100" r="70" fill="#E6FFFA" stroke="#38B2AC" strokeWidth="3" variants={itemVariants}/><motion.path d="M60 100 H 140" stroke="#319795" strokeWidth="2" variants={pathVariants}/><motion.path d="M100 60 V 140" stroke="#319795" strokeWidth="2" variants={pathVariants}/><motion.path d="M72 72 L 128 128" stroke="#319795" strokeWidth="2" variants={pathVariants}/><motion.path d="M72 128 L 128 72" stroke="#319795" strokeWidth="2" variants={pathVariants}/></motion.svg>;
const Svg27 = () => <motion.svg viewBox="0 0 200 200" initial="hidden" animate="visible" variants={svgContainerVariants}><motion.g variants={itemVariants}><path d="M50 40 H150 L 130 160 H 70 Z" fill="#EBF8FF" stroke="#4299E1" strokeWidth="2"/></motion.g><motion.g variants={itemVariants}><path d="M100,50 C 60,50 40,80 70,110 C 40,140 100,170 100,170 C 100,170 160,140 130,110 C 160,80 140,50 100,50 Z" fill="#FED7D7" /></motion.g></motion.svg>;
const Svg28 = () => <motion.svg viewBox="0 0 200 200" initial="hidden" animate="visible" variants={svgContainerVariants}><motion.path d="M100,30 L170,60 L170,120 C170,160 100,180 100,180 C100,180 30,160 30,120 L30,60 L100,30 Z" fill="#F0FFF4" stroke="#48BB78" strokeWidth="4" variants={pathVariants}/><motion.rect x="30" y="70" width="140" height="20" fill="#FF9933" variants={{...itemVariants, hidden:{scaleX:0}}} /><motion.rect x="30" y="90" width="140" height="20" fill="white" variants={{...itemVariants, hidden:{scaleX:0}}} /><motion.rect x="30" y="110" width="140" height="20" fill="#138808" variants={{...itemVariants, hidden:{scaleX:0}}} /></motion.svg>;
const Svg29 = () => <motion.svg viewBox="0 0 200 200" initial="hidden" animate="visible" variants={svgContainerVariants}><motion.rect x="30" y="60" width="140" height="80" rx="10" fill="none" stroke="#A0AEC0" strokeWidth="2" variants={pathVariants}/><motion.path d="M50 100 L 80 100" stroke="#4299E1" strokeWidth="4" variants={pathVariants}/><motion.path d="M90 80 L 120 80 M90 120 L 120 120" stroke="#CBD5E0" strokeWidth="4" variants={pathVariants}/></motion.svg>;
const Svg30 = () => <motion.svg viewBox="0 0 200 200" initial="hidden" animate="visible" variants={svgContainerVariants}><motion.circle cx="100" cy="100" r="50" fill="none" stroke="#A0AEC0" strokeWidth="2" variants={pathVariants}/><motion.path d="M80 80 L120 120 M120 80 L80 120" stroke="#E53E3E" strokeWidth="6" variants={{hidden:{scale:0, opacity:0}, visible:{scale:1, opacity:1, transition:{delay:1}}}} /><motion.path d="M80 80 L120 120 M120 80 L80 120" fill="none" stroke="#4A5568" strokeWidth="2" variants={{...pathVariants, visible:{...pathVariants.visible, transition:{delay:0.2, ...pathVariants.visible.transition}}}}/></motion.svg>;

// SVGs 31-40
const Svg31 = () => <motion.svg viewBox="0 0 200 200" initial="hidden" animate="visible" variants={svgContainerVariants}><motion.path d="M 50,150 Q 100,20, 150,150" fill="none" stroke="#D53F8C" strokeWidth="6" variants={itemVariants} /><motion.g variants={itemVariants}><circle cx="100" cy="90" r="20" fill="#FBB6CE" /><path d="M80 120 Q 100 110 120 120 L 110 150 L 90 150 Z" fill="#FBB6CE" /></motion.g></motion.svg>;
const Svg32 = () => <motion.svg viewBox="0 0 200 200" initial="hidden" animate="visible" variants={svgContainerVariants}><motion.circle cx="75" cy="100" r="30" fill="#FBB6CE" stroke="#D53F8C" strokeWidth="3" variants={itemVariants}/><motion.circle cx="125" cy="100" r="30" fill="#BEE3F8" stroke="#4299E1" strokeWidth="3" variants={itemVariants}/><motion.path d="M90 100 L 110 100" stroke="white" strokeWidth="4" variants={pathVariants}/></motion.svg>;
const Svg33 = () => <motion.svg viewBox="0 0 200 200" initial="hidden" animate="visible" variants={svgContainerVariants}><motion.path d="M40 160 L160 160" stroke="#A0AEC0" strokeWidth="2"/><motion.path d="M50 160 L50 50 H150 V160" fill="#F7FAFC" stroke="#A0AEC0" strokeWidth="2" variants={itemVariants}/><motion.path d="M70 70 H130 M70 90 H130 M70 110 H100" stroke="#CBD5E0" strokeWidth="4" variants={{...pathVariants, visible:{...pathVariants.visible, transition:{delay:0.5}}}}/></motion.svg>;
const Svg34 = () => <motion.svg viewBox="0 0 200 200" initial="hidden" animate="visible" variants={svgContainerVariants}><motion.path d="M100,30 L170,60 L170,120 C170,160 100,180 100,180 C100,180 30,160 30,120 L30,60 L100,30 Z" fill="#EBF8FF" stroke="#4299E1" strokeWidth="4" variants={pathVariants}/><motion.g transform="scale(0.5) translate(100,100)" variants={itemVariants}><path d="M100 120 L100 130 L80 140 L120 140 L100 130" stroke="#2B6CB0" strokeWidth="6" fill="none" /><rect x="90" y="60" width="20" height="60" fill="#2B6CB0" /></motion.g></motion.svg>;
const Svg35 = () => <motion.svg viewBox="0 0 200 200" initial="hidden" animate="visible" variants={svgContainerVariants}><motion.circle cx="80" cy="80" r="40" fill="none" stroke="#4299E1" strokeWidth="6" variants={pathVariants} /><motion.line x1="110" y1="110" x2="150" y2="150" stroke="#4299E1" strokeWidth="8" variants={pathVariants} /><motion.text x="65" y="85" fontFamily="monospace" fill="#718096" variants={itemVariants}>01</motion.text><motion.text x="85" y="85" fontFamily="monospace" fill="#718096" variants={itemVariants}>10</motion.text></motion.svg>;
const Svg36 = () => <motion.svg viewBox="0 0 200 200" initial="hidden" animate="visible" variants={svgContainerVariants}><motion.rect x="30" y="30" width="140" height="140" fill="none" stroke="#A0AEC0" strokeWidth="2" variants={pathVariants}/><motion.path d="M50 50 L150 150" stroke="#CBD5E0" variants={pathVariants}/><motion.circle cx="100" cy="100" r="20" fill="none" stroke="#4299E1" strokeWidth="3" variants={itemVariants}/></motion.svg>;
const Svg37 = () => <motion.svg viewBox="0 0 200 200" initial="hidden" animate="visible" variants={svgContainerVariants}><motion.rect x="40" y="100" width="120" height="60" fill="#E2E8F0" variants={itemVariants}/><motion.rect x="60" y="60" width="80" height="100" fill="#F7FAFC" variants={itemVariants}/><motion.rect x="80" y="40" width="40" height="120" fill="white" stroke="#A0AEC0" strokeWidth="2" variants={itemVariants}/></motion.svg>;
const Svg38 = () => <motion.svg viewBox="0 0 200 200" initial="hidden" animate="visible" variants={svgContainerVariants}><motion.circle cx="100" cy="100" r="70" fill="#F7FAFC" stroke="#A0AEC0" strokeWidth="2" variants={itemVariants}/><motion.path d="M100 60 V140 M70 80 H130 M70 120 H130" stroke="#CBD5E0" variants={pathVariants}/><motion.path d="M100 100 L 130 130" stroke="#4299E1" strokeWidth="4" variants={{...pathVariants, visible:{...pathVariants.visible, transition:{delay:1}}}}/></motion.svg>;
const Svg39 = () => <motion.svg viewBox="0 0 200 200" initial="hidden" animate="visible" variants={svgContainerVariants}><motion.path d="M20 120 L100 70 L180 120 L100 170 Z" fill="#F0FFF4" stroke="#48BB78" strokeWidth="3" variants={itemVariants} /><motion.path d="M100 70 V 40 M 80 50 L 120 50" stroke="#48BB78" strokeWidth="3" variants={itemVariants} /><motion.path d="M60 100 L 140 130" stroke="#A0AEC0" strokeDasharray="4" variants={{...pathVariants, visible:{...pathVariants.visible, transition:{delay:1, duration:2, repeat:Infinity}}}}/></motion.svg>;
const Svg40 = () => <motion.svg viewBox="0 0 200 200" initial="hidden" animate="visible" variants={svgContainerVariants}><motion.path d="M40 160 L160 160" stroke="#A0AEC0" strokeWidth="2"/><motion.path d="M50 160 L50 50 H150 V160" fill="#F0FFF4" stroke="#48BB78" strokeWidth="2" variants={itemVariants}/><motion.path d="M70 70 H130 M70 90 H130 M70 110 H100" stroke="#9AE6B4" strokeWidth="4" variants={{...pathVariants, visible:{...pathVariants.visible, transition:{delay:0.5}}}}/></motion.svg>;

// SVGs 41-50
const Svg41 = () => <motion.svg viewBox="0 0 200 200" initial="hidden" animate="visible" variants={svgContainerVariants}><motion.path d="M100,40 C 80,20 40,30 40,70 C 40,110 100,160 100,160 C 100,160 160,110 160,70 C 160,30 120,20 100,40 Z" fill="none" stroke="#48BB78" strokeWidth="4" variants={pathVariants} /><motion.g transform="translate(70, 70) scale(0.3)" variants={itemVariants}><path d="M 100, 100 m -75, 0 a 75,75 0 1,0 150,0 a 75,75 0 1,0 -150,0" fill="#48BB78"/><path d="M 50, 50 m -25, 0 a 25,25 0 1,0 50,0 a 25,25 0 1,0 -50,0" fill="white"/><path d="M 50, 50 m -10, 0 a 10,10 0 1,0 20,0 a 10,10 0 1,0 -20,0" fill="#48BB78"/></motion.g></motion.svg>;
const Svg42 = () => <motion.svg viewBox="0 0 200 200" initial="hidden" animate="visible" variants={svgContainerVariants}><motion.path d="M100,30 L170,60 L170,120 C170,160 100,180 100,180 C100,180 30,160 30,120 L30,60 L100,30 Z" fill="#F7FAFC" stroke="#A0AEC0" strokeWidth="3" variants={pathVariants}/><motion.g transform="scale(0.5) translate(100,100)" variants={itemVariants}><path d="M100 120 L100 130 L80 140 L120 140 L100 130" stroke="#2D3748" strokeWidth="6" fill="none" /><rect x="90" y="60" width="20" height="60" fill="#2D3748" /></motion.g></motion.svg>;
const Svg43 = () => <motion.svg viewBox="0 0 200 200" initial="hidden" animate="visible" variants={svgContainerVariants}><motion.path d="M100,30 L170,60 L170,120 C170,160 100,180 100,180 C100,180 30,160 30,120 L30,60 L100,30 Z" fill="none" stroke="#ED8936" strokeWidth="4" variants={pathVariants}/><motion.path d="M50 100 L150 100" stroke="#F6E05E" strokeWidth="20" variants={{...pathVariants, visible:{...pathVariants.visible, transition:{delay:0.5, ...pathVariants.visible.transition}}}}/></motion.svg>;
const Svg44 = () => <motion.svg viewBox="0 0 200 200" initial="hidden" animate="visible" variants={svgContainerVariants}><motion.path d="M100,30 L170,60 L170,120 C170,160 100,180 100,180 C100,180 30,160 30,120 L30,60 L100,30 Z" fill="#FEFCBF" stroke="#D69E2E" strokeWidth="4" variants={pathVariants}/><motion.rect x="30" y="70" width="140" height="20" fill="#FF9933" variants={{...itemVariants, hidden:{scaleX:0}}} /><motion.rect x="30" y="90" width="140" height="20" fill="white" variants={{...itemVariants, hidden:{scaleX:0}}} /><motion.rect x="30" y="110" width="140" height="20" fill="#138808" variants={{...itemVariants, hidden:{scaleX:0}}} /></motion.svg>;
const Svg45 = () => <motion.svg viewBox="0 0 200 200" initial="hidden" animate="visible" variants={svgContainerVariants}><motion.circle cx="80" cy="80" r="40" fill="none" stroke="#4299E1" strokeWidth="6" variants={pathVariants} /><motion.line x1="110" y1="110" x2="150" y2="150" stroke="#4299E1" strokeWidth="8" variants={pathVariants} /><motion.text x="65" y="85" fontFamily="monospace" fill="#718096" variants={itemVariants}>01</motion.text><motion.text x="85" y="85" fontFamily="monospace" fill="#718096" variants={itemVariants}>10</motion.text></motion.svg>;
const Svg46 = () => <motion.svg viewBox="0 0 200 200" initial="hidden" animate="visible" variants={svgContainerVariants}><motion.rect x="30" y="30" width="140" height="140" fill="none" stroke="#A0AEC0" strokeWidth="2" variants={pathVariants}/><motion.path d="M50 50 L150 150" stroke="#CBD5E0" variants={pathVariants}/><motion.circle cx="100" cy="100" r="20" fill="none" stroke="#4299E1" strokeWidth="3" variants={itemVariants}/></motion.svg>;
const Svg47 = () => <motion.svg viewBox="0 0 200 200" initial="hidden" animate="visible" variants={svgContainerVariants}><motion.path d="M100,50 C 60,50 40,80 70,110 C 40,140 100,170 100,170 C 100,170 160,140 130,110 C 160,80 140,50 100,50 Z" fill="#FED7D7" stroke="#C53030" strokeWidth="3" variants={itemVariants}/><motion.g variants={itemVariants}><circle cx="100" cy="110" r="10" fill="white"/></motion.g></motion.svg>;
const Svg48 = () => <motion.svg viewBox="0 0 200 200" initial="hidden" animate="visible" variants={svgContainerVariants}><motion.circle cx="100" cy="100" r="70" fill="#F0FFF4" stroke="#48BB78" strokeWidth="3" variants={itemVariants}/><motion.path d="M100,80 C 90,70 70,80 70,100 C 70,120 100,130 100,130 C 100,130 130,120 130,100 C 130,80 110,70 100,80 Z" fill="#9AE6B4" variants={itemVariants}/></motion.svg>;
const Svg49 = () => <motion.svg viewBox="0 0 200 200" initial="hidden" animate="visible" variants={svgContainerVariants}><motion.path d="M40 160 L160 160" stroke="#A0AEC0" strokeWidth="2"/><motion.path d="M50 160 L50 50 H150 V160" fill="#FEFCBF" stroke="#D69E2E" strokeWidth="2" variants={itemVariants}/><motion.path d="M70 70 H130 M70 90 H130 M70 110 H100" stroke="#F6E05E" strokeWidth="4" variants={{...pathVariants, visible:{...pathVariants.visible, transition:{delay:0.5}}}}/></motion.svg>;
const Svg50 = () => <motion.svg viewBox="0 0 200 200" initial="hidden" animate="visible" variants={svgContainerVariants}><motion.path d="M100 30 L170 100 L100 170 L30 100 Z" fill="#F7FAFC" stroke="#A0AEC0" strokeWidth="2" variants={itemVariants}/><motion.path d="M100 30 L100 70" stroke="#CBD5E0" variants={pathVariants}/><motion.circle cx="100" cy="100" r="30" fill="#FEFCBF" variants={itemVariants} animate={{scale:[1, 1.1, 1]}} transition={{duration:3, repeat:Infinity}}/></motion.svg>;

// SVGs 51-60
const Svg51 = () => <motion.svg viewBox="0 0 200 200" initial="hidden" animate="visible" variants={svgContainerVariants}><motion.path d="M100,30 L170,60 L170,120 C170,160 100,180 100,180 C100,180 30,160 30,120 L30,60 L100,30 Z" fill="none" stroke="#E53E3E" strokeWidth="4" variants={pathVariants}/><motion.path d="M80 80 L120 120 M120 80 L80 120" stroke="#E53E3E" strokeWidth="6" variants={{hidden:{scale:0}, visible:{scale:1, transition:{delay:1}}}}/></motion.svg>;
const Svg52 = () => <motion.svg viewBox="0 0 200 200" initial="hidden" animate="visible" variants={svgContainerVariants}><motion.path d="M100,30 L170,60 L170,120 C170,160 100,180 100,180 C100,180 30,160 30,120 L30,60 L100,30 Z" fill="#F0FFF4" stroke="#48BB78" strokeWidth="4" variants={pathVariants}/><motion.path d="M 80 100 L 95 115 L 125 85" stroke="#38A169" fill="none" strokeWidth="8" strokeLinecap="round" variants={{hidden:{pathLength:0}, visible:{pathLength:1, transition:{delay:1}}}}/></motion.svg>;
const Svg53 = () => <motion.svg viewBox="0 0 200 200" initial="hidden" animate="visible" variants={svgContainerVariants}><motion.circle cx="80" cy="80" r="40" fill="none" stroke="#4299E1" strokeWidth="6" variants={pathVariants} /><motion.line x1="110" y1="110" x2="150" y2="150" stroke="#4299E1" strokeWidth="8" variants={pathVariants} /><motion.path d="M70 70 L 90 90 M 70 90 L 90 70" stroke="#718096" strokeWidth="4" variants={{hidden:{scale:0}, visible:{scale:1, transition:{delay:1}}}}/></motion.svg>;
const Svg54 = () => <motion.svg viewBox="0 0 200 200" initial="hidden" animate="visible" variants={svgContainerVariants}><motion.rect x="30" y="30" width="140" height="140" fill="none" stroke="#A0AEC0" strokeWidth="2" variants={pathVariants}/><motion.path d="M50 50 L150 150" stroke="#CBD5E0" variants={pathVariants}/><motion.g transform="scale(0.3) translate(230,230)" variants={itemVariants}><path d="M100 120 L100 130 L80 140 L120 140 L100 130" stroke="#2D3748" strokeWidth="10" fill="none" /><rect x="90" y="60" width="20" height="60" fill="#2D3748" /></motion.g></motion.svg>;
const Svg55 = () => <motion.svg viewBox="0 0 200 200" initial="hidden" animate="visible" variants={svgContainerVariants}><motion.path d="M 50,150 Q 100,20, 150,150" fill="none" stroke="#D53F8C" strokeWidth="6" variants={itemVariants} /><motion.g variants={itemVariants}><circle cx="100" cy="90" r="20" fill="#FBB6CE" /><path d="M80 120 Q 100 110 120 120 L 110 150 L 90 150 Z" fill="#FBB6CE" /></motion.g></motion.svg>;
const Svg56 = () => <motion.svg viewBox="0 0 200 200" initial="hidden" animate="visible" variants={svgContainerVariants}><motion.g variants={itemVariants}><circle cx="75" cy="100" r="30" fill="#FBB6CE" stroke="#D53F8C" strokeWidth="3"/></motion.g><motion.g variants={itemVariants}><circle cx="125" cy="100" r="30" fill="#FBB6CE" stroke="#D53F8C" strokeWidth="3"/></motion.g><motion.path d="M90 100 L 110 100" stroke="white" strokeWidth="4" variants={pathVariants}/></motion.svg>;
const Svg57 = () => <motion.svg viewBox="0 0 200 200" initial="hidden" animate="visible" variants={svgContainerVariants}><motion.path d="M100,40 C 60,40 40,70 40,100 C 40,130 60,160 100,160" fill="#EBF8FF" stroke="#4299E1" strokeWidth="2" variants={pathVariants}/><motion.path d="M100,40 C 140,40 160,70 160,100 C 160,130 140,160 100,160" fill="#EBF8FF" stroke="#4299E1" strokeWidth="2" variants={pathVariants}/><motion.path d="M100,80 C 90,70 70,80 70,100 C 70,120 100,130 100,130 C 100,130 130,120 130,100 C 130,80 110,70 100,80 Z" fill="#FED7D7" variants={itemVariants}/></motion.svg>;
const Svg58 = () => <motion.svg viewBox="0 0 200 200" initial="hidden" animate="visible" variants={svgContainerVariants}><motion.path d="M100,30 L170,60 L170,120 C170,160 100,180 100,180 C100,180 30,160 30,120 L30,60 L100,30 Z" fill="#EBF8FF" stroke="#4299E1" strokeWidth="3" variants={pathVariants}/><motion.path d="M100,80 C 90,70 70,80 70,100 C 70,120 100,130 100,130 C 100,130 130,120 130,100 C 130,80 110,70 100,80 Z" fill="#FED7D7" variants={itemVariants}/></motion.svg>;
const Svg59 = () => <motion.svg viewBox="0 0 200 200" initial="hidden" animate="visible" variants={svgContainerVariants}><motion.path d="M20 120 L100 70 L180 120 L100 170 Z" fill="#F7FAFC" stroke="#A0AEC0" strokeWidth="3" variants={itemVariants} /><motion.path d="M100 70 V 40 M 80 50 L 120 50" stroke="#A0AEC0" strokeWidth="3" variants={itemVariants} /><motion.path d="M60 100 L 140 130" stroke="#4299E1" strokeDasharray="4" variants={{...pathVariants, visible:{...pathVariants.visible, transition:{delay:1, duration:2, repeat:Infinity}}}}/></motion.svg>;
const Svg60 = () => <motion.svg viewBox="0 0 200 200" initial="hidden" animate="visible" variants={svgContainerVariants}><motion.path d="M40 160 L160 160" stroke="#A0AEC0" strokeWidth="2"/><motion.path d="M50 160 L50 50 H150 V160" fill="#F7FAFC" stroke="#A0AEC0" strokeWidth="2" variants={itemVariants}/><motion.g variants={itemVariants}><circle cx="100" cy="100" r="20" fill="#90CDF4"/><path d="M90 120 L 110 120 L 100 150 Z" fill="#90CDF4" transform="scale(0.8) translate(25, -25)"/></motion.g></motion.svg>;

// SVGs 61-70
const Svg61 = () => <motion.svg viewBox="0 0 200 200" initial="hidden" animate="visible" variants={svgContainerVariants}><motion.path d="M40 160 L160 160" stroke="#A0AEC0" strokeWidth="2"/><motion.path d="M50 160 L50 50 H150 V160" fill="#F7FAFC" stroke="#A0AEC0" strokeWidth="2" variants={itemVariants}/><motion.g transform="scale(0.4) translate(150,170)" variants={itemVariants}><path d="M100 120 L100 130 L80 140 L120 140 L100 130" stroke="#2D3748" strokeWidth="8" fill="none" /><rect x="90" y="60" width="20" height="60" fill="#2D3748" /></motion.g></motion.svg>;
const Svg62 = () => <motion.svg viewBox="0 0 200 200" initial="hidden" animate="visible" variants={svgContainerVariants}><motion.rect x="30" y="30" width="140" height="140" rx="10" stroke="#A0AEC0" fill="none" strokeWidth="2" variants={pathVariants}/><motion.g transform="scale(0.5) translate(100,100)" variants={itemVariants}><path d="M100 120 L100 130 L80 140 L120 140 L100 130" stroke="#2B6CB0" strokeWidth="6" fill="none" /><rect x="90" y="60" width="20" height="60" fill="#2B6CB0" /></motion.g><motion.path d="M60 80 H 140" stroke="#CBD5E0" strokeWidth="4" variants={{...pathVariants, visible:{...pathVariants.visible, transition:{delay:0.5}}}}/></motion.svg>;
const Svg63 = () => <motion.svg viewBox="0 0 200 200" initial="hidden" animate="visible" variants={svgContainerVariants}><motion.circle cx="80" cy="80" r="40" fill="none" stroke="#4299E1" strokeWidth="6" variants={pathVariants} /><motion.line x1="110" y1="110" x2="150" y2="150" stroke="#4299E1" strokeWidth="8" variants={pathVariants} /><motion.text x="65" y="85" fontFamily="monospace" fill="#718096" variants={itemVariants}>01</motion.text><motion.text x="85" y="85" fontFamily="monospace" fill="#718096" variants={itemVariants}>10</motion.text></motion.svg>;
const Svg64 = () => <motion.svg viewBox="0 0 200 200" initial="hidden" animate="visible" variants={svgContainerVariants}><motion.rect x="30" y="30" width="140" height="140" fill="none" stroke="#A0AEC0" strokeWidth="2" variants={pathVariants}/><motion.path d="M50 50 L150 150" stroke="#CBD5E0" variants={pathVariants}/><motion.circle cx="100" cy="100" r="20" fill="none" stroke="#4299E1" strokeWidth="3" variants={itemVariants}/></motion.svg>;
const Svg65 = () => <motion.svg viewBox="0 0 200 200" initial="hidden" animate="visible" variants={svgContainerVariants}><motion.g variants={itemVariants}><circle cx="70" cy="80" r="30" fill="#BEE3F8" /><rect x="60" y="100" width="20" height="40" fill="#BEE3F8"/></motion.g><motion.g variants={itemVariants}><circle cx="130" cy="80" r="30" fill="#F0FFF4" /><rect x="120" y="100" width="20" height="40" fill="#F0FFF4"/></motion.g><motion.path d="M90 100 L 110 100" stroke="#4A5568" strokeWidth="3" variants={pathVariants}/></motion.svg>;
const Svg66 = () => <motion.svg viewBox="0 0 200 200" initial="hidden" animate="visible" variants={svgContainerVariants}><motion.circle cx="100" cy="100" r="20" fill="#A0AEC0" variants={itemVariants}/><motion.circle cx="50" cy="60" r="15" fill="#CBD5E0" variants={itemVariants}/><motion.circle cx="150" cy="60" r="15" fill="#CBD5E0" variants={itemVariants}/><motion.circle cx="50" cy="140" r="15" fill="#CBD5E0" variants={itemVariants}/><motion.circle cx="150" cy="140" r="15" fill="#CBD5E0" variants={itemVariants}/><motion.path d="M100 100 L 50 60 M100 100 L 150 60 M100 100 L 50 140 M100 100 L 150 140" stroke="#A0AEC0" variants={pathVariants}/></motion.svg>;
const Svg67 = () => <motion.svg viewBox="0 0 200 200" initial="hidden" animate="visible" variants={svgContainerVariants}><motion.path d="M100,30 L170,60 L170,120 C170,160 100,180 100,180 C100,180 30,160 30,120 L30,60 L100,30 Z" fill="none" stroke="#ED8936" strokeWidth="4" variants={pathVariants}/><motion.path d="M50 100 L150 100" stroke="#F6E05E" strokeWidth="20" variants={{...pathVariants, visible:{...pathVariants.visible, transition:{delay:0.5, ...pathVariants.visible.transition}}}}/></motion.svg>;
const Svg68 = () => <motion.svg viewBox="0 0 200 200" initial="hidden" animate="visible" variants={svgContainerVariants}><motion.path d="M100,30 L170,60 L170,120 C170,160 100,180 100,180 C100,180 30,160 30,120 L30,60 L100,30 Z" fill="#F0FFF4" stroke="#48BB78" strokeWidth="4" variants={pathVariants}/><motion.path d="M 80 100 L 95 115 L 125 85" stroke="#38A169" fill="none" strokeWidth="8" strokeLinecap="round" variants={{hidden:{pathLength:0}, visible:{pathLength:1, transition:{delay:1}}}}/></motion.svg>;
const Svg69 = () => <motion.svg viewBox="0 0 200 200" initial="hidden" animate="visible" variants={svgContainerVariants}><motion.path d="M100,40 C 80,20 40,30 40,70 C 40,110 100,160 100,160 C 100,160 160,110 160,70 C 160,30 120,20 100,40 Z" fill="#EBF8FF" stroke="#4299E1" strokeWidth="3" variants={pathVariants}/><motion.g transform="scale(0.5) translate(100,100)" variants={itemVariants}><path d="M100 120 L100 130 L80 140 L120 140 L100 130" stroke="#2B6CB0" strokeWidth="6" fill="none" /><rect x="90" y="60" width="20" height="60" fill="#2B6CB0" /></motion.g></motion.svg>;
const Svg70 = () => <motion.svg viewBox="0 0 200 200" initial="hidden" animate="visible" variants={svgContainerVariants}><motion.path d="M100,30 L170,60 L170,120 C170,160 100,180 100,180 C100,180 30,160 30,120 L30,60 L100,30 Z" fill="#F7FAFC" stroke="#A0AEC0" strokeWidth="3" variants={pathVariants}/><motion.path d="M80 80 L120 120 M120 80 L80 120" stroke="#E53E3E" strokeWidth="6" variants={{hidden:{scale:0, opacity:0}, visible:{scale:1, opacity:1, transition:{delay:1}}}} /><motion.path d="M80 80 L120 120 M120 80 L80 120" fill="none" stroke="#4A5568" strokeWidth="2" variants={{...pathVariants, visible:{...pathVariants.visible, transition:{delay:0.2, ...pathVariants.visible.transition}}}}/></motion.svg>;

// SVGs 71-80
const Svg71 = () => <motion.svg viewBox="0 0 200 200" initial="hidden" animate="visible" variants={svgContainerVariants}><motion.rect x="60" y="140" width="80" height="20" fill="#4A5568" variants={itemVariants} /><motion.path d="M 90 140 L 70 50 L 130 50 L 110 140" fill="#A0AEC0" variants={itemVariants} /><motion.circle cx="100" cy="95" r="30" fill="rgba(66, 153, 225, 0.3)" variants={itemVariants} /><motion.circle cx="100" cy="95" r="5" fill="#4299E1" animate={{ r: [5, 10, 5] }} transition={{ duration: 2, repeat: Infinity, delay: 1 }} /></motion.svg>;
const Svg72 = () => <motion.svg viewBox="0 0 200 200" initial="hidden" animate="visible" variants={svgContainerVariants}><motion.circle cx="100" cy="100" r="70" fill="none" stroke="#A0AEC0" strokeWidth="2" variants={pathVariants}/><motion.circle cx="100" cy="100" r="10" fill="#4299E1" variants={itemVariants} animate={{scale:[1, 1.3, 1]}} transition={{duration:2, repeat:Infinity, delay:1}}/><motion.path d="M100 90 V50 M118 107 L153 130 M82 107 L47 130" stroke="#CBD5E0" variants={pathVariants}/></motion.svg>;
const Svg73 = () => <motion.svg viewBox="0 0 200 200" initial="hidden" animate="visible" variants={svgContainerVariants}><motion.path d="M20 120 L100 70 L180 120 L100 170 Z" fill="#F7FAFC" stroke="#A0AEC0" strokeWidth="3" variants={itemVariants} /><motion.path d="M100 70 V 40 M 80 50 L 120 50" stroke="#A0AEC0" strokeWidth="3" variants={itemVariants} /><motion.path d="M60 100 L 140 130" stroke="#4299E1" strokeDasharray="4" variants={{...pathVariants, visible:{...pathVariants.visible, transition:{delay:1, duration:2, repeat:Infinity}}}}/></motion.svg>;
const Svg74 = () => <motion.svg viewBox="0 0 200 200" initial="hidden" animate="visible" variants={svgContainerVariants}><motion.g variants={itemVariants}><circle cx="60" cy="100" r="20" fill="#90CDF4"/><path d="M50 120 L 70 120 L 60 150 Z" fill="#90CDF4" transform="scale(0.8) translate(15, -25)"/></motion.g><motion.g variants={itemVariants}><circle cx="140" cy="100" r="20" fill="#90CDF4"/><path d="M130 120 L 150 120 L 140 150 Z" fill="#90CDF4" transform="scale(0.8) translate(35, -25)"/></motion.g><motion.path d="M75 100 C 85 80, 115 80, 125 100" stroke="#4299E1" strokeWidth="3" variants={pathVariants}/></motion.svg>;
const Svg75 = () => <motion.svg viewBox="0 0 200 200" initial="hidden" animate="visible" variants={svgContainerVariants}><motion.path d="M100,50 C 60,50 40,80 70,110 C 40,140 100,170 100,170 C 100,170 160,140 130,110 C 160,80 140,50 100,50 Z" fill="#FED7D7" stroke="#C53030" strokeWidth="3" variants={itemVariants}/><motion.g variants={itemVariants}><circle cx="100" cy="110" r="10" fill="white"/></motion.g></motion.svg>;
const Svg76 = () => <motion.svg viewBox="0 0 200 200" initial="hidden" animate="visible" variants={svgContainerVariants}><motion.circle cx="100" cy="100" r="70" fill="#F0FFF4" stroke="#48BB78" strokeWidth="3" variants={itemVariants}/><motion.path d="M100,80 C 90,70 70,80 70,100 C 70,120 100,130 100,130 C 100,130 130,120 130,100 C 130,80 110,70 100,80 Z" fill="#9AE6B4" variants={itemVariants}/></motion.svg>;
const Svg77 = () => <motion.svg viewBox="0 0 200 200" initial="hidden" animate="visible" variants={svgContainerVariants}><motion.path d="M 50,150 Q 100,20, 150,150" fill="none" stroke="#D53F8C" strokeWidth="6" variants={itemVariants} /><motion.g variants={itemVariants}><circle cx="100" cy="90" r="20" fill="#FBB6CE" /><path d="M80 120 Q 100 110 120 120 L 110 150 L 90 150 Z" fill="#FBB6CE" /></motion.g><motion.path d="M100 50 L100 20" stroke="#F6E05E" strokeWidth="4" variants={{...pathVariants, visible:{...pathVariants.visible, transition:{delay:1}}}}/></motion.svg>;
const Svg78 = () => <motion.svg viewBox="0 0 200 200" initial="hidden" animate="visible" variants={svgContainerVariants}><motion.g variants={itemVariants}><circle cx="75" cy="100" r="30" fill="#FBB6CE" stroke="#D53F8C" strokeWidth="3"/></motion.g><motion.g variants={itemVariants}><circle cx="125" cy="100" r="30" fill="#FBB6CE" stroke="#D53F8C" strokeWidth="3"/></motion.g><motion.path d="M90 100 L 110 100" stroke="white" strokeWidth="4" variants={pathVariants}/></motion.svg>;
const Svg79 = () => <motion.svg viewBox="0 0 200 200" initial="hidden" animate="visible" variants={svgContainerVariants}><motion.path d="M 40 40 H 160 V 160 H 40 Z" fill="#F7FAFC" stroke="#A0AEC0" strokeWidth="2" variants={itemVariants} /><motion.path d="M 60 70 H 140" stroke="#718096" variants={pathVariants} /><motion.path d="M 60 90 H 140" stroke="#CBD5E0" variants={{...pathVariants, visible:{...pathVariants.visible, transition:{delay:0.2, ...pathVariants.visible.transition}}}} /><motion.path d="M 60 110 H 120" stroke="#CBD5E0" variants={{...pathVariants, visible:{...pathVariants.visible, transition:{delay:0.4, ...pathVariants.visible.transition}}}} /><motion.path d="M 120 120 L 145 145 M 145 120 L 120 145" stroke="green" strokeWidth="4" variants={{hidden:{scale:0}, visible:{scale:1, transition:{delay:1.5}}}}/></motion.svg>;
const Svg80 = () => <motion.svg viewBox="0 0 200 200" initial="hidden" animate="visible" variants={svgContainerVariants}><motion.path d="M100,30 L170,60 L170,120 C170,160 100,180 100,180 C100,180 30,160 30,120 L30,60 L100,30 Z" fill="#FEFCBF" stroke="#D69E2E" strokeWidth="4" variants={pathVariants}/><motion.rect x="30" y="70" width="140" height="20" fill="#FF9933" variants={{...itemVariants, hidden:{scaleX:0}}} /><motion.rect x="30" y="90" width="140" height="20" fill="white" variants={{...itemVariants, hidden:{scaleX:0}}} /><motion.rect x="30" y="110" width="140" height="20" fill="#138808" variants={{...itemVariants, hidden:{scaleX:0}}} /><motion.g transform="scale(0.3) translate(230,230)" variants={itemVariants}><path d="M100 120 L100 130 L80 140 L120 140 L100 130" stroke="#2D3748" strokeWidth="10" fill="none" /><rect x="90" y="60" width="20" height="60" fill="#2D3748" /></motion.g></motion.svg>;

// SVGs 81-90
const Svg81 = () => <motion.svg viewBox="0 0 200 200" initial="hidden" animate="visible" variants={svgContainerVariants}><motion.path d="M 60 40 L 30 70 L 60 100" fill="none" stroke="#4299E1" strokeWidth="8" variants={pathVariants} /><motion.path d="M 140 40 L 170 70 L 140 100" fill="none" stroke="#4299E1" strokeWidth="8" variants={{...pathVariants, visible: {...pathVariants.visible, transition: {...pathVariants.visible.transition, delay: 0.2}}}} /><motion.rect x="30" y="120" width="140" height="40" rx="5" fill="#EDF2F7" variants={itemVariants} /><motion.circle cx="50" cy="140" r="5" fill="red" variants={itemVariants} /><motion.circle cx="70" cy="140" r="5" fill="orange" variants={itemVariants} /><motion.circle cx="90" cy="140" r="5" fill="green" variants={itemVariants} /></motion.svg>;
const Svg82 = () => <motion.svg viewBox="0 0 200 200" initial="hidden" animate="visible" variants={svgContainerVariants}><motion.rect x="30" y="30" width="140" height="140" rx="10" fill="#EBF8FF" stroke="#4299E1" strokeWidth="2" variants={itemVariants}/><motion.g variants={itemVariants}><circle cx="100" cy="100" r="20" fill="#90CDF4"/><path d="M90 120 L 110 120 L 100 150 Z" fill="#90CDF4" transform="scale(0.8) translate(25, -25)"/></motion.g></motion.svg>;
const Svg83 = () => <motion.svg viewBox="0 0 200 200" initial="hidden" animate="visible" variants={svgContainerVariants}><motion.rect x="30" y="50" width="140" height="100" rx="10" stroke="#A0AEC0" strokeWidth="2" fill="white" variants={itemVariants} /><motion.rect x="40" y="60" width="40" height="80" fill="#EDF2F7" variants={itemVariants} /><motion.rect x="90" y="60" width="70" height="15" fill="#CBD5E0" rx="5" variants={itemVariants} /><motion.circle cx="125" cy="110" r="20" fill="#4299E1" variants={itemVariants} /></motion.svg>;
const Svg84 = () => <motion.svg viewBox="0 0 200 200" initial="hidden" animate="visible" variants={svgContainerVariants}><motion.rect x="30" y="50" width="140" height="100" rx="10" stroke="#A0AEC0" strokeWidth="2" fill="white" variants={itemVariants} /><motion.g transform="scale(0.4) translate(150,170)" variants={itemVariants}><path d="M100 120 L100 130 L80 140 L120 140 L100 130" stroke="#2D3748" strokeWidth="8" fill="none" /><rect x="90" y="60" width="20" height="60" fill="#2D3748" /></motion.g><motion.path d="M 80 100 L 95 115 L 125 85" stroke="#48BB78" fill="none" strokeWidth="8" strokeLinecap="round" variants={{hidden:{pathLength:0}, visible:{pathLength:1, transition:{delay:1}}}}/></motion.svg>;
const Svg85 = () => <motion.svg viewBox="0 0 200 200" initial="hidden" animate="visible" variants={svgContainerVariants}><motion.path d="M 40 40 H 160 V 160 H 40 Z" fill="none" stroke="#A0AEC0" strokeWidth="2" variants={pathVariants} /><motion.path d="M 60 70 L 90 100 L 140 50" stroke="#48BB78" fill="none" strokeWidth="8" variants={{ hidden: { pathLength: 0 }, visible: { pathLength: 1, transition: { delay: 0.8, duration: 0.5 } } }} /><motion.path d="M 60 130 L 90 160 L 140 110" stroke="#E53E3E" fill="none" strokeWidth="8" variants={{ hidden: { pathLength: 0 }, visible: { pathLength: 1, transition: { delay: 1.2, duration: 0.5 } } }} /></motion.svg>;
const Svg86 = () => <motion.svg viewBox="0 0 200 200" initial="hidden" animate="visible" variants={svgContainerVariants}><motion.path d="M100,30 L170,60 L170,120 C170,160 100,180 100,180 C100,180 30,160 30,120 L30,60 L100,30 Z" fill="#F0FFF4" stroke="#48BB78" strokeWidth="4" variants={pathVariants} /><motion.path d="M 80 100 L 95 115 L 125 85" stroke="#38A169" fill="none" strokeWidth="8" strokeLinecap="round" variants={{hidden:{pathLength:0}, visible:{pathLength:1, transition:{delay:1}}}}/></motion.svg>;
const Svg87 = () => <motion.svg viewBox="0 0 200 200" initial="hidden" animate="visible" variants={svgContainerVariants}><motion.rect x="50" y="50" width="100" height="100" rx="20" fill="#A4C639" variants={itemVariants} /><motion.circle cx="80" cy="75" r="5" fill="white" variants={itemVariants} /><motion.circle cx="120" cy="75" r="5" fill="white" variants={itemVariants} /><motion.path d="M 60 120 C 70 140, 130 140, 140 120" stroke="white" strokeWidth="5" fill="none" variants={{ ...pathVariants, visible: {...pathVariants.visible, transition: { ...pathVariants.visible.transition, delay: 0.8 }}}} /></motion.svg>;
const Svg88 = () => <motion.svg viewBox="0 0 200 200" initial="hidden" animate="visible" variants={svgContainerVariants}><motion.rect x="60" y="30" width="80" height="140" rx="15" fill="#F7FAFC" stroke="#A0AEC0" strokeWidth="2" variants={itemVariants}/><motion.path d="M 80 50 L 95 65 L 125 35" stroke="#A4C639" fill="none" strokeWidth="8" strokeLinecap="round" variants={{hidden:{pathLength:0}, visible:{pathLength:1, transition:{delay:1}}}}/></motion.svg>;
const Svg89 = () => <motion.svg viewBox="0 0 200 200" initial="hidden" animate="visible" variants={svgContainerVariants}><motion.rect x="30" y="40" width="140" height="100" rx="10" fill="#4A5568" variants={itemVariants} /><motion.rect x="40" y="50" width="120" height="80" fill="url(#g89)" variants={itemVariants} /><motion.rect x="20" y="140" width="160" height="10" fill="#718096" variants={itemVariants} /><defs><linearGradient id="g89" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" stopColor="#63B3ED" /><stop offset="100%" stopColor="#4299E1" /></linearGradient></defs></motion.svg>;
const Svg90 = () => <motion.svg viewBox="0 0 200 200" initial="hidden" animate="visible" variants={svgContainerVariants}><motion.rect x="30" y="40" width="140" height="100" rx="10" fill="#F0FFF4" stroke="#48BB78" strokeWidth="2" variants={itemVariants} /><motion.rect x="20" y="140" width="160" height="10" fill="#9AE6B4" variants={itemVariants} /><motion.path d="M 80 80 L 95 95 L 125 65" stroke="#38A169" fill="none" strokeWidth="8" strokeLinecap="round" variants={{hidden:{pathLength:0}, visible:{pathLength:1, transition:{delay:1}}}}/></motion.svg>;

// SVGs 91-100
const Svg91 = () => <motion.svg viewBox="0 0 200 200" initial="hidden" animate="visible" variants={svgContainerVariants}><motion.rect x="30" y="40" width="140" height="100" rx="10" fill="#4A5568" variants={itemVariants} /><motion.rect x="40" y="50" width="120" height="80" fill="url(#g91)" variants={itemVariants} /><motion.rect x="20" y="140" width="160" height="10" fill="#718096" variants={itemVariants} /><defs><linearGradient id="g91" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" stopColor="#B794F4" /><stop offset="100%" stopColor="#9F7AEA" /></linearGradient></defs></motion.svg>;
const Svg92 = () => <motion.svg viewBox="0 0 200 200" initial="hidden" animate="visible" variants={svgContainerVariants}><motion.rect x="30" y="40" width="140" height="100" rx="10" fill="#F0FFF4" stroke="#48BB78" strokeWidth="2" variants={itemVariants} /><motion.rect x="20" y="140" width="160" height="10" fill="#9AE6B4" variants={itemVariants} /><motion.path d="M 80 80 L 95 95 L 125 65" stroke="#38A169" fill="none" strokeWidth="8" strokeLinecap="round" variants={{hidden:{pathLength:0}, visible:{pathLength:1, transition:{delay:1}}}}/></motion.svg>;
const Svg93 = () => <motion.svg viewBox="0 0 200 200" initial="hidden" animate="visible" variants={svgContainerVariants}><motion.path d="M80 40 L 120 40 L 120 80 L 160 80 L 160 120 L 120 120 L 120 160 L 80 160 L 80 120 L 40 120 L 40 80 L 80 80 Z" fill="#EBF8FF" stroke="#4299E1" strokeWidth="3" variants={itemVariants}/><motion.circle cx="100" cy="100" r="10" fill="#90CDF4" animate={{scale:[1, 1.2, 1]}} transition={{duration:2, repeat:Infinity}}/></motion.svg>;
const Svg94 = () => <motion.svg viewBox="0 0 200 200" initial="hidden" animate="visible" variants={svgContainerVariants}><motion.path d="M100,30 L170,60 L170,120 C170,160 100,180 100,180 C100,180 30,160 30,120 L30,60 L100,30 Z" fill="#F0FFF4" stroke="#48BB78" strokeWidth="4" variants={pathVariants}/><motion.path d="M 80 100 L 95 115 L 125 85" stroke="#38A169" fill="none" strokeWidth="8" strokeLinecap="round" variants={{hidden:{pathLength:0}, visible:{pathLength:1, transition:{delay:1}}}}/></motion.svg>;
const Svg95 = () => <motion.svg viewBox="0 0 200 200" initial="hidden" animate="visible" variants={svgContainerVariants}><motion.path d="M 40,100 a 60,60 0 1,1 120,0 a 60,60 0 1,1 -120,0" fill="none" stroke="#ED8936" strokeWidth="4" variants={pathVariants} /><motion.path d="M100 40 V 160 M 40 100 H 160" stroke="#F6E05E" strokeWidth="2" variants={{hidden:{scale:0}, visible:{scale:1, transition:{delay:0.5}}}} /><motion.g variants={itemVariants}><path d="M100 20 L 90 40 L 110 40 Z" fill="#DD6B20" /><path d="M180 100 L 160 90 L 160 110 Z" fill="#DD6B20" /><path d="M100 180 L 90 160 L 110 160 Z" fill="#DD6B20" /><path d="M20 100 L 40 90 L 40 110 Z" fill="#DD6B20" /></motion.g></motion.svg>;
const Svg96 = () => <motion.svg viewBox="0 0 200 200" initial="hidden" animate="visible" variants={svgContainerVariants}><motion.rect x="30" y="60" width="140" height="80" rx="10" fill="white" stroke="#A0AEC0" variants={itemVariants}/><motion.path d="M50 80 L 80 110 L 110 80" stroke="#48BB78" fill="none" strokeWidth="6" variants={pathVariants}/><motion.path d="M130 110 L 150 110" stroke="#CBD5E0" strokeWidth="6" variants={pathVariants}/></motion.svg>;
const Svg97 = () => <motion.svg viewBox="0 0 200 200" initial="hidden" animate="visible" variants={svgContainerVariants}><motion.path d="M100,40 C 140,40 160,70 160,100 C 160,130 140,160 100,160" fill="none" stroke="#A0AEC0" strokeWidth="2" variants={pathVariants}/><motion.path d="M100,40 C 60,40 40,70 40,100 C 40,130 60,160 100,160" fill="none" stroke="#A0AEC0" strokeWidth="2" variants={{...pathVariants, visible:{...pathVariants.visible, transition:{delay:0.2}}}} /><motion.circle cx="100" cy="100" r="10" fill="#4299E1" animate={{ scale: [1, 1.3, 1] }} transition={{ duration: 2, repeat: Infinity, delay: 1 }} /><motion.circle cx="130" cy="70" r="5" fill="#4299E1" variants={itemVariants} /><motion.circle cx="130" cy="130" r="5" fill="#4299E1" variants={itemVariants} /><motion.circle cx="70" cy="70" r="5" fill="#4299E1" variants={itemVariants} /><motion.circle cx="70" cy="130" r="5" fill="#4299E1" variants={itemVariants} /></motion.svg>;
const Svg98 = () => <motion.svg viewBox="0 0 200 200" initial="hidden" animate="visible" variants={svgContainerVariants}><motion.path d="M100,30 L170,60 L170,120 C170,160 100,180 100,180 C100,180 30,160 30,120 L30,60 L100,30 Z" fill="#EBF8FF" stroke="#4299E1" strokeWidth="3" variants={pathVariants}/><motion.path d="M100,80 C 120,80 120,120 100,120 C 80,120 80,80 100,80" fill="#90CDF4" variants={itemVariants}/></motion.svg>;
const Svg99 = () => <motion.svg viewBox="0 0 200 200" initial="hidden" animate="visible" variants={svgContainerVariants}><motion.path d="M50 160 L 150 160" stroke="#CBD5E0" strokeWidth="2" /><motion.rect x="40" y="100" width="40" height="50" fill="#BEE3F8" variants={itemVariants} /><motion.rect x="80" y="80" width="40" height="70" fill="#90CDF4" variants={itemVariants} /><motion.rect x="120" y="110" width="40" height="40" fill="#63B3ED" variants={itemVariants} /><motion.path d="M100 30 L 100 70 L 120 50" fill="none" stroke="#48BB78" strokeWidth="6" variants={{...itemVariants, hidden:{y:-20, opacity:0}}} /></motion.svg>;
const Svg100 = () => <motion.svg viewBox="0 0 200 200" initial="hidden" animate="visible" variants={svgContainerVariants}><motion.path d="M20 120 L100 70 L180 120 L100 170 Z" fill="#F0FFF4" stroke="#48BB78" strokeWidth="3" variants={itemVariants} /><motion.path d="M100 70 V 40 M 80 50 L 120 50" stroke="#48BB78" strokeWidth="3" variants={itemVariants} /><motion.g variants={itemVariants}><circle cx="100" cy="120" r="10" fill="#9AE6B4"/></motion.g></motion.svg>;

// --- SVG Mapping ---
const svgMap = {
    'sec1-mission-a-beacon-of-justice-hope': Svg1,
    'sec2-vision-a-secure-empowered-digital-society': Svg2,
    'sec3-mission-empowering-the-vulnerable-strengthening-justice': Svg3,
    'sec4-vision-bridging-law-technology-and-humanity': Svg4,
    'sec5-mission-nurturing-trust-delivering-justice': Svg5,
    'sec6-vision-leading-with-integrity-compassion': Svg6,
    'sec7-mission-protecting-every-citizen-every-digital-footprint': Svg7,
    'sec8-vision-a-digitally-resilient-law-abiding-society': Svg8,
    'sec9-mission-advocating-justice-inspiring-confidence': Svg9,
    'sec10-vision-a-culture-of-awareness-ethics-protection': Svg10,
    'sec11-mission-turning-vulnerability-into-empowerment': Svg11,
    'sec12-vision-a-world-of-trust-safety-justice': Svg12,
    'sec13-mission-safeguarding-digital-lives-with-compassion': Svg13,
    'sec14-vision-a-society-where-digital-safety-is-a-right-not-a-privilege': Svg14,
    'sec15-mission-building-trust-through-action-advocacy': Svg15,
    'sec16-vision-empowered-citizens-safer-communities': Svg16,
    'sec17-mission-transforming-awareness-into-action': Svg17,
    'sec18-vision-a-nation-united-against-cyber-threats': Svg18,
    'sec19-mission-championing-rights-with-compassion': Svg19,
    'sec20-vision-a-digital-society-rooted-in-trust': Svg20,
    'sec21-mission-legal-advocacy-with-emotional-support': Svg21,
    'sec22-vision-a-nation-empowered-against-cyber-threats': Svg22,
    'sec23-mission-education-awareness-and-prevention': Svg23,
    'sec24-vision-a-culture-of-cyber-ethics-responsibility': Svg24,
    'sec25-mission-protecting-every-citizens-digital-rights': Svg25,
    'sec26-vision-a-society-where-cyber-safety-is-universal': Svg26,
    'sec27-mission-empowering-through-legal-emotional-support': Svg27,
    'sec28-vision-a-digitally-safe-nation-for-all': Svg28,
    'sec29-mission-awareness-training-cyber-resilience': Svg29,
    'sec30-vision-a-culture-of-ethical-digital-practices': Svg30,
    'sec31-mission-safeguarding-women-girls-in-the-digital-space': Svg31,
    'sec32-vision-a-gender-safe-digital-society': Svg32,
    'sec33-mission-strengthening-cyber-law-awareness-education': Svg33,
    'sec34-vision-a-legally-empowered-digitally-responsible-society': Svg34,
    'sec35-mission-cyber-forensics-investigation-excellence': Svg35,
    'sec36-vision-a-digitally-secure-transparent-world': Svg36,
    'sec37-mission-protecting-businesses-corporates-from-cyber-threats': Svg37,
    'sec38-vision-a-secure-digital-ecosystem-for-businesses': Svg38,
    'sec39-mission-empowering-educational-institutions': Svg39,
    'sec40-vision-a-digitally-safe-empowered-education-sector': Svg40,
    'sec41-mission-human-rights-digital-freedom-advocacy': Svg41,
    'sec42-vision-a-digitally-just-rights-oriented-society': Svg42,
    'sec43-mission-cyber-risk-management-for-all-stakeholders': Svg43,
    'sec44-vision-a-secure-digital-nation-for-citizens-organizations': Svg44,
    'sec45-mission-cyber-forensics-digital-investigation-excellence': Svg45,
    'sec46-vision-a-digitally-transparent-legally-accountable-society': Svg46,
    'sec47-mission-victim-support-emotional-rehabilitation': Svg47,
    'sec48-vision-a-compassionate-digitally-secure-society': Svg48,
    'sec49-mission-strengthening-public-awareness-cyber-literacy': Svg49,
    'sec50-vision-a-digitally-enlightened-responsible-society': Svg50,
    'sec51-mission-cybercrime-prevention-legal-protection': Svg51,
    'sec52-vision-a-safe-legally-secure-digital-world': Svg52,
    'sec53-mission-cyber-investigation-evidence-integrity': Svg53,
    'sec54-vision-a-transparent-justice-oriented-digital-society': Svg54,
    'sec55-mission-women-girl-safety-in-digital-space': Svg55,
    'sec56-vision-a-digitally-secure-empowered-female-community': Svg56,
    'sec57-mission-cyber-psychology-emotional-support': Svg57,
    'sec58-vision-a-mentally-resilient-digitally-safe-society': Svg58,
    'sec59-mission-cyber-education-skill-development': Svg59,
    'sec60-vision-a-cyber-literate-legally-empowered-generation': Svg60,
    'sec61-mission-cyber-law-awareness-legal-guidance': Svg61,
    'sec62-vision-a-legally-aware-responsible-digital-society': Svg62,
    'sec63-mission-digital-forensics-cyber-investigations': Svg63,
    'sec64-vision-a-transparent-accountable-digital-ecosystem': Svg64,
    'sec65-mission-public-private-collaboration-for-cyber-safety': Svg65,
    'sec66-vision-a-unified-resilient-cybersecurity-network': Svg66,
    'sec67-mission-cyber-risk-management-awareness': Svg67,
    'sec68-vision-a-risk-aware-secure-digital-society': Svg68,
    'sec69-mission-human-rights-ethical-cyber-practices': Svg69,
    'sec70-vision-an-ethical-rights-respecting-cyber-society': Svg70,
    'sec71-mission-cyber-research-innovation': Svg71,
    'sec72-vision-a-knowledge-driven-innovative-cyber-ecosystem': Svg72,
    'sec73-mission-cyber-education-training-programs': Svg73,
    'sec74-vision-a-cyber-savvy-empowered-generation': Svg74,
    'sec75-mission-victim-support-rehabilitation': Svg75,
    'sec76-vision-a-compassionate-supportive-society': Svg76,
    'sec77-mission-women-girl-digital-empowerment': Svg77,
    'sec78-vision-a-digitally-safe-confident-female-community': Svg78,
    'sec79-mission-strengthening-cyber-governance-policy-advocacy': Svg79,
    'sec80-vision-a-legally-compliant-digitally-resilient-nation': Svg80,
    'sec81-mission-cutting-edge-software-development': Svg81,
    'sec82-vision-a-digitally-empowered-society': Svg82,
    'sec83-mission-comprehensive-software-designing-ux-ui-excellence': Svg83,
    'sec84-vision-user-centric-legally-compliant-digital-platforms': Svg84,
    'sec85-mission-software-testing-quality-assurance': Svg85,
    'sec86-vision-trustworthy-secure-digital-solutions': Svg86,
    'sec87-mission-android-application-development': Svg87,
    'sec88-vision-a-mobile-first-secure-society': Svg88,
    'sec89-mission-desktop-application-excellence': Svg89,
    'sec90-vision-seamless-secure-desktop-ecosystem': Svg90,
    'sec91-mission-laptop-applications-productivity-tools': Svg91,
    'sec92-vision-a-legally-secure-efficient-laptop-workspace': Svg92,
    'sec93-mission-advanced-digital-tools-productivity-solutions': Svg93,
    'sec94-vision-a-digitally-empowered-legally-safe-society': Svg94,
    'sec95-mission-ethical-digital-marketing-online-outreach': Svg95,
    'sec96-vision-transparent-responsible-online-communication': Svg96,
    'sec97-mission-artificial-intelligence-for-social-digital-empowerment': Svg97,
    'sec98-vision-ai-driven-safe-and-inclusive-digital-society': Svg98,
    'sec99-mission-seo-digital-visibility-for-awareness': Svg99,
    'sec100-vision-empowered-informed-society-through-education-training': Svg100,
};

// --- Main Component: MissionVision ---
const MissionVision = () => {
    const [activePageIndex, setActivePageIndex] = useState(0);
    const location = useLocation();
    const navigate = useNavigate();
    const sectionRefs = useRef({});
    const articleContainerRef = useRef(null);

    const memoizedPages = useMemo(() => {
        const getWordCount = (str) => str.trim().split(/\s+/).length;
        let pages = [];
        let currentPageSections = [];
        let currentWordCount = 0;
        missionAndVisionData.forEach((section, index) => {
            const sectionWordCount = getWordCount(section.content);
            if (currentPageSections.length > 0 && currentWordCount + sectionWordCount > WORDS_PER_PAGE) {
                pages.push({ pageIndex: pages.length, sections: currentPageSections });
                currentPageSections = [section];
                currentWordCount = sectionWordCount;
            } else {
                currentPageSections.push(section);
                currentWordCount += sectionWordCount;
            }
            if (index === missionAndVisionData.length - 1) {
                pages.push({ pageIndex: pages.length, sections: currentPageSections });
            }
        });
        return pages;
    }, []);

    useEffect(() => {
        const hash = location.hash.substring(1);
        if (hash) {
            let foundPageIndex = -1;
            memoizedPages.find((page, index) => {
                if (page.sections.some(sec => sec.id === hash)) {
                    foundPageIndex = index;
                    return true;
                }
                return false;
            });
            if (foundPageIndex !== -1) {
                setActivePageIndex(foundPageIndex);
                setTimeout(() => {
                    sectionRefs.current[hash]?.scrollIntoView({ behavior: 'smooth', block: 'center' });
                }, 300);
            }
        }
    }, [memoizedPages, location.hash]);

    const handlePageChange = (newIndex) => {
        if (newIndex >= 0 && newIndex < memoizedPages.length) {
            setActivePageIndex(newIndex);
            const firstSectionId = memoizedPages[newIndex].sections[0].id;
            navigate(`#${firstSectionId}`, { replace: true });
            articleContainerRef.current?.scrollTo(0, 0);
        }
    };

    const currentPage = memoizedPages[activePageIndex];
    const totalPages = memoizedPages.length;

    return (
        <div className="bg-gray-50 text-gray-800 min-h-screen p-4 sm:p-6 lg:p-8">
            <div className="max-w-7xl mx-auto">
                <header className="text-center mb-12">
          <Link
            to="/about"
            className="inline-flex items-center px-5 py-2 rounded-lg bg-green-600 text-white hover:bg-green-700 transition-all mb-4"
          >
            <FiArrowLeft className="mr-2" /> Back to About Us
          </Link>
                    <h1 className="text-4xl md:text-5xl font-bold text-green-800 mb-2">
                        CRCCF: Our Mission & Vision
                    </h1>
                    <p className="text-lg text-gray-600">
                        A commitment to a safer, empowered digital India.
                    </p>
                </header>
                
                <AnimatePresence mode="wait">
                    <motion.article
                        key={activePageIndex}
                        ref={articleContainerRef}
                        className="space-y-16"
                        initial={{ opacity: 0, x: 50 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -50 }}
                        transition={{ duration: 0.5, ease: "easeInOut" }}
                    >
                        {currentPage?.sections.map((section) => (
                            <motion.section
                                key={section.id}
                                id={section.id}
                                ref={(el) => (sectionRefs.current[section.id] = el)}
                                className="scroll-mt-24"
                                initial={{ opacity: 0, y: 50 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, amount: 0.3 }}
                                transition={{ duration: 0.6 }}
                            >
                                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center">
                                    <motion.div 
                                        className="lg:col-span-1 p-4"
                                        whileHover={{ scale: 1.05 }}
                                        transition={{ type: "spring", stiffness: 300, damping: 10 }}
                                    >
                                        {React.createElement(svgMap[section.id] || Svg1)}
                                    </motion.div>
                                    <div className="lg:col-span-2">
                                        <h2 className="text-2xl md:text-3xl font-semibold text-green-700 mb-4">
                                            {section.heading}
                                        </h2>
                                        <p className="text-base md:text-lg text-gray-700 leading-relaxed whitespace-pre-line">
                                            {section.content}
                                        </p>
                                    </div>
                                </div>
                            </motion.section>
                        ))}
                    </motion.article>
                </AnimatePresence>

                <nav className="pagination-controls">
                    <button onClick={() => handlePageChange(0)} disabled={activePageIndex === 0} className="pagination-button"><FirstPageIcon /></button>
                    <button onClick={() => handlePageChange(activePageIndex - 1)} disabled={activePageIndex === 0} className="pagination-button"><PrevPageIcon /></button>
                    <div className="flex items-center gap-2">
                        {memoizedPages.map((_, index) => (
                            <button key={index} onClick={() => handlePageChange(index)} className={`pagination-dot ${activePageIndex === index ? 'active' : ''}`} />
                        ))}
                    </div>
                    <button onClick={() => handlePageChange(activePageIndex + 1)} disabled={activePageIndex === totalPages - 1} className="pagination-button"><NextPageIcon /></button>
                    <button onClick={() => handlePageChange(totalPages - 1)} disabled={activePageIndex === totalPages - 1} className="pagination-button"><LastPageIcon /></button>
                </nav>
            </div>
        </div>
    );
};

// --- Custom CSS for Pagination ---
const styles = `
.pagination-controls { display: flex; justify-content: center; align-items: center; gap: 1rem; margin-top: 4rem; padding: 1rem; background-color: white; border-radius: 9999px; box-shadow: 0 4px 14px 0 rgba(0, 0, 0, 0.05); }
.pagination-button { display: flex; align-items: center; justify-content: center; width: 2.5rem; height: 2.5rem; border-radius: 50%; background-color: #f0fdf4; color: #166534; transition: all 0.2s ease-in-out; }
.pagination-button:hover:not(:disabled) { background-color: #dcfce7; transform: scale(1.1); }
.pagination-button:disabled { color: #a3a3a3; cursor: not-allowed; background-color: #f5f5f5; }
.pagination-dot { width: 0.75rem; height: 0.75rem; border-radius: 50%; background-color: #a7f3d0; transition: all 0.2s ease-in-out; cursor: pointer; }
.pagination-dot:hover { background-color: #34d399; }
.pagination-dot.active { background-color: #10b981; transform: scale(1.25); }
`;

const StyleInjector = () => <style>{styles}</style>;

const MissionVisionWithStyles = () => (
    <>
        <StyleInjector />
        <MissionVision />
    </>
);

export default MissionVisionWithStyles;