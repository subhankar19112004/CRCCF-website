// src/pages/ourDepartments/InternshipDepartment.jsx
import React, { useRef } from "react";
import { Link } from "react-router-dom";
import {
  motion,
  useReducedMotion,
  useScroll,
  useTransform,
  useSpring,
} from "framer-motion";

/* -------------------- Motion (respects reduced motion) -------------------- */
const useAnims = () => {
  const reduce = useReducedMotion();
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: reduce
        ? { duration: 0 }
        : { duration: 0.25, when: "beforeChildren", staggerChildren: 0.06 },
    },
  };
  const itemUp = {
    hidden: { opacity: 0, y: reduce ? 0 : 12 },
    show: { opacity: 1, y: 0, transition: { duration: reduce ? 0 : 0.28 } },
  };
  return { container, itemUp };
};

/* -------------------- Palette -------------------- */
const color = {
  cyan50: "#ECFEFF", cyan100: "#CFFAFE", cyan300: "#67E8F9", cyan500: "#06B6D4",
  indigo50:"#EEF2FF", indigo100:"#E0E7FF", indigo300:"#A5B4FC", indigo400:"#818CF8", indigo600:"#4F46E5", indigo700:"#4338CA",
  emerald100:"#D1FAE5", emerald300:"#6EE7B7", emerald400:"#34D399",
  amber100:"#FEF3C7", amber300:"#FCD34D", amber400:"#F59E0B",
  rose100:"#FFE4E6", rose300:"#FDA4AF",
  slate200:"#E2E8F0", slate300:"#CBD5E1", slate400:"#94A3B8", slate500:"#64748B", slate700:"#334155", slate900:"#0F172A",
  white:"#FFFFFF",
};

