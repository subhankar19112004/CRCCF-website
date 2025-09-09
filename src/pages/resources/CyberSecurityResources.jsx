import { motion } from "framer-motion";
import { Download, Shield, Lock, Globe, AlertTriangle, Server } from "lucide-react";

const CyberSecurityResources = () => {
  const handleDownload = (type) => alert(`Downloading ${type} Security Resources...`);

  const resources = [
    "Cyber Threat Intelligence Reports",
    "Zero-Day Vulnerability Briefs",
    "Endpoint Protection Solutions List",
    "Cloud Security Hardening Guidelines",
    "Phishing & Ransomware Protection Strategies",
    "Dark Web Monitoring & Response Guides",
    "Cybersecurity Awareness Training Modules",
    "Incident Response Workflow Templates",
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-8 lg:px-16">
      <motion.h1 initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} className="text-4xl font-bold text-gray-800 mb-6">
        Cyber Security Resources
      </motion.h1>
      <motion.p initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} className="text-gray-600 max-w-3xl mb-8">
        Get access to curated cybersecurity tools, guides, and intelligence reports to strengthen your defense mechanisms and digital infrastructure.
      </motion.p>

      <div className="flex gap-4 mb-10">
        <button onClick={() => handleDownload("PDF")} className="flex items-center gap-2 bg-indigo-600 text-white px-5 py-2 rounded-xl shadow hover:bg-indigo-700">
          <Download size={18}/> Download PDF
        </button>
        <button onClick={() => handleDownload("Excel")} className="flex items-center gap-2 bg-green-600 text-white px-5 py-2 rounded-xl shadow hover:bg-green-700">
          <Download size={18}/> Download Excel
        </button>
      </div>

      <motion.ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {resources.map((item, idx) => (
          <motion.li key={idx} initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: idx * 0.1 }}
            className="p-5 bg-white rounded-xl shadow border hover:shadow-lg transition flex gap-3">
            <Shield className="text-indigo-500"/> {item}
          </motion.li>
        ))}
      </motion.ul>
    </div>
  );
};

export default CyberSecurityResources;
