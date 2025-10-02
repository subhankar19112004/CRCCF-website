// src/pages/ourDepartments/HRDepartment.jsx
import React, { useRef } from "react";
import { Link } from "react-router-dom";
import {
  motion,
  useReducedMotion,
  useScroll,
  useTransform,
  useSpring,
} from "framer-motion";

/* -------------------- Motion Controls (respects reduced motion) -------------------- */
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

/* -------------------- Page Data (FULL, inline, nothing dropped) -------------------- */
const data = {
  title: "HR Department",
  shortName: "HR",
  tagline:
    "Empowering People, Driving Excellence – Building a legally compliant, fair, and thriving workplace.",
  summary:
    "The HR Department is the backbone of CRCCF’s workforce—ensuring legal compliance, professionalism, ethics, and corporate governance while enabling a fair, growth-oriented culture.",
  sections: [
    {
      id: "intro-purpose",
      heading: "1. Introduction & Purpose",
      bullets: [
        "Backbone of CRCCF ensuring compliance, professionalism, and ethics.",
        "Charter aligns with labor and company laws to reduce legal risk while promoting fairness and growth.",
        "Dual role: support the workforce + ensure corporate governance compliance under Companies Act, 2013 and other laws.",
      ],
      svg: "IntroSVG",
    },
    {
      id: "activities-functions",
      heading: "2. Department Activities & Functions",
      bullets: [
        "Workforce planning aligned with organizational strategy.",
        "Recruitment and selection through merit-based, inclusive processes.",
        "Onboarding and orientation to integrate employees into CRCCF’s culture.",
        "Career development and training programs to upskill employees.",
        "Payroll, compensation, and benefits management with labor/tax compliance.",
        "Implementation of corporate policies approved by the Board of Directors.",
        "Compliance monitoring with both labor laws and company law regulations.",
        "Grievance handling and dispute resolution mechanisms.",
        "CSR workforce management under Section 135 of Companies Act, 2013.",
        "Exit management ensuring proper documentation and statutory compliance.",
      ],
      svg: "FunctionsSVG",
    },
    {
      id: "structure",
      heading: "3. Department Structure",
      bullets: [
        "Talent Acquisition Unit.",
        "Training and Development Division.",
        "Compliance and Legal Integration Team.",
        "Payroll and Finance Unit.",
        "Grievance Redressal and Employee Relations.",
        "Health, Safety, and Wellness Committee.",
      ],
      svg: "StructureSVG",
    },
    {
      id: "company-law",
      heading: "4. Integration with Company Law",
      bullets: [
        "KMP appointments per Sections 2(51) and 203, Companies Act, 2013.",
        "Maintain registers for directors, remuneration, and employee data per Section 88.",
        "Draft remuneration policies as per Section 178 for Board approval.",
        "CSR workforce planning and compliance per Section 135.",
        "ESOP compliance per Companies Act and SEBI regulations.",
        "File returns/disclosures with RoC for HR activities, appointments, resignations.",
        "FEMA compliance for foreign employees and international workforce.",
        "Policies updated per Board resolutions and legal amendments.",
      ],
      svg: "LawSVG",
    },
    {
      id: "core-responsibilities",
      heading: "5. Core Responsibilities",
      bullets: [
        "Transparent, inclusive recruitment (Equal Remuneration Act, 1976).",
        "Employment contracts compliant with Indian Contract Act, 1872.",
        "Digital/physical record-keeping compliant with IT Act, 2000 and Evidence Act, 1872.",
        "Payroll compliance: Payment of Wages Act, PF Act, Bonus Act, Gratuity Act.",
        "Compliance training on POSH, cyber laws, and corporate ethics.",
        "Board-level reporting of HR compliance metrics and filings.",
        "Performance appraisals aligned with governance policies.",
        "Workplace safety per Factories Act and Shops & Establishments Acts.",
        "Industrial disputes handled as per Industrial Disputes Act, 1947.",
      ],
      svg: "CoreSVG",
    },
    {
      id: "compliance-calendar",
      heading: "6. Compliance Calendar",
      bullets: [
        "Maintain a calendar for ROC filings, CSR reporting, labor audits, taxes, benefits.",
        "Review monthly and update for new legal requirements.",
      ],
      svg: "CalendarSVG",
    },
    {
      id: "penalties-liabilities",
      heading: "7. Penalties & Liabilities",
      bullets: [
        "Penalties apply for non-compliance, including fines, officer disqualification, civil/criminal liability for willful default.",
        "Non-filing of RoC disclosures: penalties under Sections 92 and 137 of Companies Act.",
        "Labor law non-compliance: fines and possible imprisonment per Labor Codes 2020.",
        "POSH violations: monetary penalties and possible license revocation.",
        "IT Act data breach: civil liability and criminal prosecution.",
      ],
      svg: "PenaltySVG",
    },
    {
      id: "foreign-workforce",
      heading: "8. Foreign Workforce Compliance",
      bullets: [
        "Hiring and payroll to comply with FEMA, visa rules, and international taxation.",
        "Coordinate with Legal for documentation and regulatory reporting.",
      ],
      svg: "ForeignSVG",
    },
    {
      id: "data-protection",
      heading: "9. Data Protection & Cybersecurity",
      bullets: [
        "Strict confidentiality of employee data; access only to authorized personnel.",
        "Security measures per IT Act, 2000 and data privacy frameworks.",
        "Report any breach to regulators within 72 hours.",
      ],
      svg: "DataSVG",
    },
    {
      id: "code-ethics",
      heading: "10. Code of Conduct & Ethics Policy",
      bullets: [
        "Zero tolerance for discrimination, harassment, or unethical behavior.",
        "Mandatory declaration of conflicts of interest.",
        "Transparency in promotions, compensation, and disciplinary actions.",
        "Responsible use of company resources and digital systems.",
        "Whistleblower protection via secure reporting mechanism.",
      ],
      svg: "EthicsSVG",
    },
    {
      id: "amendment",
      heading: "11. Dynamic Amendment Clause",
      bullets: [
        "Charter auto-adapts to amendments in labor laws, Companies Act, SEBI, and international rules.",
        "HR must update and communicate changes to all stakeholders immediately.",
      ],
      svg: "AmendSVG",
    },
    {
      id: "practical-impact",
      heading: "12. Practical Impact",
      bullets: [
        "Alignment with legal frameworks prevents compliance failures.",
        "Protects employee rights and sustains regulator/stakeholder trust.",
      ],
      svg: "ImpactSVG",
    },
    {
      id: "legal-disclaimer",
      heading: "13. Legal Disclaimer",
      bullets: [
        "If this charter conflicts with a statute, the statute prevails.",
        "CRCCF may revise this charter to reflect legal and organizational changes.",
      ],
      svg: "DisclaimerSVG",
    },
    {
  id: "conclusion",
  heading: "14. Conclusion",
  bullets: [
    "HR at CRCCF safeguards a fair, compliant, and growth-oriented workplace.",
    "By aligning people operations with labor, company, and data laws, we reduce risk and build trust.",
    "Clear governance, timely filings, and ethical culture ensure resilience and long-term success."
  ],
  svg: "ConclusionSVG",
},

  ],
};

