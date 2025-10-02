// // src/pages/victimSupport/RightOfCybercrimeVictims.jsx
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
//   return { container, itemUp };
// };

// /* -------------------- Colors -------------------- */
// const color = {
//   cyan50: "#ECFEFF", cyan100: "#CFFAFE", cyan300: "#67E8F9", cyan500: "#06B6D4", cyan700: "#0E7490",
//   indigo50: "#EEF2FF", indigo100: "#E0E7FF", indigo300: "#A5B4FC", indigo400: "#818CF8", indigo600: "#4F46E5",
//   emerald100: "#D1FAE5", emerald300: "#86EFAC", emerald400: "#34D399", emerald600: "#059669",
//   amber100: "#FEF3C7", amber400: "#F59E0B",
//   rose100: "#FFE4E6", rose400: "#FB7185",
//   slate300: "#CBD5E1", slate500: "#64748B", slate700: "#334155", slate900: "#0F172A",
//   white: "#FFFFFF",
// };

// /* -------------------- Data (YOUR TEXT – kept 100% intact) -------------------- */
// const data = {
//   title: "Rights of Cybercrime Victims – Empowering You with CRCCF",
//   tagline:
//     "Empowering You. Protecting Your Rights. Guiding You to Justice – With CRCCF, Your Rights Are Our Priority.",
//   sections: [
//     {
//       id: "right-report",
//       heading: "1. Right to Report the Crime",
//       content: `In today’s digital age, cybercrimes are increasingly targeting individuals, businesses, and institutions, often resulting in financial loss, emotional distress, and reputational damage. Every victim has the legal right to report cybercrimes promptly. Under Section 66C and 66D of the Indian IT Act 2000, offences like identity theft, cheating by personation, and fraudulent digital communications are punishable. Victims can approach law enforcement agencies, cybercrime cells, or authorized legal professionals to lodge formal complaints.

// CRCCF ensures victims feel safe while reporting incidents. Timely reporting not only preserves critical digital evidence but also allows authorities to take swift action. Our team guarantees that victims are protected from retaliation or intimidation, making the path to justice secure and transparent.`,
//       svg: "ReportSVG",
//     },
//     {
//       id: "right-legal-assistance",
//       heading: "2. Right to Legal Assistance and Representation",
//       content: `Victims are entitled to professional legal support throughout investigations and judicial proceedings. Consulting legal experts who specialize in cyber laws, data protection, and digital forensics ensures that victims understand their rights and options.

// CRCCF provides access to experienced legal counsel who assist in filing complaints, collecting evidence, and pursuing civil or criminal remedies. This ensures victims are not disadvantaged due to lack of knowledge. By combining legal expertise with practical guidance, CRCCF represents victims’ interests effectively in court or other dispute resolution forums, giving them confidence that justice is within reach.`,
//       svg: "LegalAssistSVG",
//     },
//     {
//       id: "right-support-services",
//       heading: "3. Right to Access Support Services",
//       content: `Cybercrime victims often experience stress, anxiety, or trauma. Beyond legal guidance, victims have the right to access comprehensive psychological support and cyber-psychology counselling. CRCCF provides confidential counselling, step-by-step advice on digital safety, and practical guidance for safeguarding personal and financial information.

// By integrating emotional support with legal assistance, CRCCF ensures victims feel empowered, secure, and supported throughout the recovery process. Our services are designed to restore confidence and help victims navigate the aftermath of cyber incidents with dignity.`,
//       svg: "SupportServicesSVG",
//     },
//     {
//       id: "right-preserve-evidence",
//       heading: "4. Right to Preserve and Protect Evidence",
//       content: `Digital crimes often involve emails, transaction records, social media interactions, and encrypted communications. Victims have the right to professional assistance in preserving, documenting, and submitting evidence without compromising integrity.

// CRCCF guides victims in proper evidence collection and documentation, ensuring all digital proofs meet legal standards and are admissible in court. This includes safeguarding metadata, timestamps, and other crucial digital traces. By providing hands-on support, CRCCF helps hold perpetrators accountable while giving victims the reassurance that their case is being handled professionally.`,
//       svg: "EvidenceSVG",
//     },
//     {
//       id: "right-stay-informed",
//       heading: "5. Right to Stay Informed",
//       content: `Transparency is a fundamental right for cybercrime victims. Victims should receive timely updates on case status, investigation progress, and upcoming hearings. Being informed allows victims to actively participate in the legal process and make informed decisions.

// CRCCF works closely with legal authorities and law enforcement to ensure victims are kept up-to-date at every stage, fostering trust and confidence in the judicial process. Clear communication ensures that victims never feel isolated or uncertain while pursuing justice.`,
//       svg: "StayInformedSVG",
//     },
//     {
//       id: "crccf-role",
//       heading: "6. CRCCF’s Role in Upholding Victims’ Rights",
//       content: `At CRCCF, we go beyond merely informing victims of their legal rights. Our team conducts detailed case studies, analyses cyber incidents, and provides hands-on guidance to navigate complex legal procedures. Whether it’s helping victims register complaints, assist in evidence collection, or offer expert legal advice, CRCCF ensures that victims’ rights are actively upheld.
// By combining legal expertise, cyber-psychology support, and practical guidance, CRCCF protects, empowers, and rehabilitates victims. Our mission is to provide transparent, secure, and reliable support, so every victim feels confident and respected throughout their journey to justice.`,
//       svg: "CRCCRightsSVG",
//     },
//     {
//       id: "conclusion",
//       heading: "Conclusion: Trust and Comprehensive Support with CRCCF",
//       content: `The rights of cybercrime victims include:
// Reporting the crime
// Accessing legal assistance
// Preserving evidence
// Receiving psychological support
// Staying informed throughout the process
// CRCCF is committed to ensuring that every victim receives full legal guidance, professional support, and comprehensive protection. Our integrated approach guarantees that victims’ dignity is restored, justice is pursued efficiently, and the journey toward recovery is safe and empowering.
// With CRCCF, victims can reach out without hesitation, knowing they are supported by a trusted, legally-backed, and empathetic organization dedicated to cybercrime victim protection.`,
//       svg: "ConclusionSVG",
//     },
//   ],
// };

