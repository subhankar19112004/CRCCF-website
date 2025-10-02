
// // src/pages/ourDepartments/AdminStativeDepartment.jsx
// import React, { useEffect, useRef, useState } from "react";
// import { Link } from "react-router-dom";
// import {
//   motion,
//   useReducedMotion,
//   useScroll,
//   useTransform,
//   useSpring,
//   AnimatePresence,
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
//   const listItem = {
//     hidden: { opacity: 0, y: shouldReduce ? 0 : 8 },
//     show: { opacity: 1, y: 0, transition: { duration: shouldReduce ? 0 : 0.22 } },
//   };
//   return { container, itemUp, listItem, shouldReduce };
// };

// /* -------------------- Page-Local Data -------------------- */
// const data = {
//   title: "Administrative Department",
//   shortName: "Admin & Governance",
//   tagline: "Integrity in Administration • Strength in Compliance • Excellence in Governance",
//   summary:
//     "This charter establishes the complete administrative governance framework for CR Cyber Crime Foundation (CRCCF). It is rigorously compliant, scalable, and aligned with national and international legal and regulatory frameworks.",
//   /* main sections list (kept concise) */
//   sections: [
//     { heading: "Purpose & Vision", icon: "vision", items: [
//       "Administrative backbone for operations, compliance, infrastructure and workforce governance.",
//       "Transparent, lawful, and efficient ecosystem with clear responsibilities and accountability.",
//     ]},
//     { heading: "Core Responsibilities", icon: "checklist", items: [
//       "Compliance: Companies Act, DPDP Act 2023, IT Act, Labour Codes, CSR guidelines.",
//       "Operational efficiency: resource management, procurement, vendor governance.",
//       "Record integrity with tamper-evident trails for digital & physical records.",
//       "Sustainability: green workplace policies aligned with ESG standards.",
//       "Cross-department coordination for cybersecurity, data protection, and legal compliance.",
//       "Risk assessments, internal audits, and compliance reviews.",
//       "Recruitment oversight, workplace safety, mental health and anti-harassment programs.",
//       "Transparent reporting structures and accountability.",
//     ]},
//     { heading: "Governance Structure & Accountability", icon: "governance", items: [
//       "CAO appointed by the Board to lead operations.",
//       "RACI matrix defining clear roles and responsibilities.",
//       "Quarterly reports to the Board & Audit Committee.",
//       "Confidential whistleblower program with anti-retaliation guarantees.",
//     ]},
//     { heading: "Legal Compliance Backbone", icon: "law", items: [
//       "Companies Act, 2013 — governance, CSR, disclosures.",
//       "DPDP Act, 2023 — privacy & data processing controls.",
//       "IT Act, 2000 — cyber law & digital governance.",
//       "Labour Codes, 2020 — wages, social security, workplace health.",
//       "POSH Act, 2013 — prevention of sexual harassment.",
//       "Indian Evidence Act, 1872 — evidence handling & admissibility.",
//       "GST Act, 2017 — financial & tax compliance.",
//       "Environmental Protection Act, 1986 — ESG compliance.",
//     ]},
//     { heading: "Vendor & Procurement Governance", icon: "vendor", items: [
//       "Transparent tendering with anti-corruption clauses.",
//       "Due diligence: financial, legal, cybersecurity checks.",
//       "Contracts: confidentiality, data protection, liability, termination.",
//       "Right-to-audit for vendors and subcontractors.",
//       "Supplier adherence to environmental and labor standards.",
//     ]},
//     { heading: "Digital Transformation & Security", icon: "security", items: [
//       "Secure record-keeping; cryptographic integrity verification.",
//       "Cloud-first with encryption at rest and in transit; tested backups.",
//       "Incident response aligned with CERT-In 6-hour reporting rule.",
//       "Zero-trust access with MFA and least-privilege controls.",
//       "AI governance policy to manage ethical automation and tooling.",
//     ]},
//     { heading: "ESG Commitment", icon: "leaf", items: [
//       "Eco-friendly practices to reduce carbon footprint.",
//       "Social empowerment: training programs & digital literacy.",
//       "Governance benchmarks aligned with global ESG reporting.",
//       "Alignment with UN Sustainable Development Goals (SDGs).",
//     ]},
//     { heading: "Data Protection & Privacy", icon: "privacy", items: [
//       "Full DPDP compliance with privacy-by-design.",
//       "Data Processing Agreements for all third parties.",
//       "Data subject rights: access, correction, deletion, grievance handling.",
//       "Retention schedules and secure destruction post-retention.",
//       "Cross-border transfer with contractual safeguards/localization.",
//     ]},
//     { heading: "Risk & Crisis Management", icon: "alert", items: [
//       "Business Continuity & Disaster Recovery Plans (BCP/DRP).",
//       "Annual simulation drills for readiness.",
//       "Central risk register for legal, operational, and cybersecurity risks.",
//       "Immediate escalation protocols for high-severity incidents.",
//     ]},
//     { heading: "Enforcement & Penalties", icon: "hammer", items: [
//       "Disciplinary measures for violations: suspension, termination, legal action.",
//       "Liability for negligence, fraud, corruption proven via investigations.",
//       "Documentation of enforcement actions for audit trails.",
//     ]},
//     { heading: "Future-Proofing & Scalability", icon: "future", items: [
//       "Dynamic updates to reflect law/standard changes and emerging risks.",
//       "Proactive compliance analytics and monitoring.",
//       "Adoption/alignment with ISO 27001, SOC 2, GDPR where applicable.",
//     ]},
//     { heading: "Contact", icon: "contact", items: [
//       "Email: admin@crccf.org",
//       "Owner: Chief Administrative Officer (CAO)",
//     ]},
//   ],
// };

// /* -------------------- Colors for SVGs -------------------- */
// const color = {
//   cyan100: "#CFFAFE", cyan300: "#67E8F9", cyan500: "#06B6D4",
//   indigo100: "#E0E7FF", indigo400: "#818CF8", indigo600: "#4F46E5",
//   emerald100: "#D1FAE5", emerald400: "#34D399",
//   amber100: "#FEF3C7", amber400: "#F59E0B",
//   rose100: "#FFE4E6", rose400: "#FB7185",
//   slate700: "#334155", slate900: "#0F172A",
// };