/* -------------------- Data (Conclusion LAST) -------------------- */
const data = {
  title: "Internship Department",
  shortName: "Internship",
  tagline: "Empowering Talent, Building Futures, and Upholding Legal Integrity.",
  summary:
    "Structured, compliant internships across cyber, legal, IT, and ops—bridging academia and industry with real projects, mentorship, evaluations, and verifiable credentials.",
  sections: [
    {
      id: "introduction",
      heading: "Introduction",
      desc: "Nurturing future professionals via hands-on, legally compliant internship programs.",
      bullets: [
        "Bridges academia ↔ industry for cyber, forensics, legal, and tech innovation.",
        "Delivers practical exposure, skill growth, and professional ethos.",
        "Protects dignity and rights through robust governance and privacy controls.",
      ],
      svg: "IntroSVG",
    },
    {
      id: "purpose",
      heading: "1. Purpose & Scope",
      desc: "Create opportunities aligned to CRCCF’s mission with transparent, fair, and inclusive processes.",
      bullets: [
        "Recruitment, management, and certification across technical, legal, and admin domains.",
        "Structured skill programs for cyber awareness, IT, and investigation.",
        "Compliance with national and international standards; strong university partnerships.",
      ],
      svg: "PurposeSVG",
    },
    /* ---------- Core Responsibilities split into sub-sections ---------- */
    {
      id: "recruitment",
      heading: "2.1 Recruitment & Selection",
      desc: "Legal, transparent intake—campus drives, digital interviews, and privacy-first verification.",
      bullets: [
        "Verify eligibility and academics while protecting personal data (DPDP-aligned).",
        "Issue formal internship agreements covering duties, duration, stipends, rights.",
        "Bias checks and inclusive intake across regions and backgrounds.",
      ],
      svg: "RecruitmentSVG",
    },
    {
      id: "onboarding",
      heading: "2.2 Onboarding & Orientation",
      desc: "Culture, policy, and safety grounding with mentor assignment from day one.",
      bullets: [
        "Policy briefings on cyber laws, data protection, and acceptable use.",
        "Mentor mapping for technical and professional guidance.",
        "Cyber hygiene and safety sessions with practical drills.",
      ],
      svg: "OnboardingSVG",
    },
    {
      id: "training",
      heading: "2.3 Training & Development",
      desc: "Courses in security, forensics, legal compliance, and IT frameworks—mapped to ISO/NIST.",
      bullets: [
        "Live projects and labs; peer reviews; weekly tech talks.",
        "Secure track delivery; OWASP guardrails on any code work.",
        "Alignment to ISO/IEC 27001, NIST CSF, and DPDP requirements.",
      ],
      svg: "TrainingSVG",
    },
    {
      id: "monitoring",
      heading: "2.4 Performance Monitoring",
      desc: "Monthly evaluations, analytics dashboards, and improvement loops.",
      bullets: [
        "Capture skill gains with rubrics; 1:1 mentor syncs.",
        "Digitally signed records for transparency and audit readiness.",
        "Actionable feedback with stretch goals.",
      ],
      svg: "MonitoringSVG",
    },
    {
      id: "certification",
      heading: "2.5 Certification & Recognition",
      desc: "Verifiable certificates and badges for excellence and leadership.",
      bullets: [
        "Legally recognized completion certificates and LoRs.",
        "Digital badges for top performers with blockchain-ready metadata.",
        "Showcase capstones in an internal gallery with consent.",
      ],
      svg: "CertSVG",
    },
    {
      id: "legal-compliance",
      heading: "2.6 Legal Compliance",
      desc: "Strict adherence to labor codes, apprenticeship rules, and privacy statutes.",
      bullets: [
        "Policy updates tracked to law changes; jurisdictional addenda where needed.",
        "Incident reporting and grievance redressal SLAs.",
        "Accessible accommodations and POSH-compliant environment.",
      ],
      svg: "ComplianceSVG",
    },
    {
      id: "activities",
      heading: "3. Department Activities",
      desc: "Workshops, hackathons, partnerships, transparent annual reporting, and wellness support.",
      bullets: [
        "Cyber safety workshops, job fairs, and research competitions.",
        "MoUs with universities and co-developed curricula.",
        "Mental health and wellness check-ins; escalation paths.",
      ],
      svg: "ActivitiesSVG",
    },
    {
      id: "legal-framework",
      heading: "4. Legal Framework",
      desc: "Primary statutes and standards underpinning internship operations.",
      bullets: [
        "Indian Contract Act, 1872; Apprentices Act, 1961; Shops & Establishments (state).",
        "IT Act 2000 & Amendments; DPDP Act 2023; POSH Act 2013; Companies Act 2013.",
        "ISO/IEC 27001; NIST frameworks for cybersecurity alignment.",
      ],
      svg: "LawSVG",
    },
    {
      id: "conclusion",
      heading: "5. Conclusion",
      desc: "A fair bridge from learning to professional readiness, protecting rights and dignity.",
      bullets: [
        "Structured programs + legal compliance = meaningful growth.",
        "Confidence for interns, value for CRCCF, trust for the public.",
      ],
      svg: "ConclusionSVG",
    },
    {
      id: "disclaimer",
      heading: "6. Legal Disclaimer",
      desc: "Statutory laws prevail on conflict; framework updates with legal/tech changes.",
      bullets: [
        "Versioned policy updates; public summary where appropriate.",
        "Retention and archival rules applied to internship records.",
      ],
      svg: "DisclaimerSVG",
    },
  ],
};

/* -------------------- Shared defs + Person primitive -------------------- */
const Defs = () => (
  <defs>
    <linearGradient id="gCool" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0" stopColor={color.cyan100} />
      <stop offset="1" stopColor={color.indigo100} />
    </linearGradient>
    <linearGradient id="gOk" x1="0" y1="0" x2="1" y2="0">
      <stop offset="0" stopColor={color.emerald300} />
      <stop offset="1" stopColor={color.emerald400} />
    </linearGradient>
    <linearGradient id="gWarn" x1="0" y1="0" x2="1" y2="0">
      <stop offset="0" stopColor={color.amber300} />
      <stop offset="1" stopColor={color.amber400} />
    </linearGradient>
    <pattern id="gridDots" width="8" height="8" patternUnits="userSpaceOnUse">
      <circle cx="1.5" cy="1.5" r="1.3" fill={color.indigo100} />
    </pattern>
  </defs>
);

