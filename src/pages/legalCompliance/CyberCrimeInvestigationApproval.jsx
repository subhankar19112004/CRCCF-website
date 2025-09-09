import React from "react";
import { Link } from "react-router-dom";

const CyberCrimeInvestigationApproval = () => {
  return (
    <section className="px-4 sm:px-6 lg:px-8 py-12 max-w-5xl mx-auto">
      <nav className="text-sm mb-6 text-gray-600">
        <Link to="/" className="hover:underline">Home</Link> /{" "}
        <Link to="/legal-compliance" className="hover:underline">Legal Compliance</Link> / Cyber Crime Investigation Approval
      </nav>

      <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
        Cyber Crime Investigation Approval
      </h1>

      <div className="space-y-5 text-gray-700 leading-relaxed">
        <p>
          CRCCF operates under official approvals and authorizations for cybercrime investigations. 
          These approvals ensure lawful handling of sensitive digital evidence and cooperation with 
          law enforcement agencies.
        </p>
        <p>
          Our approval process is audited and monitored to ensure transparency and prevent misuse of authority.
        </p>
        <ul className="list-disc pl-6 space-y-2">
          <li>Authorization from relevant cybercrime regulatory bodies.</li>
          <li>Case-by-case approval for specific investigations.</li>
          <li>Strict adherence to judicial permissions when required.</li>
        </ul>
      </div>
    </section>
  );
};

export default CyberCrimeInvestigationApproval;
