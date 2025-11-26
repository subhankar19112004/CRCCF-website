// src/pages/legal/LegalGuidanceAwareness.jsx
import React, { useRef } from "react";
import { Link } from "react-router-dom";
import { motion, useReducedMotion, useScroll, useTransform, useSpring } from "framer-motion";
import { legalGuidanceAndAwarnessData } from '../../data/legalGuidanceAndAwarnessData';

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
  cyan25:"#F5FEFF", cyan50:"#ECFEFF", cyan100:"#CFFAFE", cyan200:"#A5F3FC", cyan300:"#67E8F9", cyan500:"#06B6D4",
  indigo25:"#F7F8FF", indigo50:"#EEF2FF", indigo100:"#E0E7FF", indigo300:"#A5B4FC", indigo400:"#818CF8", indigo600:"#4F46E5", indigo800:"#3730A3",
  emerald50:"#ECFDF5", emerald100:"#D1FAE5", emerald300:"#86EFAC", emerald400:"#34D399", emerald600:"#059669",
  amber50:"#FFFBEB", amber100:"#FEF3C7", amber500: "#F59E0B",
  rose50:"#FFF1F2", rose100:"#FFE4E6", rose400:"#FB7185",
  slate200:"#E2E8F0", slate300:"#CBD5E1", slate400:"#94A3B8", slate500:"#64748B", slate700:"#334155", slate900:"#0F172A",
  white:"#FFFFFF", black:"#000000",
};

/* --------------------------- Page Data (Local) -------------------------- */
// Page-specific title and tagline, sections are imported
const data = {
  title: "Legal Guidance & Awareness – CRCCF",
  tagline: "Get expert legal guidance and awareness resources to better understand your rights and actions you can take when facing cybercrime incidents.",
};

/* -------------------------- HERO: Video SVG (inline) -------------------------- */
/* Scene: CRCCF officer showing legal document (IT Act) to a citizen, with scales of justice and a shield. */
const VideoHeroLegal = ({ src = "", poster = "" }) => {
  const prefersReduced =
    typeof window !== "undefined" &&
    window.matchMedia &&
    window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  const title = "Legal Guidance and Awareness Hero";
  const desc =
    "A CRCCF officer provides legal guidance to a citizen, with scales of justice and a shield in the background. The background is a masked video or a soft gradient.";

  // Fallback: animated gradient stage + overlay
  if (prefersReduced || !src) {
    return (
      <svg viewBox="0 0 1000 460" role="img" aria-labelledby="lgTitle lgDesc" className="w-full h-auto">
        <title id="lgTitle">{title}</title>
        <desc id="lgDesc">{desc}</desc>
        <defs>
          <linearGradient id="lgGrad" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor={color.indigo100}>
              <animate attributeName="offset" values="0;0.15;0" dur="8s" repeatCount="indefinite" />
            </stop>
            <stop offset="55%" stopColor={color.cyan100}>
              <animate attributeName="offset" values="0.55;0.85;0.55" dur="8s" repeatCount="indefinite" />
            </stop>
            <stop offset="100%" stopColor={color.amber100} />
          </linearGradient>
          <filter id="lgSoft" x="-20%" y="-20%" width="140%" height="140%">
            <feGaussianBlur in="SourceGraphic" stdDeviation="8" result="b" />
            <feColorMatrix in="b" type="matrix" values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 .6 0" />
          </filter>
          <clipPath id="lgStage">
            <rect x="40" y="36" width="640" height="388" rx="26" />
          </clipPath>
        </defs>

        <g filter="url(#lgSoft)">
          <rect x="0" y="0" width="1000" height="460" rx="28" fill="url(#lgGrad)" />
        </g>
        <g clipPath="url(#lgStage)">
          <rect x="0" y="0" width="1000" height="460" fill="url(#lgGrad)">
            <animate attributeName="x" values="0;22;0" dur="8s" repeatCount="indefinite" />
          </rect>
        </g>

        {LegalOverlay()}
      </svg>
    );
  }

  // Main masked video version with overlay
  return (
    <svg viewBox="0 0 1000 460" className="w-full h-auto block" role="img" aria-label={title}>
      <defs>
        <linearGradient id="lgBG" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor={color.indigo100} />
          <stop offset="55%" stopColor={color.cyan100} />
          <stop offset="100%" stopColor={color.amber100} />
        </linearGradient>
        <filter id="lgSoft2" x="-20%" y="-20%" width="140%" height="140%">
          <feGaussianBlur in="SourceGraphic" stdDeviation="8" result="b" />
          <feColorMatrix in="b" type="matrix" values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 .6 0" />
        </filter>
        <clipPath id="lgStage2">
          <rect x="40" y="36" width="640" height="388" rx="26" />
        </clipPath>
      </defs>

      <g filter="url(#lgSoft2)">
        <rect x="0" y="0" width="1000" height="460" rx="28" fill="url(#lgBG)" />
      </g>

      {/* poster + masked video */}
      <g clipPath="url(#lgStage2)">
        {poster ? (
          <image href={poster} x="0" y="0" width="1000" height="460" preserveAspectRatio="xMidYMid slice" opacity="0.86" />
        ) : null}
        <foreignObject x="0" y="0" width="1000" height="460">
          <video
            src={src}
            poster={poster || undefined}
            autoPlay
            muted
            playsInline
            loop
            preload="metadata"
            crossOrigin="anonymous"
            style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }}
            onError={(e) => { e.currentTarget.style.display = "none"; }}
          >
            <source src={src} type="video/mp4" />
          </video>
        </foreignObject>
      </g>

      {LegalOverlay()}
    </svg>
  );
};

