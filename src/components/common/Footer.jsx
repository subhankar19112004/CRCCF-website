// import React, { useEffect, useState } from "react";
// import { motion } from "framer-motion";
// import {
//   FiArrowUp,
//   FiMail,
//   FiMapPin,
//   FiPhone,
//   FiFacebook,
//   FiTwitter,
//   FiLinkedin,
//   FiInstagram,
//   FiYoutube,
//   FiGlobe,
// } from "react-icons/fi";
// import { FaTelegramPlane, FaWhatsapp } from "react-icons/fa";

// const Footer = () => {
//   const [showScroll, setShowScroll] = useState(false);

//   useEffect(() => {
//     const handleScroll = () => setShowScroll(window.scrollY > 300);
//     window.addEventListener("scroll", handleScroll);
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);

//   const scrollToTop = () => {
//     window.scrollTo({ top: 0, behavior: "smooth" });
//   };

//   const navItems = [
//     { label: "Home", path: "/" },
//     { label: "About Us", path: "/about" },
//     { label: "Training", path: "/cyber-education" },
//     { label: "Software", path: "/software-services" },
//     { label: "Gallery", path: "/gallery" },
//     { label: "Recruitment", path: "/recruitment-process" },
//     { label: "Report Crime", path: "/report-a-cyber-crime" },
//     { label: "Resources", path: "/resource-and-download" },
//     { label: "Contact", path: "/contact-us" },
//   ];

//   const socialLinks = [
//     { icon: FiFacebook, url: "https://facebook.com" },
//     { icon: FiTwitter, url: "https://twitter.com" },
//     { icon: FiLinkedin, url: "https://linkedin.com" },
//     { icon: FiInstagram, url: "https://instagram.com" },
//     { icon: FiYoutube, url: "https://youtube.com" },
//     { icon: FiGlobe, url: "https://yourwebsite.com" },
//     { icon: FaTelegramPlane, url: "https://t.me/yourchannel" },
//     { icon: FaWhatsapp, url: "https://wa.me/919777999529" },
//     { icon: FiPhone, url: "tel:+919777999529" },
//     { icon: FiMail, url: "mailto:hr@crcybercrime.org" },
//   ];

//   return (
//     <footer className="relative overflow-hidden bg-[#ffffff] text-black pt-16 pb-10 px-6 sm:px-12 border-t-4 border-blue-600">
//       {/* Background Particles */}
//       <div className="absolute inset-0">
//         {[...Array(20)].map((_, i) => (
//           <motion.span
//             key={i}
//             className="absolute w-2 h-2 bg-blue-800 rounded-full opacity-30"
//             initial={{
//               y: Math.random() * 400,
//               x: Math.random() * window.innerWidth,
//             }}
//             animate={{
//               y: [Math.random() * 400, Math.random() * 400 - 100],
//               opacity: [0.2, 0.6, 0.2],
//             }}
//             transition={{
//               duration: Math.random() * 5 + 3,
//               repeat: Infinity,
//               ease: "easeInOut",
//             }}
//           />
//         ))}
//       </div>

//       {/* Content Grid */}
//       <div className="relative z-10 max-w-9xl mx-auto grid gap-10 md:grid-cols-2 lg:grid-cols-4">
//         {/* Logo + About */}
//         <div>
//           <img
//             src="https://res.cloudinary.com/dlvmo4u97/image/upload/v1753994796/siysiomksfwsnjpx0kzn.png"
//             alt="CRCCF Logo"
//             className="h-24 mb-4"
//           />
//           <p className="text-gray-900 text-sm leading-relaxed">
//             CR Cyber Crime Foundation is highly professional and efficient in
//             their work. They not only create strong awareness against
//             cybercrimes but also deliver excellent IT services like Java,
//             Python, MERN stack development, SEO, and digital marketing. The team
//             is skilled, reliable, and committed to both technology and social
//             impact. A great choice for anyone seeking quality services with
//             trust.
//           </p>
//         </div>

