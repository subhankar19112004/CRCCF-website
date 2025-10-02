// src/pages/victimSupport/PhishingOnlineScamVictimSupport.jsx
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
  rose50:"#FFF1F2", rose100:"#FFE4E6", rose400:"#FB7185",
  slate200:"#E2E8F0", slate300:"#CBD5E1", slate400:"#94A3B8", slate500:"#64748B", slate700:"#334155", slate900:"#0F172A",
  white:"#FFFFFF", black:"#000000",
};

/* ================= DATA (kept 100% intact, nothing edited) ================= */
const data = {
  title: "Phishing & Online Scam Victim Support – CRCCF",
  tagline: "Protecting Victims from Online Fraud and Financial Exploitation",
  sections: [
    {
      id: "intro",
      heading: "1. Introduction: Combating Online Fraud",
      content: `Phishing attacks and online scams have become increasingly sophisticated, targeting unsuspecting individuals and causing financial loss, identity theft, and emotional distress. The subcard “Phishing & Online Scam Victim Support” emphasizes providing victims with structured assistance to address these digital crimes. Our organization ensures that victims have access to legal guidance, technical support, and emotional counseling to recover from scams and prevent future exploitation.
CRCCF combines immediate intervention, expert advice, and awareness programs to empower victims. By addressing both recovery and preventive measures, victims regain control over their digital and financial security while restoring confidence and resilience.`,
      svg: "IntroSVG",
    },
    {
      id: "immediate",
      heading: "2. Right to Immediate Assistance",
      content: `Victims of phishing or online scams have the right to prompt support and guidance. Immediate action helps minimize damage, secure accounts, and preserve critical evidence.
Our organization provides round-the-clock helpline and support services to assist victims in reporting incidents, taking protective measures, and understanding their rights under cybercrime laws. CRCCF ensures rapid intervention, reducing the impact of fraud and guiding victims toward recovery.`,
      svg: "ImmediateAssistSVG",
    },
    {
      id: "legal",
      heading: "3. Legal Guidance and Complaint Filing",
      content: `Victims have the right to seek justice and hold perpetrators accountable. Legal guidance is crucial for navigating cyber laws, complaint filing, and regulatory procedures.
CRCCF offers expert advice on preparing evidence, submitting formal complaints, and pursuing compensation claims. Our structured legal support ensures that victims’ cases are presented effectively, safeguarding their interests while enabling efficient pursuit of justice.`,
      svg: "LegalGuidanceSVG",
    },
    {
      id: "evidence",
      heading: "4. Evidence Preservation and Documentation",
      content: `Accurate documentation is essential for addressing phishing and scam incidents. Victims have the right to expert assistance in preserving emails, transaction records, screenshots, and other digital evidence.
Our organization ensures that all evidence is collected systematically, securely, and in a legally admissible format. CRCCF strengthens each case by maintaining integrity and reliability of digital proof, enhancing prospects for successful legal outcomes.`,
      svg: "EvidenceSVG",
    },
    {
      id: "financial",
      heading: "5. Financial Recovery and Risk Mitigation",
      content: `Online scams often lead to significant financial losses. Victims have the right to guidance on reporting fraud to banks, payment platforms, and law enforcement agencies.
CRCCF assists in initiating recovery processes, monitoring accounts for suspicious activity, and implementing safeguards to prevent further financial exploitation. This proactive approach helps victims restore financial stability and confidence in digital transactions.`,
      svg: "FinancialRecoverySVG",
    },
    {
      id: "emotional",
      heading: "6. Psychological and Emotional Support",
      content: `Phishing and online scams can create stress, anxiety, and feelings of vulnerability. Victims have the right to access professional counselling and emotional guidance.
Our organization provides therapy sessions, coping strategies, and continuous support, enabling victims to regain confidence, manage anxiety, and restore a sense of personal security. CRCCF ensures emotional well-being is prioritized alongside legal and technical recovery.`,
      svg: "EmotionalSupportSVG",
    },
    {
      id: "awareness",
      heading: "7. Awareness and Preventive Measures",
      content: `Education is critical to prevent future scams. Victims have the right to training on identifying fraudulent emails, malicious websites, suspicious messages, and social engineering tactics.
CRCCF equips victims with practical strategies to enhance cybersecurity awareness. By teaching preventive measures and safe online practices, victims are empowered to avoid threats and maintain long-term digital safety.`,
      svg: "AwarenessSVG",
    },
    {
      id: "org-role",
      heading: "8. Organization’s Role in Victim Support",
      content: `Our organization is committed to delivering holistic support for victims of phishing and online scams. By integrating legal guidance, technical assistance, emotional counselling, and preventive education, we create a comprehensive framework for victim care.
Every intervention is conducted with professionalism, confidentiality, and empathy. CRCCF ensures that victims feel protected, informed, and empowered to recover fully and prevent recurrence of online fraud.`,
      svg: "OrgRoleSVG",
    },
    {
      id: "conclusion",
      heading: "Conclusion: Empowering Victims Against Online Fraud",
      content: `Phishing & Online Scam Victim Support ensures that victims can access immediate assistance, legal remedies, emotional support, and preventive guidance. Upholding these rights enables victims to recover from scams, secure digital accounts, and prevent future exploitation.
CRCCF remains dedicated to providing professional, comprehensive, and compassionate services, empowering every victim to regain control over their digital safety, restore confidence, and participate securely in online environments.`,
      svg: "ConclusionSVG",
    },
  ],
};

