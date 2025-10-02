// // src/pages/ourDepartments/ITDepartment.jsx
// import React, { useRef } from "react";
// import { Link } from "react-router-dom";
// import {
//   motion,
//   useReducedMotion,
//   useScroll,
//   useTransform,
//   useSpring,
// } from "framer-motion";

// /* -------------------- Motion (respects reduced motion) -------------------- */
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
//   indigo100: "#E0E7FF", indigo300: "#A5B4FC", indigo400: "#818CF8", indigo600: "#4F46E5", indigo700:"#4338CA",
//   emerald100: "#D1FAE5", emerald300: "#6EE7B7", emerald400: "#34D399",
//   amber100: "#FEF3C7", amber300: "#FCD34D", amber400: "#F59E0B",
//   rose100: "#FFE4E6", rose300: "#FDA4AF", rose400: "#FB7185",
//   slate400: "#94A3B8", slate500: "#64748B", slate700: "#334155",
//   white: "#FFFFFF",
// };

// /* -------------------- Page Data -------------------- */
// const data = {
//   title: "Information Technology (IT) Department",
//   shortName: "IT",
//   tagline: "Driving Innovation, Securing Systems, and Powering Digital Trust.",
//   summary:
//     "Backbone for infrastructure, security, software, data, networks, support, policy, and R&D—fully aligned with law and global standards.",
//   sections: [
//     {
//       id: "introduction",
//       heading: "Introduction",
//       desc: "Backbone of CRCCF’s tech stack—resilience, innovation, and lawful operations.",
//       bullets: [
//         "Supports investigations, awareness, training, and collaboration platforms.",
//         "Guards sensitive info and enforces cyber-lawful operations.",
//         "Builds secure-by-design services for scale and trust."
//       ],
//       svg: "IntroSVG",
//     },
//     {
//       id: "purpose",
//       heading: "1. Purpose & Scope",
//       desc: "Establish a secure, scalable, innovative technology environment across CRCCF.",
//       bullets: [
//         "Plan, implement, and govern all IT initiatives with legal/ethical controls.",
//         "Manage assets, data integrity, transformation, and cyber capability uplift.",
//         "Own platform reliability, performance, and total cost stewardship."
//       ],
//       svg: "PurposeSVG",
//     },

//     /* ---------- 2. Core Responsibilities ---------- */
//     {
//       id: "infra",
//       heading: "2.1 Infrastructure Management",
//       desc: "Servers, networks, cloud, observability, BCP/DR, and audits.",
//       bullets: [
//         "Design/deploy/maintain infra across on-prem + cloud; IaC preferred.",
//         "AI-driven monitoring; SLOs + alert hygiene; capacity planning.",
//         "BCP/DR tested; quarterly infra + security audits with findings tracked."
//       ],
//       svg: "InfraSVG",
//     },
//     {
//       id: "security",
//       heading: "2.2 Cybersecurity & Data Protection",
//       desc: "Defense-in-depth, compliance (IT Act, DPDP, ISO 27001), CERT-In ready.",
//       bullets: [
//         "Layered controls: IDS/IPS, WAF, EDR/XDR, SIEM, MFA, least privilege.",
//         "Policy + awareness + IR plan aligned to CERT-In with 6-hour reporting.",
//         "Privacy-by-design and encryption end-to-end; DLP and key management."
//       ],
//       svg: "SecuritySVG",
//     },
//     {
//       id: "devsecops",
//       heading: "2.3 Software Dev & Maintenance (DevSecOps)",
//       desc: "Secure SDLC, CI/CD, SCA/SAST/DAST, licensing hygiene, OWASP.",
//       bullets: [
//         "Version control, protected branches, signed releases, SBOMs.",
//         "Automated code reviews; vuln management with fix SLAs.",
//         "Secure portals and APIs with throttling, scopes, and audit trails."
//       ],
//       svg: "DevSVG",
//     },
//     {
//       id: "data",
//       heading: "2.4 Database & Information Management",
//       desc: "Confidentiality, integrity, availability; blockchain attest and legal admissibility.",
//       bullets: [
//         "Hardened DBs, least-privilege roles, PITR backups, archivals.",
//         "Tamper-evidence via hash anchors/blockchain for critical records.",
//         "Evidence processes aligned with Indian Evidence Act, 1872."
//       ],
//       svg: "DataSVG",
//     },
//     {
//       id: "network",
//       heading: "2.5 Network Administration",
//       desc: "LAN/WAN/VPN/Cloud networking, redundancy, and pen tests.",
//       bullets: [
//         "Zero-trust segmentation; secure VPN; DNSSEC; hardened edges.",
//         "Redundant paths + load balancing for high availability.",
//         "Regular internal/external pen tests with tracked remediation."
//       ],
//       svg: "NetworkSVG",
//     },
//     {
//       id: "helpdesk",
//       heading: "2.6 User Support & IT Helpdesk",
//       desc: "24×7 support, ticket SLAs, IT hygiene programs.",
//       bullets: [
//         "Tiered helpdesk, self-service KB, automated onboarding/offboarding.",
//         "Asset lifecycle tracking with EDR and patch rollouts.",
//         "Quarterly cyber hygiene + phishing drills."
//       ],
//       svg: "HelpdeskSVG",
//     },
//     {
//       id: "policy",
//       heading: "2.7 IT Policy & Compliance",
//       desc: "Data privacy, acceptable use, BYOD, global frameworks; annual reviews.",
//       bullets: [
//         "Draft, publish, and enforce policies with attestations and audits.",
//         "Map to ISO 27001, NIST CSF; DPDP, GDPR alignment where applicable.",
//         "Policy rev cycle: yearly or upon major legal/tech shifts."
//       ],
//       svg: "PolicySVG",
//     },
//     {
//       id: "rnd",
//       heading: "2.8 Research & Innovation",
//       desc: "AI, blockchain, cloud-native pilots for cybercrime prevention/investigation.",
//       bullets: [
//         "PoCs with academia and partners; measure value & risks.",
//         "MLOps baselines for responsible/secure AI usage.",
//         "Publish learnings; templatize wins for scale."
//       ],
//       svg: "RnDSVG",
//     },

