// // src/pages/ourDepartments/CyberInvestigationDepartment.jsx
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
//   const reduce = useReducedMotion();
//   const container = {
//     hidden: { opacity: 0 },
//     show: {
//       opacity: 1,
//       transition: reduce
//         ? { duration: 0 }
//         : { duration: 0.25, when: "beforeChildren", staggerChildren: 0.06 },
//     },
//   };
//   const itemUp = {
//     hidden: { opacity: 0, y: reduce ? 0 : 12 },
//     show: { opacity: 1, y: 0, transition: { duration: reduce ? 0 : 0.28 } },
//   };
//   return { container, itemUp };
// };

// /* -------------------- Palette -------------------- */
// const color = {
//   cyan50: "#ECFEFF", cyan100: "#CFFAFE", cyan300: "#67E8F9", cyan500: "#06B6D4",
//   indigo100: "#E0E7FF", indigo300: "#A5B4FC", indigo400: "#818CF8", indigo600: "#4F46E5",
//   emerald100: "#D1FAE5", emerald300: "#6EE7B7", emerald400: "#34D399",
//   amber100: "#FEF3C7", amber300: "#FCD34D", amber400: "#F59E0B",
//   rose100: "#FFE4E6", rose300: "#FDA4AF", rose400: "#FB7185",
//   slate500: "#64748B", slate700: "#334155",
//   white: "#FFFFFF",
// };

// /* -------------------- Page Data (FULL charter mapped) -------------------- */
// const data = {
//   title: "Cyber Investigation Department",
//   shortName: "Investigation",
//   tagline: "Uncovering Truth, Securing Justice, and Defending the Digital Nation.",
//   summary:
//     "Core unit for detection, forensics, investigation, evidence governance, legal liaison, awareness, collaboration, and R&D—executed with strict compliance and ethical standards.",
//   sections: [
//     {
//       id: "introduction",
//       heading: "Introduction",
//       desc: "Mandate, ethics, and future-ready approach with tech + legal compliance.",
//       bullets: [
//         "Detects, prevents, and supports prosecution of cybercrime with investigative excellence.",
//         "Integrates advanced tech, legal compliance, and global best practices.",
//         "Acts as watchdog + protector of public trust with professional, ethical conduct.",
//       ],
//       svg: "IntroSVG",
//     },
//     {
//       id: "purpose",
//       heading: "1. Purpose & Scope",
//       desc: "Central authority for cyber offense investigations across non-profit + commercial services.",
//       bullets: [
//         "Detect and document cybercrime with precision and integrity.",
//         "Assist LEAs/courts; partner victims of fraud, harassment, and exploitation.",
//         "Provide intelligence to security bodies; build advanced methodologies and protocols.",
//       ],
//       svg: "PurposeSVG",
//     },
//     {
//       id: "detection",
//       heading: "2.1 Cybercrime Detection & Intelligence",
//       desc: "OSINT, open/deep/dark web monitoring, predictive analytics, CERT-In coordination.",
//       bullets: [
//         "Monitor open/deep/dark web; collect lawful intelligence via OSINT.",
//         "Analyze emails, social media, messaging apps for threat signals.",
//         "Share intelligence with CERT-In and security agencies; detect emerging patterns.",
//       ],
//       svg: "DetectionSVG",
//     },
//     {
//       id: "forensics",
//       heading: "2.2 Digital Forensics",
//       desc: "CoC, multi-device/cloud forensics, recovery, ISO/IEC 27037/27043 compliance.",
//       bullets: [
//         "Preserve evidence with Chain of Custody; image and verify artefacts.",
//         "Forensics on computers, mobiles, IoT, and cloud; recover deleted/encrypted data.",
//         "Court-admissible reports aligned to ISO/IEC standards.",
//       ],
//       svg: "ForensicsSVG",
//     },
//     {
//       id: "investigation",
//       heading: "2.3 Cybercrime Investigation",
//       desc: "Identity theft, phishing, ransomware, breaches—victim support + FIR/court guidance.",
//       bullets: [
//         "Lead investigations across fraud typologies with victim-centric protocols.",
//         "Guide FIRs, affidavits, and submissions; interpret technical evidence for LEAs and courts.",
//         "Respect privacy and human rights across all procedures.",
//       ],
//       svg: "InvestigationSVG",
//     },
//     {
//       id: "evidence",
//       heading: "2.4 Evidence Management",
//       desc: "Secure storage (physical/digital), access control, encryption, and audit trails.",
//       bullets: [
//         "Central repository with tamper-evident logs and periodic audits.",
//         "Role-based access, encryption at rest/in transit; escrowed hashes.",
//         "Immutable documentation of movements in the evidence chain.",
//       ],
//       svg: "EvidenceSVG",
//     },
//     {
//       id: "legal",
//       heading: "2.5 Legal Liaison & Compliance",
//       desc: "IT Act, DPDP, IPC; expert statements; support prosecutors and defense with tech clarity.",
//       bullets: [
//         "Advise LEAs on cyber laws; draft affidavits and expert witness statements.",
//         "Ensure compliance with IT Act 2000, DPDP 2023, IPC 1860, global privacy laws.",
//         "Bridge technical–legal gaps during trial prep and proceedings.",
//       ],
//       svg: "LiaisonSVG",
//     },
//     {
//       id: "awareness",
//       heading: "2.6 Awareness & Training",
//       desc: "Public awareness, LEA/judiciary/corporate trainings, research publications.",
//       bullets: [
//         "Campaigns for cyber safety and digital literacy; multilingual content.",
//         "Workshops for police, judiciary, and corporates; interactive e-learning modules.",
//         "Publish research and reports to inform policy and practice.",
//       ],
//       svg: "AwarenessSVG",
//     },
//     {
//       id: "collab",
//       heading: "2.7 Collaboration (National & International)",
//       desc: "Interpol/cross-border cooperation, joint task forces, secure info sharing.",
//       bullets: [
//         "Partnerships with govt, NGOs, CSIRTs, and global agencies.",
//         "Cross-border cooperation with Interpol and allied bodies.",
//         "Confidential frameworks for intel sharing and joint investigations.",
//       ],
//       svg: "CollabSVG",
//     },
//     {
//       id: "research",
//       heading: "2.8 Technology & Research",
//       desc: "AI, blockchain, deepfake/crypto crime trends, indigenous tools for India.",
//       bullets: [
//         "R&D on AI-assisted triage, anomaly detection, and automated workflows.",
//         "Indigenous forensic tooling tuned to local ecosystem and languages.",
//         "Track deepfakes, crypto crimes, and cyber-terror trends.",
//       ],
//       svg: "ResearchSVG",
//     },
//     {
//       id: "confidentiality",
//       heading: "3. Confidentiality & Ethics",
//       desc: "Strict NDA, privacy, and ethical conduct—breach = disciplinary + legal action.",
//       bullets: [
//         "Mandatory NDAs; need-to-know access; redaction policies.",
//         "Breach reporting under IT Act/IPC; zero tolerance for unauthorized disclosure.",
//         "Professional code of ethics upheld in every engagement.",
//       ],
//       svg: "EthicsSVG",
//     },
//     {
//       id: "ir",
//       heading: "4. Incident Response & Crisis Handling",
//       desc: "CIRT activation, ransomware/phish/breach escalation, BCP/DR, post-incident RCA.",
//       bullets: [
//         "CIRT for major incidents; rapid escalation playbooks.",
//         "Coordinate with internal/external stakeholders for continuity.",
//         "RCA and lessons-learned to strengthen readiness.",
//       ],
//       svg: "IRSVG",
//     },
//     {
//       id: "tasks",
//       heading: "5. Daily / Weekly / Monthly Tasks",
//       desc: "Ops cadence for intel, response, reviews, reporting, outreach, auditing.",
//       bullets: [
//         "Daily: monitor intel + dark web; respond to urgent incidents and victim calls.",
//         "Weekly: internal debriefs; case reviews; reports to leadership/LEAs.",
//         "Monthly: awareness drives, workshops; evidence system audits and compliance checks.",
//       ],
//       svg: "CadenceSVG",
//     },
//     {
//       id: "legal-framework",
//       heading: "6. Legal Framework & References",
//       desc: "IT Act, IPC, DPDP, Evidence Act, CrPC, ISO/IEC 27037/41/42/43, UN conventions.",
//       bullets: [
//         "IT Act 2000 & Amendments; IPC 1860; DPDP 2023; Evidence Act 1872; CrPC 1973.",
//         "ISO/IEC 27037/27041/27042/27043—global forensic standards.",
//         "UN Convention on Cybercrime and international treaties.",
//       ],
//       svg: "LawSVG",
//     },
//     {
//       id: "conclusion",
//       heading: "7. Conclusion",
//       desc: "Why this department matters to national cyber safety and public trust.",
//       bullets: [
//         "Combines investigative craft, legal rigor, and innovative tech to defend society.",
//         "Delivers integrity, transparency, and justice—building national cyber resilience.",
//       ],
//       svg: "ConclusionSVG",
//     },
//     {
//       id: "disclaimer",
//       heading: "8. Legal Disclaimer",
//       desc: "Auto-updates with law/tech/strategy changes; statute prevails on conflict.",
//       bullets: [
//         "Charter evolves with legal and technological shifts.",
//         "In any conflict, statutory provisions shall prevail.",
//       ],
//       svg: "DisclaimerSVG",
//     },
//   ],
// };

