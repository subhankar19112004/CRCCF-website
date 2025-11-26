// src/pages/careers/CodeOfConduct.jsx
import React, { useRef } from "react";
import { Link } from "react-router-dom";
import { motion, useReducedMotion, useScroll, useTransform, useSpring } from "framer-motion";
// Correct import path as per your stub
import { codeOfConductData } from '../../data/recruitment_rules_policies/codeOfConductData';

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
  rose50:"#FFF1F2", rose100:"#FFE4E6", rose400:"#FB7185", rose600: "#E11D48",
  slate200:"#E2E8F0", slate300:"#CBD5E1", slate400:"#94A3B8", slate500:"#64748B", slate700:"#334155", slate900:"#0F172A",
  white:"#FFFFFF", black:"#000000",
};

/* --------------------------- Page Data (Local) -------------------------- */
// Page-specific title. Sections are imported.
const data = {
  title: "Code of Conduct & Professional Ethics",
  // Tagline will be pulled per section from the imported data
};

/* -------------------------- HERO: Video SVG (inline) -------------------------- */
/* Scene: Balanced scales over an open book (code), abstract ethical symbols. */
const VideoHeroCodeOfConduct = ({ src = "", poster = "" }) => {
  const prefersReduced =
    typeof window !== "undefined" &&
    window.matchMedia &&
    window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  const title = "CRCCF Code of Conduct Hero";
  const desc =
    "Balanced scales over an open book representing the code of conduct. The background is a masked video or a soft gradient.";

  // Fallback: animated gradient stage + overlay
  if (prefersReduced || !src) {
    return (
      <svg viewBox="0 0 1000 460" role="img" aria-labelledby="cocTitle cocDesc" className="w-full h-auto">
        <title id="cocTitle">{title}</title>
        <desc id="cocDesc">{desc}</desc>
        <defs>
          <linearGradient id="cocGrad" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor={color.slate200}>
              <animate attributeName="offset" values="0;0.15;0" dur="8s" repeatCount="indefinite" />
            </stop>
            <stop offset="55%" stopColor={color.indigo100}>
              <animate attributeName="offset" values="0.55;0.85;0.55" dur="8s" repeatCount="indefinite" />
            </stop>
            <stop offset="100%" stopColor={color.amber100} />
          </linearGradient>
          <filter id="cocSoft" x="-20%" y="-20%" width="140%" height="140%">
            <feGaussianBlur in="SourceGraphic" stdDeviation="8" result="b" />
            <feColorMatrix in="b" type="matrix" values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 .6 0" />
          </filter>
          <clipPath id="cocStage">
            <rect x="40" y="36" width="640" height="388" rx="26" />
          </clipPath>
        </defs>

        <g filter="url(#cocSoft)">
          <rect x="0" y="0" width="1000" height="460" rx="28" fill="url(#cocGrad)" />
        </g>
        <g clipPath="url(#cocStage)">
          <rect x="0" y="0" width="1000" height="460" fill="url(#cocGrad)">
            <animate attributeName="x" values="0;22;0" dur="8s" repeatCount="indefinite" />
          </rect>
        </g>

        {CodeOfConductOverlay()}
      </svg>
    );
  }

  // Main masked video version with overlay
  return (
    <svg viewBox="0 0 1000 460" className="w-full h-auto block" role="img" aria-label={title}>
      <defs>
        <linearGradient id="cocBG" x1="0" y1="0" x2="1" y2="1">
           <stop offset="0%" stopColor={color.slate200} />
           <stop offset="55%" stopColor={color.indigo100} />
           <stop offset="100%" stopColor={color.amber100} />
        </linearGradient>
        <filter id="cocSoft2" x="-20%" y="-20%" width="140%" height="140%">
          <feGaussianBlur in="SourceGraphic" stdDeviation="8" result="b" />
          <feColorMatrix in="b" type="matrix" values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 .6 0" />
        </filter>
        <clipPath id="cocStage2">
          <rect x="40" y="36" width="640" height="388" rx="26" />
        </clipPath>
      </defs>

      <g filter="url(#cocSoft2)">
        <rect x="0" y="0" width="1000" height="460" rx="28" fill="url(#cocBG)" />
      </g>

      {/* poster + masked video */}
      <g clipPath="url(#cocStage2)">
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

      {CodeOfConductOverlay()}
    </svg>
  );
};

