// src/pages/victimSupport/CyberVictimReliefEmergencyResponse.jsx
import React, { useRef } from "react";
import { Link } from "react-router-dom";
import { motion, useReducedMotion, useScroll, useTransform, useSpring } from "framer-motion";

/* =============================== Motion =============================== */
const useAnims = () => {
  const shouldReduce = useReducedMotion();
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: shouldReduce
        ? { duration: 0 }
        : { duration: 0.28, when: "beforeChildren", staggerChildren: 0.06 },
    },
  };
  const itemUp = {
    hidden: { opacity: 0, y: shouldReduce ? 0 : 12 },
    show: { opacity: 1, y: 0, transition: { duration: shouldReduce ? 0 : 0.28 } },
  };
  return { container, itemUp };
};

/* =============================== Palette =============================== */
const color = {
  cyan25:"#F5FEFF", cyan50:"#ECFEFF", cyan100:"#CFFAFE", cyan300:"#67E8F9", cyan500:"#06B6D4", cyan800:"#155E75",
  indigo25:"#F7F8FF", indigo50:"#EEF2FF", indigo100:"#E0E7FF", indigo300:"#A5B4FC", indigo400:"#818CF8", indigo600:"#4F46E5", indigo800:"#3730A3",
  emerald25:"#F3FCF7", emerald50:"#ECFDF5", emerald100:"#D1FAE5", emerald300:"#86EFAC", emerald400:"#34D399", emerald600:"#059669",
  amber50:"#FFFBEB", amber100:"#FEF3C7", amber400:"#FBBF24",
  rose50:"#FFF1F2", rose100:"#FFE4E6", rose400:"#FB7185", rose500:"#F43F5E",
  slate100:"#F1F5F9", slate200:"#E2E8F0", slate300:"#CBD5E1", slate400:"#94A3B8", slate500:"#64748B", slate700:"#334155", slate900:"#0F172A",
  white:"#FFFFFF", black:"#000000",
};

