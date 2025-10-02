// src/pages/victimSupport/CybercrimeVictimAdvocacy.jsx
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

/* --------------------- Hero SVG (Justice for All India Symbol) --------------------- */
const VideoHeroAdvocacy = () => (
  <svg viewBox="0 0 1000 460" className="w-full h-auto block" aria-label="Advocate Justice Hero">
    {/* Gradient BG */}
    <BG id="advocacyBG" stops={[
      { offset: "0%", color: color.indigo100 },
      { offset: "80%", color: color.cyan100 },
      { offset: "100%", color: color.emerald100 }
    ]} />
    <SoftGlow id="glowAdvHero" std={14} alpha={0.48} />
    <rect x="0" y="0" width="1000" height="460" rx="34" fill="url(#advocacyBG)" filter="url(#glowAdvHero)" />
    {/* Indian Advocate + Scales */}
    <g transform="translate(300,110)">
      {/* Advocate Figure */}
      <ellipse cx="120" cy="280" rx="78" ry="22" fill={color.black} opacity="0.10" />
      <rect x="84" y="150" width="72" height="110" rx="24" fill={color.indigo600} />
      <ellipse cx="120" cy="140" rx="28" ry="26" fill={color.rose100} />
      <rect x="105" y="190" width="32" height="28" rx="12" fill={color.white} opacity="0.9" />
      {/* Advocate Gown Overlay */}
      <ellipse cx="120" cy="200" rx="40" ry="32" fill={color.indigo800} opacity="0.7" />
      {/* Indian Flag Badge */}
      <rect x="126" y="220" width="22" height="12" rx="6" fill={color.white} />
      <rect x="126" y="224" width="22" height="4" rx="2" fill="#F77F00" /> {/* saffron */}
      <rect x="126" y="228" width="22" height="4" rx="2" fill="#00B159" /> {/* green */}
      {/* Justice Scales */}
      <g>
        <rect x="100" y="100" width="40" height="12" rx="6" fill={color.cyan500} />
        <rect x="116" y="112" width="8" height="40" rx="4" fill={color.slate500} />
        {/* Left scale */}
        <ellipse cx="106" cy="170" rx="13" ry="8" fill={color.emerald400} />
        <rect x="100" y="145" width="12" height="16" rx="5" fill={color.slate300} />
        {/* Right scale */}
        <ellipse cx="134" cy="170" rx="13" ry="8" fill={color.emerald400} />
        <rect x="128" y="145" width="12" height="16" rx="5" fill={color.slate300} />
      </g>
      {/* Law Book */}
      <rect x="80" y="270" width="80" height="18" rx="6" fill={color.cyan200} />
      <text x="120" y="282" fill={color.indigo800} fontSize="13" textAnchor="middle" fontWeight="bold">JUSTICE FOR ALL</text>
    </g>
    {/* Court Emblem */}
    <g transform="translate(700,120)">
      <ellipse cx="90" cy="210" rx="70" ry="17" fill={color.black} opacity="0.08" />
      <rect x="62" y="90" width="56" height="100" rx="16" fill={color.emerald100} />
      <ellipse cx="90" cy="80" rx="16" ry="14" fill={color.indigo200} />
      <rect x="68" y="150" width="42" height="24" rx="7" fill={color.white} stroke={color.cyan300} />
      <text x="89" y="166" fill={color.emerald600} fontSize="18" textAnchor="middle">&#9877;</text>
    </g>
  </svg>
);

