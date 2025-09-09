import React from "react";
import { Link } from "react-router-dom";

const CyberSecurityAndInvestigationProtocols = () => {
  return (
    <section className="px-4 sm:px-6 lg:px-8 py-12 max-w-5xl mx-auto">
      <nav className="text-sm mb-6 text-gray-600">
        <Link to="/" className="hover:underline">Home</Link> /{" "}
        <Link to="/legal-compliance" className="hover:underline">Legal Compliance</Link> / Cyber Security & Investigation Protocols
      </nav>

      <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
        Cyber Security & Investigation Protocols
      </h1>

      <div className="space-y-5 text-gray-700 leading-relaxed">
        <p>
          CRCCF follows defined cybersecurity and digital forensic protocols to ensure 
          investigations are secure, reliable, and compliant with legal frameworks.
        </p>
        <p>
          These protocols help maintain evidence integrity and ensure operational safety.
        </p>
        <ul className="list-disc pl-6 space-y-2">
          <li>Use of secured forensic toolkits and encrypted data channels.</li>
          <li>Standard Operating Procedures for evidence handling.</li>
          <li>Regular protocol audits and upgrades.</li>
        </ul>
      </div>
    </section>
  );
};

export default CyberSecurityAndInvestigationProtocols;
