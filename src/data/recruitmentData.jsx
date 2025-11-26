// src/data/recruitmentData.jsx
import {
  FiBriefcase,
  FiShield,
  FiFlag,
  FiEdit,
  FiInfo,
 
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
    slug: "post-vacancy-members-only",
    title: "Post Vacancy - Members Only",
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
    slug: "online-application-portal",
    title: "Online Application Portal",
    description: "Apply for jobs through our online system.",
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
    slug: "recruitment-advertisements",
    title: "Recruitment Advertisements",
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
    slug: "press-release",
    title: "Press Release and Notices",
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
    title: "Application Status",
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
