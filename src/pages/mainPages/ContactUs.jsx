// import React from 'react';
// import { motion } from 'framer-motion';
// import { FiMail, FiPhone, FiMapPin, FiGlobe, FiClock } from 'react-icons/fi';

// const ContactUs = () => {
//   const containerVariants = {
//     hidden: { opacity: 0 },
//     visible: {
//       opacity: 1,
//       transition: {
//         staggerChildren: 0.2,
//         delayChildren: 0.3
//       }
//     }
//   };

//   const itemVariants = {
//     hidden: { y: 20, opacity: 0 },
//     visible: {
//       y: 0,
//       opacity: 1,
//       transition: {
//         duration: 0.5
//       }
//     }
//   };

//   return (
//     <div className="min-h-screen bg-blue-200  border border-gray-800 rounded-md m-5 mt-10 text-blue-900 py-12 px-4 sm:px-6 lg:px-8">
//       <div className="max-w-7xl mx-auto">
//         <motion.div
//           initial={{ opacity: 0, y: -20 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.5 }}
//           className="text-center mb-16"
//         >
//           <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl">
//             Contact <span className="text-black">Cyber Crime Foundation</span>
//           </h1>
//           <p className="mt-6 text-xl max-w-3xl mx-auto">
//             Reach out to us for any inquiries or to report cyber crimes
//           </p>
//         </motion.div>

//         <motion.div
//           variants={containerVariants}
//           initial="hidden"
//           animate="visible"
//           className="grid grid-cols-1 lg:grid-cols-2 gap-12"
//         >
//           {/* Contact Information */}
//           <motion.div
//             variants={itemVariants}
//             className="bg-gray-800 bg-opacity-50 backdrop-blur-lg rounded-2xl p-8 shadow-2xl border border-gray-700"
//           >
//             <h2 className="text-2xl font-bold mb-6 text-blue-400 flex items-center">
//               <svg
//                 xmlns="http://www.w3.org/2000/svg"
//                 className="h-8 w-8 mr-2"
//                 fill="none"
//                 viewBox="0 0 24 24"
//                 stroke="currentColor"
//               >
//                 <path
//                   strokeLinecap="round"
//                   strokeLinejoin="round"
//                   strokeWidth={2}
//                   d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
//                 />
//               </svg>
//               Contact Details
//             </h2>

//             <div className="space-y-6">
//               <div className="flex items-start">
//                 <FiMapPin className="text-blue-400 mt-1 mr-4 flex-shrink-0 text-xl" />
//                 <div>
//                   <h3 className="font-semibold text-lg">Our Office</h3>
//                   <p className="text-gray-300 mt-1">
//                     Plot No- 238, Santi Nagar,<br />
//                     Jharapada, Koradakanta,<br />
//                     Po- Laxmisagar,<br />
//                     PS- Laxmisagar,<br />
//                     Dist: Khordha,<br />
//                     Bhubaneswar, Odisha - 751006
//                   </p>
//                 </div>
//               </div>

//               <div className="flex items-start">
//                 <FiPhone className="text-blue-400 mt-1 mr-4 flex-shrink-0 text-xl" />
//                 <div>
//                   <h3 className="font-semibold text-lg">Phone</h3>
//                   <a
//                     href="tel:9777999529"
//                     className="text-gray-300 hover:text-blue-400 transition-colors mt-1 block"
//                   >
//                     +91 9777999529
//                   </a>
//                 </div>
//               </div>

//               <div className="flex items-start">
//                 <FiMail className="text-blue-400 mt-1 mr-4 flex-shrink-0 text-xl" />
//                 <div>
//                   <h3 className="font-semibold text-lg">Email</h3>
//                   <a
//                     href="mailto:info@cybercrimefoundation.org"
//                     className="text-gray-300 hover:text-blue-400 transition-colors mt-1 block"
//                   >
//                     info@cybercrimefoundation.org
//                   </a>
//                 </div>
//               </div>

//               <div className="flex items-start">
//                 <FiClock className="text-blue-400 mt-1 mr-4 flex-shrink-0 text-xl" />
//                 <div>
//                   <h3 className="font-semibold text-lg">Working Hours</h3>
//                   <p className="text-gray-300 mt-1">
//                     Monday - Friday: 9:00 AM - 6:00 PM<br />
//                     Saturday: 10:00 AM - 2:00 PM
//                   </p>
//                 </div>
//               </div>
//             </div>

