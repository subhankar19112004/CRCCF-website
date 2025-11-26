// src/pages/careers/EmployeeRightsAndResponsibility.jsx
import React, { useRef } from "react";
import { Link } from "react-router-dom";
import { motion, useReducedMotion, useScroll, useTransform, useSpring } from "framer-motion";
// Correct import path and variable name as per your data file
import { employeeRightsAndResponsibilitiesData } from '../../data/recruitment_rules_policies/employeeRightsAndResponsibilityData'
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
  title: "Employee Rights & Responsibilities",
  // Tagline will be pulled per section from the imported data
};

/* -------------------------- HERO: Video SVG (inline) -------------------------- */
/* Scene: Balanced scales (rights) on one side, person working responsibly (responsibilities) on the other. */
const VideoHeroRightsResp = ({ src = "", poster = "" }) => {
  const prefersReduced =
    typeof window !== "undefined" &&
    window.matchMedia &&
    window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  const title = "CRCCF Employee Rights & Responsibilities Hero";
  const desc =
    "Scales representing rights balanced with a figure working responsibly. The background is a masked video or a soft gradient.";

  // Fallback: animated gradient stage + overlay
  if (prefersReduced || !src) {
    return (
      <svg viewBox="0 0 1000 460" role="img" aria-labelledby="rrTitle rrDesc" className="w-full h-auto">
        <title id="rrTitle">{title}</title>
        <desc id="rrDesc">{desc}</desc>
        <defs>
          <linearGradient id="rrGrad" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor={color.indigo100}>
              <animate attributeName="offset" values="0;0.15;0" dur="8s" repeatCount="indefinite" />
            </stop>
            <stop offset="55%" stopColor={color.amber100}>
              <animate attributeName="offset" values="0.55;0.85;0.55" dur="8s" repeatCount="indefinite" />
            </stop>
            <stop offset="100%" stopColor={color.cyan100} />
          </linearGradient>
          <filter id="rrSoft" x="-20%" y="-20%" width="140%" height="140%">
            <feGaussianBlur in="SourceGraphic" stdDeviation="8" result="b" />
            <feColorMatrix in="b" type="matrix" values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 .6 0" />
          </filter>
          <clipPath id="rrStage">
            <rect x="40" y="36" width="640" height="388" rx="26" />
          </clipPath>
        </defs>

        <g filter="url(#rrSoft)">
          <rect x="0" y="0" width="1000" height="460" rx="28" fill="url(#rrGrad)" />
        </g>
        <g clipPath="url(#rrStage)">
          <rect x="0" y="0" width="1000" height="460" fill="url(#rrGrad)">
            <animate attributeName="x" values="0;22;0" dur="8s" repeatCount="indefinite" />
          </rect>
        </g>

        {RightsRespOverlay()}
      </svg>
    );
  }

  // Main masked video version with overlay
  return (
    <svg viewBox="0 0 1000 460" className="w-full h-auto block" role="img" aria-label={title}>
      <defs>
        <linearGradient id="rrBG" x1="0" y1="0" x2="1" y2="1">
           <stop offset="0%" stopColor={color.indigo100} />
           <stop offset="55%" stopColor={color.amber100} />
           <stop offset="100%" stopColor={color.cyan100} />
        </linearGradient>
        <filter id="rrSoft2" x="-20%" y="-20%" width="140%" height="140%">
          <feGaussianBlur in="SourceGraphic" stdDeviation="8" result="b" />
          <feColorMatrix in="b" type="matrix" values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 .6 0" />
        </filter>
        <clipPath id="rrStage2">
          <rect x="40" y="36" width="640" height="388" rx="26" />
        </clipPath>
      </defs>

      <g filter="url(#rrSoft2)">
        <rect x="0" y="0" width="1000" height="460" rx="28" fill="url(#rrBG)" />
      </g>

      {/* poster + masked video */}
      <g clipPath="url(#rrStage2)">
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

      {RightsRespOverlay()}
    </svg>
  );
};