// /* -------------------- SVG Helpers -------------------- */
// const BG = ({ id, stops }) => (
//   <defs>
//     <linearGradient id={id} x1="0" y1="0" x2="1" y2="1">
//       {stops.map((s, i) => (
//         <stop key={i} offset={s.offset} stopColor={s.color} stopOpacity={s.opacity ?? 1} />
//       ))}
//     </linearGradient>
//     <filter id={`${id}-soft`} x="-20%" y="-20%" width="140%" height="140%">
//       <feGaussianBlur in="SourceGraphic" stdDeviation="8" result="blur" />
//       <feColorMatrix
//         in="blur"
//         type="matrix"
//         values="1 0 0 0 0
//                 0 1 0 0 0
//                 0 0 1 0 0
//                 0 0 0 .6 0"
//       />
//     </filter>
//   </defs>
// );
// const Card = ({ x, y, w, h, r = 16, fill = color.white, stroke, sw = 0, opacity = 1 }) => (
//   <rect x={x} y={y} width={w} height={h} rx={r} fill={fill} stroke={stroke} strokeWidth={sw} opacity={opacity} />
// );

// /* -------------------- Complex SVGs (200%+ richer than basic) -------------------- */
// /* Hero */
// const HeroSVG = (props) => (
//   <svg viewBox="0 0 900 420" role="img" aria-labelledby="heroT heroD" className="w-full h-auto" {...props}>
//     <title id="heroT">Victim Rights & Justice</title>
//     <desc id="heroD">Shield of justice, balanced scales, secure devices and supportive people.</desc>
//     <BG
//       id="gHero"
//       stops={[
//         { offset: "0%", color: color.cyan100 },
//         { offset: "60%", color: color.indigo100 },
//         { offset: "100%", color: color.emerald100 },
//       ]}
//     />
//     <g filter="url(#gHero-soft)">
//       <rect x="0" y="0" width="900" height="420" rx="28" fill="url(#gHero)" />
//     </g>

//     {/* Shield */}
//     <g transform="translate(120,120)">
//       <path
//         d="M120 -10l140 58v64c0 68-44 125-140 160C124 337 80 280 80 212v-64l40-158z"
//         fill={color.white}
//         stroke={color.indigo400}
//         strokeWidth="5"
//       />
//       <path d="M104 140l34 34 56-56" stroke={color.emerald400} strokeWidth="10" fill="none" strokeLinecap="round" />
//     </g>

//     {/* Scales */}
//     <g transform="translate(520,100)">
//       <path d="M80 0v160" stroke={color.slate700} strokeWidth="6" />
//       <circle cx="80" cy="0" r="8" fill={color.slate700} />
//       <path d="M20 50h120" stroke={color.slate700} strokeWidth="6" />
//       <path d="M32 50c0 36 28 64 62 64s62-28 62-64" stroke={color.indigo300} strokeWidth="4" fill="none" />
//       <circle cx="32" cy="50" r="6" fill={color.slate500} />
//       <circle cx="148" cy="50" r="6" fill={color.slate500} />
//     </g>

//     {/* Devices & people */}
//     <g transform="translate(420,220)">
//       <Card x="0" y="0" w="130" h="90" r="12" fill={color.white} stroke={color.slate300} sw="3" />
//       <rect x="16" y="16" width="98" height="12" rx="6" fill={color.indigo600} />
//       <rect x="16" y="40" width="78" height="10" rx="5" fill={color.slate500} />
//       <rect x="16" y="60" width="64" height="10" rx="5" fill={color.slate500} />
//     </g>
//     <g transform="translate(720,240)">
//       <circle cx="0" cy="0" r="20" fill={color.cyan500} />
//       <circle cx="52" cy="14" r="20" fill={color.indigo400} />
//       <circle cx="104" cy="0" r="20" fill={color.emerald400} />
//       <path d="M0 0L52 14L104 0" stroke={color.slate700} strokeWidth="3" fill="none" />
//     </g>
//   </svg>
// );

// /* Section SVGs */
// const ReportSVG = (props) => (
//   <svg viewBox="0 0 760 360" role="img" aria-label="Right to Report" className="w-full h-full" {...props}>
//     <BG
//       id="gReport"
//       stops={[
//         { offset: "0%", color: color.cyan50 },
//         { offset: "100%", color: color.indigo50 },
//       ]}
//     />
//     <rect x="0" y="0" width="760" height="360" rx="20" fill="url(#gReport)" />
//     {/* Police/Cyber cell desk + report form */}
//     <Card x="60" y="70" w="280" h="200" r="18" fill={color.white} stroke={color.indigo300} sw="3" />
//     <rect x="92" y="96" width="216" height="12" rx="6" fill={color.slate700} />
//     <rect x="92" y="122" width="180" height="10" rx="5" fill={color.slate500} />
//     <rect x="92" y="144" width="156" height="10" rx="5" fill={color.slate500} />
//     <rect x="92" y="166" width="132" height="10" rx="5" fill={color.slate500} />
//     <rect x="92" y="198" width="96" height="14" rx="7" fill={color.indigo600} />

//     {/* Evidence envelope & shield */}
//     <g transform="translate(420,90)">
//       <Card x="0" y="0" w="260" h="180" r="18" fill={color.white} stroke={color.cyan300} sw="3" />
//       <path d="M20 40h220v80l-50 30H70l-50-30z" fill={color.cyan100} />
//       <path d="M40 70h160" stroke={color.indigo400} strokeWidth="4" />
//       <g transform="translate(188,22)">
//         <path d="M34 -12l50 20v22c0 24-16 44-50 56-34-12-50-32-50-56V8l50-20z" fill={color.white} stroke={color.indigo400} strokeWidth="3" />
//         <path d="M20 20l14 14 22-22" stroke={color.emerald400} strokeWidth="6" fill="none" strokeLinecap="round" />
//       </g>
//     </g>
//   </svg>
// );

// const LegalAssistSVG = (props) => (
//   <svg viewBox="0 0 760 360" role="img" aria-label="Legal Assistance" className="w-full h-full" {...props}>
//     <rect x="0" y="0" width="760" height="360" rx="20" fill={color.indigo100} />
//     {/* Court + brief + counsel */}
//     <g transform="translate(60,70)">
//       <Card x="0" y="0" w="220" h="180" r="16" fill={color.white} />
//       <rect x="24" y="24" width="172" height="14" rx="7" fill={color.indigo600} />
//       <rect x="24" y="56" width="148" height="10" rx="5" fill={color.slate500} />
//       <rect x="24" y="76" width="128" height="10" rx="5" fill={color.slate500} />
//       <rect x="24" y="96" width="108" height="10" rx="5" fill={color.slate500} />
//     </g>
//     <g transform="translate(330,80)">
//       <path d="M80 0v150" stroke={color.slate700} strokeWidth="6" />
//       <circle cx="80" cy="0" r="8" fill={color.slate700} />
//       <path d="M20 40h120" stroke={color.slate700} strokeWidth="6" />
//       <path d="M30 40c0 40 30 68 70 68s70-28 70-68" stroke={color.indigo300} strokeWidth="4" fill="none" />
//     </g>
//     <g transform="translate(560,210)">
//       <rect x="0" y="0" width="120" height="36" rx="10" fill={color.emerald400} />
//       <rect x="8" y="8" width="104" height="20" rx="6" fill={color.white} opacity="0.2" />
//     </g>
//   </svg>
// );

