// src/pages/careers/RecruitmentAndSelectionProcess.jsx
import React, { useRef } from "react";
import { Link } from "react-router-dom";
import { motion, useReducedMotion, useScroll, useTransform, useSpring } from "framer-motion";
// Correct import path as per your stub
import { recruitmentAndSelectionProcessData } from '../../data/recruitment_rules_policies/recruitmentAndSelectionProcessData';

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
  title: "Recruitment & Selection Process",
  // Tagline will be pulled per section from the imported data
};

/* -------------------------- HERO: Video SVG (inline) -------------------------- */
/* Scene: Flowchart illustrating the steps of the recruitment process. */
const VideoHeroSelectionProcess = ({ src = "", poster = "" }) => {
  const prefersReduced =
    typeof window !== "undefined" &&
    window.matchMedia &&
    window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  const title = "CRCCF Recruitment and Selection Process Hero";
  const desc =
    "A flowchart showing the recruitment steps: Apply, Screen, Interview, Verify, Onboard. The background is a masked video or a soft gradient.";

  // Fallback: animated gradient stage + overlay
  if (prefersReduced || !src) {
    return (
      <svg viewBox="0 0 1000 460" role="img" aria-labelledby="spTitle spDesc" className="w-full h-auto">
        <title id="spTitle">{title}</title>
        <desc id="spDesc">{desc}</desc>
        <defs>
          <linearGradient id="spGrad" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor={color.cyan100}>
              <animate attributeName="offset" values="0;0.15;0" dur="8s" repeatCount="indefinite" />
            </stop>
            <stop offset="55%" stopColor={color.indigo100}>
              <animate attributeName="offset" values="0.55;0.85;0.55" dur="8s" repeatCount="indefinite" />
            </stop>
            <stop offset="100%" stopColor={color.emerald100} />
          </linearGradient>
          <filter id="spSoft" x="-20%" y="-20%" width="140%" height="140%">
            <feGaussianBlur in="SourceGraphic" stdDeviation="8" result="b" />
            <feColorMatrix in="b" type="matrix" values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 .6 0" />
          </filter>
          <clipPath id="spStage">
            <rect x="40" y="36" width="640" height="388" rx="26" />
          </clipPath>
        </defs>

        <g filter="url(#spSoft)">
          <rect x="0" y="0" width="1000" height="460" rx="28" fill="url(#spGrad)" />
        </g>
        <g clipPath="url(#spStage)">
          <rect x="0" y="0" width="1000" height="460" fill="url(#spGrad)">
            <animate attributeName="x" values="0;22;0" dur="8s" repeatCount="indefinite" />
          </rect>
        </g>

        {SelectionProcessOverlay()}
      </svg>
    );
  }

  // Main masked video version with overlay
  return (
    <svg viewBox="0 0 1000 460" className="w-full h-auto block" role="img" aria-label={title}>
      <defs>
        <linearGradient id="spBG" x1="0" y1="0" x2="1" y2="1">
           <stop offset="0%" stopColor={color.cyan100} />
           <stop offset="55%" stopColor={color.indigo100} />
           <stop offset="100%" stopColor={color.emerald100} />
        </linearGradient>
        <filter id="spSoft2" x="-20%" y="-20%" width="140%" height="140%">
          <feGaussianBlur in="SourceGraphic" stdDeviation="8" result="b" />
          <feColorMatrix in="b" type="matrix" values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 .6 0" />
        </filter>
        <clipPath id="spStage2">
          <rect x="40" y="36" width="640" height="388" rx="26" />
        </clipPath>
      </defs>

      <g filter="url(#spSoft2)">
        <rect x="0" y="0" width="1000" height="460" rx="28" fill="url(#spBG)" />
      </g>

      {/* poster + masked video */}
      <g clipPath="url(#spStage2)">
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

      {SelectionProcessOverlay()}
    </svg>
  );
};

