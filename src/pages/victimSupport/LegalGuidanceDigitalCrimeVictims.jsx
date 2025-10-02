// src/pages/victimSupport/LegalGuidanceDigitalCrimeVictims.jsx
import React, { useRef } from "react";
import { Link } from "react-router-dom";
import { motion, useReducedMotion, useScroll, useTransform, useSpring } from "framer-motion";

/* -------------------------- Color Palette -------------------------- */
const color = {
  cyan25: "#F5FEFF", cyan50: "#ECFEFF", cyan100: "#CFFAFE", cyan200: "#A5F3FC", cyan300: "#67E8F9", cyan500: "#06B6D4",
  indigo25: "#F7F8FF", indigo50: "#EEF2FF", indigo100: "#E0E7FF", indigo300: "#A5B4FC", indigo400: "#818CF8", indigo600: "#4F46E5", indigo800: "#3730A3",
  emerald50: "#ECFDF5", emerald100: "#D1FAE5", emerald300: "#86EFAC", emerald400: "#34D399", emerald600: "#059669",
  amber50: "#FFFBEB", amber100: "#FEF3C7",
  rose50: "#FFF1F2", rose100: "#FFE4E6", rose400: "#FB7185",
  slate200: "#E2E8F0", slate300: "#CBD5E1", slate400: "#94A3B8", slate500: "#64748B", slate700: "#334155", slate900: "#0F172A",
  white: "#FFFFFF", black: "#000000",
};

/* ------------------------- Framer Motion Helper ------------------------- */
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

/* -------------------------- SVG helpers -------------------------- */
const BG = ({ id, stops }) => (
  <defs>
    <linearGradient id={id} x1="0" y1="0" x2="1" y2="1">
      {stops.map((s, i) => <stop key={i} offset={s.offset} stopColor={s.color} stopOpacity={s.opacity ?? 1} />)}
    </linearGradient>
  </defs>
);
const SoftGlow = ({ id = "glow", std = 6, alpha = 0.5 }) => (
  <defs>
    <filter id={id} x="-30%" y="-30%" width="160%" height="160%">
      <feGaussianBlur in="SourceGraphic" stdDeviation={std} result="b" />
      <feColorMatrix in="b" type="matrix" values={`1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 ${alpha} 0`} />
    </filter>
  </defs>
);

/* --------------------- Hero SVG (Indian Advocate Order Order!) --------------------- */
const VideoHeroLegal = () => (
  <svg viewBox="0 0 1000 460" className="w-full h-auto block" aria-label="Legal Guidance Hero">
    <BG id="lgHeroBG" stops={[
      { offset: "0%", color: color.indigo100 },
      { offset: "60%", color: color.cyan100 },
      { offset: "100%", color: color.emerald100 }
    ]} />
    <SoftGlow id="glowLGHero" std={14} alpha={0.43} />
    <rect x="0" y="0" width="1000" height="460" rx="36" fill="url(#lgHeroBG)" filter="url(#glowLGHero)" />
    {/* Advocate with gavel */}
    <g transform="translate(340,120)">
      {/* Advocate body */}
      <ellipse cx="60" cy="270" rx="65" ry="20" fill={color.black} opacity="0.10" />
      <rect x="28" y="90" width="64" height="110" rx="24" fill={color.indigo600} />
      {/* Head */}
      <ellipse cx="60" cy="80" rx="24" ry="22" fill={color.rose100} />
      {/* Gavel arm and gavel */}
      <rect x="72" y="135" width="48" height="18" rx="9" transform="rotate(-25 96 144)" fill={color.indigo800} />
      <rect x="112" y="140" width="12" height="36" rx="6" fill={color.amber100} />
      <ellipse cx="118" cy="177" rx="10" ry="6.5" fill={color.amber100} />
      {/* Speech bubble: Order! Order! */}
      <g>
        <rect x="28" y="35" width="70" height="32" rx="11" fill={color.white} stroke={color.cyan500} strokeWidth="2.5" />
        <text x="63" y="55" fill={color.indigo800} fontSize="17" fontWeight="bold" textAnchor="middle">Order! Order!</text>
      </g>
      {/* Justice for All badge */}
      <rect x="65" y="198" width="40" height="16" rx="8" fill={color.cyan200}/>
      <text x="85" y="210" fill={color.indigo800} fontSize="11" textAnchor="middle">Justice For All</text>
    </g>
    {/* Court Emblem */}
    <g transform="translate(760,160)">
      <ellipse cx="42" cy="238" rx="45" ry="13" fill={color.black} opacity="0.06" />
      <rect x="20" y="90" width="56" height="94" rx="18" fill={color.emerald100} />
      <ellipse cx="48" cy="80" rx="14" ry="13" fill={color.indigo200} />
      {/* Emblem */}
      <rect x="34" y="136" width="40" height="24" rx="7" fill={color.white} stroke={color.cyan300} />
      <text x="54" y="153" fill={color.emerald600} fontSize="16" textAnchor="middle">&#9876;</text>
    </g>
  </svg>
);

