// src/pages/careers/PerformanceReviewAndEvaluationSystem.jsx
import React, { useRef } from "react";
import { Link } from "react-router-dom";
import { motion, useReducedMotion, useScroll, useTransform, useSpring } from "framer-motion";
// Correct import path and variable name as per your stub and data file
import { performanceReviewAndEvaluationSystemData } from '../../data/recruitment_rules_policies/performanceReviewAndEvaluationSystemData'; // Corrected filename casing

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
  title: "Performance Review & Evaluation System",
  // Tagline will be pulled per section from the imported data
};

/* -------------------------- HERO: Video SVG (inline) -------------------------- */
/* Scene: Supervisor and employee reviewing performance chart/report constructively. */
const VideoHeroPerformanceReview = ({ src = "", poster = "" }) => {
  const prefersReduced =
    typeof window !== "undefined" &&
    window.matchMedia &&
    window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  const title = "CRCCF Performance Review Hero";
  const desc =
    "Supervisor and employee discussing a performance report constructively. The background is a masked video or a soft gradient.";

  // Fallback: animated gradient stage + overlay
  if (prefersReduced || !src) {
    return (
      <svg viewBox="0 0 1000 460" role="img" aria-labelledby="prTitle prDesc" className="w-full h-auto">
        <title id="prTitle">{title}</title>
        <desc id="prDesc">{desc}</desc>
        <defs>
          <linearGradient id="prGrad" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor={color.cyan100}>
              <animate attributeName="offset" values="0;0.15;0" dur="8s" repeatCount="indefinite" />
            </stop>
            <stop offset="55%" stopColor={color.emerald100}>
              <animate attributeName="offset" values="0.55;0.85;0.55" dur="8s" repeatCount="indefinite" />
            </stop>
            <stop offset="100%" stopColor={color.indigo100} />
          </linearGradient>
          <filter id="prSoft" x="-20%" y="-20%" width="140%" height="140%">
            <feGaussianBlur in="SourceGraphic" stdDeviation="8" result="b" />
            <feColorMatrix in="b" type="matrix" values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 .6 0" />
          </filter>
          <clipPath id="prStage">
            <rect x="40" y="36" width="640" height="388" rx="26" />
          </clipPath>
        </defs>

        <g filter="url(#prSoft)">
          <rect x="0" y="0" width="1000" height="460" rx="28" fill="url(#prGrad)" />
        </g>
        <g clipPath="url(#prStage)">
          <rect x="0" y="0" width="1000" height="460" fill="url(#prGrad)">
            <animate attributeName="x" values="0;22;0" dur="8s" repeatCount="indefinite" />
          </rect>
        </g>

        {PerformanceReviewOverlay()}
      </svg>
    );
  }

  // Main masked video version with overlay
  return (
    <svg viewBox="0 0 1000 460" className="w-full h-auto block" role="img" aria-label={title}>
      <defs>
        <linearGradient id="prBG" x1="0" y1="0" x2="1" y2="1">
           <stop offset="0%" stopColor={color.cyan100} />
           <stop offset="55%" stopColor={color.emerald100} />
           <stop offset="100%" stopColor={color.indigo100} />
        </linearGradient>
        <filter id="prSoft2" x="-20%" y="-20%" width="140%" height="140%">
          <feGaussianBlur in="SourceGraphic" stdDeviation="8" result="b" />
          <feColorMatrix in="b" type="matrix" values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 .6 0" />
        </filter>
        <clipPath id="prStage2">
          <rect x="40" y="36" width="640" height="388" rx="26" />
        </clipPath>
      </defs>

      <g filter="url(#prSoft2)">
        <rect x="0" y="0" width="1000" height="460" rx="28" fill="url(#prBG)" />
      </g>

      {/* poster + masked video */}
      <g clipPath="url(#prStage2)">
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

      {PerformanceReviewOverlay()}
    </svg>
  );
};

