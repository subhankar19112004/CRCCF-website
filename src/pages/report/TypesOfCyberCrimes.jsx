// src/pages/reportACyberCrime/TypesOfCyberCrimes.jsx
import React, { useState, useRef, useMemo } from "react";
import { Link } from "react-router-dom";
import {
  motion,
  useReducedMotion,
  useScroll,
  useTransform,
  useSpring,
  AnimatePresence,
} from "framer-motion";

// !!======================================================================!!
// !!  CHECK THIS IMPORT PATH MATCHES YOUR PROJECT STRUCTURE EXACTLY       !!
// !!======================================================================!!
import { typesOfCyberCrimesData } from "../../data/reportACyberCrime/typesOfCyberCrimesData";

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
// Theme: Cyber Threat Detection (Red/Cyan/Slate)
const color = {
  red50: "#FEF2F2",
  red100: "#FEE2E2",
  red200: "#FECACA",
  red400: "#F87171",
  red500: "#EF4444",
  red600: "#DC2626",
  red900: "#7F1D1D",
  cyan50: "#ECFEFF",
  cyan100: "#CFFAFE",
  cyan300: "#67E8F9",
  cyan400: "#22D3EE",
  cyan500: "#06B6D4",
  slate50: "#F8FAFC",
  slate100: "#F1F5F9",
  slate200: "#E2E8F0",
  slate300: "#CBD5E1",
  slate400: "#94A3B8",
  slate700: "#334155",
  slate800: "#1E293B",
  slate900: "#0F172A",
  white: "#FFFFFF",
  indigo100: "#E0E7FF",
  indigo300: "#A5B4FC",
  indigo500: "#6366F1",
};

/* -------------------------- HERO: Threat Radar SVG -------------------------- */
const ThreatRadarOverlay = () => {
  return (
    <g transform="translate(680, 50)">
      {/* Grid Background */}
      <defs>
        <pattern id="gridPat" width="40" height="40" patternUnits="userSpaceOnUse">
          <path d="M 40 0 L 0 0 0 40" fill="none" stroke={color.slate700} strokeWidth="0.5" opacity="0.3"/>
        </pattern>
      </defs>
      <rect width="300" height="300" fill="url(#gridPat)" />

      {/* Radar Rings */}
      <g transform="translate(150, 150)">
        <circle r="100" fill="none" stroke={color.slate600} strokeWidth="1" strokeDasharray="5 5" opacity="0.5" />
        <circle r="70" fill="none" stroke={color.slate600} strokeWidth="1" opacity="0.7" />
        <circle r="30" fill="none" stroke={color.red500} strokeWidth="2" opacity="0.8" />
        
        {/* Scanning Sweep */}
        <motion.g 
          animate={{ rotate: 360 }} 
          transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
        >
          <path d="M0 0 L 100 -20 A 100 100 0 0 1 100 20 Z" fill="url(#scanGrad)" opacity="0.2" />
          <line x1="0" y1="0" x2="100" y2="0" stroke={color.cyan400} strokeWidth="2" />
        </motion.g>

        {/* Threat Blips */}
        <motion.circle cx="60" cy="-40" r="4" fill={color.red500} animate={{ opacity: [0, 1, 0] }} transition={{ duration: 2, repeat: Infinity, delay: 0.5 }} />
        <motion.circle cx="-50" cy="60" r="4" fill={color.red500} animate={{ opacity: [0, 1, 0] }} transition={{ duration: 2, repeat: Infinity, delay: 1.5 }} />
        <motion.circle cx="-70" cy="-20" r="4" fill={color.red500} animate={{ opacity: [0, 1, 0] }} transition={{ duration: 2, repeat: Infinity, delay: 2.5 }} />
      </g>
      
      <defs>
        <linearGradient id="scanGrad" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor={color.cyan400} stopOpacity="0" />
          <stop offset="100%" stopColor={color.cyan400} stopOpacity="0.5" />
        </linearGradient>
      </defs>
    </g>
  );
};

