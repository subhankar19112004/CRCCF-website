// src/pages/victimSupport/PsychologicalCounsellingCyberVictims.jsx
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

/* --------------------- Hero SVG (Therapist & Cyber Victim, calming scene) --------------------- */
const VideoHeroPsyCounsel = () => (
  <svg viewBox="0 0 1000 460" className="w-full h-auto block" aria-label="Psychological Counseling Hero">
    {/* Gradient BG */}
    <BG id="psycHeroBG" stops={[
      { offset: "0%", color: color.rose50 },
      { offset: "55%", color: color.cyan100 },
      { offset: "100%", color: color.emerald100 }
    ]} />
    <SoftGlow id="glowPsyHero" std={15} alpha={0.43} />
    <rect x="0" y="0" width="1000" height="460" rx="34" fill="url(#psycHeroBG)" filter="url(#glowPsyHero)" />
    {/* Couch and therapist */}
    <g>
      {/* Couch */}
      <rect x="180" y="250" width="210" height="50" rx="22" fill={color.indigo100} stroke={color.indigo400} strokeWidth="4" />
      {/* Victim (left, blue shirt) */}
      <ellipse cx="220" cy="295" rx="26" ry="11" fill={color.black} opacity="0.09" />
      <rect x="205" y="216" width="34" height="78" rx="13" fill={color.indigo300} />
      <ellipse cx="222" cy="204" rx="16" ry="13" fill={color.rose100} />
      {/* Therapist (right) */}
      <ellipse cx="340" cy="295" rx="26" ry="11" fill={color.black} opacity="0.08" />
      <rect x="325" y="221" width="34" height="73" rx="15" fill={color.emerald100} />
      <ellipse cx="342" cy="210" rx="15" ry="13" fill={color.rose50} />
      {/* Therapist hand with pad */}
      <rect x="355" y="250" width="24" height="9" rx="4" fill={color.white} />
      <rect x="362" y="253" width="11" height="6" rx="2.5" fill={color.cyan100} />
    </g>
    {/* Calming shape + plants */}
    <g>
      <ellipse cx="490" cy="410" rx="38" ry="13" fill={color.emerald100} opacity="0.2" />
      <rect x="475" y="367" width="28" height="44" rx="13" fill={color.emerald300} />
      <ellipse cx="489" cy="366" rx="11" ry="8" fill={color.emerald400} />
    </g>
    {/* Speech bubble with heart */}
    <g>
      <rect x="300" y="170" width="72" height="36" rx="12" fill={color.white} stroke={color.rose100} />
      <text x="336" y="194" fill={color.rose400} fontSize="18" fontWeight="bold" textAnchor="middle">❤</text>
    </g>
  </svg>
);

