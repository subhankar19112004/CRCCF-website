// src/pages/services/AmcServices.jsx
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
// !!  CHECK THIS IMPORT PATH MATCHES YOUR PROJECT STRUCTURE EXACTLY       !!
// !!======================================================================!!
import { amcServicesData } from "../../../../data/OurServices/software_it_services/AMC_services/amcServicesData";

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
  cyan50: "#ECFEFF",
  cyan100: "#CFFAFE",
  cyan300: "#67E8F9",
  cyan500: "#06B6D4",
  cyan700: "#0E7490",
  cyan900: "#164E63",
  indigo50: "#EEF2FF",
  indigo100: "#E0E7FF",
  indigo300: "#A5B4FC",
  indigo500: "#6366F1",
  indigo600: "#4F46E5",
  indigo900: "#312E81",
  emerald50: "#ECFDF5",
  emerald400: "#34D399",
  emerald600: "#059669",
  rose50: "#FFF1F2",
  rose400: "#FB7185",
  rose600: "#E11D48",
  amber50: "#FFFBEB",
  amber400: "#FBBF24",
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
/* Scene: A central digital core (the system) being scanned and protected by orbital rings */

const AmcHeroOverlay = () => {
  const shouldReduce = useReducedMotion();
  
  return (
    <g transform="translate(680, 50)">
      {/* Background Tech Elements */}
      <g opacity="0.4">
        <rect x="0" y="0" width="300" height="300" rx="150" fill="none" stroke={color.slate700} strokeWidth="1" strokeDasharray="10 10" />
        <rect x="50" y="50" width="200" height="200" rx="100" fill="none" stroke={color.slate600} strokeWidth="1" />
      </g>

      {/* Central Core (The System) */}
      <g transform="translate(150, 150)">
        <rect x="-60" y="-40" width="120" height="80" rx="10" fill={color.slate900} stroke={color.cyan500} strokeWidth="2" />
        {/* Server Lights */}
        <circle cx="-40" cy="-20" r="3" fill={color.emerald400} />
        <circle cx="-20" cy="-20" r="3" fill={color.emerald400} />
        <circle cx="0" cy="-20" r="3" fill={color.emerald400} />
        {/* Activity Bars */}
        {!shouldReduce && [1, 2, 3].map(i => (
           <motion.rect 
             key={i} 
             x={-50 + i * 25} y="10" width="15" height="4" 
             fill={color.indigo300}
             animate={{ height: [4, 20, 4] }}
             transition={{ duration: 1.5, repeat: Infinity, delay: i * 0.2 }}
           />
        ))}
      </g>

      {/* Orbiting Shield/Scanner */}
      {!shouldReduce && (
        <motion.g animate={{ rotate: 360 }} transition={{ duration: 10, repeat: Infinity, ease: "linear" }} style={{ originX: "150px", originY: "150px" }}>
           <path d="M150 10 A 140 140 0 0 1 290 150" fill="none" stroke={color.cyan400} strokeWidth="4" strokeLinecap="round" />
           <circle cx="150" cy="10" r="6" fill={color.white} />
        </motion.g>
      )}

      {/* Heartbeat Monitor Line */}
      <g transform="translate(50, 250)">
         <path d="M0 20 H 40 L 50 0 L 60 40 L 70 20 H 200" fill="none" stroke={color.emerald400} strokeWidth="2" />
      </g>
    </g>
  );
};

const VideoHeroAmc = ({ src = "", poster = "" }) => {
  const shouldReduce = useReducedMotion();
  const title = "CRCCF AMC Services Hero";
  
  if (shouldReduce || !src) {
    return (
      <svg viewBox="0 0 1000 400" role="img" aria-label={title} className="w-full h-auto">
        <defs>
           <linearGradient id="amcGrad" x1="0" y1="0" x2="1" y2="1">
             <stop offset="0%" stopColor={color.slate900} />
             <stop offset="100%" stopColor={color.cyan900} />
           </linearGradient>
        </defs>
        <rect width="100%" height="100%" fill="url(#amcGrad)" rx="20" />
        <AmcHeroOverlay />
      </svg>
    );
  }

  return (
    <svg viewBox="0 0 1000 400" className="w-full h-auto block" role="img" aria-label={title}>
      <defs>
        <linearGradient id="amcBG" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor={color.slate900} />
          <stop offset="100%" stopColor={color.cyan900} />
        </linearGradient>
        <mask id="amcMask">
          <rect width="100%" height="100%" fill="white" />
          <AmcHeroOverlay />
        </mask>
      </defs>
      
      <rect width="100%" height="100%" fill="url(#amcBG)" rx="20" />
      
      <foreignObject x="0" y="0" width="1000" height="400" mask="url(#amcMask)">
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

      <AmcHeroOverlay />
    </svg>
  );
};

