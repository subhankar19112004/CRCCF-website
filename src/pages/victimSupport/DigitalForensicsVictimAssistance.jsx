// src/pages/victimSupport/DigitalForensicsVictimAssistance.jsx
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
  slate100:"#F1F5F9", slate200:"#E2E8F0", slate300:"#CBD5E1", slate400:"#94A3B8", slate500:"#64748B", slate700:"#334155", slate900:"#0F172A",
  white:"#FFFFFF", black:"#000000",
};

/* ================= DATA (kept 100% intact, nothing edited) ================= */
const data = {
  title: "Digital Forensics Assistance for Victims – CRCCF",
  tagline: "Specialized Support for Accurate Evidence Collection and Legal Empowerment",
  sections: [
    {
      id: "intro",
      heading: "1. Introduction: Investigating Cybercrime with Expertise",
      content: `Digital offenses often involve technical complexities that require specialized attention for effective legal action. The subcard “Digital Forensics Assistance for Victims” emphasizes providing expert forensic support to help victims collect, examine, and safeguard digital evidence. Our organization ensures that victims have access to professional guidance, enabling them to pursue justice with confidence.
CRCCF combines technical expertise, procedural compliance, and victim-focused support. By addressing both the investigative and protective aspects of cybercrime, victims are empowered to navigate legal processes effectively while safeguarding their digital assets.`,
      svg: "IntroSVG",
    },
    {
      id: "forensic-support",
      heading: "2. Right to Forensic Support",
      content: `Victims have the right to professional assistance in managing digital evidence to maintain its integrity and legal admissibility. Digital forensics ensures that critical information from computers, mobile devices, social media accounts, emails, and other platforms is systematically collected and analyzed.
Our organization provides certified forensic experts who follow strict legal protocols. CRCCF ensures that victims’ evidence is handled meticulously, enhancing its value in legal proceedings and supporting the pursuit of justice.`,
      svg: "ForensicSupportSVG",
    },
    {
      id: "collection-preservation",
      heading: "3. Evidence Collection and Preservation",
      content: `Accurate collection and preservation of digital evidence are essential for successful legal outcomes. Victims have the right to guidance on securing devices, creating backups, and documenting all relevant information.
Our forensic team ensures that evidence remains in its original state, preventing tampering, corruption, or data loss. CRCCF strengthens the victim’s legal position, ensuring that digital evidence can withstand scrutiny in courts or investigations.`,
      svg: "CollectionPreservationSVG",
    },
    {
      id: "analysis-reporting",
      heading: "4. Forensic Analysis and Reporting",
      content: `Digital forensics involves detailed examination of data to uncover patterns, trace cybercriminal activity, and establish proof. Victims have the right to expert analysis and comprehensive reports that can be used in court or with law enforcement agencies.
Our organization provides clear, accurate, and legally compliant forensic reports. CRCCF ensures that victims’ evidence is presented effectively, supporting thorough investigations and informed legal decision-making.`,
      svg: "AnalysisReportingSVG",
    },
    {
      id: "collaboration",
      heading: "5. Collaboration with Legal Authorities",
      content: `Victims have the right to ensure their digital evidence is utilized effectively in legal proceedings. Forensic experts coordinate with law enforcement officers, lawyers, and cybercrime investigators to explain findings and provide technical documentation.
CRCCF facilitates seamless collaboration, ensuring that evidence contributes meaningfully to building strong cases and achieving justice for the victim. Proper coordination enhances both legal and investigative outcomes.`,
      svg: "CollaborationSVG",
    },
    {
      id: "cybersecurity-guidance",
      heading: "6. Technical and Cybersecurity Guidance",
      content: `Digital forensics is closely linked with ongoing cybersecurity protection. Victims have the right to advice on safeguarding devices, preventing future breaches, and minimizing exposure to online threats.
Our team provides practical guidance on password security, malware protection, account recovery, and safe digital practices. CRCCF ensures that victims are equipped with the knowledge to protect their digital environment proactively.`,
      svg: "CybersecurityGuidanceSVG",
    },
    {
      id: "emotional-support",
      heading: "7. Emotional and Psychological Support",
      content: `The forensic process can be emotionally challenging, as victims may revisit traumatic events during investigation. Victims have the right to psychological support to manage stress, anxiety, and emotional strain.
Our organization offers counseling, coping strategies, and continuous guidance. CRCCF ensures that emotional well-being is addressed alongside technical and legal support, empowering victims to remain confident throughout the forensic process.`,
      svg: "EmotionalSupportSVG",
    },
    {
      id: "org-role",
      heading: "8. CRCCF’s Role in Digital Forensics",
      content: `Our organization is committed to delivering comprehensive digital forensics assistance for cybercrime victims. By integrating technical expertise, evidence preservation, legal collaboration, and emotional support, we create a holistic framework for protection and justice.
Every service is provided professionally, confidentially, and empathetically. CRCCF ensures that victims feel secure, supported, and empowered while navigating complex digital investigations.`,
      svg: "OrgRoleSVG",
    },
    {
      id: "conclusion",
      heading: "Conclusion: Empowering Victims Through Forensic Expertise",
      content: `Digital Forensics Assistance for Victims ensures accurate collection, analysis, and preservation of digital evidence for legal action. Upholding these rights allows victims to pursue justice effectively, prevent further harm, and maintain confidence in the investigative process.
Our organization remains dedicated to providing professional, comprehensive, and compassionate forensic support, empowering every victim to achieve justice and regain control over their digital life.`,
      svg: "ConclusionSVG",
    },
  ],
};