/* ---------------------- Section SVGs (calm, real, emotional) ---------------------- */
const svgMap = {
  intro: (props) => (
    <svg viewBox="0 0 800 380" {...props} role="img" aria-label="Introduction: The Importance of Mental Health" className="w-full h-full">
      <BG id="gIntroPC" stops={[{ offset: "0%", color: color.cyan50 }, { offset: "100%", color: color.rose50 }]} />
      <SoftGlow id="glowIntroPC" std={10} alpha={0.45} />
      <rect x="0" y="0" width="800" height="380" rx="20" fill="url(#gIntroPC)" />
      {/* Couch/therapist, open guidance hand, shield */}
      <rect x="90" y="240" width="175" height="48" rx="18" fill={color.indigo100} />
      <ellipse cx="120" cy="280" rx="18" ry="8" fill={color.cyan200} />
      {/* Head/shoulders - victim */}
      <ellipse cx="120" cy="250" rx="16" ry="13" fill={color.rose100} />
      <rect x="104" y="263" width="32" height="23" rx="8" fill={color.indigo300} />
      {/* Therapist face/shoulders */}
      <ellipse cx="235" cy="241" rx="14" ry="12" fill={color.rose50} />
      <rect x="221" y="253" width="28" height="18" rx="7" fill={color.emerald100} />
      {/* Heart-shaped badge */}
      <ellipse cx="160" cy="270" rx="9" ry="9" fill={color.rose100} stroke={color.rose400} />
      {/* Shield */}
      <path d="M260 230l19 8v11c0 13-9 24-19 28-11-5-19-15-19-28v-11l19-8z" fill={color.white} stroke={color.emerald600} strokeWidth="3"/>
    </svg>
  ),
  support: (props) => (
    <svg viewBox="0 0 800 380" {...props} role="img" aria-label="Right to Emotional Support" className="w-full h-full">
      <BG id="gSuppPC" stops={[{ offset: "0%", color: color.rose50 }, { offset: "100%", color: color.emerald50 }]} />
      <SoftGlow id="glowSuppPC" std={8} alpha={0.47} />
      <rect x="0" y="0" width="800" height="380" rx="20" fill="url(#gSuppPC)" />
      {/* Two hands, guidance line, safe heart */}
      <ellipse cx="200" cy="200" rx="45" ry="16" fill={color.emerald100} opacity="0.19" />
      <ellipse cx="180" cy="183" rx="17" ry="7" fill={color.rose100} />
      <ellipse cx="220" cy="183" rx="17" ry="7" fill={color.indigo100} />
      <ellipse cx="200" cy="180" rx="14" ry="14" fill={color.rose400} />
      {/* Hand over heart, guidance line */}
      <path d="M197 183l-8-16m11 16l8-16" stroke={color.indigo300} strokeWidth="3" fill="none" />
      {/* Shield */}
      <path d="M240 148l13 6v8c0 10-6 18-13 21-7-3-13-11-13-21v-8l13-6z" fill={color.white} stroke={color.emerald600} strokeWidth="2"/>
    </svg>
  ),
  assessment: (props) => (
    <svg viewBox="0 0 800 380" {...props} role="img" aria-label="Assessment and Personalized Care" className="w-full h-full">
      <BG id="gAssessPC" stops={[{ offset: "0%", color: color.cyan100 }, { offset: "100%", color: color.indigo100 }]} />
      <SoftGlow id="glowAssessPC" std={7} alpha={0.41} />
      <rect x="0" y="0" width="800" height="380" rx="20" fill="url(#gAssessPC)" />
      {/* Checklist, profile, clipboard */}
      <rect x="130" y="160" width="70" height="50" rx="10" fill={color.white} />
      <ellipse cx="165" cy="180" rx="14" ry="12" fill={color.indigo300} />
      <rect x="185" y="178" width="26" height="11" rx="5" fill={color.cyan200} />
      {/* Check mark */}
      <path d="M145 202l7 7 14-14" stroke={color.emerald600} strokeWidth="4" fill="none" />
      {/* Clipboard */}
      <rect x="210" y="167" width="36" height="29" rx="8" fill={color.rose50} />
    </svg>
  ),
  trauma: (props) => (
    <svg viewBox="0 0 800 380" {...props} role="img" aria-label="Trauma Recovery and Coping Strategies" className="w-full h-full">
      <BG id="gTraumaPC" stops={[{ offset: "0%", color: color.indigo100 }, { offset: "100%", color: color.cyan100 }]} />
      <SoftGlow id="glowTraumaPC" std={9} alpha={0.42} />
      <rect x="0" y="0" width="800" height="380" rx="20" fill="url(#gTraumaPC)" />
      {/* Meditation icon, mind wave, leaf */}
      <ellipse cx="160" cy="210" rx="22" ry="17" fill={color.rose100} />
      <rect x="145" y="210" width="30" height="8" rx="4" fill={color.cyan300} />
      <ellipse cx="173" cy="182" rx="13" ry="13" fill={color.emerald400} />
      {/* Zen leaf */}
      <ellipse cx="200" cy="230" rx="7" ry="18" fill={color.emerald100} />
      <ellipse cx="210" cy="230" rx="7" ry="18" fill={color.cyan100} transform="rotate(-10 210 230)" />
    </svg>
  ),
  integration: (props) => (
    <svg viewBox="0 0 800 380" {...props} role="img" aria-label="Integration with Legal and Protective Measures" className="w-full h-full">
      <BG id="gIntegrPC" stops={[{ offset: "0%", color: color.cyan100 }, { offset: "100%", color: color.emerald100 }]} />
      <SoftGlow id="glowIntegrPC" std={8} alpha={0.47} />
      <rect x="0" y="0" width="800" height="380" rx="20" fill="url(#gIntegrPC)" />
      {/* Shield, courtroom, heart, doc icon */}
      <path d="M170 170l28 10v14c0 16-10 29-28 36-18-7-28-20-28-36v-14l28-10z" fill={color.white} stroke={color.emerald600} strokeWidth="2"/>
      <ellipse cx="170" cy="200" rx="12" ry="10" fill={color.indigo100} />
      <rect x="190" y="210" width="32" height="18" rx="5" fill={color.white} />
      <ellipse cx="215" cy="220" rx="5" ry="7" fill={color.rose400} />
      <rect x="232" y="198" width="14" height="14" rx="4" fill={color.cyan100} />
      <rect x="205" y="172" width="20" height="8" rx="4" fill={color.cyan200} />
    </svg>
  ),
  continuous: (props) => (
    <svg viewBox="0 0 800 380" {...props} role="img" aria-label="Continuous Support and Follow-Up" className="w-full h-full">
      <BG id="gContPC" stops={[{ offset: "0%", color: color.indigo50 }, { offset: "100%", color: color.cyan200 }]} />
      <SoftGlow id="glowContPC" std={8} alpha={0.42} />
      <rect x="0" y="0" width="800" height="380" rx="20" fill="url(#gContPC)" />
      {/* Calendar, progress bar, chat bubble */}
      <rect x="135" y="175" width="54" height="38" rx="9" fill={color.white} />
      <ellipse cx="154" cy="193" rx="8" ry="7" fill={color.indigo300} />
      <rect x="162" y="188" width="19" height="6" rx="2.5" fill={color.cyan100} />
      {/* Progress bar */}
      <rect x="145" y="215" width="38" height="7" rx="3.5" fill={color.emerald400} />
      {/* Chat bubble */}
      <rect x="200" y="173" width="38" height="22" rx="7" fill={color.rose100} />
    </svg>
  ),
  confidentiality: (props) => (
    <svg viewBox="0 0 800 380" {...props} role="img" aria-label="Confidentiality and Safe Space" className="w-full h-full">
      <BG id="gConfPC" stops={[{ offset: "0%", color: color.rose100 }, { offset: "100%", color: color.indigo100 }]} />
      <SoftGlow id="glowConfPC" std={7} alpha={0.46} />
      <rect x="0" y="0" width="800" height="380" rx="20" fill="url(#gConfPC)" />
      {/* Locked heart, shield, secure icon */}
      <ellipse cx="159" cy="192" rx="17" ry="16" fill={color.rose400} opacity="0.17" />
      <ellipse cx="211" cy="202" rx="13" ry="12" fill={color.cyan100} />
      {/* Lock */}
      <rect x="187" y="175" width="28" height="16" rx="6" fill={color.white} />
      <ellipse cx="201" cy="175" rx="9" ry="8" fill={color.indigo100} />
      {/* Shield */}
      <path d="M224 155l11 4v7c0 10-6 16-11 18-5-2-11-8-11-18v-7l11-4z" fill={color.white} stroke={color.emerald600} strokeWidth="1.7"/>
      {/* Lock on heart */}
      <rect x="155" y="185" width="9" height="16" rx="4.5" fill={color.indigo400} />
    </svg>
  ),
  orgrole: (props) => (
    <svg viewBox="0 0 800 380" {...props} role="img" aria-label="Organization’s Role in Psychological Support" className="w-full h-full">
      <BG id="gOrgPC" stops={[{ offset: "0%", color: color.cyan100 }, { offset: "100%", color: color.rose50 }]} />
      <SoftGlow id="glowOrgPC" std={9} alpha={0.43} />
      <rect x="0" y="0" width="800" height="380" rx="20" fill="url(#gOrgPC)" />
      {/* Figures, counseling icon, clipboard */}
      <ellipse cx="190" cy="220" rx="26" ry="12" fill={color.emerald100} />
      {/* Patient */}
      <ellipse cx="181" cy="200" rx="13" ry="11" fill={color.rose100} />
      <rect x="170" y="211" width="22" height="17" rx="7" fill={color.indigo100} />
      {/* Counselor */}
      <ellipse cx="216" cy="195" rx="13" ry="11" fill={color.rose50} />
      <rect x="205" y="205" width="22" height="18" rx="7" fill={color.emerald100} />
      {/* Clipboard */}
      <rect x="194" y="230" width="16" height="10" rx="3" fill={color.cyan100} />
    </svg>
  ),
  conclusion: (props) => (
    <svg viewBox="0 0 800 380" {...props} role="img" aria-label="Conclusion: Healing and Empowerment for Cyber Victims" className="w-full h-full">
      <BG id="gConcPC" stops={[{ offset: "0%", color: color.cyan100 }, { offset: "100%", color: color.rose50 }]} />
      <rect x="0" y="0" width="800" height="380" rx="20" fill="url(#gConcPC)" />
      {/* Progress arcs, calm circles */}
      <rect x="140" y="190" width="12" height="120" rx="6" fill={color.indigo600} />
      <ellipse cx="200" cy="240" rx="34" ry="16" fill={color.rose100} />
      <ellipse cx="270" cy="264" rx="26" ry="12" fill={color.emerald100} />
      <ellipse cx="320" cy="243" rx="18" ry="18" fill={color.indigo300} opacity="0.18" />
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
  title: "Psychological Counselling for Cyber Victims – CRCCF",
  tagline: "Supporting Emotional Recovery and Empowering Mental Well-Being",
  sections: [
    {
      id: "intro",
      heading: "1. Introduction: The Importance of Mental Health",
      content: `Cybercrime can leave victims feeling anxious, distressed, and vulnerable, impacting both personal and digital life. The subcard “Psychological Counselling for Cyber Victims” emphasizes providing professional mental health support to help victims cope with trauma, stress, and fear. Our organization ensures that victims receive structured guidance to restore emotional balance, build resilience, and regain confidence.
CRCCF delivers tailored interventions combining therapy, emotional guidance, and coping strategies. By addressing mental health alongside legal and protective measures, victims are empowered to recover fully and navigate their digital environments safely.`,
      svg: svgMap.intro,
    },
    {
      id: "support",
      heading: "2. Right to Emotional Support",
      content: `Victims have the fundamental right to access professional psychological counselling. Emotional support is essential to address the impact of cyberbullying, identity theft, harassment, and other digital offenses.
Our organization offers confidential therapy sessions, coping techniques, and emotional guidance, helping victims process experiences, manage stress, and regain control over their mental well-being. Emotional support ensures victims can participate effectively in legal and protective measures without being overwhelmed by trauma.`,
      svg: svgMap.support,
    },
    {
      id: "assessment",
      heading: "3. Assessment and Personalized Care",
      content: `Effective counselling begins with understanding each victim’s unique circumstances and emotional needs. Victims have the right to undergo professional psychological assessments to identify trauma, anxiety, depression, or stress caused by cyber incidents.
CRCCF provides personalized care plans based on assessment outcomes, ensuring targeted interventions. Tailored support addresses specific emotional challenges, empowering victims to recover efficiently while building resilience for future digital engagement.`,
      svg: svgMap.assessment,
    },
    {
      id: "trauma",
      heading: "4. Trauma Recovery and Coping Strategies",
      content: `Cybercrime can have long-lasting emotional effects on daily life, relationships, and online engagement. Victims are entitled to strategies that help manage anxiety, fear, and emotional disruption.
Our organization guides victims through trauma recovery using mindfulness techniques, coping mechanisms, and problem-solving strategies. This enables individuals to regain confidence, reduce fear, and take control of their emotional well-being.`,
      svg: svgMap.trauma,
    },
    {
      id: "integration",
      heading: "5. Integration with Legal and Protective Measures",
      content: `Psychological support is most effective when aligned with legal and protective measures. Victims have the right to receive counselling alongside guidance for filing complaints, preserving evidence, and pursuing justice.
CRCCF ensures seamless coordination between mental health support and legal assistance. This integrated approach allows victims to address emotional recovery while actively navigating legal processes, ensuring holistic protection and empowerment.`,
      svg: svgMap.integration,
    },
    {
      id: "continuous",
      heading: "6. Continuous Support and Follow-Up",
      content: `Emotional recovery from cybercrime is an ongoing process. Victims have the right to continuous support, regular follow-ups, and monitoring of mental well-being.
Our organization provides ongoing counselling, progress evaluations, and encouragement, enabling victims to remain resilient and confident as they recover from digital trauma. Continuous support fosters sustained emotional stability and engagement with protective measures.`,
      svg: svgMap.continuous,
    },
    {
      id: "confidentiality",
      heading: "7. Confidentiality and Safe Space",
      content: `Victims are entitled to a secure, private, and non-judgmental environment for sharing experiences. Maintaining confidentiality is critical for effective counselling.
CRCCF adheres to strict privacy protocols, creating a safe space where victims feel supported, understood, and empowered. This secure environment encourages open communication, allowing for deeper healing and emotional recovery.`,
      svg: svgMap.confidentiality,
    },
    {
      id: "orgrole",
      heading: "8. Organization’s Role in Psychological Support",
      content: `Our organization is committed to providing holistic psychological counselling for cyber victims. Combining professional therapy, personalized care plans, integration with legal support, and continuous follow-up, we deliver comprehensive mental health services.
Each intervention is conducted with empathy, confidentiality, and professionalism. CRCCF ensures that victims receive consistent emotional support, enabling them to regain confidence, stability, and empowerment throughout the recovery process.`,
      svg: svgMap.orgrole,
    },
    {
      id: "conclusion",
      heading: "Conclusion: Healing and Empowerment for Cyber Victims",
      content: `Psychological Counselling for Cyber Victims equips individuals with tools and guidance to recover emotionally, rebuild confidence, and regain control over their lives. Upholding the right to mental health support ensures that victims navigate the aftermath of cybercrime effectively while pursuing justice.
CRCCF remains dedicated to professional, compassionate, and comprehensive psychological services, empowering every victim to heal, thrive, and engage with digital and personal life securely and confidently.`,
      svg: svgMap.conclusion,
    },
  ],
};

/* ------------------------------ Main Page Component ------------------------------ */
export default function PsychologicalCounsellingCyberVictims() {
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
        <span className="text-gray-700" aria-current="page">Psychological Counselling for Cyber Victims</span>
      </motion.nav>
      {/* Hero - Therapist & Cyber Victim Illustration */}
      <div ref={heroRef} className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-6 md:gap-8 lg:gap-10 items-center">
        <motion.div variants={itemUp}>
          <h1 className="text-[22px] sm:text-3xl font-bold text-gray-900">{data.title}</h1>
          <p className="mt-2 text-cyan-800 font-medium text-[15px] sm:text-base">{data.tagline}</p>
          <div className="mt-3 sm:mt-4 flex flex-wrap gap-2">
            {["Emotional Support", "Healing", "Confidentiality"].map((pill) => (
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
              <VideoHeroPsyCounsel />
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
