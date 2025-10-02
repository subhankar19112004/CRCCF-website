// src/pages/ourDepartments/RevenueDepartment.jsx
import React, { useRef, useState } from "react";
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
    show: {
      opacity: 1,
      y: 0,
      transition: { duration: shouldReduce ? 0 : 0.28 },
    },
  };
  return { container, itemUp, shouldReduce };
};

/* -------------------- Colors -------------------- */
const color = {
  cyan50: "#ECFEFF", cyan100: "#CFFAFE", cyan300: "#67E8F9", cyan500: "#06B6D4",
  indigo100: "#E0E7FF", indigo300: "#A5B4FC", indigo400: "#818CF8", indigo600: "#4F46E5",
  emerald100: "#D1FAE5", emerald300: "#6EE7B7", emerald400: "#34D399",
  amber100: "#FEF3C7", amber300: "#FCD34D", amber400: "#F59E0B",
  rose100: "#FFE4E6", rose300: "#FDA4AF", rose400: "#FB7185",
  slate500: "#64748B", slate700: "#334155", slate900: "#0F172A",
  white: "#FFFFFF",
};

/* -------------------- Page Data (FULL) -------------------- */
const data = {
  title: "Revenue Department",
  shortName: "Revenue",
  tagline:
    "Driving Growth with Integrity, Compliance, and Sustainable Revenue Excellence.",
  summary:
    "Oversees non-profit fundraising and commercial streams with airtight compliance. Embraces AI, blockchain, and real-time analytics for fraud detection, tracking, and transparent reporting.",
  sections: [
    {
      id: "introduction",
      heading: "Introduction",
      desc: "Role, Section 8 compliance, and modern tech adoption (AI, blockchain, analytics).",
      bullets: [
        "Ensures stability, growth, and sustainability of CRCCF through compliant revenue operations.",
        "Oversees both non-profit fundraising and commercial revenue streams with transparency.",
        "Adopts AI, blockchain, and real-time analytics for tracking, fraud detection, and compliance.",
      ],
      svg: "IntroSVG",
    },
    {
      id: "purpose",
      heading: "1. Purpose, Mission, and Vision",
      desc: "Strategic objective of revenue, mission & vision alignment.",
      bullets: [
        "Purpose: plan, manage, and optimize revenue to strengthen CRCCF’s mission.",
        "Mission: achieve sustainable growth via compliant, ethical, transparent systems.",
        "Vision: become a global revenue governance model integrating tech, law, and ethics.",
      ],
      svg: "PurposeSVG",
    },
    {
      id: "governance",
      heading: "2. Governance Structure and Key Roles",
      desc: "CRO, compliance, digital systems, audit, CSR/grants, global liaison, cyber-risk.",
      bullets: [
        "Chief Revenue Officer (CRO): leads revenue strategy and operations.",
        "Revenue Compliance Manager: ensures regulatory adherence.",
        "Digital Revenue Systems Manager: automation, AI, blockchain tracking.",
        "Internal Audit Officer: periodic audits, reports to Board.",
        "CSR & Grant Officer: manages CSR funds and grants.",
        "Global Revenue Liaison: international partnerships and compliance.",
        "Cyber Financial Risk Manager: monitors cyber-financial threats.",
      ],
      svg: "GovernanceSVG",
    },
    {
      id: "compliance",
      heading: "3. Legal and Regulatory Compliance",
      desc: "Companies Act, Income Tax, GST, FCRA, DPDP, PMLA, IPC, Ind AS/IFRS, ICAI.",
      bullets: [
        "Companies Act 2013; Income Tax Act 1961; GST Act 2017; FCRA 2010.",
        "DPDP Act 2023; PMLA 2002; IPC 1860 for fraud prevention.",
        "Ind AS & IFRS reporting; ICAI audit standards.",
      ],
      svg: "ComplianceSVG",
    },
    {
      id: "core",
      heading: "4. Core Responsibilities",
      desc: "AI forecasting, fundraising, commercial revenue, governance, controls, digital, global.",
      bullets: [
        "AI-driven revenue planning and forecasting to optimize cash flow.",
        "Fundraising & donations: donor relations, CSR, blockchain transparency.",
        "Commercial revenue: licensing, cyber-education, consulting services.",
        "Compliance governance: automated tax/legal workflows and regulator reporting.",
        "Internal controls: segregation of duties, multi-level approvals, anti-fraud checks.",
        "Digital transformation: blockchain & AI tracking for real-time visibility.",
        "Global strategy: international expansion with compliant practices.",
      ],
      svg: "CoreSVG",
    },
    {
      id: "tasks",
      heading: "5. Departmental Tasks",
      desc: "Policies, secure donor DB, cross-dept compliance, staff training, CSR, cross-border, audits.",
      bullets: [
        "Draft and update revenue policies, procedures, and SOPs.",
        "Maintain encrypted donor databases with access controls.",
        "Collaborate with Legal/Finance for compliance oversight.",
        "Continuous staff training on financial and cyber laws.",
        "CSR contribution management with Section 135 reporting.",
        "Real-time cross-border payment compliance.",
        "Readiness for forensic financial audits.",
      ],
      svg: "TasksSVG",
    },
    {
      id: "future",
      heading: "6. Future-Proofing Initiatives",
      desc: "AI analytics, blockchain, dashboards, digital tax, scenario planning.",
      bullets: [
        "AI-driven analytics to guide strategy.",
        "Blockchain for secure, transparent revenue management.",
        "Real-time dashboards for Board and stakeholders.",
        "Digital tax compliance integrated globally.",
        "Scenario planning for future cyber-financial threats.",
      ],
      svg: "FutureSVG",
    },
    {
      id: "reporting",
      heading: "7. Reporting and Transparency",
      desc: "Monthly, quarterly, annual internal + external reporting; public transparency report.",
      bullets: [
        "Detailed monthly/quarterly/annual reports for governance and regulators.",
        "Annual public transparency report to build stakeholder trust.",
      ],
      svg: "ReportingSVG",
    },
    {
      id: "risk",
      heading: "8. Risk and Fraud Management",
      desc: "Anti-Fraud Framework, detection/prevention, whistleblower protection.",
      bullets: [
        "Anti-Fraud Framework for detecting and preventing irregularities.",
        "Whistleblower policy for safe, confidential reporting.",
      ],
      svg: "RiskSVG",
    },
    {
      id: "collab",
      heading: "9. Collaboration and External Engagement",
      desc: "Engage auditors, government, global partners for top-tier compliance.",
      bullets: [
        "Active engagement with external auditors, agencies, and partners.",
        "Maintain highest standards of compliance and integrity.",
      ],
      svg: "CollabSVG",
    },
    {
      id: "disclaimer",
      heading: "10. Legal Disclaimer",
      desc: "Auto-updates with law changes; non-liability for external fraud beyond control.",
      bullets: [
        "Charter auto-updates with domestic and international legal changes.",
        "Not liable for external fraud beyond control when internal systems followed.",
      ],
      svg: "DisclaimerSVG",
    },
    {
      id: "conclusion",
      heading: "11. Conclusion",
      desc: "Strategic pillar ensuring growth, sustainability, protection, and trust.",
      bullets: [
        "Revenue is a strategic pillar pairing technology, law, and ethics.",
        "Ensures growth and sustainability while protecting the organization and trust.",
      ],
      svg: "ConclusionSVG",
    },
  ],
};