const VideoHeroCyber = ({ src = "", poster = "" }) => {
  const shouldReduce = useReducedMotion();
  const title = "Cyber Threat Landscape";

  if (shouldReduce || !src) {
    return (
      <svg viewBox="0 0 1000 400" role="img" aria-label={title} className="w-full h-auto">
        <defs>
          <linearGradient id="heroGrad" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor={color.slate900} />
            <stop offset="100%" stopColor={color.slate800} />
          </linearGradient>
        </defs>
        <rect width="100%" height="100%" fill="url(#heroGrad)" rx="20" />
        <ThreatRadarOverlay />
      </svg>
    );
  }
  
  return (
    <svg viewBox="0 0 1000 400" className="w-full h-auto block" role="img" aria-label={title}>
      <defs>
        <linearGradient id="heroGrad" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor={color.slate900} />
          <stop offset="100%" stopColor={color.slate800} />
        </linearGradient>
        <mask id="heroMask">
          <rect width="100%" height="100%" fill="white" />
          <ThreatRadarOverlay />
        </mask>
      </defs>
      
      <rect width="100%" height="100%" fill="url(#heroGrad)" rx="20" />
      
      <foreignObject x="0" y="0" width="1000" height="400" mask="url(#heroMask)">
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

      <ThreatRadarOverlay />
    </svg>
  );
};

/* ------------------------ REUSABLE SVG LIBRARY (24 Items) ------------------------ */
const BG = ({ id, c1, c2 }) => (
  <defs><linearGradient id={id} x1="0" y1="0" x2="1" y2="1"><stop offset="0%" stopColor={c1} /><stop offset="100%" stopColor={c2} /></linearGradient></defs>
);

// 1. General Threat
const SvgAlert = ({ className }) => (
  <svg viewBox="0 0 100 100" className={className}>
    <BG id="gAlert" c1={color.red500} c2={color.red900} />
    <path d="M50 15 L 10 85 H 90 Z" fill="none" stroke="url(#gAlert)" strokeWidth="3" />
    <circle cx="50" cy="45" r="3" fill={color.red500} />
    <motion.rect x="47" y="55" width="6" height="20" fill={color.red500} animate={{ opacity: [1, 0.5, 1] }} transition={{ duration: 1, repeat: Infinity }} />
  </svg>
);

// 2. Identity
const SvgIdentity = ({ className }) => (
  <svg viewBox="0 0 100 100" className={className}>
    <BG id="gId" c1={color.cyan400} c2={color.slate900} />
    <path d="M30 30 H 70 V 70 H 30 Z" fill="none" stroke={color.cyan500} strokeWidth="1" strokeDasharray="4 2" />
    <circle cx="50" cy="50" r="15" fill={color.slate800} stroke={color.cyan400} />
    <motion.path d="M20 50 H 80" stroke={color.red500} strokeWidth="2" animate={{ y: [-20, 20, -20] }} transition={{ duration: 3, repeat: Infinity }} />
  </svg>
);

// 3. Financial
const SvgFinance = ({ className }) => (
  <svg viewBox="0 0 100 100" className={className}>
    <rect x="20" y="30" width="60" height="40" rx="4" fill={color.slate800} stroke={color.slate400} strokeWidth="2" />
    <circle cx="50" cy="50" r="10" fill="none" stroke={color.cyan400} strokeWidth="2" />
    <motion.path d="M45 45 L 55 55 M 55 45 L 45 55" stroke={color.red500} strokeWidth="2" animate={{ opacity: [0, 1, 0] }} transition={{ duration: 2, repeat: Infinity }} />
  </svg>
);

// 4. Social
const SvgSocial = ({ className }) => (
  <svg viewBox="0 0 100 100" className={className}>
    <circle cx="50" cy="40" r="10" fill={color.slate700} />
    <circle cx="30" cy="70" r="8" fill={color.slate700} />
    <circle cx="70" cy="70" r="8" fill={color.slate700} />
    <path d="M50 40 L 30 70 M 50 40 L 70 70" stroke={color.cyan500} strokeWidth="1" />
    <motion.circle cx="50" cy="40" r="12" stroke={color.red500} strokeWidth="1" fill="none" animate={{ scale: [1, 1.3], opacity: [1, 0] }} transition={{ duration: 2, repeat: Infinity }} />
  </svg>
);