//         {/* Useful Links */}
//         <div>
//           <h3 className="text-lg font-semibold mb-4 border-b-2 border-red-600 inline-block">
//             Useful Links
//           </h3>
//           <ul className="grid grid-cols-2 gap-3">
//             {navItems.map((item) => (
//               <li key={item.path}>
//                 <a
//                   href={item.path}
//                   className="relative block px-3 py-1 rounded-md bg-[#ffffff] text-gray-800 transition-all duration-300 hover:text-gray-60 overflow-hidden group"
//                 >
//                   {item.label}
//                   {/* Animated underline */}
//                   <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-red-500 transition-all duration-300 group-hover:w-full"></span>
//                 </a>
//               </li>
//             ))}
//           </ul>
//         </div>

//         {/* Office Address */}
//         <div>
//           <h3 className="text-lg font-semibold mb-4 border-b-2 border-red-600 inline-block">
//             Office Address
//           </h3>
//           <ul className="space-y-3 text-gray-800">
//             <li className="flex items-start gap-2">
//               <FiMapPin className="text-red-500 mt-1" />
//               Head Office:
//               Plot No- 238, Santi Nagar, Jharapada, Koradakanta, Po- Laxmi Sagar,
//               PS – Laxmi Sagar, Dist. -Khordha
//               Bhubaneswar, Odisha -751006
//             </li>
//             <li className="flex items-center gap-2">
//               <FiPhone className="text-red-500" /> +91 9777999529
//             </li>
//             <li className="flex items-center gap-2">
//               <FiMail className="text-red-500" /> hr@crcybercrime.org
//             </li>
//           </ul>
//         </div>

//         {/* Review Button */}
//         <div>
//           <h3 className="text-lg font-semibold mb-4 border-b-2 border-red-600 inline-block">
//             Review Us
//           </h3>
//           <button className="w-full border border-gray-900 bg-blue-200 py-3 px-4 rounded-md hover:text-amber-50 hover:bg-red-600 transition-all duration-300">
//             Add Your Review
//           </button>
//         </div>
//       </div>

//       {/* Footer Bottom */}
//       <div className="relative z-10 border-t border-gray-900 mt-10 pt-6 flex flex-col md:flex-row justify-between items-center">
//         <p className="text-gray-400 text-sm">
//           © {new Date().getFullYear()} Developed CR CYBER CRIME FOUNDATION. All rights reserved.
//         </p>
//         <div className="flex flex-wrap gap-4 mt-4 md:mt-0">
//           {socialLinks.map(({ icon: Icon, url }, index) => (
//             <motion.a
//               key={index}
//               href={url}
//               target="_blank"
//               rel="noopener noreferrer"
//               whileHover={{ scale: 1.2, rotate: 5 }}
//               className="text-gray-900 hover:text-red-500 transition"
//             >
//               <Icon className="w-5 h-5" />
//             </motion.a>
//           ))}
//         </div>
//       </div>

//       {/* Scroll to Top */}
//       {showScroll && (
//         <motion.button
//           onClick={scrollToTop}
//           className="fixed bottom-24 right-8 p-3 rounded-full bg-blue-600 text-white shadow-lg hover:bg-green-700 focus:outline-none"
//           initial={{ opacity: 0, scale: 0 }}
//           animate={{ opacity: 1, scale: 1 }}
//           exit={{ opacity: 0 }}
//           whileHover={{ scale: 1.1 }}
//         >
//           <FiArrowUp className="w-5 h-5" />
//         </motion.button>
//       )}
//     </footer>
//   );
// };

// export default Footer;

// import React, { useEffect, useState } from "react";
// import { motion } from "framer-motion";
// import {
//   FiArrowUp,
//   FiMail,
//   FiMapPin,
//   FiPhone,
//   FiFacebook,
//   FiTwitter,
//   FiLinkedin,
//   FiInstagram,
//   FiYoutube,
//   FiGlobe,
//   FiShield,
//   FiLock,
//   FiAlertTriangle,
//   FiDatabase,
//   FiCode
// } from "react-icons/fi";
// import { FaTelegramPlane, FaWhatsapp, FaShieldAlt, FaFingerprint } from "react-icons/fa";
// import { RiVirusLine, RiSpyLine } from "react-icons/ri";
// import { Link } from "lucide-react";

