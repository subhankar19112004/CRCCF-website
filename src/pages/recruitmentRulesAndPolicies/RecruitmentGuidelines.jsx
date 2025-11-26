// src/pages/careers/RecruitmentGuidelines.jsx
import React, { useRef } from "react";
import { Link } from "react-router-dom";
import { motion, useReducedMotion, useScroll, useTransform, useSpring } from "framer-motion";
// Correct import path as per your stub
import { recruitmentGuidelinesData } from '../../data/recruitment_rules_policies/recruitmentGuidelinesData';

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
  title: "Recruitment Guidelines",
  // Tagline will be pulled per section from the imported data
};

/* -------------------------- HERO: Video SVG (inline) -------------------------- */
/* Scene: Person carefully reading guidelines on CRCCF website, checklist symbols. */
const VideoHeroGuidelines = ({ src = "", poster = "" }) => {
  const prefersReduced =
    typeof window !== "undefined" &&
    window.matchMedia &&
    window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  const title = "CRCCF Recruitment Guidelines Hero";
  const desc =
    "A person reads guidelines on the CRCCF portal, with checklist symbols. The background is a masked video or a soft gradient.";

  // Fallback: animated gradient stage + overlay
  if (prefersReduced || !src) {
    return (
      <svg viewBox="0 0 1000 460" role="img" aria-labelledby="glTitle glDesc" className="w-full h-auto">
        <title id="glTitle">{title}</title>
        <desc id="glDesc">{desc}</desc>
        <defs>
          <linearGradient id="glGrad" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor={color.indigo100}>
              <animate attributeName="offset" values="0;0.15;0" dur="8s" repeatCount="indefinite" />
            </stop>
            <stop offset="55%" stopColor={color.cyan100}>
              <animate attributeName="offset" values="0.55;0.85;0.55" dur="8s" repeatCount="indefinite" />
            </stop>
            <stop offset="100%" stopColor={color.slate200} />
          </linearGradient>
          <filter id="glSoft" x="-20%" y="-20%" width="140%" height="140%">
            <feGaussianBlur in="SourceGraphic" stdDeviation="8" result="b" />
            <feColorMatrix in="b" type="matrix" values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 .6 0" />
          </filter>
          <clipPath id="glStage">
            <rect x="40" y="36" width="640" height="388" rx="26" />
          </clipPath>
        </defs>

        <g filter="url(#glSoft)">
          <rect x="0" y="0" width="1000" height="460" rx="28" fill="url(#glGrad)" />
        </g>
        <g clipPath="url(#glStage)">
          <rect x="0" y="0" width="1000" height="460" fill="url(#glGrad)">
            <animate attributeName="x" values="0;22;0" dur="8s" repeatCount="indefinite" />
          </rect>
        </g>

        {GuidelinesOverlay()}
      </svg>
    );
  }

  // Main masked video version with overlay
  return (
    <svg viewBox="0 0 1000 460" className="w-full h-auto block" role="img" aria-label={title}>
      <defs>
        <linearGradient id="glBG" x1="0" y1="0" x2="1" y2="1">
           <stop offset="0%" stopColor={color.indigo100} />
           <stop offset="55%" stopColor={color.cyan100} />
           <stop offset="100%" stopColor={color.slate200} />
        </linearGradient>
        <filter id="glSoft2" x="-20%" y="-20%" width="140%" height="140%">
          <feGaussianBlur in="SourceGraphic" stdDeviation="8" result="b" />
          <feColorMatrix in="b" type="matrix" values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 .6 0" />
        </filter>
        <clipPath id="glStage2">
          <rect x="40" y="36" width="640" height="388" rx="26" />
        </clipPath>
      </defs>

      <g filter="url(#glSoft2)">
        <rect x="0" y="0" width="1000" height="460" rx="28" fill="url(#glBG)" />
      </g>

      {/* poster + masked video */}
      <g clipPath="url(#glStage2)">
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

      {GuidelinesOverlay()}
    </svg>
  );
};

