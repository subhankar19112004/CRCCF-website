// // src/pages/victimSupport/VictimAssistanceProtection.jsx
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
//   title: "Victim Assistance & Protection – CRCCF",
//   tagline:
//     "Supporting You. Safeguarding Your Safety. Ensuring Confidence and Security.",
//   sections: [
//     {
//       id: "right-crisis",
//       heading: "1. Right to Immediate Crisis Support",
//       content: `Cybercrime victims often face urgent threats to their personal safety, finances, or digital assets. Every victim has the right to prompt and structured crisis assistance from trained professionals.
// CRCCF ensures rapid response, guiding victims through immediate protective measures, including securing accounts, freezing compromised transactions, and managing exposure to online threats. By intervening swiftly, we help victims stabilize their situation, reduce potential damage, and regain a sense of control over their circumstances.`,
//       svg: "CrisisSVG",
//     },
//     {
//       id: "right-forensics",
//       heading: "2. Right to Technical Forensic Support",
//       content: `Digital crimes frequently involve complex technical evidence that requires expert handling. Victims are entitled to professional guidance in examining devices, networks, and online activity to preserve integrity and strengthen legal claims.
// CRCCF connects victims with certified cyber forensic experts, ensuring evidence is collected, analyzed, and documented in a legally admissible manner. This technical support is crucial for building a robust case and ensuring that perpetrators are held accountable effectively.`,
//       svg: "ForensicsSVG",
//     },
//     {
//       id: "right-safety-planning",
//       heading: "3. Right to Personalized Safety Planning",
//       content: `Victim protection is not one-size-fits-all; each situation requires a tailored security strategy. Victims have the right to develop individualized safety plans that consider both online and offline environments.
// CRCCF assists victims in creating these personalized plans, including device security, password management, risk assessment, and monitoring for suspicious activity. Such proactive measures allow victims to maintain control, prevent further attacks, and feel confident in navigating digital spaces safely.`,
//       svg: "SafetyPlanSVG",
//     },
//     {
//       id: "right-community",
//       heading: "4. Right to Community and Peer Support",
//       content: `Victims often experience isolation and vulnerability after cyber incidents. Every victim has the right to engage with supportive communities and peer networks.
// CRCCF facilitates access to peer support groups, where victims can share experiences, receive encouragement, and gain practical advice on coping strategies. These networks foster emotional resilience, reduce feelings of isolation, and reinforce confidence during the recovery journey.`,
//       svg: "CommunitySVG",
//     },
//     {
//       id: "right-strategy",
//       heading: "5. Right to Strategic Guidance During Legal Processes",
//       content: `Beyond legal representation, victims have the right to comprehensive strategic advice throughout the investigative and judicial process.
// CRCCF guides victims on prioritizing actions, preparing documentation, and choosing the most effective legal routes, including reporting, litigation, or alternative dispute resolution. This ensures that victims use resources efficiently, make informed decisions, and maximize the likelihood of achieving justice.`,
//       svg: "StrategySVG",
//     },
//     {
//       id: "right-literacy",
//       heading: "6. Right to Ongoing Digital Literacy and Threat Awareness",
//       content: `Protection extends beyond the immediate incident. Victims have the right to continuous education on cybersecurity risks, emerging threats, and safe online practices.
// CRCCF provides workshops, resources, and practical guidance to enhance digital literacy and awareness. By empowering victims with knowledge, we help prevent future cyber incidents and enable them to interact confidently in digital environments.`,
//       svg: "LiteracySVG",
//     },
//     {
//       id: "conclusion",
//       heading: "Conclusion: Comprehensive Assistance & Protection with CRCCF",
//       content: `Victims of cybercrime have the right to prompt crisis response, expert technical support, personalized safety planning, community engagement, strategic guidance, and ongoing digital literacy. Upholding these rights ensures that victims recover with confidence, maintain security, and navigate legal processes effectively.
// CRCCF is committed to delivering holistic assistance, advocacy, and protective measures, ensuring that every victim feels supported, informed, and empowered. Our integrated approach restores trust, reinforces safety, and guarantees that justice is pursued efficiently.
// With CRCCF, victims can reach out without hesitation, confident that they are supported by a trusted, legally-backed, and empathetic organization dedicated to their protection and well-being.`,
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

// /* -------------------- Complex SVGs (200%+ richer) -------------------- */
// /* Hero */
// const HeroSVG = (props) => (
//   <svg viewBox="0 0 900 420" role="img" aria-labelledby="heroT heroD" className="w-full h-auto" {...props}>
//     <title id="heroT">Victim Assistance & Protection</title>
//     <desc id="heroD">Shield, support hands, secure devices, and flowing gradient backdrop.</desc>
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

//     {/* Shield with check */}
//     <g transform="translate(120,120)">
//       <path
//         d="M120 -10l140 58v64c0 68-44 125-140 160C124 337 80 280 80 212v-64l40-158z"
//         fill={color.white}
//         stroke={color.indigo400}
//         strokeWidth="5"
//       />
//       <path d="M104 140l34 34 56-56" stroke={color.emerald400} strokeWidth="10" fill="none" strokeLinecap="round" />
//     </g>

//     {/* Helping hands */}
//     <g transform="translate(480,170)" fill="none" stroke={color.cyan500} strokeWidth="8" strokeLinecap="round">
//       <path d="M0 40c40-24 80-24 120 0" />
//       <path d="M0 40c-24 14-24 28 0 42" />
//       <path d="M120 40c24 14 24 28 0 42" />
//     </g>

//     {/* Device card */}
//     <g transform="translate(640,200)">
//       <Card x="0" y="0" w="160" h="110" r="14" fill={color.white} stroke={color.slate300} sw="3" />
//       <rect x="18" y="18" width="124" height="12" rx="6" fill={color.indigo600} />
//       <rect x="18" y="44" width="96" height="10" rx="5" fill={color.slate500} />
//       <rect x="18" y="66" width="78" height="10" rx="5" fill={color.slate500} />
//     </g>
//   </svg>
// );