/* ================= DATA (kept 100% intact, nothing edited) ================= */
const data = {
  title: "Cyber Victim Relief & Emergency Response – CRCCF",
  tagline: "Providing Immediate Support and Protection to Cybercrime Victims",
  sections: [
    {
      id: "intro",
      heading: "1. Introduction: Immediate Support for Cybercrime Victims",
      content: `Cybercrime can occur unexpectedly, leaving victims in urgent need of assistance, guidance, and protection. The subcard “Cyber Victim Relief & Emergency Response” emphasizes rapid intervention for individuals affected by digital offenses. Our organization ensures victims receive holistic emergency support, legal guidance, technical aid, and emotional care to mitigate harm and initiate recovery promptly.
CRCCF combines structured emergency protocols with professional assistance. By offering immediate relief, victims can regain control over their personal and digital safety while receiving guidance for legal and technical action.`,
      svg: "IntroSVG",
    },
    {
      id: "emergency-assistance",
      heading: "2. Right to Emergency Assistance",
      content: `Victims have the fundamental right to immediate support during cybercrime incidents. Our emergency response team is available 24/7 to provide guidance, evaluate risks, and coordinate protective measures.
Prompt assistance ensures that victims can secure their digital devices, accounts, and personal information while preventing escalation of threats. CRCCF prioritizes rapid intervention to safeguard victims and minimize potential harm.`,
      svg: "EmergencyAssistanceSVG",
    },
    {
      id: "legal-support",
      heading: "3. Rapid Legal Support and Complaint Filing",
      content: `Victims have the right to swift legal assistance in emergency situations. Our organization provides expert guidance on filing complaints, preserving evidence, and understanding applicable cyber laws.
Rapid legal support ensures that perpetrators are held accountable quickly and that victims’ rights are protected. CRCCF facilitates efficient legal action, enabling victims to respond effectively to urgent cybercrime threats.`,
      svg: "LegalSupportSVG",
    },
    {
      id: "evidence-collection",
      heading: "4. Digital Evidence Collection and Preservation",
      content: `Timely documentation of digital evidence is essential during emergencies. Victims have the right to professional assistance in collecting emails, messages, screenshots, and other online records.
Our team ensures that all evidence is preserved systematically and in compliance with legal standards. CRCCF strengthens victims’ cases by providing accurate documentation for immediate action and long-term proceedings.`,
      svg: "EvidenceCollectionSVG",
    },
    {
      id: "technical-assistance",
      heading: "5. Technical Assistance and Cybersecurity Measures",
      content: `Cybercrime emergencies often involve account compromise, hacked devices, or active online threats. Victims have the right to expert technical guidance for account recovery, password security, enabling two-factor authentication, and safeguarding digital assets.
Our organization provides actionable steps to prevent further attacks and restore digital safety. CRCCF ensures that victims regain control over their digital environment with professional technical support.`,
      svg: "TechnicalAssistanceSVG",
    },
    {
      id: "psychological-relief",
      heading: "6. Psychological and Emotional Relief",
      content: `Emergencies can cause intense fear, stress, and anxiety. Victims have the right to immediate psychological support to manage emotional trauma.
Our organization offers counseling, coping strategies, and empathetic guidance to help victims regain composure, confidence, and a sense of safety. CRCCF ensures emotional stability alongside rapid legal and technical intervention.`,
      svg: "PsychologicalReliefSVG",
    },
    {
      id: "monitoring-follow-up",
      heading: "7. Continuous Monitoring and Follow-Up Support",
      content: `Victims have the right to ongoing monitoring and guidance following an emergency response. Our organization provides updates on legal proceedings, tracks potential threats, and delivers proactive measures to ensure continued safety.
Continuous follow-up ensures that victims remain informed, supported, and protected throughout recovery. CRCCF maintains a structured approach to monitor and assist victims beyond immediate crisis resolution.`,
      svg: "MonitoringFollowUpSVG",
    },
    {
      id: "org-role",
      heading: "8. Organization’s Role in Emergency Response",
      content: `Our organization is dedicated to delivering comprehensive relief and emergency response for cybercrime victims. By integrating legal expertise, technical support, psychological counseling, and continuous monitoring, we create a robust framework for professional assistance.
Every intervention is conducted with confidentiality, empathy, and professionalism, ensuring victims feel safe, supported, and empowered during and after emergencies.`,
      svg: "OrgRoleSVG",
    },
    {
      id: "conclusion",
      heading: "Conclusion: Empowering Victims Through Rapid Relief",
      content: `The Cyber Victim Relief & Emergency Response initiative ensures that victims of cybercrime have access to immediate assistance, legal remedies, technical guidance, and emotional support. Upholding these rights enables victims to respond effectively to crises, minimize damage, and initiate recovery confidently.
Our organization remains committed to providing professional, comprehensive, and compassionate services, empowering every victim to navigate digital emergencies safely and securely.`,
      svg: "ConclusionSVG",
    },
  ],
};

