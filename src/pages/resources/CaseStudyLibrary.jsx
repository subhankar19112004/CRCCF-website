// src/pages/library/CaseStudyLibrary.jsx
import React, { useState, useRef, useMemo } from "react";
import { Link } from "react-router-dom"; // Assuming react-router-dom is used
import {
  motion,
  useReducedMotion,
  useScroll,
  useTransform,
  useSpring,
  AnimatePresence,
} from "framer-motion";

// !!======================================================================!!
// !!  YOU MUST FIX THIS IMPORT PATH TO MATCH YOUR PROJECT'S FOLDER STRUCTURE  !!
// !!======================================================================!!
import { caseStudyData } from "../../data/induxData/caseStudyData.js";

/* -------------------------------- Motion -------------------------------- */
const useAnims = () => {
  const shouldReduce = useReducedMotion();
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: shouldReduce
        ? { duration: 0 }
        : { duration: 0.25, when: "beforeChildren", staggerChildren: 0.06 },
    },
  };
  const itemUp = {
    hidden: { opacity: 0, y: shouldReduce ? 0 : 12 },
    show: { opacity: 1, y: 0, transition: { duration: shouldReduce ? 0 : 0.28 } },
  };
  return { container, itemUp };
};

/* -------------------------------- Palette -------------------------------- */
const color = {
  cyan25: "#F5FEFF",
  cyan50: "#ECFEFF",
  cyan100: "#CFFAFE",
  cyan200: "#A5F3FC",
  cyan300: "#67E8F9",
  cyan500: "#06B6D4",
  cyan700: "#0E7490",
  indigo25: "#F7F8FF",
  indigo50: "#EEF2FF",
  indigo100: "#E0E7FF",
  indigo300: "#A5B4FC",
  indigo400: "#818CF8",
  indigo600: "#4F46E5",
  indigo800: "#3730A3",
  emerald50: "#ECFDF5",
  emerald100: "#D1FAE5",
  emerald300: "#86EFAC",
  emerald400: "#34D399",
  emerald600: "#059669",
  amber50: "#FFFBEB",
  amber100: "#FEF3C7",
  amber500: "#F59E0B",
  rose50: "#FFF1F2",
  rose100: "#FFE4E6",
  rose400: "#FB7185",
  rose600: "#E11D48",
  slate200: "#E2E8F0",
  slate300: "#CBD5E1",
  slate400: "#94A3B8",
  slate500: "#64748B",
  slate700: "#334155",
  slate900: "#0F172A",
  white: "#FFFFFF",
  black: "#000000",
};

/* --------------------------- Page Data (Local) -------------------------- */
const data = {
  title: "Case Study Library",
  tagline: "Real-world examples of cybercrime prevention, digital safety, and effective intervention.",
};

/* -------------------------- HERO: Video SVG (inline) -------------------------- */
/* Scene: A digital detective board with connected threads, photos, and data points being analyzed. */

const CaseStudyOverlay = () => {
  const shouldReduce = useReducedMotion();
  
  return (
    <g transform="translate(0, 0)">
      {/* Background Grid */}
      <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
        <path d="M 40 0 L 0 0 0 40" fill="none" stroke={color.indigo100} strokeWidth="0.5" />
      </pattern>
      <rect width="100%" height="100%" fill="url(#grid)" opacity="0.3" />

      <g transform="translate(650, 50)">
        {/* Central Analysis Node */}
        <motion.circle 
          cx="150" cy="150" r="60" 
          fill={color.indigo900} opacity="0.9"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.8, type: "spring" }}
        />
        <motion.circle 
          cx="150" cy="150" r="50" 
          fill="none" stroke={color.cyan300} strokeWidth="2"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        />
        
        {/* Spinning Data Rings */}
        {!shouldReduce && (
          <>
            <motion.path 
              d="M150 50 A 100 100 0 0 1 150 250 A 100 100 0 0 1 150 50"
              fill="none" stroke={color.indigo400} strokeWidth="1" strokeDasharray="10 10"
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              style={{ originX: "150px", originY: "150px" }}
            />
            <motion.path 
              d="M150 30 A 120 120 0 0 0 150 270 A 120 120 0 0 0 150 30"
              fill="none" stroke={color.cyan200} strokeWidth="1" strokeDasharray="20 30"
              animate={{ rotate: -360 }}
              transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
              style={{ originX: "150px", originY: "150px" }}
            />
          </>
        )}

        {/* Connected Nodes */}
        {[
          { x: 50, y: 50, color: color.rose400, delay: 0.4 },
          { x: 250, y: 80, color: color.amber500, delay: 0.6 },
          { x: 50, y: 250, color: color.emerald400, delay: 0.8 },
          { x: 250, y: 220, color: color.cyan400, delay: 1.0 },
        ].map((node, i) => (
          <g key={i}>
            <motion.line 
              x1="150" y1="150" x2={node.x} y2={node.y} 
              stroke={color.slate300} strokeWidth="1"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: 0.5, delay: node.delay }}
            />
            <motion.circle 
              cx={node.x} cy={node.y} r="8" 
              fill={node.color}
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.4, delay: node.delay + 0.2, type: "spring" }}
            />
          </g>
        ))}

        {/* Floating Icons */}
        <motion.g transform="translate(135, 135)" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1 }}>
           <path d="M0 0 L 30 0 L 30 20 L 15 30 L 0 20 Z" fill={color.white} />
           <path d="M10 10 L 20 10 M 15 5 V 20" stroke={color.indigo900} strokeWidth="2" />
        </motion.g>
      </g>
    </g>
  );
};

