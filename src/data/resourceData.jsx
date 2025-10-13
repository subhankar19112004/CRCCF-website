import {
  Database,
  Lock,
  Briefcase,
  Download,
  Shield,
  FileText,
  FolderArchive,
  Wrench,
  Layers,
  Library,
  FileCheck,
  BookOpen,
  ClipboardList,
  Share2,
  CloudDownload,
  Settings,
  BarChart3,
  FileSpreadsheet,
} from "lucide-react";

export const resourceData = [
  {
    slug: "digital-resource-centre",
    title: "Digital Resource Centre",
    description:
      "Central hub for digital transformation, security frameworks, and IT compliance resources.",
    features: ["Interactive Dashboard", "Data Backup Templates", "Policy Documents"],
    actions: ["PDF Guides", "Excel Templates", "API Docs"],
    icon: <Database />,
  },
  {
    slug: "cyber-vault",
    title: "Cyber Vault",
    description:
      "Secure repository for confidential cyber records, incident reports, and sensitive archives.",
    features: ["Secure Encrypted Storage", "Incident History", "Access Logs"],
    actions: ["PDF Archive Download", "Encrypted File Access"],
    icon: <Lock />,
  },
  {
    slug: "investigation-toolkit",
    title: "Investigation Toolkit",
    description:
      "Professional investigation and forensic analysis tools for cyber experts.",
    features: ["Forensic Tools", "Case Management", "Evidence Chain Templates"],
    actions: ["Tool Download", "Investigation Templates"],
    icon: <Briefcase />,
  },
  {
    slug: "knowledge-download-hub",
    title: "Knowledge & Download Hub",
    description:
      "Download research papers, e-learning guides, security playbooks, and compliance kits.",
    features: ["Research Papers", "Security Playbooks", "Compliance E-Books"],
    actions: ["PDF Download", "Excel Audit Sheets", "PPT Frameworks"],
    icon: <Download />,
  },
  {
    slug: "cyber-security-resources",
    title: "Cyber Security Resources",
    description:
      "Comprehensive cyber hygiene practices, technical security documentation, and guides.",
    features: ["Guidelines", "Zero Trust Frameworks", "Security Policies"],
    actions: ["Checklists PDF", "Excel Templates"],
    icon: <Shield />,
  },
  {
    slug: "documents-utilities",
    title: "Documents & Utilities",
    description:
      "Important regulatory templates, cybercrime documentation formats, and utility tools.",
    features: ["Legal Templates", "Compliance Sheets", "Data Entry Tools"],
    actions: ["Forms Download", "Utility Tools Access"],
    icon: <FileText />,
  },
  {
    slug: "tech-tools-report",
    title: "Tech Tools & Report",
    description:
      "Explore analytical reports, security tools, and emerging technology resources.",
    features: ["Tech Reports", "DevOps Tools", "AI-Based Utilities"],
    actions: ["PDF & Excel Reports", "Tool Links"],
    icon: <FolderArchive />,
  },
  {
    slug: "resources-compliance",
    title: "Resources & Compliance",
    description:
      "Legal, regulatory, and security compliance-related resource hub.",
    features: ["Compliance Guides", "Law Updates", "Audit Kits"],
    actions: ["PDF Law Guides", "Excel Compliance Checklists"],
    icon: <Wrench />,
  },
  {
    slug: "e-library-downloads",
    title: "E-Library & Downloads",
    description:
      "Digital library for cyber security research, e-learning, and quick downloadables.",
    features: ["E-Books", "Learning Videos", "Training Kits"],
    actions: ["Book Downloads", "Video Links"],
    icon: <Layers />,
  },
  {
    slug: "security-docs-kits",
    title: "Security Docs & Kits",
    description:
      "Quick access to security documents, pre-built incident response kits, and SOPs.",
    features: ["Response Kits", "Incident SOPs", "Breach Response Checklists"],
    actions: ["Incident Kit PDF", "SOP Docs"],
    icon: <Library />,
  },
  {
    slug: "victim-assistance-forms",
    title: "Victim Assistance Forms",
    description:
      "Official assistance forms and reporting formats for cybercrime victims.",
    features: ["Legal Aid Forms", "Complaint Templates", "Victim Rights Checklist"],
    actions: ["Forms Download", "Online Submission Link"],
    icon: <FileCheck />,
  },
  {
    slug: "case-study-library",
    title: "Case Study Library",
    description:
      "Real-world case studies on cybercrime incidents, investigation methodologies, and outcomes.",
    features: ["Case Analysis", "Investigation Techniques", "Reports"],
    actions: ["Download Case PDFs", "Video Briefs"],
    icon: <BookOpen />,
  }
];
