// import React, { useState, useEffect, useRef } from 'react';
// import { motion, AnimatePresence } from 'framer-motion';
// import { ChevronLeft, ChevronRight, Shield, Lock, Code, BrainCircuit, Network, Fingerprint, Scale, HeartHandshake, Globe, BookOpen } from 'lucide-react';

// const slides = [
//   {
//     title: "India's Digital Defense",
//     description: "At CR Cyber Crime Foundation, we provide end-to-end cybersecurity solutions including network security, vulnerability assessments, penetration testing, and security audits for government and private sector organizations. Our team of certified ethical hackers works 24/7 to protect critical infrastructure from cyber threats.",
//     image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=2070&auto=format&fit=crop",
//     icon: <Shield className="w-12 h-12" />,
//     color: "from-blue-900/80"
//   },
//   {
//     title: "Comprehensive IT Solutions",
//     description: "We develop secure enterprise software solutions including ERP systems, mobile applications, and AI-integrated platforms with military-grade encryption. Our services include secure cloud deployments, IoT security frameworks, and blockchain-based solutions for financial institutions and government agencies.",
//     image: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?q=80&w=2070&auto=format&fit=crop",
//     icon: <Code className="w-12 h-12" />,
//     color: "from-purple-900/80"
//   },
//   {
//     title: "Cybercrime Investigation",
//     description: "Our Cybercrime Investigation & Legal Forensics Wing handles cases of financial fraud, UPI scams, identity theft, online harassment, and corporate espionage. We provide complete forensic analysis, evidence collection, and expert testimony that meets ISO 27037 standards for court admissibility.",
//     image: "https://images.unsplash.com/photo-1563206767-5b18f218e8de?q=80&w=2069&auto=format&fit=crop",
//     icon: <Fingerprint className="w-12 h-12" />,
//     color: "from-amber-900/80"
//   },
//   {
//     title: "AI-Powered Security",
//     description: "Our AI division develops predictive threat models using machine learning, deepfake detection algorithms with 98.7% accuracy, and NLP-driven chatbots for victim support. We've implemented behavioral analytics systems that detect insider threats with 94% precision across client organizations.",
//     image: "https://images.unsplash.com/photo-1677756119517-756a188d2d94?q=80&w=2070&auto=format&fit=crop",
//     icon: <BrainCircuit className="w-12 h-12" />,
//     color: "from-emerald-900/80"
//   },
//   {
//     title: "Legal & Victim Support",
//     description: "We provide complete legal support including FIR filing assistance, court representation, and drafting of DPDP-compliant privacy policies. Our victim support division offers trauma counseling, digital identity restoration, and rehabilitation services with a 92% satisfaction rate among clients.",
//     image: "https://images.unsplash.com/photo-1589216532372-1c2a36790239?q=80&w=1974&auto=format&fit=crop",
//     icon: <Scale className="w-12 h-12" />,
//     color: "from-rose-900/80"
//   }
// ];

// const services = [
//   {
//     title: "Threat Intelligence",
//     description: "Real-time monitoring of emerging cyber threats with our AI-powered dashboard",
//     icon: <BrainCircuit className="w-8 h-8" />,
//     color: "bg-gradient-to-br from-blue-600 to-indigo-700",
//     features: [
//       "Predictive threat modeling",
//       "Dark web monitoring",
//       "Attack surface analysis",
//       "Threat actor profiling"
//     ]
//   },
//   {
//     title: "Digital Forensics",
//     description: "Complete forensic investigation services for legal proceedings",
//     icon: <Fingerprint className="w-8 h-8" />,
//     color: "bg-gradient-to-br from-purple-600 to-fuchsia-700",
//     features: [
//       "Evidence collection",
//       "Metadata analysis",
//       "Data recovery",
//       "Chain-of-custody"
//     ]
//   },
//   {
//     title: "Incident Response",
//     description: "24/7 emergency response team for security breaches",
//     icon: <Lock className="w-8 h-8" />,
//     color: "bg-gradient-to-br from-red-600 to-rose-700",
//     features: [
//       "Breach containment",
//       "Root cause analysis",
//       "System restoration",
//       "Post-mortem reporting"
//     ]
//   },
//   {
//     title: "Security Audits",
//     description: "Comprehensive vulnerability assessments and compliance checks",
//     icon: <Shield className="w-8 h-8" />,
//     color: "bg-gradient-to-br from-amber-600 to-orange-700",
//     features: [
//       "Penetration testing",
//       "Configuration reviews",
//       "Policy compliance",
//       "Remediation planning"
//     ]
//   },
//   {
//     title: "Cyber Law Advisory",
//     description: "Legal compliance and policy development services",
//     icon: <Scale className="w-8 h-8" />,
//     color: "bg-gradient-to-br from-green-600 to-teal-700",
//     features: [
//       "GDPR/DPDP compliance",
//       "Contract drafting",
//       "Incident response planning",
//       "Employee training"
//     ]
//   },
//   {
//     title: "Victim Support",
//     description: "Counseling and recovery services for cybercrime survivors",
//     icon: <HeartHandshake className="w-8 h-8" />,
//     color: "bg-gradient-to-br from-gray-800 to-black",
//     features: [
//       "Trauma counseling",
//       "Case management",
//       "Legal assistance",
//       "Digital identity restoration"
//     ]
//   }
// ];