// /* Sections */
// const CrisisSVG = (props) => (
//   <svg viewBox="0 0 760 360" role="img" aria-label="Immediate Crisis Support" className="w-full h-full" {...props}>
//     <BG id="gCrisis" stops={[{ offset: "0%", color: color.rose100 }, { offset: "100%", color: color.amber100 }]} />
//     <rect x="0" y="0" width="760" height="360" rx="20" fill="url(#gCrisis)" />
//     {/* Hotline + lock + freeze */}
//     <g transform="translate(60,80)">
//       <Card x="0" y="0" w="280" h="180" r="18" fill={color.white} stroke={color.rose400} sw="3" />
//       <rect x="24" y="24" width="180" height="12" rx="6" fill={color.slate500} />
//       <rect x="24" y="52" width="150" height="10" rx="5" fill={color.slate500} />
//       <rect x="24" y="74" width="120" height="10" rx="5" fill={color.slate500} />
//       <rect x="24" y="106" width="110" height="16" rx="8" fill={color.indigo600} />
//     </g>
//     <g transform="translate(420,100)">
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

// const ForensicsSVG = (props) => (
//   <svg viewBox="0 0 760 360" role="img" aria-label="Technical Forensic Support" className="w-full h-full" {...props}>
//     <rect x="0" y="0" width="760" height="360" rx="20" fill={color.indigo50} />
//     {/* Forensic workstation */}
//     <g transform="translate(80,80)">
//       <Card x="0" y="0" w="280" h="180" r="18" fill={color.white} stroke={color.indigo300} sw="3" />
//       <rect x="26" y="30" width="160" height="12" rx="6" fill={color.indigo600} />
//       <rect x="26" y="60" width="190" height="10" rx="5" fill={color.slate500} />
//       <rect x="26" y="82" width="150" height="10" rx="5" fill={color.slate500} />
//       <rect x="26" y="104" width="130" height="10" rx="5" fill={color.slate500} />
//     </g>
//     {/* Hash/check & chain-of-custody */}
//     <g transform="translate(420,90)">
//       <circle cx="60" cy="60" r="46" fill={color.white} stroke={color.emerald300} strokeWidth="4" />
//       <path d="M40 60l16 16 28-28" stroke={color.emerald600} strokeWidth="8" fill="none" strokeLinecap="round" />
//       <rect x="140" y="40" width="180" height="36" rx="10" fill={color.indigo600} />
//       <rect x="148" y="48" width="164" height="20" rx="8" fill={color.white} opacity="0.25" />
//     </g>
//   </svg>
// );

// const SafetyPlanSVG = (props) => (
//   <svg viewBox="0 0 760 360" role="img" aria-label="Personalized Safety Planning" className="w-full h-full" {...props}>
//     <rect x="0" y="0" width="760" height="360" rx="20" fill={color.emerald100} />
//     {/* Plan board */}
//     <g transform="translate(100,80)">
//       <Card x="0" y="0" w="260" h="200" r="18" fill={color.white} stroke={color.emerald300} sw="3" />
//       <rect x="22" y="28" width="140" height="12" rx="6" fill={color.cyan700} />
//       <rect x="22" y="56" width="170" height="10" rx="5" fill={color.slate500} />
//       <rect x="22" y="78" width="150" height="10" rx="5" fill={color.slate500} />
//       <rect x="22" y="100" width="120" height="10" rx="5" fill={color.slate500} />
//     </g>
//     {/* Shielded device */}
//     <g transform="translate(420,100)">
//       <Card x="0" y="0" w="220" h="150" r="16" fill={color.white} stroke={color.cyan300} sw="3" />
//       <rect x="18" y="24" width="184" height="14" rx="7" fill={color.indigo600} />
//       <path d="M160 108l20 20 28-28" stroke={color.emerald600} strokeWidth="8" fill="none" strokeLinecap="round" />
//     </g>
//   </svg>
// );

// const CommunitySVG = (props) => (
//   <svg viewBox="0 0 760 360" role="img" aria-label="Community & Peer Support" className="w-full h-full" {...props}>
//     <BG id="gComm" stops={[{ offset: "0%", color: color.cyan50 }, { offset: "100%", color: color.indigo50 }]} />
//     <rect x="0" y="0" width="760" height="360" rx="20" fill="url(#gComm)" />
//     {/* People network */}
//     <g transform="translate(120,120)">
//       <circle cx="0" cy="0" r="24" fill={color.cyan500} />
//       <circle cx="120" cy="-20" r="24" fill={color.indigo400} />
//       <circle cx="60" cy="60" r="24" fill={color.emerald400} />
//       <path d="M0 0L60 60L120 -20Z" stroke={color.slate700} strokeWidth="3" fill="none" />
//     </g>
//     {/* Chat card */}
//     <g transform="translate(380,90)">
//       <Card x="0" y="0" w="300" h="200" r="18" fill={color.white} stroke={color.slate300} sw="3" />
//       <rect x="24" y="30" width="220" height="12" rx="6" fill={color.slate500} />
//       <rect x="24" y="60" width="180" height="10" rx="5" fill={color.slate500} />
//       <rect x="24" y="86" width="200" height="10" rx="5" fill={color.slate500} />
//     </g>
//   </svg>
// );

// const StrategySVG = (props) => (
//   <svg viewBox="0 0 760 360" role="img" aria-label="Strategic Guidance" className="w-full h-full" {...props}>
//     <rect x="0" y="0" width="760" height="360" rx="20" fill={color.amber100} />
//     {/* Strategy map */}
//     <g transform="translate(80,90)">
//       <Card x="0" y="0" w="260" h="180" r="18" fill={color.white} />
//       <path d="M30 130c40-20 80-40 120-10" stroke={color.indigo600} strokeWidth="6" fill="none" />
//       <circle cx="30" cy="130" r="8" fill={color.indigo600} />
//       <circle cx="150" cy="120" r="8" fill={color.cyan500} />
//       <circle cx="210" cy="140" r="8" fill={color.emerald400} />
//     </g>
//     {/* Document & route options */}
//     <g transform="translate(380,90)">
//       <Card x="0" y="0" w="300" h="180" r="18" fill={color.white} stroke={color.slate300} sw="3" />
//       <rect x="24" y="30" width="220" height="12" rx="6" fill={color.slate500} />
//       <rect x="24" y="60" width="180" height="10" rx="5" fill={color.slate500} />
//       <rect x="24" y="86" width="200" height="10" rx="5" fill={color.slate500} />
//       <rect x="24" y="120" width="160" height="14" rx="7" fill={color.indigo600} />
//     </g>
//   </svg>
// );