const Person = ({ x = 0, y = 0, size = 1, tone = "#0F172A" }) => (
  <g transform={`translate(${x},${y}) scale(${size})`} fill={tone}>
    <circle cx="0" cy="-18" r="10" />
    <path d="M-14 0c2-12 12-18 14-18s12 6 14 18v30h-28z" />
    <rect x="-18" y="30" width="36" height="6" rx="3" fill={color.indigo300} />
  </g>
);

/* -------------------- Hero SVG (mentor + interns + certificates) -------------------- */
const InternshipHeroSVG = () => (
  <svg viewBox="0 0 780 360" className="w-full h-auto" role="img" aria-label="Internship hero">
    <Defs />
    <g opacity="0.35">
      <ellipse cx="220" cy="90" rx="170" ry="56" fill="url(#gCool)" />
      <ellipse cx="560" cy="90" rx="170" ry="56" fill={color.emerald100} />
      <ellipse cx="390" cy="316" rx="260" ry="36" fill={color.cyan50} />
    </g>

    {/* mentor */}
    <Person x={140} y={250} size={1.15} tone={color.slate700} />
    {/* whiteboard */}
    <g transform="translate(230,152)">
      <rect x="-110" y="-62" width="280" height="160" rx="18" fill={color.white} />
      <rect x="-88" y="-32" width="90" height="12" rx="6" fill={color.indigo300} />
      <rect x="16" y="-32" width="140" height="12" rx="6" fill={color.slate400} />
      <rect x="-88" y="-4" width="246" height="10" rx="5" fill={color.slate300} />
      <rect x="-88" y="24" width="160" height="10" rx="5" fill={color.cyan300} />
      <rect x="-88" y="52" width="120" height="10" rx="5" fill={color.slate300} />
    </g>

    {/* interns + certificates */}
    <Person x={520} y={260} size={0.95} tone={color.slate900} />
    <Person x={600} y={260} size={0.95} tone={color.slate700} />
    <g transform="translate(560,150)">
      <rect x="-22" y="-26" width="48" height="64" rx="6" fill={color.white}/>
      <rect x="36" y="-26" width="48" height="64" rx="6" fill={color.white}/>
      <circle cx="-4" cy="30" r="6" fill={color.indigo600}/>
      <circle cx="58" cy="30" r="6" fill={color.emerald400}/>
    </g>

    {/* badge rail */}
    <g transform="translate(664,210)">
      <rect x="-50" y="-12" width="90" height="24" rx="12" fill={color.indigo100}/>
      <rect x="50" y="-12" width="90" height="24" rx="12" fill={color.amber100}/>
      <path d="M40 0h10" stroke={color.slate700} strokeWidth="6" strokeLinecap="round"/>
    </g>
  </svg>
);

/* -------------------- Section SVGs (person + abstract) -------------------- */
const IntroSVG = () => (
  <svg viewBox="0 0 740 300" role="img" aria-label="Introduction" className="w-full h-full">
    <Defs />
    <Person x={120} y={220} size={1}/>
    <g transform="translate(210,92)">
      <rect x="0" y="0" width="250" height="140" rx="18" fill={color.white}/>
      <path d="M24 36h202M24 68h162M24 100h120" stroke={color.slate700} strokeWidth="6"/>
    </g>
    <g transform="translate(520,70)" opacity="0.7">
      <ellipse cx="0" cy="0" rx="120" ry="42" fill="url(#gCool)" />
      <ellipse cx="0" cy="90" rx="120" ry="42" fill={color.emerald100} />
      <rect x="-90" y="-20" width="180" height="120" rx="16" fill="url(#gridDots)" />
    </g>
  </svg>
);

