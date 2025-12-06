// src/pages/services/AiIntelligenceSolutions.jsx
import React, { useRef } from "react";
import { Link } from "react-router-dom"; 
import {
  motion,
  useReducedMotion,
  useScroll,
  useTransform,
  useSpring,
} from "framer-motion";

// !!======================================================================!!
// !!  NOTE: I preserved the spelling "Intellicence" from your data file   !!
// !!======================================================================!!
import { AiIntellicenceSolutionsData } from "../../../../data/OurServices/software_it_services/Ai_Solutions/AiIntellicenceSolutionsData";

/* -------------------------------- Motion -------------------------------- */
const useAnims = () => {
  const shouldReduce = useReducedMotion();
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: shouldReduce
        ? { duration: 0 }
        : { duration: 0.25, when: "beforeChildren", staggerChildren: 0.08 },
    },
  };
  const itemUp = {
    hidden: { opacity: 0, y: shouldReduce ? 0 : 20 },
    show: { opacity: 1, y: 0, transition: { duration: shouldReduce ? 0 : 0.4 } },
  };
  return { container, itemUp };
};

/* -------------------------------- Palette -------------------------------- */
const color = {
  violet50: "#F5F3FF",
  violet100: "#EDE9FE",
  violet300: "#C4B5FD",
  violet500: "#8B5CF6",
  violet700: "#6D28D9",
  violet900: "#4C1D95",
  cyan50: "#ECFEFF",
  cyan300: "#67E8F9",
  cyan500: "#06B6D4",
  cyan700: "#0E7490",
  fuchsia50: "#FDF4FF",
  fuchsia400: "#E879F9",
  fuchsia600: "#C026D3",
  emerald400: "#34D399",
  emerald500: "#10B981",
  rose400: "#FB7185",
  amber400: "#FBBF24",
  slate50: "#F8FAFC",
  slate100: "#F1F5F9",
  slate200: "#E2E8F0",
  slate300: "#CBD5E1",
  slate400: "#94A3B8",
  slate700: "#334155",
  slate800: "#1E293B",
  slate900: "#0F172A",
  white: "#FFFFFF",
};

/* -------------------------- HERO: Video SVG -------------------------- */
/* Scene: A Digital Cortex / Neural Network Brain pulsing with data */

const AiHeroOverlay = () => {
  const shouldReduce = useReducedMotion();

  return (
    <g transform="translate(680, 50)">
      {/* Neural Connections Background */}
      <g opacity="0.3" stroke={color.violet300} strokeWidth="1">
        <path d="M50 50 L 100 100 L 200 50 L 250 150" fill="none" />
        <path d="M250 150 L 150 250 L 50 200 L 50 50" fill="none" />
        <circle cx="50" cy="50" r="3" fill={color.violet500} />
        <circle cx="100" cy="100" r="3" fill={color.violet500} />
        <circle cx="200" cy="50" r="3" fill={color.violet500} />
        <circle cx="250" cy="150" r="3" fill={color.violet500} />
        <circle cx="150" cy="250" r="3" fill={color.violet500} />
        <circle cx="50" cy="200" r="3" fill={color.violet500} />
      </g>

      {/* The AI Core (Brain Shape) */}
      <g transform="translate(150, 150)">
        <defs>
          <filter id="glowAi" x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur stdDeviation="8" result="coloredBlur" />
            <feMerge>
              <feMergeNode in="coloredBlur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>
        
        {/* Brain Lobes */}
        <path 
          d="M-60 -20 C -60 -60, -20 -80, 0 -60 C 20 -80, 60 -60, 60 -20 C 70 10, 50 40, 30 50 C 10 60, -10 60, -30 50 C -50 40, -70 10, -60 -20" 
          fill={color.slate900} 
          stroke={color.cyan400} 
          strokeWidth="2"
          filter="url(#glowAi)"
        />

        {/* Synapse Firing Animation */}
        {!shouldReduce && (
          <>
            <motion.circle r="4" fill={color.white} animate={{ cx: [-40, 0, 40], cy: [-20, -50, -20], opacity: [0, 1, 0] }} transition={{ duration: 2, repeat: Infinity }} />
            <motion.circle r="4" fill={color.white} animate={{ cx: [40, 0, -40], cy: [20, 50, 20], opacity: [0, 1, 0] }} transition={{ duration: 2.5, repeat: Infinity, delay: 1 }} />
          </>
        )}
      </g>

      {/* Orbiting Data Ring */}
      <g transform="translate(150, 150)">
         <motion.ellipse 
            rx="120" ry="40" 
            fill="none" 
            stroke={color.violet500} 
            strokeWidth="1" 
            strokeDasharray="5 5"
            animate={{ rotate: 360 }}
            transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
         />
      </g>
    </g>
  );
};