//     /* ---------- 3–7 ---------- */
//     {
//       id: "ethics",
//       heading: "3. Confidentiality & Cyber Ethics",
//       desc: "Strict NDA, access controls, misuse = disciplinary + legal action.",
//       bullets: [
//         "Need-to-know + JIT access; aggressive logging and redaction.",
//         "Prohibit shadow IT; register approved tools and vendors.",
//         "Report breaches under IT Act/IPC timelines."
//       ],
//       svg: "EthicsSVG",
//     },
//     {
//       id: "csirt",
//       heading: "4. Incident Response & Crisis Management",
//       desc: "CSIRT + CERT-In coordination, blockchain audit trails.",
//       bullets: [
//         "Detect, contain, eradicate; post-incident RCA with action owners.",
//         "Crisis comms runbook; exec dashboards; tabletop exercises.",
//         "Immutable event trails for transparency and traceability."
//       ],
//       svg: "CsirtSVG",
//     },
//     {
//       id: "legal",
//       heading: "5. Legal References",
//       desc: "IT Act 2000/2008, DPDP 2023, IPC, Evidence Act 1872, ISO 27001/NIST, GDPR, CERT-In.",
//       bullets: [
//         "Maintain master register of binding controls and citations.",
//         "Map controls to clauses; keep evidence for audits.",
//         "Refresh on amendments; notify stakeholders."
//       ],
//       svg: "LawSVG",
//     },
//     {
//       id: "conclusion",
//       heading: "6. Conclusion",
//       desc: "Integrity, resilience, innovation—tech that earns public trust.",
//       bullets: [
//         "Enables CRCCF mission with secure platforms and reliable ops.",
//         "Balances speed with compliance and defense-in-depth."
//       ],
//       svg: "ConclusionSVG",
//     },
//     {
//       id: "disclaimer",
//       heading: "7. Legal Disclaimer",
//       desc: "Statutes prevail; document updates with legal/tech shifts.",
//       bullets: [
//         "This framework evolves with regulation and risk.",
//         "Where conflict exists, statutory law rules."
//       ],
//       svg: "DisclaimerSVG",
//     },
//   ],
// };

// /* -------------------- Shared SVG defs + Person primitive -------------------- */
// const Defs = () => (
//   <defs>
//     <linearGradient id="gCool" x1="0" y1="0" x2="1" y2="1">
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
//       <circle cx="1.5" cy="1.5" r="1.3" fill={color.indigo100} />
//     </pattern>
//   </defs>
// );

// const Person = ({ x = 0, y = 0, size = 1, tone = "#0F172A" }) => (
//   <g transform={`translate(${x},${y}) scale(${size})`} fill={tone}>
//     <circle cx="0" cy="-18" r="10" />
//     <path d="M-14 0c2-12 12-18 14-18s12 6 14 18v30h-28z" />
//     <rect x="-18" y="30" width="36" height="6" rx="3" fill={color.indigo300} />
//   </g>
// );

// /* -------------------- HERO SVG (complex) -------------------- */
// const ITHeroSVG = () => (
//   <svg viewBox="0 0 780 320" className="w-full h-auto" role="img" aria-label="IT hero">
//     <Defs />
//     {/* soft fields */}
//     <g opacity="0.35">
//       <ellipse cx="200" cy="90" rx="160" ry="56" fill="url(#gCool)" />
//       <ellipse cx="580" cy="90" rx="160" ry="56" fill={color.emerald100} />
//     </g>

//     {/* person at console */}
//     <Person x={160} y={220} size={1.1} tone={color.slate700} />
//     <g transform="translate(230,150)">
//       <rect x="-90" y="-50" width="200" height="120" rx="16" fill={color.white} />
//       <rect x="-66" y="-22" width="72" height="10" rx="5" fill={color.indigo300} />
//       <rect x="20" y="-22" width="120" height="10" rx="5" fill={color.slate400} />
//       <rect x="-66" y="2" width="160" height="10" rx="5" fill={color.slate400} />
//       <rect x="-66" y="26" width="100" height="10" rx="5" fill={color.cyan300} />
//     </g>

//     {/* cloud + shield + connections */}
//     <g transform="translate(520,150)">
//       <path d="M-80 0c0-22 18-40 40-40 9 0 17 3 24 8 6-10 17-16 30-16 20 0 36 16 36 36 0 2 0 4-1 6h-129z"
//         fill={color.white}/>
//       <path d="M40 -8l0 52 34 -14 34 14 0 -52c0-18-34-30-34-30s-34 12-34 30z" fill={color.indigo600}/>
//       <circle cx="-120" cy="10" r="6" fill={color.emerald400}/>
//       <circle cx="-100" cy="30" r="6" fill={color.cyan500}/>
//       <path d="M-120 10L-80 0M-100 30L-80 0" stroke={color.slate700} strokeWidth="3"/>
//     </g>

//     {/* pipeline */}
//     <g transform="translate(640,190)">
//       <rect x="-40" y="-10" width="80" height="20" rx="10" fill={color.indigo100}/>
//       <rect x="50" y="-10" width="80" height="20" rx="10" fill={color.amber100}/>
//       <path d="M40 0h10" stroke={color.slate700} strokeWidth="6" strokeLinecap="round"/>
//     </g>
//   </svg>
// );

// /* -------------------- Section SVGs (each: person + abstract) -------------------- */
// const IntroSVG = () => (
//   <svg viewBox="0 0 740 300" className="w-full h-full" role="img" aria-label="Introduction">
//     <Defs />
//     <Person x={120} y={220} size={1} />
//     <g transform="translate(200,90)">
//       <rect x="0" y="0" width="240" height="140" rx="16" fill={color.white} />
//       <path d="M24 36h192M24 68h152" stroke={color.slate700} strokeWidth="6" />
//     </g>
//     <g transform="translate(500,70)" opacity="0.7">
//       <ellipse cx="0" cy="0" rx="120" ry="42" fill="url(#gCool)" />
//       <ellipse cx="0" cy="90" rx="120" ry="42" fill={color.emerald100} />
//     </g>
//   </svg>
// );

