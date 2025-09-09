import React from "react";
import { Link } from "react-router-dom";

const CyberInvestigationComplianceFramework = () => {
  return (
    <section className="px-4 sm:px-6 lg:px-8 py-12 max-w-5xl mx-auto">
      <nav className="text-sm mb-6 text-gray-600">
        <Link to="/" className="hover:underline">Home</Link> /{" "}
        <Link to="/legal-compliance" className="hover:underline">Legal Compliance</Link> / Cyber Investigation Compliance Framework
      </nav>

      <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
        Cyber Investigation Compliance Framework
      </h1>

      <div className="space-y-5 text-gray-700 leading-relaxed">
        <p>
          CRCCF follows a robust compliance framework for cyber investigations, ensuring 
          adherence to legal, ethical, and professional standards at all times.
        </p>
        <p>
          This framework integrates industry best practices and is updated regularly 
          to address emerging challenges in the digital landscape.
        </p>
        <ul className="list-disc pl-6 space-y-2">
          <li>ISO-certified forensic methodologies.</li>
          <li>Compliance with digital evidence handling standards.</li>
          <li>Regular compliance training for investigation teams.</li>
        </ul>
      </div>
    </section>
  );
};

export default CyberInvestigationComplianceFramework;