/* ========================== HERO: Complex Video SVG ========================== */
const VideoHeroDigitalForensics = () => {
    const title = "CRCCF Digital Forensics Assistance";
    const desc = "An animation of a magnifying glass scanning over digital devices, extracting binary code that transforms into a legal document, symbolizing the bridge between technical forensics and legal empowerment.";

    return (
        <svg viewBox="0 0 1100 520" role="img" aria-labelledby="vhTitleDF vhDescDF" className="w-full h-auto">
            <title id="vhTitleDF">{title}</title>
            <desc id="vhDescDF">{desc}</desc>
            <defs>
                <linearGradient id="dfGrad" x1="0" y1="0" x2="1" y2="1">
                    <stop offset="0%" stopColor={color.indigo50} />
                    <stop offset="100%" stopColor={color.slate100} />
                </linearGradient>
            </defs>
            <rect x="0" y="0" width="1100" height="520" rx="30" fill="url(#dfGrad)" />

            {/* Devices */}
            <g transform="translate(150, 200)">
                {/* Laptop */}
                <rect x="0" y="0" width="280" height="160" rx="10" fill={color.slate700} />
                <rect x="10" y="10" width="260" height="140" fill={color.slate900} />
                <rect x="-20" y="160" width="320" height="20" rx="5" fill={color.slate500} />
                {/* Phone */}
                <rect x="320" y="40" width="100" height="180" rx="15" fill={color.slate700} />
                <rect x="330" y="50" width="80" height="160" rx="5" fill={color.slate900} />
            </g>

            {/* Magnifying Glass and Scan Light */}
            <g id="magnifyingGlass">
                <circle cx="450" cy="200" r="100" fill="rgba(207,250,254,0.3)" stroke={color.cyan500} strokeWidth="8"/>
                <rect x="520" y="270" width="30" height="120" rx="15" fill={color.cyan500} transform="rotate(45, 520, 270)"/>
                <path d="M355 200 H 545" stroke={color.cyan300} strokeWidth="4" strokeLinecap="round" opacity="0.8">
                    <animate attributeName="opacity" values="0.8;0.2;0.8" dur="1.5s" repeatCount="indefinite" />
                </path>
                <animateTransform attributeName="transform" type="translate" values="0 0; -200 0; 0 0" dur="4s" repeatCount="indefinite" />
            </g>

            {/* Binary Code Stream */}
            <g fill={color.indigo400} fontSize="14" fontFamily="monospace">
                {[...Array(20)].map((_, i) => (
                    <text key={i} x={200 + (i % 5 * 40)} y={150 + Math.floor(i/5)*20} opacity="0">
                        {Math.round(Math.random())}
                        <animate attributeName="opacity" from="0" to="1" begin={`${i * 0.2}s`} dur="0.5s" fill="freeze" />
                        <animateMotion path="M0 0 C 150 50, 300 0, 450 100" dur="3s" begin={`${i * 0.2}s`} fill="freeze" />
                        <animate attributeName="opacity" from="1" to="0" begin={`${i * 0.2 + 2.5}s`} dur="0.5s" fill="freeze" />
                    </text>
                ))}
            </g>
            
            {/* Legal Document */}
            <g transform="translate(800, 150)" opacity="0">
                <rect x="0" y="0" width="200" height="260" rx="10" fill={color.white} stroke={color.slate300} strokeWidth="3"/>
                <rect x="20" y="20" width="160" height="8" rx="4" fill={color.indigo600} />
                <rect x="20" y="40" width="140" height="6" rx="3" fill={color.slate400} />
                <rect x="20" y="55" width="160" height="6" rx="3" fill={color.slate400} />
                <rect x="20" y="70" width="120" height="6" rx="3" fill={color.slate400} />
                {/* Gavel */}
                <g transform="translate(140, 200)">
                    <rect x="-25" y="0" width="50" height="8" rx="3" fill={color.slate700}/>
                    <rect x="-4" y="-20" width="8" height="20" fill={color.slate700}/>
                </g>
                <animate attributeName="opacity" from="0" to="1" begin="3s" dur="1s" fill="freeze" />
                <animateTransform attributeName="transform" type="scale" from="0.5" to="1" begin="3s" dur="1s" fill="freeze" />
            </g>
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
    <svg viewBox="0 0 820 400" role="img" aria-label="A forensic expert examining a hard drive connected to a computer showing complex data." {...props}>
        <BG id="gIntroDF" stops={[{ offset: "0%", color: color.indigo25 }, { offset: "100%", color: color.slate100 }]} />
        <rect x="0" y="0" width="820" height="400" rx="20" fill="url(#gIntroDF)" />
        {/* Expert */}
        <g transform="translate(200, 210)">
            <circle cx="0" cy="-30" r="25" fill="#C4A98D"/>
            <path d="M-40 0 C-30 80, 30 80, 40 0 Z" fill={color.white}/>
            <path d="M-40 0 C-20 0, -20 70, 0 70 S 20 0, 40 0" stroke={color.slate300} strokeWidth="3" fill="none"/>
        </g>
        {/* Computer & Hard Drive */}
        <g transform="translate(400, 100)">
            <Card w="350" h="200" stroke={color.slate300} sw="2"/>
            <path d="M20 20 L100 20 M20 40 L150 40 M20 60 L80 60" stroke={color.cyan300} strokeWidth="4"/>
            <path d="M200 40 L300 40 V150 H200 Z" fill={color.indigo100}/>
            <rect x="40" y="140" width="100" height="40" rx="5" fill={color.slate700}/>
            <circle cx="120" cy="160" r="5" fill={color.emerald300}>
                <animate attributeName="opacity" values="1;0.2;1" dur="1.5s" repeatCount="indefinite"/>
            </circle>
        </g>
    </svg>
);

/* 2) Forensic Support */
const ForensicSupportSVG = (props) => (
    <svg viewBox="0 0 820 400" role="img" aria-label="A victim hands a phone to a gloved forensic expert who is placing it in an evidence bag." {...props}>
        <BG id="gSupportDF" stops={[{ offset: "0%", color: color.cyan50 }, { offset: "100%", color: color.indigo50 }]} />
        <rect x="0" y="0" width="820" height="400" rx="20" fill="url(#gSupportDF)" />
        {/* Victim's hand */}
        <path d="M100 200 C150 180, 200 250, 250 180 V300 H100 Z" fill="#F4C9A5"/>
        {/* Phone */}
        <rect x="230" y="120" width="80" height="150" rx="10" fill={color.slate700}/>
        {/* Expert's gloved hand */}
        <path d="M550 180 C500 250, 450 180, 400 200 V300 H550 Z" fill={color.cyan100}/>
        {/* Evidence Bag */}
        <g transform="translate(500, 100)">
            <rect width="250" height="300" rx="10" fill={color.slate400} opacity="0.8"/>
            <rect y="10" width="250" height="20" fill={color.amber400}/>
            <text x="125" y="150" textAnchor="middle" fontSize="20" fill={color.white}>EVIDENCE: Case #123</text>
        </g>
    </svg>
);

/* 3) Evidence Collection and Preservation */
const CollectionPreservationSVG = (props) => (
    <svg viewBox="0 0 820 400" role="img" aria-label="A write-blocker device ensuring one-way data flow from a laptop to a secure drive." {...props}>
        <BG id="gCollectDF" stops={[{ offset: "0%", color: color.slate100 }, { offset: "100%", color: color.emerald50 }]} />
        <rect x="0" y="0" width="820" height="400" rx="20" fill="url(#gCollectDF)" />
        {/* Laptop */}
        <g transform="translate(100, 120)">
            <rect y="120" width="220" height="15" rx="5" fill={color.slate400}/>
            <rect x="20" width="180" height="120" rx="10" fill={color.slate700}/>
        </g>
        {/* Write Blocker */}
        <g transform="translate(350, 170)">
            <rect width="120" height="60" rx="10" fill={color.rose400}/>
            <text x="60" y="35" textAnchor="middle" fill={color.white} fontWeight="bold">WRITE BLOCK</text>
        </g>
        {/* Secure Drive */}
        <g transform="translate(500, 175)">
            <rect width="200" height="50" rx="5" fill={color.slate700}/>
            <text x="650" y="255" fontSize="24">✅<animate attributeName="opacity" from="0" to="1" dur="0.5s" begin="2s" fill="freeze"/></text>
        </g>
        {/* Data Flow */}
        <path d="M310 180 H350" stroke={color.slate400} strokeWidth="5"/>
        <path d="M470 200 H500" stroke={color.slate400} strokeWidth="5"/>
        {/* One-way arrow */}
        <path d="M380 185 L440 185" stroke={color.emerald300} strokeWidth="4" strokeDasharray="5" strokeLinecap="round">
            <animate attributeName="stroke-dashoffset" from="10" to="0" dur="1s" repeatCount="indefinite"/>
        </path>
        <path d="M430 178 L 440 185 L 430 192" fill={color.emerald300}/>
        {/* Blocked arrow */}
        <path d="M440 215 L380 215" stroke={color.rose400} strokeWidth="4" opacity="0.5"/>
        <path d="M385 208 L 375 215 L 385 222" fill={color.rose400}/>
    </svg>
);

/* 4) Forensic Analysis and Reporting */
const AnalysisReportingSVG = (props) => (
    <svg viewBox="0 0 820 400" role="img" aria-label="Jumbled digital files being processed into a neat, official forensic report." {...props}>
        <BG id="gAnalysisDF" stops={[{ offset: "0%", color: color.indigo50 }, { offset: "100%", color: color.cyan50 }]} />
        <rect x="0" y="0" width="820" height="400" rx="20" fill="url(#gAnalysisDF)" />
        {/* Jumbled files */}
        <g>
            <text x="100" y="150" fontSize="40">📄</text>
            <text x="150" y="250" fontSize="40">🖼️</text>
            <text x="80" y="300" fontSize="40">✉️</text>
            <animateTransform attributeName="transform" type="translate" values="0 0; 150 -50" dur="1.5s" fill="freeze"/>
            <animate attributeName="opacity" from="1" to="0" dur="0.5s" begin="1s" fill="freeze"/>
        </g>
        {/* Processing Gear */}
        <g transform="translate(410, 200)">
            <path d="M0 -50 L15 -40 L10 -20 L30 -20 L35 0 L30 20 L10 20 L15 40 L0 50 L-15 40 L-10 20 L-30 20 L-35 0 L-30 -20 L-10 -20 L-15 -40 Z" fill={color.slate400}/>
            <circle r="20" fill={color.white}/>
            <animateTransform attributeName="transform" type="rotate" from="0" to="360" dur="2s" repeatCount="indefinite"/>
        </g>
        {/* Final Report */}
        <g transform="translate(550, 80)" opacity="0">
            <Card w="220" h="280" stroke={color.slate300} sw="2"/>
            <text x="20" y="40" fontWeight="bold">Forensic Report</text>
            <rect x="20" y="60" width="180" height="100" rx="5" fill={color.emerald100}/>
            <path d="M40 90 L80 120 L160 80" stroke={color.emerald600} strokeWidth="5" fill="none"/>
            <animate attributeName="opacity" from="0" to="1" dur="1s" begin="1.5s" fill="freeze"/>
        </g>
    </svg>
);

/* 5) Collaboration with Legal Authorities */
const CollaborationSVG = (props) => (
    <svg viewBox="0 0 820 400" role="img" aria-label="A three-way handshake between a forensic expert, a lawyer, and a law enforcement officer." {...props}>
        <BG id="gCollabDF" stops={[{ offset: "0%", color: color.emerald50 }, { offset: "100%", color: color.indigo50 }]} />
        <rect x="0" y="0" width="820" height="400" rx="20" fill="url(#gCollabDF)" />
        {/* Characters */}
        {/* Forensic Expert */}
        <g transform="translate(180, 200)">
             <circle cx="0" cy="-30" r="25" fill="#C4A98D"/>
             <path d="M-40 0 C-30 80, 30 80, 40 0 Z" fill={color.white}/>
             <text y="-70" fontSize="30">🔬</text>
        </g>
        {/* Lawyer */}
        <g transform="translate(410, 120)">
             <circle cx="0" cy="-30" r="25" fill="#D6B49A"/>
             <path d="M-40 0 C-30 80, 30 80, 40 0 Z" fill={color.slate700}/>
             <text y="-70" fontSize="30">⚖️</text>
        </g>
        {/* Law Enforcement */}
        <g transform="translate(640, 200)">
             <circle cx="0" cy="-30" r="25" fill="#EBC4A0"/>
             <path d="M-40 0 C-30 80, 30 80, 40 0 Z" fill={color.indigo800}/>
             <text y="-70" fontSize="30">⭐</text>
        </g>
        {/* Handshake */}
        <g transform="translate(410, 250)">
            <path d="M-100 0 C-50 -20, 50 -20, 100 0" stroke={color.slate400} strokeWidth="15" fill="none" strokeLinecap="round" />
            <path d="M0 -80 V0" stroke={color.slate400} strokeWidth="15" fill="none" strokeLinecap="round"/>
        </g>
    </svg>
);

/* 6) Technical and Cybersecurity Guidance */
const CybersecurityGuidanceSVG = (props) => (
    <svg viewBox="0 0 820 400" role="img" aria-label="An expert showing a victim a security dashboard with all green checkmarks." {...props}>
        <BG id="gCyberDF" stops={[{ offset: "0%", color: color.emerald25 }, { offset: "100%", color: color.cyan50 }]} />
        <rect x="0" y="0" width="820" height="400" rx="20" fill="url(#gCyberDF)" />
        {/* Screen with Dashboard */}
        <g transform="translate(300, 50)">
            <Card w="450" h="300" stroke={color.slate300} sw="2"/>
            <text x="20" y="40" fontWeight="bold">Security Dashboard</text>
            {[
                { label: 'Strong Passwords', y: 80 },
                { label: 'Firewall Active', y: 130 },
                { label: 'Malware Scan Complete', y: 180 },
                { label: '2FA Enabled', y: 230 }
            ].map(item => (
                <g key={item.label} transform={`translate(40, ${item.y})`}>
                    <rect width="370" height="30" rx="15" fill={color.emerald100}/>
                    <text x="15" y="20" fill={color.emerald600}>{item.label}</text>
                    <text x="330" y="22" fontSize="20">✅</text>
                </g>
            ))}
        </g>
        {/* People */}
        <g transform="translate(150, 220)">
            <circle cx="0" cy="-30" r="25" fill="#F4C9A5"/>
            <path d="M-40 0 C-30 80, 30 80, 40 0 Z" fill={color.indigo300}/>
        </g>
        <g transform="translate(250, 220)">
            <circle cx="0" cy="-30" r="25" fill="#C4A98D"/>
            <path d="M-40 0 C-30 80, 30 80, 40 0 Z" fill={color.white}/>
        </g>
    </svg>
);

/* 7) Emotional Support */
const EmotionalSupportSVG = (props) => (
    <svg viewBox="0 0 820 400" role="img" aria-label="A split scene showing a victim stressed by data, then calm while talking to a counsellor." {...props}>
        <BG id="gEmoDF" stops={[{ offset: "0%", color: color.rose50 }, { offset: "100%", color: color.indigo50 }]} />
        <rect x="0" y="0" width="820" height="400" rx="20" fill="url(#gEmoDF)" />
        <line x1="410" y1="50" x2="410" y2="350" stroke={color.white} strokeWidth="4" strokeDasharray="10 5"/>
        {/* Stressed Side */}
        <g transform="translate(200, 220)">
            <circle cx="0" cy="-30" r="25" fill="#F4C9A5"/>
            <path d="M-40 0 C-30 80, 30 80, 40 0 Z" fill={color.indigo300}/>
            <text y="-20" fontSize="18">😟</text>
            <text x="-50" y="-80" fill={color.slate500} fontFamily="monospace">01101?</text>
        </g>
        {/* Supported Side */}
        <g transform="translate(620, 220)">
            <circle cx="0" cy="-30" r="25" fill="#F4C9A5"/>
            <path d="M-40 0 C-30 80, 30 80, 40 0 Z" fill={color.indigo300}/>
             <text y="-20" fontSize="18">😊</text>
            <g transform="translate(-100, -30)">
                 <circle cx="0" cy="0" r="25" fill="#EBC4A0"/>
                 <text y="8" textAnchor="middle" fontSize="18">❤️</text>
            </g>
        </g>
    </svg>
);

/* 8) CRCCF's Role */
const OrgRoleSVG = (props) => (
    <svg viewBox="0 0 820 400" role="img" aria-label="A central CRCCF logo connecting to icons for analysis, preservation, collaboration, and victim care." {...props}>
        <BG id="gRoleDF" stops={[{ offset: "0%", color: color.indigo50 }, { offset: "100%", color: color.cyan50 }]} />
        <rect x="0" y="0" width="820" height="400" rx="20" fill="url(#gRoleDF)" />
        <g transform="translate(410, 200)">
            <circle r="60" fill={color.white} stroke={color.indigo600} strokeWidth="4"/>
            <text y="10" textAnchor="middle" fontSize="24" fontWeight="bold" fill={color.indigo600}>CRCCF</text>
        </g>
        {[
            { angle: -135, icon: '🔬', color: color.cyan300 }, // Analysis
            { angle: -45, icon: '💼', color: color.slate400 },   // Preservation
            { angle: 45, icon: '🤝', color: color.emerald400 },    // Collaboration
            { angle: 135, icon: '❤️', color: color.rose400 }  // Victim Care
        ].map(({ angle, icon, color: c }) => (
            <g key={angle}>
                <line x1="410" y1="200" x2={410 + 180 * Math.cos(angle * Math.PI / 180)} y2={200 + 180 * Math.sin(angle * Math.PI / 180)} stroke={color.slate300} strokeWidth="3" />
                <circle cx={410 + 180 * Math.cos(angle * Math.PI / 180)} cy={200 + 180 * Math.sin(angle * Math.PI / 180)} r="40" fill={c}/>
                <text x={410 + 180 * Math.cos(angle * Math.PI / 180)} y={200 + 180 * Math.sin(angle * Math.PI / 180) + 15} textAnchor="middle" fontSize="40">{icon}</text>
            </g>
        ))}
    </svg>
);

/* 9) Conclusion */
const ConclusionSVG = (props) => (
    <svg viewBox="0 0 820 400" role="img" aria-label="A confident victim holding a glowing forensic report in front of a legal scale icon." {...props}>
        <BG id="gConcDF" stops={[{ offset: "0%", color: color.cyan100 }, { offset: "100%", color: color.emerald100 }]} />
        <rect x="0" y="0" width="820" height="400" rx="20" fill="url(#gConcDF)" />
        {/* Victim */}
        <g transform="translate(300, 220)">
            <circle cx="0" cy="-30" r="25" fill="#D6B49A"/>
            <path d="M-40 0 C-30 80, 30 80, 40 0 Z" fill={color.indigo600}/>
             <text y="-20" fontSize="18">😊</text>
        </g>
        {/* Glowing Report */}
        <g>
            <rect x="250" y="150" width="100" height="130" rx="5" fill={color.white} transform="rotate(-15, 300, 215)"/>
            <filter id="reportGlow"><feGaussianBlur stdDeviation="5"/></filter>
            <rect x="250" y="150" width="100" height="130" rx="5" fill={color.cyan300} filter="url(#reportGlow)" opacity="0.7" transform="rotate(-15, 300, 215)"/>
        </g>
        {/* Legal Scales */}
        <g transform="translate(600, 150)" stroke={color.slate700} strokeWidth="6" strokeLinecap="round">
            <path d="M-100 0 H100"/>
            <path d="M0 0 V30"/>
            <path d="M-80 0 L-100 30 L-60 30 Z" fill={color.amber400}/>
            <path d="M80 0 L100 30 L60 30 Z" fill={color.amber400}/>
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
          <div className="absolute -inset-2 rounded-2xl bg-gradient-to-tr from-cyan-100 via-indigo-100 to-slate-100 blur-md sm:blur-lg md:blur-xl" aria-hidden="true" />
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
export default function DigitalForensicsVictimAssistance() {
  const { container, itemUp } = useAnims();
  const heroRef = useRef(null);
  const { scrollYProgress } = useScroll({ target: heroRef, offset: ["start start", "end start"] });
  const heroY = useTransform(scrollYProgress, [0, 1], [0, -40]);

  const svgMap = {
    IntroSVG,
    ForensicSupportSVG,
    CollectionPreservationSVG,
    AnalysisReportingSVG,
    CollaborationSVG,
    CybersecurityGuidanceSVG,
    EmotionalSupportSVG,
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
        <span className="text-gray-700" aria-current="page">Digital Forensics Assistance</span>
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
            {["Evidence Collection", "Forensic Analysis", "Legal Support", "Data Integrity", "Cybersecurity", "Expert Witness"].map((pill) => (
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
            className="absolute -inset-2 rounded-2xl bg-gradient-to-tr from-cyan-100 via-indigo-100 to-slate-100 blur-md sm:blur-lg md:blur-xl"
            aria-hidden="true"
          />
          <div className="relative rounded-2xl border border-gray-200 bg-white p-3 sm:p-4 shadow-sm">
            <div className="w-full h-auto max-h-72 sm:max-h-80 md:max-h-none overflow-hidden">
                <VideoHeroDigitalForensics />
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