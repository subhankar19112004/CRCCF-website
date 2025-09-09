import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Home } from "lucide-react";

const LegalEducation = () => {
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
        <span className="text-gray-800 font-medium">Legal Education</span>
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
        Legal Education
      </motion.h1>

      {/* Content */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.8 }}
        className="space-y-6 text-gray-700 leading-relaxed"
      >
        <p>
          The Legal Education program is designed to build awareness around cyber laws, 
          digital rights, intellectual property, and regulatory frameworks. In an era of 
          digital transformation, understanding the legal implications of online activity 
          is more important than ever.
        </p>

        <h2 className="text-2xl font-semibold text-gray-800">Key Modules</h2>
        <ul className="list-disc list-inside space-y-2">
          <li>Overview of the Information Technology Act, 2000</li>
          <li>Cybercrime and legal consequences</li>
          <li>Data protection and privacy laws</li>
          <li>Intellectual property rights in the digital space</li>
          <li>Digital evidence handling and admissibility</li>
        </ul>

        <h2 className="text-2xl font-semibold text-gray-800">Why It Matters</h2>
        <ul className="list-disc list-inside space-y-2">
          <li>Protect yourself and your business from legal risks</li>
          <li>Gain knowledge to work in compliance-related roles</li>
          <li>Empower yourself with digital rights awareness</li>
        </ul>

        <h2 className="text-2xl font-semibold text-gray-800">Ideal Participants</h2>
        <ul className="list-disc list-inside space-y-2">
          <li>Law students and practicing lawyers</li>
          <li>IT & corporate compliance professionals</li>
          <li>Anyone concerned about online safety and legal rights</li>
        </ul>

        <p>
          With this knowledge, individuals and organizations can make informed 
          decisions while navigating the rapidly evolving digital ecosystem.
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

export default LegalEducation;
