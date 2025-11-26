// src/pages/careers/TrainingAndSkillDevelopment.jsx
import React, { useRef } from "react";
import { Link } from "react-router-dom";
import { motion, useReducedMotion, useScroll, useTransform, useSpring } from "framer-motion";
// Correct import path as per your stub
import { trainingAndSkillDevelopmentData } from '../../data/recruitment_rules_policies/TrainingAndSkillDevelopmentData';

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
  title: "Training & Skill Development",
  // Tagline will be pulled per section from the imported data
};

/* -------------------------- HERO: Video SVG (inline) -------------------------- */
/* Scene: Mentor guiding trainees at computers, skill icons floating. */
const VideoHeroTraining = ({ src = "", poster = "" }) => {
  const prefersReduced =
    typeof window !== "undefined" &&
    window.matchMedia &&
    window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  const title = "CRCCF Training and Skill Development Hero";
  const desc =
    "A mentor guides trainees at computers, symbolizing skill development. The background is a masked video or a soft gradient.";

  // Fallback: animated gradient stage + overlay
  if (prefersReduced || !src) {
    return (
      <svg viewBox="0 0 1000 460" role="img" aria-labelledby="trTitle trDesc" className="w-full h-auto">
        <title id="trTitle">{title}</title>
        <desc id="trDesc">{desc}</desc>
        <defs>
          <linearGradient id="trGrad" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor={color.emerald100}>
              <animate attributeName="offset" values="0;0.15;0" dur="8s" repeatCount="indefinite" />
            </stop>
            <stop offset="55%" stopColor={color.cyan100}>
              <animate attributeName="offset" values="0.55;0.85;0.55" dur="8s" repeatCount="indefinite" />
            </stop>
            <stop offset="100%" stopColor={color.indigo100} />
          </linearGradient>
          <filter id="trSoft" x="-20%" y="-20%" width="140%" height="140%">
            <feGaussianBlur in="SourceGraphic" stdDeviation="8" result="b" />
            <feColorMatrix in="b" type="matrix" values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 .6 0" />
          </filter>
          <clipPath id="trStage">
            <rect x="40" y="36" width="640" height="388" rx="26" />
          </clipPath>
        </defs>

        <g filter="url(#trSoft)">
          <rect x="0" y="0" width="1000" height="460" rx="28" fill="url(#trGrad)" />
        </g>
        <g clipPath="url(#trStage)">
          <rect x="0" y="0" width="1000" height="460" fill="url(#trGrad)">
            <animate attributeName="x" values="0;22;0" dur="8s" repeatCount="indefinite" />
          </rect>
        </g>

        {TrainingOverlay()}
      </svg>
    );
  }

  // Main masked video version with overlay
  return (
    <svg viewBox="0 0 1000 460" className="w-full h-auto block" role="img" aria-label={title}>
      <defs>
        <linearGradient id="trBG" x1="0" y1="0" x2="1" y2="1">
           <stop offset="0%" stopColor={color.emerald100} />
           <stop offset="55%" stopColor={color.cyan100} />
           <stop offset="100%" stopColor={color.indigo100} />
        </linearGradient>
        <filter id="trSoft2" x="-20%" y="-20%" width="140%" height="140%">
          <feGaussianBlur in="SourceGraphic" stdDeviation="8" result="b" />
          <feColorMatrix in="b" type="matrix" values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 .6 0" />
        </filter>
        <clipPath id="trStage2">
          <rect x="40" y="36" width="640" height="388" rx="26" />
        </clipPath>
      </defs>

      <g filter="url(#trSoft2)">
        <rect x="0" y="0" width="1000" height="460" rx="28" fill="url(#trBG)" />
      </g>

      {/* poster + masked video */}
      <g clipPath="url(#trStage2)">
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

      {TrainingOverlay()}
    </svg>
  );
};

