// src/pages/careers/EmploymentEligibilityCriteria.jsx
import React, { useRef } from "react";
import { Link } from "react-router-dom";
import { motion, useReducedMotion, useScroll, useTransform, useSpring } from "framer-motion";
// Correct import path as per your stub
import { employmentEligibilityCriteriaData } from '../../data/recruitment_rules_policies/employmentEligibilityCriteriaData';

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
  title: "Employment Eligibility Criteria",
  // Tagline will be pulled per section from the imported data
};

/* -------------------------- HERO: Video SVG (inline) -------------------------- */
/* Scene: CRCCF compliance officer reviewing a candidate's file against a checklist. */
const VideoHeroEligibility = ({ src = "", poster = "" }) => {
  const prefersReduced =
    typeof window !== "undefined" &&
    window.matchMedia &&
    window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  const title = "CRCCF Employment Eligibility Criteria Hero";
  const desc =
    "A compliance officer reviews a file against a checklist, with legal symbols. The background is a masked video or a soft gradient.";

  // Fallback: animated gradient stage + overlay
  if (prefersReduced || !src) {
    return (
      <svg viewBox="0 0 1000 460" role="img" aria-labelledby="elTitle elDesc" className="w-full h-auto">
        <title id="elTitle">{title}</title>
        <desc id="elDesc">{desc}</desc>
        <defs>
          <linearGradient id="elGrad" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor={color.indigo100}>
              <animate attributeName="offset" values="0;0.15;0" dur="8s" repeatCount="indefinite" />
            </stop>
            <stop offset="55%" stopColor={color.slate200}>
              <animate attributeName="offset" values="0.55;0.85;0.55" dur="8s" repeatCount="indefinite" />
            </stop>
            <stop offset="100%" stopColor={color.amber100} />
          </linearGradient>
          <filter id="elSoft" x="-20%" y="-20%" width="140%" height="140%">
            <feGaussianBlur in="SourceGraphic" stdDeviation="8" result="b" />
            <feColorMatrix in="b" type="matrix" values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 .6 0" />
          </filter>
          <clipPath id="elStage">
            <rect x="40" y="36" width="640" height="388" rx="26" />
          </clipPath>
        </defs>

        <g filter="url(#elSoft)">
          <rect x="0" y="0" width="1000" height="460" rx="28" fill="url(#elGrad)" />
        </g>
        <g clipPath="url(#elStage)">
          <rect x="0" y="0" width="1000" height="460" fill="url(#elGrad)">
            <animate attributeName="x" values="0;22;0" dur="8s" repeatCount="indefinite" />
          </rect>
        </g>

        {EligibilityOverlay()}
      </svg>
    );
  }

  // Main masked video version with overlay
  return (
    <svg viewBox="0 0 1000 460" className="w-full h-auto block" role="img" aria-label={title}>
      <defs>
        <linearGradient id="elBG" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor={color.indigo100} />
          <stop offset="55%" stopColor={color.slate200} />
          <stop offset="100%" stopColor={color.amber100} />
        </linearGradient>
        <filter id="elSoft2" x="-20%" y="-20%" width="140%" height="140%">
          <feGaussianBlur in="SourceGraphic" stdDeviation="8" result="b" />
          <feColorMatrix in="b" type="matrix" values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 .6 0" />
        </filter>
        <clipPath id="elStage2"> {/* Corrected clipPath ID */}
          <rect x="40" y="36" width="640" height="388" rx="26" />
        </clipPath>
      </defs>

      <g filter="url(#elSoft2)">
        <rect x="0" y="0" width="1000" height="460" rx="28" fill="url(#elBG)" />
      </g>

      {/* poster + masked video */}
      <g clipPath="url(#elStage2)"> {/* Corrected clipPath ID */}
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

      {EligibilityOverlay()}
    </svg>
  );
};

