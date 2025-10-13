// src/data/softwareData.jsx
import React from "react";

// --- SVG Icons ---
const CustomSoftwareIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path d="M4 7h16M4 12h16M4 17h16" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const WebMobileAppIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <rect x="3" y="3" width="7" height="7" rx="1" strokeWidth="2" />
    <rect x="14" y="3" width="7" height="7" rx="1" strokeWidth="2" />
    <rect x="3" y="14" width="7" height="7" rx="1" strokeWidth="2" />
    <rect x="14" y="14" width="7" height="7" rx="1" strokeWidth="2" />
  </svg>
);

const EnterpriseIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8 text-purple-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path d="M4 21h16V7H4v14zM16 3h4v4h-4zM4 3h4v4H4z" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const AIIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8 text-yellow-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <circle cx="12" cy="12" r="3" strokeWidth="2" />
    <path d="M12 2v4M12 18v4M2 12h4M18 12h4M4.9 4.9l2.8 2.8M16.3 16.3l2.8 2.8M4.9 19.1l2.8-2.8M16.3 7.7l2.8-2.8" strokeWidth="2" />
  </svg>
);

const CloudIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8 text-sky-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path d="M6 19h13a4 4 0 0 0 0-8h-.26A6 6 0 1 0 6 19z" strokeWidth="2" />
  </svg>
);

const SecurityIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8 text-red-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path d="M12 3l8 4v5c0 5-3 9-8 9s-8-4-8-9V7l8-4z" strokeWidth="2" />
  </svg>
);

const ForensicIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8 text-indigo-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <circle cx="11" cy="11" r="7" strokeWidth="2" />
    <path d="M21 21l-4.35-4.35" strokeWidth="2" />
  </svg>
);

const BlockchainIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8 text-cyan-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <rect x="3" y="3" width="7" height="7" strokeWidth="2" />
    <rect x="14" y="3" width="7" height="7" strokeWidth="2" />
    <rect x="3" y="14" width="7" height="7" strokeWidth="2" />
    <rect x="14" y="14" width="7" height="7" strokeWidth="2" />
  </svg>
);

const IOTIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8 text-emerald-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <circle cx="12" cy="12" r="3" strokeWidth="2" />
    <path d="M2 12h4M18 12h4M12 2v4M12 18v4M4.9 4.9l2.8 2.8M16.3 16.3l2.8 2.8" strokeWidth="2" />
  </svg>
);

const WorkflowIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8 text-orange-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path d="M8 7h8v4H8V7zM4 17h16v-4H4v4z" strokeWidth="2" />
  </svg>
);

const SaaSIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8 text-pink-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path d="M12 2l9 5-9 5-9-5 9-5zm0 10v10" strokeWidth="2" />
  </svg>
);

const ConsultationIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8 text-lime-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path d="M12 6v6l4 2" strokeWidth="2" />
    <circle cx="12" cy="12" r="10" strokeWidth="2" />
  </svg>
);

const TestingIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8 text-teal-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path d="M5 13l4 4L19 7" strokeWidth="2" />
  </svg>
);

const DevOpsIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8 text-fuchsia-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path d="M12 4v4M12 16v4M4 12h4M16 12h4" strokeWidth="2" />
    <circle cx="12" cy="12" r="4" strokeWidth="2" />
  </svg>
);

const UIUXIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8 text-rose-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <rect x="4" y="4" width="16" height="16" rx="2" strokeWidth="2" />
    <path d="M4 9h16" strokeWidth="2" />
  </svg>
);

const MaintenanceIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path d="M9 2l1 7H4l1 7h6l1 7" strokeWidth="2" />
  </svg>
);

const IndustryIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8 text-violet-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path d="M4 21h16V7l-8-4-8 4v14z" strokeWidth="2" />
  </svg>
);

