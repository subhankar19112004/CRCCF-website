// src/pages/services/SoftwareServicesIntroduction.jsx
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
import { softwareServicesIntroductionData } from "../../../../data/OurServices/software_it_services/software_services_introduction/softwareServicesIntroductionData.jsx";

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
  title: "Software Services Introduction",
  tagline: "Crafting digital experiences that connect people, build trust, and empower organizations.",
};

/* -------------------------- HERO: Video SVG (inline) -------------------------- */
/* Scene: Code turning into a bridge or structure connecting people. */

const SoftwareHeroOverlay = () => {
  const shouldReduce = useReducedMotion();
  
  return (
    <g transform="translate(680, 50)">
      {/* Code Blocks */}
      <g transform="translate(50, 50)">
        <rect x="0" y="0" width="120" height="80" rx="5" fill={color.slate800} stroke={color.slate600} />
        <rect x="10" y="10" width="100" height="60" fill={color.slate900} />
        {!shouldReduce && [1, 2, 3, 4].map((i) => (
          <motion.rect 
            key={i}
            x="15" y={15 + i * 12} width="0" height="4" rx="2" fill={i % 2 === 0 ? color.cyan400 : color.indigo400}
            animate={{ width: [0, 80, 80] }}
            transition={{ duration: 2, repeat: Infinity, delay: i * 0.3, repeatDelay: 1 }}
          />
        ))}
      </g>

      {/* Connection Lines */}
      <motion.path 
        d="M170 90 H 220 V 150 H 250" 
        fill="none" stroke={color.cyan500} strokeWidth="2" strokeDasharray="5 5"
        animate={{ strokeDashoffset: [0, -20] }}
        transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
      />

      {/* Human/User Interface */}
      <g transform="translate(250, 120)">
        <rect x="0" y="0" width="100" height="140" rx="10" fill={color.white} stroke={color.slate200} />
        <circle cx="50" cy="40" r="20" fill={color.indigo100} />
        <path d="M30 40 Q 50 60, 70 40" stroke={color.indigo400} strokeWidth="2" fill="none" />
        <rect x="20" y="70" width="60" height="8" rx="4" fill={color.slate200} />
        <rect x="20" y="90" width="40" height="8" rx="4" fill={color.slate200} />
        <motion.circle 
          cx="80" cy="110" r="15" fill={color.emerald400} 
          initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ delay: 1, type: "spring" }}
        />
        <path d="M75 110 L 80 115 L 85 105" stroke={color.white} strokeWidth="2" fill="none" />
      </g>

      {/* Bridge Structure */}
      <path d="M50 250 Q 150 200, 250 250" fill="none" stroke={color.indigo300} strokeWidth="4" opacity="0.3" />
      <path d="M50 260 Q 150 210, 250 260" fill="none" stroke={color.indigo300} strokeWidth="4" opacity="0.3" />
    </g>
  );
};