/* -------------------- SVG Helpers -------------------- */
const Defs = () => (
  <defs>
    <linearGradient id="gradCyanIndigo" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0" stopColor={color.cyan100} />
      <stop offset="1" stopColor={color.indigo100} />
    </linearGradient>
    <linearGradient id="gradEmerald" x1="0" y1="0" x2="1" y2="0">
      <stop offset="0" stopColor={color.emerald300} />
      <stop offset="1" stopColor={color.emerald400} />
    </linearGradient>
    <linearGradient id="gradAmber" x1="0" y1="0" x2="1" y2="0">
      <stop offset="0" stopColor={color.amber300} />
      <stop offset="1" stopColor={color.amber400} />
    </linearGradient>
    <pattern id="dots" width="8" height="8" patternUnits="userSpaceOnUse">
      <circle cx="1.5" cy="1.5" r="1.5" fill={color.indigo100} />
    </pattern>
    <filter id="softShadow" x="-20%" y="-20%" width="140%" height="140%">
      <feDropShadow dx="0" dy="2" stdDeviation="3" floodColor="#000000" floodOpacity="0.15" />
    </filter>
  </defs>
);

/* -------------------- Complex Hero Illustration -------------------- */
const RevenueHeroSVG = (props) => (
  <svg viewBox="0 0 760 520" role="img" aria-labelledby="revHeroTitle revHeroDesc" className="w-full h-auto" {...props}>
    <title id="revHeroTitle">Revenue Department Illustration</title>
    <desc id="revHeroDesc">Complex dashboard, blockchain chain, shield, and rising bars to depict compliant revenue growth.</desc>
    <Defs />
    {/* background blobs */}
    <g opacity="0.35">
      <ellipse cx="200" cy="160" rx="160" ry="70" fill="url(#gradCyanIndigo)" />
      <ellipse cx="540" cy="130" rx="140" ry="60" fill={color.emerald100} />
      <ellipse cx="380" cy="440" rx="220" ry="50" fill={color.cyan50} />
    </g>
    {/* dashboard card */}
    <g transform="translate(80,120)" filter="url(#softShadow)">
      <rect x="0" y="0" width="300" height="200" rx="16" fill={color.white} stroke={color.indigo300} strokeWidth="3" />
      <rect x="20" y="20" width="120" height="12" rx="6" fill={color.slate500} />
      {/* bars */}
      <rect x="40" y="70" width="24" height="80" rx="6" fill={color.cyan500} />
      <rect x="80" y="50" width="24" height="100" rx="6" fill={color.indigo400} />
      <rect x="120" y="35" width="24" height="115" rx="6" fill={color.emerald400} />
      <rect x="160" y="20" width="24" height="130" rx="6" fill={color.amber400} />
      {/* line */}
      <path d="M40 170c30-30 70-30 100-60 20-12 40-34 80-40" stroke={color.emerald400} strokeWidth="4" fill="none" />
    </g>
    {/* blockchain chain */}
    <g transform="translate(440,150)" filter="url(#softShadow)">
      <rect x="0" y="0" width="70" height="70" rx="12" fill="url(#gradEmerald)" />
      <rect x="90" y="0" width="70" height="70" rx="12" fill="url(#gradAmber)" />
      <rect x="180" y="0" width="70" height="70" rx="12" fill="url(#gradEmerald)" />
      <path d="M70 35h20M160 35h20" stroke={color.slate700} strokeWidth="6" strokeLinecap="round" />
    </g>
    {/* shield */}
    <g transform="translate(520,260)">
      <path d="M40 -20l60 24v26c0 28-18 52-60 67-42-15-60-39-60-67v-26l60-24z" fill={color.white} stroke={color.indigo400} strokeWidth="3" />
      <path d="M18 16l18 18 26-26" stroke={color.emerald400} strokeWidth="6" fill="none" strokeLinecap="round" />
    </g>
  </svg>
);

