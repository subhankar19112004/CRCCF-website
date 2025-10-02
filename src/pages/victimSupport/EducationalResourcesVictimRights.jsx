// src/pages/victimSupport/EducationalResourcesVictimRights.jsx
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
  title: "Educational Resources for Victim Rights – CRCCF",
  tagline: "Empowering Victims Through Knowledge and Awareness",
  sections: [
    {
      id: "intro",
      heading: "1. Introduction: Knowledge is Empowerment",
      content: `Awareness of their rights is vital for cybercrime victims to protect themselves and seek justice confidently. The subcard “Educational Resources for Victim Rights” emphasizes providing comprehensive learning materials, guidance, and information to empower victims. Our organization ensures that victims have access to knowledge that enables informed decisions in legal, technical, and emotional matters related to cybercrime.
CRCCF combines structured educational content with practical guidance. By equipping victims with relevant information, they can navigate the complexities of cybercrime effectively while safeguarding their digital and personal well-being.`,
      svg: "IntroSVG",
    },
    {
      id: "information-rights",
      heading: "2. Right to Information",
      content: `Victims have the fundamental right to access accurate and relevant information regarding their rights under cyber laws. Educational resources clarify reporting procedures, complaint mechanisms, legal remedies, and protective measures.
Our organization ensures that victims understand these rights, allowing them to take informed action, interact confidently with authorities, and engage effectively with support systems. CRCCF empowers victims to act knowledgeably while pursuing justice and safety.`,
      svg: "InformationRightsSVG",
    },
    {
      id: "learning-materials",
      heading: "3. Online and Offline Learning Materials",
      content: `Victims have the right to access diverse educational resources, including guides, tutorials, videos, workshops, and downloadable documents. Materials cover cybercrime laws, victim rights, online safety, and case studies.
Our organization provides structured resources that simplify complex topics and make them accessible. CRCCF ensures that victims gain practical knowledge to comprehend legal and technical aspects of cybercrime, fostering informed decision-making.`,
      svg: "LearningMaterialsSVG",
    },
    {
      id: "workshops",
      heading: "4. Workshops and Training Programs",
      content: `Hands-on learning through workshops and training enhances awareness and readiness. Victims have the right to participate in sessions covering digital security, complaint filing, legal procedures, and emotional coping strategies.
CRCCF organizes specialized workshops to help victims apply knowledge practically. These programs reduce vulnerability to further incidents, build self-advocacy skills, and strengthen preparedness in digital and legal environments.`,
      svg: "WorkshopsSVG",
    },
    {
      id: "awareness-prevention",
      heading: "5. Awareness on Cybercrime Types and Prevention",
      content: `Understanding cybercrime types is essential for protection. Victims have the right to learn about phishing, hacking, online harassment, scams, and other digital threats.
Our organization provides explanations, preventive strategies, and practical tips to identify and mitigate risks. CRCCF equips victims with knowledge to recognize, respond to, and avoid potential cyber threats effectively.`,
      svg: "AwarenessPreventionSVG",
    },
    {
      id: "legal-literacy",
      heading: "6. Legal Literacy and Rights Advocacy",
      content: `Awareness of legal rights is crucial for effective engagement with authorities. Victims have the right to content explaining relevant laws, reporting procedures, compensation claims, and protective orders.
Our educational resources empower victims to advocate for themselves confidently, understand procedures, and pursue justice with clarity. CRCCF ensures that legal literacy strengthens their ability to navigate the judicial process efficiently.`,
      svg: "LegalLiteracySVG",
    },
    {
      id: "psychological-awareness",
      heading: "7. Psychological and Emotional Awareness",
      content: `Education includes understanding the psychological impact of cybercrime. Victims have the right to learn about emotional resilience, stress management, coping mechanisms, and mental health support.
Our organization provides guidance and materials addressing the emotional aspects of cyber incidents. CRCCF ensures that victims gain insights to recover holistically and maintain mental well-being alongside legal and technical empowerment.`,
      svg: "PsychologicalAwarenessSVG",
    },
    {
      id: "org-role",
      heading: "8. CRCCF’s Role in Providing Educational Resources",
      content: `Our organization is committed to delivering comprehensive educational resources for cybercrime victims. By integrating legal knowledge, technical insights, emotional guidance, and practical training, we create a robust framework for learning and empowerment.
Every resource is professional, accessible, and relevant. CRCCF ensures that victims can make informed, confident decisions at every stage of their recovery and pursuit of justice.`,
      svg: "OrgRoleSVG",
    },
    {
      id: "conclusion",
      heading: "Conclusion: Empowering Victims Through Knowledge",
      content: `The Educational Resources for Victim Rights initiative ensures that victims of cybercrime have access to accurate information, training, and guidance. Upholding these rights enables victims to act confidently, protect themselves, and navigate legal, technical, and emotional challenges effectively.
Our organization remains dedicated to providing professional, comprehensive, and compassionate educational support, empowering every victim to fully understand and exercise their rights.`,
      svg: "ConclusionSVG",
    },
  ],
};

