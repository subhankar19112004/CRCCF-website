import {
  FiClipboard,
  FiUsers,
  FiHeart,
  FiCheckCircle,
  FiPhoneCall,
  FiBookOpen,
  FiHelpCircle,
  FiEyeOff,
  FiList,
  FiShield,
  FiLayers,
  FiFileText,
  FiAward,
  FiLock,
  FiEdit3,
  FiBriefcase
} from "react-icons/fi";

export const reportCyberCrimeData = [
  {
    slug: "compliant-registration",
    title: "Complaint Registration",
    description: "Register a cybercrime complaint quickly and securely.",
    icon: <FiClipboard />,
    content: (
      <>
        <p>
          Our secure complaint registration portal ensures quick, reliable and confidential reporting of cyber crimes.
        </p>
        <ul className="list-disc pl-5">
          <li>Fill out required details</li>
          <li>Attach relevant documents</li>
        </ul>
      </>
    )
  },
  {
    slug: "members-registration",
    title: "Members Registration",
    description: "Register as a CRCCF member for exclusive access.",
    icon: <FiUsers />,
    content: (
      <>
        <p>Members gain access to special resources, community events, and support tools.</p>
      </>
    )
  },
  {
    slug: "victim-rights-support",
    title: "Victim Rights & Support",
    description: "Support for victims of cyber crimes and awareness about their rights.",
    icon: <FiHeart />,
    content: (
      <>
        <p>We offer guidance, counseling, and information for victims of cyber crimes.</p>
      </>
    )
  },
  {
    slug: "check-complaint-status",
    title: "Check Complaint Status",
    description: "Track your submitted complaint easily online.",
    icon: <FiCheckCircle />,
    content: (
      <>
        <p>Check real-time status updates of your complaints from anywhere.</p>
      </>
    )
  },
  {
    slug: "emergency-helpline-contact",
    title: "Emergency Helpline & Contact",
    description: "24x7 emergency contact for urgent support.",
    icon: <FiPhoneCall />,
    content: (
      <>
        <p>Direct access to our emergency helpdesk and support team.</p>
      </>
    )
  },
  {
    slug: "legal-guidance-awareness",
    title: "Legal Guidance & Awareness",
    description: "Legal resources and awareness programs.",
    icon: <FiBookOpen />,
    content: (
      <>
        <p>Stay informed about cyber laws and your digital rights.</p>
      </>
    )
  },
  {
    slug: "cyber-crime-faqs",
    title: "Cyber Crime FAQs",
    description: "Answers to common cybercrime-related questions.",
    icon: <FiHelpCircle />,
    content: (
      <>
        <p>Clear explanations about processes, rights, and preventive steps.</p>
      </>
    )
  },
  {
    slug: "anonymous-tip-report",
    title: "Anonymous Tip/Report",
    description: "Submit anonymous cybercrime tips securely.",
    icon: <FiEyeOff />,
    content: (
      <>
        <p>We allow anonymous reporting while protecting your identity.</p>
      </>
    )
  },
  {
    slug: "step-by-step-guide",
    title: "Step-by-Step Reporting Guide",
    description: "A complete step-by-step reporting guide.",
    icon: <FiList />,
    content: (
      <>
        <p>Learn how to file cybercrime complaints effectively.</p>
      </>
    )
  },
  {
    slug: "online-safety-prevention",
    title: "Online Safety & Prevention Tips",
    description: "Guidelines to stay safe online.",
    icon: <FiShield />,
    content: (
      <>
        <p>Simple steps to secure your online presence and avoid scams.</p>
      </>
    )
  },
  {
    slug: "types-of-cyber-crimes",
    title: "Types of Cyber Crimes",
    description: "Understand different cybercrime categories.",
    icon: <FiLayers />,
    content: (
      <>
        <p>Detailed explanation of various types of cyber crimes.</p>
      </>
    )
  },
  {
    slug: "cyber-laws-rights",
    title: "Cyber Laws & Rights",
    description: "Know your legal rights and protections.",
    icon: <FiFileText />,
    content: (
      <>
        <p>Learn about national and international cyber laws.</p>
      </>
    )
  },
  {
    slug: "success-stories-case-studies",
    title: "Success Stories & Case Studies",
    description: "Real stories of justice and awareness.",
    icon: <FiAward />,
    content: (
      <>
        <p>Read how victims achieved justice through our support.</p>
      </>
    )
  },
  {
    slug: "cyber-security-tips",
    title: "Cyber Security Tips",
    description: "Everyday cybersecurity best practices.",
    icon: <FiLock />,
    content: (
      <>
        <p>Tips to strengthen your online security habits.</p>
      </>
    )
  },
  {
    slug: "cybercrime-reporter",
    title: "Cybercrime Reporter",
    description: "Platform for journalists and reports.",
    icon: <FiEdit3 />,
    content: (
      <>
        <p>Get cybercrime updates and resources for media professionals.</p>
      </>
    )
  },
  {
    slug: "cyber-crime-lawyers",
    title: "Cyber Crime Lawyers",
    description: "Find experienced cybercrime legal experts.",
    icon: <FiBriefcase />,
    content: (
      <>
        <p>List of certified lawyers specialized in cybercrime cases.</p>
      </>
    )
  }
];