// const SupportServicesSVG = (props) => (
//   <svg viewBox="0 0 760 360" role="img" aria-label="Support Services" className="w-full h-full" {...props}>
//     <rect x="0" y="0" width="760" height="360" rx="20" fill={color.emerald100} />
//     {/* Counselor + victim silhouettes */}
//     <g transform="translate(110,80)">
//       <circle cx="60" cy="40" r="26" fill={color.cyan500} />
//       <rect x="34" y="70" width="52" height="80" rx="12" fill={color.white} />
//       <circle cx="180" cy="40" r="26" fill={color.indigo400} />
//       <rect x="154" y="70" width="52" height="80" rx="12" fill={color.white} />
//       <rect x="90" y="40" width="34" height="10" rx="5" fill={color.emerald400} />
//     </g>
//     {/* Safety checklist panel */}
//     <Card x="380" y="80" w="280" h="200" r="18" fill={color.white} stroke={color.emerald300} sw="3" />
//     <g transform="translate(404,106)" fill="none" stroke={color.emerald600} strokeWidth="6" strokeLinecap="round">
//       <path d="M6 6l14 14 24-24" />
//       <path d="M6 56l14 14 24-24" />
//       <path d="M6 106l14 14 24-24" />
//     </g>
//     <g transform="translate(452,110)">
//       <rect x="0" y="0" width="180" height="10" rx="5" fill={color.slate500} />
//       <rect x="0" y="50" width="160" height="10" rx="5" fill={color.slate500} />
//       <rect x="0" y="100" width="140" height="10" rx="5" fill={color.slate500} />
//     </g>
//   </svg>
// );

// const EvidenceSVG = (props) => (
//   <svg viewBox="0 0 760 360" role="img" aria-label="Preserve Evidence" className="w-full h-full" {...props}>
//     <rect x="0" y="0" width="760" height="360" rx="20" fill={color.cyan100} />
//     {/* Forensic drive + hash lock */}
//     <g transform="translate(80,80)">
//       <Card x="0" y="0" w="260" h="180" r="18" fill={color.white} stroke={color.cyan300} sw="3" />
//       <rect x="30" y="36" width="200" height="16" rx="8" fill={color.slate500} />
//       <rect x="30" y="68" width="160" height="12" rx="6" fill={color.slate500} />
//       <rect x="30" y="92" width="128" height="12" rx="6" fill={color.slate500} />
//     </g>
//     <g transform="translate(420,80)">
//       <path d="M120 100v-30a30 30 0 0 1 60 0v30" stroke={color.indigo600} strokeWidth="8" fill="none" />
//       <Card x="100" y="100" w="100" h="100" r="16" fill={color.white} stroke={color.indigo600} sw="4" />
//       <rect x="130" y="140" width="40" height="10" rx="5" fill={color.indigo600} />
//     </g>
//     <g transform="translate(560,240)" opacity="0.25">
//       <rect x="0" y="0" width="120" height="16" rx="8" fill={color.indigo300} />
//       <rect x="0" y="26" width="90" height="16" rx="8" fill={color.indigo300} />
//     </g>
//   </svg>
// );

// const StayInformedSVG = (props) => (
//   <svg viewBox="0 0 760 360" role="img" aria-label="Stay Informed" className="w-full h-full" {...props}>
//     <rect x="0" y="0" width="760" height="360" rx="20" fill={color.indigo50} />
//     {/* Timeline with notifications */}
//     <g transform="translate(120,80)">
//       <rect x="0" y="0" width="520" height="12" rx="6" fill={color.indigo300} />
//       <circle cx="40" cy="6" r="12" fill={color.indigo600} />
//       <circle cx="220" cy="6" r="12" fill={color.cyan500} />
//       <circle cx="400" cy="6" r="12" fill={color.emerald400} />
//       <g transform="translate(400,-20)">
//         <rect x="18" y="0" width="10" height="22" rx="5" fill={color.rose400} />
//         <rect x="0" y="22" width="46" height="10" rx="5" fill={color.rose400} />
//       </g>
//     </g>
//     <Card x="140" y="130" w="480" h="160" r="18" fill={color.white} stroke={color.indigo300} sw="3" />
//     <rect x="170" y="160" width="420" height="12" rx="6" fill={color.slate500} />
//     <rect x="170" y="186" width="360" height="10" rx="5" fill={color.slate500} />
//     <rect x="170" y="210" width="320" height="10" rx="5" fill={color.slate500} />
//   </svg>
// );

// const CRCCRightsSVG = (props) => (
//   <svg viewBox="0 0 760 360" role="img" aria-label="CRCCF Role" className="w-full h-full" {...props}>
//     <rect x="0" y="0" width="760" height="360" rx="20" fill={color.emerald100} />
//     {/* Team + analytics + guidance */}
//     <g transform="translate(80,90)">
//       <circle cx="40" cy="40" r="22" fill={color.cyan500} />
//       <circle cx="110" cy="40" r="22" fill={color.indigo400} />
//       <circle cx="80" cy="90" r="22" fill={color.emerald400} />
//       <path d="M40 40L110 40L80 90Z" fill="none" stroke={color.slate700} strokeWidth="3" />
//     </g>
//     <Card x="300" y="70" w="380" h="220" r="18" fill={color.white} stroke={color.emerald300} sw="3" />
//     <g transform="translate(330,100)">
//       <rect x="0" y="0" width="200" height="12" rx="6" fill={color.slate500} />
//       <rect x="0" y="28" width="170" height="10" rx="5" fill={color.slate500} />
//       <rect x="0" y="52" width="150" height="10" rx="5" fill={color.slate500} />
//       <rect x="0" y="76" width="130" height="10" rx="5" fill={color.slate500} />
//     </g>
//     <g transform="translate(560,220)">
//       <rect x="0" y="0" width="96" height="32" rx="10" fill={color.indigo600} />
//       <rect x="8" y="8" width="80" height="16" rx="6" fill={color.white} opacity="0.2" />
//     </g>
//   </svg>
// );