// /* -------------------- Small Badge Icons (for minor sections) -------------------- */
// const BadgeIcon = ({ type }) => {
//   switch (type) {
//     case "vision":
//       return (
//         <svg viewBox="0 0 64 64" className="w-8 h-8 shrink-0" role="img" aria-label="Vision">
//           <rect x="6" y="10" width="52" height="40" rx="10" fill={color.indigo100} />
//           <circle cx="32" cy="30" r="10" fill={color.indigo400} />
//           <circle cx="32" cy="30" r="4" fill="white" />
//         </svg>
//       );
//     case "checklist":
//       return (
//         <svg viewBox="0 0 64 64" className="w-8 h-8 shrink-0" role="img" aria-label="Checklist">
//           <rect x="10" y="8" width="44" height="48" rx="6" fill={color.cyan100} />
//           <rect x="18" y="18" width="28" height="4" rx="2" fill={color.cyan500} />
//           <rect x="18" y="28" width="28" height="4" rx="2" fill={color.cyan500} />
//           <rect x="18" y="38" width="18" height="4" rx="2" fill={color.cyan500} />
//           <path d="M16 18l-4 4" stroke={color.emerald400} strokeWidth="4" strokeLinecap="round" />
//           <path d="M16 28l-4 4" stroke={color.emerald400} strokeWidth="4" strokeLinecap="round" />
//           <path d="M16 38l-4 4" stroke={color.emerald400} strokeWidth="4" strokeLinecap="round" />
//         </svg>
//       );
//     case "governance":
//       return (
//         <svg viewBox="0 0 64 64" className="w-8 h-8 shrink-0" role="img" aria-label="Governance">
//           <rect x="8" y="16" width="48" height="36" rx="8" fill={color.amber100} />
//           <path d="M20 38h24" stroke={color.amber400} strokeWidth="4" strokeLinecap="round" />
//           <path d="M16 26h32" stroke={color.slate700} strokeWidth="4" strokeLinecap="round" />
//           <circle cx="32" cy="46" r="3" fill={color.slate700} />
//         </svg>
//       );
//     case "law":
//       return (
//         <svg viewBox="0 0 64 64" className="w-8 h-8 shrink-0" role="img" aria-label="Law">
//           <rect x="14" y="10" width="36" height="44" rx="6" fill={color.indigo100} />
//           <path d="M20 28h24" stroke={color.indigo600} strokeWidth="4" strokeLinecap="round" />
//           <path d="M20 20h24" stroke={color.indigo600} strokeWidth="4" strokeLinecap="round" />
//           <path d="M24 22c0 6 16 6 16 0" stroke={color.rose400} strokeWidth="3" fill="none" />
//         </svg>
//       );
//     case "vendor":
//       return (
//         <svg viewBox="0 0 64 64" className="w-8 h-8 shrink-0" role="img" aria-label="Vendor">
//           <rect x="6" y="18" width="52" height="30" rx="8" fill={color.emerald100} />
//           <rect x="10" y="22" width="20" height="22" rx="4" fill={color.emerald400} />
//           <rect x="34" y="22" width="20" height="22" rx="4" fill={color.cyan300} />
//         </svg>
//       );
//     case "security":
//       return (
//         <svg viewBox="0 0 64 64" className="w-8 h-8 shrink-0" role="img" aria-label="Security">
//           <path d="M32 8l20 8v12c0 12-8.5 22-20 26C20.5 50 12 40 12 28V16l20-8z" fill={color.cyan100} />
//           <path d="M24 30l6 6 10-10" stroke={color.cyan500} strokeWidth="4" strokeLinecap="round" fill="none" />
//         </svg>
//       );
//     case "leaf":
//       return (
//         <svg viewBox="0 0 64 64" className="w-8 h-8 shrink-0" role="img" aria-label="ESG">
//           <path d="M22 42c-2-12 6-22 22-24 0 16-10 24-22 24z" fill={color.emerald400} />
//           <path d="M18 44c8-6 16-12 28-16" stroke={color.emerald400} strokeWidth="3" fill="none" />
//         </svg>
//       );
//     case "privacy":
//       return (
//         <svg viewBox="0 0 64 64" className="w-8 h-8 shrink-0" role="img" aria-label="Privacy">
//           <rect x="10" y="16" width="44" height="34" rx="6" fill={color.rose100} />
//           <path d="M32 16v-4a8 8 0 0 1 8-8h0a8 8 0 0 1 8 8v4" stroke={color.rose400} strokeWidth="4" fill="none" />
//           <circle cx="32" cy="34" r="6" fill={color.rose400} />
//         </svg>
//       );
//     case "alert":
//       return (
//         <svg viewBox="0 0 64 64" className="w-8 h-8 shrink-0" role="img" aria-label="Alert">
//           <circle cx="32" cy="32" r="24" fill={color.amber100} />
//           <path d="M32 18v16" stroke={color.amber400} strokeWidth="4" strokeLinecap="round" />
//           <circle cx="32" cy="40" r="2.6" fill={color.amber400} />
//         </svg>
//       );
//     case "hammer":
//       return (
//         <svg viewBox="0 0 64 64" className="w-8 h-8 shrink-0" role="img" aria-label="Penalty">
//           <rect x="8" y="30" width="48" height="14" rx="7" fill={color.slate700} />
//           <path d="M22 12l12 10" stroke={color.indigo600} strokeWidth="6" strokeLinecap="round" />
//           <path d="M34 22l10 8" stroke={color.indigo400} strokeWidth="6" strokeLinecap="round" />
//         </svg>
//       );
//     case "future":
//       return (
//         <svg viewBox="0 0 64 64" className="w-8 h-8 shrink-0" role="img" aria-label="Future">
//           <circle cx="32" cy="32" r="24" fill={color.indigo100} />
//           <path d="M20 34c10-8 18-8 24 0" stroke={color.indigo600} strokeWidth="4" fill="none" />
//           <circle cx="32" cy="28" r="3" fill={color.indigo600} />
//         </svg>
//       );
//     case "contact":
//       return (
//         <svg viewBox="0 0 64 64" className="w-8 h-8 shrink-0" role="img" aria-label="Contact">
//         <rect x="8" y="10" width="48" height="36" rx="8" fill={color.cyan100} />
//         <rect x="14" y="16" width="36" height="8" rx="4" fill={color.cyan500} />
//         <rect x="14" y="28" width="24" height="6" rx="3" fill={color.indigo400} />
//       </svg>
//       );
//     default:
//       return null;
//   }
// };

// /* -------------------- Big Hero Illustration -------------------- */
// const AdminHeroSVG = (props) => (
//   <svg viewBox="0 0 760 520" role="img" aria-labelledby="adminHeroTitle adminHeroDesc" className="w-full h-auto" {...props}>
//     <title id="adminHeroTitle">Administrative Department Illustration</title>
//     <desc id="adminHeroDesc">Cartoon office scene with person at a desk, calendar, files, and a clipboard.</desc>

//     {/* Soft background blobs */}
//     <g opacity="0.35">
//       <ellipse cx="520" cy="140" rx="140" ry="60" fill={color.cyan100} />
//       <ellipse cx="200" cy="200" rx="160" ry="70" fill={color.indigo100} />
//       <ellipse cx="380" cy="430" rx="220" ry="50" fill={color.emerald100} />
//     </g>

//     {/* Desk */}
//     <rect x="120" y="340" width="520" height="28" rx="8" fill={color.slate700} />
//     <rect x="140" y="368" width="480" height="14" rx="6" fill={color.slate700} opacity="0.9" />

//     {/* Person */}
//     <g transform="translate(280,200)">
//       <circle cx="80" cy="30" r="28" fill="#FFD3C2" />
//       <path d="M52 30a28 28 0 0 1 56 0" fill="none" stroke={color.slate900} strokeWidth="4" />
//       <path d="M108 36 l18 8" stroke={color.slate900} strokeWidth="4" strokeLinecap="round" />
//       <rect x="52" y="58" width="56" height="48" rx="10" fill={color.indigo400} />
//       <path d="M52 74 h-24 a10 10 0 0 0 -10 10 v8" stroke={color.slate900} strokeWidth="4" fill="none" />
//       <path d="M108 74 h24 a10 10 0 0 1 10 10 v8" stroke={color.slate900} strokeWidth="4" fill="none" />
//       <rect x="38" y="96" width="84" height="12" rx="4" fill={color.slate700} />
//       <rect x="46" y="84" width="68" height="12" rx="3" fill={color.cyan500} />
//     </g>