/* ----------------------- Overlay: Code of Conduct scene ----------------------- */
function CodeOfConductOverlay() {
  return (
    <g transform="translate(680, 50)">
      {/* Open Book */}
      <g transform="translate(50, 180)">
         <path d="M0 0 C 100 -50, 200 -50, 300 0 L 300 180 C 200 130, 100 130, 0 180 Z" fill={color.white} stroke={color.slate300} strokeWidth="3" />
         <path d="M150 5 V 175" stroke={color.slate300} strokeWidth="2" />
         <rect x="20" y="30" width="100" height="8" rx="4" fill={color.slate400} />
         <rect x="180" y="30" width="100" height="8" rx="4" fill={color.slate400} />
      </g>
      {/* Scales */}
      <g transform="translate(130, 80)">
        <path d="M0 0 H 140" stroke={color.slate700} strokeWidth="4" />
        <path d="M70 0 V 20" stroke={color.slate700} strokeWidth="4" />
        <g transform="translate(20, 20)"><path d="M0 0 L -20 50 L 20 50 Z" fill={color.amber100} stroke={color.amber500} /><path d="M0 0 V -10" stroke={color.slate700} strokeWidth="2"/></g>
        <g transform="translate(120, 20)"><path d="M0 0 L -20 50 L 20 50 Z" fill={color.amber100} stroke={color.amber500}/><path d="M0 0 V -10" stroke={color.slate700} strokeWidth="2"/></g>
        <animateTransform attributeName="transform" type="rotate" values="130 80 -2; 130 80 2; 130 80 -2" dur="3s" repeatCount="indefinite" transform-origin="70 0" />
      </g>
       {/* Abstract ethical symbols */}
       <g transform="translate(40, 300)"><circle cx="0" cy="0" r="15" fill={color.emerald300}/></g>
       <g transform="translate(320, 320)"><rect x="-10" y="-10" width="20" height="20" fill={color.cyan300}/></g>
    </g>
  );
}

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

/* ------------------------ Complex section SVG illustrations ------------------------ */