/* ---------------------------- SVG Utils ---------------------------- */
const BG = ({ id, stops }) => (
  <defs> <linearGradient id={id} x1="0" y1="0" x2="1" y2="1"> {stops.map((s, i) => <stop key={i} offset={s.offset} stopColor={s.color} stopOpacity={s.opacity ?? 1} />)} </linearGradient> </defs>
);

/* ------------------------ 20 UNIQUE SECTION SVGs ------------------------ */

// 1. Continuous Monitoring
const SvgMonitoring = ({ className }) => (
  <svg viewBox="0 0 400 300" className={className}>
    <BG id="gMon" stops={[{offset:"0%", color:color.cyan50}, {offset:"100%", color:color.white}]} />
    <rect width="400" height="300" rx="20" fill="url(#gMon)" />
    <g transform="translate(150, 100)">
      <circle cx="50" cy="50" r="45" stroke={color.slate200} strokeWidth="2" fill="none" />
      <circle cx="50" cy="50" r="30" stroke={color.slate300} strokeWidth="2" fill="none" />
      <circle cx="50" cy="50" r="5" fill={color.cyan600} />
      <motion.rect x="48" y="5" width="4" height="45" fill={color.cyan500} style={{originX:"50px", originY:"50px"}} animate={{rotate:360}} transition={{duration:3, repeat:Infinity, ease:"linear"}} />
      <motion.path d="M95 50 A 45 45 0 0 0 50 5" stroke={color.cyan400} strokeWidth="4" fill="none" strokeOpacity="0.5" />
    </g>
  </svg>
);

// 2. Regular Updates
const SvgUpdates = ({ className }) => (
  <svg viewBox="0 0 400 300" className={className}>
    <BG id="gUpd" stops={[{offset:"0%", color:color.indigo50}, {offset:"100%", color:color.white}]} />
    <rect width="400" height="300" rx="20" fill="url(#gUpd)" />
    <g transform="translate(160, 80)">
      <rect x="0" y="60" width="80" height="20" rx="4" fill={color.slate300} />
      <rect x="0" y="90" width="80" height="20" rx="4" fill={color.slate400} />
      <motion.g animate={{ y: [0, -40, 0] }} transition={{duration:3, repeat:Infinity}}>
         <rect x="0" y="30" width="80" height="20" rx="4" fill={color.indigo500} />
         <path d="M40 0 L 20 20 H 60 Z" fill={color.indigo500} />
      </motion.g>
    </g>
  </svg>
);

// 3. Security
const SvgSecurity = ({ className }) => (
  <svg viewBox="0 0 400 300" className={className}>
    <BG id="gSec" stops={[{offset:"0%", color:color.slate800}, {offset:"100%", color:color.slate900}]} />
    <rect width="400" height="300" rx="20" fill="url(#gSec)" />
    <g transform="translate(150, 80)">
      <path d="M50 0 L 100 20 V 60 C 100 100 50 120 50 120 C 50 120 0 100 0 60 V 20 Z" fill={color.emerald600} opacity="0.9" />
      <path d="M30 50 H 70 M 30 70 H 70 M 50 30 V 90" stroke={color.white} strokeWidth="2" strokeDasharray="5 5" opacity="0.5" />
      <motion.circle cx="50" cy="60" r="15" stroke={color.white} strokeWidth="2" fill="none" animate={{ scale: [1, 1.3], opacity: [1, 0] }} transition={{duration:2, repeat:Infinity}} />
    </g>
  </svg>
);

