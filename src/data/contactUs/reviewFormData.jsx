// src/data/contactUs/reviewFormData.jsx

export const reviewFormSchema = [
  // --- SECTION 1: IDENTITY ---
  {
    sectionTitle: "Reviewer Identity",
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
        options: ["Male", "Female", "Rather not to say", "Do not want to disclose"],
        required: true,
        gridSpan: 1
      },
      { 
        id: "occupation", 
        label: "Occupation", 
        type: "text", 
        placeholder: "Current profession", 
        required: false, 
        gridSpan: 2 
      },
    ]
  },

  // --- SECTION 2: CONTACT COORDINATES ---
  {
    sectionTitle: "Contact Verification",
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
        // Smart Logic
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

  // --- SECTION 3: THE REVIEW & RATINGS ---
  {
    sectionTitle: "Your Experience",
    fields: [
      { 
        id: "subject", 
        label: "Review Subject / Title", 
        type: "text", 
        placeholder: "e.g., Excellent Support during Investigation", 
        required: true, 
        gridSpan: 2 
      },
      { 
        id: "message", 
        label: "Detailed Review Message", 
        type: "textarea", 
        placeholder: "Share your story or feedback in detail...", 
        required: true, 
        gridSpan: 2 
      },
      // --- THE 5 STAR RATING CRITERIA ---
      { 
        id: "rating_overall", 
        label: "Overall Satisfaction", 
        type: "rating", 
        maxStars: 5, 
        required: true, 
        gridSpan: 2 
      },
      { 
        id: "rating_speed", 
        label: "Speed of Response", 
        type: "rating", 
        maxStars: 5, 
        required: false, 
        gridSpan: 1 
      },
      { 
        id: "rating_knowledge", 
        label: "Staff Knowledge & Expertise", 
        type: "rating", 
        maxStars: 5, 
        required: false, 
        gridSpan: 1 
      },
      { 
        id: "rating_communication", 
        label: "Communication Clarity", 
        type: "rating", 
        maxStars: 5, 
        required: false, 
        gridSpan: 1 
      },
      { 
        id: "rating_process", 
        label: "Ease of Process", 
        type: "rating", 
        maxStars: 5, 
        required: false, 
        gridSpan: 1 
      }
    ]
  },

  // --- SECTION 4: EVIDENCE ---
  {
    sectionTitle: "Attachments",
    fields: [
      {
        id: "documents",
        label: "Upload Supporting Files (Optional)",
        type: "file",
        accept: ".pdf, .jpeg, .jpg, .png, .mp4",
        helperText: "Supported: PDF, JPEG, PNG, MP4 (Max 10MB)",
        required: false,
        gridSpan: 2
      }
    ]
  }
];