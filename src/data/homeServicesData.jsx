// // src/data/homeServicesData.js
// import {
//   HeartHandshake,
//   Gavel,
//   Users as UsersIcon,
//   Monitor,
//   Star,
//   Users2,
//   GraduationCap,
//   Building,
//   FileText,
//   Newspaper,
//   ShieldAlert,
//   Wrench,
//   BookOpen,
//   MessageSquare,
//   FileSearch,
//   Book,
//   ShieldCheck,
//   Cpu,
// } from "lucide-react";

// /**
//  * Each card now has a `path` so clicking routes directly.
//  * - "Our Team" -> NEW page (/our-team-overview)
//  * - "News and Event" -> Gallery (/gallery) as requested
//  * The rest point to existing pages when available; otherwise to new placeholders.
//  */
// export const homeServicesData = [
//   {
//     title: "Legal Support",
//     description: "Comprehensive legal assistance for cybercrime-related cases",
//     icon: <Gavel className="w-8 h-8" />,
//     color: "bg-gradient-to-br from-indigo-600 to-blue-700",
//     features: ["Legal consultation services", "Court representation"],
//     path: "/report/legal-guidance-awareness", // existing
//   },
//   {
//     title: "Our Client",
//     description: "Dedicated client relationship management and support services",
//     icon: <UsersIcon className="w-8 h-8" />,
//     color: "bg-gradient-to-br from-teal-600 to-green-700",
//     features: ["Personal account management", "Priority support access"],
//     path: "/clients", // NEW
//   },
//   {
//     title: "IT Support",
//     description: "Professional technical support and system maintenance services",
//     icon: <Monitor className="w-8 h-8" />,
//     color: "bg-gradient-to-br from-slate-600 to-gray-700",
//     features: ["24/7 technical assistance", "System troubleshooting"],
//     path: "/it-support", // NEW
//   },
//   {
//     title: "Review",
//     description: "Comprehensive service evaluation and performance assessment",
//     icon: <Star className="w-8 h-8" />,
//     color: "bg-gradient-to-br from-yellow-600 to-amber-700",
//     features: ["Service quality assessment", "Performance metrics analysis"],
//     path: "/reviews", // NEW
//   },
//   {
//     title: "Our Team",
//     description: "Meet our expert team of cybersecurity professionals",
//     icon: <Users2 className="w-8 h-8" />,
//     color: "bg-gradient-to-br from-cyan-600 to-blue-700",
//     features: ["Certified cybersecurity experts", "Industry veterans"],
//     path: "/our-team-overview", // NEW (separate from existing OurTeam.jsx)
//   },
//   {
//     title: "Our Student",
//     description: "Educational programs and opportunities for cybersecurity students",
//     icon: <GraduationCap className="w-8 h-8" />,
//     color: "bg-gradient-to-br from-purple-600 to-pink-700",
//     features: ["Internship programs", "Mentorship opportunities"],
//     path: "/students", // NEW
//   },
//   {
//     title: "Our Department",
//     description: "Specialized departments handling various cybersecurity domains",
//     icon: <Building className="w-8 h-8" />,
//     color: "bg-gradient-to-br from-orange-600 to-red-700",
//     features: ["Forensics division", "Incident response unit"],
//     path: "/about/department", // existing
//   },
//   {
//     title: "Our Case Story",
//     description: "Real-world case studies and success stories from our operations",
//     icon: <FileText className="w-8 h-8" />,
//     color: "bg-gradient-to-br from-lime-600 to-emerald-700",
//     features: ["Detailed case analyses", "Problem-solving methodologies"],
//     path: "/report/success-stories-case-studies", // existing
//   },
//   {
//     title: "News and Event",
//     description: "Latest cybersecurity news, updates, and upcoming events",
//     icon: <Newspaper className="w-8 h-8" />,
//     color: "bg-gradient-to-br from-rose-600 to-pink-700",
//     features: ["Industry news updates", "Event announcements"],
//     path: "/gallery", // as you requested
//   },
//   {
//     title: "Cyber Crime Safety Tips",
//     description: "Practical advice and best practices for cyber safety",
//     icon: <ShieldAlert className="w-8 h-8" />,
//     color: "bg-gradient-to-br from-violet-600 to-purple-700",
//     features: ["Password protection guidelines", "Phishing prevention tips"],
//     path: "/report/cyber-security-tips", // existing
//   },
//   {
//     title: "Technical Assistance",
//     description: "Expert technical support for cybersecurity implementations",
//     icon: <Wrench className="w-8 h-8" />,
//     color: "bg-gradient-to-br from-gray-600 to-slate-700",
//     features: ["System configuration support", "Technical troubleshooting"],
//     path: "/technical-assistance", // NEW
//   },
//   {
//     title: "Training & Awareness",
//     description: "Comprehensive cybersecurity education and awareness programs",
//     icon: <BookOpen className="w-8 h-8" />,
//     color: "bg-gradient-to-br from-blue-600 to-cyan-700",
//     features: ["Employee training sessions", "Security awareness campaigns"],
//     path: "/cyber-education", // existing (landing)
//   },
//   {
//     title: "Testimonials",
//     description: "Client feedback and success stories about our services",
//     icon: <MessageSquare className="w-8 h-8" />,
//     color: "bg-gradient-to-br from-green-600 to-teal-700",
//     features: ["Client satisfaction stories", "Service impact testimonials"],
//     path: "/testimonials", // NEW
//   },
//   {
//     title: "Case Studies",
//     description: "In-depth analysis of real cybersecurity cases and solutions",
//     icon: <FileSearch className="w-8 h-8" />,
//     color: "bg-gradient-to-br from-amber-600 to-orange-700",
//     features: ["Detailed problem analysis", "Solution implementation"],
//     path: "/resources/case-study-library", // existing
//   },
//   {
//     title: "Our Courses",
//     description: "Comprehensive cybersecurity training courses and certifications",
//     icon: <Book className="w-8 h-8" />,
//     color: "bg-gradient-to-br from-red-600 to-rose-700",
//     features: ["Beginner to advanced levels", "Certification programs"],
//     path: "/cyber-education/cyber-education", // reuse CyberEducation content
//   },
//   {
//     title: "Cyber Crime Prevention",
//     description: "Proactive measures and strategies to prevent cyber crimes",
//     icon: <ShieldCheck className="w-8 h-8" />,
//     color: "bg-gradient-to-br from-emerald-600 to-green-700",
//     features: ["Risk assessment services", "Preventive strategy development"],
//     path: "/report/types-of-cyber-crimes", // existing
//   },
//   {
//     title: "Innovation and Technology",
//     description: "Cutting-edge technological solutions and innovative approaches",
//     icon: <Cpu className="w-8 h-8" />,
//     color: "bg-gradient-to-br from-pink-600 to-rose-700",
//     features: ["Emerging technology adoption", "Research and development"],
//     path: "/software-services", // existing hub
//   },
// ];
// src/data/homeServicesData.js