/* -------------------- Colors -------------------- */
const color = {
  cyan100: "#CFFAFE", cyan300: "#67E8F9", cyan500: "#06B6D4",
  indigo100: "#E0E7FF", indigo400: "#818CF8", indigo600: "#4F46E5",
  emerald100: "#D1FAE5", emerald400: "#34D399",
  amber100: "#FEF3C7", amber400: "#F59E0B",
  rose100: "#FFE4E6", rose400: "#FB7185",
  slate700: "#334155", slate900: "#0F172A",
  white: "#FFFFFF",
};

/* -------------------- Big Hero Illustration -------------------- */
const HRHeroSVG = (props) => (
  <svg viewBox="0 0 760 520" role="img" aria-labelledby="hrHeroTitle hrHeroDesc" className="w-full h-auto" {...props}>
    <title id="hrHeroTitle">HR Department Illustration</title>
    <desc id="hrHeroDesc">Cartoon people, clipboard, briefcase, and shield symbolizing HR, policy, and compliance.</desc>

    {/* Background blobs */}
    <g opacity="0.35">
      <ellipse cx="200" cy="170" rx="160" ry="70" fill={color.cyan100} />
      <ellipse cx="530" cy="130" rx="140" ry="60" fill={color.indigo100} />
      <ellipse cx="380" cy="440" rx="220" ry="50" fill={color.emerald100} />
    </g>

    {/* Clipboard */}
    <g transform="translate(100,120)">
      <rect x="0" y="20" width="200" height="160" rx="16" fill={color.white} stroke={color.indigo400} strokeWidth="4" />
      <rect x="70" y="0" width="60" height="24" rx="8" fill={color.indigo400} />
      <rect x="24" y="60" width="140" height="10" rx="5" fill={color.slate700} />
      <rect x="24" y="82" width="120" height="10" rx="5" fill={color.slate700} />
      <rect x="24" y="104" width="100" height="10" rx="5" fill={color.slate700} />
    </g>

    {/* People nodes */}
    <g transform="translate(360,130)">
      <circle cx="0" cy="0" r="18" fill={color.indigo400} />
      <circle cx="48" cy="20" r="18" fill={color.cyan500} />
      <circle cx="96" cy="0" r="18" fill={color.emerald400} />
      <path d="M0 0L48 20L96 0" stroke={color.slate700} strokeWidth="3" fill="none" />
    </g>

    {/* Shield */}
    <g transform="translate(540,220)">
      <path d="M40 -20l60 24v26c0 28-18 52-60 67-42-15-60-39-60-67v-26l60-24z" fill={color.white} stroke={color.indigo400} strokeWidth="3" />
      <path d="M18 16l18 18 26-26" stroke={color.emerald400} strokeWidth="6" fill="none" strokeLinecap="round" />
    </g>
  </svg>
);