//             <div className="mt-8">
//               <h3 className="font-semibold text-lg mb-4">Follow Us</h3>
//               <div className="flex space-x-4">
//                 {['twitter', 'facebook', 'linkedin'].map((social) => (
//                   <motion.a
//                     key={social}
//                     href="#"
//                     whileHover={{ y: -3 }}
//                     className="bg-gray-700 hover:bg-blue-600 transition-colors p-3 rounded-full"
//                   >
//                     <svg
//                       className="w-5 h-5"
//                       fill="currentColor"
//                       viewBox="0 0 24 24"
//                       aria-hidden="true"
//                     >
//                       <path
//                         fillRule="evenodd"
//                         d={
//                           social === 'twitter'
//                             ? 'M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84'
//                             : social === 'facebook'
//                             ? 'M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z'
//                             : 'M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z'
//                         }
//                         clipRule="evenodd"
//                       />
//                     </svg>
//                   </motion.a>
//                 ))}
//               </div>
//             </div>
//           </motion.div>

//           {/* Map and Contact Form */}
//           <motion.div variants={itemVariants} className="space-y-8">
//             {/* Map */}
//             <div className="rounded-2xl overflow-hidden shadow-2xl border border-gray-700">
//               <iframe
//                 src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3742.222733744021!2d85.82479731543196!3d20.29648618640431!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjDCsDE3JzQ3LjMiTiA4NcKwNDknMzkuNiJF!5e0!3m2!1sen!2sin!4v1620000000000!5m2!1sen!2sin"
//                 width="100%"
//                 height="300"
//                 style={{ border: 0 }}
//                 allowFullScreen
//                 loading="lazy"
//                 className="filter grayscale-50 contrast-125 brightness-90"
//               ></iframe>
//             </div>

//             {/* Contact Form */}
//             <motion.div
//               whileHover={{ scale: 1.01 }}
//               className="bg-gray-800 bg-opacity-50 backdrop-blur-lg rounded-2xl p-8 shadow-2xl border border-gray-700"
//             >
//               <h2 className="text-2xl font-bold mb-6 text-blue-400 flex items-center">
//                 <svg
//                   xmlns="http://www.w3.org/2000/svg"
//                   className="h-8 w-8 mr-2"
//                   fill="none"
//                   viewBox="0 0 24 24"
//                   stroke="currentColor"
//                 >
//                   <path
//                     strokeLinecap="round"
//                     strokeLinejoin="round"
//                     strokeWidth={2}
//                     d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
//                   />
//                 </svg>
//                 Send Us a Message
//               </h2>

//               <form className="space-y-6">
//                 <div>
//                   <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-1">
//                     Your Name
//                   </label>
//                   <input
//                     type="text"
//                     id="name"
//                     className="w-full bg-gray-700 border border-gray-600 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
//                     placeholder="Enter your name"
//                   />
//                 </div>

//                 <div>
//                   <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-1">
//                     Email Address
//                   </label>
//                   <input
//                     type="email"
//                     id="email"
//                     className="w-full bg-gray-700 border border-gray-600 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
//                     placeholder="your.email@example.com"
//                   />
//                 </div>

//                 <div>
//                   <label htmlFor="phone" className="block text-sm font-medium text-gray-300 mb-1">
//                     Phone Number
//                   </label>
//                   <input
//                     type="tel"
//                     id="phone"
//                     className="w-full bg-gray-700 border border-gray-600 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
//                     placeholder="+91 0000000000"
//                   />
//                 </div>

//                 <div>
//                   <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-1">
//                     Your Message
//                   </label>
//                   <textarea
//                     id="message"
//                     rows="4"
//                     className="w-full bg-gray-700 border border-gray-600 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
//                     placeholder="Type your message here..."
//                   ></textarea>
//                 </div>

//                 <motion.button
//                   whileHover={{ scale: 1.03 }}
//                   whileTap={{ scale: 0.98 }}
//                   type="submit"
//                   className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-4 rounded-lg transition-colors duration-300 flex items-center justify-center"
//                 >
//                   <svg
//                     xmlns="http://www.w3.org/2000/svg"
//                     className="h-5 w-5 mr-2"
//                     viewBox="0 0 20 20"
//                     fill="currentColor"
//                   >
//                     <path
//                       fillRule="evenodd"
//                       d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-8.707l-3-3a1 1 0 00-1.414 1.414L10.586 9H7a1 1 0 100 2h3.586l-1.293 1.293a1 1 0 101.414 1.414l3-3a1 1 0 000-1.414z"
//                       clipRule="evenodd"
//                     />
//                   </svg>
//                   Send Message
//                 </motion.button>
//               </form>
//             </motion.div>
//           </motion.div>
//         </motion.div>