// const teamMembers = [
//   {
//     name: "SANDEEP KUMAR",
//     designation: "Chief Cyber Crime IT Officer",
//     department: "Administration",
//     image: "https://res.cloudinary.com/dlvmo4u97/image/upload/v1755324124/inic3gclfxqpfic5g83j.jpg",
//     bio: "15+ years experience in cybersecurity architecture and threat intelligence. Former head of security at a Fortune 500 company.",
//     expertise: ["Network Security", "Threat Modeling", "Security Architecture", "Team Leadership"]
//   },
//   {
//     name: "RAJANI KUMARI",
//     designation: "Chairman",
//     department: "Administration",
//     image: "https://res.cloudinary.com/dlvmo4u97/image/upload/v1755323183/mtt4r0w4ayccz7uoancd.jpg",
//     bio: "Machine learning specialist focused on anomaly detection and behavioral analytics. PhD in Computer Science from MIT.",
//     expertise: ["Machine Learning", "Deepfake Detection", "Behavioral Analytics"]
//   },
//   {
//     name: "RABI NARAYAN",
//     designation: "Director",
//     department: "Administration",
//     image: "https://res.cloudinary.com/dlvmo4u97/image/upload/v1754056909/zg4xzlg45ervflxtlptm.jpg",
//     bio: "Certified Ethical Hacker with 8 years experience in red team operations and vulnerability assessment.",
//     expertise: ["Penetration Testing", "Red Teaming", "Vulnerability Research"]
//   },
//   {
//     name: "SONALI RANA",
//     designation: "HR Manager",
//     department: "HR Department",
//     image: "https://res.cloudinary.com/dlvmo4u97/image/upload/v1754056688/momkasgodx6njos2fbjk.jpg",
//     bio: "Digital forensics expert specializing in financial fraud investigations and evidence recovery.",
//     expertise: ["Digital Forensics", "Incident Response", "Evidence Handling"]
//   },
//   {
//     name: "LAXMIPRIYA SAHOO",
//     designation: "Office Executive",
//     department: "HR Department",
//     image: "https://res.cloudinary.com/dlvmo4u97/image/upload/v1755325467/fcf7djvqa5odv2d2umlm.jpg",
//     bio: "Legal specialist in data protection laws and cybercrime legislation across multiple jurisdictions.",
//     expertise: ["GDPR Compliance", "Cyber Law", "Privacy Regulations"]
//   },
//   {
//     name: "SNEHASISH SATAPATHY",
//     designation: "SDE 1",
//     department: "IT Department",
//     image: "https://res.cloudinary.com/dlvmo4u97/image/upload/v1754115728/ru0tnbhheae4hwtwtf8m.jpg",
//     bio: "Cloud security architect certified in AWS, Azure and GCP security solutions.",
//     expertise: ["Cloud Security", "Container Security", "Serverless Architecture"]
//   },
//   {
//     name: "SATYARANJAN PALLAI",
//     designation: "SDE 1",
//     department: "IT Department",
//     image: "https://res.cloudinary.com/dlvmo4u97/image/upload/v1755323810/l6mwyaqryt1xucrmntzr.jpg",
//     bio: "Data protection specialist ensuring compliance with global privacy regulations.",
//     expertise: ["Data Privacy", "Risk Assessment", "Compliance Audits"]
//   },
//   {
//     name: "E.BISWAJEET KUMAR",
//     designation: "SOC Manager",
//     department: "Threat Monitoring",
//     image: "https://res.cloudinary.com/dlvmo4u97/image/upload/v1755323531/bpxh0eslp3ow8w2qivxb.jpg",
//     bio: "Security Operations Center leader with expertise in SIEM solutions and threat hunting.",
//     expertise: ["SIEM Management", "Threat Hunting", "SOC Operations"]
//   },
//   {
//     name: "PRABIR KU MOHANTA",
//     designation: "SDE 1",
//     department: "IT Department",
//     image: "https://res.cloudinary.com/dlvmo4u97/image/upload/v1755323658/wtwufd70j7gi2vv7zmga.jpg",
//     bio: "Incident response commander with experience handling major data breaches and ransomware attacks.",
//     expertise: ["Incident Response", "Breach Containment", "Crisis Management"]
//   },
//   {
//     name: "SUBHANKAR JENA",
//     designation: "SDE 1",
//     department: "IT Department",
//     image: "https://res.cloudinary.com/dlvmo4u97/image/upload/v1755324376/uqvgucdl3zanwcc8is46.jpg",
//     bio: "Incident response commander with experience handling major data breaches and ransomware attacks.",
//     expertise: ["Incident Response", "Breach Containment", "Crisis Management"]
//   }
// ];

// const Home = () => {
//   const [activeIndex, setActiveIndex] = useState(0);
//   const [isHovered, setIsHovered] = useState(false);
//   const containerRef = useRef(null);
//   const [activeTeamMember, setActiveTeamMember] = useState(null);
//   const [currentSlide, setCurrentSlide] = useState(0);
//   const [visibleCards, setVisibleCards] = useState(3);
//   const [isAutoScrolling, setIsAutoScrolling] = useState(true);
//   const autoScrollInterval = useRef(null);

//   // Calculate total slides needed for team section
//   const totalSlides = Math.ceil(teamMembers.length / visibleCards);

//   // Auto-advance slides for team section
//   useEffect(() => {
//     if (isAutoScrolling && totalSlides > 1) {
//       autoScrollInterval.current = setInterval(() => {
//         setCurrentSlide(prev => (prev + 1) % totalSlides);
//       }, 5000); // Change slide every 5 seconds
//     } else {
//       clearInterval(autoScrollInterval.current);
//     }

//     return () => clearInterval(autoScrollInterval.current);
//   }, [isAutoScrolling, totalSlides]);

//   // Auto-advance slides for main slider
//   useEffect(() => {
//     const interval = setInterval(() => {
//       if (!isHovered) {
//         setActiveIndex((prev) => (prev + 1) % slides.length);
//       }
//     }, 5000);
//     return () => clearInterval(interval);
//   }, [isHovered, slides.length]);

//   // Handle responsive card count for team section
//   useEffect(() => {
//     const updateVisibleCards = () => {
//       if (window.innerWidth < 640) {
//         setVisibleCards(1);
//       } else if (window.innerWidth < 1024) {
//         setVisibleCards(2);
//       } else {
//         setVisibleCards(3);
//       }
//     };

//     updateVisibleCards();
//     window.addEventListener('resize', updateVisibleCards);
//     return () => window.removeEventListener('resize', updateVisibleCards);
//   }, []);

//   // [FIX ADDED] Reset current slide if it becomes invalid on resize
//   useEffect(() => {
//     if (currentSlide >= totalSlides) {
//       setCurrentSlide(Math.max(0, totalSlides - 1));
//     }
//   }, [totalSlides, currentSlide]);

//   // Handle slide navigation for team section
//   const nextSlide = () => {
//     setCurrentSlide((prev) => (prev + 1) % totalSlides);
//   };

//   const prevSlide = () => {
//     setCurrentSlide((prev) => (prev - 1 + totalSlides) % totalSlides);
//   };

//   // Get currently visible team members
//   const getVisibleMembers = () => {
//     const start = currentSlide * visibleCards;
//     const end = start + visibleCards;
//     return teamMembers.slice(start, end);
//   };

//   const visibleMembers = getVisibleMembers();

//   // Card animation variants for team section
//   const cardVariants = {
//     hidden: { opacity: 0, y: 50 },
//     visible: (i) => ({
//       opacity: 1,
//       y: 0,
//       transition: {
//         delay: i * 0.1,
//         duration: 0.6,
//         ease: "easeOut"
//       }
//     }),
//     hover: {
//       y: -10,
//       scale: 1.02,
//       transition: { duration: 0.3 }
//     }
//   };

//   // Slider animation variants for team section
//   const sliderVariants = {
//     hidden: { opacity: 0 },
//     visible: {
//       opacity: 1,
//       transition: {
//         staggerChildren: 0.1,
//         when: "beforeChildren"
//       }
//     }
//   };

//   return (
//     <div className="relative overflow-hidden">
//       {/* Animated Background Elements */}
//       <div className="fixed inset-0 -z-10 overflow-hidden">
//         {/* Floating circles */}
//         <motion.div
//           className="absolute top-1/4 left-1/4 w-64 h-64 rounded-full bg-blue-500/10 blur-3xl"
//           animate={{
//             x: [0, 50, 0],
//             y: [0, 30, 0],
//             scale: [1, 1.1, 1]
//           }}
//           transition={{
//             duration: 15,
//             repeat: Infinity,
//             ease: "easeInOut"
//           }}
//         />
//         <motion.div
//           className="absolute top-3/4 right-1/4 w-96 h-96 rounded-full bg-purple-500/10 blur-3xl"
//           animate={{
//             x: [0, -40, 0],
//             y: [0, -20, 0],
//             scale: [1, 1.2, 1]
//           }}
//           transition={{
//             duration: 20,
//             repeat: Infinity,
//             ease: "easeInOut"
//           }}
//         />
//         <motion.div
//           className="absolute bottom-1/4 right-1/3 w-80 h-80 rounded-full bg-emerald-500/10 blur-3xl"
//           animate={{
//             x: [0, 30, 0],
//             y: [0, 40, 0],
//             scale: [1, 1.15, 1]
//           }}
//           transition={{
//             duration: 18,
//             repeat: Infinity,
//             ease: "easeInOut"
//           }}
//         />

