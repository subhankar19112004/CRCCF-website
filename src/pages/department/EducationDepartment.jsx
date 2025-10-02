// src/pages/ourDepartments/EducationDepartment.jsx
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
  title: "Education Department",
  shortName: "Education",
  tagline:
    "Empowering Minds, Building Secure Futures through Education, Awareness, and Law.",
  summary:
    "A comprehensive governance, operational, and compliance framework for CRCCF’s Education Department—focused on digital literacy, cyber awareness, skills, and academic excellence with rigorous legal alignment.",
  sections: [
    {
      id: "purpose-vision",
      heading: "1. Purpose & Vision",
      bullets: [
        "Hub of innovation and knowledge for learners, professionals, and citizens.",
        "Create a digitally aware society—resilient to threats, legally informed, and skilled.",
        "Foster awareness, protect digital rights, and enable a secure, sustainable future.",
      ],
      svg: "PurposeSVG",
    },
    {
      id: "governance",
      heading: "2. Governance Structure & Key Roles",
      bullets: [
        "Director of Education — alignment with CRCCF’s mission.",
        "Academic Board — policy, quality assurance, accreditation compliance.",
        "Cyber Curriculum Committee — programs on cyber laws and digital safety.",
        "Digital Learning Coordinator — e-learning platforms & training modules.",
        "Compliance & Legal Officer — IT Act, DPDP Act, RTE Act compliance.",
        "Data Protection Officer (DPO) — privacy & student data governance.",
      ],
      svg: "GovernanceSVG",
    },
    {
      id: "legal",
      heading: "3. Legal & Regulatory Compliance",
      bullets: [
        "Right to Education Act, 2009 — equitable access to quality education.",
        "DPDP Act, 2023 — lawful collection, storage, processing of learner data.",
        "IT Act, 2000 — legal compliance in online learning and cyber practices.",
        "Companies Act, 2013 — governance for education operations.",
        "GDPR for international students and collaborations.",
        "ISO 21001; NAAC & UGC guidelines for excellence and accreditation.",
      ],
      svg: "LegalSVG",
    },
    {
      id: "core-responsibilities",
      heading: "4. Core Responsibilities",
      bullets: [
        "Digital literacy programs and cybersecurity awareness campaigns.",
        "Curricula aligned with legal frameworks and tech advancements.",
        "National/international law & standard compliance across offerings.",
        "Training for students, educators, and law enforcement.",
        "Secure online learning with robust access control & privacy.",
        "Blockchain-based certification for authenticity.",
        "Promote research in digital safety & cyber law education.",
        "Strengthen global collaborations with institutions.",
      ],
      svg: "CoreSVG",
    },
    {
      id: "tasks",
      heading: "5. Departmental Tasks",
      bullets: [
        "Develop cyber-focused educational materials and practical modules.",
        "Regular skill workshops and professional training.",
        "Webinars & global knowledge-sharing on digital governance.",
        "Advanced LMS with 2FA and encryption.",
        "Program evaluation via AI analytics & feedback systems.",
        "Maintain audit & privacy review records.",
        "International exchanges and accreditation collabs.",
      ],
      svg: "TasksSVG",
    },
    {
      id: "data-protection",
      heading: "6. Data Protection & Confidentiality",
      bullets: [
        "Strict DPDP, GDPR, and IT Act compliance for CIA of data.",
        "Breach notification protocols and consent management.",
        "Data minimization, anonymization, and trustworthy retention.",
      ],
      svg: "DataSVG",
    },
    {
      id: "rnd",
      heading: "7. Research & Development",
      bullets: [
        "Continuous improvement of pedagogy and digital safety education.",
        "Whitepapers, global conferences, and field research.",
        "Innovative tools for awareness and emerging threat readiness.",
      ],
      svg: "RnDSVG",
    },
    {
      id: "future-proofing",
      heading: "8. Future-Proofing Initiatives",
      bullets: [
        "VR/AR integration for immersive learning.",
        "AI-powered adaptive learning pathways.",
        "Blockchain-based certification and verification systems.",
        "Global partnerships for cross-border programs.",
        "Curriculum updates for evolving threats and laws.",
      ],
      svg: "FutureSVG",
    },
    {
      id: "reporting",
      heading: "9. Reporting & Accountability",
      bullets: [
        "Quarterly reports to CRCCF Board: outcomes, compliance, cybersecurity, collaborations.",
        "Immediate reporting of any breach or legal non-compliance.",
      ],
      svg: "ReportingSVG",
    },
    {
      id: "conclusion",
      heading: "10. Conclusion",
      bullets: [
        "Education powers a secure, informed digital society.",
        "Blending education, technology, and law keeps learners future-ready and protected.",
        "CRCCF remains globally competitive through excellence and compliance.",
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
const EducationHeroSVG = (props) => (
  <svg viewBox="0 0 760 520" role="img" aria-labelledby="eduHeroTitle eduHeroDesc" className="w-full h-auto" {...props}>
    <title id="eduHeroTitle">Education Department Illustration</title>
    <desc id="eduHeroDesc">Cartoon graduation cap, open book, laptop and certificate representing education.</desc>

    {/* Background blobs */}
    <g opacity="0.35">
      <ellipse cx="200" cy="170" rx="160" ry="70" fill={color.cyan100} />
      <ellipse cx="530" cy="130" rx="140" ry="60" fill={color.indigo100} />
      <ellipse cx="380" cy="440" rx="220" ry="50" fill={color.emerald100} />
    </g>

    {/* Open Book */}
    <g transform="translate(100,120)">
      <path d="M0 80c60-40 120-40 180 0c-60 40-120 40-180 0z" fill={color.white} stroke={color.indigo400} strokeWidth="4" />
      <path d="M90 60v60" stroke={color.indigo400} strokeWidth="4" />
    </g>

    {/* Laptop */}
    <g transform="translate(460,120)">
      <rect x="0" y="0" width="180" height="110" rx="12" fill={color.white} stroke={color.cyan500} strokeWidth="4" />
      <rect x="24" y="24" width="132" height="12" rx="6" fill={color.indigo400} />
      <rect x="24" y="44" width="110" height="12" rx="6" fill={color.indigo400} />
      <rect x="0" y="110" width="180" height="18" rx="4" fill={color.slate700} />
    </g>

    {/* Certificate Badge */}
    <g transform="translate(320,240)">
      <circle cx="0" cy="0" r="28" fill={color.white} stroke={color.emerald400} strokeWidth="4" />
      <path d="M-8 0l8 8 16-16" stroke={color.emerald400} strokeWidth="6" fill="none" strokeLinecap="round" />
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

/* -------------------- Section SVGs (big, per section) -------------------- */
/* 1) Purpose & Vision */
const PurposeSVG = (props) => (
  <svg viewBox="0 0 740 360" role="img" aria-label="Purpose & Vision" className="w-full h-full" {...props}>
    <BG id="gPV" from={color.cyan100} to={color.indigo100} />
    <Panel x="0" y="0" w="740" h="360" r="20" fill="url(#gPV)" />
    {/* Target + bulb */}
    <circle cx="160" cy="160" r="48" fill={color.white} />
    <circle cx="160" cy="160" r="10" fill={color.indigo600} />
    <path d="M120 160c18-30 62-30 80 0-18 30-62 30-80 0z" stroke={color.indigo600} strokeWidth="4" fill="none" />
    <Panel x="360" y="110" w="220" h="140" r="16" fill={color.white} />
    <circle cx="390" cy="140" r="12" fill={color.amber400} />
    <Panel x="390" y="168" w="160" h="12" r="6" fill={color.slate700} />
    <Panel x="390" y="192" w="120" h="12" r="6" fill={color.slate700} />
  </svg>
);

/* 2) Governance */
const GovernanceSVG = (props) => (
  <svg viewBox="0 0 740 360" role="img" aria-label="Governance Structure & Roles" className="w-full h-full" {...props}>
    <Panel x="0" y="0" w="740" h="360" r="20" fill={color.amber100} />
    {/* Org chart */}
    <Panel x="100" y="60" w="160" h="44" fill={color.white} stroke={color.slate700} sw="2" />
    <Panel x="360" y="60" w="160" h="44" fill={color.white} stroke={color.slate700} sw="2" />
    <Panel x="230" y="160" w="160" h="44" fill={color.white} stroke={color.slate700} sw="2" />
    <path d="M180 104v60M440 104v60M250 160h120" stroke={color.slate700} strokeWidth="3" />
    {/* Roles badges */}
    <Panel x="540" y="216" w="140" h="60" r="16" fill={color.indigo100} />
    <circle cx="560" cy="246" r="10" fill={color.indigo400} />
    <circle cx="600" cy="246" r="10" fill={color.cyan500} />
    <circle cx="640" cy="246" r="10" fill={color.emerald400} />
  </svg>
);

/* 3) Legal */
const LegalSVG = (props) => (
  <svg viewBox="0 0 740 360" role="img" aria-label="Legal & Regulatory Compliance" className="w-full h-full" {...props}>
    <Panel x="0" y="0" w="740" h="360" r="20" fill={color.indigo100} />
    {/* Books + scales + shield */}
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

/* 4) Core Responsibilities */
const CoreSVG = (props) => (
  <svg viewBox="0 0 740 360" role="img" aria-label="Core Responsibilities" className="w-full h-full" {...props}>
    <BG id="gCore" from={color.cyan100} to={color.indigo100} />
    <Panel x="0" y="0" w="740" h="360" r="20" fill="url(#gCore)" />
    {/* Cards for programs, compliance, research */}
    <Panel x="80" y="80" w="160" h="180" r="14" fill={color.white} />
    <Panel x="260" y="80" w="160" h="180" r="14" fill={color.white} />
    <Panel x="440" y="80" w="220" h="180" r="14" fill={color.white} />
    <circle cx="160" cy="120" r="16" fill={color.indigo400} />
    <circle cx="340" cy="120" r="16" fill={color.cyan500} />
    <circle cx="520" cy="120" r="16" fill={color.emerald400} />
  </svg>
);

/* 5) Departmental Tasks */
const TasksSVG = (props) => (
  <svg viewBox="0 0 740 360" role="img" aria-label="Departmental Tasks" className="w-full h-full" {...props}>
    <Panel x="0" y="0" w="740" h="360" r="20" fill={color.emerald100} />
    {/* LMS + shield + webinar */}
    <Panel x="100" y="80" w="220" h="160" r="12" fill={color.white} />
    <Panel x="360" y="80" w="120" h="120" r="16" fill={color.indigo100} />
    <Panel x="520" y="110" w="120" h="90" r="12" fill={color.white} />
    <path d="M420 140l24 24" stroke={color.slate700} strokeWidth="6" strokeLinecap="round" />
  </svg>
);

/* 6) Data Protection & Confidentiality */
const DataSVG = (props) => (
  <svg viewBox="0 0 740 360" role="img" aria-label="Data Protection & Confidentiality" className="w-full h-full" {...props}>
    <Panel x="0" y="0" w="740" h="360" r="20" fill={color.rose100} />
    {/* Lock + doc */}
    <path d="M420 160v-20a28 28 0 0 1 56 0v20" stroke={color.rose400} strokeWidth="6" fill="none" />
    <Panel x="402" y="160" w="92" h="120" r="12" fill={color.white} stroke={color.rose400} sw="4" />
    <circle cx="448" cy="240" r="14" fill={color.rose400} />
    <Panel x="120" y="90" w="200" h="160" r="12" fill={color.white} />
  </svg>
);

/* 7) Research & Development */
const RnDSVG = (props) => (
  <svg viewBox="0 0 740 360" role="img" aria-label="Research & Development" className="w-full h-full" {...props}>
    <Panel x="0" y="0" w="740" h="360" r="20" fill={color.indigo100} />
    {/* Microscope/graph */}
    <Panel x="110" y="90" w="220" h="140" r="12" fill={color.white} />
    <Panel x="140" y="180" w="40" h="40" r="6" fill={color.cyan500} />
    <Panel x="190" y="160" w="40" h="60" r="6" fill={color.indigo400} />
    <Panel x="240" y="140" w="40" h="80" r="6" fill={color.emerald400} />
    <Panel x="420" y="100" w="220" h="140" r="12" fill={color.white} />
    <circle cx="460" cy="130" r="14" fill={color.indigo400} />
    <circle cx="500" cy="150" r="14" fill={color.cyan500} />
    <circle cx="540" cy="130" r="14" fill={color.emerald400} />
  </svg>
);

/* 8) Future-Proofing */
const FutureSVG = (props) => (
  <svg viewBox="0 0 740 360" role="img" aria-label="Future-Proofing Initiatives" className="w-full h-full" {...props}>
    <BG id="gF" from={color.indigo100} to={color.cyan100} />
    <Panel x="0" y="0" w="740" h="360" r="20" fill="url(#gF)" />
    {/* VR/AR + AI + chain (blockchain) */}
    <Panel x="100" y="90" w="140" h="120" r="16" fill={color.white} />
    <Panel x="260" y="90" w="140" h="120" r="16" fill={color.white} />
    <Panel x="420" y="90" w="220" h="120" r="16" fill={color.white} />
    <circle cx="170" cy="150" r="22" fill={color.indigo400} />
    <circle cx="330" cy="150" r="22" fill={color.cyan500} />
    <path d="M460 150h140" stroke={color.emerald400} strokeWidth="8" />
  </svg>
);

/* 9) Reporting & Accountability */
const ReportingSVG = (props) => (
  <svg viewBox="0 0 740 360" role="img" aria-label="Reporting & Accountability" className="w-full h-full" {...props}>
    <Panel x="0" y="0" w="740" h="360" r="20" fill={color.emerald100} />
    {/* Report + KPI bars */}
    <Panel x="100" y="80" w="200" h="160" r="12" fill={color.white} />
    <Panel x="360" y="90" w="260" h="140" r="12" fill={color.white} />
    <Panel x="390" y="180" w="40" h="40" r="6" fill={color.cyan500} />
    <Panel x="440" y="160" w="40" h="60" r="6" fill={color.indigo400} />
    <Panel x="490" y="140" w="40" h="80" r="6" fill={color.emerald400} />
    <Panel x="540" y="120" w="40" h="100" r="6" fill={color.amber400} />
  </svg>
);

/* 10) Conclusion */
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
export default function EducationDepartment() {
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
    DataSVG,
    RnDSVG,
    FutureSVG,
    ReportingSVG,
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
            {["Digital Literacy", "Compliance", "LMS Security", "Research"].map((pill) => (
              <span
                key={pill}
                className="px-2.5 sm:px-3 py-1.5 text-xs sm:text-sm rounded-full bg-cyan-100 text-cyan-800 border border-cyan-200"
              >
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
              <EducationHeroSVG />
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