// 5. Targeting
const SvgTarget = ({ className }) => (
  <svg viewBox="0 0 100 100" className={className}>
    <circle cx="50" cy="50" r="30" stroke={color.red500} strokeWidth="2" fill="none" />
    <line x1="50" y1="10" x2="50" y2="90" stroke={color.red500} strokeWidth="1" />
    <line x1="10" y1="50" x2="90" y2="50" stroke={color.red500} strokeWidth="1" />
    <motion.circle cx="50" cy="50" r="5" fill={color.red600} animate={{ opacity: [0.2, 1, 0.2] }} transition={{ duration: 1, repeat: Infinity }} />
  </svg>
);

// 6. Psychology
const SvgPsych = ({ className }) => (
  <svg viewBox="0 0 100 100" className={className}>
    <path d="M30 50 C 30 20, 70 20, 70 50 C 70 70, 50 80, 50 80 C 50 80, 30 70, 30 50" stroke={color.slate400} strokeWidth="2" fill="none" />
    <motion.path d="M40 40 L 60 50 L 45 60" stroke={color.cyan400} strokeWidth="2" fill="none" animate={{ pathLength: [0, 1] }} transition={{ duration: 2, repeat: Infinity }} />
  </svg>
);

// 7. Location
const SvgLocation = ({ className }) => (
  <svg viewBox="0 0 100 100" className={className}>
    <path d="M50 85 C 50 85, 20 50, 20 35 A 30 30 0 0 1 80 35 C 80 50, 50 85, 50 85 Z" fill={color.slate800} stroke={color.cyan500} strokeWidth="2" />
    <circle cx="50" cy="35" r="10" fill={color.red500} />
    <motion.circle cx="50" cy="35" r="20" stroke={color.red500} strokeWidth="1" fill="none" animate={{ scale: [1, 1.5], opacity: [1, 0] }} transition={{ duration: 1.5, repeat: Infinity }} />
  </svg>
);

// 8. Mobile Risk
const SvgMobile = ({ className }) => (
  <svg viewBox="0 0 100 100" className={className}>
    <rect x="35" y="20" width="30" height="60" rx="4" fill={color.slate800} stroke={color.slate500} strokeWidth="2" />
    <motion.circle cx="50" cy="35" r="3" fill={color.red500} animate={{ opacity: [0, 1, 0] }} transition={{ duration: 0.5, repeat: Infinity }} />
    <rect x="40" y="45" width="20" height="2" fill={color.slate600} />
  </svg>
);

// 9. AI
const SvgAI = ({ className }) => (
  <svg viewBox="0 0 100 100" className={className}>
    <rect x="30" y="30" width="40" height="40" rx="8" fill={color.slate900} stroke={color.cyan400} strokeWidth="2" />
    <circle cx="40" cy="45" r="4" fill={color.cyan400} />
    <circle cx="60" cy="45" r="4" fill={color.cyan400} />
    <motion.rect x="40" y="60" width="20" height="2" fill={color.red500} animate={{ width: [20, 10, 20] }} transition={{ duration: 2, repeat: Infinity }} />
  </svg>
);

// 10. Emotion
const SvgEmotion = ({ className }) => (
  <svg viewBox="0 0 100 100" className={className}>
    <path d="M50 80 L 20 50 A 15 15 0 0 1 50 30 A 15 15 0 0 1 80 50 Z" fill={color.slate800} stroke={color.red500} strokeWidth="2" />
    <motion.path d="M35 45 L 45 55 L 65 35" stroke={color.cyan400} strokeWidth="3" fill="none" animate={{ pathLength: [0, 1] }} transition={{ duration: 2, repeat: Infinity }} />
  </svg>
);

// 11. Communication
const SvgChat = ({ className }) => (
  <svg viewBox="0 0 100 100" className={className}>
    <rect x="20" y="20" width="50" height="40" rx="8" fill={color.slate200} />
    <rect x="40" y="50" width="40" height="30" rx="8" fill={color.cyan100} stroke={color.cyan500} />
    <motion.circle cx="70" cy="65" r="2" fill={color.red500} animate={{ opacity: [0, 1, 0] }} transition={{ duration: 1, repeat: Infinity }} />
  </svg>
);

// 12. IoT
const SvgIoT = ({ className }) => (
  <svg viewBox="0 0 100 100" className={className}>
    <circle cx="50" cy="50" r="10" fill={color.slate800} stroke={color.cyan500} strokeWidth="2" />
    <circle cx="20" cy="50" r="5" fill={color.slate500} />
    <circle cx="80" cy="50" r="5" fill={color.slate500} />
    <path d="M25 50 H 40 M 60 50 H 75" stroke={color.slate400} strokeWidth="1" />
    <motion.circle cx="50" cy="50" r="15" stroke={color.cyan400} strokeWidth="1" strokeDasharray="2 2" fill="none" animate={{ rotate: 360 }} transition={{ duration: 4, repeat: Infinity, ease: "linear" }} />
  </svg>
);

