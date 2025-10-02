
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