/* ----------------------- Overlay: legal guidance scene ----------------------- */
function LegalOverlay() {
  return (
    <g transform="translate(680, 50)">
      {/* Background elements */}
      <g transform="translate(20, 260)">
        <path d="M15 0 L105 0 L120 15 L60 75 L0 15 Z" fill={color.amber100} opacity="0.6" />
        <path d="M15 0 L 60 45 L 105 0 L 60 15 Z" fill={color.amber500} opacity="0.7" />
        <rect x="54" y="10" width="12" height="60" rx="6" fill={color.amber500} opacity="0.7" />
      </g>
      <g transform="translate(230, 240)" opacity="0.8">
         <path d="M30 0l48 20v24c0 28-18 50-48 64-30-14-48-36-48-64v-24l48-20z" fill={color.white} stroke={color.emerald600} strokeWidth="4" />
         <path d="M10 38l14 14 22-22" stroke={color.emerald600} strokeWidth="7" fill="none" strokeLinecap="round" />
      </g>
      
      {/* Ground shadow */}
      <ellipse cx="170" cy="390" rx="140" ry="15" fill={color.black} opacity="0.08" />
      
      {/* Officer Figure */}
      <g transform="translate(40, 140)">
        <rect x="0" y="100" width="80" height="150" rx="15" fill={color.indigo800} />
        <circle cx="40" cy="65" r="35" fill="#A0522D" /> 
        <rect x="10" y="100" width="60" height="15" rx="5" fill={color.white} /> 
      </g>
      
      {/* Citizen Figure */}
      <g transform="translate(200, 190)">
        <rect x="0" y="80" width="70" height="120" rx="15" fill={color.cyan500} />
        <circle cx="35" cy="50" r="30" fill="#F5D0A6" />
      </g>

      {/* Legal Document */}
      <g transform="translate(110, 220)">
        <rect x="0" y="0" width="100" height="130" rx="8" fill={color.white} stroke={color.slate300} transform="rotate(-10)" />
        <rect x="10" y="10" width="80" height="8" rx="4" fill={color.indigo600} transform="rotate(-10)" />
        <rect x="10" y="25" width="70" height="5" rx="2.5" fill={color.slate400} transform="rotate(-10)" />
        <rect x="10" y="37" width="75" height="5" rx="2.5" fill={color.slate400} transform="rotate(-10)" />
        <rect x="10" y="49" width="70" height="5" rx="2.5" fill={color.slate400} transform="rotate(-10)" />
      </g>
    </g>
  );
}

/* ---------------------------- SVG helpers & utils ---------------------------- */
const BG = ({ id, stops }) => (
  <defs>
    <linearGradient id={id} x1="0" y1="0" x2="1" y2="1">
      {stops.map((s, i) => <stop key={i} offset={s.offset} stopColor={s.color} stopOpacity={s.opacity ?? 1} />)}
    </linearGradient>
  </defs>
);
const Card = ({ x, y, w, h, r = 16, fill = color.white, stroke = color.slate200, sw = 1, opacity = 1 }) => (
  <rect x={x} y={y} width={w} height={h} rx={r} fill={fill} stroke={stroke} strokeWidth={sw} opacity={opacity} />
);
const SoftGlow = ({ id = "glow", std = 8, alpha = 0.5 }) => (
  <defs>
    <filter id={id} x="-30%" y="-30%" width="160%" height="160%">
      <feGaussianBlur in="SourceGraphic" stdDeviation={std} result="b" />
      <feColorMatrix in="b" type="matrix" values={`1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 ${alpha} 0`} />
    </filter>
  </defs>
);

/* ------------------------ Complex section SVG illustrations ------------------------ */