// 13. Shadow
const SvgShadow = ({ className }) => (
  <svg viewBox="0 0 100 100" className={className}>
    <path d="M50 30 C 60 30, 65 40, 65 50 C 65 70, 50 80, 50 80 C 50 80, 35 70, 35 50" fill={color.slate800} />
    <path d="M80 30 C 90 30, 95 40, 95 50 C 95 70, 80 80, 80 80" stroke={color.slate400} strokeWidth="2" fill="none" strokeDasharray="4 4" opacity="0.5" />
    <motion.circle cx="60" cy="40" r="2" fill={color.red500} animate={{ opacity: [0, 1] }} transition={{ duration: 1, repeat: Infinity }} />
  </svg>
);

// 14. Trust
const SvgTrust = ({ className }) => (
  <svg viewBox="0 0 100 100" className={className}>
    <path d="M30 60 L 50 50 L 70 60" fill="none" stroke={color.slate500} strokeWidth="3" />
    <circle cx="40" cy="40" r="8" fill={color.slate300} />
    <circle cx="60" cy="40" r="8" fill={color.slate700} />
    <motion.path d="M45 40 L 55 40" stroke={color.red500} strokeWidth="2" strokeDasharray="2 2" animate={{ opacity: [0, 1, 0] }} transition={{ duration: 2, repeat: Infinity }} />
  </svg>
);

// 15. Reputation
const SvgReputation = ({ className }) => (
  <svg viewBox="0 0 100 100" className={className}>
    <path d="M50 20 L 60 40 L 80 40 L 65 55 L 70 75 L 50 65 L 30 75 L 35 55 L 20 40 L 40 40 Z" fill={color.slate100} stroke={color.slate400} strokeWidth="2" />
    <motion.path d="M30 30 L 70 70 M 70 30 L 30 70" stroke={color.red500} strokeWidth="3" animate={{ opacity: [0, 1, 0.5] }} transition={{ duration: 1.5, repeat: Infinity }} />
  </svg>
);

// 16. Trauma
const SvgTrauma = ({ className }) => (
  <svg viewBox="0 0 100 100" className={className}>
    <circle cx="50" cy="50" r="30" fill="none" stroke={color.slate300} strokeWidth="2" />
    <motion.path d="M40 30 L 50 50 L 40 70 M 60 30 L 50 50 L 60 70" stroke={color.red600} strokeWidth="2" animate={{ pathLength: [0, 1] }} transition={{ duration: 2, repeat: Infinity }} />
  </svg>
);

// 17. Time
const SvgTime = ({ className }) => (
  <svg viewBox="0 0 100 100" className={className}>
    <circle cx="50" cy="50" r="30" fill={color.slate50} stroke={color.slate800} strokeWidth="2" />
    <motion.line x1="50" y1="50" x2="50" y2="30" stroke={color.red500} strokeWidth="2" animate={{ rotate: 360 }} style={{ originX: "50px", originY: "50px" }} transition={{ duration: 4, repeat: Infinity, ease: "linear" }} />
  </svg>
);

// 18. Transition
const SvgTransition = ({ className }) => (
  <svg viewBox="0 0 100 100" className={className}>
    <rect x="20" y="40" width="20" height="20" rx="2" fill={color.slate300} />
    <rect x="60" y="40" width="20" height="20" rx="2" fill={color.slate700} />
    <motion.path d="M30 30 Q 50 10, 70 30" stroke={color.cyan400} strokeWidth="2" fill="none" animate={{ strokeDashoffset: [-10, 0] }} transition={{ duration: 1, repeat: Infinity }} />
  </svg>
);