//         {/* Cyber Security SVG Illustration */}
//         <motion.div
//           initial={{ opacity: 0 }}
//           animate={{ opacity: 1 }}
//           transition={{ delay: 0.8, duration: 1 }}
//           className="mt-16 flex justify-center"
//         >
//           <svg
//             width="400"
//             height="200"
//             viewBox="0 0 400 200"
//             fill="none"
//             xmlns="http://www.w3.org/2000/svg"
//           >
//             {/* Shield with lock */}
//             <path
//               d="M200 20L220 30H240V50H220L200 60L180 50H160V30H180L200 20Z"
//               fill="none"
//               stroke="#3B82F6"
//               strokeWidth="2"
//             />
//             <rect x="185" y="40" width="30" height="20" rx="2" fill="none" stroke="#3B82F6" strokeWidth="2" />
//             <circle cx="200" cy="50" r="3" fill="#3B82F6" />
            
//             {/* Binary code background */}
//             <text x="50" y="100" fontFamily="monospace" fontSize="12" fill="#3B82F6" opacity="0.6">
//               01010101 01110011 01100101 00100000 01110011 01110100 01110010 01101111 01101110 01100111 00100000 01110000 01100001 01110011 01110011 01110111 01101111 01110010 01100100 01110011
//             </text>
            
//             {/* Cyber elements */}
//             <path d="M300 80L320 100L300 120" stroke="#3B82F6" strokeWidth="2" strokeLinecap="round" />
//             <path d="M350 80L330 100L350 120" stroke="#3B82F6" strokeWidth="2" strokeLinecap="round" />
//             <circle cx="325" cy="100" r="5" fill="none" stroke="#3B82F6" strokeWidth="2" />
//           </svg>
//         </motion.div>
//       </div>
//     </div>
//   );
// };

// export default ContactUs;

import React, { useRef, useState, useEffect, useCallback } from 'react';
import { motion } from 'framer-motion';
import { FiMail, FiPhone, FiMapPin, FiClock, FiTwitter, FiFacebook, FiLinkedin } from 'react-icons/fi';

// --- Custom Hook for Scroll-Based Rotation (VERY Animated) ---
const useScrollRotation = () => {
  const [rotation, setRotation] = useState(0);
  const lastScrollY = useRef(0);
  const rotationSpeed = 0.5; // FIVE TIMES FASTER for "very animately" effect

  const updateRotation = useCallback(() => {
    const currentScrollY = window.scrollY;
    
    // Rotate Right on Down Scroll, Rotate Left on Up Scroll
    if (currentScrollY > lastScrollY.current) {
      setRotation(prev => prev + rotationSpeed); 
    } else if (currentScrollY < lastScrollY.current) {
      setRotation(prev => prev - rotationSpeed); 
    }
    
    lastScrollY.current = currentScrollY;
  }, [rotationSpeed]);

  useEffect(() => {
    window.addEventListener('scroll', updateRotation, { passive: true });
    return () => window.removeEventListener('scroll', updateRotation);
  }, [updateRotation]);

  return rotation;
};
// ------------------------------------------

// --- Custom Intricate Architectural SVG Component (MAX Complexity) ---
const IntricateBackgroundDesign = React.memo(({ rotation }) => {
  const size = 1200; // Even LARGER size to cover the entire background
  const primaryColor = "rgba(0, 0, 0, 0.1)"; // Subtle black line on white background
  const secondaryColor = "rgba(0, 0, 0, 0.05)"; 

  const createRepeatingElements = (count, radius, color, element) => {
    return [...Array(count)].map((_, i) => (
      <g key={i} transform={`rotate(${i * (360 / count)} 50 50)`}>
        {element(radius, color)}
      </g>
    ));
  };

  // Define a single "pillar top" or "mandala segment" element
  const mandalaSegment = (radius, color) => (
    <g>
      {/* Outer Arch/Petal */}
      <path 
        d={`M50 50 L50 ${50 - radius} Q55 ${50 - radius * 0.75}, 50 ${50 - radius * 0.9} Q45 ${50 - radius * 0.75}, 50 ${50 - radius} Z`}
        stroke={color}
        strokeWidth="0.2"
        fill="none"
        transform="translate(0, -10)"
      />
      {/* Inner decorative circle */}
      <circle cx="50" cy={`${50 - radius * 0.4}`} r="1.5" stroke={color} strokeWidth="0.1" fill="none" />
    </g>
  );

  // Define a "border/frame" element inspired by the image's edges
  const frameElement = (radius, color) => (
    <g>
      <rect x="49.5" y={`${50 - radius}`} width="1" height="15" fill={color} />
      <circle cx="50" cy={`${50 - radius + 15}`} r="3" stroke={color} strokeWidth="0.1" fill="none" />
    </g>
  );

  return (
    <motion.svg
      className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-0 opacity-100 pointer-events-none" 
      width={size}
      height={size}
      viewBox="0 0 100 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      style={{ rotate: rotation }} // Applying the very fast rotation
    >
      {/* Core Rings for Structure */}
      <circle cx="50" cy="50" r="49" stroke={secondaryColor} strokeWidth="0.3" />
      <circle cx="50" cy="50" r="35" stroke={primaryColor} strokeWidth="0.5" />
      <circle cx="50" cy="50" r="20" stroke={primaryColor} strokeWidth="0.8" />
      
      {/* 1. High-Density Outer Mandala (48 repeats) */}
      {createRepeatingElements(48, 10, secondaryColor, mandalaSegment)}

      {/* 2. Main Middle Mandala (24 repeats) */}
      {createRepeatingElements(24, 25, primaryColor, mandalaSegment)}
      
      {/* 3. Inner Architectural Columns (12 repeats) */}
      {createRepeatingElements(12, 35, primaryColor, frameElement)}

      {/* Center Detail (referencing the central figure's face/ornament) */}
      <circle cx="50" cy="50" r="10" stroke={primaryColor} strokeWidth="1" />
      <path d="M50 50 L60 55 L50 60 L40 55 Z" fill={primaryColor} opacity="0.1" />

    </motion.svg>
  );
});
// ------------------------------------------

