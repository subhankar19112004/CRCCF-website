// src/pages/victimSupport/OnlineHarassmentHelpRights.jsx
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

/* ---------------------------- Section SVG Helpers ---------------------------- */
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

/* ---------------------------- Hero SVG (Thief Harassing Online) ---------------------------- */
const VideoHeroHarassment = () => {
  // SVG composition: Thief messaging for money, victim on mobile, shadowy background.
  return (
    <svg viewBox="0 0 1000 460" className="w-full h-auto block" aria-label="Online Harassment Scene">
      <BG id="heroBG" stops={[
        { offset: "0%", color: color.indigo100 },
        { offset: "70%", color: color.cyan100 }, 
        { offset: "100%", color: color.rose50 }
      ]} />
      <SoftGlow id="heroGlow" std={10} alpha={0.45} />
      <rect x="0" y="0" width="1000" height="460" rx="32" fill="url(#heroBG)" filter="url(#heroGlow)" />
      {/* Thief figure */}
      <g transform="translate(730,80)" filter="url(#heroGlow)">
        <ellipse cx="60" cy="150" rx="60" ry="24" fill={color.black} opacity="0.12" />
        {/* Body */}
        <rect x="44" y="56" width="32" height="70" rx="10" fill={color.slate700} />
        {/* Head */}
        <ellipse cx="60" cy="48" rx="18" ry="16" fill={color.slate700} />
        {/* Mask */}
        <ellipse cx="60" cy="52" rx="14" ry="7" fill={color.black} />
        {/* Eyes */}
        <ellipse cx="54" cy="52" rx="2.5" ry="2.5" fill={color.white} />
        <ellipse cx="66" cy="52" rx="2.5" ry="2.5" fill={color.white} />
        {/* Arm with phone */}
        <rect x="28" y="80" width="35" height="16" rx="8" transform="rotate(-14 40 88)" fill={color.slate700} />
        <rect x="20" y="88" width="11" height="30" rx="5.5" fill={color.indigo400} />
        {/* Money message bubble */}
        <g transform="translate(-40,50)">
          <rect x="90" y="36" width="60" height="32" rx="11" fill={color.cyan100} stroke={color.cyan500} strokeWidth="2.5" />
          <text x="120" y="56" fill={color.slate900} fontSize="18" fontWeight="bold" textAnchor="middle">$?</text>
        </g>
      </g>
      {/* Victim figure */}
      <g transform="translate(160,230)">
        <ellipse cx="52" cy="110" rx="52" ry="18" fill={color.black} opacity="0.08" />
        {/* Body */}
        <rect x="36" y="54" width="32" height="82" rx="14" fill={color.indigo300} />
        {/* Head */}
        <ellipse cx="52" cy="44" rx="16" ry="14" fill={color.emerald100} />
        {/* Mobile */}
        <rect x="62" y="110" width="18" height="32" rx="6" fill={color.indigo400} />
        {/* Worry lines */}
        <path d="M48 60c-8 8 6 14 8 6" stroke={color.rose400} strokeWidth="2" fill="none" />
        {/* Message bubble */}
        <g transform="translate(85,106)">
          <rect x="0" y="0" width="56" height="26" rx="11" fill={color.rose100} stroke={color.rose400} strokeWidth="2" />
          <text x="28" y="16" fill={color.slate900} fontSize="15" textAnchor="middle">"Pay now?"</text>
        </g>
      </g>
      {/* Devices + floating shield */}
      <g>
        <ellipse cx="630" cy="340" rx="44" ry="15" fill={color.black} opacity="0.06" />
        <rect x="610" y="295" width="40" height="50" rx="10" fill={color.cyan100} />
        <g>
          <ellipse cx="690" cy="300" rx="25" ry="11" fill={color.cyan200} />
          <rect x="670" y="283" width="40" height="18" rx="5.5" fill={color.indigo100} />
          <rect x="684" y="297" width="13" height="14" rx="2.5" fill={color.cyan500} />
        </g>
        {/* Shield */}
        <g>
          <path d="M792 336l32 13v16c0 22-12 40-32 49-20-9-32-27-32-49v-16l32-13z" fill={color.white} stroke={color.indigo400} strokeWidth="3"/>
          <path d="M782 354l13 14 17-17" stroke={color.emerald600} strokeWidth="5" fill="none" strokeLinecap="round" />
        </g>
      </g>
    </svg>
  );
};