/* -------------------- Section Complex SVGs -------------------- */
const IntroSVG = (props) => (
  <svg viewBox="0 0 740 360" role="img" aria-label="Introduction" className="w-full h-full" {...props}>
    <Defs />
    <rect x="0" y="0" width="740" height="360" rx="20" fill="url(#gradCyanIndigo)" />
    <rect x="40" y="40" width="660" height="280" rx="18" fill={color.white} stroke={color.indigo300} strokeWidth="3" />
    <rect x="60" y="70" width="200" height="12" rx="6" fill={color.slate500} />
    <rect x="60" y="100" width="280" height="12" rx="6" fill="url(#gradEmerald)" />
    <circle cx="620" cy="120" r="60" fill="url(#gradAmber)" />
    <circle cx="620" cy="120" r="28" fill={color.white} />
    <rect x="60" y="140" width="300" height="160" rx="12" fill="url(#dots)" />
  </svg>
);

const PurposeSVG = (props) => (
  <svg viewBox="0 0 740 360" role="img" aria-label="Purpose, Mission, Vision" className="w-full h-full" {...props}>
    <Defs />
    <rect x="0" y="0" width="740" height="360" rx="20" fill={color.emerald100} />
    {/* target + mission flag + vision eye */}
    <circle cx="150" cy="180" r="52" fill={color.white} />
    <circle cx="150" cy="180" r="10" fill={color.indigo600} />
    <rect x="300" y="120" width="14" height="140" rx="7" fill={color.indigo600} />
    <path d="M314 122h120l-20 22 20 22H314z" fill={color.cyan500} />
    <ellipse cx="560" cy="180" rx="42" ry="28" fill={color.white} />
    <circle cx="560" cy="180" r="8" fill={color.indigo600} />
  </svg>
);

