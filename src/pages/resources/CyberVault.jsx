import { motion } from "framer-motion";
import { Download } from "lucide-react";

const CyberVault = () => {
  const handleDownload = (type) => alert(`Downloading ${type} file...`);

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-8 lg:px-16">
      <motion.h1 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        className="text-4xl font-bold mb-6"
      >
        Cyber Vault
      </motion.h1>
      <p className="text-gray-600 max-w-3xl mb-8">
        Secure vault storing encrypted cyber investigation materials, tools, and sensitive guidelines.
      </p>

      <div className="flex gap-4 mb-10">
        <button 
          onClick={() => handleDownload("PDF")}
          className="flex items-center gap-2 bg-indigo-600 text-white px-5 py-2 rounded-xl shadow"
        >
          <Download size={18}/> PDF
        </button>
        <button 
          onClick={() => handleDownload("Excel")}
          className="flex items-center gap-2 bg-green-600 text-white px-5 py-2 rounded-xl shadow"
        >
          <Download size={18}/> Excel
        </button>
      </div>

      <motion.ul className="space-y-4">
        {[
          "Encrypted Case Files",
          "Incident Logs",
          "Digital Evidence Storage",
          "Access Control Records"
        ].map((item, idx) => (
          <motion.li key={idx} initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: idx * 0.1 }} className="p-4 bg-white rounded-xl shadow">
            {item}
          </motion.li>
        ))}
      </motion.ul>
    </div>
  );
};

export default CyberVault;