// const LiteracySVG = (props) => (
//   <svg viewBox="0 0 760 360" role="img" aria-label="Digital Literacy & Threat Awareness" className="w-full h-full" {...props}>
//     <rect x="0" y="0" width="760" height="360" rx="20" fill={color.indigo100} />
//     {/* Workshop board */}
//     <g transform="translate(100,80)">
//       <Card x="0" y="0" w="260" h="200" r="18" fill={color.white} stroke={color.indigo300} sw="3" />
//       <rect x="22" y="28" width="180" height="12" rx="6" fill={color.indigo600} />
//       <rect x="22" y="56" width="160" height="10" rx="5" fill={color.slate500} />
//       <rect x="22" y="78" width="140" height="10" rx="5" fill={color.slate500} />
//       <rect x="22" y="102" width="120" height="10" rx="5" fill={color.slate500} />
//     </g>
//     {/* Book + shield */}
//     <g transform="translate(420,110)">
//       <Card x="0" y="0" w="220" h="140" r="16" fill={color.white} stroke={color.cyan300} sw="3" />
//       <path d="M26 36h80M26 60h100M26 84h70" stroke={color.slate500} strokeWidth="6" />
//       <g transform="translate(160,20)">
//         <path d="M20 -8l36 14v16c0 18-12 34-36 44-24-10-36-26-36-44V6l36-14z" fill={color.white} stroke={color.indigo400} strokeWidth="3" />
//         <path d="M8 18l10 10 16-16" stroke={color.emerald400} strokeWidth="6" fill="none" strokeLinecap="round" />
//       </g>
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

// /* -------------------- Section Wrapper (alternating + scroll reveal + precise alignment) -------------------- */
// const SectionBlock = ({ id, title, content, SVG, reverse = false }) => {
//   const ref = useRef(null);
//   const { scrollYProgress } = useScroll({ target: ref, offset: ["start 80%", "end 20%"] });
//   const y = useSpring(useTransform(scrollYProgress, [0, 1], [18, -18]), { stiffness: 120, damping: 20 });
//   const opacity = useTransform(scrollYProgress, [0, 1], [0.6, 1]);

//   // keep original line breaks exactly
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
// export default function VictimAssistanceProtection() {
//   const { container, itemUp } = useAnims();

//   const heroRef = useRef(null);
//   const { scrollYProgress } = useScroll({ target: heroRef, offset: ["start start", "end start"] });
//   const heroY = useTransform(scrollYProgress, [0, 1], [0, -40]); // gentle parallax up

//   const svgMap = {
//     CrisisSVG,
//     ForensicsSVG,
//     SafetyPlanSVG,
//     CommunitySVG,
//     StrategySVG,
//     LiteracySVG,
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
//         <span className="text-gray-700" aria-current="page">Victim Assistance & Protection</span>
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
//             {["Crisis", "Forensics", "Safety", "Community", "Strategy", "Literacy"].map((pill) => (
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

//       {/* Sections (data intact; alternating SVG/content; precise alignment) */}
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

// src/pages/victimSupport/VictimAssistanceProtection.jsx
import React, { useRef } from "react";
import { Link } from "react-router-dom";
import { motion, useReducedMotion, useScroll, useTransform, useSpring } from "framer-motion";

/* -------------------------------- Motion -------------------------------- */
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

/* -------------------------------- Palette -------------------------------- */
const color = {
  cyan25:  "#F5FEFF", cyan50:  "#ECFEFF", cyan100: "#CFFAFE", cyan200: "#A5F3FC", cyan300: "#67E8F9", cyan500: "#06B6D4", cyan700: "#0E7490",
  indigo25:"#F7F8FF", indigo50:"#EEF2FF", indigo100:"#E0E7FF", indigo300:"#A5B4FC", indigo400:"#818CF8", indigo600:"#4F46E5", indigo800:"#3730A3",
  emerald50:"#ECFDF5", emerald100:"#D1FAE5", emerald200:"#A7F3D0", emerald300:"#86EFAC", emerald400:"#34D399", emerald600:"#059669",
  amber50:"#FFFBEB", amber100:"#FEF3C7", amber300:"#FCD34D",
  rose50:"#FFF1F2", rose100:"#FFE4E6", rose400:"#FB7185",
  slate200:"#E2E8F0", slate300:"#CBD5E1", slate400:"#94A3B8", slate500:"#64748B", slate700:"#334155", slate900:"#0F172A",
  white:"#FFFFFF",
};