// /* -------------------- Shared SVG defs (no borders/shadows) -------------------- */
// const Defs = () => (
//   <defs>
//     <linearGradient id="gCI" x1="0" y1="0" x2="1" y2="1">
//       <stop offset="0" stopColor={color.cyan100} />
//       <stop offset="1" stopColor={color.indigo100} />
//     </linearGradient>
//     <linearGradient id="gOk" x1="0" y1="0" x2="1" y2="0">
//       <stop offset="0" stopColor={color.emerald300} />
//       <stop offset="1" stopColor={color.emerald400} />
//     </linearGradient>
//     <linearGradient id="gWarn" x1="0" y1="0" x2="1" y2="0">
//       <stop offset="0" stopColor={color.amber300} />
//       <stop offset="1" stopColor={color.amber400} />
//     </linearGradient>
//     <pattern id="gridDots" width="8" height="8" patternUnits="userSpaceOnUse">
//       <circle cx="1.5" cy="1.5" r="1.5" fill={color.indigo100} />
//     </pattern>
//   </defs>
// );

// /* -------------------- HERO (no box, no border, no shadow) -------------------- */
// const InvestigationHeroSVG = () => (
//   <svg viewBox="0 0 760 520" role="img" aria-labelledby="invHeroTitle invHeroDesc" className="w-full h-auto">
//     <title id="invHeroTitle">Cyber Investigation Illustration</title>
//     <desc id="invHeroDesc">Radar, network graph, fingerprint, and magnifier symbolizing surveillance, attribution, and proof.</desc>
//     <Defs />
//     <g opacity="0.35">
//       <ellipse cx="200" cy="150" rx="160" ry="70" fill="url(#gCI)" />
//       <ellipse cx="540" cy="140" rx="140" ry="60" fill={color.emerald100} />
//       <ellipse cx="380" cy="440" rx="220" ry="50" fill={color.cyan50} />
//     </g>
//     <g transform="translate(80,120)">
//       <circle cx="140" cy="100" r="100" fill="none" stroke={color.indigo300} strokeWidth="2" />
//       <circle cx="140" cy="100" r="70" fill="none" stroke={color.indigo100} strokeWidth="2" />
//       <circle cx="140" cy="100" r="40" fill="none" stroke={color.indigo100} strokeWidth="2" />
//       <path d="M140 100 L220 60" stroke={color.cyan500} strokeWidth="4" />
//       <circle cx="220" cy="60" r="6" fill={color.cyan500} />
//     </g>
//     <g transform="translate(420,120)">
//       <circle cx="40" cy="40" r="10" fill={color.indigo400} />
//       <circle cx="120" cy="30" r="10" fill={color.emerald400} />
//       <circle cx="90" cy="90" r="10" fill={color.amber400} />
//       <circle cx="160" cy="100" r="10" fill={color.cyan500} />
//       <path d="M40 40L120 30L90 90L160 100L40 40" stroke={color.slate700} strokeWidth="3" fill="none" />
//     </g>
//     <g transform="translate(540,280)">
//       <circle cx="30" cy="30" r="30" fill={color.white} />
//       <path d="M15 25c4-8 16-10 24-6c10 6 12 20 4 30M21 36c3-6 12-8 18-5c7 4 9 14 3 20" stroke={color.slate700} strokeWidth="2" fill="none" />
//       <circle cx="120" cy="40" r="28" fill={color.white} />
//       <path d="M140 60l20 20" stroke={color.slate700} strokeWidth="6" strokeLinecap="round" />
//     </g>
//   </svg>
// );

// /* -------------------- Complex Section SVGs (no boxes) -------------------- */
// const IntroSVG = () => (
//   <svg viewBox="0 0 740 360" role="img" aria-label="Introduction" className="w-full h-full">
//     <Defs />
//     <rect x="0" y="0" width="740" height="360" rx="24" fill="url(#gCI)" />
//     <rect x="60" y="80" width="240" height="160" rx="16" fill="url(#gridDots)" />
//     <g transform="translate(360,100)">
//       <path d="M0 40c60-30 120-30 180 0" stroke={color.emerald400} strokeWidth="6" fill="none" />
//       <circle cx="0" cy="40" r="8" fill={color.emerald400} />
//       <circle cx="180" cy="40" r="8" fill={color.emerald400} />
//     </g>
//   </svg>
// );

