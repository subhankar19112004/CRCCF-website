import { motion } from "framer-motion";
import { Download, Cpu, Terminal, Activity } from "lucide-react";

const TechToolsReport = () => {
  const handleDownload = (type) => alert(`Downloading ${type} Tools & Reports...`);

  const tools = [
    "Vulnerability Scanners (Nessus, OpenVAS)",
    "Source Code Review Tools (SonarQube, Checkmarx)",
    "Network Traffic Analyzer (Wireshark, Zeek)",
    "Cloud Security Assessment Kits",
    "DevSecOps Tools List",
    "Threat Simulation & Attack Surface Reports",
    "AI & ML Cybersecurity Tools Catalog",
    "Automated Log Analysis Scripts",
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-8 lg:px-16">
      <motion.h1 initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} className="text-4xl font-bold text-gray-800 mb-6">
        Tech Tools & Report
      </motion.h1>
      <motion.p initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} className="text-gray-600 max-w-3xl mb-8">
        Access advanced cybersecurity tools and detailed technical reports for improved security posture.
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
        {tools.map((item, idx) => (
          <motion.li key={idx} initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: idx * 0.1 }}
            className="p-5 bg-white rounded-xl shadow border hover:shadow-lg transition flex gap-3">
            <Cpu className="text-purple-500"/> {item}
          </motion.li>
        ))}
      </motion.ul>
    </div>
  );
};

export default TechToolsReport;