const PurposeSVG = () => (
  <svg viewBox="0 0 740 300" role="img" aria-label="Purpose & Scope" className="w-full h-full">
    <Defs />
    <Person x={130} y={220} size={1}/>
    {/* scope rings + direction flag */}
    <g transform="translate(230,126)">
      <circle cx="0" cy="0" r="70" fill={color.white}/>
      <circle cx="0" cy="0" r="18" fill={color.indigo700}/>
      <circle cx="0" cy="0" r="38" fill="none" stroke={color.indigo100} strokeWidth="4"/>
    </g>
    <g transform="translate(430,80)">
      <rect x="0" y="0" width="12" height="160" rx="6" fill={color.indigo600}/>
      <path d="M12 0h160l-22 22 22 22H12z" fill={color.cyan500}/>
      <path d="M200 40h120M200 80h88" stroke={color.slate700} strokeWidth="6"/>
    </g>
  </svg>
);

const RecruitmentSVG = () => (
  <svg viewBox="0 0 740 300" role="img" aria-label="Recruitment & Selection" className="w-full h-full">
    <Defs />
    <Person x={120} y={220} size={1}/>
    {/* resume cards */}
    <g transform="translate(220,120)">
      <rect x="-90" y="-40" width="220" height="130" rx="18" fill={color.white}/>
      <rect x="-70" y="-10" width="160" height="10" rx="5" fill={color.slate400}/>
      <rect x="-70" y="18" width="120" height="10" rx="5" fill={color.indigo300}/>
      <rect x="-70" y="46" width="140" height="10" rx="5" fill={color.cyan300}/>
    </g>
    {/* check + shield */}
    <g transform="translate(520,150)">
      <circle cx="-60" cy="0" r="28" fill={color.white}/>
      <path d="M-72 0l10 10 18-18" stroke={color.emerald400} strokeWidth="6" fill="none" strokeLinecap="round"/>
      <path d="M40 -10l0 66 36 -16 36 16 0 -66c0-22-36-38-36-38s-36 16-36 38z" fill={color.indigo600}/>
    </g>
  </svg>
);

const OnboardingSVG = () => (
  <svg viewBox="0 0 740 300" role="img" aria-label="Onboarding & Orientation" className="w-full h-full">
    <Defs />
    <Person x={120} y={220} size={1.05}/>
    <g transform="translate(220,118)">
      <rect x="-90" y="-40" width="220" height="130" rx="18" fill={color.white}/>
      <path d="M-66 -6h176M-66 22h136" stroke={color.slate700} strokeWidth="6"/>
      <circle cx="90" cy="46" r="6" fill={color.cyan500}/>
    </g>
    <g transform="translate(520,140)">
      <rect x="-44" y="-12" width="88" height="24" rx="12" fill={color.indigo100}/>
      <rect x="54" y="-12" width="88" height="24" rx="12" fill={color.amber100}/>
      <path d="M44 0h10" stroke={color.slate700} strokeWidth="6" strokeLinecap="round"/>
    </g>
  </svg>
);

const TrainingSVG = () => (
  <svg viewBox="0 0 740 300" role="img" aria-label="Training & Development" className="w-full h-full">
    <Defs />
    <Person x={115} y={220} size={1}/>
    {/* course board + code window */}
    <g transform="translate(210,115)">
      <rect x="-86" y="-40" width="220" height="130" rx="18" fill={color.white}/>
      <rect x="-66" y="-10" width="84" height="10" rx="5" fill={color.indigo300}/>
      <rect x="28" y="-10" width="90" height="10" rx="5" fill={color.slate400}/>
      <rect x="-66" y="18" width="176" height="10" rx="5" fill={color.slate300}/>
      <rect x="-66" y="46" width="120" height="10" rx="5" fill={color.cyan300}/>
    </g>
    <g transform="translate(520,140)">
      <rect x="0" y="0" width="62" height="62" rx="10" fill="url(#gOk)"/>
      <rect x="92" y="0" width="62" height="62" rx="10" fill="url(#gWarn)"/>
      <path d="M62 31h30" stroke={color.slate700} strokeWidth="6" strokeLinecap="round"/>
    </g>
  </svg>
);