// const ConclusionSVG = (props) => (
//   <svg viewBox="0 0 760 360" role="img" aria-label="Conclusion" className="w-full h-full" {...props}>
//     <rect x="0" y="0" width="760" height="360" rx="20" fill={color.cyan100} />
//     {/* Trust + handshake + laurel */}
//     <g transform="translate(120,120)" stroke={color.indigo600} strokeWidth="6" fill="none" strokeLinecap="round">
//       <path d="M0 80c60-40 120-40 180 0" />
//       <path d="M180 80c60-40 120-40 180 0" />
//     </g>
//     <g transform="translate(420,120)">
//       <path d="M0 40c26-14 46-14 72 0" stroke={color.emerald400} strokeWidth="10" />
//       <circle cx="0" cy="40" r="12" fill={color.emerald400} />
//       <circle cx="72" cy="40" r="12" fill={color.emerald400} />
//     </g>
//     <g transform="translate(560,80)">
//       <rect x="0" y="0" width="140" height="40" rx="12" fill={color.indigo600} />
//       <rect x="8" y="8" width="124" height="24" rx="8" fill={color.white} opacity="0.25" />
//     </g>
//   </svg>
// );

// /* -------------------- Section Wrapper (alternating + scroll reveal + subtle parallax) -------------------- */
// const SectionBlock = ({ id, title, content, SVG, reverse = false }) => {
//   const ref = useRef(null);
//   const { scrollYProgress } = useScroll({ target: ref, offset: ["start 80%", "end 20%"] });
//   const y = useSpring(useTransform(scrollYProgress, [0, 1], [18, -18]), { stiffness: 120, damping: 20 });
//   const opacity = useTransform(scrollYProgress, [0, 1], [0.6, 1]);

//   // preserve original line breaks exactly
//   const paragraphs = content.split("\n").map((p, i) => (
//     <p key={i} className="text-[15px] sm:text-base text-gray-700 leading-relaxed whitespace-pre-wrap">
//       {p}
//     </p>
//   ));

//   return (
//     <section id={id} ref={ref} className="mt-8 sm:mt-10 md:mt-12 lg:mt-16">
//       <motion.div
//         style={{ opacity }}
//         initial={{ opacity: 0, y: 16 }}
//         whileInView={{ opacity: 1, y: 0 }}
//         viewport={{ once: true, margin: "-80px" }}
//         className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-6 md:gap-8 lg:gap-10 items-start"
//       >
//         {/* Illustration */}
//         <motion.div style={{ y }} className={`relative min-w-0 ${reverse ? "md:order-2" : "md:order-1"}`}>
//           <div
//             className="absolute -inset-2 rounded-2xl bg-gradient-to-tr from-cyan-100 via-indigo-100 to-emerald-100 blur-md sm:blur-lg md:blur-xl"
//             aria-hidden="true"
//           />
//           <div className="relative rounded-2xl border border-gray-200 bg-white p-3 sm:p-4 shadow-sm">
//             <div className="w-full h-auto max-h-64 sm:max-h-80 md:max-h-none overflow-hidden">
//               <SVG />
//             </div>
//           </div>
//         </motion.div>

//         {/* Content */}
//         <div className={`${reverse ? "md:order-1" : "md:order-2"} min-w-0`}>
//           <h2 className="text-[20px] sm:text-2xl font-semibold text-gray-900 leading-snug">{title}</h2>
//           <div className="mt-2.5 sm:mt-3 space-y-3">{paragraphs}</div>
//         </div>
//       </motion.div>
//     </section>
//   );
// };

// /* -------------------- Page -------------------- */
// export default function RightOfCybercrimeVictims() {
//   const { container, itemUp } = useAnims();

//   const heroRef = useRef(null);
//   const { scrollYProgress } = useScroll({ target: heroRef, offset: ["start start", "end start"] });
//   const heroY = useTransform(scrollYProgress, [0, 1], [0, -40]); // gentle parallax up

//   const svgMap = {
//     ReportSVG,
//     LegalAssistSVG,
//     SupportServicesSVG,
//     EvidenceSVG,
//     StayInformedSVG,
//     CRCCRightsSVG,
//     ConclusionSVG,
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
//         <Link to="/report/victim-rights-support" className="hover:underline">Victim Rights & Support</Link>
//         <span aria-hidden="true"> › </span>
//         <span className="text-gray-700" aria-current="page">Right of Cybercrime Victims</span>
//       </motion.nav>

//       {/* Hero */}
//       <div ref={heroRef} className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-6 md:gap-8 lg:gap-10 items-center">
//         <motion.div variants={itemUp}>
//           <h1 className="text-[22px] sm:text-3xl font-bold text-gray-900">
//             {data.title}
//           </h1>
//           <p className="mt-2 text-cyan-800 font-medium text-[15px] sm:text-base">{data.tagline}</p>

//           {/* Quick Pills */}
//           <div className="mt-3 sm:mt-4 flex flex-wrap gap-2">
//             {["Report", "Legal Aid", "Support", "Evidence", "Updates"].map((pill) => (
//               <span key={pill} className="px-2.5 sm:px-3 py-1.5 text-xs sm:text-sm rounded-full bg-cyan-100 text-cyan-800 border border-cyan-200">
//                 {pill}
//               </span>
//             ))}
//           </div>
//         </motion.div>

//         <motion.div style={{ y: heroY }} className="relative">
//           <div
//             className="absolute -inset-2 rounded-2xl bg-gradient-to-tr from-cyan-100 via-indigo-100 to-emerald-100 blur-md sm:blur-lg md:blur-xl"
//             aria-hidden="true"
//           />
//           <div className="relative rounded-2xl border border-gray-200 bg-white p-3 sm:p-4 shadow-sm">
//             <div className="w-full h-auto max-h-72 sm:max-h-80 md:max-h-none overflow-hidden">
//               <HeroSVG />
//             </div>
//           </div>
//         </motion.div>
//       </div>

//       {/* Sections (data on page, unchanged; SVG alternating with content) */}
//       <div className="mt-8 sm:mt-10 md:mt-12">
//         {data.sections.map((sec, idx) => {
//           const SVGComp = svgMap[sec.svg] ?? HeroSVG;
//           return (
//             <SectionBlock
//               key={sec.id}
//               id={sec.id}
//               title={sec.heading}
//               content={sec.content}
//               SVG={SVGComp}
//               reverse={idx % 2 === 1}
//             />
//           );
//         })}
//       </div>