/* ========================== HERO: Complex Video SVG ========================== */
const VideoHeroEmergencyResponse = () => {
    const title = "CRCCF Cyber Victim Relief & Emergency Response";
    const desc = "An animation of a futuristic 'Cyber Response' vehicle speeding to the aid of a distressed victim, casting a protective beam of light.";

    return (
        <svg viewBox="0 0 1100 520" role="img" aria-labelledby="vhTitleER vhDescER" className="w-full h-auto">
            <title id="vhTitleER">{title}</title>
            <desc id="vhDescER">{desc}</desc>
            <defs>
                <linearGradient id="erGrad" x1="0.5" y1="0" x2="0.5" y2="1">
                    <stop offset="0%" stopColor={color.slate100} />
                    <stop offset="100%" stopColor={color.rose100} />
                </linearGradient>
            </defs>
            <rect x="0" y="0" width="1100" height="520" rx="30" fill="url(#erGrad)" />
            <path d="M0 450 H 1100" stroke={color.slate300} strokeWidth="6" strokeDasharray="20 10"/>

            {/* Victim in Distress */}
            <g transform="translate(850, 400)">
                <circle cy="-30" r="25" fill="#F4C9A5"/>
                <path d="M-40 0 C-30 80, 30 80, 40 0 Z" fill={color.indigo300}/>
                <text y="-80" fontSize="60" fill={color.rose500}>🚨</text>
            </g>

            {/* Cyber Response Vehicle */}
            <g id="vehicle">
                <path d="M100 450 L150 350 H350 L400 450 Z" fill={color.white} stroke={color.slate700} strokeWidth="4"/>
                <rect x="150" y="360" width="200" height="40" fill={color.cyan100}/>
                <circle cx="170" cy="450" r="30" fill={color.slate700} stroke={color.slate900} strokeWidth="8"/>
                <circle cx="330" cy="450" r="30" fill={color.slate700} stroke={color.slate900} strokeWidth="8"/>
                {/* Shield Logo */}
                <g transform="translate(250, 390)">
                    <path d="M0 -20 l20 10 v15 c0 15 -20 25 -20 25 s-20 -10 -20 -25 v-15z" fill={color.emerald400}/>
                    <path d="M0 -5 H0 V15 M-5 5 H5" stroke={color.white} strokeWidth="4"/>
                </g>
                {/* Siren */}
                <rect x="240" y="320" width="20" height="30" rx="5" fill={color.rose400}>
                    <animate attributeName="fill" values={`${color.rose400}; ${color.cyan300}; ${color.rose400}`} dur="1s" repeatCount="indefinite"/>
                </rect>
                <animateTransform attributeName="transform" type="translate" from="-400 0" to="0 0" dur="1.5s" fill="freeze"/>
            </g>

            {/* Protective Light Beam */}
            <path d="M380 370 L850 370 L870 300 L380 360 Z" fill={color.cyan300} opacity="0">
                <animate attributeName="opacity" from="0" to="0.4" begin="1.5s" dur="0.5s" fill="freeze"/>
            </path>
        </svg>
    );
};


/* ============================== SVG helpers ============================== */
const BG = ({ id, stops }) => (
  <defs>
    <linearGradient id={id} x1="0" y1="0" x2="1" y2="1">
      {stops.map((s, i) => <stop key={i} offset={s.offset} stopColor={s.color} stopOpacity={s.opacity ?? 1} />)}
    </linearGradient>
  </defs>
);
const Card = ({ x=0, y=0, w=100, h=100, r = 16, fill = color.white, stroke, sw = 0, opacity = 1 }) => (
  <rect x={x} y={y} width={w} height={h} rx={r} fill={fill} stroke={stroke} strokeWidth={sw} opacity={opacity} />
);

/* ===================== Complex Section Illustrations ===================== */
/* 1) Intro */
const IntroSVG = (props) => (
    <svg viewBox="0 0 820 400" role="img" aria-label="A CRCCF first responder with a digital first-aid kit helps a victim at a computer." {...props}>
        <BG id="gIntroER" stops={[{ offset: "0%", color: color.rose50 }, { offset: "100%", color: color.slate100 }]} />
        <rect x="0" y="0" width="820" height="400" rx="20" fill="url(#gIntroER)" />
        {/* Victim at computer */}
        <g transform="translate(200, 220)">
            <circle cy="-30" r="25" fill="#F4C9A5"/>
            <path d="M-40 0 C-30 80, 30 80, 40 0 Z" fill={color.indigo300}/>
            <rect x="-80" y="-120" width="160" height="100" rx="10" fill={color.slate700}/>
            <text x="0" y="-70" textAnchor="middle" fontSize="50" fill={color.rose500}>❗</text>
        </g>
        {/* First Responder */}
        <g transform="translate(550, 220)">
            <circle cy="-30" r="25" fill="#C4A98D"/>
            <path d="M-40 0 C-30 80, 30 80, 40 0 Z" fill={color.white}/>
            <path d="M-10 -10 H10 M0 -15 V-5" stroke={color.rose400} strokeWidth="4"/>
            {/* First aid kit */}
            <g transform="translate(50, 20)">
                <rect width="100" height="70" rx="10" fill={color.emerald400}/>
                <text x="20" y="45" fontSize="30">🛡️</text>
                <text x="60" y="45" fontSize="30">⚖️</text>
            </g>
        </g>
    </svg>
);

