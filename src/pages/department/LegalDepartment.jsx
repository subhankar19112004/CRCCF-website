// src/pages/ourDepartments/LegalDepartment.jsx
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

/* -------------------- Page Data (FULL, inline) -------------------- */
const data = {
  title: "Legal Department",
  shortName: "Legal",
  tagline:
    "Upholding justice with unwavering integrity—shielding victims, enforcing cyber laws, and safeguarding rights.",
  summary:
    "CRCCF’s Legal Department is the autonomous guardian of law and governance—empowering victims, preventing risk, and ensuring organization-wide compliance with Indian and global statutes.",
  sections: [
    {
      id: "preamble",
      heading: "Preamble",
      bullets: [
        "Primary guardian of justice, compliance, and ethical integrity within CRCCF.",
        "Protects victims of cybercrime, enforces laws, and ensures strict legality in operations.",
        "Drives transparency, accountability, and public trust in a secure digital future.",
      ],
      svg: "PreambleSVG",
    },
    {
      id: "establishment",
      heading: "1. Establishment & Independence",
      bullets: [
        "Independent, supreme legal entity ensuring unbiased stewardship.",
        "Reports directly to Board and/or CEO; can escalate to regulators/courts on urgent matters.",
        "All staff must follow legal directives; interference is a serious breach of governance.",
      ],
      svg: "EstablishSVG",
    },
    {
      id: "scope",
      heading: "2. Scope of Legal Authority",
      bullets: [
        "Roles: Preventive (avoid risks), Enforcement (investigate & act), Advisory (guide lawful decisions).",
        "Corporate & Company Laws: Companies Act, SEBI, FEMA; meetings, resolutions, CSR, governance.",
        "IT & Cyber Laws: IT Act 2000, DPDP Act 2023; data handling, cybersecurity, digital evidence.",
        "Criminal Laws: Fraud, forgery, extortion, hacking, data theft; CrPC & Evidence Act adherence.",
        "Contracts & Commercial: Draft/review MoUs, vendor contracts; arbitration & conciliation.",
        "Labour & Employment: POSH, labour codes, safety; disputes and disciplinary actions.",
        "Intellectual Property: Copyright, trademark, patent protection; action on infringement.",
        "Consumer Protection: Transparent, fair victim services; platform oversight against exploitation.",
        "Taxation: GST and Income Tax compliance, filings, and governance.",
        "Environmental & CSR: Sustainable operations and lawful CSR alignment.",
      ],
      svg: "ScopeSVG",
    },
    {
      id: "binding-effect",
      heading: "3. Binding Effect of Legal Opinions",
      bullets: [
        "No contract, policy, or public statement without prior legal approval.",
        "Legal decisions are final and mandatory.",
        "Unauthorized actions are void and trigger disciplinary/legal consequences.",
      ],
      svg: "BindingSVG",
    },
    {
      id: "investigations",
      heading: "4. Investigative & Disciplinary Powers",
      bullets: [
        "Absolute authority to investigate fraud, cybercrime, and employee misconduct.",
        "Measures: written warnings, suspension/dismissal, financial penalties, criminal complaints.",
        "Obstruction of investigation attracts maximum civil/criminal liability.",
      ],
      svg: "InvestSVG",
    },
    {
      id: "whistleblower",
      heading: "5. Whistleblower Protection & Compliance Oversight",
      bullets: [
        "Secure, confidential reporting platform with anti-retaliation guarantees.",
        "All reports investigated fairly and impartially.",
        "Promotes transparent, corruption-free culture across CRCCF.",
      ],
      svg: "WhistleSVG",
    },
    {
      id: "counsel",
      heading: "6. Counsel & Regulatory Interface",
      bullets: [
        "May appoint external lawyers, auditors, and experts where needed.",
        "Sole representative in courts, regulatory filings, and law-enforcement communications.",
        "Ensures a consistent, professional legal strategy.",
      ],
      svg: "CounselSVG",
    },
    {
      id: "preventive",
      heading: "7. Preventive Legal Measures",
      bullets: [
        "Regular compliance audits and early-risk detection.",
        "Training on cyber laws, data protection, and corporate ethics.",
        "Handbooks and legal guidelines to standardize practices.",
      ],
      svg: "PreventiveSVG",
    },
    {
      id: "governance",
      heading: "8. Integration with Governance",
      bullets: [
        "Legal directives automatically bind CRCCF’s governance framework.",
        "Violations are serious breaches, leading to disciplinary and/or external legal action.",
      ],
      svg: "GovernanceSVG",
    },
    {
      id: "mandate",
      heading: "9. Overarching Mandate",
      bullets: [
        "Ultimate protector of legality and integrity.",
        "Safeguards victims’ rights and shields employees/stakeholders through lawful action.",
        "Builds long-term trust with victims, law enforcement, and the public.",
      ],
      svg: "MandateSVG",
    },
    {
      id: "references",
      heading: "10. Legal References",
      bullets: [
        "Companies Act, 2013; SEBI Guidelines; FEMA Regulations; Competition Act, 2002.",
        "IT Act, 2000; Digital Personal Data Protection Act, 2023; IPC/CrPC/Evidence Act.",
        "Arbitration & Conciliation Act, 1996; POSH Act, 2013; Consumer Protection Act, 2019.",
        "GST Act & Income Tax Act; Environmental and CSR laws; applicable Central/State laws.",
      ],
      svg: "RefsSVG",
    },
    {
      id: "disclaimer",
      heading: "11. Legal Disclaimer",
      bullets: [
        "Charter interpreted strictly under Indian law; updates auto-reflected on amendments.",
        "CRCCF not liable for third-party misconduct or unforeseen legal changes.",
      ],
      svg: "DisclaimerSVG",
    },
    
    {
      id: "conclusion",
      heading: "12. Conclusion",
      bullets: [
        "Legal is the core of CRCCF’s mission to combat cybercrime lawfully.",
        "Guarantees fairness in victim services, accountability in operations, and full compliance.",
        "Positions CRCCF as a national leader in lawful digital governance.",
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
const LegalHeroSVG = (props) => (
  <svg viewBox="0 0 760 520" role="img" aria-labelledby="legalHeroTitle legalHeroDesc" className="w-full h-auto" {...props}>
    <title id="legalHeroTitle">Legal Department Illustration</title>
    <desc id="legalHeroDesc">Cartoon scales of justice, shield, law books, and a document.</desc>

    {/* Background blobs */}
    <g opacity="0.35">
      <ellipse cx="200" cy="170" rx="160" ry="70" fill={color.cyan100} />
      <ellipse cx="530" cy="130" rx="140" ry="60" fill={color.indigo100} />
      <ellipse cx="380" cy="440" rx="220" ry="50" fill={color.emerald100} />
    </g>

    {/* Law books */}
    <g transform="translate(100,120)">
      <rect x="0" y="60" width="140" height="24" rx="6" fill={color.rose100} />
      <rect x="16" y="36" width="140" height="24" rx="6" fill={color.amber100} />
      <rect x="32" y="12" width="140" height="24" rx="6" fill={color.cyan100} />
    </g>

    {/* Scales */}
    <g transform="translate(320,90)">
      <path d="M120 20 v140" stroke={color.indigo600} strokeWidth="6" />
      <circle cx="120" cy="20" r="10" fill={color.indigo600} />
      <path d="M60 70 h120" stroke={color.indigo600} strokeWidth="6" />
      <circle cx="80" cy="110" r="22" fill={color.white} stroke={color.indigo400} strokeWidth="4" />
      <circle cx="160" cy="110" r="22" fill={color.white} stroke={color.indigo400} strokeWidth="4" />
    </g>

    {/* Shield with check */}
    <g transform="translate(560,240)">
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

/* -------------------- Section SVGs (big, one per section) -------------------- */
const PreambleSVG = (props) => (
  <svg viewBox="0 0 740 360" role="img" aria-label="Preamble" className="w-full h-full" {...props}>
    <BG id="gPre" from={color.cyan100} to={color.indigo100} />
    <Panel x="0" y="0" w="740" h="360" r="20" fill="url(#gPre)" />
    <Panel x="420" y="90" w="220" h="140" r="16" fill={color.white} />
    <circle cx="160" cy="160" r="50" fill={color.white} />
    <path d="M140 160h40" stroke={color.indigo600} strokeWidth="6" />
  </svg>
);

const EstablishSVG = (props) => (
  <svg viewBox="0 0 740 360" role="img" aria-label="Establishment & Independence" className="w-full h-full" {...props}>
    <Panel x="0" y="0" w="740" h="360" r="20" fill={color.amber100} />
    {/* Independence badge + escalation arrow */}
    <Panel x="120" y="90" w="200" h="140" r="16" fill={color.white} />
    <path d="M520 220l40-80" stroke={color.indigo600} strokeWidth="8" strokeLinecap="round" />
    <circle cx="520" cy="220" r="16" fill={color.indigo600} />
  </svg>
);

const ScopeSVG = (props) => (
  <svg viewBox="0 0 740 360" role="img" aria-label="Scope of Legal Authority" className="w-full h-full" {...props}>
    <BG id="gScope" from={color.indigo100} to={color.cyan100} />
    <Panel x="0" y="0" w="740" h="360" r="20" fill="url(#gScope)" />
    {/* Grid of domains */}
    <Panel x="80" y="80" w="160" h="180" r="14" fill={color.white} />
    <Panel x="260" y="80" w="160" h="180" r="14" fill={color.white} />
    <Panel x="440" y="80" w="220" h="180" r="14" fill={color.white} />
    <circle cx="160" cy="120" r="16" fill={color.indigo400} />
    <circle cx="340" cy="120" r="16" fill={color.cyan500} />
    <circle cx="520" cy="120" r="16" fill={color.emerald400} />
  </svg>
);

const BindingSVG = (props) => (
  <svg viewBox="0 0 740 360" role="img" aria-label="Binding Effect" className="w-full h-full" {...props}>
    <Panel x="0" y="0" w="740" h="360" r="20" fill={color.indigo100} />
    {/* Stamp/approval doc */}
    <Panel x="140" y="90" w="220" h="160" r="12" fill={color.white} />
    <circle cx="520" cy="170" r="46" fill={color.white} />
    <path d="M500 170l16 16 26-26" stroke={color.emerald400} strokeWidth="6" fill="none" strokeLinecap="round" />
  </svg>
);

const InvestSVG = (props) => (
  <svg viewBox="0 0 740 360" role="img" aria-label="Investigations & Discipline" className="w-full h-full" {...props}>
    <Panel x="0" y="0" w="740" h="360" r="20" fill={color.rose100} />
    {/* Magnifier + gavel */}
    <circle cx="180" cy="150" r="34" fill={color.white} />
    <path d="M204 174l34 34" stroke={color.slate700} strokeWidth="6" strokeLinecap="round" />
    <Panel x="440" y="120" w="160" h="80" r="12" fill={color.white} />
    <path d="M440 210h160" stroke={color.slate700} strokeWidth="8" />
  </svg>
);

const WhistleSVG = (props) => (
  <svg viewBox="0 0 740 360" role="img" aria-label="Whistleblower Protection" className="w-full h-full" {...props}>
    <Panel x="0" y="0" w="740" h="360" r="20" fill={color.cyan100} />
    {/* Whistle + shield */}
    <Panel x="160" y="130" w="140" h="80" r="20" fill={color.white} />
    <g transform="translate(520,140)">
      <path d="M40 -20l60 24v26c0 28-18 52-60 67-42-15-60-39-60-67v-26l60-24z" fill={color.white} stroke={color.indigo400} strokeWidth="3" />
      <path d="M18 16l18 18 26-26" stroke={color.emerald400} strokeWidth="6" fill="none" strokeLinecap="round" />
    </g>
  </svg>
);

const CounselSVG = (props) => (
  <svg viewBox="0 0 740 360" role="img" aria-label="Counsel & Regulatory Interface" className="w-full h-full" {...props}>
    <Panel x="0" y="0" w="740" h="360" r="20" fill={color.emerald100} />
    {/* Briefcase + courthouse */}
    <Panel x="140" y="120" w="160" h="110" r="12" fill={color.white} />
    <g transform="translate(500,120)">
      <Panel x="0" y="40" w="160" h="80" r="8" fill={color.white} />
      <path d="M0 40h160M20 120v40M60 120v40M100 120v40M140 120v40" stroke={color.slate700} strokeWidth="4" />
    </g>
  </svg>
);

const PreventiveSVG = (props) => (
  <svg viewBox="0 0 740 360" role="img" aria-label="Preventive Legal Measures" className="w-full h-full" {...props}>
    <BG id="gPrev" from={color.indigo100} to={color.cyan100} />
    <Panel x="0" y="0" w="740" h="360" r="20" fill="url(#gPrev)" />
    {/* Audit checklist + book */}
    <Panel x="140" y="90" w="200" h="160" r="12" fill={color.white} />
    <Panel x="460" y="120" w="160" h="120" r="12" fill={color.white} />
    <path d="M480 150h120" stroke={color.indigo600} strokeWidth="6" />
  </svg>
);

const GovernanceSVG = (props) => (
  <svg viewBox="0 0 740 360" role="img" aria-label="Integration with Governance" className="w-full h-full" {...props}>
    <Panel x="0" y="0" w="740" h="360" r="20" fill={color.indigo100} />
    {/* Policy pipeline */}
    <Panel x="120" y="140" w="160" h="60" r="12" fill={color.white} />
    <path d="M280 170h180" stroke={color.indigo600} strokeWidth="6" />
    <Panel x="460" y="140" w="160" h="60" r="12" fill={color.white} />
  </svg>
);

const MandateSVG = (props) => (
  <svg viewBox="0 0 740 360" role="img" aria-label="Overarching Mandate" className="w-full h-full" {...props}>
    <BG id="gMand" from={color.cyan100} to={color.emerald100} />
    <Panel x="0" y="0" w="740" h="360" r="20" fill="url(#gMand)" />
    {/* Heart-shield motif */}
    <path d="M200 170c0-30 40-40 60-10c20-30 60-20 60 10c0 44-60 70-60 70s-60-26-60-70z" fill={color.white} stroke={color.indigo400} strokeWidth="4" />
    <g transform="translate(480,120)">
      <path d="M40 -20l60 24v26c0 28-18 52-60 67-42-15-60-39-60-67v-26l60-24z" fill={color.white} stroke={color.indigo400} strokeWidth="3" />
      <path d="M18 16l18 18 26-26" stroke={color.emerald400} strokeWidth="6" fill="none" strokeLinecap="round" />
    </g>
  </svg>
);


const RefsSVG = (props) => (
  <svg viewBox="0 0 740 360" role="img" aria-label="Legal References" className="w-full h-full" {...props}>
    <Panel x="0" y="0" w="740" h="360" r="20" fill={color.emerald100} />
    {/* Book stack + list */}
    <Panel x="120" y="100" w="200" h="160" r="12" fill={color.white} />
    <Panel x="360" y="100" w="260" h="160" r="12" fill={color.white} />
    <Panel x="380" y="130" w="220" h="12" r="6" fill={color.slate700} />
    <Panel x="380" y="154" w="180" h="12" r="6" fill={color.slate700} />
    <Panel x="380" y="178" w="200" h="12" r="6" fill={color.slate700} />
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
            {/* cap big visuals on phones; desktop unchanged */}
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
export default function LegalDepartment() {
  const { container, itemUp } = useAnims();

  const heroRef = useRef(null);
  const { scrollYProgress } = useScroll({ target: heroRef, offset: ["start start", "end start"] });
  const heroY = useTransform(scrollYProgress, [0, 1], [0, -40]); // gentle parallax up

  const svgMap = {
    PreambleSVG,
    EstablishSVG,
    ScopeSVG,
    BindingSVG,
    InvestSVG,
    WhistleSVG,
    CounselSVG,
    PreventiveSVG,
    GovernanceSVG,
    MandateSVG,
    RefsSVG,
    DisclaimerSVG,
    ConclusionSVG
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
            {["Autonomy", "Compliance", "Victim-Centric", "Cyber Law"].map((pill) => (
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
              <LegalHeroSVG />
            </div>
          </div>
        </motion.div>
      </div>

      {/* Sections */}
      <div className="mt-8 sm:mt-10 md:mt-12">
        {data.sections.map((sec, idx) => {
          const SVGComp = svgMap[sec.svg] ?? PreambleSVG;
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
