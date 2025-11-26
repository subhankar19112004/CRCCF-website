// src/pages/careers/VolunteerAndInternshipPolicy.jsx
import React, { useRef } from "react";
import { Link } from "react-router-dom";
import { motion, useReducedMotion, useScroll, useTransform, useSpring } from "framer-motion";
// Correct import path as per your stub
import { volunteerAndInternshipPolicyData } from '../../data/recruitment_rules_policies/volunteerAndInternshipPolicyData';

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
  title: "Volunteer & Internship Policy",
  // Tagline will be pulled per section from the imported data
};

/* -------------------------- HERO: Video SVG (inline) -------------------------- */
/* Scene: Diverse group of students/volunteers collaborating, learning, or working on a project. */
const VideoHeroVolunteerIntern = ({ src = "", poster = "" }) => {
  const prefersReduced =
    typeof window !== "undefined" &&
    window.matchMedia &&
    window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  const title = "CRCCF Volunteer and Internship Hero";
  const desc =
    "Diverse group collaborating and learning, representing volunteer and internship opportunities. The background is a masked video or a soft gradient.";

  // Fallback: animated gradient stage + overlay
  if (prefersReduced || !src) {
    return (
      <svg viewBox="0 0 1000 460" role="img" aria-labelledby="viTitle viDesc" className="w-full h-auto">
        <title id="viTitle">{title}</title>
        <desc id="viDesc">{desc}</desc>
        <defs>
          <linearGradient id="viGrad" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor={color.cyan100}>
              <animate attributeName="offset" values="0;0.15;0" dur="8s" repeatCount="indefinite" />
            </stop>
            <stop offset="55%" stopColor={color.emerald100}>
              <animate attributeName="offset" values="0.55;0.85;0.55" dur="8s" repeatCount="indefinite" />
            </stop>
            <stop offset="100%" stopColor={color.amber100} />
          </linearGradient>
          <filter id="viSoft" x="-20%" y="-20%" width="140%" height="140%">
            <feGaussianBlur in="SourceGraphic" stdDeviation="8" result="b" />
            <feColorMatrix in="b" type="matrix" values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 .6 0" />
          </filter>
          <clipPath id="viStage">
            <rect x="40" y="36" width="640" height="388" rx="26" />
          </clipPath>
        </defs>

        <g filter="url(#viSoft)">
          <rect x="0" y="0" width="1000" height="460" rx="28" fill="url(#viGrad)" />
        </g>
        <g clipPath="url(#viStage)">
          <rect x="0" y="0" width="1000" height="460" fill="url(#viGrad)">
            <animate attributeName="x" values="0;22;0" dur="8s" repeatCount="indefinite" />
          </rect>
        </g>

        {VolunteerInternOverlay()}
      </svg>
    );
  }

  // Main masked video version with overlay
  return (
    <svg viewBox="0 0 1000 460" className="w-full h-auto block" role="img" aria-label={title}>
      <defs>
        <linearGradient id="viBG" x1="0" y1="0" x2="1" y2="1">
           <stop offset="0%" stopColor={color.cyan100} />
           <stop offset="55%" stopColor={color.emerald100} />
           <stop offset="100%" stopColor={color.amber100} />
        </linearGradient>
        <filter id="viSoft2" x="-20%" y="-20%" width="140%" height="140%">
          <feGaussianBlur in="SourceGraphic" stdDeviation="8" result="b" />
          <feColorMatrix in="b" type="matrix" values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 .6 0" />
        </filter>
        <clipPath id="viStage2">
          <rect x="40" y="36" width="640" height="388" rx="26" />
        </clipPath>
      </defs>

      <g filter="url(#viSoft2)">
        <rect x="0" y="0" width="1000" height="460" rx="28" fill="url(#viBG)" />
      </g>

      {/* poster + masked video */}
      <g clipPath="url(#viStage2)">
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

      {VolunteerInternOverlay()}
    </svg>
  );
};

