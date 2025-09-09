import { motion } from "framer-motion";
import { BookOpen, Download, FileSpreadsheet, Filter } from "lucide-react";
import { useState } from "react";

const CaseStudyLibrary = () => {
  const [filter, setFilter] = useState("All");
  const caseStudies = [
    { title: "Phishing Attack Response", category: "Email Security" },
    { title: "Ransomware Recovery Plan", category: "Data Security" },
    { title: "Social Media Fraud Case", category: "Online Fraud" },
    { title: "Banking Malware Incident", category: "Financial Crime" },
    { title: "Child Exploitation Case", category: "Sensitive" },
    { title: "Corporate Data Breach", category: "Enterprise" },
  ];

  const handleExport = (format) =>
    alert(`Exporting all case studies as ${format}`);
  const handleDownloadCase = (title) =>
    alert(`Downloading case study: ${title}`);

  const filteredCases =
    filter === "All"
      ? caseStudies
      : caseStudies.filter((c) => c.category === filter);

  const categories = ["All", "Email Security", "Data Security", "Online Fraud", "Financial Crime", "Sensitive", "Enterprise"];

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-8 lg:px-16">
      <motion.h1 initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} className="text-4xl font-bold text-gray-800 mb-6">
        Case Study Library
      </motion.h1>
      <motion.p initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} className="text-gray-600 max-w-3xl mb-8">
        Access real-world cybercrime case studies for research and learning purposes. Filter by category and export case data.
      </motion.p>

      <div className="flex gap-4 items-center mb-8 flex-wrap">
        <Filter className="text-gray-500" />
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setFilter(cat)}
            className={`px-4 py-2 rounded-xl border ${
              filter === cat ? "bg-indigo-600 text-white" : "bg-white text-gray-600"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      <div className="flex gap-4 mb-10">
        <button
          onClick={() => handleExport("PDF")}
          className="flex items-center gap-2 bg-indigo-600 text-white px-5 py-2 rounded-xl shadow hover:bg-indigo-700"
        >
          <Download size={18} /> Export as PDF
        </button>
        <button
          onClick={() => handleExport("Excel")}
          className="flex items-center gap-2 bg-green-600 text-white px-5 py-2 rounded-xl shadow hover:bg-green-700"
        >
          <FileSpreadsheet size={18} /> Export as Excel
        </button>
      </div>

      <motion.ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredCases.map((study, idx) => (
          <motion.li
            key={idx}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: idx * 0.1 }}
            className="p-5 bg-white rounded-xl shadow hover:shadow-lg transition flex justify-between items-center"
          >
            <div className="flex gap-3 items-center">
              <BookOpen className="text-indigo-500" />
              <span>{study.title}</span>
            </div>
            <button
              onClick={() => handleDownloadCase(study.title)}
              className="text-indigo-600 hover:text-indigo-800 flex items-center gap-1"
            >
              <Download size={18} /> PDF
            </button>
          </motion.li>
        ))}
      </motion.ul>
    </div>
  );
};

export default CaseStudyLibrary;
