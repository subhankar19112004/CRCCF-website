// src/pages/recruitment/CheckStatus.jsx
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
// Make sure this path is correct
import { applications } from "../../data/application/applicationData"; 
import { motion, AnimatePresence } from "framer-motion";
import { FiSearch, FiCheckSquare, FiAlertCircle } from "react-icons/fi";

// --- Framer Motion Variants (Unchanged) ---
const containerVariants = {
  hidden: { opacity: 0, y: 30, scale: 0.98 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.5,
      ease: "easeOut",
      when: "beforeChildren",
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { type: "spring", stiffness: 150, damping: 20 },
  },
};

const errorVariants = {
  initial: { opacity: 0, y: -10, height: 0 },
  animate: { opacity: 1, y: 0, height: "auto", transition: { duration: 0.3 } },
  exit: { opacity: 0, y: 5, height: 0, transition: { duration: 0.2 } },
};
// --- End of Variants ---


// --- NEW: Animated Floating Label Input ---
const FloatingInput = ({ id, label, value, onChange, type = "text" }) => {
  return (
    <motion.div variants={itemVariants} className="relative z-0">
      <input
        type={type}
        id={id}
        value={value}
        onChange={onChange}
        // The space placeholder is KEY for the peer-placeholder-shown to work
        placeholder=" "
        className="peer block w-full px-4 py-3.5 text-base text-gray-900 bg-transparent border border-gray-300 rounded-md
                   focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
        required
      />
      <label
        htmlFor={id}
        className="absolute left-3 -top-2.5 text-sm text-gray-500 bg-white px-1
                   transition-all duration-200
                   // This is the magic for the floating animation
                   peer-placeholder-shown:top-3.5 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400
                   peer-focus:-top-2.5 peer-focus:text-sm peer-focus:text-blue-600
                   pointer-events-none"
      >
        {label}
      </label>
    </motion.div>
  );
};

// --- NEW: Animated Floating Date Input (More robust) ---
const FloatingDateInput = ({ id, label, value, onChange }) => {
  const [isFocused, setIsFocused] = useState(false);
  const hasValue = value.length > 0;

  return (
    <motion.div variants={itemVariants} className="relative z-0">
      <input
        // Smartly switches type on focus
        type={isFocused ? "date" : "text"}
        id={id}
        value={value}
        onChange={onChange}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
        // A gentle placeholder for when it's text
        placeholder={isFocused ? "" : "Select your birth date"}
        className="block w-full px-4 py-3.5 text-base text-gray-900 bg-transparent border border-gray-300 rounded-md
                   focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
        required
      />
      <label
        htmlFor={id}
        className={`absolute left-3 text-gray-500 bg-white px-1
                   transition-all duration-200 pointer-events-none
                   // State-driven animation is more reliable for date inputs
                   ${isFocused || hasValue
                     ? "-top-2.5 text-sm text-blue-600" // Floating (active) state
                     : "top-3.5 text-base text-gray-400" // Default (inline) state
                   }`}
      >
        {label}
      </label>
    </motion.div>
  );
};
// --- End of New Input Components ---


export default function CheckStatus() {
  const [name, setName] = useState("");
  const [dob, setDob] = useState("");
  const [ref, setRef] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  function normalize(str = "") {
    return str.trim().toLowerCase();
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    setError("");

    const found = applications.find(
      (a) =>
        normalize(a.name) === normalize(name) &&
        a.dob === dob &&
        a.referenceNumber.trim() === ref.trim()
    );

    if (!found) {
      setError("No record found. Please check all details carefully.");
      return;
    }

    navigate("/recruitment/status-details", { state: { application: found } });
  };

  return (
    <div className="min-h-screen flex items-center justify-center py-10 px-4 bg-gray-50 text-gray-900">
      
      {/* Wider Card: max-w-xl */}
      <motion.div
        className="w-full max-w-xl p-8 sm:p-10 rounded-xl shadow-2xl bg-white border border-gray-200"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.div
          variants={itemVariants}
          className="flex items-center gap-3 mb-2"
        >
          <FiCheckSquare size={30} className="text-blue-600" />
          <h2 className="text-3xl font-bold text-gray-800">
            Application Status
          </h2>
        </motion.div>

        <motion.p variants={itemVariants} className="text-gray-600 mb-10 text-sm">
          Enter your details below to check the current status of your application.
        </motion.p>

        {/* Using the new animated input components */}
        <form onSubmit={handleSubmit} className="space-y-7">
          <FloatingInput
            id="name"
            label="Full Name"
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />

          <FloatingDateInput
            id="dob"
            label="Date of Birth"
            value={dob}
            onChange={(e) => setDob(e.target.value)}
          />

          <FloatingInput
            id="ref"
            label="Reference Number"
            type="text"
            value={ref}
            onChange={(e) => setRef(e.target.value)}
          S
          />

          <AnimatePresence>
            {error && (
              <motion.p
                className="flex items-center gap-2 p-3 text-sm text-red-700 bg-red-50 border border-red-300 rounded-lg"
                variants={errorVariants}
                initial="initial"
                animate="animate"
                exit="exit"
              >
                <FiAlertCircle size={20} />
                {error}
              </motion.p>
            )}
          </AnimatePresence>

          <motion.div variants={itemVariants} className="pt-4">
            <motion.button
              type="submit"
              className="w-full py-3.5 px-6 rounded-md font-semibold text-lg flex items-center justify-center gap-2
                         bg-blue-600 text-white
                         hover:bg-blue-700
                         focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2
                         transition-all duration-200 ease-in-out"
              // Better hover/tap animations
              whileHover={{ scale: 1.02, y: -2, boxShadow: "0px 10px 20px -5px rgba(59, 130, 246, 0.3)" }}
              whileTap={{ scale: 0.98, y: 0, boxShadow: "0px 5px 10px -3px rgba(59, 130, 246, 0.2)" }}
            >
              <FiSearch size={20} />
              <span>Check Status</span>
            </motion.button>
          </motion.div>
        </form>
      </motion.div>
    </div>
  );
}