const VideoHeroCaseStudy = ({ src = "", poster = "" }) => {
  const shouldReduce = useReducedMotion();
  const title = "CRCCF Case Study Library Hero";
  const desc = "A digital detective board connecting clues and solving cybercrimes.";

  if (shouldReduce || !src) {
    return (
      <svg viewBox="0 0 1000 400" role="img" aria-labelledby="csTitle csDesc" className="w-full h-auto">
        <title id="csTitle">{title}</title>
        <desc id="csDesc">{desc}</desc>
        <defs>
          <linearGradient id="csGrad" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor={color.slate900} />
            <stop offset="100%" stopColor={color.indigo900} />
          </linearGradient>
        </defs>
        <rect width="100%" height="100%" fill="url(#csGrad)" rx="20" />
        <CaseStudyOverlay />
      </svg>
    );
  }

  return (
    <svg viewBox="0 0 1000 400" className="w-full h-auto block" role="img" aria-label={title}>
      <defs>
        <linearGradient id="csBG" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor={color.slate900} />
          <stop offset="100%" stopColor={color.indigo900} />
        </linearGradient>
        <mask id="csMask">
          <rect width="100%" height="100%" fill="white" />
          <CaseStudyOverlay />
        </mask>
      </defs>
      
      <rect width="100%" height="100%" fill="url(#csBG)" rx="20" />
      
      <foreignObject x="0" y="0" width="1000" height="400" mask="url(#csMask)">
        <video
          src={src}
          poster={poster || undefined}
          autoPlay
          muted
          playsInline
          loop
          preload="metadata"
          crossOrigin="anonymous"
          style={{ width: "100%", height: "100%", objectFit: "cover", opacity: 0.4 }}
          onError={(e) => { e.currentTarget.style.display = "none"; }}
        >
          <source src={src} type="video/mp4" />
        </video>
      </foreignObject>

      <CaseStudyOverlay />
    </svg>
  );
};

/* ---------------------------- SVG helpers & utils ---------------------------- */
const BG = ({ id, stops }) => (
  <defs> <linearGradient id={id} x1="0" y1="0" x2="1" y2="1"> {stops.map((s, i) => <stop key={i} offset={s.offset} stopColor={s.color} stopOpacity={s.opacity ?? 1} />)} </linearGradient> </defs>
);
const Card = ({ x, y, w, h, r = 16, fill = color.white, stroke = color.slate200, sw = 1, opacity = 1 }) => (
  <rect x={x} y={y} width={w} height={h} rx={r} fill={fill} stroke={stroke} strokeWidth={sw} opacity={opacity} />
);
const SoftGlow = ({ id = "glow", std = 8, alpha = 0.5 }) => (
  <defs> <filter id={id} x="-30%" y="-30%" width="160%" height="160%"> <feGaussianBlur in="SourceGraphic" stdDeviation={std} result="b" /> <feColorMatrix in="b" type="matrix" values={`1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 ${alpha} 0`} /> </filter> </defs>
);

/* ------------------------ Reusable Case Study SVGs (22 Types) ------------------------ */

// 1. Phishing & Fraud (Mail/Link Focus)
const SvgPhishingAttack = ({ className }) => (
  <svg viewBox="0 0 200 150" className={className} xmlns="http://www.w3.org/2000/svg">
    <BG id="gradPhish" stops={[{ offset: "0%", color: color.rose50 }, { offset: "100%", color: color.rose100 }]} />
    <Card x="40" y="30" w="120" h="90" r="8" fill="url(#gradPhish)" stroke={color.rose300} sw="2" />
    
    <motion.path 
      d="M40 30 L 100 75 L 160 30" 
      fill="none" stroke={color.rose400} strokeWidth="2" 
      initial={{ pathLength: 0 }} whileInView={{ pathLength: 1 }} viewport={{ once: true }} transition={{ duration: 0.8 }}
    />
    
    {/* Fishing Hook */}
    <motion.path 
      d="M100 0 V 50 C 100 70, 130 70, 130 50" 
      fill="none" stroke={color.slate700} strokeWidth="3"
      initial={{ y: -50 }} whileInView={{ y: 0 }} viewport={{ once: true }} transition={{ type: "spring", bounce: 0.5 }}
    />
    
    {/* Warning Icon */}
    <motion.g transform="translate(90, 80)" initial={{ scale: 0 }} whileInView={{ scale: 1 }} viewport={{ once: true }} transition={{ delay: 0.5 }}>
      <path d="M10 0 L 20 20 L 0 20 Z" fill={color.amber500} />
      <path d="M10 5 V 15" stroke={color.white} strokeWidth="2" />
    </motion.g>
  </svg>
);

