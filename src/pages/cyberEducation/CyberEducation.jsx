import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Home } from "lucide-react";

const CyberEducation = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-100 py-16 px-6 md:px-12 lg:px-20">
      {/* Breadcrumb */}
      <nav className="flex items-center text-sm text-gray-500 mb-8 space-x-2">
        <Link to="/" className="hover:text-blue-600 flex items-center gap-1">
          <Home size={16} /> Home
        </Link>
        <span>/</span>
        <Link to="/cyber-education" className="hover:text-blue-600">
          Cyber Education
        </Link>
        <span>/</span>
        <span className="text-gray-800 font-medium">Cyber Education</span>
      </nav>
            {/* --- Background Illustrations --- */}
      <div className="absolute top-0 left-0 w-full -z-10 opacity-30 pointer-events-none">
        <svg
          className="w-full h-40"
          viewBox="0 0 1440 320"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill="#3b82f6"
            fillOpacity="0.15"
            d="M0,64L48,74.7C96,85,192,107,288,133.3C384,160,480,192,576,213.3C672,235,768,245,864,240C960,235,1056,213,1152,186.7C1248,160,1344,128,1392,112L1440,96V320H0Z"
          ></path>
        </svg>
      </div>

      <div className="absolute bottom-0 right-0 w-64 h-64 -z-10 opacity-10 pointer-events-none">
        <svg
          viewBox="0 0 200 200"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-full"
        >
          <circle fill="#60a5fa" cx="100" cy="100" r="100" />
        </svg>
      </div>
      {/* --- End Background Illustrations --- */}

      {/* Heading */}
      <motion.h1
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-4xl md:text-5xl font-bold text-gray-800 mb-8"
      >
        Cyber Education
      </motion.h1>

      {/* Content */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.8 }}
        className="space-y-6 text-gray-700 leading-relaxed"
      >
        <p>
          Cyber Education is aimed at building awareness and practical skills 
          to safeguard digital assets, personal data, and organizational resources 
          against cyber threats. This program helps individuals develop a 
          security-first mindset in an interconnected world.
        </p>

        <h2 className="text-2xl font-semibold text-gray-800">What You'll Learn</h2>
        <ul className="list-disc list-inside space-y-2">
          <li>Cybersecurity fundamentals and common threat types</li>
          <li>Safe browsing and secure password practices</li>
          <li>Understanding phishing and social engineering attacks</li>
          <li>Basics of incident response and reporting mechanisms</li>
          <li>How to protect personal and business data</li>
        </ul>

        <h2 className="text-2xl font-semibold text-gray-800">Why Choose This Program?</h2>
        <ul className="list-disc list-inside space-y-2">
          <li>Enhances personal and organizational digital safety</li>
          <li>Develops proactive security habits</li>
          <li>Provides practical steps to prevent data breaches</li>
        </ul>

        <h2 className="text-2xl font-semibold text-gray-800">Who Should Attend?</h2>
        <ul className="list-disc list-inside space-y-2">
          <li>General internet users</li>
          <li>Corporate professionals and students</li>
          <li>Small business owners and startups</li>
        </ul>

        <p>
          Upon completion, learners gain essential skills to navigate the 
          digital world safely and contribute to building a secure cyber ecosystem.
        </p>
      </motion.div>

      {/* Call to Action */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5, duration: 0.6 }}
        className="mt-10"
      >
        <Link
          to="/contact-us"
          className="inline-block px-6 py-3 rounded-xl bg-blue-600 text-white font-semibold hover:bg-blue-700 transition-colors duration-300"
        >
          Enroll Now
        </Link>
      </motion.div>
    </div>
  );
};

export default CyberEducation;