const GovernanceSVG = (props) => (
  <svg viewBox="0 0 740 360" role="img" aria-label="Governance & Roles" className="w-full h-full" {...props}>
    <Defs />
    <rect x="0" y="0" width="740" height="360" rx="20" fill={color.amber100} />
    {/* org chart with badges */}
    <rect x="80" y="60" width="160" height="50" rx="10" fill={color.white} filter="url(#softShadow)" />
    <rect x="300" y="60" width="160" height="50" rx="10" fill={color.white} filter="url(#softShadow)" />
    <rect x="520" y="60" width="160" height="50" rx="10" fill={color.white} filter="url(#softShadow)" />
    <path d="M160 110v60M380 110v60M600 110v60" stroke={color.slate700} strokeWidth="3" />
    <rect x="220" y="200" width="300" height="50" rx="10" fill={color.white} filter="url(#softShadow)" />
    <circle cx="570" cy="240" r="12" fill={color.indigo400} />
    <circle cx="600" cy="240" r="12" fill={color.cyan500} />
    <circle cx="630" cy="240" r="12" fill={color.emerald400} />
  </svg>
);

const ComplianceSVG = (props) => (
  <svg viewBox="0 0 740 360" role="img" aria-label="Legal & Regulatory Compliance" className="w-full h-full" {...props}>
    <Defs />
    <rect x="0" y="0" width="740" height="360" rx="20" fill={color.indigo100} />
    {/* scales + ledger + lock */}
    <path d="M140 80 v160" stroke={color.indigo600} strokeWidth="6" />
    <path d="M100 120 h80" stroke={color.indigo600} strokeWidth="6" />
    <rect x="260" y="90" width="180" height="180" rx="14" fill={color.white} />
    <path d="M520 170v-20a26 26 0 0 1 52 0v20" stroke={color.indigo600} strokeWidth="6" fill="none" />
    <rect x="508" y="170" width="92" height="100" rx="12" fill={color.white} stroke={color.indigo600} strokeWidth="4" />
  </svg>
);

const CoreSVG = (props) => (
  <svg viewBox="0 0 740 360" role="img" aria-label="Core Responsibilities" className="w-full h-full" {...props}>
    <Defs />
    <rect x="0" y="0" width="740" height="360" rx="20" fill="url(#gradCyanIndigo)" />
    {/* AI curve + blocks + approvals */}
    <path d="M80 260c60-80 120-100 200-120 80-20 160-40 240-80" stroke={color.emerald400} strokeWidth="6" fill="none" />
    <rect x="120" y="80" width="140" height="90" rx="12" fill={color.white} />
    <rect x="300" y="80" width="140" height="90" rx="12" fill={color.white} />
    <rect x="480" y="80" width="140" height="90" rx="12" fill={color.white} />
    <circle cx="540" cy="210" r="46" fill={color.white} />
    <path d="M520 210l16 16 26-26" stroke={color.emerald400} strokeWidth="6" fill="none" strokeLinecap="round" />
  </svg>
);

const TasksSVG = (props) => (
  <svg viewBox="0 0 740 360" role="img" aria-label="Departmental Tasks" className="w-full h-full" {...props}>
    <Defs />
    <rect x="0" y="0" width="740" height="360" rx="20" fill={color.emerald100} />
    {/* SOP doc + database + shield */}
    <rect x="120" y="90" width="200" height="160" rx="12" fill={color.white} />
    <ellipse cx="440" cy="130" rx="70" ry="22" fill={color.white} />
    <rect x="370" y="108" width="140" height="120" rx="16" fill={color.white} />
    <ellipse cx="440" cy="150" rx="70" ry="22" fill={color.white} />
    <g transform="translate(560,120)">
      <path d="M40 -20l60 24v26c0 28-18 52-60 67-42-15-60-39-60-67v-26l60-24z" fill={color.white} stroke={color.indigo400} strokeWidth="3" />
      <path d="M18 16l18 18 26-26" stroke={color.emerald400} strokeWidth="6" fill="none" strokeLinecap="round" />
    </g>
  </svg>
);

