// src/pages/careers/RecruitmentCalender.jsx
import React, { useRef } from "react";
import { Link } from "react-router-dom";
import { motion, useReducedMotion, useScroll, useTransform, useSpring } from "framer-motion";
// Correct import path and variable name as per your stub and data file
import { recruitmentCalenderData } from '../../data/recruitment_rules_policies/recruitmentCalenderData';

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
  title: "Recruitment Calendar", // Updated Title slightly for standard spelling
  // Tagline will be pulled per section from the imported data
};

/* -------------------------- HERO: Video SVG (inline) -------------------------- */
/* Scene: Stylized calendar page with CRCCF logo, planning/scheduling icons. */
const VideoHeroCalendar = ({ src = "", poster = "" }) => {
  const prefersReduced =
    typeof window !== "undefined" &&
    window.matchMedia &&
    window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  const title = "CRCCF Recruitment Calendar Hero";
  const desc =
    "A stylized calendar with planning icons, representing the recruitment schedule. The background is a masked video or a soft gradient.";

  // Fallback: animated gradient stage + overlay
  if (prefersReduced || !src) {
    return (
      <svg viewBox="0 0 1000 460" role="img" aria-labelledby="calTitle calDesc" className="w-full h-auto">
        <title id="calTitle">{title}</title>
        <desc id="calDesc">{desc}</desc>
        <defs>
          <linearGradient id="calGrad" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor={color.cyan100}>
              <animate attributeName="offset" values="0;0.15;0" dur="8s" repeatCount="indefinite" />
            </stop>
            <stop offset="55%" stopColor={color.indigo100}>
              <animate attributeName="offset" values="0.55;0.85;0.55" dur="8s" repeatCount="indefinite" />
            </stop>
            <stop offset="100%" stopColor={color.slate200} />
          </linearGradient>
          <filter id="calSoft" x="-20%" y="-20%" width="140%" height="140%">
            <feGaussianBlur in="SourceGraphic" stdDeviation="8" result="b" />
            <feColorMatrix in="b" type="matrix" values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 .6 0" />
          </filter>
          <clipPath id="calStage">
            <rect x="40" y="36" width="640" height="388" rx="26" />
          </clipPath>
        </defs>

        <g filter="url(#calSoft)">
          <rect x="0" y="0" width="1000" height="460" rx="28" fill="url(#calGrad)" />
        </g>
        <g clipPath="url(#calStage)">
          <rect x="0" y="0" width="1000" height="460" fill="url(#calGrad)">
            <animate attributeName="x" values="0;22;0" dur="8s" repeatCount="indefinite" />
          </rect>
        </g>

        {CalendarOverlay()}
      </svg>
    );
  }

  // Main masked video version with overlay
  return (
    <svg viewBox="0 0 1000 460" className="w-full h-auto block" role="img" aria-label={title}>
      <defs>
        <linearGradient id="calBG" x1="0" y1="0" x2="1" y2="1">
           <stop offset="0%" stopColor={color.cyan100} />
           <stop offset="55%" stopColor={color.indigo100} />
           <stop offset="100%" stopColor={color.slate200} />
        </linearGradient>
        <filter id="calSoft2" x="-20%" y="-20%" width="140%" height="140%">
          <feGaussianBlur in="SourceGraphic" stdDeviation="8" result="b" />
          <feColorMatrix in="b" type="matrix" values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 .6 0" />
        </filter>
        <clipPath id="calStage2">
          <rect x="40" y="36" width="640" height="388" rx="26" />
        </clipPath>
      </defs>

      <g filter="url(#calSoft2)">
        <rect x="0" y="0" width="1000" height="460" rx="28" fill="url(#calBG)" />
      </g>

      {/* poster + masked video */}
      <g clipPath="url(#calStage2)">
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

      {CalendarOverlay()}
    </svg>
  );
};