// 2. Identity Theft & Impersonation
const SvgIdentityTheft = ({ className }) => (
  <svg viewBox="0 0 200 150" className={className} xmlns="http://www.w3.org/2000/svg">
    <BG id="gradId" stops={[{ offset: "0%", color: color.slate100 }, { offset: "100%", color: color.slate200 }]} />
    <defs>
      <mask id="maskFace">
        <rect x="0" y="0" width="200" height="150" fill="white" />
        <circle cx="100" cy="75" r="30" fill="black" />
      </mask>
    </defs>
    
    <circle cx="100" cy="75" r="40" fill={color.slate300} />
    <circle cx="100" cy="75" r="30" fill={color.indigo600} />
    
    <motion.g 
      transform="translate(130, 40)"
      initial={{ x: 20, opacity: 0 }} whileInView={{ x: 0, opacity: 1 }} viewport={{ once: true }} transition={{ delay: 0.3 }}
    >
      <rect x="0" y="0" width="60" height="80" rx="5" fill={color.white} stroke={color.slate300} strokeWidth="2" />
      <rect x="10" y="10" width="20" height="20" rx="10" fill={color.slate300} />
      <rect x="10" y="40" width="40" height="5" rx="2" fill={color.slate300} />
      <rect x="10" y="50" width="30" height="5" rx="2" fill={color.slate300} />
    </motion.g>
  </svg>
);

// 3. Financial Scam (Money/Bank Focus)
const SvgFinancialScam = ({ className }) => (
  <svg viewBox="0 0 200 150" className={className} xmlns="http://www.w3.org/2000/svg">
    <BG id="gradMoney" stops={[{ offset: "0%", color: color.emerald50 }, { offset: "100%", color: color.emerald100 }]} />
    <Card x="50" y="40" w="100" h="60" r="5" fill="url(#gradMoney)" stroke={color.emerald400} sw="2" />
    <circle cx="100" cy="70" r="15" fill="none" stroke={color.emerald600} strokeWidth="2" />
    
    <motion.text 
      x="95" y="75" fontSize="20" fill={color.emerald600} fontWeight="bold"
      initial={{ opacity: 0, scale: 0 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }}
    >
      $
    </motion.text>
    
    {/* Flying Money */}
    <motion.g 
      transform="translate(140, 30)"
      animate={{ y: [-5, 5, -5], rotate: [0, 10, 0] }} transition={{ duration: 3, repeat: Infinity }}
    >
      <rect x="0" y="0" width="40" height="20" rx="2" fill={color.emerald200} stroke={color.emerald500} />
    </motion.g>
  </svg>
);

// 4. Social Media Harassment
const SvgSocialHarassment = ({ className }) => (
  <svg viewBox="0 0 200 150" className={className} xmlns="http://www.w3.org/2000/svg">
    <circle cx="100" cy="75" r="30" fill={color.indigo100} stroke={color.indigo300} strokeWidth="2" />
    
    <motion.g transform="translate(60, 40)" initial={{ scale: 0 }} whileInView={{ scale: 1 }} viewport={{ once: true }} transition={{ delay: 0.2 }}>
      <path d="M0 0 L 30 0 L 30 20 L 10 20 L 0 30 Z" fill={color.rose200} stroke={color.rose400} />
      <text x="10" y="15" fontSize="12" fill={color.rose600}>!</text>
    </motion.g>
    
    <motion.g transform="translate(110, 40)" initial={{ scale: 0 }} whileInView={{ scale: 1 }} viewport={{ once: true }} transition={{ delay: 0.4 }}>
      <path d="M0 0 L 30 0 L 30 20 L 10 20 L 0 30 Z" fill={color.rose200} stroke={color.rose400} />
      <text x="10" y="15" fontSize="12" fill={color.rose600}>#</text>
    </motion.g>
  </svg>
);

// 5. Device Security (Malware/Hacking)
const SvgDeviceSecurity = ({ className }) => (
  <svg viewBox="0 0 200 150" className={className} xmlns="http://www.w3.org/2000/svg">
    <rect x="60" y="30" width="80" height="100" rx="10" fill={color.slate800} />
    <rect x="65" y="35" width="70" height="90" rx="5" fill={color.slate900} />
    
    <motion.path 
      d="M80 60 L 95 80 L 120 50" 
      fill="none" stroke={color.emerald500} strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"
      initial={{ pathLength: 0 }} whileInView={{ pathLength: 1 }} viewport={{ once: true }} transition={{ delay: 0.5 }}
    />
    
    <motion.rect 
      x="65" y="35" width="70" height="90" fill={color.emerald500} opacity="0.2"
      initial={{ opacity: 0 }} whileInView={{ opacity: 0.2 }} viewport={{ once: true }} transition={{ delay: 0.5, duration: 0.5 }}
    />
  </svg>
);

// 6. Fake Job/Contract
const SvgFakeJob = ({ className }) => (
  <svg viewBox="0 0 200 150" className={className} xmlns="http://www.w3.org/2000/svg">
    <Card x="50" y="30" w="100" h="100" r="5" fill={color.white} stroke={color.slate300} sw="2" />
    <rect x="60" y="40" width="80" height="8" rx="2" fill={color.slate200} />
    <rect x="60" y="55" width="60" height="5" rx="2" fill={color.slate200} />
    <rect x="60" y="65" width="70" height="5" rx="2" fill={color.slate200} />
    
    <motion.circle 
      cx="130" cy="110" r="20" 
      fill="none" stroke={color.rose500} strokeWidth="3"
      initial={{ scale: 2, opacity: 0 }} whileInView={{ scale: 1, opacity: 1 }} viewport={{ once: true }} transition={{ type: "spring" }}
    />
    <path d="M120 100 L 140 120 M 140 100 L 120 120" stroke={color.rose500} strokeWidth="3" />
  </svg>
);