/* ---------------------- Section SVGs (Advocacy, Legal, Emotional, Evidence, India) ---------------------- */
const svgMap = {
  intro: (props) => (
    <svg viewBox="0 0 800 380" {...props} role="img" aria-label="Introduction: Advocating for Victims’ Rights" className="w-full h-full">
      <BG id="gIntroAdv" stops={[{ offset: "0%", color: color.cyan50 }, { offset: "100%", color: color.indigo50 }]} />
      <SoftGlow id="glowIntroAdv" std={10} alpha={0.45} />
      <rect x="0" y="0" width="800" height="380" rx="20" fill="url(#gIntroAdv)" />
      <g>
        <ellipse cx="300" cy="330" rx="68" ry="19" fill={color.black} opacity="0.09" />
        <rect x="260" y="180" width="78" height="110" rx="20" fill={color.indigo600} />
        <ellipse cx="299" cy="170" rx="24" ry="20" fill={color.rose100} />
        <rect x="271" y="220" width="42" height="28" rx="10" fill={color.white} opacity="0.92" />
        <rect x="292" y="254" width="22" height="12" rx="6" fill={color.cyan200} />
      </g>
      <g>
        <ellipse cx="500" cy="230" rx="68" ry="19" fill={color.black} opacity="0.09" />
        <rect x="460" y="80" width="78" height="110" rx="20" fill={color.indigo300} />
        <ellipse cx="499" cy="70" rx="24" ry="20" fill={color.emerald100} />
        <rect x="471" y="120" width="42" height="28" rx="10" fill={color.white} opacity="0.92" />
        <rect x="492" y="154" width="22" height="12" rx="6" fill={color.emerald100} />
      </g>
      {/* Court Emblem */}
      <ellipse cx="600" cy="90" rx="22" ry="12" fill={color.cyan100} />
      <rect x="580" y="90" width="40" height="14" rx="6" fill={color.white} />
    </svg>
  ),
  representation: (props) => (
    <svg viewBox="0 0 800 380" {...props} role="img" aria-label="Right to Representation and Voice" className="w-full h-full">
      <BG id="gRepAdv" stops={[{ offset: "0%", color: color.indigo50 }, { offset: "100%", color: color.emerald100 }]} />
      <SoftGlow id="glowRepAdv" std={8} alpha={0.48} />
      <rect x="0" y="0" width="800" height="380" rx="20" fill="url(#gRepAdv)" />
      {/* Advocacy hand, microphone, legal pad */}
      <g>
        <ellipse cx="180" cy="320" rx="30" ry="10" fill={color.black} opacity="0.08" />
        <rect x="160" y="200" width="48" height="88" rx="15" fill={color.indigo600} />
        <ellipse cx="184" cy="190" rx="15" ry="13" fill={color.emerald100} />
        {/* Microphone */}
        <ellipse cx="185" cy="240" rx="10" ry="14" fill={color.cyan200} />
        <rect x="181" y="254" width="8" height="22" rx="4" fill={color.indigo800} />
        {/* Pad */}
        <rect x="212" y="222" width="28" height="20" rx="5" fill={color.white} />
        <rect x="212" y="232" width="28" height="5" rx="2" fill={color.cyan200} />
      </g>
    </svg>
  ),
  legal: (props) => (
    <svg viewBox="0 0 800 380" {...props} role="img" aria-label="Legal Guidance and Case Support" className="w-full h-full">
      <BG id="gLegalAdv" stops={[{ offset: "0%", color: color.indigo100 }, { offset: "100%", color: color.emerald100 }]} />
      <SoftGlow id="glowLegalAdv" std={7} alpha={0.5} />
      <rect x="0" y="0" width="800" height="380" rx="20" fill="url(#gLegalAdv)" />
      {/* Gavel, evidence folder, forensic tick */}
      <rect x="130" y="170" width="120" height="60" rx="15" fill={color.cyan100} />
      <rect x="270" y="188" width="38" height="38" rx="19" fill={color.indigo400} />
      <rect x="340" y="190" width="48" height="35" rx="11" fill={color.rose100} />
      <path d="M370 197l10 10 10-10" stroke={color.emerald600} strokeWidth="5" fill="none" />
      {/* Gavel */}
      <ellipse cx="330" cy="240" rx="16" ry="8" fill={color.indigo800} />
      <rect x="320" y="220" width="24" height="12" rx="6" fill={color.indigo400} />
      <rect x="322" y="226" width="20" height="6" rx="3" fill={color.slate900} />
    </svg>
  ),
  protection: (props) => (
    <svg viewBox="0 0 800 380" {...props} role="img" aria-label="Protection of Rights and Interests" className="w-full h-full">
      <BG id="gProtectAdv" stops={[{ offset: "0%", color: color.emerald100 }, { offset: "100%", color: color.indigo50 }]} />
      <SoftGlow id="glowProtectAdv" std={8} alpha={0.45} />
      <rect x="0" y="0" width="800" height="380" rx="20" fill="url(#gProtectAdv)" />
      {/* Shield, lock, eye */}
      <g>
        <path d="M140 170l44 18v21c0 25-14 45-44 56-30-11-44-31-44-56v-21l44-18z" fill={color.white} stroke={color.indigo400} strokeWidth="3" />
        <ellipse cx="140" cy="210" rx="13" ry="8" fill={color.cyan500} />
        <ellipse cx="140" cy="220" rx="9" ry="5" fill={color.emerald600} />
        {/* Lock */}
        <rect x="170" y="195" width="28" height="22" rx="8" fill={color.slate300} />
        <rect x="175" y="190" width="18" height="11" rx="5" fill={color.indigo100} />
      </g>
    </svg>
  ),
  psych: (props) => (
    <svg viewBox="0 0 800 380" {...props} role="img" aria-label="Psychological and Emotional Support" className="w-full h-full">
      <BG id="gPsychAdv" stops={[{ offset: "0%", color: color.rose50 }, { offset: "100%", color: color.cyan50 }]} />
      <SoftGlow id="glowPsychAdv" std={9} alpha={0.45} />
      <rect x="0" y="0" width="800" height="380" rx="20" fill="url(#gPsychAdv)" />
      {/* Sofa, heart, support figure */}
      <rect x="170" y="220" width="107" height="33" rx="10" fill={color.indigo100} stroke={color.indigo400} />
      <circle cx="212" cy="221" r="14" fill={color.rose100} />
      <rect x="230" y="210" width="38" height="22" rx="8" fill={color.rose50}/>
      <path d="M212 225c-5 9 8 16 8 6" stroke={color.rose400} strokeWidth="2" fill="none" />
      <ellipse cx="260" cy="230" rx="9" ry="7" fill={color.emerald600} />
    </svg>
  ),
  evidence: (props) => (
    <svg viewBox="0 0 800 380" {...props} role="img" aria-label="Evidence Preservation and Case Strengthening" className="w-full h-full">
      <BG id="gEvidAdv" stops={[{ offset: "0%", color: color.indigo100 }, { offset: "100%", color: color.cyan200 }]} />
      <SoftGlow id="glowEvidAdv" std={8} alpha={0.47} />
      <rect x="0" y="0" width="800" height="380" rx="20" fill="url(#gEvidAdv)" />
      {/* Files, badge, tick */}
      <rect x="210" y="170" width="80" height="58" rx="12" fill={color.slate300} />
      <rect x="330" y="170" width="67" height="29" rx="10" fill={color.cyan100} />
      <circle cx="370" cy="205" r="10" fill={color.emerald400} />
      <g>
        <rect x="420" y="192" width="36" height="24" rx="7" fill={color.rose100} />
        <text x="438" y="208" fontSize="15" fill={color.emerald600}>✓</text>
      </g>
    </svg>
  ),
  monitoring: (props) => (
    <svg viewBox="0 0 800 380" {...props} role="img" aria-label="Continuous Monitoring and Support" className="w-full h-full">
      <BG id="gMonAdv" stops={[{ offset: "0%", color: color.indigo100 }, { offset: "100%", color: color.cyan100 }]} />
      <SoftGlow id="glowMonAdv" std={9} alpha={0.43} />
      <rect x="0" y="0" width="800" height="380" rx="20" fill="url(#gMonAdv)" />
      {/* Notification bell, documents, chat bubbles */}
      <ellipse cx="220" cy="190" rx="18" ry="15" fill={color.rose100} />
      <rect x="260" y="176" width="78" height="32" rx="10" fill={color.cyan100} />
      <ellipse cx="390" cy="190" rx="16" ry="14" fill={color.indigo100} />
      <rect x="410" y="176" width="48" height="26" rx="9" fill={color.emerald100} />
    </svg>
  ),
  orgrole: (props) => (
    <svg viewBox="0 0 800 380" {...props} role="img" aria-label="Organization’s Role in Victim Advocacy" className="w-full h-full">
      <BG id="gOrgAdv" stops={[{ offset: "0%", color: color.cyan100 }, { offset: "100%", color: color.emerald100 }]} />
      <SoftGlow id="glowOrgAdv" std={9} alpha={0.46} />
      <rect x="0" y="0" width="800" height="380" rx="20" fill="url(#gOrgAdv)" />
      {/* Tiles, shield, advocate */}
      <rect x="200" y="170" width="120" height="54" rx="15" fill={color.indigo100} />
      <rect x="340" y="170" width="63" height="54" rx="12" fill={color.cyan100} />
      <path d="M440 170l32 15v18c0 22-12 36-32 45-20-9-32-23-32-45v-18l32-15z" fill={color.white} stroke={color.indigo400} strokeWidth="3"/>
      <path d="M428 191l10 12 14-13" stroke={color.emerald600} strokeWidth="5" fill="none" strokeLinecap="round" />
    </svg>
  ),
  conclusion: (props) => (
    <svg viewBox="0 0 800 380" {...props} role="img" aria-label="Conclusion: Comprehensive Cybercrime Victim Advocacy" className="w-full h-full">
      <BG id="gConcAdv" stops={[{ offset: "0%", color: color.cyan200 }, { offset: "100%", color: color.indigo50 }]} />
      <rect x="0" y="0" width="800" height="380" rx="20" fill="url(#gConcAdv)" />
      {/* Progress arcs */}
      <rect x="140" y="190" width="16" height="140" rx="8" fill={color.indigo600} />
      <path d="M156 192h150l-24 24 24 24H156z" fill={color.cyan500} />
      <g transform="translate(270,290)" stroke={color.indigo600} strokeWidth="8" fill="none" strokeLinecap="round" opacity="0.77">
        <path d="M0 0c60-40 120-40 180 0" />
        <path d="M180 0c60-40 120-40 120 0" />
      </g>
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
  title: "Cybercrime Victim Advocacy – CRCCF",
  tagline: "Representing, Protecting, and Empowering Victims in the Digital Realm",
  sections: [
    {
      id: "intro",
      heading: "1. Introduction: Advocating for Victims’ Rights",
      content: `Victims of cybercrime often encounter complex legal procedures, digital risks, and emotional challenges. The subcard “Cybercrime Victim Advocacy” emphasizes the critical role of advocacy in ensuring victims’ rights are protected, their voices are heard, and their well-being is prioritized.
CRCCF provides a structured advocacy framework, combining legal guidance, emotional support, and digital security measures, enabling victims to navigate cybercrime challenges confidently and secure justice without fear or confusion.`,
      svg: svgMap.intro,
    },
    {
      id: "representation",
      heading: "2. Right to Representation and Voice",
      content: `Victims have the fundamental right to be represented and have their concerns acknowledged throughout legal and administrative processes.
CRCCF ensures that victims’ voices are consistently heard, whether during complaint registration, court proceedings, or discussions with authorities. Professional guidance and legal backing empower victims to articulate grievances, participate actively, and pursue justice without intimidation.`,
      svg: svgMap.representation,
    },
    {
      id: "legal",
      heading: "3. Legal Guidance and Case Support",
      content: `Cybercrime victims are entitled to expert legal counsel specializing in cyber laws, data protection, and digital forensics.
CRCCF’s advocacy team assists victims in filing complaints, collecting and preserving digital evidence, and navigating court or administrative procedures. Structured legal guidance enables victims to make informed decisions, understand the procedural steps, and ensure that cases are handled efficiently, increasing the likelihood of successful outcomes.`,
      svg: svgMap.legal,
    },
    {
      id: "protection",
      heading: "4. Protection of Rights and Interests",
      content: `Advocacy involves the safeguarding of victims’ personal, financial, and digital rights. Victims have the right to confidentiality, protection from retaliation, and secure management of sensitive information.
CRCCF implements strict privacy protocols, secure communication channels, and continuous monitoring, ensuring victims are shielded from further harm while pursuing justice. These measures reinforce trust, confidence, and a sense of security throughout the process.`,
      svg: svgMap.protection,
    },
    {
      id: "psych",
      heading: "5. Psychological and Emotional Support",
      content: `Cybercrime can leave victims feeling vulnerable, anxious, and distressed. Advocacy extends beyond legal support to include psychological and emotional guidance.
Victims have the right to access counselling, therapy, and cyber-psychology support. CRCCF provides tailored emotional assistance, helping victims manage trauma, rebuild confidence, and engage effectively in legal and protective measures, fostering resilience and mental well-being.`,
      svg: svgMap.psych,
    },
    {
      id: "evidence",
      heading: "6. Evidence Preservation and Case Strengthening",
      content: `Proper evidence collection is essential for a strong legal case. Victims are entitled to professional guidance in securing digital evidence, including emails, transaction records, social media interactions, and other critical data.
CRCCF ensures that evidence is preserved according to legal standards, strengthening cases, reducing procedural risks, and enhancing the likelihood of favorable outcomes while maintaining the integrity and credibility of the victim’s claims.`,
      svg: svgMap.evidence,
    },
    {
      id: "monitoring",
      heading: "7. Continuous Monitoring and Support",
      content: `Victims have the right to stay informed about case status, legal developments, and protective measures. CRCCF ensures continuous communication, providing updates, monitoring progress, and representing victims’ interests proactively.
This ongoing engagement builds trust, reduces uncertainty, and empowers victims to participate actively and confidently throughout the resolution process.`,
      svg: svgMap.monitoring,
    },
    {
      id: "orgrole",
      heading: "8. Organization’s Role in Victim Advocacy",
      content: `CRCCF is committed to delivering comprehensive advocacy services for cybercrime victims. By integrating legal support, emotional counselling, digital security guidance, and ongoing case monitoring, we ensure that victims receive holistic, professional, and empathetic assistance.
Every intervention is conducted with confidentiality, professionalism, and empathy, guaranteeing that victims’ rights and interests are consistently protected while they pursue justice and recovery.`,
      svg: svgMap.orgrole,
    },
    {
      id: "conclusion",
      heading: "Conclusion: Comprehensive Cybercrime Victim Advocacy",
      content: `Cybercrime Victim Advocacy ensures victims are empowered, protected, and represented through legal guidance, emotional support, evidence management, and continuous monitoring. Upholding these rights allows victims to pursue justice confidently, safeguard their interests, and recover effectively from the impacts of cybercrime.
CRCCF remains dedicated to providing professional, thorough, and compassionate advocacy, helping every victim secure justice, protection, and peace of mind while navigating the digital realm.`,
      svg: svgMap.conclusion,
    },
  ],
};

/* ------------------------------ Main Page Component ------------------------------ */
export default function CybercrimeVictimAdvocacy() {
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
        <span className="text-gray-700" aria-current="page">Cybercrime Victim Advocacy</span>
      </motion.nav>
      {/* Hero - Advocate Justice India Illustration */}
      <div ref={heroRef} className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-6 md:gap-8 lg:gap-10 items-center">
        <motion.div variants={itemUp}>
          <h1 className="text-[22px] sm:text-3xl font-bold text-gray-900">{data.title}</h1>
          <p className="mt-2 text-cyan-800 font-medium text-[15px] sm:text-base">{data.tagline}</p>
          <div className="mt-3 sm:mt-4 flex flex-wrap gap-2">
            {["Representation", "Justice", "Protection"].map((pill) => (
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
              <VideoHeroAdvocacy />
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