// 4. Performance
const SvgPerformance = ({ className }) => (
  <svg viewBox="0 0 400 300" className={className}>
    <BG id="gPerf" stops={[{offset:"0%", color:color.amber50}, {offset:"100%", color:color.white}]} />
    <rect width="400" height="300" rx="20" fill="url(#gPerf)" />
    <g transform="translate(150, 100)">
      <path d="M0 50 A 50 50 0 0 1 100 50" fill="none" stroke={color.slate300} strokeWidth="10" />
      <path d="M0 50 A 50 50 0 0 1 80 20" fill="none" stroke={color.amber400} strokeWidth="10" strokeLinecap="round" />
      <motion.line x1="50" y1="50" x2="80" y2="20" stroke={color.slate800} strokeWidth="4" initial={{ rotate: -45 }} animate={{ rotate: 45 }} transition={{duration:1, repeat:Infinity, repeatType:"reverse"}} style={{originX:"50px", originY:"50px"}} />
    </g>
  </svg>
);

// 5. Backup
const SvgBackup = ({ className }) => (
  <svg viewBox="0 0 400 300" className={className}>
    <BG id="gBack" stops={[{offset:"0%", color:color.indigo100}, {offset:"100%", color:color.cyan100}]} />
    <rect width="400" height="300" rx="20" fill="url(#gBack)" />
    <g transform="translate(140, 100)">
       <path d="M20 0 C 0 0 0 15 0 15 V 45 C 0 45 0 60 20 60 H 100 C 120 60 120 45 120 45 V 15 C 120 15 120 0 100 0 Z" fill={color.white} stroke={color.indigo300} strokeWidth="2" />
       <motion.rect x="30" y="20" width="60" height="8" rx="4" fill={color.indigo500} animate={{ width: [0, 60] }} transition={{duration:2, repeat:Infinity}} />
       <circle cx="100" cy="50" r="5" fill={color.emerald400} />
    </g>
  </svg>
);

// 6. Bug Fixing
const SvgBugFix = ({ className }) => (
  <svg viewBox="0 0 400 300" className={className}>
    <BG id="gBug" stops={[{offset:"0%", color:color.rose50}, {offset:"100%", color:color.white}]} />
    <rect width="400" height="300" rx="20" fill="url(#gBug)" />
    <g transform="translate(160, 100)">
       <circle cx="40" cy="40" r="30" fill={color.rose400} opacity="0.2" />
       <path d="M25 25 L 55 55 M 55 25 L 25 55" stroke={color.rose600} strokeWidth="4" />
       <motion.g animate={{ rotate: 360 }} transition={{duration:4, repeat:Infinity, ease:"linear"}}>
         <circle cx="40" cy="40" r="35" stroke={color.slate400} strokeWidth="2" strokeDasharray="10 5" fill="none" />
       </motion.g>
    </g>
  </svg>
);

// 7. Server Management
const SvgServer = ({ className }) => (
  <svg viewBox="0 0 400 300" className={className}>
    <BG id="gServ" stops={[{offset:"0%", color:color.slate800}, {offset:"100%", color:color.black}]} />
    <rect width="400" height="300" rx="20" fill="url(#gServ)" />
    <g transform="translate(130, 80)">
       <rect x="0" y="0" width="140" height="140" rx="5" fill={color.slate700} />
       <rect x="10" y="20" width="120" height="20" rx="2" fill={color.slate800} />
       <rect x="10" y="50" width="120" height="20" rx="2" fill={color.slate800} />
       <rect x="10" y="80" width="120" height="20" rx="2" fill={color.slate800} />
       <motion.circle cx="110" cy="30" r="3" fill={color.emerald400} animate={{ opacity: [1, 0.2, 1] }} transition={{duration:0.5, repeat:Infinity}} />
       <motion.circle cx="110" cy="60" r="3" fill={color.cyan400} animate={{ opacity: [1, 0.2, 1] }} transition={{duration:0.7, repeat:Infinity}} />
    </g>
  </svg>
);