// const Footer = () => {
//   const [showScroll, setShowScroll] = useState(false);

//   useEffect(() => {
//     const handleScroll = () => setShowScroll(window.scrollY > 300);
//     window.addEventListener("scroll", handleScroll);
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);

//   const scrollToTop = () => {
//     window.scrollTo({ top: 0, behavior: "smooth" });
//   };

//   const navItems = [
//     { label: "Home", path: "/" },
//     { label: "About Us", path: "/about" },
//     { label: "Training", path: "/cyber-education" },
//     { label: "Software", path: "/software-services" },
//     { label: "Gallery", path: "/gallery" },
//     { label: "Recruitment", path: "/recruitment-process" },
//     { label: "Report Crime", path: "/report-a-cyber-crime" },
//     { label: "Resources", path: "/resource-and-download" },
//     { label: "Contact", path: "/contact-us" },
//   ];

//   const socialLinks = [
//     { icon: FiFacebook, url: "https://www.facebook.com/profile.php?id=61576052739281" },
//     { icon: FiTwitter, url: "https://twitter.com" },
//     { icon: FiLinkedin, url: "http://www.linkedin.com/in/cr-cyber-crime-foundation-b1313b377" },
//     { icon: FiInstagram, url: "https://www.instagram.com/crcybercrime/" },
//     { icon: FiYoutube, url: "https://studio.youtube.com/channel/UCxrhFdTCVoqdzE4jEaMsIgw/editing/profile" },
//     { icon: FiGlobe, url: "https://maps.app.goo.gl/xwU59PK7iPxPVtfc8" },
//     { icon: FaTelegramPlane, url: "https://t.me/yourchannel" },
//     { icon: FaWhatsapp, url: "https://wa.me/919777999529" },
//     { icon: FiPhone, url: "tel:+919777999529" },
//     { icon: FiMail, url: "mailto:hr@crcybercrime.org" },
//   ];

//   // Cyber security icons for animation
//   const securityIcons = [
//     { icon: FiShield, color: "text-blue-500" },
//     { icon: FiLock, color: "text-green-500" },
//     { icon: FaShieldAlt, color: "text-yellow-500" },
//     { icon: RiVirusLine, color: "text-red-500" },
//     { icon: RiSpyLine, color: "text-purple-500" },
//     { icon: FaFingerprint, color: "text-indigo-500" },
//     { icon: FiAlertTriangle, color: "text-orange-500" },
//     { icon: FiDatabase, color: "text-cyan-500" },
//     { icon: FiCode, color: "text-pink-500" },
//   ];

//   return (
//     <footer className="relative overflow-hidden bg-black text-white pt-16 pb-10 px-4 sm:px-6 lg:px-8 border-t-4 border-blue-600">
//       {/* Cyber-themed background animation */}
//       <div className="absolute inset-0 overflow-hidden">
//         {/* Binary code rain animation */}
//         {[...Array(30)].map((_, i) => (
//           <motion.div
//             key={`binary-${i}`}
//             className="absolute text-xs font-mono text-green-400 opacity-30"
//             initial={{
//               y: -50,
//               x: Math.random() * window.innerWidth,
//             }}
//             animate={{
//               y: window.innerHeight + 50,
//             }}
//             transition={{
//               duration: Math.random() * 10 + 10,
//               repeat: Infinity,
//               delay: Math.random() * 5,
//               ease: "linear",
//             }}
//           >
//             {Math.random() > 0.5 ? "1" : "0"}
//           </motion.div>
//         ))}
        