const MonitoringSVG = () => (
  <svg viewBox="0 0 740 300" role="img" aria-label="Performance Monitoring" className="w-full h-full">
    <Defs />
    <Person x={130} y={220} size={1}/>
    <g transform="translate(220,122)">
      <rect x="-90" y="-46" width="220" height="150" rx="18" fill={color.white}/>
      <path d="M-66 -10c32-18 64-18 96 0s64 18 96 0" stroke={color.cyan500} strokeWidth="6" fill="none"/>
      <rect x="-66" y="26" width="176" height="10" rx="5" fill={color.slate400}/>
      <rect x="-66" y="52" width="130" height="10" rx="5" fill={color.indigo300}/>
    </g>
    <g transform="translate(540,150)">
      <path d="M0 0h210M0 40h170M0 80h150" stroke={color.emerald400} strokeWidth="6"/>
    </g>
  </svg>
);

const CertSVG = () => (
  <svg viewBox="0 0 740 300" role="img" aria-label="Certification & Recognition" className="w-full h-full">
    <Defs />
    <Person x={510} y={230} size={1} />
    <g transform="translate(220,100)">
      <rect x="0" y="0" width="220" height="170" rx="18" fill={color.white}/>
      <rect x="28" y="36" width="160" height="10" rx="5" fill={color.slate500}/>
      <rect x="28" y="64" width="120" height="10" rx="5" fill={color.indigo300}/>
      <rect x="28" y="92" width="140" height="10" rx="5" fill={color.slate300}/>
      <circle cx="180" cy="130" r="16" fill={color.indigo600}/>
    </g>
    <g transform="translate(520,120)">
      <rect x="-22" y="-26" width="48" height="64" rx="6" fill={color.white}/>
      <rect x="36" y="-26" width="48" height="64" rx="6" fill={color.white}/>
      <circle cx="-4" cy="30" r="6" fill={color.indigo600}/>
      <circle cx="58" cy="30" r="6" fill={color.emerald400}/>
    </g>
  </svg>
);

const ComplianceSVG = () => (
  <svg viewBox="0 0 740 300" role="img" aria-label="Legal Compliance" className="w-full h-full">
    <Defs />
    <Person x={140} y={220} size={1}/>
    <g transform="translate(230,130)">
      <path d="M40 60v-22a26 26 0 0 1 52 0V60" stroke={color.indigo600} strokeWidth="6" fill="none"/>
      <rect x="28" y="60" width="92" height="96" rx="16" fill={color.white}/>
    </g>
    <g transform="translate(520,150)">
      <rect x="-94" y="-44" width="188" height="128" rx="18" fill={color.white}/>
      <rect x="-70" y="-10" width="144" height="10" rx="5" fill={color.slate400}/>
      <rect x="-70" y="18" width="104" height="10" rx="5" fill={color.indigo300}/>
      <rect x="-70" y="46" width="84" height="10" rx="5" fill={color.slate300}/>
    </g>
  </svg>
);