const VideoHeroAi = ({ src = "", poster = "" }) => {
  const shouldReduce = useReducedMotion();
  const title = "CRCCF AI Solutions Hero";

  if (shouldReduce || !src) {
    return (
      <svg viewBox="0 0 1000 400" className="w-full h-auto block" role="img" aria-label={title}>
        <defs>
           <linearGradient id="aiGrad" x1="0" y1="0" x2="1" y2="1">
             <stop offset="0%" stopColor={color.slate900} />
             <stop offset="100%" stopColor={color.violet900} />
           </linearGradient>
        </defs>
        <rect width="100%" height="100%" fill="url(#aiGrad)" rx="20" />
        <AiHeroOverlay />
      </svg>
    );
  }

  return (
    <svg viewBox="0 0 1000 400" className="w-full h-auto block" role="img" aria-label={title}>
      <defs>
        <linearGradient id="aiBG" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor={color.slate900} />
          <stop offset="100%" stopColor={color.violet900} />
        </linearGradient>
        <mask id="aiMask">
          <rect width="100%" height="100%" fill="white" />
          <AiHeroOverlay />
        </mask>
      </defs>
      
      <rect width="100%" height="100%" fill="url(#aiBG)" rx="20" />
      
      <foreignObject x="0" y="0" width="1000" height="400" mask="url(#aiMask)">
        <video
          src={src}
          poster={poster || undefined}
          autoPlay
          muted
          playsInline
          loop
          preload="metadata"
          crossOrigin="anonymous"
          style={{ width: "100%", height: "100%", objectFit: "cover", opacity: 0.7 }}
          onError={(e) => { e.currentTarget.style.display = "none"; }}
        >
          <source src={src} type="video/mp4" />
        </video>
      </foreignObject>

      <AiHeroOverlay />
    </svg>
  );
};

/* ---------------------------- SVG Utils ---------------------------- */
const BG = ({ id, stops }) => (
  <defs> <linearGradient id={id} x1="0" y1="0" x2="1" y2="1"> {stops.map((s, i) => <stop key={i} offset={s.offset} stopColor={s.color} stopOpacity={s.opacity ?? 1} />)} </linearGradient> </defs>
);

/* ------------------------ 20 UNIQUE SECTION SVGs ------------------------ */

// 1. Intelligent Automation (Gears + Chips)
const SvgAutomation = ({ className }) => (
  <svg viewBox="0 0 400 300" className={className}>
    <BG id="gAuto" stops={[{offset:"0%", color:color.violet50}, {offset:"100%", color:color.white}]} />
    <rect width="400" height="300" rx="20" fill="url(#gAuto)" />
    <g transform="translate(150, 100)">
      <motion.circle cx="50" cy="50" r="30" stroke={color.violet300} strokeWidth="4" strokeDasharray="10 5" fill="none" animate={{ rotate: 360 }} transition={{ duration: 8, repeat: Infinity, ease: "linear" }} />
      <rect x="35" y="35" width="30" height="30" rx="4" fill={color.violet600} />
      <motion.path d="M50 50 L 80 20" stroke={color.fuchsia400} strokeWidth="2" animate={{ opacity: [0, 1, 0] }} transition={{ duration: 1, repeat: Infinity }} />
      <circle cx="80" cy="20" r="4" fill={color.cyan500} />
    </g>
  </svg>
);