// export const homeServicesData = [
//   {
//     title: "Legal Support",
//     image: "https://res.cloudinary.com/dket2ldqy/image/upload/v1758980053/Legal_Support_glzjy7.avif",
//     path: "/report/legal-guidance-awareness", // original route
//   },
//   {
//     title: "Our Client",
//     image: "https://res.cloudinary.com/dket2ldqy/image/upload/v1758980054/Our_Clients_odhbjk.avif",
//     path: "/clients", // original route
//   },
//   {
//     title: "IT Support",
//     image: "https://res.cloudinary.com/dket2ldqy/image/upload/v1758980052/IT_SUPPOT_qf4jiu.avif",
//     path: "/it-support", // original route
//   },
//   {
//     title: "Review",
//     image: "https://res.cloudinary.com/dket2ldqy/image/upload/v1758980058/Reviews_vtyl5e.avif",
//     path: "/reviews", // original route
//   },
//   {
//     title: "Our Team",
//     image: "https://res.cloudinary.com/dket2ldqy/image/upload/v1758980058/Our_Team_jmcn2z.avif",
//     path: "/our-team-overview", // original route
//   },
//   {
//     title: "Our Students",
//     image: "https://res.cloudinary.com/dket2ldqy/image/upload/v1758980057/Our_Students_irbtwb.avif",
//     path: "/students", // original route
//   },
//   {
//     title: "Our Department",
//     image: "https://res.cloudinary.com/dket2ldqy/image/upload/v1758980056/Our_Departments_at8ifr.avif",
//     path: "/about/department", // original route
//   },
//   {
//     title: "Our Case Story",
//     image: "https://res.cloudinary.com/dket2ldqy/image/upload/v1758980057/Our_Success_Case_Stories_wjeafa.avif",
//     path: "/report/success-stories-case-studies", // original route
//   },
//   {
//     title: "News and Events",
//     image: "https://res.cloudinary.com/dket2ldqy/image/upload/v1758980054/News_and_Events_jcw2lo.avif",
//     path: "/gallery", // original route
//   },
//   {
//     title: "Cyber Crime Safety Tip",
//     image: "https://res.cloudinary.com/dket2ldqy/image/upload/v1758980051/Cybercrime_Safety_Tips_solb4v.avif",
//     path: "/report/cyber-security-tips", // original route
//   },
//   {
//     title: "Technical Assistance",
//     image: "https://res.cloudinary.com/dket2ldqy/image/upload/v1758980062/Technical_Assistance_zvefwt.avif",
//     path: "/technical-assistance", // original route
//   },
//   {
//     title: "Testimonials",
//     image: "https://res.cloudinary.com/dket2ldqy/image/upload/v1759002806/Testimonials_jydfmn.avif",
//     path: "/testimonials", // original route
//   },
//   {
//     title: "Case Studies",
//     image: "https://res.cloudinary.com/dket2ldqy/image/upload/v1758980050/Case_Studies_cpl7ic.avif",
//     path: "/resources/case-study-library", // original route
//   },
//   {
//     title: "Cyber Crime Prevention",
//     image: "https://res.cloudinary.com/dket2ldqy/image/upload/v1758980051/Cybercrime_Prevention_ft8ngk.avif",
//     path: "/report/types-of-cyber-crimes", // original route
//   },
//   {
//     title: "Innovation and Technology",
//     image: "https://res.cloudinary.com/dket2ldqy/image/upload/v1758980051/Innovation_and_Technology_kjnbmx.avif",
//     path: "/software-services", // original route
//   },
// ];