/* --------------------------- DATA (kept exactly) --------------------------- */
const data = {
  title: "Victim Assistance & Protection – CRCCF",
  tagline: "Supporting You. Safeguarding Your Safety. Ensuring Confidence and Security.",
  sections: [
    {
      id: "right-crisis",
      heading: "1. Right to Immediate Crisis Support",
      content: `Cybercrime victims often face urgent threats to their personal safety, finances, or digital assets. Every victim has the right to prompt and structured crisis assistance from trained professionals.
CRCCF ensures rapid response, guiding victims through immediate protective measures, including securing accounts, freezing compromised transactions, and managing exposure to online threats. By intervening swiftly, we help victims stabilize their situation, reduce potential damage, and regain a sense of control over their circumstances.`,
      svg: "CrisisSVG",
    },
    {
      id: "right-forensics",
      heading: "2. Right to Technical Forensic Support",
      content: `Digital crimes frequently involve complex technical evidence that requires expert handling. Victims are entitled to professional guidance in examining devices, networks, and online activity to preserve integrity and strengthen legal claims.
CRCCF connects victims with certified cyber forensic experts, ensuring evidence is collected, analyzed, and documented in a legally admissible manner. This technical support is crucial for building a robust case and ensuring that perpetrators are held accountable effectively.`,
      svg: "ForensicsSVG",
    },
    {
      id: "right-safety-planning",
      heading: "3. Right to Personalized Safety Planning",
      content: `Victim protection is not one-size-fits-all; each situation requires a tailored security strategy. Victims have the right to develop individualized safety plans that consider both online and offline environments.
CRCCF assists victims in creating these personalized plans, including device security, password management, risk assessment, and monitoring for suspicious activity. Such proactive measures allow victims to maintain control, prevent further attacks, and feel confident in navigating digital spaces safely.`,
      svg: "SafetyPlanSVG",
    },
    {
      id: "right-community",
      heading: "4. Right to Community and Peer Support",
      content: `Victims often experience isolation and vulnerability after cyber incidents. Every victim has the right to engage with supportive communities and peer networks.
CRCCF facilitates access to peer support groups, where victims can share experiences, receive encouragement, and gain practical advice on coping strategies. These networks foster emotional resilience, reduce feelings of isolation, and reinforce confidence during the recovery journey.`,
      svg: "CommunitySVG",
    },
    {
      id: "right-strategy",
      heading: "5. Right to Strategic Guidance During Legal Processes",
      content: `Beyond legal representation, victims have the right to comprehensive strategic advice throughout the investigative and judicial process.
CRCCF guides victims on prioritizing actions, preparing documentation, and choosing the most effective legal routes, including reporting, litigation, or alternative dispute resolution. This ensures that victims use resources efficiently, make informed decisions, and maximize the likelihood of achieving justice.`,
      svg: "StrategySVG",
    },
    {
      id: "right-literacy",
      heading: "6. Right to Ongoing Digital Literacy and Threat Awareness",
      content: `Protection extends beyond the immediate incident. Victims have the right to continuous education on cybersecurity risks, emerging threats, and safe online practices.
CRCCF provides workshops, resources, and practical guidance to enhance digital literacy and awareness. By empowering victims with knowledge, we help prevent future cyber incidents and enable them to interact confidently in digital environments.`,
      svg: "LiteracySVG",
    },
    {
      id: "conclusion",
      heading: "Conclusion: Comprehensive Assistance & Protection with CRCCF",
      content: `Victims of cybercrime have the right to prompt crisis response, expert technical support, personalized safety planning, community engagement, strategic guidance, and ongoing digital literacy. Upholding these rights ensures that victims recover with confidence, maintain security, and navigate legal processes effectively.
CRCCF is committed to delivering holistic assistance, advocacy, and protective measures, ensuring that every victim feels supported, informed, and empowered. Our integrated approach restores trust, reinforces safety, and guarantees that justice is pursued efficiently.
With CRCCF, victims can reach out without hesitation, confident that they are supported by a trusted, legally-backed, and empathetic organization dedicated to their protection and well-being.`,
      svg: "ConclusionSVG",
    },
  ],
};

/* ------------------------- Video SVG (self-contained) ------------------------- */
/* Masked video in shield shape with poster + animated gradient fallback.
   Works in Chromium; provides graceful fallback in Safari/Firefox. */
const VideoHeroAssistance = ({ src = "", poster = "" }) => {
  const prefersReduced =
    typeof window !== "undefined" &&
    window.matchMedia &&
    window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  const title = "Victim Assistance & Protection";
  const desc = "Helping hands, shielded device, rapid response motif.";

  // Fallback when motion reduced or no src
  if (prefersReduced || !src) {
    return (
      <svg viewBox="0 0 900 420" role="img" aria-labelledby="vhTitleAP vhDescAP" className="w-full h-auto">
        <title id="vhTitleAP">{title}</title>
        <desc id="vhDescAP">{desc}</desc>
        <defs>
          <linearGradient id="vhAP_grad" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor={color.cyan100}>
              <animate attributeName="offset" values="0;0.15;0" dur="8s" repeatCount="indefinite" />
            </stop>
            <stop offset="60%" stopColor={color.indigo100}>
              <animate attributeName="offset" values="0.6;0.85;0.6" dur="8s" repeatCount="indefinite" />
            </stop>
            <stop offset="100%" stopColor={color.emerald100} />
          </linearGradient>
          <clipPath id="vhAP_clip">
            <path d="M140,70 l200,80 v90 c0,100 -65,184 -200,236 C106,360 40,276 40,170 v-90 z" transform="translate(200,20)" />
          </clipPath>
          <filter id="vhAP_soft" x="-20%" y="-20%" width="140%" height="140%">
            <feGaussianBlur in="SourceGraphic" stdDeviation="8" result="b" />
            <feColorMatrix in="b" type="matrix" values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 .6 0" />
          </filter>
        </defs>
        <g filter="url(#vhAP_soft)">
          <rect x="0" y="0" width="900" height="420" rx="28" fill="url(#vhAP_grad)" />
        </g>
        <g clipPath="url(#vhAP_clip)">
          <rect x="0" y="0" width="900" height="420" fill="url(#vhAP_grad)">
            <animate attributeName="x" values="0;18;0" dur="8s" repeatCount="indefinite" />
          </rect>
        </g>
        {/* Small animated pulse badge for "rapid response" */}
        <g transform="translate(560,120)">
          <rect x="0" y="0" width="220" height="140" rx="14" fill={color.white} stroke={color.slate300} strokeWidth="3" />
          <circle cx="200" cy="20" r="6" fill={color.emerald400}>
            <animate attributeName="r" values="6;10;6" dur="1.8s" repeatCount="indefinite" />
            <animate attributeName="fill" values="#34D399;#86EFAC;#34D399" dur="1.8s" repeatCount="indefinite" />
          </circle>
          <rect x="20" y="28" width="160" height="12" rx="6" fill={color.indigo600} />
          <rect x="20" y="56" width="130" height="10" rx="5" fill={color.slate500} />
          <rect x="20" y="78" width="100" height="10" rx="5" fill={color.slate500} />
        </g>
      </svg>
    );
  }

  // Primary masked video version
  return (
    <svg viewBox="0 0 900 420" className="w-full h-auto block" role="img" aria-label={title}>
      <defs>
        <linearGradient id="vhAP_bg" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor={color.cyan100} />
          <stop offset="60%" stopColor={color.indigo100} />
          <stop offset="100%" stopColor={color.emerald100} />
        </linearGradient>
        <filter id="vhAP_soft2" x="-20%" y="-20%" width="140%" height="140%">
          <feGaussianBlur in="SourceGraphic" stdDeviation="8" result="b" />
          <feColorMatrix in="b" type="matrix" values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 .6 0" />
        </filter>
        <clipPath id="vhAP_clip2">
          <path d="M140,70 l200,80 v90 c0,100 -65,184 -200,236 C106,360 40,276 40,170 v-90 z" transform="translate(200,20)" />
        </clipPath>
      </defs>

      <g filter="url(#vhAP_soft2)">
        <rect x="0" y="0" width="900" height="420" rx="28" fill="url(#vhAP_bg)" />
      </g>

      {/* Poster fallback + masked video */}
      <g clipPath="url(#vhAP_clip2)">
        {poster ? (
          <image href={poster} x="0" y="0" width="900" height="420" preserveAspectRatio="xMidYMid slice" opacity="0.85" />
        ) : null}
        <foreignObject x="0" y="0" width="900" height="420">
          <video
            src={src}
            poster={poster || undefined}
            autoPlay
            muted
            playsInline
            loop
            preload="metadata"
            crossOrigin="anonymous"
            style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }}
            onError={(e) => { e.currentTarget.style.display = "none"; }}
          >
            <source src={src} type="video/mp4" />
          </video>
        </foreignObject>
      </g>

      {/* Floating accent card */}
      <g transform="translate(560,120)">
        <rect x="0" y="0" width="220" height="140" rx="14" fill={color.white} stroke={color.slate300} strokeWidth="3" />
        <rect x="20" y="28" width="160" height="12" rx="6" fill={color.indigo600} />
        <rect x="20" y="56" width="130" height="10" rx="5" fill={color.slate500} />
        <rect x="20" y="78" width="100" height="10" rx="5" fill={color.slate500} />
      </g>
    </svg>
  );
};