// 1. Purpose and Vision of the Code
const Sec1_PurposeVisionSVG = (props) => (
  <svg viewBox="0 0 800 380" role="img" aria-label="Purpose and Vision of the Code" {...props}>
    <BG id="gSec1" stops={[{ offset: "0%", color: color.indigo50 }, { offset: "100%", color: color.cyan50 }]} /> <SoftGlow id="glowSec1" std={10} alpha={0.4} /> <rect x="0" y="0" width="800" height="380" rx="20" fill="url(#gSec1)" />
    {/* Open Book (Code) */}
    <g transform="translate(100, 80)"> <path d="M50 30 C 150 -30, 250 -30, 350 30 L 350 250 C 250 190, 150 190, 50 250 Z" fill={color.white} stroke={color.slate300} strokeWidth="3" /> <path d="M200 35 V 245" stroke={color.slate300} strokeWidth="2" /> <text x="70" y="70" fontSize="20" fontWeight="bold">Code of</text> <text x="70" y="95" fontSize="20" fontWeight="bold">Conduct</text> </g>
    {/* Lightbulb (Vision) */}
    <g transform="translate(550, 120)"> <path d="M50 0 C 0 0, 0 60, 50 60 C 100 60, 100 0, 50 0 Z" fill={color.amber100} /> <rect x="40" y="60" width="20" height="20" fill={color.amber100} /> <path d="M-20 0 H 120 M 0 -20 V 120" stroke={color.amber500} strokeWidth="4" opacity="0.5"> <animate attributeName="opacity" values="0.5;0.2;0.5" dur="1.5s" repeatCount="indefinite" /> </path> </g>
  </svg>
);
// 2. Scope and Applicability
const Sec2_ScopeSVG = (props) => (
  <svg viewBox="0 0 800 380" role="img" aria-label="Scope and Applicability" {...props}>
    <BG id="gSec2" stops={[{ offset: "0%", color: color.cyan25 }, { offset: "100%", color: color.indigo50 }]} /> <rect x="0" y="0" width="800" height="380" rx="20" fill="url(#gSec2)" />
    {/* Central CRCCF Symbol */}
    <g transform="translate(400, 190)"> <circle cx="0" cy="0" r="50" fill={color.indigo600}/> <text x="0" y="10" fontSize="24" fontWeight="bold" fill={color.white} textAnchor="middle">C</text> </g>
    {/* Arrows pointing outwards to figures */}
    <g stroke={color.slate400} strokeWidth="3" fill="none"> <path d="M400 140 V 80 H 200 V 60"/> <path d="M400 140 V 80 H 600 V 60"/> <path d="M400 240 V 300 H 200 V 320"/> <path d="M400 240 V 300 H 600 V 320"/> </g>
    {/* Figures */}
    <g transform="translate(180, 20)"><circle cx="0" cy="0" r="20" fill={color.cyan100}/><rect x="-15" y="20" width="30" height="40" rx="5" fill={color.cyan100}/></g>
    <g transform="translate(580, 20)"><circle cx="0" cy="0" r="20" fill={color.emerald100}/><rect x="-15" y="20" width="30" height="40" rx="5" fill={color.emerald100}/></g>
    <g transform="translate(180, 300)"><circle cx="0" cy="0" r="20" fill={color.rose100}/><rect x="-15" y="20" width="30" height="40" rx="5" fill={color.rose100}/></g>
    <g transform="translate(580, 300)"><circle cx="0" cy="0" r="20" fill={color.amber100}/><rect x="-15" y="20" width="30" height="40" rx="5" fill={color.amber100}/></g>
  </svg>
);
// 3. Core Ethical and Moral Principles
const Sec3_PrinciplesSVG = (props) => (
  <svg viewBox="0 0 800 380" role="img" aria-label="Core Ethical Principles" {...props}>
    <BG id="gSec3" stops={[{ offset: "0%", color: color.emerald50 }, { offset: "100%", color: color.cyan50 }]} /> <rect x="0" y="0" width="800" height="380" rx="20" fill="url(#gSec3)" />
    {/* Pillars */}
    <g transform="translate(100, 80)"> <rect x="0" y="0" width="80" height="200" fill={color.white} stroke={color.slate300}/> <rect x="0" y="-20" width="80" height="20" fill={color.slate400}/> <text x="40" y="100" textAnchor="middle">Honesty</text> </g>
    <g transform="translate(250, 80)"> <rect x="0" y="0" width="80" height="200" fill={color.white} stroke={color.slate300}/> <rect x="0" y="-20" width="80" height="20" fill={color.slate400}/> <text x="40" y="100" textAnchor="middle">Integrity</text> </g>
    <g transform="translate(400, 80)"> <rect x="0" y="0" width="80" height="200" fill={color.white} stroke={color.slate300}/> <rect x="0" y="-20" width="80" height="20" fill={color.slate400}/> <text x="40" y="100" textAnchor="middle">Respect</text> </g>
    <g transform="translate(550, 80)"> <rect x="0" y="0" width="80" height="200" fill={color.white} stroke={color.slate300}/> <rect x="0" y="-20" width="80" height="20" fill={color.slate400}/> <text x="40" y="100" textAnchor="middle">Service</text> </g>
  </svg>
);
// 4. Professional Conduct, Behaviour, and Integrity
const Sec4_ProfessionalConductSVG = (props) => (
  <svg viewBox="0 0 800 380" role="img" aria-label="Professional Conduct" {...props}>
    <BG id="gSec4" stops={[{ offset: "0%", color: color.indigo50 }, { offset: "100%", color: color.cyan50 }]} /> <rect x="0" y="0" width="800" height="380" rx="20" fill="url(#gSec4)" />
    {/* Professional Figure */}
    <g transform="translate(180, 100)"> <circle cx="0" cy="0" r="50" fill="#A0522D"/> <rect x="-40" y="50" width="80" height="150" rx="10" fill={color.indigo800}/> <rect x="-30" y="50" width="60" height="20" fill={color.white}/> </g>
    {/* Speech Bubble */}
    <g transform="translate(350, 80)"> <path d="M0 0 H 200 C 210 0, 210 10, 200 10 V 80 C 210 80, 210 90, 200 90 H 0 C -10 90, -10 80, 0 80 V 10 C -10 10, -10 0, 0 0 Z" fill={color.white} stroke={color.slate300}/> <path d="M20 90 L 40 90 L -10 130 Z" fill={color.white}/> <text x="30" y="40">Punctual</text> <text x="30" y="65">Respectful</text> </g>
  </svg>
);
// 5. Respect, Equality, and Non-Discrimination Policy
const Sec5_RespectEqualitySVG = (props) => ( // Reusing SVG from Recruitment Policy
  <svg viewBox="0 0 800 380" role="img" aria-label="Respect, Equality, Non-Discrimination" {...props}>
    <BG id="gSec3" stops={[{ offset: "0%", color: color.emerald50 }, { offset: "100%", color: color.cyan50 }]} /> <rect x="0" y="0" width="800" height="380" rx="20" fill="url(#gSec3)" />
    <g transform="translate(100, 100)"> <circle cx="0" cy="0" r="40" fill="#F5D0A6" /><rect x="-30" y="40" width="60" height="120" rx="10" fill={color.indigo600} /> <circle cx="120" cy="0" r="40" fill="#A0522D" /><rect x="90" y="40" width="60" height="120" rx="10" fill={color.cyan500} /> <circle cx="240" cy="40" r="40" fill="#F5D0A6" /><rect x="210" y="80" width="60" height="80" rx="10" fill={color.emerald600} /><circle cx="210" cy="180" r="30" fill="none" stroke={color.slate700} strokeWidth="6" /><circle cx="270" cy="180" r="30" fill="none" stroke={color.slate700} strokeWidth="6" /> <circle cx="360" cy="0" r="40" fill="#A0522D" /><rect x="330" y="40" width="60" height="120" rx="10" fill={color.rose400} /> <circle cx="480" cy="0" r="40" fill="#F5D0A6" /><rect x="450" y="40" width="60" height="120" rx="10" fill={color.amber500} /> </g>
    <g transform="translate(620, 150)"> <path d="M0 0 L 30 30 L 60 0 L 80 20 L 40 60 L 20 40 Z" fill={color.indigo300} /> <path d="M0 30 L 30 0 L 60 30 L 80 10 L 40 -30 L 20 -10 Z" fill={color.emerald300} /> <animateTransform attributeName="transform" type="translate" values="620 150; 620 145; 620 150" dur="1s" repeatCount="indefinite" /> </g>
  </svg>
);
// 6. Use of Digital Systems, Technology, and IT Infrastructure
const Sec6_DigitalSystemsSVG = (props) => (
  <svg viewBox="0 0 800 380" role="img" aria-label="Use of Digital Systems" {...props}>
     <BG id="gSec6" stops={[{ offset: "0%", color: color.cyan50 }, { offset: "100%", color: color.indigo50 }]} /> <rect x="0" y="0" width="800" height="380" rx="20" fill="url(#gSec6)" />
     {/* Laptop with Shield */}
     <g transform="translate(150, 80)"> <rect x="0" y="0" width="300" height="200" rx="15" fill={color.slate900}/> <rect x="10" y="10" width="280" height="180" rx="8" fill={color.white}/> <rect x="-10" y="200" width="320" height="15" rx="8" fill={color.slate400}/> <g transform="translate(100, 50)"> <path d="M50 0l70 30v40c0 50-28 85-70 105-42-20-70-55-70-105v-40l70-30z" fill={color.emerald100} stroke={color.emerald600}/> <path d="M20 70l20 20 40-40" stroke={color.emerald600} strokeWidth="8" fill="none"/> </g> </g>
     {/* Server */}
     <g transform="translate(500, 100)"> <rect x="0" y="0" width="100" height="180" rx="8" fill={color.slate700}/> <rect x="10" y="15" width="80" height="25" rx="5" fill={color.emerald300}/> <rect x="10" y="50" width="80" height="25" rx="5" fill={color.emerald300}/> </g>
  </svg>
);
// 7. Data Privacy, Information Security, and Confidentiality
const Sec7_PrivacyConfidentialitySVG = (props) => ( // Reusing SVG
  <svg viewBox="0 0 800 380" role="img" aria-label="Data Privacy & Confidentiality" {...props}>
    <BG id="gSec7" stops={[{ offset: "0%", color: color.slate200 }, { offset: "100%", color: color.indigo50 }]} /> <rect x="0" y="0" width="800" height="380" rx="20" fill="url(#gSec7)" />
    <g transform="translate(150, 80)"> <rect x="0" y="0" width="300" height="250" rx="15" fill={color.slate700} stroke={color.slate900} strokeWidth="6" /> <rect x="20" y="20" width="260" height="210" rx="8" fill={color.slate500} /> <circle cx="150" cy="125" r="80" fill={color.slate400} stroke={color.slate900} strokeWidth="4" /> <circle cx="150" cy="125" r="20" fill={color.slate700} /> <line x1="150" y1="125" x2="210" y2="125" stroke={color.slate900} strokeWidth="8" /> </g>
    <g transform="translate(500, 100)"> <Card x="0" y="0" w="180" h="180" r="12" /> <text x="20" y="40">Applicant Data</text> <g transform="translate(90, 100)"> <rect x="-30" y="0" width="60" height="45" rx="10" fill={color.slate500} /> <path d="M0 -25 C 15 -25, 15 0, 0 0 S -15 -25, 0 -25 Z" stroke={color.slate700} strokeWidth="8" fill="none" /> </g> </g>
  </svg>
);
// 8. Conflict of Interest, Neutrality, and Political Non-Affiliation
const Sec8_ConflictInterestSVG = (props) => (
  <svg viewBox="0 0 800 380" role="img" aria-label="Conflict of Interest and Neutrality" {...props}>
    <BG id="gSec8" stops={[{ offset: "0%", color: color.cyan50 }, { offset: "100%", color: color.indigo50 }]} /> <rect x="0" y="0" width="800" height="380" rx="20" fill="url(#gSec8)" />
    {/* Intersecting paths */}
    <g transform="translate(200, 100)" strokeWidth="10" fill="none" opacity="0.8"> <path d="M0 100 C 100 0, 200 200, 300 100" stroke={color.indigo600}/> <path d="M0 0 C 100 200, 200 0, 300 0" stroke={color.rose600}/> </g>
    {/* No Politics Icon */}
    <g transform="translate(550, 120)"> <circle cx="0" cy="0" r="60" fill={color.white} stroke={color.rose600} strokeWidth="5"/> <line x1="-40" y1="-40" x2="40" y2="40" stroke={color.rose600} strokeWidth="8"/> <line x1="-40" y1="40" x2="40" y2="-40" stroke={color.rose600} strokeWidth="8"/> <text x="0" y="10" fontSize="18" fontWeight="bold" fill={color.rose600} textAnchor="middle">Politics</text> </g>
  </svg>
);
// 9. Anti-Corruption, Anti-Fraud, and Integrity Standards
const Sec9_AntiCorruptionSVG = (props) => (
  <svg viewBox="0 0 800 380" role="img" aria-label="Anti-Corruption and Integrity" {...props}>
     <BG id="gSec9" stops={[{ offset: "0%", color: color.rose50 }, { offset: "100%", color: color.amber50 }]} /> <rect x="0" y="0" width="800" height="380" rx="20" fill="url(#gSec9)" />
     {/* Hand rejecting money */}
     <g transform="translate(150, 100)"> <path d="M0 50 H 80 L 100 70 L 100 150 H 0 Z" fill={color.amber100}/> {/* Hand */} <circle cx="200" cy="100" r="40" fill={color.emerald600}/> <text x="200" y="110" fontSize="40" fill="white" textAnchor="middle">₹</text> <line x1="100" y1="110" x2="180" y2="80" stroke={color.rose600} strokeWidth="8"/> {/* Reject line */} </g>
     {/* Integrity Shield */}
     <g transform="translate(500, 80)"> <path d="M50 0l70 30v40c0 50-28 85-70 105-42-20-70-55-70-105v-40l70-30z" fill={color.emerald100} stroke={color.emerald600}/> <text x="50" y="100" textAnchor="middle" fontWeight="bold">Integrity</text> </g>
  </svg>
);
// 10. Responsible Use of Social Media and Public Communication
const Sec10_SocialMediaSVG = (props) => (
  <svg viewBox="0 0 800 380" role="img" aria-label="Responsible Social Media Use" {...props}>
    <BG id="gSec10" stops={[{ offset: "0%", color: color.cyan50 }, { offset: "100%", color: color.indigo50 }]} /> <rect x="0" y="0" width="800" height="380" rx="20" fill="url(#gSec10)" />
    {/* Phone Screen */}
    <g transform="translate(150, 80)"> <rect x="0" y="0" width="200" height="300" rx="20" fill={color.slate700}/> <rect x="10" y="10" width="180" height="280" rx="10" fill={color.white}/> <circle cx="100" cy="50" r="30" fill={color.indigo100}/> <rect x="40" y="100" width="120" height="15" rx="5" fill={color.slate200}/> </g>
    {/* Check and Cross */}
    <g transform="translate(450, 100)"> <path d="M0 0 L 30 30 L 80 -20" stroke={color.emerald600} strokeWidth="10" fill="none"/> <text x="0" y="60">Factual</text> </g>
    <g transform="translate(450, 200)"> <line x1="0" y1="0" x2="60" y2="60" stroke={color.rose600} strokeWidth="10"/> <line x1="0" y1="60" x2="60" y2="0" stroke={color.rose600} strokeWidth="10"/> <text x="0" y="90">Misinfo</text> </g>
  </svg>
);
// 11. Reporting Misconduct and Whistle-Blower Protection Policy
const Sec11_WhistleblowerSVG = (props) => (
  <svg viewBox="0 0 800 380" role="img" aria-label="Whistleblower Protection" {...props}>
     <BG id="gSec11" stops={[{ offset: "0%", color: color.emerald50 }, { offset: "100%", color: color.cyan50 }]} /> <rect x="0" y="0" width="800" height="380" rx="20" fill="url(#gSec11)" />
     {/* Person Reporting */}
     <g transform="translate(150, 100)"> <circle cx="0" cy="0" r="40" fill="#F5D0A6"/> <rect x="-30" y="40" width="60" height="100" rx="10" fill={color.indigo600}/> </g>
     {/* Shielded Report */}
     <g transform="translate(400, 80)"> <rect x="0" y="0" width="250" height="150" rx="10" fill={color.white} stroke={color.slate300}/> <text x="20" y="40">Confidential Report</text> <g transform="translate(125, 180)"> <path d="M0 -40l60 25v30c0 40-25 70-60 85-35-15-60-45-60-85v-30l60-25z" fill={color.emerald100} stroke={color.emerald600}/> </g> </g>
  </svg>
);
// 12. Professional Appearance, Public Conduct, and Official Communication
const Sec12_ProfessionalAppearanceSVG = (props) => ( // Reusing Professional Conduct SVG
  <svg viewBox="0 0 800 380" role="img" aria-label="Professional Appearance and Conduct" {...props}>
    <BG id="gSec4" stops={[{ offset: "0%", color: color.indigo50 }, { offset: "100%", color: color.cyan50 }]} /> <rect x="0" y="0" width="800" height="380" rx="20" fill="url(#gSec4)" />
    <g transform="translate(180, 100)"> <circle cx="0" cy="0" r="50" fill="#A0522D"/> <rect x="-40" y="50" width="80" height="150" rx="10" fill={color.indigo800}/> <rect x="-30" y="50" width="60" height="20" fill={color.white}/> </g>
    <g transform="translate(350, 80)"> <path d="M0 0 H 200 C 210 0, 210 10, 200 10 V 80 C 210 80, 210 90, 200 90 H 0 C -10 90, -10 80, 0 80 V 10 C -10 10, -10 0, 0 0 Z" fill={color.white} stroke={color.slate300}/> <path d="M20 90 L 40 90 L -10 130 Z" fill={color.white}/> <text x="30" y="40">Punctual</text> <text x="30" y="65">Respectful</text> </g>
  </svg>
);
// 13. Disciplinary Measures, Consequences, and Corrective Action
const Sec13_DisciplinarySVG = (props) => (
  <svg viewBox="0 0 800 380" role="img" aria-label="Disciplinary Measures" {...props}>
    <BG id="gSec13" stops={[{ offset: "0%", color: color.rose50 }, { offset: "100%", color: color.slate200 }]} /> <rect x="0" y="0" width="800" height="380" rx="20" fill="url(#gSec13)" />
    {/* Gavel */}
    <g transform="translate(150, 120)"> <rect x="0" y="0" width="200" height="30" rx="8" fill={color.amber500} transform="rotate(-15)"/> <rect x="70" y="-70" width="30" height="90" rx="5" fill={color.amber500} transform="rotate(-15)"/> </g>
    {/* Warning / Termination Document */}
    <g transform="translate(400, 80)"> <Card x="0" y="0" w="280" h="200" r="12" /> <rect x="0" y="0" width="280" height="40" fill={color.rose100}/> <text x="20" y="28" fill={color.rose600} fontWeight="bold">Disciplinary Action</text> <text x="20" y="80">Warning / Termination</text> </g>
  </svg>
);
// 14. Ethical Training, Awareness, and Continuous Compliance
const Sec14_EthicalTrainingSVG = (props) => ( // Reusing Training SVG
  <svg viewBox="0 0 800 380" role="img" aria-label="Ethical Training and Awareness" {...props}>
    <BG id="gSec6" stops={[{ offset: "0%", color: color.emerald50 }, { offset: "100%", color: color.cyan50 }]} /> <rect x="0" y="0" width="800" height="380" rx="20" fill="url(#gSec6)" />
    <g transform="translate(300, 60)"> <rect x="0" y="0" width="400" height="250" rx="10" fill={color.white} stroke={color.slate300} /> <rect x="195" y="250" width="10" height="40" fill={color.slate300} /> <text x="30" y="50" fontSize="24" fontWeight="bold">Ethics Training</text> </g>
    <g transform="translate(150, 100)"> <circle cx="0" cy="0" r="40" fill="#A0522D" /> <rect x="-30" y="40" width="60" height="120" rx="10" fill={color.indigo800} /> <line x1="40" y1="10" x2="200" y2="-20" stroke={color.slate500} strokeWidth="4" /> </g>
  </svg>
);
// 15. Ethical Leadership, Responsibility, and Accountability of Management
const Sec15_EthicalLeadershipSVG = (props) => ( // Reusing Leadership SVG
  <svg viewBox="0 0 800 380" role="img" aria-label="Ethical Leadership" {...props}>
    <BG id="gSec7" stops={[{ offset: "0%", color: color.emerald50 }, { offset: "100%", color: color.indigo50 }]} /> <rect x="0" y="0" width="800" height="380" rx="20" fill="url(#gSec7)" />
    <g transform="translate(150, 120)"> <polygon points="0 180, 120 180, 100 50, 20 50" fill={color.amber500} /> <circle cx="60" cy="0" r="40" fill="#A0522D" /> <rect x="30" y="40" width="60" height="80" rx="10" fill={color.indigo800} /> </g>
    <g transform="translate(350, 80)"> <text x="0" y="20" fontSize="24" fontWeight="bold">Lead by Example</text> <path d="M0 220 L 80 150 L 160 170 L 240 100 L 320 80" stroke={color.emerald600} strokeWidth="8" fill="none" /> </g>
  </svg>
);
// 16. Legal Disclaimer, Binding Commitment, and Final Declaration
const Sec16_LegalDisclaimerSVG = (props) => ( // Reusing Disclaimer SVG
  <svg viewBox="0 0 800 380" role="img" aria-label="Legal Disclaimer" {...props}>
    <BG id="gSec14" stops={[{ offset: "0%", color: color.slate200 }, { offset: "100%", color: color.amber50 }]} /> <rect x="0" y="0" width="800" height="380" rx="20" fill="url(#gSec14)" />
    <g transform="translate(100, 150)"> <rect x="0" y="0" width="220" height="40" rx="10" fill={color.amber500} stroke={color.slate700} strokeWidth="2" transform="rotate(-20)" /> <rect x="80" y="-80" width="30" height="100" rx="8" fill={color.amber500} stroke={color.slate700} strokeWidth="2" transform="rotate(-20)" /> </g>
    <g transform="translate(380, 80)"> <Card x="0" y="0" w="320" h="220" r="12" stroke={color.slate400} sw="2" /> <text x="20" y="50" fontSize="24" fontWeight="bold">Legal Disclaimer</text> <rect x="20" y="80" width="280" height="6" rx="3" fill={color.slate400} /> <circle cx="260" cy="170" r="40" fill={color.indigo600} /> <text x="260" y="175" fontSize="14" fontWeight="bold" fill={color.white} textAnchor="middle">Section 8</text> </g>
  </svg>
);