//         {/* Floating security icons */}
//         {[...Array(15)].map((_, i) => {
//           const randomIcon = securityIcons[Math.floor(Math.random() * securityIcons.length)];
//           const IconComponent = randomIcon.icon;
//           return (
//             <motion.div
//               key={`icon-${i}`}
//               className={`absolute ${randomIcon.color} text-xl`}
//               initial={{
//                 y: Math.random() * window.innerHeight,
//                 x: Math.random() * window.innerWidth,
//                 opacity: 0.2,
//                 rotate: Math.random() * 360,
//               }}
//               animate={{
//                 y: [Math.random() * window.innerHeight, Math.random() * window.innerHeight],
//                 x: [Math.random() * window.innerWidth * 0.5, Math.random() * window.innerWidth * 0.5],
//                 opacity: [0.1, 0.4, 0.1],
//                 rotate: [0, 180, 360],
//               }}
//               transition={{
//                 duration: Math.random() * 15 + 10,
//                 repeat: Infinity,
//                 ease: "easeInOut",
//               }}
//             >
//               <IconComponent />
//             </motion.div>
//           );
//         })}
        
//         {/* Network connection dots */}
//         {[...Array(50)].map((_, i) => (
//           <motion.div
//             key={`dot-${i}`}
//             className="absolute w-1 h-1 bg-blue-800 rounded-full opacity-20"
//             initial={{
//               y: Math.random() * window.innerHeight,
//               x: Math.random() * window.innerWidth,
//             }}
//             animate={{
//               opacity: [0.1, 0.3, 0.1],
//             }}
//             transition={{
//               duration: Math.random() * 5 + 3,
//               repeat: Infinity,
//               ease: "easeInOut",
//             }}
//           />
//         ))}
//       </div>

//       {/* Content Grid */}
//       <div className="relative z-10 max-w-9xl mx-auto grid gap-5 md:grid-cols-2 lg:grid-cols-4">
//         {/* Logo + About */}
//         <div>
//           <motion.div
//             initial={{ opacity: 0, y: 20 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.5 }}
//             viewport={{ once: true }}
//           >
//             <div className="flex items-center mb-4">
//               <img
//                 src="https://res.cloudinary.com/dlvmo4u97/image/upload/v1753994796/siysiomksfwsnjpx0kzn.png"
//                 alt="CRCCF Logo"
//                 className="h-24"
//               />
//               <motion.div
//                 className="ml-3"
//                 animate={{ 
//                   x: [0, -3, 0, 3, 0],
//                 }}
//                 transition={{
//                   duration: 2,
//                   repeat: Infinity,
//                 }}
//               >
//                 <FiShield className="text-black text-3xl" />
//               </motion.div>
//             </div>
//             <p className="text-gray-100 text-sm leading-relaxed">
//               CR Cyber Crime Foundation is highly professional and efficient in
//               their work. They not only create strong awareness against
//               cybercrimes but also deliver excellent IT services like Java,
//               Python, MERN stack development, SEO, and digital marketing.
//             </p>
//           </motion.div>
//         </div>

//         {/* Useful Links */}
//         <div>
//           <motion.div
//             initial={{ opacity: 0, y: 20 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.5, delay: 0.1 }}
//             viewport={{ once: true }}
//           >
//             <h3 className="text-lg font-bold mb-4 border-b-2 border-blue-600 inline-block">
//               Useful Links
//             </h3>
//             <ul className="grid grid-cols-2 gap-2">
//               {navItems.map((item, index) => (
//                 <motion.li 
//                   key={item.path}
//                   initial={{ opacity: 0, x: -10 }}
//                   whileInView={{ opacity: 1, x: 0 }}
//                   transition={{ duration: 0.3, delay: index * 0.05 }}
//                   viewport={{ once: true }}
//                 >
//                   <Link
//                     href={item.path}
//                     className="relative block px-3 py-2 rounded-md bg-black hover:bg-blue-50 text-white hover:text-black transition-all duration-300 group"
//                   >
//                     <span className="flex items-center">
//                       <FiArrowUp className="transform -rotate-45 mr-2 text-blue-500 opacity-0 group-hover:opacity-100 transition-all" />
//                       {item.label}
//                     </span>
//                     <span className="absolute left-3 bottom-1 w-0 h-0.5 bg-blue-600 transition-all duration-300 group-hover:w-[calc(100%-1.5rem)]"></span>
//                   </Link>
//                 </motion.li>
//               ))}
//             </ul>
//           </motion.div>
//         </div>