const ContactUs = () => {
  const rotation = useScrollRotation();

  // The unchanged address content
  const addressContent = (
    <p className="text-gray-700 mt-2 text-md leading-relaxed font-serif">
      **Plot No- 238, Santi Nagar, Jharapada, Koradakanta, Po- Laxmisagar, PS- Laxmisagar, Dist: Khordha, Bhubaneswar, Odisha - 751006**
    </p>
  );
  
  // NOTE: This URL is still a placeholder and MUST be replaced with a functioning Google Maps embed link + API key.
  const mapEmbedUrl = "https://www.google.com/maps/embed/v1/place?q=Plot%20No-%20238%2C%20Santi%20Nagar%2C%20Jharapada%2C%20Koradakanta%2C%20Po-%20Laxmisagar%2C%20PS-%20Laxmisagar%2C%20Dist%3A%20Khordha%2C%20Bhubaneswar%2C%20Odisha%20-%20751006&key=YOUR_API_KEY";


  return (
    // Background is now default white/transparent (bg-white)
    <div className="relative min-h-screen bg-white text-gray-900 py-16 px-4 sm:px-6 lg:px-8 overflow-hidden font-sans">
      
      {/* Background Rotating Element - Now high contrast and super fast rotation */}
      <IntricateBackgroundDesign rotation={rotation} />

      {/* --- Main Content Container --- */}
      <div className="max-w-6xl mx-auto relative z-10"> 
        
        {/* --- Header Section (Clean Black on White) --- */}
        <motion.header
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-center mb-16 p-8 bg-gray-50/90 backdrop-blur-sm rounded-xl shadow-xl border-t-8 border-black"
        >
          <h1 className="text-6xl font-extrabold tracking-tight text-black sm:text-7xl">
            Contact <span className="text-cyan-600"> CRCCF</span>
          </h1>
          <p className="mt-4 text-2xl font-light text-gray-700">
            Dedicated to your security. Reach out for assistance.
          </p>
        </motion.header>

        {/* --- Main Grid Layout --- */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          
          {/* 1. Contact Info Card */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="lg:col-span-1 p-8 bg-white/90 backdrop-blur-md rounded-2xl shadow-xl border border-gray-300"
          >
            <h2 className="text-3xl font-bold mb-6 text-black border-b pb-3 border-gray-200">
              Contact Details
            </h2>
            <div className="space-y-6">
              
              {/* Phone */}
              <div className="flex items-start">
                <FiPhone className="text-red-600 mt-1 mr-4 flex-shrink-0 text-xl" />
                <div>
                  <h3 className="font-semibold text-lg text-gray-900">Phone Support</h3>
                  <a href="tel:9777999529" className="text-red-600 hover:text-red-800 transition-colors block">+91 9777999529</a>
                </div>
              </div>

              {/* Email */}
              <div className="flex items-start">
                <FiMail className="text-red-600 mt-1 mr-4 flex-shrink-0 text-xl" />
                <div>
                  <h3 className="font-semibold text-lg text-gray-900">General Inquiry</h3>
                  <a href="mailto:info@cybercrimefoundation.org" className="text-red-600 hover:text-red-800 transition-colors block">info@cybercrimefoundation.org</a>
                </div>
              </div>

              {/* Hours */}
              <div className="flex items-start">
                <FiClock className="text-red-600 mt-1 mr-4 flex-shrink-0 text-xl" />
                <div>
                  <h3 className="font-semibold text-lg text-gray-900">Availability</h3>
                  <p className="text-gray-700">Mon - Fri: 9 AM - 6 PM</p>
                  <p className="text-gray-700">Saturday: 10 AM - 2 PM</p>
                </div>
              </div>
            </div>

            {/* Address Block */}
            <div className="mt-8 pt-6 border-t border-gray-200">
                <h3 className="font-semibold text-xl text-gray-900 flex items-center mb-2">
                    <FiMapPin className="text-red-600 mr-2" /> Official Address
                </h3>
                {addressContent}
            </div>

          </motion.div>

          {/* 2. Contact Form (Main Focus) */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="lg:col-span-2 p-10 bg-white shadow-2xl border-4 border-gray-100"
          >
            <h2 className="text-4xl font-bold mb-8 text-black">
              Send Us a Message
            </h2>
            <form className="space-y-6">
              
              {/* Two Column Name/Email */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">Your Name</label>
                  <input type="text" id="name" placeholder="Full Name" required className="w-full bg-gray-100 border border-gray-300 rounded-lg px-4 py-3 focus:ring-red-500 focus:border-red-500 text-gray-900" />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">Email Address</label>
                  <input type="email" id="email" placeholder="Email@domain.com" required className="w-full bg-gray-100 border border-gray-300 rounded-lg px-4 py-3 focus:ring-red-500 focus:border-red-500 text-gray-900" />
                </div>
              </div>
              
              {/* Phone */}
              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">Phone Number</label>
                <input type="tel" id="phone" placeholder="+91 0000000000" className="w-full bg-gray-100 border border-gray-300 rounded-lg px-4 py-3 focus:ring-red-500 focus:border-red-500 text-gray-900" />
              </div>
              
              {/* Message */}
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">Your Message</label>
                <textarea id="message" rows="4" placeholder="How can we help you?" required className="w-full bg-gray-100 border border-gray-300 rounded-lg px-4 py-3 focus:ring-red-500 focus:border-red-500 text-gray-900"></textarea>
              </div>

              {/* Submit Button */}
              <motion.button
                whileHover={{ scale: 1.02, backgroundColor: '#b91c1c' }}
                whileTap={{ scale: 0.98 }}
                type="submit"
                className="w-full bg-red-600 hover:bg-red-700 text-white font-bold py-4 rounded-xl transition-all duration-300 text-xl shadow-lg shadow-red-500/50 mt-4"
              >
                Submit Secure Query
              </motion.button>
            </form>
          </motion.div>
        </div>

        {/* --- Map and Social Section (Bottom Bar) --- */}
        <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.7 }}
            className="mt-16 grid grid-cols-1 lg:grid-cols-2 gap-10"
        >
            {/* Map */}
            <div className="rounded-2xl overflow-hidden shadow-2xl border-4 border-gray-300">
                <h3 className="font-semibold text-xl text-gray-900 p-4 bg-gray-50/90">Find Us Easily:</h3>
                <iframe
                    src={mapEmbedUrl} 
                    width="100%"
                    height="350"
                    style={{ border: 0 }}
                    allowFullScreen={true}
                    loading="lazy"
                    className="filter grayscale saturate-150 contrast-125"
                    title="Office Location Map"
                ></iframe>
            </div>

            {/* Social Links & Final Message */}
            <div className="p-8 bg-white/90 backdrop-blur-md rounded-2xl shadow-xl flex flex-col justify-center items-center text-center">
                <h3 className="text-3xl font-extrabold text-black mb-4">Stay Connected</h3>
                <p className="text-gray-700 mb-6">Follow our digital security updates across social media platforms.</p>
                <div className="flex space-x-6">
                    {/* Social Links */}
                    {[
                      {name: 'twitter', icon: FiTwitter}, 
                      {name: 'facebook', icon: FiFacebook}, 
                      {name: 'linkedin', icon: FiLinkedin}
                    ].map((social) => {
                      const Icon = social.icon;
                      return (
                          <motion.a
                              key={social.name}
                              href={`#${social.name}`} // Use proper URLs
                              whileHover={{ scale: 1.25, y: -4 }}
                              whileTap={{ scale: 0.9 }}
                              className="bg-red-600 hover:bg-red-700 transition-colors p-5 rounded-full text-white shadow-lg"
                          >
                              <Icon className="w-6 h-6"/>
                          </motion.a>
                      );
                    })}
                </div>
            </div>
        </motion.div>
      </div>
    </div>
  );
};

export default ContactUs;