// const PurposeSVG = () => (
//   <svg viewBox="0 0 740 360" role="img" aria-label="Purpose & Scope" className="w-full h-full">
//     <Defs />
//     <rect x="0" y="0" width="740" height="360" rx="24" fill={color.emerald100} />
//     <circle cx="160" cy="180" r="60" fill={color.white} />
//     <circle cx="160" cy="180" r="18" fill={color.indigo600} />
//     <rect x="320" y="110" width="14" height="140" rx="7" fill={color.indigo600} />
//     <path d="M334 112h120l-20 22 20 22H334z" fill={color.cyan500} />
//     <path d="M520 140h100" stroke="#334155" strokeWidth="6" />
//     <path d="M520 180h80" stroke="#334155" strokeWidth="6" />
//   </svg>
// );

// const DetectionSVG = () => (
//   <svg viewBox="0 0 740 360" role="img" aria-label="Detection & Intelligence" className="w-full h-full">
//     <Defs />
//     <rect x="0" y="0" width="740" height="360" rx="24" fill={color.indigo100} />
//     <g transform="translate(120,80)">
//       <circle cx="120" cy="100" r="100" fill="none" stroke={color.indigo300} strokeWidth="2" />
//       <path d="M120 100L200 50" stroke={color.cyan500} strokeWidth="4" />
//       <circle cx="200" cy="50" r="8" fill={color.cyan500} />
//     </g>
//     <g transform="translate(420,100)">
//       <circle cx="40" cy="40" r="10" fill={color.indigo400} />
//       <circle cx="120" cy="30" r="10" fill={color.emerald400} />
//       <circle cx="90" cy="90" r="10" fill={color.amber400} />
//       <path d="M40 40L120 30L90 90Z" stroke="#334155" strokeWidth="3" fill="none" />
//     </g>
//   </svg>
// );

// const ForensicsSVG = () => (
//   <svg viewBox="0 0 740 360" role="img" aria-label="Digital Forensics" className="w-full h-full">
//     <Defs />
//     <rect x="0" y="0" width="740" height="360" rx="24" fill={color.cyan100} />
//     <circle cx="140" cy="180" r="20" fill={color.emerald400} />
//     <circle cx="260" cy="180" r="20" fill={color.emerald400} />
//     <circle cx="380" cy="180" r="20" fill={color.emerald400} />
//     <circle cx="500" cy="180" r="20" fill={color.emerald400} />
//     <path d="M160 180h80M280 180h80M400 180h80" stroke={color.emerald400} strokeWidth="6" />
//     <rect x="540" y="120" width="140" height="120" rx="18" fill={color.white} />
//     <path d="M560 160h100M560 190h80" stroke="#334155" strokeWidth="6" />
//   </svg>
// );

// const InvestigationSVG = () => (
//   <svg viewBox="0 0 740 360" role="img" aria-label="Investigation" className="w-full h-full">
//     <Defs />
//     <rect x="0" y="0" width="740" height="360" rx="24" fill="url(#gCI)" />
//     <path d="M160 220h220v-100h-120l-20-20h-80z" fill={color.white} />
//     <circle cx="520" cy="170" r="46" fill={color.white} />
//     <path d="M540 190l26 26" stroke="#334155" strokeWidth="6" strokeLinecap="round" />
//   </svg>
// );

// const EvidenceSVG = () => (
//   <svg viewBox="0 0 740 360" role="img" aria-label="Evidence Management" className="w-full h-full">
//     <Defs />
//     <rect x="0" y="0" width="740" height="360" rx="24" fill={color.emerald100} />
//     <circle cx="200" cy="180" r="70" fill={color.white} />
//     <circle cx="200" cy="180" r="18" fill={color.indigo600} />
//     <path d="M320 140h260M320 180h220M320 220h240" stroke={color.indigo100} strokeWidth="8" />
//   </svg>
// );

// const LiaisonSVG = () => (
//   <svg viewBox="0 0 740 360" role="img" aria-label="Legal Liaison & Compliance" className="w-full h-full">
//     <Defs />
//     <rect x="0" y="0" width="740" height="360" rx="24" fill={color.indigo100} />
//     <path d="M120 90v180M80 140h80" stroke={color.indigo600} strokeWidth="6" />
//     <rect x="300" y="90" width="220" height="180" rx="18" fill={color.white} />
//     <path d="M330 130h160M330 160h120" stroke="#334155" strokeWidth="6" />
//   </svg>
// );

// const AwarenessSVG = () => (
//   <svg viewBox="0 0 740 360" role="img" aria-label="Awareness & Training" className="w-full h-full">
//     <Defs />
//     <rect x="0" y="0" width="740" height="360" rx="24" fill={color.amber100} />
//     <rect x="120" y="90" width="240" height="140" rx="14" fill={color.white} />
//     <path d="M120 240h240" stroke="#334155" strokeWidth="6" />
//     <path d="M520 180l60 20v-80l-60 20z" fill={color.white} />
//     <path d="M580 200v40" stroke="#334155" strokeWidth="6" />
//   </svg>
// );

// const CollabSVG = () => (
//   <svg viewBox="0 0 740 360" role="img" aria-label="Collaboration" className="w-full h-full">
//     <Defs />
//     <rect x="0" y="0" width="740" height="360" rx="24" fill={color.cyan100} />
//     <circle cx="200" cy="180" r="80" fill="none" stroke={color.indigo300} strokeWidth="2" />
//     <path d="M120 180h160M200 100v160" stroke={color.indigo100} strokeWidth="2" />
//     <circle cx="520" cy="160" r="10" fill={color.emerald400} />
//     <circle cx="560" cy="220" r="10" fill={color.cyan500} />
//     <path d="M520 160L560 220" stroke="#334155" strokeWidth="3" />
//   </svg>
// );

// const ResearchSVG = () => (
//   <svg viewBox="0 0 740 360" role="img" aria-label="Technology & Research" className="w-full h-full">
//     <Defs />
//     <rect x="0" y="0" width="740" height="360" rx="24" fill="url(#gWarn)" />
//     <rect x="140" y="110" width="160" height="140" rx="18" fill={color.white} />
//     <rect x="172" y="142" width="96" height="76" rx="10" fill={color.indigo100} />
//     <g transform="translate(420,140)">
//       <rect x="0" y="0" width="60" height="60" rx="10" fill="url(#gOk)" />
//       <rect x="80" y="0" width="60" height="60" rx="10" fill="url(#gWarn)" />
//       <path d="M60 30h20" stroke="#334155" strokeWidth="6" strokeLinecap="round" />
//     </g>
//   </svg>
// );