//         {/* Grid pattern */}
//         <div className="absolute inset-0 opacity-5">
//           <svg
//             className="w-full h-full"
//             xmlns="http://www.w3.org/2000/svg"
//           >
//             <defs>
//               <pattern
//                 id="grid-pattern"
//                 width="40"
//                 height="40"
//                 patternUnits="userSpaceOnUse"
//               >
//                 <path
//                   d="M 40 0 L 0 0 0 40"
//                   fill="none"
//                   stroke="currentColor"
//                   strokeWidth="0.5"
//                 />
//               </pattern>
//             </defs>
//             <rect width="100%" height="100%" fill="url(#grid-pattern)" />
//           </svg>
//         </div>
//       </div>

//       {/* Full-screen Slider */}
//       <div
//         ref={containerRef}
//         className="relative w-full h-[60vh] sm:h-[70vh] md:h-[80vh] border rounded-md mt-16 sm:mt-10 overflow-hidden"
//         onMouseEnter={() => setIsHovered(true)}
//         onMouseLeave={() => setIsHovered(false)}
//       >
//         <AnimatePresence mode="wait">
//           <motion.div
//             key={activeIndex}
//             className="absolute inset-0 w-full h-full"
//             initial={{ opacity: 0, scale: 1.1 }}
//             animate={{ opacity: 1, scale: 1 }}
//             exit={{ opacity: 0, scale: 0.9 }}
//             transition={{ duration: 1.2, ease: "easeInOut" }}
//           >
//             {/* Background Image */}
//             <div className="absolute inset-0">
//               <img
//                 src={slides[activeIndex].image}
//                 alt={slides[activeIndex].title}
//                 className="w-full h-full object-cover border border-transparent rounded-md"
//               />
//               <div className={`absolute inset-0 bg-gradient-to-r ${slides[activeIndex].color} via-black/60 to-black/30`}></div>
//             </div>

//             {/* Content Container */}
//             <div className="relative h-full flex items-center px-4 sm:px-8 md:px-16 lg:px-24 z-10">
//               <motion.div
//                 key={`content-${activeIndex}`}
//                 initial={{ opacity: 0, y: 60, x: -50 }}
//                 animate={{ opacity: 1, y: 0, x: 0 }}
//                 exit={{ opacity: 0, y: -60, x: 50 }}
//                 transition={{
//                   duration: 0.8,
//                   delay: 0.3,
//                   ease: "easeOut"
//                 }}
//                 className="max-w-4xl text-white"
//               >
//                 {/* Icon - Hidden on small screens */}
//                 <motion.div
//                   initial={{ scale: 0, rotate: -180 }}
//                   animate={{ scale: 1, rotate: 0 }}
//                   transition={{
//                     duration: 0.6,
//                     delay: 0.5,
//                     type: "spring",
//                     stiffness: 200
//                   }}
//                   className="mb-4 sm:mb-6 text-white opacity-90 hidden sm:block"
//                 >
//                   {slides[activeIndex].icon}
//                 </motion.div>

//                 {/* Title */}
//                 <motion.h1
//                   className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold leading-tight mb-4 sm:mb-6"
//                   initial={{ opacity: 0, y: 30 }}
//                   animate={{ opacity: 1, y: 0 }}
//                   transition={{
//                     duration: 0.6,
//                     delay: 0.6
//                   }}
//                 >
//                   {slides[activeIndex].title}
//                 </motion.h1>

//                 {/* Description - Shorter on mobile */}
//                 <motion.p
//                   className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-200 mb-4 sm:mb-8 leading-relaxed max-w-3xl line-clamp-3 sm:line-clamp-none"
//                   initial={{ opacity: 0, y: 30 }}
//                   animate={{ opacity: 1, y: 0 }}
//                   transition={{
//                     duration: 0.6,
//                     delay: 0.8
//                   }}
//                 >
//                   {slides[activeIndex].description}
//                 </motion.p>

//                 {/* CTA Button - Smaller on mobile */}
//                 <motion.div
//                   initial={{ opacity: 0, y: 30 }}
//                   animate={{ opacity: 1, y: 0 }}
//                   transition={{
//                     duration: 0.6,
//                     delay: 1
//                   }}
//                 >
//                   <motion.a
//                     href="#services"
//                     className="inline-flex items-center bg-white hover:bg-gray-100 text-blue-600 font-semibold py-2 px-4 sm:py-3 sm:px-6 rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl text-sm sm:text-base"
//                     whileHover={{
//                       scale: 1.05,
//                       boxShadow: "0 20px 40px rgba(0,0,0,0.2)"
//                     }}
//                     whileTap={{ scale: 0.95 }}
//                   >
//                     Explore Services
//                     <ChevronRight className="ml-2 w-4 h-4 sm:w-5 sm:h-5" />
//                   </motion.a>
//                 </motion.div>
//               </motion.div>
//             </div>
//           </motion.div>
//         </AnimatePresence>

//         {/* Navigation Arrows - Smaller on mobile */}
//         <button
//           onClick={() => setActiveIndex((prev) => (prev - 1 + slides.length) % slides.length)}
//           className="absolute left-2 sm:left-4 md:left-8 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/40 text-white p-2 sm:p-3 rounded-full transition-all duration-300 backdrop-blur-sm z-20 group"
//           aria-label="Previous slide"
//         >
//           <ChevronLeft size={20} className="sm:w-6 sm:h-6 group-hover:scale-110 transition-transform" />
//         </button>
//         <button
//           onClick={() => setActiveIndex((prev) => (prev + 1) % slides.length)}
//           className="absolute right-2 sm:right-4 md:right-8 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/40 text-white p-2 sm:p-3 rounded-full transition-all duration-300 backdrop-blur-sm z-20 group"
//           aria-label="Next slide"
//         >
//           <ChevronRight size={20} className="sm:w-6 sm:h-6 group-hover:scale-110 transition-transform" />
//         </button>

//         {/* Dot Indicators - Smaller on mobile */}
//         <div className="absolute bottom-4 sm:bottom-8 left-1/2 -translate-x-1/2 flex space-x-2 sm:space-x-3 z-20">
//           {slides.map((_, i) => (
//             <button
//               key={i}
//               onClick={() => setActiveIndex(i)}
//               className={`w-2 h-2 sm:w-3 sm:h-3 rounded-full transition-all duration-300 ${i === activeIndex
//                   ? 'bg-white scale-125 shadow-lg'
//                   : 'bg-white/50 hover:bg-white/80 hover:scale-110'
//                 }`}
//               aria-label={`Go to slide ${i + 1}`}
//             />
//           ))}
//         </div>