/* -------------------- SVG Helpers -------------------- */
const BG = ({ id, from, to }) => (
  <defs>
    <linearGradient id={id} x1="0" y1="0" x2="1" y2="1">
      <stop offset="0" stopColor={from} />
      <stop offset="1" stopColor={to} />
    </linearGradient>
  </defs>
);
const Panel = ({ x, y, w, h, r = 12, fill = "white", stroke, sw = 0 }) => (
  <rect x={x} y={y} width={w} height={h} rx={r} fill={fill} stroke={stroke} strokeWidth={sw} />
);

/* -------------------- Section SVGs (big, 13 total) -------------------- */
const IntroSVG = (props) => (
  <svg viewBox="0 0 740 360" role="img" aria-label="Introduction & Purpose" className="w-full h-full" {...props}>
    <BG id="gIntro" from={color.cyan100} to={color.indigo100} />
    <Panel x="0" y="0" w="740" h="360" r="20" fill="url(#gIntro)" />
    <Panel x="420" y="90" w="220" h="140" r="16" fill={color.white} />
    <circle cx="160" cy="160" r="50" fill={color.white} />
    <circle cx="160" cy="160" r="10" fill={color.indigo600} />
    <path d="M120 160c18-30 62-30 80 0-18 30-62 30-80 0z" stroke={color.indigo600} strokeWidth="4" fill="none" />
  </svg>
);

const FunctionsSVG = (props) => (
  <svg viewBox="0 0 740 360" role="img" aria-label="Activities & Functions" className="w-full h-full" {...props}>
    <BG id="gFun" from={color.indigo100} to={color.cyan100} />
    <Panel x="0" y="0" w="740" h="360" r="20" fill="url(#gFun)" />
    {/* Tiles representing multiple workflows */}
    <Panel x="80" y="80" w="160" h="180" r="14" fill={color.white} />
    <Panel x="260" y="80" w="160" h="180" r="14" fill={color.white} />
    <Panel x="440" y="80" w="220" h="180" r="14" fill={color.white} />
    <circle cx="160" cy="120" r="16" fill={color.indigo400} />
    <circle cx="340" cy="120" r="16" fill={color.cyan500} />
    <circle cx="520" cy="120" r="16" fill={color.emerald400} />
  </svg>
);