const FutureSVG = (props) => (
  <svg viewBox="0 0 740 360" role="img" aria-label="Future-Proofing" className="w-full h-full" {...props}>
    <Defs />
    <rect x="0" y="0" width="740" height="360" rx="20" fill="url(#gradAmber)" />
    {/* brain-AI + chain + dashboard */}
    <path d="M160 210c0-50 80-50 80 0 0 44-80 70-80 70s-80-26-80-70c0-50 80-50 80 0z" fill={color.white} stroke={color.indigo400} strokeWidth="3" />
    <rect x="320" y="90" width="180" height="140" rx="16" fill={color.white} />
    <rect x="340" y="115" width="60" height="12" rx="6" fill={color.slate500} />
    <rect x="360" y="140" width="26" height="70" rx="6" fill={color.cyan500} />
    <rect x="396" y="155" width="26" height="55" rx="6" fill={color.indigo400} />
    <rect x="432" y="130" width="26" height="80" rx="6" fill={color.emerald400} />
    <g transform="translate(560,110)">
      <rect x="0" y="0" width="50" height="50" rx="10" fill="url(#gradEmerald)" />
      <rect x="60" y="0" width="50" height="50" rx="10" fill="url(#gradAmber)" />
      <path d="M50 25h10" stroke={color.slate700} strokeWidth="6" strokeLinecap="round" />
    </g>
  </svg>
);

const ReportingSVG = (props) => (
  <svg viewBox="0 0 740 360" role="img" aria-label="Reporting & Transparency" className="w-full h-full" {...props}>
    <Defs />
    <rect x="0" y="0" width="740" height="360" rx="20" fill={color.cyan100} />
    {/* calendar + report card */}
    <rect x="100" y="90" width="240" height="180" rx="16" fill={color.white} />
    <path d="M100 140h240M160 90v180M220 90v180M280 90v180" stroke={color.indigo100} strokeWidth="2" />
    <rect x="380" y="110" width="260" height="140" rx="14" fill={color.white} />
    <rect x="400" y="130" width="180" height="12" rx="6" fill={color.slate500} />
    <rect x="400" y="160" width="120" height="12" rx="6" fill={color.indigo300} />
  </svg>
);

const RiskSVG = (props) => (
  <svg viewBox="0 0 740 360" role="img" aria-label="Risk & Fraud Management" className="w-full h-full" {...props}>
    <Defs />
    <rect x="0" y="0" width="740" height="360" rx="20" fill={color.rose100} />
    {/* alert + magnifier over bars */}
    <circle cx="160" cy="120" r="40" fill={color.rose400} />
    <path d="M160 100v22" stroke={color.white} strokeWidth="6" strokeLinecap="round" />
    <circle cx="160" cy="146" r="4" fill={color.white} />
    <rect x="320" y="110" width="200" height="120" rx="12" fill={color.white} />
    <rect x="340" y="200" width="28" height="20" rx="6" fill={color.cyan500} />
    <rect x="376" y="180" width="28" height="40" rx="6" fill={color.indigo400} />
    <rect x="412" y="160" width="28" height="60" rx="6" fill={color.emerald400} />
    <circle cx="470" cy="210" r="30" fill={color.white} />
    <path d="M492 232l28 28" stroke={color.slate700} strokeWidth="6" strokeLinecap="round" />
  </svg>
);

const CollabSVG = (props) => (
  <svg viewBox="0 0 740 360" role="img" aria-label="Collaboration & External Engagement" className="w-full h-full" {...props}>
    <Defs />
    <rect x="0" y="0" width="740" height="360" rx="20" fill={color.emerald100} />
    {/* handshake + govt building */}
    <path d="M120 240c60-30 100-30 160 0" stroke={color.indigo400} strokeWidth="10" fill="none" strokeLinecap="round" />
    <circle cx="110" cy="240" r="14" fill={color.indigo400} />
    <circle cx="260" cy="240" r="14" fill={color.indigo400} />
    <g transform="translate(460,110)">
      <rect x="0" y="40" width="180" height="80" rx="8" fill={color.white} />
      <path d="M0 40h180M20 120v40M60 120v40M100 120v40M140 120v40" stroke={color.slate700} strokeWidth="4" />
    </g>
  </svg>
);

const DisclaimerSVG = (props) => (
  <svg viewBox="0 0 740 360" role="img" aria-label="Legal Disclaimer" className="w-full h-full" {...props}>
    <Defs />
    <rect x="0" y="0" width="740" height="360" rx="20" fill={color.amber100} />
    <rect x="260" y="90" width="220" height="180" rx="16" fill={color.white} />
    <rect x="290" y="120" width="160" height="12" rx="6" fill={color.slate500} />
    <rect x="290" y="146" width="120" height="12" rx="6" fill={color.indigo300} />
  </svg>
);