//         {/* Progress Bar */}
//         <div className="absolute bottom-0 left-0 w-full h-1 bg-black/20 z-20">
//           <motion.div
//             className="h-full bg-white"
//             initial={{ width: "0%" }}
//             animate={{ width: "100%" }}
//             transition={{
//               duration: 5,
//               ease: "linear",
//               repeat: Infinity
//             }}
//             key={activeIndex}
//           />
//         </div>
//       </div>

//       {/* Content Below Slider */}
//       <div className="relative bg-white/80 backdrop-blur-sm">
//         <div className="max-w-7xl mx-auto px-6 py-24">
//           {/* Services Section */}
//           <section id="services" className="mb-24">
//             <motion.div
//               initial={{ opacity: 0, y: 50 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               viewport={{ once: true, margin: "-100px" }}
//               transition={{ duration: 0.8 }}
//               className="text-center mb-16"
//             >
//               <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl mb-4">
//                 Our Comprehensive Cybersecurity Services
//               </h2>
//               <p className="text-xl text-gray-600 max-w-3xl mx-auto">
//                 End-to-end protection combining technology, legal expertise, and human compassion
//               </p>
//             </motion.div>

//             <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
//               {services.map((service, i) => (
//                 <motion.div
//                   key={i}
//                   initial={{ opacity: 0, y: 50 }}
//                   whileInView={{ opacity: 1, y: 0 }}
//                   viewport={{ once: true }}
//                   transition={{ duration: 0.6, delay: i * 0.1 }}
//                   whileHover={{ y: -10, scale: 1.02 }}
//                   className={`${service.color} p-8 rounded-2xl text-white shadow-xl hover:shadow-2xl transition-all duration-300 h-full relative overflow-hidden`}
//                 >
//                   {/* Animated service card background */}
//                   <motion.div
//                     className="absolute -inset-1 opacity-20"
//                     animate={{
//                       x: [0, 10, 0],
//                       y: [0, 5, 0],
//                       rotate: [0, 2, 0]
//                     }}
//                     transition={{
//                       duration: 10 + i * 2,
//                       repeat: Infinity,
//                       ease: "easeInOut"
//                     }}
//                   >
//                     <div className="w-full h-full bg-white/30 rounded-xl" />
//                   </motion.div>

//                   <div className="relative z-10">
//                     <div className="mb-6">
//                       {service.icon}
//                     </div>
//                     <h3 className="text-2xl font-bold mb-3">{service.title}</h3>
//                     <p className="text-gray-100 mb-6 leading-relaxed">{service.description}</p>
//                     <ul className="space-y-2">
//                       {service.features.map((feature, j) => (
//                         <li key={j} className="flex items-start">
//                           <div className="w-2 h-2 bg-white rounded-full mt-2 mr-3 flex-shrink-0"></div>
//                           <span className="text-gray-100">{feature}</span>
//                         </li>
//                       ))}
//                     </ul>
//                   </div>
//                 </motion.div>
//               ))}
//             </div>
//           </section>

//           {/* Stats Section */}
//           <section className="mb-24">
//             <motion.div
//               initial={{ opacity: 0 }}
//               whileInView={{ opacity: 1 }}
//               viewport={{ once: true }}
//               transition={{ duration: 0.6 }}
//               className="grid grid-cols-2 md:grid-cols-4 gap-6"
//             >
//               {[
//                 { value: "500+", label: "Enterprise Clients" },
//                 { value: "10K+", label: "Threats Neutralized" },
//                 { value: "24/7", label: "Monitoring Coverage" },
//                 { value: "98%", label: "Client Satisfaction" }
//               ].map((stat, i) => (
//                 <motion.div
//                   key={i}
//                   initial={{ y: 50, opacity: 0 }}
//                   whileInView={{ y: 0, opacity: 1 }}
//                   viewport={{ once: true }}
//                   transition={{ delay: i * 0.1, duration: 0.6 }}
//                   whileHover={{ scale: 1.05 }}
//                   className="bg-white p-8 rounded-2xl shadow-lg text-center hover:shadow-xl transition-all duration-300 relative overflow-hidden"
//                 >
//                   {/* Animated stat card background */}
//                   <motion.div
//                     className="absolute inset-0 opacity-10"
//                     animate={{
//                       scale: [1, 1.05, 1],
//                       rotate: [0, 1, 0]
//                     }}
//                     transition={{
//                       duration: 15 + i * 3,
//                       repeat: Infinity,
//                       ease: "easeInOut"
//                     }}
//                   >
//                     <div className="w-full h-full bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl" />
//                   </motion.div>

//                   <div className="relative z-10">
//                     <div className="text-4xl font-bold text-gray-900 mb-2">{stat.value}</div>
//                     <div className="text-gray-600">{stat.label}</div>
//                   </div>
//                 </motion.div>
//               ))}
//             </motion.div>
//           </section>

//           {/* Enhanced Team Section */}
//           <section className="mb-24 px-4 sm:px-6 relative">
//             <motion.div
//               initial={{ opacity: 0, y: 50 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               viewport={{ once: true }}
//               transition={{ duration: 0.8 }}
//               className="text-center mb-16"
//             >
//               <motion.div
//                 initial={{ scale: 0.9 }}
//                 whileInView={{ scale: 1 }}
//                 transition={{ duration: 0.6 }}
//                 className="inline-block mb-6"
//               >
//                 <div className="relative">
//                   <div className="absolute -inset-4 bg-blue-100 rounded-full blur-lg opacity-50"></div>
//                   <Shield className="relative w-12 h-12 text-blue-600 mx-auto" />
//                 </div>
//               </motion.div>
//               <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
//                 Meet Our Team
//               </h2>
//               <p className="text-xl text-gray-600 max-w-3xl mx-auto">
//                 The brilliant minds protecting our digital future and creating innovative websites
//               </p>
//             </motion.div>

//             <div className="relative">
//               {/* Navigation Arrows - Enhanced & [FIXED] */}
//               <motion.button
//                 onClick={prevSlide}
//                 className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 z-10 bg-white p-3 rounded-full shadow-lg hover:bg-blue-50 transition-colors group"
//                 aria-label="Previous slide"
//                 whileHover={{ scale: 1.1 }}
//               >
//                 <ChevronLeft className="w-6 h-6 text-gray-700 group-hover:text-blue-600 transition-colors" />
//               </motion.button>
//               <motion.button
//                 onClick={nextSlide}
//                 className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 z-10 bg-white p-3 rounded-full shadow-lg hover:bg-blue-50 transition-colors group"
//                 aria-label="Next slide"
//                 whileHover={{ scale: 1.1 }}
//               >
//                 <ChevronRight className="w-6 h-6 text-gray-700 group-hover:text-blue-600 transition-colors" />
//               </motion.button>

//               {/* Team Cards - Enhanced with Auto-scroll */}
//               <div className="relative overflow-hidden py-4">
//                 <AnimatePresence mode="wait">
//                   <motion.div
//                     key={currentSlide}
//                     className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
//                     variants={sliderVariants}
//                     initial="hidden"
//                     animate="visible"
//                     exit="hidden"
//                     transition={{ duration: 0.5 }}
//                   >
//                     {visibleMembers.map((member, index) => (
//                       <motion.div
//                         key={member.name}
//                         custom={index}
//                         variants={cardVariants}
//                         whileHover="hover"
//                         className="bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-300 relative group cursor-pointer"
//                         onClick={() => setActiveTeamMember(member)}
//                       >
//                         {/* Glow effect on hover */}
//                         <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300">
//                           <div className="absolute -inset-1 bg-gradient-to-r from-blue-400 to-purple-400 rounded-2xl blur-md"></div>
//                         </div>