// 19. Algorithm
const SvgAlgo = ({ className }) => (
  <svg viewBox="0 0 100 100" className={className}>
    <rect x="40" y="20" width="20" height="10" fill={color.slate800} />
    <rect x="20" y="50" width="20" height="10" fill={color.slate400} />
    <rect x="60" y="50" width="20" height="10" fill={color.slate400} />
    <path d="M50 30 V 40 H 30 V 50 M 50 40 H 70 V 50" stroke={color.slate600} strokeWidth="1" fill="none" />
    <motion.circle cx="50" cy="35" r="2" fill={color.cyan400} animate={{ cy: [35, 45], cx: [50, 70] }} transition={{ duration: 1.5, repeat: Infinity }} />
  </svg>
);

// 20. Surveillance
const SvgSurveillance = ({ className }) => (
  <svg viewBox="0 0 100 100" className={className}>
    <path d="M20 50 Q 50 20, 80 50 Q 50 80, 20 50 Z" stroke={color.slate800} strokeWidth="2" fill="none" />
    <circle cx="50" cy="50" r="10" fill={color.red900} />
    <motion.circle cx="50" cy="50" r="4" fill={color.red500} animate={{ x: [-5, 5, -5] }} transition={{ duration: 2, repeat: Infinity }} />
  </svg>
);

// 21. Blackmail
const SvgBlackmail = ({ className }) => (
  <svg viewBox="0 0 100 100" className={className}>
    <rect x="35" y="40" width="30" height="30" rx="2" fill={color.slate800} />
    <path d="M40 40 V 30 A 10 10 0 0 1 60 30 V 40" stroke={color.slate800} strokeWidth="4" fill="none" />
    <motion.path d="M45 55 L 55 55" stroke={color.red500} strokeWidth="2" animate={{ opacity: [0, 1, 0] }} transition={{ duration: 1, repeat: Infinity }} />
  </svg>
);

// 22. Gender Safety
const SvgGenderSafety = ({ className }) => (
  <svg viewBox="0 0 100 100" className={className}>
    <BG id="gGen" c1={color.red500} c2={color.indigo500} />
    <circle cx="50" cy="40" r="15" stroke="url(#gGen)" strokeWidth="2" fill="none" />
    <line x1="50" y1="55" x2="50" y2="75" stroke="url(#gGen)" strokeWidth="2" />
    <line x1="40" y1="65" x2="60" y2="65" stroke="url(#gGen)" strokeWidth="2" />
    <motion.circle cx="50" cy="40" r="20" stroke={color.slate200} strokeWidth="1" fill="none" animate={{ scale: [1, 1.2], opacity: [1, 0] }} transition={{ duration: 2, repeat: Infinity }} />
  </svg>
);

// 23. Predictive
const SvgPredictive = ({ className }) => (
  <svg viewBox="0 0 100 100" className={className}>
    <line x1="20" y1="80" x2="80" y2="80" stroke={color.slate400} strokeWidth="2" />
    <path d="M20 70 L 40 50 L 60 60 L 80 30" stroke={color.cyan500} strokeWidth="2" fill="none" />
    <motion.circle cx="80" cy="30" r="3" fill={color.red500} animate={{ r: [3, 6, 3] }} transition={{ duration: 1, repeat: Infinity }} />
  </svg>
);

// 24. Dormant
const SvgDormant = ({ className }) => (
  <svg viewBox="0 0 100 100" className={className}>
    <rect x="30" y="30" width="40" height="40" fill={color.slate200} opacity="0.3" />
    <line x1="30" y1="30" x2="70" y2="70" stroke={color.slate400} strokeWidth="1" />
    <motion.rect x="30" y="30" width="40" height="40" stroke={color.red500} strokeWidth="2" fill="none" animate={{ opacity: [0, 1, 0] }} transition={{ duration: 3, repeat: Infinity }} />
  </svg>
);

