// // src/pages/ourDepartments/CyberSecurityDepartment.jsx
// import React, { useRef } from "react";
// import { Link } from "react-router-dom";
// import {
//   motion,
//   useReducedMotion,
//   useScroll,
//   useTransform,
//   useSpring,
// } from "framer-motion";

// /* -------------------- Motion Controls (respects reduced motion) -------------------- */
// const useAnims = () => {
//   const shouldReduce = useReducedMotion();
//   const container = {
//     hidden: { opacity: 0 },
//     show: {
//       opacity: 1,
//       transition: shouldReduce
//         ? { duration: 0 }
//         : { duration: 0.25, when: "beforeChildren", staggerChildren: 0.06 },
//     },
//   };
//   const itemUp = {
//     hidden: { opacity: 0, y: shouldReduce ? 0 : 12 },
//     show: { opacity: 1, y: 0, transition: { duration: shouldReduce ? 0 : 0.28 } },
//   };
//   return { container, itemUp, shouldReduce };
// };

// /* -------------------- Page Data (FULL, inline) -------------------- */
// const data = {
//   title: "Cyber Security Department",
//   shortName: "CyberSec",
//   tagline: "Defending Digital Frontiers with Law, Technology, and Trust",
//   summary:
//     "The Cyber Security Department safeguards CRCCF’s digital assets, infrastructure, and data. Operating under national and international laws, it drives resilience, compliance, and stakeholder trust across the organization.",
//   sections: [
//     {
//       id: "purpose-vision",
//       heading: "Purpose & Vision",
//       bullets: [
//         "Prevent, detect, and respond to cyber threats across systems and data.",
//         "Ensure compliance with the DPDP Act, IT Act, and global cybersecurity standards.",
//         "Make CRCCF a model organization for secure digital governance."
//       ],
//       svg: "PurposeSVG",
//     },
//     {
//       id: "governance-roles",
//       heading: "Governance Structure & Key Roles",
//       bullets: [
//         "CISO leads the department and reports to the Board.",
//         "Cybersecurity Steering Committee oversees policy, risk, and compliance alignment.",
//         "Incident Response Team (IRT) manages incidents and reporting obligations.",
//         "Compliance Officer ensures adherence to CERT-In and DPDP.",
//         "Data Protection Officer (DPO) manages privacy compliance and cross-border data flows."
//       ],
//       svg: "GovernanceSVG",
//     },
//     {
//       id: "legal-compliance",
//       heading: "Legal & Regulatory Compliance",
//       bullets: [
//         "DPDP Act, 2023 — data privacy and protection.",
//         "Information Technology Act, 2000 (and amendments) — cybercrimes & digital evidence.",
//         "CERT-In Guidelines, 2022 — incident reporting within 6 hours.",
//         "Companies Act, 2013 — cybersecurity governance.",
//         "ISO 27001 & NIST CSF — global standards.",
//         "GDPR for international operations; IPC for fraud/identity offences."
//       ],
//       svg: "LegalSVG",
//     },
//     {
//       id: "core-functions",
//       heading: "Core Functions",
//       bullets: [
//         "AI-driven threat intelligence and monitoring.",
//         "Risk assessments and mitigation planning for all digital assets.",
//         "Zero Trust architecture for network, identity, and endpoints.",
//         "Incident detection, reporting, and response workflows.",
//         "Vendor security audits and third-party assessments.",
//         "Continuous employee training and phishing simulations.",
//         "Cloud security governance and encryption controls.",
//         "Quantum-safe encryption roadmap preparation."
//       ],
//       svg: "FunctionsSVG",
//     },
//     {
//       id: "incident-response",
//       heading: "Incident Response Framework",
//       bullets: [
//         "Structured playbooks for identification, reporting, and mitigation.",
//         "Mandatory CERT-In notifications within 6 hours for qualifying incidents.",
//         "Forensics and evidence preservation with chain-of-custody.",
//         "Containment, eradication, recovery; RCA and lessons learned.",
//         "Stakeholder communications and regulator notifications."
//       ],
//       svg: "IRSVG",
//     },
//     {
//       id: "vendor-security",
//       heading: "Vendor & Third-Party Security Governance",
//       bullets: [
//         "Pre-onboarding security assessments for vendors/partners.",
//         "DPAs with strict privacy clauses for all processors.",
//         "Right-to-audit provisions and periodic compliance checks.",
//         "Zero-trust controls on external access and integrations.",
//         "Certification reviews and evidence-based assurance."
//       ],
//       svg: "VendorSVG",
//     },
//     {
//       id: "awareness-training",
//       heading: "Awareness & Training Programs",
//       bullets: [
//         "Annual cybersecurity certification for all employees.",
//         "Quarterly phishing simulations and breach response drills.",
//         "Cyber law awareness for executives and board.",
//         "Mandatory DPDP training for all data handlers."
//       ],
//       svg: "TrainingSVG",
//     },
//     {
//       id: "future-proofing",
//       heading: "Future-Proofing Measures",
//       bullets: [
//         "Adoption of quantum-safe encryption via defined roadmap.",
//         "AI-driven threat hunting & analytics integration.",
//         "Continuous policy refresh from global threat intel feeds.",
//         "Alignment with evolving privacy laws across jurisdictions."
//       ],
//       svg: "FutureSVG",
//     },
//     {
//       id: "reporting-accountability",
//       heading: "Reporting & Accountability",
//       bullets: [
//         "Quarterly cybersecurity reports to the Board and Audit Committee.",
//         "Major incidents/breaches reported to Board and regulators within 24 hours.",
//         "Clear accountability with documented KPIs and metrics."
//       ],
//       svg: "ReportingSVG",
//     },
//     {
//       id: "conclusion",
//       heading: "Conclusion",
//       bullets: [
//         "Cyber Security is central to CRCCF’s mission for a safe digital ecosystem.",
//         "By combining legal compliance, advanced tech, and proactive governance, CRCCF stays resilient and trustworthy.",
//         "Future-ready stance ensures security in an evolving threat landscape."
//       ],
//       svg: "ConclusionSVG",
//     },
//   ],
// };

