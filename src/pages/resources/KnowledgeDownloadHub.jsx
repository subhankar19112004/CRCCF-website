import { motion } from "framer-motion";
import { Download, BookOpen, Database, FileText } from "lucide-react";

const KnowledgeDownloadHub = () => {
  const handleDownload = (type) => alert(`Downloading ${type} Knowledge Pack...`);

  const resources = [
    "Cybersecurity Research Papers",
    "Legal Acts & Cyber Crime Regulations",
    "Incident Handling Checklists",
    "Cloud Security Best Practices",
    "IoT & AI Threat Assessment Guides",
    "ISO/IEC 27001 Templates & Docs",
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-8 lg:px-16">
      <motion.h1 initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} className="text-4xl font-bold text-gray-800 mb-6">
        Knowledge & Download Hub
      </motion.h1>
      <motion.p initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="text-gray-600 max-w-3xl mb-8">
        Explore comprehensive knowledge packs, best practices, and legal references for cybersecurity professionals, legal advisors, and learners.
      </motion.p>

      <div className="flex gap-4 mb-10">
        <button onClick={() => handleDownload("PDF")} className="flex items-center gap-2 bg-indigo-600 text-white px-5 py-2 rounded-xl shadow hover:bg-indigo-700">
          <Download size={18}/> PDF
        </button>
        <button onClick={() => handleDownload("Excel")} className="flex items-center gap-2 bg-green-600 text-white px-5 py-2 rounded-xl shadow hover:bg-green-700">
          <Download size={18}/> Excel
        </button>
      </div>

      <motion.div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        {resources.map((item, idx) => (
          <motion.div key={idx} initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: idx * 0.1 }}
            className="p-5 bg-white rounded-xl shadow border hover:shadow-lg transition">
            {item}
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default KnowledgeDownloadHub;
