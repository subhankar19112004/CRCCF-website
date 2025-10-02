// src/pages/ourDepartments/FinanceDepartment.jsx
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
  return { container, itemUp, shouldReduce };
};

/* -------------------- Page Data (FULL, inline) -------------------- */
const data = {
  title: "Finance Department",
  shortName: "Finance",
  tagline:
    "Strengthening Trust Through Transparent, Compliant, and Future-Ready Financial Governance.",
  summary:
    "CRCCF’s Finance Department is the financial backbone—driving transparency, accountability, compliance, and sustainability with a future-ready governance model.",
  sections: [
    {
      id: "purpose-vision",
      heading: "1. Purpose & Vision",
      bullets: [
        "Manage all financial activities with integrity and precision.",
        "Ensure every transaction is transparent, compliant, and mission-aligned.",
      ],
      svg: "PurposeSVG",
    },
    {
      id: "governance-roles",
      heading: "2. Governance Structure & Key Roles",
      bullets: [
        "CFO — heads department and oversees all finance.",
        "Internal Audit Head — manages audits and accountability.",
        "Compliance Officer — statutory monitoring and legal adherence.",
        "Treasury Manager — funds, banking, and investments.",
        "Taxation Specialist — tax compliance and planning.",
        "Grants & CSR Officer — FCRA/CSR allocations and controls.",
      ],
      svg: "GovernanceSVG",
    },
    {
      id: "legal-compliance",
      heading: "3. Legal & Regulatory Compliance",
      bullets: [
        "Companies Act 2013, Income Tax Act 1961, GST Act 2017, FCRA 2010.",
        "PMLA 2002 for AML safeguards; Ind AS/IFRS; ICAI audit standards.",
      ],
      svg: "LegalSVG",
    },
    {
      id: "core-responsibilities",
      heading: "4. Core Responsibilities",
      bullets: [
        "Financial planning and budgeting for non-profit & commercial divisions.",
        "Accounting & bookkeeping aligned with Ind AS/IFRS.",
        "Payroll with EPF, ESI, Gratuity compliance.",
        "Investments & grants with clear audit trails.",
        "Regular internal/external audits; AI-driven fraud monitoring.",
        "Quarterly/annual reports for stakeholders and regulators.",
      ],
      svg: "CoreSVG",
    },
    {
      id: "dept-tasks",
      heading: "5. Departmental Tasks",
      bullets: [
        "Finance policies & SOPs; monitor tax/labour/corporate compliance.",
        "Digital records with blockchain verification; real-time dashboards.",
        "Staff training on evolving regulations and cyber-finance risks.",
        "Legal collaboration for fraud detection & prosecution.",
        "CSR allocation & reporting (Companies Act Section 135).",
      ],
      svg: "TasksSVG",
    },
    {
      id: "risk-fraud",
      heading: "6. Risk & Fraud Management",
      bullets: [
        "Anti-Fraud Control Framework with periodic forensic audits.",
        "Immediate escalation and joint action with Legal on irregularities.",
      ],
      svg: "RiskSVG",
    },
    {
      id: "future-proofing",
      heading: "7. Future-Proofing Measures",
      bullets: [
        "AI-driven forecasting; blockchain-ledger transparency.",
        "Continuous compliance updates for international regs.",
        "Cyber-finance training modules; crisis management framework.",
      ],
      svg: "FutureSVG",
    },
    {
      id: "confidentiality-ethics",
      heading: "8. Confidentiality & Ethics",
      bullets: [
        "Strict confidentiality for financial/donor data.",
        "Whistleblower safeguards aligned with ICAI Code of Ethics.",
      ],
      svg: "EthicsSVG",
    },
    {
      id: "reporting-accountability",
      heading: "9. Reporting & Accountability",
      bullets: [
        "Quarterly reports to Board and regulators; full transparency.",
        "Immediate reporting for significant issues.",
      ],
      svg: "ReportingSVG",
    },
    {
      id: "legal-disclaimer",
      heading: "10. Legal Disclaimer",
      bullets: [
        "Governed by Indian law; auto-updates to future amendments.",
        "Not liable for third-party fraud beyond control when due diligence followed.",
      ],
      svg: "DisclaimerSVG",
    },
    {
      id: "conclusion",
      heading: "11. Conclusion",
      bullets: [
        "Finance safeguards integrity, compliance, and trust.",
        "Advanced tech + strict legal frameworks + transparent governance = long-term stability and global credibility.",
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
const FinanceHeroSVG = (props) => (
  <svg viewBox="0 0 760 520" role="img" aria-labelledby="finHeroTitle finHeroDesc" className="w-full h-auto" {...props}>
    <title id="finHeroTitle">Finance Department Illustration</title>
    <desc id="finHeroDesc">Cartoon ledger, coins, calculator, and shield for compliant finance.</desc>

    {/* Background blobs */}
    <g opacity="0.35">
      <ellipse cx="200" cy="170" rx="160" ry="70" fill={color.cyan100} />
      <ellipse cx="530" cy="130" rx="140" ry="60" fill={color.indigo100} />
      <ellipse cx="380" cy="440" rx="220" ry="50" fill={color.emerald100} />
    </g>

    {/* Ledger */}
    <g transform="translate(100,120)">
      <rect x="0" y="0" width="220" height="160" rx="16" fill={color.white} stroke={color.indigo400} strokeWidth="4" />
      <rect x="24" y="28" width="120" height="12" rx="6" fill={color.slate700} />
      <rect x="24" y="52" width="100" height="12" rx="6" fill={color.slate700} />
      <rect x="24" y="76" width="140" height="12" rx="6" fill={color.slate700} />
    </g>

    {/* Coins */}
    <g transform="translate(360,260)">
      <ellipse cx="0" cy="0" rx="60" ry="16" fill={color.amber400} />
      <ellipse cx="0" cy="-20" rx="60" ry="16" fill={color.amber100} stroke={color.amber400} strokeWidth="4" />
      <ellipse cx="0" cy="-40" rx="60" ry="16" fill={color.amber100} stroke={color.amber400} strokeWidth="4" />
    </g>

    {/* Calculator + shield */}
    <g transform="translate(520,120)">
      <rect x="0" y="0" width="160" height="200" rx="16" fill={color.white} stroke={color.cyan500} strokeWidth="4" />
      <rect x="24" y="24" width="112" height="20" rx="6" fill={color.indigo400} />
      <rect x="24" y="56" width="40" height="40" rx="8" fill={color.indigo100} />
      <rect x="76" y="56" width="40" height="40" rx="8" fill={color.indigo100} />
      <rect x="24" y="104" width="40" height="40" rx="8" fill={color.indigo100} />
      <rect x="76" y="104" width="40" height="40" rx="8" fill={color.indigo100} />
      {/* Shield tick */}
      <g transform="translate(100,160)">
        <path d="M24 -30l40 16v18c0 20-14 36-40 46c-26-10-40-26-40-46v-18l40-16z" fill={color.white} stroke={color.indigo400} strokeWidth="3" />
        <path d="M8 8l16 16 24-24" stroke={color.emerald400} strokeWidth="5" fill="none" strokeLinecap="round" />
      </g>
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

/* -------------------- Section SVGs (big, one per section) -------------------- */
const PurposeSVG = (props) => (
  <svg viewBox="0 0 740 360" role="img" aria-label="Purpose & Vision" className="w-full h-full" {...props}>
    <BG id="gPV" from={color.cyan100} to={color.indigo100} />
    <Panel x="0" y="0" w="740" h="360" r="20" fill="url(#gPV)" />
    {/* Target + strategy sheet */}
    <circle cx="160" cy="160" r="48" fill={color.white} />
    <circle cx="160" cy="160" r="10" fill={color.indigo600} />
    <Panel x="340" y="110" w="260" h="140" r="16" fill={color.white} />
    <Panel x="368" y="140" w="200" h="12" r="6" fill={color.slate700} />
    <Panel x="368" y="166" w="160" h="12" r="6" fill={color.slate700} />
  </svg>
);

const GovernanceSVG = (props) => (
  <svg viewBox="0 0 740 360" role="img" aria-label="Governance & Roles" className="w-full h-full" {...props}>
    <Panel x="0" y="0" w="740" h="360" r="20" fill={color.amber100} />
    {/* Org chart */}
    <Panel x="90" y="60" w="160" h="44" fill={color.white} stroke={color.slate700} sw="2" />
    <Panel x="350" y="60" w="160" h="44" fill={color.white} stroke={color.slate700} sw="2" />
    <Panel x="220" y="160" w="160" h="44" fill={color.white} stroke={color.slate700} sw="2" />
    <path d="M170 104v60M430 104v60M240 160h120" stroke={color.slate700} strokeWidth="3" />
    {/* Role badges */}
    <Panel x="530" y="220" w="160" h="60" r="16" fill={color.indigo100} />
    <circle cx="550" cy="250" r="10" fill={color.indigo400} />
    <circle cx="590" cy="250" r="10" fill={color.cyan500} />
    <circle cx="630" cy="250" r="10" fill={color.emerald400} />
  </svg>
);

const LegalSVG = (props) => (
  <svg viewBox="0 0 740 360" role="img" aria-label="Legal & Regulatory" className="w-full h-full" {...props}>
    <Panel x="0" y="0" w="740" h="360" r="20" fill={color.indigo100} />
    {/* Law book stack + scale + AML shield */}
    <g transform="translate(100,80)">
      <Panel x="0" y="60" w="120" h="24" r="6" fill={color.rose100} />
      <Panel x="16" y="36" w="120" h="24" r="6" fill={color.amber100} />
      <Panel x="32" y="12" w="120" h="24" r="6" fill={color.cyan100} />
    </g>
    <g transform="translate(320,80)">
      <path d="M120 20 v120" stroke={color.indigo600} strokeWidth="6" />
      <circle cx="120" cy="20" r="10" fill={color.indigo600} />
      <path d="M60 60 h120" stroke={color.indigo600} strokeWidth="6" />
    </g>
    <g transform="translate(520,80)">
      <path d="M60 0l80 32v36c0 38-26 70-80 90-54-20-80-52-80-90V32L60 0z" fill={color.white} stroke={color.indigo400} strokeWidth="4" />
      <path d="M30 70l28 28 44-44" stroke={color.emerald400} strokeWidth="6" fill="none" strokeLinecap="round" />
    </g>
  </svg>
);

const CoreSVG = (props) => (
  <svg viewBox="0 0 740 360" role="img" aria-label="Core Responsibilities" className="w-full h-full" {...props}>
    <BG id="gCore" from={color.cyan100} to={color.indigo100} />
    <Panel x="0" y="0" w="740" h="360" r="20" fill="url(#gCore)" />
    {/* Budget, ledger, payroll, reports tiles */}
    <Panel x="80" y="80" w="160" h="180" r="14" fill={color.white} />
    <Panel x="260" y="80" w="160" h="180" r="14" fill={color.white} />
    <Panel x="440" y="80" w="220" h="180" r="14" fill={color.white} />
    <circle cx="160" cy="120" r="16" fill={color.indigo400} />
    <circle cx="340" cy="120" r="16" fill={color.cyan500} />
    <circle cx="520" cy="120" r="16" fill={color.emerald400} />
  </svg>
);

const TasksSVG = (props) => (
  <svg viewBox="0 0 740 360" role="img" aria-label="Departmental Tasks" className="w-full h-full" {...props}>
    <Panel x="0" y="0" w="740" h="360" r="20" fill={color.emerald100} />
    {/* Policy doc + dashboard + chain (blockchain) */}
    <Panel x="100" y="80" w="220" h="160" r="12" fill={color.white} />
    <Panel x="360" y="80" w="140" h="120" r="16" fill={color.indigo100} />
    <path d="M540 120h120" stroke={color.emerald400} strokeWidth="10" />
  </svg>
);

const RiskSVG = (props) => (
  <svg viewBox="0 0 740 360" role="img" aria-label="Risk & Fraud Management" className="w-full h-full" {...props}>
    <Panel x="0" y="0" w="740" h="360" r="20" fill={color.rose100} />
    {/* Alert + magnifier + ledger */}
    <circle cx="140" cy="120" r="42" fill={color.rose400} />
    <path d="M140 100v24" stroke="white" strokeWidth="6" strokeLinecap="round" />
    <circle cx="140" cy="146" r="4" fill="white" />
    <Panel x="240" y="90" w="160" h="120" r="12" fill={color.white} />
    <circle cx="520" cy="180" r="34" fill={color.white} />
    <path d="M544 204l30 30" stroke={color.slate700} strokeWidth="6" strokeLinecap="round" />
  </svg>
);

const FutureSVG = (props) => (
  <svg viewBox="0 0 740 360" role="img" aria-label="Future-Proofing Measures" className="w-full h-full" {...props}>
    <BG id="gF" from={color.indigo100} to={color.cyan100} />
    <Panel x="0" y="0" w="740" h="360" r="20" fill="url(#gF)" />
    {/* AI curve + chain + shield */}
    <Panel x="90" y="90" w="160" h="120" r="16" fill={color.white} />
    <Panel x="260" y="90" w="160" h="120" r="16" fill={color.white} />
    <Panel x="430" y="90" w="220" h="120" r="16" fill={color.white} />
    <path d="M110 170c40-30 80-30 120 0" stroke={color.indigo600} strokeWidth="6" fill="none" />
    <path d="M470 150h140" stroke={color.emerald400} strokeWidth="8" />
  </svg>
);

const EthicsSVG = (props) => (
  <svg viewBox="0 0 740 360" role="img" aria-label="Confidentiality & Ethics" className="w-full h-full" {...props}>
    <Panel x="0" y="0" w="740" h="360" r="20" fill={color.indigo100} />
    {/* Lock + whistle (whistleblower) */}
    <path d="M200 170v-26a26 26 0 0 1 52 0v26" stroke={color.indigo600} strokeWidth="6" fill="none" />
    <Panel x="186" y="170" w="92" h="120" r="12" fill={color.white} stroke={color.indigo600} sw="4" />
    <circle cx="232" cy="248" r="12" fill={color.indigo600} />
    <Panel x="420" y="120" w="220" h="120" r="16" fill={color.white} />
    <path d="M430 160h80" stroke={color.amber400} strokeWidth="8" />
  </svg>
);

const ReportingSVG = (props) => (
  <svg viewBox="0 0 740 360" role="img" aria-label="Reporting & Accountability" className="w-full h-full" {...props}>
    <Panel x="0" y="0" w="740" h="360" r="20" fill={color.emerald100} />
    {/* KPIs */}
    <Panel x="100" y="80" w="200" h="160" r="12" fill={color.white} />
    <Panel x="360" y="90" w="260" h="140" r="12" fill={color.white} />
    <Panel x="390" y="180" w="40" h="40" r="6" fill={color.cyan500} />
    <Panel x="440" y="160" w="40" h="60" r="6" fill={color.indigo400} />
    <Panel x="490" y="140" w="40" h="80" r="6" fill={color.emerald400} />
    <Panel x="540" y="120" w="40" h="100" r="6" fill={color.amber400} />
  </svg>
);

const DisclaimerSVG = (props) => (
  <svg viewBox="0 0 740 360" role="img" aria-label="Legal Disclaimer" className="w-full h-full" {...props}>
    <Panel x="0" y="0" w="740" h="360" r="20" fill={color.amber100} />
    {/* Document + India outline-esque tick (abstract) */}
    <Panel x="120" y="90" w="200" h="160" r="12" fill={color.white} />
    <path d="M420 120l80 32v36c0 38-26 70-80 90-54-20-80-52-80-90v-36l80-32z" fill={color.white} stroke={color.indigo400} strokeWidth="4" />
    <path d="M392 188l30 30 46-46" stroke={color.emerald400} strokeWidth="6" fill="none" strokeLinecap="round" />
  </svg>
);

const ConclusionSVG = (props) => (
  <svg viewBox="0 0 740 360" role="img" aria-label="Conclusion" className="w-full h-full" {...props}>
    <Panel x="0" y="0" w="740" h="360" r="20" fill={color.cyan100} />
    {/* Flag + laurel */}
    <Panel x="120" y="70" w="14" h="160" r="7" fill={color.indigo600} />
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
export default function FinanceDepartment() {
  const { container, itemUp } = useAnims();

  const heroRef = useRef(null);
  const { scrollYProgress } = useScroll({ target: heroRef, offset: ["start start", "end start"] });
  const heroY = useTransform(scrollYProgress, [0, 1], [0, -40]); // gentle parallax up

  const svgMap = {
    PurposeSVG,
    GovernanceSVG,
    LegalSVG,
    CoreSVG,
    TasksSVG,
    RiskSVG,
    FutureSVG,
    EthicsSVG,
    ReportingSVG,
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
            {["Transparency", "Compliance", "Audits", "Dashboards"].map((pill) => (
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
              <FinanceHeroSVG />
            </div>
          </div>
        </motion.div>
      </div>

      {/* Sections */}
      <div className="mt-8 sm:mt-10 md:mt-12">
        {data.sections.map((sec, idx) => {
          const SVGComp = svgMap[sec.svg] ?? PurposeSVG;
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