// 8. User Support
const SvgSupport = ({ className }) => (
  <svg viewBox="0 0 400 300" className={className}>
    <BG id="gSupp" stops={[{offset:"0%", color:color.cyan50}, {offset:"100%", color:color.indigo50}]} />
    <rect width="400" height="300" rx="20" fill="url(#gSupp)" />
    <g transform="translate(150, 100)">
       <circle cx="50" cy="50" r="40" fill={color.indigo500} />
       <path d="M30 50 Q 50 70, 70 50" stroke={color.white} strokeWidth="3" fill="none" />
       <circle cx="35" cy="40" r="4" fill={color.white} />
       <circle cx="65" cy="40" r="4" fill={color.white} />
       <motion.path d="M85 20 Q 95 10, 105 20" stroke={color.cyan500} strokeWidth="3" fill="none" animate={{ opacity: [0, 1, 0], y: [0, -5, 0] }} transition={{duration:2, repeat:Infinity}} />
    </g>
  </svg>
);

// 9. Compatibility
const SvgCompat = ({ className }) => (
  <svg viewBox="0 0 400 300" className={className}>
    <BG id="gComp" stops={[{offset:"0%", color:color.slate100}, {offset:"100%", color:color.white}]} />
    <rect width="400" height="300" rx="20" fill="url(#gComp)" />
    <g transform="translate(100, 100)">
       <rect x="0" y="0" width="80" height="60" rx="2" fill={color.slate300} stroke={color.slate500} strokeWidth="2" />
       <rect x="90" y="10" width="40" height="50" rx="2" fill={color.slate400} stroke={color.slate600} strokeWidth="2" />
       <rect x="140" y="20" width="30" height="40" rx="2" fill={color.slate500} stroke={color.slate700} strokeWidth="2" />
       <motion.circle cx="110" cy="35" r="5" fill={color.cyan500} animate={{ scale: [1, 1.5, 1] }} transition={{duration:2, repeat:Infinity}} />
    </g>
  </svg>
);

// 10. Content Updates
const SvgContent = ({ className }) => (
  <svg viewBox="0 0 400 300" className={className}>
    <BG id="gCont" stops={[{offset:"0%", color:color.rose50}, {offset:"100%", color:color.orange50}]} />
    <rect width="400" height="300" rx="20" fill="url(#gCont)" />
    <g transform="translate(140, 80)">
       <rect x="0" y="0" width="120" height="140" rx="5" fill={color.white} stroke={color.slate200} />
       <rect x="10" y="10" width="100" height="60" fill={color.rose100} />
       <rect x="10" y="80" width="80" height="8" rx="4" fill={color.slate200} />
       <rect x="10" y="100" width="60" height="8" rx="4" fill={color.slate200} />
       <motion.path d="M110 120 L 130 140 L 140 100" stroke={color.rose500} strokeWidth="4" fill="none" animate={{ pathLength: [0, 1] }} transition={{duration:2, repeat:Infinity}} />
    </g>
  </svg>
);

// 11. Database Health
const SvgDatabase = ({ className }) => (
  <svg viewBox="0 0 400 300" className={className}>
    <BG id="gData" stops={[{offset:"0%", color:color.cyan50}, {offset:"100%", color:color.blue50}]} />
    <rect width="400" height="300" rx="20" fill="url(#gData)" />
    <g transform="translate(160, 80)">
       <ellipse cx="40" cy="20" rx="40" ry="10" fill={color.cyan600} />
       <path d="M0 20 V 60 C 0 70, 80 70, 80 60 V 20" fill={color.cyan500} />
       <path d="M0 70 V 110 C 0 120, 80 120, 80 110 V 70" fill={color.cyan700} />
       <motion.rect x="35" y="0" width="10" height="120" fill={color.white} opacity="0.3" animate={{ x: [0, 40] }} transition={{duration:2, repeat:Infinity}} />
    </g>
  </svg>
);

// 12. Testing
const SvgTesting = ({ className }) => (
  <svg viewBox="0 0 400 300" className={className}>
    <BG id="gTest" stops={[{offset:"0%", color:color.emerald50}, {offset:"100%", color:color.white}]} />
    <rect width="400" height="300" rx="20" fill="url(#gTest)" />
    <g transform="translate(150, 100)">
       <rect x="0" y="0" width="100" height="100" rx="10" fill={color.white} stroke={color.slate200} />
       <path d="M20 50 L 40 70 L 80 30" stroke={color.emerald500} strokeWidth="6" fill="none" strokeLinecap="round" />
       <motion.circle cx="80" cy="30" r="5" fill={color.emerald400} animate={{ scale: [1, 2], opacity: [1, 0] }} transition={{duration:1, repeat:Infinity}} />
    </g>
  </svg>
);