//         {/* Office Address */}
//         <div>
//           <motion.div
//             initial={{ opacity: 0, y: 20 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.5, delay: 0.2 }}
//             viewport={{ once: true }}
//           >
//             <h3 className="text-lg font-bold mb-4 border-b-2 border-blue-600 inline-block">
//               Office Address
//             </h3>
//             <ul className="space-y-3 text-gray-200">
//               <motion.li 
//                 className="flex items-start gap-3"
//                 whileHover={{ x: 5 }}
//               >
//                 <FiMapPin className="text-blue-600 mt-1 flex-shrink-0" />
//                 <span>
//                   Head Office: Plot No- 238, Santi Nagar, Jharapada, Koradakanta, 
//                   Po- Laxmi Sagar, PS – Laxmi Sagar, Dist. -Khordha
//                   Bhubaneswar, Odisha -751006
//                 </span>
//               </motion.li>
//               <motion.li 
//                 className="flex items-center gap-3"
//                 whileHover={{ x: 5 }}
//               >
//                 <FiPhone className="text-blue-600" /> +91 9777999529
//               </motion.li>
//               <motion.li 
//                 className="flex items-center gap-3"
//                 whileHover={{ x: 5 }}
//               >
//                 <FiMail className="text-blue-600" /> hr@crcybercrime.org
//               </motion.li>
//             </ul>
//           </motion.div>
//         </div>

//         {/* Review Button */}
//         <div>
//           <motion.div
//             initial={{ opacity: 0, y: 20 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.5, delay: 0.3 }}
//             viewport={{ once: true }}
//           >
//             <h3 className="text-lg font-bold mb-4 border-b-2 border-blue-600 inline-block">
//               Report Cyber Crime
//             </h3>
//             <motion.button
//               whileHover={{ scale: 1.02 }}
//               whileTap={{ scale: 0.98 }}
//               className="w-full bg-gradient-to-r from-blue-600 to-blue-800 text-white py-3 px-4 rounded-md shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center"
//             >
//               <FiAlertTriangle className="mr-2" />
//               Emergency Report
//             </motion.button>
            
//             <h3 className="text-lg font-bold mt-6 mb-4 border-b-2 border-blue-600 inline-block">
//               Review Us
//             </h3>
//             <motion.button
//               whileHover={{ scale: 1.02 }}
//               whileTap={{ scale: 0.98 }}
//               className="w-full border border-blue-600 bg-white text-blue-600 py-3 px-4 rounded-md shadow hover:shadow-md transition-all duration-300"
//             >
//               Add Your Review
//             </motion.button>
//           </motion.div>
//         </div>
//       </div>

//       {/* Footer Bottom */}
//       <motion.div 
//         className="relative z-10 border-t border-gray-200 mt-10 pt-6 flex flex-col md:flex-row justify-between items-center"
//         initial={{ opacity: 0 }}
//         whileInView={{ opacity: 1 }}
//         transition={{ duration: 0.5 }}
//         viewport={{ once: true }}
//       >
//         <p className="text-gray-100 text-sm text-center md:text-left mb-4 md:mb-0">
//           © {new Date().getFullYear()} CR CYBER CRIME FOUNDATION. All rights reserved.
//         </p>
//         <div className="flex flex-wrap justify-center gap-4 text-amber-50">
//           {socialLinks.map(({ icon: Icon, url }, index) => (
//             <motion.a
//               key={index}
//               href={url}
//               target="_blank"
//               rel="noopener noreferrer"
//               whileHover={{ 
//                 scale: 1.2, 
//                 y: -3,
//                 color: "#2563eb" // blue-600
//               }}
//               className="text-gray-100 hover:text-blue-600 transition-colors"
//               initial={{ opacity: 0, scale: 0.8 }}
//               whileInView={{ opacity: 1, scale: 1 }}
//               transition={{ duration: 0.3, delay: index * 0.05 }}
//               viewport={{ once: true }}
//             >
//               <Icon className="w-5 h-5" />
//             </motion.a>
//           ))}
//         </div>
//       </motion.div>