/* ----------------------- Overlay: training scene ----------------------- */
function TrainingOverlay() {
  return (
    <g transform="translate(680, 50)">
      {/* Mentor Figure */}
      <g transform="translate(40, 140)">
        <rect x="0" y="100" width="80" height="150" rx="15" fill={color.indigo800} />
        <circle cx="40" cy="65" r="35" fill="#A0522D" />
      </g>
      {/* Trainee Figure */}
      <g transform="translate(200, 190)">
        <rect x="0" y="80" width="70" height="120" rx="15" fill={color.cyan500} />
        <circle cx="35" cy="50" r="30" fill="#F5D0A6" />
      </g>
      {/* Computer */}
      <g transform="translate(180, 220)">
         <rect x="0" y="0" width="150" height="100" rx="10" fill={color.slate900} />
         <rect x="5" y="5" width="140" height="90" rx="5" fill={color.white} />
         <rect x="-10" y="100" width="170" height="10" rx="5" fill={color.slate400} />
      </g>
       {/* Skill Icons */}
       <g transform="translate(100, 80)"><circle cx="0" cy="0" r="20" fill={color.white}/><path d="M-10 -5 L 0 5 L 10 -5" stroke={color.emerald600} strokeWidth="4" fill="none"/></g>
       <g transform="translate(280, 100)"><circle cx="0" cy="0" r="20" fill={color.white}/><rect x="-8" y="-8" width="16" height="16" fill={color.amber500}/></g>
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

// 1. Purpose & Vision of Training
const Sec1_PurposeVisionSVG = (props) => (
  <svg viewBox="0 0 800 380" role="img" aria-label="Purpose and Vision of Training" {...props}>
    <BG id="gSec1" stops={[{ offset: "0%", color: color.indigo50 }, { offset: "100%", color: color.cyan50 }]} /> <SoftGlow id="glowSec1" std={10} alpha={0.4} /> <rect x="0" y="0" width="800" height="380" rx="20" fill="url(#gSec1)" />
    {/* Lightbulb (Vision) */}
    <g transform="translate(150, 120)"> <path d="M50 0 C 0 0, 0 60, 50 60 C 100 60, 100 0, 50 0 Z" fill={color.amber100} /> <rect x="40" y="60" width="20" height="20" fill={color.amber100} /> <path d="M-20 0 H 120 M 0 -20 V 120" stroke={color.amber500} strokeWidth="4" opacity="0.5"> <animate attributeName="opacity" values="0.5;0.2;0.5" dur="1.5s" repeatCount="indefinite" /> </path> </g>
    {/* Book (Knowledge) */}
    <g transform="translate(400, 80)"> <path d="M50 30 C 150 -30, 250 -30, 350 30 L 350 250 C 250 190, 150 190, 50 250 Z" fill={color.white} stroke={color.slate300} strokeWidth="3" /> <path d="M200 35 V 245" stroke={color.slate300} strokeWidth="2" /> <text x="70" y="70" fontSize="20" fontWeight="bold">Training</text> </g>
  </svg>
);
// 2. Scope & Applicability
const Sec2_ScopeSVG = (props) => ( // Reusing SVG
  <svg viewBox="0 0 800 380" role="img" aria-label="Scope and Applicability" {...props}>
    <BG id="gSec2" stops={[{ offset: "0%", color: color.cyan25 }, { offset: "100%", color: color.indigo50 }]} /> <rect x="0" y="0" width="800" height="380" rx="20" fill="url(#gSec2)" />
    <g transform="translate(400, 190)"> <circle cx="0" cy="0" r="50" fill={color.indigo600}/> <text x="0" y="10" fontSize="24" fontWeight="bold" fill={color.white} textAnchor="middle">C</text> </g>
    <g stroke={color.slate400} strokeWidth="3" fill="none"> <path d="M400 140 V 80 H 200 V 60"/> <path d="M400 140 V 80 H 600 V 60"/> <path d="M400 240 V 300 H 200 V 320"/> <path d="M400 240 V 300 H 600 V 320"/> </g>
    <g transform="translate(180, 20)"><circle cx="0" cy="0" r="20" fill={color.cyan100}/><rect x="-15" y="20" width="30" height="40" rx="5" fill={color.cyan100}/><text y="75" textAnchor="middle" fontSize="12">Employee</text></g>
    <g transform="translate(580, 20)"><circle cx="0" cy="0" r="20" fill={color.emerald100}/><rect x="-15" y="20" width="30" height="40" rx="5" fill={color.emerald100}/><text y="75" textAnchor="middle" fontSize="12">Intern</text></g>
    <g transform="translate(180, 300)"><circle cx="0" cy="0" r="20" fill={color.rose100}/><rect x="-15" y="20" width="30" height="40" rx="5" fill={color.rose100}/><text y="75" textAnchor="middle" fontSize="12">Volunteer</text></g>
    <g transform="translate(580, 300)"><circle cx="0" cy="0" r="20" fill={color.amber100}/><rect x="-15" y="20" width="30" height="40" rx="5" fill={color.amber100}/><text y="75" textAnchor="middle" fontSize="12">Partner</text></g>
  </svg>
);
// 3. Orientation Program Overview
const Sec3_OrientationSVG = (props) => ( // Reusing SVG
  <svg viewBox="0 0 800 380" role="img" aria-label="Orientation Program Overview" {...props}>
    <BG id="gSec12" stops={[{ offset: "0%", color: color.cyan50 }, { offset: "100%", color: color.indigo50 }]} /> <rect x="0" y="0" width="800" height="380" rx="20" fill="url(#gSec12)" />
    <g transform="translate(300, 60)"> <rect x="0" y="0" width="400" height="250" rx="10" fill={color.white} stroke={color.slate300} /> <rect x="195" y="250" width="10" height="40" fill={color.slate300} /> <text x="30" y="50" fontSize="24" fontWeight="bold">Orientation</text> <text x="30" y="100" fontSize="20">- Mission & Vision</text> <text x="30" y="140" fontSize="20">- Code of Conduct</text> <text x="30" y="180" fontSize="20">- Policies</text> </g>
    <g transform="translate(150, 120)"> <path d="M50 0 C 0 0, 0 60, 50 60 C 100 60, 100 0, 50 0 Z" fill={color.amber100} /> <rect x="40" y="60" width="20" height="20" fill={color.amber100} /> <path d="M-20 0 H 120 M 0 -20 V 120" stroke={color.amber500} strokeWidth="4" opacity="0.5"> <animate attributeName="opacity" values="0.5;0.2;0.5" dur="1.5s" repeatCount="indefinite" /> </path> </g>
  </svg>
);
// 4. Core Training Domains
const Sec4_DomainsSVG = (props) => ( // Reusing SVG
  <svg viewBox="0 0 800 380" role="img" aria-label="Core Training Domains" {...props}>
    <BG id="gSec5" stops={[{ offset: "0%", color: color.indigo25 }, { offset: "100%", color: color.cyan50 }]} /> <rect x="0" y="0" width="800" height="380" rx="20" fill="url(#gSec5)" />
    <path d="M400 50 V 100" stroke={color.slate400} strokeWidth="4" /> <path d="M120 100 H 680" stroke={color.slate400} strokeWidth="4" /> <path d="M120 100 V 150" stroke={color.slate400} strokeWidth="4" /> <path d="M280 100 V 150" stroke={color.slate400} strokeWidth="4" /> <path d="M520 100 V 150" stroke={color.slate400} strokeWidth="4" /> <path d="M680 100 V 150" stroke={color.slate400} strokeWidth="4" />
    <g transform="translate(350, 30)"> <Card x="0" y="0" w="100" h="40" r="8" fill={color.indigo600} /> <text x="50" y="25" fontSize="16" fontWeight="bold" fill={color.white} textAnchor="middle">Domains</text> </g>
    <g transform="translate(80, 150)"> <Card x="0" y="0" w="80" h="80" r="8" fill={color.white}/> <path d="M15 20 L 65 20 L 40 50 Z M 15 55 H 65" stroke={color.indigo600} strokeWidth="6" /> <text x="40" y="70" fontSize="12" textAnchor="middle">Legal</text> </g>
    <g transform="translate(240, 150)"> <Card x="0" y="0" w="80" h="80" r="8" fill={color.white}/> <path d="M20 30 L 35 45 L 20 60 M 45 30 L 60 45 L 45 60" stroke={color.slate700} strokeWidth="6" fill="none" /> <text x="40" y="70" fontSize="12" textAnchor="middle">IT</text> </g>
    <g transform="translate(480, 150)"> <Card x="0" y="0" w="80" h="80" r="8" fill={color.white}/> <path d="M40 20l30 15v20c0 15-12 25-30 30-18-5-30-15-30-30v-20l30-15z" fill={color.emerald100}/> <text x="40" y="70" fontSize="12" textAnchor="middle">Ethics</text> </g>
    <g transform="translate(640, 150)"> <Card x="0" y="0" w="80" h="80" r="8" fill={color.white}/> <circle cx="40" cy="35" r="15" fill={color.cyan500} /> <rect x="20" y="50" width="40" height="20" rx="5" fill={color.cyan500} /> <text x="40" y="70" fontSize="12" textAnchor="middle">Leadership</text> </g>
  </svg>
);
// 5. Skill Development Framework
const Sec5_SkillFrameworkSVG = (props) => ( // Reusing SVG
  <svg viewBox="0 0 800 380" role="img" aria-label="Skill Development Framework" {...props}>
    <BG id="gSkillDev" stops={[{ offset: "0%", color: color.emerald50 }, { offset: "100%", color: color.cyan50 }]} /> <rect x="0" y="0" width="800" height="380" rx="20" fill="url(#gSkillDev)" />
    <g transform="translate(150, 120)"> <rect x="0" y="0" width="100" height="30" rx="5" fill={color.slate500} /> <rect x="100" y="5" width="20" height="20" fill={color.slate500} /> <rect x="30" y="60" width="30" height="100" rx="5" fill={color.slate500} /> <rect x="10" y="40" width="70" height="40" rx="5" fill={color.slate700} /> </g>
    <g transform="translate(400, 100)"> <path d="M0 200 L 80 150 L 160 170 L 240 100 L 320 80" stroke={color.emerald600} strokeWidth="8" fill="none" /> <path d="M320 80 L 300 100 M 320 80 L 300 80" stroke={color.emerald600} strokeWidth="8" /> <line x1="0" y1="200" x2="320" y2="200" stroke={color.slate300}/> </g>
  </svg>
);
// 6. Mentorship and Guidance Program
const Sec6_MentorshipSVG = (props) => ( // Reusing SVG
  <svg viewBox="0 0 800 380" role="img" aria-label="Mentorship and Guidance" {...props}>
    <BG id="gSec3" stops={[{ offset: "0%", color: color.emerald50 }, { offset: "100%", color: color.cyan50 }]} /> <rect x="0" y="0" width="800" height="380" rx="20" fill="url(#gSec3)" />
    <g transform="translate(120, 100)"> <circle cx="0" cy="0" r="40" fill="#A0522D" /> <rect x="-30" y="40" width="60" height="120" rx="10" fill={color.indigo800} /> <circle cx="120" cy="50" r="30" fill="#F5D0A6" /> <rect x="100" y="80" width="40" height="80" rx="10" fill={color.cyan500} /> </g>
    <g transform="translate(350, 100)"> <path d="M0 150 C 100 50, 200 50, 300 150" stroke={color.slate700} strokeWidth="10" fill="none" /> <line x1="150" y1="80" x2="150" y2="150" stroke={color.slate700} strokeWidth="6" /> <text x="0" y="180" fontSize="16">Mentor</text> <text x="250" y="180" fontSize="16">Mentee</text> </g>
  </svg>
);
// 7. Digital & Legal Literacy Training
const Sec7_DigitalLegalSVG = (props) => ( // Reusing SVG
  <svg viewBox="0 0 800 380" role="img" aria-label="Digital & Legal Literacy" {...props}>
    <BG id="gSec6" stops={[{ offset: "0%", color: color.slate200 }, { offset: "100%", color: color.cyan50 }]} /> <rect x="0" y="0" width="800" height="380" rx="20" fill="url(#gSec6)" />
    <line x1="400" y1="40" x2="400" y2="340" stroke={color.slate700} strokeWidth="6" strokeDasharray="10 5" />
    <g transform="translate(150, 100)"> <text x="0" y="0" fontSize="24" fontWeight="bold" fill={color.indigo800} textAnchor="middle">LEGAL</text> <g transform="translate(0, 50)"> <rect x="-80" y="0" width="160" height="30" rx="8" fill={color.amber500} /> <rect x="-20" y="-60" width="40" height="80" rx="8" fill={color.amber500} /> </g> <text x="0" y="150" fontSize="20" textAnchor="middle">IT Act</text> </g>
    <g transform="translate(600, 100)"> <text x="0" y="0" fontSize="24" fontWeight="bold" fill={color.emerald600} textAnchor="middle">DIGITAL</text> <g transform="translate(0, 50)"> <path d="M-60 0 L -40 20 L -60 40 M -20 0 L 0 20 L -20 40" stroke={color.emerald600} strokeWidth="6" fill="none" /> <text x="30" y="30" fontFamily="monospace" fontSize="24">Literacy</text> </g> </g>
  </svg>
);
// 8. Communication & Personality Development
const Sec8_CommunicationSVG = (props) => ( // Reusing SVG
  <svg viewBox="0 0 800 380" role="img" aria-label="Communication & Personality" {...props}>
    <BG id="gSec5" stops={[{ offset: "0%", color: color.cyan50 }, { offset: "100%", color: color.indigo50 }]} /> <rect x="0" y="0" width="800" height="380" rx="20" fill="url(#gSec5)" />
    <g transform="translate(180, 100)"> <circle cx="0" cy="0" r="50" fill="#F5D0A6" /> <rect x="-40" y="50" width="80" height="130" rx="10" fill={color.indigo600} /> <g transform="translate(80, 0)"> <line x1="0" y1="-20" x2="50" y2="-20" stroke={color.cyan500} strokeWidth="6"> <animate attributeName="x2" values="50;70;50" dur="1.5s" repeatCount="indefinite" /> </line> <line x1="0" y1="0" x2="70" y2="0" stroke={color.cyan500} strokeWidth="6"> <animate attributeName="x2" values="70;90;70" dur="1.5s" delay="0.2s" repeatCount="indefinite" /> </line> </g> </g>
    <g transform="translate(450, 120)"> <circle cx="0" cy="0" r="30" fill={color.slate300} /> <rect x="-20" y="30" width="40" height="60" rx="8" fill={color.slate300} /> <circle cx="80" cy="0" r="30" fill={color.slate300} /> <rect x="60" y="30" width="40" height="60" rx="8" fill={color.slate300} /> </g>
  </svg>
);
// 9. Technical & IT-Based Training Programs
const Sec9_TechTrainingSVG = (props) => ( // Reusing SVG
  <svg viewBox="0 0 800 380" role="img" aria-label="Technical & IT Training" {...props}>
     <BG id="gSec6" stops={[{ offset: "0%", color: color.cyan50 }, { offset: "100%", color: color.indigo50 }]} /> <rect x="0" y="0" width="800" height="380" rx="20" fill="url(#gSec6)" />
     <g transform="translate(150, 80)"> <rect x="0" y="0" width="300" height="200" rx="15" fill={color.slate900}/> <rect x="10" y="10" width="280" height="180" rx="8" fill={color.white}/> <rect x="-10" y="200" width="320" height="15" rx="8" fill={color.slate400}/> <text x="150" y="100" textAnchor="middle">Code / Tools</text> </g>
     <g transform="translate(500, 100)"> <rect x="0" y="0" width="100" height="180" rx="8" fill={color.slate700}/> <rect x="10" y="15" width="80" height="25" rx="5" fill={color.emerald300}/> <text x="50" y="150" textAnchor="middle">Server</text> </g>
  </svg>
);
// 10. Ethics, Compliance & Behavioural Training
const Sec10_EthicsTrainingSVG = (props) => ( // Reusing SVG
  <svg viewBox="0 0 800 380" role="img" aria-label="Ethics and Compliance Training" {...props}>
    <BG id="gEthics" stops={[{ offset: "0%", color: color.indigo25 }, { offset: "100%", color: color.emerald50 }]} /> <rect x="0" y="0" width="800" height="380" rx="20" fill="url(#gEthics)" />
    <g transform="translate(150, 100)"> <path d="M0 0 H 200" stroke={color.slate700} strokeWidth="5" /> <path d="M100 0 V 30" stroke={color.slate700} strokeWidth="5" /> <g transform="translate(30, 30)"><path d="M0 0 L -30 70 L 30 70 Z" fill={color.amber100} stroke={color.amber500}/> </g> <g transform="translate(170, 30)"><path d="M0 0 L -30 70 L 30 70 Z" fill={color.amber100} stroke={color.amber500}/> </g> </g>
    <g transform="translate(500, 120)"> <circle cx="0" cy="0" r="80" fill={color.emerald100} stroke={color.emerald600}/> <path d="M-40 0 L -10 30 L 50 -30" stroke={color.emerald600} strokeWidth="12" fill="none"/> </g>
  </svg>
);
// 11. Performance Review & Continuous Evaluation
const Sec11_PerformanceReviewSVG = (props) => ( // Reusing SVG
  <svg viewBox="0 0 800 380" role="img" aria-label="Performance Review" {...props}>
    <BG id="gSec14" stops={[{ offset: "0%", color: color.cyan50 }, { offset: "100%", color: color.indigo50 }]} /> <rect x="0" y="0" width="800" height="380" rx="20" fill="url(#gSec14)" />
    <g transform="translate(100, 60)"> <Card x="0" y="0" w="400" h="280" r="12"/> <text x="30" y="50" fontSize="24" fontWeight="bold">Performance Review</text> <path d="M50 220 L 100 150 L 150 170 L 200 120 L 250 140 L 300 100" stroke={color.emerald600} strokeWidth="5" fill="none" /> <line x1="50" y1="220" x2="350" y2="220" stroke={color.slate300}/> </g>
    <g transform="translate(550, 120)"> <circle cx="0" cy="0" r="80" fill="white" stroke={color.slate300}/> <line x1="0" y1="0" x2="0" y2="-50" stroke={color.slate700} strokeWidth="6"/> <line x1="0" y1="0" x2="40" y2="0" stroke={color.slate700} strokeWidth="6"> <animateTransform attributeName="transform" type="rotate" values="0 0 0; 360 0 0" dur="5s" repeatCount="indefinite" transform-origin="0 0"/> </line> <text x="0" y="110" fontSize="20" fontWeight="bold" textAnchor="middle">Continuous</text> </g>
  </svg>
);
// 12. Workshops, Seminars & Public Engagement Programs
const Sec12_WorkshopsSVG = (props) => ( // Reusing SVG
  <svg viewBox="0 0 800 380" role="img" aria-label="Workshops and Seminars" {...props}>
    <BG id="gSec6" stops={[{ offset: "0%", color: color.emerald50 }, { offset: "100%", color: color.cyan50 }]} /> <rect x="0" y="0" width="800" height="380" rx="20" fill="url(#gSec6)" />
    <g transform="translate(300, 60)"> <rect x="0" y="0" width="400" height="250" rx="10" fill={color.white} stroke={color.slate300} /> <rect x="195" y="250" width="10" height="40" fill={color.slate300} /> <text x="30" y="50" fontSize="24" fontWeight="bold">Workshop</text> </g>
    <g transform="translate(150, 100)"> <circle cx="0" cy="0" r="40" fill="#A0522D" /> <rect x="-30" y="40" width="60" height="120" rx="10" fill={color.indigo800} /> <line x1="40" y1="10" x2="200" y2="-20" stroke={color.slate500} strokeWidth="4" /> </g>
  </svg>
);
// 13. Certification, Recognition & Credential System
const Sec13_CertificationSVG = (props) => ( // Reusing SVG
  <svg viewBox="0 0 800 380" role="img" aria-label="Certification and Recognition" {...props}>
    <BG id="gSec4" stops={[{ offset: "0%", color: color.amber50 }, { offset: "100%", color: color.cyan50 }]} /> <rect x="0" y="0" width="800" height="380" rx="20" fill="url(#gSec4)" />
    <g transform="translate(100, 60)"> <Card x="0" y="0" w="600" h="280" r="15" stroke={color.amber500} sw="4" /> <text x="300" y="80" fontSize="30" fontWeight="bold" textAnchor="middle">Certificate</text> <rect x="200" y="140" width="200" height="10" rx="5" fill={color.indigo600} /> <g transform="translate(100, 200)"> <circle cx="0" cy="0" r="40" fill={color.indigo100} stroke={color.indigo600}/> <text x="0" y="5" fontSize="12" fontWeight="bold" fill={color.indigo600} textAnchor="middle">CRCCF</text> </g> <g transform="translate(500, 200)"> <circle cx="0" cy="0" r="40" fill={color.emerald100} stroke={color.emerald600}/> <path d="M-15 -10 l10 10 20-20" stroke={color.emerald600} strokeWidth="5" fill="none" /> </g> </g>
  </svg>
);
// 14. Skill Development for Volunteers & Interns
const Sec14_VolunteerInternSVG = (props) => ( // Reusing SVG
  <svg viewBox="0 0 800 380" role="img" aria-label="Skill Development for Volunteers & Interns" {...props}>
    <BG id="gSec5" stops={[{ offset: "0%", color: color.cyan25 }, { offset: "100%", color: color.indigo50 }]} /> <rect x="0" y="0" width="800" height="380" rx="20" fill="url(#gSec5)" />
    <g transform="translate(120, 100)"> <circle cx="0" cy="0" r="40" fill="#A0522D" /> <rect x="-30" y="40" width="60" height="120" rx="10" fill={color.indigo800} /> <circle cx="120" cy="50" r="30" fill="#F5D0A6" /> <rect x="100" y="80" width="40" height="80" rx="10" fill={color.cyan500} /> </g>
    <g transform="translate(350, 100)"> <path d="M0 200 L 100 100 L 200 120 L 300 50" stroke={color.emerald600} strokeWidth="8" fill="none" /> <text x="0" y="230" fontSize="16">Volunteer/Intern</text> <text x="300" y="30" fontSize="16">Skilled</text> </g>
  </svg>
);
// 15. Partnerships, Collaboration & Continuous Learning
const Sec15_PartnershipsSVG = (props) => ( // Reusing SVG
  <svg viewBox="0 0 800 380" role="img" aria-label="Partnerships and Collaboration" {...props}>
    <BG id="gCommunity" stops={[{ offset: "0%", color: color.cyan50 }, { offset: "100%", color: color.indigo50 }]} /> <rect x="0" y="0" width="800" height="380" rx="20" fill="url(#gCommunity)" />
    <g transform="translate(400, 190)" stroke={color.slate400} strokeWidth="3" opacity="0.7">
      <circle cx="0" cy="0" r="10" fill={color.indigo600} /> <circle cx="-100" cy="-50" r="10" fill={color.cyan500} /> <line x1="0" y1="0" x2="-100" y2="-50" /> <circle cx="100" cy="-50" r="10" fill={color.cyan500} /> <line x1="0" y1="0" x2="100" y2="-50" /> <circle cx="0" cy="100" r="10" fill={color.cyan500} /> <line x1="0" y1="0" x2="0" y2="100" />
    </g>
     <g transform="translate(150, 150)"> <path d="M0 0 L 60 60 L 120 0 L 160 40 L 80 120 L 40 80 Z" fill={color.indigo300} /> <path d="M0 60 L 60 0 L 120 60 L 160 20 L 80 -60 L 40 -20 Z" fill={color.emerald300} /> </g>
  </svg>
);
// 16. Legal Disclaimer & Compliance Commitment
const Sec16_LegalDisclaimerSVG = (props) => ( // Reusing SVG
  <svg viewBox="0 0 800 380" role="img" aria-label="Legal Disclaimer" {...props}>
    <BG id="gSec14" stops={[{ offset: "0%", color: color.slate200 }, { offset: "100%", color: color.amber50 }]} /> <rect x="0" y="0" width="800" height="380" rx="20" fill="url(#gSec14)" />
    <g transform="translate(100, 150)"> <rect x="0" y="0" width="220" height="40" rx="10" fill={color.amber500} transform="rotate(-20)" /> <rect x="80" y="-80" width="30" height="100" rx="8" fill={color.amber500} transform="rotate(-20)" /> </g>
    <g transform="translate(380, 80)"> <Card x="0" y="0" w="320" h="220" r="12"/> <text x="20" y="50" fontSize="24" fontWeight="bold">Legal Disclaimer</text> <rect x="20" y="80" width="280" height="6" rx="3" fill={color.slate400} /> <circle cx="260" cy="170" r="40" fill={color.indigo600} /> <text x="260" y="175" fontSize="14" fill={color.white} textAnchor="middle">Compliant</text> </g>
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
export default function TrainingAndSkillDevelopment() { // Using name from stub
  const { container, itemUp } = useAnims();
  const heroRef = useRef(null);
  const { scrollYProgress } = useScroll({ target: heroRef, offset: ["start start", "end start"] });
  const heroY = useTransform(scrollYProgress, [0, 1], [0, -40]);

  // Map section IDs to SVG components (16 defined)
  const svgMap = {
    'sec1-purpose-and-vision-of-training': Sec1_PurposeVisionSVG,
    'sec2-scope-and-applicability': Sec2_ScopeSVG,
    'sec3-orientation-program-overview': Sec3_OrientationSVG,
    'sec4-core-training-domains': Sec4_DomainsSVG,
    'sec5-skill-development-framework': Sec5_SkillFrameworkSVG,
    'sec6-mentorship-and-guidance-program': Sec6_MentorshipSVG,
    'sec7-digital-and-legal-literacy-training': Sec7_DigitalLegalSVG,
    'sec8-communication-and-personality-development': Sec8_CommunicationSVG,
    'sec9-technical-and-it-based-training-programs': Sec9_TechTrainingSVG,
    'sec10-ethics-compliance-and-behavioural-training': Sec10_EthicsTrainingSVG,
    'sec11-performance-review-and-continuous-evaluation': Sec11_PerformanceReviewSVG,
    'sec12-workshops-seminars-and-public-engagement-programs': Sec12_WorkshopsSVG,
    'sec13-certification-recognition-and-credential-system': Sec13_CertificationSVG,
    'sec14-skill-development-for-volunteers-and-interns': Sec14_VolunteerInternSVG,
    'sec15-partnerships-collaboration-and-continuous-learning': Sec15_PartnershipsSVG,
    'sec16-legal-disclaimer-and-compliance-commitment': Sec16_LegalDisclaimerSVG,
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
        <Link to="/recruitment-process/recruitment-rules-policies" className="hover:underline">recruitment</Link> {/* Assuming this goes under careers */}
        <span aria-hidden="true"> › </span>
        <span className="text-gray-700" aria-current="page">Training & Skill Development</span> {/* Updated text */}
      </motion.nav>

      {/* Hero with Video-SVG (training scene) */}
      <div ref={heroRef} className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-6 md:gap-8 lg:gap-10 items-center">
        <motion.div variants={itemUp}>
          <h1 className="text-[22px] sm:text-3xl font-bold text-gray-900">{data.title}</h1>
          <div className="mt-3 sm:mt-4 flex flex-wrap gap-2">
            {["Training", "Skills", "Development", "Mentorship"].map((pill) => ( // Updated pills
              <span key={pill} className="px-2.5 sm:px-3 py-1.5 text-xs sm:text-sm rounded-full bg-cyan-100 text-cyan-800 border border-cyan-200">
                {pill}
              </span>
            ))}
          </div>
        </motion.div>

        <motion.div style={{ y: heroY }} className="relative">
          <div className="absolute -inset-2 rounded-2xl bg-gradient-to-tr from-emerald-100 via-cyan-100 to-indigo-100 blur-md sm:blur-lg md:blur-xl" aria-hidden="true" />
          <div className="relative rounded-2xl border border-gray-200 bg-white p-3 sm:p-4 shadow-sm">
            <div className="w-full h-auto max-h-72 sm:max-h-80 md:max-h-none overflow-hidden">
              <VideoHeroTraining // Corrected Hero component name
                src="/assets/video/training-skilldev-hero.mp4"
                poster="/assets/video/training-skilldev-hero.jpg"
              />
            </div>
          </div>
        </motion.div>
      </div>

      {/* Sections */}
      <div className="mt-8 sm:mt-10 md:mt-12">
        {/* Iterate over the imported data */}
        {trainingAndSkillDevelopmentData.map((sec, idx) => { // Use correct data variable name
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