//                         {/* Card content */}
//                         <div className="relative bg-white rounded-2xl h-full">
//                           <div className="relative h-64 w-full overflow-hidden rounded-t-2xl">
//                             <motion.img
//                               src={member.image}
//                               alt={member.name}
//                               className="w-full h-full object-cover"
//                               initial={{ scale: 1 }}
//                               whileHover={{ scale: 1.05 }}
//                               transition={{ duration: 0.3 }}
//                             />
//                             <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
//                             <div className="absolute bottom-0 left-0 p-6">
//                               <h3 className="text-xl font-bold text-white">{member.name}</h3>
//                               <p className="text-blue-200 text-sm">{member?.designation}</p>
//                             </div>
//                             {/* Floating icon */}
//                             <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm p-2 rounded-full shadow-md">
//                               {member.designation.includes('AI') ? (
//                                 <BrainCircuit className="w-6 h-6 text-blue-600" />
//                               ) : member.designation.includes('Legal') ? (
//                                 <Scale className="w-6 h-6 text-blue-600" />
//                               ) : member.designation.includes('Forensic') ? (
//                                 <Fingerprint className="w-6 h-6 text-blue-600" />
//                               ) : (
//                                 <Shield className="w-6 h-6 text-blue-600" />
//                               )}
//                             </div>
//                           </div>

//                           <div className="p-6">
//                             <div className="flex items-center mb-3">
//                               <span className="text-sm font-medium text-gray-500 bg-gray-100 px-3 py-1 rounded-full">
//                                 {member?.department}
//                               </span>
//                             </div>

//                             <div className="flex flex-wrap gap-2 mb-4">
//                               {member.expertise.slice(0, 3).map((skill, i) => (
//                                 <motion.span
//                                   key={i}
//                                   whileHover={{ scale: 1.05 }}
//                                   className="inline-block px-3 py-1 text-xs font-medium bg-blue-50 text-blue-700 rounded-full"
//                                 >
//                                   {skill}
//                                 </motion.span>
//                               ))}
//                               {member.expertise.length > 3 && (
//                                 <span className="inline-block px-3 py-1 text-xs font-medium bg-gray-100 text-gray-700 rounded-full">
//                                   +{member.expertise.length - 3} more
//                                 </span>
//                               )}
//                             </div>

//                             <motion.div
//                               whileHover={{ scale: 1.02 }}
//                               whileTap={{ scale: 0.98 }}
//                               className="w-full mt-2 py-2 text-sm font-medium text-blue-600 hover:text-blue-700 transition-colors text-left"
//                             >
//                               View Profile →
//                             </motion.div>
//                           </div>
//                         </div>
//                       </motion.div>
//                     ))}
//                   </motion.div>
//                 </AnimatePresence>
//               </div>
//             </div>

//             {/* Enhanced Dots Indicator */}
//             {totalSlides > 1 && (
//               <div className="flex justify-center mt-8 space-x-2">
//                 {Array.from({ length: totalSlides }).map((_, index) => (
//                   <motion.button
//                     key={index}
//                     onClick={() => setCurrentSlide(index)}
//                     className={`w-3 h-3 rounded-full transition-all ${index === currentSlide ? 'bg-blue-600' : 'bg-gray-300'}`}
//                     aria-label={`Go to slide ${index + 1}`}
//                     whileHover={{ scale: 1.2 }}
//                     whileTap={{ scale: 0.9 }}
//                   />
//                 ))}
//               </div>
//             )}

//             {/* Auto-scroll control */}
//             {totalSlides > 1 && (
//               <div className="flex justify-center mt-6">
//                 <button
//                   onClick={() => setIsAutoScrolling(!isAutoScrolling)}
//                   className="flex items-center text-sm text-gray-600 hover:text-blue-600 transition-colors"
//                 >
//                   {isAutoScrolling ? (
//                     <>
//                       <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
//                         <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zM7 8a1 1 0 012 0v4a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v4a1 1 0 102 0V8a1 1 0 00-1-1z" clipRule="evenodd" />
//                       </svg>
//                       Pause Auto-scroll
//                     </>
//                   ) : (
//                     <>
//                       <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
//                         <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" />
//                       </svg>
//                       Play Auto-scroll
//                     </>
//                   )}
//                 </button>
//               </div>
//             )}
//           </section>

//           {/* Enhanced Team Member Modal */}
//           <AnimatePresence>
//   {activeTeamMember && (
//     <motion.div
//       initial={{ opacity: 0 }}
//       animate={{ opacity: 1 }}
//       exit={{ opacity: 0 }}
//       className="fixed inset-0 z-50 flex items-center md:pt-300 pt-[3500px] justify-center bg-black/40 backdrop-blur-md"
//       onClick={() => setActiveTeamMember(null)}
//     >
//       {/* Bottom sheet modal */}
//       <motion.div
//         initial={{ y: "100%" }}
//         animate={{ y: 0 }}
//         exit={{ y: "100%" }}
//         transition={{ type: "spring", stiffness: 240, damping: 26 }}
//         drag="y"
//         dragConstraints={{ top: 0, bottom: 0 }}
//         dragElastic={0.16}
//         onDragEnd={(event, info) => {
//           if (info.offset.y > 120) setActiveTeamMember(null);
//         }}
//         className="bg-white w-full max-w-md md:max-w-xl rounded-t-3xl shadow-2xl relative max-h-[92vh] overflow-y-auto px-6 pt-3 pb-7"
//         onClick={e => e.stopPropagation()}
//       >
//         {/* Handle bar */}
//         <div className="flex justify-center mb-4">
//           <div className="w-10 h-1.5 bg-gray-300 rounded-full" />
//         </div>

//         {/* Header */}
//         <div className="w-full bg-gradient-to-r from-blue-600 to-blue-800 rounded-t-2xl flex flex-col items-center justify-center pt-5 pb-5 mb-1">
//           <img
//             src={activeTeamMember.image}
//             alt={activeTeamMember.name}
//             className="w-20 h-20 rounded-full border-4 border-white shadow-lg object-cover mb-3"
//           />
//           <h3 className="text-lg md:text-2xl font-bold text-white">{activeTeamMember.name}</h3>
//           <p className="text-blue-200 text-sm">{activeTeamMember.designation}</p>
//         </div>

//         {/* Department */}
//         {activeTeamMember.department && (
//           <p className="text-center text-gray-500 mb-4 text-sm">
//             {activeTeamMember.department}
//           </p>
//         )}

//         {/* Bio */}
//         <div className="mb-5">
//           <h4 className="text-md font-semibold text-gray-900 mb-2 text-center">Professional Bio</h4>
//           <p className="text-gray-600 text-center whitespace-pre-line">{activeTeamMember.bio}</p>
//         </div>