// const EthicsSVG = () => (
//   <svg viewBox="0 0 740 360" role="img" aria-label="Confidentiality & Ethics" className="w-full h-full">
//     <Defs />
//     <path />
//     <rect x="0" y="0" width="740" height="360" rx="24" fill={color.rose100} />
//     <path d="M220 160v-20a26 26 0 0 1 52 0v20" stroke={color.indigo600} strokeWidth="6" fill="none" />
//     <rect x="208" y="160" width="92" height="100" rx="16" fill={color.white} />
//     <path d="M460 220c50-20 50-80 0-100" stroke="#334155" strokeWidth="6" fill="none" />
//   </svg>
// );

// const IRSVG = () => (
//   <svg viewBox="0 0 740 360" role="img" aria-label="Incident Response" className="w-full h-full">
//     <Defs />
//     <rect x="0" y="0" width="740" height="360" rx="24" fill={color.indigo100} />
//     <path d="M160 210h160v-80h-160z" fill={color.white} />
//     <path d="M160 210h160" stroke={color.rose400} strokeWidth="10" />
//     <path d="M420 180h200" stroke={color.emerald400} strokeWidth="6" />
//     <path d="M420 220h160" stroke={color.cyan500} strokeWidth="6" />
//   </svg>
// );

// const CadenceSVG = () => (
//   <svg viewBox="0 0 740 360" role="img" aria-label="Operational Cadence" className="w-full h-full">
//     <Defs />
//     <rect x="0" y="0" width="740" height="360" rx="24" fill={color.emerald100} />
//     <rect x="120" y="90" width="240" height="180" rx="18" fill={color.white} />
//     <path d="M120 140h240M180 90v180M240 90v180M300 90v180" stroke={color.indigo100} strokeWidth="2" />
//     <g transform="translate(420,120)">
//       <circle cx="40" cy="40" r="30" fill={color.white} />
//       <path d="M28 42l12 12 22-22" stroke={color.emerald400} strokeWidth="6" fill="none" strokeLinecap="round" />
//     </g>
//   </svg>
// );

// const LawSVG = () => (
//   <svg viewBox="0 0 740 360" role="img" aria-label="Legal Framework" className="w-full h-full">
//     <Defs />
//     <rect x="0" y="0" width="740" height="360" rx="24" fill="url(#gCI)" />
//     <rect x="120" y="110" width="200" height="120" rx="14" fill={color.white} />
//     <rect x="360" y="110" width="260" height="120" rx="14" fill={color.white} />
//     <rect x="380" y="140" width="200" height="12" rx="6" fill="#334155" />
//     <rect x="380" y="166" width="160" height="12" rx="6" fill={color.indigo300} />
//   </svg>
// );

// const ConclusionSVG = () => (
//   <svg viewBox="0 0 740 360" role="img" aria-label="Conclusion" className="w-full h-full">
//     <Defs />
//     <rect x="0" y="0" width="740" height="360" rx="24" fill={color.cyan100} />
//     <rect x="120" y="70" width="14" height="160" rx="7" fill={color.indigo600} />
//     <path d="M134 72h120l-20 22 20 22H134z" fill={color.cyan500} />
//     <path d="M520 240c-40-24-60-48-60-72 0-24 20-48 60-72" stroke={color.emerald400} strokeWidth="6" fill="none" />
//     <path d="M520 240c40-24 60-48 60-72 0-24-20-48-60-72" stroke={color.emerald400} strokeWidth="6" fill="none" />
//   </svg>
// );

// const DisclaimerSVG = () => (
//   <svg viewBox="0 0 740 360" role="img" aria-label="Legal Disclaimer" className="w-full h-full">
//     <Defs />
//     <rect x="0" y="0" width="740" height="360" rx="24" fill={color.amber100} />
//     <rect x="260" y="90" width="220" height="180" rx="18" fill={color.white} />
//     <rect x="290" y="120" width="160" height="12" rx="6" fill={color.slate500} />
//     <rect x="290" y="146" width="120" height="12" rx="6" fill={color.indigo300} />
//   </svg>
// );

// /* -------------------- Section Wrapper (no boxes; parallax + reveal) -------------------- */
// const FeatureSection = ({ id, title, desc, bullets, SVG, reverse = false }) => {
//   const ref = useRef(null);
//   const { scrollYProgress } = useScroll({ target: ref, offset: ["start 80%", "end 20%"] });
//   const y = useSpring(useTransform(scrollYProgress, [0, 1], [20, -20]), { stiffness: 120, damping: 20 });
//   const opacity = useTransform(scrollYProgress, [0, 1], [0.6, 1]);

//   return (
//     <section id={id} ref={ref} className="mt-8 sm:mt-10 md:mt-12 lg:mt-16">
//       <motion.div
//         style={{ opacity }}
//         initial={{ opacity: 0, y: 16 }}
//         whileInView={{ opacity: 1, y: 0 }}
//         viewport={{ once: true, margin: "-80px" }}
//         className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-6 md:gap-8 lg:gap-10 items-center"
//       >
//         <motion.div style={{ y }} className={`${reverse ? "md:order-2" : "md:order-1"} min-w-0`}>
//           <div className="w-full h-auto max-h-64 sm:max-h-80 md:max-h-none overflow-hidden">
//             <SVG />
//           </div>
//         </motion.div>

//         <div className={`${reverse ? "md:order-1" : "md:order-2"} min-w-0`}>
//           <h2 className="text-[20px] sm:text-2xl font-semibold text-gray-900 leading-snug">{title}</h2>
//           {desc && <p className="mt-1 text-[14px] sm:text-[15px] text-gray-600">{desc}</p>}
//           <ul className="mt-2.5 sm:mt-3 space-y-1.5 sm:space-y-2 text-gray-700 list-disc pl-5 sm:pl-6">
//             {bullets.map((b, i) => (
//               <li key={i} className="leading-relaxed text-[15px] sm:text-base">{b}</li>
//             ))}
//           </ul>
//         </div>
//       </motion.div>
//     </section>
//   );
// };

// /* -------------------- Page (simple; no right menu) -------------------- */
// export default function CyberInvestigationDepartment() {
//   const { container, itemUp } = useAnims();
//   const heroRef = useRef(null);
//   const { scrollYProgress } = useScroll({ target: heroRef, offset: ["start start", "end start"] });
//   const heroY = useTransform(scrollYProgress, [0, 1], [0, -40]);

//   const svgMap = {
//     IntroSVG,
//     PurposeSVG,
//     DetectionSVG,
//     ForensicsSVG,
//     InvestigationSVG,
//     EvidenceSVG,
//     LiaisonSVG,
//     AwarenessSVG,
//     CollabSVG,
//     ResearchSVG,
//     EthicsSVG,
//     IRSVG,
//     CadenceSVG,
//     LawSVG,
//     ConclusionSVG,
//     DisclaimerSVG,
//   };

