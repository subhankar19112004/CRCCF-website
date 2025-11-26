// src/pages/careers/ReqruitmentInstructions.jsx
import React, { useRef } from "react";
import { Link } from "react-router-dom";
import { motion, useReducedMotion, useScroll, useTransform, useSpring } from "framer-motion";
// Correct import path as per your stub
import { recruitmentInstructionsData } from '../../data/recruitment_rules_policies/recruitmentInstructionsData';

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
  title: "Recruitment Instructions",
  // Tagline will be pulled per section from the imported data
};

/* -------------------------- HERO: Video SVG (inline) -------------------------- */
/* Scene: Person at a computer, on the CRCCF portal, following a step-by-step list/instructions. */
const VideoHeroInstructions = ({ src = "", poster = "" }) => {
  const prefersReduced =
    typeof window !== "undefined" &&
    window.matchMedia &&
    window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  const title = "CRCCF Recruitment Instructions Hero";
  const desc =
    "A person at a computer following a step-by-step list on the official portal. The background is a masked video or a soft gradient.";

  // Fallback: animated gradient stage + overlay
  if (prefersReduced || !src) {
    return (
      <svg viewBox="0 0 1000 460" role="img" aria-labelledby="inTitle inDesc" className="w-full h-auto">
        <title id="inTitle">{title}</title>
        <desc id="inDesc">{desc}</desc>
        <defs>
          <linearGradient id="inGrad" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor={color.cyan100}>
              <animate attributeName="offset" values="0;0.15;0" dur="8s" repeatCount="indefinite" />
            </stop>
            <stop offset="55%" stopColor={color.indigo100}>
              <animate attributeName="offset" values="0.55;0.85;0.55" dur="8s" repeatCount="indefinite" />
            </stop>
            <stop offset="100%" stopColor={color.slate200} />
          </linearGradient>
          <filter id="inSoft" x="-20%" y="-20%" width="140%" height="140%">
            <feGaussianBlur in="SourceGraphic" stdDeviation="8" result="b" />
            <feColorMatrix in="b" type="matrix" values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 .6 0" />
          </filter>
          <clipPath id="inStage">
            <rect x="40" y="36" width="640" height="388" rx="26" />
          </clipPath>
        </defs>

        <g filter="url(#inSoft)">
          <rect x="0" y="0" width="1000" height="460" rx="28" fill="url(#inGrad)" />
        </g>
        <g clipPath="url(#inStage)">
          <rect x="0" y="0" width="1000" height="460" fill="url(#inGrad)">
            <animate attributeName="x" values="0;22;0" dur="8s" repeatCount="indefinite" />
          </rect>
        </g>

        {InstructionsOverlay()}
      </svg>
    );
  }

  // Main masked video version with overlay
  return (
    <svg viewBox="0 0 1000 460" className="w-full h-auto block" role="img" aria-label={title}>
      <defs>
        <linearGradient id="inBG" x1="0" y1="0" x2="1" y2="1">
           <stop offset="0%" stopColor={color.cyan100} />
           <stop offset="55%" stopColor={color.indigo100} />
           <stop offset="100%" stopColor={color.slate200} />
        </linearGradient>
        <filter id="inSoft2" x="-20%" y="-20%" width="140%" height="140%">
          <feGaussianBlur in="SourceGraphic" stdDeviation="8" result="b" />
          <feColorMatrix in="b" type="matrix" values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 .6 0" />
        </filter>
        <clipPath id="inStage2">
          <rect x="40" y="36" width="640" height="388" rx="26" />
        </clipPath>
      </defs>

      <g filter="url(#inSoft2)">
        <rect x="0" y="0" width="1000" height="460" rx="28" fill="url(#inBG)" />
      </g>

      {/* poster + masked video */}
      <g clipPath="url(#inStage2)">
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

      {InstructionsOverlay()}
    </svg>
  );
};