/* ------------------------------ Section block (Height Fixed) ------------------------------ */
const SectionBlock = ({ id, title, content, tagline, SVG, reverse = false }) => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start 80%", "end 20%"] });
  const y = useSpring(useTransform(scrollYProgress, [0, 1], [18, -18]), { stiffness: 120, damping: 20 });
  const opacity = useTransform(scrollYProgress, [0, 1], [0.6, 1]);

  const paragraphs = content.split("\n").map((p, i) => (
    <p key={i} className="text-[15px] sm:text-base text-gray-700 leading-relaxed whitespace-pre-wrap">{p}</p>
  ));

  return (
    <section id={id} ref={ref} className="mt-8 sm:mt-10 md:mt-12 lg:mt-16">
      {/* Grid now uses md:items-stretch */}
      <motion.div
        style={{ opacity }}
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-6 md:gap-8 lg:gap-10 md:items-stretch" // Changed items-start to items-stretch
      >
        {/* SVG Column: Added flex flex-col */}
        <motion.div style={{ y }} className={`relative min-w-0 flex flex-col ${reverse ? "md:order-2" : "md:order-1"}`}>
          {/* Background Blur */}
          <div className="absolute -inset-2 rounded-2xl bg-gradient-to-tr from-cyan-100 via-indigo-100 to-emerald-100 blur-md sm:blur-lg md:blur-xl" aria-hidden="true" />
          {/* Inner Container: Added flex-grow and flex for centering */}
          <div className="relative rounded-2xl border border-gray-200 bg-white p-3 sm:p-4 shadow-sm flex-grow flex items-center justify-center">
             {/* SVG Container: Added h-full */}
            <div className="w-full h-full">
              {/* SVG: Added h-full and object-contain */}
              <SVG className="w-full h-full object-contain" />
            </div>
          </div>
        </motion.div>

        {/* Content Column */}
        <div className={`${reverse ? "md:order-1" : "md:order-2"} min-w-0 py-2`}> {/* Added slight py for alignment */}
          <h2 className="text-[20px] sm:text-2xl font-semibold text-gray-900 leading-snug">{title}</h2>
          <div className="mt-2.5 sm:mt-3 space-y-3">{paragraphs}</div>
          {/* Render tagline if it exists */}
          {tagline && (
             <p className="mt-3 text-sm font-medium text-cyan-700 italic">{tagline}</p>
          )}
        </div>
      </motion.div>
    </section>
  );
};


