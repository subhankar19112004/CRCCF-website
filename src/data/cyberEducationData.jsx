import React from "react";

const cyberEducationData = [
  {
    id: 1,
    slug: "software-education",
    title: "Software Education",
    description: "Learn software fundamentals, programming, and modern tools to excel in the digital age.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m2 8H7a2 2 0 01-2-2V6a2 2 0 012-2h5l2 2h5a2 2 0 012 2v10a2 2 0 01-2 2z" />
      </svg>
    ),
    content: (
      <div className="space-y-4">
        <p>
          Our Software Education program equips learners with essential programming knowledge,
          software development methodologies, and practical skills in using modern tools.
          This program is ideal for beginners, professionals, and enthusiasts wanting to stay updated with industry standards.
        </p>
        <h2 className="text-xl font-semibold">What You Will Learn</h2>
        <ul className="list-disc list-inside space-y-1">
          <li>Programming fundamentals and logic building</li>
          <li>Introduction to modern software development tools</li>
          <li>Best practices in software version control and testing</li>
          <li>Understanding of cloud-based and SaaS solutions</li>
        </ul>
        <h2 className="text-xl font-semibold">Who Should Attend</h2>
        <ul className="list-disc list-inside space-y-1">
          <li>Students & graduates interested in IT careers</li>
          <li>Professionals seeking upskilling</li>
          <li>Anyone wanting to learn software for productivity</li>
        </ul>
      </div>
    ),
  },
  {
    id: 2,
    slug: "computer-education",
    title: "Computer Education",
    description: "Build strong foundations in computer hardware, operating systems, and digital literacy.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17h4.5M4 5h16v10H4V5zM4 15h16v4H4v-4z" />
      </svg>
    ),
    content: (
      <div className="space-y-4">
        <p>
          Our Computer Education program covers essential computer knowledge, including hardware components,
          operating systems, basic troubleshooting, and digital literacy skills necessary for the modern workforce.
        </p>
        <h2 className="text-xl font-semibold">What You Will Learn</h2>
        <ul className="list-disc list-inside space-y-1">
          <li>Basic and advanced computer operations</li>
          <li>Understanding operating systems and software installation</li>
          <li>Data backup, recovery, and digital hygiene</li>
          <li>Fundamentals of networking and internet usage</li>
        </ul>
        <h2 className="text-xl font-semibold">Who Should Attend</h2>
        <ul className="list-disc list-inside space-y-1">
          <li>Students, beginners, and non-technical users</li>
          <li>Professionals needing digital skills</li>
          <li>Individuals preparing for IT-related certifications</li>
        </ul>
      </div>
    ),
  },
  {
    id: 3,
    slug: "legal-education",
    title: "Legal Education",
    description: "Understand cyber laws, digital rights, and IT Act compliance for safe digital practices.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-yellow-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-10V5a2 2 0 00-2-2H5a2 2 0 00-2 2v14a2 2 0 002 2h5" />
      </svg>
    ),
    content: (
      <div className="space-y-4">
        <p>
          The Legal Education program focuses on understanding cyber laws, IT Act compliance,
          and legal frameworks governing technology and online activities. Participants will
          learn about digital rights, responsibilities, and the legal implications of cybercrime.
        </p>
        <h2 className="text-xl font-semibold">What You Will Learn</h2>
        <ul className="list-disc list-inside space-y-1">
          <li>Introduction to Information Technology Act, 2000</li>
          <li>Cybercrime and its legal consequences</li>
          <li>Intellectual property rights in the digital space</li>
          <li>Digital evidence and its admissibility in court</li>
        </ul>
        <h2 className="text-xl font-semibold">Who Should Attend</h2>
        <ul className="list-disc list-inside space-y-1">
          <li>Law students and legal practitioners</li>
          <li>IT professionals and corporate compliance officers</li>
          <li>Individuals interested in understanding their digital rights</li>
        </ul>
      </div>
    ),
  },
  {
    id: 4,
    slug: "cyber-education",
    title: "Cyber Education",
    description: "Gain knowledge on cybersecurity, online safety, and protecting personal and organizational data.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-red-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 11c0-1.104-.896-2-2-2H5a2 2 0 00-2 2v5h14v-5c0-1.104-.896-2-2-2h-3zm0 0v-1a4 4 0 118 0v1h-4z" />
      </svg>
    ),
    content: (
      <div className="space-y-4">
        <p>
          Cyber Education focuses on online safety, cybersecurity awareness, and strategies to
          protect personal and organizational data from modern cyber threats.
        </p>
        <h2 className="text-xl font-semibold">What You Will Learn</h2>
        <ul className="list-disc list-inside space-y-1">
          <li>Cybersecurity fundamentals and threat landscape</li>
          <li>Safe browsing, secure passwords, and privacy tools</li>
          <li>Recognizing phishing and social engineering attacks</li>
          <li>Incident response basics and reporting mechanisms</li>
        </ul>
        <h2 className="text-xl font-semibold">Who Should Attend</h2>
        <ul className="list-disc list-inside space-y-1">
          <li>General internet users</li>
          <li>Corporate employees and students</li>
          <li>Small businesses and startups</li>
        </ul>
      </div>
    ),
  },
];

export default cyberEducationData;