/* 2) Emergency Assistance */
const EmergencyAssistanceSVG = (props) => (
    <svg viewBox="0 0 820 400" role="img" aria-label="A 24/7 clock symbol next to a loudly ringing red phone." {...props}>
        <BG id="gAssistER" stops={[{ offset: "0%", color: color.cyan50 }, { offset: "100%", color: color.rose50 }]} />
        <rect x="0" y="0" width="820" height="400" rx="20" fill="url(#gAssistER)" />
        {/* 24/7 Clock */}
        <g transform="translate(250, 200)">
            <circle r="120" fill={color.white} stroke={color.slate300} strokeWidth="4"/>
            <text x="0" y="20" textAnchor="middle" fontSize="60" fontWeight="bold" fill={color.slate700}>24/7</text>
            <path d="M0 -100 A 100 100 0 1 1 -86.6 50" stroke={color.cyan300} strokeWidth="10" fill="none"/>
            <path d="M-100 0 L-120 0" stroke={color.cyan300} strokeWidth="10"/>
        </g>
        {/* Ringing Phone */}
        <g transform="translate(600, 200)">
            <path d="M-50 -50 L-30 -70 L30 -70 L50 -50 V50 L30 70 L-30 70 L-50 50Z" fill={color.rose500}/>
            <text x="0" y="15" textAnchor="middle" fontSize="60">📞</text>
            <animateTransform attributeName="transform" type="rotate" values="0; 5; -5; 0" dur="0.5s" repeatCount="indefinite"/>
        </g>
    </svg>
);

/* 3) Rapid Legal Support */
const LegalSupportSVG = (props) => (
    <svg viewBox="0 0 820 400" role="img" aria-label="A legal document being filled out at high speed, with a gavel striking in the background." {...props}>
        <BG id="gLegalER" stops={[{ offset: "0%", color: color.indigo50 }, { offset: "100%", color: color.slate100 }]} />
        <rect x="0" y="0" width="820" height="400" rx="20" fill="url(#gLegalER)" />
        {/* Document */}
        <g transform="translate(150, 50)">
            <Card w="520" h="300" stroke={color.slate300} sw="2"/>
            <text x="20" y="40" fontWeight="bold">URGENT COMPLAINT</text>
            <path id="textLine" d="M20 80 H 500 M20 100 H500" stroke={color.slate300} strokeWidth="2"/>
        </g>
        {/* Fast Pen */}
        <g transform="translate(150, 150)">
            <path d="M0 0 L 100 -20 L 90 -30 Z" fill={color.cyan300}/>
            <animateMotion path="M20 0 H480" dur="1s" repeatCount="indefinite"/>
        </g>
        {/* Gavel */}
        <g transform="translate(650, 100)">
            <rect x="-30" y="0" width="60" height="10" rx="3" fill={color.slate700}/>
            <rect x="-5" y="-30" width="10" height="30" fill={color.slate700}/>
            <path d="M-40 -40 L40 40 M-40 40 L40 -40" stroke={color.amber400} strokeWidth="5" opacity="0">
                <animate attributeName="opacity" values="0; 1; 0" dur="1.5s" repeatCount="indefinite"/>
            </path>
            <animateTransform attributeName="transform" type="rotate" values="20; -10; 20" dur="1.5s" repeatCount="indefinite" transform-origin="0 0"/>
        </g>
    </svg>
);

/* 4) Digital Evidence Collection */
const EvidenceCollectionSVG = (props) => (
    <svg viewBox="0 0 820 400" role="img" aria-label="A digital scoop quickly collecting malicious icons from a screen into a secure container." {...props}>
        <BG id="gEvidenceER" stops={[{ offset: "0%", color: color.slate100 }, { offset: "100%", color: color.cyan50 }]} />
        <rect x="0" y="0" width="820" height="400" rx="20" fill="url(#gEvidenceER)" />
        {/* Screen */}
        <rect x="100" y="50" width="620" height="300" rx="10" fill={color.slate900}/>
        {/* Malicious Icons */}
        <text x="150" y="150" fontSize="40">✉️<animateTransform attributeName="transform" type="translate" values="0 0; 300 150" dur="2s" begin="0.5s" fill="freeze"/><animate attributeName="opacity" from="1" to="0" dur="0.1s" begin="2.4s" fill="freeze"/></text>
        <text x="300" y="250" fontSize="40">💬<animateTransform attributeName="transform" type="translate" values="0 0; 150 50" dur="2s" begin="1s" fill="freeze"/><animate attributeName="opacity" from="1" to="0" dur="0.1s" begin="2.9s" fill="freeze"/></text>
        {/* Evidence Container */}
        <g transform="translate(500, 250)">
            <rect width="200" height="100" rx="10" fill={color.amber100}/>
            <rect y="10" width="200" height="10" fill={color.amber400}/>
            <text x="100" y="65" textAnchor="middle">EVIDENCE</text>
        </g>
    </svg>
);