//     {/* Calendar card */}
//     <g transform="translate(96,120)">
//       <rect x="0" y="0" width="160" height="120" rx="12" fill={color.amber100} />
//       <rect x="0" y="0" width="160" height="28" rx="12" fill={color.amber400} />
//       <g fill="white">
//         <rect x="24" y="48" width="20" height="18" rx="4" />
//         <rect x="52" y="48" width="20" height="18" rx="4" />
//         <rect x="80" y="48" width="20" height="18" rx="4" />
//         <rect x="108" y="48" width="20" height="18" rx="4" />
//         <rect x="24" y="72" width="20" height="18" rx="4" />
//         <rect x="52" y="72" width="20" height="18" rx="4" />
//         <rect x="80" y="72" width="20" height="18" rx="4" />
//         <rect x="108" y="72" width="20" height="18" rx="4" />
//       </g>
//     </g>

//     {/* Clipboard */}
//     <g transform="translate(520,96)">
//       <rect x="0" y="16" width="140" height="180" rx="12" fill="white" stroke={color.indigo400} strokeWidth="3" />
//       <rect x="44" y="0" width="52" height="22" rx="6" fill={color.indigo400} />
//       <g fill={color.indigo400} opacity="0.9">
//         <rect x="20" y="48" width="100" height="8" rx="4" />
//         <rect x="20" y="70" width="100" height="8" rx="4" />
//         <rect x="20" y="92" width="100" height="8" rx="4" />
//         <rect x="20" y="114" width="100" height="8" rx="4" />
//         <rect x="20" y="136" width="68" height="8" rx="4" />
//       </g>
//     </g>

//     {/* File stack */}
//     <g transform="translate(180,276)">
//       <rect x="0" y="0" width="120" height="18" rx="4" fill={color.cyan300} />
//       <rect x="8" y="-16" width="120" height="18" rx="4" fill={color.indigo400} />
//       <rect x="16" y="-32" width="120" height="18" rx="4" fill={color.emerald400} />
//     </g>
//   </svg>
// );

// /* -------------------- BIG FEATURE ILLUSTRATIONS (3) -------------------- */
// const ResponsibilitiesSVG = (props) => (
//   <svg viewBox="0 0 740 360" role="img" aria-label="Responsibilities Illustration" className="w-full h-auto" {...props}>
//     <defs>
//       <linearGradient id="g1" x1="0" y1="0" x2="1" y2="1">
//         <stop offset="0" stopColor={color.cyan100} />
//         <stop offset="1" stopColor={color.indigo100} />
//       </linearGradient>
//     </defs>
//     <rect x="0" y="0" width="740" height="360" rx="20" fill="url(#g1)" />
//     {/* Board */}
//     <rect x="60" y="50" width="360" height="200" rx="12" fill="white" />
//     <rect x="80" y="80" width="220" height="12" rx="6" fill={color.slate700} opacity="0.5" />
//     <rect x="80" y="110" width="260" height="12" rx="6" fill={color.slate700} opacity="0.5" />
//     <rect x="80" y="140" width="200" height="12" rx="6" fill={color.slate700} opacity="0.5" />
//     {/* Person with checklist */}
//     <g transform="translate(460,80)">
//       <rect x="0" y="40" width="140" height="14" rx="7" fill={color.emerald400} />
//       <rect x="0" y="70" width="110" height="14" rx="7" fill={color.cyan500} />
//       <rect x="0" y="100" width="160" height="14" rx="7" fill={color.indigo400} />
//       <circle cx="40" cy="16" r="16" fill="#FFD3C2" />
//       <rect x="26" y="30" width="28" height="24" rx="6" fill={color.indigo400} />
//     </g>
//     {/* Folders */}
//     <g transform="translate(120,280)">
//       <rect x="0" y="0" width="120" height="40" rx="8" fill={color.amber100} />
//       <rect x="130" y="0" width="120" height="40" rx="8" fill={color.cyan100} />
//       <rect x="260" y="0" width="120" height="40" rx="8" fill={color.indigo100} />
//     </g>
//   </svg>
// );

// const LegalBackboneSVG = (props) => (
//   <svg viewBox="0 0 740 360" role="img" aria-label="Legal Compliance Illustration" className="w-full h-auto" {...props}>
//     <rect x="0" y="0" width="740" height="360" rx="20" fill={color.indigo100} />
//     {/* Scales + books + shield */}
//     <g transform="translate(90,60)">
//       {/* Scales */}
//       <path d="M140 20 v120" stroke={color.indigo600} strokeWidth="6" />
//       <circle cx="140" cy="20" r="10" fill={color.indigo600} />
//       <path d="M80 60 h120" stroke={color.indigo600} strokeWidth="6" />
//       <path d="M90 60 c0 20 30 36 50 36s50-16 50-36" fill="none" stroke={color.indigo600} strokeWidth="4" />
//       <path d="M140 140 c-24 0 -42 18 -42 40 h84 c0-22 -18-40 -42-40z" fill={color.cyan100} />
//     </g>
//     {/* Books */}
//     <g transform="translate(360,190)">
//       <rect x="0" y="0" width="120" height="24" rx="6" fill={color.rose100} />
//       <rect x="8" y="-24" width="120" height="24" rx="6" fill={color.amber100} />
//       <rect x="16" y="-48" width="120" height="24" rx="6" fill={color.cyan100} />
//     </g>
//     {/* Shield */}
//     <g transform="translate(520,80)">
//       <path d="M60 0l80 32v36c0 38-26 70-80 90-54-20-80-52-80-90V32L60 0z" fill="white" stroke={color.indigo400} strokeWidth="4" />
//       <path d="M30 70l28 28 44-44" stroke={color.emerald400} strokeWidth="6" fill="none" strokeLinecap="round" />
//     </g>
//   </svg>
// );

// const DigitalSecuritySVG = (props) => (
//   <svg viewBox="0 0 740 360" role="img" aria-label="Digital Security Illustration" className="w-full h-auto" {...props}>
//     <defs>
//       <linearGradient id="g2" x1="0" y1="0" x2="1" y2="1">
//         <stop offset="0" stopColor={color.cyan100} />
//         <stop offset="1" stopColor={color.emerald100} />
//       </linearGradient>
//     </defs>
//     <rect x="0" y="0" width="740" height="360" rx="20" fill="url(#g2)" />
//     {/* Cloud + lock + nodes */}
//     <g transform="translate(100,80)">
//       <ellipse cx="140" cy="60" rx="120" ry="60" fill="white" />
//       <rect x="110" y="40" width="60" height="40" rx="8" fill={color.indigo400} />
//       <circle cx="140" cy="60" r="8" fill="white" />
//     </g>
//     <g transform="translate(420,60)">
//       <rect x="40" y="36" width="120" height="150" rx="12" fill="white" stroke={color.cyan500} strokeWidth="4" />
//       <rect x="74" y="8" width="52" height="24" rx="6" fill={color.cyan500} />
//       <circle cx="100" cy="120" r="18" fill={color.emerald400} />
//       <rect x="64" y="80" width="72" height="10" rx="5" fill={color.indigo400} />
//       <rect x="64" y="98" width="72" height="10" rx="5" fill={color.indigo400} />
//       <rect x="64" y="138" width="44" height="10" rx="5" fill={color.indigo400} />
//     </g>
//     {/* Nodes */}
//     <g transform="translate(60,230)">
//       <circle cx="40" cy="40" r="6" fill={color.indigo400} />
//       <circle cx="120" cy="20" r="6" fill={color.cyan500} />
//       <circle cx="200" cy="36" r="6" fill={color.emerald400} />
//       <circle cx="280" cy="16" r="6" fill={color.indigo600} />
//       <path d="M40 40 L120 20 L200 36 L280 16" stroke={color.slate700} strokeWidth="2" fill="none" />
//     </g>
//   </svg>
// );

// /* -------------------- Utility: Smooth scroll to an id -------------------- */
// const scrollToId = (id) => {
//   const el = document.getElementById(id);
//   if (!el) return;
//   el.scrollIntoView({ behavior: "smooth", block: "start" });
// };