// const PurposeSVG = () => (
//   <svg viewBox="0 0 740 300" className="w-full h-full" role="img" aria-label="Purpose & Scope">
//     <Defs />
//     <Person x={130} y={220} size={1}/>
//     {/* Scope rings + roadmap flag */}
//     <g transform="translate(220,130)">
//       <circle cx="0" cy="0" r="60" fill={color.white}/>
//       <circle cx="0" cy="0" r="18" fill={color.indigo700}/>
//     </g>
//     <g transform="translate(420,80)">
//       <rect x="0" y="0" width="12" height="160" rx="6" fill={color.indigo600}/>
//       <path d="M12 0h140l-22 22 22 22H12z" fill={color.cyan500}/>
//       <path d="M188 40h110M188 80h80" stroke={color.slate700} strokeWidth="6"/>
//     </g>
//   </svg>
// );

// const InfraSVG = () => (
//   <svg viewBox="0 0 740 300" className="w-full h-full" role="img" aria-label="Infrastructure">
//     <Defs />
//     <Person x={110} y={220} size={1}/>
//     {/* server racks + cloud + graph */}
//     <g transform="translate(200,120)">
//       <rect x="-80" y="-30" width="70" height="140" rx="10" fill={color.white}/>
//       <rect x="10" y="-30" width="70" height="140" rx="10" fill={color.white}/>
//       <rect x="-70" y="-20" width="50" height="10" rx="5" fill={color.indigo300}/>
//       <rect x="20" y="-20" width="50" height="10" rx="5" fill={color.indigo300}/>
//       <rect x="-70" y="10" width="50" height="10" rx="5" fill={color.slate400}/>
//       <rect x="20" y="10" width="50" height="10" rx="5" fill={color.slate400}/>
//     </g>
//     <g transform="translate(470,140)">
//       <path d="M-80 0c0-22 18-40 40-40 9 0 17 3 24 8 6-10 17-16 30-16 20 0 36 16 36 36 0 2 0 4-1 6h-129z"
//         fill={color.white}/>
//       <path d="M-80 40c40-20 80-20 120 0" stroke={color.emerald400} strokeWidth="6" fill="none"/>
//     </g>
//   </svg>
// );

// const SecuritySVG = () => (
//   <svg viewBox="0 0 740 300" className="w-full h-full" role="img" aria-label="Security">
//     <Defs />
//     <Person x={130} y={220} size={1}/>
//     <g transform="translate(210,120)">
//       {/* SIEM panel */}
//       <rect x="-80" y="-40" width="200" height="140" rx="16" fill={color.white}/>
//       <path d="M-60 0c30-20 60-20 90 0s60 20 90 0" stroke={color.cyan500} strokeWidth="6" fill="none"/>
//       <rect x="-60" y="40" width="160" height="10" rx="5" fill={color.slate400}/>
//     </g>
//     {/* shield */}
//     <g transform="translate(520,150)">
//       <path d="M0 -10l0 60 36 -16 36 16 0 -60c0-20-36-34-36-34s-36 14-36 34z" fill={color.indigo600}/>
//       <circle cx="36" cy="12" r="8" fill={color.white}/>
//     </g>
//   </svg>
// );

// const DevSVG = () => (
//   <svg viewBox="0 0 740 300" className="w-full h-full" role="img" aria-label="DevSecOps">
//     <Defs />
//     <Person x={120} y={220} size={1}/>
//     {/* pipeline + code blocks */}
//     <g transform="translate(210,140)">
//       <rect x="-90" y="-40" width="220" height="120" rx="16" fill={color.white}/>
//       <rect x="-70" y="-18" width="80" height="12" rx="6" fill={color.indigo300}/>
//       <rect x="20" y="-18" width="100" height="12" rx="6" fill={color.slate400}/>
//       <rect x="-70" y="10" width="160" height="12" rx="6" fill={color.slate400}/>
//       <rect x="-70" y="38" width="110" height="12" rx="6" fill={color.cyan300}/>
//     </g>
//     <g transform="translate(520,160)">
//       <rect x="-40" y="-10" width="80" height="20" rx="10" fill={color.indigo100}/>
//       <rect x="50" y="-10" width="80" height="20" rx="10" fill={color.amber100}/>
//       <path d="M40 0h10" stroke={color.slate700} strokeWidth="6" strokeLinecap="round"/>
//     </g>
//   </svg>
// );

// const DataSVG = () => (
//   <svg viewBox="0 0 740 300" className="w-full h-full" role="img" aria-label="Data Management">
//     <Defs />
//     <Person x={110} y={220} size={1}/>
//     {/* database + chain/hash */}
//     <g transform="translate(210,130)">
//       <ellipse cx="0" cy="-40" rx="70" ry="20" fill={color.white}/>
//       <rect x="-70" y="-40" width="140" height="100" rx="16" fill={color.white}/>
//       <ellipse cx="0" cy="60" rx="70" ry="20" fill={color.white}/>
//       <rect x="-56" y="-10" width="112" height="10" rx="5" fill={color.indigo300}/>
//     </g>
//     <g transform="translate(500,150)">
//       <rect x="0" y="0" width="62" height="62" rx="10" fill="url(#gOk)"/>
//       <rect x="90" y="0" width="62" height="62" rx="10" fill="url(#gWarn)"/>
//       <path d="M62 31h28" stroke={color.slate700} strokeWidth="6" strokeLinecap="round"/>
//     </g>
//   </svg>
// );

// const NetworkSVG = () => (
//   <svg viewBox="0 0 740 300" className="w-full h-full" role="img" aria-label="Network">
//     <Defs />
//     <Person x={120} y={220} size={1}/>
//     {/* nodes + links + edge */}
//     <g transform="translate(210,150)">
//       <circle cx="0" cy="0" r="10" fill={color.emerald400}/>
//       <circle cx="80" cy="-40" r="10" fill={color.cyan500}/>
//       <circle cx="120" cy="40" r="10" fill={color.indigo400}/>
//       <circle cx="40" cy="60" r="10" fill={color.amber400}/>
//       <path d="M0 0L80 -40L120 40L40 60L0 0" stroke={color.slate700} strokeWidth="3" fill="none"/>
//     </g>
//     <g transform="translate(520,150)">
//       <rect x="-80" y="-20" width="160" height="40" rx="20" fill={color.white}/>
//       <path d="M-60 0h120" stroke={color.indigo100} strokeWidth="10"/>
//     </g>
//   </svg>
// );