//       {/* Footer Disclaimer */}
//       <motion.div
//         initial={{ opacity: 0, y: 16 }}
//         whileInView={{ opacity: 1, y: 0 }}
//         viewport={{ once: true }}
//         className="mt-10 md:mt-12 max-w-4xl"
//       >
//         <div className="rounded-xl border border-gray-200 bg-white p-4 sm:p-5 shadow-sm">
//           <p className="text-sm text-gray-600">
//             ⚖️ <strong>Disclaimer:</strong> CRCCF provides support and guidance, but does not replace law enforcement or
//             court procedures. All information is handled with confidentiality and in compliance with the IT Act & DPDP Act.
//           </p>
//         </div>
//       </motion.div>

//       {/* Back link */}
//       <motion.div
//         initial={{ opacity: 0, y: 16 }}
//         whileInView={{ opacity: 1, y: 0 }}
//         viewport={{ once: true }}
//         className="mt-8"
//       >
//         <Link
//           to="/victim-rights"
//           className="inline-flex items-center text-cyan-700 hover:text-cyan-800 focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400 rounded-md"
//         >
//           <svg className="w-4 h-4 mr-1" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
//             <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
//           </svg>
//           Back to Victim Rights & Support
//         </Link>
//       </motion.div>
//     </motion.section>
//   );
// }


// src/pages/victimSupport/RightOfCybercrimeVictims.jsx
import React, { useRef } from "react";
import { Link } from "react-router-dom";
import { motion, useReducedMotion, useScroll, useTransform, useSpring } from "framer-motion";

/* -------------------- Motion -------------------- */
const useAnims = () => {
  const shouldReduce = useReducedMotion();
  const container = {
    hidden: { opacity: 0 },
    show: { opacity: 1, transition: shouldReduce ? { duration: 0 } : { duration: 0.25, when: "beforeChildren", staggerChildren: 0.06 } },
  };
  const itemUp = {
    hidden: { opacity: 0, y: shouldReduce ? 0 : 12 },
    show: { opacity: 1, y: 0, transition: { duration: shouldReduce ? 0 : 0.28 } },
  };
  return { container, itemUp };
};

/* -------------------- Palette -------------------- */
const color = {
  cyan50: "#ECFEFF", cyan100: "#CFFAFE", cyan300: "#67E8F9", cyan500: "#06B6D4", cyan700: "#0E7490",
  indigo50: "#EEF2FF", indigo100: "#E0E7FF", indigo300: "#A5B4FC", indigo400: "#818CF8", indigo600: "#4F46E5",
  emerald100: "#D1FAE5", emerald300: "#86EFAC", emerald400: "#34D399", emerald600: "#059669",
  amber100: "#FEF3C7",
  rose100: "#FFE4E6", rose400: "#FB7185",
  slate300: "#CBD5E1", slate500: "#64748B", slate700: "#334155",
  white: "#FFFFFF",
};

/* -------------------- DATA (kept 100% intact) -------------------- */
const data = {
  title: "Rights of Cybercrime Victims – Empowering You with CRCCF",
  tagline:
    "Empowering You. Protecting Your Rights. Guiding You to Justice – With CRCCF, Your Rights Are Our Priority.",
  sections: [
    {
      id: "right-report",
      heading: "1. Right to Report the Crime",
      content: `In today’s digital age, cybercrimes are increasingly targeting individuals, businesses, and institutions, often resulting in financial loss, emotional distress, and reputational damage. Every victim has the legal right to report cybercrimes promptly. Under Section 66C and 66D of the Indian IT Act 2000, offences like identity theft, cheating by personation, and fraudulent digital communications are punishable. Victims can approach law enforcement agencies, cybercrime cells, or authorized legal professionals to lodge formal complaints.

CRCCF ensures victims feel safe while reporting incidents. Timely reporting not only preserves critical digital evidence but also allows authorities to take swift action. Our team guarantees that victims are protected from retaliation or intimidation, making the path to justice secure and transparent.`,
      svg: "ReportSVG",
    },
    {
      id: "right-legal-assistance",
      heading: "2. Right to Legal Assistance and Representation",
      content: `Victims are entitled to professional legal support throughout investigations and judicial proceedings. Consulting legal experts who specialize in cyber laws, data protection, and digital forensics ensures that victims understand their rights and options.

CRCCF provides access to experienced legal counsel who assist in filing complaints, collecting evidence, and pursuing civil or criminal remedies. This ensures victims are not disadvantaged due to lack of knowledge. By combining legal expertise with practical guidance, CRCCF represents victims’ interests effectively in court or other dispute resolution forums, giving them confidence that justice is within reach.`,
      svg: "LegalAssistSVG",
    },
    {
      id: "right-support-services",
      heading: "3. Right to Access Support Services",
      content: `Cybercrime victims often experience stress, anxiety, or trauma. Beyond legal guidance, victims have the right to access comprehensive psychological support and cyber-psychology counselling. CRCCF provides confidential counselling, step-by-step advice on digital safety, and practical guidance for safeguarding personal and financial information.

By integrating emotional support with legal assistance, CRCCF ensures victims feel empowered, secure, and supported throughout the recovery process. Our services are designed to restore confidence and help victims navigate the aftermath of cyber incidents with dignity.`,
      svg: "SupportServicesSVG",
    },
    {
      id: "right-preserve-evidence",
      heading: "4. Right to Preserve and Protect Evidence",
      content: `Digital crimes often involve emails, transaction records, social media interactions, and encrypted communications. Victims have the right to professional assistance in preserving, documenting, and submitting evidence without compromising integrity.

CRCCF guides victims in proper evidence collection and documentation, ensuring all digital proofs meet legal standards and are admissible in court. This includes safeguarding metadata, timestamps, and other crucial digital traces. By providing hands-on support, CRCCF helps hold perpetrators accountable while giving victims the reassurance that their case is being handled professionally.`,
      svg: "EvidenceSVG",
    },
    {
      id: "right-stay-informed",
      heading: "5. Right to Stay Informed",
      content: `Transparency is a fundamental right for cybercrime victims. Victims should receive timely updates on case status, investigation progress, and upcoming hearings. Being informed allows victims to actively participate in the legal process and make informed decisions.

CRCCF works closely with legal authorities and law enforcement to ensure victims are kept up-to-date at every stage, fostering trust and confidence in the judicial process. Clear communication ensures that victims never feel isolated or uncertain while pursuing justice.`,
      svg: "StayInformedSVG",
    },
    {
      id: "crccf-role",
      heading: "6. CRCCF’s Role in Upholding Victims’ Rights",
      content: `At CRCCF, we go beyond merely informing victims of their legal rights. Our team conducts detailed case studies, analyses cyber incidents, and provides hands-on guidance to navigate complex legal procedures. Whether it’s helping victims register complaints, assist in evidence collection, or offer expert legal advice, CRCCF ensures that victims’ rights are actively upheld.
By combining legal expertise, cyber-psychology support, and practical guidance, CRCCF protects, empowers, and rehabilitates victims. Our mission is to provide transparent, secure, and reliable support, so every victim feels confident and respected throughout their journey to justice.`,
      svg: "CRCCRightsSVG",
    },
    {
      id: "conclusion",
      heading: "Conclusion: Trust and Comprehensive Support with CRCCF",
      content: `The rights of cybercrime victims include:
Reporting the crime
Accessing legal assistance
Preserving evidence
Receiving psychological support
Staying informed throughout the process
CRCCF is committed to ensuring that every victim receives full legal guidance, professional support, and comprehensive protection. Our integrated approach guarantees that victims’ dignity is restored, justice is pursued efficiently, and the journey toward recovery is safe and empowering.
With CRCCF, victims can reach out without hesitation, knowing they are supported by a trusted, legally-backed, and empathetic organization dedicated to cybercrime victim protection.`,
      svg: "ConclusionSVG",
    },
  ],
};