/* ------------------------- SVG helpers & utilities ------------------------- */
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
const SoftGlow = ({ id = "glow", std = 6, alpha = 0.5 }) => (
  <defs>
    <filter id={id} x="-30%" y="-30%" width="160%" height="160%">
      <feGaussianBlur in="SourceGraphic" stdDeviation={std} result="b" />
      <feColorMatrix in="b" type="matrix" values={`1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 ${alpha} 0`} />
    </filter>
  </defs>
);

/* --------------------- Complex, realistic section SVGs --------------------- */
/* Each scene is layered: gradients + filters + details + micro-animations.   */

/* 1) Crisis: alert panel + locked vault + pulsing network nodes */
const CrisisSVG = (props) => (
  <svg viewBox="0 0 760 360" role="img" aria-label="Immediate Crisis Support" className="w-full h-full" {...props}>
    <BG id="gCrisisBG" stops={[{ offset: "0%", color: color.rose50 }, { offset: "100%", color: color.amber50 }]} />
    <SoftGlow id="glowCrisis" std={8} alpha={0.5} />
    <rect x="0" y="0" width="760" height="360" rx="20" fill="url(#gCrisisBG)" />

    {/* Network halo */}
    <g filter="url(#glowCrisis)" opacity="0.7">
      <circle cx="620" cy="80" r="30" fill={color.emerald200}>
        <animate attributeName="r" values="28;34;28" dur="2s" repeatCount="indefinite" />
      </circle>
      <circle cx="560" cy="130" r="12" fill={color.cyan200}>
        <animate attributeName="opacity" values="0.6;1;0.6" dur="2.2s" repeatCount="indefinite" />
      </circle>
      <circle cx="700" cy="120" r="10" fill={color.indigo300}>
        <animate attributeName="r" values="9;12;9" dur="1.6s" repeatCount="indefinite" />
      </circle>
    </g>

    {/* Incident ticket card */}
    <g transform="translate(60,70)">
      <Card x="0" y="0" w="300" h="200" r="18" fill={color.white} stroke={color.rose400} sw="3" />
      <rect x="26" y="28" width="200" height="14" rx="7" fill={color.slate700} />
      <rect x="26" y="58" width="170" height="12" rx="6" fill={color.slate500} />
      <rect x="26" y="80" width="150" height="12" rx="6" fill={color.slate500} />
      <rect x="26" y="102" width="120" height="12" rx="6" fill={color.slate500} />
      <rect x="26" y="136" width="120" height="20" rx="10" fill={color.indigo600} />
      <g transform="translate(260,26)" filter="url(#glowCrisis)">
        <circle cx="0" cy="0" r="10" fill={color.rose400} />
        <path d="M-2 -6v8M-2 8v0" stroke={color.white} strokeWidth="4" strokeLinecap="round" />
      </g>
    </g>

    {/* Safe box + padlock */}
    <g transform="translate(420,90)">
      <Card x="0" y="0" w="260" h="180" r="20" fill={color.white} stroke={color.indigo300} sw="3" />
      <g transform="translate(150,42)">
        <path d="M30 60v-24a24 24 0 0 1 48 0v24" stroke={color.indigo800} strokeWidth="8" fill="none" />
        <rect x="20" y="60" width="68" height="60" rx="10" fill={color.indigo50} stroke={color.indigo600} strokeWidth="4" />
        <circle cx="54" cy="92" r="8" fill={color.indigo600} />
      </g>
      {/* motion lines */}
      <path d="M24 30h80" stroke={color.cyan300} strokeWidth="4">
        <animate attributeName="stroke-width" values="4;2;4" dur="1.2s" repeatCount="indefinite" />
      </path>
      <path d="M24 54h60" stroke={color.emerald300} strokeWidth="4">
        <animate attributeName="stroke-width" values="4;2;4" dur="1.6s" repeatCount="indefinite" />
      </path>
    </g>
  </svg>
);

