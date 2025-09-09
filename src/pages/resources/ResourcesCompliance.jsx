import { motion } from "framer-motion";
import { Download, CheckSquare, FileCheck } from "lucide-react";

const ResourcesCompliance = () => {
  const handleDownload = (type) => alert(`Downloading ${type} Compliance Resources...`);

  const compliance = [
    "ISO/IEC 27001 Compliance Checklist",
    "GDPR Compliance Toolkit",
    "PCI DSS Security Guidelines",
    "SOC 2 Type I & II Report Templates",
    "HIPAA Security Checklist",
    "Indian IT Act Compliance Docs",
    "Incident Response Legal Framework Guides",
    "Data Protection Impact Assessment Templates",
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-8 lg:px-16">
      <motion.h1 initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} className="text-4xl font-bold text-gray-800 mb-6">
        Resources & Compliance
      </motion.h1>
      <motion.p initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} className="text-gray-600 max-w-3xl mb-8">
        Access compliance checklists, certifications, and regulatory documents for cybersecurity and IT governance.
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
        {compliance.map((item, idx) => (
          <motion.li key={idx} initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: idx * 0.1 }}
            className="p-5 bg-white rounded-xl shadow border hover:shadow-lg transition flex gap-3">
            <FileCheck className="text-blue-500"/> {item}
          </motion.li>
        ))}
      </motion.ul>
    </div>
  );
};

export default ResourcesCompliance;