// 7. Emotional Manipulation (Heart/Chat)
const SvgEmotionalManip = ({ className }) => (
  <svg viewBox="0 0 200 150" className={className} xmlns="http://www.w3.org/2000/svg">
    <path d="M100 120 C 40 80, 20 50, 60 30 C 80 20, 100 40, 100 40 C 100 40, 120 20, 140 30 C 180 50, 160 80, 100 120 Z" fill={color.rose100} stroke={color.rose300} strokeWidth="2" />
    
    <motion.path 
      d="M50 75 L 150 75" 
      stroke={color.slate800} strokeWidth="4" 
      initial={{ pathLength: 0 }} whileInView={{ pathLength: 1 }} viewport={{ once: true }} transition={{ delay: 0.5 }}
    />
  </svg>
);

// 8. Tech Support Scam
const SvgTechSupportScam = ({ className }) => (
  <svg viewBox="0 0 200 150" className={className} xmlns="http://www.w3.org/2000/svg">
    <g transform="translate(50, 40)">
      <rect x="0" y="0" width="100" height="70" rx="5" fill={color.indigo100} stroke={color.indigo300} strokeWidth="2" />
      <circle cx="50" cy="35" r="15" fill={color.white} />
      <path d="M40 35 C 40 25, 60 25, 60 35" fill="none" stroke={color.indigo500} strokeWidth="2" />
      <rect x="45" y="35" width="10" height="8" fill={color.indigo500} />
    </g>
    
    <motion.path 
      d="M100 110 L 120 90 L 130 100 L 150 80" 
      fill="none" stroke={color.amber500} strokeWidth="3" 
      strokeDasharray="5 5"
      animate={{ strokeDashoffset: [0, 10] }} transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
    />
  </svg>
);

// 9. Data Leak/Privacy
const SvgDataLeak = ({ className }) => (
  <svg viewBox="0 0 200 150" className={className} xmlns="http://www.w3.org/2000/svg">
    <Card x="60" y="40" w="80" h="80" r="10" fill={color.slate100} stroke={color.slate300} sw="2" />
    <circle cx="100" cy="80" r="20" fill={color.slate300} />
    
    <motion.path 
      d="M100 100 V 130 M 90 130 L 110 130" 
      stroke={color.rose500} strokeWidth="3"
      initial={{ y: -10, opacity: 0 }} whileInView={{ y: 0, opacity: 1 }} viewport={{ once: true }} transition={{ delay: 0.3 }}
    />
    
    <motion.g transform="translate(100, 130)" animate={{ y: [0, 5, 0] }} transition={{ duration: 1.5, repeat: Infinity }}>
      <circle cx="0" cy="0" r="3" fill={color.rose500} />
    </motion.g>
  </svg>
);

// 10. Gaming Scam
const SvgGamingScam = ({ className }) => (
  <svg viewBox="0 0 200 150" className={className} xmlns="http://www.w3.org/2000/svg">
    <path d="M50 60 L 70 40 L 130 40 L 150 60 L 150 100 L 130 120 L 70 120 L 50 100 Z" fill={color.indigo900} />
    <circle cx="70" cy="80" r="8" fill={color.cyan400} />
    <rect x="120" y="75" width="20" height="10" rx="2" fill={color.rose400} />
    
    <motion.text 
      x="100" y="30" fontSize="14" fill={color.amber500} fontWeight="bold" textAnchor="middle"
      animate={{ opacity: [0, 1, 0] }} transition={{ duration: 1, repeat: Infinity }}
    >
      FREE LOOT!
    </motion.text>
  </svg>
);

// 11. E-commerce/Refund Scam
const SvgEcommerceScam = ({ className }) => (
  <svg viewBox="0 0 200 150" className={className} xmlns="http://www.w3.org/2000/svg">
    <rect x="50" y="50" width="100" height="60" rx="5" fill={color.amber100} stroke={color.amber400} strokeWidth="2" />
    <path d="M50 65 H 150" stroke={color.amber400} strokeWidth="2" />
    
    <motion.g transform="translate(100, 80)" initial={{ scale: 0 }} whileInView={{ scale: 1 }} viewport={{ once: true }} transition={{ delay: 0.3 }}>
      <circle cx="0" cy="0" r="15" fill={color.rose500} />
      <path d="M-5 -5 L 5 5 M 5 -5 L -5 5" stroke={color.white} strokeWidth="3" />
    </motion.g>
  </svg>
);