/* ----------------------- Overlay: selection process scene ----------------------- */
function SelectionProcessOverlay() {
  return (
    <g transform="translate(680, 50)" fontFamily="sans-serif" fontSize="12" textAnchor="middle">
      {/* Flowchart Boxes */}
      <rect x="20" y="20" width="80" height="40" rx="20" fill={color.emerald100} />
      <text x="60" y="45">Apply</text>
      <path d="M60 60 V 80 L 170 80 V 100" stroke={color.slate400} strokeWidth="2" fill="none" />

      <rect x="130" y="100" width="80" height="40" rx="5" fill={color.white} />
      <text x="170" y="125">Screen</text>
      <path d="M170 140 V 160 L 60 160 V 180" stroke={color.slate400} strokeWidth="2" fill="none" />

      <rect x="20" y="180" width="80" height="40" rx="5" fill={color.white} />
      <text x="60" y="205">Interview</text>
      <path d="M60 220 V 240 L 170 240 V 260" stroke={color.slate400} strokeWidth="2" fill="none" />

      <rect x="130" y="260" width="80" height="40" rx="5" fill={color.white} />
      <text x="170" y="285">Verify</text>
      <path d="M170 300 V 320 L 60 320 V 340" stroke={color.slate400} strokeWidth="2" fill="none" />

      <rect x="20" y="340" width="80" height="40" rx="20" fill={color.emerald100} />
      <text x="60" y="365">Onboard</text>

       {/* Animated arrow segment */}
       <path d="M60 60 V 80 L 170 80 V 100" stroke={color.emerald600} strokeWidth="2" fill="none" strokeDasharray="100" strokeDashoffset="100">
         <animate attributeName="stroke-dashoffset" values="100;0" dur="1.5s" begin="0s" repeatCount="indefinite" />
       </path>
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

// 1. Registration and Candidate Conduct
const Sec1_RegistrationSVG = (props) => (
  <svg viewBox="0 0 800 380" role="img" aria-label="Registration and Candidate Conduct" {...props}>
    <BG id="gSec1" stops={[{ offset: "0%", color: color.indigo50 }, { offset: "100%", color: color.cyan50 }]} /> <SoftGlow id="glowSec1" std={10} alpha={0.4} /> <rect x="0" y="0" width="800" height="380" rx="20" fill="url(#gSec1)" />
    {/* Portal Screen */}
    <g transform="translate(100, 60)"> <rect x="0" y="0" width="400" height="260" rx="15" fill={color.slate900} /> <rect x="10" y="10" width="380" height="240" rx="8" fill={color.white} /> <rect x="-10" y="260" width="420" height="15" rx="8" fill={color.slate400} /> <text x="30" y="50" fontSize="20" fontWeight="bold">CRCCF Portal</text> </g>
    {/* Candidate Figure */}
    <g transform="translate(550, 100)"> <circle cx="0" cy="0" r="40" fill="#F5D0A6" /> <rect x="-30" y="40" width="60" height="120" rx="10" fill={color.indigo600} /> </g>
  </svg>
);
// 2. Application Submission and Document Validation
const Sec2_SubmissionValidationSVG = (props) => (
  <svg viewBox="0 0 800 380" role="img" aria-label="Application Submission and Validation" {...props}>
    <BG id="gSec2" stops={[{ offset: "0%", color: color.cyan25 }, { offset: "100%", color: color.indigo50 }]} /> <rect x="0" y="0" width="800" height="380" rx="20" fill="url(#gSec2)" />
    {/* Form */}
    <g transform="translate(100, 80)"> <Card x="0" y="0" w="300" h="220" r="12" /> <text x="20" y="40" fontSize="18">Enter Details...</text> <rect x="20" y="60" width="260" height="8" rx="4" fill={color.slate400}/> <rect x="20" y="80" width="260" height="8" rx="4" fill={color.slate400}/> </g>
    {/* Documents with Check */}
    <g transform="translate(450, 100)"> <Card x="0" y="0" w="180" h="100" r="8" transform="rotate(5)" /> <Card x="20" y="80" w="180" h="100" r="8" fill={color.indigo100} transform="rotate(-3)" /> <path d="M100 50 l20 20 40 -40" stroke={color.emerald600} strokeWidth="8" fill="none"/> </g>
  </svg>
);
// 3. Verification, Screening and Compliance
const Sec3_VerificationScreeningSVG = (props) => (
  <svg viewBox="0 0 800 380" role="img" aria-label="Verification, Screening, Compliance" {...props}>
    <BG id="gSec3" stops={[{ offset: "0%", color: color.indigo50 }, { offset: "100%", color: color.slate200 }]} /> <rect x="0" y="0" width="800" height="380" rx="20" fill="url(#gSec3)" />
    {/* Document Stack */}
    <g transform="translate(150, 100)"> <Card x="20" y="20" w="300" h="180" r="12" fill={color.slate200} transform="rotate(-3)" /> <Card x="10" y="10" w="300" h="180" r="12" fill={color.slate200} transform="rotate(2)" /> <Card x="0" y="0" w="300" h="180" r="12" fill={color.white} /> </g>
    {/* Magnifying Glass */}
    <g transform="translate(250, 50)"> <circle cx="0" cy="0" r="80" fill={color.cyan100} opacity="0.7" stroke={color.cyan500} strokeWidth="8" /> <line x1="60" y1="60" x2="120" y2="120" stroke={color.cyan500} strokeWidth="10" /> </g>
    {/* Compliance Stamp */}
    <g transform="translate(550, 150)"> <circle cx="0" cy="0" r="60" fill={color.white} stroke={color.emerald600} strokeWidth="4" /> <text x="0" y="5" fontSize="16" fontWeight="bold" fill={color.emerald600} textAnchor="middle">Compliant</text> </g>
  </svg>
);
// 4. Acknowledgement, Verification and Shortlisting
const Sec4_AcknowledgeVerifySVG = (props) => (
  <svg viewBox="0 0 800 380" role="img" aria-label="Acknowledgement, Verification, Shortlisting" {...props}>
    <BG id="gSec4" stops={[{ offset: "0%", color: color.cyan50 }, { offset: "100%", color: color.indigo50 }]} /> <rect x="0" y="0" width="800" height="380" rx="20" fill="url(#gSec4)" />
    {/* Acknowledgement Email */}
    <g transform="translate(100, 80)"> <rect x="0" y="0" width="400" height="200" rx="15" fill={color.white} stroke={color.slate300} /> <rect x="0" y="0" width="400" height="40" rx="15" fill={color.indigo100} /> <text x="20" y="28">Status: Received</text> <text x="20" y="80">Reg ID: CRCCF-123</text> </g>
    {/* Verification Checkmark */}
    <g transform="translate(500, 100)"> <circle cx="0" cy="0" r="50" fill={color.emerald100} /> <path d="M-20 0 l15 15 30 -30" stroke={color.emerald600} strokeWidth="8" fill="none"/> </g>
    {/* Shortlist Icon */}
    <g transform="translate(600, 200)"> <rect x="0" y="0" width="80" height="30" rx="15" fill={color.cyan500} /> <text x="40" y="20" fill="white" textAnchor="middle">Shortlisted</text> </g>
  </svg>
);
// 5. Telephonic or Virtual Interview
const Sec5_VirtualInterviewSVG = (props) => (
  <svg viewBox="0 0 800 380" role="img" aria-label="Telephonic or Virtual Interview" {...props}>
    <BG id="gSec5" stops={[{ offset: "0%", color: color.emerald50 }, { offset: "100%", color: color.cyan50 }]} /> <rect x="0" y="0" width="800" height="380" rx="20" fill="url(#gSec5)" />
    {/* Person with Headset */}
    <g transform="translate(150, 100)"> <circle cx="0" cy="0" r="50" fill="#F5D0A6" /> <rect x="-40" y="50" width="80" height="130" rx="10" fill={color.indigo600} /> <path d="M-40 -10 C -60 -10, -60 50, -40 50" stroke={color.slate700} strokeWidth="8" fill="none"/> <rect x="-50" y="10" width="20" height="20" fill={color.slate700}/> </g>
    {/* Laptop Screen with Video Call */}
    <g transform="translate(400, 80)"> <rect x="0" y="0" width="300" height="200" rx="15" fill={color.slate900} /> <rect x="10" y="10" width="280" height="180" rx="8" fill={color.white} /> <circle cx="150" cy="100" r="50" fill={color.slate200}/> </g>
  </svg>
);
// 6. Online Written Examination
const Sec6_WrittenExamSVG = (props) => (
  <svg viewBox="0 0 800 380" role="img" aria-label="Online Written Examination" {...props}>
    <BG id="gSec6" stops={[{ offset: "0%", color: color.indigo50 }, { offset: "100%", color: color.slate200 }]} /> <rect x="0" y="0" width="800" height="380" rx="20" fill="url(#gSec6)" />
    {/* Exam Paper */}
    <g transform="translate(100, 60)"> <Card x="0" y="0" w="400" h="280" r="12" /> <text x="30" y="50" fontSize="20" fontWeight="bold">Written Exam</text> <rect x="30" y="80" width="340" height="8" rx="4" fill={color.slate400}/> <circle cx="50" cy="110" r="8" stroke={color.slate500} strokeWidth="2" fill="none"/> <rect x="70" y="106" width="280" height="8" rx="4" fill={color.slate400}/> </g>
    {/* Proctor/Eye Icon */}
    <g transform="translate(550, 150)"> <circle cx="0" cy="0" r="60" fill={color.white} stroke={color.slate300}/> <circle cx="0" cy="0" r="30" fill={color.cyan500}/> <circle cx="0" cy="0" r="10" fill={color.slate900}/> <animateTransform attributeName="transform" type="scale" values="1;1.05;1" dur="2s" repeatCount="indefinite" transform-origin="550 150" /> </g>
  </svg>
);
// 7. English Grammar and Skill Assessment Test
const Sec7_EnglishSkillTestSVG = (props) => (
  <svg viewBox="0 0 800 380" role="img" aria-label="English Grammar and Skill Assessment" {...props}>
    <BG id="gSec7" stops={[{ offset: "0%", color: color.cyan50 }, { offset: "100%", color: color.indigo50 }]} /> <rect x="0" y="0" width="800" height="380" rx="20" fill="url(#gSec7)" />
    {/* Pen Writing */}
    <g transform="translate(150, 100)"> <path d="M0 0 L 200 0 L 180 20 L 20 20 Z" fill={color.slate700} /> <polygon points="0 0, 20 20, 0 20" fill={color.amber500} /> <path d="M50 50 Q 100 20, 150 50 T 250 50" stroke={color.indigo600} strokeWidth="4" fill="none"/> </g>
    {/* Skill Icon (Gear) */}
    <g transform="translate(500, 150)"> <circle cx="0" cy="0" r="50" fill={color.slate400}/> <circle cx="0" cy="0" r="20" fill={color.white}/> {[0, 60, 120, 180, 240, 300].map(angle => <rect key={angle} x="-10" y="-60" width="20" height="20" fill={color.slate400} transform={`rotate(${angle})`}/>)} <animateTransform attributeName="transform" type="rotate" values="500 150 0; 500 150 360" dur="5s" repeatCount="indefinite" transform-origin="0 0" /> </g>
  </svg>
);
// 8. Technical and Non-Technical (Physical) Interview
const Sec8_PhysicalInterviewSVG = (props) => (
  <svg viewBox="0 0 800 380" role="img" aria-label="Physical Interview" {...props}>
    <BG id="gSec8" stops={[{ offset: "0%", color: color.emerald50 }, { offset: "100%", color: color.cyan50 }]} /> <rect x="0" y="0" width="800" height="380" rx="20" fill="url(#gSec8)" />
    {/* Interview Setting */}
    <g transform="translate(150, 100)"> <rect x="-50" y="150" width="400" height="50" rx="10" fill={color.slate300}/> {/* Table */} <circle cx="0" cy="50" r="40" fill="#A0522D"/> <rect x="-30" y="90" width="60" height="100" rx="10" fill={color.indigo800}/> {/* Interviewer */} <circle cx="300" cy="50" r="40" fill="#F5D0A6"/> <rect x="270" y="90" width="60" height="100" rx="10" fill={color.cyan500}/> {/* Candidate */} </g>
    {/* Code/Logic Icon */}
    <g transform="translate(600, 120)"> <path d="M-30 0 L -10 20 L -30 40 M 10 0 L 30 20 L 10 40" stroke={color.slate700} strokeWidth="6" fill="none" /> </g>
  </svg>
);
// 9. Human Resources and Personal Interview
const Sec9_HrInterviewSVG = (props) => (
  <svg viewBox="0 0 800 380" role="img" aria-label="HR and Personal Interview" {...props}>
    <BG id="gSec9" stops={[{ offset: "0%", color: color.cyan50 }, { offset: "100%", color: color.indigo50 }]} /> <rect x="0" y="0" width="800" height="380" rx="20" fill="url(#gSec9)" />
    {/* Person Figure */}
    <g transform="translate(180, 100)"> <circle cx="0" cy="0" r="50" fill="#F5D0A6" /> <rect x="-40" y="50" width="80" height="150" rx="10" fill={color.indigo600} /> </g>
    {/* Speech Bubble (Personality) */}
    <g transform="translate(300, 80)"> <path d="M0 0 H 200 C 210 0, 210 10, 200 10 V 80 C 210 80, 210 90, 200 90 H 0 C -10 90, -10 80, 0 80 V 10 C -10 10, -10 0, 0 0 Z" fill={color.white} stroke={color.slate300} /> <path d="M20 90 L 40 90 L -10 130 Z" fill={color.white} /> <text x="30" y="40">Adaptability?</text> <text x="30" y="65">Teamwork?</text> </g>
  </svg>
);
// 10. Medical Examination and Background Verification
const Sec10_MedicalBackgroundSVG = (props) => (
  <svg viewBox="0 0 800 380" role="img" aria-label="Medical and Background Verification" {...props}>
    <BG id="gSec10" stops={[{ offset: "0%", color: color.indigo50 }, { offset: "100%", color: color.cyan50 }]} /> <rect x="0" y="0" width="800" height="380" rx="20" fill="url(#gSec10)" />
    {/* Medical Icon */}
    <g transform="translate(200, 100)"> <rect x="0" y="0" width="150" height="180" rx="10" fill={color.white} stroke={color.slate300} /> <path d="M75 30 V 150 M 40 90 H 110" stroke={color.rose600} strokeWidth="8" /> <text x="75" y="170" textAnchor="middle">Medical</text> </g>
    {/* Background Check Icon */}
    <g transform="translate(450, 80)"> <circle cx="0" cy="0" r="50" fill="#F5D0A6" /> <rect x="-40" y="50" width="80" height="130" rx="10" fill={color.indigo100} /> <g transform="translate(80, 20)"> <circle cx="0" cy="0" r="60" fill={color.cyan100} opacity="0.7" stroke={color.cyan500} strokeWidth="6" /> <line x1="45" y1="45" x2="90" y2="90" stroke={color.cyan500} strokeWidth="8" /> </g> </g>
  </svg>
);
// 11. Final Selection and Offer of Engagement
const Sec11_SelectionOfferSVG = (props) => (
  <svg viewBox="0 0 800 380" role="img" aria-label="Final Selection and Offer" {...props}>
    <BG id="gSec11" stops={[{ offset: "0%", color: color.emerald50 }, { offset: "100%", color: color.cyan50 }]} /> <rect x="0" y="0" width="800" height="380" rx="20" fill="url(#gSec11)" />
    {/* Merit List Document */}
    <g transform="translate(100, 60)"> <Card x="0" y="0" w="400" h="280" r="12" /> <text x="30" y="50" fontSize="24" fontWeight="bold">Merit List</text> <rect x="30" y="80" width="340" height="8" rx="4" fill={color.slate400}/> <text x="30" y="110">1. Candidate A</text> <text x="30" y="140">2. Candidate B</text> </g>
    {/* Offer Letter */}
    <g transform="translate(500, 120)"> <rect x="0" y="0" width="180" height="140" rx="10" fill={color.white} stroke={color.amber500} strokeWidth="3" transform="rotate(5)" /> <text x="20" y="40">Offer Letter</text> <circle cx="140" cy="100" r="20" fill={color.amber100}/> </g>
  </svg>
);
// 12. Onboarding, Induction, and Legal Disclaimer
const Sec12_OnboardingSVG = (props) => (
  <svg viewBox="0 0 800 380" role="img" aria-label="Onboarding, Induction, Disclaimer" {...props}>
    <BG id="gSec12" stops={[{ offset: "0%", color: color.cyan50 }, { offset: "100%", color: color.indigo50 }]} /> <rect x="0" y="0" width="800" height="380" rx="20" fill="url(#gSec12)" />
    {/* Welcome/Handshake */}
    <g transform="translate(150, 100)"> <path d="M0 0 L 60 60 L 120 0 L 160 40 L 80 120 L 40 80 Z" fill={color.indigo300} /> <path d="M0 60 L 60 0 L 120 60 L 160 20 L 80 -60 L 40 -20 Z" fill={color.emerald300} /> </g>
    {/* Policy Document */}
    <g transform="translate(400, 80)"> <Card x="0" y="0" w="300" h="220" r="12" /> <text x="30" y="50" fontSize="20" fontWeight="bold">CRCCF Policy</text> <rect x="30" y="70" width="240" height="8" rx="4" fill={color.slate400}/> </g>
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
export default function RecruitmentAndSelectionProcess() {
  const { container, itemUp } = useAnims();
  const heroRef = useRef(null);
  const { scrollYProgress } = useScroll({ target: heroRef, offset: ["start start", "end start"] });
  const heroY = useTransform(scrollYProgress, [0, 1], [0, -40]);

  // Map section IDs to SVG components (12 defined)
  const svgMap = {
    'sec1-step-1-registration-and-candidate-conduct': Sec1_RegistrationSVG,
    'sec2-step-2-application-submission-and-document-validation': Sec2_SubmissionValidationSVG,
    'sec3-step-3-verification-screening-and-compliance': Sec3_VerificationScreeningSVG,
    'sec4-step-4-acknowledgement-verification-and-shortlisting': Sec4_AcknowledgeVerifySVG,
    'sec5-step-5-telephonic-or-virtual-interview': Sec5_VirtualInterviewSVG,
    'sec6-step-6-online-written-examination': Sec6_WrittenExamSVG,
    'sec7-step-7-english-grammar-and-skill-assessment-test': Sec7_EnglishSkillTestSVG,
    'sec8-step-8-technical-and-non-technical-physical-interview': Sec8_PhysicalInterviewSVG,
    'sec9-step-9-human-resources-and-personal-interview': Sec9_HrInterviewSVG,
    'sec10-step-10-medical-examination-and-background-verification': Sec10_MedicalBackgroundSVG,
    'sec11-step-11-final-selection-and-offer-of-engagement': Sec11_SelectionOfferSVG,
    'sec12-step-12-onboarding-induction-and-legal-disclaimer': Sec12_OnboardingSVG,
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
        <span className="text-gray-700" aria-current="page">Selection Process</span> {/* Updated text */}
      </motion.nav>

      {/* Hero with Video-SVG (selection process scene) */}
      <div ref={heroRef} className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-6 md:gap-8 lg:gap-10 items-center">
        <motion.div variants={itemUp}>
          <h1 className="text-[22px] sm:text-3xl font-bold text-gray-900">{data.title}</h1>
          <div className="mt-3 sm:mt-4 flex flex-wrap gap-2">
            {["Process", "Selection", "Recruitment", "Steps"].map((pill) => ( // Updated pills
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
              <VideoHeroSelectionProcess // Corrected Hero component name
                src="/assets/video/selection-process-hero.mp4"
                poster="/assets/video/selection-process-hero.jpg"
              />
            </div>
          </div>
        </motion.div>
      </div>

      {/* Sections */}
      <div className="mt-8 sm:mt-10 md:mt-12">
        {/* Iterate over the imported data */}
        {recruitmentAndSelectionProcessData.map((sec, idx) => {
          // Use the updated svgMap, fallback to the first SVG if ID mismatch
          const SVGComp = svgMap[sec.id] || Sec1_RegistrationSVG;
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

      {/* The disclaimer is now section 12 from the data, rendered by the map */}

    </motion.section>
  );
}