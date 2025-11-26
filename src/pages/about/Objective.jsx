// src/pages/about/Objective.jsx
import React, { useRef } from "react";
import { Link } from "react-router-dom";
import { motion, useReducedMotion, useScroll, useTransform, useSpring } from "framer-motion";
import { objectivesData } from '../../data/objectivesData'; // Corrected import path
import { FiArrowLeft } from "react-icons/fi"; // Keep icon import from stub

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
  pink50: "#FDF2F8", pink100: "#FCE7F3", pink600: "#DB2777", pink700: "#BE185D", pink900: "#831843", // Added from stub
};

/* --------------------------- Page Data (Local) -------------------------- */
// Page-specific title. Sections are imported.
const data = {
  title: "Objectives of CRCCF",
  tagline: "To empower citizens with digital literacy, assist victims of cybercrime, and strengthen cybersecurity frameworks across the country.", // From stub
};

/* -------------------------- HERO: Video SVG (inline) -------------------------- */
/* Scene: Combination of Shield (Protection), Scales (Justice), Lightbulb (Awareness/Empowerment). */
const VideoHeroObjectives = ({ src = "", poster = "" }) => {
  const prefersReduced =
    typeof window !== "undefined" &&
    window.matchMedia &&
    window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  const title = "CRCCF Objectives Hero";
  const desc =
    "Symbols representing CRCCF's objectives: Shield, Scales, Lightbulb. The background is a masked video or a soft gradient.";

  // Fallback: animated gradient stage + overlay
  if (prefersReduced || !src) {
    return (
      <svg viewBox="0 0 1000 460" role="img" aria-labelledby="objTitle objDesc" className="w-full h-auto">
        <title id="objTitle">{title}</title>
        <desc id="objDesc">{desc}</desc>
        <defs>
          <linearGradient id="objGrad" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor={color.indigo100}>
              <animate attributeName="offset" values="0;0.15;0" dur="8s" repeatCount="indefinite" />
            </stop>
            <stop offset="55%" stopColor={color.cyan100}>
              <animate attributeName="offset" values="0.55;0.85;0.55" dur="8s" repeatCount="indefinite" />
            </stop>
            <stop offset="100%" stopColor={color.emerald100} />
          </linearGradient>
          <filter id="objSoft" x="-20%" y="-20%" width="140%" height="140%">
            <feGaussianBlur in="SourceGraphic" stdDeviation="8" result="b" />
            <feColorMatrix in="b" type="matrix" values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 .6 0" />
          </filter>
          <clipPath id="objStage">
            <rect x="40" y="36" width="640" height="388" rx="26" />
          </clipPath>
        </defs>

        <g filter="url(#objSoft)">
          <rect x="0" y="0" width="1000" height="460" rx="28" fill="url(#objGrad)" />
        </g>
        <g clipPath="url(#objStage)">
          <rect x="0" y="0" width="1000" height="460" fill="url(#objGrad)">
            <animate attributeName="x" values="0;22;0" dur="8s" repeatCount="indefinite" />
          </rect>
        </g>

        {ObjectivesOverlay()}
      </svg>
    );
  }

  // Main masked video version with overlay
  return (
    <svg viewBox="0 0 1000 460" className="w-full h-auto block" role="img" aria-label={title}>
      <defs>
        <linearGradient id="objBG" x1="0" y1="0" x2="1" y2="1">
           <stop offset="0%" stopColor={color.indigo100} />
           <stop offset="55%" stopColor={color.cyan100} />
           <stop offset="100%" stopColor={color.emerald100} />
        </linearGradient>
        <filter id="objSoft2" x="-20%" y="-20%" width="140%" height="140%">
          <feGaussianBlur in="SourceGraphic" stdDeviation="8" result="b" />
          <feColorMatrix in="b" type="matrix" values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 .6 0" />
        </filter>
        <clipPath id="objStage2">
          <rect x="40" y="36" width="640" height="388" rx="26" />
        </clipPath>
      </defs>

      <g filter="url(#objSoft2)">
        <rect x="0" y="0" width="1000" height="460" rx="28" fill="url(#objBG)" />
      </g>

      {/* poster + masked video */}
      <g clipPath="url(#objStage2)">
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

      {ObjectivesOverlay()}
    </svg>
  );
};