// /* -------------------- FeatureSection (with parallax & reveal) -------------------- */
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
//         className={`grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-10 items-center ${reverse ? "md:flex-row-reverse" : ""}`}
//       >
//         {/* Illustration */}
//         <motion.div style={{ y }} className={`relative order-1 ${reverse ? "md:order-2" : ""}`}>
//           <div className="absolute -inset-2 rounded-2xl bg-gradient-to-tr from-cyan-100 via-indigo-100 to-emerald-100 blur-xl" aria-hidden="true" />
//           <div className="relative rounded-2xl border border-gray-200 bg-white p-4 shadow-sm">
//             <SVG />
//           </div>
//         </motion.div>

//         {/* Content */}
//         <div className={`order-2 ${reverse ? "md:order-1" : ""}`}>
//           <h2 className="text-xl sm:text-2xl font-semibold text-gray-900">{title}</h2>
//           <ul className="mt-3 space-y-2 text-gray-700 list-disc pl-5 sm:pl-6">
//             {bullets.map((b, i) => (
//               <li key={i} className="leading-relaxed">{b}</li>
//             ))}
//           </ul>
//           <button
//             onClick={() => scrollToId("top")}
//             className="mt-4 inline-flex items-center rounded-md border border-cyan-200 bg-cyan-50 px-3 py-1.5 text-sm text-cyan-800 hover:bg-cyan-100"
//           >
//             Back to top
//           </button>
//         </div>
//       </motion.div>
//     </section>
//   );
// };

// /* -------------------- Back-to-top Floating Button -------------------- */
// const BackToTop = () => {
//   const [show, setShow] = useState(false);
//   useEffect(() => {
//     const onScroll = () => setShow(window.scrollY > 600);
//     onScroll();
//     window.addEventListener("scroll", onScroll);
//     return () => window.removeEventListener("scroll", onScroll);
//   }, []);
//   return (
//     <AnimatePresence>
//       {show && (
//         <motion.button
//           initial={{ opacity: 0, y: 16 }}
//           animate={{ opacity: 1, y: 0 }}
//           exit={{ opacity: 0, y: 16 }}
//           onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
//           className="fixed bottom-6 right-6 z-50 rounded-full bg-cyan-600 px-4 py-3 text-white shadow-lg hover:bg-cyan-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-white"
//           aria-label="Back to top"
//           title="Back to top"
//         >
//           ↑
//         </motion.button>
//       )}
//     </AnimatePresence>
//   );
// };

// /* -------------------- Page -------------------- */
// export default function AdminStativeDepartment() {
//   const { container, itemUp, listItem } = useAnims();
//   const heroRef = useRef(null);
//   const { scrollYProgress } = useScroll({ target: heroRef, offset: ["start start", "end start"] });
//   const heroY = useTransform(scrollYProgress, [0, 1], [0, -40]); // gentle parallax up

//   return (
//     <motion.section
//       id="top"
//       variants={container}
//       initial="hidden"
//       animate="show"
//       className="relative max-w-6xl mx-auto px-4 sm:px-6 md:px-8 py-10 sm:py-14"
//     >
//       {/* Sticky Quick-Jump (desktop only) */}
//       <div className="hidden lg:block sticky top-4 z-10 mb-4">
//         <div className="inline-flex flex-wrap gap-2">
//           {[
//             { id: "feat-resp", label: "Responsibilities" },
//             { id: "feat-legal", label: "Legal Backbone" },
//             { id: "feat-sec", label: "Digital Security" },
//           ].map((x) => (
//             <button
//               key={x.id}
//               onClick={() => scrollToId(x.id)}
//               className="px-3 py-1.5 text-sm rounded-full bg-indigo-50 text-indigo-700 border border-indigo-200 hover:bg-indigo-100"
//             >
//               {x.label}
//             </button>
//           ))}
//         </div>
//       </div>

//       {/* Breadcrumb */}
//       <motion.nav variants={itemUp} className="text-sm text-gray-500 mb-4" aria-label="Breadcrumb">
//         <Link to="/" className="hover:underline">Home</Link>
//         <span aria-hidden="true"> › </span>
//         <Link to="/department" className="hover:underline">Departments</Link>
//         <span aria-hidden="true"> › </span>
//         <span className="text-gray-700" aria-current="page">{data.title}</span>
//       </motion.nav>

//       {/* Hero (parallax illustration) */}
//       <div ref={heroRef} className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-10 items-center">
//         <motion.div variants={itemUp}>
//           <h1 className="text-2xl sm:text-3xl font-bold text-gray-900">
//             {data.title} <span className="text-gray-500 font-semibold">({data.shortName})</span>
//           </h1>
//           <p className="mt-2 text-gray-700">{data.summary}</p>
//           <p className="mt-3 text-cyan-800 font-medium">{data.tagline}</p>

//           {/* Quick Pills */}
//           <div className="mt-4 flex flex-wrap gap-2">
//             {["Compliance", "Governance", "Records", "Vendors", "ESG"].map((pill) => (
//               <span key={pill} className="px-3 py-1.5 text-xs sm:text-sm rounded-full bg-cyan-100 text-cyan-800 border border-cyan-200">
//                 {pill}
//               </span>
//             ))}
//           </div>
//         </motion.div>

//         <motion.div style={{ y: heroY }} variants={itemUp} className="relative">
//           <div className="absolute -inset-2 rounded-2xl bg-gradient-to-tr from-cyan-100 via-indigo-100 to-emerald-100 blur-xl" aria-hidden="true" />
//           <div className="relative rounded-2xl border border-gray-200 bg-white p-4 shadow-sm">
//             <AdminHeroSVG />
//           </div>
//         </motion.div>
//       </div>

//       {/* ------- BIG FEATURE SECTIONS (2–3 with full-size SVGs) ------- */}
//       <FeatureSection
//         id="feat-resp"
//         title="Core Responsibilities"
//         bullets={[
//           "Compliance with Companies Act, DPDP Act, IT Act, Labour Codes, CSR.",
//           "Operational efficiency via resources, procurement, vendor governance.",
//           "Record integrity (digital+physical) with tamper-evident trails.",
//           "Cross-department coordination for data protection and legal compliance.",
//         ]}
//         SVG={ResponsibilitiesSVG}
//       />

//       <FeatureSection
//         id="feat-legal"
//         title="Legal Compliance Backbone"
//         bullets={[
//           "DPDP, IT Act, POSH, Evidence Act—embedded into SOPs.",
//           "Contracting standards: confidentiality, liability, termination.",
//           "Board-level reporting and audit-ready documentation.",
//           "ESG and statutory compliance across functions.",
//         ]}
//         SVG={LegalBackboneSVG}
//         reverse
//       />

//       <FeatureSection
//         id="feat-sec"
//         title="Digital Transformation & Security"
//         bullets={[
//           "Cloud-first, encrypted storage with tested backups.",
//           "Zero-trust access (MFA, least privilege).",
//           "CERT-In aligned incident response (6-hour rule).",
//           "AI governance policy for responsible automation.",
//         ]}
//         SVG={DigitalSecuritySVG}
//       />