// src/data/homeServicesData.js

export const homeServicesData = [
  {
    title: "Introduction of CRCCF",
    image: "https://res.cloudinary.com/dket2ldqy/image/upload/v1758980052/introduction_to_crccf_cj6n8z.avif",
    path: "/about/introduction",
  },
  {
    title: "What We Do",
    image: "https://res.cloudinary.com/dket2ldqy/image/upload/v1758980062/what_we_do_q1uqgi.avif",
    path: "/about/what-we-do",
  },
  {
    title: "Mission and Vision of CRCCF",
    image: "https://res.cloudinary.com/dket2ldqy/image/upload/v1758980053/mission_and_vision_etuaei.avif",
    path: "/about/mission-vision",
  },
  {
    title: "Purpose of CRCCF",
    image: "https://res.cloudinary.com/dket2ldqy/image/upload/v1758980058/purpose_of_crccf_sz4pjf.avif",
    path: "/about/purpose",
  },
  {
    title: "Activities of CRCCF",
    image: "https://res.cloudinary.com/dket2ldqy/image/upload/v1758980051/Activities_of_CRCCF_yj6jqe.avif",
    path: "/about/activity",
  },
  {
    title: "Objectives of CRCCF",
    image: "https://res.cloudinary.com/dket2ldqy/image/upload/v1758980054/Objectives_of_CRCCF_vxwlpl.avif",
    path: "/about/objective",
  },
  {
    title: "Our Achievements",
    image: "https://res.cloudinary.com/dket2ldqy/image/upload/v1758980055/Our_Achievements_gc1y1d.avif",
    path: "/achievements",
  },
  {
    title: "Legal and Compliance",
    image: "https://res.cloudinary.com/dket2ldqy/image/upload/v1758980052/Legal_and_Compliance_qzrlaf.avif",
    path: "/about/legal-compliance",
  },
  {
    title: "Our Departments",
    image: "https://res.cloudinary.com/dket2ldqy/image/upload/v1758980056/Our_Departments_at8ifr.avif",
    path: "/about/department",
  },
  {
    title: "Services of CRCCF",
    image: "https://res.cloudinary.com/dket2ldqy/image/upload/v1758980061/Services_of_CRCCF_ydvoca.avif",
    path: "/about/service",
  },
  {
    title: "Privacy Policy",
    image: "https://res.cloudinary.com/dket2ldqy/image/upload/v1758980058/Privacy_Policy_ksttiy.avif",
    path: "/about/privacy-policy",
  },
  {
    title: "Data Protection Policy",
    image: "https://res.cloudinary.com/dket2ldqy/image/upload/v1758980052/Data_Protection_Policy_dtzoon.avif",
    path: "/about/data-protection-policy",
  },
  {
    title: "GDPR Compliance",
    image: "https://res.cloudinary.com/dket2ldqy/image/upload/v1758980051/GDPR_Compliance_lcxptc.avif",
    path: "/about/gdpr",
  },
  {
    title: "Terms and Conditions of CRCCF",
    image: "https://res.cloudinary.com/dket2ldqy/image/upload/v1758980062/Terms_and_Conditions_of_CRCCF_dwyjep.avif",
    path: "/about/terms",
  },
  {
    title: "Rules and Regulations of CRCCF",
    image: "https://res.cloudinary.com/dket2ldqy/image/upload/v1758980059/Rules_and_Regulations_of_CRCCF_cetbl0.avif",
    path: "/about/rules-regulation",
  },
  {
    title: "Guidelines of CRCCF",
    image: "https://res.cloudinary.com/dket2ldqy/image/upload/v1758980051/Guidelines_of_CRCCF_t0g9mj.avif",
    path: "/about/guidelines",
  },
  {
    title: "Instructions of CRCCF",
    image: "https://res.cloudinary.com/dket2ldqy/image/upload/v1758980052/Instructions_eassak.avif",
    path: "/about/instruction",
  },
  {
    title: "Our Story",
    image: "https://res.cloudinary.com/dket2ldqy/image/upload/v1758980057/Our_Story_d5pdim.avif",
    path: "/story",
  },
  {
    title: "Our History",
    image: "https://res.cloudinary.com/dket2ldqy/image/upload/v1758980057/Our_History_jybssn.avif",
    path: "/about/history",
  },
  {
    title: "Our Team",
    image: "https://res.cloudinary.com/dket2ldqy/image/upload/v1758980058/Our_Team_jmcn2z.avif",
    path: "/our-team-overview",
  },
  {
    title: "Our Success Case Stories",
    image: "https://res.cloudinary.com/dket2ldqy/image/upload/v1758980057/Our_Success_Case_Stories_wjeafa.avif",
    path: "/report/success-stories-case-studies",
  },
  {
    title: "Case Studies",
    image: "https://res.cloudinary.com/dket2ldqy/image/upload/v1758980050/Case_Studies_cpl7ic.avif",
    path: "/resources/case-study-library",
  },
  {
    title: "News and Events",
    image: "https://res.cloudinary.com/dket2ldqy/image/upload/v1758980054/News_and_Events_jcw2lo.avif",
    path: "/gallery",
  },
  {
    title: "Legal Disclaimer of CRCCF",
    image: "https://res.cloudinary.com/dket2ldqy/image/upload/v1758980053/Legal_Disclaimer_of_CRCCF_o6z9hc.avif",
    path: "/about/legal-disclaimer",
  },
  {
    title: "Copyright Registration of CRCCF",
    image: "https://res.cloudinary.com/dket2ldqy/image/upload/v1758980051/Copyright_Registration_of_CRCCF_hrok0i.avif",
    path: "/about/copyright-registration",
  },
  {
    title: "Partnerships and Collaborations",
    image: "https://res.cloudinary.com/dket2ldqy/image/upload/v1758980058/Partnerships_and_Collaborations_dreuih.avif",
    path: "/about/partnerships",
  },
  {
    title: "Legal Support",
    image: "https://res.cloudinary.com/dket2ldqy/image/upload/v1758980053/Legal_Support_glzjy7.avif",
    path: "/report/legal-guidance-awareness",
  },
  {
    title: "Our Client",
    image: "https://res.cloudinary.com/dket2ldqy/image/upload/v1758980054/Our_Clients_odhbjk.avif",
    path: "/clients",
  },
  {
    title: "IT Support",
    image: "https://res.cloudinary.com/dket2ldqy/image/upload/v1758980052/IT_SUPPOT_qf4jiu.avif",
    path: "/it-support",
  },
  {
    title: "Our Students",
    image: "https://res.cloudinary.com/dket2ldqy/image/upload/v1758980057/Our_Students_irbtwb.avif",
    path: "/students",
  },
  {
    title: "Cyber Crime Safety Tip",
    image: "https://res.cloudinary.com/dket2ldqy/image/upload/v1758980051/Cybercrime_Safety_Tips_solb4v.avif",
    path: "/report/cyber-security-tips",
  },
  {
    title: "Technical Assistance",
    image: "https://res.cloudinary.com/dket2ldqy/image/upload/v1758980062/Technical_Assistance_zvefwt.avif",
    path: "/technical-assistance",
  },
  {
    title: "Cyber Crime Prevention",
    image: "https://res.cloudinary.com/dket2ldqy/image/upload/v1758980051/Cybercrime_Prevention_ft8ngk.avif",
    path: "/report/types-of-cyber-crimes",
  },
  {
    title: "Innovation and Technology",
    image: "https://res.cloudinary.com/dket2ldqy/image/upload/v1758980051/Innovation_and_Technology_kjnbmx.avif",
    path: "/software-services",
  },
  {
    title: "Media and Press Coverage",
    image: "https://res.cloudinary.com/dket2ldqy/image/upload/v1758980053/Media_and_Press_Coverage_dejezt.avif",
    path: "/media-press",
  },
  {
    title: "Future Roadmap",
    image: "https://res.cloudinary.com/dket2ldqy/image/upload/v1758980052/Future_Roadmap_aonty2.avif",
    path: "/about/future-roadmap",
  },
  {
    title: "Membership Opportunities",
    image: "https://res.cloudinary.com/dket2ldqy/image/upload/v1758980053/Membership_Opportunities_j4gdpe.avif",
    path: "/about/membership-opportunities",
  },
  {
    title: "Emergency Response Desk",
    image: "https://res.cloudinary.com/dket2ldqy/image/upload/v1758980051/Emergency_Response_Desk_eczi9d.avif",
    path: "/about/emergency-response-desk",
  },
  {
    title: "Review",
    image: "https://res.cloudinary.com/dket2ldqy/image/upload/v1758980058/Reviews_vtyl5e.avif",
    path: "/reviews",
  },
  {
    title: "Testimonials",
    image: "https://res.cloudinary.com/dket2ldqy/image/upload/v1759002806/Testimonials_jydfmn.avif",
    path: "/testimonials",
  },
];
