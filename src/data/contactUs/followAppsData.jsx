// src/data/contactUs/followAppsData.jsx

import { 
    FaWhatsapp, FaInstagram, FaFacebookF, FaTwitter, 
    FaTelegramPlane, FaYoutube, FaLinkedinIn 
} from 'react-icons/fa'; 

import { FiMapPin } from 'react-icons/fi'; 

export const followAppsData = [
  // --- Messaging / Communication ---
  { 
    id: 1, 
    label: "WhatsApp Support", 
    icon: FaWhatsapp, 
    path: "https://wa.me/91XXXXXXXXXX", // External Link (Direct Chat)
    color: "bg-green-500", 
    accent: "shadow-green-500/50",
    action: "Chat Now",
    type: "communication",
    context: "Direct, one-on-one instant support and urgent inquiries.",
    details: { requiresApp: true, privacyLevel: "Private" }
  },
  { 
    id: 2, 
    label: "Official WhatsApp Groups", 
    icon: FaWhatsapp, 
    path: "/contact-us/follow-apps/whatsapp", // <--- UPDATED: Internal Path
    color: "bg-green-600",
    accent: "shadow-green-600/50",
    action: "View Groups", // Updated Action Text
    type: "community",
    context: "Browse and join our official community and alert groups.",
    details: { requiresApproval: true, postFrequency: "Daily" }
  },
  { 
    id: 3, 
    label: "Telegram Channels", 
    icon: FaTelegramPlane, 
    path: "/contact-us/follow-apps/telegram", // <--- UPDATED: Internal Path
    color: "bg-blue-400", 
    accent: "shadow-blue-400/50",
    action: "View Channels", // Updated Action Text
    type: "broadcast",
    context: "Secure, encrypted channels for large-scale announcements.",
    details: { isPublic: true, notificationPriority: "High" }
  },
  { 
    id: 4, 
    label: "Telegram Discussion Groups", 
    icon: FaTelegramPlane, 
    path: "/contact-us/follow-apps/telegram", // <--- UPDATED: Internal Path
    color: "bg-blue-500",
    accent: "shadow-blue-500/50",
    action: "Join Discussions", // Updated Action Text
    type: "community",
    context: "Engage with our team and community in real-time discussion.",
    details: { maxMembers: "200k", moderation: true }
  },

  // --- Social Media (Engagement) ---
  { 
    id: 5, 
    label: "LinkedIn Page", 
    icon: FaLinkedinIn, 
    path: "https://linkedin.com/company/yourcompany", 
    color: "bg-blue-700", 
    accent: "shadow-blue-700/50",
    action: "Follow",
    type: "professional",
    context: "Professional networking, job postings, and corporate updates.",
    details: { focus: "B2B, Recruitment" }
  },
  { 
    id: 6, 
    label: "Official Twitter (X)", 
    icon: FaTwitter, 
    path: "https://twitter.com/yourhandle", 
    color: "bg-gray-800", 
    accent: "shadow-gray-800/50",
    action: "Follow",
    type: "news",
    context: "Real-time updates, breaking cyber news, and quick interactions.",
    details: { contentStyle: "Short-form news" }
  },
  { 
    id: 7, 
    label: "Facebook Page", 
    icon: FaFacebookF, 
    path: "https://facebook.com/yourpage", 
    color: "bg-blue-600", 
    accent: "shadow-blue-600/50",
    action: "Like & Follow",
    type: "community",
    context: "General public awareness, events, and community photo galleries.",
    details: { contentStyle: "Photo/Video, Events" }
  },
  { 
    id: 8, 
    label: "Instagram Profile", 
    icon: FaInstagram, 
    path: "https://instagram.com/yourprofile", 
    color: "bg-pink-600", 
    accent: "shadow-pink-600/50",
    action: "View Profile",
    type: "visual",
    context: "Behind-the-scenes content and visual summaries of our work.",
    details: { contentStyle: "Visual Storytelling" }
  },
  { 
    id: 9, 
    label: "YouTube Channel", 
    icon: FaYoutube, 
    path: "https://youtube.com/yourchannel", 
    color: "bg-red-600", 
    accent: "shadow-red-600/50",
    action: "Watch Videos",
    type: "media",
    context: "Tutorials, webinars, legal awareness sessions, and interviews.",
    details: { contentStyle: "Long-form educational" }
  },
  
  // --- Location / Utility ---
  { 
    id: 10, 
    label: "Google Maps Location", 
    icon: FiMapPin, 
    path: "TODO: Google Maps Embed URL/Link", 
    color: "bg-yellow-600", 
    accent: "shadow-yellow-600/50",
    action: "Get Directions",
    type: "utility",
    context: "Find our office location, operating hours, and contact details via Maps.",
    details: { serviceArea: "Odisha", includesHours: true }
  },
];