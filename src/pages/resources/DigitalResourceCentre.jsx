import { motion } from "framer-motion";
import { Download } from "lucide-react";

const DigitalResourceCentre = () => {
  const handleDownload = (type) => {
    alert(`Downloading ${type} file...`);
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-8 lg:px-16">
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        className="text-4xl font-bold text-gray-800 mb-6"
      >
        Digital Resource Centre
      </motion.h1>
      <motion.p
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="text-gray-600 max-w-3xl mb-8"
      >
        A central hub containing curated cyber security tools, educational documents,
        and compliance resources for professionals and learners.
      </motion.p>
      
      {/* Download Buttons */}
      <div className="flex gap-4 mb-10">
        <button 
          onClick={() => handleDownload("PDF")}
          className="flex items-center gap-2 bg-indigo-600 text-white px-5 py-2 rounded-xl shadow hover:bg-indigo-700 transition"
        >
          <Download size={18}/> PDF
        </button>
        <button 
          onClick={() => handleDownload("Excel")}
          className="flex items-center gap-2 bg-green-600 text-white px-5 py-2 rounded-xl shadow hover:bg-green-700 transition"
        >
          <Download size={18}/> Excel
        </button>
      </div>

      {/* Features List */}
      <motion.ul className="space-y-4">
        {[
          "Cybersecurity Whitepapers",
          "Data Breach Reports",
          "Threat Intelligence Feeds",
          "Standard Compliance Templates"
        ].map((feature, idx) => (
          <motion.li 
            key={idx}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: idx * 0.1 }}
            className="p-4 bg-white rounded-xl shadow border border-gray-100"
          >
            {feature}
          </motion.li>
        ))}
      </motion.ul>
    </div>
  );
};

export default DigitalResourceCentre;
