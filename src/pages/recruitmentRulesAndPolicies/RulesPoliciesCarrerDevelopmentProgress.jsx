// src/pages/careers/RulesPoliciesCarrerDevelopmentProgress.jsx
import React, { useRef } from "react";
import { Link } from "react-router-dom";
import { motion, useReducedMotion, useScroll, useTransform, useSpring } from "framer-motion";
// Corrected import path structure
import { rulesPoliciesCarrerDevelopmentProgressData } from '../../data/recruitment_rules_policies/rulesPoliciesCarrerDevelopmentProgressData';

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
  title: "Rules, Policies & Career Development Progress", // Updated Title
  // Tagline will be pulled per section from the imported data
};

/* -------------------------- HERO: Video SVG (inline) -------------------------- */
/* Scene: Person climbing a stylized growth graph, with icons for skills, mentorship, and certification. */
const VideoHeroCareerDev = ({ src = "", poster = "" }) => {
  const prefersReduced =
    typeof window !== "undefined" &&
    window.matchMedia &&
    window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  const title = "CRCCF Career Development and Progression Hero";
  const desc =
    "A person climbs a growth graph, symbolizing career progression. The background is a masked video or a soft gradient.";

  // Fallback: animated gradient stage + overlay
  if (prefersReduced || !src) {
    return (
      <svg viewBox="0 0 1000 460" role="img" aria-labelledby="cdTitle cdDesc" className="w-full h-auto">
        <title id="cdTitle">{title}</title>
        <desc id="cdDesc">{desc}</desc>
        <defs>
          <linearGradient id="cdGrad" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor={color.emerald100}>
              <animate attributeName="offset" values="0;0.15;0" dur="8s" repeatCount="indefinite" />
            </stop>
            <stop offset="55%" stopColor={color.cyan100}>
              <animate attributeName="offset" values="0.55;0.85;0.55" dur="8s" repeatCount="indefinite" />
            </stop>
            <stop offset="100%" stopColor={color.indigo100} />
          </linearGradient>
          <filter id="cdSoft" x="-20%" y="-20%" width="140%" height="140%">
            <feGaussianBlur in="SourceGraphic" stdDeviation="8" result="b" />
            <feColorMatrix in="b" type="matrix" values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 .6 0" />
          </filter>
          <clipPath id="cdStage">
            <rect x="40" y="36" width="640" height="388" rx="26" />
          </clipPath>
        </defs>

        <g filter="url(#cdSoft)">
          <rect x="0" y="0" width="1000" height="460" rx="28" fill="url(#cdGrad)" />
        </g>
        <g clipPath="url(#cdStage)">
          <rect x="0" y="0" width="1000" height="460" fill="url(#cdGrad)">
            <animate attributeName="x" values="0;22;0" dur="8s" repeatCount="indefinite" />
          </rect>
        </g>

        {CareerDevOverlay()}
      </svg>
    );
  }

  // Main masked video version with overlay
  return (
    <svg viewBox="0 0 1000 460" className="w-full h-auto block" role="img" aria-label={title}>
      <defs>
        <linearGradient id="cdBG" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor={color.emerald100} />
          <stop offset="55%" stopColor={color.cyan100} />
          <stop offset="100%" stopColor={color.indigo100} />
        </linearGradient>
        <filter id="cdSoft2" x="-20%" y="-20%" width="140%" height="140%">
          <feGaussianBlur in="SourceGraphic" stdDeviation="8" result="b" />
          <feColorMatrix in="b" type="matrix" values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 .6 0" />
        </filter>
        <clipPath id="cdStage2">
          <rect x="40" y="36" width="640" height="388" rx="26" />
        </clipPath>
      </defs>

      <g filter="url(#cdSoft2)">
        <rect x="0" y="0" width="1000" height="460" rx="28" fill="url(#cdBG)" />
      </g>

      {/* poster + masked video */}
      <g clipPath="url(#cdStage2)">
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

      {CareerDevOverlay()}
    </svg>
  );
};