/* ----------------------- Overlay: calendar scene ----------------------- */
function CalendarOverlay() {
  return (
    <g transform="translate(680, 50)">
      {/* Calendar */}
      <rect x="20" y="20" width="280" height="360" rx="15" fill={color.white} stroke={color.slate300} strokeWidth="3" />
      <rect x="20" y="20" width="280" height="50" rx="15" fill={color.indigo100} />
      <text x="160" y="55" fontFamily="sans-serif" fontSize="20" fontWeight="bold" fill={color.indigo800} textAnchor="middle">CRCCF Calendar</text>
      {/* Grid Lines */}
      <line x1="20" y1="120" x2="300" y2="120" stroke={color.slate200} />
      <line x1="20" y1="170" x2="300" y2="170" stroke={color.slate200} />
      <line x1="20" y1="220" x2="300" y2="220" stroke={color.slate200} />
      <line x1="20" y1="270" x2="300" y2="270" stroke={color.slate200} />
      <line x1="20" y1="320" x2="300" y2="320" stroke={color.slate200} />
      <line x1="100" y1="70" x2="100" y2="380" stroke={color.slate200} />
      <line x1="180" y1="70" x2="180" y2="380" stroke={color.slate200} />
      <line x1="260" y1="70" x2="260" y2="380" stroke={color.slate200} />
      {/* Highlighted Date */}
      <rect x="110" y="130" width="60" height="30" rx="5" fill={color.emerald100} />
      <text x="140" y="150" fontFamily="sans-serif" fontSize="14" fontWeight="bold" fill={color.emerald600} textAnchor="middle">Q2 Start</text>
      {/* Clock Icon */}
       <g transform="translate(40, 340)">
         <circle cx="0" cy="0" r="20" fill={color.white} stroke={color.slate400} />
         <line x1="0" y1="0" x2="0" y2="-10" stroke={color.slate700} strokeWidth="2" />
         <line x1="0" y1="0" x2="8" y2="0" stroke={color.slate700} strokeWidth="2" />
         <animateTransform attributeName="transform" type="rotate" values="40 340 0; 40 340 360" dur="8s" repeatCount="indefinite" transform-origin="0 0" />
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

// 1. Introduction and Purpose
const Sec1_IntroPurposeSVG = (props) => (
  <svg viewBox="0 0 800 380" role="img" aria-label="Introduction and Purpose" {...props}>
    <BG id="gSec1" stops={[{ offset: "0%", color: color.indigo50 }, { offset: "100%", color: color.cyan50 }]} /> <SoftGlow id="glowSec1" std={10} alpha={0.4} /> <rect x="0" y="0" width="800" height="380" rx="20" fill="url(#gSec1)" />
    {/* Calendar */}
    <g transform="translate(100, 80)"> <Card x="0" y="0" w="300" h="220" r="15"/> <rect x="0" y="0" width="300" height="50" rx="15" fill={color.indigo100}/> <text x="150" y="35" textAnchor="middle" fontSize="20" fontWeight="bold">Schedule</text> <line x1="0" y1="100" x2="300" y2="100" stroke={color.slate200}/> </g>
    {/* Scales */}
    <g transform="translate(500, 120)"> <path d="M0 0 H 150" stroke={color.slate700} strokeWidth="5"/> <path d="M75 0 V 30" stroke={color.slate700} strokeWidth="5"/> <g transform="translate(20, 30)"><path d="M0 0 L -25 50 L 25 50 Z" fill={color.amber100} stroke={color.amber500}/><path d="M0 0 V -15" stroke={color.slate700} strokeWidth="3"/></g> <g transform="translate(130, 30)"><path d="M0 0 L -25 50 L 25 50 Z" fill={color.amber100} stroke={color.amber500}/><path d="M0 0 V -15" stroke={color.slate700} strokeWidth="3"/></g> <animateTransform attributeName="transform" type="rotate" values="500 120 -2; 500 120 2; 500 120 -2" dur="2.5s" repeatCount="indefinite" transform-origin="75 0"/> </g>
  </svg>
);
// 2. Calendar Overview and Structure
const Sec2_CalendarStructureSVG = (props) => (
  <svg viewBox="0 0 800 380" role="img" aria-label="Calendar Overview and Structure" {...props}>
    <BG id="gSec2" stops={[{ offset: "0%", color: color.cyan25 }, { offset: "100%", color: color.emerald50 }]} /> <rect x="0" y="0" width="800" height="380" rx="20" fill="url(#gSec2)" />
    {/* Quarters */}
    <g transform="translate(50, 80)"> <rect x="0" y="0" width="150" height="200" rx="10" fill={color.white}/> <text x="75" y="30" textAnchor="middle" fontWeight="bold">Q1: Plan</text> </g>
    <g transform="translate(230, 80)"> <rect x="0" y="0" width="150" height="200" rx="10" fill={color.cyan100}/> <text x="75" y="30" textAnchor="middle" fontWeight="bold">Q2: Announce</text> </g>
    <g transform="translate(410, 80)"> <rect x="0" y="0" width="150" height="200" rx="10" fill={color.indigo100}/> <text x="75" y="30" textAnchor="middle" fontWeight="bold">Q3: Assess</text> </g>
    <g transform="translate(590, 80)"> <rect x="0" y="0" width="150" height="200" rx="10" fill={color.emerald100}/> <text x="75" y="30" textAnchor="middle" fontWeight="bold">Q4: Onboard</text> </g>
  </svg>
);
// 3. Vacancy Identification and Approval Timeline
const Sec3_VacancyApprovalSVG = (props) => (
  <svg viewBox="0 0 800 380" role="img" aria-label="Vacancy Identification and Approval" {...props}>
    <BG id="gSec3" stops={[{ offset: "0%", color: color.indigo50 }, { offset: "100%", color: color.slate200 }]} /> <rect x="0" y="0" width="800" height="380" rx="20" fill="url(#gSec3)" />
    {/* Request Document */}
    <g transform="translate(100, 80)"> <Card x="0" y="0" w="250" h="220" r="12" /> <text x="20" y="40" fontSize="18" fontWeight="bold">Requisition</text> </g>
    {/* Arrow */}
    <g transform="translate(380, 190)"> <line x1="0" y1="0" x2="60" y2="0" stroke={color.slate500} strokeWidth="6"/> <polygon points="60 -10, 80 0, 60 10" fill={color.slate500}/> </g>
    {/* Approval Stamp */}
    <g transform="translate(500, 100)"> <circle cx="0" cy="0" r="80" fill={color.emerald100} stroke={color.emerald600} strokeWidth="5"/> <text x="0" y="10" fontSize="24" fontWeight="bold" fill={color.emerald600} textAnchor="middle">Approved</text> <animateTransform attributeName="transform" type="scale" values="1;1.03;1" dur="1.5s" repeatCount="indefinite" transform-origin="500 100"/> </g>
  </svg>
);
// 4. Announcement and Public Notification
const Sec4_AnnouncementSVG = (props) => (
  <svg viewBox="0 0 800 380" role="img" aria-label="Announcement and Public Notification" {...props}>
    <BG id="gSec4" stops={[{ offset: "0%", color: color.cyan50 }, { offset: "100%", color: color.emerald50 }]} /> <rect x="0" y="0" width="800" height="380" rx="20" fill="url(#gSec4)" />
    {/* Megaphone */}
    <g transform="translate(150, 120)"> <polygon points="0 0, 50 0, 150 60, 150 100, 50 160, 0 160" fill={color.rose400} /> <rect x="-30" y="60" width="30" height="40" rx="5" fill={color.rose600}/> <g transform="translate(160, 80)" stroke={color.rose400} strokeWidth="4" fill="none"> <path d="M0 0 C 20 0, 20 20, 40 20"><animate attributeName="d" values="M0 0 C 20 0, 20 20, 40 20; M10 0 C 30 0, 30 20, 50 20; M0 0 C 20 0, 20 20, 40 20" dur="1s" repeatCount="indefinite" /></path> <path d="M0 -20 C 30 -20, 30 40, 60 40"><animate attributeName="d" values="M0 -20 C 30 -20, 30 40, 60 40; M10 -20 C 40 -20, 40 40, 70 40; M0 -20 C 30 -20, 30 40, 60 40" dur="1s" delay="0.2s" repeatCount="indefinite" /></path> </g> </g>
    {/* Website Screen */}
    <g transform="translate(400, 80)"> <rect x="0" y="0" width="300" height="200" rx="15" fill={color.slate900}/> <rect x="10" y="10" width="280" height="180" rx="8" fill={color.white}/> <text x="30" y="50" fontSize="18">www.crccf.in</text> </g>
  </svg>
);
// 5. Application and Screening Schedule
const Sec5_AppScreenScheduleSVG = (props) => (
  <svg viewBox="0 0 800 380" role="img" aria-label="Application and Screening Schedule" {...props}>
    <BG id="gSec5" stops={[{ offset: "0%", color: color.indigo50 }, { offset: "100%", color: color.cyan50 }]} /> <rect x="0" y="0" width="800" height="380" rx="20" fill="url(#gSec5)" />
    {/* Calendar */}
    <g transform="translate(100, 80)"> <Card x="0" y="0" w="300" h="220" r="15"/> <rect x="0" y="0" width="300" height="50" rx="15" fill={color.indigo100}/> <text x="150" y="35" textAnchor="middle" fontSize="20" fontWeight="bold">Schedule</text> <rect x="30" y="80" width="60" height="40" fill={color.cyan100}/> <text x="60" y="105">Apply</text> <rect x="120" y="140" width="60" height="40" fill={color.emerald100}/> <text x="150" y="165">Screen</text> </g>
    {/* Magnifying Glass */}
    <g transform="translate(500, 120)"> <circle cx="0" cy="0" r="80" fill={color.cyan100} opacity="0.7" stroke={color.cyan500} strokeWidth="8" /> <line x1="60" y1="60" x2="120" y2="120" stroke={color.cyan500} strokeWidth="10" /> </g>
  </svg>
);
// 6. Examination and Evaluation Periods
const Sec6_ExamEvalSVG = (props) => (
  <svg viewBox="0 0 800 380" role="img" aria-label="Examination and Evaluation" {...props}>
    <BG id="gSec6" stops={[{ offset: "0%", color: color.slate200 }, { offset: "100%", color: color.indigo50 }]} /> <rect x="0" y="0" width="800" height="380" rx="20" fill="url(#gSec6)" />
    {/* Exam Paper */}
    <g transform="translate(100, 60)"> <Card x="0" y="0" w="400" h="280" r="12" /> <text x="30" y="50" fontSize="20" fontWeight="bold">Written Exam</text> <rect x="30" y="80" width="340" height="8" rx="4" fill={color.slate400}/> <circle cx="50" cy="110" r="8" stroke={color.slate500} fill="none"/> <rect x="70" y="106" width="280" height="8" rx="4" fill={color.slate400}/> </g>
    {/* Clock */}
    <g transform="translate(550, 150)"> <circle cx="0" cy="0" r="60" fill="white" stroke={color.slate300}/> <line x1="0" y1="0" x2="0" y2="-35" stroke={color.slate700} strokeWidth="4"/> <line x1="0" y1="0" x2="25" y2="0" stroke={color.slate700} strokeWidth="4"> <animateTransform attributeName="transform" type="rotate" values="0 0 0; 360 0 0" dur="5s" repeatCount="indefinite" transform-origin="0 0"/> </line> </g>
  </svg>
);
// 7. Interview and Final Assessment Scheduling
const Sec7_InterviewScheduleSVG = (props) => (
  <svg viewBox="0 0 800 380" role="img" aria-label="Interview Scheduling" {...props}>
    <BG id="gSec7" stops={[{ offset: "0%", color: color.cyan50 }, { offset: "100%", color: color.emerald50 }]} /> <rect x="0" y="0" width="800" height="380" rx="20" fill="url(#gSec7)" />
    {/* Calendar Page */}
    <g transform="translate(150, 80)"> <Card x="0" y="0" w="250" h="220" r="12"/> <rect x="0" y="0" width="250" height="40" fill={color.indigo100}/> <text x="125" y="28" textAnchor="middle" fontWeight="bold">Interviews</text> <rect x="30" y="70" width="50" height="30" fill={color.emerald100}/> <text x="55" y="90">Day 1</text> </g>
    {/* Figures */}
    <g transform="translate(500, 100)"> <circle cx="0" cy="0" r="40" fill={color.cyan100}/> <rect x="-30" y="40" width="60" height="100" rx="8" fill={color.cyan100}/> <circle cx="120" cy="0" r="40" fill={color.indigo100}/> <rect x="90" y="40" width="60" height="100" rx="8" fill={color.indigo100}/> </g>
  </svg>
);
// 8. Result Publication and Merit List Timelines
const Sec8_ResultsSVG = (props) => (
  <svg viewBox="0 0 800 380" role="img" aria-label="Result Publication and Merit List" {...props}>
    <BG id="gSec8" stops={[{ offset: "0%", color: color.amber50 }, { offset: "100%", color: color.indigo50 }]} /> <rect x="0" y="0" width="800" height="380" rx="20" fill="url(#gSec8)" />
    {/* Merit List */}
    <g transform="translate(100, 60)"> <Card x="0" y="0" w="400" h="280" r="12" /> <text x="30" y="50" fontSize="24" fontWeight="bold">Merit List</text> <rect x="30" y="80" width="340" height="8" rx="4" fill={color.slate400}/> <text x="30" y="110">1. Candidate A</text> </g>
    {/* Publication Icon */}
    <g transform="translate(550, 150)"> <circle cx="0" cy="0" r="60" fill={color.white} stroke={color.slate300}/> <path d="M-30 -20 H 30 V 20 H -30 Z" fill={color.indigo100}/> <line x1="-20" y1="-10" x2="20" y2="-10" stroke={color.indigo600}/> </g>
  </svg>
);
// 9. Onboarding, Orientation, and Training Calendar
const Sec9_OnboardingSVG = (props) => (
  <svg viewBox="0 0 800 380" role="img" aria-label="Onboarding, Orientation, Training" {...props}>
    <BG id="gSec9" stops={[{ offset: "0%", color: color.indigo50 }, { offset: "100%", color: color.cyan50 }]} /> <rect x="0" y="0" width="800" height="380" rx="20" fill="url(#gSec9)" />
    {/* Welcome/Handshake */}
    <g transform="translate(150, 100)"> <path d="M0 0 L 60 60 L 120 0 L 160 40 L 80 120 L 40 80 Z" fill={color.indigo300} /> <path d="M0 60 L 60 0 L 120 60 L 160 20 L 80 -60 L 40 -20 Z" fill={color.emerald300} /> </g>
    {/* Calendar */}
    <g transform="translate(450, 80)"> <Card x="0" y="0" w="250" h="220" r="12"/> <rect x="0" y="0" width="250" height="40" fill={color.indigo100}/> <text x="125" y="28" textAnchor="middle" fontWeight="bold">Onboarding: Q4</text> </g>
  </svg>
);
// 10. Calendar Review, Updates, and Legal Disclaimer
const Sec10_ReviewDisclaimerSVG = (props) => (
  <svg viewBox="0 0 800 380" role="img" aria-label="Review, Updates, Disclaimer" {...props}>
    <BG id="gSec10" stops={[{ offset: "0%", color: color.slate200 }, { offset: "100%", color: color.amber50 }]} /> <rect x="0" y="0" width="800" height="380" rx="20" fill="url(#gSec10)" />
    {/* Calendar with Update Icon */}
    <g transform="translate(100, 80)"> <Card x="0" y="0" w="300" h="220" r="15"/> <rect x="0" y="0" width="300" height="50" rx="15" fill={color.indigo100}/> <g transform="translate(250, 25)"> <path d="M0 0 C 15 0, 15 20, 0 20 S -15 0, 0 0" stroke={color.slate700} strokeWidth="3" fill="none"/> <path d="M0 20 L -8 12 M 0 20 L 8 12" stroke={color.slate700} strokeWidth="3"/> <animateTransform attributeName="transform" type="rotate" values="0 0 0; 360 0 0" dur="4s" repeatCount="indefinite" transform-origin="0 10"/> </g> </g>
    {/* Gavel */}
    <g transform="translate(450, 150)"> <rect x="0" y="0" width="180" height="30" rx="8" fill={color.amber500} transform="rotate(10)"/> <rect x="70" y="-60" width="25" height="80" rx="5" fill={color.amber500} transform="rotate(10)"/> </g>
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
export default function RecruitmentCalender() { // Using name from stub
  const { container, itemUp } = useAnims();
  const heroRef = useRef(null);
  const { scrollYProgress } = useScroll({ target: heroRef, offset: ["start start", "end start"] });
  const heroY = useTransform(scrollYProgress, [0, 1], [0, -40]);

  // Map section IDs to SVG components (10 defined)
  const svgMap = {
    'sec1-introduction-and-purpose': Sec1_IntroPurposeSVG,
    'sec2-calendar-overview-and-structure': Sec2_CalendarStructureSVG,
    'sec3-vacancy-identification-and-approval-timeline': Sec3_VacancyApprovalSVG,
    'sec4-announcement-and-public-notification': Sec4_AnnouncementSVG,
    'sec5-application-and-screening-schedule': Sec5_AppScreenScheduleSVG,
    'sec6-examination-and-evaluation-periods': Sec6_ExamEvalSVG,
    'sec7-interview-and-final-assessment-scheduling': Sec7_InterviewScheduleSVG,
    'sec8-result-publication-and-merit-list-timelines': Sec8_ResultsSVG,
    'sec9-onboarding-orientation-and-training-calendar': Sec9_OnboardingSVG,
    'sec10-calendar-review-updates-and-legal-disclaimer': Sec10_ReviewDisclaimerSVG,
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
        <span className="text-gray-700" aria-current="page">Recruitment Calendar</span> {/* Updated text */}
      </motion.nav>

      {/* Hero with Video-SVG (calendar scene) */}
      <div ref={heroRef} className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-6 md:gap-8 lg:gap-10 items-center">
        <motion.div variants={itemUp}>
          <h1 className="text-[22px] sm:text-3xl font-bold text-gray-900">{data.title}</h1>
          <div className="mt-3 sm:mt-4 flex flex-wrap gap-2">
            {["Schedule", "Recruitment", "Timeline", "Transparency"].map((pill) => ( // Updated pills
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
              <VideoHeroCalendar // Corrected Hero component name
                src="/assets/video/recruitment-calendar-hero.mp4"
                poster="/assets/video/recruitment-calendar-hero.jpg"
              />
            </div>
          </div>
        </motion.div>
      </div>

      {/* Sections */}
      <div className="mt-8 sm:mt-10 md:mt-12">
        {/* Iterate over the imported data */}
        {recruitmentCalenderData.map((sec, idx) => { // Use correct data variable name
          // Use the updated svgMap, fallback to the first SVG if ID mismatch
          const SVGComp = svgMap[sec.id] || Sec1_IntroPurposeSVG;
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

      {/* The disclaimer is now section 10 from the data, rendered by the map */}

    </motion.section>
  );
}