/* 5) Technical Assistance */
const TechnicalAssistanceSVG = (props) => (
    <svg viewBox="0 0 820 400" role="img" aria-label="A hand turning red 'Access Denied' pop-ups into green 'Secured' checkmarks." {...props}>
        <BG id="gTechER" stops={[{ offset: "0%", color: color.emerald50 }, { offset: "100%", color: color.rose50 }]} />
        <rect x="0" y="0" width="820" height="400" rx="20" fill="url(#gTechER)" />
        {/* Pop-ups */}
        <g>
            <rect id="p1" x="150" y="100" width="200" height="100" rx="10" fill={color.rose100}/>
            <text x="250" y="155" textAnchor="middle" fill={color.rose500}>Compromised</text>
            <animate target="#p1" attributeName="fill" from={color.rose100} to={color.emerald100} dur="0.5s" begin="1s" fill="freeze"/>
            <text x="300" y="155" textAnchor="middle" fill={color.emerald600} opacity="0">✅<animate attributeName="opacity" from="0" to="1" dur="0.1s" begin="1s" fill="freeze"/></text>
        </g>
        <g>
            <rect id="p2" x="450" y="200" width="200" height="100" rx="10" fill={color.rose100}/>
            <text x="550" y="255" textAnchor="middle" fill={color.rose500}>Hacked</text>
            <animate target="#p2" attributeName="fill" from={color.rose100} to={color.emerald100} dur="0.5s" begin="2s" fill="freeze"/>
            <text x="600" y="255" textAnchor="middle" fill={color.emerald600} opacity="0">✅<animate attributeName="opacity" from="0" to="1" dur="0.1s" begin="2s" fill="freeze"/></text>
        </g>
    </svg>
);

/* 6) Psychological and Emotional Relief */
const PsychologicalReliefSVG = (props) => (
    <svg viewBox="0 0 820 400" role="img" aria-label="A counsellor offers a calming cup of tea to a victim, turning their stormy thoughts into a clear sky." {...props}>
        <BG id="gPsychoER" stops={[{ offset: "0%", color: color.rose50 }, { offset: "100%", color: color.indigo50 }]} />
        <rect x="0" y="0" width="820" height="400" rx="20" fill="url(#gPsychoER)" />
        {/* Victim */}
        <g transform="translate(250, 250)">
            <circle cy="-30" r="25" fill="#F4C9A5"/>
            <path d="M-40 0 C-30 80, 30 80, 40 0 Z" fill={color.indigo300}/>
            {/* Stormy thought bubble */}
            <g transform="translate(0, -120)">
                <path id="cloud" d="M-50 0 C-80 -50, 0 -60, 50 0 C80 -40, 0 -30, -50 0 Z" fill={color.slate500}/>
                <text x="0" y="-15" textAnchor="middle" fill="white">⚡</text>
                <animate target="#cloud" attributeName="fill" from={color.slate500} to={color.cyan100} dur="1s" begin="1s" fill="freeze"/>
            </g>
        </g>
        {/* Counsellor's hand with tea */}
        <g transform="translate(500, 250)">
             <path d="M50 0 C10 -50, -50 -20, -100 0 V100 H50 Z" fill="#C4A98D"/>
             <path d="M-120 20 h40 v30 h-40z" fill={color.white}/>
        </g>
    </svg>
);