//       {/* Scroll to Top */}
//       {showScroll && (
//         <motion.button
//           onClick={scrollToTop}
//           className="fixed bottom-16 right-6 p-3 rounded-full bg-blue-600 text-white shadow-lg hover:bg-blue-700 focus:outline-none z-50"
//           initial={{ opacity: 0, scale: 0 }}
//           animate={{ opacity: 1, scale: 1 }}
//           exit={{ opacity: 0 }}
//           whileHover={{ scale: 1.1 }}
//           whileTap={{ scale: 0.9 }}
//         >
//           <FiArrowUp className="w-5 h-5" />
//         </motion.button>
//       )}

//       {/* Cyber security badge */}
//       <motion.div 
//         className="fixed bottom-2 left-4 bg-blue-600 text-white px-3 py-1 rounded-full text-xs font-bold shadow-lg z-50 flex items-center"
//         initial={{ opacity: 0, x: -50 }}
//         animate={{ opacity: 1, x: 0 }}
//         transition={{ delay: 1 }}
//       >
//         <FiLock className="mr-2" />
//         Cyber Security Verified
//       </motion.div>
//     </footer>
//   );
// };

// export default Footer;


import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom"; // <-- ADDED THIS IMPORT
import { motion } from "framer-motion";
import {
  FiArrowUp,
  FiMail,
  FiMapPin,
  FiPhone,
  FiFacebook,
  FiTwitter,
  FiLinkedin,
  FiInstagram,
  FiYoutube,
  FiGlobe,
  FiShield,
  FiLock,
  FiAlertTriangle,
  FiDatabase,
  FiCode
} from "react-icons/fi";
import { FaTelegramPlane, FaWhatsapp, FaShieldAlt, FaFingerprint } from "react-icons/fa";
import { RiVirusLine, RiSpyLine } from "react-icons/ri";

