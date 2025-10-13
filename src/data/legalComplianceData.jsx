// src/data/legalComplianceData.jsx
import {
  FiShield,
  FiUserCheck,
  FiBriefcase,
  FiCheckCircle,
  FiFileText,
  FiDatabase,
  FiCpu,
  FiSearch,
  FiLock,
  FiAward,
  FiUsers,
  FiLayers,
  FiGlobe,
  FiSettings,
  FiBook,
  FiBarChart,
  FiActivity,
  FiTrendingUp,
  FiClipboard,
  FiKey,
  FiAlertCircle,
  FiFolder,
  FiCheckSquare,
  FiServer
} from "react-icons/fi";

export const legalComplianceData = [
  {
    slug: "our-legal-identity",
    title: "Our Legal Identity",
    description: "Details of CRCCF's legal recognition and official identity.",
    icon: <FiShield className="w-10 h-10 text-indigo-600" />,
    content: (
      <>
        <p>CRCCF operates as a legally recognized organization adhering to national cyber laws.</p>
        <ul className="list-disc pl-5">
          <li>Registered under relevant legal frameworks</li>
          <li>Recognized by government agencies</li>
        </ul>
      </>
    ),
  },
  {
    slug: "our-legal-entity",
    title: "Our Legal Entity",
    description: "How CRCCF is structured legally as an entity.",
    icon: <FiUserCheck className="w-10 h-10 text-indigo-600" />,
    content: (
      <>
        <p>We operate as a compliant, government-recognized entity with proper governance.</p>
      </>
    ),
  },
  {
    slug: "legal-authorizations-cyber-licenses",
    title: "Legal Authorizations & Cyber Licenses",
    description: "Our authorizations for cybercrime investigation and security services.",
    icon: <FiBriefcase className="w-10 h-10 text-indigo-600" />,
    content: (
      <>
        <p>CRCCF holds licenses to perform cybersecurity and investigation activities legally.</p>
      </>
    ),
  },
  {
    slug: "legal-right-operational-limits",
    title: "Legal Right & Operational Limits",
    description: "What rights and boundaries we follow.",
    icon: <FiCheckCircle className="w-10 h-10 text-indigo-600" />,
    content: (
      <>
        <p>Our operations are strictly within authorized legal limits and ethical standards.</p>
      </>
    ),
  },
  {
    slug: "crccf-legal-rights",
    title: "CRCCF Legal Rights",
    description: "The legal rights of CRCCF as an investigative body.",
    icon: <FiFileText className="w-10 h-10 text-indigo-600" />,
    content: (
      <>
        <p>We are vested with specific legal rights for cyber investigation and reporting.</p>
      </>
    ),
  },
  {
    slug: "legal-ethical-compliance",
    title: "Legal & Ethical Compliance",
    description: "Ensuring compliance with both law and ethics.",
    icon: <FiDatabase className="w-10 h-10 text-indigo-600" />,
    content: (
      <>
        <p>All operations align with ethical principles and legal requirements.</p>
      </>
    ),
  },
  {
    slug: "cyber-crime-investigation-approval",
    title: "Cyber Crime Investigation Approval",
    description: "Our approval process for investigations.",
    icon: <FiCpu className="w-10 h-10 text-indigo-600" />,
    content: (
      <>
        <p>We conduct investigations only after proper approval and authorization.</p>
      </>
    ),
  },
  {
    slug: "our-cyber-investigation-capacity",
    title: "Our Cyber Investigation Capacity",
    description: "The scale and capability of our cyber investigations.",
    icon: <FiSearch className="w-10 h-10 text-indigo-600" />,
    content: (
      <>
        <p>We have trained professionals and advanced tools for cyber investigation.</p>
      </>
    ),
  },
  {
    slug: "digital-investigation-infrastructure",
    title: "Digital Investigation Infrastructure",
    description: "Our advanced infrastructure for investigations.",
    icon: <FiLock className="w-10 h-10 text-indigo-600" />,
    content: (
      <>
        <p>CRCCF uses state-of-the-art infrastructure for cyber forensics and investigations.</p>
      </>
    ),
  },
  {
    slug: "our-role-in-cybercrime-investigation",
    title: "Our Role in Cybercrime Investigation",
    description: "How CRCCF contributes to investigations.",
    icon: <FiAward className="w-10 h-10 text-indigo-600" />,
    content: (
      <>
        <p>We support government agencies and provide expertise in cybercrime cases.</p>
      </>
    ),
  },
  {
    slug: "investigation-scope-social-responsibility",
    title: "Investigation Scope & Social Responsibility",
    description: "Balancing scope with responsibility.",
    icon: <FiUsers className="w-10 h-10 text-indigo-600" />,
    content: (
      <>
        <p>We ensure investigations respect social values and individual rights.</p>
      </>
    ),
  },
  {
    slug: "cyber-investigation-compliance-framework",
    title: "Cyber Investigation Compliance Framework",
    description: "The framework for compliant investigations.",
    icon: <FiLayers className="w-10 h-10 text-indigo-600" />,
    content: (
      <>
        <p>We maintain strict frameworks to ensure compliance during cyber investigations.</p>
      </>
    ),
  },
  {
    slug: "investigation-ethics-legal-standards",
    title: "Investigation Ethics & Legal Standards",
    description: "Ensuring ethical and legal practices.",
    icon: <FiGlobe className="w-10 h-10 text-indigo-600" />,
    content: (
      <>
        <p>All investigations follow strict ethical guidelines and legal standards.</p>
      </>
    ),
  },
  {
    slug: "cyber-security-investigation-protocols",
    title: "Cyber Security & Investigation Protocols",
    description: "Protocols we follow for investigations.",
    icon: <FiSettings className="w-10 h-10 text-indigo-600" />,
    content: (
      <>
        <p>We implement secure protocols to ensure reliable and legal investigations.</p>
      </>
    ),
  },
  {
    slug: "digital-security-certification",
    title: "Digital Security Certification",
    description: "Our security certifications.",
    icon: <FiBook className="w-10 h-10 text-indigo-600" />,
    content: (
      <>
        <p>We hold certifications proving our digital security and investigation capabilities.</p>
      </>
    ),
  },
  {
    slug: "operational-resources-team",
    title: "Operational Resources & Team",
    description: "Resources and team strength.",
    icon: <FiBarChart className="w-10 h-10 text-indigo-600" />,
    content: (
      <>
        <p>We have a dedicated team of experts and operational resources for cyber tasks.</p>
      </>
    ),
  },
  {
    slug: "cybercrime-response-capabilities",
    title: "Cybercrime Response Capabilities",
    description: "How we respond to cybercrime incidents.",
    icon: <FiActivity className="w-10 h-10 text-indigo-600" />,
    content: (
      <>
        <p>Our team can quickly respond to cybercrime incidents with effective measures.</p>
      </>
    ),
  },
  {
    slug: "team-tool-tech-capacity",
    title: "Team, Tool & Tech Capacity",
    description: "Our technical capacity and tools.",
    icon: <FiTrendingUp className="w-10 h-10 text-indigo-600" />,
    content: (
      <>
        <p>We constantly upgrade our tools and training to handle complex cyber threats.</p>
      </>
    ),
  },
  {
    slug: "compliance-with-indian-cyber-laws",
    title: "Compliance with Indian Cyber Laws",
    description: "Adherence to Indian cyber laws.",
    icon: <FiClipboard className="w-10 h-10 text-indigo-600" />,
    content: (
      <>
        <p>All operations strictly comply with Indian cyber laws and IT Act provisions.</p>
      </>
    ),
  },
  {
    slug: "cyber-law-compliance-standards",
    title: "Cyber Law Compliance Standards",
    description: "Our compliance standards.",
    icon: <FiKey className="w-10 h-10 text-indigo-600" />,
    content: (
      <>
        <p>We maintain high standards in complying with cyber laws and regulations.</p>
      </>
    ),
  },
  {
    slug: "compliance-with-cybercrime-regulation",
    title: "Compliance with Cybercrime Regulation",
    description: "Following cybercrime regulations.",
    icon: <FiAlertCircle className="w-10 h-10 text-indigo-600" />,
    content: (
      <>
        <p>We fully comply with all national and international cybercrime regulations.</p>
      </>
    ),
  },
  {
    slug: "cybercrime-compliance-framework",
    title: "Cybercrime Compliance Framework",
    description: "Framework for cybercrime compliance.",
    icon: <FiFolder className="w-10 h-10 text-indigo-600" />,
    content: (
      <>
        <p>Our compliance framework ensures lawful and ethical handling of cybercrime cases.</p>
      </>
    ),
  },
  {
    slug: "resource-report",
    title: "Resource & Report",
    description: "Our resources and reporting methods.",
    icon: <FiCheckSquare className="w-10 h-10 text-indigo-600" />,
    content: (
      <>
        <p>We generate reports and manage resources transparently for compliance purposes.</p>
      </>
    ),
  },
  {
    slug: "recognized-power-responsibility",
    title: "Recognized Power & Responsibility",
    description: "Our recognized powers and responsibilities.",
    icon: <FiServer className="w-10 h-10 text-indigo-600" />,
    content: (
      <>
        <p>We operate under legally recognized powers with a sense of responsibility.</p>
      </>
    ),
  },
];