/* -------------------- Inline Video SVG (page-specific vibe) -------------------- */
const VideoHeroVictimRights = ({ src = "", poster = "" }) => {
  const reduced = window.matchMedia?.("(prefers-reduced-motion: reduce)")?.matches;
  const title = "Victim Rights & Justice";
  const desc = "Supportive helping hand, justice shield, and secure digital scene.";
  if (reduced || !src) {
    return (
      <svg viewBox="0 0 900 420" role="img" aria-labelledby="vhTitle vhDesc" className="w-full h-auto">
        <title id="vhTitle">{title}</title>
        <desc id="vhDesc">{desc}</desc>
        <defs>
          <linearGradient id="gVideoHeroVR" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor={color.cyan100} />
            <stop offset="60%" stopColor={color.indigo100} />
            <stop offset="100%" stopColor={color.emerald100} />
          </linearGradient>
          <clipPath id="clipVR">
            {/* shield-like silhouette */}
            <path d="M140,70 l200,80 v90 c0,100 -65,184 -200,236 C106,360 40,276 40,170 v-90 z" transform="translate(200,20)" />
          </clipPath>
          <filter id="softVR" x="-20%" y="-20%" width="140%" height="140%">
            <feGaussianBlur in="SourceGraphic" stdDeviation="8" result="b" />
            <feColorMatrix in="b" type="matrix" values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 .6 0" />
          </filter>
        </defs>
        <g filter="url(#softVR)">
          <rect x="0" y="0" width="900" height="420" rx="28" fill="url(#gVideoHeroVR)" />
        </g>
        {/* subtle moving gradient inside shield */}
        <g clipPath="url(#clipVR)">
          <rect x="0" y="0" width="900" height="420" fill="url(#gVideoHeroVR)">
            <animate attributeName="x" values="0;20;0" dur="8s" repeatCount="indefinite" />
          </rect>
        </g>
        {/* accent UI */}
        <g transform="translate(560,120)">
          <rect x="0" y="0" width="220" height="140" rx="14" fill={color.white} stroke={color.slate300} strokeWidth="3" />
          <rect x="20" y="28" width="160" height="12" rx="6" fill={color.indigo600} />
          <rect x="20" y="56" width="130" height="10" rx="5" fill={color.slate500} />
          <rect x="20" y="78" width="100" height="10" rx="5" fill={color.slate500} />
        </g>
      </svg>
    );
  }
  return (
    <svg viewBox="0 0 900 420" className="w-full h-auto block" role="img" aria-label={title}>
      <defs>
        <linearGradient id="gBGVR" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor={color.cyan100} />
          <stop offset="60%" stopColor={color.indigo100} />
          <stop offset="100%" stopColor={color.emerald100} />
        </linearGradient>
        <clipPath id="clipVR">
          <path d="M140,70 l200,80 v90 c0,100 -65,184 -200,236 C106,360 40,276 40,170 v-90 z" transform="translate(200,20)" />
        </clipPath>
        <filter id="softVR" x="-20%" y="-20%" width="140%" height="140%">
          <feGaussianBlur in="SourceGraphic" stdDeviation="8" result="b" />
          <feColorMatrix in="b" type="matrix" values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 .6 0" />
        </filter>
      </defs>
      <g filter="url(#softVR)">
        <rect x="0" y="0" width="900" height="420" rx="28" fill="url(#gBGVR)" />
      </g>
      <foreignObject x="0" y="0" width="900" height="420" clipPath="url(#clipVR)">
        <video src={src} poster={poster} autoPlay muted loop playsInline style={{ width: "100%", height: "100%", objectFit: "cover" }} />
      </foreignObject>
      <g transform="translate(560,120)">
        <rect x="0" y="0" width="220" height="140" rx="14" fill={color.white} stroke={color.slate300} strokeWidth="3" />
        <rect x="20" y="28" width="160" height="12" rx="6" fill={color.indigo600} />
        <rect x="20" y="56" width="130" height="10" rx="5" fill={color.slate500} />
        <rect x="20" y="78" width="100" height="10" rx="5" fill={color.slate500} />
      </g>
    </svg>
  );
};

/* -------------------- SVG helpers + Complex section SVGs -------------------- */
const BG = ({ id, stops }) => (
  <defs>
    <linearGradient id={id} x1="0" y1="0" x2="1" y2="1">
      {stops.map((s, i) => <stop key={i} offset={s.offset} stopColor={s.color} stopOpacity={s.opacity ?? 1} />)}
    </linearGradient>
  </defs>
);
const Card = ({ x, y, w, h, r = 16, fill = color.white, stroke, sw = 0, opacity = 1 }) => (
  <rect x={x} y={y} width={w} height={h} rx={r} fill={fill} stroke={stroke} strokeWidth={sw} opacity={opacity} />
);

