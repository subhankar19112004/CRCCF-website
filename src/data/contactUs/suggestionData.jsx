// src/data/contactUs/suggestionData.jsx

export const suggestionFormSchema = [
  // --- SECTION 1: PERSONAL IDENTITY ---
  {
    sectionTitle: "Personal Identity",
    fields: [
      { 
        id: "fullName", 
        label: "Full Name", 
        type: "text", 
        placeholder: "Enter your full name", 
        required: true, 
        gridSpan: 1 
      },
      { 
        id: "fatherName", 
        label: "Father's Name", 
        type: "text", 
        placeholder: "Enter father's name", 
        required: true, 
        gridSpan: 1 
      },
      { 
        id: "dob", 
        label: "Date of Birth", 
        type: "date", 
        required: true, 
        gridSpan: 1 
      },
      {
        id: "gender",
        label: "Gender",
        type: "select",
        // Your specific options
        options: ["Male", "Female", "Rather not to say", "Do not want to disclose"],
        required: true,
        gridSpan: 1
      },
      { 
        id: "occupation", 
        label: "Occupation", 
        type: "text", 
        placeholder: "Current profession / Job title", 
        required: false, 
        gridSpan: 2 // Full width for better visual balance
      },
    ]
  },

  // --- SECTION 2: CONTACT COORDINATES ---
  {
    sectionTitle: "Contact Information",
    fields: [
      { 
        id: "mobileNumber", 
        label: "Mobile Number", 
        type: "tel", 
        placeholder: "+91 XXXXX XXXXX", 
        required: true, 
        gridSpan: 1 
      },
      {
        id: "whatsappNumber",
        label: "WhatsApp Number",
        type: "tel",
        placeholder: "+91 XXXXX XXXXX",
        required: true,
        gridSpan: 1,
        // Smart Logic for Toggle
        hasCopyToggle: true, 
        toggleLabel: "Same as Mobile Number"
      },
      { 
        id: "emailId", 
        label: "Email Address", 
        type: "email", 
        placeholder: "name@example.com", 
        required: true, 
        gridSpan: 2 
      }
    ]
  },

  // --- SECTION 3: YOUR SUGGESTION ---
  {
    sectionTitle: "Your Suggestion",
    fields: [
      { 
        id: "message", 
        label: "Suggestion Details", 
        type: "textarea", 
        placeholder: "Please describe your idea or suggestion in detail...", 
        required: true, 
        gridSpan: 2 
      }
    ]
  },

  // --- SECTION 4: ATTACHMENTS (Optional) ---
  {
    sectionTitle: "Supporting Documents",
    fields: [
      {
        id: "documents",
        label: "Upload Documents (Optional)",
        type: "file",
        accept: ".pdf, .jpeg, .jpg, .png, .mp4",
        helperText: "Supported: PDF, JPEG, PNG, MP4 (Max 10MB)",
        required: false,
        gridSpan: 2
      }
    ]
  }
];