// src/pages/victimSupport/SocialMediaMisuseVictimAid.jsx
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
  amber50:"#FFFBEB", amber100:"#FEF3C7",
  rose50:"#FFF1F2", rose100:"#FFE4E6", rose400:"#FB7185",
  slate200:"#E2E8F0", slate300:"#CBD5E1", slate400:"#94A3B8", slate500:"#64748B", slate700:"#334155", slate900:"#0F172A",
  white:"#FFFFFF", black:"#000000",
};

/* ================= DATA (kept 100% intact, nothing edited) ================= */
const data = {
  title: "Social Media Misuse Victim Aid – CRCCF",
  tagline: "Empowering Victims and Securing Online Presence",
  sections: [
    {
      id: "intro",
      heading: "1. Introduction: Addressing the Impact of Social Media Misuse",
      content: `The rise of social media platforms has brought unprecedented opportunities, but also increased risks such as harassment, defamation, identity theft, and exploitation. The subcard “Social Media Misuse Victim Aid” focuses on helping victims navigate challenges arising from social media-related crimes. Our organization ensures structured support, enabling victims to access legal, technical, and emotional assistance while regaining control of their online presence.
CRCCF combines professional counselling, legal guidance, and digital security measures to empower victims. By addressing both immediate recovery and preventive measures, victims are equipped to safely participate in social media environments without fear of further harm or harassment.`,
      svg: "IntroSVG",
    },
    {
      id: "safety",
      heading: "2. Right to Safety on Social Media",
      content: `Every user, particularly victims of cybercrime, has the right to a safe and secure experience on social media platforms. Support services guide victims in understanding their rights, reporting abusive content, and taking actionable steps against perpetrators.
Our organization educates and empowers victims to assert their safety online, fostering confidence and resilience. CRCCF ensures that all interventions prioritize personal security, dignity, and the ability to interact online without intimidation or risk.`,
      svg: "SafetySVG",
    },
    {
      id: "legal",
      heading: "3. Legal guidance for Social Media Crimes",
      content: `Victims have the right to seek legal remedies for offenses committed via social media. This includes harassment, threats, defamation, and unauthorized sharing of private content.
Our legal experts assist victims in filing complaints, understanding cyber laws, and navigating judicial procedures. CRCCF provides structured legal guidance to ensure that victims’ rights are upheld, accountability is enforced, and digital reputations are protected.`,
      svg: "LegalGuidanceSVG",
    },
    {
      id: "evidence",
      heading: "4. Digital Evidence Collection and Preservation",
      content: `Proper documentation is critical for pursuing justice in social media misuse cases. Victims have the right to expert assistance in preserving evidence, including screenshots, chat histories, videos, and online interactions.
CRCCF ensures evidence is collected systematically and maintained in legally admissible formats. Accurate preservation strengthens the victim’s case, supporting fair and effective judicial proceedings against offenders.`,
      svg: "EvidenceSVG",
    },
    {
      id: "emotional",
      heading: "5. Emotional and Psychological Support",
      content: `Social media abuse can leave victims feeling anxious, humiliated, or unsafe. Victims have the right to access emotional and psychological support to process these experiences and recover.
Our organization provides counselling, therapy, and coping strategies tailored to the trauma caused by online harassment. CRCCF ensures that victims regain self-confidence, manage anxiety, and rebuild emotional resilience.`,
      svg: "EmotionalSupportSVG",
    },
    {
      id: "technical",
      heading: "6. Account Recovery and Technical Support",
      content: `Victims of social media misuse may encounter hacking, account takeovers, or unauthorized content posting. They have the right to technical assistance for account recovery, securing passwords, and enhancing privacy settings.
CRCCF offers guidance and tools to prevent further misuse, strengthen digital security, and maintain long-term protection. Prompt technical support ensures victims regain control over their online presence efficiently.`,
      svg: "TechnicalSupportSVG",
    },
    {
      id: "awareness",
      heading: "7. Awareness and Prevention Strategies",
      content: `Education and awareness are crucial to prevent recurrence. Victims have the right to training on recognizing phishing attempts, identifying malicious accounts, handling online threats, and practicing safe social media use.
Our organization equips victims with practical knowledge and strategies to navigate social media responsibly. CRCCF empowers individuals to proactively reduce exposure to cyber risks and maintain secure online interactions.`,
      svg: "AwarenessSVG",
    },
    {
      id: "org-role",
      heading: "8. Organization’s Role in Victim Aid",
      content: `CRCCF is committed to providing comprehensive support for victims of social media misuse. By integrating legal guidance, emotional counselling, technical assistance, and awareness programs, we ensure a holistic approach to victim care.
Every intervention is carried out professionally, confidentially, and empathetically. Our organization ensures that victims feel protected, informed, and empowered to restore control over their digital lives.`,
      svg: "OrgRoleSVG",
    },
    {
      id: "conclusion",
      heading: "Conclusion: Supporting Victims to Regain Control",
      content: `The Social Media Misuse Victim Aid initiative ensures that victims have access to professional assistance, emotional support, and legal remedies. Upholding these rights allows victims to regain confidence, secure their digital presence, and pursue justice effectively.
CRCCF remains dedicated to delivering professional, comprehensive, and compassionate services, empowering every victim to restore control over their online life and participate safely in digital spaces.`,
      svg: "ConclusionSVG",
    },
  ],
};