/* 7) Continuous Monitoring and Follow-Up */
const MonitoringFollowUpSVG = (props) => (
    <svg viewBox="0 0 820 400" role="img" aria-label="A radar screen actively scanning for threats next to a calendar showing follow-up checkmarks." {...props}>
        <BG id="gMonitorER" stops={[{ offset: "0%", color: color.slate100 }, { offset: "100%", color: color.emerald50 }]} />
        <rect x="0" y="0" width="820" height="400" rx="20" fill="url(#gMonitorER)" />
        {/* Calendar */}
        <g transform="translate(150, 100)">
            <Card w="250" h="200" stroke={color.slate300} sw="2"/>
            <rect x="20" y="20" width="210" height="30" fill={color.rose400}/>
            <text x="125" y="40" textAnchor="middle" fill={color.white}>EMERGENCY</text>
            <text x="50" y="100" fontSize="30">✅</text>
            <text x="125" y="150" fontSize="30">✅</text>
        </g>
        {/* Radar */}
        <g transform="translate(580, 200)">
            <circle r="150" fill={color.slate900}/>
            <circle r="100" stroke={color.emerald400} strokeWidth="2" fill="none" opacity="0.5"/>
            <circle r="50" stroke={color.emerald400} strokeWidth="2" fill="none" opacity="0.5"/>
            <path d="M0 0 L 150 0" stroke={color.emerald300} strokeWidth="4">
                <animateTransform attributeName="transform" type="rotate" from="0" to="360" dur="4s" repeatCount="indefinite"/>
            </path>
            <circle cx="80" cy="-50" r="5" fill={color.rose400}/>
        </g>
    </svg>
);

/* 8) CRCCF's Role */
const OrgRoleSVG = (props) => (
    <svg viewBox="0 0 820 400" role="img" aria-label="A central CRCCF shield with emergency response lines leading to legal, technical, emotional, and monitoring services." {...props}>
        <BG id="gRoleER" stops={[{ offset: "0%", color: color.indigo50 }, { offset: "100%", color: color.rose50 }]} />
        <rect x="0" y="0" width="820" height="400" rx="20" fill="url(#gRoleER)" />
        <g transform="translate(410, 200)">
            <path d="M0 -70 L60 -35 V35 C60 65 0 85 -60 85 C-120 85 -120 65 -120 35 V-35 Z" fill={color.white} stroke={color.rose500} strokeWidth="4"/>
            <path d="M-20 -20 H20 M0 -30 V10" stroke={color.rose500} strokeWidth="6"/>
        </g>
        {[
            { angle: -135, icon: '⚖️' }, { angle: -45, icon: '⚙️' },
            { angle: 45, icon: '❤️' }, { angle: 135, icon: '📡' }
        ].map(({ angle, icon }) => (
            <g key={angle}>
                <line x1="410" y1="200" x2={410 + 180 * Math.cos(angle * Math.PI / 180)} y2={200 + 180 * Math.sin(angle * Math.PI / 180)} stroke={color.rose400} strokeWidth="3" strokeDasharray="5" />
                <circle cx={410 + 180 * Math.cos(angle * Math.PI / 180)} cy={200 + 180 * Math.sin(angle * Math.PI / 180)} r="40" fill={color.white}/>
                <text x={410 + 180 * Math.cos(angle * Math.PI / 180)} y={200 + 180 * Math.sin(angle * Math.PI / 180) + 15} textAnchor="middle" fontSize="40">{icon}</text>
            </g>
        ))}
    </svg>
);

/* 9) Conclusion */
const ConclusionSVG = (props) => (
    <svg viewBox="0 0 820 400" role="img" aria-label="A now-confident victim stands protected by a glowing shield from a CRCCF agent." {...props}>
        <BG id="gConcER" stops={[{ offset: "0%", color: color.cyan100 }, { offset: "100%", color: color.emerald100 }]} />
        <rect x="0" y="0" width="820" height="400" rx="20" fill="url(#gConcER)" />
        {/* Victim */}
        <g transform="translate(300, 220)">
            <circle cx="0" cy="-30" r="25" fill="#D6B49A"/>
            <path d="M-40 0 C-30 80, 30 80, 40 0 Z" fill={color.indigo600}/>
             <text y="-20" fontSize="18">😊</text>
        </g>
        {/* Agent and Shield */}
        <g transform="translate(550, 220)">
             <circle cy="-30" r="25" fill="#C4A98D"/>
             <path d="M-40 0 C-30 80, 30 80, 40 0 Z" fill={color.white}/>
             <g transform="translate(-150, 0)">
                <path d="M0 -60 L50 -30 V30 C50 60 0 80 -50 80 C-100 80 -100 60 -100 30 V-30 Z" fill={color.emerald400} opacity="0.8"/>
             </g>
        </g>
    </svg>
);