/* ---------------------- Section SVGs (realistic legal, order, justice) ---------------------- */
const svgMap = {
  intro: (props) => (
    <svg viewBox="0 0 800 380" {...props} role="img" aria-label="Introduction: Expert Legal Support in the Digital Era" className="w-full h-full">
      <BG id="gIntroLG" stops={[{ offset: "0%", color: color.cyan50 }, { offset: "100%", color: color.indigo50 }]} />
      <SoftGlow id="glowIntroLG" std={10} alpha={0.45} />
      <rect x="0" y="0" width="800" height="380" rx="20" fill="url(#gIntroLG)" />
      <g>
        {/* Advocate silhouette */}
        <ellipse cx="340" cy="320" rx="54" ry="14" fill={color.black} opacity="0.08" />
        <rect x="312" y="180" width="56" height="98" rx="22" fill={color.indigo600} />
        <ellipse cx="340" cy="170" rx="16" ry="13" fill={color.rose100} />
        <rect x="328" y="215" width="26" height="12" rx="6" fill={color.cyan200} />
        {/* Law Book */}
        <rect x="312" y="275" width="56" height="14" rx="6" fill={color.white} />
      </g>
    </svg>
  ),
  consultation: (props) => (
    <svg viewBox="0 0 800 380" {...props} role="img" aria-label="Right to Expert Legal Consultation" className="w-full h-full">
      <BG id="gConsultLG" stops={[{ offset: "0%", color: color.indigo25 }, { offset: "100%", color: color.cyan50 }]} />
      <SoftGlow id="glowConsultLG" std={8} alpha={0.48} />
      <rect x="0" y="0" width="800" height="380" rx="20" fill="url(#gConsultLG)" />
      {/* Desk, consult papers, chat bubble */}
      <rect x="130" y="210" width="120" height="44" rx="15" fill={color.cyan100} />
      <rect x="146" y="210" width="86" height="20" rx="7" fill={color.white} />
      <rect x="167" y="230" width="44" height="12" rx="5" fill={color.emerald300} />
      <rect x="210" y="215" width="56" height="9" rx="3" fill={color.indigo400} />
      {/* Speech bubble */}
      <rect x="220" y="165" width="56" height="26" rx="11" fill={color.emerald100} />
      <text x="248" y="183" fill={color.indigo600} fontSize="13" textAnchor="middle">Legal Advice</text>
    </svg>
  ),
  complaints: (props) => (
    <svg viewBox="0 0 800 380" {...props} role="img" aria-label="Filing Complaints and Legal Documentation" className="w-full h-full">
      <BG id="gComplLG" stops={[{ offset: "0%", color: color.indigo100 }, { offset: "100%", color: color.cyan100 }]} />
      <SoftGlow id="glowComplLG" std={7} alpha={0.41} />
      <rect x="0" y="0" width="800" height="380" rx="20" fill="url(#gComplLG)" />
      {/* Form, papers, document tick */}
      <rect x="270" y="180" width="110" height="54" rx="12" fill={color.white} />
      <rect x="290" y="200" width="72" height="12" rx="5" fill={color.cyan100} />
      <rect x="295" y="217" width="56" height="7" rx="3.5" fill={color.emerald400} />
      {/* Tick mark */}
      <path d="M310 226l8 8 14-14" stroke={color.emerald600} strokeWidth="4" fill="none" />
    </svg>
  ),
  evidence: (props) => (
    <svg viewBox="0 0 800 380" {...props} role="img" aria-label="Evidence Collection and Preservation" className="w-full h-full">
      <BG id="gEvidLG" stops={[{ offset: "0%", color: color.cyan100 }, { offset: "100%", color: color.emerald100 }]} />
      <SoftGlow id="glowEvidLG" std={8} alpha={0.46} />
      <rect x="0" y="0" width="800" height="380" rx="20" fill="url(#gEvidLG)" />
      {/* Email/phone/social bubbles, folder */}
      <rect x="167" y="180" width="86" height="36" rx="10" fill={color.white} />
      <ellipse cx="210" cy="170" rx="12" ry="9" fill={color.indigo400} />
      <rect x="183" y="180" width="24" height="12" rx="5" fill={color.cyan200} />
      <ellipse cx="210" cy="192" rx="7" ry="7" fill={color.emerald600} />
      {/* Folder */}
      <rect x="250" y="199" width="24" height="18" rx="6" fill={color.emerald100} />
    </svg>
  ),
  laws: (props) => (
    <svg viewBox="0 0 800 380" {...props} role="img" aria-label="Understanding Cyber Laws and Regulations" className="w-full h-full">
      <BG id="gLawsLG" stops={[{ offset: "0%", color: color.indigo100 }, { offset: "100%", color: color.cyan200 }]} />
      <SoftGlow id="glowLawsLG" std={9} alpha={0.46} />
      <rect x="0" y="0" width="800" height="380" rx="20" fill="url(#gLawsLG)" />
      {/* Law book, gavel, rule list */}
      <rect x="140" y="170" width="80" height="36" rx="10" fill={color.white} />
      <rect x="175" y="180" width="38" height="10" rx="5.5" fill={color.indigo600} />
      {/* Law Book Icon */}
      <rect x="153" y="198" width="44" height="14" rx="4.5" fill={color.cyan100} />
      {/* Gavel */}
      <rect x="170" y="210" width="8" height="20" rx="4" fill={color.amber100} />
    </svg>
  ),
  representation: (props) => (
    <svg viewBox="0 0 800 380" {...props} role="img" aria-label="Court Representation and Advocacy" className="w-full h-full">
      <BG id="gRepLG" stops={[{ offset: "0%", color: color.indigo50 }, { offset: "100%", color: color.emerald100 }]} />
      <SoftGlow id="glowRepLG" std={7} alpha={0.44} />
      <rect x="0" y="0" width="800" height="380" rx="20" fill="url(#gRepLG)" />
      {/* Court bench, advocate, scales */}
      <rect x="340" y="170" width="74" height="48" rx="11" fill={color.indigo100} />
      <ellipse cx="372" cy="166" rx="15" ry="13" fill={color.rose100} />
      {/* Scales */}
      <rect x="355" y="194" width="34" height="7" rx="3.5" fill={color.emerald400} />
      <ellipse cx="365" cy="203" rx="8.5" ry="6" fill={color.cyan200} />
      <ellipse cx="385" cy="203" rx="8.5" ry="6" fill={color.cyan200} />
    </svg>
  ),
  continuous: (props) => (
    <svg viewBox="0 0 800 380" {...props} role="img" aria-label="Continuous Legal Support and Follow-Up" className="w-full h-full">
      <BG id="gContLG" stops={[{ offset: "0%", color: color.cyan100 }, { offset: "100%", color: color.indigo50 }]} />
      <SoftGlow id="glowContLG" std={7} alpha={0.41} />
      <rect x="0" y="0" width="800" height="380" rx="20" fill="url(#gContLG)" />
      {/* Calendar, progress bar, chat update */}
      <rect x="315" y="185" width="54" height="38" rx="9" fill={color.white} />
      <ellipse cx="340" cy="202" rx="9" ry="7" fill={color.indigo300} />
      <rect x="350" y="195" width="21" height="7" rx="3.5" fill={color.cyan100} />
      {/* Progress bar */}
      <rect x="323" y="218" width="30" height="7" rx="3.5" fill={color.emerald400} />
      {/* Chat bubble */}
      <rect x="370" y="188" width="32" height="22" rx="7" fill={color.rose100} />
    </svg>
  ),
  orgrole: (props) => (
    <svg viewBox="0 0 800 380" {...props} role="img" aria-label="Organization’s Role in Legal Guidance" className="w-full h-full">
      <BG id="gOrgLG" stops={[{ offset: "0%", color: color.cyan100 }, { offset: "100%", color: color.indigo100 }]} />
      <SoftGlow id="glowOrgLG" std={9} alpha={0.45} />
      <rect x="0" y="0" width="800" height="380" rx="20" fill="url(#gOrgLG)" />
      {/* Tiles, law book, court */}
      <rect x="220" y="170" width="100" height="54" rx="15" fill={color.indigo100} />
      <rect x="340" y="170" width="63" height="54" rx="12" fill={color.cyan100} />
      <rect x="260" y="230" width="54" height="24" rx="8" fill={color.white} />
      {/* Gavel */}
      <rect x="264" y="238" width="8" height="18" rx="4" fill={color.amber100} />
    </svg>
  ),
  conclusion: (props) => (
    <svg viewBox="0 0 800 380" {...props} role="img" aria-label="Conclusion: Empowering Victims Through Legal Guidance" className="w-full h-full">
      <BG id="gConcLG" stops={[{ offset: "0%", color: color.cyan200 }, { offset: "100%", color: color.indigo50 }]} />
      <rect x="0" y="0" width="800" height="380" rx="20" fill="url(#gConcLG)" />
      {/* Progress arcs */}
      <rect x="180" y="210" width="10" height="90" rx="5" fill={color.indigo600} />
      <ellipse cx="240" cy="270" rx="27" ry="10" fill={color.cyan100} />
      <ellipse cx="310" cy="220" rx="18" ry="18" fill={color.indigo100} opacity="0.19" />
    </svg>
  ),
};