//   return (
//     <motion.section
//       id="top"
//       variants={container}
//       initial="hidden"
//       animate="show"
//       className="relative max-w-6xl mx-auto px-4 sm:px-6 md:px-8 py-8 sm:py-10 md:py-12 lg:py-14"
//     >
//       {/* Breadcrumb */}
//       <motion.nav variants={itemUp} className="text-xs sm:text-sm text-gray-500 mb-3 sm:mb-4" aria-label="Breadcrumb">
//         <Link to="/" className="hover:underline">Home</Link>
//         <span aria-hidden="true"> › </span>
//         <Link to="/department" className="hover:underline">Departments</Link>
//         <span aria-hidden="true"> › </span>
//         <span className="text-gray-700" aria-current="page">{data.title}</span>
//       </motion.nav>

//       {/* Hero */}
//       <div ref={heroRef} className="grid grid-cols-1 gap-5 sm:gap-6 md:gap-8 lg:gap-10 items-start">
//         <motion.div variants={itemUp}>
//           <h1 className="text-[22px] sm:text-3xl font-bold text-gray-900">
//             {data.title} <span className="text-gray-500 font-semibold">({data.shortName})</span>
//           </h1>
//           <p className="mt-1.5 sm:mt-2 text-gray-700 text-[15px] sm:text-base">{data.summary}</p>
//           <p className="mt-2 sm:mt-3 text-cyan-800 font-medium text-[15px] sm:text-base">{data.tagline}</p>

//           <motion.div style={{ y: heroY }} className="mt-4 sm:mt-5">
//             <div className="w-full h-auto max-h-72 sm:max-h-80 md:max-h-none overflow-hidden">
//               <InvestigationHeroSVG />
//             </div>
//           </motion.div>
//         </motion.div>
//       </div>

//       {/* Sections */}
//       <div className="mt-8 sm:mt-10 md:mt-12">
//         {data.sections.map((sec, idx) => {
//           const SVGComp = svgMap[sec.svg] ?? IntroSVG;
//           return (
//             <FeatureSection
//               key={sec.id}
//               id={sec.id}
//               title={sec.heading}
//               desc={sec.desc}
//               bullets={sec.bullets}
//               SVG={SVGComp}
//               reverse={idx % 2 === 1}
//             />
//           );
//         })}
//       </div>

//       {/* Back link */}
//       <motion.div
//         initial={{ opacity: 0, y: 16 }}
//         whileInView={{ opacity: 1, y: 0 }}
//         viewport={{ once: true }}
//         className="mt-10 md:mt-12"
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
//     </motion.section>
//   );
// }

// src/pages/ourDepartments/CyberInvestigationDepartment.jsx
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
  indigo100: "#E0E7FF", indigo300: "#A5B4FC", indigo400: "#818CF8", indigo600: "#4F46E5",
  emerald100: "#D1FAE5", emerald300: "#6EE7B7", emerald400: "#34D399",
  amber100: "#FEF3C7", amber300: "#FCD34D", amber400: "#F59E0B",
  rose100: "#FFE4E6", rose300: "#FDA4AF", rose400: "#FB7185",
  slate500: "#64748B", slate700: "#334155",
  white: "#FFFFFF",
};

/* -------------------- Page Data (FULL charter mapped) -------------------- */
const data = {
  title: "Cyber Investigation Department",
  shortName: "Investigation",
  tagline: "Uncovering Truth, Securing Justice, and Defending the Digital Nation.",
  summary:
    "Core unit for detection, forensics, investigation, evidence governance, legal liaison, awareness, collaboration, and R&D—executed with strict compliance and ethical standards.",
  sections: [
    {
      id: "introduction",
      heading: "Introduction",
      desc: "Mandate, ethics, and future-ready approach with tech + legal compliance.",
      bullets: [
        "Detects, prevents, and supports prosecution of cybercrime with investigative excellence.",
        "Integrates advanced tech, legal compliance, and global best practices.",
        "Acts as watchdog + protector of public trust with professional, ethical conduct.",
      ],
      svg: "IntroSVG",
    },
    {
      id: "purpose",
      heading: "1. Purpose & Scope",
      desc: "Central authority for cyber offense investigations across non-profit + commercial services.",
      bullets: [
        "Detect and document cybercrime with precision and integrity.",
        "Assist LEAs/courts; partner victims of fraud, harassment, and exploitation.",
        "Provide intelligence to security bodies; build advanced methodologies and protocols.",
      ],
      svg: "PurposeSVG",
    },
    {
      id: "detection",
      heading: "2.1 Cybercrime Detection & Intelligence",
      desc: "OSINT, open/deep/dark web monitoring, predictive analytics, CERT-In coordination.",
      bullets: [
        "Monitor open/deep/dark web; collect lawful intelligence via OSINT.",
        "Analyze emails, social media, messaging apps for threat signals.",
        "Share intelligence with CERT-In and security agencies; detect emerging patterns.",
      ],
      svg: "DetectionSVG",
    },
    {
      id: "forensics",
      heading: "2.2 Digital Forensics",
      desc: "CoC, multi-device/cloud forensics, recovery, ISO/IEC 27037/27043 compliance.",
      bullets: [
        "Preserve evidence with Chain of Custody; image and verify artefacts.",
        "Forensics on computers, mobiles, IoT, and cloud; recover deleted/encrypted data.",
        "Court-admissible reports aligned to ISO/IEC standards.",
      ],
      svg: "ForensicsSVG",
    },
    {
      id: "investigation",
      heading: "2.3 Cybercrime Investigation",
      desc: "Identity theft, phishing, ransomware, breaches—victim support + FIR/court guidance.",
      bullets: [
        "Lead investigations across fraud typologies with victim-centric protocols.",
        "Guide FIRs, affidavits, and submissions; interpret technical evidence for LEAs and courts.",
        "Respect privacy and human rights across all procedures.",
      ],
      svg: "InvestigationSVG",
    },
    {
      id: "evidence",
      heading: "2.4 Evidence Management",
      desc: "Secure storage (physical/digital), access control, encryption, and audit trails.",
      bullets: [
        "Central repository with tamper-evident logs and periodic audits.",
        "Role-based access, encryption at rest/in transit; escrowed hashes.",
        "Immutable documentation of movements in the evidence chain.",
      ],
      svg: "EvidenceSVG",
    },
    {
      id: "legal",
      heading: "2.5 Legal Liaison & Compliance",
      desc: "IT Act, DPDP, IPC; expert statements; support prosecutors and defense with tech clarity.",
      bullets: [
        "Advise LEAs on cyber laws; draft affidavits and expert witness statements.",
        "Ensure compliance with IT Act 2000, DPDP 2023, IPC 1860, global privacy laws.",
        "Bridge technical–legal gaps during trial prep and proceedings.",
      ],
      svg: "LiaisonSVG",
    },
    {
      id: "awareness",
      heading: "2.6 Awareness & Training",
      desc: "Public awareness, LEA/judiciary/corporate trainings, research publications.",
      bullets: [
        "Campaigns for cyber safety and digital literacy; multilingual content.",
        "Workshops for police, judiciary, and corporates; interactive e-learning modules.",
        "Publish research and reports to inform policy and practice.",
      ],
      svg: "AwarenessSVG",
    },
    {
      id: "collab",
      heading: "2.7 Collaboration (National & International)",
      desc: "Interpol/cross-border cooperation, joint task forces, secure info sharing.",
      bullets: [
        "Partnerships with govt, NGOs, CSIRTs, and global agencies.",
        "Cross-border cooperation with Interpol and allied bodies.",
        "Confidential frameworks for intel sharing and joint investigations.",
      ],
      svg: "CollabSVG",
    },
    {
      id: "research",
      heading: "2.8 Technology & Research",
      desc: "AI, blockchain, deepfake/crypto crime trends, indigenous tools for India.",
      bullets: [
        "R&D on AI-assisted triage, anomaly detection, and automated workflows.",
        "Indigenous forensic tooling tuned to local ecosystem and languages.",
        "Track deepfakes, crypto crimes, and cyber-terror trends.",
      ],
      svg: "ResearchSVG",
    },
    {
      id: "confidentiality",
      heading: "3. Confidentiality & Ethics",
      desc: "Strict NDA, privacy, and ethical conduct—breach = disciplinary + legal action.",
      bullets: [
        "Mandatory NDAs; need-to-know access; redaction policies.",
        "Breach reporting under IT Act/IPC; zero tolerance for unauthorized disclosure.",
        "Professional code of ethics upheld in every engagement.",
      ],
      svg: "EthicsSVG",
    },
    {
      id: "ir",
      heading: "4. Incident Response & Crisis Handling",
      desc: "CIRT activation, ransomware/phish/breach escalation, BCP/DR, post-incident RCA.",
      bullets: [
        "CIRT for major incidents; rapid escalation playbooks.",
        "Coordinate with internal/external stakeholders for continuity.",
        "RCA and lessons-learned to strengthen readiness.",
      ],
      svg: "IRSVG",
    },
    {
      id: "tasks",
      heading: "5. Daily / Weekly / Monthly Tasks",
      desc: "Ops cadence for intel, response, reviews, reporting, outreach, auditing.",
      bullets: [
        "Daily: monitor intel + dark web; respond to urgent incidents and victim calls.",
        "Weekly: internal debriefs; case reviews; reports to leadership/LEAs.",
        "Monthly: awareness drives, workshops; evidence system audits and compliance checks.",
      ],
      svg: "CadenceSVG",
    },
    {
      id: "legal-framework",
      heading: "6. Legal Framework & References",
      desc: "IT Act, IPC, DPDP, Evidence Act, CrPC, ISO/IEC 27037/41/42/43, UN conventions.",
      bullets: [
        "IT Act 2000 & Amendments; IPC 1860; DPDP 2023; Evidence Act 1872; CrPC 1973.",
        "ISO/IEC 27037/27041/27042/27043—global forensic standards.",
        "UN Convention on Cybercrime and international treaties.",
      ],
      svg: "LawSVG",
    },
    {
      id: "conclusion",
      heading: "7. Conclusion",
      desc: "Why this department matters to national cyber safety and public trust.",
      bullets: [
        "Combines investigative craft, legal rigor, and innovative tech to defend society.",
        "Delivers integrity, transparency, and justice—building national cyber resilience.",
      ],
      svg: "ConclusionSVG",
    },
    {
      id: "disclaimer",
      heading: "8. Legal Disclaimer",
      desc: "Auto-updates with law/tech/strategy changes; statute prevails on conflict.",
      bullets: [
        "Charter evolves with legal and technological shifts.",
        "In any conflict, statutory provisions shall prevail.",
      ],
      svg: "DisclaimerSVG",
    },
  ],
};