// 1. Understanding Cyber Laws in India
const Sec1_CyberLawsSVG = (props) => (
  <svg viewBox="0 0 800 380" role="img" aria-label="Understanding Cyber Laws in India" className="w-full h-full" {...props}>
    <BG id="gSec1" stops={[{ offset: "0%", color: color.indigo50 }, { offset: "100%", color: color.cyan50 }]} />
    <SoftGlow id="glowSec1" std={10} alpha={0.4} />
    <rect x="0" y="0" width="800" height="380" rx="20" fill="url(#gSec1)" />
    
    {/* Gavel */}
    <g transform="translate(100, 150)" filter="url(#glowSec1)">
      <rect x="0" y="0" width="220" height="40" rx="10" fill={color.amber500} stroke={color.slate700} strokeWidth="2" transform="rotate(-20)" />
      <rect x="80" y="-80" width="30" height="100" rx="8" fill={color.amber500} stroke={color.slate700} strokeWidth="2" transform="rotate(-20)" />
      <rect x="20" y="100" width="160" height="30" rx="15" fill={color.slate700} opacity="0.1" filter="url(#glowSec1)" />
    </g>
    
    {/* Open Book (IT Act) */}
    <g transform="translate(400, 90)">
      <path d="M50 30 C 150 -30, 250 -30, 350 30 L 350 250 C 250 190, 150 190, 50 250 Z" fill={color.white} stroke={color.slate300} strokeWidth="3" />
      <path d="M200 35 V 245" stroke={color.slate300} strokeWidth="2" />
      {/* Book Title */}
      <text x="70" y="70" fontFamily="sans-serif" fontSize="20" fontWeight="bold" fill={color.indigo800}>IT Act,</text>
      <text x="70" y="95" fontFamily="sans-serif" fontSize="20" fontWeight="bold" fill={color.indigo800}>2000</text>
      {/* Text lines */}
      <rect x="70" y="120" width="100" height="6" rx="3" fill={color.slate400} />
      <rect x="70" y="135" width="90" height="6" rx="3" fill={color.slate400} />
      <rect x="70" y="150" width="100" height="6" rx="3" fill={color.slate400} />
      <rect x="220" y="70" width="100" height="6" rx="3" fill={color.slate400} />
      <rect x="220" y="85" width="90" height="6" rx="3" fill={color.slate400} />
      <rect x="220" y="100" width="100" height="6" rx="3" fill={color.slate400} />
    </g>
  </svg>
);

// 2. Rights and Legal Remedies for Victims
const Sec2_RightsRemediesSVG = (props) => (
  <svg viewBox="0 0 800 380" role="img" aria-label="Rights and Legal Remedies for Victims" className="w-full h-full" {...props}>
    <BG id="gSec2" stops={[{ offset: "0%", color: color.emerald50 }, { offset: "100%", color: color.indigo50 }]} />
    <SoftGlow id="glowSec2" std={10} alpha={0.6} />
    <rect x="0" y="0" width="800" height="380" rx="20" fill="url(#gSec2)" />
    
    {/* Large Shield */}
    <g transform="translate(120, 70)" filter="url(#glowSec2)">
      <path d="M150 0 L280 60 V 160 C 280 250, 180 300, 150 310 C 120 300, 20 250, 20 160 V 60 Z" fill={color.indigo100} stroke={color.indigo600} strokeWidth="4" />
      <path d="M150 40 L240 90 V 170 C 240 230, 170 260, 150 270 C 130 260, 60 230, 60 170 V 90 Z" fill={color.white} />
      <path d="M100 130 L140 170 L200 110" stroke={color.emerald600} strokeWidth="12" fill="none" strokeLinecap="round" strokeLinejoin="round">
        <animate attributeName="stroke-width" values="12;16;12" dur="2s" repeatCount="indefinite" />
      </path>
    </g>
    
    {/* Clipboard with Remedies */}
    <g transform="translate(450, 90)">
      <Card x="0" y="0" w="220" h="280" r="12" fill={color.slate700} />
      <rect x="60" y="-15" width="100" height="30" rx="8" fill={color.slate500} stroke={color.slate700} strokeWidth="4" />
      <Card x="10" y="10" w="200" h="260" r="8" fill={color.white} />
      <text x="30" y="50" fontFamily="sans-serif" fontSize="20" fontWeight="bold" fill={color.slate900}>Legal Remedies</text>
      {/* Checklist */}
      <rect x="30" y="80" width="15" height="15" rx="4" fill={color.white} stroke={color.indigo400} strokeWidth="2" />
      <rect x="55" y="85" width="120" height="6" rx="3" fill={color.slate400} />
      <rect x="30" y="110" width="15" height="15" rx="4" fill={color.white} stroke={color.indigo400} strokeWidth="2" />
      <rect x="55" y="115" width="100" height="6" rx="3" fill={color.slate400} />
      <rect x="30" y="140" width="15" height="15" rx="4" fill={color.white} stroke={color.indigo400} strokeWidth="2" />
      <rect x="55" y="145" width="120" height="6" rx="3" fill={color.slate400} />
    </g>
  </svg>
);

