import { motion } from "framer-motion";
import { Download, Shield, Search, FileSearch, Code } from "lucide-react";

const InvestigationToolkit = () => {
  const handleDownload = (type) => alert(`Downloading ${type} Toolkit...`);

  const features = [
    "Digital Forensics Tools (Autopsy, Volatility, FTK Imager)",
    "Network Sniffer & Traffic Analysis Utilities (Wireshark, Nmap)",
    "Malware Analysis Sandboxes",
    "Open Source Intelligence (OSINT) Toolkit",
    "Case Workflow Templates for Investigators",
    "Cloud Incident Response Scripts",
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-8 lg:px-16">
      <motion.h1 initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} className="text-4xl font-bold text-gray-800 mb-6">
        Investigation Toolkit
      </motion.h1>
      <motion.p initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} className="text-gray-600 max-w-3xl mb-8">
        A curated set of tools and scripts empowering cybercrime investigators with digital evidence collection, network analysis, and case management solutions.
      </motion.p>

      <div className="flex gap-4 mb-10">
        <button onClick={() => handleDownload("PDF")} className="flex items-center gap-2 bg-indigo-600 text-white px-5 py-2 rounded-xl shadow hover:bg-indigo-700">
          <Download size={18}/> Download PDF
        </button>
        <button onClick={() => handleDownload("Excel")} className="flex items-center gap-2 bg-green-600 text-white px-5 py-2 rounded-xl shadow hover:bg-green-700">
          <Download size={18}/> Download Excel
        </button>
      </div>

      <motion.ul className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        {features.map((item, idx) => (
          <motion.li key={idx} initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: idx * 0.1 }} 
            className="p-5 bg-white rounded-xl shadow border hover:shadow-lg transition">
            {item}
          </motion.li>
        ))}
      </motion.ul>
    </div>
  );
};

export default InvestigationToolkit;