// const HelpdeskSVG = () => (
//   <svg viewBox="0 0 740 300" className="w-full h-full" role="img" aria-label="Helpdesk">
//     <Defs />
//     <Person x={130} y={220} size={1}/>
//     <g transform="translate(220,130)">
//       <rect x="-80" y="-36" width="200" height="120" rx="16" fill={color.white}/>
//       <path d="M-60 -6h160M-60 22h120" stroke={color.slate700} strokeWidth="6"/>
//       <circle cx="80" cy="46" r="6" fill={color.cyan500}/>
//     </g>
//     {/* headset bubble */}
//     <g transform="translate(530,150)">
//       <circle cx="0" cy="0" r="40" fill={color.white}/>
//       <path d="M-18 -4a22 22 0 0 1 44 0M-22 -4v20M22 -4v20M-10 24h20" stroke={color.slate700} strokeWidth="6" fill="none"/>
//     </g>
//   </svg>
// );

// const PolicySVG = () => (
//   <svg viewBox="0 0 740 300" className="w-full h-full" role="img" aria-label="Policy">
//     <Defs />
//     <Person x={120} y={220} size={1}/>
//     <g transform="translate(210,120)">
//       <rect x="-80" y="-40" width="200" height="140" rx="16" fill={color.white}/>
//       <path d="M-60 -10h160M-60 18h120M-60 46h100" stroke={color.slate700} strokeWidth="6"/>
//     </g>
//     <g transform="translate(520,160)">
//       <path d="M0 40c-26-12-26-48 0-60M0 40c26-12 26-48 0-60" stroke={color.indigo600} strokeWidth="6" fill="none"/>
//       <rect x="30" y="-26" width="120" height="52" rx="10" fill={color.white}/>
//     </g>
//   </svg>
// );

// const RnDSVG = () => (
//   <svg viewBox="0 0 740 300" className="w-full h-full" role="img" aria-label="R&D">
//     <Defs />
//     <Person x={120} y={220} size={1}/>
//     <g transform="translate(220,120)">
//       <rect x="0" y="0" width="160" height="120" rx="18" fill={color.white}/>
//       <rect x="22" y="30" width="116" height="60" rx="10" fill={color.indigo100}/>
//     </g>
//     <g transform="translate(470,140)">
//       <rect x="0" y="0" width="60" height="60" rx="10" fill="url(#gOk)"/>
//       <rect x="90" y="0" width="60" height="60" rx="10" fill="url(#gWarn)"/>
//       <path d="M60 30h30" stroke={color.slate700} strokeWidth="6" strokeLinecap="round"/>
//     </g>
//   </svg>
// );

// const EthicsSVG = () => (
//   <svg viewBox="0 0 740 300" className="w-full h-full" role="img" aria-label="Ethics">
//     <Defs />
//     <Person x={140} y={220} size={1}/>
//     <g transform="translate(230,130)">
//       <path d="M40 60v-22a26 26 0 0 1 52 0V60" stroke={color.indigo600} strokeWidth="6" fill="none"/>
//       <rect x="28" y="60" width="92" height="90" rx="16" fill={color.white}/>
//     </g>
//     <g transform="translate(520,150)">
//       <rect x="-90" y="-40" width="180" height="120" rx="16" fill={color.white}/>
//       <rect x="-66" y="-12" width="132" height="10" rx="5" fill={color.slate400}/>
//       <rect x="-66" y="16" width="92" height="10" rx="5" fill={color.indigo300}/>
//     </g>
//   </svg>
// );

// const CsirtSVG = () => (
//   <svg viewBox="0 0 740 300" className="w-full h-full" role="img" aria-label="CSIRT">
//     <Defs />
//     <Person x={120} y={220} size={1}/>
//     <g transform="translate(210,160)">
//       <rect x="0" y="-40" width="180" height="80" fill={color.white}/>
//       <path d="M0 40h180" stroke={color.rose400} strokeWidth="10"/>
//     </g>
//     <g transform="translate(500,150)">
//       <path d="M0 0h200M0 40h160M0 80h140" stroke={color.emerald400} strokeWidth="6"/>
//     </g>
//   </svg>
// );

// const LawSVG = () => (
//   <svg viewBox="0 0 740 300" className="w-full h-full" role="img" aria-label="Legal References">
//     <Defs />
//     <Person x={120} y={220} size={1}/>
//     <g transform="translate(210,110)">
//       <rect x="0" y="0" width="190" height="120" rx="14" fill={color.white}/>
//       <rect x="230" y="0" width="230" height="120" rx="14" fill={color.white}/>
//       <rect x="250" y="28" width="180" height="12" rx="6" fill={color.slate700}/>
//       <rect x="250" y="54" width="140" height="12" rx="6" fill={color.indigo300}/>
//     </g>
//     <g transform="translate(520,110)">
//       <path d="M0 0v120M-40 40h80" stroke={color.indigo600} strokeWidth="6"/>
//     </g>
//   </svg>
// );

// const ConclusionSVG = () => (
//   <svg viewBox="0 0 740 300" className="w-full h-full" role="img" aria-label="Conclusion">
//     <Defs />
//     <Person x={150} y={220} size={1.1}/>
//     <g transform="translate(240,90)">
//       <rect x="0" y="0" width="12" height="160" rx="6" fill={color.indigo600}/>
//       <path d="M12 0h140l-20 22 20 22H12z" fill={color.cyan500}/>
//     </g>
//     <g transform="translate(520,170)">
//       <path d="M0 60c-40-24-60-48-60-72 0-24 20-48 60-72" stroke={color.emerald400} strokeWidth="6" fill="none"/>
//       <path d="M0 60c40-24 60-48 60-72 0-24-20-48-60-72" stroke={color.emerald400} strokeWidth="6" fill="none"/>
//     </g>
//   </svg>
// );

