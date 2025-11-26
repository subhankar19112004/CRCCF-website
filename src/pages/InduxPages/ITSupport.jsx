// src/pages/services/ITSupport.jsx
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
import { itSupportData } from "../../data/induxData/itSupportData.js";

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
  title: "IT Support & Services",
  tagline: "Comprehensive technical solutions ensuring stability, security, and efficiency for your digital ecosystem.",
};

/* -------------------------- HERO: Video SVG (inline) -------------------------- */
/* Scene: A futuristic server room / operations center with glowing racks and data streams. */

const ITOpsOverlay = () => {
  const shouldReduce = useReducedMotion();
  
  return (
    <g transform="translate(680, 50)">
      {/* Server Racks */}
      {[0, 60, 120].map((x, i) => (
        <g key={i} transform={`translate(${x}, 50)`}>
          <rect x="0" y="0" width="40" height="200" rx="2" fill={color.slate800} />
          {/* Blinking Lights */}
          {!shouldReduce && Array.from({ length: 8 }).map((_, j) => (
            <motion.circle 
              key={j} 
              cx="10" cy={20 + j * 20} r="2" 
              fill={j % 2 === 0 ? color.emerald400 : color.cyan400}
              animate={{ opacity: [0.2, 1, 0.2] }}
              transition={{ duration: 0.5 + Math.random(), repeat: Infinity, delay: Math.random() }}
            />
          ))}
          {!shouldReduce && Array.from({ length: 8 }).map((_, j) => (
            <motion.circle 
              key={`r-${j}`} 
              cx="30" cy={20 + j * 20} r="2" 
              fill={color.indigo400}
              animate={{ opacity: [0.2, 1, 0.2] }}
              transition={{ duration: 0.8 + Math.random(), repeat: Infinity, delay: Math.random() }}
            />
          ))}
        </g>
      ))}

      {/* Operations Console */}
      <g transform="translate(-20, 260)">
        <path d="M0 0 L 200 0 L 220 40 L -20 40 Z" fill={color.slate700} />
        <rect x="20" y="-50" width="60" height="40" fill={color.cyan900} stroke={color.cyan500} strokeWidth="1" />
        <rect x="100" y="-50" width="60" height="40" fill={color.cyan900} stroke={color.cyan500} strokeWidth="1" />
        
        {/* Screen Activity */}
        <motion.rect 
          x="25" y="-45" width="50" height="2" fill={color.cyan400}
          animate={{ width: [0, 50] }} transition={{ duration: 2, repeat: Infinity }}
        />
        <motion.rect 
          x="25" y="-40" width="30" height="2" fill={color.cyan400}
          animate={{ width: [0, 30] }} transition={{ duration: 2, delay: 0.5, repeat: Infinity }}
        />
      </g>

      {/* Data Streams */}
      {!shouldReduce && (
        <g opacity="0.5">
          <motion.path 
            d="M20 250 C 20 150, 150 150, 150 50" 
            fill="none" stroke={color.cyan300} strokeWidth="2" strokeDasharray="5 5"
            animate={{ strokeDashoffset: [0, -20] }}
            transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
          />
          <motion.path 
            d="M80 250 C 80 150, 200 150, 200 50" 
            fill="none" stroke={color.emerald300} strokeWidth="2" strokeDasharray="5 5"
            animate={{ strokeDashoffset: [0, -20] }}
            transition={{ duration: 1.2, repeat: Infinity, ease: "linear" }}
          />
        </g>
      )}
    </g>
  );
};