/* ----------------------- Overlay: guidelines scene ----------------------- */
function GuidelinesOverlay() {
  return (
    <g transform="translate(680, 50)">
      {/* Ground shadow */}
      <ellipse cx="170" cy="390" rx="140" ry="15" fill={color.black} opacity="0.08" />

      {/* Figure Reading */}
      <g transform="translate(40, 160)">
        <rect x="0" y="80" width="70" height="120" rx="15" fill={color.indigo600} />
        <circle cx="35" cy="50" r="30" fill="#F5D0A6" />
      </g>

      {/* Guidelines Document on Screen */}
      <g transform="translate(100, 100)">
        <rect x="0" y="0" width="220" height="280" rx="10" fill={color.slate900} />
        <rect x="5" y="5" width="210" height="270" rx="5" fill={color.white} />
        <rect x="-10" y="280" width="240" height="15" rx="8" fill={color.slate400} />
        {/* Checklist */}
        <text x="20" y="40" fontFamily="sans-serif" fontSize="16" fontWeight="bold" fill={color.slate700}>Guidelines</text>
        <path d="M20 70 l10 10 20-20" stroke={color.emerald600} strokeWidth="4" fill="none" />
        <rect x="60" y="65" width="120" height="6" rx="3" fill={color.slate400} />
        <path d="M20 110 l10 10 20-20" stroke={color.emerald600} strokeWidth="4" fill="none" />
        <rect x="60" y="105" width="120" height="6" rx="3" fill={color.slate400} />
      </g>

      {/* Gavel */}
      <g transform="translate(10, 80)" opacity="0.8">
        <rect x="0" y="0" width="80" height="20" rx="5" fill={color.amber500} transform="rotate(30)" />
        <rect x="30" y="-30" width="15" height="40" rx="4" fill={color.amber500} transform="rotate(30)" />
        <animateTransform attributeName="transform" type="rotate" values="10 80 30; 10 80 35; 10 80 30" dur="2s" repeatCount="indefinite" />
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
// Using SVGs from Recruitment Instructions where applicable

// 1. Introduction
const Sec1_IntroSVG = (props) => (
  <svg viewBox="0 0 800 380" role="img" aria-label="Introduction to Recruitment Guidelines" {...props}>
    <BG id="gSec1" stops={[{ offset: "0%", color: color.indigo50 }, { offset: "100%", color: color.cyan50 }]} /> <SoftGlow id="glowSec1" std={10} alpha={0.4} /> <rect x="0" y="0" width="800" height="380" rx="20" fill="url(#gSec1)" />
    <g transform="translate(100, 150)" filter="url(#glowSec1)"> <rect x="0" y="0" width="220" height="40" rx="10" fill={color.amber500} stroke={color.slate700} strokeWidth="2" transform="rotate(-20)" /> <rect x="80" y="-80" width="30" height="100" rx="8" fill={color.amber500} stroke={color.slate700} strokeWidth="2" transform="rotate(-20)" /> <rect x="20" y="100" width="160" height="30" rx="15" fill={color.slate700} opacity="0.1" filter="url(#glowSec1)" /> </g>
    <g transform="translate(400, 80)"> <Card x="0" y="0" w="300" h="240" r="12" /> <text x="30" y="50" fontSize="24" fontWeight="bold">Guidelines</text> <rect x="30" y="80" width="240" height="8" rx="4" fill={color.slate400} /> <rect x="30" y="100" width="200" height="8" rx="4" fill={color.slate400} /> <path d="M200 140 l20 20 40-40" stroke={color.emerald600} strokeWidth="8" fill="none" /> </g>
  </svg>
);
// 2. General Conduct & Eligibility Compliance
const Sec2_ConductSVG = (props) => ( // Reusing SVG
  <svg viewBox="0 0 800 380" role="img" aria-label="General Conduct & Eligibility Compliance" {...props}>
    <BG id="gSec2" stops={[{ offset: "0%", color: color.cyan25 }, { offset: "100%", color: color.indigo50 }]} /> <rect x="0" y="0" width="800" height="380" rx="20" fill="url(#gSec2)" />
    <g transform="translate(180, 100)"> <circle cx="0" cy="0" r="50" fill="#F5D0A6" /> <rect x="-40" y="50" width="80" height="150" rx="10" fill={color.indigo600} /> </g>
    <g transform="translate(450, 100)"> <path d="M0 0 L 50 50 L 120 -20" stroke={color.emerald600} strokeWidth="15" fill="none" strokeLinecap="round" /> <text x="0" y="80" fontSize="18">Honesty</text> </g>
    <g transform="translate(450, 200)"> <line x1="0" y1="0" x2="80" y2="80" stroke={color.rose600} strokeWidth="15" strokeLinecap="round" /> <line x1="0" y1="80" x2="80" y2="0" stroke={color.rose600} strokeWidth="15" strokeLinecap="round" /> <text x="0" y="110" fontSize="18">Misleading</text> </g>
  </svg>
);
// 3. Application Submission Process
const Sec3_SubmissionSVG = (props) => ( // Reusing SVG
  <svg viewBox="0 0 800 380" role="img" aria-label="Application Submission Process" {...props}>
    <BG id="gSec3" stops={[{ offset: "0%", color: color.indigo50 }, { offset: "100%", color: color.cyan50 }]} /> <rect x="0" y="0" width="800" height="380" rx="20" fill="url(#gSec3)" />
    <g transform="translate(100, 40)"> <rect x="0" y="0" width="600" height="300" rx="15" fill={color.slate900} /> <rect x="10" y="10" width="580" height="280" rx="8" fill={color.white} /> <rect x="-20" y="300" width="640" height="20" rx="10" fill={color.slate400} /> <text x="40" y="60" fontSize="20">Official CRCCF Portal</text> <rect x="40" y="80" width="520" height="180" rx="10" fill={color.slate200} /> <g transform="translate(300, 150)"> <path d="M-40 0 L 0 -40 L 40 0 M 0 -40 V 40" stroke={color.emerald600} strokeWidth="8" fill="none" /> <rect x="-60" y="40" width="120" height="15" rx="5" fill={color.emerald600} /> <animateTransform attributeName="transform" type="translate" values="300 150; 300 145; 300 150" dur="1s" repeatCount="indefinite" /> </g> </g>
  </svg>
);
// 4. Evaluation & Selection Discipline
const Sec4_DisciplineSVG = (props) => ( // Reusing SVG
  <svg viewBox="0 0 800 380" role="img" aria-label="Evaluation & Selection Discipline" {...props}>
    <BG id="gSec5" stops={[{ offset: "0%", color: color.cyan50 }, { offset: "100%", color: color.indigo50 }]} /> <rect x="0" y="0" width="800" height="380" rx="20" fill="url(#gSec5)" />
    <g transform="translate(180, 100)"> <circle cx="0" cy="0" r="80" fill="white" stroke={color.slate300} strokeWidth="4" /> <line x1="0" y1="0" x2="0" y2="-50" stroke={color.slate700} strokeWidth="6" /> <line x1="0" y1="0" x2="40" y2="0" stroke={color.slate700} strokeWidth="6"> <animateTransform attributeName="transform" type="rotate" values="0 0 0; 360 0 0" dur="5s" repeatCount="indefinite" transform-origin="0 0" /> </line> <text x="0" y="110" fontSize="18" textAnchor="middle">Punctuality</text> </g>
    <g transform="translate(450, 100)"> <circle cx="0" cy="0" r="80" fill={color.rose100} stroke={color.rose600} strokeWidth="6" /> <line x1="-50" y1="-50" x2="50" y2="50" stroke={color.rose600} strokeWidth="10" /> <line x1="-50" y1="50" x2="50" y2="-50" stroke={color.rose600} strokeWidth="10" /> <text x="0" y="110" fontSize="18" fill={color.rose600} textAnchor="middle">No Misconduct</text> </g>
  </svg>
);
// 5. Document Verification & Authenticity Check
const Sec5_AuthCheckSVG = (props) => ( // Reusing SVG
  <svg viewBox="0 0 800 380" role="img" aria-label="Document Verification & Authenticity Check" {...props}>
    <BG id="gSec6" stops={[{ offset: "0%", color: color.indigo50 }, { offset: "100%", color: color.slate200 }]} /> <rect x="0" y="0" width="800" height="380" rx="20" fill="url(#gSec6)" />
    <g transform="translate(100, 60)"> <Card x="0" y="0" w="300" h="260" r="12" /> <text x="20" y="50" fontSize="20" fontWeight="bold">Document</text> <rect x="20" y="80" width="260" height="8" rx="4" fill={color.slate400} /> </g>
    <g transform="translate(250, 150)"> <circle cx="0" cy="0" r="80" fill={color.cyan100} opacity="0.7" stroke={color.cyan500} strokeWidth="8" /> <line x1="60" y1="60" x2="120" y2="120" stroke={color.cyan500} strokeWidth="10" /> </g>
    <g transform="translate(500, 120)"> <circle cx="0" cy="0" r="80" fill={color.emerald100} stroke={color.emerald600} strokeWidth="6" /> <path d="M-40 0 L -10 30 L 50 -30" stroke={color.emerald600} strokeWidth="12" fill="none" strokeLinecap="round" /> <animateTransform attributeName="transform" type="scale" values="1;1.02;1" dur="1.5s" repeatCount="indefinite" transform-origin="500 120" /> </g>
  </svg>
);
// 6. Technical & Digital Requirements
const Sec6_TechReqsSVG = (props) => ( // Reusing SVG
  <svg viewBox="0 0 800 380" role="img" aria-label="Technical & Digital Requirements" {...props}>
    <BG id="gSec7" stops={[{ offset: "0%", color: color.cyan50 }, { offset: "100%", color: color.indigo50 }]} /> <rect x="0" y="0" width="800" height="380" rx="20" fill="url(#gSec7)" />
    <g transform="translate(150, 120)"> <rect x="0" y="0" width="120" height="80" rx="10" fill={color.white} stroke={color.slate300} /> <path d="M0 0 L 60 40 L 120 0" stroke={color.indigo600} strokeWidth="4" fill="none" /> <text x="60" y="110" fontSize="16" textAnchor="middle">Email</text> </g>
    <g transform="translate(350, 120)"> <path d="M0 40 C 30 10, 70 10, 100 40" stroke={color.cyan500} strokeWidth="8" fill="none" /> <path d="M20 55 C 40 35, 60 35, 80 55" stroke={color.cyan500} strokeWidth="8" fill="none" /> <circle cx="50" cy="70" r="8" fill={color.cyan500} /> <text x="50" y="110" fontSize="16" textAnchor="middle">Internet</text> </g>
    <g transform="translate(550, 120)"> <rect x="0" y="0" width="120" height="80" rx="8" fill={color.slate700} /> <rect x="5" y="5" width="110" height="70" rx="4" fill={color.white} /> <rect x="-10" y="80" width="140" height="10" rx="5" fill={color.slate400} /> <text x="60" y="110" fontSize="16" textAnchor="middle">Digital Literacy</text> </g>
  </svg>
);
// 7. Behavioural Guidelines
const Sec7_BehavioralSVG = (props) => ( // Reusing SVG
  <svg viewBox="0 0 800 380" role="img" aria-label="Behavioral Guidelines" {...props}>
    <BG id="gSec8" stops={[{ offset: "0%", color: color.indigo25 }, { offset: "100%", color: color.emerald50 }]} /> <rect x="0" y="0" width="800" height="380" rx="20" fill="url(#gSec8)" />
    <g transform="translate(180, 100)"> <circle cx="0" cy="0" r="50" fill="#F5D0A6" /> <rect x="-40" y="50" width="80" height="150" rx="10" fill={color.indigo600} /> <path d="M-20 10 Q 0 30, 20 10" stroke={color.slate700} strokeWidth="3" fill="none" /> </g>
    <g transform="translate(300, 80)"> <path d="M0 0 H 200 C 210 0, 210 10, 200 10 V 80 C 210 80, 210 90, 200 90 H 0 C -10 90, -10 80, 0 80 V 10 C -10 10, -10 0, 0 0 Z" fill={color.white} stroke={color.slate300} /> <path d="M20 90 L 40 90 L -10 130 Z" fill={color.white} /> <text x="30" y="40">Politeness,</text> <text x="30" y="65">Respect</text> </g>
    <g transform="translate(550, 150)"> <path d="M0 0 H 60 V -40 H 80 V 60 H 0 Z" fill={color.emerald300} stroke={color.emerald600} strokeWidth="4" /> <path d="M10 -40 C 0 -40, 0 -60, 10 -60 H 40 C 50 -60, 50 -40, 40 -40 Z" fill={color.emerald300} stroke={color.emerald600} strokeWidth="4" /> <animateTransform attributeName="transform" type="translate" values="550 150; 550 145; 550 150" dur="1s" repeatCount="indefinite" /> </g>
  </svg>
);
// 8. Fair Opportunity & Equal Access
const Sec8_FairOpportunitySVG = (props) => ( // Reusing SVG
  <svg viewBox="0 0 800 380" role="img" aria-label="Fair Opportunity & Equal Access" {...props}>
    <BG id="gSec9" stops={[{ offset: "0%", color: color.emerald50 }, { offset: "100%", color: color.cyan50 }]} /> <rect x="0" y="0" width="800" height="380" rx="20" fill="url(#gSec9)" />
    <g transform="translate(150, 100)"> <circle cx="0" cy="0" r="40" fill="#F5D0A6" /> <rect x="-30" y="40" width="60" height="120" rx="10" fill={color.indigo600} /> <circle cx="120" cy="0" r="40" fill="#A0522D" /> <rect x="90" y="40" width="60" height="120" rx="10" fill={color.cyan500} /> <circle cx="240" cy="0" r="40" fill="#F5D0A6" /> <rect x="210" y="40" width="60" height="120" rx="10" fill={color.emerald600} /> </g>
    <line x1="100" y1="300" x2="700" y2="300" stroke={color.slate700} strokeWidth="10" />
    <g transform="translate(550, 120)"> <circle cx="0" cy="0" r="60" fill={color.white} stroke={color.slate300} /> <polygon points="0 -30, 15 0, 0 30, -15 0" fill={color.amber500} /> <text x="0" y="80" fontSize="18" textAnchor="middle">Merit Based</text> </g>
  </svg>
);
// 9. Acknowledgment of Guidelines
const Sec9_AcknowledgmentSVG = (props) => ( // Reusing SVG
  <svg viewBox="0 0 800 380" role="img" aria-label="Acknowledgment of Guidelines" {...props}>
    <BG id="gSec10" stops={[{ offset: "0%", color: color.indigo50 }, { offset: "100%", color: color.cyan50 }]} /> <rect x="0" y="0" width="800" height="380" rx="20" fill="url(#gSec10)" />
    <g transform="translate(100, 60)"> <Card x="0" y="0" w="400" h="280" r="12" /> <text x="30" y="50" fontSize="24" fontWeight="bold">Guidelines</text> <text x="30" y="100" fontSize="20">✅ Read & Understood</text> <text x="30" y="140" fontSize="20">✅ Accepted</text> </g>
    <g transform="translate(520, 150)"> <text x="0" y="0" fontFamily="cursive" fontSize="30">Acknowledged</text> <line x1="0" y1="10" x2="200" y2="10" stroke={color.slate700} strokeWidth="2" /> <path d="M10 20 L 30 0 L 50 20" stroke={color.emerald600} strokeWidth="6" fill="none"> <animateTransform attributeName="transform" type="translate" values="0 0; 0 -5; 0 0" dur="1s" repeatCount="indefinite" /> </path> </g>
  </svg>
);
// 10. Application Fee Clause
const Sec10_FeeClauseSVG = (props) => ( // Reusing SVG
  <svg viewBox="0 0 800 380" role="img" aria-label="Application Fee Clause" {...props}>
    <BG id="gSec11" stops={[{ offset: "0%", color: color.emerald50 }, { offset: "100%", color: color.cyan50 }]} /> <rect x="0" y="0" width="800" height="380" rx="20" fill="url(#gSec11)" />
    <g transform="translate(150, 100)"> <circle cx="0" cy="0" r="60" fill={color.emerald600} /> <text x="0" y="15" fontSize="50" fontWeight="bold" fill={color.white} textAnchor="middle">₹</text> <text x="0" y="100" fontSize="18" textAnchor="middle">Fee</text> <text x="0" y="125" fontSize="14" fill={color.rose600} textAnchor="middle">(Non-Refundable)</text> </g>
    <g transform="translate(350, 80)"> <rect x="0" y="0" width="150" height="100" rx="10" fill={color.white} stroke={color.emerald600} strokeWidth="4" /> <text x="75" y="40" fontSize="14" textAnchor="middle">Official</text> <text x="75" y="60" fontSize="14" textAnchor="middle">Portal</text> <path d="M50 70 l20 20 30-30" stroke={color.emerald600} strokeWidth="6" fill="none" /> </g>
    <g transform="translate(550, 150)"> <rect x="0" y="0" width="150" height="100" rx="10" fill={color.rose100} stroke={color.rose600} strokeWidth="4" /> <text x="75" y="40" fontSize="14" fill={color.rose600} textAnchor="middle">Third</text> <text x="75" y="60" fontSize="14" fill={color.rose600} textAnchor="middle">Party</text> <line x1="40" y1="70" x2="110" y2="100" stroke={color.rose600} strokeWidth="6" /> <line x1="40" y1="100" x2="110" y2="70" stroke={color.rose600} strokeWidth="6" /> </g>
  </svg>
);
// 11. Data Protection & Privacy Assurance
const Sec11_DataProtectSVG = (props) => ( // Reusing SVG
  <svg viewBox="0 0 800 380" role="img" aria-label="Data Protection & Privacy Assurance" {...props}>
    <BG id="gSec12" stops={[{ offset: "0%", color: color.slate200 }, { offset: "100%", color: color.indigo50 }]} /> <rect x="0" y="0" width="800" height="380" rx="20" fill="url(#gSec12)" />
    <g transform="translate(150, 100)"> <rect x="0" y="0" width="120" height="200" rx="8" fill={color.slate700} /> <rect x="10" y="15" width="100" height="30" rx="5" fill={color.emerald300} /> <rect x="10" y="55" width="100" height="30" rx="5" fill={color.emerald300} /> <g> <circle cx="25" cy="30" r="3" fill={color.emerald600}> <animate attributeName="opacity" values="1;0;1" dur="1s" repeatCount="indefinite" /> </circle> </g> </g>
    <g transform="translate(450, 80)"> <path d="M100 0 L 180 40 V 120 C 180 200, 100 250, 100 250 C 100 250, 20 200, 20 120 V 40 Z" fill={color.indigo100} stroke={color.indigo600} strokeWidth="6" /> <text x="100" y="140" fontSize="20" fontWeight="bold" textAnchor="middle">SECURE</text> <animateTransform attributeName="transform" type="scale" values="1;1.02;1" dur="2s" repeatCount="indefinite" transform-origin="550 205" /> </g>
  </svg>
);
// 12. Fraud Prevention & Official Clarification
const Sec12_FraudPreventSVG = (props) => ( // Reusing SVG
  <svg viewBox="0 0 800 380" role="img" aria-label="Fraud Prevention & Official Clarification" {...props}>
    <BG id="gSec13" stops={[{ offset: "0%", color: color.rose50 }, { offset: "100%", color: color.amber50 }]} /> <rect x="0" y="0" width="800" height="380" rx="20" fill="url(#gSec13)" />
    <g transform="translate(180, 120)"> <circle cx="0" cy="0" r="80" fill={color.white} stroke={color.emerald600} strokeWidth="6" /> <circle cx="0" cy="0" r="60" fill={color.indigo600} /> <text x="0" y="15" fontSize="30" fontWeight="bold" fill={color.white} textAnchor="middle">C</text> <text x="0" y="110" fontSize="18" textAnchor="middle">Official Portal/Email</text> </g>
    <g transform="translate(450, 100)"> <circle cx="0" cy="0" r="60" fill={color.white} stroke={color.rose600} strokeWidth="5" /> <line x1="-40" y1="-40" x2="40" y2="40" stroke={color.rose600} strokeWidth="8" /> <line x1="-40" y1="40" x2="40" y2="-40" stroke={color.rose600} strokeWidth="8" /> <text x="0" y="10" fontSize="18" fontWeight="bold" fill={color.rose600} textAnchor="middle">Agents</text> </g>
    <g transform="translate(620, 180)"> <circle cx="0" cy="0" r="60" fill={color.white} stroke={color.rose600} strokeWidth="5" /> <line x1="-40" y1="-40" x2="40" y2="40" stroke={color.rose600} strokeWidth="8" /> <line x1="-40" y1="40" x2="40" y2="-40" stroke={color.rose600} strokeWidth="8" /> <text x="0" y="10" fontSize="18" fontWeight="bold" fill={color.rose600} textAnchor="middle">Social Media</text> </g>
  </svg>
);
// 13. Record Retention & Jurisdiction Clause
const Sec13_RecordJurisdictionSVG = (props) => ( // New SVG for this theme
  <svg viewBox="0 0 800 380" role="img" aria-label="Record Retention & Jurisdiction" {...props}>
      <BG id="gSec13" stops={[{ offset: "0%", color: color.slate200 }, { offset: "100%", color: color.indigo50 }]} /> <rect x="0" y="0" width="800" height="380" rx="20" fill="url(#gSec13)" />
      {/* File Cabinet */}
      <g transform="translate(150, 80)"> <rect x="0" y="0" width="200" height="250" rx="10" fill={color.slate700}/> <rect x="20" y="20" width="160" height="50" rx="5" fill={color.slate500}/> <rect x="60" y="35" width="80" height="10" fill={color.slate400}/> <rect x="20" y="90" width="160" height="50" rx="5" fill={color.slate500}/> <rect x="60" y="105" width="80" height="10" fill={color.slate400}/> <rect x="20" y="160" width="160" height="50" rx="5" fill={color.slate500}/> <rect x="60" y="175" width="80" height="10" fill={color.slate400}/> </g>
      {/* Gavel */}
      <g transform="translate(450, 150)"> <rect x="0" y="0" width="180" height="30" rx="8" fill={color.amber500} transform="rotate(10)"/> <rect x="70" y="-60" width="25" height="80" rx="5" fill={color.amber500} transform="rotate(10)"/> </g>
  </svg>
);
// 14. Legal Disclaimer
const Sec14_LegalDisclaimerSVG = (props) => ( // Reusing from Selection Process Sec 14
  <svg viewBox="0 0 800 380" role="img" aria-label="Legal Disclaimer" {...props}>
    <BG id="gSec14" stops={[{ offset: "0%", color: color.slate200 }, { offset: "100%", color: color.amber50 }]} /> <rect x="0" y="0" width="800" height="380" rx="20" fill="url(#gSec14)" />
    <g transform="translate(100, 150)"> <rect x="0" y="0" width="220" height="40" rx="10" fill={color.amber500} stroke={color.slate700} strokeWidth="2" transform="rotate(-20)" /> <rect x="80" y="-80" width="30" height="100" rx="8" fill={color.amber500} stroke={color.slate700} strokeWidth="2" transform="rotate(-20)" /> <rect x="20" y="100" width="160" height="30" rx="15" fill={color.slate700} opacity="0.1" /> </g>
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
export default function RecruitmentGuidelines() { // Corrected component name casing from stub
  const { container, itemUp } = useAnims();
  const heroRef = useRef(null);
  const { scrollYProgress } = useScroll({ target: heroRef, offset: ["start start", "end start"] });
  const heroY = useTransform(scrollYProgress, [0, 1], [0, -40]);

  // Map section IDs to SVG components (14 defined)
  const svgMap = {
    'sec1-introduction': Sec1_IntroSVG,
    'sec2-general-conduct-and-eligibility-compliance': Sec2_ConductSVG,
    'sec3-application-submission-process': Sec3_SubmissionSVG,
    'sec4-evaluation-and-selection-discipline': Sec4_DisciplineSVG,
    'sec5-document-verification-and-authenticity-check': Sec5_AuthCheckSVG,
    'sec6-technical-and-digital-requirements': Sec6_TechReqsSVG,
    'sec7-behavioural-guidelines': Sec7_BehavioralSVG,
    'sec8-fair-opportunity-and-equal-access': Sec8_FairOpportunitySVG,
    'sec9-acknowledgment-of-guidelines': Sec9_AcknowledgmentSVG,
    'sec10-application-fee-clause': Sec10_FeeClauseSVG,
    'sec11-data-protection-and-privacy-assurance': Sec11_DataProtectSVG,
    'sec12-fraud-prevention-and-official-clarification': Sec12_FraudPreventSVG,
    'sec13-record-retention-and-jurisdiction-clause': Sec13_RecordJurisdictionSVG,
    'sec14-legal-disclaimer': Sec14_LegalDisclaimerSVG,
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
        <span className="text-gray-700" aria-current="page">Recruitment Guidelines</span> {/* Updated text */}
      </motion.nav>

      {/* Hero with Video-SVG (guidelines scene) */}
      <div ref={heroRef} className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-6 md:gap-8 lg:gap-10 items-center">
        <motion.div variants={itemUp}>
          <h1 className="text-[22px] sm:text-3xl font-bold text-gray-900">{data.title}</h1>
          <div className="mt-3 sm:mt-4 flex flex-wrap gap-2">
            {["Guidelines", "Policy", "Compliance", "Ethics"].map((pill) => (
              <span key={pill} className="px-2.5 sm:px-3 py-1.5 text-xs sm:text-sm rounded-full bg-cyan-100 text-cyan-800 border border-cyan-200">
                {pill}
              </span>
            ))}
          </div>
        </motion.div>

        <motion.div style={{ y: heroY }} className="relative">
          <div className="absolute -inset-2 rounded-2xl bg-gradient-to-tr from-cyan-100 via-indigo-100 to-slate-200 blur-md sm:blur-lg md:blur-xl" aria-hidden="true" />
          <div className="relative rounded-2xl border border-gray-200 bg-white p-3 sm:p-4 shadow-sm">
            <div className="w-full h-auto max-h-72 sm:max-h-80 md:max-h-none overflow-hidden">
              <VideoHeroGuidelines
                src="/assets/video/recruitment-guidelines-hero.mp4"
                poster="/assets/video/recruitment-guidelines-hero.jpg"
              />
            </div>
          </div>
        </motion.div>
      </div>

      {/* Sections */}
      <div className="mt-8 sm:mt-10 md:mt-12">
        {/* Iterate over the imported data */}
        {recruitmentGuidelinesData.map((sec, idx) => {
          // Use the updated svgMap, fallback to the first SVG if ID mismatch
          const SVGComp = svgMap[sec.id] || Sec1_IntroSVG;
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

      {/* The disclaimer is now section 14 from the data, rendered by the map */}

    </motion.section>
  );
}