// /* -------------------- Colors -------------------- */
// const color = {
//   cyan100: "#CFFAFE", cyan300: "#67E8F9", cyan500: "#06B6D4",
//   indigo100: "#E0E7FF", indigo400: "#818CF8", indigo600: "#4F46E5",
//   emerald100: "#D1FAE5", emerald400: "#34D399",
//   amber100: "#FEF3C7", amber400: "#F59E0B",
//   rose100: "#FFE4E6", rose400: "#FB7185",
//   slate700: "#334155", slate900: "#0F172A",
//   white: "#FFFFFF",
// };

// /* -------------------- Big Hero Illustration -------------------- */
// const CyberHeroSVG = (props) => (
//   <svg viewBox="0 0 760 520" role="img" aria-labelledby="cyberHeroTitle cyberHeroDesc" className="w-full h-auto" {...props}>
//     <title id="cyberHeroTitle">Cyber Security Illustration</title>
//     <desc id="cyberHeroDesc">Cartoon shield, lock, cloud, and network nodes representing cybersecurity.</desc>

//     {/* Background blobs */}
//     <g opacity="0.35">
//       <ellipse cx="200" cy="180" rx="160" ry="70" fill={color.cyan100} />
//       <ellipse cx="520" cy="140" rx="140" ry="60" fill={color.indigo100} />
//       <ellipse cx="380" cy="430" rx="220" ry="50" fill={color.emerald100} />
//     </g>

//     {/* Shield */}
//     <g transform="translate(440,120)">
//       <path d="M60 0l100 40v48c0 50-34 90-100 116C-6 178-40 138-40 88V40L60 0z" fill={color.white} stroke={color.indigo400} strokeWidth="4" />
//       <path d="M20 90l34 34 54-54" stroke={color.emerald400} strokeWidth="8" fill="none" strokeLinecap="round" />
//     </g>

//     {/* Cloud + lock */}
//     <g transform="translate(120,120)">
//       <ellipse cx="140" cy="60" rx="120" ry="60" fill={color.white} />
//       <rect x="110" y="40" width="60" height="40" rx="8" fill={color.indigo400} />
//       <circle cx="140" cy="60" r="8" fill={color.white} />
//     </g>

//     {/* Network nodes */}
//     <g transform="translate(120,300)">
//       <circle cx="40" cy="20" r="6" fill={color.indigo400} />
//       <circle cx="120" cy="10" r="6" fill={color.cyan500} />
//       <circle cx="200" cy="24" r="6" fill={color.emerald400} />
//       <circle cx="280" cy="8" r="6" fill={color.indigo600} />
//       <path d="M40 20 L120 10 L200 24 L280 8" stroke={color.slate700} strokeWidth="2" fill="none" />
//     </g>
//   </svg>
// );

// /* -------------------- Small helpers for section SVGs -------------------- */
// const BG = ({ id, from, to }) => (
//   <defs>
//     <linearGradient id={id} x1="0" y1="0" x2="1" y2="1">
//       <stop offset="0" stopColor={from} />
//       <stop offset="1" stopColor={to} />
//     </linearGradient>
//   </defs>
// );
// const Panel = ({ x, y, w, h, r = 12, fill = "white", stroke, sw = 0 }) => (
//   <rect x={x} y={y} width={w} height={h} rx={r} fill={fill} stroke={stroke} strokeWidth={sw} />
// );

// /* -------------------- Section SVGs (big, one per section) -------------------- */
// /* 1) Purpose & Vision */
// const PurposeSVG = (props) => (
//   <svg viewBox="0 0 740 360" role="img" aria-label="Purpose & Vision" className="w-full h-auto" {...props}>
//     <BG id="gPV" from={color.cyan100} to={color.indigo100} />
//     <Panel x="0" y="0" w="740" h="360" r="20" fill="url(#gPV)" />
//     <circle cx="140" cy="120" r="52" fill={color.white} />
//     <circle cx="140" cy="120" r="6" fill={color.indigo600} />
//     <path d="M100 120c20-30 60-30 80 0-20 30-60 30-80 0z" fill="none" stroke={color.indigo600} strokeWidth="4" />
//     <path d="M220 250h320v18H220z" fill={color.slate700} />
//     <Panel x="240" y="170" w="200" h="56" fill={color.white} />
//     <Panel x="460" y="158" w="90" h="22" fill={color.cyan500} />
//   </svg>
// );

// /* 2) Governance Structure & Key Roles */
// const GovernanceSVG = (props) => (
//   <svg viewBox="0 0 740 360" role="img" aria-label="Governance & Roles" className="w-full h-auto" {...props}>
//     <Panel x="0" y="0" w="740" h="360" r="20" fill={color.amber100} />
//     {/* Org chart */}
//     <Panel x="100" y="60" w="140" h="40" fill={color.white} stroke={color.slate700} sw="2" />
//     <Panel x="360" y="60" w="140" h="40" fill={color.white} stroke={color.slate700} sw="2" />
//     <Panel x="230" y="160" w="140" h="40" fill={color.white} stroke={color.slate700} sw="2" />
//     <path d="M170 100v60M430 100v60M240 160h120" stroke={color.slate700} strokeWidth="3" />
//     {/* Roles row */}
//     <Panel x="520" y="220" w="160" h="60" r="16" fill={color.indigo100} />
//     <circle cx="540" cy="250" r="10" fill={color.indigo400} />
//     <circle cx="580" cy="250" r="10" fill={color.cyan500} />
//     <circle cx="620" cy="250" r="10" fill={color.emerald400} />
//   </svg>
// );