/* ---------------------------- Section Block ---------------------------- */
const SectionBlock = ({ id, heading, content, SVG, reverse = false }) => {
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
          <h2 className="text-[20px] sm:text-2xl font-semibold text-gray-900 leading-snug">{heading}</h2>
          <div className="mt-2.5 sm:mt-3 space-y-3">{paragraphs}</div>
        </div>
      </motion.div>
    </section>
  );
};

/* -------------------------- DATA (exact) -------------------------- */
const data = {
  title: "Legal Guidance for Digital Crime Victims – CRCCF",
  tagline: "Expert Legal Support for Cybercrime Victims",
  sections: [
    {
      id: "intro",
      heading: "1. Introduction: Expert Legal Support in the Digital Era",
      content: `Digital crimes are growing increasingly complex, affecting individuals, businesses, and communities. The subcard “Legal Guidance for Digital Crime Victims” focuses on providing specialized legal support to help victims navigate cyber laws effectively. Our organization ensures that victims have access to knowledgeable professionals who guide them through complaint filing, evidence preservation, and legal procedures.
CRCCF provides structured interventions combining expert consultation, case documentation, and procedural guidance. By offering professional support at every step, victims are empowered to pursue justice confidently while safeguarding their digital rights and personal interests.`,
      svg: svgMap.intro,
    },
    {
      id: "consultation",
      heading: "2. Right to Expert Legal Consultation",
      content: `Victims have the fundamental right to consult experienced legal professionals specializing in cybercrime and digital law. Expert guidance ensures victims understand their rights, responsibilities, and available remedies.
Our organization provides personalized legal advice tailored to each case. CRCCF equips victims with the knowledge and clarity needed to make informed decisions and take appropriate actions, enhancing their ability to protect themselves and pursue justice effectively.`,
      svg: svgMap.consultation,
    },
    {
      id: "complaints",
      heading: "3. Filing Complaints and Legal Documentation",
      content: `Accurate and timely filing of complaints is crucial for effective legal action. Victims have the right to assistance in drafting formal complaints, documenting incidents, and submitting reports to authorities.
CRCCF ensures that every complaint is prepared meticulously, meeting legal standards and increasing the chances of a thorough investigation. Professional documentation strengthens cases and helps victims seek justice efficiently and confidently.`,
      svg: svgMap.complaints,
    },
    {
      id: "evidence",
      heading: "4. Evidence Collection and Preservation",
      content: `Proper collection and preservation of digital evidence are essential for legal proceedings. Victims have the right to guidance on handling emails, social media communications, transaction records, and other digital data.
Our organization collaborates with cyber forensic specialists to maintain evidence integrity. CRCCF ensures that all digital proof meets legal requirements, enhancing the credibility of the victim’s case and supporting successful judicial outcomes.`,
      svg: svgMap.evidence,
    },
    {
      id: "laws",
      heading: "5. Understanding Cyber Laws and Regulations",
      content: `Navigating cybercrime legislation can be challenging without proper knowledge. Victims have the right to understand relevant laws, penalties, and procedural requirements.
CRCCF provides comprehensive explanations of applicable cyber laws, civil and criminal remedies, and victims’ rights. By empowering individuals with legal knowledge, we ensure that victims can take informed and effective steps to protect themselves.`,
      svg: svgMap.laws,
    },
    {
      id: "representation",
      heading: "6. Court Representation and Advocacy",
      content: `Victims have the right to professional representation in court and legal forums. Skilled advocacy ensures their interests are protected during hearings, negotiations, and settlements.
Our organization provides dedicated legal representation, presenting victims’ cases effectively and ensuring accountability for perpetrators. CRCCF’s advocacy reinforces victims’ confidence and strengthens their pursuit of justice.`,
      svg: svgMap.representation,
    },
    {
      id: "continuous",
      heading: "7. Continuous Legal Support and Follow-Up",
      content: `Legal proceedings can be lengthy and complex. Victims have the right to ongoing guidance, regular updates, and follow-up throughout their case.
CRCCF maintains transparent communication with victims, providing updates on case progress, procedural developments, and next steps. Continuous support ensures victims remain informed, empowered, and confident while navigating the justice system.`,
      svg: svgMap.continuous,
    },
    {
      id: "orgrole",
      heading: "8. Organization’s Role in Legal Guidance",
      content: `Our organization is committed to providing comprehensive legal support for digital crime victims. By integrating expert consultation, evidence management, court representation, and continuous advocacy, we create a robust framework for legal protection.
Every intervention is conducted with professionalism, confidentiality, and empathy. CRCCF ensures that victims have the resources, guidance, and confidence necessary to pursue justice effectively while safeguarding their rights.`,
      svg: svgMap.orgrole,
    },
    {
      id: "conclusion",
      heading: "Conclusion: Empowering Victims Through Legal Guidance",
      content: `Legal Guidance for Digital Crime Victims ensures that individuals affected by cybercrime can access professional legal support, understand their rights, and pursue justice effectively. Upholding these rights enables victims to navigate complex cyber laws confidently while protecting their interests.
CRCCF remains dedicated to delivering professional, comprehensive, and compassionate legal services, empowering every victim to achieve justice and secure their digital safety.`,
      svg: svgMap.conclusion,
    },
  ],
};

