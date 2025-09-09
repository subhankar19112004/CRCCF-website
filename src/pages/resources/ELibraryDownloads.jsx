import { motion } from "framer-motion";
import { Download, BookOpen, FileText, Search } from "lucide-react";
import { useState } from "react";

const ELibraryDownloads = () => {
  const [search, setSearch] = useState("");

  const libraryItems = [
    "Cybersecurity Fundamentals eBook",
    "Advanced Ethical Hacking Guide",
    "Forensic Analysis Whitepapers",
    "AI & Cybersecurity Research Papers",
    "Blockchain Security Trends",
    "IoT Security Best Practices",
    "Zero Trust Architecture eBook",
    "Quantum Computing & Security Docs",
    "Threat Hunting Playbooks",
    "Malware Reverse Engineering Notes",
  ];

  const filteredItems = libraryItems.filter((item) =>
    item.toLowerCase().includes(search.toLowerCase())
  );

  const handleDownload = (title) =>
    alert(`Downloading "${title}" from E-Library...`);

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-8 lg:px-16">
      <motion.h1 initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} className="text-4xl font-bold text-gray-800 mb-6">
        E-Library & Downloads
      </motion.h1>
      <motion.p initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} className="text-gray-600 max-w-3xl mb-8">
        Explore our collection of cybersecurity e-books, whitepapers, and downloadable resources.
      </motion.p>

      <div className="flex items-center mb-10 gap-2">
        <Search className="text-gray-400" />
        <input
          type="text"
          placeholder="Search Library..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full px-4 py-2 border rounded-xl shadow-sm focus:outline-none"
        />
      </div>

      <motion.ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredItems.map((item, idx) => (
          <motion.li key={idx} initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: idx * 0.1 }}
            className="flex justify-between items-center p-5 bg-white rounded-xl shadow hover:shadow-lg transition">
            <div className="flex items-center gap-3">
              <BookOpen className="text-indigo-500" />
              <span>{item}</span>
            </div>
            <button
              onClick={() => handleDownload(item)}
              className="flex items-center gap-1 text-indigo-600 hover:text-indigo-800"
            >
              <Download size={18}/> Download
            </button>
          </motion.li>
        ))}
      </motion.ul>
    </div>
  );
};

export default ELibraryDownloads;
