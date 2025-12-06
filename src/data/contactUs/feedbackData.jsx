// src/data/contactUs/feedbackData.jsx

export const feedbackFormSchema = [
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
        gridSpan: 1 // Takes up 1 column (Half width)
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
        gridSpan: 2 // Takes up 2 columns (Full Width)
      },
    ]
  },

  // --- SECTION 2: CONTACT DETAILS ---
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
        // Special logic configuration
        hasCopyToggle: true, 
        toggleLabel: "Same as Mobile Number"
      },
      { 
        id: "emailId", 
        label: "Email ID", 
        type: "email", 
        placeholder: "example@domain.com", 
        required: true, 
        gridSpan: 2 
      },
    ]
  },

  // --- SECTION 3: RATING & FEEDBACK ---
  {
    sectionTitle: "Experience & Rating",
    fields: [
      { 
        id: "overallRating", 
        label: "How would you rate your overall experience?", 
        type: "rating", 
        maxStars: 5, 
        required: true, 
        gridSpan: 2 
      },
      { 
        id: "supportRating", 
        label: "Rate our Support Quality", 
        type: "rating", 
        maxStars: 5, 
        required: false, 
        gridSpan: 1 
      },
      { 
        id: "speedRating", 
        label: "Rate our Service Speed", 
        type: "rating", 
        maxStars: 5, 
        required: false, 
        gridSpan: 1 
      },
      { 
        id: "message", 
        label: "Your Message / Suggestions", 
        type: "textarea", 
        placeholder: "Please describe your experience or suggestions in detail...", 
        required: true, 
        gridSpan: 2 
      }
    ]
  },

  // --- SECTION 4: ATTACHMENTS ---
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