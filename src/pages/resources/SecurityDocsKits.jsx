import { motion } from "framer-motion";
import { Download, ShieldCheck, Package, FileSpreadsheet } from "lucide-react";

const SecurityDocsKits = () => {
  const kits = [
    "Incident Response Kit (IRK)",
    "Data Breach Communication Kit",
    "Phishing Simulation Toolkit",
    "Employee Security Training Kit",
    "Vulnerability Management Kit",
    "Disaster Recovery & Backup Kit",
    "Compliance Audit Documentation Pack",
    "Ransomware Response Action Kit",
    "Cloud Security Starter Pack",
    "Endpoint Security Hardening Kit",
  ];

  const handleDownload = (kit) =>
    alert(`Downloading "${kit}" Security Kit...`);

  const handleAllDownload = (type) =>
    alert(`Downloading all kits in ${type} format...`);

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-8 lg:px-16">
      <motion.h1 initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} className="text-4xl font-bold text-gray-800 mb-6">
        Security Docs & Kits
      </motion.h1>
      <motion.p initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} className="text-gray-600 max-w-3xl mb-8">
        Ready-to-use security documentation and toolkits for quick deployment and compliance.
      </motion.p>

      <div className="flex gap-4 mb-10">
        <button onClick={() => handleAllDownload("PDF")} className="flex items-center gap-2 bg-indigo-600 text-white px-5 py-2 rounded-xl shadow hover:bg-indigo-700">
          <Download size={18}/> Download All PDF
        </button>
        <button onClick={() => handleAllDownload("Excel")} className="flex items-center gap-2 bg-green-600 text-white px-5 py-2 rounded-xl shadow hover:bg-green-700">
          <FileSpreadsheet size={18}/> Download All Excel
        </button>
      </div>

      <motion.ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {kits.map((kit, idx) => (
          <motion.li key={idx} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: idx * 0.1 }}
            className="p-5 bg-white rounded-xl shadow hover:shadow-lg transition flex justify-between items-center">
            <div className="flex gap-3 items-center">
              <ShieldCheck className="text-green-500" />
              {kit}
            </div>
            <button
              onClick={() => handleDownload(kit)}
              className="text-indigo-600 hover:text-indigo-800 flex items-center gap-1"
            >
              <Download size={18}/> Download
            </button>
          </motion.li>
        ))}
      </motion.ul>
    </div>
  );
};

export default SecurityDocsKits;