/* ----------------------- Overlay: instructions scene ----------------------- */
function InstructionsOverlay() {
  return (
    <g transform="translate(680, 50)">
      {/* Ground shadow */}
      <ellipse cx="170" cy="390" rx="140" ry="15" fill={color.black} opacity="0.08" />

      {/* Figure at computer */}
      <g transform="translate(40, 160)">
        <rect x="0" y="80" width="70" height="120" rx="15" fill={color.indigo600} />
        <circle cx="35" cy="50" r="30" fill="#F5D0A6" />
      </g>
      <g transform="translate(100, 200)">
        <rect x="0" y="0" width="200" height="140" rx="10" fill={color.slate900} />
        <rect x="5" y="5" width="190" height="130" rx="5" fill={color.white} />
        <rect x="-20" y="140" width="240" height="15" rx="8" fill={color.slate400} />
      </g>

      {/* Step-by-step list */}
      <g transform="translate(120, 220)">
        <text x="0" y="0" fontFamily="sans-serif" fontSize="14" fontWeight="bold" fill={color.slate700}>1. Review</text>
        <path d="M-15 -5 l5 5 10 -10" stroke={color.emerald600} strokeWidth="3" fill="none" />
        <text x="0" y="30" fontFamily="sans-serif" fontSize="14" fontWeight="bold" fill={color.slate700}>2. Apply Online</text>
        <path d="M-15 25 l5 5 10 -10" stroke={color.emerald600} strokeWidth="3" fill="none" />
        <text x="0" y="60" fontFamily="sans-serif" fontSize="14" fontWeight="bold" fill={color.slate700}>3. Screening</text>
        <path d="M-15 55 l5 5 10 -10" stroke={color.emerald600} strokeWidth="3" fill="none" />
      </g>

      {/* CRCCF Logo on Wall */}
      <g transform="translate(150, 80)">
         <circle cx="0" cy="0" r="30" fill={color.white} stroke={color.indigo600} strokeWidth="4" />
         <text x="0" y="10" fontFamily="sans-serif" fontSize="18" fontWeight="bold" fill={color.indigo600} textAnchor="middle">C</text>
         <animateTransform attributeName="transform" type="scale" values="1;1.05;1" dur="2s" repeatCount="indefinite" transform-origin="150 80" />
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
// Using SVGs from RecruitmentAndSelectionProcess where applicable, plus new ones

// 1. Step 1 – Registration and Candidate Conduct
const Sec1_RegistrationConductSVG = (props) => ( // Reusing from Selection Process Sec 1
  <svg viewBox="0 0 800 380" role="img" aria-label="Registration and Candidate Conduct" {...props}>
    <BG id="gSec1" stops={[{ offset: "0%", color: color.indigo50 }, { offset: "100%", color: color.cyan50 }]} /> <SoftGlow id="glowSec1" std={10} alpha={0.4} /> <rect x="0" y="0" width="800" height="380" rx="20" fill="url(#gSec1)" />
    <g transform="translate(100, 60)"> <rect x="0" y="0" width="400" height="260" rx="15" fill={color.slate900} /> <rect x="10" y="10" width="380" height="240" rx="8" fill={color.white} /> <rect x="-10" y="260" width="420" height="15" rx="8" fill={color.slate400} /> <text x="30" y="50" fontSize="20" fontWeight="bold">CRCCF Portal</text> </g>
    <g transform="translate(550, 100)"> <circle cx="0" cy="0" r="40" fill="#F5D0A6" /> <rect x="-30" y="40" width="60" height="120" rx="10" fill={color.indigo600} /> </g>
  </svg>
);
// 2. Step 2 – Application Submission and Document Validation
const Sec2_SubmissionValidationSVG = (props) => ( // Reusing from Selection Process Sec 2
  <svg viewBox="0 0 800 380" role="img" aria-label="Application Submission and Validation" {...props}>
    <BG id="gSec2" stops={[{ offset: "0%", color: color.cyan25 }, { offset: "100%", color: color.indigo50 }]} /> <rect x="0" y="0" width="800" height="380" rx="20" fill="url(#gSec2)" />
    <g transform="translate(100, 80)"> <Card x="0" y="0" w="300" h="220" r="12" /> <text x="20" y="40" fontSize="18">Enter Details...</text> <rect x="20" y="60" width="260" height="8" rx="4" fill={color.slate400}/> <rect x="20" y="80" width="260" height="8" rx="4" fill={color.slate400}/> </g>
    <g transform="translate(450, 100)"> <Card x="0" y="0" w="180" h="100" r="8" transform="rotate(5)" /> <Card x="20" y="80" w="180" h="100" r="8" fill={color.indigo100} transform="rotate(-3)" /> <path d="M100 50 l20 20 40 -40" stroke={color.emerald600} strokeWidth="8" fill="none"/> </g>
  </svg>
);
// 3. Step 3 – Verification, Screening and Compliance
const Sec3_VerificationScreeningSVG = (props) => ( // Reusing from Selection Process Sec 3
  <svg viewBox="0 0 800 380" role="img" aria-label="Verification, Screening, Compliance" {...props}>
    <BG id="gSec3" stops={[{ offset: "0%", color: color.indigo50 }, { offset: "100%", color: color.slate200 }]} /> <rect x="0" y="0" width="800" height="380" rx="20" fill="url(#gSec3)" />
    <g transform="translate(150, 100)"> <Card x="20" y="20" w="300" h="180" r="12" fill={color.slate200} transform="rotate(-3)" /> <Card x="10" y="10" w="300" h="180" r="12" fill={color.slate200} transform="rotate(2)" /> <Card x="0" y="0" w="300" h="180" r="12" fill={color.white} /> </g>
    <g transform="translate(250, 50)"> <circle cx="0" cy="0" r="80" fill={color.cyan100} opacity="0.7" stroke={color.cyan500} strokeWidth="8" /> <line x1="60" y1="60" x2="120" y2="120" stroke={color.cyan500} strokeWidth="10" /> </g>
    <g transform="translate(550, 150)"> <circle cx="0" cy="0" r="60" fill={color.white} stroke={color.emerald600} strokeWidth="4" /> <text x="0" y="5" fontSize="16" fontWeight="bold" fill={color.emerald600} textAnchor="middle">Compliant</text> </g>
  </svg>
);
// 4. Step 4 – Acknowledgement, Verification and Shortlisting
const Sec4_AcknowledgeVerifySVG = (props) => ( // Reusing from Selection Process Sec 4
  <svg viewBox="0 0 800 380" role="img" aria-label="Acknowledgement, Verification, Shortlisting" {...props}>
    <BG id="gSec4" stops={[{ offset: "0%", color: color.cyan50 }, { offset: "100%", color: color.indigo50 }]} /> <rect x="0" y="0" width="800" height="380" rx="20" fill="url(#gSec4)" />
    <g transform="translate(100, 80)"> <rect x="0" y="0" width="400" height="200" rx="15" fill={color.white} stroke={color.slate300} /> <rect x="0" y="0" width="400" height="40" rx="15" fill={color.indigo100} /> <text x="20" y="28">Status: Received</text> <text x="20" y="80">Reg ID: CRCCF-123</text> </g>
    <g transform="translate(500, 100)"> <circle cx="0" cy="0" r="50" fill={color.emerald100} /> <path d="M-20 0 l15 15 30 -30" stroke={color.emerald600} strokeWidth="8" fill="none"/> </g>
    <g transform="translate(600, 200)"> <rect x="0" y="0" width="80" height="30" rx="15" fill={color.cyan500} /> <text x="40" y="20" fill="white" textAnchor="middle">Shortlisted</text> </g>
  </svg>
);
// 5. Step 5 – Telephonic or Virtual Interview
const Sec5_VirtualInterviewSVG = (props) => ( // Reusing from Selection Process Sec 5
  <svg viewBox="0 0 800 380" role="img" aria-label="Telephonic or Virtual Interview" {...props}>
    <BG id="gSec5" stops={[{ offset: "0%", color: color.emerald50 }, { offset: "100%", color: color.cyan50 }]} /> <rect x="0" y="0" width="800" height="380" rx="20" fill="url(#gSec5)" />
    <g transform="translate(150, 100)"> <circle cx="0" cy="0" r="50" fill="#F5D0A6" /> <rect x="-40" y="50" width="80" height="130" rx="10" fill={color.indigo600} /> <path d="M-40 -10 C -60 -10, -60 50, -40 50" stroke={color.slate700} strokeWidth="8" fill="none"/> <rect x="-50" y="10" width="20" height="20" fill={color.slate700}/> </g>
    <g transform="translate(400, 80)"> <rect x="0" y="0" width="300" height="200" rx="15" fill={color.slate900} /> <rect x="10" y="10" width="280" height="180" rx="8" fill={color.white} /> <circle cx="150" cy="100" r="50" fill={color.slate200}/> </g>
  </svg>
);
// 6. Document Verification (New/Specific) - Combining Doc + Check
const Sec6_DocVerifySVG = (props) => (
  <svg viewBox="0 0 800 380" role="img" aria-label="Document Verification" {...props}>
    <BG id="gSec6" stops={[{ offset: "0%", color: color.indigo50 }, { offset: "100%", color: color.slate200 }]} /> <rect x="0" y="0" width="800" height="380" rx="20" fill="url(#gSec6)" />
    <g transform="translate(100, 60)"> <Card x="0" y="0" w="300" h="260" r="12" /> <text x="20" y="50" fontSize="20" fontWeight="bold">Original Document</text> <rect x="20" y="80" width="260" height="8" rx="4" fill={color.slate400} /> </g>
    <g transform="translate(450, 80)"> <path d="M100 0 L 180 40 V 120 C 180 200, 100 250, 100 250 C 100 250, 20 200, 20 120 V 40 Z" fill={color.emerald100} stroke={color.emerald600} strokeWidth="6" /> <path d="M60 110 L 90 140 L 140 90" stroke={color.emerald600} strokeWidth="12" fill="none" strokeLinecap="round" /> <animateTransform attributeName="transform" type="scale" values="1;1.02;1" dur="1.5s" repeatCount="indefinite" transform-origin="550 205" /> </g>
  </svg>
);
// 7. Data Privacy and Confidentiality
const Sec7_PrivacySVG = (props) => ( // Reusing from Selection Process Sec 7
  <svg viewBox="0 0 800 380" role="img" aria-label="Data Privacy & Confidentiality" {...props}>
    <BG id="gSec7" stops={[{ offset: "0%", color: color.slate200 }, { offset: "100%", color: color.indigo50 }]} /> <rect x="0" y="0" width="800" height="380" rx="20" fill="url(#gSec7)" />
    <g transform="translate(150, 80)"> <rect x="0" y="0" width="300" height="250" rx="15" fill={color.slate700} stroke={color.slate900} strokeWidth="6" /> <rect x="20" y="20" width="260" height="210" rx="8" fill={color.slate500} /> <circle cx="150" cy="125" r="80" fill={color.slate400} stroke={color.slate900} strokeWidth="4" /> <circle cx="150" cy="125" r="20" fill={color.slate700} /> <line x1="150" y1="125" x2="210" y2="125" stroke={color.slate900} strokeWidth="8" /> </g>
    <g transform="translate(500, 100)"> <Card x="0" y="0" w="180" h="180" r="12" /> <text x="20" y="40" fontFamily="sans-serif" fontSize="18" fill={color.slate700}>Applicant Data</text> <g transform="translate(90, 100)"> <rect x="-30" y="0" width="60" height="45" rx="10" fill={color.slate500} /> <path d="M0 -25 C 15 -25, 15 0, 0 0 S -15 -25, 0 -25 Z" stroke={color.slate700} strokeWidth="8" fill="none" /> </g> </g>
  </svg>
);
// 8. Legal Compliance and Transparency
const Sec8_LegalComplianceSVG = (props) => ( // Reusing from Selection Process Sec 8
  <svg viewBox="0 0 800 380" role="img" aria-label="Legal Compliance & Transparency" {...props}>
    <BG id="gSec8" stops={[{ offset: "0%", color: color.amber50 }, { offset: "100%", color: color.indigo50 }]} /> <rect x="0" y="0" width="800" height="380" rx="20" fill="url(#gSec8)" />
    <g transform="translate(150, 100)"> <path d="M0 0 H 300" stroke={color.slate700} strokeWidth="6" /> <path d="M150 0 V 50" stroke={color.slate700} strokeWidth="6" /> <g transform="translate(50, 50)"> <path d="M0 0 L -40 100 L 40 100 Z" fill={color.amber100} stroke={color.amber500} strokeWidth="3" /> <path d="M0 0 V -30" stroke={color.slate700} strokeWidth="4" /> </g> <g transform="translate(250, 50)"> <path d="M0 0 L -40 100 L 40 100 Z" fill={color.amber100} stroke={color.amber500} strokeWidth="3" /> <path d="M0 0 V -30" stroke={color.slate700} strokeWidth="4" /> </g> <animateTransform attributeName="transform" type="rotate" values="150 100 -2; 150 100 2; 150 100 -2" dur="2.5s" repeatCount="indefinite" transform-origin="150 0" /> </g>
    <g transform="translate(550, 120)"> <circle cx="0" cy="0" r="60" fill={color.white} stroke={color.indigo600} strokeWidth="4" /> <text x="0" y="5" fontSize="16" fontWeight="bold" fill={color.indigo600} textAnchor="middle">Section 8</text> <text x="0" y="25" fontFamily="sans-serif" fontSize="14" fill={color.indigo600} textAnchor="middle">Compliant</text> </g>
  </svg>
);
// 9. Application Fee Policy
const Sec9_FeePolicySVG = (props) => ( // Reusing from Selection Process Sec 9
  <svg viewBox="0 0 800 380" role="img" aria-label="Application Fee Policy" {...props}>
    <BG id="gSec9" stops={[{ offset: "0%", color: color.emerald50 }, { offset: "100%", color: color.cyan50 }]} /> <rect x="0" y="0" width="800" height="380" rx="20" fill="url(#gSec9)" />
    <g transform="translate(150, 100)"> <rect x="0" y="0" width="150" height="100" rx="10" fill={color.white} stroke={color.emerald600} strokeWidth="4" /> <text x="75" y="40" fontSize="14" fill={color.slate700} textAnchor="middle">Official</text> <text x="75" y="60" fontSize="14" fill={color.slate700} textAnchor="middle">Gateway</text> <path d="M50 70 l20 20 30-30" stroke={color.emerald600} strokeWidth="6" fill="none" /> </g>
    <g transform="translate(400, 100)"> <circle cx="0" cy="0" r="60" fill={color.emerald600} /> <text x="0" y="15" fontSize="50" fontWeight="bold" fill={color.white} textAnchor="middle">₹</text> </g>
    <g transform="translate(550, 150)"> <circle cx="0" cy="0" r="50" fill={color.rose100} stroke={color.rose600} strokeWidth="4" /> <line x1="-30" y1="-30" x2="30" y2="30" stroke={color.rose600} strokeWidth="6" /> <line x1="-30" y1="30" x2="30" y2="-30" stroke={color.rose600} strokeWidth="6" /> <text x="0" y="70" textAnchor="middle" fill={color.rose600}>No Cash</text> </g>
  </svg>
);
// 10. Recruitment Process (Post-Wise) - Flowchart
const Sec10_ProcessWiseSVG = (props) => ( // Reusing from Selection Process Sec 13 (renamed)
 <svg viewBox="0 0 800 380" role="img" aria-label="Recruitment Process (Post-Wise)" {...props}>
    <BG id="gSec13" stops={[{ offset: "0%", color: color.indigo50 }, { offset: "100%", color: color.cyan50 }]} /> <rect x="0" y="0" width="800" height="380" rx="20" fill="url(#gSec13)" />
    <g fontFamily="sans-serif" fontSize="11" fill={color.slate700} textAnchor="middle">
      <rect x="20" y="20" width="100" height="30" rx="15" fill={color.emerald100} /> <text x="70" y="40">1. Register</text> <path d="M70 50 V 70" stroke={color.slate400} strokeWidth="2" />
      <rect x="20" y="70" width="100" height="30" rx="5" fill={color.white} /> <text x="70" y="90">2-4. Screen</text> <path d="M70 100 V 120" stroke={color.slate400} strokeWidth="2" />
      <rect x="20" y="120" width="100" height="30" rx="5" fill={color.white} /> <text x="70" y="140">5-8. Tests</text> <path d="M70 150 V 170" stroke={color.slate400} strokeWidth="2" />
      <rect x="20" y="170" width="100" height="30" rx="5" fill={color.white} /> <text x="70" y="190">9-10. Interview</text> <path d="M70 200 V 220" stroke={color.slate400} strokeWidth="2" />
      <rect x="20" y="220" width="100" height="30" rx="5" fill={color.white} /> <text x="70" y="240">11-13. Verify</text> <path d="M70 250 V 270" stroke={color.slate400} strokeWidth="2" />
      <rect x="20" y="270" width="100" height="30" rx="15" fill={color.emerald100} /> <text x="70" y="290">Onboard</text>
      <g transform="translate(150, 30)">
        <rect x="0" y="0" width="600" height="300" rx="10" fill={color.white} stroke={color.slate300} strokeWidth="2" /> <text x="300" y="30" fontSize="16" fontWeight="bold" textAnchor="middle">Recruitment Flow</text>
        <rect x="30" y="60" width="100" height="40" rx="8" fill={color.cyan100} /> <text x="80" y="85">Apply</text> <path d="M130 80 H 160 L 180 130 H 210" stroke={color.slate400} strokeWidth="2" fill="none" />
        <rect x="210" y="110" width="100" height="40" rx="8" fill={color.cyan100} /> <text x="260" y="135">Assess</text> <path d="M310 130 H 340 L 360 180 H 390" stroke={color.slate400} strokeWidth="2" fill="none" />
        <rect x="390" y="160" width="100" height="40" rx="8" fill={color.cyan100} /> <text x="440" y="185">Interview</text> <path d="M490 180 H 520 L 540 230 H 570" stroke={color.slate400} strokeWidth="2" fill="none" />
        <rect x="390" y="210" width="100" height="40" rx="8" fill={color.indigo100} /> <text x="440" y="235" fill={color.indigo800}>Tech Round</text> <path d="M490 230 H 520 L 540 230 H 570" stroke={color.slate400} strokeWidth="2" fill="none" />
        <rect x="30" y="210" width="100" height="40" rx="8" fill={color.emerald100} /> <text x="80" y="235" fill={color.emerald600}>Verify</text> <path d="M130 230 H 250 L 390 180" stroke={color.slate400} strokeWidth="2" fill="none" />
      </g>
    </g>
  </svg>
);
// 11. Application Submission Rules
const Sec11_AppRulesSVG = (props) => ( // Reusing from Selection Process Sec 11
  <svg viewBox="0 0 800 380" role="img" aria-label="Application Submission Rules" {...props}>
    <BG id="gSec11" stops={[{ offset: "0%", color: color.slate200 }, { offset: "100%", color: color.indigo50 }]} /> <rect x="0" y="0" width="800" height="380" rx="20" fill="url(#gSec11)" />
    <g transform="translate(100, 60)"> <Card x="0" y="0" w="400" h="280" r="12" stroke={color.slate300} sw="2" /> <text x="30" y="50" fontSize="24" fontWeight="bold" fill={color.indigo800}>Submission Rules</text> <text x="30" y="100" fontSize="20">• Read guidelines.</text> <text x="30" y="140" fontSize="20">• Agree to terms.</text> <text x="30" y="180" fontSize="20" fill={color.rose600}>• No modifications.</text> <text x="30" y="220" fontSize="20" fill={color.rose600}>• No appeals.</text> </g>
    <g transform="translate(550, 100)"> <circle cx="0" cy="0" r="80" fill={color.rose100} stroke={color.rose600} strokeWidth="6" /> <rect x="-60" y="-15" width="120" height="30" rx="10" fill={color.rose600} /> <text x="0" y="110" fontSize="18" fontWeight="bold" fill={color.rose600} textAnchor="middle">Final Submission</text> <animateTransform attributeName="transform" type="scale" values="1;1.02;1" dur="1.5s" repeatCount="indefinite" transform-origin="550 100" /> </g>
  </svg>
);
// 12. Fraud Alert and Contact Information
const Sec12_FraudAlertSVG = (props) => ( // Reusing from Selection Process Sec 14 (renamed)
 <svg viewBox="0 0 800 380" role="img" aria-label="Fraud Alert & Contact Information" {...props}>
    <BG id="gSec14" stops={[{ offset: "0%", color: color.rose50 }, { offset: "100%", color: color.amber50 }]} /> <rect x="0" y="0" width="800" height="380" rx="20" fill="url(#gSec14)" />
    <g transform="translate(100, 80)"> <polygon points="150 0, 300 250, 0 250" fill={color.rose100} stroke={color.rose600} strokeWidth="6" /> <text x="150" y="150" fontFamily="sans-serif" fontSize="120" fontWeight="bold" fill={color.rose600} textAnchor="middle">!</text> <animateTransform attributeName="transform" type="scale" values="1;1.02;1" dur="1s" repeatCount="indefinite" transform-origin="250 210" /> </g>
    <g transform="translate(450, 100)"> <text x="0" y="0" fontSize="24" fontWeight="bold" fill={color.rose600}>ALERT: NO FEES</text> <circle cx="0" cy="80" r="50" fill={color.white} stroke={color.rose600} strokeWidth="5" /> <line x1="-30" y1="50" x2="30" y2="110" stroke={color.rose600} strokeWidth="8" /> <line x1="-30" y1="110" x2="30" y2="50" stroke={color.rose600} strokeWidth="8" /> <text x="0" y="85" fontSize="40" fill={color.rose600} textAnchor="middle">₹</text> </g>
    <g transform="translate(620, 180)"> <circle cx="0" cy="0" r="50" fill={color.white} stroke={color.rose600} strokeWidth="5" /> <line x1="-30" y1="-30" x2="30" y2="30" stroke={color.rose600} strokeWidth="8" /> <line x1="-30" y1="30" x2="30" y2="-30" stroke={color.rose600} strokeWidth="8" /> <text x="0" y="10" fontSize="18" fill={color.rose600} textAnchor="middle">Agents</text> </g>
  </svg>
);
// 13. Important Note and Final Decision
const Sec13_ImportantNoteSVG = (props) => ( // Reusing from Selection Process Sec 9 (renamed)
 <svg viewBox="0 0 800 380" role="img" aria-label="Important Note" {...props}>
    <BG id="gSec9" stops={[{ offset: "0%", color: color.indigo50 }, { offset: "100%", color: color.slate200 }]} /> <rect x="0" y="0" width="800" height="380" rx="20" fill="url(#gSec9)" />
    <g transform="translate(150, 80)"> <Card x="0" y="0" w="500" h="250" r="12" /> <rect x="240" y="250" width="20" height="50" fill={color.slate400} /> <rect x="180" y="300" width="140" height="20" rx="10" fill={color.slate400} /> <text x="150" y="100" fontSize="24" fontWeight="bold" fill={color.slate700}>Important Note</text> <text x="50" y="150" fontSize="18" fill={color.slate700}>Submission ≠ Guarantee</text> <text x="50" y="180" fontSize="18" fill={color.slate700}>Decisions Final</text> </g>
  </svg>
);
// 14. Legal Disclaimer
const Sec14_LegalDisclaimerSVG = (props) => ( // Reusing from Selection Process Sec 14 (renamed)
 <svg viewBox="0 0 800 380" role="img" aria-label="Legal Disclaimer" {...props}>
    <BG id="gSec14" stops={[{ offset: "0%", color: color.slate200 }, { offset: "100%", color: color.amber50 }]} /> <rect x="0" y="0" width="800" height="380" rx="20" fill="url(#gSec14)" />
    <g transform="translate(100, 150)"> <rect x="0" y="0" width="220" height="40" rx="10" fill={color.amber500} stroke={color.slate700} strokeWidth="2" transform="rotate(-20)" /> <rect x="80" y="-80" width="30" height="100" rx="8" fill={color.amber500} stroke={color.slate700} strokeWidth="2" transform="rotate(-20)" /> <rect x="20" y="100" width="160" height="30" rx="15" fill={color.slate700} opacity="0.1" /> </g>
    <g transform="translate(380, 80)"> <Card x="0" y="0" w="320" h="220" r="12" stroke={color.slate400} sw="2" /> <text x="20" y="50" fontSize="24" fontWeight="bold" fill={color.slate700}>Legal Disclaimer</text> <rect x="20" y="80" width="280" height="6" rx="3" fill={color.slate400} /> <circle cx="260" cy="170" r="40" fill={color.indigo600} /> <text x="260" y="175" fontSize="14" fontWeight="bold" fill={color.white} textAnchor="middle">Section 8</text> </g>
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
export default function ReqruitmentInstructions() { // Corrected component name casing
  const { container, itemUp } = useAnims();
  const heroRef = useRef(null);
  const { scrollYProgress } = useScroll({ target: heroRef, offset: ["start start", "end start"] });
  const heroY = useTransform(scrollYProgress, [0, 1], [0, -40]);

  // Map section IDs to SVG components (14 defined)
  const svgMap = {
    'sec1-step-1-registration-and-candidate-conduct': Sec1_RegistrationConductSVG,
    'sec2-step-2-application-submission-and-document-validation': Sec2_SubmissionValidationSVG,
    'sec3-step-3-verification-screening-and-compliance': Sec3_VerificationScreeningSVG,
    'sec4-step-4-acknowledgement-verification-and-shortlisting': Sec4_AcknowledgeVerifySVG,
    'sec5-step-5-telephonic-or-virtual-interview': Sec5_VirtualInterviewSVG,
    'sec6-step-6-document-verification': Sec6_DocVerifySVG, // Uses the new specific SVG
    'sec7-data-privacy-and-confidentiality': Sec7_PrivacySVG,
    'sec8-legal-compliance-and-transparency': Sec8_LegalComplianceSVG,
    'sec9-application-fee-policy': Sec9_FeePolicySVG,
    'sec10-recruitment-process-post-wise': Sec10_ProcessWiseSVG,
    'sec11-application-submission-rules': Sec11_AppRulesSVG,
    'sec12-fraud-alert-and-contact-information': Sec12_FraudAlertSVG,
    'sec13-important-note-and-final-decision': Sec13_ImportantNoteSVG,
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
        <span className="text-gray-700" aria-current="page">Recruitment Instructions</span> {/* Updated text */}
      </motion.nav>

      {/* Hero with Video-SVG (instructions scene) */}
      <div ref={heroRef} className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-6 md:gap-8 lg:gap-10 items-center">
        <motion.div variants={itemUp}>
          <h1 className="text-[22px] sm:text-3xl font-bold text-gray-900">{data.title}</h1>
          <div className="mt-3 sm:mt-4 flex flex-wrap gap-2">
            {["Recruitment", "Instructions", "Policy", "Official Portal"].map((pill) => (
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
              <VideoHeroInstructions
                src="/assets/video/recruitment-instructions-hero.mp4"
                poster="/assets/video/recruitment-instructions-hero.jpg"
              />
            </div>
          </div>
        </motion.div>
      </div>

      {/* Sections */}
      <div className="mt-8 sm:mt-10 md:mt-12">
        {/* Iterate over the imported data */}
        {recruitmentInstructionsData.map((sec, idx) => {
          // Use the updated svgMap, fallback to the first SVG if ID mismatch
          const SVGComp = svgMap[sec.id] || Sec1_RegistrationConductSVG;
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