//       {/* ------- REMAINING SECTIONS (compact with badge icons) ------- */}
//       <div className="mt-12 md:mt-16 space-y-8">
//         {data.sections.map((sec) => (
//           <motion.section
//             key={sec.heading}
//             initial={{ opacity: 0, y: 16 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true, margin: "-60px" }}
//           >
//             <div className="flex items-start gap-3">
//               <BadgeIcon type={sec.icon} />
//               <h2 className="text-lg sm:text-xl font-semibold text-gray-900">{sec.heading}</h2>
//             </div>
//             <ul className="mt-3 space-y-2 text-gray-700 list-disc pl-5 sm:pl-6">
//               {sec.items.map((it, i) => (
//                 <li key={i} className="leading-relaxed">{it}</li>
//               ))}
//             </ul>
//           </motion.section>
//         ))}
//       </div>

//       {/* Back link */}
//       <motion.div
//         initial={{ opacity: 0, y: 16 }}
//         whileInView={{ opacity: 1, y: 0 }}
//         viewport={{ once: true }}
//         className="mt-12"
//       >
//         <Link
//           to="/department"
//           className="inline-flex items-center text-cyan-700 hover:text-cyan-800 focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400 rounded-md"
//         >
//           <svg className="w-4 h-4 mr-1" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
//             <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
//           </svg>
//           Back to Departments
//         </Link>
//       </motion.div>

//       {/* Floating Back-to-top */}
//       <BackToTop />
//     </motion.section>
//   );
// }

// src/pages/ourDepartments/AdminStativeDepartment.jsx
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
  title: "Administrative Department",
  shortName: "Admin & Governance",
  tagline:
    "Integrity in Administration • Strength in Compliance • Excellence in Governance",
  summary:
    "This charter establishes the complete administrative governance framework for CR Cyber Crime Foundation (CRCCF). It is rigorously compliant, scalable for future requirements, and aligned with national and international legal and regulatory frameworks.",
  sections: [
    {
      id: "purpose-vision",
      heading: "Purpose & Vision",
      bullets: [
        "Acts as the backbone of CRCCF’s operations across compliance, infrastructure, and workforce administration.",
        "Creates a transparent, lawful, and efficient ecosystem with clear responsibilities, authority, and accountability.",
      ],
      svg: "PurposeSVG",
    },
    {
      id: "core-resp",
      heading: "Core Responsibilities",
      bullets: [
        "Compliance with Companies Act, DPDP Act 2023, IT Act, Labour Codes, and CSR guidelines.",
        "Operational efficiency via resource management, procurement, and vendor governance.",
        "Maintain and safeguard digital and physical records with tamper-evident integrity verification.",
        "Develop sustainable and green workplace policies aligned with ESG standards.",
        "Cross-department coordination to support cybersecurity, data protection, and legal compliance.",
        "Periodic risk assessments, internal audits, and compliance reviews.",
        "Oversee recruitment, workforce safety, mental health initiatives, and anti-harassment programs.",
        "Promote transparency and accountability through clear reporting structures.",
      ],
      svg: "ResponsibilitiesSVG",
    },
    {
      id: "governance",
      heading: "Governance Structure & Accountability",
      bullets: [
        "Chief Administrative Officer (CAO) appointed by the Board to oversee departmental operations.",
        "RACI matrix implemented to define clear roles and responsibilities.",
        "Quarterly compliance and performance reporting to the Board and Audit Committee.",
        "Whistleblower protection program ensuring confidentiality and protection against retaliation.",
      ],
      svg: "GovernanceSVG",
    },
    {
      id: "legal-backbone",
      heading: "Legal Compliance Backbone",
      bullets: [
        "Companies Act, 2013 — corporate governance, CSR, and disclosures.",
        "Digital Personal Data Protection Act (DPDP), 2023 — privacy and data processing controls.",
        "Information Technology Act, 2000 — cyber law and digital governance compliance.",
        "Labour Codes, 2020 — wages, social security, and workplace health.",
        "POSH Act, 2013 — prevention of sexual harassment in the workplace.",
        "Indian Evidence Act, 1872 — evidence handling and admissibility in legal processes.",
        "GST Act, 2017 — financial and tax compliance.",
        "Environmental Protection Act, 1986 — sustainable operations and ESG compliance.",
      ],
      svg: "LegalBackboneSVG",
    },
    {
      id: "vendor",
      heading: "Vendor & Procurement Governance",
      bullets: [
        "Transparent tendering process with anti-corruption clauses.",
        "Due diligence checks (financial, legal, and cybersecurity) for all suppliers.",
        "Contracts to include confidentiality, data protection, liability, and termination clauses.",
        "Right-to-audit for all vendors and subcontractors.",
        "Supplier compliance with environmental and labor standards.",
      ],
      svg: "VendorSVG",
    },
    {
      id: "digital-security",
      heading: "Digital Transformation & Security",
      bullets: [
        "Blockchain-enabled secure record-keeping for evidence integrity.",
        "Cloud-first strategy with encrypted storage (at rest & in transit) and verified backups.",
        "Incident response aligned with CERT-In 2022 six-hour reporting rule.",
        "Zero-trust security model with MFA and least-privilege access controls.",
        "AI governance policy to manage ethical use of automation and AI-based tools.",
      ],
      svg: "DigitalSecuritySVG",
    },
    {
      id: "esg",
      heading: "Environmental, Social & Governance (ESG) Commitment",
      bullets: [
        "Adopt eco-friendly practices to reduce carbon footprint and achieve sustainability.",
        "Implement social empowerment initiatives (training programs and digital literacy).",
        "Establish corporate governance benchmarks aligned with global ESG reporting standards.",
        "Ensure alignment with UN Sustainable Development Goals (SDGs).",
      ],
      svg: "ESGSVG",
    },
    {
      id: "privacy",
      heading: "Data Protection & Privacy",
      bullets: [
        "Full compliance with DPDP Act, 2023 requirements and privacy-by-design principles.",
        "Data Processing Agreements for all third parties handling sensitive data.",
        "Data subject rights handling: access, correction, deletion, and grievance mechanisms.",
        "Data retention schedules with secure destruction methods post-retention period.",
        "Cross-border data transfer compliance with contractual safeguards and localization rules.",
      ],
      svg: "PrivacySVG",
    },
    {
      id: "risk",
      heading: "Risk & Crisis Management",
      bullets: [
        "Establish Business Continuity Plans (BCP) and Disaster Recovery Plans (DRP).",
        "Annual simulation drills to validate crisis readiness.",
        "Dedicated risk register tracking legal, operational, and cybersecurity risks.",
        "Immediate escalation protocols for high-severity incidents.",
      ],
      svg: "RiskSVG",
    },
    {
      id: "enforcement",
      heading: "Enforcement & Penalties",
      bullets: [
        "Strict disciplinary measures for violations: suspension, termination, or legal action.",
        "Legal liability for negligence, fraud, or corruption proven through internal investigations.",
        "Clear documentation of all enforcement actions for audit purposes.",
      ],
      svg: "EnforcementSVG",
    },
    {
      id: "future",
      heading: "Future-Proofing & Scalability",
      bullets: [
        "Dynamic update mechanism to incorporate changes in laws, standards, and emerging risks.",
        "AI-driven compliance monitoring and predictive analytics for proactive governance.",
        "Integration/alignment with ISO 27001, SOC 2, and GDPR where applicable.",
      ],
      svg: "FutureSVG",
    },
    {
      id: "conclusion",
      heading: "Conclusion",
      bullets: [
        "The Administrative Department stands as the central pillar of governance, accountability, and operational excellence at CRCCF.",
        "By combining advanced technologies, strict legal compliance, and future-focused strategies, the framework ensures resilience, transparency, and global competitiveness.",
        "Tagline: “Integrity in Administration, Strength in Compliance, Excellence in Governance.”",
      ],
      svg: "ConclusionSVG",
    },
    {
      id: "contact",
      heading: "Contact",
      bullets: ["Email: admin@crccf.org", "Owner: Chief Administrative Officer (CAO)"],
      svg: "ContactSVG",
    },
  ],
};

