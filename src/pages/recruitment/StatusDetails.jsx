// src/pages/recruitment/StatusDetails.jsx
import React, { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import {
  FiCheck,
  FiLoader,
  FiX,
  FiCheckSquare,
  FiAlertTriangle,
  FiMoreHorizontal,
  FiArrowLeft,
  FiClock
} from "react-icons/fi";

// --- This is the "Happy Path" timeline ---
const timelineStages = [
  "Submitted",
  "Under Verification",
  "Final Review",
  // "Approved" and "Rejected" are handled as final statuses
];

// --- Helper component for the applicant details grid ---
const DetailItem = ({ label, value }) => (
  <div className="py-2">
    <p className="text-sm font-medium text-gray-500">{label}</p>
    <p className="text-base font-semibold text-gray-800">{value || "N/A"}</p>
  </div>
);

// --- Helper component for the final status card ---
const StatusCard = ({ status }) => {
  let icon, bgColor, textColor, title;

  switch (status) {
    case "Approved":
      icon = <FiCheckSquare size={26} />;
      bgColor = "bg-green-50 border-green-200";
      textColor = "text-green-700";
      title = "Status: Approved";
      break;
    case "Rejected":
      icon = <FiAlertTriangle size={26} />;
      bgColor = "bg-red-50 border-red-200";
      textColor = "text-red-700";
      title = "Status: Rejected";
      break;
    default:
      icon = <FiClock size={26} />;
      bgColor = "bg-blue-50 border-blue-200";
      textColor = "text-blue-700";
      title = "Status: In Progress";
  }

  return (
    <motion.div
      className={`flex items-center gap-4 p-5 rounded-lg border ${bgColor} ${textColor}`}
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
    >
      {icon}
      <div>
        <h3 className="text-xl font-bold">{title}</h3>
        <p className="text-sm font-medium">{status}</p>
      </div>
    </motion.div>
  );
};


export default function StatusDetails() {
  const location = useLocation();
  const navigate = useNavigate();
  const application = location.state?.application;

  useEffect(() => {
    if (!application) {
      // If no application data, send back to check status page
      navigate("/recruitment/check-status");
    }
  }, [application, navigate]);

  // Don't render anything if we're redirecting
  if (!application) return null;

  // Find the current stage index
  let currentStageIndex = timelineStages.indexOf(application.status);
  
  // If status is "Approved" or "Rejected", it means all timeline steps are complete
  const isFinalized = application.status === "Approved" || application.status === "Rejected";
  if (isFinalized) {
    currentStageIndex = timelineStages.length; // All steps are done
  }

  return (
    <div className="min-h-screen py-10 px-4 bg-gray-50">
      <motion.div
        className="w-full max-w-4xl mx-auto p-8 sm:p-10 rounded-xl shadow-2xl bg-white border border-gray-200"
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
      >
        {/* --- Back Button --- */}
        <button
          onClick={() => navigate("/recruitment-process/check-status")}
          className="flex items-center gap-2 text-sm text-blue-600 font-medium mb-6 hover:underline"
        >
          <FiArrowLeft size={16} />
          Check Another Application
        </button>

        {/* --- Header --- */}
        <div className="mb-8">
          <h2 className="text-3xl font-bold text-gray-800">Application Status</h2>
          <p className="text-gray-500 mt-1">
            Reference Number:{" "}
            <span className="font-medium text-gray-700">{application.referenceNumber}</span>
          </p>
        </div>

        {/* --- Final Status Card --- */}
        <StatusCard status={application.status} />

        {/* --- Main Content Grid --- */}
        <div className="mt-10 grid grid-cols-1 lg:grid-cols-3 gap-10">
          
          {/* --- Column 1: Applicant Details --- */}
          <div className="lg:col-span-1">
            <h3 className="text-xl font-semibold text-gray-700 border-b pb-2 mb-4">
              Applicant Details
            </h3>
            <div className="space-y-2">
              <DetailItem label="Name" value={application.name} />
              <DetailItem label="Date of Birth" value={application.dob} />
              <DetailItem label="Father's Name" value={application.fatherName} />
              <DetailItem label="Post Applied For" value={application.postApplied} />
              <DetailItem label="Email" value={application.email} />
              <DetailItem label="Phone" value={application.phone} />
              <DetailItem label="Submission Date" value={application.submissionDate} />
            </div>
          </div>

          {/* --- Column 2: Status Timeline --- */}
          <div className="lg:col-span-2">
            <h3 className="text-xl font-semibold text-gray-700 border-b pb-2 mb-6">
              Application Timeline
            </h3>
            <div className="relative">
              {/* --- The vertical line --- */}
              <div className="absolute left-5 top-2 bottom-2 w-0.5 bg-gray-200" />
              
              {/* --- Map over the timeline stages --- */}
              {timelineStages.map((stage, index) => {
                const isCompleted = index < currentStageIndex;
                const isCurrent = index === currentStageIndex && !isFinalized;
                
                let icon;
                let iconColor = isCompleted ? "bg-green-500" : isCurrent ? "bg-blue-500" : "bg-gray-300";
                
                if(isCompleted) icon = <FiCheck className="text-white" size={20} />;
                else if (isCurrent) icon = <FiLoader className="text-white animate-spin" size={20} />;
                else icon = <FiMoreHorizontal className="text-white" size={20} />;
                
                return (
                  <motion.div
                    key={stage}
                    className="flex items-start gap-5 mb-8 relative"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.2 }}
                  >
                    {/* Icon Circle */}
                    <div className={`z-10 w-10 h-10 rounded-full flex items-center justify-center shrink-0 ${iconColor}`}>
                      {icon}
                    </div>
                    
                    {/* Stage Details */}
                    <div className="pt-1.5">
                      <p className={`font-semibold text-lg ${isCompleted || isCurrent ? 'text-gray-800' : 'text-gray-500'}`}>
                        {stage}
                      </p>
                      {/* Add dates/remarks here if your data has them */}
                      {stage === "Submitted" && (
                        <p className="text-sm text-gray-500">
                          On {application.submissionDate}
                        </p>
                      )}
                      {isCurrent && (
                         <p className="text-sm text-blue-600">
                          This is the current step.
                        </p>
                      )}
                    </div>
                  </motion.div>
                );
              })}

              {/* --- Final Step (Approved/Rejected) --- */}
              {isFinalized && (
                 <motion.div
                    className="flex items-start gap-5 relative"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: timelineStages.length * 0.2 }}
                  >
                    {/* Icon Circle */}
                    <div className={`z-10 w-10 h-10 rounded-full flex items-center justify-center shrink-0 ${
                      application.status === "Approved" ? "bg-green-500" : "bg-red-500"
                    }`}>
                      {application.status === "Approved" ? <FiCheck className="text-white" size={20} /> : <FiX className="text-white" size={20} />}
                    </div>
                    
                    {/* Stage Details */}
                    <div className="pt-1.5">
                      <p className="font-semibold text-lg text-gray-800">
                        {application.status}
                      </p>
                       <p className="text-sm text-gray-500">
                          {application.remarks || "Application process is complete."}
                        </p>
                    </div>
                  </motion.div>
              )}
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}