/* ========================== HERO: Complex Video SVG ========================== */
const VideoHeroSocialMedia = () => {
    const title = "CRCCF Social Media Victim Aid";
    const desc = "An animation showing a distressed person surrounded by negative social media icons. A supportive hand from CRCCF appears, transforming the negative icons into positive, secure ones like shields and checkmarks, representing empowerment.";

    return (
        <svg viewBox="0 0 1100 520" role="img" aria-labelledby="vhTitleSM vhDescSM" className="w-full h-auto">
            <title id="vhTitleSM">{title}</title>
            <desc id="vhDescSM">{desc}</desc>
            <defs>
                <linearGradient id="smGrad" x1="0" y1="0" x2="1" y2="1">
                    <stop offset="0%" stopColor={color.indigo50} />
                    <stop offset="100%" stopColor={color.rose50} />
                </linearGradient>
                <filter id="softSM" x="-20%" y="-20%" width="140%" height="140%">
                    <feGaussianBlur in="SourceGraphic" stdDeviation="8" result="b" />
                    <feColorMatrix in="b" type="matrix" values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 0.55 0" />
                </filter>
            </defs>
            <g filter="url(#softSM)">
                <rect x="0" y="0" width="1100" height="520" rx="30" fill="url(#smGrad)" />
            </g>

            {/* Victim Figure */}
            <g transform="translate(550, 260)">
                <circle cx="0" cy="-60" r="40" fill="#F4C9A5"/>
                <path d="M-50 -20 Q0 20 50 -20" stroke={color.slate700} strokeWidth="4" fill="none"/>
                <path d="M-20 -50 C-10 -70, 10 -70, 20 -50" fill={color.slate900}/>
                <path d="M-15 -65 Q0 -80 15 -65" stroke={color.slate400} strokeWidth="3" fill="none"/>
                <circle cx="-15" cy="-60" r="4" fill={color.white}/>
                <circle cx="15" cy="-60" r="4" fill={color.white}/>
                <path d="M-60 20 C-40 120, 40 120, 60 20 V80 H-60 Z" fill={color.indigo400} />
                <animateTransform attributeName="transform" type="translate" values="0 0; 0 -5; 0 0" dur="2.5s" repeatCount="indefinite" />
            </g>

            {/* Negative Icons swirling */}
            <g>
                {/* Angry Emoji */}
                <g transform="translate(200, 150)">
                    <circle cx="0" cy="0" r="30" fill={color.rose400}/>
                    <circle cx="-10" cy="-5" r="4" fill={color.white}/>
                    <circle cx="10" cy="-5" r="4" fill={color.white}/>
                    <path d="M-15 15 Q0 5 15 15" stroke={color.white} strokeWidth="3" fill="none"/>
                    <animateMotion path="M0,0 C50,80 -50,160 0,240" dur="8s" repeatCount="indefinite" rotate="auto"/>
                </g>
                {/* Thumbs Down */}
                <g transform="translate(850, 100)">
                    <rect x="-25" y="-25" width="50" height="50" rx="10" fill={color.slate400}/>
                    <path d="M-10 -15 V5 H5 V-15 L15 -5 V-15 H20 V10 C20 18 -5 18 -5 10 V-15 Z" transform="scale(0.8) translate(0, 15) rotate(180)" fill={color.white}/>
                    <animateMotion path="M0,0 C-80,60 -40,180 0,300" dur="7s" repeatCount="indefinite" rotate="auto"/>
                </g>
                {/* Broken Link */}
                <g transform="translate(300, 400)">
                     <path d="M-20,0 a10,10 0 1,0 40,0 M-5,0 l-10,-10 20,20 -10,-10 M-5,0 h-15 m25,0 h15" stroke={color.rose400} strokeWidth="5" fill="none"/>
                     <animateMotion path="M0,0 C100,-80 250,-150 400,-100" dur="9s" repeatCount="indefinite" rotate="auto"/>
                </g>
            </g>

            {/* Supportive Hand & Transformation */}
            <g>
                <path d="M-100 300 C 50 280, 200 350, 280 250" stroke={color.emerald400} strokeWidth="20" fill="none" strokeLinecap="round">
                    <animate attributeName="stroke-dasharray" values="0, 500; 500, 500" begin="1s" dur="1.5s" fill="freeze" />
                    <animate attributeName="stroke-dashoffset" values="0; 0" begin="1s" dur="1.5s" fill="freeze" />
                </path>
                {/* Positive Icons appearing */}
                {/* Shield */}
                <g opacity="0" transform="translate(800, 350)">
                    <path d="M0 -30 L40 0 V30 C40 60 0 80 -40 80 C-80 80, -80 60, -80 30 V0 Z" fill={color.emerald400}/>
                    <path d="M-20 20 L0 40 L40 -10" stroke={color.white} strokeWidth="8" fill="none" strokeLinecap="round"/>
                    <animate attributeName="opacity" from="0" to="1" begin="2.5s" dur="0.5s" fill="freeze"/>
                    <animateTransform attributeName="transform" type="scale" from="0.5" to="1" begin="2.5s" dur="0.5s" fill="freeze"/>
                </g>
                {/* Lock */}
                <g opacity="0" transform="translate(250, 300)">
                    <rect x="-25" y="0" width="50" height="40" rx="8" fill={color.indigo400}/>
                    <path d="M-15 0 V-20 a15 15 0 0 1 30 0 V0" stroke={color.indigo400} strokeWidth="10" fill="none"/>
                    <animate attributeName="opacity" from="0" to="1" begin="2.8s" dur="0.5s" fill="freeze"/>
                </g>
                 {/* Checkmark */}
                <g opacity="0" transform="translate(450, 100)">
                    <circle cx="0" cy="0" r="35" fill={color.cyan300}/>
                    <path d="M-18 0 L-5 15 L20 -15" stroke={color.white} strokeWidth="8" fill="none" strokeLinecap="round"/>
                    <animate attributeName="opacity" from="0" to="1" begin="3s" dur="0.5s" fill="freeze"/>
                </g>
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
    <svg viewBox="0 0 820 400" role="img" aria-label="A person overwhelmed by negative social media icons receives help from a support agent." {...props}>
        <BG id="gIntroSM" stops={[{ offset: "0%", color: color.indigo25 }, { offset: "100%", color: color.cyan50 }]} />
        <rect x="0" y="0" width="820" height="400" rx="20" fill="url(#gIntroSM)" />
        {/* Overwhelmed Person */}
        <g transform="translate(180, 220)">
            <circle cx="0" cy="-30" r="25" fill="#F4C9A5"/>
            <path d="M-15 -25 Q0 -40 15 -25" stroke={color.slate400} strokeWidth="2" fill="none"/>
            <path d="M-10 -15 Q0 0 10 -15" stroke={color.slate700} strokeWidth="3" fill="none"/>
            <path d="M-40 0 C-30 80, 30 80, 40 0 Z" fill={color.indigo300} />
            <animateTransform attributeName="transform" type="translate" values="0 0; 0 -3; 0 0" dur="2s" repeatCount="indefinite" />
        </g>
        {/* Negative Icons Cloud */}
        <g opacity="0.8">
            <text x="100" y="100" fontSize="40" fill={color.rose400}>😠</text>
            <text x="250" y="80" fontSize="30">👎</text>
            <text x="80" y="180" fontSize="35" transform="rotate(-15, 80, 180)">💔</text>
            <text x="300" y="190" fontSize="45">🔥</text>
        </g>
        {/* Support Agent */}
        <g transform="translate(480, 120)">
            <Card w="280" h="180" fill={color.white} stroke={color.slate200} sw="2"/>
            <g transform="translate(40, 40)">
                 <circle cx="0" cy="0" r="20" fill="#EBC4A0"/>
                 <rect x="-25" y="20" width="50" height="25" rx="8" fill={color.emerald400}/>
                 <path d="M-30 15 h60" stroke={color.emerald600} strokeWidth="4"/>
                 <path d="M-10 -15 a15 15 0 0 1 20 0" stroke={color.slate700} strokeWidth="3" fill="none"/>
            </g>
            <rect x="80" y="35" width="160" height="12" rx="6" fill={color.indigo400} />
            <rect x="80" y="55" width="120" height="8" rx="4" fill={color.slate400} />
            <g transform="translate(20, 110)">
                <rect width="240" height="40" rx="20" fill={color.emerald100}/>
                <text x="120" y="26" textAnchor="middle" fontSize="16" fontWeight="500" fill={color.emerald600}>"We are here to help you."</text>
            </g>
        </g>
    </svg>
);

/* 2) Right to Safety */
const SafetySVG = (props) => (
    <svg viewBox="0 0 820 400" role="img" aria-label="A large shield deflecting negative social media notifications, protecting a user." {...props}>
        <BG id="gSafetySM" stops={[{ offset: "0%", color: color.emerald50 }, { offset: "100%", color: color.cyan50 }]} />
        <rect x="0" y="0" width="820" height="400" rx="20" fill="url(#gSafetySM)" />
        {/* Large Glowing Shield */}
        <g transform="translate(410, 200)">
            <path d="M0 -150 L120 -75 V75 C120 135 0 180 -120 180 C-240 180 -240 135 -240 75 V-75 Z" fill={color.white} stroke={color.emerald400} strokeWidth="6"/>
            <path d="M-60 30 L-15 75 L90 -45" stroke={color.emerald600} strokeWidth="18" fill="none" strokeLinecap="round" strokeLinejoin="round"/>
            <animate attributeName="opacity" values="0.9;1;0.9" dur="2s" repeatCount="indefinite"/>
        </g>
        {/* User behind shield */}
        <g transform="translate(650, 220)">
            <circle cx="0" cy="-30" r="25" fill="#D6B49A"/>
            <path d="M-40 0 C-30 80, 30 80, 40 0 Z" fill={color.indigo600}/>
        </g>
        {/* Negative Icons Bouncing Off */}
        <g>
            <text x="150" y="100" fontSize="40" fill={color.rose400}>😠<animateTransform attributeName="transform" type="translate" values="0 0; 120 60; 100 40" begin="0.5s" dur="1s" fill="freeze" additive="sum"/><animate attributeName="opacity" values="1;0" begin="1s" dur="0.5s" fill="freeze"/></text>
            <text x="120" y="280" fontSize="35">👎<animateTransform attributeName="transform" type="translate" values="0 0; 150 -50; 120 -30" begin="0.8s" dur="1s" fill="freeze" additive="sum"/><animate attributeName="opacity" values="1;0" begin="1.3s" dur="0.5s" fill="freeze"/></text>
        </g>
    </svg>
);

/* 3) Legal Guidance */
const LegalGuidanceSVG = (props) => (
    <svg viewBox="0 0 820 400" role="img" aria-label="A lawyer showing a victim a law book titled 'Cyber Law' with a gavel icon." {...props}>
        <BG id="gLegalSM" stops={[{ offset: "0%", color: color.indigo25 }, { offset: "100%", color: color.slate200 }]} />
        <rect x="0" y="0" width="820" height="400" rx="20" fill="url(#gLegalSM)" />
        {/* Desk Scene */}
        <path d="M50 350 H770" stroke={color.slate400} strokeWidth="8"/>
        <rect x="70" y="200" width="10" height="150" fill={color.slate400}/>
        <rect x="740" y="200" width="10" height="150" fill={color.slate400}/>
        {/* Victim and Lawyer */}
        <g transform="translate(250, 190)">
            <circle cx="0" cy="-30" r="25" fill="#F4C9A5"/>
            <path d="M-40 0 C-30 80, 30 80, 40 0 Z" fill={color.indigo300}/>
        </g>
        <g transform="translate(550, 190)">
            <circle cx="0" cy="-30" r="25" fill="#C4A98D"/>
            <path d="M-40 0 C-30 80, 30 80, 40 0 Z" fill={color.slate700}/>
        </g>
        {/* Law Book */}
        <g transform="translate(380, 260) rotate(-10)">
            <rect x="-80" y="-55" width="160" height="110" rx="10" fill={color.indigo800}/>
            <rect x="-70" y="-45" width="140" height="90" fill={color.white}/>
            <text x="0" y="-15" textAnchor="middle" fontSize="20" fontWeight="bold" fill={color.indigo800}>CYBER</text>
            <text x="0" y="10" textAnchor="middle" fontSize="20" fontWeight="bold" fill={color.indigo800}>LAW</text>
            <path d="M-40 30 L40 30" stroke={color.amber100} strokeWidth="5"/>
        </g>
        {/* Gavel Icon */}
        <g transform="translate(150, 120)">
            <rect x="-30" y="0" width="60" height="10" rx="3" fill={color.slate500}/>
            <rect x="-5" y="-30" width="10" height="30" fill={color.slate500}/>
            <animateTransform attributeName="transform" type="rotate" values="-10; 5; -10" dur="2.5s" repeatCount="indefinite" transform-origin="0 0"/>
        </g>
    </svg>
);

/* 4) Digital Evidence Collection */
const EvidenceSVG = (props) => (
    <svg viewBox="0 0 820 400" role="img" aria-label="A hand using a magnifying glass to collect digital evidence from a smartphone screen." {...props}>
        <BG id="gEvidenceSM" stops={[{ offset: "0%", color: color.cyan50 }, { offset: "100%", color: color.slate200 }]} />
        <rect x="0" y="0" width="820" height="400" rx="20" fill="url(#gEvidenceSM)" />
        {/* Smartphone */}
        <g transform="translate(410, 200)">
            <rect x="-150" y="-250" width="300" height="500" rx="30" fill={color.slate900}/>
            <rect x="-140" y="-240" width="280" height="480" rx="20" fill={color.white}/>
            {/* Chat Bubbles */}
            <text x="-120" y="-180" fill={color.slate700} fontSize="18">User123: This is harassment!</text>
            <rect x="120" y="-140" width="120" height="30" rx="15" fill={color.rose100}/>
            <text x="20" y="-120" fill={color.rose400} fontSize="18">BadActor: You'll regret this.</text>
        </g>
        {/* Magnifying Glass */}
        <g>
            <circle cx="450" cy="180" r="80" fill="rgba(207,250,254,0.3)" stroke={color.cyan500} strokeWidth="8"/>
            <rect x="510" y="240" width="25" height="100" rx="12" fill={color.cyan500} transform="rotate(45, 510, 240)"/>
            <animateTransform attributeName="transform" type="translate" values="0 0; 20 -15; 0 0" dur="4s" repeatCount="indefinite" />
        </g>
        {/* Evidence Bag Icon */}
        <g transform="translate(150, 150)" opacity="0">
            <rect width="80" height="100" rx="10" fill={color.amber50} stroke={color.slate300}/>
            <rect y="10" width="80" height="10" fill={color.emerald400}/>
            <text x="40" y="65" textAnchor="middle" fontSize="16">Evidence</text>
            <animate attributeName="opacity" values="0; 1; 0" dur="4s" repeatCount="indefinite" begin="1s"/>
            <animateTransform attributeName="transform" type="translate" values="0 0; 0 -30; 0 -30" dur="4s" repeatCount="indefinite" begin="1s"/>
        </g>
    </svg>
);

/* 5) Emotional Support */
const EmotionalSupportSVG = (props) => (
    <svg viewBox="0 0 820 400" role="img" aria-label="A counsellor on a video call providing emotional support to a victim, who begins to smile." {...props}>
        <BG id="gEmotionalSM" stops={[{ offset: "0%", color: color.rose50 }, { offset: "100%", color: color.indigo50 }]} />
        <rect x="0" y="0" width="820" height="400" rx="20" fill="url(#gEmotionalSM)" />
        {/* Laptop for Video Call */}
        <rect x="150" y="100" width="520" height="250" rx="20" fill={color.slate700}/>
        <rect x="160" y="110" width="500" height="230" rx="10" fill={color.white}/>
        <rect x="100" y="350" width="620" height="20" rx="10" fill={color.slate300}/>
        {/* Counsellor on screen */}
        <g transform="translate(300, 220)">
            <circle cx="0" cy="-30" r="25" fill="#EBC4A0"/>
            <path d="M-40 0 C-30 80, 30 80, 40 0 Z" fill={color.emerald400}/>
            <path d="M-10 -15 Q0 -5 10 -15" stroke={color.slate700} strokeWidth="3" fill="none"/>
        </g>
        {/* Victim on screen */}
        <g transform="translate(520, 220)">
            <circle cx="0" cy="-30" r="25" fill="#F4C9A5"/>
            <path d="M-40 0 C-30 80, 30 80, 40 0 Z" fill={color.indigo300}/>
            <path d="M-10 -15 Q0 0 10 -15" stroke={color.slate700} strokeWidth="3" fill="none">
                <animate attributeName="d" values="M-10 -15 Q0 0 10 -15; M-10 -15 Q0 -10 10 -15" dur="3s" begin="1s" fill="freeze"/>
            </path>
        </g>
        {/* Glowing Heart */}
        <g transform="translate(410, 180)">
             <path d="M0 20 C-30 -10, -20 -40, 0 -30 C20 -40, 30 -10, 0 20 Z" fill={color.rose400} opacity="0.8">
                <animateTransform attributeName="transform" type="scale" values="1;1.1;1" dur="2s" repeatCount="indefinite"/>
             </path>
        </g>
    </svg>
);

/* 6) Technical Support */
const TechnicalSupportSVG = (props) => (
    <svg viewBox="0 0 820 400" role="img" aria-label="A support agent uses a key to unlock a social media profile that was chained up." {...props}>
        <BG id="gTechnicalSM" stops={[{ offset: "0%", color: color.cyan50 }, { offset: "100%", color: color.indigo50 }]} />
        <rect x="0" y="0" width="820" height="400" rx="20" fill="url(#gTechnicalSM)" />
        {/* Locked Profile */}
        <g transform="translate(410, 200)">
            <circle cx="0" cy="0" r="100" fill={color.white} stroke={color.slate300} strokeWidth="4"/>
            <circle cx="0" cy="-30" r="30" fill={color.indigo100}/>
            <path d="M-50 80 a50 50 0 0 1 100 0 Z" fill={color.indigo100}/>
            {/* Lock */}
            <g id="lock-group">
                <rect x="-40" y="-10" width="80" height="60" rx="10" fill={color.rose400}/>
                <path d="M-25 0 V-40 a25 25 0 0 1 50 0 V0" stroke={color.rose400} strokeWidth="15" fill="none"/>
            </g>
        </g>
        {/* Key from Support */}
        <g transform="translate(150, 280)">
            <rect x="0" y="-10" width="120" height="20" fill={color.emerald400}/>
            <circle cx="0" cy="0" r="25" fill={color.emerald400}/>
            <rect x="110" y="-20" width="10" height="15" fill={color.emerald400}/>
            <rect x="110" y="5" width="10" height="15" fill={color.emerald400}/>
            <animateTransform attributeName="transform" type="translate" values="0 0; 150 -80; 150 -80" dur="2s" begin="0.5s" fill="freeze"/>
        </g>
        <animate target="#lock-group" attributeName="opacity" from="1" to="0" dur="0.5s" begin="2.5s" fill="freeze"/>
    </svg>
);

/* 7) Awareness and Prevention */
const AwarenessSVG = (props) => (
    <svg viewBox="0 0 820 400" role="img" aria-label="A user correctly identifying and flagging a phishing link and a fake profile on a social media feed." {...props}>
        <BG id="gAwarenessSM" stops={[{ offset: "0%", color: color.emerald25 }, { offset: "100%", color: color.indigo50 }]} />
        <rect x="0" y="0" width="820" height="400" rx="20" fill="url(#gAwarenessSM)" />
        {/* Social Feed on Screen */}
        <Card x="100" y="50" w="620" h="300" stroke={color.slate300} sw="2"/>
        {/* Phishing Post */}
        <g transform="translate(150, 80)">
            <Card w="250" h="100" fill={color.rose50}/>
            <text x="15" y="30">Click for Free Prize!</text>
            <text x="15" y="60" fill={color.rose400}>⚠️ fishy-link.xyz</text>
            <text x="200" y="85" fontSize="25" fill="red">❌</text>
        </g>
        {/* Fake Profile Post */}
        <g transform="translate(450, 80)">
            <Card w="250" h="100" fill={color.rose50}/>
            <text x="15" y="30">I am a celebrity. DM me.</text>
            <circle cx="35" cy="65" r="15" fill={color.slate300}/>
            <text x="200" y="85" fontSize="25" fill="red">❌</text>
        </g>
        {/* Safe Post */}
        <g transform="translate(150, 220)">
            <Card w="550" h="100" fill={color.emerald50}/>
            <text x="15" y="30">Official CRCCF Update: Stay Safe Online!</text>
            <text x="500" y="85" fontSize="25" fill="green">✅</text>
        </g>
    </svg>
);

/* 8) Organization's Role */
const OrgRoleSVG = (props) => (
    <svg viewBox="0 0 820 400" role="img" aria-label="A central CRCCF logo connecting to icons for legal, emotional, technical, and safety support." {...props}>
        <BG id="gRoleSM" stops={[{ offset: "0%", color: color.indigo50 }, { offset: "100%", color: color.emerald50 }]} />
        <rect x="0" y="0" width="820" height="400" rx="20" fill="url(#gRoleSM)" />
        {/* Central Hub */}
        <g transform="translate(410, 200)">
            <circle cx="0" cy="0" r="60" fill={color.white} stroke={color.indigo600} strokeWidth="4"/>
            <text x="0" y="10" textAnchor="middle" fontSize="24" fontWeight="bold" fill={color.indigo600}>CRCCF</text>
            <animateTransform attributeName="transform" type="scale" values="1; 1.05; 1" dur="3s" repeatCount="indefinite"/>
        </g>
        {/* Spokes to Services */}
        {[
            { angle: -135, icon: '⚖️', color: color.indigo300 }, // Legal
            { angle: -45, icon: '❤️', color: color.rose400 },   // Emotional
            { angle: 45, icon: '⚙️', color: color.slate400 },    // Technical
            { angle: 135, icon: '🛡️', color: color.emerald400 }  // Safety
        ].map(({ angle, icon, color: c }) => (
            <g key={angle}>
                <line x1="410" y1="200" x2={410 + 180 * Math.cos(angle * Math.PI / 180)} y2={200 + 180 * Math.sin(angle * Math.PI / 180)} stroke={color.slate300} strokeWidth="3" strokeDasharray="5 5"/>
                <circle cx={410 + 180 * Math.cos(angle * Math.PI / 180)} cy={200 + 180 * Math.sin(angle * Math.PI / 180)} r="40" fill={c}/>
                <text x={410 + 180 * Math.cos(angle * Math.PI / 180)} y={200 + 180 * Math.sin(angle * Math.PI / 180) + 15} textAnchor="middle" fontSize="40">{icon}</text>
            </g>
        ))}
    </svg>
);

/* 9) Conclusion */
const ConclusionSVG = (props) => (
    <svg viewBox="0 0 820 400" role="img" aria-label="A confident person holding a shield with a checkmark, surrounded by positive social media icons." {...props}>
        <BG id="gConcSM" stops={[{ offset: "0%", color: color.cyan100 }, { offset: "100%", color: color.emerald100 }]} />
        <rect x="0" y="0" width="820" height="400" rx="20" fill="url(#gConcSM)" />
        {/* Confident Person */}
        <g transform="translate(410, 220)">
            <circle cx="0" cy="-60" r="40" fill="#D6B49A"/>
            <path d="M-15 -45 Q0 -35 15 -45" stroke={color.slate700} strokeWidth="3" fill="none"/>
            <path d="M-60 20 C-40 120, 40 120, 60 20 Z" fill={color.indigo600}/>
             {/* Holding Shield */}
            <g transform="translate(0, 30)">
                <path d="M0 -60 L50 -30 V30 C50 60 0 80 -50 80 C-100 80 -100 60 -100 30 V-30 Z" fill={color.emerald400}/>
                <path d="M-25 10 L-5 30 L40 -20" stroke={color.white} strokeWidth="10" fill="none" strokeLinecap="round"/>
            </g>
        </g>
        {/* Positive Icons floating */}
        <g>
            <text x="150" y="150" fontSize="50">👍</text>
            <text x="650" y="120" fontSize="50">😊</text>
            <text x="200" y="320" fontSize="50">🔒</text>
            <text x="600" y="350" fontSize="50">✅</text>
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
          <div className="absolute -inset-2 rounded-2xl bg-gradient-to-tr from-cyan-100 via-indigo-100 to-rose-100 blur-md sm:blur-lg md:blur-xl" aria-hidden="true" />
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
export default function SocialMediaMisuseVictimAid() {
  const { container, itemUp } = useAnims();
  const heroRef = useRef(null);
  const { scrollYProgress } = useScroll({ target: heroRef, offset: ["start start", "end start"] });
  const heroY = useTransform(scrollYProgress, [0, 1], [0, -40]);

  const svgMap = {
    IntroSVG,
    SafetySVG,
    LegalGuidanceSVG,
    EvidenceSVG,
    EmotionalSupportSVG,
    TechnicalSupportSVG,
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
        <span className="text-gray-700" aria-current="page">Social Media Misuse Aid</span>
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
            {["Harassment", "Defamation", "Identity Theft", "Account Security", "Legal Aid", "Emotional Support"].map((pill) => (
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
            className="absolute -inset-2 rounded-2xl bg-gradient-to-tr from-cyan-100 via-indigo-100 to-rose-100 blur-md sm:blur-lg md:blur-xl"
            aria-hidden="true"
          />
          <div className="relative rounded-2xl border border-gray-200 bg-white p-3 sm:p-4 shadow-sm">
            <div className="w-full h-auto max-h-72 sm:max-h-80 md:max-h-none overflow-hidden">
                <VideoHeroSocialMedia />
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