/* ------------------------------ Main Page Component ------------------------------ */
export default function LegalGuidanceDigitalCrimeVictims() {
  const { container, itemUp } = useAnims();
  const heroRef = useRef(null);
  const { scrollYProgress } = useScroll({ target: heroRef, offset: ["start start", "end start"] });
  const heroY = useTransform(scrollYProgress, [0, 1], [0, -40]);

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
        <Link to="/report/victim-rights-support" className="hover:underline">Victim Rights & Support</Link>
        <span aria-hidden="true"> › </span>
        <span className="text-gray-700" aria-current="page">Legal Guidance for Digital Crime Victims</span>
      </motion.nav>
      {/* Hero - Advocate & Gavel Illustration */}
      <div ref={heroRef} className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-6 md:gap-8 lg:gap-10 items-center">
        <motion.div variants={itemUp}>
          <h1 className="text-[22px] sm:text-3xl font-bold text-gray-900">{data.title}</h1>
          <p className="mt-2 text-cyan-800 font-medium text-[15px] sm:text-base">{data.tagline}</p>
          <div className="mt-3 sm:mt-4 flex flex-wrap gap-2">
            {["Legal Advice", "Order", "Justice"].map((pill) => (
              <span key={pill} className="px-2.5 sm:px-3 py-1.5 text-xs sm:text-sm rounded-full bg-cyan-100 text-cyan-800 border border-cyan-200">
                {pill}
              </span>
            ))}
          </div>
        </motion.div>
        <motion.div style={{ y: heroY }} className="relative">
          <div className="absolute -inset-2 rounded-2xl bg-gradient-to-tr from-cyan-100 via-indigo-100 to-emerald-100 blur-md sm:blur-lg md:blur-xl" aria-hidden="true" />
          <div className="relative rounded-2xl border border-gray-200 bg-white p-3 sm:p-4 shadow-sm">
            <div className="w-full h-auto max-h-72 sm:max-h-80 md:max-h-none overflow-hidden">
              <VideoHeroLegal />
            </div>
          </div>
        </motion.div>
      </div>
      {/* Sections */}
      <div className="mt-8 sm:mt-10 md:mt-12">
        {data.sections.map((sec, idx) => {
          const SVGComp = typeof sec.svg === "function" ? sec.svg : svgMap[sec.svg];
          return (
            <SectionBlock
              key={sec.id}
              id={sec.id}
              heading={sec.heading}
              content={sec.content}
              SVG={SVGComp}
              reverse={idx % 2 === 1}
            />
          );
        })}
      </div>
      {/* Disclaimer */}
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mt-10 md:mt-12 max-w-4xl"
      >
        <div className="rounded-xl border border-gray-200 bg-white p-4 sm:p-5 shadow-sm">
          <p className="text-sm text-gray-600">
            ⚖️ <strong>Disclaimer:</strong> CRCCF provides support and guidance, but does not replace law enforcement or court procedures.
            All information is handled with confidentiality and in compliance with applicable laws and regulations.
          </p>
        </div>
      </motion.div>
    </motion.section>
  );
}
