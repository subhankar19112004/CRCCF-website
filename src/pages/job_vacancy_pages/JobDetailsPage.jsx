import React from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { jobData } from '../../data/job_vacancy/jobData';

// --- Icons ---
import { 
  HiLocationMarker, HiBriefcase, HiCalendar, HiClock, 
  HiCurrencyRupee, HiOfficeBuilding, HiUserGroup, HiIdentification, 
  HiCheckCircle, HiExclamation, HiChevronLeft
} from 'react-icons/hi';

// --- DetailItem Component ---
const DetailItem = ({ icon, title, children }) => {
  if (!children) return null; 
  return (
    <div className="flex items-start space-x-3">
      <div className="flex-shrink-0 text-blue-600 mt-1">{icon}</div>
      <div>
        <h4 className="text-sm font-semibold text-gray-500 uppercase tracking-wider">{title}</h4>
        <div className="text-base text-gray-800">{children}</div>
      </div>
    </div>
  );
};

// --- Section Animation Variants ---
const sectionVariants = {
  offscreen: { opacity: 0, y: 30 },
  onscreen: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 20,
      duration: 0.8
    }
  }
};

const JobDetailsPage = () => {
  const { jobId } = useParams(); 
  const job = jobData.find((j) => j.id === jobId);
  const navigate = useNavigate();

  // --- Job Not Found ---
  if (!job) {
    return (
      <div className="flex flex-col items-center justify-center min-h-[60vh] text-center">
        <h1 className="text-3xl font-bold mb-4">Job Not Found</h1>
        <p className="text-lg text-gray-600 mb-8">We couldn't find the job you're looking for.</p>
        <Link
          to="/recruitment-process/job-vacancy"
          className="flex items-center gap-2 bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition"
        >
          <HiChevronLeft /> Back to All Vacancies
        </Link>
      </div>
    );
  }

  const isUnavailable = job.status === 'Unavailable';

  return (
    <div className="container mx-auto px-4 py-16">
      
      {/* --- Back Button --- */}
      <button
        onClick={() => navigate(-1)} 
        className="flex items-center gap-2 text-blue-600 font-semibold mb-8 hover:underline"
      >
        <HiChevronLeft /> Back to All Vacancies
      </button>

      {/* --- Main Grid Layout (Responsive) --- */}
      <div className="flex flex-col md:flex-row gap-12">

        {/* --- Main Content (Left Column) --- */}
        <div className="w-full md:w-2/3 space-y-12">

          {/* Header Section */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900">{job.jobTitle}</h1>
            <div className="flex items-center gap-4 mt-4 text-lg text-gray-600">
              <span><HiOfficeBuilding className="inline mr-1" /> {job.department}</span>
              <span>&bull;</span>
              <span><HiLocationMarker className="inline mr-1" /> {job.jobLocation}</span>
            </div>

            {/* --- UNAVAILABLE WARNING --- */}
            {isUnavailable && (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="mt-6 p-4 bg-red-100 border border-red-300 text-red-800 rounded-lg flex items-center gap-3"
              >
                <HiExclamation className="text-2xl flex-shrink-0" />
                <div>
                  <strong>Not Available:</strong> This position is currently not accepting applications. 
                  The details are for informational purposes only.
                </div>
              </motion.div>
            )}
          </motion.div>

          {/* --- Job Profile Section --- */}
          <motion.section
            initial="offscreen"
            whileInView="onscreen"
            viewport={{ once: true, amount: 0.3 }}
            variants={sectionVariants}
          >
            <h2 className="text-3xl font-semibold mb-6 border-l-4 border-blue-600 pl-4">
              Job Profile
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed">{job.jobProfile}</p>
          </motion.section>

          {/* --- Key Responsibilities Section --- */}
          {job.keyResponsibilities && (
            <motion.section
              initial="offscreen"
              whileInView="onscreen"
              viewport={{ once: true, amount: 0.3 }}
              variants={sectionVariants}
            >
              <h2 className="text-3xl font-semibold mb-6 border-l-4 border-blue-600 pl-4">
                Key Responsibilities
              </h2>
              <ul className="space-y-3">
                {job.keyResponsibilities.map((item, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <HiCheckCircle className="text-green-500 text-xl flex-shrink-0 mt-1" />
                    <span className="text-lg text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
            </motion.section>
          )}

          {/* --- All Details Section --- */}
          <motion.section
            initial="offscreen"
            whileInView="onscreen"
            viewport={{ once: true, amount: 0.3 }}
            variants={sectionVariants}
          >
            <h2 className="text-3xl font-semibold mb-8 border-l-4 border-blue-600 pl-4">
              Full Job Details
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-6 text-base">
              {/* --- Group 1: Requirements --- */}
              <h3 className="md:col-span-2 text-xl font-bold text-gray-800 mt-4 mb-2 border-b pb-2">Requirements</h3>
              <DetailItem icon={<HiCheckCircle />} title="Educational Qualification">{job.educationalQualification}</DetailItem>
              <DetailItem icon={<HiCheckCircle />} title="Experience Required">{job.experienceRequired}</DetailItem>
              <DetailItem icon={<HiCheckCircle />} title="Computer Knowledge">{job.computerKnowledge}</DetailItem>
              <DetailItem icon={<HiCheckCircle />} title="Additional Skills">{job.additionalSkills}</DetailItem>
              <DetailItem icon={<HiCheckCircle />} title="Language Proficiency">{job.languageProficiency}</DetailItem>
              <DetailItem icon={<HiCheckCircle />} title="Typing Speed">{job.typingSpeed}</DetailItem>
              <DetailItem icon={<HiCheckCircle />} title="Age Limit">{job.ageLimit}</DetailItem>
              <DetailItem icon={<HiCheckCircle />} title="Gender">{job.gender}</DetailItem>
              <DetailItem icon={<HiCheckCircle />} title="Eligibility Criteria">{job.eligibilityCriteria}</DetailItem>

              {/* --- Group 2: Compensation --- */}
              <h3 className="md:col-span-2 text-xl font-bold text-gray-800 mt-4 mb-2 border-b pb-2">Compensation & Benefits</h3>
              <DetailItem icon={<HiCurrencyRupee />} title="Yearly Salary (CTC)">{job.yearlySalaryCTC}</DetailItem>
              <DetailItem icon={<HiCurrencyRupee />} title="Monthly Salary">{job.monthlySalary}</DetailItem>
              <DetailItem icon={<HiCurrencyRupee />} title="Salary & Other Benefits">{job.salaryAndOtherBenefits}</DetailItem>
              <DetailItem icon={<HiCurrencyRupee />} title="Growth Opportunities">{job.growthOpportunities}</DetailItem>

              {/* --- Group 3: Selection Process --- */}
              <h3 className="md:col-span-2 text-xl font-bold text-gray-800 mt-4 mb-2 border-b pb-2">Recruitment Process</h3>
              <DetailItem icon={<HiCheckCircle />} title="Selection Process">{job.selectionProcess}</DetailItem>
              <DetailItem icon={<HiCheckCircle />} title="Recruitment Rounds">{job.recruitmentRounds}</DetailItem>
              <DetailItem icon={<HiCheckCircle />} title="Interview Mode">{job.interviewMode}</DetailItem>
              <DetailItem icon={<HiCheckCircle />} title="Application Submission Method">{job.applicationSubmissionMethod}</DetailItem>
              <DetailItem icon={<HiCheckCircle />} title="Required Documents">{job.requiredDocuments}</DetailItem>
              
              {/* --- Group 4: Guidelines --- */}
              <h3 className="md:col-span-2 text-xl font-bold text-gray-800 mt-4 mb-2 border-b pb-2">Guidelines & Notices</h3>
              <DetailItem icon={<HiCheckCircle />} title="Job Instruction">{job.jobInstruction}</DetailItem>
              <DetailItem icon={<HiCheckCircle />} title="Job Guidelines">{job.jobGuidelines}</DetailItem>
              <DetailItem icon={<HiCheckCircle />} title="Important Notice">{job.importantNotice}</DetailItem>
            </div>
          </motion.section>

        </div> {/* --- End of Left Column --- */}

        {/* --- Sticky Sidebar (Right Column) --- */}
        <div className="w-full md:w-1/3">
          <motion.div 
            className="md:sticky top-32 p-6 bg-gray-50 border border-gray-200 rounded-xl shadow-lg"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Job Summary</h3>
            <div className="space-y-5">
              <DetailItem icon={<HiIdentification />} title="Job Code">{job.jobCode}</DetailItem>
              <DetailItem icon={<HiBriefcase />} title="Job Type">{job.jobType}</DetailItem>
              <DetailItem icon={<HiClock />} title="Work Mode">{job.workMode}</DetailItem>
              <DetailItem icon={<HiClock />} title="Working Hours">{job.workingHours}</DetailItem>
              <DetailItem icon={<HiUserGroup />} title="Vacancies">{job.numberOfVacancies}</DetailItem>
              <DetailItem icon={<HiCalendar />} title="Application Ends">{job.applicationEndDate}</DetailItem>
              <DetailItem icon={<HiCurrencyRupee />} title="Application Fees">{job.applicationFees}</DetailItem>
            </div>

            {/* --- THE LOGIC FOR THE BUTTON --- */}
            {!isUnavailable && (
              <Link
                to={`/apply/${job.id}`} // Links to the form
                className="block w-full text-center mt-8 bg-green-600 text-white px-6 py-4 rounded-lg text-lg font-bold hover:bg-green-700 transition shadow-lg"
              >
                Agree & Register Now
              </Link>
            )}
            
            {isUnavailable && (
               <div className="w-full text-center mt-8 bg-gray-400 text-white px-6 py-4 rounded-lg text-lg font-bold cursor-not-allowed">
                Applications Closed
              </div>
            )}
          </motion.div>
        </div> {/* --- End of Right Column --- */}

      </div>
    </div>
  );
};

export default JobDetailsPage;