import React from "react";
import { motion } from "framer-motion";

const SocialMediaMisuseVictimAid = () => {
  return (
    <motion.section
      className="max-w-5xl mx-auto px-4 py-16"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <motion.h1
        className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.5 }}
      >
        Social Media Misuse Victim Aid
      </motion.h1>
      <motion.p
        className="text-lg text-gray-700 leading-relaxed mb-6"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.5 }}
      >
        Helping individuals affected by misuse of social media platforms,
        including impersonation, bullying, and content misuse.
      </motion.p>
      <motion.ul
        className="list-disc pl-6 text-gray-700 space-y-3"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4, duration: 0.5 }}
      >
        <li>Reporting and takedown assistance</li>
        <li>Legal actions for online defamation</li>
        <li>Social media safety education</li>
      </motion.ul>
    </motion.section>
  );
};

export default SocialMediaMisuseVictimAid;