// 2. Predictive Intelligence (Graph projecting up)
const SvgPredict = ({ className }) => (
  <svg viewBox="0 0 400 300" className={className}>
    <BG id="gPred" stops={[{offset:"0%", color:color.cyan50}, {offset:"100%", color:color.white}]} />
    <rect width="400" height="300" rx="20" fill="url(#gPred)" />
    <g transform="translate(140, 100)">
      <path d="M0 80 L 30 50 L 60 70 L 90 40" stroke={color.slate300} strokeWidth="3" fill="none" />
      <motion.path d="M90 40 L 120 10" stroke={color.cyan500} strokeWidth="3" strokeDasharray="5 5" fill="none" animate={{ strokeDashoffset: -10 }} transition={{ duration: 1, repeat: Infinity, ease: "linear" }} />
      <circle cx="90" cy="40" r="4" fill={color.slate400} />
      <circle cx="120" cy="10" r="4" fill={color.cyan600} />
    </g>
  </svg>
);

// 3. Chatbots (Speech Bubble AI)
const SvgChatbot = ({ className }) => (
  <svg viewBox="0 0 400 300" className={className}>
    <BG id="gChat" stops={[{offset:"0%", color:color.fuchsia50}, {offset:"100%", color:color.white}]} />
    <rect width="400" height="300" rx="20" fill="url(#gChat)" />
    <g transform="translate(150, 100)">
      <path d="M10 10 H 90 V 70 H 30 L 10 90 V 10 Z" fill={color.fuchsia100} stroke={color.fuchsia300} strokeWidth="2" />
      <motion.circle cx="35" cy="40" r="4" fill={color.fuchsia600} animate={{ y: [0, -5, 0] }} transition={{ duration: 1, repeat: Infinity, delay: 0 }} />
      <motion.circle cx="50" cy="40" r="4" fill={color.fuchsia600} animate={{ y: [0, -5, 0] }} transition={{ duration: 1, repeat: Infinity, delay: 0.2 }} />
      <motion.circle cx="65" cy="40" r="4" fill={color.fuchsia600} animate={{ y: [0, -5, 0] }} transition={{ duration: 1, repeat: Infinity, delay: 0.4 }} />
    </g>
  </svg>
);

// 4. Data Processing (Funnel/Matrix)
const SvgDataProc = ({ className }) => (
  <svg viewBox="0 0 400 300" className={className}>
    <BG id="gData" stops={[{offset:"0%", color:color.slate800}, {offset:"100%", color:color.slate900}]} />
    <rect width="400" height="300" rx="20" fill="url(#gData)" />
    <g transform="translate(150, 80)">
      <rect x="0" y="0" width="100" height="120" fill="none" stroke={color.slate600} />
      <motion.rect x="10" y="10" width="80" height="4" fill={color.cyan400} animate={{ y: [10, 100] }} transition={{ duration: 2, repeat: Infinity }} />
      <rect x="20" y="40" width="60" height="4" fill={color.slate500} opacity="0.5" />
      <rect x="20" y="60" width="60" height="4" fill={color.slate500} opacity="0.5" />
      <rect x="20" y="80" width="60" height="4" fill={color.slate500} opacity="0.5" />
    </g>
  </svg>
);

// 5. Computer Vision (Eye Scanning)
const SvgVision = ({ className }) => (
  <svg viewBox="0 0 400 300" className={className}>
    <BG id="gVis" stops={[{offset:"0%", color:color.emerald400}, {offset:"100%", color:color.emerald500}]} />
    <rect width="400" height="300" rx="20" fill="url(#gVis)" />
    <g transform="translate(150, 100)">
      <path d="M10 50 Q 50 10, 90 50 Q 50 90, 10 50 Z" fill={color.white} />
      <circle cx="50" cy="50" r="15" fill={color.slate900} />
      <motion.line x1="10" y1="10" x2="90" y2="10" stroke={color.white} strokeWidth="2" animate={{ y1: [10, 90, 10], y2: [10, 90, 10] }} transition={{ duration: 3, repeat: Infinity }} />
      <rect x="0" y="0" width="100" height="100" fill="none" stroke={color.white} strokeWidth="2" strokeDasharray="10 10" />
    </g>
  </svg>
);