// 13. Preventive
const SvgPreventive = ({ className }) => (
  <svg viewBox="0 0 400 300" className={className}>
    <BG id="gPrev" stops={[{offset:"0%", color:color.amber50}, {offset:"100%", color:color.yellow50}]} />
    <rect width="400" height="300" rx="20" fill="url(#gPrev)" />
    <g transform="translate(150, 80)">
       <path d="M50 0 L 100 90 H 0 Z" fill={color.amber400} />
       <path d="M50 25 V 55" stroke={color.white} strokeWidth="6" strokeLinecap="round" />
       <circle cx="50" cy="70" r="4" fill={color.white} />
       <motion.circle cx="50" cy="45" r="40" stroke={color.amber500} strokeWidth="2" fill="none" animate={{ scale: [0.8, 1.2], opacity: [1, 0] }} transition={{duration:2, repeat:Infinity}} />
    </g>
  </svg>
);

// 14. Scalability
const SvgScale = ({ className }) => (
  <svg viewBox="0 0 400 300" className={className}>
    <BG id="gScale" stops={[{offset:"0%", color:color.indigo50}, {offset:"100%", color:color.white}]} />
    <rect width="400" height="300" rx="20" fill="url(#gScale)" />
    <g transform="translate(150, 150)">
       <rect x="-20" y="-20" width="40" height="40" fill={color.indigo400} />
       <motion.rect x="-40" y="-40" width="80" height="80" stroke={color.indigo300} strokeWidth="2" fill="none" animate={{ scale: [1, 1.1] }} transition={{duration:2, repeat:Infinity, repeatType:"reverse"}} />
       <path d="M20 0 H 50 M 0 20 V 50 M -20 0 H -50 M 0 -20 V -50" stroke={color.indigo600} strokeWidth="2" />
    </g>
  </svg>
);

// 15. AI Process
const SvgAIProc = ({ className }) => (
  <svg viewBox="0 0 400 300" className={className}>
    <BG id="gAI" stops={[{offset:"0%", color:color.slate900}, {offset:"100%", color:color.indigo900}]} />
    <rect width="400" height="300" rx="20" fill="url(#gAI)" />
    <g transform="translate(140, 100)">
       <path d="M0 50 C 20 50, 20 20, 40 20 S 60 80, 80 80 S 100 50, 120 50" stroke={color.slate600} strokeWidth="2" fill="none" />
       <motion.path d="M0 50 L 120 50" stroke={color.cyan400} strokeWidth="3" fill="none" initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{duration:2, repeat:Infinity}} />
    </g>
  </svg>
);

// 16. AI Integration
const SvgAIInt = ({ className }) => (
  <svg viewBox="0 0 400 300" className={className}>
    <BG id="gInt" stops={[{offset:"0%", color:color.cyan50}, {offset:"100%", color:color.emerald50}]} />
    <rect width="400" height="300" rx="20" fill="url(#gInt)" />
    <g transform="translate(150, 100)">
       <rect x="0" y="0" width="100" height="100" fill={color.white} stroke={color.slate200} />
       <motion.rect x="30" y="30" width="40" height="40" fill={color.emerald500} animate={{ rotate: 90 }} transition={{duration:3, repeat:Infinity}} style={{originX:"50px", originY:"50px"}} />
       <path d="M50 0 V 30 M 50 70 V 100 M 0 50 H 30 M 70 50 H 100" stroke={color.emerald300} strokeWidth="2" />
    </g>
  </svg>
);

// 17. Sector Specific
const SvgSector = ({ className }) => (
  <svg viewBox="0 0 400 300" className={className}>
    <BG id="gSect" stops={[{offset:"0%", color:color.rose50}, {offset:"100%", color:color.indigo50}]} />
    <rect width="400" height="300" rx="20" fill="url(#gSect)" />
    <g transform="translate(150, 100)">
       <circle cx="50" cy="50" r="20" fill={color.indigo600} />
       <motion.g animate={{ rotate: 360 }} transition={{duration:6, repeat:Infinity, ease:"linear"}} style={{originX:"50px", originY:"50px"}}>
          <circle cx="50" cy="10" r="8" fill={color.rose400} />
          <circle cx="90" cy="50" r="8" fill={color.cyan400} />
          <circle cx="50" cy="90" r="8" fill={color.emerald400} />
          <circle cx="10" cy="50" r="8" fill={color.amber400} />
       </motion.g>
    </g>
  </svg>
);