// /* 3) Legal & Regulatory Compliance */
// const LegalSVG = (props) => (
//   <svg viewBox="0 0 740 360" role="img" aria-label="Legal & Regulatory" className="w-full h-auto" {...props}>
//     <Panel x="0" y="0" w="740" h="360" r="20" fill={color.indigo100} />
//     {/* Scales + books + shield */}
//     <g transform="translate(90,60)">
//       <path d="M140 20 v120" stroke={color.indigo600} strokeWidth="6" />
//       <circle cx="140" cy="20" r="10" fill={color.indigo600} />
//       <path d="M80 60 h120" stroke={color.indigo600} strokeWidth="6" />
//       <path d="M90 60 c0 20 30 36 50 36s50-16 50-36" fill="none" stroke={color.indigo600} strokeWidth="4" />
//       <path d="M140 140 c-24 0 -42 18 -42 40 h84 c0-22 -18-40 -42-40z" fill={color.cyan100} />
//     </g>
//     <g transform="translate(360,190)">
//       <Panel x="0" y="0" w="120" h="24" r="6" fill={color.rose100} />
//       <Panel x="8" y="-24" w="120" h="24" r="6" fill={color.amber100} />
//       <Panel x="16" y="-48" w="120" h="24" r="6" fill={color.cyan100} />
//     </g>
//     <g transform="translate(520,80)">
//       <path d="M60 0l80 32v36c0 38-26 70-80 90-54-20-80-52-80-90V32L60 0z" fill={color.white} stroke={color.indigo400} strokeWidth="4" />
//       <path d="M30 70l28 28 44-44" stroke={color.emerald400} strokeWidth="6" fill="none" strokeLinecap="round" />
//     </g>
//   </svg>
// );

// /* 4) Core Functions */
// const FunctionsSVG = (props) => (
//   <svg viewBox="0 0 740 360" role="img" aria-label="Core Functions" className="w-full h-auto" {...props}>
//     <BG id="gCF" from={color.cyan100} to={color.indigo100} />
//     <Panel x="0" y="0" w="740" h="360" r="20" fill="url(#gCF)" />
//     {/* Dashboard widgets */}
//     <Panel x="80" y="60" w="220" h="140" r="12" fill={color.white} />
//     <Panel x="110" y="90" w="160" h="10" r="5" fill={color.slate700} />
//     <Panel x="110" y="110" w="140" h="10" r="5" fill={color.slate700} />
//     <Panel x="110" y="130" w="120" h="10" r="5" fill={color.slate700} />
//     {/* Zero Trust card */}
//     <Panel x="340" y="60" w="160" h="140" r="12" fill={color.white} stroke={color.cyan500} sw="3" />
//     <circle cx="420" cy="130" r="18" fill={color.emerald400} />
//     <Panel x="360" y="90" w="120" h="10" r="5" fill={color.indigo400} />
//     <Panel x="360" y="110" w="120" h="10" r="5" fill={color.indigo400} />
//     {/* Quantum chip */}
//     <Panel x="540" y="80" w="120" h="120" r="16" fill={color.indigo100} />
//     <circle cx="600" cy="140" r="24" fill={color.indigo400} />
//     <path d="M560 140h80" stroke={color.indigo600} strokeWidth="4" />
//   </svg>
// );

// /* 5) Incident Response Framework */
// const IRSVG = (props) => (
//   <svg viewBox="0 0 740 360" role="img" aria-label="Incident Response" className="w-full h-auto" {...props}>
//     <Panel x="0" y="0" w="740" h="360" r="20" fill={color.amber100} />
//     {/* Alert + steps */}
//     <circle cx="120" cy="120" r="50" fill={color.amber400} />
//     <path d="M120 96v28" stroke="white" strokeWidth="6" strokeLinecap="round" />
//     <circle cx="120" cy="156" r="4" fill="white" />
//     <Panel x="240" y="80" w="180" h="40" r="10" fill={color.white} />
//     <Panel x="240" y="130" w="220" h="40" r="10" fill={color.white} />
//     <Panel x="240" y="180" w="160" h="40" r="10" fill={color.white} />
//     {/* Forensics icon */}
//     <circle cx="560" cy="220" r="28" fill={color.white} />
//     <path d="M580 240l24 24" stroke={color.slate700} strokeWidth="6" strokeLinecap="round" />
//   </svg>
// );

// /* 6) Vendor & Third-Party Security Governance */
// const VendorSVG = (props) => (
//   <svg viewBox="0 0 740 360" role="img" aria-label="Vendor & Third-Party" className="w-full h-auto" {...props}>
//     <BG id="gV" from={color.emerald100} to={color.cyan100} />
//     <Panel x="0" y="0" w="740" h="360" r="20" fill="url(#gV)" />
//     {/* Contract */}
//     <Panel x="80" y="60" w="220" h="160" r="12" fill={color.white} stroke={color.emerald400} sw="3" />
//     <Panel x="106" y="90" w="160" h="10" r="5" fill={color.slate700} />
//     <Panel x="106" y="110" w="140" h="10" r="5" fill={color.slate700} />
//     {/* Handshake */}
//     <path d="M420 180c40-20 60-20 100 0" stroke={color.indigo400} strokeWidth="8" fill="none" strokeLinecap="round" />
//     <circle cx="410" cy="180" r="14" fill={color.indigo400} />
//     <circle cx="530" cy="180" r="14" fill={color.indigo400} />
//     {/* Folders */}
//     <Panel x="580" y="220" w="80" h="40" r="8" fill={color.amber100} />
//     <Panel x="480" y="220" w="80" h="40" r="8" fill={color.cyan100} />
//   </svg>
// );