// 12. Ransomware/Blackmail
const SvgRansomware = ({ className }) => (
  <svg viewBox="0 0 200 150" className={className} xmlns="http://www.w3.org/2000/svg">
    <rect x="50" y="30" width="100" height="80" rx="5" fill={color.slate800} />
    <rect x="55" y="35" width="90" height="70" fill={color.black} />
    
    <text x="100" y="70" fill={color.rose500} fontSize="12" fontWeight="bold" textAnchor="middle">LOCKED</text>
    
    <motion.rect 
      x="70" y="80" width="60" height="10" fill={color.rose600}
      animate={{ width: [0, 60] }} transition={{ duration: 2, repeat: Infinity }}
    />
  </svg>
);

// 13. KYC/Bank Fraud
const SvgKycFraud = ({ className }) => (
  <svg viewBox="0 0 200 150" className={className} xmlns="http://www.w3.org/2000/svg">
    <path d="M40 100 H 160" stroke={color.slate400} strokeWidth="2" />
    <g transform="translate(70, 40)">
      <rect x="0" y="0" width="60" height="40" fill={color.indigo100} stroke={color.indigo300} />
      <path d="M30 0 L 0 15 L 60 15 Z" fill={color.indigo300} />
    </g>
    
    <motion.g transform="translate(100, 100)" animate={{ y: [0, -10, 0] }} transition={{ duration: 1.5, repeat: Infinity }}>
      <path d="M0 0 L 10 -15 L -10 -15 Z" fill={color.rose500} />
      <text x="0" y="-20" fill={color.rose500} fontSize="10" fontWeight="bold" textAnchor="middle">KYC?</text>
    </motion.g>
  </svg>
);

// 14. Academic/Student Scam
const SvgAcademicScam = ({ className }) => (
  <svg viewBox="0 0 200 150" className={className} xmlns="http://www.w3.org/2000/svg">
    <path d="M50 60 L 100 30 L 150 60 L 100 90 Z" fill={color.slate700} />
    <path d="M150 60 V 90 L 100 110" fill="none" stroke={color.slate700} strokeWidth="2" />
    
    <motion.rect 
      x="70" y="100" width="60" height="30" rx="2" fill={color.white} stroke={color.slate300}
      initial={{ y: 20, opacity: 0 }} whileInView={{ y: 0, opacity: 1 }} viewport={{ once: true }} transition={{ delay: 0.3 }}
    />
    <text x="100" y="120" fill={color.rose500} fontSize="10" textAnchor="middle">FAKE FEE</text>
  </svg>
);

// 15. Investment/Crypto Scam
const SvgInvestmentScam = ({ className }) => (
  <svg viewBox="0 0 200 150" className={className} xmlns="http://www.w3.org/2000/svg">
    <path d="M40 120 L 80 80 L 120 100 L 160 40" fill="none" stroke={color.slate300} strokeWidth="2" strokeDasharray="5 5" />
    
    <motion.path 
      d="M40 120 L 80 80 L 120 100 L 160 40" 
      fill="none" stroke={color.emerald500} strokeWidth="3"
      initial={{ pathLength: 0 }} whileInView={{ pathLength: 1 }} viewport={{ once: true }} transition={{ duration: 1.5 }}
    />
    
    <motion.circle cx="160" cy="40" r="5" fill={color.emerald500} animate={{ scale: [1, 1.5, 1] }} transition={{ duration: 1, repeat: Infinity }} />
  </svg>
);

// 16. Bluetooth/Wireless Attack
const SvgWirelessAttack = ({ className }) => (
  <svg viewBox="0 0 200 150" className={className} xmlns="http://www.w3.org/2000/svg">
    <rect x="80" y="50" width="40" height="70" rx="5" fill={color.slate200} />
    
    <motion.path 
      d="M130 60 A 20 20 0 0 1 130 110 M 140 50 A 35 35 0 0 1 140 120" 
      fill="none" stroke={color.cyan500} strokeWidth="2"
      animate={{ opacity: [0, 1, 0] }} transition={{ duration: 1.5, repeat: Infinity }}
    />
    <motion.path 
      d="M70 60 A 20 20 0 0 0 70 110 M 60 50 A 35 35 0 0 0 60 120" 
      fill="none" stroke={color.cyan500} strokeWidth="2"
      animate={{ opacity: [0, 1, 0] }} transition={{ duration: 1.5, repeat: Infinity, delay: 0.75 }}
    />
  </svg>
);

// 17. Charity/Donation Scam
const SvgCharityScam = ({ className }) => (
  <svg viewBox="0 0 200 150" className={className} xmlns="http://www.w3.org/2000/svg">
    <path d="M100 40 C 70 10, 40 40, 40 70 C 40 110, 100 140, 100 140 C 100 140, 160 110, 160 70 C 160 40, 130 10, 100 40 Z" fill={color.rose50} stroke={color.rose200} strokeWidth="2" />
    
    <g transform="translate(85, 60)">
      <rect x="0" y="0" width="30" height="40" fill={color.slate200} />
      <path d="M15 10 L 15 30 M 5 20 L 25 20" stroke={color.rose500} strokeWidth="3" />
    </g>
    
    <motion.g transform="translate(120, 50)" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ delay: 0.5 }}>
      <circle cx="0" cy="0" r="10" fill={color.slate800} />
      <text x="0" y="4" fill={color.white} fontSize="10" textAnchor="middle">?</text>
    </motion.g>
  </svg>
);