/* 2) Forensics: scope + magnifier over logs + binary stream */
const ForensicsSVG = (props) => (
  <svg viewBox="0 0 760 360" role="img" aria-label="Technical Forensic Support" className="w-full h-full" {...props}>
    <BG id="gForensicsBG" stops={[{ offset: "0%", color: color.indigo25 }, { offset: "100%", color: color.cyan50 }]} />
    <SoftGlow id="glowForensics" std={7} alpha={0.45} />
    <rect x="0" y="0" width="760" height="360" rx="20" fill="url(#gForensicsBG)" />

    {/* Binary ribbon */}
    <g transform="translate(40,40)" opacity="0.8">
      <rect x="0" y="0" width="680" height="14" rx="7" fill={color.indigo100} />
      <rect x="0" y="46" width="560" height="10" rx="5" fill={color.cyan100} />
      <rect x="0" y="84" width="620" height="12" rx="6" fill={color.indigo100} />
    </g>

    {/* Evidence board */}
    <g transform="translate(60,120)">
      <Card x="0" y="0" w="300" h="180" r="16" fill={color.white} stroke={color.indigo300} sw="3" />
      <rect x="24" y="26" width="170" height="12" rx="6" fill={color.indigo600} />
      <rect x="24" y="54" width="200" height="10" rx="5" fill={color.slate500} />
      <rect x="24" y="76" width="160" height="10" rx="5" fill={color.slate500} />
      <rect x="24" y="98" width="140" height="10" rx="5" fill={color.slate500} />
    </g>

    {/* Magnifier + verified stamp */}
    <g transform="translate(420,90)">
      <g filter="url(#glowForensics)">
        <circle cx="70" cy="70" r="52" fill={color.white} stroke={color.emerald300} strokeWidth="5" />
        <path d="M44 70l18 18 32-32" stroke={color.emerald600} strokeWidth="8" fill="none" strokeLinecap="round" />
      </g>
      <rect x="160" y="36" width="200" height="40" rx="12" fill={color.indigo600} />
      <rect x="170" y="46" width="180" height="20" rx="10" fill={color.white} opacity="0.25" />
      {/* magnifier handle */}
      <g transform="translate(100,130)">
        <rect x="0" y="0" width="20" height="60" rx="10" fill={color.slate400} />
        <rect x="3" y="8" width="14" height="44" rx="7" fill={color.slate500} />
      </g>
    </g>
  </svg>
);

/* 3) Safety Plan: layered checklist + shield + success badge */
const SafetyPlanSVG = (props) => (
  <svg viewBox="0 0 760 360" role="img" aria-label="Personalized Safety Planning" className="w-full h-full" {...props}>
    <BG id="gSafetyBG" stops={[{ offset: "0%", color: color.emerald50 }, { offset: "100%", color: color.cyan50 }]} />
    <SoftGlow id="glowSafety" std={7} alpha={0.5} />
    <rect x="0" y="0" width="760" height="360" rx="20" fill="url(#gSafetyBG)" />

    {/* Checklist */}
    <g transform="translate(80,70)">
      <Card x="0" y="0" w="280" h="220" r="18" fill={color.white} stroke={color.emerald300} sw="3" />
      <rect x="24" y="28" width="140" height="12" rx="6" fill={color.cyan700} />
      <g stroke={color.emerald600} strokeWidth="6" strokeLinecap="round" transform="translate(24,70)">
        <path d="M0 6l12 12 20-20" />
      </g>
      <rect x="60" y="64" width="170" height="10" rx="5" fill={color.slate500} />
      <g stroke={color.emerald600} strokeWidth="6" strokeLinecap="round" transform="translate(24,100)">
        <path d="M0 6l12 12 20-20" />
      </g>
      <rect x="60" y="94" width="150" height="10" rx="5" fill={color.slate500} />
      <g stroke={color.emerald600} strokeWidth="6" strokeLinecap="round" transform="translate(24,130)">
        <path d="M0 6l12 12 20-20" />
      </g>
      <rect x="60" y="124" width="120" height="10" rx="5" fill={color.slate500} />
    </g>

    {/* Shield card with success ribbon */}
    <g transform="translate(420,90)" filter="url(#glowSafety)">
      <Card x="0" y="0" w="240" h="180" r="20" fill={color.white} stroke={color.cyan300} sw="3" />
      <g transform="translate(60,18)">
        <path d="M40 -16l64 26v30c0 36-24 66-64 84-40-18-64-48-64-84v-30l64-26z" fill={color.white} stroke={color.indigo400} strokeWidth="4" />
        <path d="M20 38l20 20 30-30" stroke={color.emerald600} strokeWidth="7" fill="none" strokeLinecap="round" />
      </g>
      <g transform="translate(160,18)">
        <rect x="-14" y="-10" width="90" height="24" rx="8" fill={color.emerald400} />
        <rect x="-10" y="-6" width="82" height="16" rx="6" fill={color.white} opacity="0.2" />
      </g>
    </g>
  </svg>
);

