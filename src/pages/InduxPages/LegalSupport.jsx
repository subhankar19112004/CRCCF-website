// src/pages/support/LegalSupport.jsx
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
import { legalSupportData } from "../../data/induxData/legalSupportData.js";

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
  title: "Legal Support & Guidance",
  tagline: "Empowering you with legal clarity, procedural awareness, and lawful strategies for digital safety.",
};

/* -------------------------- HERO: Video SVG (inline) -------------------------- */
/* Scene: A digital scale of justice balancing law and technology, protected by a shield. */

const LegalHeroOverlay = () => {
  const shouldReduce = useReducedMotion();
  
  return (
    <g transform="translate(680, 50)">
      {/* Digital Pillar of Justice */}
      <rect x="130" y="20" width="40" height="260" rx="2" fill={color.indigo900} />
      <rect x="140" y="20" width="20" height="260" fill={color.indigo800} />
      
      {/* Base */}
      <path d="M50 280 H 250 L 270 320 H 30 L 50 280 Z" fill={color.slate800} />
      
      {/* Scales */}
      <path d="M50 80 H 250" stroke={color.amber500} strokeWidth="4" />
      <line x1="150" y1="80" x2="150" y2="40" stroke={color.amber500} strokeWidth="4" />
      <circle cx="150" cy="40" r="10" fill={color.amber500} />

      {/* Left Scale Plate (Law) */}
      <motion.g 
        initial={{ y: 0 }}
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
      >
        <line x1="50" y1="80" x2="20" y2="160" stroke={color.slate400} strokeWidth="2" />
        <line x1="50" y1="80" x2="80" y2="160" stroke={color.slate400} strokeWidth="2" />
        <path d="M20 160 A 30 10 0 0 0 80 160" fill={color.slate700} stroke={color.slate500} strokeWidth="2" />
        {/* Gavel Icon */}
        <g transform="translate(35, 145) rotate(-20)">
          <rect x="0" y="0" width="40" height="15" rx="2" fill={color.amber600} />
          <rect x="15" y="-10" width="10" height="35" rx="2" fill={color.amber700} />
        </g>
      </motion.g>

      {/* Right Scale Plate (Tech) */}
      <motion.g 
        initial={{ y: 0 }}
        animate={{ y: [0, -10, 0] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
      >
        <line x1="250" y1="80" x2="220" y2="160" stroke={color.slate400} strokeWidth="2" />
        <line x1="250" y1="80" x2="280" y2="160" stroke={color.slate400} strokeWidth="2" />
        <path d="M220 160 A 30 10 0 0 0 280 160" fill={color.slate700} stroke={color.slate500} strokeWidth="2" />
        {/* Tech Icon */}
        <rect x="235" y="140" width="30" height="20" rx="2" fill={color.cyan600} />
        <path d="M235 140 L 265 160" stroke={color.white} strokeWidth="1" opacity="0.5" />
      </motion.g>

      {/* Floating Law Paragraphs */}
      {!shouldReduce && [1, 2, 3].map((i) => (
        <motion.rect 
          key={i}
          x={300} y={50 + i * 40} width="100" height="2" rx="1" fill={color.cyan400}
          initial={{ x: 350, opacity: 0 }}
          animate={{ x: 150, opacity: [0, 1, 0] }}
          transition={{ duration: 3, repeat: Infinity, delay: i * 0.5 }}
        />
      ))}
    </g>
  );
};

const VideoHeroLegal = ({ src = "", poster = "" }) => {
  const shouldReduce = useReducedMotion();
  const title = "CRCCF Legal Support Hero";
  const desc = "Scales of justice representing the balance between law and digital rights.";

  if (shouldReduce || !src) {
    return (
      <svg viewBox="0 0 1000 400" role="img" aria-labelledby="lsTitle lsDesc" className="w-full h-auto">
        <title id="lsTitle">{title}</title>
        <desc id="lsDesc">{desc}</desc>
        <defs>
          <linearGradient id="lsGrad" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor={color.slate900} />
            <stop offset="100%" stopColor={color.indigo900} />
          </linearGradient>
        </defs>
        <rect width="100%" height="100%" fill="url(#lsGrad)" rx="20" />
        <LegalHeroOverlay />
      </svg>
    );
  }

  return (
    <svg viewBox="0 0 1000 400" className="w-full h-auto block" role="img" aria-label={title}>
      <defs>
        <linearGradient id="lsBG" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor={color.slate900} />
          <stop offset="100%" stopColor={color.indigo900} />
        </linearGradient>
        <mask id="lsMask">
          <rect width="100%" height="100%" fill="white" />
          <LegalHeroOverlay />
        </mask>
      </defs>
      
      <rect width="100%" height="100%" fill="url(#lsBG)" rx="20" />
      
      <foreignObject x="0" y="0" width="1000" height="400" mask="url(#lsMask)">
        <video
          src={src}
          poster={poster || undefined}
          autoPlay
          muted
          playsInline
          loop
          preload="metadata"
          crossOrigin="anonymous"
          style={{ width: "100%", height: "100%", objectFit: "cover", opacity: 0.5 }}
          onError={(e) => { e.currentTarget.style.display = "none"; }}
        >
          <source src={src} type="video/mp4" />
        </video>
      </foreignObject>

      <LegalHeroOverlay />
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

/* ------------------------ Reusable Section SVGs (~25 Types) ------------------------ */

// 1. Law & Books (General Legal)
const SvgLawBooks = ({ className }) => (
  <svg viewBox="0 0 200 150" className={className} xmlns="http://www.w3.org/2000/svg">
    <BG id="gradLaw" stops={[{ offset: "0%", color: color.indigo100 }, { offset: "100%", color: color.slate200 }]} />
    <rect x="20" y="100" width="160" height="10" fill={color.slate300} />
    
    {/* Standing Books */}
    <rect x="40" y="40" width="20" height="60" fill={color.indigo600} />
    <rect x="65" y="30" width="20" height="70" fill={color.slate600} />
    <rect x="90" y="50" width="20" height="50" fill={color.amber600} />
    
    {/* Leaning Book */}
    <g transform="translate(130, 100) rotate(-20)">
      <rect x="0" y="-60" width="20" height="60" fill={color.cyan700} />
    </g>
    
    {/* Gavel Head */}
    <motion.g transform="translate(160, 130) rotate(-10)" initial={{ rotate: -10 }} whileInView={{ rotate: 10 }} transition={{ duration: 2, repeat: Infinity, repeatType: "reverse" }}>
      <rect x="-20" y="-10" width="40" height="20" rx="2" fill={color.amber800} />
      <rect x="-5" y="-40" width="10" height="30" fill={color.amber700} />
    </motion.g>
  </svg>
);

// 2. Cyber Law Shield
const SvgCyberShield = ({ className }) => (
  <svg viewBox="0 0 200 150" className={className} xmlns="http://www.w3.org/2000/svg">
    <BG id="gradShield2" stops={[{ offset: "0%", color: color.cyan50 }, { offset: "100%", color: color.emerald50 }]} />
    <motion.path 
      d="M100 20 C 100 20, 160 40, 160 80 C 160 120, 100 140, 100 140 C 100 140, 40 120, 40 80 C 40 40, 100 20, 100 20 Z"
      fill="url(#gradShield2)" stroke={color.emerald500} strokeWidth="3"
      initial={{ scale: 0.8 }} whileInView={{ scale: 1 }} viewport={{ once: true }} transition={{ type: "spring" }}
    />
    <path d="M80 60 L 120 60 M 80 80 L 120 80 M 80 100 L 100 100" stroke={color.emerald700} strokeWidth="2" />
    <circle cx="100" cy="40" r="3" fill={color.emerald700} />
  </svg>
);

// 3. IT Act / Document
const SvgItAct = ({ className }) => (
  <svg viewBox="0 0 200 150" className={className} xmlns="http://www.w3.org/2000/svg">
    <Card x="60" y="20" w="80" h="110" r="5" fill={color.white} stroke={color.slate300} sw="2" />
    <rect x="75" y="35" width="50" height="6" rx="2" fill={color.slate700} />
    <rect x="70" y="50" width="60" height="3" rx="1" fill={color.slate400} />
    <rect x="70" y="60" width="60" height="3" rx="1" fill={color.slate400} />
    <rect x="70" y="70" width="40" height="3" rx="1" fill={color.slate400} />
    
    <motion.circle 
      cx="120" cy="110" r="20" fill={color.indigo100} stroke={color.indigo500} strokeWidth="2"
      initial={{ scale: 0 }} whileInView={{ scale: 1 }} viewport={{ once: true }} transition={{ delay: 0.3 }}
    />
    <path d="M112 110 L 118 116 L 128 104" fill="none" stroke={color.indigo600} strokeWidth="3" />
  </svg>
);

// 4. Fraud Protection (Warning)
const SvgFraudWarn = ({ className }) => (
  <svg viewBox="0 0 200 150" className={className} xmlns="http://www.w3.org/2000/svg">
    <path d="M100 30 L 150 120 H 50 Z" fill={color.rose100} stroke={color.rose500} strokeWidth="3" />
    <text x="100" y="95" fontSize="40" fill={color.rose600} fontWeight="bold" textAnchor="middle">!</text>
    <motion.circle 
      cx="100" cy="30" r="5" fill={color.rose500}
      animate={{ opacity: [0, 1, 0] }} transition={{ duration: 1, repeat: Infinity }}
    />
  </svg>
);

// 5. Contract / Agreement
const SvgContract = ({ className }) => (
  <svg viewBox="0 0 200 150" className={className} xmlns="http://www.w3.org/2000/svg">
    <rect x="50" y="30" width="100" height="90" rx="2" fill={color.amber50} stroke={color.amber300} strokeWidth="2" />
    <path d="M60 50 H 140 M 60 70 H 140 M 60 90 H 100" stroke={color.amber700} strokeWidth="2" />
    
    {/* Pen */}
    <motion.g 
      transform="translate(120, 100)"
      animate={{ x: [0, 5, 0], y: [0, 2, 0], rotate: [0, -5, 0] }}
      transition={{ duration: 2, repeat: Infinity }}
    >
      <path d="M0 0 L 5 20 L -5 20 Z" fill={color.slate800} />
      <rect x="-5" y="-30" width="10" height="30" fill={color.indigo600} />
    </motion.g>
  </svg>
);

// 6. Privacy Rights (Eye/Lock)
const SvgPrivacyRights = ({ className }) => (
  <svg viewBox="0 0 200 150" className={className} xmlns="http://www.w3.org/2000/svg">
    <path d="M50 75 Q 100 20, 150 75 Q 100 130, 50 75" fill={color.white} stroke={color.slate300} strokeWidth="2" />
    <circle cx="100" cy="75" r="20" fill={color.slate800} />
    
    <motion.g transform="translate(100, 75)" initial={{ scale: 0 }} whileInView={{ scale: 1 }} viewport={{ once: true }} transition={{ delay: 0.3 }}>
      <rect x="-15" y="-10" width="30" height="25" rx="2" fill={color.emerald500} />
      <path d="M-10 -10 V -15 C -10 -22, 10 -22, 10 -15 V -10" stroke={color.emerald500} strokeWidth="3" fill="none" />
      <circle cx="0" cy="2" r="3" fill={color.white} />
    </motion.g>
  </svg>
);

// 7. Harassment (Stop Hand)
const SvgStopHarassment = ({ className }) => (
  <svg viewBox="0 0 200 150" className={className} xmlns="http://www.w3.org/2000/svg">
    <circle cx="100" cy="75" r="50" fill={color.rose600} />
    <motion.path 
      d="M80 50 H 90 V 100 H 80 Z M 110 50 H 120 V 100 H 110 Z" 
      fill={color.white}
      initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ delay: 0.2 }}
    />
    <path d="M70 75 H 130" stroke={color.white} strokeWidth="15" />
  </svg>
);

// 8. Filing Complaint (Form)
const SvgFileComplaint = ({ className }) => (
  <svg viewBox="0 0 200 150" className={className} xmlns="http://www.w3.org/2000/svg">
    <rect x="60" y="30" width="80" height="100" rx="2" fill={color.white} stroke={color.slate400} strokeWidth="2" />
    <rect x="70" y="40" width="20" height="20" fill={color.slate200} />
    <path d="M100 45 H 130 M 70 70 H 130 M 70 85 H 130 M 70 100 H 110" stroke={color.slate400} strokeWidth="2" />
    
    <motion.g transform="translate(130, 110)" initial={{ y: -20, opacity: 0 }} whileInView={{ y: 0, opacity: 1 }} viewport={{ once: true }}>
      <polygon points="0,0 10,-10 25,5 10,15" fill={color.emerald500} />
    </motion.g>
  </svg>
);

// 9. Digital Evidence (Magnify)
const SvgDigitalEvidence = ({ className }) => (
  <svg viewBox="0 0 200 150" className={className} xmlns="http://www.w3.org/2000/svg">
    <g transform="translate(50, 40)">
      <rect x="0" y="0" width="30" height="30" fill={color.cyan200} />
      <rect x="40" y="0" width="30" height="30" fill={color.slate200} />
      <rect x="0" y="40" width="30" height="30" fill={color.slate200} />
      <rect x="40" y="40" width="30" height="30" fill={color.indigo200} />
    </g>
    
    <motion.g transform="translate(100, 80) rotate(-45)" initial={{ x: 20 }} whileInView={{ x: 0 }} viewport={{ once: true }}>
      <circle cx="0" cy="0" r="30" fill="none" stroke={color.slate700} strokeWidth="5" />
      <line x1="0" y1="30" x2="0" y2="60" stroke={color.slate700} strokeWidth="8" strokeLinecap="round" />
      <circle cx="0" cy="0" r="25" fill={color.white} opacity="0.3" />
    </motion.g>
  </svg>
);

// 10. Compliance (Checklist)
const SvgCompliance = ({ className }) => (
  <svg viewBox="0 0 200 150" className={className} xmlns="http://www.w3.org/2000/svg">
    <rect x="50" y="20" width="100" height="110" rx="5" fill={color.white} stroke={color.indigo200} strokeWidth="2" />
    <circle cx="100" cy="40" r="15" fill={color.indigo100} />
    
    {[0, 1, 2].map((i) => (
      <g key={i} transform={`translate(70, ${70 + i * 25})`}>
        <motion.rect 
          width="10" height="10" rx="2" fill={color.emerald500}
          initial={{ scale: 0 }} whileInView={{ scale: 1 }} viewport={{ once: true }} transition={{ delay: i * 0.2 }}
        />
        <rect x="20" y="2" width="50" height="6" rx="2" fill={color.slate300} />
      </g>
    ))}
  </svg>
);

// 11. Identity Support (ID Card)
const SvgIdSupport = ({ className }) => (
  <svg viewBox="0 0 200 150" className={className} xmlns="http://www.w3.org/2000/svg">
    <rect x="40" y="40" width="120" height="80" rx="5" fill={color.cyan50} stroke={color.cyan600} strokeWidth="2" />
    <rect x="50" y="50" width="30" height="30" fill={color.slate300} />
    <rect x="90" y="55" width="60" height="5" fill={color.slate400} />
    <rect x="90" y="65" width="40" height="5" fill={color.slate400} />
    
    <motion.circle cx="150" cy="110" r="20" fill={color.emerald500} initial={{ scale: 0 }} whileInView={{ scale: 1 }} viewport={{ once: true }} />
    <path d="M142 110 L 148 116 L 158 104" fill="none" stroke={color.white} strokeWidth="3" />
  </svg>
);

// 12. Blackmail (Lock/Threat)
const SvgBlackmail = ({ className }) => (
  <svg viewBox="0 0 200 150" className={className} xmlns="http://www.w3.org/2000/svg">
    <rect x="50" y="40" width="100" height="70" rx="5" fill={color.slate800} />
    <path d="M50 40 L 100 70 L 150 40" fill="none" stroke={color.slate600} strokeWidth="2" />
    
    <motion.g transform="translate(100, 75)" animate={{ scale: [1, 1.2, 1] }} transition={{ duration: 1, repeat: Infinity }}>
      <circle r="15" fill={color.rose600} />
      <path d="M-5 5 L 5 -5 M -5 -5 L 5 5" stroke={color.white} strokeWidth="3" />
    </motion.g>
  </svg>
);

// 13. Women Safety (Symbol)
const SvgWomenSafety = ({ className }) => (
  <svg viewBox="0 0 200 150" className={className} xmlns="http://www.w3.org/2000/svg">
    <circle cx="100" cy="60" r="30" fill="none" stroke={color.pink600} strokeWidth="4" />
    <line x1="100" y1="90" x2="100" y2="130" stroke={color.pink600} strokeWidth="4" />
    <line x1="80" y1="110" x2="120" y2="110" stroke={color.pink600} strokeWidth="4" />
    
    <motion.circle 
      cx="100" cy="60" r="40" fill="none" stroke={color.pink300} strokeWidth="2"
      animate={{ scale: [1, 1.2], opacity: [1, 0] }} transition={{ duration: 2, repeat: Infinity }}
    />
  </svg>
);

// 14. Child Protection
const SvgChildProtection = ({ className }) => (
  <svg viewBox="0 0 200 150" className={className} xmlns="http://www.w3.org/2000/svg">
    <circle cx="100" cy="100" r="20" fill={color.amber300} />
    <path d="M60 100 A 40 40 0 0 1 140 100" fill="none" stroke={color.indigo500} strokeWidth="6" strokeLinecap="round" />
    <motion.path 
      d="M100 40 L 110 55 L 90 55 Z" fill={color.emerald500}
      animate={{ y: [0, 5, 0] }} transition={{ duration: 1, repeat: Infinity }}
    />
  </svg>
);

// 15. Consumer Rights
const SvgConsumer = ({ className }) => (
  <svg viewBox="0 0 200 150" className={className} xmlns="http://www.w3.org/2000/svg">
    <path d="M60 60 L 90 30 L 140 30 L 140 80 L 60 80 Z" fill={color.slate200} />
    <rect x="70" y="40" width="60" height="40" fill={color.white} stroke={color.slate400} />
    <text x="85" y="65" fontSize="20" fill={color.slate700}>%</text>
    
    <motion.circle cx="130" cy="90" r="15" fill={color.emerald500} initial={{ scale: 0 }} whileInView={{ scale: 1 }} viewport={{ once: true }} />
    <path d="M125 90 L 128 93 L 135 87" stroke={color.white} strokeWidth="2" fill="none" />
  </svg>
);

// 16. Data Breach
const SvgDataBreach = ({ className }) => (
  <svg viewBox="0 0 200 150" className={className} xmlns="http://www.w3.org/2000/svg">
    <rect x="50" y="30" width="100" height="80" rx="5" fill={color.slate800} />
    <path d="M50 30 L 100 110 L 150 30" fill={color.slate700} opacity="0.5" />
    <motion.path 
      d="M80 110 L 100 130 L 120 110" stroke={color.rose500} strokeWidth="4" fill="none"
      animate={{ y: [0, 5, 0] }} transition={{ duration: 1, repeat: Infinity }}
    />
    <rect x="95" y="130" width="10" height="10" fill={color.rose500} />
  </svg>
);

// 17. Workplace Misconduct
const SvgWorkplace = ({ className }) => (
  <svg viewBox="0 0 200 150" className={className} xmlns="http://www.w3.org/2000/svg">
    <rect x="40" y="40" width="120" height="80" fill={color.white} stroke={color.slate300} strokeWidth="2" />
    <rect x="50" y="50" width="40" height="30" fill={color.slate200} />
    <rect x="110" y="50" width="40" height="30" fill={color.slate200} />
    
    <motion.line 
      x1="90" y1="65" x2="110" y2="65" stroke={color.rose500} strokeWidth="2"
      animate={{ opacity: [0, 1, 0] }} transition={{ duration: 0.5, repeat: Infinity }}
    />
  </svg>
);

// 18. High Risk Preparedness
const SvgHighRisk = ({ className }) => (
  <svg viewBox="0 0 200 150" className={className} xmlns="http://www.w3.org/2000/svg">
    <path d="M100 20 L 160 120 H 40 Z" fill={color.amber100} stroke={color.amber500} strokeWidth="3" />
    <rect x="95" y="50" width="10" height="40" fill={color.amber600} />
    <circle cx="100" cy="105" r="6" fill={color.amber600} />
    <motion.path 
      d="M80 120 L 60 140 M 120 120 L 140 140" stroke={color.amber500} strokeWidth="2"
      animate={{ opacity: [0, 1, 0] }} transition={{ duration: 1, repeat: Infinity }}
    />
  </svg>
);

// 19. Ethical Operations
const SvgEthics = ({ className }) => (
  <svg viewBox="0 0 200 150" className={className} xmlns="http://www.w3.org/2000/svg">
    <circle cx="100" cy="75" r="50" fill={color.cyan50} stroke={color.cyan500} strokeWidth="2" />
    <path d="M100 35 V 115 M 60 75 H 140" stroke={color.cyan200} strokeWidth="1" />
    <motion.path 
      d="M70 75 L 90 95 L 130 55" fill="none" stroke={color.cyan600} strokeWidth="6" strokeLinecap="round"
      initial={{ pathLength: 0 }} whileInView={{ pathLength: 1 }} viewport={{ once: true }}
    />
  </svg>
);

// 20. Digital Community
const SvgCommunity = ({ className }) => (
  <svg viewBox="0 0 200 150" className={className} xmlns="http://www.w3.org/2000/svg">
    <circle cx="100" cy="75" r="20" fill={color.indigo500} />
    <circle cx="60" cy="75" r="15" fill={color.indigo300} />
    <circle cx="140" cy="75" r="15" fill={color.indigo300} />
    <circle cx="100" cy="35" r="15" fill={color.indigo300} />
    
    <motion.path 
      d="M100 75 L 60 75 M 100 75 L 140 75 M 100 75 L 100 35" stroke={color.indigo200} strokeWidth="2"
      initial={{ pathLength: 0 }} whileInView={{ pathLength: 1 }} viewport={{ once: true }}
    />
  </svg>
);

// 21. Consent
const SvgConsent = ({ className }) => (
  <svg viewBox="0 0 200 150" className={className} xmlns="http://www.w3.org/2000/svg">
    <rect x="60" y="50" width="80" height="50" rx="5" fill={color.slate100} stroke={color.slate400} />
    <text x="100" y="80" textAnchor="middle" fontSize="12" fill={color.slate600}>AGREE?</text>
    <motion.g transform="translate(120, 90)" initial={{ scale: 0 }} whileInView={{ scale: 1 }} viewport={{ once: true }}>
      <circle r="15" fill={color.emerald500} />
      <path d="M-5 0 L 0 5 L 5 -5" stroke={color.white} strokeWidth="2" fill="none" />
    </motion.g>
  </svg>
);

// 22. Fake Jobs
const SvgFakeJobs = ({ className }) => (
  <svg viewBox="0 0 200 150" className={className} xmlns="http://www.w3.org/2000/svg">
    <rect x="50" y="40" width="100" height="70" rx="2" fill={color.white} stroke={color.slate300} />
    <rect x="60" y="50" width="40" height="10" fill={color.slate200} />
    <rect x="60" y="70" width="80" height="5" fill={color.slate200} />
    
    <motion.path 
      d="M50 40 L 150 110 M 150 40 L 50 110" stroke={color.rose500} strokeWidth="4" opacity="0.7"
      initial={{ pathLength: 0 }} whileInView={{ pathLength: 1 }} viewport={{ once: true }}
    />
  </svg>
);

// 23. Creators
const SvgCreators = ({ className }) => (
  <svg viewBox="0 0 200 150" className={className} xmlns="http://www.w3.org/2000/svg">
    <circle cx="100" cy="75" r="40" fill="none" stroke={color.purple400} strokeWidth="2" />
    <polygon points="85,60 85,90 125,75" fill={color.purple500} />
    <motion.circle cx="140" cy="40" r="5" fill={color.amber400} animate={{ scale: [1, 1.5, 1] }} transition={{ duration: 1, repeat: Infinity }} />
  </svg>
);

// 24. Doxxing
const SvgDoxxing = ({ className }) => (
  <svg viewBox="0 0 200 150" className={className} xmlns="http://www.w3.org/2000/svg">
    <rect x="60" y="40" width="80" height="70" rx="5" fill={color.slate800} />
    <path d="M100 75 L 140 110" stroke={color.rose500} strokeWidth="2" strokeDasharray="5 5" />
    <circle cx="100" cy="75" r="20" fill={color.white} opacity="0.1" />
    <motion.text x="100" y="80" textAnchor="middle" fill={color.rose500} fontSize="10" animate={{ opacity: [0, 1, 0] }} transition={{ duration: 1, repeat: Infinity }}>LEAK</motion.text>
  </svg>
);

// 25. Seniors
const SvgSeniors = ({ className }) => (
  <svg viewBox="0 0 200 150" className={className} xmlns="http://www.w3.org/2000/svg">
    <circle cx="100" cy="60" r="30" fill={color.slate300} />
    <path d="M70 100 Q 100 130 130 100 V 130 H 70 Z" fill={color.slate400} />
    <rect x="90" y="60" width="20" height="5" rx="2" fill={color.slate500} />
    <motion.circle cx="140" cy="50" r="10" fill={color.emerald400} initial={{ scale: 0 }} whileInView={{ scale: 1 }} viewport={{ once: true }} />
    <path d="M137 50 L 140 53 L 145 47" stroke={color.white} strokeWidth="2" fill="none" />
  </svg>
);

// Map SVGs
const getSvgComponent = (id) => {
  const lowerId = id.toLowerCase();
  if (lowerId.includes('awareness') && !lowerId.includes('cyber')) return SvgLawBooks;
  if (lowerId.includes('cyber') && lowerId.includes('guidance')) return SvgCyberShield;
  if (lowerId.includes('it act')) return SvgItAct;
  if (lowerId.includes('fraud') || lowerId.includes('financial')) return SvgFraudWarn;
  if (lowerId.includes('contract')) return SvgContract;
  if (lowerId.includes('privacy')) return SvgPrivacyRights;
  if (lowerId.includes('harassment')) return SvgStopHarassment;
  if (lowerId.includes('filing') || lowerId.includes('complaint')) return SvgFileComplaint;
  if (lowerId.includes('evidence')) return SvgDigitalEvidence;
  if (lowerId.includes('compliance')) return SvgCompliance;
  if (lowerId.includes('identity')) return SvgIdSupport;
  if (lowerId.includes('blackmail')) return SvgBlackmail;
  if (lowerId.includes('women')) return SvgWomenSafety;
  if (lowerId.includes('children') || lowerId.includes('teen')) return SvgChildProtection;
  if (lowerId.includes('consumer')) return SvgConsumer;
  if (lowerId.includes('breach')) return SvgDataBreach;
  if (lowerId.includes('workplace')) return SvgWorkplace;
  if (lowerId.includes('risk')) return SvgHighRisk;
  if (lowerId.includes('ethical')) return SvgEthics;
  if (lowerId.includes('community')) return SvgCommunity;
  if (lowerId.includes('consent')) return SvgConsent;
  if (lowerId.includes('job')) return SvgFakeJobs;
  if (lowerId.includes('creator')) return SvgCreators;
  if (lowerId.includes('doxxing')) return SvgDoxxing;
  if (lowerId.includes('senior')) return SvgSeniors;
  
  return SvgLawBooks; // Default
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

        <div
          className={`${
            reverse ? "md:order-1" : "md:order-2"
          } min-w-0 py-2`}
        >
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
export default function LegalSupport() {
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
    const total = Math.ceil(legalSupportData.length / ITEMS_PER_PAGE);
    const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
    const endIndex = startIndex + ITEMS_PER_PAGE;
    return {
      currentSections: legalSupportData.slice(startIndex, endIndex),
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
      <motion.nav
        variants={itemUp}
        className="text-xs sm:text-sm text-gray-500 mb-3 sm:mb-4"
      >
        <Link to="/" className="hover:underline text-indigo-600">
          Home
        </Link>
        <span aria-hidden="true"> › </span>
        
        <span aria-hidden="true"> › </span>
        <span className="text-gray-700" aria-current="page">
          Legal Support
        </span>
      </motion.nav>

      {/* Hero */}
      <div
        ref={heroRef}
        className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-6 md:gap-8 lg:gap-10 items-center"
      >
        <motion.div variants={itemUp}>
          <h1 className="text-[22px] sm:text-3xl font-bold text-gray-900">
            {data.title}
          </h1>
          <p className="mt-2 text-base md:text-lg text-cyan-700 max-w-2xl">
            {data.tagline}
          </p>
          <div className="mt-3 sm:mt-4 flex flex-wrap gap-2">
            {["Law", "Protection", "Justice"].map((pill) => (
              <span
                key={pill}
                className="px-2.5 sm:px-3 py-1.5 text-xs sm:text-sm rounded-full bg-cyan-100 text-cyan-800 border border-cyan-200"
              >
                {pill}
              </span>
            ))}
          </div>
        </motion.div>

        <motion.div style={{ y: heroY }} className="relative">
          <div
            className="absolute -inset-2 rounded-2xl bg-gradient-to-tr from-cyan-100 via-indigo-100 to-emerald-100 blur-md sm:blur-lg md:blur-xl"
            aria-hidden="true"
          />
          <div className="relative rounded-2xl border border-gray-200 bg-white p-3 sm:p-4 shadow-sm">
            <div className="w-full h-auto max-h-72 sm:max-h-80 md:max-h-none overflow-hidden rounded-lg">
              <VideoHeroLegal
                src="https://cdn.coverr.co/videos/coverr-writing-on-a-legal-pad-4545/1080p.mp4" 
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
              const SVGComp = getSvgComponent(section.id);
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