// 18. Workplace/Email Compromise
const SvgWorkplaceScam = ({ className }) => (
  <svg viewBox="0 0 200 150" className={className} xmlns="http://www.w3.org/2000/svg">
    <rect x="40" y="40" width="120" height="80" rx="2" fill={color.white} stroke={color.slate300} strokeWidth="2" />
    <path d="M40 40 L 100 80 L 160 40" fill="none" stroke={color.slate300} strokeWidth="2" />
    
    <motion.circle 
      cx="100" cy="80" r="15" 
      fill={color.amber100}
      animate={{ r: [15, 20, 15] }} transition={{ duration: 2, repeat: Infinity }}
    />
    <text x="100" y="85" fill={color.amber600} fontSize="14" fontWeight="bold" textAnchor="middle">CEO?</text>
  </svg>
);

// 19. Cloud/Storage Hack
const SvgCloudHack = ({ className }) => (
  <svg viewBox="0 0 200 150" className={className} xmlns="http://www.w3.org/2000/svg">
    <path d="M60 80 A 20 20 0 0 1 80 60 A 30 30 0 0 1 130 60 A 20 20 0 0 1 150 80 Q 160 90, 150 100 H 60 Q 50 90, 60 80 Z" fill={color.cyan100} stroke={color.cyan300} strokeWidth="2" />
    
    <motion.path 
      d="M105 60 L 95 75 L 115 75 L 105 90" 
      fill="none" stroke={color.rose500} strokeWidth="2"
      initial={{ y: -20, opacity: 0 }} whileInView={{ y: 0, opacity: 1 }} viewport={{ once: true }} transition={{ delay: 0.5 }}
    />
  </svg>
);

// 20. Rental/Property Scam
const SvgRentalScam = ({ className }) => (
  <svg viewBox="0 0 200 150" className={className} xmlns="http://www.w3.org/2000/svg">
    <path d="M60 60 L 100 30 L 140 60 V 110 H 60 V 60 Z" fill={color.slate100} stroke={color.slate400} strokeWidth="2" />
    <rect x="90" y="80" width="20" height="30" fill={color.indigo100} />
    
    <motion.g transform="translate(100, 70)" animate={{ opacity: [0, 1, 0] }} transition={{ duration: 1.5, repeat: Infinity }}>
      <rect x="-30" y="10" width="60" height="15" fill={color.rose500} />
      <text x="0" y="21" fill={color.white} fontSize="10" fontWeight="bold" textAnchor="middle">TAKEN</text>
    </motion.g>
  </svg>
);

// 21. OTP/Bot Scam
const SvgOtpBot = ({ className }) => (
  <svg viewBox="0 0 200 150" className={className} xmlns="http://www.w3.org/2000/svg">
    <rect x="70" y="40" width="60" height="80" rx="5" fill={color.slate800} />
    <circle cx="90" cy="60" r="5" fill={color.rose500} />
    <circle cx="110" cy="60" r="5" fill={color.rose500} />
    <path d="M85 80 H 115" stroke={color.rose500} strokeWidth="2" />
    
    <motion.g transform="translate(100, 100)">
      <rect x="-25" y="0" width="50" height="20" rx="5" fill={color.white} />
      <text x="0" y="14" fill={color.slate900} fontSize="12" fontWeight="bold" textAnchor="middle">1234</text>
    </motion.g>
  </svg>
);

// 22. App Permission/Contact Harvesting
const SvgAppPermission = ({ className }) => (
  <svg viewBox="0 0 200 150" className={className} xmlns="http://www.w3.org/2000/svg">
    <rect x="70" y="30" width="60" height="100" rx="8" fill={color.slate100} stroke={color.slate300} strokeWidth="2" />
    
    <motion.g transform="translate(100, 70)">
      <circle cx="0" cy="0" r="15" fill={color.rose100} stroke={color.rose400} />
      <path d="M-5 -5 L 5 5 M 5 -5 L -5 5" stroke={color.rose500} strokeWidth="2" />
    </motion.g>
    
    <text x="100" y="105" fill={color.slate500} fontSize="10" textAnchor="middle">Contacts</text>
    <text x="100" y="115" fill={color.slate500} fontSize="10" textAnchor="middle">Gallery</text>
  </svg>
);