// 6. Recommendation (Star/Suggestions)
const SvgRec = ({ className }) => (
  <svg viewBox="0 0 400 300" className={className}>
    <BG id="gRec" stops={[{offset:"0%", color:color.amber400}, {offset:"100%", color:color.fuchsia600}]} />
    <rect width="400" height="300" rx="20" fill="url(#gRec)" />
    <g transform="translate(140, 100)">
      <rect x="0" y="0" width="40" height="60" rx="4" fill={color.white} opacity="0.5" />
      <motion.rect x="50" y="-10" width="50" height="80" rx="4" fill={color.white} animate={{ scale: [1, 1.05, 1] }} transition={{ duration: 2, repeat: Infinity }} />
      <path d="M65 20 L 75 20 L 78 10 L 81 20 L 91 20 L 83 26 L 86 36 L 78 30 L 70 36 L 73 26 Z" fill={color.amber400} />
    </g>
  </svg>
);

// 7. NLP (Waveform to Text)
const SvgNLP = ({ className }) => (
  <svg viewBox="0 0 400 300" className={className}>
    <BG id="gNLP" stops={[{offset:"0%", color:color.violet100}, {offset:"100%", color:color.cyan100}]} />
    <rect width="400" height="300" rx="20" fill="url(#gNLP)" />
    <g transform="translate(140, 100)">
      <path d="M0 30 Q 15 50, 30 30 T 60 30 T 90 30" fill="none" stroke={color.violet500} strokeWidth="2" />
      <path d="M0 40 Q 15 60, 30 40 T 60 40 T 90 40" fill="none" stroke={color.violet400} strokeWidth="2" opacity="0.6" />
      <motion.rect x="100" y="10" width="40" height="50" rx="4" fill={color.white} stroke={color.slate300} initial={{ opacity: 0 }} animate={{ opacity: 1, x: 110 }} transition={{ duration: 2, repeat: Infinity }} />
      <line x1="115" y1="25" x2="135" y2="25" stroke={color.slate400} strokeWidth="2" />
      <line x1="115" y1="35" x2="135" y2="35" stroke={color.slate400} strokeWidth="2" />
    </g>
  </svg>
);

// 8. Fraud Detection (Shield Lock)
const SvgFraud = ({ className }) => (
  <svg viewBox="0 0 400 300" className={className}>
    <BG id="gFraud" stops={[{offset:"0%", color:color.slate800}, {offset:"100%", color:color.rose400}]} />
    <rect width="400" height="300" rx="20" fill="url(#gFraud)" />
    <g transform="translate(150, 80)">
      <path d="M50 0 L 100 20 V 60 C 100 90, 50 120, 50 120 C 50 120, 0 90, 0 60 V 20 Z" fill={color.slate900} stroke={color.rose400} strokeWidth="2" />
      <circle cx="50" cy="50" r="15" fill={color.rose400} />
      <path d="M45 45 L 55 55 M 55 45 L 45 55" stroke={color.white} strokeWidth="3" />
      <motion.rect x="0" y="0" width="100" height="120" fill="url(#gFraud)" opacity="0.3" animate={{ y: [0, 120] }} transition={{ duration: 1.5, repeat: Infinity }} />
    </g>
  </svg>
);

// 9. Voice AI (Mic)
const SvgVoice = ({ className }) => (
  <svg viewBox="0 0 400 300" className={className}>
    <BG id="gVoice" stops={[{offset:"0%", color:color.cyan50}, {offset:"100%", color:color.violet50}]} />
    <rect width="400" height="300" rx="20" fill="url(#gVoice)" />
    <g transform="translate(160, 80)">
      <rect x="30" y="0" width="20" height="50" rx="10" fill={color.slate700} />
      <path d="M10 25 V 35 C 10 55, 70 55, 70 35 V 25" stroke={color.slate500} strokeWidth="3" fill="none" />
      <line x1="40" y1="65" x2="40" y2="80" stroke={color.slate500} strokeWidth="3" />
      <motion.circle cx="40" cy="25" r="25" stroke={color.violet500} strokeWidth="1" fill="none" animate={{ scale: [1, 1.5], opacity: [0.8, 0] }} transition={{ duration: 1.5, repeat: Infinity }} />
    </g>
  </svg>
);

