import { motion } from "framer-motion";
import { FileText, Upload, Download, AlertCircle } from "lucide-react";

const VictimAssistanceForms = () => {
  const forms = [
    { title: "Cybercrime Complaint Form", type: "PDF" },
    { title: "Digital Evidence Submission Form", type: "PDF" },
    { title: "Victim Identity Verification Form", type: "PDF" },
    { title: "Confidentiality Agreement Form", type: "PDF" },
    { title: "Emergency Assistance Request Form", type: "PDF" },
    { title: "Legal Aid Request Form", type: "PDF" },
  ];

  const handleDownload = (form) => alert(`Downloading ${form.title}`);
  const handleUpload = () => alert("Uploading your completed form...");

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-8 lg:px-16">
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-4xl font-bold text-gray-800 mb-6"
      >
        Victim Assistance Forms
      </motion.h1>
      <motion.p
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="text-gray-600 max-w-3xl mb-8"
      >
        Download official forms for reporting cybercrimes, requesting legal aid,
        and submitting digital evidence. Completed forms can also be uploaded
        securely.
      </motion.p>

      <div className="mb-10">
        <button
          onClick={handleUpload}
          className="flex items-center gap-2 bg-indigo-600 text-white px-5 py-2 rounded-xl shadow hover:bg-indigo-700"
        >
          <Upload size={18} /> Upload Completed Form
        </button>
      </div>

      <motion.ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {forms.map((form, idx) => (
          <motion.li
            key={idx}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: idx * 0.1 }}
            className="p-5 bg-white rounded-xl shadow hover:shadow-lg transition flex justify-between items-center"
          >
            <div className="flex gap-3 items-center">
              <FileText className="text-indigo-500" />
              {form.title}
            </div>
            <button
              onClick={() => handleDownload(form)}
              className="text-indigo-600 hover:text-indigo-800 flex items-center gap-1"
            >
              <Download size={18} /> {form.type}
            </button>
          </motion.li>
        ))}
      </motion.ul>

      <div className="mt-12 bg-yellow-50 p-4 rounded-xl flex items-start gap-3">
        <AlertCircle className="text-yellow-600" />
        <p className="text-yellow-800">
          <b>Note:</b> Ensure all sensitive information is correct and forms are
          signed digitally before submission.
        </p>
      </div>
    </div>
  );
};

export default VictimAssistanceForms;