const VideoHeroSoftware = ({ src = "", poster = "" }) => {
  const shouldReduce = useReducedMotion();
  const title = "CRCCF Software Services Hero";
  const desc = "Digital code transforming into user-friendly interfaces.";

  if (shouldReduce || !src) {
    return (
      <svg viewBox="0 0 1000 400" role="img" aria-labelledby="swTitle swDesc" className="w-full h-auto">
        <title id="swTitle">{title}</title>
        <desc id="swDesc">{desc}</desc>
        <defs>
          <linearGradient id="swGrad" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor={color.slate900} />
            <stop offset="100%" stopColor={color.indigo900} />
          </linearGradient>
        </defs>
        <rect width="100%" height="100%" fill="url(#swGrad)" rx="20" />
        <SoftwareHeroOverlay />
      </svg>
    );
  }

  return (
    <svg viewBox="0 0 1000 400" className="w-full h-auto block" role="img" aria-label={title}>
      <defs>
        <linearGradient id="swBG" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor={color.slate900} />
          <stop offset="100%" stopColor={color.indigo900} />
        </linearGradient>
        <mask id="swMask">
          <rect width="100%" height="100%" fill="white" />
          <SoftwareHeroOverlay />
        </mask>
      </defs>
      
      <rect width="100%" height="100%" fill="url(#swBG)" rx="20" />
      
      <foreignObject x="0" y="0" width="1000" height="400" mask="url(#swMask)">
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

      <SoftwareHeroOverlay />
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

/* ------------------------ 25 Unique Section SVGs ------------------------ */

// 1. Commitment
const SvgCommitment = ({ className }) => (
  <svg viewBox="0 0 400 300" className={className} xmlns="http://www.w3.org/2000/svg">
    <BG id="gradComm" stops={[{ offset: "0%", color: color.indigo50 }, { offset: "100%", color: color.cyan50 }]} />
    <rect width="400" height="300" rx="20" fill="url(#gradComm)" />
    <g transform="translate(150, 100)">
      <path d="M50 0 L 100 50 L 50 100 L 0 50 Z" fill={color.indigo600} />
      <motion.path 
        d="M50 20 L 80 50 L 50 80 L 20 50 Z" fill={color.cyan400} 
        animate={{ scale: [1, 1.2, 1] }} transition={{ duration: 2, repeat: Infinity }}
      />
    </g>
  </svg>
);

// 2. Understanding People
const SvgUnderstanding = ({ className }) => (
  <svg viewBox="0 0 400 300" className={className} xmlns="http://www.w3.org/2000/svg">
    <BG id="gradUnd" stops={[{ offset: "0%", color: color.rose50 }, { offset: "100%", color: color.purple50 }]} />
    <rect width="400" height="300" rx="20" fill="url(#gradUnd)" />
    <g transform="translate(140, 80)">
      <circle cx="60" cy="60" r="40" fill={color.white} stroke={color.slate200} />
      <path d="M40 50 Q 60 70, 80 50" stroke={color.rose400} strokeWidth="3" fill="none" />
      <circle cx="45" cy="45" r="3" fill={color.slate700} />
      <circle cx="75" cy="45" r="3" fill={color.slate700} />
      <motion.path d="M20 100 Q 60 120, 100 100" stroke={color.indigo300} strokeWidth="2" fill="none" animate={{ d: ["M20 100 Q 60 120, 100 100", "M20 110 Q 60 130, 100 110", "M20 100 Q 60 120, 100 100"] }} transition={{ duration: 3, repeat: Infinity }} />
    </g>
  </svg>
);

// 3. Trust & Responsibility
const SvgTrust = ({ className }) => (
  <svg viewBox="0 0 400 300" className={className} xmlns="http://www.w3.org/2000/svg">
    <BG id="gradTrust" stops={[{ offset: "0%", color: color.emerald50 }, { offset: "100%", color: color.white }]} />
    <rect width="400" height="300" rx="20" fill="url(#gradTrust)" />
    <g transform="translate(150, 100)">
      <path d="M20 50 H 80 V 100 H 20 Z" fill={color.slate700} />
      <path d="M0 50 H 100 V 20 H 0 Z" fill={color.emerald600} />
      <motion.circle cx="50" cy="35" r="10" fill={color.white} animate={{ opacity: [0.5, 1, 0.5] }} transition={{ duration: 1.5, repeat: Infinity }} />
    </g>
  </svg>
);

// 4. Confidence
const SvgConfidence = ({ className }) => (
  <svg viewBox="0 0 400 300" className={className} xmlns="http://www.w3.org/2000/svg">
    <BG id="gradConf" stops={[{ offset: "0%", color: color.amber50 }, { offset: "100%", color: color.orange50 }]} />
    <rect width="400" height="300" rx="20" fill="url(#gradConf)" />
    <g transform="translate(160, 100)">
      <rect x="0" y="0" width="80" height="80" rx="10" fill={color.amber400} />
      <motion.path d="M20 40 L 40 60 L 70 20" stroke={color.white} strokeWidth="8" fill="none" strokeLinecap="round" initial={{ pathLength: 0 }} whileInView={{ pathLength: 1 }} />
    </g>
  </svg>
);

// 5. Security
const SvgSecurity = ({ className }) => (
  <svg viewBox="0 0 400 300" className={className} xmlns="http://www.w3.org/2000/svg">
    <BG id="gradSec" stops={[{ offset: "0%", color: color.slate800 }, { offset: "100%", color: color.slate900 }]} />
    <rect width="400" height="300" rx="20" fill="url(#gradSec)" />
    <g transform="translate(150, 80)">
      <path d="M50 0 L 100 20 V 60 C 100 90, 50 120, 50 120 C 50 120, 0 90, 0 60 V 20 Z" fill={color.emerald600} />
      <path d="M30 50 H 70 V 40 C 70 30, 50 30, 50 40 V 50" stroke={color.white} strokeWidth="4" fill="none" />
    </g>
  </svg>
);

// 6. Scalability (Growth)
const SvgScalability = ({ className }) => (
  <svg viewBox="0 0 400 300" className={className} xmlns="http://www.w3.org/2000/svg">
    <BG id="gradScale" stops={[{ offset: "0%", color: color.cyan50 }, { offset: "100%", color: color.blue100 }]} />
    <rect width="400" height="300" rx="20" fill="url(#gradScale)" />
    <g transform="translate(100, 200)">
      <motion.rect x="0" y="-40" width="40" height="40" fill={color.cyan500} initial={{ height: 0 }} whileInView={{ height: 40 }} />
      <motion.rect x="60" y="-80" width="40" height="80" fill={color.cyan600} initial={{ height: 0 }} whileInView={{ height: 80 }} transition={{ delay: 0.2 }} />
      <motion.rect x="120" y="-120" width="40" height="120" fill={color.cyan700} initial={{ height: 0 }} whileInView={{ height: 120 }} transition={{ delay: 0.4 }} />
      <motion.rect x="180" y="-160" width="40" height="160" fill={color.cyan800} initial={{ height: 0 }} whileInView={{ height: 160 }} transition={{ delay: 0.6 }} />
    </g>
  </svg>
);

// 7. Empowerment
const SvgEmpower = ({ className }) => (
  <svg viewBox="0 0 400 300" className={className} xmlns="http://www.w3.org/2000/svg">
    <BG id="gradEmp" stops={[{ offset: "0%", color: color.indigo50 }, { offset: "100%", color: color.purple50 }]} />
    <rect width="400" height="300" rx="20" fill="url(#gradEmp)" />
    <g transform="translate(160, 100)">
      <circle cx="40" cy="40" r="30" fill={color.indigo600} />
      <motion.path d="M20 40 L 40 60 L 60 20" stroke={color.white} strokeWidth="4" fill="none" animate={{ y: [0, -5, 0] }} transition={{ duration: 1.5, repeat: Infinity }} />
      <path d="M40 70 V 100" stroke={color.indigo600} strokeWidth="4" />
    </g>
  </svg>
);

// 8. Human Centered
const SvgHuman = ({ className }) => (
  <svg viewBox="0 0 400 300" className={className} xmlns="http://www.w3.org/2000/svg">
    <BG id="gradHum" stops={[{ offset: "0%", color: color.rose50 }, { offset: "100%", color: color.orange50 }]} />
    <rect width="400" height="300" rx="20" fill="url(#gradHum)" />
    <g transform="translate(150, 100)">
      <circle cx="50" cy="50" r="40" fill={color.rose400} />
      <circle cx="50" cy="50" r="30" fill={color.white} opacity="0.3" />
      <motion.circle cx="50" cy="50" r="50" stroke={color.rose600} strokeWidth="2" fill="none" animate={{ scale: [1, 1.2], opacity: [1, 0] }} transition={{ duration: 2, repeat: Infinity }} />
    </g>
  </svg>
);

// 9. Innovation
const SvgInnovation = ({ className }) => (
  <svg viewBox="0 0 400 300" className={className} xmlns="http://www.w3.org/2000/svg">
    <BG id="gradInn" stops={[{ offset: "0%", color: color.amber50 }, { offset: "100%", color: color.yellow50 }]} />
    <rect width="400" height="300" rx="20" fill="url(#gradInn)" />
    <g transform="translate(160, 80)">
      <path d="M40 0 C 20 0, 0 20, 0 50 C 0 80, 40 120, 40 120 C 40 120, 80 80, 80 50 C 80 20, 60 0, 40 0" fill={color.amber400} />
      <motion.path d="M30 40 L 40 20 L 50 40" stroke={color.white} strokeWidth="2" fill="none" animate={{ opacity: [0.5, 1, 0.5] }} transition={{ duration: 1, repeat: Infinity }} />
    </g>
  </svg>
);

// 10. Transparency
const SvgTransparency = ({ className }) => (
  <svg viewBox="0 0 400 300" className={className} xmlns="http://www.w3.org/2000/svg">
    <BG id="gradTrans" stops={[{ offset: "0%", color: color.cyan50 }, { offset: "100%", color: color.slate50 }]} />
    <rect width="400" height="300" rx="20" fill="url(#gradTrans)" />
    <g transform="translate(140, 100)">
      <rect x="0" y="0" width="120" height="100" rx="5" fill={color.white} stroke={color.slate300} strokeWidth="2" opacity="0.6" />
      <rect x="40" y="20" width="40" height="60" fill={color.cyan500} />
    </g>
  </svg>
);

// 11. Reliability
const SvgReliability = ({ className }) => (
  <svg viewBox="0 0 400 300" className={className} xmlns="http://www.w3.org/2000/svg">
    <BG id="gradRel" stops={[{ offset: "0%", color: color.emerald50 }, { offset: "100%", color: color.green50 }]} />
    <rect width="400" height="300" rx="20" fill="url(#gradRel)" />
    <g transform="translate(150, 100)">
      <rect x="0" y="0" width="100" height="100" rx="10" fill={color.emerald600} />
      <motion.path d="M30 50 L 45 65 L 75 35" stroke={color.white} strokeWidth="8" fill="none" initial={{ pathLength: 0 }} whileInView={{ pathLength: 1 }} />
    </g>
  </svg>
);

// 12. Time Value
const SvgTime = ({ className }) => (
  <svg viewBox="0 0 400 300" className={className} xmlns="http://www.w3.org/2000/svg">
    <BG id="gradTime" stops={[{ offset: "0%", color: color.slate100 }, { offset: "100%", color: color.slate200 }]} />
    <rect width="400" height="300" rx="20" fill="url(#gradTime)" />
    <g transform="translate(150, 80)">
      <circle cx="50" cy="50" r="45" fill={color.white} stroke={color.slate400} strokeWidth="2" />
      <motion.line x1="50" y1="50" x2="50" y2="20" stroke={color.slate800} strokeWidth="4" animate={{ rotate: 360 }} transition={{ duration: 4, repeat: Infinity, ease: "linear" }} style={{ originX: "50px", originY: "50px" }} />
      <line x1="50" y1="50" x2="70" y2="50" stroke={color.slate600} strokeWidth="3" />
    </g>
  </svg>
);

// 13. Community
const SvgCommunity = ({ className }) => (
  <svg viewBox="0 0 400 300" className={className} xmlns="http://www.w3.org/2000/svg">
    <BG id="gradComm2" stops={[{ offset: "0%", color: color.purple50 }, { offset: "100%", color: color.pink50 }]} />
    <rect width="400" height="300" rx="20" fill="url(#gradComm2)" />
    <g transform="translate(140, 100)">
      <circle cx="60" cy="40" r="20" fill={color.purple600} />
      <circle cx="20" cy="80" r="15" fill={color.pink500} />
      <circle cx="100" cy="80" r="15" fill={color.indigo500} />
      <path d="M40 40 L 20 80 M 80 40 L 100 80" stroke={color.purple300} strokeWidth="2" />
    </g>
  </svg>
);

// 14. Support
const SvgSupport = ({ className }) => (
  <svg viewBox="0 0 400 300" className={className} xmlns="http://www.w3.org/2000/svg">
    <BG id="gradSup" stops={[{ offset: "0%", color: color.teal50 }, { offset: "100%", color: color.cyan50 }]} />
    <rect width="400" height="300" rx="20" fill="url(#gradSup)" />
    <g transform="translate(150, 100)">
      <circle cx="50" cy="50" r="40" fill={color.teal500} />
      <motion.path d="M30 50 Q 50 70, 70 50" stroke={color.white} strokeWidth="3" fill="none" animate={{ d: ["M30 50 Q 50 70, 70 50", "M30 55 Q 50 75, 70 55", "M30 50 Q 50 70, 70 50"] }} transition={{ duration: 2, repeat: Infinity }} />
    </g>
  </svg>
);

// 15. Practicality
const SvgPractical = ({ className }) => (
  <svg viewBox="0 0 400 300" className={className} xmlns="http://www.w3.org/2000/svg">
    <BG id="gradPrac" stops={[{ offset: "0%", color: color.orange50 }, { offset: "100%", color: color.amber50 }]} />
    <rect width="400" height="300" rx="20" fill="url(#gradPrac)" />
    <g transform="translate(150, 100)">
      <rect x="0" y="0" width="100" height="80" rx="5" fill={color.slate700} />
      <path d="M20 20 L 40 40 L 80 10" stroke={color.amber500} strokeWidth="4" fill="none" />
    </g>
  </svg>
);

// 16. Thoughtful Design
const SvgDesign = ({ className }) => (
  <svg viewBox="0 0 400 300" className={className} xmlns="http://www.w3.org/2000/svg">
    <BG id="gradDes" stops={[{ offset: "0%", color: color.pink100 }, { offset: "100%", color: color.white }]} />
    <rect width="400" height="300" rx="20" fill="url(#gradDes)" />
    <g transform="translate(140, 80)">
      <rect x="0" y="0" width="120" height="140" rx="5" fill={color.white} stroke={color.pink300} strokeWidth="2" />
      <rect x="20" y="20" width="80" height="40" fill={color.pink200} />
      <rect x="20" y="80" width="80" height="10" fill={color.slate200} />
    </g>
  </svg>
);

// 17. Rigorous Standards
const SvgStandards = ({ className }) => (
  <svg viewBox="0 0 400 300" className={className} xmlns="http://www.w3.org/2000/svg">
    <BG id="gradStan" stops={[{ offset: "0%", color: color.slate800 }, { offset: "100%", color: color.black }]} />
    <rect width="400" height="300" rx="20" fill="url(#gradStan)" />
    <g transform="translate(150, 80)">
      <path d="M50 0 L 100 25 V 75 L 50 100 L 0 75 V 25 Z" fill={color.slate700} stroke={color.slate500} />
      <motion.path d="M30 50 L 45 65 L 75 35" stroke={color.emerald500} strokeWidth="4" fill="none" initial={{ pathLength: 0 }} whileInView={{ pathLength: 1 }} />
    </g>
  </svg>
);

// 18. Clarity
const SvgClarity = ({ className }) => (
  <svg viewBox="0 0 400 300" className={className} xmlns="http://www.w3.org/2000/svg">
    <BG id="gradClear" stops={[{ offset: "0%", color: color.cyan50 }, { offset: "100%", color: color.white }]} />
    <rect width="400" height="300" rx="20" fill="url(#gradClear)" />
    <g transform="translate(150, 100)">
      <circle cx="50" cy="50" r="40" fill={color.cyan100} opacity="0.5" />
      <path d="M30 50 L 70 50 M 50 30 L 50 70" stroke={color.cyan600} strokeWidth="4" />
    </g>
  </svg>
);

// 19. Adaptation
const SvgAdapt = ({ className }) => (
  <svg viewBox="0 0 400 300" className={className} xmlns="http://www.w3.org/2000/svg">
    <BG id="gradAdapt" stops={[{ offset: "0%", color: color.lime50 }, { offset: "100%", color: color.emerald50 }]} />
    <rect width="400" height="300" rx="20" fill="url(#gradAdapt)" />
    <g transform="translate(150, 100)">
      <rect x="0" y="0" width="40" height="40" fill={color.lime600} />
      <circle cx="70" cy="70" r="20" fill={color.emerald600} />
      <path d="M30 30 L 60 60" stroke={color.slate400} strokeWidth="2" strokeDasharray="5 5" />
    </g>
  </svg>
);

// 20. Partnership
const SvgPartner = ({ className }) => (
  <svg viewBox="0 0 400 300" className={className} xmlns="http://www.w3.org/2000/svg">
    <BG id="gradPart" stops={[{ offset: "0%", color: color.indigo100 }, { offset: "100%", color: color.blue100 }]} />
    <rect width="400" height="300" rx="20" fill="url(#gradPart)" />
    <g transform="translate(130, 100)">
      <path d="M20 50 A 20 20 0 0 1 60 50 H 20 Z" fill={color.indigo600} />
      <path d="M80 50 A 20 20 0 0 1 120 50 H 80 Z" fill={color.blue600} />
      <path d="M40 50 L 70 80 L 100 50" fill="none" stroke={color.slate500} strokeWidth="2" />
    </g>
  </svg>
);

// 21. Empower User
const SvgEmpowerUser = ({ className }) => (
  <svg viewBox="0 0 400 300" className={className} xmlns="http://www.w3.org/2000/svg">
    <BG id="gradEmpU" stops={[{ offset: "0%", color: color.amber50 }, { offset: "100%", color: color.yellow50 }]} />
    <rect width="400" height="300" rx="20" fill="url(#gradEmpU)" />
    <g transform="translate(160, 100)">
      <circle cx="40" cy="40" r="30" fill={color.amber500} />
      <path d="M40 10 L 50 30 L 70 30 L 55 45 L 60 65 L 40 50 L 20 65 L 25 45 L 10 30 L 30 30 Z" fill={color.white} />
    </g>
  </svg>
);

// 22. Insights
const SvgInsights = ({ className }) => (
  <svg viewBox="0 0 400 300" className={className} xmlns="http://www.w3.org/2000/svg">
    <BG id="gradIns" stops={[{ offset: "0%", color: color.slate800 }, { offset: "100%", color: color.indigo900 }]} />
    <rect width="400" height="300" rx="20" fill="url(#gradIns)" />
    <g transform="translate(140, 100)">
      <path d="M0 80 L 30 50 L 60 70 L 90 20 L 120 40" stroke={color.cyan400} strokeWidth="3" fill="none" />
      <circle cx="90" cy="20" r="5" fill={color.white} />
    </g>
  </svg>
);

// 23. Bridging
const SvgBridge = ({ className }) => (
  <svg viewBox="0 0 400 300" className={className} xmlns="http://www.w3.org/2000/svg">
    <BG id="gradBrid" stops={[{ offset: "0%", color: color.slate100 }, { offset: "100%", color: color.slate200 }]} />
    <rect width="400" height="300" rx="20" fill="url(#gradBrid)" />
    <g transform="translate(100, 150)">
      <rect x="0" y="0" width="50" height="50" fill={color.slate400} />
      <rect x="150" y="0" width="50" height="50" fill={color.indigo500} />
      <motion.path d="M50 25 H 150" stroke={color.slate600} strokeWidth="4" strokeDasharray="10 5" animate={{ strokeDashoffset: -20 }} transition={{ duration: 1, repeat: Infinity, ease: "linear" }} />
    </g>
  </svg>
);

// 24. Org Trust
const SvgOrgTrust = ({ className }) => (
  <svg viewBox="0 0 400 300" className={className} xmlns="http://www.w3.org/2000/svg">
    <BG id="gradOrg" stops={[{ offset: "0%", color: color.teal50 }, { offset: "100%", color: color.emerald50 }]} />
    <rect width="400" height="300" rx="20" fill="url(#gradOrg)" />
    <g transform="translate(150, 80)">
      <path d="M50 0 L 100 100 H 0 Z" fill={color.teal600} opacity="0.5" />
      <circle cx="50" cy="60" r="20" fill={color.emerald600} />
    </g>
  </svg>
);

// 25. Future
const SvgFuture = ({ className }) => (
  <svg viewBox="0 0 400 300" className={className} xmlns="http://www.w3.org/2000/svg">
    <BG id="gradFut" stops={[{ offset: "0%", color: color.indigo100 }, { offset: "100%", color: color.purple100 }]} />
    <rect width="400" height="300" rx="20" fill="url(#gradFut)" />
    <g transform="translate(160, 100)">
      <circle cx="40" cy="40" r="30" fill={color.indigo500} />
      <motion.circle cx="40" cy="40" r="40" stroke={color.purple500} strokeWidth="2" fill="none" animate={{ scale: [1, 1.2], opacity: [1, 0] }} transition={{ duration: 2, repeat: Infinity }} />
    </g>
  </svg>
);

// Map SVGs
const svgMap = {
  'sec1-our-commitment-to-modern-digital-excellence': SvgCommitment,
  'sec2-building-technology-that-understands-people': SvgUnderstanding,
  'sec3-a-development-culture-rooted-in-trust-and-responsibility': SvgTrust,
  'sec4-designing-experiences-that-inspire-confidence': SvgConfidence,
  'sec5-security-at-the-heart-of-every-digital-solution': SvgSecurity,
  'sec6-crafting-solutions-that-grow-with-your-vision': SvgScalability,
  'sec7-empowering-organisations-through-meaningful-technology': SvgEmpower,
  'sec8-a-human-centered-approach-to-digital-transformation': SvgHuman,
  'sec9-innovation-that-serves-real-world-purpose': SvgInnovation,
  'sec10-transparency-as-the-foundation-of-every-partnership': SvgTransparency,
  'sec11-delivering-reliability-when-it-matters-the-most': SvgReliability,
  'sec12-technology-that-respects-the-value-of-time': SvgTime,
  'sec13-strengthening-communities-through-digital-empowerment': SvgCommunity,
  'sec14-dedicated-support-that-stays-with-you-beyond-delivery': SvgSupport,
  'sec15-blending-technical-precision-with-real-world-practicality': SvgPractical,
  'sec16-elevating-everyday-work-through-thoughtful-digital-design': SvgDesign,
  'sec17-ensuring-stability-through-rigorous-development-standards': SvgStandards,
  'sec18-bringing-clarity-to-complex-digital-processes': SvgClarity,
  'sec19-technology-that-adapts-to-your-identity-and-purpose': SvgAdapt,
  'sec20-a-promise-of-long-term-digital-partnership': SvgPartner,
  'sec21-empowering-users-with-confidence-not-complexity': SvgEmpowerUser,
  'sec22-strengthening-decision-making-through-meaningful-insights': SvgInsights,
  'sec23-bridging-traditional-workflows-with-modern-digital-ease': SvgBridge,
  'sec24-technology-that-builds-trust-across-every-level-of-an-organisation': SvgOrgTrust,
  'sec25-building-a-future-where-technology-uplifts-every-individual': SvgFuture,
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
export default function SoftwareServicesIntroduction() {
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
          Software Services Intro
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
            {["Digital Excellence", "Human-Centered", "Innovation"].map((pill) => (
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
              <VideoHeroSoftware
                src="https://cdn.coverr.co/videos/coverr-connecting-digital-network-lines-5374/1080p.mp4" 
              />
            </div>
          </div>
        </motion.div>
      </div>

      {/* Sections */}
      <div className="mt-8 sm:mt-10 md:mt-12">
        {softwareServicesIntroductionData.map((sec, idx) => {
          const SVGComp = svgMap[sec.id] || SvgCommitment;
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