/* Character-scene style per section (matching meanings) */
const ReportSVG = (props) => (
  <svg viewBox="0 0 760 360" role="img" aria-label="Right to Report" className="w-full h-full" {...props}>
    <BG id="gReport" stops={[{ offset: "0%", color: color.cyan50 }, { offset: "100%", color: color.indigo50 }]} />
    <rect x="0" y="0" width="760" height="360" rx="20" fill="url(#gReport)" />
    <Card x="60" y="70" w="280" h="200" r="18" fill={color.white} stroke={color.indigo300} sw="3" />
    <rect x="92" y="96" width="216" height="12" rx="6" fill={color.slate700} />
    <rect x="92" y="122" width="180" height="10" rx="5" fill={color.slate500} />
    <rect x="92" y="144" width="156" height="10" rx="5" fill={color.slate500} />
    <rect x="92" y="166" width="132" height="10" rx="5" fill={color.slate500} />
    <rect x="92" y="198" width="96" height="14" rx="7" fill={color.indigo600} />
    <g transform="translate(420,90)">
      <Card x="0" y="0" w="260" h="180" r="18" fill={color.white} stroke={color.cyan300} sw="3" />
      <path d="M20 40h220v80l-50 30H70l-50-30z" fill={color.cyan100} />
      <g transform="translate(188,22)">
        <path d="M34 -12l50 20v22c0 24-16 44-50 56-34-12-50-32-50-56V8l50-20z" fill={color.white} stroke={color.indigo400} strokeWidth="3" />
        <path d="M20 20l14 14 22-22" stroke={color.emerald400} strokeWidth="6" fill="none" strokeLinecap="round" />
      </g>
    </g>
  </svg>
);

const LegalAssistSVG = (props) => (
  <svg viewBox="0 0 760 360" role="img" aria-label="Legal Assistance" className="w-full h-full" {...props}>
    <rect x="0" y="0" width="760" height="360" rx="20" fill={color.indigo100} />
    <g transform="translate(60,70)">
      <Card x="0" y="0" w="220" h="180" r="16" fill={color.white} />
      <rect x="24" y="24" width="172" height="14" rx="7" fill={color.indigo600} />
      <rect x="24" y="56" width="148" height="10" rx="5" fill={color.slate500} />
      <rect x="24" y="76" width="128" height="10" rx="5" fill={color.slate500} />
      <rect x="24" y="96" width="108" height="10" rx="5" fill={color.slate500} />
    </g>
    <g transform="translate(330,80)">
      <path d="M80 0v150" stroke={color.slate700} strokeWidth="6" />
      <circle cx="80" cy="0" r="8" fill={color.slate700} />
      <path d="M20 40h120" stroke={color.slate700} strokeWidth="6" />
      <path d="M30 40c0 40 30 68 70 68s70-28 70-68" stroke={color.indigo300} strokeWidth="4" fill="none" />
    </g>
  </svg>
);

const SupportServicesSVG = (props) => (
  <svg viewBox="0 0 760 360" role="img" aria-label="Support Services" className="w-full h-full" {...props}>
    <rect x="0" y="0" width="760" height="360" rx="20" fill={color.emerald100} />
    <g transform="translate(110,80)">
      <circle cx="60" cy="40" r="26" fill={color.cyan500} />
      <rect x="34" y="70" width="52" height="80" rx="12" fill={color.white} />
      <circle cx="180" cy="40" r="26" fill={color.indigo400} />
      <rect x="154" y="70" width="52" height="80" rx="12" fill={color.white} />
      <rect x="90" y="40" width="34" height="10" rx="5" fill={color.emerald400} />
    </g>
    <Card x="380" y="80" w="280" h="200" r="18" fill={color.white} stroke={color.emerald300} sw="3" />
    <g transform="translate(404,106)" fill="none" stroke={color.emerald600} strokeWidth="6" strokeLinecap="round">
      <path d="M6 6l14 14 24-24" />
      <path d="M6 56l14 14 24-24" />
      <path d="M6 106l14 14 24-24" />
    </g>
  </svg>
);

const EvidenceSVG = (props) => (
  <svg viewBox="0 0 760 360" role="img" aria-label="Preserve Evidence" className="w-full h-full" {...props}>
    <rect x="0" y="0" width="760" height="360" rx="20" fill={color.cyan100} />
    <g transform="translate(80,80)">
      <Card x="0" y="0" w="260" h="180" r="18" fill={color.white} stroke={color.cyan300} sw="3" />
      <rect x="30" y="36" width="200" height="16" rx="8" fill={color.slate500} />
      <rect x="30" y="68" width="160" height="12" rx="6" fill={color.slate500} />
      <rect x="30" y="92" width="128" height="12" rx="6" fill={color.slate500} />
    </g>
    <g transform="translate(420,80)">
      <path d="M120 100v-30a30 30 0 0 1 60 0v30" stroke={color.indigo600} strokeWidth="8" fill="none" />
      <Card x="100" y="100" w="100" h="100" r="16" fill={color.white} stroke={color.indigo600} sw="4" />
      <rect x="130" y="140" width="40" height="10" rx="5" fill={color.indigo600} />
    </g>
  </svg>
);

const StayInformedSVG = (props) => (
  <svg viewBox="0 0 760 360" role="img" aria-label="Stay Informed" className="w-full h-full" {...props}>
    <rect x="0" y="0" width="760" height="360" rx="20" fill={color.indigo50} />
    <g transform="translate(120,80)">
      <rect x="0" y="0" width="520" height="12" rx="6" fill={color.indigo300} />
      <circle cx="40" cy="6" r="12" fill={color.indigo600} />
      <circle cx="220" cy="6" r="12" fill={color.cyan500} />
      <circle cx="400" cy="6" r="12" fill={color.emerald400} />
    </g>
    <Card x="140" y="130" w="480" h="160" r="18" fill={color.white} stroke={color.indigo300} sw="3" />
    <rect x="170" y="160" width="420" height="12" rx="6" fill={color.slate500} />
    <rect x="170" y="186" width="360" height="10" rx="5" fill={color.slate500} />
    <rect x="170" y="210" width="320" height="10" rx="5" fill={color.slate500} />
  </svg>
);

const CRCCRightsSVG = (props) => (
  <svg viewBox="0 0 760 360" role="img" aria-label="CRCCF Role" className="w-full h-full" {...props}>
    <rect x="0" y="0" width="760" height="360" rx="20" fill={color.emerald100} />
    <g transform="translate(80,90)">
      <circle cx="40" cy="40" r="22" fill={color.cyan500} />
      <circle cx="110" cy="40" r="22" fill={color.indigo400} />
      <circle cx="80" cy="90" r="22" fill={color.emerald400} />
      <path d="M40 40L110 40L80 90Z" fill="none" stroke={color.slate700} strokeWidth="3" />
    </g>
    <Card x="300" y="70" w="380" h="220" r="18" fill={color.white} stroke={color.emerald300} sw="3" />
  </svg>
);