/* -------------------- Shared defs -------------------- */
const Defs = () => (
  <defs>
    <linearGradient id="gCI" x1="0" y1="0" x2="1" y2="1">
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
    <pattern id="dots" width="10" height="10" patternUnits="userSpaceOnUse">
      <circle cx="2" cy="2" r="2" fill={color.indigo100} />
    </pattern>
  </defs>
);

/* -------------------- PEOPLE PRIMITIVES -------------------- */
const Person = ({ x = 0, y = 0, size = 1, tone = "#0F172A" }) => (
  <g transform={`translate(${x},${y}) scale(${size})`} fill={tone}>
    <circle cx="0" cy="-18" r="10" />
    <path d="M-14 0c2-12 12-18 14-18s12 6 14 18v30h-28z" />
  </g>
);

/* -------------------- HERO -------------------- */
const InvestigationHeroSVG = () => (
  <svg viewBox="0 0 760 320" className="w-full h-auto" role="img" aria-label="Investigation hero">
    <Defs />
    {/* soft gradients */}
    <g opacity="0.35">
      <ellipse cx="180" cy="90" rx="150" ry="56" fill="url(#gCI)" />
      <ellipse cx="560" cy="90" rx="140" ry="56" fill={color.emerald100} />
    </g>
    {/* analyst with magnifier + radar + network */}
    <Person x={160} y={210} size={1.1} tone={color.slate700} />
    <g transform="translate(225,170)">
      <circle cx="0" cy="0" r="40" fill={color.white} />
      <circle cx="0" cy="0" r="24" fill={color.cyan100} />
      <path d="M18 18l26 26" stroke={color.slate700} strokeWidth="6" strokeLinecap="round" />
    </g>
    <g transform="translate(460,160)">
      <circle cx="0" cy="0" r="60" fill="none" stroke={color.indigo300} strokeWidth="2" />
      <circle cx="0" cy="0" r="34" fill="none" stroke={color.indigo100} strokeWidth="2" />
      <path d="M0 0L50 -28" stroke={color.cyan500} strokeWidth="4" />
      <circle cx="50" cy="-28" r="6" fill={color.cyan500} />
    </g>
    <g transform="translate(620,160)">
      <circle cx="-20" cy="-20" r="8" fill={color.indigo400} />
      <circle cx="20" cy="-30" r="8" fill={color.emerald400} />
      <circle cx="0" cy="20" r="8" fill={color.amber400} />
      <path d="M-20 -20L20 -30L0 20Z" stroke={color.slate700} strokeWidth="3" fill="none" />
    </g>
  </svg>
);

/* -------------------- SECTION SVGS (each has a person + abstract) -------------------- */
const IntroSVG = () => (
  <svg viewBox="0 0 740 300" className="w-full h-full" role="img" aria-label="Introduction">
    <Defs />
    <Person x={120} y={210} size={1} />
    <g transform="translate(200,80)">
      <rect x="0" y="0" width="220" height="140" rx="16" fill={color.white} />
      <path d="M24 36h172M24 68h132" stroke={color.slate700} strokeWidth="6" />
    </g>
    <g transform="translate(480,70)" opacity="0.75">
      <ellipse cx="0" cy="0" rx="120" ry="44" fill="url(#gCI)" />
      <ellipse cx="0" cy="90" rx="120" ry="44" fill={color.emerald100} />
    </g>
  </svg>
);