// 10. Real-time Monitoring (Pulse)
const SvgMonitor = ({ className }) => (
  <svg viewBox="0 0 400 300" className={className}>
    <BG id="gMon" stops={[{offset:"0%", color:color.slate900}, {offset:"100%", color:color.emerald500}]} />
    <rect width="400" height="300" rx="20" fill="url(#gMon)" />
    <g transform="translate(100, 150)">
      <path d="M0 0 H 40 L 50 -30 L 60 30 L 70 0 H 200" stroke={color.white} strokeWidth="2" fill="none" />
      <motion.circle cx="50" cy="0" r="4" fill={color.emerald400} animate={{ offsetDistance: "100%" }} style={{ offsetPath: "path('M0 0 H 40 L 50 -30 L 60 30 L 70 0 H 200')" }} transition={{ duration: 2, repeat: Infinity, ease: "linear" }} />
    </g>
  </svg>
);

// 11. Workflow Automation (Flowchart)
const SvgFlow = ({ className }) => (
  <svg viewBox="0 0 400 300" className={className}>
    <BG id="gFlow" stops={[{offset:"0%", color:color.cyan100}, {offset:"100%", color:color.white}]} />
    <rect width="400" height="300" rx="20" fill="url(#gFlow)" />
    <g transform="translate(140, 80)">
      <rect x="30" y="0" width="40" height="30" rx="2" fill={color.cyan500} />
      <rect x="0" y="60" width="40" height="30" rx="2" fill={color.cyan400} />
      <rect x="60" y="60" width="40" height="30" rx="2" fill={color.cyan400} />
      <path d="M50 30 V 45 H 20 V 60 M 50 45 H 80 V 60" stroke={color.slate400} strokeWidth="2" fill="none" />
      <motion.circle cx="50" cy="30" r="3" fill={color.violet500} animate={{ cy: 60, cx: [50, 50, 20] }} transition={{ duration: 2, repeat: Infinity }} />
    </g>
  </svg>
);

// 12. Personalization (Fingerprint)
const SvgPersonal = ({ className }) => (
  <svg viewBox="0 0 400 300" className={className}>
    <BG id="gPers" stops={[{offset:"0%", color:color.violet100}, {offset:"100%", color:color.fuchsia100}]} />
    <rect width="400" height="300" rx="20" fill="url(#gPers)" />
    <g transform="translate(150, 100)">
       <path d="M20 50 C 20 20, 80 20, 80 50" stroke={color.violet500} strokeWidth="2" fill="none" />
       <path d="M30 50 C 30 30, 70 30, 70 50" stroke={color.violet500} strokeWidth="2" fill="none" />
       <path d="M40 50 C 40 40, 60 40, 60 50" stroke={color.violet500} strokeWidth="2" fill="none" />
       <motion.rect x="10" y="0" width="80" height="4" fill={color.fuchsia400} animate={{ y: [0, 80, 0] }} transition={{ duration: 2, repeat: Infinity }} />
    </g>
  </svg>
);

// 13. Reporting (Charts)
const SvgReport = ({ className }) => (
  <svg viewBox="0 0 400 300" className={className}>
    <BG id="gRep" stops={[{offset:"0%", color:color.slate800}, {offset:"100%", color:color.slate900}]} />
    <rect width="400" height="300" rx="20" fill="url(#gRep)" />
    <g transform="translate(130, 100)">
       <rect x="0" y="0" width="20" height="100" fill={color.slate700} transform="scale(1, -1) translate(0, -100)" />
       <motion.rect x="30" y="0" width="20" height="100" fill={color.cyan600} transform="scale(1, -1) translate(0, -100)" initial={{ height: 0 }} animate={{ height: 60 }} transition={{ duration: 1 }} />
       <motion.rect x="60" y="0" width="20" height="100" fill={color.cyan500} transform="scale(1, -1) translate(0, -100)" initial={{ height: 0 }} animate={{ height: 80 }} transition={{ duration: 1, delay: 0.2 }} />
       <motion.rect x="90" y="0" width="20" height="100" fill={color.cyan400} transform="scale(1, -1) translate(0, -100)" initial={{ height: 0 }} animate={{ height: 40 }} transition={{ duration: 1, delay: 0.4 }} />
    </g>
  </svg>
);