// /* 7) Awareness & Training */
// const TrainingSVG = (props) => (
//   <svg viewBox="0 0 740 360" role="img" aria-label="Awareness & Training" className="w-full h-auto" {...props}>
//     <Panel x="0" y="0" w="740" h="360" r="20" fill={color.cyan100} />
//     {/* Classroom/monitor */}
//     <Panel x="100" y="70" w="240" h="160" r="12" fill={color.white} />
//     <Panel x="130" y="100" w="180" h="12" r="6" fill={color.slate700} />
//     <Panel x="130" y="124" w="160" h="12" r="6" fill={color.slate700} />
//     {/* Certificates */}
//     <Panel x="420" y="80" w="120" h="80" r="12" fill={color.white} stroke={color.indigo400} sw="3" />
//     <Panel x="560" y="110" w="120" h="100" r="12" fill={color.white} stroke={color.cyan500} sw="3" />
//   </svg>
// );

// /* 8) Future-Proofing Measures */
// const FutureSVG = (props) => (
//   <svg viewBox="0 0 740 360" role="img" aria-label="Future-Proofing" className="w-full h-auto" {...props}>
//     <BG id="gF" from={color.indigo100} to={color.cyan100} />
//     <Panel x="0" y="0" w="740" h="360" r="20" fill="url(#gF)" />
//     <path d="M140 240c60-48 108-48 144 0" stroke={color.indigo600} strokeWidth="6" fill="none" />
//     <circle cx="212" cy="220" r="6" fill={color.indigo600} />
//     <Panel x="420" y="140" w="60" h="60" r="10" fill={color.cyan500} />
//     <Panel x="490" y="140" w="60" h="60" r="10" fill={color.indigo400} />
//     <Panel x="460" y="210" w="60" h="60" r="10" fill={color.emerald400} />
//   </svg>
// );

// /* 9) Reporting & Accountability */
// const ReportingSVG = (props) => (
//   <svg viewBox="0 0 740 360" role="img" aria-label="Reporting & Accountability" className="w-full h-auto" {...props}>
//     <Panel x="0" y="0" w="740" h="360" r="20" fill={color.emerald100} />
//     {/* Report cards */}
//     <Panel x="100" y="80" w="200" h="160" r="12" fill={color.white} />
//     <Panel x="130" y="110" w="140" h="12" r="6" fill={color.slate700} />
//     <Panel x="130" y="134" w="120" h="12" r="6" fill={color.slate700} />
//     {/* KPI Bars */}
//     <Panel x="360" y="90" w="260" h="140" r="12" fill={color.white} />
//     <Panel x="390" y="180" w="40" h="40" r="6" fill={color.cyan500} />
//     <Panel x="440" y="160" w="40" h="60" r="6" fill={color.indigo400} />
//     <Panel x="490" y="140" w="40" h="80" r="6" fill={color.emerald400} />
//     <Panel x="540" y="120" w="40" h="100" r="6" fill={color.amber400} />
//   </svg>
// );

// /* 10) Conclusion */
// const ConclusionSVG = (props) => (
//   <svg viewBox="0 0 740 360" role="img" aria-label="Conclusion" className="w-full h-auto" {...props}>
//     <Panel x="0" y="0" w="740" h="360" r="20" fill={color.rose100} />
//     {/* Flag + laurel */}
//     <Panel x="120" y="70" w="14" h="160" r="7" fill={color.indigo600} />
//     <path d="M134 72h120l-20 22 20 22H134z" fill={color.cyan500} />
//     <path d="M520 240c-40-24-60-48-60-72 0-24 20-48 60-72" stroke={color.emerald400} strokeWidth="6" fill="none" />
//     <path d="M520 240c40-24 60-48 60-72 0-24-20-48-60-72" stroke={color.emerald400} strokeWidth="6" fill="none" />
//   </svg>
// );

// /* -------------------- Feature Section Wrapper (parallax + reveal) -------------------- */
// const FeatureSection = ({ id, title, bullets, SVG, reverse = false }) => {
//   const ref = useRef(null);
//   const { scrollYProgress } = useScroll({ target: ref, offset: ["start 80%", "end 20%"] });
//   const y = useSpring(useTransform(scrollYProgress, [0, 1], [20, -20]), { stiffness: 120, damping: 20 });
//   const opacity = useTransform(scrollYProgress, [0, 1], [0.6, 1]);

//   return (
//     <section id={id} ref={ref} className="mt-12 md:mt-16">
//       <motion.div
//         style={{ opacity }}
//         initial={{ opacity: 0, y: 16 }}
//         whileInView={{ opacity: 1, y: 0 }}
//         viewport={{ once: true, margin: "-80px" }}
//         className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-10 items-center"
//       >
//         {/* Illustration */}
//         <motion.div style={{ y }} className={`relative ${reverse ? "md:order-2" : "md:order-1"}`}>
//           <div className="absolute -inset-2 rounded-2xl bg-gradient-to-tr from-cyan-100 via-indigo-100 to-emerald-100 blur-xl" aria-hidden="true" />
//           <div className="relative rounded-2xl border border-gray-200 bg-white p-4 shadow-sm">
//             <SVG />
//           </div>
//         </motion.div>