/* ----------------------- Overlay: volunteer/intern scene ----------------------- */
function VolunteerInternOverlay() {
  return (
    <g transform="translate(680, 50)">
       {/* Figures */}
      <g transform="translate(40, 180)"> <circle cx="0" cy="0" r="30" fill="#F5D0A6"/> <rect x="-20" y="30" width="40" height="100" rx="10" fill={color.cyan500}/> </g>
      <g transform="translate(140, 160)"> <circle cx="0" cy="0" r="30" fill="#A0522D"/> <rect x="-20" y="30" width="40" height="120" rx="10" fill={color.emerald600}/> </g>
      <g transform="translate(240, 180)"> <circle cx="0" cy="0" r="30" fill="#F5D0A6"/> <rect x="-20" y="30" width="40" height="100" rx="10" fill={color.amber500}/> </g>
       {/* Table / Project */}
      <rect x="0" y="300" width="320" height="60" rx="10" fill={color.slate300}/>
       {/* Lightbulb */}
       <g transform="translate(160, 80)"> <path d="M0 -25 C -25 -25, -25 5, 0 5 C 25 5, 25 -25, 0 -25 Z" fill={color.amber100}/> <rect x="-8" y="5" width="16" height="8" fill={color.amber100}/> <animate attributeName="opacity" values="1;0.5;1" dur="1.5s" repeatCount="indefinite"/> </g>
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

// 1. Purpose & Vision
const Sec1_PurposeVisionSVG = (props) => (
  <svg viewBox="0 0 800 380" role="img" aria-label="Purpose and Vision" {...props}>
    <BG id="gSec1" stops={[{ offset: "0%", color: color.indigo50 }, { offset: "100%", color: color.cyan50 }]} /> <SoftGlow id="glowSec1" std={10} alpha={0.4} /> <rect x="0" y="0" width="800" height="380" rx="20" fill="url(#gSec1)" />
    {/* Open Book (Policy) */}
    <g transform="translate(100, 80)"> <path d="M50 30 C 150 -30, 250 -30, 350 30 L 350 250 C 250 190, 150 190, 50 250 Z" fill={color.white} stroke={color.slate300}/> <path d="M200 35 V 245" stroke={color.slate300}/> <text x="70" y="70" fontSize="20" fontWeight="bold">Policy</text> </g>
    {/* Group of diverse people */}
    <g transform="translate(500, 120)"> <circle cx="0" cy="0" r="30" fill={color.cyan100}/> <rect x="-20" y="30" width="40" height="80" rx="8"/> <circle cx="80" cy="0" r="30" fill={color.emerald100}/> <rect x="60" y="30" width="40" height="80" rx="8"/> </g>
  </svg>
);
// 2. Scope & Applicability
const Sec2_ScopeSVG = (props) => ( // Reusing SVG
  <svg viewBox="0 0 800 380" role="img" aria-label="Scope and Applicability" {...props}>
     <BG id="gSec2" stops={[{ offset: "0%", color: color.cyan25 }, { offset: "100%", color: color.indigo50 }]} /> <rect x="0" y="0" width="800" height="380" rx="20" fill="url(#gSec2)" />
     <g transform="translate(400, 190)"> <circle cx="0" cy="0" r="50" fill={color.indigo600}/> <text x="0" y="10" fontSize="24" fill="white" textAnchor="middle">C</text> </g>
     <g stroke={color.slate400} strokeWidth="3" fill="none"> <path d="M400 140 V 80 H 200 V 60"/> <path d="M400 140 V 80 H 600 V 60"/> <path d="M400 240 V 300 H 200 V 320"/> <path d="M400 240 V 300 H 600 V 320"/> </g>
     <g transform="translate(180, 20)"><circle cx="0" cy="0" r="20"/><rect x="-15" y="20" width="30" height="40" rx="5"/><text y="75" textAnchor="middle" fontSize="12">Intern</text></g>
     <g transform="translate(580, 20)"><circle cx="0" cy="0" r="20"/><rect x="-15" y="20" width="30" height="40" rx="5"/><text y="75" textAnchor="middle" fontSize="12">Volunteer</text></g>
     <g transform="translate(180, 300)"><circle cx="0" cy="0" r="20"/><rect x="-15" y="20" width="30" height="40" rx="5"/><text y="75" textAnchor="middle" fontSize="12">Full-time</text></g>
     <g transform="translate(580, 300)"><circle cx="0" cy="0" r="20"/><rect x="-15" y="20" width="30" height="40" rx="5"/><text y="75" textAnchor="middle" fontSize="12">Project</text></g>
  </svg>
);
// 3. Objectives of the Program
const Sec3_ObjectivesSVG = (props) => (
  <svg viewBox="0 0 800 380" role="img" aria-label="Objectives of the Program" {...props}>
    <BG id="gSec3" stops={[{ offset: "0%", color: color.emerald50 }, { offset: "100%", color: color.cyan50 }]} /> <rect x="0" y="0" width="800" height="380" rx="20" fill="url(#gSec3)" />
    {/* Target/Goal */}
    <g transform="translate(200, 190)"> <circle cx="0" cy="0" r="100" fill="white" stroke={color.slate300}/> <circle cx="0" cy="0" r="60" fill={color.rose100} stroke={color.rose400}/> <circle cx="0" cy="0" r="20" fill={color.rose600}/> </g>
    {/* Icons */}
    <g transform="translate(500, 80)"> <path d="M-20 -15 L 20 -15 L 0 -30 Z M -20 -10 H 20 V 20 H -20 Z" fill={color.emerald600}/> <text y="40" textAnchor="middle">Education</text> </g>
    <g transform="translate(500, 180)"> <path d="M0 -20 L 15 0 L 0 20 L -15 0 Z" fill={color.amber500}/> <text y="40" textAnchor="middle">Empower</text> </g>
    <g transform="translate(500, 280)"> <path d="M-15 -10 L 15 -10 L 0 10 Z M -15 15 H 15" stroke={color.indigo600} strokeWidth="5"/> <text y="40" textAnchor="middle">Ethics</text> </g>
  </svg>
);
// 4. Eligibility & Selection Criteria
const Sec4_EligibilitySVG = (props) => ( // Reusing SVG
  <svg viewBox="0 0 800 380" role="img" aria-label="Eligibility and Selection" {...props}>
    <BG id="gSec5" stops={[{ offset: "0%", color: color.indigo25 }, { offset: "100%", color: color.cyan50 }]} /> <rect x="0" y="0" width="800" height="380" rx="20" fill="url(#gSec5)" />
    <g transform="translate(100, 80)"> <Card x="0" y="0" w="300" h="220" r="12" /> <text x="30" y="50" fontSize="20" fontWeight="bold">Eligibility</text> <text x="30" y="90">✅ 10+2 / Diploma</text> <text x="30" y="130">✅ 18+ Years</text> <text x="30" y="170">✅ Lawful Record</text> </g>
    <g transform="translate(500, 100)"> <circle cx="0" cy="0" r="40" fill="#F5D0A6" /><rect x="-30" y="40" width="60" height="100" rx="10"/> <path d="M30 0 l20 20 40 -40" stroke={color.emerald600} strokeWidth="8" fill="none"/> </g>
  </svg>
);
// 5. Roles, Duties & Work Ethics
const Sec5_RolesDutiesSVG = (props) => ( // Reusing SVG
  <svg viewBox="0 0 800 380" role="img" aria-label="Roles, Duties, Ethics" {...props}>
    <BG id="gSec9" stops={[{ offset: "0%", color: color.emerald50 }, { offset: "100%", color: color.cyan50 }]} /> <rect x="0" y="0" width="800" height="380" rx="20" fill="url(#gSec9)" />
    <g transform="translate(150, 120)"> <circle cx="0" cy="50" r="40" fill="#F5D0A6"/> <rect x="-30" y="90" width="60" height="100" rx="10"/> <rect x="-100" y="190" width="200" height="40" rx="10" fill={color.slate300}/> </g>
    <g transform="translate(400, 80)" fontSize="18"> <text x="0" y="30">📋 Duties</text> <text x="0" y="70">🤝 Teamwork</text> <text x="0" y="110">⚖️ Ethics</text> <text x="0" y="150">⏰ Punctuality</text> </g>
  </svg>
);
// 6. Training, Supervision & Mentorship
const Sec6_TrainingSupervisionSVG = (props) => ( // Reusing SVG
  <svg viewBox="0 0 800 380" role="img" aria-label="Training, Supervision, Mentorship" {...props}>
    <BG id="gSec3" stops={[{ offset: "0%", color: color.emerald50 }, { offset: "100%", color: color.cyan50 }]} /> <rect x="0" y="0" width="800" height="380" rx="20" fill="url(#gSec3)" />
    <g transform="translate(120, 100)"> <circle cx="0" cy="0" r="40" fill="#A0522D" /> <rect x="-30" y="40" width="60" height="120" rx="10"/> <circle cx="120" cy="50" r="30" fill="#F5D0A6" /> <rect x="100" y="80" width="40" height="80" rx="10"/> </g>
    <g transform="translate(350, 100)"> <path d="M0 150 C 100 50, 200 50, 300 150" stroke={color.slate700} strokeWidth="10" fill="none" /> <line x1="150" y1="80" x2="150" y2="150" stroke={color.slate700} strokeWidth="6" /> <text x="0" y="180" fontSize="16">Mentor</text> <text x="250" y="180" fontSize="16">Mentee</text> </g>
  </svg>
);
// 7. Duration, Attendance & Evaluation
const Sec7_DurationAttendanceSVG = (props) => ( // Reusing SVG
  <svg viewBox="0 0 800 380" role="img" aria-label="Duration, Attendance, Evaluation" {...props}>
    <BG id="gSec5" stops={[{ offset: "0%", color: color.indigo50 }, { offset: "100%", color: color.cyan50 }]} /> <rect x="0" y="0" width="800" height="380" rx="20" fill="url(#gSec5)" />
    <g transform="translate(100, 80)"> <Card x="0" y="0" w="300" h="220" r="15"/> <rect x="0" y="0" width="300" height="50" rx="15" fill={color.indigo100}/> <text x="150" y="35" textAnchor="middle" fontWeight="bold">Timeline</text> <text x="30" y="100">Attendance</text> </g>
    <g transform="translate(550, 190)"> <path d="M50 0 C 80 0, 80 50, 50 50 S 20 0, 50 0" stroke={color.indigo400} strokeWidth="6" fill="none"/> <path d="M50 50 L 40 40 M 50 50 L 60 40" stroke={color.indigo400} strokeWidth="6"/> <animateTransform attributeName="transform" type="rotate" values="550 190 0; 550 190 360" dur="4s" repeatCount="indefinite" transform-origin="50 25"/> </g>
  </svg>
);
// 8. Certification & Recognition
const Sec8_CertificationSVG = (props) => ( // Reusing SVG
  <svg viewBox="0 0 800 380" role="img" aria-label="Certification and Recognition" {...props}>
    <BG id="gSec4" stops={[{ offset: "0%", color: color.amber50 }, { offset: "100%", color: color.cyan50 }]} /> <rect x="0" y="0" width="800" height="380" rx="20" fill="url(#gSec4)" />
    <g transform="translate(100, 60)"> <Card x="0" y="0" w="600" h="280" r="15" stroke={color.amber500} sw="4" /> <text x="300" y="80" fontSize="30" fontWeight="bold" textAnchor="middle">Certificate</text> <g transform="translate(100, 200)"> <circle cx="0" cy="0" r="40" fill={color.indigo100} stroke={color.indigo600}/> <text x="0" y="5" fontSize="12" fontWeight="bold" textAnchor="middle">CRCCF</text> </g> <g transform="translate(500, 200)"> <circle cx="0" cy="0" r="40" fill={color.emerald100} stroke={color.emerald600}/> <path d="M-15 -10 l10 10 20-20" stroke={color.emerald600} strokeWidth="5" fill="none" /> </g> </g>
  </svg>
);
// 9. Data Confidentiality & Legal Compliance
const Sec9_ConfidentialityComplianceSVG = (props) => ( // Reusing SVG
  <svg viewBox="0 0 800 380" role="img" aria-label="Confidentiality and Compliance" {...props}>
    <BG id="gSec7" stops={[{ offset: "0%", color: color.slate200 }, { offset: "100%", color: color.indigo50 }]} /> <rect x="0" y="0" width="800" height="380" rx="20" fill="url(#gSec7)" />
    <g transform="translate(150, 80)"> <rect x="0" y="0" width="300" height="250" rx="15" fill={color.slate700}/> <rect x="20" y="20" width="260" height="210" rx="8" fill={color.slate500}/> <circle cx="150" cy="125" r="80" fill={color.slate400}/> <circle cx="150" cy="125" r="20" fill={color.slate700}/> <line x1="150" y1="125" x2="210" y2="125" stroke={color.slate900} strokeWidth="8"/> </g>
    <g transform="translate(500, 100)"> <Card x="0" y="0" w="180" h="180" r="12" /> <text x="20" y="40">Confidential</text> <g transform="translate(90, 100)"> <rect x="-30" y="0" width="60" height="45" rx="10" fill={color.slate500} /> <path d="M0 -25 C 15 -25, 15 0, 0 0 S -15 -25, 0 -25 Z" stroke={color.slate700} strokeWidth="8" fill="none" /> </g> </g>
  </svg>
);
// 10. Benefits, Limitations & Conduct Assurance
const Sec10_BenefitsLimitationsSVG = (props) => (
  <svg viewBox="0 0 800 380" role="img" aria-label="Benefits and Limitations" {...props}>
    <BG id="gSec10" stops={[{ offset: "0%", color: color.emerald50 }, { offset: "100%", color: color.cyan50 }]} /> <rect x="0" y="0" width="800" height="380" rx="20" fill="url(#gSec10)" />
    {/* Benefits (Certificate) */}
    <g transform="translate(100, 100)"> <Card x="0" y="0" w="200" h="150" r="10" /> <circle cx="150" cy="110" r="30" fill={color.amber100}/> <text x="100" y="50" textAnchor="middle">Certificate</text> </g>
    {/* Limitations (No Salary) */}
    <g transform="translate(450, 100)"> <circle cx="0" cy="0" r="60" fill={color.rose100} stroke={color.rose600}/> <line x1="-40" y1="-40" x2="40" y2="40" stroke={color.rose600} strokeWidth="8"/> <line x1="-40" y1="40" x2="40" y2="-40" stroke={color.rose600} strokeWidth="8"/> <text x="0" y="10" fontSize="50" fill={color.rose600} textAnchor="middle">₹</text> </g>
  </svg>
);
// 11. Legal Disclaimer & Closing Note
const Sec11_LegalDisclaimerSVG = (props) => ( // Reusing SVG
  <svg viewBox="0 0 800 380" role="img" aria-label="Legal Disclaimer" {...props}>
    <BG id="gSec14" stops={[{ offset: "0%", color: color.slate200 }, { offset: "100%", color: color.amber50 }]} /> <rect x="0" y="0" width="800" height="380" rx="20" fill="url(#gSec14)" />
    <g transform="translate(100, 150)"> <rect x="0" y="0" width="220" height="40" rx="10" fill={color.amber500} transform="rotate(-20)" /> <rect x="80" y="-80" width="30" height="100" rx="8" fill={color.amber500} transform="rotate(-20)" /> </g>
    <g transform="translate(380, 80)"> <Card x="0" y="0" w="320" h="220" r="12"/> <text x="20" y="50" fontSize="24" fontWeight="bold">Legal Disclaimer</text> <rect x="20" y="80" width="280" height="6" rx="3" fill={color.slate400} /> <circle cx="260" cy="170" r="40" fill={color.indigo600} /> <text x="260" y="175" fontSize="14" fill={color.white} textAnchor="middle">Section 8</text> </g>
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
export default function VolunteerAndInternshipPolicy() { // Using name from stub
  const { container, itemUp } = useAnims();
  const heroRef = useRef(null);
  const { scrollYProgress } = useScroll({ target: heroRef, offset: ["start start", "end start"] });
  const heroY = useTransform(scrollYProgress, [0, 1], [0, -40]);

  // Map section IDs to SVG components (11 defined)
  const svgMap = {
    'sec1-purpose-and-vision': Sec1_PurposeVisionSVG,
    'sec2-scope-and-applicability': Sec2_ScopeSVG,
    'sec3-objectives-of-the-program': Sec3_ObjectivesSVG,
    'sec4-eligibility-and-selection-criteria': Sec4_EligibilitySVG,
    'sec5-roles-duties-and-work-ethics': Sec5_RolesDutiesSVG,
    'sec6-training-supervision-and-mentorship': Sec6_TrainingSupervisionSVG,
    'sec7-duration-attendance-and-evaluation': Sec7_DurationAttendanceSVG,
    'sec8-certification-and-recognition': Sec8_CertificationSVG,
    'sec9-data-confidentiality-and-legal-compliance': Sec9_ConfidentialityComplianceSVG,
    'sec10-benefits-limitations-and-conduct-assurance': Sec10_BenefitsLimitationsSVG,
    'sec11-legal-disclaimer-and-closing-note': Sec11_LegalDisclaimerSVG,
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
        <span className="text-gray-700" aria-current="page">Volunteer & Internship Policy</span> {/* Updated text */}
      </motion.nav>

      {/* Hero with Video-SVG (volunteer/intern scene) */}
      <div ref={heroRef} className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-6 md:gap-8 lg:gap-10 items-center">
        <motion.div variants={itemUp}>
          <h1 className="text-[22px] sm:text-3xl font-bold text-gray-900">{data.title}</h1>
          <div className="mt-3 sm:mt-4 flex flex-wrap gap-2">
            {["Volunteer", "Internship", "Policy", "Opportunity"].map((pill) => ( // Updated pills
              <span key={pill} className="px-2.5 sm:px-3 py-1.5 text-xs sm:text-sm rounded-full bg-cyan-100 text-cyan-800 border border-cyan-200">
                {pill}
              </span>
            ))}
          </div>
        </motion.div>

        <motion.div style={{ y: heroY }} className="relative">
          <div className="absolute -inset-2 rounded-2xl bg-gradient-to-tr from-cyan-100 via-emerald-100 to-amber-100 blur-md sm:blur-lg md:blur-xl" aria-hidden="true" />
          <div className="relative rounded-2xl border border-gray-200 bg-white p-3 sm:p-4 shadow-sm">
            <div className="w-full h-auto max-h-72 sm:max-h-80 md:max-h-none overflow-hidden">
              <VideoHeroVolunteerIntern // Corrected Hero component name
                src="/assets/video/volunteer-intern-hero.mp4"
                poster="/assets/video/volunteer-intern-hero.jpg"
              />
            </div>
          </div>
        </motion.div>
      </div>

      {/* Sections */}
      <div className="mt-8 sm:mt-10 md:mt-12">
        {/* Iterate over the imported data */}
        {volunteerAndInternshipPolicyData.map((sec, idx) => { // Use correct data variable name
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

      {/* The disclaimer is now section 11 from the data, rendered by the map */}

    </motion.section>
  );
}