const PurposeSVG = () => (
  <svg viewBox="0 0 740 300" className="w-full h-full" role="img" aria-label="Purpose & Scope">
    <Defs />
    <Person x={140} y={210} size={1} />
    <g transform="translate(210,120)">
      <circle cx="0" cy="0" r="56" fill={color.white} />
      <circle cx="0" cy="0" r="18" fill={color.indigo600} />
    </g>
    <g transform="translate(420,70)">
      <rect x="0" y="0" width="14" height="160" rx="7" fill={color.indigo600} />
      <path d="M14 0h140l-22 22 22 22H14z" fill={color.cyan500} />
      <path d="M190 40h110M190 80h80" stroke={color.slate700} strokeWidth="6" />
    </g>
  </svg>
);

const DetectionSVG = () => (
  <svg viewBox="0 0 740 300" className="w-full h-full" role="img" aria-label="Detection & Intelligence">
    <Defs />
    <Person x={110} y={220} size={1} />
    <g transform="translate(200,140)">
      <circle cx="0" cy="0" r="80" fill="none" stroke={color.indigo300} strokeWidth="2" />
      <path d="M0 0L60 -34" stroke={color.cyan500} strokeWidth="4" />
      <circle cx="60" cy="-34" r="7" fill={color.cyan500} />
    </g>
    <g transform="translate(440,100)">
      <circle cx="0" cy="0" r="10" fill={color.indigo400} />
      <circle cx="80" cy="-10" r="10" fill={color.emerald400} />
      <circle cx="50" cy="60" r="10" fill={color.amber400} />
      <path d="M0 0L80 -10L50 60Z" stroke={color.slate700} strokeWidth="3" fill="none" />
    </g>
    <g transform="translate(610,160)">
      <rect x="-40" y="-24" width="80" height="48" rx="10" fill={color.white} />
      <rect x="-28" y="-12" width="56" height="8" rx="4" fill={color.indigo300} />
    </g>
  </svg>
);

const ForensicsSVG = () => (
  <svg viewBox="0 0 740 300" className="w-full h-full" role="img" aria-label="Digital Forensics">
    <Defs />
    <Person x={120} y={220} size={1} />
    <g transform="translate(210,160)">
      <circle cx="-80" cy="0" r="16" fill={color.emerald400} />
      <circle cx="-20" cy="0" r="16" fill={color.emerald400} />
      <circle cx="40" cy="0" r="16" fill={color.emerald400} />
      <circle cx="100" cy="0" r="16" fill={color.emerald400} />
      <path d="M-64 0h28M-4 0h28M56 0h28" stroke={color.emerald400} strokeWidth="6" />
    </g>
    <g transform="translate(460,120)">
      <rect x="0" y="0" width="190" height="120" rx="16" fill={color.white} />
      <path d="M20 40h150M20 70h120" stroke={color.slate700} strokeWidth="6" />
      <circle cx="160" cy="90" r="8" fill={color.indigo600} />
    </g>
  </svg>
);

const InvestigationSVG = () => (
  <svg viewBox="0 0 740 300" className="w-full h-full" role="img" aria-label="Investigation">
    <Defs />
    <Person x={150} y={220} size={1.1} />
    <g transform="translate(230,170)">
      <rect x="-80" y="-50" width="180" height="100" rx="12" fill={color.white} />
      <path d="M-80 -50h80l12 12h88" stroke={color.indigo100} strokeWidth="8" />
    </g>
    <g transform="translate(520,160)">
      <circle cx="0" cy="0" r="38" fill={color.white} />
      <circle cx="0" cy="0" r="22" fill={color.cyan100} />
      <path d="M18 18l24 24" stroke={color.slate700} strokeWidth="6" strokeLinecap="round" />
    </g>
  </svg>
);

const EvidenceSVG = () => (
  <svg viewBox="0 0 740 300" className="w-full h-full" role="img" aria-label="Evidence Management">
    <Defs />
    <Person x={110} y={220} size={1} />
    <g transform="translate(210,150)">
      <circle cx="0" cy="0" r="60" fill={color.white} />
      <circle cx="0" cy="0" r="16" fill={color.indigo600} />
    </g>
    <g transform="translate(420,120)">
      <path d="M0 0h260M0 40h220M0 80h240" stroke={color.indigo100} strokeWidth="10" />
    </g>
  </svg>
);

const LiaisonSVG = () => (
  <svg viewBox="0 0 740 300" className="w-full h-full" role="img" aria-label="Legal Liaison & Compliance">
    <Defs />
    <Person x={120} y={220} size={1} />
    <g transform="translate(210,120)">
      <path d="M0 80V0M-40 40h80" stroke={color.indigo600} strokeWidth="6" />
      <g transform="translate(190,-10)">
        <rect x="0" y="0" width="220" height="160" rx="16" fill={color.white} />
        <path d="M24 36h172M24 68h132" stroke={color.slate700} strokeWidth="6" />
      </g>
    </g>
  </svg>
);

const AwarenessSVG = () => (
  <svg viewBox="0 0 740 300" className="w-full h-full" role="img" aria-label="Awareness & Training">
    <Defs />
    <Person x={140} y={220} size={1} />
    <g transform="translate(220,140)">
      <rect x="-80" y="-40" width="180" height="120" rx="14" fill={color.white} />
      <path d="M-80 60h180" stroke={color.slate700} strokeWidth="6" />
    </g>
    <g transform="translate(520,160)">
      <path d="M0 0l70 22v-90L0 -46z" fill={color.white} />
      <path d="M70 22v40" stroke={color.slate700} strokeWidth="6" />
    </g>
  </svg>
);

const CollabSVG = () => (
  <svg viewBox="0 0 740 300" className="w-full h-full" role="img" aria-label="Collaboration">
    <Defs />
    <Person x={110} y={220} size={1} />
    <g transform="translate(220,150)">
      <circle cx="0" cy="0" r="70" fill="none" stroke={color.indigo300} strokeWidth="2" />
      <path d="M-70 0h140M0 -70v140" stroke={color.indigo100} strokeWidth="2" />
    </g>
    <g transform="translate(500,150)">
      <circle cx="-20" cy="-20" r="9" fill={color.emerald400} />
      <circle cx="30" cy="30" r="9" fill={color.cyan500} />
      <path d="M-20 -20L30 30" stroke={color.slate700} strokeWidth="3" />
    </g>
  </svg>
);