/* ========================== HERO: Complex Video SVG ========================== */
const VideoHeroEducationalResources = () => {
    const title = "CRCCF Educational Resources for Victim Rights";
    const desc = "An animation where an open book sends a stream of knowledge icons into a person's silhouette, lighting up a bulb inside their head to symbolize empowerment through knowledge.";

    return (
        <svg viewBox="0 0 1100 520" role="img" aria-labelledby="vhTitleER vhDescER" className="w-full h-auto">
            <title id="vhTitleER">{title}</title>
            <desc id="vhDescER">{desc}</desc>
            <defs>
                <linearGradient id="erGrad" x1="0" y1="1" x2="1" y2="0">
                    <stop offset="0%" stopColor={color.emerald50} />
                    <stop offset="100%" stopColor={color.cyan50} />
                </linearGradient>
                <filter id="lightGlow" x="-50%" y="-50%" width="200%" height="200%">
                    <feGaussianBlur in="SourceGraphic" stdDeviation="10" result="blur"/>
                </filter>
            </defs>
            <rect x="0" y="0" width="1100" height="520" rx="30" fill="url(#erGrad)" />

            {/* Human Head Silhouette */}
            <g transform="translate(700, 260)">
                <path d="M0 -150 C-120 -150, -150 -50, -100 50 C-50 150, 50 150, 100 50 C150 -50, 120 -150, 0 -150 Z" fill={color.slate700} />
                {/* Lightbulb */}
                <g transform="translate(0, -50)">
                    <path d="M-10 25 h20 v10 h-20z" fill={color.slate500}/>
                    <path id="lightbulb" d="M0 -25 C-25 -25, -25 25, 0 25 C25 25, 25 -25, 0 -25 Z" fill={color.amber100}/>
                    <circle id="lightbulbGlow" r="40" fill={color.amber400} opacity="0" filter="url(#lightGlow)">
                         <animate attributeName="opacity" values="0; 0.7; 0" begin="2s" dur="2s" fill="freeze" />
                    </circle>
                    <animate target="#lightbulb" attributeName="fill" from={color.amber100} to={color.amber400} begin="2s" dur="0.5s" fill="freeze" />
                </g>
            </g>

            {/* Book and Stream of Knowledge */}
            <g transform="translate(250, 260)">
                <path d="M-150 -100 L0 -120 L150 -100 V100 L0 120 L-150 100 Z" fill={color.indigo600}/>
                <path d="M-130 -80 H-20 M-130 -50 H-20 M-130 -20 H-20" stroke={color.white} strokeWidth="4"/>
                <path d="M20 -80 H130 M20 -50 H130 M20 -20 H130" stroke={color.white} strokeWidth="4"/>
                <animateTransform attributeName="transform" type="scale" values="1; 1.05; 1" dur="4s" repeatCount="indefinite" />
            </g>

            {/* Knowledge icons stream */}
            <g>
                {[
                    { icon: '⚖️', delay: 1 }, { icon: '🛡️', delay: 1.2 }, { icon: '❤️', delay: 1.4 },
                    { icon: '💡', delay: 1.6 }, { icon: '📚', delay: 1.8 }
                ].map(({icon, delay}) => (
                    <text key={icon} x="350" y="260" fontSize="30" opacity="0">
                        {icon}
                        <animate attributeName="opacity" values="0; 1; 0" dur="2s" begin={`${delay}s`} fill="freeze" />
                        <animateMotion path="M0 0 C 100 -50, 200 -50, 300 0" dur="2s" begin={`${delay}s`} fill="freeze" />
                    </text>
                ))}
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
    <svg viewBox="0 0 820 400" role="img" aria-label="A person at a confusing crossroads is offered a book with a clear path inside." {...props}>
        <BG id="gIntroER" stops={[{ offset: "0%", color: color.slate100 }, { offset: "100%", color: color.cyan50 }]} />
        <rect x="0" y="0" width="820" height="400" rx="20" fill="url(#gIntroER)" />
        {/* Person at crossroads */}
        <g transform="translate(200, 250)">
            <circle cx="0" cy="-30" r="25" fill="#F4C9A5"/>
            <path d="M-40 0 C-30 80, 30 80, 40 0 Z" fill={color.indigo300}/>
            <text y="-80" fontSize="40">❓</text>
        </g>
        {/* Signs */}
        <g transform="translate(200, 150)" stroke={color.slate400} strokeWidth="5" fill={color.white}>
            <path d="M0 0 V-100"/>
            <path d="M0 -80 l-100 -20 h-50 v40 h50z" />
            <path d="M0 -50 l100 -20 h50 v40 h-50z" />
        </g>
        {/* Hand with book */}
        <g transform="translate(550, 200)">
            <path d="M-150 0 L0 -20 L150 0 V100 L0 120 L-150 100 Z" fill={color.emerald400}/>
            <path d="M-130 -0 C-50 50, 50 50, 130 0" stroke={color.white} strokeWidth="6" fill="none" strokeDasharray="10 5"/>
        </g>
    </svg>
);

/* 2) Right to Information */
const InformationRightsSVG = (props) => (
    <svg viewBox="0 0 820 400" role="img" aria-label="An open book displaying icons for legal rights, reporting, and protection." {...props}>
        <BG id="gInfoER" stops={[{ offset: "0%", color: color.indigo50 }, { offset: "100%", color: color.cyan50 }]} />
        <rect x="0" y="0" width="820" height="400" rx="20" fill="url(#gInfoER)" />
        {/* Large open book */}
        <g transform="translate(410, 200)">
            <path d="M-350 -20 L 0 -50 L 350 -20 V 180 L 0 200 L -350 180 Z" fill={color.white} stroke={color.slate300} strokeWidth="3"/>
            <line x1="0" y1="-50" x2="0" y2="200" stroke={color.slate300} strokeWidth="3"/>
            {/* Icons on pages */}
            <g transform="translate(-180, 0)">
                <text y="0" fontSize="80">🛡️</text>
                <text y="30" x="-10" textAnchor="middle" fontWeight="500">Protection</text>
            </g>
             <g transform="translate(180, 0)">
                <text y="0" fontSize="80">⚖️</text>
                <text y="30" textAnchor="middle" fontWeight="500">Legal Rights</text>
            </g>
        </g>
    </svg>
);

/* 3) Online and Offline Learning Materials */
const LearningMaterialsSVG = (props) => (
    <svg viewBox="0 0 820 400" role="img" aria-label="A collection of learning resources: a laptop with a video, printed guides, and a smartphone." {...props}>
        <BG id="gLearnER" stops={[{ offset: "0%", color: color.emerald50 }, { offset: "100%", color: color.slate100 }]} />
        <rect x="0" y="0" width="820" height="400" rx="20" fill="url(#gLearnER)" />
        {/* Laptop */}
        <g transform="translate(300, 120)">
            <rect y="180" width="420" height="20" rx="5" fill={color.slate400}/>
            <rect x="20" width="380" height="180" rx="10" fill={color.slate700}/>
            <rect x="30" y="10" width="360" height="160" fill={color.white}/>
            <circle cx="210" cy="90" r="30" fill={color.rose400}/>
            <path d="M200 75 L225 90 L200 105 Z" fill={color.white}/>
        </g>
        {/* Printed Guides */}
        <g transform="translate(120, 180)">
            <rect width="150" height="20" fill={color.indigo300}/>
            <rect y="20" width="150" height="20" fill={color.indigo400}/>
            <rect y="40" width="150" height="20" fill={color.indigo600}/>
        </g>
        {/* Phone */}
        <g transform="translate(150, 280)">
            <rect width="80" height="110" rx="10" fill={color.slate700}/>
            <text x="40" y="65" textAnchor="middle" fontSize="30">📄</text>
        </g>
    </svg>
);

/* 4) Workshops and Training Programs */
const WorkshopsSVG = (props) => (
    <svg viewBox="0 0 820 400" role="img" aria-label="A diverse group of people in a workshop learning about digital security." {...props}>
        <BG id="gWorkshopER" stops={[{ offset: "0%", color: color.amber50 }, { offset: "100%", color: color.indigo50 }]} />
        <rect x="0" y="0" width="820" height="400" rx="20" fill="url(#gWorkshopER)" />
        {/* Whiteboard */}
        <g transform="translate(450, 80)">
            <Card w="320" h="200" stroke={color.slate300} sw="2"/>
            <text x="20" y="40">Profile Security</text>
            <text x="40" y="80">✅ Strong Password</text>
            <text x="40" y="110">✅ 2FA On</text>
        </g>
        {/* People */}
        {[
            { x: 150, y: 250, fill: color.indigo300 },
            { x: 250, y: 280, fill: color.emerald300 },
            { x: 350, y: 250, fill: color.rose100 }
        ].map(p => (
            <g key={p.x} transform={`translate(${p.x}, ${p.y})`}>
                <circle cy="-20" r="20"/>
                <rect x="-25" y="0" width="50" height="50" rx="10" fill={p.fill}/>
            </g>
        ))}
        {/* Trainer */}
        <g transform="translate(550, 280)">
             <circle cy="-20" r="20" fill="#C4A98D"/>
             <rect x="-25" y="0" width="50" height="50" rx="10" fill={color.slate700}/>
        </g>
    </svg>
);

/* 5) Awareness on Cybercrime Types and Prevention */
const AwarenessPreventionSVG = (props) => (
    <svg viewBox="0 0 820 400" role="img" aria-label="A user shining a spotlight of awareness on different cybercrime icons." {...props}>
        <BG id="gAwareER" stops={[{ offset: "0%", color: color.rose50 }, { offset: "100%", color: color.slate100 }]} />
        <rect x="0" y="0" width="820" height="400" rx="20" fill="url(#gAwareER)" />
        {/* Crime Icons */}
        <g fontSize="80">
            <text x="150" y="150">🎣</text>
            <text x="350" y="150">🎭</text>
            <text x="550" y="150">😠</text>
        </g>
        {/* Spotlight */}
        <g>
            <path id="spotlight" d="M410 350 L250 150 H570 Z" fill="url(#spotlightGrad)"/>
            <defs>
                <radialGradient id="spotlightGrad">
                    <stop offset="0%" stopColor="white" stopOpacity="0.7"/>
                    <stop offset="100%" stopColor="white" stopOpacity="0"/>
                </radialGradient>
            </defs>
            <animateTransform target="#spotlight" attributeName="transform" type="translate" values="-200 0; 0 0; 200 0; 0 0; -200 0" dur="8s" repeatCount="indefinite" />
        </g>
    </svg>
);

/* 6) Legal Literacy and Rights Advocacy */
const LegalLiteracySVG = (props) => (
    <svg viewBox="0 0 820 400" role="img" aria-label="A person confidently speaking at a podium with a legal scale symbol." {...props}>
        <BG id="gLegalLitER" stops={[{ offset: "0%", color: color.indigo25 }, { offset: "100%", color: color.slate100 }]} />
        <rect x="0" y="0" width="820" height="400" rx="20" fill="url(#gLegalLitER)" />
        {/* Podium */}
        <g transform="translate(410, 250)">
            <path d="M-100 0 L-80 120 H80 L100 0 Z" fill={color.slate700}/>
            <text x="0" y="70" textAnchor="middle" fontSize="60">⚖️</text>
        </g>
        {/* Person */}
        <g transform="translate(410, 200)">
            <circle cy="-30" r="25" fill="#D6B49A"/>
            <path d="M-40 0 C-30 80, 30 80, 40 0 Z" fill={color.indigo600}/>
        </g>
    </svg>
);

/* 7) Psychological and Emotional Awareness */
const PsychologicalAwarenessSVG = (props) => (
    <svg viewBox="0 0 820 400" role="img" aria-label="A person meditating calmly, surrounded by icons for resilience, coping, and stress management." {...props}>
        <BG id="gPsychoER" stops={[{ offset: "0%", color: color.emerald25 }, { offset: "100%", color: color.rose50 }]} />
        <rect x="0" y="0" width="820" height="400" rx="20" fill="url(#gPsychoER)" />
        {/* Person Meditating */}
        <g transform="translate(410, 250)">
            <circle cy="-30" r="25" fill="#F4C9A5"/>
            <path d="M-50 0 C-30 80, 30 80, 50 0 Z" fill={color.cyan500}/>
            <path d="M-30 40 H30 M-20 60 H20" stroke={color.white} strokeWidth="4"/>
        </g>
        {/* Icons */}
        {[
            { angle: -150, icon: '❤️' }, { angle: -90, icon: '⚙️' }, { angle: -30, icon: '🧘' }
        ].map(({ angle, icon }) => (
            <g key={icon}>
                <text x={410 + 150 * Math.cos(angle * Math.PI / 180)} y={220 + 150 * Math.sin(angle * Math.PI / 180)} fontSize="50">
                    {icon}
                    <animateTransform attributeName="transform" type="translate" values="0 0; 0 -10; 0 0" dur="3s" repeatCount="indefinite" begin={`${angle/30}s`}/>
                </text>
            </g>
        ))}
    </svg>
);

/* 8) CRCCF's Role */
const OrgRoleSVG = (props) => (
    <svg viewBox="0 0 820 400" role="img" aria-label="A central CRCCF logo acting as a library hub for different educational topics." {...props}>
        <BG id="gRoleER" stops={[{ offset: "0%", color: color.indigo50 }, { offset: "100%", color: color.amber50 }]} />
        <rect x="0" y="0" width="820" height="400" rx="20" fill="url(#gRoleER)" />
        {/* Bookshelves */}
        <g stroke={color.slate500} strokeWidth="5">
            <path d="M100 80 H720 M100 180 H720 M100 280 H720"/>
        </g>
        {/* Books */}
        <g fill={color.indigo400}>
            <rect x="120" y="30" width="40" height="50"/><rect x="170" y="30" width="40" height="50" fill={color.emerald400}/>
            <rect x="320" y="130" width="40" height="50"/><rect x="370" y="130" width="40" height="50" fill={color.rose400}/>
            <rect x="520" y="230" width="40" height="50"/><rect x="570" y="230" width="40" height="50" fill={color.cyan300}/>
        </g>
         {/* Central CRCCF Book */}
        <g transform="translate(410, 200)">
            <rect x="-50" y="-80" width="100" height="130" fill={color.indigo800}/>
            <text x="0" y="-20" textAnchor="middle" fill={color.white} fontWeight="bold" fontSize="24">CRCCF</text>
        </g>
    </svg>
);

/* 9) Conclusion */
const ConclusionSVG = (props) => (
    <svg viewBox="0 0 820 400" role="img" aria-label="An empowered person holding a glowing lightbulb that illuminates a clear path forward." {...props}>
        <BG id="gConcER" stops={[{ offset: "0%", color: color.cyan100 }, { offset: "100%", color: color.emerald100 }]} />
        <rect x="0" y="0" width="820" height="400" rx="20" fill="url(#gConcER)" />
        {/* Person */}
        <g transform="translate(250, 250)">
            <circle cy="-30" r="25" fill="#D6B49A"/>
            <path d="M-40 0 C-30 80, 30 80, 40 0 Z" fill={color.indigo600}/>
        </g>
        {/* Glowing Lightbulb */}
        <g transform="translate(350, 200)">
            <path d="M-5 12 h10 v5 h-10z" fill={color.slate500}/>
            <path d="M0 -12 C-12 -12, -12 12, 0 12 C12 12, 12 -12, 0 -12 Z" fill={color.amber400}/>
            <circle r="20" fill={color.amber400} opacity="0.7" filter="url(#lightGlow)"/>
        </g>
        {/* Illuminated Path */}
        <path d="M400 250 C 500 250, 600 200, 700 200" stroke="url(#pathGrad)" strokeWidth="10" fill="none" strokeLinecap="round"/>
        <defs>
            <linearGradient id="pathGrad">
                <stop offset="0%" stopColor={color.amber400}/>
                <stop offset="100%" stopColor={color.amber400} stopOpacity="0"/>
            </linearGradient>
        </defs>
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
          <div className="absolute -inset-2 rounded-2xl bg-gradient-to-tr from-cyan-100 via-emerald-100 to-amber-100 blur-md sm:blur-lg md:blur-xl" aria-hidden="true" />
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
export default function EducationalResourcesVictimRights() {
  const { container, itemUp } = useAnims();
  const heroRef = useRef(null);
  const { scrollYProgress } = useScroll({ target: heroRef, offset: ["start start", "end start"] });
  const heroY = useTransform(scrollYProgress, [0, 1], [0, -40]);

  const svgMap = {
    IntroSVG,
    InformationRightsSVG,
    LearningMaterialsSVG,
    WorkshopsSVG,
    AwarenessPreventionSVG,
    LegalLiteracySVG,
    PsychologicalAwarenessSVG,
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
        <span className="text-gray-700" aria-current="page">Educational Resources</span>
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
            {["Know Your Rights", "Legal Guides", "Safety Workshops", "Online Training", "Prevention", "Self-Advocacy"].map((pill) => (
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
            className="absolute -inset-2 rounded-2xl bg-gradient-to-tr from-cyan-100 via-emerald-100 to-amber-100 blur-md sm:blur-lg md:blur-xl"
            aria-hidden="true"
          />
          <div className="relative rounded-2xl border border-gray-200 bg-white p-3 sm:p-4 shadow-sm">
            <div className="w-full h-auto max-h-72 sm:max-h-80 md:max-h-none overflow-hidden">
                <VideoHeroEducationalResources />
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