/* ---------------------------- Section SVGs ---------------------------- */
const svgMap = {
  intro: (props) => (
    <svg viewBox="0 0 800 380" {...props} role="img" aria-label="Introduction: Understanding Online Harassment" className="w-full h-full">
      <BG id="gIntroOH" stops={[{ offset: "0%", color: color.cyan50 }, { offset: "100%", color: color.indigo50 }]} />
      <SoftGlow id="glowIntroOH" std={8} alpha={0.45} />
      <rect x="0" y="0" width="800" height="380" rx="20" fill="url(#gIntroOH)" />
      {/* Harassment scene: paper, screen, warning icons */}
      <g>
        <rect x="80" y="120" width="230" height="130" rx="18" fill={color.rose100} stroke={color.rose400} strokeWidth="4" />
        <circle cx="140" cy="200" r="22" fill={color.indigo400} />
        <rect x="160" y="134" width="92" height="46" rx="9" fill={color.cyan100}/>
        <g>
          <rect x="330" y="130" width="52" height="80" rx="11" fill={color.indigo100} stroke={color.indigo400} strokeWidth="2" />
          <text x="356" y="170" fontSize="24" fontWeight="bold" fill={color.rose400} textAnchor="middle">!</text>
        </g>
      </g>
      {/* Victim */}
      <g>
        <ellipse cx="630" cy="300" rx="50" ry="12" fill={color.black} opacity="0.07" />
        <rect x="600" y="180" width="60" height="100" rx="20" fill={color.emerald100} />
        <ellipse cx="630" cy="160" rx="18" ry="16" fill={color.indigo200} />
      </g>
    </svg>
  ),
  assistance: (props) => (
    <svg viewBox="0 0 800 380" {...props} role="img" aria-label="Right to Immediate Assistance" className="w-full h-full">
      <BG id="gAssistOH" stops={[{ offset: "0%", color: color.indigo25 }, { offset: "100%", color: color.cyan50 }]} />
      <SoftGlow id="glowAssistOH" std={7} alpha={0.4} />
      <rect x="0" y="0" width="800" height="380" rx="20" fill="url(#gAssistOH)" />
      {/* Rapid response: phone, alert, shield */}
      <rect x="130" y="170" width="120" height="60" rx="15" fill={color.cyan100} />
      <rect x="270" y="188" width="38" height="38" rx="19" fill={color.indigo400} />
      <rect x="340" y="190" width="48" height="35" rx="11" fill={color.rose100} />
      <path d="M370 197l10 10 10-10" stroke={color.emerald600} strokeWidth="5" fill="none" />
    </svg>
  ),
  legal: (props) => (
    <svg viewBox="0 0 800 380" {...props} role="img" aria-label="Access to Legal Remedies" className="w-full h-full">
      <BG id="gLegalOH" stops={[{ offset: "0%", color: color.indigo100 }, { offset: "100%", color: color.emerald100 }]} />
      <SoftGlow id="glowLegalOH" std={7} alpha={0.5} />
      <rect x="0" y="0" width="800" height="380" rx="20" fill="url(#gLegalOH)" />
      {/* Legal icons: gavel, document, tick */}
      <rect x="180" y="150" width="110" height="70" rx="16" fill={color.white} stroke={color.slate300} sw="3" />
      <rect x="200" y="170" width="60" height="10" rx="5" fill={color.indigo600} />
      <g>
        <ellipse cx="400" cy="190" rx="24" ry="24" fill={color.indigo400} />
        <rect x="388" y="150" width="26" height="44" rx="7" fill={color.slate400} />
        <path d="M393 172l14 14 16-16" stroke={color.emerald600} strokeWidth="6" fill="none" />
      </g>
    </svg>
  ),
  privacy: (props) => (
    <svg viewBox="0 0 800 380" {...props} role="img" aria-label="Protection of Personal and Digital Information" className="w-full h-full">
      <BG id="gPrivOH" stops={[{ offset: "0%", color: color.emerald100 }, { offset: "100%", color: color.indigo50 }]} />
      <SoftGlow id="glowPrivOH" std={8} alpha={0.45} />
      <rect x="0" y="0" width="800" height="380" rx="20" fill="url(#gPrivOH)" />
      {/* Padlocks, shield, account icons */}
      <rect x="140" y="150" width="90" height="60" rx="14" fill={color.cyan100} />
      <ellipse cx="195" cy="190" rx="18" ry="16" fill={color.indigo400} />
      <rect x="260" y="182" width="70" height="38" rx="12" fill={color.white} stroke={color.slate400} />
      <path d="M290 200l12 14 18-14" stroke={color.emerald600} strokeWidth="5" fill="none" />
      <g>
        <ellipse cx="360" cy="170" rx="18" ry="14" fill={color.indigo200} />
      </g>
    </svg>
  ),
  psych: (props) => (
    <svg viewBox="0 0 800 380" {...props} role="img" aria-label="Psychological and Emotional Support" className="w-full h-full">
      <BG id="gPsychOH" stops={[{ offset: "0%", color: color.rose50 }, { offset: "100%", color: color.cyan50 }]} />
      <SoftGlow id="glowPsychOH" std={9} alpha={0.45} />
      <rect x="0" y="0" width="800" height="380" rx="20" fill="url(#gPsychOH)" />
      {/* Sofa + heart + therapist bubble */}
      <rect x="170" y="220" width="107" height="33" rx="10" fill={color.indigo100} stroke={color.indigo400} />
      <circle cx="212" cy="221" r="14" fill={color.rose100} />
      <rect x="230" y="210" width="38" height="22" rx="8" fill={color.rose50}/>
      <path d="M212 225c-5 9 8 16 8 6" stroke={color.rose400} strokeWidth="2" fill="none" />
      <text x="234" y="227" fontSize="13" fill={color.emerald600}>💬</text>
    </svg>
  ),
  evidence: (props) => (
    <svg viewBox="0 0 800 380" {...props} role="img" aria-label="Evidence Preservation and Documentation" className="w-full h-full">
      <BG id="gEvidenceOH" stops={[{ offset: "0%", color: color.indigo100 }, { offset: "100%", color: color.cyan200 }]} />
      <SoftGlow id="glowEvidenceOH" std={8} alpha={0.47} />
      <rect x="0" y="0" width="800" height="380" rx="20" fill="url(#gEvidenceOH)" />
      {/* Files, screenshots, badge */}
      <rect x="190" y="170" width="80" height="58" rx="12" fill={color.slate300} />
      <rect x="310" y="170" width="67" height="29" rx="10" fill={color.cyan100} />
      <circle cx="350" cy="205" r="10" fill={color.emerald400} />
      <g>
        <rect x="400" y="192" width="36" height="24" rx="7" fill={color.rose100} />
        <text x="418" y="208" fontSize="15" fill={color.emerald600}>✓</text>
      </g>
    </svg>
  ),
  updates: (props) => (
    <svg viewBox="0 0 800 380" {...props} role="img" aria-label="Continuous Updates and Advocacy" className="w-full h-full">
      <BG id="gUpdatesOH" stops={[{ offset: "0%", color: color.indigo100 }, { offset: "100%", color: color.cyan100 }]} />
      <SoftGlow id="glowUpdatesOH" std={9} alpha={0.43} />
      <rect x="0" y="0" width="800" height="380" rx="20" fill="url(#gUpdatesOH)" />
      {/* Notification, document, people */}
      <rect x="180" y="170" width="42" height="42" rx="14" fill={color.rose100} />
      <rect x="240" y="176" width="78" height="32" rx="10" fill={color.cyan100} />
      <ellipse cx="370" cy="190" rx="16" ry="14" fill={color.indigo100} />
      <rect x="390" y="176" width="48" height="26" rx="9" fill={color.emerald100} />
    </svg>
  ),
  orgrole: (props) => (
    <svg viewBox="0 0 800 380" {...props} role="img" aria-label="Organization’s Role in Online Harassment Support" className="w-full h-full">
      <BG id="gOrgOH" stops={[{ offset: "0%", color: color.cyan100 }, { offset: "100%", color: color.emerald100 }]} />
      <SoftGlow id="glowOrgOH" std={9} alpha={0.46} />
      <rect x="0" y="0" width="800" height="380" rx="20" fill="url(#gOrgOH)" />
      {/* Tiles, shield, people */}
      <rect x="200" y="170" width="120" height="54" rx="15" fill={color.indigo100} />
      <rect x="340" y="170" width="63" height="54" rx="12" fill={color.cyan100} />
      <path d="M440 170l32 15v18c0 22-12 36-32 45-20-9-32-23-32-45v-18l32-15z" fill={color.white} stroke={color.indigo400} strokeWidth="3"/>
      <path d="M428 191l10 12 14-13" stroke={color.emerald600} strokeWidth="5" fill="none" strokeLinecap="round" />
    </svg>
  ),
  conclusion: (props) => (
    <svg viewBox="0 0 800 380" {...props} role="img" aria-label="Conclusion: Holistic Help and Rights for Victims" className="w-full h-full">
      <BG id="gConcOH" stops={[{ offset: "0%", color: color.cyan200 }, { offset: "100%", color: color.indigo50 }]} />
      <rect x="0" y="0" width="800" height="380" rx="20" fill="url(#gConcOH)" />
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

/* ------------------------------ Section Block ------------------------------ */
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

/* ------------------------------- DATA (intact) ------------------------------- */
const data = {
  title: "Online Harassment Help & Rights – CRCCF",
  tagline: "Empowering Victims Against Digital Threats with Legal, Emotional, and Technical Support",
  sections: [
    {
      id: "intro",
      heading: "1. Introduction: Understanding Online Harassment",
      content: `Online harassment has become a pervasive issue, affecting individuals across age groups, professions, and communities. The subcard “Online Harassment Help & Rights” focuses on providing victims with comprehensive guidance, legal remedies, and psychological support to counter digital abuse.
CRCCF ensures victims can navigate harassment incidents confidently, assert their rights, and access the necessary resources to protect themselves while pursuing justice.`,
      svg: svgMap.intro,
    },
    {
      id: "assistance",
      heading: "2. Right to Immediate Assistance",
      content: `Victims have the right to prompt and reliable support the moment they face online harassment. Immediate assistance is crucial for documenting incidents, securing digital evidence, and preventing further abuse.
CRCCF provides rapid-response support, guiding victims step-by-step in reporting harassment, securing accounts, and implementing safety measures. Our team ensures victims feel protected, informed, and supported during the critical early stages of their case.`,
      svg: svgMap.assistance,
    },
    {
      id: "legal",
      heading: "3. Access to Legal Remedies",
      content: `Victims are entitled to legal protection under applicable cyber laws, which criminalize harassment, stalking, threats, and defamatory behavior on digital platforms. Legal support enables victims to file complaints, obtain restraining orders, and pursue civil or criminal action against perpetrators.
CRCCF provides expert legal guidance, helping victims understand their rights, document incidents accurately, and navigate court or administrative procedures efficiently. This ensures victims are empowered to seek justice confidently and effectively.`,
      svg: svgMap.legal,
    },
    {
      id: "privacy",
      heading: "4. Protection of Personal and Digital Information",
      content: `Maintaining privacy and security is essential for victims of online harassment. Victims have the right to secure personal information, digital identity, and online presence.
CRCCF offers practical guidance on securing social media accounts, monitoring online activity, and implementing cybersecurity measures. These proactive steps prevent repeat harassment, safeguard identity, and protect sensitive data from misuse or exposure.`,
      svg: svgMap.privacy,
    },
    {
      id: "psych",
      heading: "5. Psychological and Emotional Support",
      content: `Online harassment can cause severe emotional distress, anxiety, and fear. Victims have the right to access professional counselling and cyber-psychology support to restore mental well-being.
CRCCF provides confidential therapy, coping strategies, and ongoing emotional guidance, enabling victims to regain confidence, manage stress, and navigate the aftermath of harassment with resilience and clarity. Emotional support empowers victims to engage actively in protective and legal measures.`,
      svg: svgMap.psych,
    },
    {
      id: "evidence",
      heading: "6. Evidence Preservation and Documentation",
      content: `Accurate collection and preservation of digital evidence are essential for legal action. Victims have the right to expert assistance in capturing and maintaining emails, chat logs, screenshots, and social media interactions without compromising integrity.
CRCCF guides victims in proper documentation, ensuring evidence remains admissible in court and strengthens the case against perpetrators. Secure evidence management enhances the likelihood of successful legal outcomes.`,
      svg: svgMap.evidence,
    },
    {
      id: "updates",
      heading: "7. Continuous Updates and Advocacy",
      content: `Victims have the right to remain informed about their case progress, protective measures, and ongoing investigations. Continuous updates ensure transparency, engagement, and confidence.
CRCCF provides regular monitoring, case updates, and advocacy, representing victims’ interests with law enforcement and legal authorities. Transparent communication reassures victims that their rights are protected throughout the process.`,
      svg: svgMap.updates,
    },
    {
      id: "orgrole",
      heading: "8. Organization’s Role in Online Harassment Support",
      content: `CRCCF is committed to delivering holistic support for victims of online harassment, combining legal assistance, psychological counselling, digital security guidance, and advocacy. Every intervention is executed with professionalism, confidentiality, and empathy, ensuring victims feel secure, informed, and confident.
By centralizing support, CRCCF ensures that victims receive end-to-end guidance to recover emotionally, legally, and digitally from harassment incidents.`,
      svg: svgMap.orgrole,
    },
    {
      id: "conclusion",
      heading: "Conclusion: Holistic Help and Rights for Victims",
      content: `Victims of online harassment have extensive rights to immediate assistance, legal remedies, digital protection, and emotional support. Upholding these rights ensures victims can safely navigate digital threats, restore confidence, and pursue justice effectively.
CRCCF remains dedicated to providing professional, comprehensive, and compassionate services, ensuring that every victim of online harassment receives the protection, guidance, and empowerment necessary for full recovery and security.`,
      svg: svgMap.conclusion,
    },
  ],
};

/* ------------------------------ Main Page Component ------------------------------ */
export default function OnlineHarassmentHelpRights() {
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
        <span className="text-gray-700" aria-current="page">Online Harassment Help & Rights</span>
      </motion.nav>

      {/* Hero - Thief Harassing Victim Online Illustration */}
      <div ref={heroRef} className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-6 md:gap-8 lg:gap-10 items-center">
        <motion.div variants={itemUp}>
          <h1 className="text-[22px] sm:text-3xl font-bold text-gray-900">{data.title}</h1>
          <p className="mt-2 text-cyan-800 font-medium text-[15px] sm:text-base">{data.tagline}</p>
          <div className="mt-3 sm:mt-4 flex flex-wrap gap-2">
            {["Legal", "Emotional", "Protection"].map((pill) => (
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
              <VideoHeroHarassment />
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