/* -------------------- Colors -------------------- */
const color = {
  cyan100: "#CFFAFE",
  cyan300: "#67E8F9",
  cyan500: "#06B6D4",
  indigo100: "#E0E7FF",
  indigo400: "#818CF8",
  indigo600: "#4F46E5",
  emerald100: "#D1FAE5",
  emerald400: "#34D399",
  amber100: "#FEF3C7",
  amber400: "#F59E0B",
  rose100: "#FFE4E6",
  rose400: "#FB7185",
  slate700: "#334155",
  slate900: "#0F172A",
  white: "#FFFFFF",
};

/* -------------------- Big Hero Illustration -------------------- */
const AdminHeroSVG = (props) => (
  <svg viewBox="0 0 760 520" role="img" aria-labelledby="adminHeroTitle adminHeroDesc" className="w-full h-auto" {...props}>
    <title id="adminHeroTitle">Administrative Department Illustration</title>
    <desc id="adminHeroDesc">Cartoon office scene with person at desk, calendar, clipboard, and files.</desc>

    {/* Soft background blobs */}
    <g opacity="0.35">
      <ellipse cx="520" cy="140" rx="140" ry="60" fill={color.cyan100} />
      <ellipse cx="200" cy="200" rx="160" ry="70" fill={color.indigo100} />
      <ellipse cx="380" cy="430" rx="220" ry="50" fill={color.emerald100} />
    </g>

    {/* Desk */}
    <rect x="120" y="340" width="520" height="28" rx="8" fill={color.slate700} />
    <rect x="140" y="368" width="480" height="14" rx="6" fill={color.slate700} opacity="0.9" />

    {/* Person */}
    <g transform="translate(280,200)">
      <circle cx="80" cy="30" r="28" fill="#FFD3C2" />
      <path d="M52 30a28 28 0 0 1 56 0" fill="none" stroke={color.slate900} strokeWidth="4" />
      <path d="M108 36 l18 8" stroke={color.slate900} strokeWidth="4" strokeLinecap="round" />
      <rect x="52" y="58" width="56" height="48" rx="10" fill={color.indigo400} />
      <path d="M52 74 h-24 a10 10 0 0 0 -10 10 v8" stroke={color.slate900} strokeWidth="4" fill="none" />
      <path d="M108 74 h24 a10 10 0 0 1 10 10 v8" stroke={color.slate900} strokeWidth="4" fill="none" />
      <rect x="38" y="96" width="84" height="12" rx="4" fill={color.slate700} />
      <rect x="46" y="84" width="68" height="12" rx="3" fill={color.cyan500} />
    </g>

    {/* Calendar */}
    <g transform="translate(96,120)">
      <rect x="0" y="0" width="160" height="120" rx="12" fill={color.amber100} />
      <rect x="0" y="0" width="160" height="28" rx="12" fill={color.amber400} />
      <g fill={color.white}>
        <rect x="24" y="48" width="20" height="18" rx="4" />
        <rect x="52" y="48" width="20" height="18" rx="4" />
        <rect x="80" y="48" width="20" height="18" rx="4" />
        <rect x="108" y="48" width="20" height="18" rx="4" />
        <rect x="24" y="72" width="20" height="18" rx="4" />
        <rect x="52" y="72" width="20" height="18" rx="4" />
        <rect x="80" y="72" width="20" height="18" rx="4" />
        <rect x="108" y="72" width="20" height="18" rx="4" />
      </g>
    </g>

    {/* Clipboard */}
    <g transform="translate(520,96)">
      <rect x="0" y="16" width="140" height="180" rx="12" fill={color.white} stroke={color.indigo400} strokeWidth="3" />
      <rect x="44" y="0" width="52" height="22" rx="6" fill={color.indigo400} />
      <g fill={color.indigo400} opacity="0.9">
        <rect x="20" y="48" width="100" height="8" rx="4" />
        <rect x="20" y="70" width="100" height="8" rx="4" />
        <rect x="20" y="92" width="100" height="8" rx="4" />
        <rect x="20" y="114" width="100" height="8" rx="4" />
        <rect x="20" y="136" width="68" height="8" rx="4" />
      </g>
    </g>

    {/* File stack */}
    <g transform="translate(180,276)">
      <rect x="0" y="0" width="120" height="18" rx="4" fill={color.cyan300} />
      <rect x="8" y="-16" width="120" height="18" rx="4" fill={color.indigo400} />
      <rect x="16" y="-32" width="120" height="18" rx="4" fill={color.emerald400} />
    </g>
  </svg>
);

/* -------------------- Feature SVGs (cartoon, colorful, inline) -------------------- */
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

/* Purpose */
const PurposeSVG = (props) => (
  <svg viewBox="0 0 740 360" role="img" aria-label="Purpose & Vision Illustration" className="w-full h-auto" {...props}>
    <BG id="gPV" from={color.cyan100} to={color.indigo100} />
    <Panel x="0" y="0" w="740" h="360" r="20" fill="url(#gPV)" />
    {/* Compass + eye + desk */}
    <circle cx="140" cy="120" r="52" fill={color.white} />
    <circle cx="140" cy="120" r="6" fill={color.indigo600} />
    <path d="M100 120c20-30 60-30 80 0-20 30-60 30-80 0z" fill="none" stroke={color.indigo600} strokeWidth="4" />
    <path d="M200 240 h320 v20 h-320z" fill={color.slate700} />
    <Panel x="220" y="160" w="200" h="60" fill={color.white} />
    <Panel x="430" y="146" w="90" h="24" fill={color.cyan500} />
  </svg>
);

/* Responsibilities */
const ResponsibilitiesSVG = (props) => (
  <svg viewBox="0 0 740 360" role="img" aria-label="Core Responsibilities Illustration" className="w-full h-auto" {...props}>
    <BG id="g1" from={color.cyan100} to={color.indigo100} />
    <Panel x="0" y="0" w="740" h="360" r="20" fill="url(#g1)" />
    <Panel x="60" y="50" w="360" h="200" fill={color.white} />
    <Panel x="80" y="80" w="220" h="12" fill={color.slate700} />
    <Panel x="80" y="110" w="260" h="12" fill={color.slate700} />
    <Panel x="80" y="140" w="200" h="12" fill={color.slate700} />
    <g transform="translate(460,80)">
      <Panel x="0" y="40" w="140" h="14" r="7" fill={color.emerald400} />
      <Panel x="0" y="70" w="110" h="14" r="7" fill={color.cyan500} />
      <Panel x="0" y="100" w="160" h="14" r="7" fill={color.indigo400} />
      <circle cx="40" cy="16" r="16" fill="#FFD3C2" />
      <Panel x="26" y="30" w="28" h="24" r="6" fill={color.indigo400} />
    </g>
    <g transform="translate(120,280)">
      <Panel x="0" y="0" w="120" h="40" r="8" fill={color.amber100} />
      <Panel x="130" y="0" w="120" h="40" r="8" fill={color.cyan100} />
      <Panel x="260" y="0" w="120" h="40" r="8" fill={color.indigo100} />
    </g>
  </svg>
);