/* ----------------------- Overlay: rights & responsibilities scene ----------------------- */
function RightsRespOverlay() {
  return (
    <g transform="translate(680, 50)">
      {/* Scales (Rights) */}
      <g transform="translate(40, 100)">
        <path d="M0 0 H 120" stroke={color.slate700} strokeWidth="4" /> <path d="M60 0 V 20" stroke={color.slate700} strokeWidth="4" />
        <g transform="translate(20, 20)"><path d="M0 0 L -20 50 L 20 50 Z" fill={color.amber100} stroke={color.amber500}/><path d="M0 0 V -10" stroke={color.slate700} strokeWidth="2"/></g>
        <g transform="translate(100, 20)"><path d="M0 0 L -20 50 L 20 50 Z" fill={color.amber100} stroke={color.amber500}/><path d="M0 0 V -10" stroke={color.slate700} strokeWidth="2"/></g>
        <animateTransform attributeName="transform" type="rotate" values="40 100 0; 40 100 0" dur="3s" repeatCount="indefinite" transform-origin="60 0" /> {/* Balanced */}
      </g>
      {/* Figure Working (Responsibilities) */}
      <g transform="translate(200, 150)">
         <rect x="0" y="80" width="70" height="120" rx="15" fill={color.cyan500}/>
         <circle cx="35" cy="50" r="30" fill="#F5D0A6"/>
         {/* Gear */}
         <g transform="translate(-30, 100)">
            <circle cx="0" cy="0" r="20" fill={color.slate400}/>
            <circle cx="0" cy="0" r="8" fill={color.white}/>
            {[0, 90, 180, 270].map(a => <rect key={a} x="-4" y="-23" width="8" height="6" fill={color.slate400} transform={`rotate(${a})`}/>)}
            <animateTransform attributeName="transform" type="rotate" values="-30 100 0; -30 100 360" dur="4s" repeatCount="indefinite" transform-origin="0 0"/>
         </g>
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

// 1. Purpose & Overview
const Sec1_PurposeOverviewSVG = (props) => (
  <svg viewBox="0 0 800 380" role="img" aria-label="Purpose and Overview" {...props}>
    <BG id="gSec1" stops={[{ offset: "0%", color: color.indigo50 }, { offset: "100%", color: color.cyan50 }]} />
    <SoftGlow id="glowSec1" std={10} alpha={0.4} />
    <rect x="0" y="0" width="800" height="380" rx="20" fill="url(#gSec1)" />
    {/* Open Book (Policy) */}
    <g transform="translate(100, 80)">
      {/* Corrected stroke syntax and added '/>' */}
      <path d="M50 30 C 150 -30, 250 -30, 350 30 L 350 250 C 250 190, 150 190, 50 250 Z" fill={color.white} stroke={color.slate300} strokeWidth="3" />
      {/* Corrected stroke syntax and added '/>' */}
      <path d="M200 35 V 245" stroke={color.slate300} strokeWidth="2" />
      <text x="70" y="70" fontSize="20" fontWeight="bold">Policy</text>
    </g>
    {/* Scales */}
    <g transform="translate(500, 120)">
      <path d="M0 0 H 150" stroke={color.slate700} strokeWidth="5"/>
      <path d="M75 0 V 30" stroke={color.slate700} strokeWidth="5"/>
      <g transform="translate(20, 30)">
        <path d="M0 0 L -25 50 L 25 50 Z" fill={color.amber100} stroke={color.amber500}/>
        {/* Removed stray quote */}
        <path d="M0 0 V -15" stroke={color.slate700} />
      </g>
      <g transform="translate(130, 30)">
        <path d="M0 0 L -25 50 L 25 50 Z" fill={color.amber100} stroke={color.amber500}/>
        {/* Removed stray quote */}
        <path d="M0 0 V -15" stroke={color.slate700} />
      </g>
      <animateTransform attributeName="transform" type="rotate" values="500 120 0; 500 120 0" dur="3s" repeatCount="indefinite" transformOrigin="75 0"/> {/* Corrected attribute casing */}
    </g>
  </svg>
);
// 2. Scope & Applicability
const Sec2_ScopeSVG = (props) => ( // Reusing SVG
  <svg viewBox="0 0 800 380" role="img" aria-label="Scope and Applicability" {...props}>
     <BG id="gSec2" stops={[{ offset: "0%", color: color.cyan25 }, { offset: "100%", color: color.indigo50 }]} /> <rect x="0" y="0" width="800" height="380" rx="20" fill="url(#gSec2)" />
     <g transform="translate(400, 190)"> <circle cx="0" cy="0" r="50" fill={color.indigo600}/> <text x="0" y="10" fontSize="24" fill="white" textAnchor="middle">C</text> </g>
     <g stroke={color.slate400} strokeWidth="3" fill="none"> <path d="M400 140 V 80 H 200 V 60"/> <path d="M400 140 V 80 H 600 V 60"/> <path d="M400 240 V 300 H 200 V 320"/> <path d="M400 240 V 300 H 600 V 320"/> </g>
     <g transform="translate(180, 20)"><circle cx="0" cy="0" r="20"/><rect x="-15" y="20" width="30" height="40" rx="5"/><text y="75" textAnchor="middle" fontSize="12">Employee</text></g>
     <g transform="translate(580, 20)"><circle cx="0" cy="0" r="20"/><rect x="-15" y="20" width="30" height="40" rx="5"/><text y="75" textAnchor="middle" fontSize="12">Intern</text></g>
     <g transform="translate(180, 300)"><circle cx="0" cy="0" r="20"/><rect x="-15" y="20" width="30" height="40" rx="5"/><text y="75" textAnchor="middle" fontSize="12">Volunteer</text></g>
     <g transform="translate(580, 300)"><circle cx="0" cy="0" r="20"/><rect x="-15" y="20" width="30" height="40" rx="5"/><text y="75" textAnchor="middle" fontSize="12">Partner</text></g>
  </svg>
);
// 3. Right to Fair Employment & Equal Opportunity
const Sec3_FairEmploymentSVG = (props) => ( // Reusing SVG
  <svg viewBox="0 0 800 380" role="img" aria-label="Fair Employment & Equal Opportunity" {...props}>
    <BG id="gSec3" stops={[{ offset: "0%", color: color.emerald50 }, { offset: "100%", color: color.cyan50 }]} /> <rect x="0" y="0" width="800" height="380" rx="20" fill="url(#gSec3)" />
    <g transform="translate(100, 100)"> <circle cx="0" cy="0" r="40" fill="#F5D0A6" /><rect x="-30" y="40" width="60" height="120" rx="10"/> <circle cx="120" cy="0" r="40" fill="#A0522D" /><rect x="90" y="40" width="60" height="120" rx="10"/> <circle cx="240" cy="40" r="40" fill="#F5D0A6" /><rect x="210" y="80" width="60" height="80" rx="10"/><circle cx="210" cy="180" r="30" fill="none" stroke="black" strokeWidth="6"/><circle cx="270" cy="180" r="30" fill="none" stroke="black" strokeWidth="6"/> <circle cx="360" cy="0" r="40" fill="#A0522D" /><rect x="330" y="40" width="60" height="120" rx="10"/> <circle cx="480" cy="0" r="40" fill="#F5D0A6" /><rect x="450" y="40" width="60" height="120" rx="10"/> </g>
    <g transform="translate(620, 150)"> <path d="M0 0 L 30 30 L 60 0 L 80 20 L 40 60 L 20 40 Z"/> <path d="M0 30 L 30 0 L 60 30 L 80 10 L 40 -30 L 20 -10 Z"/> <animateTransform attributeName="transform" type="translate" values="620 150; 620 145; 620 150" dur="1s" repeatCount="indefinite"/> </g>
  </svg>
);
// 4. Right to Lawful Employment & Compliance Assurance
const Sec4_LawfulEmploymentSVG = (props) => ( // Reusing SVG
  <svg viewBox="0 0 800 380" role="img" aria-label="Lawful Employment and Compliance" {...props}>
    <BG id="gSec8" stops={[{ offset: "0%", color: color.amber50 }, { offset: "100%", color: color.indigo50 }]} /> <rect x="0" y="0" width="800" height="380" rx="20" fill="url(#gSec8)" />
    <g transform="translate(150, 100)"> <path d="M0 0 H 300" stroke={color.slate700} strokeWidth="6" /> <path d="M150 0 V 50" stroke={color.slate700} strokeWidth="6" /> <g transform="translate(50, 50)"> <path d="M0 0 L -40 100 L 40 100 Z" fill={color.amber100} stroke={color.amber500} /> </g> <g transform="translate(250, 50)"> <path d="M0 0 L -40 100 L 40 100 Z" fill={color.amber100} stroke={color.amber500} /> </g> </g>
    <g transform="translate(550, 120)"> <circle cx="0" cy="0" r="60" fill={color.white} stroke={color.indigo600}/> <text x="0" y="5" fontSize="16" fontWeight="bold" fill={color.indigo600} textAnchor="middle">Compliant</text> </g>
  </svg>
);
// 5. Right to Safe & Respectful Workplace
const Sec5_SafeWorkplaceSVG = (props) => (
  <svg viewBox="0 0 800 380" role="img" aria-label="Safe and Respectful Workplace" {...props}>
    <BG id="gSec5" stops={[{ offset: "0%", color: color.emerald50 }, { offset: "100%", color: color.cyan50 }]} /> <rect x="0" y="0" width="800" height="380" rx="20" fill="url(#gSec5)" />
    {/* Shield */}
    <g transform="translate(150, 80)"> <path d="M100 0 L 180 40 V 120 C 180 200, 100 250, 100 250 C 100 250, 20 200, 20 120 V 40 Z" fill={color.emerald100} stroke={color.emerald600} strokeWidth="6" /> <text x="100" y="140" fontSize="20" fontWeight="bold" textAnchor="middle">SAFE</text> </g>
    {/* Figures with space */}
    <g transform="translate(450, 120)"> <circle cx="0" cy="0" r="30"/><rect x="-20" y="30" width="40" height="80" rx="8"/> <circle cx="150" cy="0" r="30"/><rect x="130" y="30" width="40" height="80" rx="8"/> </g>
  </svg>
);
// 6. Right to Privacy & Data Protection
const Sec6_PrivacySVG = (props) => ( // Reusing SVG
  <svg viewBox="0 0 800 380" role="img" aria-label="Privacy & Data Protection" {...props}>
    <BG id="gSec7" stops={[{ offset: "0%", color: color.slate200 }, { offset: "100%", color: color.indigo50 }]} /> <rect x="0" y="0" width="800" height="380" rx="20" fill="url(#gSec7)" />
    <g transform="translate(150, 80)"> <rect x="0" y="0" width="300" height="250" rx="15" fill={color.slate700}/> <rect x="20" y="20" width="260" height="210" rx="8" fill={color.slate500}/> <circle cx="150" cy="125" r="80" fill={color.slate400}/> <circle cx="150" cy="125" r="20" fill={color.slate700}/> <line x1="150" y1="125" x2="210" y2="125" stroke={color.slate900} strokeWidth="8"/> </g>
    <g transform="translate(500, 100)"> <Card x="0" y="0" w="180" h="180" r="12" /> <text x="20" y="40">Personal Data</text> <g transform="translate(90, 100)"> <rect x="-30" y="0" width="60" height="45" rx="10" fill={color.slate500} /> <path d="M0 -25 C 15 -25, 15 0, 0 0 S -15 -25, 0 -25 Z" stroke={color.slate700} strokeWidth="8" fill="none" /> </g> </g>
  </svg>
);
// 7. Right to Training, Growth & Development
const Sec7_TrainingGrowthSVG = (props) => ( // Reusing SVG
  <svg viewBox="0 0 800 380" role="img" aria-label="Training, Growth, Development" {...props}>
    <BG id="gSec1" stops={[{ offset: "0%", color: color.indigo50 }, { offset: "100%", color: color.cyan50 }]} /> <rect x="0" y="0" width="800" height="380" rx="20" fill="url(#gSec1)" />
    <g transform="translate(100, 100)"> <circle cx="0" cy="0" r="40" fill="#F5D0A6" /> <rect x="-30" y="40" width="60" height="120" rx="10" fill={color.indigo100} /> </g>
    <g transform="translate(180, 80)"> <path d="M0 220 C 150 220, 200 50, 350 50 S 500 220, 550 220" stroke={color.slate300} strokeWidth="12" fill="none" /> <path d="M0 220 C 150 220, 200 50, 350 50" stroke={color.emerald600} strokeWidth="12" fill="none" strokeDasharray="350" strokeDashoffset="350"> <animate attributeName="stroke-dashoffset" values="350;0" dur="2.5s" repeatCount="indefinite" /> </path> <g transform="translate(350, 10)"> <circle cx="0" cy="0" r="30" fill={color.white} stroke={color.amber500}/> <text y="10" textAnchor="middle">Growth</text> </g> </g>
  </svg>
);
// 8. Right to Representation & Communication
const Sec8_RepresentationSVG = (props) => ( // Reusing SVG
  <svg viewBox="0 0 800 380" role="img" aria-label="Representation and Communication" {...props}>
    <BG id="gSec5" stops={[{ offset: "0%", color: color.cyan50 }, { offset: "100%", color: color.indigo50 }]} /> <rect x="0" y="0" width="800" height="380" rx="20" fill="url(#gSec5)" />
    <g transform="translate(180, 100)"> <circle cx="0" cy="0" r="50" fill="#F5D0A6" /> <rect x="-40" y="50" width="80" height="130" rx="10" fill={color.indigo600} /> <g transform="translate(80, 0)"> <line x1="0" y1="-20" x2="50" y2="-20" stroke={color.cyan500} strokeWidth="6"> <animate attributeName="x2" values="50;70;50" dur="1.5s" repeatCount="indefinite" /> </line> </g> </g>
    <g transform="translate(450, 120)"> <circle cx="0" cy="0" r="30" fill={color.slate300} /> <rect x="-20" y="30" width="40" height="60" rx="8"/> <circle cx="80" cy="0" r="30" fill={color.slate300} /> <rect x="60" y="30" width="40" height="60" rx="8"/> </g>
  </svg>
);
// 9. Employee Responsibilities Toward CRCCF
const Sec9_ResponsibilitiesSVG = (props) => (
  <svg viewBox="0 0 800 380" role="img" aria-label="Employee Responsibilities" {...props}>
    <BG id="gSec9" stops={[{ offset: "0%", color: color.emerald50 }, { offset: "100%", color: color.cyan50 }]} /> <rect x="0" y="0" width="800" height="380" rx="20" fill="url(#gSec9)" />
    {/* Person working at desk */}
    <g transform="translate(150, 120)"> <circle cx="0" cy="50" r="40" fill="#F5D0A6"/> <rect x="-30" y="90" width="60" height="100" rx="10" fill={color.indigo600}/> <rect x="-100" y="190" width="200" height="40" rx="10" fill={color.slate300}/> </g>
    {/* Checklist */}
    <g transform="translate(400, 80)" fontSize="18"> <text x="0" y="30">✅ Loyalty</text> <text x="0" y="70">✅ Accountability</text> <text x="0" y="110">✅ Discipline</text> <text x="0" y="150">✅ Respect</text> </g>
  </svg>
);
// 10. Confidentiality & Information Protection
const Sec10_ConfidentialitySVG = (props) => ( // Reusing SVG
  <svg viewBox="0 0 800 380" role="img" aria-label="Confidentiality" {...props}>
    <BG id="gSec7" stops={[{ offset: "0%", color: color.slate200 }, { offset: "100%", color: color.indigo50 }]} /> <rect x="0" y="0" width="800" height="380" rx="20" fill="url(#gSec7)" />
    <g transform="translate(150, 80)"> <rect x="0" y="0" width="300" height="250" rx="15" fill={color.slate700}/> <rect x="20" y="20" width="260" height="210" rx="8" fill={color.slate500}/> <circle cx="150" cy="125" r="80" fill={color.slate400}/> <circle cx="150" cy="125" r="20" fill={color.slate700}/> <line x1="150" y1="125" x2="210" y2="125" stroke={color.slate900} strokeWidth="8"/> </g>
    <g transform="translate(500, 100)"> <Card x="0" y="0" w="180" h="180" r="12" /> <text x="20" y="40">Confidential</text> <g transform="translate(90, 100)"> <rect x="-30" y="0" width="60" height="45" rx="10" fill={color.slate500} /> <path d="M0 -25 C 15 -25, 15 0, 0 0 S -15 -25, 0 -25 Z" stroke={color.slate700} strokeWidth="8" fill="none" /> </g> </g>
  </svg>
);
// 11. Ethical & Behavioural Conduct
const Sec11_EthicalConductSVG = (props) => ( // Reusing SVG
  <svg viewBox="0 0 800 380" role="img" aria-label="Ethical Conduct" {...props}>
    <BG id="gEthics" stops={[{ offset: "0%", color: color.indigo25 }, { offset: "100%", color: color.emerald50 }]} /> <rect x="0" y="0" width="800" height="380" rx="20" fill="url(#gEthics)" />
    <g transform="translate(150, 100)"> <path d="M0 0 H 200" stroke={color.slate700} strokeWidth="5" /> <path d="M100 0 V 30" stroke={color.slate700} strokeWidth="5" /> <g transform="translate(30, 30)"><path d="M0 0 L -30 70 L 30 70 Z" fill={color.amber100} stroke={color.amber500}/> </g> <g transform="translate(170, 30)"><path d="M0 0 L -30 70 L 30 70 Z" fill={color.amber100} stroke={color.amber500}/> </g> </g>
    <g transform="translate(500, 120)"> <circle cx="0" cy="0" r="80" fill={color.emerald100} stroke={color.emerald600}/> <path d="M-40 0 L -10 30 L 50 -30" stroke={color.emerald600} strokeWidth="12" fill="none"/> </g>
  </svg>
);
// 12. Attendance, Timeliness & Accountability
const Sec12_AttendanceSVG = (props) => ( // Reusing SVG
  <svg viewBox="0 0 800 380" role="img" aria-label="Attendance and Timeliness" {...props}>
    <BG id="gSec5" stops={[{ offset: "0%", color: color.cyan50 }, { offset: "100%", color: color.indigo50 }]} /> <rect x="0" y="0" width="800" height="380" rx="20" fill="url(#gSec5)" />
    <g transform="translate(180, 100)"> <circle cx="0" cy="0" r="80" fill="white" stroke={color.slate300}/> <line x1="0" y1="0" x2="0" y2="-50" stroke={color.slate700} strokeWidth="6"/> <line x1="0" y1="0" x2="40" y2="0" stroke={color.slate700} strokeWidth="6"> <animateTransform attributeName="transform" type="rotate" values="0 0 0; 360 0 0" dur="5s" repeatCount="indefinite" transform-origin="0 0"/> </line> <text x="0" y="110" fontSize="18" textAnchor="middle">Punctuality</text> </g>
    <g transform="translate(450, 80)"> <Card x="0" y="0" w="200" h="200" r="12"/> <text x="20" y="40">Task Log</text> <path d="M20 70 l10 10 20-20" stroke={color.emerald600} strokeWidth="5" fill="none"/> <rect x="60" y="65" width="100" height="6" rx="3" fill={color.slate400}/> </g>
  </svg>
);
// 13. Use of Digital Resources & Cyber Responsibility
const Sec13_DigitalResourcesSVG = (props) => ( // Reusing SVG
  <svg viewBox="0 0 800 380" role="img" aria-label="Digital Resources & Responsibility" {...props}>
     <BG id="gSec6" stops={[{ offset: "0%", color: color.cyan50 }, { offset: "100%", color: color.indigo50 }]} /> <rect x="0" y="0" width="800" height="380" rx="20" fill="url(#gSec6)" />
     <g transform="translate(150, 80)"> <rect x="0" y="0" width="300" height="200" rx="15" fill={color.slate900}/> <rect x="10" y="10" width="280" height="180" rx="8" fill={color.white}/> <rect x="-10" y="200" width="320" height="15" rx="8" fill={color.slate400}/> <g transform="translate(100, 50)"> <path d="M50 0l70 30v40c0 50-28 85-70 105" fill={color.emerald100} stroke={color.emerald600}/> </g> </g>
     <g transform="translate(500, 100)"> <rect x="0" y="0" width="100" height="180" rx="8" fill={color.slate700}/> <rect x="10" y="15" width="80" height="25" rx="5" fill={color.emerald300}/> </g>
  </svg>
);
// 14. Social Media & Public Representation Policy
const Sec14_SocialMediaPolicySVG = (props) => ( // Reusing SVG
  <svg viewBox="0 0 800 380" role="img" aria-label="Social Media Policy" {...props}>
    <BG id="gSec10" stops={[{ offset: "0%", color: color.cyan50 }, { offset: "100%", color: color.indigo50 }]} /> <rect x="0" y="0" width="800" height="380" rx="20" fill="url(#gSec10)" />
    <g transform="translate(150, 80)"> <rect x="0" y="0" width="200" height="300" rx="20" fill={color.slate700}/> <rect x="10" y="10" width="180" height="280" rx="10" fill={color.white}/> <circle cx="100" cy="50" r="30" fill={color.indigo100}/> </g>
    <g transform="translate(450, 100)"> <path d="M0 0 L 30 30 L 80 -20" stroke={color.emerald600} strokeWidth="10" fill="none"/> <text x="0" y="60">Factual</text> </g>
    <g transform="translate(450, 200)"> <line x1="0" y1="0" x2="60" y2="60" stroke={color.rose600} strokeWidth="10"/> <line x1="0" y1="60" x2="60" y2="0" stroke={color.rose600} strokeWidth="10"/> <text x="0" y="90">Misinfo</text> </g>
  </svg>
);
// 15. Violation, Disciplinary Action & Legal Consequences
const Sec15_ViolationSVG = (props) => ( // Reusing SVG
  <svg viewBox="0 0 800 380" role="img" aria-label="Violation and Disciplinary Action" {...props}>
    <BG id="gSec13" stops={[{ offset: "0%", color: color.rose50 }, { offset: "100%", color: color.slate200 }]} /> <rect x="0" y="0" width="800" height="380" rx="20" fill="url(#gSec13)" />
    <g transform="translate(150, 120)"> <rect x="0" y="0" width="200" height="30" rx="8" fill={color.amber500} transform="rotate(-15)"/> <rect x="70" y="-70" width="30" height="90" rx="5" fill={color.amber500} transform="rotate(-15)"/> </g>
    <g transform="translate(400, 80)"> <Card x="0" y="0" w="280" h="200" r="12" /> <rect x="0" y="0" width="280" height="40" fill={color.rose100}/> <text x="20" y="28" fill={color.rose600} fontWeight="bold">Disciplinary Action</text> </g>
  </svg>
);
// 16. Legal Disclaimer & Final Assurance
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
export default function EmployeeRightsAndResponsibility() { // Using name from stub
  const { container, itemUp } = useAnims();
  const heroRef = useRef(null);
  const { scrollYProgress } = useScroll({ target: heroRef, offset: ["start start", "end start"] });
  const heroY = useTransform(scrollYProgress, [0, 1], [0, -40]);

  // Map section IDs to SVG components (16 defined)
  const svgMap = {
    'sec1-purpose-and-overview': Sec1_PurposeOverviewSVG,
    'sec2-scope-and-applicability': Sec2_ScopeSVG,
    'sec3-right-to-fair-employment-and-equal-opportunity': Sec3_FairEmploymentSVG,
    'sec4-right-to-lawful-employment-and-compliance-assurance': Sec4_LawfulEmploymentSVG,
    'sec5-right-to-safe-and-respectful-workplace': Sec5_SafeWorkplaceSVG,
    'sec6-right-to-privacy-and-data-protection': Sec6_PrivacySVG,
    'sec7-right-to-training-growth-and-development': Sec7_TrainingGrowthSVG,
    'sec8-right-to-representation-and-communication': Sec8_RepresentationSVG,
    'sec9-employee-responsibilities-toward-crccf': Sec9_ResponsibilitiesSVG,
    'sec10-confidentiality-and-information-protection': Sec10_ConfidentialitySVG,
    'sec11-ethical-and-behavioural-conduct': Sec11_EthicalConductSVG,
    'sec12-attendance-timeliness-and-accountability': Sec12_AttendanceSVG,
    'sec13-use-of-digital-resources-and-cyber-responsibility': Sec13_DigitalResourcesSVG,
    'sec14-social-media-and-public-representation-policy': Sec14_SocialMediaPolicySVG,
    'sec15-violation-disciplinary-action-and-legal-consequences': Sec15_ViolationSVG,
    'sec16-legal-disclaimer-and-final-assurance': Sec16_LegalDisclaimerSVG,
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
        <span className="text-gray-700" aria-current="page">Rights & Responsibilities</span> {/* Updated text */}
      </motion.nav>

      {/* Hero with Video-SVG (rights/responsibilities scene) */}
      <div ref={heroRef} className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-6 md:gap-8 lg:gap-10 items-center">
        <motion.div variants={itemUp}>
          <h1 className="text-[22px] sm:text-3xl font-bold text-gray-900">{data.title}</h1>
          <div className="mt-3 sm:mt-4 flex flex-wrap gap-2">
            {["Rights", "Responsibility", "Policy", "Ethics"].map((pill) => ( // Updated pills
              <span key={pill} className="px-2.5 sm:px-3 py-1.5 text-xs sm:text-sm rounded-full bg-cyan-100 text-cyan-800 border border-cyan-200">
                {pill}
              </span>
            ))}
          </div>
        </motion.div>

        <motion.div style={{ y: heroY }} className="relative">
          <div className="absolute -inset-2 rounded-2xl bg-gradient-to-tr from-indigo-100 via-amber-100 to-cyan-100 blur-md sm:blur-lg md:blur-xl" aria-hidden="true" />
          <div className="relative rounded-2xl border border-gray-200 bg-white p-3 sm:p-4 shadow-sm">
            <div className="w-full h-auto max-h-72 sm:max-h-80 md:max-h-none overflow-hidden">
              <VideoHeroRightsResp // Corrected Hero component name
                src="/assets/video/rights-resp-hero.mp4"
                poster="/assets/video/rights-resp-hero.jpg"
              />
            </div>
          </div>
        </motion.div>
      </div>

      {/* Sections */}
      <div className="mt-8 sm:mt-10 md:mt-12">
        {/* Iterate over the imported data */}
        {employeeRightsAndResponsibilitiesData.map((sec, idx) => { // Use correct data variable name
          // Use the updated svgMap, fallback to the first SVG if ID mismatch
          const SVGComp = svgMap[sec.id] || Sec1_PurposeOverviewSVG;
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