// 3. Steps to Take After a Cybercrime
const Sec3_StepsAfterCrimeSVG = (props) => (
  <svg viewBox="0 0 800 380" role="img" aria-label="Steps to Take After a Cybercrime" className="w-full h-full" {...props}>
    <BG id="gSec3" stops={[{ offset: "0%", color: color.amber50 }, { offset: "100%", color: color.cyan50 }]} />
    <rect x="0" y="0" width="800" height="380" rx="20" fill="url(#gSec3)" />
    
    {/* Winding Path */}
    <path d="M80 190 C 200 100, 300 280, 450 190 S 600 100, 720 190" stroke={color.slate300} strokeWidth="12" fill="none" strokeDasharray="25 15" />
    <path d="M80 190 C 200 100, 300 280, 450 190 S 600 100, 720 190" stroke={color.cyan500} strokeWidth="12" fill="none" strokeDasharray="25 15" strokeDashoffset="1000">
       <animate attributeName="stroke-dashoffset" values="1000;0" dur="8s" repeatCount="indefinite" />
    </path>

    {/* Step 1: Report (Phone) */}
    <g transform="translate(80, 160)">
      <circle cx="0" cy="0" r="40" fill={color.white} stroke={color.slate300} strokeWidth="3" />
      <rect x="-20" y="-30" width="40" height="60" rx="8" fill={color.indigo600} />
      <rect x="-12" y="-22" width="24" height="40" rx="4" fill={color.white} />
      <rect x="-12" y="23" width="24" height="5" rx="2.5" fill={color.slate300} />
      <text x="-35" y="55" fontFamily="sans-serif" fontSize="14" fontWeight="bold" fill={color.slate700}>1. Report</text>
    </g>

    {/* Step 2: Preserve (Evidence) */}
    <g transform="translate(450, 160)">
      <circle cx="0" cy="0" r="40" fill={color.white} stroke={color.slate300} strokeWidth="3" />
      <rect x="-30" y="-25" width="60" height="40" rx="6" fill={color.emerald600} />
      <circle cx="0" cy="-5" r="12" fill={color.white} />
      <circle cx="0" cy="-5" r="8" fill={color.emerald400} />
      <text x="-35" y="55" fontFamily="sans-serif" fontSize="14" fontWeight="bold" fill={color.slate700}>2. Preserve</text>
    </g>

    {/* Step 3: FIR (Police) */}
    <g transform="translate(720, 160)">
      <circle cx="0" cy="0" r="40" fill={color.white} stroke={color.slate300} strokeWidth="3" />
      <path d="M-25 -20 L 25 -20 L 25 20 L 0 30 L -25 20 Z" fill={color.indigo800} />
      <path d="M-15 -15 L 15 -15 L 15 15 L 0 24 L -15 15 Z" fill={color.white} />
      <text x="-25" y="55" fontFamily="sans-serif" fontSize="14" fontWeight="bold" fill={color.slate700}>3. File FIR</text>
    </g>
  </svg>
);