// 14. Ethical AI (Scales)
const SvgEthic = ({ className }) => (
  <svg viewBox="0 0 400 300" className={className}>
    <BG id="gEth" stops={[{offset:"0%", color:color.emerald50}, {offset:"100%", color:color.white}]} />
    <rect width="400" height="300" rx="20" fill="url(#gEth)" />
    <g transform="translate(150, 80)">
       <line x1="50" y1="0" x2="50" y2="80" stroke={color.slate400} strokeWidth="2" />
       <line x1="10" y1="20" x2="90" y2="20" stroke={color.slate400} strokeWidth="2" />
       <motion.g animate={{ rotate: [0, 5, -5, 0] }} transition={{ duration: 4, repeat: Infinity }}>
          <path d="M10 20 L 0 50 H 20 L 10 20" fill={color.emerald400} />
          <path d="M90 20 L 80 50 H 100 L 90 20" fill={color.emerald400} />
       </motion.g>
    </g>
  </svg>
);

// 15. Scalable (Expanding Grid)
const SvgScale = ({ className }) => (
  <svg viewBox="0 0 400 300" className={className}>
    <BG id="gScale" stops={[{offset:"0%", color:color.violet900}, {offset:"100%", color:color.slate900}]} />
    <rect width="400" height="300" rx="20" fill="url(#gScale)" />
    <g transform="translate(140, 100)">
       <rect x="40" y="40" width="20" height="20" fill={color.violet500} />
       <motion.rect x="40" y="10" width="20" height="20" fill={color.violet400} initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5, delay: 0.2, repeat: Infinity, repeatDelay: 2 }} />
       <motion.rect x="70" y="40" width="20" height="20" fill={color.violet400} initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5, delay: 0.4, repeat: Infinity, repeatDelay: 2 }} />
       <motion.rect x="10" y="40" width="20" height="20" fill={color.violet400} initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5, delay: 0.6, repeat: Infinity, repeatDelay: 2 }} />
       <motion.rect x="40" y="70" width="20" height="20" fill={color.violet400} initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5, delay: 0.8, repeat: Infinity, repeatDelay: 2 }} />
    </g>
  </svg>
);

// 16. Optimisation (Arrows)
const SvgOpt = ({ className }) => (
  <svg viewBox="0 0 400 300" className={className}>
    <BG id="gOpt" stops={[{offset:"0%", color:color.amber50}, {offset:"100%", color:color.white}]} />
    <rect width="400" height="300" rx="20" fill="url(#gOpt)" />
    <g transform="translate(150, 100)">
       <path d="M0 20 Q 20 60, 50 20 T 100 20" stroke={color.slate300} strokeWidth="2" fill="none" strokeDasharray="5 5" />
       <motion.path d="M0 40 L 100 40" stroke={color.amber400} strokeWidth="4" initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ duration: 1.5, repeat: Infinity }} />
       <path d="M90 30 L 100 40 L 90 50" fill={color.amber400} />
    </g>
  </svg>
);

// 17. Integration (Puzzle/Plug)
const SvgInteg = ({ className }) => (
  <svg viewBox="0 0 400 300" className={className}>
    <BG id="gInt" stops={[{offset:"0%", color:color.cyan50}, {offset:"100%", color:color.fuchsia50}]} />
    <rect width="400" height="300" rx="20" fill="url(#gInt)" />
    <g transform="translate(140, 100)">
       <path d="M0 0 H 40 V 20 H 60 V 0 H 100 V 40 H 80 V 60 H 100 V 100 H 60 V 80 H 40 V 100 H 0 V 60 H 20 V 40 H 0 Z" fill={color.white} stroke={color.slate300} />
       <motion.rect x="40" y="40" width="20" height="20" fill={color.fuchsia500} animate={{ scale: [0, 1] }} transition={{ duration: 1, repeat: Infinity, repeatDelay: 1 }} />
    </g>
  </svg>
);