//         {/* Expertise */}
//         {activeTeamMember.expertise?.length > 0 && (
//           <div className="mb-5">
//             <h4 className="text-md font-semibold text-gray-900 mb-2 text-center">Areas of Expertise</h4>
//             <div className="flex flex-wrap justify-center gap-2">
//               {activeTeamMember.expertise.map((skill, i) => (
//                 <span
//                   key={i}
//                   className="px-3 py-1 rounded-full text-xs font-medium bg-blue-50 text-blue-800 shadow"
//                 >
//                   {skill}
//                 </span>
//               ))}
//             </div>
//           </div>
//         )}

//         {/* Close Button */}
//         <div className="flex justify-center mt-3">
//           <motion.button
//             whileHover={{ scale: 1.05 }}
//             whileTap={{ scale: 0.97 }}
//             className="px-5 py-2.5 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg shadow transition"
//             onClick={() => setActiveTeamMember(null)}
//           >
//             Close Profile
//           </motion.button>
//         </div>
//       </motion.div>
//     </motion.div>
//   )}
// </AnimatePresence>

//           {/* CTA Section */}
//           <motion.section
//             initial={{ opacity: 0, scale: 0.95 }}
//             whileInView={{ opacity: 1, scale: 1 }}
//             viewport={{ once: true }}
//             transition={{ duration: 0.6 }}
//             className="bg-gradient-to-r from-blue-600 to-blue-800 rounded-3xl p-12 text-center text-white shadow-2xl relative overflow-hidden"
//           >
//             {/* Animated CTA background */}
//             <motion.div
//               className="absolute inset-0 opacity-20"
//               animate={{
//                 x: [0, 20, 0],
//                 y: [0, 10, 0],
//                 scale: [1, 1.02, 1]
//               }}
//               transition={{
//                 duration: 20,
//                 repeat: Infinity,
//                 ease: "easeInOut"
//               }}
//             >
//               <div className="w-full h-full bg-white/30 rounded-3xl" />
//             </motion.div>

//             <div className="relative z-10">
//               <h2 className="text-3xl font-bold mb-4">Ready to Secure Your Organization?</h2>
//               <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
//                 Our cybersecurity experts are available 24/7 to assess your needs and provide customized solutions.
//               </p>
//               <div className="flex flex-col sm:flex-row justify-center gap-4">
//                 <motion.a
//                   href="/contact-us"
//                   className="bg-white text-blue-600 hover:bg-gray-100 font-medium py-3 px-8 rounded-lg transition-colors duration-300 relative z-10"
//                   whileHover={{ scale: 1.05 }}
//                   whileTap={{ scale: 0.95 }}
//                 >
//                   Contact Our Team
//                 </motion.a>
//                 <motion.a
//                   href="#services"
//                   className="bg-transparent hover:bg-blue-700 border-2 border-white text-white font-medium py-3 px-8 rounded-lg transition-colors duration-300 relative z-10"
//                   whileHover={{ scale: 1.05 }}
//                   whileTap={{ scale: 0.95 }}
//                 >
//                   View All Services
//                 </motion.a>
//               </div>
//             </div>
//           </motion.section>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Home;

import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ChevronLeft,
  ChevronRight,
  Shield,
  Lock,
  Code,
  BrainCircuit,
  Fingerprint,
  Scale,
  HeartHandshake,
  Cpu,
  ShieldCheck,
  Book,
  FileSearch,
  MessageSquare,
  BookOpen,
  Wrench,
  ShieldAlert,
  Newspaper,
  FileText,
  Building,
  GraduationCap,
  Users2,
  Star,
  Monitor,
  Users,
  Gavel,
} from "lucide-react";
import OurTeam from "./OurTeam";
import Indux from "./Indux";
// Adjust the import path as needed

const slides = [
  {
    title: "India's Digital Defense",
    description:
      "At CR Cyber Crime Foundation, we provide end-to-end cybersecurity solutions including network security, vulnerability assessments, penetration testing, and security audits for government and private sector organizations. Our team of certified ethical hackers works 24/7 to protect critical infrastructure from cyber threats.",
    image:
      "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=2070&auto=format&fit=crop",
    icon: <Shield className="w-12 h-12" />,
    color: "from-blue-900/80",
  },
  {
    title: "Comprehensive IT Solutions",
    description:
      "We develop secure enterprise software solutions including ERP systems, mobile applications, and AI-integrated platforms with military-grade encryption. Our services include secure cloud deployments, IoT security frameworks, and blockchain-based solutions for financial institutions and government agencies.",
    image:
      "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?q=80&w=2070&auto=format&fit=crop",
    icon: <Code className="w-12 h-12" />,
    color: "from-purple-900/80",
  },
  {
    title: "Cybercrime Investigation",
    description:
      "Our Cybercrime Investigation & Legal Forensics Wing handles cases of financial fraud, UPI scams, identity theft, online harassment, and corporate espionage. We provide complete forensic analysis, evidence collection, and expert testimony that meets ISO 27037 standards for court admissibility.",
    image:
      "https://images.unsplash.com/photo-1563206767-5b18f218e8de?q=80&w=2069&auto=format&fit=crop",
    icon: <Fingerprint className="w-12 h-12" />,
    color: "from-amber-900/80",
  },
  {
    title: "AI-Powered Security",
    description:
      "Our AI division develops predictive threat models using machine learning, deepfake detection algorithms with 98.7% accuracy, and NLP-driven chatbots for victim support. We've implemented behavioral analytics systems that detect insider threats with 94% precision across client organizations.",
    image:
      "https://images.unsplash.com/photo-1677756119517-756a188d2d94?q=80&w=2070&auto=format&fit=crop",
    icon: <BrainCircuit className="w-12 h-12" />,
    color: "from-emerald-900/80",
  },
  {
    title: "Legal & Victim Support",
    description:
      "We provide complete legal support including FIR filing assistance, court representation, and drafting of DPDP-compliant privacy policies. Our victim support division offers trauma counseling, digital identity restoration, and rehabilitation services with a 92% satisfaction rate among clients.",
    image: "https://i.ytimg.com/vi/vL1EyaeqGw8/maxresdefault.jpg",
    icon: <Scale className="w-12 h-12" />,
    color: "from-rose-900/80",
  },
];