const ConclusionSVG = (props) => (
  <svg viewBox="0 0 760 360" role="img" aria-label="Conclusion" className="w-full h-full" {...props}>
    <rect x="0" y="0" width="760" height="360" rx="20" fill={color.cyan100} />
    <g transform="translate(120,120)" stroke={color.indigo600} strokeWidth="6" fill="none" strokeLinecap="round">
      <path d="M0 80c60-40 120-40 180 0" />
      <path d="M180 80c60-40 120-40 180 0" />
    </g>
  </svg>
);

/* -------------------- Section Wrapper -------------------- */
const SectionBlock = ({ id, title, content, SVG, reverse = false }) => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start 80%", "end 20%"] });
  const y = useSpring(useTransform(scrollYProgress, [0, 1], [18, -18]), { stiffness: 120, damping: 20 });
  const opacity = useTransform(scrollYProgress, [0, 1], [0.6, 1]);
  const paragraphs = content.split("\n").map((p, i) => (
    <p key={i} className="text-[15px] sm:text-base text-gray-700 leading-relaxed whitespace-pre-wrap">{p}</p>
  ));
  return (
    <section id={id} ref={ref} className="mt-8 sm:mt-10 md:mt-12 lg:mt-16">
      <motion.div style={{ opacity }} initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-80px" }} className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-6 md:gap-8 lg:gap-10 items-start">
        <motion.div style={{ y }} className={`relative min-w-0 ${reverse ? "md:order-2" : "md:order-1"}`}>
          <div className="absolute -inset-2 rounded-2xl bg-gradient-to-tr from-cyan-100 via-indigo-100 to-emerald-100 blur-md sm:blur-lg md:blur-xl" aria-hidden="true" />
          <div className="relative rounded-2xl border border-gray-200 bg-white p-3 sm:p-4 shadow-sm">
            <div className="w-full h-auto max-h-64 sm:max-h-80 md:max-h-none overflow-hidden"><SVG /></div>
          </div>
        </motion.div>
        <div className={`${reverse ? "md:order-1" : "md:order-2"} min-w-0`}>
          <h2 className="text-[20px] sm:text-2xl font-semibold text-gray-900 leading-snug">{title}</h2>
          <div className="mt-2.5 sm:mt-3 space-y-3">{paragraphs}</div>
        </div>
      </motion.div>
    </section>
  );
};

/* -------------------- PAGE -------------------- */
export default function RightOfCybercrimeVictims() {
  const { container, itemUp } = useAnims();
  const heroRef = useRef(null);
  const { scrollYProgress } = useScroll({ target: heroRef, offset: ["start start", "end start"] });
  const heroY = useTransform(scrollYProgress, [0, 1], [0, -40]);

  const svgMap = { ReportSVG, LegalAssistSVG, SupportServicesSVG, EvidenceSVG, StayInformedSVG, CRCCRightsSVG, ConclusionSVG };

  return (
    <motion.section id="top" variants={container} initial="hidden" animate="show" className="relative max-w-6xl mx-auto px-4 sm:px-6 md:px-8 py-8 sm:py-10 md:py-12 lg:py-14">
      <motion.nav variants={itemUp} className="text-xs sm:text-sm text-gray-500 mb-3 sm:mb-4" aria-label="Breadcrumb">
        <Link to="/" className="hover:underline">Home</Link><span aria-hidden="true"> › </span>
        <Link to="/report/victim-rights-support" className="hover:underline">Victim Rights & Support</Link><span aria-hidden="true"> › </span>
        <span className="text-gray-700" aria-current="page">Right of Cybercrime Victims</span>
      </motion.nav>

      <div ref={heroRef} className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-6 md:gap-8 lg:gap-10 items-center">
        <motion.div variants={itemUp}>
          <h1 className="text-[22px] sm:text-3xl font-bold text-gray-900">{data.title}</h1>
          <p className="mt-2 text-cyan-800 font-medium text-[15px] sm:text-base">{data.tagline}</p>
          <div className="mt-3 sm:mt-4 flex flex-wrap gap-2">
            {["Report", "Legal Aid", "Support", "Evidence", "Updates"].map((pill) => (
              <span key={pill} className="px-2.5 sm:px-3 py-1.5 text-xs sm:text-sm rounded-full bg-cyan-100 text-cyan-800 border border-cyan-200">{pill}</span>
            ))}
          </div>
        </motion.div>

        <motion.div style={{ y: heroY }} className="relative">
          <div className="absolute -inset-2 rounded-2xl bg-gradient-to-tr from-cyan-100 via-indigo-100 to-emerald-100 blur-md sm:blur-lg md:blur-xl" aria-hidden="true" />
          <div className="relative rounded-2xl border border-gray-200 bg-white p-3 sm:p-4 shadow-sm">
            <div className="w-full h-auto max-h-72 sm:max-h-80 md:max-h-none overflow-hidden">
              {/* Put your page-specific video here */}
              <VideoHeroVictimRights src="/assets/video/victim-rights-hero.webm" poster="/assets/video/victim-rights-hero.jpg" />
            </div>
          </div>
        </motion.div>
      </div>

      <div className="mt-8 sm:mt-10 md:mt-12">
        {data.sections.map((sec, idx) => {
          const SVGComp = ({ ReportSVG, LegalAssistSVG, SupportServicesSVG, EvidenceSVG, StayInformedSVG, CRCCRightsSVG, ConclusionSVG }[sec.svg]) || ReportSVG;
          return <SectionBlock key={sec.id} id={sec.id} title={sec.heading} content={sec.content} SVG={SVGComp} reverse={idx % 2 === 1} />;
        })}
      </div>

      <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mt-10 md:mt-12 max-w-4xl">
        <div className="rounded-xl border border-gray-200 bg-white p-4 sm:p-5 shadow-sm">
          <p className="text-sm text-gray-600">⚖️ <strong>Disclaimer:</strong> CRCCF provides support and guidance, but does not replace law enforcement or court procedures. All information is handled with confidentiality and in compliance with the IT Act & DPDP Act.</p>
        </div>
      </motion.div>
    </motion.section>
  );
}