// const DisclaimerSVG = () => (
//   <svg viewBox="0 0 740 300" className="w-full h-full" role="img" aria-label="Disclaimer">
//     <Defs />
//     <Person x={130} y={220} size={1}/>
//     <g transform="translate(220,100)">
//       <rect x="0" y="0" width="240" height="160" rx="16" fill={color.white}/>
//       <rect x="28" y="30" width="180" height="10" rx="5" fill={color.slate500}/>
//       <rect x="28" y="56" width="130" height="10" rx="5" fill={color.indigo300}/>
//     </g>
//     <g transform="translate(520,170)" opacity="0.15">
//       <rect x="-120" y="-60" width="240" height="120" rx="18" fill="url(#gridDots)"/>
//     </g>
//   </svg>
// );

// /* -------------------- Section Wrapper -------------------- */
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

// /* -------------------- Page -------------------- */
// export default function ITDepartment() {
//   const { container, itemUp } = useAnims();
//   const heroRef = useRef(null);
//   const { scrollYProgress } = useScroll({ target: heroRef, offset: ["start start", "end start"] });
//   const heroY = useTransform(scrollYProgress, [0, 1], [0, -40]);

//   const svgMap = {
//     IntroSVG,
//     PurposeSVG,
//     InfraSVG,
//     SecuritySVG,
//     DevSVG,
//     DataSVG,
//     NetworkSVG,
//     HelpdeskSVG,
//     PolicySVG,
//     RnDSVG,
//     EthicsSVG,
//     CsirtSVG,
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
//               <ITHeroSVG />
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

// src/pages/ourDepartments/ITDepartment.jsx
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
  indigo50:"#EEF2FF", indigo100: "#E0E7FF", indigo300: "#A5B4FC", indigo400: "#818CF8", indigo600: "#4F46E5", indigo700:"#4338CA",
  emerald100: "#D1FAE5", emerald300: "#6EE7B7", emerald400: "#34D399",
  amber100: "#FEF3C7", amber300: "#FCD34D", amber400: "#F59E0B",
  rose100: "#FFE4E6", rose400: "#FB7185",
  slate200:"#E2E8F0", slate300:"#CBD5E1", slate400: "#94A3B8", slate500: "#64748B", slate700: "#334155", slate900:"#0F172A",
  white: "#FFFFFF",
};

/* -------------------- Page Data -------------------- */
const data = {
  title: "Information Technology (IT) Department",
  shortName: "IT",
  tagline: "Driving Innovation, Securing Systems, and Powering Digital Trust.",
  summary:
    "Backbone for infrastructure, security, software, data, networks, support, policy, and R&D—fully aligned with law and global standards.",
  sections: [
    {
      id: "introduction",
      heading: "Introduction",
      desc: "Backbone of CRCCF’s tech stack—resilience, innovation, and lawful operations.",
      bullets: [
        "Supports investigations, awareness, training, and collaboration platforms.",
        "Guards sensitive info and enforces cyber-lawful operations.",
        "Builds secure-by-design services for scale and trust."
      ],
      svg: "IntroSVG",
    },
    {
      id: "purpose",
      heading: "1. Purpose & Scope",
      desc: "Establish a secure, scalable, innovative technology environment across CRCCF.",
      bullets: [
        "Plan, implement, and govern all IT initiatives with legal/ethical controls.",
        "Manage assets, data integrity, transformation, and cyber capability uplift.",
        "Own platform reliability, performance, and total cost stewardship."
      ],
      svg: "PurposeSVG",
    },

    /* ---------- 2. Core Responsibilities ---------- */
    {
      id: "infra",
      heading: "2.1 Infrastructure Management",
      desc: "Servers, networks, cloud, observability, BCP/DR, and audits.",
      bullets: [
        "Design/deploy/maintain infra across on-prem + cloud; IaC preferred.",
        "AI-driven monitoring; SLOs + alert hygiene; capacity planning.",
        "BCP/DR tested; quarterly infra + security audits with findings tracked."
      ],
      svg: "InfraSVG",
    },
    {
      id: "security",
      heading: "2.2 Cybersecurity & Data Protection",
      desc: "Defense-in-depth, compliance (IT Act, DPDP, ISO 27001), CERT-In ready.",
      bullets: [
        "Layered controls: IDS/IPS, WAF, EDR/XDR, SIEM, MFA, least privilege.",
        "IR plan aligned to CERT-In (6-hour reporting); awareness & drills.",
        "Privacy-by-design; E2E encryption; DLP and key management."
      ],
      svg: "SecuritySVG",
    },
    {
      id: "devsecops",
      heading: "2.3 Software Dev & Maintenance (DevSecOps)",
      desc: "Secure SDLC, CI/CD, SCA/SAST/DAST, licensing hygiene, OWASP.",
      bullets: [
        "Version control, protected branches, signed releases, SBOMs.",
        "Automated code reviews; vuln management with fix SLAs.",
        "Secure portals/APIs with throttling, scopes, and audit trails."
      ],
      svg: "DevSVG",
    },
    {
      id: "data",
      heading: "2.4 Database & Information Management",
      desc: "Confidentiality, integrity, availability; blockchain attest & legal admissibility.",
      bullets: [
        "Hardened DBs, least-privilege roles, PITR backups, archivals.",
        "Tamper-evidence via hash anchors/blockchain for critical records.",
        "Evidence processes aligned with Indian Evidence Act, 1872."
      ],
      svg: "DataSVG",
    },
    {
      id: "network",
      heading: "2.5 Network Administration",
      desc: "LAN/WAN/VPN/Cloud networking, redundancy, and pen tests.",
      bullets: [
        "Zero-trust segmentation; secure VPN; DNSSEC; hardened edges.",
        "Redundant paths + load balancing for high availability.",
        "Regular internal/external pen tests with tracked remediation."
      ],
      svg: "NetworkSVG",
    },
    {
      id: "helpdesk",
      heading: "2.6 User Support & IT Helpdesk",
      desc: "24×7 support, ticket SLAs, IT hygiene programs.",
      bullets: [
        "Tiered helpdesk, self-service KB, automated onboarding/offboarding.",
        "Asset lifecycle tracking with EDR and patch rollouts.",
        "Quarterly cyber hygiene + phishing drills."
      ],
      svg: "HelpdeskSVG",
    },
    {
      id: "policy",
      heading: "2.7 IT Policy & Compliance",
      desc: "Data privacy, acceptable use, BYOD, global frameworks; annual reviews.",
      bullets: [
        "Draft, publish, and enforce policies with attestations and audits.",
        "Map to ISO 27001, NIST CSF; DPDP, GDPR alignment where applicable.",
        "Policy rev cycle: yearly or upon major legal/tech shifts."
      ],
      svg: "PolicySVG",
    },
    {
      id: "rnd",
      heading: "2.8 Research & Innovation",
      desc: "AI, blockchain, cloud-native pilots for cybercrime prevention/investigation.",
      bullets: [
        "PoCs with academia and partners; measure value & risks.",
        "MLOps baselines for responsible/secure AI usage.",
        "Publish learnings; templatize wins for scale."
      ],
      svg: "RnDSVG",
    },

    /* ---------- 3–7 (Disclaimer before Conclusion; Conclusion LAST) ---------- */
    {
      id: "ethics",
      heading: "3. Confidentiality & Cyber Ethics",
      desc: "Strict NDA, access controls, misuse = disciplinary + legal action.",
      bullets: [
        "Need-to-know + JIT access; aggressive logging and redaction.",
        "Prohibit shadow IT; register approved tools and vendors.",
        "Report breaches under IT Act/IPC timelines."
      ],
      svg: "EthicsSVG",
    },
    {
      id: "csirt",
      heading: "4. Incident Response & Crisis Management",
      desc: "CSIRT + CERT-In coordination, blockchain audit trails.",
      bullets: [
        "Detect, contain, eradicate; post-incident RCA with action owners.",
        "Crisis comms runbook; exec dashboards; tabletop exercises.",
        "Immutable event trails for transparency and traceability."
      ],
      svg: "CsirtSVG",
    },
    {
      id: "legal",
      heading: "5. Legal References",
      desc: "IT Act 2000/2008, DPDP 2023, IPC, Evidence Act 1872, ISO 27001/NIST, GDPR, CERT-In.",
      bullets: [
        "Maintain master register of binding controls and citations.",
        "Map controls to clauses; keep evidence for audits.",
        "Refresh on amendments; notify stakeholders."
      ],
      svg: "LawSVG",
    },
    {
      id: "disclaimer",
      heading: "6. Legal Disclaimer",
      desc: "Statutes prevail; document updates with legal/tech shifts.",
      bullets: [
        "This framework evolves with regulation and risk.",
        "Where conflict exists, statutory law rules."
      ],
      svg: "DisclaimerSVG",
    },
    {
      id: "conclusion",
      heading: "7. Conclusion",
      desc: "Integrity, resilience, innovation—tech that earns public trust.",
      bullets: [
        "Enables CRCCF mission with secure platforms and reliable ops.",
        "Balances speed with compliance and defense-in-depth."
      ],
      svg: "ConclusionSVG",
    },
  ],
};