/* ============================= Section Wrapper ============================= */
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
          <div className="absolute -inset-2 rounded-2xl bg-gradient-to-tr from-cyan-100 via-rose-100 to-slate-100 blur-md sm:blur-lg md:blur-xl" aria-hidden="true" />
          <div className="relative rounded-2xl border border-gray-200 bg-white p-3 sm:p-4 shadow-sm">
            <div className="w-full h-auto max-h-64 sm:max-h-80 md:max-h-[400px] overflow-hidden">
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

/* =================================== PAGE =================================== */
export default function CyberVictimReliefEmergencyResponse() {
  const { container, itemUp } = useAnims();
  const heroRef = useRef(null);
  const { scrollYProgress } = useScroll({ target: heroRef, offset: ["start start", "end start"] });
  const heroY = useTransform(scrollYProgress, [0, 1], [0, -40]);

  const svgMap = {
    IntroSVG,
    EmergencyAssistanceSVG,
    LegalSupportSVG,
    EvidenceCollectionSVG,
    TechnicalAssistanceSVG,
    PsychologicalReliefSVG,
    MonitoringFollowUpSVG,
    OrgRoleSVG,
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
        <Link to="/report/victim-rights-support" className="hover:underline">Victim Rights & Support</Link>
        <span aria-hidden="true"> › </span>
        <span className="text-gray-700" aria-current="page">Emergency Response</span>
      </motion.nav>

      {/* Hero with in-file Video SVG */}
      <div ref={heroRef} className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-6 md:gap-8 lg:gap-10 items-center">
        <motion.div variants={itemUp}>
          <h1 className="text-[22px] sm:text-3xl font-bold text-gray-900">
            {data.title}
          </h1>
          <p className="mt-2 text-cyan-800 font-medium text-[15px] sm:text-base">
            {data.tagline}
          </p>
          <div className="mt-3 sm:mt-4 flex flex-wrap gap-2">
            {["24/7 Helpline", "Rapid Response", "Legal Aid", "Account Security", "Emotional Support", "Crisis Intervention"].map((pill) => (
              <span
                key={pill}
                className="px-2.5 sm:px-3 py-1.5 text-xs sm:text-sm rounded-full bg-cyan-100 text-cyan-800 border border-cyan-200"
              >
                {pill}
              </span>
            ))}
          </div>
        </motion.div>

        <motion.div style={{ y: heroY }} className="relative">
          <div
            className="absolute -inset-2 rounded-2xl bg-gradient-to-tr from-cyan-100 via-rose-100 to-slate-100 blur-md sm:blur-lg md:blur-xl"
            aria-hidden="true"
          />
          <div className="relative rounded-2xl border border-gray-200 bg-white p-3 sm:p-4 shadow-sm">
            <div className="w-full h-auto max-h-72 sm:max-h-80 md:max-h-none overflow-hidden">
                <VideoHeroEmergencyResponse />
            </div>
          </div>
        </motion.div>
      </div>

      {/* Sections */}
      <div className="mt-8 sm:mt-10 md:mt-12">
        {data.sections.map((sec, idx) => {
          const SVGComp = svgMap[sec.svg] || IntroSVG;
          return (
            <SectionBlock
              key={sec.id}
              id={sec.id}
              title={sec.heading}
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
            ⚖️ <strong>Disclaimer:</strong> CRCCF provides support and guidance but does not replace law enforcement or court procedures.
            All information is handled confidentially and in compliance with applicable laws.
          </p>
        </div>
      </motion.div>
    </motion.section>
  );
}