const ActivitiesSVG = () => (
  <svg viewBox="0 0 740 300" role="img" aria-label="Department Activities" className="w-full h-full">
    <Defs />
    <Person x={120} y={220} size={1}/>
    {/* nodes = events + links */}
    <g transform="translate(210,150)">
      <circle cx="0" cy="0" r="10" fill={color.emerald400}/>
      <circle cx="80" cy="-40" r="10" fill={color.cyan500}/>
      <circle cx="120" cy="40" r="10" fill={color.indigo400}/>
      <circle cx="40" cy="60" r="10" fill={color.amber400}/>
      <path d="M0 0L80 -40L120 40L40 60L0 0" stroke={color.slate700} strokeWidth="3" fill="none"/>
    </g>
    <g transform="translate(520,160)">
      <rect x="-80" y="-20" width="160" height="40" rx="20" fill={color.white}/>
      <path d="M-60 0h120" stroke={color.indigo100} strokeWidth="10"/>
    </g>
  </svg>
);

const LawSVG = () => (
  <svg viewBox="0 0 740 300" role="img" aria-label="Legal Framework" className="w-full h-full">
    <Defs />
    <Person x={130} y={220} size={1}/>
    <g transform="translate(220,112)">
      <rect x="0" y="0" width="220" height="140" rx="18" fill={color.white}/>
      <rect x="250" y="0" width="220" height="140" rx="18" fill={color.white}/>
      <rect x="270" y="32" width="180" height="12" rx="6" fill={color.slate700}/>
      <rect x="270" y="60" width="150" height="12" rx="6" fill={color.indigo300}/>
    </g>
    <g transform="translate(520,110)">
      <path d="M0 0v140M-44 48h88" stroke={color.indigo600} strokeWidth="6"/>
    </g>
  </svg>
);

const ConclusionSVG = () => (
  <svg viewBox="0 0 740 300" role="img" aria-label="Conclusion" className="w-full h-full">
    <Defs />
    <Person x={150} y={220} size={1.1} tone={color.slate900}/>
    <g transform="translate(240,90)">
      <rect x="0" y="0" width="12" height="170" rx="6" fill={color.indigo600}/>
      <path d="M12 0h150l-20 22 20 22H12z" fill={color.cyan500}/>
    </g>
    <g transform="translate(520,170)">
      <path d="M0 60c-40-24-60-48-60-72 0-24 20-48 60-72" stroke={color.emerald400} strokeWidth="6" fill="none"/>
      <path d="M0 60c40-24 60-48 60-72 0-24-20-48-60-72" stroke={color.emerald400} strokeWidth="6" fill="none"/>
    </g>
  </svg>
);

const DisclaimerSVG = () => (
  <svg viewBox="0 0 740 300" role="img" aria-label="Legal Disclaimer" className="w-full h-full">
    <Defs />
    <Person x={130} y={220} size={1}/>
    <g transform="translate(220,100)">
      <rect x="0" y="0" width="260" height="170" rx="18" fill={color.white}/>
      <rect x="28" y="36" width="200" height="10" rx="5" fill={color.slate500}/>
      <rect x="28" y="64" width="150" height="10" rx="5" fill={color.indigo300}/>
      <rect x="28" y="92" width="170" height="10" rx="5" fill={color.slate300}/>
    </g>
    <g transform="translate(520,170)" opacity="0.18">
      <rect x="-120" y="-60" width="240" height="120" rx="18" fill="url(#gridDots)"/>
    </g>
  </svg>
);