// 18. Sector Specific (Icons)
const SvgSector = ({ className }) => (
  <svg viewBox="0 0 400 300" className={className}>
    <BG id="gSec" stops={[{offset:"0%", color:color.violet800}, {offset:"100%", color:color.black}]} />
    <rect width="400" height="300" rx="20" fill="url(#gSec)" />
    <g transform="translate(150, 100)">
       <circle cx="50" cy="50" r="40" stroke={color.violet500} strokeWidth="1" fill="none" />
       <motion.g animate={{ rotate: 360 }} transition={{ duration: 8, repeat: Infinity, ease: "linear" }} style={{ originX: "50px", originY: "50px" }}>
          <circle cx="50" cy="10" r="5" fill={color.cyan400} />
          <circle cx="90" cy="50" r="5" fill={color.fuchsia400} />
          <circle cx="50" cy="90" r="5" fill={color.emerald400} />
          <circle cx="10" cy="50" r="5" fill={color.amber400} />
       </motion.g>
    </g>
  </svg>
);

// 19. Learning (Infinity)
const SvgLearn = ({ className }) => (
  <svg viewBox="0 0 400 300" className={className}>
    <BG id="gLearn" stops={[{offset:"0%", color:color.cyan50}, {offset:"100%", color:color.white}]} />
    <rect width="400" height="300" rx="20" fill="url(#gLearn)" />
    <g transform="translate(120, 100)">
       <path d="M40 50 C 60 10, 100 90, 120 50 S 60 10, 40 50" stroke={color.cyan300} strokeWidth="8" fill="none" opacity="0.3" />
       <motion.circle r="6" fill={color.cyan600} animate={{ offsetDistance: "100%" }} style={{ offsetPath: "path('M40 50 C 60 10, 100 90, 120 50 S 60 10, 40 50')" }} transition={{ duration: 3, repeat: Infinity, ease: "linear" }} />
    </g>
  </svg>
);

// 20. Future Ready (Sunrise)
const SvgFuture = ({ className }) => (
  <svg viewBox="0 0 400 300" className={className}>
    <BG id="gFut" stops={[{offset:"0%", color:color.violet100}, {offset:"100%", color:color.fuchsia100}]} />
    <rect width="400" height="300" rx="20" fill="url(#gFut)" />
    <g transform="translate(150, 120)">
       <path d="M-50 50 H 150" stroke={color.violet900} strokeWidth="2" />
       <circle cx="50" cy="50" r="30" fill={color.fuchsia400} />
       <motion.circle cx="50" cy="50" r="30" fill={color.amber400} animate={{ cy: 20 }} transition={{ duration: 3 }} />
    </g>
  </svg>
);

// SVG Map
const svgMap = {
  'sec1-transforming-digital-operations-through-intelligent-automation': SvgAutomation,
  'sec2-enhancing-decision-making-with-predictive-intelligence': SvgPredict,
  'sec3-ai-powered-chatbots-and-virtual-assistants-for-instant-support': SvgChatbot,
  'sec4-intelligent-data-processing-for-accuracy-and-efficiency': SvgDataProc,
  'sec5-computer-vision-solutions-for-real-world-applications': SvgVision,
  'sec6-personalised-user-experiences-with-smart-recommendation-systems': SvgRec,
  'sec7-natural-language-processing-nlp-for-smart-communication-understanding': SvgNLP,
  'sec8-ai-for-fraud-detection-risk-analysis-and-secure-operations': SvgFraud,
  'sec9-voice-enabled-ai-systems-for-hands-free-interaction': SvgVoice,
  'sec10-ai-for-real-time-monitoring-and-smart-alerts': SvgMonitor,
  'sec11-intelligent-workflow-automation-for-faster-operations': SvgFlow,
  'sec12-ai-driven-personalisation-for-education-healthcare-and-business-growth': SvgPersonal,
  'sec13-ai-assisted-reporting-and-automated-insights-for-leadership-teams': SvgReport,
  'sec14-ethical-and-responsible-ai-that-respects-privacy-and-user-rights': SvgEthic,
  'sec15-scalable-ai-solutions-that-grow-with-your-organisation': SvgScale,
  'sec16-ai-for-process-optimisation-and-operational-efficiency': SvgOpt,
  'sec17-ai-integration-with-existing-software-and-digital-ecosystems': SvgInteg,
  'sec18-sector-specific-ai-solutions-tailored-to-unique-needs': SvgSector,
  'sec19-continuous-learning-systems-that-evolve-over-time': SvgLearn,
  'sec20-building-a-future-ready-organisation-with-responsible-ai-adoption': SvgFuture,
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
    useTransform(scrollYProgress, [0, 1], shouldReduce ? [0, 0] : [25, -25]),
    { stiffness: 100, damping: 20 }
  );
  const opacity = useTransform(scrollYProgress, [0, 1], [0.5, 1]);

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
    <section id={id} ref={ref} className="mt-14 sm:mt-16 md:mt-24">
      <motion.div
        style={{ opacity: shouldReduce ? 1 : opacity }}
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: shouldReduce ? 0 : 0.6 }}
        className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-10 md:gap-14 items-center"
      >
        <motion.div
          style={{ y }}
          className={`relative min-w-0 flex flex-col ${
            reverse ? "md:order-2" : "md:order-1"
          }`}
        >
          {/* Decorative Blob */}
          <div
            className="absolute -inset-4 rounded-full bg-gradient-to-tr from-violet-200 via-fuchsia-100 to-cyan-100 blur-2xl opacity-60"
            aria-hidden="true"
          />
          <div className="relative rounded-2xl border border-white/50 bg-white/80 backdrop-blur-sm p-4 shadow-sm flex-grow flex items-center justify-center overflow-hidden transition-shadow duration-500 hover:shadow-lg">
            <div className="w-full h-full max-h-[350px]">
              <SVG className="w-full h-full object-contain" />
            </div>
          </div>
        </motion.div>

        <div
          className={`${
            reverse ? "md:order-1" : "md:order-2"
          } min-w-0 py-4`}
        >
          <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-slate-900 leading-tight mb-5">
            {title}
          </h2>
          <div className="space-y-4">{paragraphs}</div>
        </div>
      </motion.div>
    </section>
  );
};