const StructureSVG = (props) => (
  <svg viewBox="0 0 740 360" role="img" aria-label="Department Structure" className="w-full h-full" {...props}>
    <Panel x="0" y="0" w="740" h="360" r="20" fill={color.emerald100} />
    {/* Org branches */}
    <Panel x="320" y="60" w="100" h="40" r="10" fill={color.white} />
    <path d="M370 100v40M250 200h240" stroke={color.slate700} strokeWidth="3" />
    <Panel x="200" y="200" w="120" h="44" r="10" fill={color.white} />
    <Panel x="340" y="200" w="120" h="44" r="10" fill={color.white} />
    <Panel x="480" y="200" w="120" h="44" r="10" fill={color.white} />
    <Panel x="260" y="260" w="100" h="44" r="10" fill={color.white} />
    <Panel x="420" y="260" w="100" h="44" r="10" fill={color.white} />
  </svg>
);

const LawSVG = (props) => (
  <svg viewBox="0 0 740 360" role="img" aria-label="Integration with Company Law" className="w-full h-full" {...props}>
    <Panel x="0" y="0" w="740" h="360" r="20" fill={color.indigo100} />
    {/* Scales + register + ESOP badge */}
    <g transform="translate(100,80)">
      <path d="M120 20 v120" stroke={color.indigo600} strokeWidth="6" />
      <circle cx="120" cy="20" r="10" fill={color.indigo600} />
      <path d="M60 60 h120" stroke={color.indigo600} strokeWidth="6" />
    </g>
    <Panel x="420" y="90" w="120" h="140" r="12" fill={color.white} />
    <Panel x="560" y="110" w="120" h="100" r="12" fill={color.white} />
  </svg>
);

const CoreSVG = (props) => (
  <svg viewBox="0 0 740 360" role="img" aria-label="Core Responsibilities" className="w-full h-full" {...props}>
    <BG id="gCore" from={color.cyan100} to={color.indigo100} />
    <Panel x="0" y="0" w="740" h="360" r="20" fill="url(#gCore)" />
    {/* Contract, payroll, safety, appraisal icons */}
    <Panel x="100" y="80" w="160" h="120" r="12" fill={color.white} />
    <Panel x="280" y="80" w="160" h="120" r="12" fill={color.white} />
    <Panel x="460" y="80" w="160" h="120" r="12" fill={color.white} />
    <circle cx="180" cy="140" r="16" fill={color.indigo400} />
    <circle cx="360" cy="140" r="16" fill={color.cyan500} />
    <circle cx="540" cy="140" r="16" fill={color.emerald400} />
  </svg>
);

const CalendarSVG = (props) => (
  <svg viewBox="0 0 740 360" role="img" aria-label="Compliance Calendar" className="w-full h-full" {...props}>
    <Panel x="0" y="0" w="740" h="360" r="20" fill={color.amber100} />
    {/* Calendar grid */}
    <Panel x="140" y="80" w="460" h="200" r="16" fill={color.white} />
    <path d="M140 130h460M220 80v200M300 80v200M380 80v200M460 80v200M540 80v200" stroke={color.indigo100} strokeWidth="2" />
  </svg>
);

const PenaltySVG = (props) => (
  <svg viewBox="0 0 740 360" role="img" aria-label="Penalties & Liabilities" className="w-full h-full" {...props}>
    <Panel x="0" y="0" w="740" h="360" r="20" fill={color.rose100} />
    {/* Alert + law doc */}
    <circle cx="160" cy="130" r="42" fill={color.rose400} />
    <path d="M160 110v24" stroke="white" strokeWidth="6" strokeLinecap="round" />
    <circle cx="160" cy="156" r="4" fill="white" />
    <Panel x="300" y="100" w="240" h="140" r="12" fill={color.white} />
  </svg>
);

const ForeignSVG = (props) => (
  <svg viewBox="0 0 740 360" role="img" aria-label="Foreign Workforce Compliance" className="w-full h-full" {...props}>
    <BG id="gFW" from={color.indigo100} to={color.cyan100} />
    <Panel x="0" y="0" w="740" h="360" r="20" fill="url(#gFW)" />
    {/* Passport + globe */}
    <Panel x="140" y="90" w="160" h="200" r="16" fill={color.white} />
    <circle cx="520" cy="180" r="46" fill={color.white} />
    <path d="M520 140a40 40 0 0 1 0 80a40 40 0 0 1 0-80" stroke={color.indigo400} strokeWidth="4" fill="none" />
    <path d="M480 180h80" stroke={color.indigo400} strokeWidth="4" />
  </svg>
);