// Map SVG to ID keywords
const getSvgComponent = (id) => {
  const lowerId = id.toLowerCase();
  if (lowerId.includes("fraud") || lowerId.includes("scam") || lowerId.includes("trap")) return SvgFinancialScam;
  if (lowerId.includes("harassment") || lowerId.includes("defamation") || lowerId.includes("threat")) return SvgSocialHarassment;
  if (lowerId.includes("identity") || lowerId.includes("impersonation") || lowerId.includes("profile")) return SvgIdentityTheft;
  if (lowerId.includes("phishing") || lowerId.includes("link") || lowerId.includes("url")) return SvgPhishingAttack;
  if (lowerId.includes("malware") || lowerId.includes("virus") || lowerId.includes("device") || lowerId.includes("app")) return SvgDeviceSecurity;
  if (lowerId.includes("job") || lowerId.includes("contract") || lowerId.includes("offer") || lowerId.includes("signature")) return SvgFakeJob;
  if (lowerId.includes("emotional") || lowerId.includes("story") || lowerId.includes("dating")) return SvgEmotionalManip;
  if (lowerId.includes("support") || lowerId.includes("technical")) return SvgTechSupportScam;
  if (lowerId.includes("leak") || lowerId.includes("photo") || lowerId.includes("cloud") || lowerId.includes("data")) return SvgDataLeak;
  if (lowerId.includes("gaming")) return SvgGamingScam;
  if (lowerId.includes("refund") || lowerId.includes("commerce") || lowerId.includes("delivery") || lowerId.includes("package")) return SvgEcommerceScam;
  if (lowerId.includes("ransom") || lowerId.includes("blackmail")) return SvgRansomware;
  if (lowerId.includes("kyc") || lowerId.includes("bank")) return SvgKycFraud;
  if (lowerId.includes("student") || lowerId.includes("academic") || lowerId.includes("scholarship")) return SvgAcademicScam;
  if (lowerId.includes("invest") || lowerId.includes("crypto")) return SvgInvestmentScam;
  if (lowerId.includes("bluetooth") || lowerId.includes("wi-fi") || lowerId.includes("wireless")) return SvgWirelessAttack;
  if (lowerId.includes("charity") || lowerId.includes("donation")) return SvgCharityScam;
  if (lowerId.includes("workplace") || lowerId.includes("email")) return SvgWorkplaceScam;
  if (lowerId.includes("rental") || lowerId.includes("property")) return SvgRentalScam;
  if (lowerId.includes("otp") || lowerId.includes("bot")) return SvgOtpBot;
  if (lowerId.includes("permission") || lowerId.includes("harvest")) return SvgAppPermission;
  
  // Fallback
  return SvgFinancialScam;
};

/* ------------------------------ Section block ------------------------------ */
const SectionBlock = ({ id, title, content, SVG, reverse = false }) => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 80%", "end 20%"],
  });
  const shouldReduce = useReducedMotion();
  const y = useSpring(
    useTransform(scrollYProgress, [0, 1], shouldReduce ? [0, 0] : [18, -18]),
    { stiffness: 120, damping: 20 }
  );
  const opacity = useTransform(scrollYProgress, [0, 1], [0.6, 1]);

  const paragraphs = content
    .split("\n")
    .map((p, i) => (
      <p
        key={i}
        className="text-[15px] sm:text-base text-gray-700 leading-relaxed whitespace-pre-wrap"
      >
        {p}
      </p>
    ));

  return (
    <section id={id} ref={ref} className="py-8 sm:py-10">
      <motion.div
        style={{ opacity: shouldReduce ? 1 : opacity }}
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: shouldReduce ? 0 : 0.5 }}
        className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-6 md:gap-8 lg:gap-10 md:items-stretch"
      >
        {/* SVG Column */}
        <motion.div
          style={{ y }}
          className={`relative min-w-0 flex flex-col ${
            reverse ? "md:order-2" : "md:order-1"
          }`}
        >
          <div
            className="absolute -inset-2 rounded-2xl bg-gradient-to-tr from-cyan-100 via-indigo-100 to-emerald-100 blur-md sm:blur-lg md:blur-xl"
            aria-hidden="true"
          />
          <div className="relative rounded-2xl border border-gray-200 bg-white p-3 sm:p-4 shadow-sm flex-grow flex items-center justify-center overflow-hidden">
            <div className="w-full h-full max-h-[400px] md:max-h-full">
              <SVG className="w-full h-full object-contain" />
            </div>
          </div>
        </motion.div>

        {/* Content Column */}
        <div className={`${reverse ? "md:order-1" : "md:order-2"} min-w-0 py-2`}>
          <h2 className="text-[20px] sm:text-2xl font-semibold text-gray-900 leading-snug">
            {title}
          </h2>
          <div className="mt-2.5 sm:mt-3 space-y-3">{paragraphs}</div>
        </div>
      </motion.div>
    </section>
  );
};