/* -------------------- Shared SVG defs + Person primitive -------------------- */
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
    {/* head */}
    <circle cx="0" cy="-18" r="10" />
    {/* torso */}
    <path d="M-14 0c2-12 12-18 14-18s12 6 14 18v30h-28z" />
    {/* desk line */}
    <rect x="-18" y="30" width="36" height="6" rx="3" fill={color.indigo300} />
  </g>
);

/* -------------------- HERO SVG (more complex) -------------------- */
const ITHeroSVG = () => (
  <svg viewBox="0 0 780 360" className="w-full h-auto" role="img" aria-label="IT hero">
    <Defs />
    {/* soft fields */}
    <g opacity="0.35">
      <ellipse cx="200" cy="90" rx="160" ry="56" fill="url(#gCool)" />
      <ellipse cx="580" cy="90" rx="160" ry="56" fill={color.emerald100} />
      <ellipse cx="390" cy="310" rx="260" ry="36" fill={color.cyan50} />
    </g>

    {/* person at console with layered panels */}
    <Person x={150} y={250} size={1.15} tone={color.slate700} />
    <g transform="translate(230,150)">
      <rect x="-100" y="-58" width="240" height="140" rx="18" fill={color.white} />
      <rect x="-84" y="-36" width="80" height="12" rx="6" fill={color.indigo300} />
      <rect x="6" y="-36" width="140" height="12" rx="6" fill={color.slate400} />
      <rect x="-84" y="-8" width="230" height="10" rx="5" fill={color.slate300} />
      <rect x="-84" y="18" width="160" height="10" rx="5" fill={color.cyan300} />
      <rect x="-84" y="44" width="120" height="10" rx="5" fill={color.slate300} />
    </g>

    {/* cloud + shield + graph links */}
    <g transform="translate(520,160)">
      <path d="M-90 0c0-24 20-44 44-44 10 0 19 3 26 9 7-11 19-18 33-18 22 0 40 18 40 40 0 2-0 4-1 6h-142z"
        fill={color.white}/>
      <path d="M46 -10l0 66 36 -16 36 16 0 -66c0-22-36-38-36-38s-36 16-36 38z" fill={color.indigo600}/>
      <circle cx="-130" cy="10" r="6" fill={color.emerald400}/>
      <circle cx="-110" cy="36" r="6" fill={color.cyan500}/>
      <path d="M-130 10L-90 0M-110 36L-90 0" stroke={color.slate700} strokeWidth="3"/>
    </g>

    {/* CI/CD pipeline badges */}
    <g transform="translate(660,210)">
      <rect x="-50" y="-12" width="90" height="24" rx="12" fill={color.indigo100}/>
      <rect x="50" y="-12" width="90" height="24" rx="12" fill={color.amber100}/>
      <path d="M40 0h10" stroke={color.slate700} strokeWidth="6" strokeLinecap="round"/>
    </g>
  </svg>
);