/* ----------------------- Overlay: career dev scene ----------------------- */
function CareerDevOverlay() {
  return (
    <g transform="translate(680, 50)">
      {/* Ground shadow */}
      <ellipse cx="170" cy="390" rx="140" ry="15" fill={color.black} opacity="0.08" />

      {/* Figure */}
      <g transform="translate(40, 190)">
        <rect x="0" y="80" width="70" height="120" rx="15" fill={color.indigo600} />
        <circle cx="35" cy="50" r="30" fill="#F5D0A6" />
      </g>

      {/* Growth Graph */}
      <g transform="translate(100, 100)">
        <path d="M0 280 L 50 220 L 100 240 L 150 180 L 200 150 L 250 80" stroke={color.emerald600} strokeWidth="8" fill="none" strokeLinecap="round" />
        <path d="M0 280 L 50 220 L 100 240 L 150 180 L 200 150 L 250 80" stroke={color.white} strokeWidth="16" fill="none" strokeLinecap="round" opacity="0.5" strokeDasharray="300" strokeDashoffset="300">
          <animate attributeName="stroke-dashoffset" values="300;0" dur="2s" repeatCount="indefinite" />
        </path>
        <line x1="0" y1="280" x2="250" y2="280" stroke={color.slate400} strokeWidth="4" />
      </g>

      {/* Skill Icons */}
      <g transform="translate(120, 230)"> <circle cx="0" cy="0" r="20" fill={color.white} stroke={color.slate300} /> <path d="M-10 -5 l10 10 10 -15" stroke={color.cyan500} strokeWidth="4" fill="none" /> </g>
      <g transform="translate(220, 140)"> <circle cx="0" cy="0" r="20" fill={color.white} stroke={color.slate300} /> <rect x="-10" y="-10" width="20" height="20" rx="4" fill={color.amber500} /> </g>
      <g transform="translate(270, 70)"> <circle cx="0" cy="0" r="20" fill={color.white} stroke={color.slate300} /> <polygon points="0 -10, 10 0, 0 10, -10 0" fill={color.emerald600} /> </g>
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
// (Using the SVGs defined in the previous version for RulesPoliciesCarrerDevelopmentProgress)

// 1. About CRCCF and Our Vision
const Sec1_AboutVisionSVG = (props) => ( // Renamed slightly
  <svg viewBox="0 0 800 380" role="img" aria-label="About CRCCF and Vision" {...props}>
    <BG id="gSec1" stops={[{ offset: "0%", color: color.indigo50 }, { offset: "100%", color: color.cyan50 }]} /> <SoftGlow id="glowSec1" std={10} alpha={0.4} /> <rect x="0" y="0" width="800" height="380" rx="20" fill="url(#gSec1)" />
    <g transform="translate(100, 80)"> <polygon points="0 250, 250 250, 250 80, 125 0, 0 80" fill={color.white} stroke={color.slate300} strokeWidth="3" /> <rect x="40" y="100" width="170" height="150" fill={color.indigo100} /> <text x="125" y="60" fontFamily="sans-serif" fontSize="24" fontWeight="bold" fill={color.indigo600} textAnchor="middle">CRCCF</text> </g>
    <g transform="translate(400, 120)"> <path d="M0 200 C 100 150, 150 50, 250 50 S 350 150, 350 200" stroke={color.slate300} strokeWidth="10" fill="none" /> <path d="M0 200 C 100 150, 150 50, 250 50" stroke={color.cyan500} strokeWidth="10" fill="none" strokeDasharray="300" strokeDashoffset="300"> <animate attributeName="stroke-dashoffset" values="300;0" dur="2s" repeatCount="indefinite" /> </path> <text x="0" y="230" fontFamily="sans-serif" fontSize="18" fill={color.slate700}>Knowledge</text> <text x="250" y="30" fontFamily="sans-serif" fontSize="18" fill={color.slate700}>National Service</text> </g>
  </svg>
);
// 2. Equal Opportunity and Legal Compliance
const Sec2_EqualOpportunitySVG = (props) => (
  <svg viewBox="0 0 800 380" role="img" aria-label="Equal Opportunity & Legal Compliance" {...props}>
    <BG id="gSec2" stops={[{ offset: "0%", color: color.amber50 }, { offset: "100%", color: color.slate200 }]} /> <rect x="0" y="0" width="800" height="380" rx="20" fill="url(#gSec2)" />
    <g transform="translate(150, 100)"> <path d="M0 0 H 300" stroke={color.slate700} strokeWidth="6" /> <path d="M150 0 V 50" stroke={color.slate700} strokeWidth="6" /> <g transform="translate(50, 50)"> <path d="M0 0 L -40 100 L 40 100 Z" fill={color.amber100} stroke={color.amber500} strokeWidth="3" /> <path d="M0 0 V -30" stroke={color.slate700} strokeWidth="4" /> </g> <g transform="translate(250, 50)"> <path d="M0 0 L -40 100 L 40 100 Z" fill={color.amber100} stroke={color.amber500} strokeWidth="3" /> <path d="M0 0 V -30" stroke={color.slate700} strokeWidth="4" /> </g> <animateTransform attributeName="transform" type="rotate" values="150 100 -2; 150 100 2; 150 100 -2" dur="2.5s" repeatCount="indefinite" transform-origin="150 0" /> </g>
    <g transform="translate(500, 80)"> <Card x="0" y="0" w="220" h="220" r="12" /> <text x="20" y="50" fontFamily="sans-serif" fontSize="20" fontWeight="bold" fill={color.indigo600}>Labour Laws</text> <text x="20" y="80" fontFamily="sans-serif" fontSize="20" fontWeight="bold" fill={color.indigo600}>Data Laws</text> <rect x="20" y="110" width="180" height="6" rx="3" fill={color.slate400} /> <path d="M130 140 l20 20 40-40" stroke={color.emerald600} strokeWidth="8" fill="none" /> </g>
  </svg>
);
// 3. Why Join CRCCF?
const Sec3_WhyJoinSVG = (props) => (
  <svg viewBox="0 0 800 380" role="img" aria-label="Why Join CRCCF?" {...props}>
    <BG id="gSec3" stops={[{ offset: "0%", color: color.emerald50 }, { offset: "100%", color: color.cyan50 }]} /> <rect x="0" y="0" width="800" height="380" rx="20" fill="url(#gSec3)" />
    <g transform="translate(350, 100)"> <circle cx="0" cy="0" r="50" fill="#F5D0A6" /> <rect x="-40" y="50" width="80" height="130" rx="10" fill={color.indigo600} /> </g>
    <g transform="translate(150, 80)"> <circle cx="0" cy="0" r="40" fill={color.white} stroke={color.slate300} /> <path d="M-15 0 L 0 -10 L 15 0 L 0 10 Z" fill={color.indigo300} /> <text x="0" y="55" fontFamily="sans-serif" fontSize="14" fill={color.slate700} textAnchor="middle">Mission</text> </g>
    <g transform="translate(550, 80)"> <circle cx="0" cy="0" r="40" fill={color.white} stroke={color.slate300} /> <path d="M-15 -5 L -5 5 L -15 15 M 5 -15 L 15 -5 L 5 5" stroke={color.cyan500} strokeWidth="5" fill="none" /> <text x="0" y="55" fontFamily="sans-serif" fontSize="14" fill={color.slate700} textAnchor="middle">Collaborate</text> </g>
    <g transform="translate(150, 250)"> <circle cx="0" cy="0" r="40" fill={color.white} stroke={color.slate300} /> <rect x="-10" y="-10" width="20" height="20" rx="4" fill={color.amber500} /> <text x="0" y="55" fontFamily="sans-serif" fontSize="14" fill={color.slate700} textAnchor="middle">Skills</text> </g>
    <g transform="translate(550, 250)"> <circle cx="0" cy="0" r="40" fill={color.white} stroke={color.slate300} /> <rect x="-15" y="-10" width="30" height="20" rx="3" fill={color.emerald600} /> <text x="0" y="55" fontFamily="sans-serif" fontSize="14" fill={color.slate700} textAnchor="middle">Credentials</text> </g>
  </svg>
);
// 4. Opportunities for Employees
const Sec4_EmployeesSVG = (props) => (
  <svg viewBox="0 0 800 380" role="img" aria-label="Opportunities for Employees" {...props}>
    <BG id="gSec4" stops={[{ offset: "0%", color: color.indigo50 }, { offset: "100%", color: color.cyan50 }]} /> <rect x="0" y="0" width="800" height="380" rx="20" fill="url(#gSec4)" />
    <g transform="translate(100, 120)"> <rect x="0" y="0" width="600" height="180" rx="20" fill={color.slate300} /> <rect x="0" y="0" width="600" height="20" rx="10" fill={color.slate700} /> <rect x="50" y="-120" width="200" height="120" rx="10" fill={color.slate900} /> <rect x="60" y="-110" width="180" height="100" rx="5" fill={color.white} /> <rect x="40" y="0" width="220" height="10" rx="5" fill={color.slate400} /> <Card x="300" y="-80" w="150" h="80" r="8" /> <rect x="310" y="-70" width="130" height="6" rx="3" fill={color.slate400} /> <rect x="310" y="-55" width="100" height="6" rx="3" fill={color.slate400} /> </g>
    <g transform="translate(500, 40)"> <text x="0" y="0" fontFamily="sans-serif" fontSize="18" fill={color.slate700}>Domains:</text> <text x="0" y="30" fontFamily="sans-serif" fontSize="18" fill={color.slate700}>IT, Legal, Admin, Security</text> </g>
  </svg>
);
// 5. Opportunities for Interns & Volunteers
const Sec5_InternsSVG = (props) => (
  <svg viewBox="0 0 800 380" role="img" aria-label="Opportunities for Interns & Volunteers" {...props}>
    <BG id="gSec5" stops={[{ offset: "0%", color: color.cyan25 }, { offset: "100%", color: color.indigo50 }]} /> <rect x="0" y="0" width="800" height="380" rx="20" fill="url(#gSec5)" />
    <g transform="translate(120, 100)"> <circle cx="0" cy="0" r="40" fill="#A0522D" /> <rect x="-30" y="40" width="60" height="120" rx="10" fill={color.indigo800} /> <circle cx="120" cy="50" r="30" fill="#F5D0A6" /> <rect x="100" y="80" width="40" height="80" rx="10" fill={color.cyan500} /> </g>
    <g transform="translate(350, 100)"> <path d="M0 200 L 100 100 L 200 120 L 300 50" stroke={color.emerald600} strokeWidth="8" fill="none" /> <path d="M300 50 L 280 70 M 300 50 L 280 50" stroke={color.emerald600} strokeWidth="8" /> <text x="0" y="230" fontFamily="sans-serif" fontSize="16" fill={color.slate700}>Intern</text> <text x="100" y="80" fontFamily="sans-serif" fontSize="16" fill={color.slate700}>Project Lead</text> <text x="300" y="30" fontFamily="sans-serif" fontSize="16" fill={color.slate700}>Employee</text> <path d="M0 200 L 100 100" stroke={color.white} strokeWidth="12" fill="none" strokeLinecap="round" opacity="0.5" strokeDasharray="300" strokeDashoffset="300"> <animate attributeName="stroke-dashoffset" values="300;0" dur="2s" repeatCount="indefinite" /> </path> </g>
  </svg>
);
// 6. Training & Mentorship
const Sec6_TrainingSVG = (props) => (
  <svg viewBox="0 0 800 380" role="img" aria-label="Training & Mentorship" {...props}>
    <BG id="gSec6" stops={[{ offset: "0%", color: color.emerald50 }, { offset: "100%", color: color.cyan50 }]} /> <rect x="0" y="0" width="800" height="380" rx="20" fill="url(#gSec6)" />
    <g transform="translate(300, 60)"> <rect x="0" y="0" width="400" height="250" rx="10" fill={color.white} stroke={color.slate300} strokeWidth="3" /> <rect x="195" y="250" width="10" height="40" fill={color.slate300} /> <text x="30" y="50" fontFamily="sans-serif" fontSize="24" fontWeight="bold" fill={color.indigo600}>Workshop</text> <path d="M50 180 L 100 120 L 150 140 L 200 100 L 250 120" stroke={color.emerald600} strokeWidth="5" fill="none" /> <line x1="50" y1="180" x2="250" y2="180" stroke={color.slate300} strokeWidth="2" /> </g>
    <g transform="translate(150, 100)"> <circle cx="0" cy="0" r="40" fill="#A0522D" /> <rect x="-30" y="40" width="60" height="120" rx="10" fill={color.indigo800} /> <line x1="40" y1="10" x2="200" y2="-20" stroke={color.slate500} strokeWidth="4" /> </g>
  </svg>
);
// 7. Work Culture & Values
const Sec7_CultureSVG = (props) => (
  <svg viewBox="0 0 800 380" role="img" aria-label="Work Culture & Values" {...props}>
    <BG id="gSec7" stops={[{ offset: "0%", color: color.indigo25 }, { offset: "100%", color: color.cyan50 }]} /> <rect x="0" y="0" width="800" height="380" rx="20" fill="url(#gSec7)" />
    <ellipse cx="400" cy="200" rx="150" ry="50" fill={color.white} stroke={color.slate300} strokeWidth="3" />
    <g transform="translate(400, 120)"> <path d="M0 -30 C -30 -30, -30 10, 0 10 C 30 10, 30 -30, 0 -30 Z" fill={color.amber100} /> <rect x="-10" y="10" width="20" height="10" fill={color.amber100} /> <line x1="0" y1="-20" x2="0" y2="-5" stroke={color.amber500} strokeWidth="3" /> <line x1="-5" y1="-15" x2="5" y2="-15" stroke={color.amber500} strokeWidth="3" /> <animate attributeName="opacity" values="1;0.5;1" dur="1.5s" repeatCount="indefinite" /> </g>
    <g transform="translate(250, 150)"> <circle cx="0" cy="0" r="30" fill={color.cyan500} /> <rect x="-20" y="30" width="40" height="60" rx="8" fill={color.cyan500} /> </g>
    <g transform="translate(550, 150)"> <circle cx="0" cy="0" r="30" fill={color.emerald300} /> <rect x="-20" y="30" width="40" height="60" rx="8" fill={color.emerald300} /> </g>
    <g transform="translate(400, 240)"> <circle cx="0" cy="0" r="30" fill={color.indigo300} /> <rect x="-20" y="30" width="40" height="60" rx="8" fill={color.indigo300} /> </g>
  </svg>
);
// 8. Data Privacy & Confidentiality
const Sec8_PrivacySVG = (props) => (
  <svg viewBox="0 0 800 380" role="img" aria-label="Data Privacy & Confidentiality" {...props}>
    <BG id="gSec8" stops={[{ offset: "0%", color: color.slate200 }, { offset: "100%", color: color.indigo50 }]} /> <rect x="0" y="0" width="800" height="380" rx="20" fill="url(#gSec8)" />
    <g transform="translate(120, 80)"> <rect x="0" y="0" width="300" height="250" rx="15" fill={color.slate700} stroke={color.slate900} strokeWidth="6" /> <rect x="20" y="20" width="260" height="210" rx="8" fill={color.slate500} /> <circle cx="150" cy="125" r="80" fill={color.slate400} stroke={color.slate900} strokeWidth="4" /> <circle cx="150" cy="125" r="20" fill={color.slate700} /> <line x1="150" y1="125" x2="210" y2="125" stroke={color.slate900} strokeWidth="8" /> <animateTransform attributeName="transform" type="scale" values="1;1.01;1" dur="3s" repeatCount="indefinite" transform-origin="270 205" /> </g>
    <g transform="translate(480, 100)"> <Card x="0" y="0" w="220" h="180" r="12" /> <text x="20" y="50" fontFamily="sans-serif" fontSize="20" fontWeight="bold" fill={color.indigo600}>DPDP Act</text> <text x="20" y="80" fontFamily="sans-serif" fontSize="20" fontWeight="bold" fill={color.indigo600}>2023</text> <rect x="20" y="110" width="180" height="6" rx="3" fill={color.slate400} /> <path d="M130 130 l20 20 40-40" stroke={color.emerald600} strokeWidth="8" fill="none" /> </g>
  </svg>
);
// 9. Ethical Commitment
const Sec9_EthicsSVG = (props) => (
  <svg viewBox="0 0 800 380" role="img" aria-label="Ethical Commitment" {...props}>
    <BG id="gSec9" stops={[{ offset: "0%", color: color.indigo50 }, { offset: "100%", color: color.emerald50 }]} /> <rect x="0" y="0" width="800" height="380" rx="20" fill="url(#gSec9)" />
    <g transform="translate(300, 80)"> <rect x="0" y="0" width="200" height="50" rx="10" fill={color.slate700} /> <rect x="40" y="50" width="120" height="200" fill={color.white} stroke={color.slate300} strokeWidth="3" /> <rect x="0" y="250" width="200" height="50" rx="10" fill={color.slate700} /> <text x="100" y="140" fontFamily="sans-serif" fontSize="20" fontWeight="bold" fill={color.indigo800} textAnchor="middle">Integrity</text> <text x="100" y="170" fontFamily="sans-serif" fontSize="20" fontWeight="bold" fill={color.indigo800} textAnchor="middle">Transparency</text> </g>
    <g transform="translate(400, 30)"> <circle cx="0" cy="0" r="30" fill={color.indigo600} /> <text x="0" y="10" fontFamily="sans-serif" fontSize="18" fontWeight="bold" fill={color.white} textAnchor="middle">C</text> </g>
  </svg>
);
// 10. Join CRCCF – Be the Change
const Sec10_JoinSVG = (props) => (
  <svg viewBox="0 0 800 380" role="img" aria-label="Join CRCCF – Be the Change" {...props}>
    <BG id="gSec10" stops={[{ offset: "0%", color: color.cyan50 }, { offset: "100%", color: color.amber50 }]} /> <rect x="0" y="0" width="800" height="380" rx="20" fill="url(#gSec10)" />
    <g transform="translate(150, 100)"> <circle cx="0" cy="0" r="40" fill="#F5D0A6" /> <rect x="-30" y="40" width="60" height="120" rx="10" fill={color.indigo600} /> </g>
    <g transform="translate(250, 150)"> <path d="M0 50 C 100 0, 200 0, 300 50" stroke={color.emerald600} strokeWidth="10" fill="none" /> <text x="150" y="-10" fontFamily="sans-serif" fontSize="18" fontWeight="bold" fill={color.emerald600} textAnchor="middle">CRCCF Mission</text> <path d="M0 50 C 100 100, 200 100, 300 50" stroke={color.slate300} strokeWidth="10" fill="none" /> <g transform="translate(400, 50)"> <circle cx="0" cy="0" r="40" fill={color.amber500} /> <path d="M0 0 L 0 -60 M 0 0 L 60 0 M 0 0 L -60 0 M 0 0 L 40 -40 M 0 0 L -40 -40" stroke={color.amber500} strokeWidth="6"> <animate attributeName="opacity" values="1;0.3;1" dur="2s" repeatCount="indefinite" /> </path> </g> </g>
  </svg>
);
// 11. Disclaimer
const Sec11_DisclaimerSVG = (props) => (
  <svg viewBox="0 0 800 380" role="img" aria-label="Disclaimer" {...props}>
    <BG id="gSec11" stops={[{ offset: "0%", color: color.slate200 }, { offset: "100%", color: color.amber50 }]} /> <rect x="0" y="0" width="800" height="380" rx="20" fill="url(#gSec11)" />
    <g transform="translate(100, 150)"> <rect x="0" y="0" width="220" height="40" rx="10" fill={color.amber500} stroke={color.slate700} strokeWidth="2" transform="rotate(-20)" /> <rect x="80" y="-80" width="30" height="100" rx="8" fill={color.amber500} stroke={color.slate700} strokeWidth="2" transform="rotate(-20)" /> <rect x="20" y="100" width="160" height="30" rx="15" fill={color.slate700} opacity="0.1" /> </g>
    <g transform="translate(380, 80)"> <Card x="0" y="0" w="320" h="220" r="12" stroke={color.slate400} sw="2" /> <text x="20" y="50" fontFamily="sans-serif" fontSize="24" fontWeight="bold" fill={color.slate700}>Legal Disclaimer</text> <rect x="20" y="80" width="280" height="6" rx="3" fill={color.slate400} /> <circle cx="260" cy="170" r="40" fill={color.indigo600} /> <text x="260" y="175" fontFamily="sans-serif" fontSize="14" fontWeight="bold" fill={color.white} textAnchor="middle">Section 8</text> <text x="260" y="190" fontFamily="sans-serif" fontSize="12" fill={color.white} textAnchor="middle">Compliant</text> </g>
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
             {/* SVG Container: Removed max-h, added h-full */}
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
export default function RulesPoliciesCarrerDevelopmentProgress() {
  const { container, itemUp } = useAnims();
  const heroRef = useRef(null);
  const { scrollYProgress } = useScroll({ target: heroRef, offset: ["start start", "end start"] });
  const heroY = useTransform(scrollYProgress, [0, 1], [0, -40]);

  // Map section IDs to SVG components (11 defined)
  const svgMap = {
    'sec1-about-crccf-and-our-vision': Sec1_AboutVisionSVG,
    'sec2-equal-opportunity-and-legal-compliance': Sec2_EqualOpportunitySVG,
    'sec3-why-join-crccf': Sec3_WhyJoinSVG,
    'sec4-opportunities-for-employees': Sec4_EmployeesSVG,
    'sec5-opportunities-for-interns-and-volunteers': Sec5_InternsSVG,
    'sec6-training-and-mentorship': Sec6_TrainingSVG,
    'sec7-work-culture-and-values': Sec7_CultureSVG,
    'sec8-data-privacy-and-confidentiality': Sec8_PrivacySVG,
    'sec9-ethical-commitment': Sec9_EthicsSVG,
    'sec10-join-crccf-be-the-change': Sec10_JoinSVG,
    'sec11-disclaimer': Sec11_DisclaimerSVG,
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
        <span className="text-gray-700" aria-current="page">Career Development Rules</span> {/* Updated breadcrumb text */}
      </motion.nav>

      {/* Hero with Video-SVG (career dev scene) */}
      <div ref={heroRef} className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-6 md:gap-8 lg:gap-10 items-center">
        <motion.div variants={itemUp}>
          <h1 className="text-[22px] sm:text-3xl font-bold text-gray-900">{data.title}</h1>
          <div className="mt-3 sm:mt-4 flex flex-wrap gap-2">
            {["Development", "Progression", "Rules", "Policy"].map((pill) => ( // Updated pills
              <span key={pill} className="px-2.5 sm:px-3 py-1.5 text-xs sm:text-sm rounded-full bg-cyan-100 text-cyan-800 border border-cyan-200">
                {pill}
              </span>
            ))}
          </div>
        </motion.div>

        <motion.div style={{ y: heroY }} className="relative">
          <div className="absolute -inset-2 rounded-2xl bg-gradient-to-tr from-cyan-100 via-indigo-100 to-emerald-100 blur-md sm:blur-lg md:blur-xl" aria-hidden="true" />
          <div className="relative rounded-2xl border border-gray-200 bg-white p-3 sm:p-4 shadow-sm">
            <div className="w-full h-auto max-h-72 sm:max-h-80 md:max-h-none overflow-hidden">
              <VideoHeroCareerDev
                src="/assets/video/career-dev-hero.mp4"
                poster="/assets/video/career-dev-hero.jpg"
              />
            </div>
          </div>
        </motion.div>
      </div>

      {/* Sections */}
      <div className="mt-8 sm:mt-10 md:mt-12">
        {/* Iterate over the imported data */}
        {rulesPoliciesCarrerDevelopmentProgressData.map((sec, idx) => {
          // Use the updated svgMap, fallback to the first SVG if ID mismatch
          const SVGComp = svgMap[sec.id] || Sec1_AboutVisionSVG;
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
      
      {/* The disclaimer is now section 11 from the data, rendered by the map */}

    </motion.section>
  );
}