//         {/* Content */}
//         <div className={`${reverse ? "md:order-1" : "md:order-2"}`}>
//           <h2 className="text-xl sm:text-2xl font-semibold text-gray-900">{title}</h2>
//           <ul className="mt-3 space-y-2 text-gray-700 list-disc pl-5 sm:pl-6">
//             {bullets.map((b, i) => (
//               <li key={i} className="leading-relaxed">{b}</li>
//             ))}
//           </ul>
//         </div>
//       </motion.div>
//     </section>
//   );
// };

// /* -------------------- Page -------------------- */
// export default function CyberSecurityDepartment() {
//   const { container, itemUp } = useAnims();

//   const heroRef = useRef(null);
//   const { scrollYProgress } = useScroll({ target: heroRef, offset: ["start start", "end start"] });
//   const heroY = useTransform(scrollYProgress, [0, 1], [0, -40]); // gentle parallax up

//   // Map string names to SVG components
//   const svgMap = {
//     PurposeSVG,
//     GovernanceSVG,
//     LegalSVG,
//     FunctionsSVG,
//     IRSVG,
//     VendorSVG,
//     TrainingSVG,
//     FutureSVG,
//     ReportingSVG,
//     ConclusionSVG,
//   };

//   return (
//     <motion.section
//       id="top"
//       variants={container}
//       initial="hidden"
//       animate="show"
//       className="relative max-w-6xl mx-auto px-4 sm:px-6 md:px-8 py-10 sm:py-14"
//     >
//       {/* Breadcrumb */}
//       <motion.nav variants={itemUp} className="text-sm text-gray-500 mb-4" aria-label="Breadcrumb">
//         <Link to="/" className="hover:underline">Home</Link>
//         <span aria-hidden="true"> › </span>
//         <Link to="/department" className="hover:underline">Departments</Link>
//         <span aria-hidden="true"> › </span>
//         <span className="text-gray-700" aria-current="page">{data.title}</span>
//       </motion.nav>

//       {/* Hero with parallax illustration */}
//       <div ref={heroRef} className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-10 items-center">
//         <motion.div variants={itemUp}>
//           <h1 className="text-2xl sm:text-3xl font-bold text-gray-900">
//             {data.title} <span className="text-gray-500 font-semibold">({data.shortName})</span>
//           </h1>
//           <p className="mt-2 text-gray-700">{data.summary}</p>
//           <p className="mt-3 text-cyan-800 font-medium">{data.tagline}</p>

//           {/* Quick Pills */}
//           <div className="mt-4 flex flex-wrap gap-2">
//             {["Zero Trust", "Threat Intel", "Compliance", "IR Playbooks"].map((pill) => (
//               <span key={pill} className="px-3 py-1.5 text-xs sm:text-sm rounded-full bg-cyan-100 text-cyan-800 border border-cyan-200">
//                 {pill}
//               </span>
//             ))}
//           </div>
//         </motion.div>

//         <motion.div style={{ y: heroY }} variants={itemUp} className="relative">
//           <div className="absolute -inset-2 rounded-2xl bg-gradient-to-tr from-cyan-100 via-indigo-100 to-emerald-100 blur-xl" aria-hidden="true" />
//           <div className="relative rounded-2xl border border-gray-200 bg-white p-4 shadow-sm">
//             <CyberHeroSVG />
//           </div>
//         </motion.div>
//       </div>

//       {/* All sections as BIG feature blocks with alternating layout */}
//       <div className="mt-10">
//         {data.sections.map((sec, idx) => {
//           const SVGComp = svgMap[sec.svg] ?? PurposeSVG;
//           return (
//             <FeatureSection
//               key={sec.id}
//               id={sec.id}
//               title={sec.heading}
//               bullets={sec.bullets}
//               SVG={SVGComp}
//               reverse={idx % 2 === 1}
//             />
//           );
//         })}
//       </div>

//       {/* Back link */}
//       <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mt-12">
//         <Link to="/department" className="inline-flex items-center text-cyan-700 hover:text-cyan-800 focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400 rounded-md">
//           <svg className="w-4 h-4 mr-1" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
//             <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
//           </svg>
//           Back to Departments
//         </Link>
//       </motion.div>
//     </motion.section>
//   );
// }