// 18. Learning
const SvgLearn = ({ className }) => (
  <svg viewBox="0 0 400 300" className={className}>
    <BG id="gLearn" stops={[{offset:"0%", color:color.indigo100}, {offset:"100%", color:color.cyan100}]} />
    <rect width="400" height="300" rx="20" fill="url(#gLearn)" />
    <g transform="translate(120, 100)">
       <circle cx="40" cy="50" r="10" fill={color.indigo500} />
       <circle cx="120" cy="50" r="10" fill={color.indigo500} />
       <path d="M40 50 C 60 10, 100 90, 120 50" stroke={color.indigo300} strokeWidth="2" fill="none" />
       <path d="M40 50 C 60 90, 100 10, 120 50" stroke={color.indigo300} strokeWidth="2" fill="none" />
       <motion.circle r="5" fill={color.cyan500} animate={{ offsetDistance: "100%" }} style={{ offsetPath: "path('M40 50 C 60 10, 100 90, 120 50')" }} transition={{duration:2, repeat:Infinity, ease:"linear"}} />
    </g>
  </svg>
);

// 19. Future
const SvgFuture = ({ className }) => (
  <svg viewBox="0 0 400 300" className={className}>
    <BG id="gFut" stops={[{offset:"0%", color:color.slate800}, {offset:"100%", color:color.indigo800}]} />
    <rect width="400" height="300" rx="20" fill="url(#gFut)" />
    <g transform="translate(150, 150)">
       <path d="M-50 50 L 150 50" stroke={color.cyan500} strokeWidth="2" />
       <motion.circle cx="50" cy="50" r="30" fill={color.amber400} animate={{ cy: 0 }} transition={{duration:3}} />
       <path d="M-50 50 L 50 0 L 150 50" fill="url(#gFut)" opacity="0.8" />
    </g>
  </svg>
);

// 20. Partnership
const SvgPartner = ({ className }) => (
  <svg viewBox="0 0 400 300" className={className}>
    <BG id="gPart" stops={[{offset:"0%", color:color.teal50}, {offset:"100%", color:color.cyan50}]} />
    <rect width="400" height="300" rx="20" fill="url(#gPart)" />
    <g transform="translate(130, 100)">
       <circle cx="40" cy="50" r="30" fill={color.cyan600} opacity="0.8" />
       <circle cx="100" cy="50" r="30" fill={color.emerald600} opacity="0.8" />
       <motion.path d="M40 50 H 100" stroke={color.white} strokeWidth="4" strokeDasharray="5 5" animate={{ strokeDashoffset: -10 }} transition={{duration:1, repeat:Infinity, ease:"linear"}} />
    </g>
  </svg>
);