/* Governance */
const GovernanceSVG = (props) => (
  <svg viewBox="0 0 740 360" role="img" aria-label="Governance Illustration" className="w-full h-auto" {...props}>
    <Panel x="0" y="0" w="740" h="360" r="20" fill={color.amber100} />
    {/* Org chart */}
    <Panel x="100" y="60" w="140" h="40" fill={color.white} stroke={color.slate700} sw="2" />
    <Panel x="360" y="60" w="140" h="40" fill={color.white} stroke={color.slate700} sw="2" />
    <Panel x="230" y="160" w="140" h="40" fill={color.white} stroke={color.slate700} sw="2" />
    <path d="M170 100v60M430 100v60M240 160h120" stroke={color.slate700} strokeWidth="3" />
    {/* Meeting table */}
    <Panel x="520" y="220" w="140" h="60" r="16" fill={color.indigo100} />
    <circle cx="540" cy="250" r="10" fill={color.indigo400} />
    <circle cx="580" cy="250" r="10" fill={color.indigo400} />
    <circle cx="620" cy="250" r="10" fill={color.indigo400} />
  </svg>
);

/* Legal Backbone */
const LegalBackboneSVG = (props) => (
  <svg viewBox="0 0 740 360" role="img" aria-label="Legal Compliance Illustration" className="w-full h-auto" {...props}>
    <Panel x="0" y="0" w="740" h="360" r="20" fill={color.indigo100} />
    {/* Scales + books + shield */}
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

/* Vendor */
const VendorSVG = (props) => (
  <svg viewBox="0 0 740 360" role="img" aria-label="Vendor & Procurement Illustration" className="w-full h-auto" {...props}>
    <BG id="gV" from={color.emerald100} to={color.cyan100} />
    <Panel x="0" y="0" w="740" h="360" r="20" fill="url(#gV)" />
    {/* Contract panels */}
    <Panel x="80" y="60" w="220" h="160" fill={color.white} stroke={color.emerald400} sw="3" />
    <Panel x="106" y="90" w="160" h="10" fill={color.slate700} />
    <Panel x="106" y="110" w="140" h="10" fill={color.slate700} />
    {/* Handshake (abstract) */}
    <path d="M420 180c40-20 60-20 100 0" stroke={color.indigo400} strokeWidth="8" fill="none" strokeLinecap="round" />
    <circle cx="410" cy="180" r="14" fill={color.indigo400} />
    <circle cx="530" cy="180" r="14" fill={color.indigo400} />
    {/* Folders */}
    <Panel x="580" y="220" w="80" h="40" r="8" fill={color.amber100} />
    <Panel x="480" y="220" w="80" h="40" r="8" fill={color.cyan100} />
  </svg>
);

/* Digital Security */
const DigitalSecuritySVG = (props) => (
  <svg viewBox="0 0 740 360" role="img" aria-label="Digital Security Illustration" className="w-full h-auto" {...props}>
    <BG id="gDS" from={color.cyan100} to={color.emerald100} />
    <Panel x="0" y="0" w="740" h="360" r="20" fill="url(#gDS)" />
    {/* Cloud + lock + nodes */}
    <g transform="translate(100,80)">
      <ellipse cx="140" cy="60" rx="120" ry="60" fill={color.white} />
      <Panel x="110" y="40" w="60" h="40" r="8" fill={color.indigo400} />
      <circle cx="140" cy="60" r="8" fill={color.white} />
    </g>
    <g transform="translate(420,60)">
      <Panel x="40" y="36" w="120" h="150" r="12" fill={color.white} stroke={color.cyan500} sw="4" />
      <Panel x="74" y="8" w="52" h="24" r="6" fill={color.cyan500} />
      <circle cx="100" cy="120" r="18" fill={color.emerald400} />
      <Panel x="64" y="80" w="72" h="10" r="5" fill={color.indigo400} />
      <Panel x="64" y="98" w="72" h="10" r="5" fill={color.indigo400} />
      <Panel x="64" y="138" w="44" h="10" r="5" fill={color.indigo400} />
    </g>
    <g transform="translate(60,230)">
      <circle cx="40" cy="40" r="6" fill={color.indigo400} />
      <circle cx="120" cy="20" r="6" fill={color.cyan500} />
      <circle cx="200" cy="36" r="6" fill={color.emerald400} />
      <circle cx="280" cy="16" r="6" fill={color.indigo600} />
      <path d="M40 40 L120 20 L200 36 L280 16" stroke={color.slate700} strokeWidth="2" fill="none" />
    </g>
  </svg>
);

/* ESG */
const ESGSVG = (props) => (
  <svg viewBox="0 0 740 360" role="img" aria-label="ESG Illustration" className="w-full h-auto" {...props}>
    <Panel x="0" y="0" w="740" h="360" r="20" fill={color.emerald100} />
    <path d="M120 240c-8-48 24-88 88-96 0 64-40 96-88 96z" fill={color.emerald400} />
    <path d="M100 260c32-24 64-48 112-64" stroke={color.emerald400} strokeWidth="4" fill="none" />
    {/* People & chart */}
    <circle cx="450" cy="180" r="14" fill={color.indigo400} />
    <circle cx="490" cy="180" r="14" fill={color.cyan500} />
    <circle cx="530" cy="180" r="14" fill={color.emerald400} />
    <Panel x="450" y="210" w="160" h="80" r="12" fill={color.white} />
    <Panel x="470" y="228" w="24" h="40" r="6" fill={color.indigo400} />
    <Panel x="502" y="236" w="24" h="32" r="6" fill={color.cyan500} />
    <Panel x="534" y="220" w="24" h="48" r="6" fill={color.emerald400} />
  </svg>
);

/* Privacy */
const PrivacySVG = (props) => (
  <svg viewBox="0 0 740 360" role="img" aria-label="Data Protection & Privacy Illustration" className="w-full h-auto" {...props}>
    <Panel x="0" y="0" w="740" h="360" r="20" fill={color.rose100} />
    <Panel x="100" y="80" w="240" h="180" r="12" fill={color.white} />
    <path d="M420 140v-16a28 28 0 0 1 56 0v16" stroke={color.rose400} strokeWidth="6" fill="none" />
    <Panel x="402" y="140" w="92" h="120" r="12" fill={color.white} stroke={color.rose400} sw="4" />
    <circle cx="448" cy="220" r="14" fill={color.rose400} />
  </svg>
);

/* Risk */
const RiskSVG = (props) => (
  <svg viewBox="0 0 740 360" role="img" aria-label="Risk & Crisis Management Illustration" className="w-full h-auto" {...props}>
    <Panel x="0" y="0" w="740" h="360" r="20" fill={color.amber100} />
    <circle cx="120" cy="120" r="50" fill={color.amber400} />
    <path d="M120 96v28" stroke="white" strokeWidth="6" strokeLinecap="round" />
    <circle cx="120" cy="156" r="4" fill="white" />
    <Panel x="240" y="80" w="180" h="40" r="10" fill={color.white} />
    <Panel x="240" y="130" w="220" h="40" r="10" fill={color.white} />
    <Panel x="240" y="180" w="160" h="40" r="10" fill={color.white} />
    {/* Lifebuoy */}
    <circle cx="560" cy="220" r="36" fill={color.white} />
    <circle cx="560" cy="220" r="22" fill={color.amber400} />
    <path d="M560 182v16M560 242v-16M522 220h16M582 220h-16" stroke={color.amber400} strokeWidth="6" />
  </svg>
);

/* Enforcement */
const EnforcementSVG = (props) => (
  <svg viewBox="0 0 740 360" role="img" aria-label="Enforcement & Penalties Illustration" className="w-full h-auto" {...props}>
    <Panel x="0" y="0" w="740" h="360" r="20" fill={color.indigo100} />
    {/* Gavel */}
    <path d="M160 220l80-60" stroke={color.indigo600} strokeWidth="14" strokeLinecap="round" />
    <Panel x="100" y="240" w="160" h="18" r="9" fill={color.slate700} />
    {/* Audit trail file */}
    <Panel x="420" y="80" w="180" h="220" r="12" fill={color.white} stroke={color.indigo400} sw="3" />
    <Panel x="444" y="110" w="120" h="12" r="6" fill={color.indigo400} />
    <Panel x="444" y="136" w="120" h="12" r="6" fill={color.indigo400} />
    <Panel x="444" y="162" w="84" h="12" r="6" fill={color.indigo400} />
  </svg>
);

/* Future */
const FutureSVG = (props) => (
  <svg viewBox="0 0 740 360" role="img" aria-label="Future-Proofing & Scalability Illustration" className="w-full h-auto" {...props}>
    <BG id="gF" from={color.indigo100} to={color.cyan100} />
    <Panel x="0" y="0" w="740" h="360" r="20" fill="url(#gF)" />
    <path d="M140 240c60-48 108-48 144 0" stroke={color.indigo600} strokeWidth="6" fill="none" />
    <circle cx="212" cy="220" r="6" fill={color.indigo600} />
    {/* Blocks/modules */}
    <Panel x="420" y="140" w="60" h="60" r="10" fill={color.cyan500} />
    <Panel x="490" y="140" w="60" h="60" r="10" fill={color.indigo400} />
    <Panel x="460" y="210" w="60" h="60" r="10" fill={color.emerald400} />
  </svg>
);

/* Conclusion */
const ConclusionSVG = (props) => (
  <svg viewBox="0 0 740 360" role="img" aria-label="Conclusion Illustration" className="w-full h-auto" {...props}>
    <Panel x="0" y="0" w="740" h="360" r="20" fill={color.cyan100} />
    {/* Flag + laurel */}
    <Panel x="120" y="70" w="14" h="160" r="7" fill={color.indigo600} />
    <path d="M134 72h120l-20 22 20 22H134z" fill={color.cyan500} />
    <path d="M520 240c-40-24-60-48-60-72 0-24 20-48 60-72" stroke={color.emerald400} strokeWidth="6" fill="none" />
    <path d="M520 240c40-24 60-48 60-72 0-24-20-48-60-72" stroke={color.emerald400} strokeWidth="6" fill="none" />
  </svg>
);

/* Contact */
const ContactSVG = (props) => (
  <svg viewBox="0 0 740 360" role="img" aria-label="Contact Illustration" className="w-full h-auto" {...props}>
    <BG id="gC" from={color.cyan100} to={color.indigo100} />
    <Panel x="0" y="0" w="740" h="360" r="20" fill="url(#gC)" />
    <Panel x="120" y="110" w="220" h="140" r="16" fill={color.white} />
    <Panel x="160" y="140" w="140" h="14" r="7" fill={color.cyan500} />
    <Panel x="160" y="168" w="100" h="12" r="6" fill={color.indigo400} />
    {/* Headset */}
    <circle cx="520" cy="180" r="26" fill="#FFD3C2" />
    <path d="M488 180a32 32 0 0 1 64 0" stroke={color.slate900} strokeWidth="6" fill="none" />
    <path d="M548 188 l22 10" stroke={color.slate900} strokeWidth="6" strokeLinecap="round" />
  </svg>
);

/* -------------------- Feature Section Wrapper (parallax + reveal) -------------------- */
const FeatureSection = ({ id, title, bullets, SVG, reverse = false }) => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start 80%", "end 20%"] });
  const y = useSpring(useTransform(scrollYProgress, [0, 1], [20, -20]), { stiffness: 120, damping: 20 });
  const opacity = useTransform(scrollYProgress, [0, 1], [0.6, 1]);

  return (
    <section id={id} ref={ref} className="mt-12 md:mt-16">
      <motion.div
        style={{ opacity }}
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        className={`grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-10 items-center`}
      >
        <motion.div style={{ y }} className={`relative ${reverse ? "md:order-2" : "md:order-1"}`}>
          <div
            className="absolute -inset-2 rounded-2xl bg-gradient-to-tr from-cyan-100 via-indigo-100 to-emerald-100 blur-xl"
            aria-hidden="true"
          />
          <div className="relative rounded-2xl border border-gray-200 bg-white p-4 shadow-sm">
            <SVG />
          </div>
        </motion.div>

        <div className={`${reverse ? "md:order-1" : "md:order-2"}`}>
          <h2 className="text-xl sm:text-2xl font-semibold text-gray-900">{title}</h2>
          <ul className="mt-3 space-y-2 text-gray-700 list-disc pl-5 sm:pl-6">
            {bullets.map((b, i) => (
              <li key={i} className="leading-relaxed">
                {b}
              </li>
            ))}
          </ul>
        </div>
      </motion.div>
    </section>
  );
};