// SVG Mapper
const getSvgComponent = (item) => {
  const text = (item.id + " " + item.heading).toLowerCase();

  if (text.includes("women") || text.includes("gender") || text.includes("girl")) return SvgGenderSafety;
  if (text.includes("financial") || text.includes("money")) return SvgFinance;
  if (text.includes("social") || text.includes("friend") || text.includes("community")) return SvgSocial;
  if (text.includes("identity") || text.includes("impersonation")) return SvgIdentity;
  if (text.includes("psychology") || text.includes("emotional") || text.includes("mind")) return SvgPsych;
  if (text.includes("location") || text.includes("track")) return SvgLocation;
  if (text.includes("app") || text.includes("mobile")) return SvgMobile;
  if (text.includes("ai ") || text.includes("artificial") || text.includes("deepfake")) return SvgAI;
  if (text.includes("surveillance") || text.includes("monitor") || text.includes("watch")) return SvgSurveillance;
  if (text.includes("shadow") || text.includes("hidden") || text.includes("passive")) return SvgShadow;
  if (text.includes("trust") || text.includes("relationship")) return SvgTrust;
  if (text.includes("reputation") || text.includes("character")) return SvgReputation;
  if (text.includes("time") || text.includes("zone")) return SvgTime;
  if (text.includes("algorithm")) return SvgAlgo;
  if (text.includes("predict")) return SvgPredictive;
  if (text.includes("blackmail")) return SvgBlackmail;
  if (text.includes("dormant") || text.includes("forgotten")) return SvgDormant;
  if (text.includes("chat") || text.includes("conversation")) return SvgChat;
  if (text.includes("device") || text.includes("iot")) return SvgIoT;
  if (text.includes("trauma") || text.includes("impact")) return SvgTrauma;
  if (text.includes("transition")) return SvgTransition;
  if (text.includes("target")) return SvgTarget;
  if (text.includes("environment")) return SvgLocation;
  
  return SvgAlert;
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
            className="absolute -inset-2 rounded-2xl bg-gradient-to-tr from-red-50 via-slate-100 to-cyan-50 blur-md sm:blur-lg md:blur-xl opacity-70"
            aria-hidden="true"
          />
          <div className="relative rounded-2xl border border-gray-200 bg-white p-3 sm:p-4 shadow-sm flex-grow flex items-center justify-center overflow-hidden">
            <div className="w-full h-full max-h-[300px] md:max-h-full">
              <SVG className="w-full h-full object-contain" />
            </div>
          </div>
        </motion.div>

        {/* Content Column */}
        <div className={`${reverse ? "md:order-1" : "md:order-2"} min-w-0 py-2`}>
          <h2 className="text-[20px] sm:text-2xl font-bold text-gray-900 leading-snug">
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
                  ? "bg-red-600 border-red-600 text-white"
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
export default function TypesOfCyberCrimes() {
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
    const total = Math.ceil(typesOfCyberCrimesData.length / ITEMS_PER_PAGE);
    const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
    const endIndex = startIndex + ITEMS_PER_PAGE;
    return {
      currentSections: typesOfCyberCrimesData.slice(startIndex, endIndex),
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
        <Link to="/" className="hover:underline text-red-600">Home</Link>
        <span aria-hidden="true"> › </span>
        <Link to="/report-cyber-crime" className="hover:underline text-red-600">Report Cyber Crime</Link>
        <span aria-hidden="true"> › </span>
        <span className="text-gray-700" aria-current="page">Types of Cybercrime</span>
      </motion.nav>

      {/* Hero */}
      <div ref={heroRef} className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-6 md:gap-8 lg:gap-10 items-center">
        <motion.div variants={itemUp}>
          <h1 className="text-[22px] sm:text-3xl font-bold text-gray-900">
            Types of Cybercrime
          </h1>
          <p className="mt-2 text-base md:text-lg text-gray-700 max-w-2xl">
            Understanding the wide range of digital offences, from identity theft to sophisticated financial fraud, is the first step in prevention.
          </p>
          <div className="mt-3 sm:mt-4 flex flex-wrap gap-2">
            {["Threat Detection", "Prevention", "Safety"].map((pill) => (
              <span key={pill} className="px-2.5 sm:px-3 py-1.5 text-xs sm:text-sm rounded-full bg-red-50 text-red-800 border border-red-200">
                {pill}
              </span>
            ))}
          </div>
        </motion.div>

        <motion.div style={{ y: heroY }} className="relative">
          <div className="absolute -inset-2 rounded-2xl bg-gradient-to-tr from-red-100 via-slate-100 to-cyan-100 blur-md sm:blur-lg md:blur-xl" aria-hidden="true" />
          <div className="relative rounded-2xl border border-gray-200 bg-white p-3 sm:p-4 shadow-sm">
            <div className="w-full h-auto max-h-72 sm:max-h-80 md:max-h-none overflow-hidden rounded-lg">
              <VideoHeroCyber
                src="https://cdn.coverr.co/videos/coverr-typing-cyber-code-computer-5853/1080p.mp4" 
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
              const SVGComp = getSvgComponent(section);
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