/* ---------------------------------- Page ---------------------------------- */
export default function CodeOfConduct() { // Using name from stub
  const { container, itemUp } = useAnims();
  const heroRef = useRef(null);
  const { scrollYProgress } = useScroll({ target: heroRef, offset: ["start start", "end start"] });
  const heroY = useTransform(scrollYProgress, [0, 1], [0, -40]);

  // Map section IDs to SVG components (16 defined)
  const svgMap = {
    'sec1-purpose-and-vision-of-the-code': Sec1_PurposeVisionSVG,
    'sec2-scope-and-applicability': Sec2_ScopeSVG,
    'sec3-core-ethical-and-moral-principles': Sec3_PrinciplesSVG,
    'sec4-professional-conduct-behaviour-and-integrity': Sec4_ProfessionalConductSVG,
    'sec5-respect-equality-and-non-discrimination-policy': Sec5_RespectEqualitySVG,
    'sec6-use-of-digital-systems-technology-and-it-infrastructure': Sec6_DigitalSystemsSVG,
    'sec7-data-privacy-information-security-and-confidentiality': Sec7_PrivacyConfidentialitySVG,
    'sec8-conflict-of-interest-neutrality-and-political-non-affiliation': Sec8_ConflictInterestSVG,
    'sec9-anti-corruption-anti-fraud-and-integrity-standards': Sec9_AntiCorruptionSVG,
    'sec10-responsible-use-of-social-media-and-public-communication': Sec10_SocialMediaSVG,
    'sec11-reporting-misconduct-and-whistle-blower-protection-policy': Sec11_WhistleblowerSVG,
    'sec12-professional-appearance-public-conduct-and-official-communication': Sec12_ProfessionalAppearanceSVG,
    'sec13-disciplinary-measures-consequences-and-corrective-action': Sec13_DisciplinarySVG,
    'sec14-ethical-training-awareness-and-continuous-compliance': Sec14_EthicalTrainingSVG,
    'sec15-ethical-leadership-responsibility-and-accountability-of-management': Sec15_EthicalLeadershipSVG,
    'sec16-legal-disclaimer-binding-commitment-and-final-declaration': Sec16_LegalDisclaimerSVG,
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
        <Link to="/recruitment-process/recruitment-rules-policies" className="hover:underline">recruitment</Link> { /* Assuming this goes under careers */ }
        <span aria-hidden="true"> › </span>
        <span className="text-gray-700" aria-current="page">Code of Conduct</span> {/* Updated text */}
      </motion.nav>

      {/* Hero with Video-SVG (Code of Conduct scene) */}
      <div ref={heroRef} className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-6 md:gap-8 lg:gap-10 items-center">
        <motion.div variants={itemUp}>
          <h1 className="text-[22px] sm:text-3xl font-bold text-gray-900">{data.title}</h1>
          <div className="mt-3 sm:mt-4 flex flex-wrap gap-2">
            {["Ethics", "Conduct", "Policy", "Integrity"].map((pill) => ( // Updated pills
              <span key={pill} className="px-2.5 sm:px-3 py-1.5 text-xs sm:text-sm rounded-full bg-cyan-100 text-cyan-800 border border-cyan-200">
                {pill}
              </span>
            ))}
          </div>
        </motion.div>

        <motion.div style={{ y: heroY }} className="relative">
          <div className="absolute -inset-2 rounded-2xl bg-gradient-to-tr from-slate-200 via-indigo-100 to-amber-100 blur-md sm:blur-lg md:blur-xl" aria-hidden="true" />
          <div className="relative rounded-2xl border border-gray-200 bg-white p-3 sm:p-4 shadow-sm">
            <div className="w-full h-auto max-h-72 sm:max-h-80 md:max-h-none overflow-hidden">
              <VideoHeroCodeOfConduct // Corrected Hero component name
                src="/assets/video/code-of-conduct-hero.mp4"
                poster="/assets/video/code-of-conduct-hero.jpg"
              />
            </div>
          </div>
        </motion.div>
      </div>

      {/* Sections */}
      <div className="mt-8 sm:mt-10 md:mt-12">
        {/* Iterate over the imported data */}
        {codeOfConductData.map((sec, idx) => { // Use correct data variable name
          // Use the updated svgMap, fallback to the first SVG if ID mismatch
          const SVGComp = svgMap[sec.id] || Sec1_PurposeVisionSVG;
          return (
            <SectionBlock
              key={sec.id}
              id={sec.id}
              title={sec.heading}
              content={sec.content}
              tagline={sec.tagline} // Pass tagline to SectionBlock
              SVG={SVGComp}
              reverse={idx % 2 === 1}
            />
          );
        })}
      </div>

      {/* The disclaimer is now section 16 from the data, rendered by the map */}

    </motion.section>
  );
}