/* -------------------- Section wrapper (border + shadow) -------------------- */
const FeatureSection = ({ id, title, desc, bullets, SVG, reverse = false }) => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start 80%", "end 20%"] });
  const y = useSpring(useTransform(scrollYProgress, [0, 1], [20, -20]), { stiffness: 120, damping: 20 });
  const opacity = useTransform(scrollYProgress, [0, 1], [0.6, 1]);

  return (
    <section id={id} ref={ref} className="mt-8 sm:mt-10 md:mt-12 lg:mt-16">
      <motion.div
        style={{ opacity }}
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-6 md:gap-8 lg:gap-10 items-center
                   bg-white rounded-2xl border border-slate-200 shadow-[0_6px_26px_rgba(2,6,23,0.08)] p-4 sm:p-5 md:p-6"
      >
        <motion.div style={{ y }} className={`${reverse ? "md:order-2" : "md:order-1"} min-w-0`}>
          <div className="w-full h-auto max-h-64 sm:max-h-80 md:max-h-none overflow-hidden rounded-xl border border-slate-200 shadow-[0_4px_18px_rgba(2,6,23,0.06)]">
            <SVG />
          </div>
        </motion.div>

        <div className={`${reverse ? "md:order-1" : "md:order-2"} min-w-0`}>
          <h2 className="text-[20px] sm:text-2xl font-semibold text-gray-900 leading-snug">{title}</h2>
          {desc && <p className="mt-1 text-[14px] sm:text-[15px] text-gray-600">{desc}</p>}
          <ul className="mt-2.5 sm:mt-3 space-y-1.5 sm:space-y-2 text-gray-700 list-disc pl-5 sm:pl-6">
            {bullets.map((b, i) => (
              <li key={i} className="leading-relaxed text-[15px] sm:text-base">{b}</li>
            ))}
          </ul>
        </div>
      </motion.div>
    </section>
  );
};

/* -------------------- Page -------------------- */
export default function InternshipDepartment() {
  const { container, itemUp } = useAnims();
  const heroRef = useRef(null);
  const { scrollYProgress } = useScroll({ target: heroRef, offset: ["start start", "end start"] });
  const heroY = useTransform(scrollYProgress, [0, 1], [0, -40]);

  const svgMap = {
    IntroSVG: IntroSVG,
    PurposeSVG: PurposeSVG,
    RecruitmentSVG,
    OnboardingSVG,
    TrainingSVG,
    MonitoringSVG,
    CertSVG,
    ComplianceSVG,
    ActivitiesSVG,
    LawSVG,
    ConclusionSVG,
    DisclaimerSVG,
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
        <Link to="/department" className="hover:underline">Departments</Link>
        <span aria-hidden="true"> › </span>
        <span className="text-gray-700" aria-current="page">{data.title}</span>
      </motion.nav>

      {/* Hero */}
      <div
        ref={heroRef}
        className="bg-white rounded-2xl border border-slate-200 shadow-[0_10px_34px_rgba(2,6,23,0.10)] p-5 sm:p-6 md:p-8"
      >
        <motion.div variants={itemUp}>
          <h1 className="text-[22px] sm:text-3xl font-bold text-gray-900">
            {data.title} <span className="text-gray-500 font-semibold">({data.shortName})</span>
          </h1>
          <p className="mt-1.5 sm:mt-2 text-gray-700 text-[15px] sm:text-base">{data.summary}</p>
          <p className="mt-2 sm:mt-3 text-cyan-800 font-medium text-[15px] sm:text-base">{data.tagline}</p>

          <motion.div style={{ y: heroY }} className="mt-4 sm:mt-5">
            <div className="w-full h-auto max-h-72 sm:max-h-80 md:max-h-none overflow-hidden rounded-xl border border-slate-200 shadow-[0_6px_22px_rgba(2,6,23,0.08)]">
              <InternshipHeroSVG />
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Sections */}
      <div className="mt-8 sm:mt-10 md:mt-12">
        {data.sections.map((sec, idx) => {
          const SVGComp = svgMap[sec.svg] ?? IntroSVG;
          return (
            <FeatureSection
              key={sec.id}
              id={sec.id}
              title={sec.heading}
              desc={sec.desc}
              bullets={sec.bullets}
              SVG={SVGComp}
              reverse={idx % 2 === 1}
            />
          );
        })}
      </div>

      {/* Back link */}
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mt-10 md:mt-12"
      >
        <Link
          to="/department"
          className="inline-flex items-center text-cyan-700 hover:text-cyan-800 focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400 rounded-md"
        >
          <svg className="w-4 h-4 mr-1" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
            <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
          </svg>
          Back to Departments
        </Link>
      </motion.div>
    </motion.section>
  );
}
