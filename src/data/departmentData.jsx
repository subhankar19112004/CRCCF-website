// src/data/departmentData.jsx
import React from "react";

const Icon = ({ d, viewBox = "0 0 24 24" }) => (
  <svg viewBox={viewBox} className="w-8 h-8 shrink-0" aria-hidden>
    <path d={d} />
  </svg>
);

/** Minimal, consistent icons per card */
const icons = {
  admin:
    "M3 7h18M5 7v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V7M7 7l5-4 5 4",
  hr: "M12 12a4 4 0 1 0-4-4 4 4 0 0 0 4 4Zm-7 8a7 7 0 0 1 14 0",
  legal:
    "M12 3l7 4v4c0 5-3 9-7 10-4-1-7-5-7-10V7l7-4Zm-3 8h6",
  inv:
    "M11 4a7 7 0 1 1-4.95 11.95L3 19l3.05-3.05A7 7 0 0 1 11 4Z",
  it: "M4 6h16v8H4zM8 18h8",
  finance:
    "M3 20h18M6 16v-6m6 6V8m6 8V4",
  edu: "M12 3l9 5-9 5-9-5 9-5Zm0 10v8",
  sec:
    "M12 3l8 4v5c0 4.5-3.2 8.6-8 9-4.8-.4-8-4.5-8-9V7l8-4Z",
  intern: "M4 4h16v4H4zM6 8v10h12V8",
  train:
    "M5 20h14M7 16l5-8 5 8",
  aware:
    "M12 2a10 10 0 1 1-7.07 2.93A10 10 0 0 1 12 2Zm-1 6h2v6h-2m0 4h2",
  revenue:
    "M5 19h14M7 15h10M9 11h6M11 7h2",
};

export const departmentData = [
  {
    title: "Admin Stative Department",
    route: "/department/admin-stative-department",
    description:
      "Internal administration, records, coordination, and foundation-wide governance support.",
    icon: <Icon d={icons.admin} />,
  },
  {
    title: "HR Department",
    route: "/department/hr-department",
    description:
      "Recruitment, onboarding, training coordination, performance & policy implementation.",
    icon: <Icon d={icons.hr} />,
  },
  {
    title: "Legal Department",
    route: "/department/legal-department",
    description:
      "Policies, contracts, compliance notes, and legal vetting aligned to Section 8 norms.",
    icon: <Icon d={icons.legal} />,
  },
  {
    title: "Cyber Investigation Department",
    route: "/department/cyber-investigation-department",
    description:
      "Case intake, triage, documentation & liaison workflows (within legal limits).",
    icon: <Icon d={icons.inv} />,
  },
  {
    title: "IT Department",
    route: "/department/it-department",
    description:
      "Infra, apps, website, integrations, and internal tooling lifecycle.",
    icon: <Icon d={icons.it} />,
  },
  {
    title: "Finance Department",
    route: "/department/finance-department",
    description:
      "Accounts, budgeting, grants, audits, and transparent reporting.",
    icon: <Icon d={icons.finance} />,
  },
  {
    title: "Education Department",
    route: "/department/education-department",
    description:
      "Curriculum, workshops, e-learning assets, and outreach content.",
    icon: <Icon d={icons.edu} />,
  },
  {
    title: "Cyber Security Department",
    route: "/department/cyber-security-department",
    description:
      "Security posture, policies, hardening, and org-wide cyber hygiene.",
    icon: <Icon d={icons.sec} />,
  },
  {
    title: "Internship Department",
    route: "/department/internship-department",
    description:
      "Intern pipelines, mentoring plans, and learning roadmaps.",
    icon: <Icon d={icons.intern} />,
  },
  {
    title: "Training Department",
    route: "/department/training-department",
    description:
      "Staff upskilling, LMS resources, and certification support.",
    icon: <Icon d={icons.train} />,
  },
  {
    title: "Cyber Awaranes Department",
    route: "/department/cyber-awaranes-department",
    description:
      "Public awareness, campaigns, events, and guidance content.",
    icon: <Icon d={icons.aware} />,
  },
  {
    title: "Revenue Department",
    route: "/department/revenue-department",
    description:
      "Program revenue streams, donor relations, and sustainability.",
    icon: <Icon d={icons.revenue} />,
  },
];