/* -------------------- Section SVGs (each: person + abstract, denser) -------------------- */
const IntroSVG = () => (
  <svg viewBox="0 0 740 300" className="w-full h-full" role="img" aria-label="Introduction">
    <Defs />
    <Person x={120} y={220} size={1} />
    <g transform="translate(210,88)">
      <rect x="0" y="0" width="250" height="140" rx="18" fill={color.white} />
      <path d="M24 36h202M24 68h162M24 100h120" stroke={color.slate700} strokeWidth="6" />
    </g>
    <g transform="translate(520,70)" opacity="0.7">
      <ellipse cx="0" cy="0" rx="120" ry="42" fill="url(#gCool)" />
      <ellipse cx="0" cy="90" rx="120" ry="42" fill={color.emerald100} />
      <rect x="-90" y="-20" width="180" height="120" rx="16" fill="url(#gridDots)" />
    </g>
  </svg>
);

const PurposeSVG = () => (
  <svg viewBox="0 0 740 300" className="w-full h-full" role="img" aria-label="Purpose & Scope">
    <Defs />
    <Person x={130} y={220} size={1}/>
    <g transform="translate(230,128)">
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

const InfraSVG = () => (
  <svg viewBox="0 0 740 300" className="w-full h-full" role="img" aria-label="Infrastructure">
    <Defs />
    <Person x={110} y={220} size={1}/>
    <g transform="translate(210,120)">
      {/* server racks */}
      <rect x="-90" y="-36" width="72" height="150" rx="12" fill={color.white}/>
      <rect x="0" y="-36" width="72" height="150" rx="12" fill={color.white}/>
      <rect x="-80" y="-24" width="52" height="10" rx="5" fill={color.indigo300}/>
      <rect x="10" y="-24" width="52" height="10" rx="5" fill={color.indigo300}/>
      <rect x="-80" y="8" width="52" height="10" rx="5" fill={color.slate400}/>
      <rect x="10" y="8" width="52" height="10" rx="5" fill={color.slate400}/>
      <rect x="-80" y="40" width="52" height="10" rx="5" fill={color.cyan300}/>
      <rect x="10" y="40" width="52" height="10" rx="5" fill={color.cyan300}/>
    </g>
    <g transform="translate(480,142)">
      {/* cloud + perf curve */}
      <path d="M-80 0c0-22 18-40 40-40 9 0 17 3 24 8 6-10 17-16 30-16 20 0 36 16 36 36 0 2 0 4-1 6h-129z" fill={color.white}/>
      <path d="M-80 44c40-16 80-16 120 0" stroke={color.emerald400} strokeWidth="6" fill="none"/>
    </g>
  </svg>
);

const SecuritySVG = () => (
  <svg viewBox="0 0 740 300" className="w-full h-full" role="img" aria-label="Security">
    <Defs />
    <Person x={130} y={220} size={1}/>
    {/* SIEM timeline */}
    <g transform="translate(220,122)">
      <rect x="-90" y="-46" width="220" height="150" rx="18" fill={color.white}/>
      <path d="M-66 -10c32-18 64-18 96 0s64 18 96 0" stroke={color.cyan500} strokeWidth="6" fill="none"/>
      <rect x="-66" y="26" width="176" height="10" rx="5" fill={color.slate400}/>
      <rect x="-66" y="52" width="130" height="10" rx="5" fill={color.indigo300}/>
    </g>
    {/* shield + alert light */}
    <g transform="translate(540,150)">
      <path d="M0 -12l0 70 38 -18 38 18 0 -70c0-22-38-40-38-40s-38 18-38 40z" fill={color.indigo600}/>
      <circle cx="38" cy="14" r="8" fill={color.white}/>
      <circle cx="38" cy="-34" r="8" fill={color.rose400}/>
    </g>
  </svg>
);

const DevSVG = () => (
  <svg viewBox="0 0 740 300" className="w-full h-full" role="img" aria-label="DevSecOps">
    <Defs />
    <Person x={120} y={220} size={1}/>
    {/* pipeline + code blocks */}
    <g transform="translate(210,140)">
      <rect x="-100" y="-46" width="240" height="140" rx="18" fill={color.white}/>
      <rect x="-78" y="-18" width="84" height="12" rx="6" fill={color.indigo300}/>
      <rect x="14" y="-18" width="120" height="12" rx="6" fill={color.slate400}/>
      <rect x="-78" y="10" width="180" height="12" rx="6" fill={color.slate400}/>
      <rect x="-78" y="38" width="120" height="12" rx="6" fill={color.cyan300}/>
    </g>
    <g transform="translate(520,160)">
      <rect x="-44" y="-12" width="88" height="24" rx="12" fill={color.indigo100}/>
      <rect x="54" y="-12" width="88" height="24" rx="12" fill={color.amber100}/>
      <path d="M44 0h10" stroke={color.slate700} strokeWidth="6" strokeLinecap="round"/>
    </g>
  </svg>
);

const DataSVG = () => (
  <svg viewBox="0 0 740 300" className="w-full h-full" role="img" aria-label="Data Management">
    <Defs />
    <Person x={110} y={220} size={1}/>
    {/* database + chain/hash */}
    <g transform="translate(210,130)">
      <ellipse cx="0" cy="-44" rx="74" ry="22" fill={color.white}/>
      <rect x="-74" y="-44" width="148" height="108" rx="18" fill={color.white}/>
      <ellipse cx="0" cy="64" rx="74" ry="22" fill={color.white}/>
      <rect x="-60" y="-8" width="120" height="10" rx="5" fill={color.indigo300}/>
    </g>
    <g transform="translate(500,150)">
      <rect x="0" y="0" width="62" height="62" rx="10" fill="url(#gOk)"/>
      <rect x="90" y="0" width="62" height="62" rx="10" fill="url(#gWarn)"/>
      <path d="M62 31h28" stroke={color.slate700} strokeWidth="6" strokeLinecap="round"/>
    </g>
  </svg>
);

const NetworkSVG = () => (
  <svg viewBox="0 0 740 300" className="w-full h-full" role="img" aria-label="Network">
    <Defs />
    <Person x={120} y={220} size={1}/>
    <g transform="translate(210,150)">
      <circle cx="0" cy="0" r="10" fill={color.emerald400}/>
      <circle cx="80" cy="-40" r="10" fill={color.cyan500}/>
      <circle cx="120" cy="40" r="10" fill={color.indigo400}/>
      <circle cx="40" cy="60" r="10" fill={color.amber400}/>
      <circle cx="160" cy="10" r="10" fill={color.cyan500}/>
      <path d="M0 0L80 -40L120 40L40 60L0 0L160 10L120 40" stroke={color.slate700} strokeWidth="3" fill="none"/>
    </g>
    <g transform="translate(520,150)">
      <rect x="-80" y="-20" width="160" height="40" rx="20" fill={color.white}/>
      <path d="M-60 0h120" stroke={color.indigo100} strokeWidth="10"/>
    </g>
  </svg>
);

const HelpdeskSVG = () => (
  <svg viewBox="0 0 740 300" className="w-full h-full" role="img" aria-label="Helpdesk">
    <Defs />
    <Person x={130} y={220} size={1}/>
    <g transform="translate(220,130)">
      <rect x="-90" y="-40" width="220" height="130" rx="18" fill={color.white}/>
      <path d="M-66 -6h176M-66 22h136" stroke={color.slate700} strokeWidth="6"/>
      <circle cx="90" cy="46" r="6" fill={color.cyan500}/>
    </g>
    {/* headset bubble */}
    <g transform="translate(540,150)">
      <circle cx="0" cy="0" r="44" fill={color.white}/>
      <path d="M-20 -6a24 24 0 0 1 48 0M-24 -6v22M24 -6v22M-10 26h20" stroke={color.slate700} strokeWidth="6" fill="none"/>
    </g>
  </svg>
);

const PolicySVG = () => (
  <svg viewBox="0 0 740 300" className="w-full h-full" role="img" aria-label="Policy">
    <Defs />
    <Person x={120} y={220} size={1}/>
    <g transform="translate(210,120)">
      <rect x="-90" y="-46" width="220" height="150" rx="18" fill={color.white}/>
      <path d="M-66 -10h176M-66 18h136M-66 46h106" stroke={color.slate700} strokeWidth="6"/>
    </g>
    <g transform="translate(520,160)">
      <path d="M0 40c-28-14-28-54 0-68M0 40c28-14 28-54 0-68" stroke={color.indigo600} strokeWidth="6" fill="none"/>
      <rect x="32" y="-28" width="124" height="56" rx="12" fill={color.white}/>
    </g>
  </svg>
);

const RnDSVG = () => (
  <svg viewBox="0 0 740 300" className="w-full h-full" role="img" aria-label="R&D">
    <Defs />
    <Person x={120} y={220} size={1}/>
    <g transform="translate(220,120)">
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

const EthicsSVG = () => (
  <svg viewBox="0 0 740 300" className="w-full h-full" role="img" aria-label="Ethics">
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

const CsirtSVG = () => (
  <svg viewBox="0 0 740 300" className="w-full h-full" role="img" aria-label="CSIRT">
    <Defs />
    <Person x={120} y={220} size={1}/>
    <g transform="translate(210,160)">
      <rect x="0" y="-46" width="190" height="92" rx="10" fill={color.white}/>
      <path d="M0 54h190" stroke={color.rose400} strokeWidth="10"/>
    </g>
    <g transform="translate(500,150)">
      <path d="M0 0h210M0 40h170M0 80h150" stroke={color.emerald400} strokeWidth="6"/>
    </g>
  </svg>
);

const LawSVG = () => (
  <svg viewBox="0 0 740 300" className="w-full h-full" role="img" aria-label="Legal References">
    <Defs />
    <Person x={120} y={220} size={1}/>
    <g transform="translate(210,110)">
      <rect x="0" y="0" width="200" height="128" rx="16" fill={color.white}/>
      <rect x="240" y="0" width="240" height="128" rx="16" fill={color.white}/>
      <rect x="262" y="30" width="190" height="12" rx="6" fill={color.slate700}/>
      <rect x="262" y="58" width="150" height="12" rx="6" fill={color.indigo300}/>
    </g>
    <g transform="translate(520,110)">
      <path d="M0 0v128M-44 44h88" stroke={color.indigo600} strokeWidth="6"/>
    </g>
  </svg>
);

const DisclaimerSVG = () => (
  <svg viewBox="0 0 740 300" className="w-full h-full" role="img" aria-label="Disclaimer">
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
  <svg viewBox="0 0 740 300" className="w-full h-full" role="img" aria-label="Conclusion">
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

/* -------------------- Section Wrapper (with border + shadow) -------------------- */
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
        {/* Illustration */}
        <motion.div style={{ y }} className={`${reverse ? "md:order-2" : "md:order-1"} min-w-0`}>
          <div className="w-full h-auto max-h-64 sm:max-h-80 md:max-h-none overflow-hidden rounded-xl border border-slate-200 shadow-[0_4px_18px_rgba(2,6,23,0.06)]">
            <SVG />
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

/* -------------------- Page -------------------- */
export default function ITDepartment() {
  const { container, itemUp } = useAnims();
  const heroRef = useRef(null);
  const { scrollYProgress } = useScroll({ target: heroRef, offset: ["start start", "end start"] });
  const heroY = useTransform(scrollYProgress, [0, 1], [0, -40]);

  const svgMap = {
    IntroSVG,
    PurposeSVG,
    InfraSVG,
    SecuritySVG,
    DevSVG,
    DataSVG,
    NetworkSVG,
    HelpdeskSVG,
    PolicySVG,
    RnDSVG,
    EthicsSVG,
    CsirtSVG,
    LawSVG,
    DisclaimerSVG,
    ConclusionSVG, // conclusion component lives last in data order
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

      {/* Hero block with border + shadow */}
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
              <ITHeroSVG />
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