const DataSVG = (props) => (
  <svg viewBox="0 0 740 360" role="img" aria-label="Data Protection & Cybersecurity" className="w-full h-full" {...props}>
    <Panel x="0" y="0" w="740" h="360" r="20" fill={color.cyan100} />
    {/* Lock + document */}
    <path d="M420 160v-20a28 28 0 0 1 56 0v20" stroke={color.indigo600} strokeWidth="6" fill="none" />
    <Panel x="402" y="160" w="92" h="120" r="12" fill={color.white} stroke={color.indigo600} sw="4" />
    <circle cx="448" cy="240" r="14" fill={color.indigo600} />
    <Panel x="120" y="90" w="200" h="160" r="12" fill={color.white} />
  </svg>
);

const EthicsSVG = (props) => (
  <svg viewBox="0 0 740 360" role="img" aria-label="Code of Conduct & Ethics" className="w-full h-full" {...props}>
    <Panel x="0" y="0" w="740" h="360" r="20" fill={color.indigo100} />
    {/* Scale + shield */}
    <g transform="translate(120,90)">
      <path d="M120 20 v120" stroke={color.indigo600} strokeWidth="6" />
      <circle cx="120" cy="20" r="10" fill={color.indigo600} />
      <path d="M60 60 h120" stroke={color.indigo600} strokeWidth="6" />
    </g>
    <g transform="translate(520,120)">
      <path d="M40 -20l60 24v26c0 28-18 52-60 67-42-15-60-39-60-67v-26l60-24z" fill={color.white} stroke={color.indigo400} strokeWidth="3" />
      <path d="M18 16l18 18 26-26" stroke={color.emerald400} strokeWidth="6" fill="none" strokeLinecap="round" />
    </g>
  </svg>
);

const AmendSVG = (props) => (
  <svg viewBox="0 0 740 360" role="img" aria-label="Dynamic Amendment Clause" className="w-full h-full" {...props}>
    <BG id="gAm" from={color.emerald100} to={color.cyan100} />
    <Panel x="0" y="0" w="740" h="360" r="20" fill="url(#gAm)" />
    {/* Update arrows */}
    <path d="M200 220c40-40 100-40 140 0" stroke={color.indigo600} strokeWidth="6" fill="none" />
    <path d="M520 140c-40 40-100 40-140 0" stroke={color.indigo600} strokeWidth="6" fill="none" />
    <Panel x="320" y="90" w="100" h="60" r="10" fill={color.white} />
  </svg>
);

const ImpactSVG = (props) => (
  <svg viewBox="0 0 740 360" role="img" aria-label="Practical Impact" className="w-full h-full" {...props}>
    <Panel x="0" y="0" w="740" h="360" r="20" fill={color.emerald100} />
    {/* Shield + handshake */}
    <g transform="translate(140,90)">
      <path d="M60 0l80 32v36c0 38-26 70-80 90-54-20-80-52-80-90V32L60 0z" fill={color.white} stroke={color.indigo400} strokeWidth="4" />
      <path d="M30 70l28 28 44-44" stroke={color.emerald400} strokeWidth="6" fill="none" strokeLinecap="round" />
    </g>
    <path d="M460 220c60-30 100-30 160 0" stroke={color.indigo400} strokeWidth="10" fill="none" strokeLinecap="round" />
    <circle cx="450" cy="220" r="16" fill={color.indigo400} />
    <circle cx="620" cy="220" r="16" fill={color.indigo400} />
  </svg>
);

const DisclaimerSVG = (props) => (
  <svg viewBox="0 0 740 360" role="img" aria-label="Legal Disclaimer" className="w-full h-full" {...props}>
    <Panel x="0" y="0" w="740" h="360" r="20" fill={color.amber100} />
    {/* Document */}
    <Panel x="260" y="90" w="220" h="180" r="16" fill={color.white} />
    <Panel x="290" y="120" w="160" h="12" r="6" fill={color.slate700} />
    <Panel x="290" y="146" w="120" h="12" r="6" fill={color.slate700} />
  </svg>
);