// 4. Cyber Awareness and Preventive Measures
const Sec4_AwarenessPreventiveSVG = (props) => (
  <svg viewBox="0 0 800 380" role="img" aria-label="Cyber Awareness and Preventive Measures" className="w-full h-full" {...props}>
    <BG id="gSec4" stops={[{ offset: "0%", color: color.cyan25 }, { offset: "100%", color: color.indigo50 }]} />
    <SoftGlow id="glowSec4" std={12} alpha={0.5} />
    <rect x="0" y="0" width="800" height="380" rx="20" fill="url(#gSec4)" />
    
    {/* Laptop with Firewall */}
    <g transform="translate(100, 90)">
      <rect x="0" y="0" width="400" height="220" rx="15" fill={color.slate900} stroke={color.slate400} strokeWidth="2" />
      <rect x="10" y="10" width="380" height="200" rx="8" fill="url(#gSec1)" />
      <rect x="-20" y="220" width="440" height="20" rx="10" fill={color.slate400} />
      {/* Firewall UI */}
      <g transform="translate(130, 40)">
        <path d="M70 0l60 25v30c0 40-25 70-60 85-35-15-60-45-60-85v-30l60-25z" fill={color.white} stroke={color.emerald600} strokeWidth="5" />
        <path d="M40 70l20 20 40-40" stroke={color.emerald600} strokeWidth="10" fill="none" strokeLinecap="round" />
        <text x="30" y="160" fontFamily="sans-serif" fontSize="18" fontWeight="bold" fill={color.emerald600}>ACTIVE</text>
      </g>
    </g>

    {/* Phishing Hook (Blocked) */}
    <g transform="translate(480, 50)" filter="url(#glowSec4)">
      <path d="M50 0 C 50 60, -30 60, -30 130 C -30 200, 50 200, 50 260 L 50 280 L 70 260 C 70 200, 150 200, 150 130 C 150 60, 70 60, 70 0 Z" 
        fill={color.rose400} stroke={color.slate900} strokeWidth="4" transform="rotate(20)" />
      <line x1="60" y1="0" x2="60" y2="-40" stroke={color.slate900} strokeWidth="4" />
      {/* Block Symbol */}
      <circle cx="60" cy="130" r="50" fill={color.rose100} stroke={color.rose400} strokeWidth="5" />
      <line x1="30" y1="100" x2="90" y2="160" stroke={color.rose400} strokeWidth="8" />
      <line x1="30" y1="160" x2="90" y2="100" stroke={color.rose400} strokeWidth="8" />
    </g>
  </svg>
);

// 5. Educational Initiatives and Legal Literacy
const Sec5_EducationalInitiativesSVG = (props) => (
  <svg viewBox="0 0 800 380" role="img" aria-label="Educational Initiatives and Legal Literacy" className="w-full h-full" {...props}>
    <BG id="gSec5" stops={[{ offset: "0%", color: color.indigo50 }, { offset: "100%", color: color.cyan50 }]} />
    <rect x="0" y="0" width="800" height="380" rx="20" fill="url(#gSec5)" />
    
    {/* Podium and Speaker */}
    <g transform="translate(120, 150)">
      <path d="M0 0 L 120 0 L 100 180 L 20 180 Z" fill={color.amber500} stroke={color.slate700} strokeWidth="2" />
      <rect x="-10" y="-10" width="140" height="20" rx="5" fill={color.amber500} stroke={color.slate700} strokeWidth="2" />
      {/* Speaker */}
      <circle cx="60" cy="-50" r="30" fill="#A0522D" />
      <rect x="30" y="-20" width="60" height="80" rx="10" fill={color.indigo800} />
    </g>
    
    {/* Projector Screen */}
    <g transform="translate(300, 60)">
      <rect x="0" y="0" width="400" height="250" rx="10" fill={color.white} stroke={color.slate300} strokeWidth="3" />
      <rect x="195" y="250" width="10" height="40" fill={color.slate300} />
      <text x="30" y="50" fontFamily="sans-serif" fontSize="24" fontWeight="bold" fill={color.indigo600}>Cyber Law Literacy</text>
      {/* Bar Chart */}
      <rect x="30" y="80" width="80" height="130" fill={color.cyan100} />
      <rect x="130" y="120" width="80" height="90" fill={color.cyan300} />
      <rect x="230" y="100" width="80" height="110" fill={color.cyan100} />
      <g>
        <rect x="130" y="120" width="80" height="90" fill={color.cyan500}>
          <animate attributeName="height" values="0;90" dur="1.5s" repeatCount="indefinite" />
        </rect>
      </g>
    </g>
  </svg>
);