const ConclusionSVG = (props) => (
  <svg viewBox="0 0 740 360" role="img" aria-label="Conclusion" className="w-full h-full" {...props}>
    <Defs />
    <rect x="0" y="0" width="740" height="360" rx="20" fill={color.cyan100} />
    {/* flag + laurel motif */}
    <rect x="120" y="70" width="14" height="160" rx="7" fill={color.indigo600} />
    <path d="M134 72h120l-20 22 20 22H134z" fill={color.cyan500} />
    <path d="M520 240c-40-24-60-48-60-72 0-24 20-48 60-72" stroke={color.emerald400} strokeWidth="6" fill="none" />
    <path d="M520 240c40-24 60-48 60-72 0-24-20-48-60-72" stroke={color.emerald400} strokeWidth="6" fill="none" />
  </svg>
);

/* -------------------- Feature Section Wrapper (parallax + reveal) -------------------- */
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

/* -------------------- Mini Section Menu (with descriptions) -------------------- */
const SectionMenu = ({ items }) => {
  const [open, setOpen] = useState(false);
  return (
    <div className="sticky top-4 z-10">
      {/* Mobile toggle */}
      <button
        type="button"
        onClick={() => setOpen(!open)}
        className="md:hidden w-full mb-3 px-3 py-2 rounded-lg border border-gray-200 bg-white text-sm font-medium flex items-center justify-between"
      >
        Section menu
        <svg className={`w-4 h-4 ml-2 transform ${open ? "rotate-180" : ""}`} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
        </svg>
      </button>

      <nav className={`${open ? "block" : "hidden"} md:block`}>
        <ul className="space-y-2 md:space-y-3">
          {items.map((it) => (
            <li key={it.id}>
              <a
                href={`#${it.id}`}
                className="group block rounded-lg border border-gray-200 bg-white p-3 hover:border-cyan-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400"
              >
                <div className="flex items-start gap-2">
                  <span className="mt-0.5 inline-flex h-2.5 w-2.5 rounded-full bg-cyan-400 group-hover:bg-cyan-500" />
                  <div>
                    <div className="text-sm font-semibold text-gray-900">{it.heading}</div>
                    {it.desc && <div className="text-xs text-gray-600 mt-0.5">{it.desc}</div>}
                  </div>
                </div>
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
};

/* -------------------- Page -------------------- */
export default function RevenueDepartment() {
  const { container, itemUp } = useAnims();

  const heroRef = useRef(null);
  const { scrollYProgress } = useScroll({ target: heroRef, offset: ["start start", "end start"] });
  const heroY = useTransform(scrollYProgress, [0, 1], [0, -40]); // gentle parallax

  const svgMap = {
    IntroSVG,
    PurposeSVG,
    GovernanceSVG,
    ComplianceSVG,
    CoreSVG,
    TasksSVG,
    FutureSVG,
    ReportingSVG,
    RiskSVG,
    CollabSVG,
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

      {/* Hero */}
      <div ref={heroRef} className="grid grid-cols-1 md:grid-cols-3 gap-5 sm:gap-6 md:gap-8 lg:gap-10 items-start">
        {/* Left: title */}
        <motion.div variants={itemUp} className="md:col-span-2">
          <h1 className="text-[22px] sm:text-3xl font-bold text-gray-900">
            {data.title} <span className="text-gray-500 font-semibold">({data.shortName})</span>
          </h1>
          <p className="mt-1.5 sm:mt-2 text-gray-700 text-[15px] sm:text-base">{data.summary}</p>
          <p className="mt-2 sm:mt-3 text-cyan-800 font-medium text-[15px] sm:text-base">{data.tagline}</p>

          {/* Hero Illustration */}
          <motion.div style={{ y: heroY }} className="relative mt-4 sm:mt-5">
            <div
              className="absolute -inset-2 rounded-2xl bg-gradient-to-tr from-cyan-100 via-indigo-100 to-emerald-100 blur-md sm:blur-lg md:blur-xl"
              aria-hidden="true"
            />
            <div className="relative rounded-2xl border border-gray-200 bg-white p-3 sm:p-4 shadow-sm">
              <div className="w-full h-auto max-h-72 sm:max-h-80 md:max-h-none overflow-hidden">
                <RevenueHeroSVG />
              </div>
            </div>
          </motion.div>
        </motion.div>

        {/* Right: Section Menu with descriptions */}
        <aside className="md:col-span-1">
          <SectionMenu items={data.sections} />
        </aside>
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

      {/* Back link (no back-to-top; you already have it elsewhere) */}
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