const ConclusionSVG = (props) => (
  <svg viewBox="0 0 740 360" role="img" aria-label="Conclusion" className="w-full h-full" {...props}>
    {/* background */}
    <rect x="0" y="0" width="740" height="360" rx="20" fill={color.cyan100} />
    {/* flag + laurel, consistent with other pages */}
    <rect x="120" y="70" width="14" height="160" rx="7" fill={color.indigo600} />
    <path d="M134 72h120l-20 22 20 22H134z" fill={color.cyan500} />
    <path d="M520 240c-40-24-60-48-60-72 0-24 20-48 60-72" stroke={color.emerald400} strokeWidth="6" fill="none" />
    <path d="M520 240c40-24 60-48 60-72 0-24-20-48-60-72" stroke={color.emerald400} strokeWidth="6" fill="none" />
  </svg>
);


/* -------------------- Feature Section Wrapper (parallax + reveal) -------------------- */
const FeatureSection = ({ id, title, bullets, SVG, reverse = false }) => {
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
        className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-6 md:gap-8 lg:gap-10 items-center"
      >
        {/* Illustration */}
        <motion.div style={{ y }} className={`relative min-w-0 ${reverse ? "md:order-2" : "md:order-1"}`}>
          <div
            className="absolute -inset-2 rounded-2xl bg-gradient-to-tr from-cyan-100 via-indigo-100 to-emerald-100 blur-md sm:blur-lg md:blur-xl"
            aria-hidden="true"
          />
          <div className="relative rounded-2xl border border-gray-200 bg-white p-3 sm:p-4 shadow-sm">
            <div className="w-full h-auto max-h-64 sm:max-h-80 md:max-h-none overflow-hidden">
              <SVG />
            </div>
          </div>
        </motion.div>

        {/* Content */}
        <div className={`${reverse ? "md:order-1" : "md:order-2"} min-w-0`}>
          <h2 className="text-[20px] sm:text-2xl font-semibold text-gray-900 leading-snug">{title}</h2>
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
export default function HRDepartment() {
  const { container, itemUp } = useAnims();

  const heroRef = useRef(null);
  const { scrollYProgress } = useScroll({ target: heroRef, offset: ["start start", "end start"] });
  const heroY = useTransform(scrollYProgress, [0, 1], [0, -40]); // gentle parallax up

  const svgMap = {
    IntroSVG,
    FunctionsSVG,
    StructureSVG,
    LawSVG,
    CoreSVG,
    CalendarSVG,
    PenaltySVG,
    ForeignSVG,
    DataSVG,
    EthicsSVG,
    AmendSVG,
    ImpactSVG,
    DisclaimerSVG,
    ConclusionSVG,
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

      {/* Hero with parallax illustration */}
      <div ref={heroRef} className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-6 md:gap-8 lg:gap-10 items-center">
        <motion.div variants={itemUp}>
          <h1 className="text-[22px] sm:text-3xl font-bold text-gray-900">
            {data.title} <span className="text-gray-500 font-semibold">({data.shortName})</span>
          </h1>
          <p className="mt-1.5 sm:mt-2 text-gray-700 text-[15px] sm:text-base">{data.summary}</p>
          <p className="mt-2 sm:mt-3 text-cyan-800 font-medium text-[15px] sm:text-base">{data.tagline}</p>

          {/* Quick Pills */}
          <div className="mt-3 sm:mt-4 flex flex-wrap gap-2">
            {["Compliance", "People Ops", "Governance", "Ethics"].map((pill) => (
              <span key={pill} className="px-2.5 sm:px-3 py-1.5 text-xs sm:text-sm rounded-full bg-cyan-100 text-cyan-800 border border-cyan-200">
                {pill}
              </span>
            ))}
          </div>
        </motion.div>

        <motion.div style={{ y: heroY }} variants={itemUp} className="relative">
          <div
            className="absolute -inset-2 rounded-2xl bg-gradient-to-tr from-cyan-100 via-indigo-100 to-emerald-100 blur-md sm:blur-lg md:blur-xl"
            aria-hidden="true"
          />
          <div className="relative rounded-2xl border border-gray-200 bg-white p-3 sm:p-4 shadow-sm">
            <div className="w-full h-auto max-h-72 sm:max-h-80 md:max-h-none overflow-hidden">
              <HRHeroSVG />
            </div>
          </div>
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