// --- DATA ---
export const softwareData = [
  {
    slug: "custom-software-development",
    title: "Custom Software Development",
    description: "Tailored software solutions built to meet unique business needs.",
    icon: <CustomSoftwareIcon />,
    content: (<><p>We build custom applications ...</p></>)
  },
  {
    slug: "web-mobile-app-development",
    title: "Web & Mobile App Development",
    description: "High-performance, responsive apps for web and mobile platforms.",
    icon: <WebMobileAppIcon />,
    content: (<><p>We deliver web and mobile apps ...</p></>)
  },
  {
    slug: "enterprise-solution-crm-erp",
    title: "Enterprise Solution (CRM/ERP)",
    description: "Integrated enterprise systems for seamless business operations.",
    icon: <EnterpriseIcon />,
    content: (<><p>We design CRM and ERP solutions ...</p></>)
  },
  {
    slug: "ai-big-data-analytics",
    title: "AI, Big Data & Analytics",
    description: "Unlock insights with advanced AI and analytics solutions.",
    icon: <AIIcon />,
    content: (<><p>AI and Big Data solutions ...</p></>)
  },
  {
    slug: "cloud-based-software-solutions",
    title: "Cloud-Based Software Solutions",
    description: "Scalable and secure cloud-native software applications.",
    icon: <CloudIcon />,
    content: (<><p>Cloud-native development ...</p></>)
  },
  {
    slug: "cybersecurity-threat-protection",
    title: "Cybersecurity & Threat Protection Software",
    description: "Advanced security tools to safeguard your digital assets.",
    icon: <SecurityIcon />,
    content: (<><p>We secure your infrastructure ...</p></>)
  },
  {
    slug: "digital-forensic-evidence-management",
    title: "Digital Forensic & Evidence Management",
    description: "Forensic tools to analyze and manage evidence securely.",
    icon: <ForensicIcon />,
    content: (<><p>Digital forensics ...</p></>)
  },
  {
    slug: "blockchain-fintech-solutions",
    title: "Blockchain & Fintech Solutions",
    description: "Blockchain-powered financial solutions.",
    icon: <BlockchainIcon />,
    content: (<><p>Blockchain based solutions ...</p></>)
  },
  {
    slug: "iot-smart-device-software",
    title: "IoT & Smart Device Software",
    description: "Software for connected devices and IoT systems.",
    icon: <IOTIcon />,
    content: (<><p>IoT platforms ...</p></>)
  },
  {
    slug: "workflow-tools",
    title: "Workflow Tools",
    description: "Automate and streamline your workflows.",
    icon: <WorkflowIcon />,
    content: (<><p>Workflow automation ...</p></>)
  },
  {
    slug: "saas-api-integration",
    title: "SaaS Product Development & API Integration",
    description: "Build SaaS products and integrate APIs seamlessly.",
    icon: <SaaSIcon />,
    content: (<><p>SaaS solutions ...</p></>)
  },
  {
    slug: "software-consultation-audit-support",
    title: "Software Consultation, Audit & Support",
    description: "Expert software advisory and support.",
    icon: <ConsultationIcon />,
    content: (<><p>Consulting and audit ...</p></>)
  },
  {
    slug: "digital-forensics-tools",
    title: "Digital Forensics Tools",
    description: "Specialized forensic software solutions.",
    icon: <ForensicIcon />,
    content: (<><p>Forensics tools ...</p></>)
  },
  {
    slug: "software-consultation-audit",
    title: "Software Consultation & Audit",
    description: "Independent software audit services.",
    icon: <ConsultationIcon />,
    content: (<><p>Audit and consultancy ...</p></>)
  },
  {
    slug: "identity-access-management-tools",
    title: "Identity & Access Management Tools",
    description: "Control and manage user access securely.",
    icon: <SecurityIcon />,
    content: (<><p>IAM tools ...</p></>)
  },
  {
    slug: "software-testing-qa",
    title: "Software Testing & QA",
    description: "Quality assurance and testing solutions.",
    icon: <TestingIcon />,
    content: (<><p>QA services ...</p></>)
  },
  {
    slug: "devops",
    title: "DevOps",
    description: "CI/CD and automation solutions.",
    icon: <DevOpsIcon />,
    content: (<><p>DevOps practices ...</p></>)
  },
  {
    slug: "ui-ux-design",
    title: "UI/UX Design",
    description: "Creative and user-friendly designs.",
    icon: <UIUXIcon />,
    content: (<><p>UI/UX solutions ...</p></>)
  },
  {
    slug: "product-maintenance-support",
    title: "Product Maintenance & Support",
    description: "Keep your products updated and reliable.",
    icon: <MaintenanceIcon />,
    content: (<><p>Maintenance and support ...</p></>)
  },
  {
    slug: "industry-specific-solutions",
    title: "Industry-Specific Solutions",
    description: "Tailored software for specific industries.",
    icon: <IndustryIcon />,
    content: (<><p>Industry focused ...</p></>)
  }
];