/* 4) Community: avatars + linking triangles + content card */
const CommunitySVG = (props) => (
  <svg viewBox="0 0 760 360" role="img" aria-label="Community & Peer Support" className="w-full h-full" {...props}>
    <BG id="gCommBG" stops={[{ offset: "0%", color: color.cyan25 }, { offset: "100%", color: color.indigo25 }]} />
    <SoftGlow id="glowComm" std={6} alpha={0.45} />
    <rect x="0" y="0" width="760" height="360" rx="20" fill="url(#gCommBG)" />

    {/* Network avatars */}
    <g transform="translate(120,120)" filter="url(#glowComm)">
      <circle cx="0" cy="0" r="26" fill={color.cyan500} />
      <circle cx="140" cy="-24" r="26" fill={color.indigo400} />
      <circle cx="70" cy="70" r="26" fill={color.emerald400} />
      <path d="M0 0L70 70L140 -24Z" stroke={color.slate700} strokeWidth="3" fill="none" />
    </g>

    {/* Discussion card */}
    <g transform="translate(380,80)">
      <Card x="0" y="0" w="300" h="200" r="18" fill={color.white} stroke={color.slate300} sw="3" />
      <rect x="24" y="28" width="220" height="12" rx="6" fill={color.slate700} />
      <rect x="24" y="58" width="200" height="10" rx="5" fill={color.slate500} />
      <rect x="24" y="82" width="220" height="10" rx="5" fill={color.slate500} />
      <rect x="24" y="118" width="160" height="16" rx="8" fill={color.indigo600} />
      {/* subtle bubble */}
      <g transform="translate(240,150)" opacity="0.9">
        <rect x="0" y="0" width="42" height="22" rx="8" fill={color.cyan100} />
        <path d="M10 22l8 -6 8 6z" fill={color.cyan100} />
      </g>
    </g>
  </svg>
);

/* 5) Strategy: flow arrows + route highlights + action button */
const StrategySVG = (props) => (
  <svg viewBox="0 0 760 360" role="img" aria-label="Strategic Guidance" className="w-full h-full" {...props}>
    <BG id="gStrategyBG" stops={[{ offset: "0%", color: color.amber50 }, { offset: "100%", color: color.cyan50 }]} />
    <SoftGlow id="glowStrategy" std={7} alpha={0.5} />
    <rect x="0" y="0" width="760" height="360" rx="20" fill="url(#gStrategyBG)" />

    {/* Flow nodes */}
    <g transform="translate(70,90)">
      <Card x="0" y="0" w="220" h="70" r="12" fill={color.white} />
      <Card x="260" y="0" w="220" h="70" r="12" fill={color.white} />
      <Card x="130" y="110" w="220" h="70" r="12" fill={color.white} />
      <path d="M220 35h40" stroke={color.indigo600} strokeWidth="4" markerEnd="url(#arrowHead)" />
      <path d="M370 70l-40 40" stroke={color.emerald600} strokeWidth="4" markerEnd="url(#arrowHead)" />
      <path d="M150 70l40 40" stroke={color.cyan500} strokeWidth="4" markerEnd="url(#arrowHead)" />
    </g>
    <defs>
      <marker id="arrowHead" markerWidth="10" markerHeight="10" refX="6" refY="3" orient="auto">
        <path d="M0,0 L0,6 L6,3 z" fill={color.indigo600} />
      </marker>
    </defs>

    {/* Action card */}
    <g transform="translate(520,100)" filter="url(#glowStrategy)">
      <Card x="0" y="0" w="200" h="160" r="16" fill={color.white} stroke={color.slate300} sw="3" />
      <rect x="24" y="36" width="150" height="12" rx="6" fill={color.slate700} />
      <rect x="24" y="62" width="130" height="10" rx="5" fill={color.slate500} />
      <rect x="24" y="88" width="160" height="16" rx="8" fill={color.indigo600}>
        <animate attributeName="opacity" values="1;0.85;1" dur="1.6s" repeatCount="indefinite" />
      </rect>
    </g>
  </svg>
);

/* 6) Literacy: device + open book + certificate badge + progress bars */
const LiteracySVG = (props) => (
  <svg viewBox="0 0 760 360" role="img" aria-label="Digital Literacy & Threat Awareness" className="w-full h-full" {...props}>
    <BG id="gLiteracyBG" stops={[{ offset: "0%", color: color.indigo50 }, { offset: "100%", color: color.cyan50 }]} />
    <SoftGlow id="glowLiteracy" std={6} alpha={0.45} />
    <rect x="0" y="0" width="760" height="360" rx="20" fill="url(#gLiteracyBG)" />

    {/* Device panel */}
    <g transform="translate(80,80)">
      <Card x="0" y="0" w="260" h="200" r="18" fill={color.white} stroke={color.indigo300} sw="3" />
      <rect x="22" y="28" width="180" height="12" rx="6" fill={color.indigo600} />
      <rect x="22" y="56" width="160" height="10" rx="5" fill={color.slate500} />
      <rect x="22" y="78" width="140" height="10" rx="5" fill={color.slate500} />
      <rect x="22" y="102" width="120" height="10" rx="5" fill={color.slate500} />
      {/* progress bars */}
      <rect x="22" y="138" width="200" height="8" rx="4" fill={color.indigo100} />
      <rect x="22" y="138" width="120" height="8" rx="4" fill={color.indigo600}>
        <animate attributeName="width" values="80;200;120" dur="3s" repeatCount="indefinite" />
      </rect>
    </g>

    {/* Open book + badge */}
    <g transform="translate(400,90)" filter="url(#glowLiteracy)">
      {/* Book */}
      <path d="M0 40c40-18 80-18 120 0v100c-40-18-80-18-120 0z" fill={color.white} stroke={color.slate300} strokeWidth="3" />
      <path d="M120 40c40-18 80-18 120 0v100c-40-18-80-18-120 0z" fill={color.white} stroke={color.slate300} strokeWidth="3" />
      <line x1="120" y1="38" x2="120" y2="160" stroke={color.slate300} strokeWidth="3" />
      {/* Badge */}
      <g transform="translate(210,-20)">
        <circle cx="0" cy="0" r="24" fill={color.emerald400} />
        <path d="M-10 0l8 8 16-16" stroke={color.white} strokeWidth="6" fill="none" strokeLinecap="round" />
      </g>
    </g>
  </svg>
);