// const services = [
//   {
//     title: "Victim Support",
//     description: "Counseling and recovery services for cybercrime survivors",
//     icon: <HeartHandshake className="w-8 h-8" />,
//     color: "bg-gradient-to-br from-gray-800 to-black",
//     features: ["Trauma counseling", "Case management"],
//   },
//   {
//     title: "Legal Support",
//     description: "Comprehensive legal assistance for cybercrime-related cases",
//     icon: <Gavel className="w-8 h-8" />,
//     color: "bg-gradient-to-br from-indigo-600 to-blue-700",
//     features: ["Legal consultation services", "Court representation"],
//   },
//   {
//     title: "Our Client",
//     description:
//       "Dedicated client relationship management and support services",
//     icon: <Users className="w-8 h-8" />,
//     color: "bg-gradient-to-br from-teal-600 to-green-700",
//     features: ["Personal account management", "Priority support access"],
//   },
//   {
//     title: "IT Support",
//     description:
//       "Professional technical support and system maintenance services",
//     icon: <Monitor className="w-8 h-8" />,
//     color: "bg-gradient-to-br from-slate-600 to-gray-700",
//     features: ["24/7 technical assistance", "System troubleshooting"],
//   },
//   {
//     title: "Review",
//     description: "Comprehensive service evaluation and performance assessment",
//     icon: <Star className="w-8 h-8" />,
//     color: "bg-gradient-to-br from-yellow-600 to-amber-700",
//     features: ["Service quality assessment", "Performance metrics analysis"],
//   },
//   {
//     title: "Our Team",
//     description: "Meet our expert team of cybersecurity professionals",
//     icon: <Users2 className="w-8 h-8" />,
//     color: "bg-gradient-to-br from-cyan-600 to-blue-700",
//     features: ["Certified cybersecurity experts", "Industry veterans"],
//   },
//   {
//     title: "Our Student",
//     description:
//       "Educational programs and opportunities for cybersecurity students",
//     icon: <GraduationCap className="w-8 h-8" />,
//     color: "bg-gradient-to-br from-purple-600 to-pink-700",
//     features: ["Internship programs", "Mentorship opportunities"],
//   },
//   {
//     title: "Our Department",
//     description:
//       "Specialized departments handling various cybersecurity domains",
//     icon: <Building className="w-8 h-8" />,
//     color: "bg-gradient-to-br from-orange-600 to-red-700",
//     features: ["Forensics division", "Incident response unit"],
//   },
//   {
//     title: "Our Case Story",
//     description:
//       "Real-world case studies and success stories from our operations",
//     icon: <FileText className="w-8 h-8" />,
//     color: "bg-gradient-to-br from-lime-600 to-emerald-700",
//     features: ["Detailed case analyses", "Problem-solving methodologies"],
//   },
//   {
//     title: "News and Event",
//     description: "Latest cybersecurity news, updates, and upcoming events",
//     icon: <Newspaper className="w-8 h-8" />,
//     color: "bg-gradient-to-br from-rose-600 to-pink-700",
//     features: ["Industry news updates", "Event announcements"],
//   },
//   {
//     title: "Cyber Crime Safety Tips",
//     description: "Practical advice and best practices for cyber safety",
//     icon: <ShieldAlert className="w-8 h-8" />,
//     color: "bg-gradient-to-br from-violet-600 to-purple-700",
//     features: ["Password protection guidelines", "Phishing prevention tips"],
//   },
//   {
//     title: "Technical Assistance",
//     description: "Expert technical support for cybersecurity implementations",
//     icon: <Wrench className="w-8 h-8" />,
//     color: "bg-gradient-to-br from-gray-600 to-slate-700",
//     features: ["System configuration support", "Technical troubleshooting"],
//   },
//   {
//     title: "Training & Awareness",
//     description: "Comprehensive cybersecurity education and awareness programs",
//     icon: <BookOpen className="w-8 h-8" />,
//     color: "bg-gradient-to-br from-blue-600 to-cyan-700",
//     features: ["Employee training sessions", "Security awareness campaigns"],
//   },
//   {
//     title: "Testimonials",
//     description: "Client feedback and success stories about our services",
//     icon: <MessageSquare className="w-8 h-8" />,
//     color: "bg-gradient-to-br from-green-600 to-teal-700",
//     features: ["Client satisfaction stories", "Service impact testimonials"],
//   },
//   {
//     title: "Case Studies",
//     description: "In-depth analysis of real cybersecurity cases and solutions",
//     icon: <FileSearch className="w-8 h-8" />,
//     color: "bg-gradient-to-br from-amber-600 to-orange-700",
//     features: ["Detailed problem analysis", "Solution implementation"],
//   },
//   {
//     title: "Our Courses",
//     description:
//       "Comprehensive cybersecurity training courses and certifications",
//     icon: <Book className="w-8 h-8" />,
//     color: "bg-gradient-to-br from-red-600 to-rose-700",
//     features: ["Beginner to advanced levels", "Certification programs"],
//   },
//   {
//     title: "Cyber Crime Prevention",
//     description: "Proactive measures and strategies to prevent cyber crimes",
//     icon: <ShieldCheck className="w-8 h-8" />,
//     color: "bg-gradient-to-br from-emerald-600 to-green-700",
//     features: ["Risk assessment services", "Preventive strategy development"],
//   },
//   {
//     title: "Innovation and Technology",
//     description:
//       "Cutting-edge technological solutions and innovative approaches",
//     icon: <Cpu className="w-8 h-8" />,
//     color: "bg-gradient-to-br from-pink-600 to-rose-700",
//     features: ["Emerging technology adoption", "Research and development"],
//   },
// ];

