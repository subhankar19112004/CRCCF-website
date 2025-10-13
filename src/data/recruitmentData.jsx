// src/data/recruitmentData.jsx
import {
  FiBriefcase,
  FiShield,
  FiFlag,
  FiEdit,
  FiInfo,
  FiUserCheck,
  FiFileText,
  FiCalendar,
  FiCheckCircle,
  FiList,
  FiMic,
  FiSearch
} from "react-icons/fi";

export const recruitmentData = [
  {
    slug: "job-vacancy",
    title: "Job Vacancy",
    description: "Explore current job openings at CRCCF.",
    icon: <FiBriefcase className="w-10 h-10 text-indigo-600" />,
    content: (
      <>
        <p>
          CRCCF regularly updates job opportunities for talented professionals
          across cybersecurity and IT domains.
        </p>
        <ul className="list-disc pl-5">
          <li>Check new openings regularly</li>
          <li>Apply online with complete details</li>
        </ul>
      </>
    ),
  },
  {
    slug: "recruitment-rules-policies",
    title: "Recruitment Rules/Policies",
    description: "Understand the recruitment policies of CRCCF.",
    icon: <FiShield className="w-10 h-10 text-indigo-600" />,
    content: (
      <>
        <p>
          CRCCF follows strict policies ensuring transparent and equal hiring
          practices.
        </p>
      </>
    ),
  },
  {
    slug: "recruitment-guideline",
    title: "Recruitment Guideline",
    description: "Know the steps for successful recruitment.",
    icon: <FiFlag className="w-10 h-10 text-indigo-600" />,
    content: (
      <>
        <p>
          Guidelines include eligibility, required documents, and interview
          processes.
        </p>
      </>
    ),
  },
  {
    slug: "recruitment-instructions",
    title: "Recruitment Instructions",
    description: "Follow the instructions for applying successfully.",
    icon: <FiEdit className="w-10 h-10 text-indigo-600" />,
    content: (
      <>
        <p>
          Instructions guide applicants through the submission and selection
          phases.
        </p>
      </>
    ),
  },
  {
    slug: "rti",
    title: "Right to Information Recruitment (RTI)",
    description: "Transparency through RTI information.",
    icon: <FiInfo className="w-10 h-10 text-indigo-600" />,
    content: (
      <>
        <p>
          CRCCF upholds the Right to Information policy for all recruitment
          activities.
        </p>
      </>
    ),
  },
  {
    slug: "eligibility-criteria",
    title: "Eligibility Criteria",
    description: "Know who can apply for our positions.",
    icon: <FiUserCheck className="w-10 h-10 text-indigo-600" />,
    content: (
      <>
        <p>
          Eligibility varies by job profile, qualification, and experience.
        </p>
      </>
    ),
  },
  {
    slug: "job-descriptions",
    title: "Job Descriptions",
    description: "Details of roles and responsibilities.",
    icon: <FiFileText className="w-10 h-10 text-indigo-600" />,
    content: (
      <>
        <p>
          Each job profile includes required skills, experience, and
          responsibilities.
        </p>
      </>
    ),
  },
  {
    slug: "recruitment-calendar",
    title: "Recruitment Calendar",
    description: "Schedule of all recruitment drives.",
    icon: <FiCalendar className="w-10 h-10 text-indigo-600" />,
    content: (
      <>
        <p>
          Recruitment events and deadlines are published in our yearly
          calendar.
        </p>
      </>
    ),
  },
  {
    slug: "selection-process",
    title: "Selection Process",
    description: "Learn how we select candidates.",
    icon: <FiCheckCircle className="w-10 h-10 text-indigo-600" />,
    content: (
      <>
        <p>
          The selection process involves screening, tests, and interviews.
        </p>
      </>
    ),
  },
  {
    slug: "selection-list",
    title: "Selection List",
    description: "See who made it to the list.",
    icon: <FiList className="w-10 h-10 text-indigo-600" />,
    content: (
      <>
        <p>
          The selection list is published after final evaluation of candidates.
        </p>
      </>
    ),
  },
  {
    slug: "press-release",
    title: "Press Release",
    description: "Official announcements from CRCCF.",
    icon: <FiMic className="w-10 h-10 text-indigo-600" />,
    content: (
      <>
        <p>
          CRCCF releases official press notes about recruitment drives and
          events.
        </p>
      </>
    ),
  },
  {
    slug: "check-status",
    title: "Check Status",
    description: "Track your recruitment status easily.",
    icon: <FiSearch className="w-10 h-10 text-indigo-600" />,
    content: (
      <>
        <p>
          Applicants can check their status online using their registration ID.
        </p>
      </>
    ),
  },
];