/* ---------------------------------- Page ---------------------------------- */
export default function AiIntelligenceSolutions() {
  const { container, itemUp } = useAnims();
  const heroRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });
  const heroY = useTransform(scrollYProgress, [0, 1], [0, -60]);

  return (
    <motion.section
      id="top"
      variants={container}
      initial="hidden"
      animate="show"
      className="relative max-w-6xl mx-auto px-4 sm:px-6 md:px-8 py-10 sm:py-14"
    >
      {/* Breadcrumb */}
      <motion.nav
        variants={itemUp}
        className="text-xs sm:text-sm text-gray-500 mb-6"
      >
        <Link to="/" className="hover:text-violet-600 transition-colors">
          Home
        </Link>
        <span className="mx-2">/</span>
        <Link to="/services" className="hover:text-violet-600 transition-colors">
          Services
        </Link>
        <span className="mx-2">/</span>
        <span className="text-gray-900 font-medium">AI Solutions</span>
      </motion.nav>

      {/* Hero */}
      <div
        ref={heroRef}
        className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center mb-20"
      >
        <motion.div variants={itemUp}>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight leading-[1.2]">
            Advanced <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-600 to-fuchsia-600">Artificial Intelligence</span> Solutions
          </h1>
          <p className="mt-5 text-base md:text-lg text-slate-600 leading-relaxed max-w-xl">
            Empowering organizations with intelligent automation, predictive insights, and adaptive learning systems. We turn data into decisions and routine into innovation.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            {["Machine Learning", "Automation", "Predictive Analytics"].map((pill) => (
              <span
                key={pill}
                className="px-4 py-1.5 text-sm font-semibold rounded-full bg-violet-50 text-violet-700 border border-violet-100 shadow-sm"
              >
                {pill}
              </span>
            ))}
          </div>
        </motion.div>

        <motion.div style={{ y: heroY }} className="relative">
          <div
            className="absolute -inset-6 rounded-3xl bg-gradient-to-br from-cyan-300 via-violet-300 to-fuchsia-300 blur-3xl opacity-30"
            aria-hidden="true"
          />
          <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-gray-200 bg-white">
            <VideoHeroAi
              src="https://cdn.coverr.co/videos/coverr-robot-face-5536/1080p.mp4" 
            />
          </div>
        </motion.div>
      </div>

      {/* Sections List */}
      <div className="space-y-12 sm:space-y-20">
        {AiIntellicenceSolutionsData.map((sec, idx) => {
          const SVGComp = svgMap[sec.id] || SvgAutomation;
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