/* ----------------------- Overlay: performance review scene ----------------------- */
function PerformanceReviewOverlay() {
  return (
    <g transform="translate(680, 50)">
      {/* Supervisor Figure */}
      <g transform="translate(40, 140)"> <rect x="0" y="100" width="80" height="150" rx="15" fill={color.indigo800}/> <circle cx="40" cy="65" r="35" fill="#A0522D"/> </g>
      {/* Employee Figure */}
      <g transform="translate(200, 190)"> <rect x="0" y="80" width="70" height="120" rx="15" fill={color.cyan500}/> <circle cx="35" cy="50" r="30" fill="#F5D0A6"/> </g>
      {/* Desk */}
      <g transform="translate(0, 320)"> <rect x="0" y="0" width="340" height="80" rx="10" fill={color.slate300}/> </g>
      {/* Report/Chart */}
      <g transform="translate(100, 200)">
         <rect x="0" y="0" width="120" height="100" rx="8" fill={color.white} stroke={color.slate300} transform="rotate(-5)"/>
         <path d="M10 80 L 30 50 L 50 60 L 70 30 L 90 40" stroke={color.emerald600} strokeWidth="4" fill="none" transform="rotate(-5)"/>
         <rect x="10" y="10" width="100" height="5" rx="2" fill={color.slate400} transform="rotate(-5)"/>
      </g>
       {/* Checkmark */}
       <g transform="translate(280, 100)"> <circle cx="0" cy="0" r="25" fill={color.emerald100}/> <path d="M-10 0 l8 8 15 -15" stroke={color.emerald600} strokeWidth="4" fill="none"/> </g>
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

// 1. Purpose & Vision of the Evaluation System
const Sec1_PurposeVisionSVG = (props) => (
  <svg viewBox="0 0 800 380" role="img" aria-label="Purpose and Vision of Evaluation" {...props}>
    <BG id="gSec1" stops={[{ offset: "0%", color: color.indigo50 }, { offset: "100%", color: color.cyan50 }]} /> <SoftGlow id="glowSec1" std={10} alpha={0.4} /> <rect x="0" y="0" width="800" height="380" rx="20" fill="url(#gSec1)" />
    {/* Magnifying Glass over Chart */}
    <g transform="translate(100, 80)"> <Card x="0" y="0" w="300" h="220" r="12" /> <path d="M30 180 L 80 120 L 130 140 L 180 90 L 230 110" stroke={color.emerald600} strokeWidth="5" fill="none"/> <line x1="30" y1="180" x2="230" y2="180" stroke={color.slate300}/> </g>
    <g transform="translate(250, 50)"> <circle cx="0" cy="0" r="80" fill={color.cyan100} opacity="0.7" stroke={color.cyan500} strokeWidth="8" /> <line x1="60" y1="60" x2="120" y2="120" stroke={color.cyan500} strokeWidth="10" /> </g>
    {/* Lightbulb */}
    <g transform="translate(550, 150)"> <path d="M30 0 C 0 0, 0 40, 30 40 C 60 40, 60 0, 30 0 Z" fill={color.amber100} /> <rect x="25" y="40" width="10" height="10" fill={color.amber100} /> <path d="M-10 0 H 70 M 0 -10 V 70" stroke={color.amber500} strokeWidth="3" opacity="0.5"/> </g>
  </svg>
);
// 2. Scope & Applicability
const Sec2_ScopeSVG = (props) => ( // Reusing SVG
  <svg viewBox="0 0 800 380" role="img" aria-label="Scope and Applicability" {...props}>
    <BG id="gSec2" stops={[{ offset: "0%", color: color.cyan25 }, { offset: "100%", color: color.indigo50 }]} /> <rect x="0" y="0" width="800" height="380" rx="20" fill="url(#gSec2)" />
    <g transform="translate(400, 190)"> <circle cx="0" cy="0" r="50" fill={color.indigo600}/> <text x="0" y="10" fontSize="24" fill={color.white} textAnchor="middle">C</text> </g>
    <g stroke={color.slate400} strokeWidth="3" fill="none"> <path d="M400 140 V 80 H 200 V 60"/> <path d="M400 140 V 80 H 600 V 60"/> <path d="M400 240 V 300 H 200 V 320"/> <path d="M400 240 V 300 H 600 V 320"/> </g>
    <g transform="translate(180, 20)"><circle cx="0" cy="0" r="20" fill={color.cyan100}/><rect x="-15" y="20" width="30" height="40" rx="5"/><text y="75" textAnchor="middle" fontSize="12">Employee</text></g>
    <g transform="translate(580, 20)"><circle cx="0" cy="0" r="20" fill={color.emerald100}/><rect x="-15" y="20" width="30" height="40" rx="5"/><text y="75" textAnchor="middle" fontSize="12">Intern</text></g>
    <g transform="translate(180, 300)"><circle cx="0" cy="0" r="20" fill={color.rose100}/><rect x="-15" y="20" width="30" height="40" rx="5"/><text y="75" textAnchor="middle" fontSize="12">Volunteer</text></g>
    <g transform="translate(580, 300)"><circle cx="0" cy="0" r="20" fill={color.amber100}/><rect x="-15" y="20" width="30" height="40" rx="5"/><text y="75" textAnchor="middle" fontSize="12">Project</text></g>
  </svg>
);
// 3. Principles of Fair and Transparent Evaluation
const Sec3_FairnessSVG = (props) => ( // Reusing SVG
  <svg viewBox="0 0 800 380" role="img" aria-label="Fairness and Transparency" {...props}>
    <BG id="gSec8" stops={[{ offset: "0%", color: color.amber50 }, { offset: "100%", color: color.indigo50 }]} /> <rect x="0" y="0" width="800" height="380" rx="20" fill="url(#gSec8)" />
    <g transform="translate(150, 100)"> <path d="M0 0 H 300" stroke={color.slate700} strokeWidth="6" /> <path d="M150 0 V 50" stroke={color.slate700} strokeWidth="6" /> <g transform="translate(50, 50)"> <path d="M0 0 L -40 100 L 40 100 Z" fill={color.amber100} stroke={color.amber500} /> <path d="M0 0 V -30" stroke={color.slate700} strokeWidth="4" /> </g> <g transform="translate(250, 50)"> <path d="M0 0 L -40 100 L 40 100 Z" fill={color.amber100} stroke={color.amber500} /> <path d="M0 0 V -30" stroke={color.slate700} strokeWidth="4" /> </g> <animateTransform attributeName="transform" type="rotate" values="150 100 0; 150 100 0; 150 100 0" dur="2.5s" repeatCount="indefinite" transform-origin="150 0" /> </g> {/* Freeze animation for balance */}
    <g transform="translate(550, 120)"> <circle cx="0" cy="0" r="60" fill={color.white} stroke={color.indigo600}/> <text x="0" y="5" fontSize="16" fontWeight="bold" fill={color.indigo600} textAnchor="middle">Transparent</text> </g>
  </svg>
);
// 4. Evaluation Framework & Criteria Overview
const Sec4_FrameworkSVG = (props) => (
  <svg viewBox="0 0 800 380" role="img" aria-label="Evaluation Framework and Criteria" {...props}>
    <BG id="gSec4" stops={[{ offset: "0%", color: color.cyan50 }, { offset: "100%", color: color.emerald50 }]} /> <rect x="0" y="0" width="800" height="380" rx="20" fill="url(#gSec4)" />
    {/* Checklist */}
    <g transform="translate(100, 60)" fontSize="18"> <text x="0" y="30">✅ Attendance</text> <text x="0" y="70">✅ Quality</text> <text x="0" y="110">✅ Teamwork</text> <text x="0" y="150">✅ Communication</text> <text x="0" y="190">✅ Ethics</text> </g>
    {/* Graph */}
    <g transform="translate(400, 80)"> <Card x="0" y="0" w="300" h="220" r="12" /> <path d="M30 180 L 80 120 L 130 140 L 180 90 L 230 110" stroke={color.emerald600} strokeWidth="5" fill="none"/> <line x1="30" y1="180" x2="230" y2="180" stroke={color.slate300}/> </g>
  </svg>
);
// 5. Periodic Review Cycle
const Sec5_ReviewCycleSVG = (props) => (
  <svg viewBox="0 0 800 380" role="img" aria-label="Periodic Review Cycle" {...props}>
    <BG id="gSec5" stops={[{ offset: "0%", color: color.indigo50 }, { offset: "100%", color: color.cyan50 }]} /> <rect x="0" y="0" width="800" height="380" rx="20" fill="url(#gSec5)" />
    {/* Calendar */}
    <g transform="translate(100, 80)"> <Card x="0" y="0" w="300" h="220" r="15"/> <rect x="0" y="0" width="300" height="50" rx="15" fill={color.indigo100}/> <text x="150" y="35" textAnchor="middle" fontWeight="bold">Review Cycle</text> <text x="30" y="100">Q1, Q2, Q3, Q4</text> </g>
    {/* Cycle Arrows */}
    <g transform="translate(550, 190)"> <path d="M50 0 C 80 0, 80 50, 50 50 S 20 0, 50 0" stroke={color.indigo400} strokeWidth="6" fill="none" strokeDasharray="10 5"/> <path d="M50 50 L 40 40 M 50 50 L 60 40" stroke={color.indigo400} strokeWidth="6"/> <animateTransform attributeName="transform" type="rotate" values="550 190 0; 550 190 360" dur="4s" repeatCount="indefinite" transform-origin="50 25"/> </g>
  </svg>
);
// 6. Self-Assessment & Reflective Evaluation
const Sec6_SelfAssessmentSVG = (props) => (
  <svg viewBox="0 0 800 380" role="img" aria-label="Self-Assessment" {...props}>
    <BG id="gSec6" stops={[{ offset: "0%", color: color.cyan25 }, { offset: "100%", color: color.emerald50 }]} /> <rect x="0" y="0" width="800" height="380" rx="20" fill="url(#gSec6)" />
    {/* Person looking in mirror/reflecting */}
    <g transform="translate(150, 80)"> <circle cx="0" cy="0" r="50" fill="#F5D0A6"/> <rect x="-40" y="50" width="80" height="150" rx="10" fill={color.indigo100}/> </g>
    <g transform="translate(450, 60)"> <rect x="0" y="0" width="200" height="260" rx="10" fill={color.slate200} stroke={color.slate400}/> <ellipse cx="100" cy="130" rx="80" ry="110" fill={color.cyan50}/> {/* Mirror */} <circle cx="100" cy="100" r="30" fill="#F5D0A6"/> <rect x="80" y="130" width="40" height="80" rx="8" fill={color.indigo100}/> </g>
  </svg>
);
// 7. Supervisor & Departmental Evaluation
const Sec7_SupervisorEvalSVG = (props) => ( // Reusing SVG
  <svg viewBox="0 0 800 380" role="img" aria-label="Supervisor Evaluation" {...props}>
    <BG id="gSec8" stops={[{ offset: "0%", color: color.emerald50 }, { offset: "100%", color: color.cyan50 }]} /> <rect x="0" y="0" width="800" height="380" rx="20" fill="url(#gSec8)" />
    <g transform="translate(150, 100)"> <rect x="-50" y="150" width="400" height="50" rx="10" fill={color.slate300}/> <circle cx="0" cy="50" r="40" fill="#A0522D"/> <rect x="-30" y="90" width="60" height="100" rx="10" fill={color.indigo800}/> <circle cx="300" cy="50" r="40" fill="#F5D0A6"/> <rect x="270" y="90" width="60" height="100" rx="10" fill={color.cyan500}/> </g>
    <g transform="translate(550, 120)"> <Card x="0" y="0" w="150" h="100" r="8"/> <text x="75" y="50" textAnchor="middle">Report</text> </g>
  </svg>
);
// 8. Quantitative & Qualitative Metrics
const Sec8_MetricsSVG = (props) => (
  <svg viewBox="0 0 800 380" role="img" aria-label="Quantitative and Qualitative Metrics" {...props}>
    <BG id="gSec8" stops={[{ offset: "0%", color: color.indigo50 }, { offset: "100%", color: color.cyan50 }]} /> <rect x="0" y="0" width="800" height="380" rx="20" fill="url(#gSec8)" />
    <line x1="400" y1="40" x2="400" y2="340" stroke={color.slate700} strokeWidth="6" strokeDasharray="10 5" />
    {/* Quantitative (Graph) */}
    <g transform="translate(100, 100)"> <text x="0" y="0" fontSize="20" fontWeight="bold">Quantitative</text> <path d="M0 180 L 50 120 L 100 140 L 150 90 L 200 110" stroke={color.emerald600} strokeWidth="5" fill="none"/> <line x1="0" y1="180" x2="200" y2="180" stroke={color.slate300}/> </g>
    {/* Qualitative (Thumbs up/down?) */}
    <g transform="translate(500, 100)"> <text x="0" y="0" fontSize="20" fontWeight="bold">Qualitative</text> <g transform="translate(0, 50)"> <path d="M0 0 H 40 V -30 H 50 V 40 H 0 Z" fill={color.emerald300}/> <path d="M5 -30 C -5 -30, -5 -40, 5 -40 H 25 C 35 -40, 35 -30, 25 -30 Z" fill={color.emerald300}/> </g> <g transform="translate(100, 120)"> <path d="M0 40 H 40 V 70 H 50 V 0 H 0 Z" fill={color.rose100}/> <path d="M5 70 C -5 70, -5 80, 5 80 H 25 C 35 80, 35 70, 25 70 Z" fill={color.rose100}/> </g> </g>
  </svg>
);
// 9. Feedback, Counselling & Improvement Plans
const Sec9_FeedbackSVG = (props) => ( // Reusing SVG
  <svg viewBox="0 0 800 380" role="img" aria-label="Feedback and Counselling" {...props}>
    <BG id="gSec9" stops={[{ offset: "0%", color: color.cyan50 }, { offset: "100%", color: color.indigo50 }]} /> <rect x="0" y="0" width="800" height="380" rx="20" fill="url(#gSec9)" />
    <g transform="translate(180, 100)"> <circle cx="0" cy="0" r="50" fill="#A0522D" /> <rect x="-40" y="50" width="80" height="150" rx="10" fill={color.indigo800} /> </g>
    <g transform="translate(300, 80)"> <path d="M0 0 H 200 C 210 0, 210 10, 200 10 V 80 C 210 80, 210 90, 200 90 H 0 C -10 90, -10 80, 0 80 V 10 C -10 10, -10 0, 0 0 Z" fill={color.white} stroke={color.slate300}/> <path d="M20 90 L 40 90 L -10 130 Z" fill={color.white}/> <text x="30" y="40">Feedback...</text> <text x="30" y="65">Improvement...</text> </g>
  </svg>
);
// 10. Link Between Evaluation & Career Progression
const Sec10_CareerProgressionSVG = (props) => ( // Reusing SVG
  <svg viewBox="0 0 800 380" role="img" aria-label="Evaluation and Career Progression" {...props}>
    <BG id="gSec1" stops={[{ offset: "0%", color: color.indigo50 }, { offset: "100%", color: color.cyan50 }]} /> <rect x="0" y="0" width="800" height="380" rx="20" fill="url(#gSec1)" />
    <g transform="translate(100, 100)"> <circle cx="0" cy="0" r="40" fill="#F5D0A6" /> <rect x="-30" y="40" width="60" height="120" rx="10" fill={color.indigo100} /> </g>
    <g transform="translate(180, 80)"> <path d="M0 220 C 150 220, 200 50, 350 50 S 500 220, 550 220" stroke={color.slate300} strokeWidth="12" fill="none" /> <path d="M0 220 C 150 220, 200 50, 350 50" stroke={color.emerald600} strokeWidth="12" fill="none" strokeDasharray="350" strokeDashoffset="350"> <animate attributeName="stroke-dashoffset" values="350;0" dur="2.5s" repeatCount="indefinite" /> </path> <g transform="translate(350, 10)"> <circle cx="0" cy="0" r="30" fill={color.white} stroke={color.amber500}/> <text y="10" textAnchor="middle">Lead</text> </g> </g>
  </svg>
);
// 11. Training Needs Identification (TNI)
const Sec11_TNISVG = (props) => ( // Reusing SVG
  <svg viewBox="0 0 800 380" role="img" aria-label="Training Needs Identification" {...props}>
    <BG id="gAwarenessEdu" stops={[{ offset: "0%", color: color.cyan50 }, { offset: "100%", color: color.indigo50 }]} /> <rect x="0" y="0" width="800" height="380" rx="20" fill="url(#gAwarenessEdu)" />
    <g transform="translate(150, 120)"> <path d="M50 0 C 0 0, 0 60, 50 60 C 100 60, 100 0, 50 0 Z" fill={color.amber100} /> <rect x="40" y="60" width="20" height="20" fill={color.amber100} /> <text x="50" y="110" textAnchor="middle">Identify Need</text> </g>
    <g transform="translate(350, 80)"> <rect x="0" y="0" width="300" height="200" rx="10" fill={color.white}/> <text x="30" y="50" fontSize="20" fontWeight="bold">Training Plan</text> </g>
  </svg>
);
// 12. Reward, Recognition & Appreciation Policy
const Sec12_RewardSVG = (props) => ( // Reusing SVG
  <svg viewBox="0 0 800 380" role="img" aria-label="Reward and Recognition" {...props}>
    <BG id="gSec12" stops={[{ offset: "0%", color: color.amber50 }, { offset: "100%", color: color.cyan50 }]} /> <rect x="0" y="0" width="800" height="380" rx="20" fill="url(#gSec12)" />
    <g transform="translate(100, 80)"> <Card x="0" y="0" w="280" h="200" r="12" stroke={color.amber500} sw="3" /> <circle cx="140" cy="80" r="40" fill={color.amber100} stroke={color.amber500}/> <text x="140" y="140" textAnchor="middle">Award</text> </g>
    <g transform="translate(450, 100)"> <polygon points="0 200, 250 200, 220 50, 30 50" fill={color.indigo100}/> <text x="125" y="130" fontSize="24" fontWeight="bold" textAnchor="middle">RECOGNITION</text> <rect x="80" y="200" width="90" height="30" fill={color.slate300}/> <g transform="translate(125, 10)"> <rect x="-20" y="0" width="40" height="15" rx="4" fill={color.amber500} /> <rect x="-10" y="-20" width="20" height="20" rx="2" fill={color.amber500} /> <path d="M-20 0 C -40 -10, -40 -30, -20 -30" stroke={color.amber500} strokeWidth="6" fill="none" /> <path d="M20 0 C 40 -10, 40 -30, 20 -30" stroke={color.amber500} strokeWidth="6" fill="none" /> </g> </g>
  </svg>
);
// 13. Non-Compliance, Grievance & Appeal Mechanism
const Sec13_GrievanceSVG = (props) => (
  <svg viewBox="0 0 800 380" role="img" aria-label="Grievance and Appeal Mechanism" {...props}>
     <BG id="gSec13" stops={[{ offset: "0%", color: color.rose50 }, { offset: "100%", color: color.slate200 }]} /> <rect x="0" y="0" width="800" height="380" rx="20" fill="url(#gSec13)" />
     {/* Gavel */}
     <g transform="translate(150, 120)"> <rect x="0" y="0" width="200" height="30" rx="8" fill={color.amber500} transform="rotate(-15)"/> <rect x="70" y="-70" width="30" height="90" rx="5" fill={color.amber500} transform="rotate(-15)"/> </g>
     {/* Appeal Document */}
     <g transform="translate(400, 80)"> <Card x="0" y="0" w="280" h="200" r="12" /> <text x="20" y="40" fontSize="18" fontWeight="bold">Appeal Form</text> <rect x="20" y="70" width="240" height="8" rx="4" fill={color.slate400}/> </g>
  </svg>
);
// 14. Evaluation for Interns & Volunteers
const Sec14_InternVolunteerEvalSVG = (props) => ( // Reusing SVG
  <svg viewBox="0 0 800 380" role="img" aria-label="Evaluation for Interns & Volunteers" {...props}>
    <BG id="gSec5" stops={[{ offset: "0%", color: color.cyan25 }, { offset: "100%", color: color.indigo50 }]} /> <rect x="0" y="0" width="800" height="380" rx="20" fill="url(#gSec5)" />
    <g transform="translate(120, 100)"> <circle cx="120" cy="50" r="30" fill="#F5D0A6" /> <rect x="100" y="80" width="40" height="80" rx="10" fill={color.cyan500} /> </g>
    <g transform="translate(350, 100)"> <path d="M0 200 L 100 100 L 200 120 L 300 50" stroke={color.emerald600} strokeWidth="8" fill="none" /> <text x="0" y="230" fontSize="16">Intern/Volunteer</text> <text x="300" y="30" fontSize="16">Evaluated</text> </g>
  </svg>
);
// 15. Digital Monitoring & Data Confidentiality
const Sec15_DigitalMonitoringSVG = (props) => ( // Reusing SVG
  <svg viewBox="0 0 800 380" role="img" aria-label="Digital Monitoring & Confidentiality" {...props}>
    <BG id="gSec7" stops={[{ offset: "0%", color: color.slate200 }, { offset: "100%", color: color.indigo50 }]} /> <rect x="0" y="0" width="800" height="380" rx="20" fill="url(#gSec7)" />
    <g transform="translate(150, 80)"> <rect x="0" y="0" width="300" height="250" rx="15" fill={color.slate700}/> <rect x="20" y="20" width="260" height="210" rx="8" fill={color.slate500}/> <circle cx="150" cy="125" r="80" fill={color.slate400}/> <circle cx="150" cy="125" r="20" fill={color.slate700}/> <line x1="150" y1="125" x2="210" y2="125" stroke={color.slate900} strokeWidth="8"/> </g>
    <g transform="translate(500, 100)"> <Card x="0" y="0" w="180" h="180" r="12" /> <text x="20" y="40">Data Record</text> <g transform="translate(90, 100)"> <rect x="-30" y="0" width="60" height="45" rx="10" fill={color.slate500} /> <path d="M0 -25 C 15 -25, 15 0, 0 0 S -15 -25, 0 -25 Z" stroke={color.slate700} strokeWidth="8" fill="none" /> </g> </g>
  </svg>
);
// 16. Legal Disclaimer & Ethical Assurance
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
export default function PerformanceReviewAndEvaluationSystem() { // Using name from stub
  const { container, itemUp } = useAnims();
  const heroRef = useRef(null);
  const { scrollYProgress } = useScroll({ target: heroRef, offset: ["start start", "end start"] });
  const heroY = useTransform(scrollYProgress, [0, 1], [0, -40]);

  // Map section IDs to SVG components (16 defined)
  const svgMap = {
    'sec1-purpose-and-vision-of-the-evaluation-system': Sec1_PurposeVisionSVG,
    'sec2-scope-and-applicability': Sec2_ScopeSVG,
    'sec3-principles-of-fair-and-transparent-evaluation': Sec3_FairnessSVG,
    'sec4-evaluation-framework-and-criteria-overview': Sec4_FrameworkSVG,
    'sec5-periodic-review-cycle': Sec5_ReviewCycleSVG,
    'sec6-self-assessment-and-reflective-evaluation': Sec6_SelfAssessmentSVG,
    'sec7-supervisor-and-departmental-evaluation': Sec7_SupervisorEvalSVG,
    'sec8-quantitative-and-qualitative-metrics': Sec8_MetricsSVG,
    'sec9-feedback-counselling-and-improvement-plans': Sec9_FeedbackSVG,
    'sec10-link-between-evaluation-and-career-progression': Sec10_CareerProgressionSVG,
    'sec11-training-needs-identification-tni': Sec11_TNISVG,
    'sec12-reward-recognition-and-appreciation-policy': Sec12_RewardSVG,
    'sec13-non-compliance-grievance-and-appeal-mechanism': Sec13_GrievanceSVG,
    'sec14-evaluation-for-interns-and-volunteers': Sec14_InternVolunteerEvalSVG,
    'sec15-digital-monitoring-and-data-confidentiality': Sec15_DigitalMonitoringSVG,
    'sec16-legal-disclaimer-and-ethical-assurance': Sec16_LegalDisclaimerSVG,
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
        <span className="text-gray-700" aria-current="page">Performance Review</span> {/* Updated text */}
      </motion.nav>

      {/* Hero with Video-SVG (performance review scene) */}
      <div ref={heroRef} className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-6 md:gap-8 lg:gap-10 items-center">
        <motion.div variants={itemUp}>
          <h1 className="text-[22px] sm:text-3xl font-bold text-gray-900">{data.title}</h1>
          <div className="mt-3 sm:mt-4 flex flex-wrap gap-2">
            {["Performance", "Evaluation", "Review", "Growth"].map((pill) => ( // Updated pills
              <span key={pill} className="px-2.5 sm:px-3 py-1.5 text-xs sm:text-sm rounded-full bg-cyan-100 text-cyan-800 border border-cyan-200">
                {pill}
              </span>
            ))}
          </div>
        </motion.div>

        <motion.div style={{ y: heroY }} className="relative">
          <div className="absolute -inset-2 rounded-2xl bg-gradient-to-tr from-cyan-100 via-emerald-100 to-indigo-100 blur-md sm:blur-lg md:blur-xl" aria-hidden="true" />
          <div className="relative rounded-2xl border border-gray-200 bg-white p-3 sm:p-4 shadow-sm">
            <div className="w-full h-auto max-h-72 sm:max-h-80 md:max-h-none overflow-hidden">
              <VideoHeroPerformanceReview // Corrected Hero component name
                src="/assets/video/performance-review-hero.mp4"
                poster="/assets/video/performance-review-hero.jpg"
              />
            </div>
          </div>
        </motion.div>
      </div>

      {/* Sections */}
      <div className="mt-8 sm:mt-10 md:mt-12">
        {/* Iterate over the imported data */}
        {performanceReviewAndEvaluationSystemData.map((sec, idx) => { // Use correct data variable name
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