/* ========================== HERO: Complex Video SVG ========================== */
const VideoHeroPhishingScam = () => {
    const title = "CRCCF Phishing & Scam Victim Support";
    const desc = "An animation showing a deceptive fishing hook trying to lure a user. A protective hand from CRCCF intervenes, cutting the fishing line with scissors, symbolizing protection from online fraud.";

    return (
        <svg viewBox="0 0 1100 520" role="img" aria-labelledby="vhTitlePS vhDescPS" className="w-full h-auto">
            <title id="vhTitlePS">{title}</title>
            <desc id="vhDescPS">{desc}</desc>
            <defs>
                <linearGradient id="psGrad" x1="0" y1="1" x2="1" y2="0">
                    <stop offset="0%" stopColor={color.amber50} />
                    <stop offset="100%" stopColor={color.rose50} />
                </linearGradient>
                <filter id="softPS" x="-20%" y="-20%" width="140%" height="140%">
                    <feGaussianBlur in="SourceGraphic" stdDeviation="8" result="b" />
                    <feColorMatrix in="b" type="matrix" values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 0.55 0" />
                </filter>
            </defs>
            <g filter="url(#softPS)">
                <rect x="0" y="0" width="1100" height="520" rx="30" fill="url(#psGrad)" />
            </g>

            {/* Fishing line */}
            <path id="fishingLine" d="M800 0 V 250" stroke={color.slate400} strokeWidth="4">
               <animate attributeName="d" values="M800 0 V 250; M800 0 V 260; M800 0 V 250" dur="2s" repeatCount="indefinite" />
            </path>
            
            {/* Phishing Hook with bait */}
            <g transform="translate(800, 250)">
                 <path d="M0 0 C0 30, -40 30, -40 0 C-40 -20, 0 -20, 0 0 L-5 -30" stroke={color.slate700} strokeWidth="6" fill="none" />
                 <text x="-5" y="10" fontSize="40">✉️</text>
                 <animateTransform attributeName="transform" type="translate" values="0 0; 0 10; 0 0" dur="2s" repeatCount="indefinite" />
            </g>

            {/* Unsuspecting user's cursor */}
            <g transform="translate(400, 300)" opacity="0">
                <path d="M0 0 L0 25 L8 18 L15 30 L22 18 L30 25 V0 Z" fill={color.white} stroke={color.black} strokeWidth="2" />
                <animate attributeName="opacity" from="0" to="1" begin="0.5s" dur="0.5s" fill="freeze"/>
                <animateTransform attributeName="transform" type="translate" values="0 0; 350 -40; 350 -40" begin="1s" dur="2s" fill="freeze"/>
            </g>
            
            {/* Protective scissors */}
            <g transform="translate(800, 200) scale(1.5)" opacity="0">
                <path id="scissorTop" d="M-10 -15 C-30 -15, -30 15, -10 15 L40 0 Z" fill={color.emerald400} stroke={color.emerald600} strokeWidth="2"/>
                <path id="scissorBottom" d="M-10 -15 C-30 -15, -30 15, -10 15 L40 0 Z" transform="scale(1, -1)" fill={color.emerald400} stroke={color.emerald600} strokeWidth="2"/>
                <animate attributeName="opacity" from="0" to="1" begin="2.5s" dur="0.2s" fill="freeze"/>
                <animateTransform target="#scissorTop" attributeName="transform" type="rotate" from="0" to="-20" begin="2.7s" dur="0.3s" fill="freeze" transform-origin="center"/>
                <animateTransform target="#scissorBottom" attributeName="transform" type="rotate" from="0" to="20" begin="2.7s" dur="0.3s" fill="freeze" transform-origin="center"/>
            </g>

            {/* Cut line */}
             <animate target="#fishingLine" attributeName="stroke" from={color.slate400} to="transparent" begin="3s" dur="0.1s" fill="freeze"/>
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
const SoftGlow = ({ id = "glow", std = 7, alpha = 0.5 }) => (
  <defs>
    <filter id={id} x="-30%" y="-30%" width="160%" height="160%">
      <feGaussianBlur in="SourceGraphic" stdDeviation={std} result="b" />
      <feColorMatrix in="b" type="matrix" values={`1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 ${alpha} 0`} />
    </filter>
  </defs>
);

/* ===================== Complex Section Illustrations ===================== */
/* 1) Intro */
const IntroSVG = (props) => (
    <svg viewBox="0 0 820 400" role="img" aria-label="A user overwhelmed by malicious pop-ups on a computer screen gets help from a CRCCF agent." {...props}>
        <BG id="gIntroPS" stops={[{ offset: "0%", color: color.rose50 }, { offset: "100%", color: color.amber50 }]} />
        <rect x="0" y="0" width="820" height="400" rx="20" fill="url(#gIntroPS)" />
        <g transform="translate(410, 220)">
            <rect x="-350" y="-180" width="700" height="360" rx="20" fill={color.white} stroke={color.slate300} strokeWidth="3"/>
            {/* Pop-ups */}
            <g transform="translate(-250, -100)">
                <Card w="200" h="120" fill={color.rose100} stroke={color.rose400} sw="2"/>
                <text x="100" y="40" textAnchor="middle" fontSize="24" fill={color.rose400}>🏆 You Won!</text>
                <rect x="50" y="70" width="100" height="30" rx="15" fill={color.emerald400}/>
                <text x="100" y="90" textAnchor="middle" fill={color.white}>Claim</text>
            </g>
             <g transform="translate(50, -50)">
                <Card w="220" h="150" fill={color.amber100} stroke={color.amber400} sw="2"/>
                <text x="110" y="50" textAnchor="middle" fontSize="22" fill={color.slate700}>⚠️ Security Alert!</text>
                <text x="110" y="80" textAnchor="middle" fontSize="16" fill={color.slate500}>Verify your account now.</text>
                 <rect x="60" y="100" width="100" height="30" rx="15" fill={color.rose400}/>
                <text x="110" y="120" textAnchor="middle" fill={color.white}>Verify</text>
            </g>
             {/* CRCCF Secure Window */}
            <g transform="translate(-150, 80)">
                 <Card w="400" h="80" fill={color.emerald100} stroke={color.emerald600} sw="3"/>
                 <text x="200" y="50" textAnchor="middle" fontSize="20" fontWeight="600" fill={color.emerald600}>🛡️ CRCCF Support: We can help secure your device.</text>
            </g>
        </g>
    </svg>
);

/* 2) Immediate Assistance */
const ImmediateAssistSVG = (props) => (
    <svg viewBox="0 0 820 400" role="img" aria-label="A fast-response scene with a ringing phone, chat icon, and a lightning bolt clock." {...props}>
        <BG id="gImmediatePS" stops={[{ offset: "0%", color: color.cyan50 }, { offset: "100%", color: color.emerald50 }]} />
        <rect x="0" y="0" width="820" height="400" rx="20" fill="url(#gImmediatePS)" />
        {/* Victim Icon */}
        <g transform="translate(150, 200)">
            <circle cx="0" cy="0" r="40" fill={color.rose100}/>
            <text x="0" y="15" textAnchor="middle" fontSize="40">😟</text>
        </g>
        {/* Rapid Arrow */}
        <path d="M220 200 H 550" stroke={color.cyan300} strokeWidth="10" strokeLinecap="round">
            <animate attributeName="stroke-dasharray" values="0, 330; 330, 330" dur="1s" fill="freeze" />
        </path>
        <path d="M550 180 L 580 200 L 550 220" fill={color.cyan300}>
            <animate attributeName="opacity" values="0; 1" dur="0.2s" begin="0.8s" fill="freeze" />
        </path>
        {/* Support Icons */}
        <g transform="translate(680, 200)">
            <circle cx="0" cy="0" r="60" fill={color.white} stroke={color.emerald400} strokeWidth="4"/>
            <text x="0" y="-10" textAnchor="middle" fontSize="30">📞</text>
            <text x="0" y="30" textAnchor="middle" fontSize="30">💬</text>
            <path d="M-15,-45 l10,20 -15,0 10,20" stroke={color.amber400} strokeWidth="5" fill="none">
                 <animate attributeName="opacity" values="1;0;1" dur="1s" repeatCount="indefinite" />
            </path>
        </g>
    </svg>
);

/* 3) Legal Guidance and Complaint Filing */
const LegalGuidanceSVG = (props) => (
    <svg viewBox="0 0 820 400" role="img" aria-label="A legal expert helps a victim file a cybercrime complaint form on a computer." {...props}>
        <BG id="gLegalPS" stops={[{ offset: "0%", color: color.indigo50 }, { offset: "100%", color: color.slate200 }]} />
        <rect x="0" y="0" width="820" height="400" rx="20" fill="url(#gLegalPS)" />
        {/* Computer Screen with Form */}
        <g transform="translate(450, 200)">
            <rect x="-250" y="-150" width="500" height="300" rx="20" fill={color.slate700}/>
            <rect x="-240" y="-140" width="480" height="280" rx="10" fill={color.white}/>
            <text x="-220" y="-100" fontSize="18" fontWeight="bold">Cybercrime Complaint Form</text>
            <rect x="-220" y="-80" width="440" height="10" rx="5" fill={color.slate200}/>
            <rect x="-220" y="-60" width="380" height="10" rx="5" fill={color.slate200}/>
            <rect x="-220" y="-40" width="420" height="10" rx="5" fill={color.slate200}/>
            <rect x="150" y="80" width="100" height="30" rx="15" fill={color.indigo600}/>
            <text x="200" y="100" textAnchor="middle" fill={color.white}>Submit</text>
        </g>
        {/* People */}
        <g transform="translate(150, 220)">
            <circle cx="0" cy="-30" r="25" fill="#F4C9A5"/>
            <path d="M-40 0 C-30 80, 30 80, 40 0 Z" fill={color.indigo300}/>
        </g>
        <g transform="translate(250, 220)">
            <circle cx="0" cy="-30" r="25" fill="#C4A98D"/>
            <path d="M-40 0 C-30 80, 30 80, 40 0 Z" fill={color.slate700}/>
        </g>
    </svg>
);

/* 4) Evidence Preservation */
const EvidenceSVG = (props) => (
    <svg viewBox="0 0 820 400" role="img" aria-label="Digital evidence like emails and messages flying into a secure, locked folder." {...props}>
        <BG id="gEvidencePS" stops={[{ offset: "0%", color: color.cyan50 }, { offset: "100%", color: color.slate200 }]} />
        <rect x="0" y="0" width="820" height="400" rx="20" fill="url(#gEvidencePS)" />
        {/* Secure Folder */}
        <g transform="translate(550, 200)">
            <path d="M-150 -120 H-50 L0 -70 H150 V120 H-150 Z" fill={color.amber400}/>
            <path d="M-150 -120 H-50 L0 -70 H150" stroke={color.slate500} strokeWidth="4" fill="none"/>
            <rect x="-15" y="-30" width="30" height="20" fill={color.slate700}/>
            <path d="M-10 -30 v-15 a10 10 0 0 1 20 0 v15" stroke={color.slate700} strokeWidth="5" fill="none"/>
        </g>
        {/* Evidence Items flying in */}
        <g transform="translate(150,100)">
            <rect width="120" height="80" rx="10" fill={color.white} stroke={color.rose400}/>
            <text x="10" y="25">From: scam@phish.co</text>
            <animateTransform attributeName="transform" type="translate" values="0 0; 350 80" dur="2s" repeatCount="indefinite" />
            <animate attributeName="opacity" values="1;0" dur="2s" repeatCount="indefinite" />
        </g>
        <g transform="translate(150,250)">
            <rect width="100" height="50" rx="10" fill={color.emerald100}/>
            <text x="10" y="25">$1000.00</text>
            <animateTransform attributeName="transform" type="translate" values="0 0; 380 -60" dur="2.5s" repeatCount="indefinite" />
            <animate attributeName="opacity" values="1;0" dur="2.5s" repeatCount="indefinite" />
        </g>
    </svg>
);

/* 5) Financial Recovery */
const FinancialRecoverySVG = (props) => (
    <svg viewBox="0 0 820 400" role="img" aria-label="A broken piggy bank being repaired while money returns from a jailed hacker icon." {...props}>
        <BG id="gFinancialPS" stops={[{ offset: "0%", color: color.emerald50 }, { offset: "100%", color: color.amber50 }]} />
        <rect x="0" y="0" width="820" height="400" rx="20" fill="url(#gFinancialPS)" />
        {/* Piggy Bank being fixed */}
        <g transform="translate(410, 220)">
            <path d="M50 0 C150 0, 150 120, 50 120 H-50 C-150 120, -150 0, -50 0 Z" fill={color.rose100} stroke={color.rose400} strokeWidth="4"/>
            <path d="M-40 -40 L-10 -10 M-20 -40 L-40 -20" stroke={color.rose400} strokeWidth="4" strokeLinecap="round"/>
            <path d="M-10 20 L 50 80" stroke={color.rose400} strokeWidth="4" strokeDasharray="5 5" opacity="0.5"/>
            <g transform="translate(0, -20)">
                <animateTransform attributeName="transform" type="translate" values="0 0; -15 -15; 0 0" dur="2s" begin="1s" fill="freeze"/>
            </g>
        </g>
        {/* Money Returning */}
        <g>
            <text x="100" y="150" fontSize="40">💰<animateTransform attributeName="transform" type="translate" values="0 0; 250 50" dur="1.5s" fill="freeze"/><animate attributeName="opacity" values="1;0" dur="0.2s" begin="1.3s" fill="freeze"/></text>
            <text x="150" y="300" fontSize="40">💵<animateTransform attributeName="transform" type="translate" values="0 0; 180 -100" dur="1.8s" fill="freeze"/><animate attributeName="opacity" values="1;0" dur="0.2s" begin="1.6s" fill="freeze"/></text>
        </g>
        {/* Jailed Hacker */}
        <g transform="translate(120, 200)">
            <text x="0" y="0" fontSize="50">👿</text>
            <path d="M-30 -30 V30 M0 -30 V30 M30 -30 V30" stroke={color.slate500} strokeWidth="5"/>
        </g>
    </svg>
);

/* 6) Psychological and Emotional Support */
const EmotionalSupportSVG = (props) => (
    <svg viewBox="0 0 820 400" role="img" aria-label="A counsellor holds an umbrella to shield a victim from a dark cloud of stress." {...props}>
        <BG id="gEmotionalPS" stops={[{ offset: "0%", color: color.rose50 }, { offset: "100%", color: color.indigo50 }]} />
        <rect x="0" y="0" width="820" height="400" rx="20" fill="url(#gEmotionalPS)" />
        {/* Victim under cloud */}
        <g transform="translate(250, 250)">
            <circle cx="0" cy="-30" r="25" fill="#F4C9A5"/>
            <path d="M-40 0 C-30 80, 30 80, 40 0 Z" fill={color.indigo300}/>
            <path d="M-50 -100 C-80 -150, 0 -180, 50 -120 C80 -150, 0 -140, -50 -100 Z" fill={color.slate500} opacity="0.8"/>
            <text x="-20" y="-120" fill={color.white}>??!</text>
        </g>
        {/* Counsellor with umbrella */}
        <g transform="translate(550, 250)">
             <circle cx="0" cy="-30" r="25" fill="#EBC4A0"/>
             <path d="M-40 0 C-30 80, 30 80, 40 0 Z" fill={color.emerald400}/>
             <path d="M0 -50 V-120" stroke={color.emerald600} strokeWidth="6"/>
             <path d="M-100 -120 C-100 -180, 100 -180, 100 -120 Z" fill={color.emerald400}/>
        </g>
        {/* Sun appearing */}
        <g transform="translate(700, 100)" opacity="0">
            <circle cx="0" cy="0" r="40" fill={color.amber400}/>
            <animate attributeName="opacity" from="0" to="1" dur="1s" begin="1.5s" fill="freeze"/>
        </g>
    </svg>
);

/* 7) Awareness and Preventive Measures */
const AwarenessSVG = (props) => (
    <svg viewBox="0 0 820 400" role="img" aria-label="A user correctly identifies a phishing email versus a legitimate email." {...props}>
        <BG id="gAwarenessPS" stops={[{ offset: "0%", color: color.emerald25 }, { offset: "100%", color: color.cyan50 }]} />
        <rect x="0" y="0" width="820" height="400" rx="20" fill="url(#gAwarenessPS)" />
        {/* User */}
        <g transform="translate(150, 220)">
            <circle cx="0" cy="-30" r="25" fill="#D6B49A"/>
            <path d="M-40 0 C-30 80, 30 80, 40 0 Z" fill={color.indigo600}/>
            <text x="0" y="-70" fontSize="40">💡</text>
        </g>
        {/* Email Choices */}
        <g transform="translate(350, 100)">
            <Card w="400" h="120" fill={color.rose50} stroke={color.rose400} sw="2"/>
            <text x="20" y="30" fontSize="16">From: ur-bank-security.co</text>
            <text x="20" y="60" fontWeight="bold">Urgent: Login Required!</text>
            <text x="350" y="100" fontSize="30">❌</text>
        </g>
        <g transform="translate(350, 250)">
            <Card w="400" h="120" fill={color.emerald50} stroke={color.emerald600} sw="2"/>
            <text x="20" y="30" fontSize="16">From: official-bank.com</text>
            <text x="20" y="60" fontWeight="bold">Your Monthly Statement</text>
            <text x="350" y="100" fontSize="30">✅</text>
        </g>
    </svg>
);

/* 8) Organization's Role */
const OrgRoleSVG = (props) => (
    <svg viewBox="0 0 820 400" role="img" aria-label="A central CRCCF shield connecting to icons for legal, financial, emotional, and educational support." {...props}>
        <BG id="gRolePS" stops={[{ offset: "0%", color: color.indigo50 }, { offset: "100%", color: color.cyan50 }]} />
        <rect x="0" y="0" width="820" height="400" rx="20" fill="url(#gRolePS)" />
        <g transform="translate(410, 200)">
            <path d="M0 -70 L60 -35 V35 C60 65 0 85 -60 85 C-120 85 -120 65 -120 35 V-35 Z" fill={color.white} stroke={color.indigo600} strokeWidth="4"/>
            <text x="-60" y="15" fontSize="32" fontWeight="bold" fill={color.indigo600}>CRCCF</text>
        </g>
        {[
            { angle: -135, icon: '⚖️', color: color.indigo300 }, // Legal
            { angle: -45, icon: '💵', color: color.emerald400 },   // Financial
            { angle: 45, icon: '❤️', color: color.rose400 },    // Emotional
            { angle: 135, icon: '📚', color: color.amber400 }  // Education
        ].map(({ angle, icon, color: c }) => (
            <g key={angle}>
                <line x1="350" y1="200" x2={350 + 180 * Math.cos(angle * Math.PI / 180)} y2={200 + 180 * Math.sin(angle * Math.PI / 180)} stroke={color.slate300} strokeWidth="3" />
                <circle cx={350 + 180 * Math.cos(angle * Math.PI / 180)} cy={200 + 180 * Math.sin(angle * Math.PI / 180)} r="40" fill={c}/>
                <text x={350 + 180 * Math.cos(angle * Math.PI / 180)} y={200 + 180 * Math.sin(angle * Math.PI / 180) + 15} textAnchor="middle" fontSize="40">{icon}</text>
            </g>
        ))}
    </svg>
);

/* 9) Conclusion */
const ConclusionSVG = (props) => (
    <svg viewBox="0 0 820 400" role="img" aria-label="A confident user safely navigating online inside a protective bubble." {...props}>
        <BG id="gConcPS" stops={[{ offset: "0%", color: color.cyan100 }, { offset: "100%", color: color.emerald100 }]} />
        <rect x="0" y="0" width="820" height="400" rx="20" fill="url(#gConcPS)" />
        {/* Protected User */}
        <g transform="translate(410, 200)">
            <circle cx="0" cy="0" r="150" fill={color.white} opacity="0.5"/>
            <circle cx="0" cy="0" r="150" stroke={color.emerald400} strokeWidth="6" fill="none" strokeDasharray="15 10">
                <animate attributeName="stroke-dashoffset" from="0" to="25" dur="2s" repeatCount="indefinite"/>
            </circle>
            <g transform="translate(0, 20)">
                <circle cx="0" cy="-30" r="25" fill="#D6B49A"/>
                <path d="M-40 0 C-30 80, 30 80, 40 0 Z" fill={color.indigo600}/>
                <text x="0" y="-20" textAnchor="middle" fontSize="18">😊</text>
            </g>
        </g>
        {/* Clean Webpage */}
        <g transform="translate(100, 100)">
            <Card w="200" h="80" fill={color.emerald50}/>
            <text x="10" y="30">Secure Payment</text>
            <text x="160" y="65" fontSize="25">✅</text>
        </g>
        <g transform="translate(520, 250)">
            <Card w="200" h="80" fill={color.cyan50}/>
            <text x="10" y="30">Verified Email</text>
            <text x="160" y="65" fontSize="25">✅</text>
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
          <div className="absolute -inset-2 rounded-2xl bg-gradient-to-tr from-amber-100 via-rose-100 to-cyan-100 blur-md sm:blur-lg md:blur-xl" aria-hidden="true" />
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
export default function PhishingOnlineScamVictimSupport() {
  const { container, itemUp } = useAnims();
  const heroRef = useRef(null);
  const { scrollYProgress } = useScroll({ target: heroRef, offset: ["start start", "end start"] });
  const heroY = useTransform(scrollYProgress, [0, 1], [0, -40]);

  const svgMap = {
    IntroSVG,
    ImmediateAssistSVG,
    LegalGuidanceSVG,
    EvidenceSVG,
    FinancialRecoverySVG,
    EmotionalSupportSVG,
    AwarenessSVG,
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
        <span className="text-gray-700" aria-current="page">Phishing & Scam Support</span>
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
            {["Financial Fraud", "Identity Theft", "Immediate Help", "Legal Action", "Recovery", "Prevention"].map((pill) => (
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
            className="absolute -inset-2 rounded-2xl bg-gradient-to-tr from-amber-100 via-rose-100 to-cyan-100 blur-md sm:blur-lg md:blur-xl"
            aria-hidden="true"
          />
          <div className="relative rounded-2xl border border-gray-200 bg-white p-3 sm:p-4 shadow-sm">
            <div className="w-full h-auto max-h-72 sm:max-h-80 md:max-h-none overflow-hidden">
                <VideoHeroPhishingScam />
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