// Mapper
const svgMap = {
  'sec1-continuous-monitoring-and-rapid-issue-resolution': SvgMonitoring,
  'sec2-regular-updates-upgrades-and-feature-enhancements': SvgUpdates,
  'sec3-strong-security-management-and-threat-prevention': SvgSecurity,
  'sec4-performance-optimisation-for-speed-and-smooth-user-experience': SvgPerformance,
  'sec5-backup-management-and-data-recovery-assurance': SvgBackup,
  'sec6-bug-fixing-error-correction-and-smooth-functionality-assurance': SvgBugFix,
  'sec7-server-management-hosting-support-and-smooth-deployment-handling': SvgServer,
  'sec8-user-support-training-assistance-and-easy-issue-reporting': SvgSupport,
  'sec9-compatibility-checks-across-devices-browsers-and-operating-systems': SvgCompat,
  'sec10-content-updates-visual-refresh-and-professional-presentation-maintenance': SvgContent,
  'sec11-database-health-management-and-long-term-system-stability': SvgDatabase,
  'sec12-system-testing-quality-checks-and-continuous-improvement': SvgTesting,
  'sec13-preventive-maintenance-to-avoid-future-failures': SvgPreventive,
  'sec14-seamless-scalability-support-for-growing-organisations': SvgScale,
  'sec15-ai-for-process-optimisation-and-operational-efficiency': SvgAIProc,
  'sec16-ai-integration-with-existing-software-and-digital-ecosystems': SvgAIInt,
  'sec17-sector-specific-ai-solutions-tailored-to-unique-needs': SvgSector,
  'sec18-continuous-learning-systems-that-evolve-over-time': SvgLearn,
  'sec19-building-a-future-ready-organisation-with-responsible-ai-adoption': SvgFuture,
  'sec20-a-long-term-partnership-that-ensures-peace-of-mind': SvgPartner,
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
    useTransform(scrollYProgress, [0, 1], shouldReduce ? [0, 0] : [20, -20]),
    { stiffness: 120, damping: 20 }
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
    <section id={id} ref={ref} className="mt-12 sm:mt-16 md:mt-20">
      <motion.div
        style={{ opacity: shouldReduce ? 1 : opacity }}
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: shouldReduce ? 0 : 0.6 }}
        className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-10 md:gap-12 items-center"
      >
        <motion.div
          style={{ y }}
          className={`relative min-w-0 flex flex-col ${
            reverse ? "md:order-2" : "md:order-1"
          }`}
        >
          <div
            className="absolute -inset-3 rounded-2xl bg-gradient-to-tr from-cyan-100 via-indigo-100 to-emerald-100 blur-xl opacity-70"
            aria-hidden="true"
          />
          <div className="relative rounded-2xl border border-gray-100 bg-white p-4 shadow-sm flex-grow flex items-center justify-center overflow-hidden hover:shadow-md transition-shadow duration-300">
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
          <h2 className="text-xl sm:text-2xl font-bold text-gray-900 leading-tight mb-4">
            {title}
          </h2>
          <div className="space-y-4">{paragraphs}</div>
        </div>
      </motion.div>
    </section>
  );
};

/* ---------------------------------- Page ---------------------------------- */
export default function AmcServices() {
  const { container, itemUp } = useAnims();
  const heroRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });
  const heroY = useTransform(scrollYProgress, [0, 1], [0, -50]);

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
        <Link to="/" className="hover:text-indigo-600 transition-colors">
          Home
        </Link>
        <span className="mx-2">/</span>
        <Link to="/services" className="hover:text-indigo-600 transition-colors">
          Services
        </Link>
        <span className="mx-2">/</span>
        <span className="text-gray-900 font-medium">AMC Services</span>
      </motion.nav>

      {/* Hero */}
      <div
        ref={heroRef}
        className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center mb-16"
      >
        <motion.div variants={itemUp}>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-gray-900 tracking-tight">
            Comprehensive <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-600 to-indigo-600">AMC Services</span>
          </h1>
          <p className="mt-4 text-base md:text-lg text-gray-600 leading-relaxed max-w-xl">
            Ensuring your digital ecosystem remains secure, updated, and efficient year-round. We provide the stability your organization needs to grow without technical interruptions.
          </p>
          <div className="mt-6 flex flex-wrap gap-2">
            {["24/7 Monitoring", "Zero Downtime", "Future-Ready"].map((pill) => (
              <span
                key={pill}
                className="px-3 py-1 text-sm font-medium rounded-full bg-indigo-50 text-indigo-700 border border-indigo-100"
              >
                {pill}
              </span>
            ))}
          </div>
        </motion.div>

        <motion.div style={{ y: heroY }} className="relative">
          <div
            className="absolute -inset-4 rounded-3xl bg-gradient-to-br from-cyan-200 via-indigo-200 to-emerald-200 blur-2xl opacity-40"
            aria-hidden="true"
          />
          <div className="relative rounded-2xl overflow-hidden shadow-xl border border-gray-200 bg-white">
            <VideoHeroAmc
              src="https://cdn.coverr.co/videos/coverr-servers-in-a-data-center-4573/1080p.mp4" 
            />
          </div>
        </motion.div>
      </div>

      {/* Sections List */}
      <div className="space-y-12 sm:space-y-16">
        {amcServicesData.map((sec, idx) => {
          const SVGComp = svgMap[sec.id] || SvgMonitoring;
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