const Footer = () => {
  const [showScroll, setShowScroll] = useState(false);

  useEffect(() => {
    const handleScroll = () => setShowScroll(window.scrollY > 300);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const navItems = [
    { label: "Home", path: "/" },
    { label: "About Us", path: "/about" },
    { label: "Education & Internship", path: "/cyber-education" },
    { label: "IT and Software", path: "/software-services" },
    { label: "Gallery", path: "/gallery" },
    { label: "Recruitment Process", path: "/recruitment-process" },
    { label: "Cyber Crime Report", path: "/report-a-cyber-crime" },
    { label: "Resource and download", path: "/resource-and-download" },
    { label: "Contact Us", path: "/contact-us" },
  ];

  const socialLinks = [
    { icon: FiFacebook, url: "https://www.facebook.com/profile.php?id=61576052739281" },
    { icon: FiTwitter, url: "https://twitter.com" },
    { icon: FiLinkedin, url: "http://www.linkedin.com/in/cr-cyber-crime-foundation-b1313b377" },
    { icon: FiInstagram, url: "https://www.instagram.com/crcybercrime/" },
    { icon: FiYoutube, url: "https://studio.youtube.com/channel/UCxrhFdTCVoqdzE4jEaMsIgw/editing/profile" },
    { icon: FiGlobe, url: "https://maps.app.goo.gl/xwU59PK7iPxPVtfc8" },
    { icon: FaTelegramPlane, url: "https://t.me/yourchannel" },
    { icon: FaWhatsapp, url: "https://wa.me/919777999529" },
    { icon: FiPhone, url: "tel:+919777999529" },
    { icon: FiMail, url: "mailto:hr@crcybercrime.org" },
  ];

  const securityIcons = [
    { icon: FiShield, color: "text-blue-500" },
    { icon: FiLock, color: "text-green-500" },
    { icon: FaShieldAlt, color: "text-yellow-500" },
    { icon: RiVirusLine, color: "text-red-500" },
    { icon: RiSpyLine, color: "text-purple-500" },
    { icon: FaFingerprint, color: "text-indigo-500" },
    { icon: FiAlertTriangle, color: "text-orange-500" },
    { icon: FiDatabase, color: "text-cyan-500" },
    { icon: FiCode, color: "text-pink-500" },
  ];

  return (
    <footer className="relative overflow-hidden bg-black text-white pt-16 pb-10 px-4 sm:px-6 lg:px-8 border-t-4 border-blue-600">
      {/* Cyber-themed background animation */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(30)].map((_, i) => (
          <motion.div
            key={`binary-${i}`}
            className="absolute text-xs font-mono text-green-400 opacity-30"
            initial={{ y: -50, x: Math.random() * window.innerWidth }}
            animate={{ y: window.innerHeight + 50 }}
            transition={{ duration: Math.random() * 10 + 10, repeat: Infinity, delay: Math.random() * 5, ease: "linear" }}
          >
            {Math.random() > 0.5 ? "1" : "0"}
          </motion.div>
        ))}
        {[...Array(15)].map((_, i) => {
          const randomIcon = securityIcons[Math.floor(Math.random() * securityIcons.length)];
          const IconComponent = randomIcon.icon;
          return (
            <motion.div
              key={`icon-${i}`}
              className={`absolute ${randomIcon.color} text-xl`}
              initial={{ y: Math.random() * window.innerHeight, x: Math.random() * window.innerWidth, opacity: 0.2, rotate: Math.random() * 360 }}
              animate={{ y: [Math.random() * window.innerHeight, Math.random() * window.innerHeight], x: [Math.random() * window.innerWidth * 0.5, Math.random() * window.innerWidth * 0.5], opacity: [0.1, 0.4, 0.1], rotate: [0, 180, 360] }}
              transition={{ duration: Math.random() * 15 + 10, repeat: Infinity, ease: "easeInOut" }}
            >
              <IconComponent />
            </motion.div>
          );
        })}
        {[...Array(50)].map((_, i) => (
          <motion.div
            key={`dot-${i}`}
            className="absolute w-1 h-1 bg-blue-800 rounded-full opacity-20"
            initial={{ y: Math.random() * window.innerHeight, x: Math.random() * window.innerWidth }}
            animate={{ opacity: [0.1, 0.3, 0.1] }}
            transition={{ duration: Math.random() * 5 + 3, repeat: Infinity, ease: "easeInOut" }}
          />
        ))}
      </div>

      {/* Content Grid */}
      <div className="relative z-10 max-w-9xl mx-auto grid gap-5 md:grid-cols-2 lg:grid-cols-4">
        {/* Logo + About */}
        <div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center mb-4">
              <img
                src="https://res.cloudinary.com/dlvmo4u97/image/upload/v1753994796/siysiomksfwsnjpx0kzn.png"
                alt="CRCCF Logo"
                className="h-24"
              />
              <motion.div
                className="ml-3"
                animate={{ x: [0, -3, 0, 3, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                <FiShield className="text-black text-3xl" />
              </motion.div>
            </div>
            <p className="text-gray-100 text-sm leading-relaxed">
              CR Cyber Crime Foundation is highly professional and efficient in
              their work. They not only create strong awareness against
              cybercrimes but also deliver excellent IT services like Java,
              Python, MERN stack development, SEO, and digital marketing.
            </p>
          </motion.div>
        </div>

        {/* Useful Links */}
        <div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <h3 className="text-lg font-bold mb-4 border-b-2 border-blue-600 inline-block">
              Useful Links
            </h3>
            <ul className="grid grid-cols-2 gap-2">
              {navItems.map((item, index) => (
                <motion.li 
                  key={item.path}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.05 }}
                  viewport={{ once: true }}
                >
                  {/* --- THIS IS THE UPDATED PART --- */}
                  <Link
                    to={item.path}
                    className="relative block px-3 py-2 rounded-md bg-black hover:bg-blue-50 text-white hover:text-black transition-all duration-300 group"
                  >
                    <span className="flex items-center">
                      <FiArrowUp className="transform -rotate-45 mr-2 text-blue-500 opacity-0 group-hover:opacity-100 transition-all" />
                      {item.label}
                    </span>
                    <span className="absolute left-3 bottom-1 w-0 h-0.5 bg-blue-600 transition-all duration-300 group-hover:w-[calc(100%-1.5rem)]"></span>
                  </Link>
                   {/* --- END OF THE UPDATE --- */}
                </motion.li>
              ))}
            </ul>
          </motion.div>
        </div>

        {/* Office Address */}
        <div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h3 className="text-lg font-bold mb-4 border-b-2 border-blue-600 inline-block">
              Office Address
            </h3>
            <ul className="space-y-3 text-gray-200">
              <motion.li 
                className="flex items-start gap-3"
                whileHover={{ x: 5 }}
              >
                <FiMapPin className="text-blue-600 mt-1 flex-shrink-0" />
                <span>
                  Head Office: Plot No- 238, Santi Nagar, Jharapada, Koradakanta, 
                  Po- Laxmi Sagar, PS – Laxmi Sagar, Dist. -Khordha
                  Bhubaneswar, Odisha -751006
                </span>
              </motion.li>
              <motion.li 
                className="flex items-center gap-3"
                whileHover={{ x: 5 }}
              >
                <FiPhone className="text-blue-600" /> +91 9777999529
              </motion.li>
              <motion.li 
                className="flex items-center gap-3"
                whileHover={{ x: 5 }}
              >
                <FiMail className="text-blue-600" /> hr@crcybercrime.org
              </motion.li>
            </ul>
          </motion.div>
        </div>

        {/* Review Button */}
        <div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <h3 className="text-lg font-bold mb-4 border-b-2 border-blue-600 inline-block">
              Report Cyber Crime
            </h3>
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="w-full bg-gradient-to-r from-blue-600 to-blue-800 text-white py-3 px-4 rounded-md shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center"
            >
              <FiAlertTriangle className="mr-2" />
              Emergency Report
            </motion.button>
            
            <h3 className="text-lg font-bold mt-6 mb-4 border-b-2 border-blue-600 inline-block">
              Review Us
            </h3>
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="w-full border border-blue-600 bg-white text-blue-600 py-3 px-4 rounded-md shadow hover:shadow-md transition-all duration-300"
            >
              Add Your Review
            </motion.button>
          </motion.div>
        </div>
      </div>

      {/* Footer Bottom */}
      <motion.div 
        className="relative z-10 border-t border-gray-200 mt-10 pt-6 flex flex-col md:flex-row justify-between items-center"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
      >
        <p className="text-gray-100 text-sm text-center md:text-left mb-4 md:mb-0">
          © {new Date().getFullYear()} CR CYBER CRIME FOUNDATION. All rights reserved.
        </p>
        <div className="flex flex-wrap justify-center gap-4 text-amber-50">
          {socialLinks.map(({ icon: Icon, url }, index) => (
            <motion.a
              key={index}
              href={url}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.2, y: -3, color: "#2563eb" }}
              className="text-gray-100 hover:text-blue-600 transition-colors"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3, delay: index * 0.05 }}
              viewport={{ once: true }}
            >
              <Icon className="w-5 h-5" />
            </motion.a>
          ))}
        </div>
      </motion.div>

      {/* Scroll to Top */}
      {showScroll && (
        <motion.button
          onClick={scrollToTop}
          className="fixed bottom-16 right-6 p-3 rounded-full bg-blue-600 text-white shadow-lg hover:bg-blue-700 focus:outline-none z-50"
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0 }}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          <FiArrowUp className="w-5 h-5" />
        </motion.button>
      )}

      {/* Cyber security badge */}
      <motion.div 
        className="fixed bottom-2 left-4 bg-blue-600 text-white px-3 py-1 rounded-full text-xs font-bold shadow-lg z-50 flex items-center"
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 1 }}
      >
        <FiLock className="mr-2" />
        Cyber Security Verified
      </motion.div>
    </footer>
  );
};

export default Footer;