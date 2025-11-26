import React, { useState, useCallback, useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { useDropzone } from 'react-dropzone';
import { Toaster, toast } from 'react-hot-toast';

// --- Our "Brain" with all the new info fields ---
// (This file MUST exist at this path for the code to work)
import { formSteps, validationSchema } from '../../data/job_vacancy/formSchema';

// --- Mock Job Data (Make sure this path is correct) ---
// (This file MUST exist at this path for the code to work)
import { jobData } from '../../data/job_vacancy/jobData';

// --- Icons (You must run: npm install react-icons) ---
import { 
  HiChevronLeft, HiChevronRight, HiCheck, HiOutlineSparkles,
  HiOutlineInformationCircle, HiPaperClip, HiXCircle, HiUpload,
  HiX
} from 'react-icons/hi';
// This icon is from 'hi2' (Heroicons v2)
import { HiComputerDesktop } from 'react-icons/hi2';


// --- NEW "Desktop Recommended" Popup ---
const DesktopViewPopup = () => {
  const [isOpen, setIsOpen] = useState(false);

  // Only show the popup once on mobile devices
  useEffect(() => {
    // We check if the popup was already dismissed in this session
    const dismissed = sessionStorage.getItem('dismissedDesktopPopup');
    if (window.innerWidth < 768 && !dismissed) {
      setIsOpen(true);
    }
  }, []);

  const handleDismiss = () => {
    sessionStorage.setItem('dismissedDesktopPopup', 'true');
    setIsOpen(false);
  };

  if (!isOpen) return null;

  return (
    // This `md:hidden` class is what makes it mobile-only
    <div className="md:hidden fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Backdrop */}
      <div className="fixed inset-0 bg-black/50 backdrop-blur-sm" />
      
      {/* Modal */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        className="relative z-10 w-full max-w-sm bg-white rounded-xl shadow-2xl p-6"
      >
        <div className="flex flex-col items-center text-center">
          <HiComputerDesktop  className="w-16 h-16 text-blue-600 mb-4" />
          <h2 className="text-xl font-bold text-gray-900 mb-2">Desktop Recommended</h2>
          <p className="text-gray-600 mb-6">
            For a proper view and the best experience, we recommend applying on a desktop or laptop.
          </p>
          <button
            onClick={handleDismiss}
            className="w-full px-4 py-3 bg-blue-600 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700"
          >
            Continue Anyway
          </button>
        </div>
      </motion.div>
    </div>
  );
};

// --- NEW "i" Info Tooltip (Mobile Friendly) ---
const InfoTooltip = ({ text }) => {
  const [show, setShow] = useState(false);
  return (
    <div className="relative inline-block ml-1">
      {/* Button wrapper for better accessibility and mobile tap */}
      <button
        type="button"
        onMouseEnter={() => setShow(true)}
        onMouseLeave={() => setShow(false)}
        onClick={() => setShow(s => !s)} // Toggle on click for mobile
        onBlur={() => setShow(false)} // Hides when you click away
        className="cursor-pointer"
      >
        <HiOutlineInformationCircle className="w-5 h-5 text-gray-500" />
      </button>
      <AnimatePresence>
        {show && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            // Added max-w-xs for very long info text
            className="absolute z-50 w-64 max-w-xs p-3 bg-gray-800 text-white text-sm rounded-lg shadow-lg -top-2 left-6"
            style={{ transform: 'translateY(-100%)' }} // Position above the icon
          >
            {text}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

// --- Reusable File Upload Component ---
const FileUploader = ({ field, setValue, errors }) => {
  const onDrop = useCallback((acceptedFiles) => {
    if (acceptedFiles[0]) {
      setValue(field.id, acceptedFiles[0], { shouldValidate: true });
    }
  }, [setValue, field.id]);

  const { getRootProps, getInputProps, isDragActive, acceptedFiles, fileRejections } = useDropzone({
    onDrop,
    accept: { 
      'application/pdf': ['.pdf'], 
      'application/msword': ['.doc'], 
      'application/vnd.openxmlformats-officedocument.wordprocessingml.document': ['.docx'] 
    },
    maxFiles: 1,
  });

  return (
    <div className="md:col-span-2">
      <label className="flex items-center text-base font-medium text-gray-800 mb-2">
        {field.label}
        {validationSchema.shape[field.id] && !validationSchema.shape[field.id].isOptional() && <span className="text-red-500 ml-1">*</span>}
        {field.info && <InfoTooltip text={field.info} />}
      </label>
      <div
        {...getRootProps()}
        className={`mt-2 flex justify-center px-6 pt-10 pb-10 border-2 ${isDragActive ? 'border-blue-500 bg-blue-50' : 'border-gray-300'} border-dashed rounded-xl cursor-pointer transition-all`}
      >
        <input {...getInputProps()} />
        <div className="text-center">
          <HiUpload className="mx-auto h-12 w-12 text-gray-400" />
          <p className="mt-4 text-lg text-gray-600">
            {isDragActive ? "Drop your file here..." : "Drag & drop, or click to upload"}
          </p>
          <p className="text-sm text-gray-500 mt-1">PDF, DOC, DOCX (Max 10MB)</p>
        </div>
      </div>
      
      {acceptedFiles.length > 0 && (
        <div className="mt-4 p-3 bg-green-50 border border-green-300 rounded-lg flex items-center justify-between">
          <div className="flex items-center gap-3">
            <HiPaperClip className="text-green-700" />
            <span className="text-green-800 font-medium">{acceptedFiles[0].name}</span>
          </div>
          <button type="button" onClick={() => setValue(field.id, null, { shouldValidate: true })}>
            <HiXCircle className="text-red-500 text-xl hover:text-red-700" />
          </button>
        </div>
      )}
      {fileRejections.length > 0 && (<p className="text-red-600 mt-2">File type not accepted.</p>)}
      {errors[field.id] && (<p className="text-red-600 mt-2">{errors[field.id].message}</p>)}
    </div>
  );
};


// --- Reusable Input Field Component (Updated) ---
const FormField = ({ field, register, errors, isAddressSame, watch }) => {
  // Check if we should disable this field
  const isDisabled = isAddressSame && field.id.startsWith('permanent');
  
  const commonClasses = `w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-gray-800 ${errors[field.id] ? 'border-red-500' : 'border-gray-300'} ${isDisabled ? 'bg-gray-100 cursor-not-allowed' : ''}`;

  // Handle file inputs (delegated to FileUploader)
  if (field.type === 'file') {
    return null;
  }

  // Handle the "Same as Present" checkbox
  if (field.type === 'checkbox') {
    return (
      <div className="md:col-span-2 flex items-center">
        <input
          type="checkbox"
          id={field.id}
          {...register(field.id)}
          className="h-4 w-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
        />
        <label htmlFor={field.id} className="ml-2 flex items-center text-base font-medium text-gray-800">
          {field.label}
          {field.info && <InfoTooltip text={field.info} />}
        </label>
      </div>
    );
  }

  return (
    <div className={field.span === 2 ? "md:col-span-2" : "md:col-span-1"}>
      <label htmlFor={field.id} className="flex items-center text-base font-medium text-gray-800 mb-2">
        {field.label}
        {validationSchema.shape[field.id] && !validationSchema.shape[field.id].isOptional() && (
          <span className="text-red-500 ml-1">*</span>
        )}
        {/* HERE IS THE "i" ICON LOGIC */}
        {field.info && <InfoTooltip text={field.info} />}
      </label>
      
      {field.type === 'select' ? (
        <select id={field.id} {...register(field.id)} className={commonClasses} disabled={isDisabled}>
          {field.options.map(option => (
            <option key={option} value={option === field.options[0] ? "" : option}>
              {option}
            </option>
          ))}
        </select>
      ) : field.type === 'textarea' ? (
        <textarea
          id={field.id}
          {...register(field.id)}
          className={commonClasses}
          placeholder={field.placeholder || ''}
          rows="4"
          disabled={isDisabled}
        />
      ) : (
        <input
          type={field.type}
          id={field.id}
          {...register(field.id)}
          className={commonClasses}
          placeholder={field.placeholder || ''}
          disabled={isDisabled}
        />
      )}
      
      {errors[field.id] && (
        <p className="text-red-600 mt-1 text-sm">{errors[field.id].message}</p>
      )}
    </div>
  );
};

// --- *** NEW & FIXED *** Form Progress Bar ---
const FormProgress = ({ currentStep, totalSteps, steps }) => {
  return (
    <nav className="mb-12" aria-label="Progress">
      {/* This is the key fix:
        - flex-col (Mobile): Stacks vertically.
        - md:flex-row (Desktop): Stays horizontal.
        - md:flex-nowrap (Desktop): PREVENTS scattering/wrapping.
      */}
      <ol className="flex flex-col md:flex-row md:flex-nowrap items-start md:items-center justify-between">
        {steps.map((step, index) => {
          const stepNumber = index + 1;
          const isCompleted = stepNumber < currentStep;
          const isCurrent = stepNumber === currentStep;

          return (
            <li 
              key={step.stepName} 
              // 'md:flex-1' makes them space out evenly on desktop
              // 'w-full' makes them stack neatly on mobile
              className="relative w-full md:flex-1 mb-6 md:mb-0"
            >
              {/* This is the line that connects the steps */}
              {stepNumber < totalSteps && (
                <div 
                  // Vertical line on mobile
                  className={`absolute top-10 left-5 -ml-px h-full w-0.5
                            ${isCompleted ? 'bg-blue-600' : 'bg-gray-300'}
                            md:hidden`} // Hide on desktop
                />
              )}
              {stepNumber < totalSteps && (
                <div 
                  // Horizontal line on desktop
                  className={`hidden md:block absolute top-5 left-1/2 w-full h-0.5
                            ${isCompleted ? 'bg-blue-600' : 'bg-gray-300'}
                  `}
                />
              )}

              <div className="relative flex items-center">
                <div 
                  className={`relative z-10 w-10 h-10 rounded-full flex items-center justify-center font-bold
                    ${isCompleted ? 'bg-blue-600 text-white' : ''}
                    ${isCurrent ? 'bg-blue-100 text-blue-600 border-2 border-blue-600' : ''}
                    ${!isCompleted && !isCurrent ? 'bg-gray-100 text-gray-500 border border-gray-300' : ''}
                  `}
                >
                  {isCompleted ? <HiCheck size={20} /> : stepNumber}
                </div>
                <span 
                  className={`ml-4 text-sm font-medium
                    ${isCurrent ? 'text-blue-600' : 'text-gray-600'}
                    ${isCompleted ? 'text-gray-900' : ''}
                  `}
                >
                  {step.stepName}
                </span>
              </div>
            </li>
          );
        })}
      </ol>
    </nav>
  );
};


// --- Animation for each STEP ---
const stepVariants = {
  hidden: { opacity: 0, x: 50 },
  visible: { opacity: 1, x: 0 },
  exit: { opacity: 0, x: -50 },
};

// --- Main Form Component ---
const JobApplicationForm = () => {
  const { jobId } = useParams();
  // We add a fallback 'job' object in case jobData fails or is empty
  const job = jobData.find((j) => j.id === jobId) || { jobTitle: "Selected Position", status: "Available" };
  const navigate = useNavigate();

  // --- Multi-Step State ---
  const [currentStep, setCurrentStep] = useState(0); // Start at step 0 (index)
  const totalSteps = formSteps.length;

  const { 
    register, 
    handleSubmit, 
    setValue, 
    trigger, // We'll use this to validate on "Next"
    watch, // We need this to watch the "isSameAsPresent" checkbox
    formState: { errors } 
  } = useForm({
    resolver: zodResolver(validationSchema),
    mode: "onTouched",
  });

  // --- Logic for "Same as Present Address" ---
  const isAddressSame = watch("isSameAsPresent");
  const presentAddressValues = watch([
    "presentAddressLine", 
    "presentCity", 
    "presentDistrict", 
    "presentState", 
    "presentPincode", 
    "presentPoliceStation"
  ]);

  useEffect(() => {
    if (isAddressSame) {
      setValue("permanentAddressLine", presentAddressValues[0]);
      setValue("permanentCity", presentAddressValues[1]);
      setValue("permanentDistrict", presentAddressValues[2]);
      setValue("permanentState", presentAddressValues[3]);
      setValue("permanentPincode", presentAddressValues[4]);
      setValue("permanentPoliceStation", presentAddressValues[5]);
    }
  }, [isAddressSame, presentAddressValues, setValue]);
  // --- End of Address Logic ---


  // --- Navigation Logic ---
  const nextStep = async () => {
    const fieldsToValidate = formSteps[currentStep].fields.map(f => f.id);
    const isValid = await trigger(fieldsToValidate);

    if (isValid) {
      if (currentStep < totalSteps - 1) {
        setCurrentStep(prev => prev + 1);
        window.scrollTo(0, 0); // Scroll to top on step change
      }
    } else {
      toast.error("Please fill in all required fields correctly.");
    }
  };

  const prevStep = () => {
    if (currentStep > 0) {
      setCurrentStep(prev => prev - 1);
      window.scrollTo(0, 0); // Scroll to top on step change
    }
  };

  // --- Final Submit Handler ---
  const onSubmit = (data) => {
    const toastId = toast.loading('Submitting your application...');
    console.log("FORM SUBMITTED:", data);

    // In a real app, you would convert to FormData for file uploads
    // const formData = new FormData();
    // Object.keys(data).forEach(key => {
    //   formData.append(key, data[key]);
    // });
    // ... then fetch ...

    setTimeout(() => {
      toast.success('Application Submitted Successfully!', { id: toastId, duration: 4000 });
      setTimeout(() => navigate("/recruitment-process/job-vacancy"), 2000);
    }, 2000);
  };
  
  if (job.status === 'Unavailable') { 
    return (
      <div className="text-center p-10">
        <h1 className="text-3xl font-bold text-red-600">This Job is No Longer Available</h1>
        <button
          onClick={() => navigate(-1)}
          className="mt-6 flex items-center mx-auto px-6 py-3 bg-blue-600 text-white font-medium rounded-lg shadow-md hover:bg-blue-700"
        >
          <HiChevronLeft size={20} className="mr-2" />
          Back to Job List
        </button>
      </div>
    );
  }

  const currentStepData = formSteps[currentStep];

  return (
    <div className="container mx-auto px-4 py-16 max-w-6xl">
      <Toaster position="top-right" />
      
      {/* ADD THE POPUP HERE */}
      <DesktopViewPopup />

      {/* --- Back Button --- */}
      <button
        onClick={() => navigate(-1)}
        className="flex items-center gap-2 text-blue-600 font-semibold mb-8 hover:underline"
      >
        <HiChevronLeft /> Back to Job Details
      </button>

      {/* --- Form Header --- */}
      <div className="text-center mb-10">
        <HiOutlineSparkles className="mx-auto text-5xl text-blue-600 mb-2" />
        <h1 className="text-4xl md:text-5xl font-bold">Application Form</h1>
        <p className="text-2xl text-blue-600 font-semibold mt-2">{job.jobTitle}</p>
      </div>

      {/* --- Progress Bar --- */}
      <FormProgress currentStep={currentStep + 1} totalSteps={totalSteps} steps={formSteps} />

      {/* --- Main Form --- */}
      <form onSubmit={handleSubmit(onSubmit)}>
        
        <AnimatePresence mode="wait">
          <motion.section
            key={currentStep} 
            variants={stepVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            transition={{ type: "tween", ease: "easeInOut", duration: 0.4 }}
            className="bg-white border border-gray-200 rounded-xl shadow-xl p-6 md:p-8"
          >
            <h2 className="text-2xl font-bold text-gray-900 mb-6 border-l-4 border-blue-600 pl-4">
              {currentStepData.stepName}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-6">
              {currentStepData.fields.map(field => {
                // SPECIAL RENDER FOR FILE UPLOADS
                if (field.type === 'file') {
                  return (
                    <FileUploader 
                      key={field.id}
                      field={field}
                      setValue={setValue}
                      errors={errors}
                    />
                  );
                }
                // ALL OTHER FIELDS
                return (
                  <FormField
                    key={field.id}
                    field={field}
                    register={register}
                    errors={errors}
                    isAddressSame={isAddressSame}
                    watch={watch}
                  />
                );
              })}
            </div>
          </motion.section>
        </AnimatePresence>
        
        {/* --- Navigation Buttons --- */}
        <div className="mt-12 pt-6 border-t border-gray-200 flex justify-between">
          <button
            type="button"
            onClick={prevStep}
            disabled={currentStep === 0}
            className="flex items-center px-6 py-3 bg-gray-200 text-gray-700 font-medium rounded-lg shadow-sm hover:bg-gray-300 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            <HiChevronLeft size={20} className="mr-2" />
            Previous
          </button>
          
          {currentStep < totalSteps - 1 ? (
            <button
              type="button"
              onClick={nextStep}
              className="flex items-center px-6 py-3 bg-blue-600 text-white font-medium rounded-lg shadow-md hover:bg-blue-700"
            >
              Next
              <HiChevronRight size={20} className="ml-2" />
            </button>
          ) : (
            <button
              type="submit" 
              className="flex items-center px-6 py-3 bg-green-600 text-white font-medium rounded-lg shadow-md hover:bg-green-700"
            >
              Submit Full Application
              <HiCheck size={20} className="ml-2" />
            </button>
          )}
        </div>
      </form>
    </div>
  );
};

export default JobApplicationForm;