/* ----------------------- Overlay: eligibility scene ----------------------- */
function EligibilityOverlay() {
  return (
    <g transform="translate(680, 50)">
      {/* Ground shadow */}
      <ellipse cx="170" cy="390" rx="140" ry="15" fill={color.black} opacity="0.08" />

      {/* Officer Figure */}
      <g transform="translate(40, 140)">
        <rect x="0" y="100" width="80" height="150" rx="15" fill={color.indigo800} /> {/* Suit */}
        <circle cx="40" cy="65" r="35" fill="#A0522D" /> {/* Head */}
      </g>

      {/* Checklist / File */}
      <g transform="translate(150, 120)">
        <rect x="0" y="0" width="180" height="240" rx="10" fill={color.white} stroke={color.slate300} strokeWidth="3" />
        <text x="20" y="40" fontFamily="sans-serif" fontSize="18" fontWeight="bold" fill={color.slate700}>Criteria</text>
        <path d="M20 70 l10 10 20-20" stroke={color.emerald600} strokeWidth="5" fill="none" />
        <rect x="60" y="65" width="80" height="6" rx="3" fill={color.slate400} />
        <path d="M20 110 l10 10 20-20" stroke={color.emerald600} strokeWidth="5" fill="none" />
        <rect x="60" y="105" width="80" height="6" rx="3" fill={color.slate400} />
        <path d="M20 150 l10 10 20-20" stroke={color.emerald600} strokeWidth="5" fill="none" />
        <rect x="60" y="145" width="80" height="6" rx="3" fill={color.slate400} />
      </g>

      {/* Gavel */}
      <g transform="translate(10, 80)" opacity="0.8">
        <rect x="0" y="0" width="80" height="20" rx="5" fill={color.amber500} transform="rotate(30)" />
        <rect x="30" y="-30" width="15" height="40" rx="4" fill={color.amber500} transform="rotate(30)" />
        <animateTransform attributeName="transform" type="rotate" values="10 80 30; 10 80 35; 10 80 30" dur="2s" repeatCount="indefinite" />
      </g>

      {/* ISO Stamp */}
      <g transform="translate(260, 300)">
        <circle cx="0" cy="0" r="30" fill={color.white} stroke={color.indigo600} strokeWidth="3" />
        <text x="0" y="5" fontFamily="sans-serif" fontSize="10" fontWeight="bold" fill={color.indigo600} textAnchor="middle">ISO</text>
      </g>
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
// Using the SVGs defined in the previous EmploymentEligibilityCriteria file

// 1. Purpose and Vision
const Sec1_PurposeVisionSVG = (props) => ( // Renamed slightly
  <svg viewBox="0 0 800 380" role="img" aria-label="Purpose and Vision" {...props}>
    <BG id="gSec1" stops={[{ offset: "0%", color: color.indigo50 }, { offset: "100%", color: color.cyan50 }]} /> <SoftGlow id="glowSec1" std={10} alpha={0.4} /> <rect x="0" y="0" width="800" height="380" rx="20" fill="url(#gSec1)" />
    <g transform="translate(100, 80)"> <polygon points="0 250, 250 250, 250 80, 125 0, 0 80" fill={color.white} stroke={color.slate300} strokeWidth="3" /> <rect x="40" y="100" width="170" height="150" fill={color.indigo100} /> <rect x="60" y="120" width="130" height="130" fill={color.white} /> <text x="125" y="60" fontFamily="sans-serif" fontSize="24" fontWeight="bold" fill={color.indigo600} textAnchor="middle">CRCCF</text> </g>
    <g transform="translate(450, 120)"> <circle cx="0" cy="0" r="100" fill={color.white} stroke={color.slate300} strokeWidth="3" /> <circle cx="0" cy="0" r="80" fill={color.cyan100} opacity="0.6" /> <path d="M-60 0 C -40 40, 40 40, 60 0 C 40 -40, -40 -40, -60 0" fill="none" stroke={color.cyan500} strokeWidth="3" /> <path d="M-20 -78 C 0 -50, 0 50, -20 78 M 20 -78 C 0 -50, 0 50, 20 78" fill="none" stroke={color.cyan500} strokeWidth="3" /> </g>
    <g transform="translate(600, 150)" filter="url(#glowSec1)"> <path d="M50 0l70 30v40c0 50-28 85-70 105-42-20-70-55-70-105v-40l70-30z" fill={color.emerald100} stroke={color.emerald600} strokeWidth="4" /> <path d="M20 70l20 20 40-40" stroke={color.emerald600} strokeWidth="8" fill="none" strokeLinecap="round" /> </g>
  </svg>
);
// 2. Educational Qualification Eligibility
const Sec2_EducationSVG = (props) => (
  <svg viewBox="0 0 800 380" role="img" aria-label="Educational Qualification Eligibility" {...props}>
    <BG id="gSec2" stops={[{ offset: "0%", color: color.cyan25 }, { offset: "100%", color: color.indigo50 }]} /> <rect x="0" y="0" width="800" height="380" rx="20" fill="url(#gSec2)" />
    <g transform="translate(150, 150)"> <polygon points="0 0, 300 0, 150 80" fill={color.slate700} /> <rect x="0" y="0" width="300" height="30" fill={color.slate900} /> <rect x="80" y="30" width="140" height="50" fill={color.slate700} /> <line x1="280" y1="0" x2="280" y2="100" stroke={color.amber500} strokeWidth="8" /> <rect x="270" y="100" width="20" height="20" fill={color.amber500} /> <animateTransform attributeName="transform" type="translate" values="150 150; 150 145; 150 150" dur="1.5s" repeatCount="indefinite" /> </g>
    <g transform="translate(500, 80)"> <Card x="0" y="0" w="220" h="280" r="12" stroke={color.slate300} sw="2" /> <text x="30" y="50" fontFamily="sans-serif" fontSize="20" fontWeight="bold" fill={color.indigo600}>10 + 2</text> <text x="30" y="90" fontFamily="sans-serif" fontSize="20" fontWeight="bold" fill={color.indigo600}>Diploma</text> <rect x="30" y="120" width="160" height="6" rx="3" fill={color.slate400} /> <rect x="30" y="140" width="140" height="6" rx="3" fill={color.slate400} /> <circle cx="160" cy="220" r="40" fill={color.amber100} stroke={color.amber500} strokeWidth="3" /> <path d="M145 210 l10 10 20-20" stroke={color.amber500} strokeWidth="5" fill="none" /> </g>
  </svg>
);
// 3. Age Eligibility
const Sec3_AgeSVG = (props) => (
  <svg viewBox="0 0 800 380" role="img" aria-label="Age Eligibility Criteria" {...props}>
    <BG id="gSec3" stops={[{ offset: "0%", color: color.amber50 }, { offset: "100%", color: color.indigo50 }]} /> <rect x="0" y="0" width="800" height="380" rx="20" fill="url(#gSec3)" />
    <g transform="translate(100, 80)"> <Card x="0" y="0" w="300" h="220" r="15" stroke={color.slate300} sw="3" /> <rect x="0" y="0" width="300" height="50" rx="15" fill={color.indigo100} /> <text x="20" y="35" fontFamily="sans-serif" fontSize="20" fontWeight="bold" fill={color.indigo800}>Age Verification</text> <text x="30" y="100" fontFamily="sans-serif" fontSize="24" fill={color.slate700}>18 - 24 (Fresh)</text> <text x="30" y="140" fontFamily="sans-serif" fontSize="24" fill={color.slate700}>24 - 34 (Exp.)</text> <text x="30" y="180" fontFamily="sans-serif" fontSize="24" fill={color.slate700}>34+ (Honorary)</text> </g>
    <g transform="translate(500, 60)"> <polygon points="0 0, 200 0, 100 100" fill={color.cyan100} /> <polygon points="0 300, 200 300, 100 200" fill={color.cyan100} /> <polygon points="0 0, 200 0, 100 100" fill={color.cyan500}> <animate attributeName="points" values="0 0, 200 0, 100 100; 100 100, 100 100, 100 100" dur="4s" repeatCount="indefinite" /> </polygon> <polygon points="100 200, 100 200, 100 200" fill={color.cyan500}> <animate attributeName="points" values="100 200, 100 200, 100 200; 0 300, 200 300, 100 200" dur="4s" repeatCount="indefinite" /> </polygon> <line x1="100" y1="100" x2="100" y2="200" stroke={color.cyan500} strokeWidth="4" /> </g>
  </svg>
);
// 4. Gender Inclusivity
const Sec4_GenderSVG = (props) => (
  <svg viewBox="0 0 800 380" role="img" aria-label="Gender Inclusivity" {...props}>
    <BG id="gSec4" stops={[{ offset: "0%", color: color.emerald50 }, { offset: "100%", color: color.cyan50 }]} /> <rect x="0" y="0" width="800" height="380" rx="20" fill="url(#gSec4)" />
    <g transform="translate(180, 100)"> <circle cx="0" cy="0" r="80" fill="none" stroke={color.cyan500} strokeWidth="15" /> <line x1="60" y1="-60" x2="120" y2="-120" stroke={color.cyan500} strokeWidth="15" /> <polygon points="120 -120, 120 -90, 90 -120" fill={color.cyan500} /> <animateTransform attributeName="transform" type="scale" values="1;1.02;1" dur="2s" repeatCount="indefinite" transform-origin="180 100" /> </g>
    <g transform="translate(420, 100)"> <circle cx="0" cy="0" r="80" fill="none" stroke={color.rose400} strokeWidth="15" /> <line x1="0" y1="80" x2="0" y2="180" stroke={color.rose400} strokeWidth="15" /> <line x1="-40" y1="140" x2="40" y2="140" stroke={color.rose400} strokeWidth="15" /> <animateTransform attributeName="transform" type="scale" values="1;1.02;1" dur="2s" delay="0.5s" repeatCount="indefinite" transform-origin="420 100" /> </g>
    <g transform="translate(620, 150)"> <rect x="0" y="0" width="100" height="20" rx="5" fill={color.slate700} /> <rect x="0" y="40" width="100" height="20" rx="5" fill={color.slate700} /> </g>
  </svg>
);
// 5. Communication and Personality Requirements
const Sec5_CommunicationSVG = (props) => (
  <svg viewBox="0 0 800 380" role="img" aria-label="Communication & Personality Requirements" {...props}>
    <BG id="gSec5" stops={[{ offset: "0%", color: color.cyan50 }, { offset: "100%", color: color.indigo50 }]} /> <rect x="0" y="0" width="800" height="380" rx="20" fill="url(#gSec5)" />
    <g transform="translate(180, 100)"> <circle cx="0" cy="0" r="50" fill="#F5D0A6" /> <rect x="-40" y="50" width="80" height="130" rx="10" fill={color.indigo600} /> <g transform="translate(80, 0)"> <line x1="0" y1="-20" x2="50" y2="-20" stroke={color.cyan500} strokeWidth="6"> <animate attributeName="x2" values="50;70;50" dur="1.5s" repeatCount="indefinite" /> </line> <line x1="0" y1="0" x2="70" y2="0" stroke={color.cyan500} strokeWidth="6"> <animate attributeName="x2" values="70;90;70" dur="1.5s" delay="0.2s" repeatCount="indefinite" /> </line> <line x1="0" y1="20" x2="50" y2="20" stroke={color.cyan500} strokeWidth="6"> <animate attributeName="x2" values="50;70;50" dur="1.5s" delay="0.4s" repeatCount="indefinite" /> </line> </g> </g>
    <g transform="translate(450, 120)"> <circle cx="0" cy="0" r="30" fill={color.slate300} /> <rect x="-20" y="30" width="40" height="60" rx="8" fill={color.slate300} /> <circle cx="80" cy="0" r="30" fill={color.slate300} /> <rect x="60" y="30" width="40" height="60" rx="8" fill={color.slate300} /> <circle cx="160" cy="0" r="30" fill={color.slate300} /> <rect x="140" y="30" width="40" height="60" rx="8" fill={color.slate300} /> </g>
  </svg>
);
// 6. Character & Background Integrity
const Sec6_CharacterSVG = (props) => (
  <svg viewBox="0 0 800 380" role="img" aria-label="Character & Background Integrity" {...props}>
    <BG id="gSec6" stops={[{ offset: "0%", color: color.slate200 }, { offset: "100%", color: color.rose50 }]} /> <rect x="0" y="0" width="800" height="380" rx="20" fill="url(#gSec6)" />
    <g transform="translate(150, 80)"> <circle cx="0" cy="0" r="50" fill="#F5D0A6" /> <rect x="-40" y="50" width="80" height="130" rx="10" fill={color.indigo100} /> <g transform="translate(100, 50)"> <circle cx="0" cy="0" r="80" fill="none" stroke={color.slate700} strokeWidth="12" /> <line x1="60" y1="60" x2="120" y2="120" stroke={color.slate700} strokeWidth="15" /> </g> </g>
    <g transform="translate(450, 100)"> <circle cx="0" cy="0" r="60" fill={color.white} stroke={color.rose600} strokeWidth="5" /> <line x1="-40" y1="-40" x2="40" y2="40" stroke={color.rose600} strokeWidth="8" /> <line x1="-40" y1="40" x2="40" y2="-40" stroke={color.rose600} strokeWidth="8" /> <text x="0" y="10" fontFamily="sans-serif" fontSize="18" fontWeight="bold" fill={color.rose600} textAnchor="middle">Politics</text> </g>
    <g transform="translate(620, 180)"> <circle cx="0" cy="0" r="60" fill={color.white} stroke={color.rose600} strokeWidth="5" /> <line x1="-40" y1="-40" x2="40" y2="40" stroke={color.rose600} strokeWidth="8" /> <line x1="-40" y1="40" x2="40" y2="-40" stroke={color.rose600} strokeWidth="8" /> <text x="0" y="10" fontFamily="sans-serif" fontSize="18" fontWeight="bold" fill={color.rose600} textAnchor="middle">Crime</text> </g>
  </svg>
);
// 7. Behavioural & Ethical Expectations
const Sec7_BehavioralSVG = (props) => (
  <svg viewBox="0 0 800 380" role="img" aria-label="Behavioral & Ethical Expectations" {...props}>
    <BG id="gSec7" stops={[{ offset: "0%", color: color.indigo25 }, { offset: "100%", color: color.emerald50 }]} /> <rect x="0" y="0" width="800" height="380" rx="20" fill="url(#gSec7)" />
    <g transform="translate(150, 100)"> <path d="M0 0 H 300" stroke={color.slate700} strokeWidth="6" /> <path d="M150 0 V 50" stroke={color.slate700} strokeWidth="6" /> <g transform="translate(50, 50)"> <path d="M0 0 L -40 100 L 40 100 Z" fill={color.amber100} stroke={color.amber500} strokeWidth="3" /> <path d="M0 0 V -30" stroke={color.slate700} strokeWidth="4" /> <text x="0" y="70" fontFamily="sans-serif" fontSize="18" fill={color.slate700} textAnchor="middle">Honesty</text> </g> <g transform="translate(250, 50)"> <path d="M0 0 L -40 100 L 40 100 Z" fill={color.amber100} stroke={color.amber500} strokeWidth="3" /> <path d="M0 0 V -30" stroke={color.slate700} strokeWidth="4" /> <text x="0" y="70" fontFamily="sans-serif" fontSize="18" fill={color.slate700} textAnchor="middle">Lawful</text> </g> <animateTransform attributeName="transform" type="rotate" values="150 100 -2; 150 100 2; 150 100 -2" dur="2.5s" repeatCount="indefinite" transform-origin="150 0" /> </g>
    <g transform="translate(500, 80)"> <Card x="0" y="0" w="220" h="220" r="12" /> <text x="20" y="50" fontFamily="sans-serif" fontSize="20" fontWeight="bold" fill={color.indigo600}>Code of</text> <text x="20" y="80" fontFamily="sans-serif" fontSize="20" fontWeight="bold" fill={color.indigo600}>Conduct</text> <rect x="20" y="110" width="180" height="6" rx="3" fill={color.slate400} /> <rect x="20" y="130" width="160" height="6" rx="3" fill={color.slate400} /> </g>
  </svg>
);
// 8. Health and Availability Requirement
const Sec8_HealthSVG = (props) => (
  <svg viewBox="0 0 800 380" role="img" aria-label="Health and Availability Requirement" {...props}>
    <BG id="gSec8" stops={[{ offset: "0%", color: color.emerald50 }, { offset: "100%", color: color.cyan50 }]} /> <rect x="0" y="0" width="800" height="380" rx="20" fill="url(#gSec8)" />
    <g transform="translate(120, 100)"> <path d="M0 100 C 0 70, 40 70, 40 100 C 40 130, 0 160, 0 160 C 0 160, -40 130, -40 100 C -40 70, 0 70, 0 100 Z" fill={color.rose100} stroke={color.rose400} strokeWidth="5" /> <path d="M-80 130 H 0 L 20 100 L 40 130 H 80" stroke={color.rose400} strokeWidth="6" fill="none"> <animate attributeName="stroke-width" values="6;8;6" dur="1s" repeatCount="indefinite" /> </path> </g>
    <g transform="translate(450, 80)"> <Card x="0" y="0" w="280" h="220" r="12" /> <rect x="0" y="0" width="280" height="50" rx="12" fill={color.slate700} /> <text x="20" y="35" fontFamily="sans-serif" fontSize="20" fontWeight="bold" fill={color.white}>Available for Training</text> <rect x="30" y="80" width="40" height="40" rx="5" fill={color.emerald100} /> <rect x="80" y="80" width="40" height="40" rx="5" fill={color.slate200} /> <rect x="130" y="80" width="40" height="40" rx="5" fill={color.slate200} /> <rect x="180" y="80" width="40" height="40" rx="5" fill={color.emerald100} /> </g>
  </svg>
);
// 9. Compliance & Documentation
const Sec9_ComplianceSVG = (props) => (
  <svg viewBox="0 0 800 380" role="img" aria-label="Compliance & Documentation" {...props}>
    <BG id="gSec9" stops={[{ offset: "0%", color: color.amber50 }, { offset: "100%", color: color.slate200 }]} /> <rect x="0" y="0" width="800" height="380" rx="20" fill="url(#gSec9)" />
    <g transform="translate(100, 150)"> <rect x="0" y="0" width="220" height="40" rx="10" fill={color.amber500} stroke={color.slate700} strokeWidth="2" transform="rotate(-20)" /> <rect x="80" y="-80" width="30" height="100" rx="8" fill={color.amber500} stroke={color.slate700} strokeWidth="2" transform="rotate(-20)" /> <rect x="20" y="100" width="160" height="30" rx="15" fill={color.slate700} opacity="0.1" /> </g>
    <g transform="translate(400, 80)"> <Card x="0" y="0" w="280" h="220" r="12" stroke={color.slate400} sw="2" transform="rotate(5)" /> <Card x="20" y="20" w="280" h="220" r="12" stroke={color.slate400} sw="2" fill={color.indigo100} /> <text x="40" y="70" fontFamily="sans-serif" fontSize="20" fontWeight="bold" fill={color.indigo800}>Verification</text> <path d="M40 100 l30 30 60-60" stroke={color.emerald600} strokeWidth="8" fill="none" /> </g>
  </svg>
);
// 10. Internship, Training & Certification
const Sec10_InternshipSVG = (props) => (
  <svg viewBox="0 0 800 380" role="img" aria-label="Internship, Training & Certification" {...props}>
    <BG id="gSec10" stops={[{ offset: "0%", color: color.cyan50 }, { offset: "100%", color: color.emerald50 }]} /> <rect x="0" y="0" width="800" height="380" rx="20" fill="url(#gSec10)" />
    <g transform="translate(100, 60)"> <Card x="0" y="0" w="600" h="280" r="15" stroke={color.amber500} sw="4" /> <text x="300" y="80" fontFamily="sans-serif" fontSize="30" fontWeight="bold" fill={color.slate700} textAnchor="middle">Certificate of Completion</text> <text x="300" y="120" fontFamily="sans-serif" fontSize="20" fill={color.slate700} textAnchor="middle">This certifies that</text> <rect x="200" y="140" width="200" height="10" rx="5" fill={color.indigo600} /> <text x="300" y="180" fontFamily="sans-serif" fontSize="20" fill={color.slate700} textAnchor="middle">has completed the</text> <text x="300" y="210" fontFamily="sans-serif" fontSize="20" fontWeight="bold" fill={color.slate700} textAnchor="middle">Cyber Awareness Internship</text> <g transform="translate(100, 200)"> <circle cx="0" cy="0" r="40" fill={color.indigo100} stroke={color.indigo600} strokeWidth="3" /> <text x="0" y="5" fontFamily="sans-serif" fontSize="12" fontWeight="bold" fill={color.indigo600} textAnchor="middle">CRCCF</text> </g> </g>
  </svg>
);
// 11. Organizational Rights & Final Decision
const Sec11_RightsSVG = (props) => (
  <svg viewBox="0 0 800 380" role="img" aria-label="Organizational Rights & Final Decision" {...props}>
    <BG id="gSec11" stops={[{ offset: "0%", color: color.indigo50 }, { offset: "100%", color: color.slate200 }]} /> <rect x="0" y="0" width="800" height="380" rx="20" fill="url(#gSec11)" />
    <g transform="translate(150, 80)"> <polygon points="0 250, 250 250, 250 80, 125 0, 0 80" fill={color.white} stroke={color.slate300} strokeWidth="3" /> <rect x="40" y="100" width="170" height="150" fill={color.indigo100} /> <rect x="120" y="-60" width="10" height="160" fill={color.slate700} /> <polygon points="130 -60, 200 -60, 180 -30, 200 0, 130 0" fill={color.indigo600}> <animate attributeName="points" values="130 -60, 200 -60, 180 -30, 200 0, 130 0; 130 -60, 210 -55, 190 -30, 210 -5, 130 0; 130 -60, 200 -60, 180 -30, 200 0, 130 0" dur="2s" repeatCount="indefinite" /> </polygon> </g>
    <g transform="translate(480, 100)"> <circle cx="0" cy="0" r="100" fill={color.rose100} stroke={color.rose600} strokeWidth="6" /> <text x="0" y="0" fontFamily="sans-serif" fontSize="30" fontWeight="bold" fill={color.rose600} textAnchor="middle">DECISION</text> <text x="0" y="40" fontFamily="sans-serif" fontSize="30" fontWeight="bold" fill={color.rose600} textAnchor="middle">FINAL</text> <animateTransform attributeName="transform" type="scale" values="1;1.02;1" dur="1.5s" repeatCount="indefinite" transform-origin="480 100" /> </g>
  </svg>
);
// 12. Digital Literacy & Awareness Orientation
const Sec12_OrientationSVG = (props) => (
  <svg viewBox="0 0 800 380" role="img" aria-label="Digital Literacy & Awareness Orientation" {...props}>
    <BG id="gSec12" stops={[{ offset: "0%", color: color.cyan50 }, { offset: "100%", color: color.indigo50 }]} /> <rect x="0" y="0" width="800" height="380" rx="20" fill="url(#gSec12)" />
    <g transform="translate(300, 60)"> <rect x="0" y="0" width="400" height="250" rx="10" fill={color.white} stroke={color.slate300} strokeWidth="3" /> <rect x="195" y="250" width="10" height="40" fill={color.slate300} /> <text x="30" y="50" fontFamily="sans-serif" fontSize="24" fontWeight="bold" fill={color.indigo600}>Orientation</text> <text x="30" y="100" fontFamily="sans-serif" fontSize="20" fill={color.slate700}>- Cyber Awareness</text> <text x="30" y="140" fontFamily="sans-serif" fontSize="20" fill={color.slate700}>- Legal Obligations</text> <text x="30" y="180" fontFamily="sans-serif" fontSize="20" fill={color.slate700}>- Responsible Conduct</text> </g>
    <g transform="translate(150, 120)"> <path d="M50 0 C 0 0, 0 60, 50 60 C 100 60, 100 0, 50 0 Z" fill={color.amber100} /> <rect x="40" y="60" width="20" height="20" fill={color.amber100} /> <path d="M-20 0 H 120 M 0 -20 V 120 M 50 -50 L 50 150 M 100 -20 V 120" stroke={color.amber500} strokeWidth="4" opacity="0.5"> <animate attributeName="opacity" values="0.5;0.2;0.5" dur="1.5s" repeatCount="indefinite" /> </path> </g>
  </svg>
);
// 13. Commitment to Public Service & Cyber Ethics
const Sec13_PublicServiceSVG = (props) => (
  <svg viewBox="0 0 800 380" role="img" aria-label="Commitment to Public Service & Cyber Ethics" {...props}>
    <BG id="gSec13" stops={[{ offset: "0%", color: color.emerald50 }, { offset: "100%", color: color.indigo50 }]} /> <rect x="0" y="0" width="800" height="380" rx="20" fill="url(#gSec13)" />
    <g transform="translate(100, 40)"> <path d="M100 0 L 120 20 L 100 50 L 150 80 L 130 120 L 180 150 L 150 200 L 200 250 L 150 300 L 50 280 L 0 200 L 30 150 L 0 100 L 50 50 Z" fill={color.white} stroke={color.slate300} strokeWidth="3" /> <path d="M100 50 L 150 100 L 160 200 L 50 250 L 30 150 Z" stroke={color.cyan300} strokeWidth="2" fill="none" opacity="0.7" /> </g>
    <g transform="translate(450, 100)"> <circle cx="0" cy="0" r="80" fill={color.cyan100} /> <path d="M-60 0 C -40 30, 40 30, 60 0 C 40 -30, -40 -30, -60 0" fill="none" stroke={color.cyan500} strokeWidth="3" /> <path d="M-20 -58 C 0 -40, 0 40, -20 58 M 20 -58 C 0 -40, 0 40, 20 58" fill="none" stroke={color.cyan500} strokeWidth="3" /> <path d="M-80 120 C -40 80, 0 60, 0 60 C 0 60, 40 80, 80 120 L 60 140 L -60 140 Z" fill={color.amber100} /> <animateTransform attributeName="transform" type="translate" values="450 100; 450 105; 450 100" dur="2s" repeatCount="indefinite" /> </g>
  </svg>
);
// 14. Periodic Evaluation & Review
const Sec14_EvaluationSVG = (props) => (
  <svg viewBox="0 0 800 380" role="img" aria-label="Periodic Evaluation Note" {...props}>
    <BG id="gSec14" stops={[{ offset: "0%", color: color.cyan50 }, { offset: "100%", color: color.indigo50 }]} /> <rect x="0" y="0" width="800" height="380" rx="20" fill="url(#gSec14)" />
    <g transform="translate(100, 60)"> <Card x="0" y="0" w="400" h="280" r="12" stroke={color.slate300} sw="2" /> <text x="30" y="50" fontFamily="sans-serif" fontSize="24" fontWeight="bold" fill={color.indigo800}>Performance Review</text> <path d="M50 220 L 100 150 L 150 170 L 200 120 L 250 140 L 300 100 L 350 120" stroke={color.emerald600} strokeWidth="5" fill="none" /> <line x1="50" y1="220" x2="350" y2="220" stroke={color.slate300} strokeWidth="2" /> <path d="M50 220 L 100 150 L 150 170" stroke={color.white} strokeWidth="12" fill="none" strokeLinecap="round" opacity="0.5" strokeDasharray="300" strokeDashoffset="300"> <animate attributeName="stroke-dashoffset" values="300;0" dur="2s" repeatCount="indefinite" /> </path> </g>
    <g transform="translate(550, 120)"> <circle cx="0" cy="0" r="80" fill="white" stroke={color.slate300} strokeWidth="4" /> <line x1="0" y1="0" x2="0" y2="-50" stroke={color.slate700} strokeWidth="6" /> <line x1="0" y1="0" x2="40" y2="0" stroke={color.slate700} strokeWidth="6"> <animateTransform attributeName="transform" type="rotate" values="0 0 0; 360 0 0" dur="5s" repeatCount="indefinite" transform-origin="0 0" /> </line> <text x="0" y="110" fontFamily="sans-serif" fontSize="20" fontWeight="bold" fill={color.slate700} textAnchor="middle">Periodic</text> </g>
  </svg>
);
// 15. Disclaimer
const Sec15_DisclaimerSVG = (props) => (
  <svg viewBox="0 0 800 380" role="img" aria-label="Disclaimer" {...props}>
    <BG id="gSec15" stops={[{ offset: "0%", color: color.slate200 }, { offset: "100%", color: color.amber50 }]} /> <rect x="0" y="0" width="800" height="380" rx="20" fill="url(#gSec15)" />
    <g transform="translate(100, 150)"> <rect x="0" y="0" width="220" height="40" rx="10" fill={color.amber500} stroke={color.slate700} strokeWidth="2" transform="rotate(-20)" /> <rect x="80" y="-80" width="30" height="100" rx="8" fill={color.amber500} stroke={color.slate700} strokeWidth="2" transform="rotate(-20)" /> <rect x="20" y="100" width="160" height="30" rx="15" fill={color.slate700} opacity="0.1" /> </g>
    <g transform="translate(380, 80)"> <Card x="0" y="0" w="320" h="220" r="12" stroke={color.slate400} sw="2" /> <text x="20" y="50" fontFamily="sans-serif" fontSize="24" fontWeight="bold" fill={color.slate700}>Legal Disclaimer</text> <rect x="20" y="80" width="280" height="6" rx="3" fill={color.slate400} /> <rect x="20" y="100" width="280" height="6" rx="3" fill={color.slate400} /> <circle cx="260" cy="170" r="40" fill={color.indigo600} /> <text x="260" y="175" fontFamily="sans-serif" fontSize="14" fontWeight="bold" fill={color.white} textAnchor="middle">Section 8</text> <text x="260" y="190" fontFamily="sans-serif" fontSize="12" fill={color.white} textAnchor="middle">MCA</text> </g>
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
export default function EmploymentEligibilityCriteria() {
  const { container, itemUp } = useAnims();
  const heroRef = useRef(null);
  const { scrollYProgress } = useScroll({ target: heroRef, offset: ["start start", "end start"] });
  const heroY = useTransform(scrollYProgress, [0, 1], [0, -40]);

  // Map section IDs to SVG components (15 defined)
  const svgMap = {
    'sec1-purpose-and-vision': Sec1_PurposeVisionSVG,
    'sec2-educational-qualification-eligibility': Sec2_EducationSVG,
    'sec3-age-eligibility': Sec3_AgeSVG,
    'sec4-gender-inclusivity': Sec4_GenderSVG,
    'sec5-communication-and-personality-requirements': Sec5_CommunicationSVG,
    'sec6-character-and-background-integrity': Sec6_CharacterSVG,
    'sec7-behavioural-and-ethical-expectations': Sec7_BehavioralSVG,
    'sec8-health-and-availability-requirement': Sec8_HealthSVG,
    'sec9-compliance-and-documentation': Sec9_ComplianceSVG,
    'sec10-internship-training-and-certification': Sec10_InternshipSVG,
    'sec11-organisational-rights-and-final-decision': Sec11_RightsSVG,
    'sec12-digital-literacy-and-awareness-orientation': Sec12_OrientationSVG,
    'sec13-commitment-to-public-service-and-cyber-ethics': Sec13_PublicServiceSVG,
    'sec14-periodic-evaluation-and-review': Sec14_EvaluationSVG,
    'sec15-disclaimer': Sec15_DisclaimerSVG,
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
        <Link to="/recruitment-process/recruitment-rules-policies" className="hover:underline">recruitment</Link>
        <span aria-hidden="true"> › </span>
        <span className="text-gray-700" aria-current="page">Eligibility Criteria</span> {/* Updated text */}
      </motion.nav>

      {/* Hero with Video-SVG (eligibility scene) */}
      <div ref={heroRef} className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-6 md:gap-8 lg:gap-10 items-center">
        <motion.div variants={itemUp}>
          <h1 className="text-[22px] sm:text-3xl font-bold text-gray-900">{data.title}</h1>
          <div className="mt-3 sm:mt-4 flex flex-wrap gap-2">
            {["Eligibility", "Compliance", "Ethics", "Careers"].map((pill) => (
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
              <VideoHeroEligibility
                src="/assets/video/eligibility-hero.mp4"
                poster="/assets/video/eligibility-hero.jpg"
              />
            </div>
          </div>
        </motion.div>
      </div>

      {/* Sections */}
      <div className="mt-8 sm:mt-10 md:mt-12">
        {/* Iterate over the imported data */}
        {employmentEligibilityCriteriaData.map((sec, idx) => {
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

      {/* The disclaimer is now section 15 from the data, rendered by the map */}

    </motion.section>
  );
}