// 6. Collaboration and Institutional Partnerships
const Sec6_CollaborationSVG = (props) => (
  <svg viewBox="0 0 800 380" role="img" aria-label="Collaboration and Institutional Partnerships" className="w-full h-full" {...props}>
    <BG id="gSec6" stops={[{ offset: "0%", color: color.emerald50 }, { offset: "100%", color: color.cyan50 }]} />
    <rect x="0" y="0" width="800" height="380" rx="20" fill="url(#gSec6)" />
    
    {/* Central Orb */}
    <circle cx="400" cy="190" r="120" fill={color.white} stroke={color.slate300} strokeWidth="3" />
    <circle cx="400" cy="190" r="100" fill={color.indigo100}>
      <animate attributeName="r" values="100;105;100" dur="2.5s" repeatCount="indefinite" />
    </circle>
    <text x="400" y="200" fontFamily="sans-serif" fontSize="24" fontWeight="bold" fill={color.indigo800} textAnchor="middle">CRCCF</text>
    
    {/* Partner Icons */}
    {/* Law Agency */}
    <g transform="translate(180, 160)">
      <circle cx="0" cy="0" r="40" fill={color.white} stroke={color.slate300} strokeWidth="2" />
      <path d="M-20 -15 L 20 -15 L 20 15 L 0 25 L -20 15 Z" fill={color.indigo800} />
    </g>
    {/* Education */}
    <g transform="translate(400, 40)">
      <circle cx="0" cy="0" r="40" fill={color.white} stroke={color.slate300} strokeWidth="2" />
      <path d="M-30 0 L 0 -15 L 30 0 L 0 15 Z" fill={color.emerald600} />
      <rect x="-20" y="0" width="40" height="10" fill={color.emerald600} />
    </g>
    {/* NGOs/Govt */}
    <g transform="translate(620, 160)">
      <circle cx="0" cy="0" r="40" fill={color.white} stroke={color.slate300} strokeWidth="2" />
      <path d="M-20 -10 H 20 V 20 H -20 Z" fill={color.cyan300} />
      <path d="M-10 -10 L 0 -20 L 10 -10" stroke={color.cyan500} strokeWidth="4" fill="none" />
    </g>
    
    {/* Connection Lines */}
    <path d="M230 170 C 280 180, 350 160, 380 120" stroke={color.slate300} strokeWidth="3" fill="none" strokeDasharray="8 4" />
    <path d="M420 120 C 450 160, 520 180, 570 170" stroke={color.slate300} strokeWidth="3" fill="none" strokeDasharray="8 4" />
    <path d="M230 190 C 300 240, 500 240, 570 190" stroke={color.slate300} strokeWidth="3" fill="none" strokeDasharray="8 4" />
  </svg>
);

// 7. Ethics, Responsibility, and Public Trust
const Sec7_EthicsTrustSVG = (props) => (
  <svg viewBox="0 0 800 380" role="img" aria-label="Ethics, Responsibility, and Public Trust" className="w-full h-full" {...props}>
    <BG id="gSec7" stops={[{ offset: "0%", color: color.indigo25 }, { offset: "100%", color: color.rose50 }]} />
    <rect x="0" y="0" width="800" height="380" rx="20" fill="url(#gSec7)" />
    
    {/* Wireframe Globe */}
    <g transform="translate(180, 190)">
      <circle cx="0" cy="0" r="120" fill="none" stroke={color.indigo300} strokeWidth="2" opacity="0.8" />
      <ellipse cx="0" cy="0" rx="50" ry="120" stroke={color.indigo300} strokeWidth="2" opacity="0.8" />
      <ellipse cx="0" cy="0" rx="100" ry="60" stroke={color.indigo300} strokeWidth="2" opacity="0.8" />
      <ellipse cx="0" cy="0" rx="120" ry="30" stroke={color.indigo300} strokeWidth="2" opacity="0.8" />
    </g>

    {/* Ethics (Heart) + Responsibility (Lock) */}
    <g transform="translate(180, 190)">
      <path d="M0 -15 C 0 -35, 20 -35, 20 -15 C 20 5, 0 25, 0 25 C 0 25, -20 5, -20 -15 C -20 -35, 0 -35, 0 -15 Z" fill={color.rose400}>
        <animateTransform attributeName="transform" type="scale" values="1;1.1;1" dur="2s" repeatCount="indefinite" />
      </path>
      <g transform="translate(-20, 30)">
        <rect x="0" y="0" width="40" height="30" rx="8" fill={color.slate500} />
        <path d="M20 -20 C 30 -20, 30 0, 20 0 S 10 -20, 20 -20 Z" stroke={color.slate700} strokeWidth="4" fill="none" />
      </g>
    </g>
    
    {/* Public Trust Graph */}
    <g transform="translate(450, 100)">
      <Card x="0" y="0" w="280" h="180" r="12" />
      <text x="20" y="40" fontFamily="sans-serif" fontSize="20" fontWeight="bold" fill={color.slate900}>Public Trust</text>
      <path d="M30 150 L 80 100 L 130 120 L 180 80 L 250 60" stroke={color.emerald600} strokeWidth="5" fill="none" strokeLinecap="round" />
      <path d="M30 150 L 80 100 L 130 120 L 180 80 L 250 60" stroke={color.white} strokeWidth="12" fill="none" strokeLinecap="round" opacity="0.5" strokeDasharray="300" strokeDashoffset="300">
        <animate attributeName="stroke-dashoffset" values="300;0" dur="2s" repeatCount="indefinite" />
      </path>
      <line x1="30" y1="150" x2="250" y2="150" stroke={color.slate300} strokeWidth="2" />
    </g>
  </svg>
);