/* -------------------- Page -------------------- */
export default function AdminStativeDepartment() {
  const { container, itemUp } = useAnims();

  const heroRef = useRef(null);
  const { scrollYProgress } = useScroll({ target: heroRef, offset: ["start start", "end start"] });
  const heroY = useTransform(scrollYProgress, [0, 1], [0, -40]); // gentle parallax up

  // Map string names to SVG components
  const svgMap = {
    PurposeSVG,
    ResponsibilitiesSVG,
    GovernanceSVG,
    LegalBackboneSVG,
    VendorSVG,
    DigitalSecuritySVG,
    ESGSVG,
    PrivacySVG,
    RiskSVG,
    EnforcementSVG,
    FutureSVG,
    ConclusionSVG,
    ContactSVG,
  };

  return (
    <motion.section
      id="top"
      variants={container}
      initial="hidden"
      animate="show"
      className="relative max-w-6xl mx-auto px-4 sm:px-6 md:px-8 py-10 sm:py-14"
    >
      {/* Breadcrumb */}
      <motion.nav variants={itemUp} className="text-sm text-gray-500 mb-4" aria-label="Breadcrumb">
        <Link to="/" className="hover:underline">
          Home
        </Link>
        <span aria-hidden="true"> › </span>
        <Link to="/department" className="hover:underline">
          Departments
        </Link>
        <span aria-hidden="true"> › </span>
        <span className="text-gray-700" aria-current="page">
          {data.title}
        </span>
      </motion.nav>

      {/* Hero with parallax illustration */}
      <div ref={heroRef} className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-10 items-center">
        <motion.div variants={itemUp}>
          <h1 className="text-2xl sm:text-3xl font-bold text-gray-900">
            {data.title} <span className="text-gray-500 font-semibold">({data.shortName})</span>
          </h1>
          <p className="mt-2 text-gray-700">{data.summary}</p>
          <p className="mt-3 text-cyan-800 font-medium">{data.tagline}</p>

          {/* Quick Pills */}
          <div className="mt-4 flex flex-wrap gap-2">
            {["Compliance", "Governance", "Records", "Vendors", "ESG"].map((pill) => (
              <span
                key={pill}
                className="px-3 py-1.5 text-xs sm:text-sm rounded-full bg-cyan-100 text-cyan-800 border border-cyan-200"
              >
                {pill}
              </span>
            ))}
          </div>
        </motion.div>

        <motion.div style={{ y: heroY }} variants={itemUp} className="relative">
          <div
            className="absolute -inset-2 rounded-2xl bg-gradient-to-tr from-cyan-100 via-indigo-100 to-emerald-100 blur-xl"
            aria-hidden="true"
          />
          <div className="relative rounded-2xl border border-gray-200 bg-white p-4 shadow-sm">
            <AdminHeroSVG />
          </div>
        </motion.div>
      </div>

      {/* All sections as BIG feature blocks with alternating layout */}
      <div className="mt-10">
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
        className="mt-12"
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