const ResearchSVG = () => (
  <svg viewBox="0 0 740 300" className="w-full h-full" role="img" aria-label="Technology & Research">
    <Defs />
    <Person x={120} y={220} size={1} />
    <g transform="translate(220,120)">
      <rect x="0" y="0" width="160" height="120" rx="18" fill={color.white} />
      <rect x="22" y="30" width="116" height="60" rx="10" fill={color.indigo100} />
    </g>
    <g transform="translate(460,130)">
      <rect x="0" y="0" width="60" height="60" rx="10" fill="url(#gOk)" />
      <rect x="90" y="0" width="60" height="60" rx="10" fill="url(#gWarn)" />
      <path d="M60 30h30" stroke={color.slate700} strokeWidth="6" strokeLinecap="round" />
    </g>
  </svg>
);

const EthicsSVG = () => (
  <svg viewBox="0 0 740 300" className="w-full h-full" role="img" aria-label="Confidentiality & Ethics">
    <Defs />
    <Person x={150} y={220} size={1} />
    <g transform="translate(240,130)">
      <path d="M40 60v-22a26 26 0 0 1 52 0V60" stroke={color.indigo600} strokeWidth="6" fill="none" />
      <rect x="28" y="60" width="92" height="90" rx="16" fill={color.white} />
    </g>
    <g transform="translate(510,160)">
      <path d="M0 40c50-20 50-80 0-100" stroke={color.slate700} strokeWidth="6" fill="none" />
    </g>
  </svg>
);

const IRSVG = () => (
  <svg viewBox="0 0 740 300" className="w-full h-full" role="img" aria-label="Incident Response">
    <Defs />
    <Person x={120} y={220} size={1} />
    <g transform="translate(210,160)">
      <rect x="0" y="-40" width="180" height="80" fill={color.white} />
      <path d="M0 40h180" stroke={color.rose400} strokeWidth="10" />
    </g>
    <g transform="translate(470,150)">
      <path d="M0 0h200M0 40h160" stroke={color.emerald400} strokeWidth="6" />
      <path d="M0 80h140" stroke={color.cyan500} strokeWidth="6" />
    </g>
  </svg>
);

const CadenceSVG = () => (
  <svg viewBox="0 0 740 300" className="w-full h-full" role="img" aria-label="Operational Cadence">
    <Defs />
    <Person x={120} y={220} size={1} />
    <g transform="translate(220,120)">
      <rect x="0" y="0" width="220" height="150" rx="18" fill={color.white} />
      <path d="M0 44h220M44 0v150M88 0v150M132 0v150" stroke={color.indigo100} strokeWidth="2" />
    </g>
    <g transform="translate(520,140)">
      <circle cx="0" cy="0" r="28" fill={color.white} />
      <path d="M-10 2l10 10 20-20" stroke={color.emerald400} strokeWidth="6" fill="none" strokeLinecap="round" />
    </g>
  </svg>
);

const LawSVG = () => (
  <svg viewBox="0 0 740 300" className="w-full h-full" role="img" aria-label="Legal Framework">
    <Defs />
    <Person x={120} y={220} size={1} />
    <g transform="translate(210,110)">
      <rect x="0" y="0" width="190" height="120" rx="14" fill={color.white} />
      <rect x="230" y="0" width="230" height="120" rx="14" fill={color.white} />
      <rect x="250" y="28" width="180" height="12" rx="6" fill={color.slate700} />
      <rect x="250" y="54" width="140" height="12" rx="6" fill={color.indigo300} />
    </g>
    <g transform="translate(520,110)">
      <path d="M0 0v120M-40 40h80" stroke={color.indigo600} strokeWidth="6" />
    </g>
  </svg>
);

const ConclusionSVG = () => (
  <svg viewBox="0 0 740 300" className="w-full h-full" role="img" aria-label="Conclusion">
    <Defs />
    <Person x={150} y={220} size={1.1} />
    <g transform="translate(240,90)">
      <rect x="0" y="0" width="12" height="160" rx="6" fill={color.indigo600} />
      <path d="M12 0h140l-20 22 20 22H12z" fill={color.cyan500} />
    </g>
    <g transform="translate(520,170)">
      <path d="M0 60c-40-24-60-48-60-72 0-24 20-48 60-72" stroke={color.emerald400} strokeWidth="6" fill="none" />
      <path d="M0 60c40-24 60-48 60-72 0-24-20-48-60-72" stroke={color.emerald400} strokeWidth="6" fill="none" />
    </g>
  </svg>
);

const DisclaimerSVG = () => (
  <svg viewBox="0 0 740 300" className="w-full h-full" role="img" aria-label="Legal Disclaimer">
    <Defs />
    <Person x={130} y={220} size={1} />
    <g transform="translate(220,100)">
      <rect x="0" y="0" width="240" height="160" rx="16" fill={color.white} />
      <rect x="28" y="30" width="180" height="10" rx="5" fill={color.slate500} />
      <rect x="28" y="56" width="130" height="10" rx="5" fill={color.indigo300} />
    </g>
    <g transform="translate(520,170)" opacity="0.15">
      <rect x="-120" y="-60" width="240" height="120" rx="18" fill="url(#dots)" />
    </g>
  </svg>
);

/* -------------------- Section Wrapper -------------------- */
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
        <motion.div style={{ y }} className={`${reverse ? "md:order-2" : "md:order-1"} min-w-0`}>
          <div className="w-full h-auto max-h-64 sm:max-h-80 md:max-h-none overflow-hidden">
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

/* -------------------- Page (simple; no right menu) -------------------- */
export default function CyberInvestigationDepartment() {
  const { container, itemUp } = useAnims();
  const heroRef = useRef(null);
  const { scrollYProgress } = useScroll({ target: heroRef, offset: ["start start", "end start"] });
  const heroY = useTransform(scrollYProgress, [0, 1], [0, -40]);

  const svgMap = {
    IntroSVG,
    PurposeSVG,
    DetectionSVG,
    ForensicsSVG,
    InvestigationSVG,
    EvidenceSVG,
    LiaisonSVG,
    AwarenessSVG,
    CollabSVG,
    ResearchSVG,
    EthicsSVG,
    IRSVG,
    CadenceSVG,
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
      <div ref={heroRef} className="grid grid-cols-1 gap-5 sm:gap-6 md:gap-8 lg:gap-10 items-start">
        <motion.div variants={itemUp}>
          <h1 className="text-[22px] sm:text-3xl font-bold text-gray-900">
            {data.title} <span className="text-gray-500 font-semibold">({data.shortName})</span>
          </h1>
          <p className="mt-1.5 sm:mt-2 text-gray-700 text-[15px] sm:text-base">{data.summary}</p>
          <p className="mt-2 sm:mt-3 text-cyan-800 font-medium text-[15px] sm:text-base">{data.tagline}</p>

          <motion.div style={{ y: heroY }} className="mt-4 sm:mt-5">
            <div className="w-full h-auto max-h-72 sm:max-h-80 md:max-h-none overflow-hidden">
              <InvestigationHeroSVG />
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