// 8. Commitment to Legal Awareness and Support
const Sec8_CommitmentSVG = (props) => (
  <svg viewBox="0 0 800 380" role="img" aria-label="Commitment to Legal Awareness and Support" className="w-full h-full" {...props}>
    <BG id="gSec8" stops={[{ offset: "0%", color: color.cyan50 }, { offset: "100%", color: color.indigo50 }]} />
    <rect x="0" y="0" width="800" height="380" rx="20" fill="url(#gSec8)" />
    
    {/* Lighthouse */}
    <g transform="translate(150, 80)">
      <polygon points="30 0, 70 0, 80 200, 20 200" fill={color.rose100} stroke={color.rose400} strokeWidth="3" />
      <polygon points="30 0, 70 0, 60 40, 40 40" fill={color.slate700} />
      <rect x="0" y="200" width="100" height="30" rx="10" fill={color.slate400} />
      <circle cx="50" cy="-10" r="15" fill={color.amber500} />
    </g>
    
    {/* Beam of Light */}
    <g>
      <polygon points="200 70, 750 140, 750 240, 200 110" fill={color.amber100} opacity="0.6">
        <animate attributeName="opacity" values="0.6;0.4;0.6" dur="2s" repeatCount="indefinite" />
      </polygon>
      <text x="300" y="140" fontFamily="sans-serif" fontSize="22" fontWeight="bold" fill={color.amber500} opacity="0.9">Awareness & Support</text>
    </g>
    
    {/* Path/Water */}
    <path d="M200 250 C 300 280, 500 220, 750 260" stroke={color.cyan500} strokeWidth="6" fill="none" />
    <path d="M200 280 C 300 310, 500 250, 750 290" stroke={color.cyan300} strokeWidth="4" fill="none" />
  </svg>
);

// 9. Legal Disclaimer
const Sec9_DisclaimerSVG = (props) => (
  <svg viewBox="0 0 800 380" role="img" aria-label="Legal Disclaimer" className="w-full h-full" {...props}>
    <BG id="gSec9" stops={[{ offset: "0%", color: color.slate200 }, { offset: "100%", color: color.amber50 }]} />
    <rect x="0" y="0" width="800" height="380" rx="20" fill="url(#gSec9)" />
    
    {/* Warning Icon */}
    <g transform="translate(100, 100)">
      <path d="M120 0 L 240 200 L 0 200 Z" fill={color.amber100} stroke={color.amber500} strokeWidth="5" />
      <text x="110" y="130" fontFamily="sans-serif" fontSize="100" fontWeight="bold" fill={color.amber500}>!</text>
      <animateTransform attributeName="transform" type="scale" values="1;1.02;1" dur="1.8s" repeatCount="indefinite" transform-origin="120 100" />
    </g>
    
    {/* Document */}
    <g transform="translate(380, 80)">
      <Card x="0" y="0" w="320" h="220" r="12" stroke={color.slate400} sw="2" />
      <text x="20" y="50" fontFamily="sans-serif" fontSize="24" fontWeight="bold" fill={color.slate700}>Legal Disclaimer</text>
      <rect x="20" y="80" width="280" height="6" rx="3" fill={color.slate400} />
      <rect x="20" y="100" width="280" height="6" rx="3" fill={color.slate400} />
      <rect x="20" y="120" width="240" height="6" rx="3" fill={color.slate400} />
      {/* Section 8 Seal */}
      <circle cx="260" cy="170" r="40" fill={color.indigo600} />
      <text x="260" y="175" fontFamily="sans-serif" fontSize="14" fontWeight="bold" fill={color.white} textAnchor="middle">Section 8</text>
      <text x="260" y="190" fontFamily="sans-serif" fontSize="12" fill={color.white} textAnchor="middle">MCA</text>
    </g>
  </svg>
);

/* ------------------------------ Section block ------------------------------ */
const SectionBlock = ({ id, title, content, SVG, reverse = false }) => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start 80%", "end 20%"] });
  const y = useSpring(useTransform(scrollYProgress, [0, 1], [18, -18]), { stiffness: 120, damping: 20 });
  const opacity = useTransform(scrollYProgress, [0, 1], [0.6, 1]);

  const paragraphs = content.split("\n").map((p, i) => (
    <p key={i} className="text-[15px] sm:text-base text-gray-700 leading-relaxed whitespace-pre-wrap">{p}</p>
  ));

  return (
    <section id={id} ref={ref} className="mt-8 sm:mt-10 md:mt-12 lg:mt-16">
      <motion.div
        style={{ opacity }}
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-6 md:gap-8 lg:gap-10 items-start"
      >
        {/* Illustration */}
        <motion.div style={{ y }} className={`relative min-w-0 ${reverse ? "md:order-2" : "md:order-1"}`}>
          <div className="absolute -inset-2 rounded-2xl bg-gradient-to-tr from-cyan-100 via-indigo-100 to-amber-100 blur-md sm:blur-lg md:blur-xl" aria-hidden="true" />
          <div className="relative rounded-2xl border border-gray-200 bg-white p-3 sm:p-4 shadow-sm">
            <div className="w-full h-auto max-h-64 sm:max-h-80 md:max-h-none overflow-hidden">
              <SVG />
            </div>
          </div>
        </motion.div>

        {/* Content */}
        <div className={`${reverse ? "md:order-1" : "md:order-2"} min-w-0`}>
          <h2 className="text-[20px] sm:text-2xl font-semibold text-gray-900 leading-snug">{title}</h2>
          <div className="mt-2.5 sm:mt-3 space-y-3">{paragraphs}</div>
        </div>
      </motion.div>
    </section>
  );
};

