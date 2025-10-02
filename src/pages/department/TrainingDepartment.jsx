// src/pages/ourDepartments/TrainingDepartment.jsx
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
  rose100:"#FFE4E6", rose400:"#FB7185",
  slate200:"#E2E8F0", slate300:"#CBD5E1", slate400:"#94A3B8", slate500:"#64748B", slate700:"#334155", slate900:"#0F172A",
  white:"#FFFFFF",
};

/* -------------------- Data (Conclusion is LAST) -------------------- */
const data = {
  title: "Training Department",
  shortName: "Training",
  tagline: "Empowering Knowledge, Building Skills, and Shaping a Secure Digital Future.",
  summary:
    "Strategic pillar for awareness, capacity building, certifications, and lawful, secure learning — across staff, LEAs, volunteers, and communities.",
  sections: [
    {
      id: "introduction",
      heading: "Introduction",
      desc: "Continuous education as a national necessity; bridges theory ↔ practice via AI/VR/gamification.",
      bullets: [
        "Equips employees, volunteers, LEAs, and citizens against modern cyber threats.",
        "Delivers adaptive, practical learning aligned to compliance and ethics.",
        "Framework secures content, platforms, and participant data end-to-end.",
      ],
      svg: "IntroSVG",
    },
    {
      id: "purpose",
      heading: "1. Purpose, Mission & Vision",
      desc: "World-class, legally compliant programs that integrate innovation, law, and tech.",
      bullets: [
        "Purpose: empower effective prevention, detection, and response to cybercrime.",
        "Mission: sustain a learning ecosystem for the digital age.",
        "Vision: globally recognized hub for cyber & cyber-law education.",
      ],
      svg: "PurposeSVG",
    },
    {
      id: "governance",
      heading: "2. Governance Structure & Key Roles",
      desc: "Leadership, compliance, program design, digital delivery, and certification oversight.",
      bullets: [
        "Director of Training; Compliance Officer; Program Development Lead.",
        "Digital Learning Manager; Assessment & Certification Officer.",
        "External Liaison; Data Privacy Manager; Innovation Specialist; Quality Auditor.",
      ],
      svg: "GovernanceSVG",
    },
    {
      id: "legal",
      heading: "3. Legal & Regulatory Compliance",
      desc: "IT Act, DPDP, IPC/Evidence Act, RTE, ISO 27001, Labour Codes, GDPR, ILO, Copyright.",
      bullets: [
        "Curate lawful case content; honour IP and licensing of materials.",
        "Security controls on LMS; access logging and audit artefacts.",
        "Annual legal gap-assessments and remediation tracking.",
      ],
      svg: "LegalSVG",
    },
    {
      id: "responsibilities",
      heading: "4. Core Responsibilities",
      desc: "Tracks for LEAs, internal teams, volunteers, community; secure records & certification.",
      bullets: [
        "Design/maintain cyber & cyber-law programs; integrate forensics & victim support.",
        "Outreach workshops and safe-practice campaigns.",
        "Encrypted training records and tamper-evident certificates.",
      ],
      svg: "CoreSVG",
    },
    {
      id: "tasks",
      heading: "5. Departmental Tasks",
      desc: "Needs assessment, SOPs, partner docs, analytics, drills, and monthly reporting.",
      bullets: [
        "Annual TNA across CRCCF; SOPs for creation, delivery, evaluation.",
        "Capacity-building for police, judiciary, corporates; MFA-protected data.",
        "ROI dashboards; grievance redressal; emergency response drills.",
      ],
      svg: "TasksSVG",
    },
    {
      id: "areas",
      heading: "6. Training Areas & Program Types",
      desc: "From fundamentals to advanced: law, forensics, red-teaming, privacy, leadership, community literacy.",
      bullets: [
        "Security Fundamentals; Digital Forensics; Cyber Law for LEAs.",
        "Ethical Hacking/PT; Victim Support; DPDP/GDPR privacy.",
        "AI/Blockchain basics; Leadership for digital governance; Community programs.",
      ],
      svg: "AreasSVG",
    },
    {
      id: "future",
      heading: "7. Future-Proofing Initiatives",
      desc: "Adaptive AI, blockchain credentials, gamification, VR simulations, global content & partnerships.",
      bullets: [
        "AI-driven personalization and spaced-repetition.",
        "Blockchain credentialing for tamper-proof records.",
        "VR scenario labs; multilingual content; global standards alignment.",
      ],
      svg: "FutureSVG",
    },
    {
      id: "monitoring",
      heading: "8. Monitoring, Evaluation & Reporting",
      desc: "Analytics, assessments, audits; quarterly/annual reporting and public transparency.",
      bullets: [
        "Learning analytics + heatmaps; third-party audits.",
        "Outcome rubrics and impact studies; board reporting.",
        "Publish metrics while protecting PII.",
      ],
      svg: "MonitoringSVG",
    },
    {
      id: "ethics",
      heading: "9. Confidentiality & Ethics",
      desc: "NDA, privacy, and evidence hygiene; breach = disciplinary + legal action.",
      bullets: [
        "Protect digital evidence used in courses; redact sensitive data.",
        "Access on need-to-know; immutable logs; quick breach reporting.",
        "Ban scraping/redistribution of content without authorization.",
      ],
      svg: "EthicsSVG",
    },
    {
      id: "collab",
      heading: "10. Collaboration & External Engagement",
      desc: "Universities, LEAs, NGOs, corporates — via binding MoUs with privacy/IP clauses.",
      bullets: [
        "Co-create modules; guest faculty; joint certifications.",
        "Exchange labs and case repositories with clear IP ownership.",
        "Compliance checkpoints before/after each engagement.",
      ],
      svg: "CollabSVG",
    },
    {
      id: "disclaimer",
      heading: "11. Legal Disclaimer",
      desc: "Auto-updates with law and technology. Statutes prevail on conflict.",
      bullets: [
        "Change-log maintained; versioned policy references.",
        "Jurisdictional addenda for cross-border cohorts.",
      ],
      svg: "DisclaimerSVG",
    },
    {
      id: "conclusion",
      heading: "12. Conclusion",
      desc: "Cornerstone of CRCCF’s mission — education, compliance, and innovation at scale.",
      bullets: [
        "Builds a skilled, ethical, and resilient cyber workforce.",
        "Turns knowledge into national cyber safety outcomes.",
      ],
      svg: "ConclusionSVG",
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

/* -------------------- Hero SVG (complex) -------------------- */
const TrainingHeroSVG = () => (
  <svg viewBox="0 0 780 360" className="w-full h-auto" role="img" aria-label="Training hero">
    <Defs />
    <g opacity="0.35">
      <ellipse cx="210" cy="90" rx="170" ry="56" fill="url(#gCool)" />
      <ellipse cx="570" cy="90" rx="170" ry="56" fill={color.emerald100} />
      <ellipse cx="390" cy="310" rx="260" ry="36" fill={color.cyan50} />
    </g>

    {/* instructor + board */}
    <Person x={140} y={250} size={1.15} tone={color.slate700} />
    <g transform="translate(230,150)">
      <rect x="-100" y="-58" width="260" height="150" rx="18" fill={color.white} />
      <rect x="-80" y="-36" width="84" height="12" rx="6" fill={color.indigo300} />
      <rect x="14" y="-36" width="140" height="12" rx="6" fill={color.slate400} />
      <rect x="-80" y="-8" width="230" height="10" rx="5" fill={color.slate300} />
      <rect x="-80" y="20" width="160" height="10" rx="5" fill={color.cyan300} />
      <rect x="-80" y="48" width="120" height="10" rx="5" fill={color.slate300} />
    </g>

    {/* cohort bubbles + certificate shield */}
    <g transform="translate(540,160)">
      <circle cx="-120" cy="-10" r="20" fill={color.white} />
      <circle cx="-80" cy="30" r="20" fill={color.white} />
      <circle cx="-40" cy="-10" r="20" fill={color.white} />
      <path d="M46 -10l0 66 36 -16 36 16 0 -66c0-22-36-38-36-38s-36 16-36 38z" fill={color.indigo600}/>
      <circle cx="82" cy="20" r="8" fill={color.white}/>
    </g>

    {/* progress badges */}
    <g transform="translate(660,210)">
      <rect x="-50" y="-12" width="90" height="24" rx="12" fill={color.indigo100}/>
      <rect x="50" y="-12" width="90" height="24" rx="12" fill={color.amber100}/>
      <path d="M40 0h10" stroke={color.slate700} strokeWidth="6" strokeLinecap="round"/>
    </g>
  </svg>
);

/* -------------------- Section SVGs (person + abstract) -------------------- */
const IntroSVG = () => (
  <svg viewBox="0 0 740 300" role="img" aria-label="Intro" className="w-full h-full">
    <Defs />
    <Person x={120} y={220} size={1}/>
    <g transform="translate(210,88)">
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
  <svg viewBox="0 0 740 300" role="img" aria-label="Purpose" className="w-full h-full">
    <Defs />
    <Person x={130} y={220} size={1}/>
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

const GovernanceSVG = () => (
  <svg viewBox="0 0 740 300" role="img" aria-label="Governance" className="w-full h-full">
    <Defs />
    <Person x={120} y={220} size={1}/>
    <g transform="translate(210,120)">
      <rect x="-90" y="-40" width="220" height="130" rx="18" fill={color.white}/>
      <rect x="-70" y="-10" width="180" height="10" rx="5" fill={color.slate400}/>
      <rect x="-70" y="18" width="140" height="10" rx="5" fill={color.indigo300}/>
      <rect x="-70" y="46" width="120" height="10" rx="5" fill={color.slate300}/>
    </g>
    <g transform="translate(520,150)">
      <circle cx="-60" cy="0" r="12" fill={color.emerald400}/>
      <circle cx="0" cy="0" r="12" fill={color.cyan500}/>
      <circle cx="60" cy="0" r="12" fill={color.indigo400}/>
      <path d="M-60 0L0 0L60 0" stroke={color.slate700} strokeWidth="4"/>
    </g>
  </svg>
);

const LegalSVG = () => (
  <svg viewBox="0 0 740 300" role="img" aria-label="Legal" className="w-full h-full">
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

const CoreSVG = () => (
  <svg viewBox="0 0 740 300" role="img" aria-label="Core" className="w-full h-full">
    <Defs />
    <Person x={120} y={220} size={1}/>
    <g transform="translate(210,120)">
      <rect x="-90" y="-40" width="220" height="130" rx="18" fill={color.white}/>
      <path d="M-66 -6h176M-66 22h136" stroke={color.slate700} strokeWidth="6"/>
      <circle cx="90" cy="46" r="6" fill={color.cyan500}/>
    </g>
    <g transform="translate(520,140)">
      <rect x="0" y="0" width="62" height="62" rx="10" fill="url(#gOk)"/>
      <rect x="92" y="0" width="62" height="62" rx="10" fill="url(#gWarn)"/>
      <path d="M62 31h30" stroke={color.slate700} strokeWidth="6" strokeLinecap="round"/>
    </g>
  </svg>
);

const TasksSVG = () => (
  <svg viewBox="0 0 740 300" role="img" aria-label="Tasks" className="w-full h-full">
    <Defs />
    <Person x={120} y={220} size={1}/>
    <g transform="translate(210,120)">
      <rect x="-90" y="-40" width="220" height="130" rx="18" fill={color.white}/>
      <rect x="-70" y="-8" width="160" height="10" rx="5" fill={color.slate400}/>
      <rect x="-70" y="20" width="120" height="10" rx="5" fill={color.indigo300}/>
      <rect x="-70" y="48" width="140" height="10" rx="5" fill={color.cyan300}/>
    </g>
    <g transform="translate(520,160)">
      <rect x="-44" y="-12" width="88" height="24" rx="12" fill={color.indigo100}/>
      <rect x="54" y="-12" width="88" height="24" rx="12" fill={color.amber100}/>
      <path d="M44 0h10" stroke={color.slate700} strokeWidth="6" strokeLinecap="round"/>
    </g>
  </svg>
);

const AreasSVG = () => (
  <svg viewBox="0 0 740 300" role="img" aria-label="Areas" className="w-full h-full">
    <Defs />
    <Person x={110} y={220} size={1}/>
    <g transform="translate(210,130)">
      <ellipse cx="0" cy="-44" rx="74" ry="22" fill={color.white}/>
      <rect x="-74" y="-44" width="148" height="108" rx="18" fill={color.white}/>
      <ellipse cx="0" cy="64" rx="74" ry="22" fill={color.white}/>
      <rect x="-60" y="-8" width="120" height="10" rx="5" fill={color.indigo300}/>
    </g>
    <g transform="translate(500,150)">
      <circle cx="0" cy="0" r="10" fill={color.emerald400}/>
      <circle cx="60" cy="-30" r="10" fill={color.cyan500}/>
      <circle cx="120" cy="10" r="10" fill={color.indigo400}/>
      <path d="M0 0L60 -30L120 10" stroke={color.slate700} strokeWidth="3" fill="none"/>
    </g>
  </svg>
);

const FutureSVG = () => (
  <svg viewBox="0 0 740 300" role="img" aria-label="Future" className="w-full h-full">
    <Defs />
    <Person x={120} y={220} size={1}/>
    <g transform="translate(210,120)">
      <rect x="0" y="0" width="170" height="130" rx="18" fill={color.white}/>
      <rect x="26" y="34" width="118" height="62" rx="10" fill={color.indigo100}/>
    </g>
    <g transform="translate(480,140)">
      <rect x="0" y="0" width="62" height="62" rx="10" fill="url(#gOk)"/>
      <rect x="92" y="0" width="62" height="62" rx="10" fill="url(#gWarn)"/>
      <rect x="184" y="0" width="62" height="62" rx="10" fill={color.indigo50}/>
      <path d="M62 31h30M154 31h30" stroke={color.slate700} strokeWidth="6" strokeLinecap="round"/>
    </g>
  </svg>
);

const MonitoringSVG = () => (
  <svg viewBox="0 0 740 300" role="img" aria-label="Monitoring" className="w-full h-full">
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

const EthicsSVG = () => (
  <svg viewBox="0 0 740 300" role="img" aria-label="Ethics" className="w-full h-full">
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

const CollabSVG = () => (
  <svg viewBox="0 0 740 300" role="img" aria-label="Collaboration" className="w-full h-full">
    <Defs />
    <Person x={120} y={220} size={1}/>
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

const DisclaimerSVG = () => (
  <svg viewBox="0 0 740 300" role="img" aria-label="Disclaimer" className="w-full h-full">
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
export default function TrainingDepartment() {
  const { container, itemUp } = useAnims();
  const heroRef = useRef(null);
  const { scrollYProgress } = useScroll({ target: heroRef, offset: ["start start", "end start"] });
  const heroY = useTransform(scrollYProgress, [0, 1], [0, -40]);

  const svgMap = {
    IntroSVG,
    PurposeSVG,
    GovernanceSVG,
    LegalSVG,
    CoreSVG,
    TasksSVG,
    AreasSVG,
    FutureSVG,
    MonitoringSVG,
    EthicsSVG,
    CollabSVG,
    DisclaimerSVG,
    ConclusionSVG, // conclusion last in data
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

      {/* Hero with border + shadow */}
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
              <TrainingHeroSVG />
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
