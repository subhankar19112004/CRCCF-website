// src/data/contactUs/inquiryData.jsx

export const inquiryFormSchema = [
  // --- SECTION 1: PERSONAL IDENTITY (Restored) ---
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
        gridSpan: 1
      },
      { 
        id: "organization", 
        label: "Organization / Company", 
        type: "text", 
        placeholder: "Organization you represent (Optional)", 
        required: false, 
        gridSpan: 1 
      },
    ]
  },

  // --- SECTION 2: CONTACT INFORMATION (With Logic) ---
  {
    sectionTitle: "Contact Coordinates",
    fields: [
      { 
        id: "emailId", 
        label: "Email Address", 
        type: "email", 
        placeholder: "name@example.com", 
        required: true, 
        gridSpan: 2 
      },
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
        // Smart Logic Config
        hasCopyToggle: true, 
        toggleLabel: "Same as Mobile Number"
      }
    ]
  },

  // --- SECTION 3: THE INQUIRY (With Conditional Logic) ---
  {
    sectionTitle: "Inquiry Details",
    fields: [
      { 
        id: "inquiryCategory", 
        label: "Reason for Inquiry", 
        type: "select", 
        required: true, 
        gridSpan: 2, 
        options: [
            "General Information", 
            "Legal Assistance Request", 
            "Report a Cyber Crime (Help)", 
            "Technical Support", 
            "Partnership / Collaboration", 
            "Internship & Careers",
            "Press & Media",
            "Other" // Triggers the next field
        ]
      },
      
      // --- CONDITIONAL FIELD (Only shows if "Other" is picked) ---
      { 
        id: "otherSpecification", 
        label: "Please specify your reason", 
        type: "text", 
        placeholder: "Briefly describe your specific reason...", 
        required: true, 
        gridSpan: 2,
        dependency: {
            fieldId: "inquiryCategory",
            value: "Other"
        }
      },
      // -----------------------------------------------------------

      { 
        id: "subject", 
        label: "Subject", 
        type: "text", 
        placeholder: "Summary of your query", 
        required: true, 
        gridSpan: 2 
      },
      { 
        id: "message", 
        label: "Detailed Message", 
        type: "textarea", 
        placeholder: "Type your message here...", 
        required: true, 
        gridSpan: 2 
      }
    ]
  }
];