// src/pages/ourDepartments/CyberSecurityDepartment.jsx
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
  title: "Cyber Security Department",
  shortName: "CyberSec",
  tagline: "Defending Digital Frontiers with Law, Technology, and Trust",
  summary:
    "The Cyber Security Department safeguards CRCCF’s digital assets, infrastructure, and data. Operating under national and international laws, it drives resilience, compliance, and stakeholder trust across the organization.",
  sections: [
    {
      id: "purpose-vision",
      heading: "Purpose & Vision",
      bullets: [
        "Prevent, detect, and respond to cyber threats across systems and data.",
        "Ensure compliance with the DPDP Act, IT Act, and global cybersecurity standards.",
        "Make CRCCF a model organization for secure digital governance."
      ],
      svg: "PurposeSVG",
    },
    {
      id: "governance-roles",
      heading: "Governance Structure & Key Roles",
      bullets: [
        "CISO leads the department and reports to the Board.",
        "Cybersecurity Steering Committee oversees policy, risk, and compliance alignment.",
        "Incident Response Team (IRT) manages incidents and reporting obligations.",
        "Compliance Officer ensures adherence to CERT-In and DPDP.",
        "Data Protection Officer (DPO) manages privacy compliance and cross-border data flows."
      ],
      svg: "GovernanceSVG",
    },
    {
      id: "legal-compliance",
      heading: "Legal & Regulatory Compliance",
      bullets: [
        "DPDP Act, 2023 — data privacy and protection.",
        "Information Technology Act, 2000 (and amendments) — cybercrimes & digital evidence.",
        "CERT-In Guidelines, 2022 — incident reporting within 6 hours.",
        "Companies Act, 2013 — cybersecurity governance.",
        "ISO 27001 & NIST CSF — global standards.",
        "GDPR for international operations; IPC for fraud/identity offences."
      ],
      svg: "LegalSVG",
    },
    {
      id: "core-functions",
      heading: "Core Functions",
      bullets: [
        "AI-driven threat intelligence and monitoring.",
        "Risk assessments and mitigation planning for all digital assets.",
        "Zero Trust architecture for network, identity, and endpoints.",
        "Incident detection, reporting, and response workflows.",
        "Vendor security audits and third-party assessments.",
        "Continuous employee training and phishing simulations.",
        "Cloud security governance and encryption controls.",
        "Quantum-safe encryption roadmap preparation."
      ],
      svg: "FunctionsSVG",
    },
    {
      id: "incident-response",
      heading: "Incident Response Framework",
      bullets: [
        "Structured playbooks for identification, reporting, and mitigation.",
        "Mandatory CERT-In notifications within 6 hours for qualifying incidents.",
        "Forensics and evidence preservation with chain-of-custody.",
        "Containment, eradication, recovery; RCA and lessons learned.",
        "Stakeholder communications and regulator notifications."
      ],
      svg: "IRSVG",
    },
    {
      id: "vendor-security",
      heading: "Vendor & Third-Party Security Governance",
      bullets: [
        "Pre-onboarding security assessments for vendors/partners.",
        "DPAs with strict privacy clauses for all processors.",
        "Right-to-audit provisions and periodic compliance checks.",
        "Zero-trust controls on external access and integrations.",
        "Certification reviews and evidence-based assurance."
      ],
      svg: "VendorSVG",
    },
    {
      id: "awareness-training",
      heading: "Awareness & Training Programs",
      bullets: [
        "Annual cybersecurity certification for all employees.",
        "Quarterly phishing simulations and breach response drills.",
        "Cyber law awareness for executives and board.",
        "Mandatory DPDP training for all data handlers."
      ],
      svg: "TrainingSVG",
    },
    {
      id: "future-proofing",
      heading: "Future-Proofing Measures",
      bullets: [
        "Adoption of quantum-safe encryption via defined roadmap.",
        "AI-driven threat hunting & analytics integration.",
        "Continuous policy refresh from global threat intel feeds.",
        "Alignment with evolving privacy laws across jurisdictions."
      ],
      svg: "FutureSVG",
    },
    {
      id: "reporting-accountability",
      heading: "Reporting & Accountability",
      bullets: [
        "Quarterly cybersecurity reports to the Board and Audit Committee.",
        "Major incidents/breaches reported to Board and regulators within 24 hours.",
        "Clear accountability with documented KPIs and metrics."
      ],
      svg: "ReportingSVG",
    },
    {
      id: "conclusion",
      heading: "Conclusion",
      bullets: [
        "Cyber Security is central to CRCCF’s mission for a safe digital ecosystem.",
        "By combining legal compliance, advanced tech, and proactive governance, CRCCF stays resilient and trustworthy.",
        "Future-ready stance ensures security in an evolving threat landscape."
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
const CyberHeroSVG = (props) => (
  <svg viewBox="0 0 760 520" role="img" aria-labelledby="cyberHeroTitle cyberHeroDesc" className="w-full h-auto" {...props}>
    <title id="cyberHeroTitle">Cyber Security Illustration</title>
    <desc id="cyberHeroDesc">Cartoon shield, lock, cloud, and network nodes representing cybersecurity.</desc>

    {/* Background blobs */}
    <g opacity="0.35">
      <ellipse cx="200" cy="180" rx="160" ry="70" fill={color.cyan100} />
      <ellipse cx="520" cy="140" rx="140" ry="60" fill={color.indigo100} />
      <ellipse cx="380" cy="430" rx="220" ry="50" fill={color.emerald100} />
    </g>

    {/* Shield */}
    <g transform="translate(440,120)">
      <path d="M60 0l100 40v48c0 50-34 90-100 116C-6 178-40 138-40 88V40L60 0z" fill={color.white} stroke={color.indigo400} strokeWidth="4" />
      <path d="M20 90l34 34 54-54" stroke={color.emerald400} strokeWidth="8" fill="none" strokeLinecap="round" />
    </g>

    {/* Cloud + lock */}
    <g transform="translate(120,120)">
      <ellipse cx="140" cy="60" rx="120" ry="60" fill={color.white} />
      <rect x="110" y="40" width="60" height="40" rx="8" fill={color.indigo400} />
      <circle cx="140" cy="60" r="8" fill={color.white} />
    </g>

    {/* Network nodes */}
    <g transform="translate(120,300)">
      <circle cx="40" cy="20" r="6" fill={color.indigo400} />
      <circle cx="120" cy="10" r="6" fill={color.cyan500} />
      <circle cx="200" cy="24" r="6" fill={color.emerald400} />
      <circle cx="280" cy="8" r="6" fill={color.indigo600} />
      <path d="M40 20 L120 10 L200 24 L280 8" stroke={color.slate700} strokeWidth="2" fill="none" />
    </g>
  </svg>
);

/* -------------------- Small helpers for section SVGs -------------------- */
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
    <circle cx="140" cy="120" r="52" fill={color.white} />
    <circle cx="140" cy="120" r="6" fill={color.indigo600} />
    <path d="M100 120c20-30 60-30 80 0-20 30-60 30-80 0z" fill="none" stroke={color.indigo600} strokeWidth="4" />
    <path d="M220 250h320v18H220z" fill={color.slate700} />
    <Panel x="240" y="170" w="200" h="56" fill={color.white} />
    <Panel x="460" y="158" w="90" h="22" fill={color.cyan500} />
  </svg>
);

const GovernanceSVG = (props) => (
  <svg viewBox="0 0 740 360" role="img" aria-label="Governance & Roles" className="w-full h-full" {...props}>
    <Panel x="0" y="0" w="740" h="360" r="20" fill={color.amber100} />
    <Panel x="100" y="60" w="140" h="40" fill={color.white} stroke={color.slate700} sw="2" />
    <Panel x="360" y="60" w="140" h="40" fill={color.white} stroke={color.slate700} sw="2" />
    <Panel x="230" y="160" w="140" h="40" fill={color.white} stroke={color.slate700} sw="2" />
    <path d="M170 100v60M430 100v60M240 160h120" stroke={color.slate700} strokeWidth="3" />
    <Panel x="520" y="220" w="160" h="60" r="16" fill={color.indigo100} />
    <circle cx="540" cy="250" r="10" fill={color.indigo400} />
    <circle cx="580" cy="250" r="10" fill={color.cyan500} />
    <circle cx="620" cy="250" r="10" fill={color.emerald400} />
  </svg>
);

const LegalSVG = (props) => (
  <svg viewBox="0 0 740 360" role="img" aria-label="Legal & Regulatory" className="w-full h-full" {...props}>
    <Panel x="0" y="0" w="740" h="360" r="20" fill={color.indigo100} />
    <g transform="translate(90,60)">
      <path d="M140 20 v120" stroke={color.indigo600} strokeWidth="6" />
      <circle cx="140" cy="20" r="10" fill={color.indigo600} />
      <path d="M80 60 h120" stroke={color.indigo600} strokeWidth="6" />
      <path d="M90 60 c0 20 30 36 50 36s50-16 50-36" fill="none" stroke={color.indigo600} strokeWidth="4" />
      <path d="M140 140 c-24 0 -42 18 -42 40 h84 c0-22 -18-40 -42-40z" fill={color.cyan100} />
    </g>
    <g transform="translate(360,190)">
      <Panel x="0" y="0" w="120" h="24" r="6" fill={color.rose100} />
      <Panel x="8" y="-24" w="120" h="24" r="6" fill={color.amber100} />
      <Panel x="16" y="-48" w="120" h="24" r="6" fill={color.cyan100} />
    </g>
    <g transform="translate(520,80)">
      <path d="M60 0l80 32v36c0 38-26 70-80 90-54-20-80-52-80-90V32L60 0z" fill={color.white} stroke={color.indigo400} strokeWidth="4" />
      <path d="M30 70l28 28 44-44" stroke={color.emerald400} strokeWidth="6" fill="none" strokeLinecap="round" />
    </g>
  </svg>
);

const FunctionsSVG = (props) => (
  <svg viewBox="0 0 740 360" role="img" aria-label="Core Functions" className="w-full h-full" {...props}>
    <BG id="gCF" from={color.cyan100} to={color.indigo100} />
    <Panel x="0" y="0" w="740" h="360" r="20" fill="url(#gCF)" />
    <Panel x="80" y="60" w="220" h="140" r="12" fill={color.white} />
    <Panel x="110" y="90" w="160" h="10" r="5" fill={color.slate700} />
    <Panel x="110" y="110" w="140" h="10" r="5" fill={color.slate700} />
    <Panel x="110" y="130" w="120" h="10" r="5" fill={color.slate700} />
    <Panel x="340" y="60" w="160" h="140" r="12" fill={color.white} stroke={color.cyan500} sw="3" />
    <circle cx="420" cy="130" r="18" fill={color.emerald400} />
    <Panel x="360" y="90" w="120" h="10" r="5" fill={color.indigo400} />
    <Panel x="360" y="110" w="120" h="10" r="5" fill={color.indigo400} />
    <Panel x="540" y="80" w="120" h="120" r="16" fill={color.indigo100} />
    <circle cx="600" cy="140" r="24" fill={color.indigo400} />
    <path d="M560 140h80" stroke={color.indigo600} strokeWidth="4" />
  </svg>
);

const IRSVG = (props) => (
  <svg viewBox="0 0 740 360" role="img" aria-label="Incident Response" className="w-full h-full" {...props}>
    <Panel x="0" y="0" w="740" h="360" r="20" fill={color.amber100} />
    <circle cx="120" cy="120" r="50" fill={color.amber400} />
    <path d="M120 96v28" stroke="white" strokeWidth="6" strokeLinecap="round" />
    <circle cx="120" cy="156" r="4" fill="white" />
    <Panel x="240" y="80" w="180" h="40" r="10" fill={color.white} />
    <Panel x="240" y="130" w="220" h="40" r="10" fill={color.white} />
    <Panel x="240" y="180" w="160" h="40" r="10" fill={color.white} />
    <circle cx="560" cy="220" r="28" fill={color.white} />
    <path d="M580 240l24 24" stroke={color.slate700} strokeWidth="6" strokeLinecap="round" />
  </svg>
);

const VendorSVG = (props) => (
  <svg viewBox="0 0 740 360" role="img" aria-label="Vendor & Third-Party" className="w-full h-full" {...props}>
    <BG id="gV" from={color.emerald100} to={color.cyan100} />
    <Panel x="0" y="0" w="740" h="360" r="20" fill="url(#gV)" />
    <Panel x="80" y="60" w="220" h="160" r="12" fill={color.white} stroke={color.emerald400} sw="3" />
    <Panel x="106" y="90" w="160" h="10" r="5" fill={color.slate700} />
    <Panel x="106" y="110" w="140" h="10" r="5" fill={color.slate700} />
    <path d="M420 180c40-20 60-20 100 0" stroke={color.indigo400} strokeWidth="8" fill="none" strokeLinecap="round" />
    <circle cx="410" cy="180" r="14" fill={color.indigo400} />
    <circle cx="530" cy="180" r="14" fill={color.indigo400} />
    <Panel x="580" y="220" w="80" h="40" r="8" fill={color.amber100} />
    <Panel x="480" y="220" w="80" h="40" r="8" fill={color.cyan100} />
  </svg>
);

const TrainingSVG = (props) => (
  <svg viewBox="0 0 740 360" role="img" aria-label="Awareness & Training" className="w-full h-full" {...props}>
    <Panel x="0" y="0" w="740" h="360" r="20" fill={color.cyan100} />
    <Panel x="100" y="70" w="240" h="160" r="12" fill={color.white} />
    <Panel x="130" y="100" w="180" h="12" r="6" fill={color.slate700} />
    <Panel x="130" y="124" w="160" h="12" r="6" fill={color.slate700} />
    <Panel x="420" y="80" w="120" h="80" r="12" fill={color.white} stroke={color.indigo400} sw="3" />
    <Panel x="560" y="110" w="120" h="100" r="12" fill={color.white} stroke={color.cyan500} sw="3" />
  </svg>
);

const FutureSVG = (props) => (
  <svg viewBox="0 0 740 360" role="img" aria-label="Future-Proofing" className="w-full h-full" {...props}>
    <BG id="gF" from={color.indigo100} to={color.cyan100} />
    <Panel x="0" y="0" w="740" h="360" r="20" fill="url(#gF)" />
    <path d="M140 240c60-48 108-48 144 0" stroke={color.indigo600} strokeWidth="6" fill="none" />
    <circle cx="212" cy="220" r="6" fill={color.indigo600} />
    <Panel x="420" y="140" w="60" h="60" r="10" fill={color.cyan500} />
    <Panel x="490" y="140" w="60" h="60" r="10" fill={color.indigo400} />
    <Panel x="460" y="210" w="60" h="60" r="10" fill={color.emerald400} />
  </svg>
);

const ReportingSVG = (props) => (
  <svg viewBox="0 0 740 360" role="img" aria-label="Reporting & Accountability" className="w-full h-full" {...props}>
    <Panel x="0" y="0" w="740" h="360" r="20" fill={color.emerald100} />
    <Panel x="100" y="80" w="200" h="160" r="12" fill={color.white} />
    <Panel x="130" y="110" w="140" h="12" r="6" fill={color.slate700} />
    <Panel x="130" y="134" w="120" h="12" r="6" fill={color.slate700} />
    <Panel x="360" y="90" w="260" h="140" r="12" fill={color.white} />
    <Panel x="390" y="180" w="40" h="40" r="6" fill={color.cyan500} />
    <Panel x="440" y="160" w="40" h="60" r="6" fill={color.indigo400} />
    <Panel x="490" y="140" w="40" h="80" r="6" fill={color.emerald400} />
    <Panel x="540" y="120" w="40" h="100" r="6" fill={color.amber400} />
  </svg>
);

const ConclusionSVG = (props) => (
  <svg viewBox="0 0 740 360" role="img" aria-label="Conclusion" className="w-full h-full" {...props}>
    <Panel x="0" y="0" w="740" h="360" r="20" fill={color.rose100} />
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
        <motion.div
          style={{ y }}
          className={`relative min-w-0 ${reverse ? "md:order-2" : "md:order-1"}`}
        >
          {/* softer glow on mobile */}
          <div
            className="absolute -inset-2 rounded-2xl bg-gradient-to-tr from-cyan-100 via-indigo-100 to-emerald-100 blur-md sm:blur-lg md:blur-xl"
            aria-hidden="true"
          />
          <div className="relative rounded-2xl border border-gray-200 bg-white p-3 sm:p-4 shadow-sm">
            {/* size cap for phones to keep layout balanced */}
            <div className="w-full h-auto max-h-64 sm:max-h-80 md:max-h-none overflow-hidden">
              <SVG />
            </div>
          </div>
        </motion.div>

        {/* Content */}
        <div className={`${reverse ? "md:order-1" : "md:order-2"} min-w-0`}>
          <h2 className="text-[20px] sm:text-2xl font-semibold text-gray-900 leading-snug">
            {title}
          </h2>
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
export default function CyberSecurityDepartment() {
  const { container, itemUp } = useAnims();

  const heroRef = useRef(null);
  const { scrollYProgress } = useScroll({ target: heroRef, offset: ["start start", "end start"] });
  const heroY = useTransform(scrollYProgress, [0, 1], [0, -40]); // gentle parallax up

  const svgMap = {
    PurposeSVG,
    GovernanceSVG,
    LegalSVG,
    FunctionsSVG,
    IRSVG,
    VendorSVG,
    TrainingSVG,
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
            {["Zero Trust", "Threat Intel", "Compliance", "IR Playbooks"].map((pill) => (
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
              <CyberHeroSVG />
            </div>
          </div>
        </motion.div>
      </div>

      {/* All sections as BIG feature blocks with alternating layout */}
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