/* ---------------------------------- Page ---------------------------------- */
export default function LegalGuidanceAwareness() {
  const { container, itemUp } = useAnims();
  const heroRef = useRef(null);
  const { scrollYProgress } = useScroll({ target: heroRef, offset: ["start start", "end start"] });
  const heroY = useTransform(scrollYProgress, [0, 1], [0, -40]);

  const svgMap = {
    'sec1-understanding-cyber-laws-in-india': Sec1_CyberLawsSVG,
    'sec2-rights-and-legal-remedies-for-victims': Sec2_RightsRemediesSVG,
    'sec3-steps-to-take-after-a-cybercrime': Sec3_StepsAfterCrimeSVG,
    'sec4-cyber-awareness-and-preventive-measures': Sec4_AwarenessPreventiveSVG,
    'sec5-educational-initiatives-and-legal-literacy': Sec5_EducationalInitiativesSVG,
    'sec6-collaboration-and-institutional-partnerships': Sec6_CollaborationSVG,
    'sec7-ethics-responsibility-and-public-trust': Sec7_EthicsTrustSVG,
    'sec8-commitment-to-legal-awareness-and-support': Sec8_CommitmentSVG,
    'sec9-legal-disclaimer': Sec9_DisclaimerSVG,
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
      <motion.nav variants={itemUp} className="text-xs sm:text-sm text-gray-500 mb-3 sm:mb-4" aria-label="Breadcrumb">
        <Link to="/" className="hover:underline">Home</Link>
        <span aria-hidden="true"> › </span>
        <Link to="/services" className="hover:underline">Services</Link>
        <span aria-hidden="true"> › </span>
        <span className="text-gray-700" aria-current="page">Legal Guidance & Awareness</span>
      </motion.nav>

      {/* Hero with Video-SVG (legal guidance scene) */}
      <div ref={heroRef} className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-6 md:gap-8 lg:gap-10 items-center">
        <motion.div variants={itemUp}>
          <h1 className="text-[22px] sm:text-3xl font-bold text-gray-900">{data.title}</h1>
          {data.tagline && (
             <p className="mt-2 text-cyan-800 font-medium text-[15px] sm:text-base">{data.tagline}</p>
          )}
          <div className="mt-3 sm:mt-4 flex flex-wrap gap-2">
            {["Legal Rights", "Awareness", "Prevention"].map((pill) => (
              <span key={pill} className="px-2.5 sm:px-3 py-1.5 text-xs sm:text-sm rounded-full bg-cyan-100 text-cyan-800 border border-cyan-200">
                {pill}
              </span>
            ))}
          </div>
        </motion.div>

        <motion.div style={{ y: heroY }} className="relative">
          <div className="absolute -inset-2 rounded-2xl bg-gradient-to-tr from-cyan-100 via-indigo-100 to-amber-100 blur-md sm:blur-lg md:blur-xl" aria-hidden="true" />
          <div className="relative rounded-2xl border border-gray-200 bg-white p-3 sm:p-4 shadow-sm">
            <div className="w-full h-auto max-h-72 sm:max-h-80 md:max-h-none overflow-hidden">
              {/* Supply your video assets at these paths */}
              <VideoHeroLegal
                src="/assets/video/legal-awareness-hero.mp4"
                poster="/assets/video/legal-awareness-hero.jpg"
              />
            </div>
          </div>
        </motion.div>
      </div>

      {/* Sections */}
      <div className="mt-8 sm:mt-10 md:mt-12">
        {legalGuidanceAndAwarnessData.map((sec, idx) => {
          const SVGComp = svgMap[sec.id] || Sec1_CyberLawsSVG;
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
      
      {/* No separate disclaimer is needed here, as the 9th section from your data file
        is the disclaimer and is rendered by the .map() function above.
      */}

    </motion.section>
  );
}