/* 7) Conclusion: laurel + ribbon + steady arcs */
const ConclusionSVG = (props) => (
  <svg viewBox="0 0 760 360" role="img" aria-label="Conclusion" className="w-full h-full" {...props}>
    <BG id="gConclusionBG" stops={[{ offset: "0%", color: color.cyan100 }, { offset: "100%", color: color.emerald100 }]} />
    <rect x="0" y="0" width="760" height="360" rx="20" fill="url(#gConclusionBG)" />
    {/* Ribbon */}
    <rect x="80" y="84" width="16" height="160" rx="8" fill={color.indigo600} />
    <path d="M96 86h140l-24 24 24 24H96z" fill={color.cyan500} />
    {/* Laurel */}
    <g transform="translate(520,110)" stroke={color.emerald400} strokeWidth="6" fill="none" strokeLinecap="round">
      <path d="M0 120c-44-26-66-52-66-78s22-52 66-78" />
      <path d="M0 120c44-26 66-52 66-78s-22-52-66-78" />
    </g>
    {/* Honor arcs */}
    <g transform="translate(160,230)" stroke={color.indigo600} strokeWidth="8" fill="none" strokeLinecap="round" opacity="0.8">
      <path d="M0 0c60-40 120-40 180 0" />
      <path d="M180 0c60-40 120-40 180 0" />
    </g>
  </svg>
);

/* ------------------------------ Section block ------------------------------ */
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
      <motion.div
        style={{ opacity }}
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-6 md:gap-8 lg:gap-10 items-start"
      >
        {/* Illustration */}
        <motion.div style={{ y }} className={`relative min-w-0 ${reverse ? "md:order-2" : "md:order-1"}`}>
          <div className="absolute -inset-2 rounded-2xl bg-gradient-to-tr from-cyan-100 via-indigo-100 to-emerald-100 blur-md sm:blur-lg md:blur-xl" aria-hidden="true" />
          <div className="relative rounded-2xl border border-gray-200 bg-white p-3 sm:p-4 shadow-sm">
            <div className="w-full h-auto max-h-64 sm:max-h-80 md:max-h-none overflow-hidden">
              <SVG />
            </div>
          </div>
        </motion.div>

        {/* Content */}
        <div className={`${reverse ? "md:order-1" : "md:order-2"} min-w-0`}>
          <h2 className="text-[20px] sm:text-2xl font-semibold text-gray-900 leading-snug">{title}</h2>
          <div className="mt-2.5 sm:mt-3 space-y-3">{paragraphs}</div>
        </div>
      </motion.div>
    </section>
  );
};

/* ---------------------------------- Page ---------------------------------- */
export default function VictimAssistanceProtection() {
  const { container, itemUp } = useAnims();
  const heroRef = useRef(null);
  const { scrollYProgress } = useScroll({ target: heroRef, offset: ["start start", "end start"] });
  const heroY = useTransform(scrollYProgress, [0, 1], [0, -40]);

  const svgMap = {
    CrisisSVG,
    ForensicsSVG,
    SafetyPlanSVG,
    CommunitySVG,
    StrategySVG,
    LiteracySVG,
    ConclusionSVG,
  };

  return (
    <motion.section id="top" variants={container} initial="hidden" animate="show" className="relative max-w-6xl mx-auto px-4 sm:px-6 md:px-8 py-8 sm:py-10 md:py-12 lg:py-14">
      {/* Breadcrumb */}
      <motion.nav variants={itemUp} className="text-xs sm:text-sm text-gray-500 mb-3 sm:mb-4" aria-label="Breadcrumb">
        <Link to="/" className="hover:underline">Home</Link>
        <span aria-hidden="true"> › </span>
        <Link to="/report/victim-rights-support" className="hover:underline">Victim Rights & Support</Link>
        <span aria-hidden="true"> › </span>
        <span className="text-gray-700" aria-current="page">Victim Assistance & Protection</span>
      </motion.nav>

      {/* Hero w/ masked Video SVG */}
      <div ref={heroRef} className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-6 md:gap-8 lg:gap-10 items-center">
        <motion.div variants={itemUp}>
          <h1 className="text-[22px] sm:text-3xl font-bold text-gray-900">{data.title}</h1>
          <p className="mt-2 text-cyan-800 font-medium text-[15px] sm:text-base">{data.tagline}</p>
          <div className="mt-3 sm:mt-4 flex flex-wrap gap-2">
            {["Crisis", "Forensics", "Safety", "Community", "Strategy", "Literacy"].map((pill) => (
              <span key={pill} className="px-2.5 sm:px-3 py-1.5 text-xs sm:text-sm rounded-full bg-cyan-100 text-cyan-800 border border-cyan-200">{pill}</span>
            ))}
          </div>
        </motion.div>

        <motion.div style={{ y: heroY }} className="relative">
          <div className="absolute -inset-2 rounded-2xl bg-gradient-to-tr from-cyan-100 via-indigo-100 to-emerald-100 blur-md sm:blur-lg md:blur-xl" aria-hidden="true" />
          <div className="relative rounded-2xl border border-gray-200 bg-white p-3 sm:p-4 shadow-sm">
            <div className="w-full h-auto max-h-72 sm:max-h-80 md:max-h-none overflow-hidden">
              {/* Set your actual file paths in public/ */}
              <VideoHeroAssistance
                src="/assets/video/assistance-protection-hero.mp4"
                poster="/assets/video/assistance-protection-hero.jpg"
              />
            </div>
          </div>
        </motion.div>
      </div>

      {/* Sections */}
      <div className="mt-8 sm:mt-10 md:mt-12">
        {data.sections.map((sec, idx) => {
          const SVGComp = ({ CrisisSVG, ForensicsSVG, SafetyPlanSVG, CommunitySVG, StrategySVG, LiteracySVG, ConclusionSVG }[sec.svg]) || CrisisSVG;
          return <SectionBlock key={sec.id} id={sec.id} title={sec.heading} content={sec.content} SVG={SVGComp} reverse={idx % 2 === 1} />;
        })}
      </div>

      {/* Disclaimer */}
      <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mt-10 md:mt-12 max-w-4xl">
        <div className="rounded-xl border border-gray-200 bg-white p-4 sm:p-5 shadow-sm">
          <p className="text-sm text-gray-600">
            ⚖️ <strong>Disclaimer:</strong> CRCCF provides support and guidance, but does not replace law enforcement or court procedures.
            All information is handled with confidentiality and in compliance with the IT Act & DPDP Act.
          </p>
        </div>
      </motion.div>
    </motion.section>
  );
}