const Home = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const containerRef = useRef(null);

  useEffect(() => {
    const interval = setInterval(() => {
      if (!isHovered) {
        setActiveIndex((prev) => (prev + 1) % slides.length);
      }
    }, 5000);
    return () => clearInterval(interval);
  }, [isHovered, slides.length]);

  return (
    <div className="relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="fixed inset-0 -z-10 overflow-hidden">
        <motion.div
          className="absolute top-1/4 left-1/4 w-64 h-64 rounded-full bg-blue-500/10 blur-3xl"
          animate={{
            x: [0, 50, 0],
            y: [0, 30, 0],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute top-3/4 right-1/4 w-96 h-96 rounded-full bg-purple-500/10 blur-3xl"
          animate={{
            x: [0, -40, 0],
            y: [0, -20, 0],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute bottom-1/4 right-1/3 w-80 h-80 rounded-full bg-emerald-500/10 blur-3xl"
          animate={{
            x: [0, 30, 0],
            y: [0, 40, 0],
            scale: [1, 1.15, 1],
          }}
          transition={{
            duration: 18,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />

        <div className="absolute inset-0 opacity-5">
          <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern
                id="grid-pattern"
                width="40"
                height="40"
                patternUnits="userSpaceOnUse"
              >
                <path
                  d="M 40 0 L 0 0 0 40"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="0.5"
                />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#grid-pattern)" />
          </svg>
        </div>
      </div>

      {/* Full-screen Slider */}
      <div
        ref={containerRef}
        className="relative w-full h-[60vh] sm:h-[70vh] md:h-[80vh] border rounded-md mt-16 sm:mt-10 overflow-hidden"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <AnimatePresence mode="wait">
          <motion.div
            key={activeIndex}
            className="absolute inset-0 w-full h-full"
            initial={{ opacity: 0, scale: 1.1 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            transition={{ duration: 1.2, ease: "easeInOut" }}
          >
            {/* Background Image */}
            <div className="absolute inset-0">
              <img
                src={slides[activeIndex].image}
                alt={slides[activeIndex].title}
                className="w-full h-full object-cover border border-transparent rounded-md"
              />
              <div
                className={`absolute inset-0 bg-gradient-to-r ${slides[activeIndex].color} via-black/60 to-black/30`}
              ></div>
            </div>

            {/* Content Container */}
            <div className="relative h-full flex items-center px-4 sm:px-8 md:px-16 lg:px-24 z-10">
              <motion.div
                key={`content-${activeIndex}`}
                initial={{ opacity: 0, y: 60, x: -50 }}
                animate={{ opacity: 1, y: 0, x: 0 }}
                exit={{ opacity: 0, y: -60, x: 50 }}
                transition={{
                  duration: 0.8,
                  delay: 0.3,
                  ease: "easeOut",
                }}
                className="max-w-4xl text-white"
              >
                {/* Icon - Hidden on small screens */}
                <motion.div
                  initial={{ scale: 0, rotate: -180 }}
                  animate={{ scale: 1, rotate: 0 }}
                  transition={{
                    duration: 0.6,
                    delay: 0.5,
                    type: "spring",
                    stiffness: 200,
                  }}
                  className="mb-4 sm:mb-6 text-white opacity-90 hidden sm:block"
                >
                  {slides[activeIndex].icon}
                </motion.div>

                {/* Title */}
                <motion.h1
                  className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold leading-tight mb-4 sm:mb-6"
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    duration: 0.6,
                    delay: 0.6,
                  }}
                >
                  {slides[activeIndex].title}
                </motion.h1>

                {/* Description - Shorter on mobile */}
                <motion.p
                  className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-200 mb-4 sm:mb-8 leading-relaxed max-w-3xl line-clamp-3 sm:line-clamp-none"
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    duration: 0.6,
                    delay: 0.8,
                  }}
                >
                  {slides[activeIndex].description}
                </motion.p>

                {/* CTA Button - Smaller on mobile */}
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    duration: 0.6,
                    delay: 1,
                  }}
                >
                  <motion.a
                    href="#services"
                    className="inline-flex items-center bg-white hover:bg-gray-100 text-blue-600 font-semibold py-2 px-4 sm:py-3 sm:px-6 rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl text-sm sm:text-base"
                    whileHover={{
                      scale: 1.05,
                      boxShadow: "0 20px 40px rgba(0,0,0,0.2)",
                    }}
                    whileTap={{ scale: 0.95 }}
                  >
                    Explore Services
                    <ChevronRight className="ml-2 w-4 h-4 sm:w-5 sm:h-5" />
                  </motion.a>
                </motion.div>
              </motion.div>
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Navigation Arrows - Smaller on mobile */}
        <button
          onClick={() =>
            setActiveIndex((prev) => (prev - 1 + slides.length) % slides.length)
          }
          className="absolute left-2 sm:left-4 md:left-8 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/40 text-white p-2 sm:p-3 rounded-full transition-all duration-300 backdrop-blur-sm z-20 group"
          aria-label="Previous slide"
        >
          <ChevronLeft
            size={20}
            className="sm:w-6 sm:h-6 group-hover:scale-110 transition-transform"
          />
        </button>
        <button
          onClick={() => setActiveIndex((prev) => (prev + 1) % slides.length)}
          className="absolute right-2 sm:right-4 md:right-8 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/40 text-white p-2 sm:p-3 rounded-full transition-all duration-300 backdrop-blur-sm z-20 group"
          aria-label="Next slide"
        >
          <ChevronRight
            size={20}
            className="sm:w-6 sm:h-6 group-hover:scale-110 transition-transform"
          />
        </button>

        {/* Dot Indicators - Smaller on mobile */}
        <div className="absolute bottom-4 sm:bottom-8 left-1/2 -translate-x-1/2 flex space-x-2 sm:space-x-3 z-20">
          {slides.map((_, i) => (
            <button
              key={i}
              onClick={() => setActiveIndex(i)}
              className={`w-2 h-2 sm:w-3 sm:h-3 rounded-full transition-all duration-300 ${
                i === activeIndex
                  ? "bg-white scale-125 shadow-lg"
                  : "bg-white/50 hover:bg-white/80 hover:scale-110"
              }`}
              aria-label={`Go to slide ${i + 1}`}
            />
          ))}
        </div>

        {/* Progress Bar */}
        <div className="absolute bottom-0 left-0 w-full h-1 bg-black/20 z-20">
          <motion.div
            className="h-full bg-white"
            initial={{ width: "0%" }}
            animate={{ width: "100%" }}
            transition={{
              duration: 5,
              ease: "linear",
              repeat: Infinity,
            }}
            key={activeIndex}
          />
        </div>
      </div>

      {/* Content Below Slider */}
      <div className="relative bg-white/80 backdrop-blur-sm">
        <div className="max-w-9xl mx-auto px-6 py-24">
          <section id="services" className="mb-18">
            
            <Indux/>
             {/* All service cards */}
            {/* Always 3 cols → 6 on xl */}
            
          </section>

          {/* Stats Section */}
          <section className="mb-24">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="grid grid-cols-2 md:grid-cols-4 gap-6"
            >
              {[
                { value: "500+", label: "Enterprise Clients" },
                { value: "10K+", label: "Threats Neutralized" },
                { value: "98%", label: "Client Satisfaction" },
                { value: "800+", label: "Students Trained" },
                { value: "700+", label: "Students got placed" },
                { value: "247+", label: "Website Design" },
                { value: "98%", label: "Victim Satisfaction" },
                { value: "24/7", label: "Monitoring Coverage" },
              ].map((stat, i) => (
                <motion.div
                  key={i}
                  initial={{ y: 50, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1, duration: 0.6 }}
                  whileHover={{ scale: 1.05 }}
                  className="bg-white p-8 rounded-2xl shadow-lg text-center hover:shadow-xl transition-all duration-300 relative overflow-hidden"
                >
                  {/* Animated stat card background */}
                  <motion.div
                    className="absolute inset-0 opacity-10"
                    animate={{
                      scale: [1, 1.05, 1],
                      rotate: [0, 1, 0],
                    }}
                    transition={{
                      duration: 15 + i * 3,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                  >
                    <div className="w-full h-full bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl" />
                  </motion.div>

                  <div className="relative z-10">
                    <div className="text-4xl font-bold text-gray-900 mb-2">
                      {stat.value}
                    </div>
                    <div className="text-gray-600">{stat.label}</div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </section>

          {/* ===== OUR TEAM COMPONENT ===== */}
          {/* <OurTeam/> */}
          {/* ============================ */}

          {/* CTA Section */}
          <motion.section
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-gradient-to-r from-blue-600 to-blue-800 rounded-3xl p-12 text-center text-white shadow-2xl relative overflow-hidden"
          >
            {/* Animated CTA background */}
            <motion.div
              className="absolute inset-0 opacity-20"
              animate={{
                x: [0, 20, 0],
                y: [0, 10, 0],
                scale: [1, 1.02, 1],
              }}
              transition={{
                duration: 20,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              <div className="w-full h-full bg-white/30 rounded-3xl" />
            </motion.div>

            <div className="relative z-10">
              <h2 className="text-3xl font-bold mb-4">
                Ready to Secure Your Organization?
              </h2>
              <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
                Our cybersecurity experts are available 24/7 to assess your
                needs and provide customized solutions.
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <motion.a
                  href="/contact-us"
                  className="bg-white text-blue-600 hover:bg-gray-100 font-medium py-3 px-8 rounded-lg transition-colors duration-300 relative z-10"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Contact Our Team
                </motion.a>
                <motion.a
                  href="#services"
                  className="bg-transparent hover:bg-blue-700 border-2 border-white text-white font-medium py-3 px-8 rounded-lg transition-colors duration-300 relative z-10"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  View All Services
                </motion.a>
              </div>
            </div>
          </motion.section>
        </div>
      </div>
    </div>
  );
};

export default Home;
