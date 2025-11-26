// src/pages/prevention/CyberCrimePreventions.jsx
import React, { useRef } from "react";
import { Link } from "react-router-dom"; // Assuming react-router-dom is used
import {
  motion,
  useReducedMotion,
  useScroll,
  useTransform,
  useSpring,
} from "framer-motion";

// !!======================================================================!!
// !!  YOU MUST FIX THIS IMPORT PATH TO MATCH YOUR PROJECT'S FOLDER STRUCTURE  !!
// !!======================================================================!!
import { cyberCrimePreventionsData } from "../../data/induxData/cyberCrimePreventionsData.js";

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
  title: "Cyber Crime Prevention",
  tagline: "Building a proactive culture of digital safety through education, awareness, and robust hygiene.",
};

/* -------------------------- HERO: Video SVG (inline) -------------------------- */
/* Scene: A futuristic digital shield/firewall repelling attacks and protecting a core data sphere. */

const PreventionOverlay = () => {
  const shouldReduce = useReducedMotion();
  
  return (
    <g transform="translate(680, 50)">
      {/* Central Protected Core */}
      <motion.circle 
        cx="150" cy="150" r="60" 
        fill="url(#gradShield)" opacity="0.9"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.8, type: "spring" }}
      />
      
      {/* Rotating Shield Layers */}
      {!shouldReduce && (
        <>
          <motion.path 
            d="M150 30 A 120 120 0 0 1 150 270 A 120 120 0 0 1 150 30"
            fill="none" stroke={color.cyan300} strokeWidth="4" strokeDasharray="40 20"
            animate={{ rotate: 360 }}
            transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
            style={{ originX: "150px", originY: "150px" }}
          />
          <motion.path 
            d="M150 10 A 140 140 0 0 0 150 290 A 140 140 0 0 0 150 10"
            fill="none" stroke={color.indigo400} strokeWidth="2" strokeDasharray="10 10"
            animate={{ rotate: -360 }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            style={{ originX: "150px", originY: "150px" }}
          />
        </>
      )}

      {/* Incoming Threats (Repelled) */}
      {[
        { x: 20, y: 50, dx: 20, dy: 20, delay: 0 },
        { x: 280, y: 20, dx: -20, dy: 20, delay: 1 },
        { x: 20, y: 250, dx: 20, dy: -20, delay: 2 },
        { x: 280, y: 280, dx: -20, dy: -20, delay: 3 },
      ].map((t, i) => (
        <motion.g key={i}
          initial={{ x: t.x, y: t.y, opacity: 0 }}
          animate={{ 
            x: [t.x, t.x + t.dx], 
            y: [t.y, t.y + t.dy],
            opacity: [0, 1, 0] 
          }}
          transition={{ duration: 2, repeat: Infinity, delay: t.delay }}
        >
          <circle r="4" fill={color.rose500} />
          <path d={`M0 0 L${-t.dx} ${-t.dy}`} stroke={color.rose500} strokeWidth="1" />
        </motion.g>
      ))}

      {/* Shield Impact Ripple */}
      <motion.circle 
        cx="150" cy="150" r="120" 
        fill="none" stroke={color.cyan100} strokeWidth="2"
        initial={{ scale: 1, opacity: 0 }}
        animate={{ scale: 1.1, opacity: [0, 0.5, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      />
    </g>
  );
};

const VideoHeroPrevention = ({ src = "", poster = "" }) => {
  const shouldReduce = useReducedMotion();
  const title = "CRCCF Prevention Hero";
  const desc = "A digital shield protecting data from cyber threats.";

  if (shouldReduce || !src) {
    return (
      <svg viewBox="0 0 1000 420" role="img" aria-labelledby="phTitle phDesc" className="w-full h-auto">
        <title id="phTitle">{title}</title>
        <desc id="phDesc">{desc}</desc>
        <defs>
          <linearGradient id="phGrad" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor={color.slate900} />
            <stop offset="100%" stopColor={color.cyan900} />
          </linearGradient>
          <linearGradient id="gradShield" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor={color.cyan400} />
            <stop offset="100%" stopColor={color.indigo600} />
          </linearGradient>
        </defs>
        <rect width="100%" height="100%" fill="url(#phGrad)" rx="20" />
        <PreventionOverlay />
      </svg>
    );
  }

  return (
    <svg viewBox="0 0 1000 420" className="w-full h-auto block" role="img" aria-label={title}>
      <defs>
        <linearGradient id="phBG" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor={color.slate900} />
          <stop offset="100%" stopColor={color.cyan900} />
        </linearGradient>
        <linearGradient id="gradShield" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor={color.cyan400} />
          <stop offset="100%" stopColor={color.indigo600} />
        </linearGradient>
        <mask id="phMask">
          <rect width="100%" height="100%" fill="white" />
          <PreventionOverlay />
        </mask>
      </defs>
      
      <rect width="100%" height="100%" fill="url(#phBG)" rx="20" />
      
      <foreignObject x="0" y="0" width="1000" height="420" mask="url(#phMask)">
        <video
          src={src}
          poster={poster || undefined}
          autoPlay
          muted
          playsInline
          loop
          preload="metadata"
          crossOrigin="anonymous"
          style={{ width: "100%", height: "100%", objectFit: "cover", opacity: 0.6 }}
          onError={(e) => { e.currentTarget.style.display = "none"; }}
        >
          <source src={src} type="video/mp4" />
        </video>
      </foreignObject>

      <PreventionOverlay />
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

/* ------------------------ 10 Unique Section SVGs ------------------------ */

// 1. Safe Practices (Digital Habits)
const SvgSafePractices = ({ className }) => (
  <svg viewBox="0 0 400 300" className={className} xmlns="http://www.w3.org/2000/svg">
    <BG id="gradSafe" stops={[{ offset: "0%", color: color.cyan50 }, { offset: "100%", color: color.indigo100 }]} />
    <rect width="400" height="300" rx="20" fill="url(#gradSafe)" />
    
    {/* Abstract User interacting with secure nodes */}
    <g transform="translate(100, 150)">
      <motion.circle cx="0" cy="0" r="40" fill={color.indigo500} initial={{ scale: 0 }} whileInView={{ scale: 1 }} viewport={{ once: true }} transition={{ type: "spring" }} />
      <motion.path d="M0 -60 V -100 M 60 0 H 100 M 0 60 V 100 M -60 0 H -100" stroke={color.indigo300} strokeWidth="2" strokeDasharray="5 5" />
      
      {/* Satellite Nodes */}
      <motion.circle cx="0" cy="-100" r="15" fill={color.cyan400} animate={{ scale: [1, 1.2, 1] }} transition={{ duration: 2, repeat: Infinity }} />
      <motion.circle cx="100" cy="0" r="15" fill={color.emerald400} animate={{ scale: [1, 1.2, 1] }} transition={{ duration: 2, delay: 0.5, repeat: Infinity }} />
      <motion.circle cx="0" cy="100" r="15" fill={color.amber400} animate={{ scale: [1, 1.2, 1] }} transition={{ duration: 2, delay: 1, repeat: Infinity }} />
      <motion.circle cx="-100" cy="0" r="15" fill={color.rose400} animate={{ scale: [1, 1.2, 1] }} transition={{ duration: 2, delay: 1.5, repeat: Infinity }} />
    </g>
  </svg>
);

// 2. Social Media Safety
const SvgSocialSafety = ({ className }) => (
  <svg viewBox="0 0 400 300" className={className} xmlns="http://www.w3.org/2000/svg">
    <BG id="gradSocial" stops={[{ offset: "0%", color: color.indigo50 }, { offset: "100%", color: color.rose50 }]} />
    <rect width="400" height="300" rx="20" fill="url(#gradSocial)" />
    
    {/* Profile Card with Privacy Shield */}
    <g transform="translate(120, 60)">
      <Card x="0" y="0" w="160" h="180" r="10" fill={color.white} stroke={color.slate200} />
      <circle cx="80" cy="60" r="30" fill={color.slate300} />
      <rect x="40" y="100" width="80" height="10" rx="5" fill={color.slate200} />
      <rect x="50" y="120" width="60" height="8" rx="4" fill={color.slate200} />
      
      {/* Shield Overlay */}
      <motion.path 
        d="M140 140 L 160 160 L 180 140" stroke={color.emerald500} strokeWidth="4" fill="none" 
        initial={{ pathLength: 0 }} whileInView={{ pathLength: 1 }} viewport={{ once: true }}
      />
      <motion.path 
        d="M80 20 C 20 40, 20 160, 80 180 C 140 160, 140 40, 80 20" 
        fill="none" stroke={color.emerald500} strokeWidth="4"
        initial={{ pathLength: 0 }} whileInView={{ pathLength: 1 }} viewport={{ once: true }} transition={{ duration: 1 }}
      />
    </g>
  </svg>
);

// 3. Women & Children Protection
const SvgProtection = ({ className }) => (
  <svg viewBox="0 0 400 300" className={className} xmlns="http://www.w3.org/2000/svg">
    <BG id="gradProtect" stops={[{ offset: "0%", color: color.rose50 }, { offset: "100%", color: color.indigo50 }]} />
    <rect width="400" height="300" rx="20" fill="url(#gradProtect)" />
    
    {/* Umbrella/Dome Concept */}
    <g transform="translate(200, 250)">
      <motion.path 
        d="M-120 0 A 120 120 0 0 1 120 0" 
        fill="none" stroke={color.indigo500} strokeWidth="8"
        initial={{ pathLength: 0 }} whileInView={{ pathLength: 1 }} viewport={{ once: true }} transition={{ duration: 1 }}
      />
      <path d="M0 -120 V 0" stroke={color.indigo200} strokeWidth="2" strokeDasharray="5 5" />
      
      {/* Figures under protection */}
      <circle cx="-40" cy="-20" r="20" fill={color.rose300} />
      <rect x="-50" y="0" width="20" height="40" fill={color.rose300} />
      <circle cx="40" cy="-10" r="15" fill={color.cyan300} />
      <rect x="30" y="5" width="20" height="35" fill={color.cyan300} />
    </g>
  </svg>
);

// 4. Fraud Prevention
const SvgFraudPrevention = ({ className }) => (
  <svg viewBox="0 0 400 300" className={className} xmlns="http://www.w3.org/2000/svg">
    <BG id="gradFraud" stops={[{ offset: "0%", color: color.amber50 }, { offset: "100%", color: color.slate100 }]} />
    <rect width="400" height="300" rx="20" fill="url(#gradFraud)" />
    
    {/* Magnifying Glass finding a fake coin */}
    <g transform="translate(150, 100)">
      <circle cx="0" cy="0" r="40" fill={color.amber300} stroke={color.amber500} strokeWidth="2" />
      <text x="0" y="10" textAnchor="middle" fontSize="24" fill={color.amber700} fontWeight="bold">$</text>
      
      <motion.g 
        transform="translate(30, -30)"
        initial={{ x: 50, y: -50 }} whileInView={{ x: 0, y: 0 }} viewport={{ once: true }} transition={{ type: "spring" }}
      >
        <circle cx="0" cy="0" r="50" fill={color.cyan100} opacity="0.5" stroke={color.cyan500} strokeWidth="5" />
        <line x1="35" y1="35" x2="80" y2="80" stroke={color.cyan500} strokeWidth="10" strokeLinecap="round" />
        <path d="M-20 -20 L 20 20 M 20 -20 L -20 20" stroke={color.rose500} strokeWidth="5" />
      </motion.g>
    </g>
  </svg>
);

// 5. Cyber Hygiene
const SvgCyberHygiene = ({ className }) => (
  <svg viewBox="0 0 400 300" className={className} xmlns="http://www.w3.org/2000/svg">
    <BG id="gradHygiene" stops={[{ offset: "0%", color: color.emerald50 }, { offset: "100%", color: color.cyan50 }]} />
    <rect width="400" height="300" rx="20" fill="url(#gradHygiene)" />
    
    {/* Cleaning/Securing Data */}
    <g transform="translate(130, 80)">
      <Card x="0" y="0" w="140" h="160" r="10" fill={color.white} stroke={color.slate300} />
      <rect x="20" y="20" width="100" height="10" rx="2" fill={color.slate200} />
      <rect x="20" y="40" width="80" height="10" rx="2" fill={color.slate200} />
      
      {/* Scrubbing animation */}
      <motion.g 
        animate={{ x: [0, 40, 0], rotate: [0, 10, 0] }} 
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
      >
        <rect x="40" y="80" width="60" height="40" rx="5" fill={color.emerald400} />
        <rect x="40" y="120" width="60" height="10" fill={color.emerald600} />
        <line x1="70" y1="100" x2="70" y2="180" stroke={color.emerald700} strokeWidth="5" />
      </motion.g>
      
      {/* Sparkles */}
      <motion.path d="M10 100 L 20 90 M 130 50 L 140 40" stroke={color.amber400} strokeWidth="2" animate={{ opacity: [0, 1, 0] }} transition={{ duration: 1, repeat: Infinity }} />
    </g>
  </svg>
);

// 6. Device Safety
const SvgDeviceSafety = ({ className }) => (
  <svg viewBox="0 0 400 300" className={className} xmlns="http://www.w3.org/2000/svg">
    <BG id="gradDevice" stops={[{ offset: "0%", color: color.slate100 }, { offset: "100%", color: color.slate300 }]} />
    <rect width="400" height="300" rx="20" fill="url(#gradDevice)" />
    
    <g transform="translate(150, 60)">
      <rect x="0" y="0" width="100" height="180" rx="10" fill={color.slate800} />
      <rect x="5" y="5" width="90" height="170" rx="5" fill={color.black} />
      
      {/* Forcefield */}
      <motion.circle 
        cx="50" cy="90" r="80" 
        fill="none" stroke={color.cyan400} strokeWidth="2"
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1.1, opacity: [0.5, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      />
      <circle cx="50" cy="90" r="60" fill="none" stroke={color.cyan400} strokeWidth="3" strokeDasharray="10 5" />
      
      {/* Blocked Bug */}
      <g transform="translate(120, 50)">
        <circle cx="0" cy="0" r="10" fill={color.rose500} />
        <path d="M-10 -10 L 10 10 M 10 -10 L -10 10" stroke={color.rose500} strokeWidth="2" />
      </g>
    </g>
  </svg>
);

// 7. Secure Internet
const SvgSecureNet = ({ className }) => (
  <svg viewBox="0 0 400 300" className={className} xmlns="http://www.w3.org/2000/svg">
    <BG id="gradNet" stops={[{ offset: "0%", color: color.cyan50 }, { offset: "100%", color: color.white }]} />
    <rect width="400" height="300" rx="20" fill="url(#gradNet)" />
    
    <g transform="translate(200, 150)">
      {/* Globe */}
      <circle cx="0" cy="0" r="60" fill={color.indigo100} stroke={color.indigo300} />
      <path d="M-60 0 H 60 M 0 -60 V 60" stroke={color.indigo300} fill="none" />
      <ellipse cx="0" cy="0" rx="30" ry="60" fill="none" stroke={color.indigo300} />
      
      {/* Lock on Globe */}
      <motion.rect 
        x="-15" y="-10" width="30" height="20" rx="3" fill={color.emerald500}
        initial={{ scale: 0 }} whileInView={{ scale: 1 }} viewport={{ once: true }} transition={{ type: "spring" }}
      />
      <path d="M-5 -10 V -15 C -5 -20, 5 -20, 5 -15 V -10" fill="none" stroke={color.emerald500} strokeWidth="4" />
      
      {/* Orbiting data */}
      <motion.circle cx="80" cy="0" r="5" fill={color.cyan500} animate={{ rotate: 360 }} transition={{ duration: 5, repeat: Infinity, ease: "linear" }} style={{ originX: "-80px", originY: "0px" }} />
    </g>
  </svg>
);

// 8. Reporting/Action
const SvgReporting = ({ className }) => (
  <svg viewBox="0 0 400 300" className={className} xmlns="http://www.w3.org/2000/svg">
    <BG id="gradReport" stops={[{ offset: "0%", color: color.rose50 }, { offset: "100%", color: color.slate200 }]} />
    <rect width="400" height="300" rx="20" fill="url(#gradReport)" />
    
    <g transform="translate(160, 100)">
      {/* Emergency Button */}
      <circle cx="40" cy="40" r="50" fill={color.rose600} />
      <circle cx="40" cy="40" r="40" fill="none" stroke={color.white} strokeWidth="2" />
      <text x="40" y="55" textAnchor="middle" fontSize="40" fill={color.white} fontWeight="bold">!</text>
      
      {/* Pulse */}
      <motion.circle 
        cx="40" cy="40" r="50" 
        fill="none" stroke={color.rose400} strokeWidth="4"
        animate={{ scale: 1.5, opacity: 0 }}
        transition={{ duration: 1.5, repeat: Infinity }}
      />
    </g>
  </svg>
);

// 9. Awareness Programs
const SvgAwareness = ({ className }) => (
  <svg viewBox="0 0 400 300" className={className} xmlns="http://www.w3.org/2000/svg">
    <BG id="gradAware" stops={[{ offset: "0%", color: color.amber50 }, { offset: "100%", color: color.emerald50 }]} />
    <rect width="400" height="300" rx="20" fill="url(#gradAware)" />
    
    <g transform="translate(120, 100)">
      {/* Board */}
      <rect x="0" y="0" width="160" height="100" rx="5" fill={color.slate700} />
      <rect x="5" y="5" width="150" height="90" fill={color.emerald800} />
      <path d="M20 30 L 40 50 L 80 20" fill="none" stroke={color.white} strokeWidth="4" />
      
      {/* People */}
      <g transform="translate(-40, 120)">
        <circle cx="0" cy="0" r="15" fill={color.slate500} />
        <circle cx="40" cy="10" r="15" fill={color.slate500} />
        <circle cx="80" cy="0" r="15" fill={color.slate500} />
        <circle cx="120" cy="10" r="15" fill={color.slate500} />
        <circle cx="160" cy="0" r="15" fill={color.slate500} />
        <circle cx="200" cy="10" r="15" fill={color.slate500} />
      </g>
    </g>
  </svg>
);

// 10. Future Vision
const SvgFutureVision = ({ className }) => (
  <svg viewBox="0 0 400 300" className={className} xmlns="http://www.w3.org/2000/svg">
    <BG id="gradFuture" stops={[{ offset: "0%", color: color.indigo100 }, { offset: "100%", color: color.cyan100 }]} />
    <rect width="400" height="300" rx="20" fill="url(#gradFuture)" />
    
    <g transform="translate(50, 250)">
      {/* City Skyline */}
      <path d="M0 0 L 0 -50 L 30 -50 L 30 -100 L 60 -100 L 60 -40 L 90 -40 L 90 -150 L 120 -150 L 120 -60 L 150 -60 L 150 -200 L 180 -200 L 180 -80 L 210 -80 L 210 -120 L 240 -120 L 240 -30 L 300 -30 L 300 0 Z" fill={color.indigo300} />
      
      {/* Digital Grid Overlay */}
      <path d="M0 -220 H 300" stroke={color.cyan400} strokeWidth="1" opacity="0.5" />
      <path d="M0 -180 H 300" stroke={color.cyan400} strokeWidth="1" opacity="0.5" />
      
      {/* Rising Sun/Hope */}
      <motion.circle 
        cx="250" cy="-200" r="30" 
        fill={color.amber300}
        initial={{ y: 20, opacity: 0 }} whileInView={{ y: 0, opacity: 1 }} viewport={{ once: true }} transition={{ duration: 1 }}
      />
    </g>
  </svg>
);

// Map SVGs
const svgMap = {
  'sec1-promoting-safe-and-responsible-digital-practices': SvgSafePractices,
  'sec2-social-media-safety-and-online-reputation-protection': SvgSocialSafety,
  'sec3-protecting-women-children-and-vulnerable-users-online': SvgProtection,
  'sec4-fraud-scam-and-financial-crime-prevention': SvgFraudPrevention,
  'sec5-cyber-hygiene-and-personal-data-protection': SvgCyberHygiene,
  'sec6-device-safety-and-malware-prevention': SvgDeviceSafety,
  'sec7-secure-internet-usage-and-safe-communication': SvgSecureNet,
  'sec8-cybercrime-reporting-and-immediate-preventive-action': SvgReporting,
  'sec9-awareness-programs-for-schools-colleges-and-organisations': SvgAwareness,
  'sec10-building-a-safer-digital-future-for-everyone': SvgFutureVision,
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
    <section id={id} ref={ref} className="mt-8 sm:mt-10 md:mt-12 lg:mt-16">
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

/* ---------------------------------- Page ---------------------------------- */
export default function CyberCrimePreventions() {
  const { container, itemUp } = useAnims();
  const heroRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });
  const heroY = useTransform(scrollYProgress, [0, 1], [0, -40]);

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
        <Link to="/prevention" className="hover:underline text-indigo-600">
          prevention
        </Link>
        <span aria-hidden="true"> › </span>
        <span className="text-gray-700" aria-current="page">
          Cyber Crime Preventions
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
            {["Awareness", "Safety", "Protection"].map((pill) => (
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
              <VideoHeroPrevention
                src="https://cdn.coverr.co/videos/coverr-hands-typing-on-a-laptop-keyboard-4533/1080p.mp4" 
              />
            </div>
          </div>
        </motion.div>
      </div>

      {/* Sections */}
      <div className="mt-8 sm:mt-10 md:mt-12">
        {cyberCrimePreventionsData.map((sec, idx) => {
          const SVGComp = svgMap[sec.id] || SvgSafePractices;
          return (
            <SectionBlock
              key={sec.id}
              id={sec.id}
              title={sec.heading}
              content={sec.content}
              SVG={SVGComp}
              reverse={idx % 2 === 1}
            />
          );
        })}
      </div>
    </motion.section>
  );
}