const VideoHeroITSupport = ({ src = "", poster = "" }) => {
  const shouldReduce = useReducedMotion();
  const title = "CRCCF IT Support Hero";
  const desc = "A futuristic server room representing IT operations.";

  if (shouldReduce || !src) {
    return (
      <svg viewBox="0 0 1000 400" role="img" aria-labelledby="itTitle itDesc" className="w-full h-auto">
        <title id="itTitle">{title}</title>
        <desc id="itDesc">{desc}</desc>
        <defs>
          <linearGradient id="itGrad" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor={color.slate900} />
            <stop offset="100%" stopColor={color.indigo900} />
          </linearGradient>
        </defs>
        <rect width="100%" height="100%" fill="url(#itGrad)" rx="20" />
        <ITOpsOverlay />
      </svg>
    );
  }

  return (
    <svg viewBox="0 0 1000 400" className="w-full h-auto block" role="img" aria-label={title}>
      <defs>
        <linearGradient id="itBG" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor={color.slate900} />
          <stop offset="100%" stopColor={color.indigo900} />
        </linearGradient>
        <mask id="itMask">
          <rect width="100%" height="100%" fill="white" />
          <ITOpsOverlay />
        </mask>
      </defs>
      
      <rect width="100%" height="100%" fill="url(#itBG)" rx="20" />
      
      <foreignObject x="0" y="0" width="1000" height="400" mask="url(#itMask)">
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

      <ITOpsOverlay />
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

/* ------------------------ 20 Unique Section SVGs ------------------------ */

// 1. System Installation
const SvgSystemInstall = ({ className }) => (
  <svg viewBox="0 0 400 300" className={className} xmlns="http://www.w3.org/2000/svg">
    <BG id="gradSys" stops={[{ offset: "0%", color: color.indigo50 }, { offset: "100%", color: color.cyan50 }]} />
    <rect width="400" height="300" rx="20" fill="url(#gradSys)" />
    <g transform="translate(100, 80)">
      <rect x="0" y="0" width="200" height="140" rx="10" fill={color.slate800} />
      <rect x="10" y="10" width="180" height="120" fill={color.slate900} />
      <path d="M-20 140 H 220 V 150 H -20 Z" fill={color.slate700} />
      <motion.rect 
        x="30" y="100" width="0" height="10" rx="5" fill={color.emerald400}
        animate={{ width: 140 }} transition={{ duration: 2, repeat: Infinity }}
      />
      <text x="100" y="80" fill={color.white} fontSize="14" textAnchor="middle">INSTALLING...</text>
    </g>
  </svg>
);

// 2. Hardware Support
const SvgHardware = ({ className }) => (
  <svg viewBox="0 0 400 300" className={className} xmlns="http://www.w3.org/2000/svg">
    <BG id="gradHard" stops={[{ offset: "0%", color: color.slate100 }, { offset: "100%", color: color.slate300 }]} />
    <rect width="400" height="300" rx="20" fill="url(#gradHard)" />
    <g transform="translate(120, 100)">
      <path d="M0 0 H 160 V 100 H 0 Z" fill={color.emerald800} />
      {/* Circuit Lines */}
      <path d="M20 20 H 140 M 20 40 H 140 M 20 60 H 140" stroke={color.emerald600} strokeWidth="2" />
      <rect x="40" y="30" width="80" height="40" fill={color.black} />
      <motion.g transform="translate(120, 80)" animate={{ rotate: 360 }} transition={{ duration: 4, repeat: Infinity, ease: "linear" }}>
        <path d="M-15 0 L 15 0 M 0 -15 L 0 15" stroke={color.slate500} strokeWidth="4" />
        <circle r="10" fill="none" stroke={color.slate500} strokeWidth="2" />
      </motion.g>
    </g>
  </svg>
);

// 3. Software Support
const SvgSoftware = ({ className }) => (
  <svg viewBox="0 0 400 300" className={className} xmlns="http://www.w3.org/2000/svg">
    <BG id="gradSoft" stops={[{ offset: "0%", color: color.cyan50 }, { offset: "100%", color: color.indigo100 }]} />
    <rect width="400" height="300" rx="20" fill="url(#gradSoft)" />
    <g transform="translate(140, 80)">
      <rect x="0" y="0" width="120" height="120" rx="20" fill={color.indigo500} />
      <text x="60" y="75" fill={color.white} fontSize="40" fontWeight="bold" textAnchor="middle">{"</>"}</text>
      <motion.circle 
        cx="110" cy="10" r="15" fill={color.rose500}
        animate={{ scale: [1, 1.2, 1] }} transition={{ duration: 1, repeat: Infinity }}
      />
      <text x="110" y="15" fill={color.white} fontSize="12" fontWeight="bold" textAnchor="middle">!</text>
    </g>
  </svg>
);

// 4. Network Design
const SvgNetwork = ({ className }) => (
  <svg viewBox="0 0 400 300" className={className} xmlns="http://www.w3.org/2000/svg">
    <BG id="gradNet" stops={[{ offset: "0%", color: color.indigo50 }, { offset: "100%", color: color.emerald50 }]} />
    <rect width="400" height="300" rx="20" fill="url(#gradNet)" />
    <g transform="translate(200, 150)">
      <circle cx="0" cy="0" r="20" fill={color.slate700} />
      {[0, 90, 180, 270].map((rot, i) => (
        <g key={i} transform={`rotate(${rot})`}>
          <motion.line 
            x1="0" y1="0" x2="80" y2="0" stroke={color.slate400} strokeWidth="4"
            initial={{ pathLength: 0 }} whileInView={{ pathLength: 1 }} transition={{ duration: 1 }}
          />
          <circle cx="80" cy="0" r="15" fill={color.cyan500} />
        </g>
      ))}
    </g>
  </svg>
);

// 5. Cybersecurity
const SvgCyberSec = ({ className }) => (
  <svg viewBox="0 0 400 300" className={className} xmlns="http://www.w3.org/2000/svg">
    <BG id="gradSec" stops={[{ offset: "0%", color: color.slate800 }, { offset: "100%", color: color.slate900 }]} />
    <rect width="400" height="300" rx="20" fill="url(#gradSec)" />
    <g transform="translate(200, 150)">
      <motion.path 
        d="M-60 -20 L 0 -50 L 60 -20 V 40 C 60 80, 0 110, 0 110 C 0 110, -60 80, -60 40 Z" 
        fill="none" stroke={color.cyan400} strokeWidth="4"
        initial={{ pathLength: 0 }} whileInView={{ pathLength: 1 }} transition={{ duration: 1 }}
      />
      <path d="M-20 20 V 0 C -20 -20, 20 -20, 20 0 V 20" stroke={color.white} strokeWidth="4" fill="none" />
      <rect x="-30" y="20" width="60" height="40" rx="5" fill={color.emerald500} />
    </g>
  </svg>
);

// 6. Data Backup
const SvgBackup = ({ className }) => (
  <svg viewBox="0 0 400 300" className={className} xmlns="http://www.w3.org/2000/svg">
    <BG id="gradBack" stops={[{ offset: "0%", color: color.amber50 }, { offset: "100%", color: color.orange50 }]} />
    <rect width="400" height="300" rx="20" fill="url(#gradBack)" />
    <g transform="translate(140, 100)">
      <path d="M0 0 H 120 V 80 H 0 Z" fill={color.slate700} />
      <path d="M10 10 H 110 V 70 H 10 Z" fill={color.slate800} />
      <motion.path 
        d="M40 40 L 60 20 L 80 40 M 60 20 V 60" 
        stroke={color.amber400} strokeWidth="6" strokeLinecap="round" strokeLinejoin="round"
        animate={{ y: [0, -5, 0] }} transition={{ duration: 1.5, repeat: Infinity }}
      />
      <path d="M20 90 H 100" stroke={color.slate400} strokeWidth="4" />
    </g>
  </svg>
);

// 7. Cloud Services
const SvgCloud = ({ className }) => (
  <svg viewBox="0 0 400 300" className={className} xmlns="http://www.w3.org/2000/svg">
    <BG id="gradCloud" stops={[{ offset: "0%", color: color.cyan100 }, { offset: "100%", color: color.white }]} />
    <rect width="400" height="300" rx="20" fill="url(#gradCloud)" />
    <g transform="translate(200, 150)">
      <path d="M-60 20 A 40 40 0 0 1 -20 -20 A 50 50 0 0 1 70 -10 A 40 40 0 0 1 90 40 H -60 Z" fill={color.cyan500} />
      <motion.circle cx="-20" cy="60" r="5" fill={color.indigo500} animate={{ y: [-10, 0] }} transition={{ duration: 1, repeat: Infinity }} />
      <motion.circle cx="20" cy="60" r="5" fill={color.indigo500} animate={{ y: [-10, 0] }} transition={{ duration: 1, delay: 0.2, repeat: Infinity }} />
      <motion.circle cx="60" cy="60" r="5" fill={color.indigo500} animate={{ y: [-10, 0] }} transition={{ duration: 1, delay: 0.4, repeat: Infinity }} />
    </g>
  </svg>
);

// 8. Performance
const SvgPerformance = ({ className }) => (
  <svg viewBox="0 0 400 300" className={className} xmlns="http://www.w3.org/2000/svg">
    <BG id="gradPerf" stops={[{ offset: "0%", color: color.rose50 }, { offset: "100%", color: color.purple50 }]} />
    <rect width="400" height="300" rx="20" fill="url(#gradPerf)" />
    <g transform="translate(200, 200)">
      <path d="M-80 0 A 80 80 0 0 1 80 0" fill="none" stroke={color.slate300} strokeWidth="15" />
      <path d="M-80 0 A 80 80 0 0 1 20 -75" fill="none" stroke={color.rose500} strokeWidth="15" />
      <motion.line 
        x1="0" y1="0" x2="0" y2="-70" stroke={color.slate800} strokeWidth="4"
        animate={{ rotate: [0, 60, 0] }} transition={{ duration: 2, repeat: Infinity }}
      />
      <circle cx="0" cy="0" r="10" fill={color.slate800} />
    </g>
  </svg>
);

// 9. Asset Management
const SvgAsset = ({ className }) => (
  <svg viewBox="0 0 400 300" className={className} xmlns="http://www.w3.org/2000/svg">
    <BG id="gradAsset" stops={[{ offset: "0%", color: color.emerald50 }, { offset: "100%", color: color.slate100 }]} />
    <rect width="400" height="300" rx="20" fill="url(#gradAsset)" />
    <g transform="translate(140, 80)">
      <rect x="0" y="0" width="120" height="140" rx="5" fill={color.white} stroke={color.slate300} strokeWidth="2" />
      <rect x="20" y="20" width="80" height="10" rx="2" fill={color.slate200} />
      <rect x="20" y="40" width="60" height="10" rx="2" fill={color.slate200} />
      <motion.path d="M90 100 L 100 110 L 120 90" fill="none" stroke={color.emerald500} strokeWidth="4" initial={{ pathLength: 0 }} whileInView={{ pathLength: 1 }} />
    </g>
  </svg>
);

// 10. User Training
const SvgTraining = ({ className }) => (
  <svg viewBox="0 0 400 300" className={className} xmlns="http://www.w3.org/2000/svg">
    <BG id="gradTrain" stops={[{ offset: "0%", color: color.amber50 }, { offset: "100%", color: color.cyan50 }]} />
    <rect width="400" height="300" rx="20" fill="url(#gradTrain)" />
    <g transform="translate(100, 100)">
      {/* Teacher */}
      <circle cx="20" cy="20" r="15" fill={color.indigo600} />
      <path d="M5 40 Q 20 70 35 40 V 80 H 5 Z" fill={color.indigo600} />
      {/* Board */}
      <rect x="60" y="0" width="100" height="60" rx="2" fill={color.slate700} />
      <path d="M70 20 L 80 30 L 100 10" fill="none" stroke={color.white} strokeWidth="2" />
    </g>
  </svg>
);

// 11. Custom Software
const SvgCustomSoft = ({ className }) => (
  <svg viewBox="0 0 400 300" className={className} xmlns="http://www.w3.org/2000/svg">
    <BG id="gradCust" stops={[{ offset: "0%", color: color.purple50 }, { offset: "100%", color: color.indigo50 }]} />
    <rect width="400" height="300" rx="20" fill="url(#gradCust)" />
    <g transform="translate(150, 100)">
      <path d="M0 0 L 30 20 L 0 40 L -30 20 Z" fill={color.indigo400} />
      <path d="M0 40 L 30 60 L 0 80 L -30 60 Z" fill={color.purple400} />
      <motion.path d="M0 -20 V 20" stroke={color.indigo600} strokeWidth="2" animate={{ height: [0, 40] }} transition={{ duration: 1, repeat: Infinity }} />
    </g>
  </svg>
);

// 12. Testing & QA
const SvgQA = ({ className }) => (
  <svg viewBox="0 0 400 300" className={className} xmlns="http://www.w3.org/2000/svg">
    <BG id="gradQA" stops={[{ offset: "0%", color: color.emerald50 }, { offset: "100%", color: color.white }]} />
    <rect width="400" height="300" rx="20" fill="url(#gradQA)" />
    <g transform="translate(150, 100)">
      <circle cx="50" cy="50" r="40" fill="none" stroke={color.slate300} strokeWidth="4" />
      <motion.path d="M30 50 L 45 65 L 70 35" fill="none" stroke={color.emerald500} strokeWidth="6" strokeLinecap="round" initial={{ pathLength: 0 }} whileInView={{ pathLength: 1 }} />
    </g>
  </svg>
);

// 13. UI/UX Design
const SvgUIUX = ({ className }) => (
  <svg viewBox="0 0 400 300" className={className} xmlns="http://www.w3.org/2000/svg">
    <BG id="gradUI" stops={[{ offset: "0%", color: color.pink50 }, { offset: "100%", color: color.rose50 }]} />
    <rect width="400" height="300" rx="20" fill="url(#gradUI)" />
    <g transform="translate(120, 80)">
      <rect x="0" y="0" width="160" height="120" rx="5" fill={color.white} stroke={color.slate200} strokeWidth="2" />
      <circle cx="30" cy="30" r="15" fill={color.pink300} />
      <rect x="60" y="20" width="80" height="10" rx="2" fill={color.slate200} />
      <rect x="60" y="40" width="60" height="10" rx="2" fill={color.slate200} />
      <motion.rect x="120" y="80" width="30" height="30" rx="5" fill={color.indigo400} animate={{ scale: [1, 1.1, 1] }} transition={{ duration: 1, repeat: Infinity }} />
    </g>
  </svg>
);

// 14. Mobile App
const SvgMobile = ({ className }) => (
  <svg viewBox="0 0 400 300" className={className} xmlns="http://www.w3.org/2000/svg">
    <BG id="gradMob" stops={[{ offset: "0%", color: color.slate50 }, { offset: "100%", color: color.indigo50 }]} />
    <rect width="400" height="300" rx="20" fill="url(#gradMob)" />
    <g transform="translate(160, 60)">
      <rect x="0" y="0" width="80" height="160" rx="10" fill={color.slate800} />
      <rect x="5" y="10" width="70" height="140" fill={color.white} />
      <motion.rect x="20" y="40" width="40" height="40" rx="5" fill={color.cyan500} animate={{ rotate: 360 }} transition={{ duration: 4, repeat: Infinity }} />
    </g>
  </svg>
);

// 15. Desktop App
const SvgDesktop = ({ className }) => (
  <svg viewBox="0 0 400 300" className={className} xmlns="http://www.w3.org/2000/svg">
    <BG id="gradDesk" stops={[{ offset: "0%", color: color.cyan50 }, { offset: "100%", color: color.slate100 }]} />
    <rect width="400" height="300" rx="20" fill="url(#gradDesk)" />
    <g transform="translate(120, 80)">
      <rect x="0" y="0" width="160" height="100" rx="5" fill={color.slate700} />
      <rect x="5" y="5" width="150" height="90" fill={color.white} />
      <path d="M0 100 L 20 120 H 140 L 160 100" fill={color.slate400} />
      <rect x="40" y="30" width="80" height="40" rx="2" fill={color.indigo100} stroke={color.indigo300} />
    </g>
  </svg>
);

// 16. iOS App
const SvgIOS = ({ className }) => (
  <svg viewBox="0 0 400 300" className={className} xmlns="http://www.w3.org/2000/svg">
    <BG id="gradIOS" stops={[{ offset: "0%", color: color.slate100 }, { offset: "100%", color: color.white }]} />
    <rect width="400" height="300" rx="20" fill="url(#gradIOS)" />
    <g transform="translate(160, 80)">
      <circle cx="40" cy="60" r="40" fill={color.black} />
      <circle cx="55" cy="45" r="20" fill={color.white} />
      <path d="M40 10 Q 50 0, 60 10 Q 50 20, 40 10" fill={color.black} />
    </g>
  </svg>
);

// 17. Web App
const SvgWebApp = ({ className }) => (
  <svg viewBox="0 0 400 300" className={className} xmlns="http://www.w3.org/2000/svg">
    <BG id="gradWeb" stops={[{ offset: "0%", color: color.indigo50 }, { offset: "100%", color: color.purple50 }]} />
    <rect width="400" height="300" rx="20" fill="url(#gradWeb)" />
    <g transform="translate(100, 80)">
      <rect x="0" y="0" width="200" height="140" rx="5" fill={color.white} stroke={color.slate300} strokeWidth="2" />
      <rect x="0" y="0" width="200" height="20" rx="5" fill={color.slate200} />
      <circle cx="10" cy="10" r="3" fill={color.rose400} />
      <circle cx="20" cy="10" r="3" fill={color.amber400} />
      <circle cx="30" cy="10" r="3" fill={color.emerald400} />
      <motion.rect x="20" y="40" width="60" height="80" rx="2" fill={color.indigo100} animate={{ width: [60, 160, 60] }} transition={{ duration: 4, repeat: Infinity }} />
    </g>
  </svg>
);

// 18. Research
const SvgResearch = ({ className }) => (
  <svg viewBox="0 0 400 300" className={className} xmlns="http://www.w3.org/2000/svg">
    <BG id="gradRes" stops={[{ offset: "0%", color: color.blue50 }, { offset: "100%", color: color.cyan50 }]} />
    <rect width="400" height="300" rx="20" fill="url(#gradRes)" />
    <g transform="translate(160, 80)">
      <circle cx="40" cy="40" r="30" fill="none" stroke={color.slate400} strokeWidth="4" />
      <path d="M60 60 L 80 80" stroke={color.slate400} strokeWidth="6" strokeLinecap="round" />
      <motion.circle cx="40" cy="40" r="10" fill={color.cyan500} animate={{ scale: [1, 1.5, 1] }} transition={{ duration: 2, repeat: Infinity }} />
    </g>
  </svg>
);

// 19. Architecture
const SvgArch = ({ className }) => (
  <svg viewBox="0 0 400 300" className={className} xmlns="http://www.w3.org/2000/svg">
    <BG id="gradArch" stops={[{ offset: "0%", color: color.indigo100 }, { offset: "100%", color: color.slate100 }]} />
    <rect width="400" height="300" rx="20" fill="url(#gradArch)" />
    <g transform="translate(120, 60)">
      <rect x="0" y="0" width="160" height="180" fill="none" stroke={color.white} strokeWidth="2" strokeDasharray="5 5" />
      <rect x="60" y="20" width="40" height="40" fill={color.indigo500} />
      <path d="M80 60 V 80 M 40 80 H 120 M 40 80 V 100 M 120 80 V 100" stroke={color.slate500} strokeWidth="2" />
      <rect x="20" y="100" width="40" height="40" fill={color.indigo300} />
      <rect x="100" y="100" width="40" height="40" fill={color.indigo300} />
    </g>
  </svg>
);

// 20. DevOps
const SvgDevOps = ({ className }) => (
  <svg viewBox="0 0 400 300" className={className} xmlns="http://www.w3.org/2000/svg">
    <BG id="gradDev" stops={[{ offset: "0%", color: color.orange50 }, { offset: "100%", color: color.rose50 }]} />
    <rect width="400" height="300" rx="20" fill="url(#gradDev)" />
    <g transform="translate(140, 100)">
      <path d="M0 50 A 50 50 0 0 1 100 50 A 50 50 0 0 1 0 50" fill="none" stroke={color.slate800} strokeWidth="8" />
      <motion.circle cx="50" cy="0" r="5" fill={color.rose500} animate={{ rotate: 360 }} style={{ originX: "0px", originY: "50px" }} transition={{ duration: 2, repeat: Infinity, ease: "linear" }} />
    </g>
  </svg>
);

// Map SVGs
const svgMap = {
  'sec1-system-installation-and-configuration': SvgSystemInstall,
  'sec2-hardware-support-and-repairs': SvgHardware,
  'sec3-software-support-and-patch-management': SvgSoftware,
  'sec4-network-design-setup-and-maintenance': SvgNetwork,
  'sec5-cybersecurity-and-threat-management': SvgCyberSec,
  'sec6-data-backup-storage-and-recovery': SvgBackup,
  'sec7-cloud-services-and-integration': SvgCloud,
  'sec8-performance-optimization-and-monitoring': SvgPerformance,
  'sec9-asset-management-documentation-and-compliance': SvgAsset,
  'sec10-user-training-support-and-247-emergency-response': SvgTraining,
  'sec11-custom-software-development': SvgCustomSoft,
  'sec12-software-testing-and-quality-assurance': SvgQA,
  'sec13-uiux-design-and-user-experience-optimization': SvgUIUX,
  'sec14-mobile-application-development-android-and-cross-platform': SvgMobile,
  'sec15-desktop-and-laptop-application-development': SvgDesktop,
  'sec16-ios-application-development': SvgIOS,
  'sec17-website-and-web-application-development': SvgWebApp,
  'sec18-software-research-and-technology-analysis': SvgResearch,
  'sec19-system-architecture-and-application-planning': SvgArch,
  'sec20-devops-automation-and-cicd-deployment': SvgDevOps,
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
export default function ITSupport() {
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
        <Link to="/services" className="hover:underline text-indigo-600">
          services
        </Link>
        <span aria-hidden="true"> › </span>
        <span className="text-gray-700" aria-current="page">
          IT Support
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
            {["Support", "Development", "Security"].map((pill) => (
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
              <VideoHeroITSupport
                src="https://cdn.coverr.co/videos/coverr-server-room-data-center-4928/1080p.mp4" 
              />
            </div>
          </div>
        </motion.div>
      </div>

      {/* Sections */}
      <div className="mt-8 sm:mt-10 md:mt-12">
        {itSupportData.map((sec, idx) => {
          const SVGComp = svgMap[sec.id] || SvgSystemInstall;
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