/* ----------------------- Overlay: objectives scene ----------------------- */
function ObjectivesOverlay() {
  return (
    <g transform="translate(680, 50)">
      {/* Shield */}
      <g transform="translate(150, 200)">
        <path d="M0 -50l90 35v50c0 60-36 105-90 125-54-20-90-65-90-125v-50l90-35z" fill={color.emerald100} stroke={color.emerald600} strokeWidth="5" />
        <path d="M-40 40l30 30 50-50" stroke={color.emerald600} strokeWidth="8" fill="none" />
         <animateTransform attributeName="transform" type="scale" values="1;1.03;1" dur="2.5s" repeatCount="indefinite" transform-origin="150 200" />
      </g>
      {/* Scales */}
      <g transform="translate(40, 100)">
        <path d="M0 0 H 120" stroke={color.slate700} strokeWidth="4" />
        <path d="M60 0 V 20" stroke={color.slate700} strokeWidth="4" />
        <path d="M20 20 L -10 60 L 50 60 Z" fill={color.amber100} stroke={color.amber500} strokeWidth="2" />
        <path d="M20 20 V 0" stroke={color.slate700} strokeWidth="3" />
        <path d="M100 20 L 70 60 L 130 60 Z" fill={color.amber100} stroke={color.amber500} strokeWidth="2" />
        <path d="M100 20 V 0" stroke={color.slate700} strokeWidth="3" />
        <animateTransform attributeName="transform" type="rotate" values="40 100 -2; 40 100 2; 40 100 -2" dur="2.5s" repeatCount="indefinite" transform-origin="60 0" />
      </g>
      {/* Lightbulb */}
      <g transform="translate(250, 80)">
         <path d="M0 -30 C -30 -30, -30 10, 0 10 C 30 10, 30 -30, 0 -30 Z" fill={color.amber100} />
         <rect x="-10" y="10" width="20" height="10" fill={color.amber100} />
         <path d="M-15 -20 L 15 -20 M -10 -10 L 10 -10" stroke={color.amber500} strokeWidth="3" />
         <animate attributeName="opacity" values="1;0.5;1" dur="1.5s" repeatCount="indefinite" />
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

/* ------------------------ 20 Thematic SVG Illustrations ------------------------ */

// Theme 1: Empowerment & Protection (Shield, Growth)
const SVG_EmpowermentProtection = (props) => (
  <svg viewBox="0 0 800 380" role="img" aria-label="Empowerment and Protection" {...props}>
    <BG id="gEmpowerProtect" stops={[{ offset: "0%", color: color.emerald50 }, { offset: "100%", color: color.cyan50 }]} />
    <rect x="0" y="0" width="800" height="380" rx="20" fill="url(#gEmpowerProtect)" />
    {/* Central Shield */}
    <g transform="translate(300, 60)">
      <path d="M100 0 L 200 50 V 150 C 200 250, 100 300, 100 300 C 100 300, 0 250, 0 150 V 50 Z" fill={color.emerald100} stroke={color.emerald600} strokeWidth="6" />
      <path d="M50 130 L 90 170 L 150 110" stroke={color.emerald600} strokeWidth="12" fill="none" strokeLinecap="round" />
       <animateTransform attributeName="transform" type="scale" values="1;1.02;1" dur="2s" repeatCount="indefinite" transform-origin="400 210" />
    </g>
    {/* Diverse figures */}
    <g transform="translate(100, 150)">
      <circle cx="0" cy="0" r="30" fill={color.indigo100} /><rect x="-20" y="30" width="40" height="60" rx="8" fill={color.indigo100} />
      <circle cx="550" cy="0" r="30" fill={color.cyan100} /><rect x="530" y="30" width="40" height="60" rx="8" fill={color.cyan100} />
    </g>
  </svg>
);

// Theme 2: Legal Awareness & Justice (Scales, Gavel, Book)
const SVG_LegalJustice = (props) => (
  <svg viewBox="0 0 800 380" role="img" aria-label="Legal Awareness and Justice" {...props}>
    <BG id="gLegalJustice" stops={[{ offset: "0%", color: color.amber50 }, { offset: "100%", color: color.slate200 }]} />
    <rect x="0" y="0" width="800" height="380" rx="20" fill="url(#gLegalJustice)" />
    {/* Scales */}
    <g transform="translate(150, 100)">
      <path d="M0 0 H 200" stroke={color.slate700} strokeWidth="5" />
      <path d="M100 0 V 30" stroke={color.slate700} strokeWidth="5" />
      <g transform="translate(30, 30)"><path d="M0 0 L -30 70 L 30 70 Z" fill={color.amber100} stroke={color.amber500} strokeWidth="2" /><path d="M0 0 V -20" stroke={color.slate700} strokeWidth="3" /></g>
      <g transform="translate(170, 30)"><path d="M0 0 L -30 70 L 30 70 Z" fill={color.amber100} stroke={color.amber500} strokeWidth="2" /><path d="M0 0 V -20" stroke={color.slate700} strokeWidth="3" /></g>
      <animateTransform attributeName="transform" type="rotate" values="150 100 -2; 150 100 2; 150 100 -2" dur="2.5s" repeatCount="indefinite" transform-origin="100 0" />
    </g>
    {/* Book */}
    <g transform="translate(450, 80)">
      <Card x="0" y="0" w="200" h="220" r="12" />
      <text x="20" y="50" fontFamily="sans-serif" fontSize="20" fontWeight="bold" fill={color.indigo600}>Cyber Law</text>
    </g>
  </svg>
);

// Theme 3: Awareness & Education (Lightbulb, Grad Cap, Presentation)
const SVG_AwarenessEducation = (props) => (
  <svg viewBox="0 0 800 380" role="img" aria-label="Awareness and Education" {...props}>
    <BG id="gAwarenessEdu" stops={[{ offset: "0%", color: color.cyan50 }, { offset: "100%", color: color.indigo50 }]} />
    <rect x="0" y="0" width="800" height="380" rx="20" fill="url(#gAwarenessEdu)" />
    {/* Lightbulb */}
    <g transform="translate(150, 120)">
      <path d="M50 0 C 0 0, 0 60, 50 60 C 100 60, 100 0, 50 0 Z" fill={color.amber100} />
      <rect x="40" y="60" width="20" height="20" fill={color.amber100} />
      <path d="M-20 0 H 120 M 0 -20 V 120 M 50 -50 L 50 150" stroke={color.amber500} strokeWidth="4" opacity="0.5">
        <animate attributeName="opacity" values="0.5;0.2;0.5" dur="1.5s" repeatCount="indefinite" />
      </path>
    </g>
    {/* Presentation Screen */}
    <g transform="translate(350, 80)">
      <rect x="0" y="0" width="300" height="200" rx="10" fill={color.white} stroke={color.slate300} strokeWidth="3" />
      <rect x="145" y="200" width="10" height="30" fill={color.slate300} />
      <text x="30" y="50" fontFamily="sans-serif" fontSize="20" fontWeight="bold" fill={color.indigo600}>Training</text>
    </g>
  </svg>
);

// Theme 4: Emotional Healing & Psychology (Heart, Brain, Support figures)
const SVG_EmotionalSupport = (props) => (
 <svg viewBox="0 0 800 380" role="img" aria-label="Emotional Healing and Support" {...props}>
   <BG id="gEmotionalSupport" stops={[{ offset: "0%", color: color.rose50 }, { offset: "100%", color: color.indigo50 }]} />
   <rect x="0" y="0" width="800" height="380" rx="20" fill="url(#gEmotionalSupport)" />
   {/* Heartbeat */}
   <g transform="translate(120, 100)">
     <path d="M0 100 C 0 70, 40 70, 40 100 C 40 130, 0 160, 0 160 C 0 160, -40 130, -40 100 C -40 70, 0 70, 0 100 Z" fill={color.rose100} stroke={color.rose400} strokeWidth="5" />
     <path d="M-80 130 H 0 L 20 100 L 40 130 H 80" stroke={color.rose400} strokeWidth="6" fill="none">
       <animate attributeName="stroke-width" values="6;8;6" dur="1s" repeatCount="indefinite" />
     </path>
   </g>
   {/* Support Figures */}
   <g transform="translate(450, 120)">
     <circle cx="0" cy="0" r="40" fill={color.indigo100} /><rect x="-30" y="40" width="60" height="100" rx="8" fill={color.indigo100} />
     <circle cx="100" cy="0" r="40" fill={color.cyan100} /><rect x="70" y="40" width="60" height="100" rx="8" fill={color.cyan100} />
   </g>
 </svg>
);

// Theme 5: Cybersecurity & Investigation (Magnifying glass, Lock, Code)
const SVG_CyberInvestigation = (props) => (
  <svg viewBox="0 0 800 380" role="img" aria-label="Cybersecurity and Investigation" {...props}>
    <BG id="gCyberInvestigate" stops={[{ offset: "0%", color: color.slate200 }, { offset: "100%", color: color.cyan50 }]} />
    <rect x="0" y="0" width="800" height="380" rx="20" fill="url(#gCyberInvestigate)" />
    {/* Magnifying Glass */}
    <g transform="translate(200, 100)">
      <circle cx="0" cy="0" r="80" fill={color.cyan100} opacity="0.7" stroke={color.cyan500} strokeWidth="8" />
      <line x1="60" y1="60" x2="120" y2="120" stroke={color.cyan500} strokeWidth="10" />
    </g>
    {/* Lock */}
    <g transform="translate(500, 120)">
      <rect x="0" y="0" width="100" height="80" rx="15" fill={color.slate500} />
      <path d="M50 -40 C 80 -40, 80 0, 50 0 S 20 -40, 50 -40 Z" stroke={color.slate700} strokeWidth="12" fill="none" />
    </g>
  </svg>
);

// Theme 6: Women & Girl Safety (Female figure, Protective bubble)
const SVG_WomenSafety = (props) => (
  <svg viewBox="0 0 800 380" role="img" aria-label="Women and Girl Safety" {...props}>
    <BG id="gWomenSafety" stops={[{ offset: "0%", color: color.rose50 }, { offset: "100%", color: color.indigo50 }]} />
    <rect x="0" y="0" width="800" height="380" rx="20" fill="url(#gWomenSafety)" />
    {/* Female Figure */}
    <g transform="translate(350, 100)">
      <circle cx="0" cy="0" r="40" fill={color.rose100} />
      <path d="M-30 40 L 30 40 L 0 160 Z" fill={color.rose400} /> {/* Dress */}
    </g>
    {/* Protective Bubble */}
    <ellipse cx="400" cy="170" rx="220" ry="160" fill="none" stroke={color.cyan300} strokeWidth="6" opacity="0.6">
      <animate attributeName="stroke-width" values="6;10;6" dur="2.5s" repeatCount="indefinite" />
    </ellipse>
  </svg>
);

// Theme 7: Trust & Victim Support (Handshake, Heart, Listening ear)
const SVG_TrustSupport = (props) => (
 <svg viewBox="0 0 800 380" role="img" aria-label="Trust and Victim Support" {...props}>
   <BG id="gTrustSupport" stops={[{ offset: "0%", color: color.emerald50 }, { offset: "100%", color: color.indigo50 }]} />
   <rect x="0" y="0" width="800" height="380" rx="20" fill="url(#gTrustSupport)" />
   {/* Handshake */}
   <g transform="translate(150, 150)">
      <path d="M0 0 L 60 60 L 120 0 L 160 40 L 80 120 L 40 80 Z" fill={color.indigo300} />
      <path d="M0 60 L 60 0 L 120 60 L 160 20 L 80 -60 L 40 -20 Z" fill={color.emerald300} />
      <animateTransform attributeName="transform" type="translate" values="150 150; 150 145; 150 150" dur="1s" repeatCount="indefinite" />
   </g>
   {/* Heart */}
   <g transform="translate(500, 120)">
      <path d="M0 0 C 0 -30, 40 -30, 40 0 C 40 30, 0 60, 0 60 C 0 60, -40 30, -40 0 C -40 -30, 0 -30, 0 0 Z" fill={color.rose400} />
   </g>
 </svg>
);

// Theme 8: Digital Citizenship & Responsibility (Globe, Person voting/acting)
const SVG_DigitalCitizen = (props) => (
  <svg viewBox="0 0 800 380" role="img" aria-label="Digital Citizenship and Responsibility" {...props}>
     <BG id="gDigitalCitizen" stops={[{ offset: "0%", color: color.cyan50 }, { offset: "100%", color: color.emerald50 }]} />
     <rect x="0" y="0" width="800" height="380" rx="20" fill="url(#gDigitalCitizen)" />
     {/* Globe */}
     <g transform="translate(200, 190)">
       <circle cx="0" cy="0" r="100" fill={color.cyan100} />
       <path d="M-80 0 C -60 40, 60 40, 80 0 C 60 -40, -60 -40, -80 0" fill="none" stroke={color.cyan500} strokeWidth="3" />
       <path d="M-30 -80 C 0 -50, 0 50, -30 80 M 30 -80 C 0 -50, 0 50, 30 80" fill="none" stroke={color.cyan500} strokeWidth="3" />
     </g>
     {/* Figure casting vote/checkmark */}
     <g transform="translate(500, 120)">
        <rect x="0" y="0" width="100" height="150" rx="10" fill={color.white} stroke={color.slate300} />
        <rect x="20" y="20" width="60" height="60" rx="5" fill={color.slate200} />
        <path d="M30 50 l15 15 30 -30" stroke={color.emerald600} strokeWidth="8" fill="none"/>
     </g>
  </svg>
);

// Theme 9: Technology & Social Responsibility (Bridge, Gear, People icons)
const SVG_TechSocialResp = (props) => (
 <svg viewBox="0 0 800 380" role="img" aria-label="Technology and Social Responsibility" {...props}>
    <BG id="gTechSocialResp" stops={[{ offset: "0%", color: color.indigo50 }, { offset: "100%", color: color.cyan50 }]} />
    <rect x="0" y="0" width="800" height="380" rx="20" fill="url(#gTechSocialResp)" />
    {/* Bridge */}
    <g transform="translate(150, 150)">
      <path d="M0 100 C 150 0, 350 0, 500 100" stroke={color.slate700} strokeWidth="10" fill="none" />
      <line x1="100" y1="50" x2="100" y2="100" stroke={color.slate700} strokeWidth="8" />
      <line x1="400" y1="50" x2="400" y2="100" stroke={color.slate700} strokeWidth="8" />
      <text x="0" y="130" fontFamily="sans-serif" fontSize="16" fill={color.slate700}>Technology</text>
      <text x="400" y="130" fontFamily="sans-serif" fontSize="16" fill={color.slate700}>Society</text>
    </g>
 </svg>
);

// Theme 10: Risk Management (Dashboard/Graph, Warning sign)
const SVG_RiskManagement = (props) => (
 <svg viewBox="0 0 800 380" role="img" aria-label="Cyber Risk Management" {...props}>
   <BG id="gRiskManage" stops={[{ offset: "0%", color: color.amber50 }, { offset: "100%", color: color.rose50 }]} />
   <rect x="0" y="0" width="800" height="380" rx="20" fill="url(#gRiskManage)" />
   {/* Dashboard */}
   <g transform="translate(100, 80)">
     <Card x="0" y="0" w="400" h="220" r="12" />
     <text x="20" y="40" fontFamily="sans-serif" fontSize="20" fontWeight="bold" fill={color.slate700}>Risk Assessment</text>
     <path d="M50 200 L 100 150 L 150 170 L 200 100 L 250 120" stroke={color.rose600} strokeWidth="5" fill="none" />
     <line x1="50" y1="200" x2="250" y2="200" stroke={color.slate300} strokeWidth="2" />
   </g>
   {/* Warning Sign */}
   <g transform="translate(550, 100)">
     <polygon points="100 0, 200 173, 0 173" fill={color.amber100} stroke={color.amber500} strokeWidth="6" />
     <text x="100" y="110" fontFamily="sans-serif" fontSize="80" fontWeight="bold" fill={color.amber500} textAnchor="middle">!</text>
   </g>
 </svg>
);

// Theme 11: Cyber Forensics (Fingerprint, Data bits, Evidence bag)
const SVG_Forensics = (props) => (
 <svg viewBox="0 0 800 380" role="img" aria-label="Cyber Forensics" {...props}>
   <BG id="gForensics" stops={[{ offset: "0%", color: color.slate200 }, { offset: "100%", color: color.cyan50 }]} />
   <rect x="0" y="0" width="800" height="380" rx="20" fill="url(#gForensics)" />
   {/* Fingerprint */}
   <g transform="translate(150, 100)" stroke={color.slate700} strokeWidth="4" fill="none">
     <path d="M100 50 C 80 50, 80 80, 100 80 S 120 50, 100 50" />
     <path d="M100 30 C 60 30, 60 100, 100 100 S 140 30, 100 30" />
     <path d="M100 10 C 40 10, 40 120, 100 120 S 160 10, 100 10" />
   </g>
   {/* Data bits */}
   <g transform="translate(450, 120)" fontFamily="monospace" fontSize="24" fill={color.cyan500}>
     <text x="0" y="0">10110</text>
     <text x="20" y="40">01001</text>
     <text x="40" y="80">11100</text>
   </g>
 </svg>
);

// Theme 12: Ethical Practices (Handshake, Balanced scales, Checkmark)
const SVG_Ethics = (props) => (
 <svg viewBox="0 0 800 380" role="img" aria-label="Ethical Practices" {...props}>
    <BG id="gEthics" stops={[{ offset: "0%", color: color.indigo25 }, { offset: "100%", color: color.emerald50 }]} />
    <rect x="0" y="0" width="800" height="380" rx="20" fill="url(#gEthics)" />
    {/* Balanced Scales */}
    <g transform="translate(150, 100)">
      <path d="M0 0 H 200" stroke={color.slate700} strokeWidth="5" /> <path d="M100 0 V 30" stroke={color.slate700} strokeWidth="5" />
      <g transform="translate(30, 30)"><path d="M0 0 L -30 70 L 30 70 Z" fill={color.amber100} stroke={color.amber500} strokeWidth="2" /><path d="M0 0 V -20" stroke={color.slate700} strokeWidth="3" /></g>
      <g transform="translate(170, 30)"><path d="M0 0 L -30 70 L 30 70 Z" fill={color.amber100} stroke={color.amber500} strokeWidth="2" /><path d="M0 0 V -20" stroke={color.slate700} strokeWidth="3" /></g>
    </g>
    {/* Checkmark */}
     <g transform="translate(500, 120)">
      <circle cx="0" cy="0" r="80" fill={color.emerald100} stroke={color.emerald600} strokeWidth="6" />
      <path d="M-40 0 L -10 30 L 50 -30" stroke={color.emerald600} strokeWidth="12" fill="none" strokeLinecap="round" />
    </g>
 </svg>
);

// Theme 13: Research & Innovation (Microscope, Gear, Lightbulb)
const SVG_ResearchInnovation = (props) => (
 <svg viewBox="0 0 800 380" role="img" aria-label="Research and Innovation" {...props}>
    <BG id="gResearch" stops={[{ offset: "0%", color: color.cyan50 }, { offset: "100%", color: color.indigo50 }]} />
    <rect x="0" y="0" width="800" height="380" rx="20" fill="url(#gResearch)" />
    {/* Microscope */}
    <g transform="translate(150, 100)">
      <rect x="0" y="0" width="30" height="150" rx="5" fill={color.slate700} />
      <rect x="-40" y="150" width="110" height="20" rx="5" fill={color.slate700} />
      <rect x="30" y="30" width="80" height="30" rx="5" fill={color.slate400} />
      <circle cx="70" cy="75" r="15" fill={color.cyan500} />
    </g>
    {/* Gear */}
    <g transform="translate(450, 150)">
       <circle cx="0" cy="0" r="50" fill={color.slate400}/>
       <circle cx="0" cy="0" r="20" fill={color.white}/>
       {[0, 60, 120, 180, 240, 300].map(angle => (
           <rect key={angle} x="-10" y="-60" width="20" height="20" fill={color.slate400} transform={`rotate(${angle})`}/>
       ))}
        <animateTransform attributeName="transform" type="rotate" values="450 150 0; 450 150 360" dur="5s" repeatCount="indefinite" transform-origin="0 0" />
    </g>
 </svg>
);

// Theme 14: Skill Development (Tools, Graduation Cap, Graph)
const SVG_SkillDevelopment = (props) => (
 <svg viewBox="0 0 800 380" role="img" aria-label="Skill Development" {...props}>
    <BG id="gSkillDev" stops={[{ offset: "0%", color: color.emerald50 }, { offset: "100%", color: color.cyan50 }]} />
    <rect x="0" y="0" width="800" height="380" rx="20" fill="url(#gSkillDev)" />
    {/* Tools */}
    <g transform="translate(150, 120)">
      <rect x="0" y="0" width="100" height="30" rx="5" fill={color.slate500} /> {/* Wrench */}
      <rect x="100" y="5" width="20" height="20" fill={color.slate500} />
      <rect x="30" y="60" width="30" height="100" rx="5" fill={color.slate500} /> {/* Hammer */}
      <rect x="10" y="40" width="70" height="40" rx="5" fill={color.slate700} />
    </g>
    {/* Growth Graph */}
     <g transform="translate(400, 100)">
        <path d="M0 200 L 80 150 L 160 170 L 240 100 L 320 80" stroke={color.emerald600} strokeWidth="8" fill="none" />
        <path d="M320 80 L 300 100 M 320 80 L 300 80" stroke={color.emerald600} strokeWidth="8" />
        <line x1="0" y1="200" x2="320" y2="200" stroke={color.slate300} strokeWidth="2" />
      </g>
 </svg>
);

// Theme 15: Community & Collaboration (Network, People icons, Handshake)
const SVG_Community = (props) => (
 <svg viewBox="0 0 800 380" role="img" aria-label="Community and Collaboration" {...props}>
    <BG id="gCommunity" stops={[{ offset: "0%", color: color.cyan50 }, { offset: "100%", color: color.indigo50 }]} />
    <rect x="0" y="0" width="800" height="380" rx="20" fill="url(#gCommunity)" />
    {/* Network */}
    <g transform="translate(400, 190)" stroke={color.slate400} strokeWidth="3" opacity="0.7">
      <circle cx="0" cy="0" r="10" fill={color.indigo600} />
      <circle cx="-100" cy="-50" r="10" fill={color.cyan500} /> <line x1="0" y1="0" x2="-100" y2="-50" />
      <circle cx="100" cy="-50" r="10" fill={color.cyan500} /> <line x1="0" y1="0" x2="100" y2="-50" />
      <circle cx="0" cy="100" r="10" fill={color.cyan500} /> <line x1="0" y1="0" x2="0" y2="100" />
      <circle cx="-100" cy="50" r="10" fill={color.cyan500} /> <line x1="-100" y1="-50" x2="-100" y2="50" />
      <circle cx="100" cy="50" r="10" fill={color.cyan500} /> <line x1="100" y1="-50" x2="100" y2="50" />
    </g>
 </svg>
);

// Theme 16: Rehabilitation & Recovery (Growing plant, Helping hand)
const SVG_Rehabilitation = (props) => (
 <svg viewBox="0 0 800 380" role="img" aria-label="Victim Rehabilitation and Recovery" {...props}>
   <BG id="gRehab" stops={[{ offset: "0%", color: color.emerald50 }, { offset: "100%", color: color.amber50 }]} />
   <rect x="0" y="0" width="800" height="380" rx="20" fill="url(#gRehab)" />
   {/* Growing Plant */}
   <g transform="translate(200, 150)">
      <path d="M0 150 C 0 50, 50 50, 50 0" stroke={color.emerald600} strokeWidth="8" fill="none" />
      <path d="M50 0 C 40 20, 60 20, 50 40 M 50 40 C 30 60, 70 60, 50 80" stroke={color.emerald600} strokeWidth="6" fill="none" />
      <rect x="-30" y="150" width="60" height="30" fill={color.amber500} />
   </g>
   {/* Helping Hand */}
    <g transform="translate(450, 100)">
      <path d="M-80 120 C -40 80, 0 60, 0 60 C 0 60, 40 80, 80 120 L 60 140 L -60 140 Z" fill={color.amber100} />
    </g>
 </svg>
);

// Theme 17: Public Awareness & Outreach (Megaphone, People listening)
const SVG_PublicAwareness = (props) => (
  <svg viewBox="0 0 800 380" role="img" aria-label="Public Awareness and Outreach" {...props}>
     <BG id="gPublicAware" stops={[{ offset: "0%", color: color.cyan50 }, { offset: "100%", color: color.rose50 }]} />
     <rect x="0" y="0" width="800" height="380" rx="20" fill="url(#gPublicAware)" />
     {/* Megaphone */}
     <g transform="translate(150, 120)">
        <polygon points="0 0, 50 0, 150 60, 150 100, 50 160, 0 160" fill={color.rose400} />
        <rect x="-30" y="60" width="30" height="40" rx="5" fill={color.rose600}/>
        {/* Sound Waves */}
        <g transform="translate(160, 80)" stroke={color.rose400} strokeWidth="4" fill="none">
          <path d="M0 0 C 20 0, 20 20, 40 20"><animate attributeName="d" values="M0 0 C 20 0, 20 20, 40 20; M10 0 C 30 0, 30 20, 50 20; M0 0 C 20 0, 20 20, 40 20" dur="1s" repeatCount="indefinite" /></path>
          <path d="M0 -20 C 30 -20, 30 40, 60 40"><animate attributeName="d" values="M0 -20 C 30 -20, 30 40, 60 40; M10 -20 C 40 -20, 40 40, 70 40; M0 -20 C 30 -20, 30 40, 60 40" dur="1s" delay="0.2s" repeatCount="indefinite" /></path>
        </g>
     </g>
     {/* Audience */}
      <g transform="translate(450, 120)">
        <circle cx="0" cy="0" r="30" fill={color.slate300} /><rect x="-20" y="30" width="40" height="60" rx="8" fill={color.slate300} />
        <circle cx="80" cy="0" r="30" fill={color.slate300} /><rect x="60" y="30" width="40" height="60" rx="8" fill={color.slate300} />
      </g>
  </svg>
);

// Theme 18: Corporate Governance & Business (Building, Briefcase, Graph)
const SVG_Corporate = (props) => (
 <svg viewBox="0 0 800 380" role="img" aria-label="Corporate Governance" {...props}>
    <BG id="gCorporate" stops={[{ offset: "0%", color: color.indigo50 }, { offset: "100%", color: color.slate200 }]} />
    <rect x="0" y="0" width="800" height="380" rx="20" fill="url(#gCorporate)" />
    {/* Building */}
    <g transform="translate(150, 80)">
      <rect x="0" y="0" width="150" height="250" rx="10" fill={color.white} stroke={color.slate300} strokeWidth="3" />
      <rect x="20" y="20" width="40" height="40" fill={color.cyan100} /> <rect x="90" y="20" width="40" height="40" fill={color.cyan100} />
      <rect x="20" y="80" width="40" height="40" fill={color.cyan100} /> <rect x="90" y="80" width="40" height="40" fill={color.cyan100} />
    </g>
    {/* Briefcase */}
    <g transform="translate(400, 150)">
      <rect x="0" y="0" width="120" height="80" rx="10" fill={color.slate700} />
      <rect x="10" y="10" width="100" height="60" rx="5" fill={color.slate500} />
      <rect x="40" y="-10" width="40" height="20" rx="5" fill={color.slate900} />
    </g>
 </svg>
);

// Theme 19: Government & Public Sector (Govt Building, Flag)
const SVG_Government = (props) => (
 <svg viewBox="0 0 800 380" role="img" aria-label="Government and Public Sector" {...props}>
    <BG id="gGovernment" stops={[{ offset: "0%", color: color.amber50 }, { offset: "100%", color: color.indigo50 }]} />
    <rect x="0" y="0" width="800" height="380" rx="20" fill="url(#gGovernment)" />
    {/* Building with Flag */}
    <g transform="translate(250, 80)">
      <polygon points="0 250, 250 250, 250 80, 125 0, 0 80" fill={color.white} stroke={color.slate300} strokeWidth="3" />
      <rect x="40" y="100" width="170" height="150" fill={color.indigo100} />
      <rect x="120" y="-60" width="10" height="160" fill={color.slate700} />
      <polygon points="130 -60, 200 -60, 180 -30, 200 0, 130 0" fill={color.amber500}>
        <animate attributeName="points" values="130 -60, 200 -60, 180 -30, 200 0, 130 0; 130 -60, 210 -55, 190 -30, 210 -5, 130 0; 130 -60, 200 -60, 180 -30, 200 0, 130 0" dur="2s" repeatCount="indefinite" />
      </polygon>
       <text x="125" y="60" fontFamily="sans-serif" fontSize="18" fontWeight="bold" fill={color.indigo600} textAnchor="middle">GOVT</text>
    </g>
 </svg>
);

// Theme 20: IP Protection & Compliance (Copyright symbol, Stamp, Document)
const SVG_ComplianceIP = (props) => (
 <svg viewBox="0 0 800 380" role="img" aria-label="Compliance and IP Protection" {...props}>
    <BG id="gComplianceIP" stops={[{ offset: "0%", color: color.slate200 }, { offset: "100%", color: color.amber50 }]} />
    <rect x="0" y="0" width="800" height="380" rx="20" fill="url(#gComplianceIP)" />
    {/* Copyright Symbol */}
    <g transform="translate(200, 150)">
      <circle cx="0" cy="0" r="60" fill="none" stroke={color.slate700} strokeWidth="10" />
      <circle cx="0" cy="0" r="30" fill="none" stroke={color.slate700} strokeWidth="8" />
      <rect x="-15" y="-15" width="30" height="30" fill={color.white} transform="rotate(45)" />
    </g>
    {/* Stamp */}
     <g transform="translate(500, 120)">
      <circle cx="0" cy="0" r="80" fill={color.rose100} stroke={color.rose600} strokeWidth="6" />
      <text x="0" y="10" fontFamily="sans-serif" fontSize="24" fontWeight="bold" fill={color.rose600} textAnchor="middle">PROTECTED</text>
    </g>
 </svg>
);


/* ------------------------------ Section block ------------------------------ */
const SectionBlock = ({ id, title, content, SVG, reverse = false }) => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start 80%", "end 20%"] });
  const y = useSpring(useTransform(scrollYProgress, [0, 1], [18, -18]), { stiffness: 120, damping: 20 });
  const opacity = useTransform(scrollYProgress, [0, 1], [0.6, 1]);

  const contentParts = content.split('\n');
  const mainContent = contentParts.filter(p => !p.startsWith('(') || !p.endsWith(')'));
  const tagline = contentParts.find(p => p.startsWith('(') && p.endsWith(')'));

  const paragraphs = mainContent.map((p, i) => (
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
          <div className="absolute -inset-2 rounded-2xl bg-gradient-to-tr from-cyan-100 via-indigo-100 to-emerald-100 blur-md sm:blur-lg md:blur-xl" aria-hidden="true" />
          <div className="relative rounded-2xl border border-gray-200 bg-white p-3 sm:p-4 shadow-sm">
            <div className="w-full h-auto max-h-64 sm:max-h-80 md:max-h-none overflow-hidden">
              <SVG /> {/* Render the assigned SVG */}
            </div>
          </div>
        </motion.div>

        {/* Content */}
        <div className={`${reverse ? "md:order-1" : "md:order-2"} min-w-0`}>
          <h2 className="text-[20px] sm:text-2xl font-semibold text-gray-900 leading-snug">{title}</h2>
          <div className="mt-2.5 sm:mt-3 space-y-3">{paragraphs}</div>
           {tagline && <p className="mt-2 text-sm text-gray-500 italic">{tagline}</p>}
        </div>
      </motion.div>
    </section>
  );
};

/* ---------------------------------- Page ---------------------------------- */
export default function Objective() {
  const { container, itemUp } = useAnims();
  const heroRef = useRef(null);
  const { scrollYProgress } = useScroll({ target: heroRef, offset: ["start start", "end start"] });
  const heroY = useTransform(scrollYProgress, [0, 1], [0, -40]);

  // Map section IDs to one of the 20 thematic SVGs
  const svgMap = {
     // Assigning based on perceived theme - this requires careful matching
     'sec1-empowering-every-individual-against-cyber-threats': SVG_EmpowermentProtection,
     'sec2-advocating-legal-awareness-and-victim-rights': SVG_LegalJustice,
     'sec3-promoting-cyber-awareness-and-education': SVG_AwarenessEducation,
     'sec4-supporting-emotional-healing-and-psychological-resilience': SVG_EmotionalSupport,
     'sec5-strengthening-cybersecurity-and-digital-investigation': SVG_CyberInvestigation,
     'sec6-championing-women-and-girl-safety-online': SVG_WomenSafety,
     'sec7-building-trust-through-victim-centric-support': SVG_TrustSupport,
     'sec8-promoting-responsible-digital-citizenship': SVG_DigitalCitizen,
     'sec9-bridging-technology-with-social-responsibility': SVG_TechSocialResp,
     'sec10-ensuring-holistic-cyber-risk-management': SVG_RiskManagement,
     'sec11-fostering-cyber-forensic-excellence': SVG_Forensics,
     'sec12-promoting-ethical-cyber-practices': SVG_Ethics,
     'sec13-encouraging-cyber-research-and-innovation': SVG_ResearchInnovation,
     'sec14-strengthening-digital-education-and-skill-development': SVG_SkillDevelopment,
     'sec15-advocating-community-cyber-responsibility': SVG_Community,
     'sec16-ensuring-cybercrime-victim-rehabilitation': SVG_Rehabilitation,
     'sec17-strengthening-legal-awareness-and-guidance': SVG_LegalJustice, // Reuse
     'sec18-promoting-cyber-education-across-institutions': SVG_AwarenessEducation, // Reuse
     'sec19-facilitating-cybercrime-research-and-intelligence': SVG_ResearchInnovation, // Reuse
     'sec20-advocating-human-rights-and-cyber-ethics': SVG_Ethics, // Reuse
     'sec21-enhancing-cybersecurity-awareness-for-women-and-girls': SVG_WomenSafety, // Reuse
     'sec22-promoting-legal-counselling-and-emotional-support': SVG_EmotionalSupport, // Reuse
     'sec23-advancing-cyber-risk-management-and-prevention': SVG_RiskManagement, // Reuse
     'sec24-facilitating-skill-development-in-cybersecurity-and-it': SVG_SkillDevelopment, // Reuse
     'sec25-building-community-resilience-through-collaboration': SVG_Community, // Reuse
     'sec26-promoting-cyber-psychology-awareness': SVG_EmotionalSupport, // Reuse
     'sec27-strengthening-cyber-law-implementation': SVG_LegalJustice, // Reuse
     'sec28-empowering-educational-institutions-in-digital-safety': SVG_AwarenessEducation, // Reuse
     'sec29-facilitating-ethical-corporate-cyber-governance': SVG_Corporate,
     'sec30-supporting-government-and-public-sector-cyber-initiatives': SVG_Government,
     'sec31-championing-victim-advocacy-and-support': SVG_TrustSupport, // Reuse
     'sec32-advancing-digital-evidence-and-forensic-excellence': SVG_Forensics, // Reuse
     'sec33-strengthening-cyber-education-and-awareness-programs': SVG_AwarenessEducation, // Reuse
     'sec34-promoting-ethical-use-of-technology': SVG_Ethics, // Reuse
     'sec35-building-resilient-cyber-communities': SVG_Community, // Reuse
     'sec36-ensuring-data-privacy-and-protection': SVG_ComplianceIP, // Using IP/Compliance theme
     'sec37-facilitating-cybercrime-research-and-case-studies': SVG_ResearchInnovation, // Reuse
     'sec38-promoting-cyber-ethics-and-responsibility': SVG_Ethics, // Reuse
     'sec39-enhancing-public-awareness-and-citizen-engagement': SVG_PublicAwareness,
     'sec40-fostering-collaboration-between-stakeholders': SVG_Community, // Reuse
     'sec41-cybersecurity-skill-development-and-training': SVG_SkillDevelopment, // Reuse
     'sec42-encouraging-ethical-software-and-technology-usage': SVG_TechSocialResp, // Reuse
     'sec43-strengthening-women-and-girl-safety-online': SVG_WomenSafety, // Reuse
     'sec44-promoting-cyber-law-literacy-for-all': SVG_LegalJustice, // Reuse
     'sec45-building-trust-and-transparency-across-communities': SVG_TrustSupport, // Reuse
     'sec46-fostering-cybersecurity-awareness-in-schools-and-colleges': SVG_AwarenessEducation, // Reuse
     'sec47-supporting-small-businesses-and-organizations-against-cyber-threats': SVG_Corporate, // Reuse (closest theme)
     'sec48-encouraging-research-in-cyber-forensics-and-investigation': SVG_Forensics, // Reuse
     'sec49-advocating-for-human-rights-and-digital-justice': SVG_LegalJustice, // Reuse
     'sec50-creating-a-safe-and-empowered-digital-society': SVG_EmpowermentProtection, // Reuse
     'sec51-integrating-cyber-psychology-for-safer-communities': SVG_EmotionalSupport, // Reuse
     'sec52-supporting-legal-guidance-and-consultation': SVG_LegalJustice, // Reuse
     'sec53-promoting-ethical-digital-investigations': SVG_Ethics, // Reuse
     'sec54-encouraging-social-responsibility-and-civic-engagement': SVG_DigitalCitizen, // Reuse
     'sec55-strengthening-cyber-risk-management-and-prevention': SVG_RiskManagement, // Reuse
     'sec56-enhancing-victim-rehabilitation-and-reintegration': SVG_Rehabilitation, // Reuse
     'sec57-advancing-research-in-cybercrime-and-technology': SVG_ResearchInnovation, // Reuse
     'sec58-promoting-cyber-education-and-skill-development-for-all': SVG_SkillDevelopment, // Reuse
     'sec59-strengthening-public-awareness-and-community-outreach': SVG_PublicAwareness, // Reuse
     'sec60-fostering-a-secure-ethical-and-empowered-digital-society': SVG_EmpowermentProtection, // Reuse
     // Themes for 61-65 are summary/vision - reusing core themes
     'sec61-the-heartbeat-of-crccf-trust-empathy-and-protection': SVG_TrustSupport,
     'sec62-a-unified-framework-for-legal-emotional-and-digital-safety': SVG_LegalJustice,
     'sec63-empowering-every-individual-and-institution': SVG_EmpowermentProtection,
     'sec64-a-holistic-vision-justice-education-and-community': SVG_Community,
     'sec65-the-legacy-of-crccf-a-secure-compassionate-and-resilient-future': SVG_EmpowermentProtection,
     // Themes for 66 onwards are legal/compliance/IP
     'sec66-registration-and-corporate-compliance': SVG_ComplianceIP,
     'sec67-cyber-laws-and-victim-protection': SVG_LegalJustice,
     'sec68-privacy-data-security-and-iso-compliance': SVG_ComplianceIP,
     'sec69-ngo-regulations-and-tax-compliance': SVG_ComplianceIP,
     'sec70-intellectual-property-and-copyright-protection': SVG_ComplianceIP,
     'sec71-victim-rights-and-legal-representation': SVG_LegalJustice,
     'sec72-cyber-forensics-and-evidence-admissibility': SVG_Forensics,
     'sec73-training-seminars-and-intellectual-property-protections': SVG_ComplianceIP,
     'sec74-compliance-with-international-standards-and-privacy-laws': SVG_ComplianceIP,
     'sec75-accountability-transparency-and-legal-recourse': SVG_LegalJustice,
     'sec76-ownership-of-intellectual-property': SVG_ComplianceIP,
     'sec77-prohibition-of-unauthorized-use': SVG_ComplianceIP,
     'sec78-protection-of-digital-and-print-media': SVG_ComplianceIP,
     'sec79-legal-enforcement-and-penalties': SVG_LegalJustice,
     'sec80-ethical-commitment-and-public-notice': SVG_Ethics,
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
        <Link to="/about" className="hover:underline">About Us</Link>
        <span aria-hidden="true"> › </span>
        <span className="text-gray-700" aria-current="page">Objectives</span>
      </motion.nav>

      {/* Hero with Video-SVG (objectives scene) */}
      <div ref={heroRef} className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-6 md:gap-8 lg:gap-10 items-center">
        <motion.div variants={itemUp}>
          <h1 className="text-[22px] sm:text-3xl font-bold text-gray-900">{data.title}</h1>
           {data.tagline && (
             <p className="mt-2 text-cyan-800 font-medium text-[15px] sm:text-base">{data.tagline}</p>
           )}
           <p className="mt-2 text-gray-600 text-sm"> {/* Added paragraph from stub */}
             We strive to be a one-stop solution for awareness, prevention, and
             legal assistance in cybercrime cases.
           </p>
          <div className="mt-3 sm:mt-4 flex flex-wrap gap-2">
            {["Awareness", "Protection", "Justice", "Empowerment"].map((pill) => (
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
              <VideoHeroObjectives
                src="/assets/video/objectives-hero.mp4"
                poster="/assets/video/objectives-hero.jpg"
              />
            </div>
          </div>
        </motion.div>
      </div>

      {/* Sections */}
      <div className="mt-8 sm:mt-10 md:mt-12">
        {objectivesData.map((sec, idx) => {
          // Use the mapped SVG, fallback to a default if ID is somehow missing
          const SVGComp = svgMap[sec.id] || SVG_EmpowermentProtection; // Default to first theme
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

       {/* Back Button from stub */}
       <motion.div variants={itemUp} className="mt-10 md:mt-12 text-center md:text-left">
         <Link
           to="/"
           className="inline-flex items-center px-5 py-2 rounded-lg bg-pink-600 text-white hover:bg-pink-700 transition-all" // Using pink from stub
         >
           <FiArrowLeft className="mr-2" /> Back to Home
         </Link>
       </motion.div>

      {/* No separate disclaimer needed. Sections 76-80 cover this. */}

    </motion.section>
  );
}