// --- PAGINATION COMPONENT ---
const Pagination = ({ currentPage, totalPages, onPageChange }) => {
  const { itemUp } = useAnims();

  const getPageNumbers = () => {
    const pages = [];
    const maxPagesToShow = 5;
    const ellipsis = (
      <span key="ellipsis" className="flex items-center justify-center px-3 h-8 sm:px-4 sm:h-10 text-sm font-medium text-gray-700">...</span>
    );

    if (totalPages <= maxPagesToShow + 2) {
      for (let i = 1; i <= totalPages; i++) pages.push(i);
    } else {
      pages.push(1);
      let start = Math.max(2, currentPage - 1);
      let end = Math.min(totalPages - 1, currentPage + 1);
      if (currentPage < 3) end = 3;
      if (currentPage > totalPages - 2) start = totalPages - 2;
      if (start > 2) pages.push(ellipsis);
      for (let i = start; i <= end; i++) pages.push(i);
      if (end < totalPages - 1) pages.push(ellipsis);
      pages.push(totalPages);
    }
    return pages;
  };

  return (
    <motion.nav variants={itemUp} className="flex justify-center items-center gap-1 sm:gap-2 mt-12 sm:mt-16">
      <button
        onClick={() => onPageChange(currentPage - 1)}
        disabled={currentPage === 1}
        className="flex items-center justify-center px-3 h-8 sm:px-4 sm:h-10 text-sm font-medium text-gray-600 bg-white rounded-lg border border-gray-200 hover:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none transition-colors"
      >
        Prev
      </button>
      <div className="flex items-center gap-1 sm:gap-2">
        {getPageNumbers().map((page, index) =>
          typeof page === "number" ? (
            <button
              key={page}
              onClick={() => onPageChange(page)}
              className={`flex items-center justify-center w-8 h-8 sm:w-10 sm:h-10 text-sm font-medium rounded-lg border transition-colors ${
                currentPage === page
                  ? "bg-indigo-600 border-indigo-600 text-white"
                  : "bg-white border-gray-200 text-gray-600 hover:bg-gray-100"
              }`}
            >
              {page}
            </button>
          ) : (
            <span key={`ellipsis-${index}`}>{page}</span>
          )
        )}
      </div>
      <button
        onClick={() => onPageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
        className="flex items-center justify-center px-3 h-8 sm:px-4 sm:h-10 text-sm font-medium text-gray-600 bg-white rounded-lg border border-gray-200 hover:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none transition-colors"
      >
        Next
      </button>
    </motion.nav>
  );
};

/* ---------------------------------- Page ---------------------------------- */
export default function CaseStudyLibrary() {
  const { container, itemUp } = useAnims();
  const heroRef = useRef(null);
  const contentRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });
  const heroY = useTransform(scrollYProgress, [0, 1], [0, -40]);

  // Pagination State
  const [currentPage, setCurrentPage] = useState(1);
  const ITEMS_PER_PAGE = 6;

  const { currentSections, totalPages } = useMemo(() => {
    const total = Math.ceil(caseStudyData.length / ITEMS_PER_PAGE);
    const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
    const endIndex = startIndex + ITEMS_PER_PAGE;
    return {
      currentSections: caseStudyData.slice(startIndex, endIndex),
      totalPages: total,
    };
  }, [currentPage]);

  const handlePageChange = (page) => {
    if (page < 1 || page > totalPages) return;
    setCurrentPage(page);
    contentRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <motion.section
      id="top"
      variants={container}
      initial="hidden"
      animate="show"
      className="relative max-w-6xl mx-auto px-4 sm:px-6 md:px-8 py-8 sm:py-10 md:py-12 lg:py-14"
    >
      {/* Breadcrumb */}
      <motion.nav variants={itemUp} className="text-xs sm:text-sm text-gray-500 mb-3 sm:mb-4">
        <Link to="/" className="hover:underline text-indigo-600">Home</Link>
        <span aria-hidden="true"> › </span>
        <span className="text-gray-700" aria-current="page">Case Study Library</span>
      </motion.nav>

      {/* Hero */}
      <div ref={heroRef} className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-6 md:gap-8 lg:gap-10 items-center">
        <motion.div variants={itemUp}>
          <h1 className="text-[22px] sm:text-3xl font-bold text-gray-900">{data.title}</h1>
          <p className="mt-2 text-base md:text-lg text-cyan-700 max-w-2xl">{data.tagline}</p>
          <div className="mt-3 sm:mt-4 flex flex-wrap gap-2">
            {["Real Stories", "Prevention", "Analysis"].map((pill) => (
              <span key={pill} className="px-2.5 sm:px-3 py-1.5 text-xs sm:text-sm rounded-full bg-cyan-100 text-cyan-800 border border-cyan-200">
                {pill}
              </span>
            ))}
          </div>
        </motion.div>

        <motion.div style={{ y: heroY }} className="relative">
          <div className="absolute -inset-2 rounded-2xl bg-gradient-to-tr from-cyan-100 via-indigo-100 to-emerald-100 blur-md sm:blur-lg md:blur-xl" aria-hidden="true" />
          <div className="relative rounded-2xl border border-gray-200 bg-white p-3 sm:p-4 shadow-sm">
            <div className="w-full h-auto max-h-72 sm:max-h-80 md:max-h-none overflow-hidden rounded-lg">
              <VideoHeroCaseStudy
                src="https://cdn.coverr.co/videos/coverr-typing-code-on-a-computer-3776/1080p.mp4" 
              />
            </div>
          </div>
        </motion.div>
      </div>

      {/* Content Area with Pagination */}
      <div className="mt-12 sm:mt-16" ref={contentRef}>
        <Pagination currentPage={currentPage} totalPages={totalPages} onPageChange={handlePageChange} />

        <AnimatePresence mode="wait">
          <motion.div
            key={currentPage}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="mt-6 divide-y divide-gray-200"
          >
            {currentSections.map((section, index) => {
              const SVGComp = getSvgComponent(section.heading + section.content);
              return (
                <SectionBlock
                  key={section.id}
                  id={section.id}
                  title={section.heading}
                  content={section.content}
                  SVG={SVGComp}
                  reverse={index % 2 !== 0}
                />
              );
            })}
          </motion.div>
        </AnimatePresence>

        <Pagination currentPage={currentPage} totalPages={totalPages} onPageChange={handlePageChange} />
      </div>
    </motion.section>
  );
}