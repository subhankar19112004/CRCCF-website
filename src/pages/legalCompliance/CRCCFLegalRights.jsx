import React from "react";
import { Link } from "react-router-dom";

const CRCCFLegalRights = () => {
  return (
    <section className="px-4 sm:px-6 lg:px-8 py-12 max-w-5xl mx-auto">
      <nav className="text-sm mb-6 text-gray-600">
        <Link to="/" className="hover:underline">Home</Link> /{" "}
        <Link to="/legal-compliance" className="hover:underline">Legal Compliance</Link> / CRCCF Legal Rights
      </nav>

      <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
        CRCCF Legal Rights
      </h1>

      <div className="space-y-5 text-gray-700 leading-relaxed">
        <p>
          CRCCF holds specific legal rights granted by its recognition as a cybersecurity-focused non-profit 
          organization. These rights ensure that we can operate within a legitimate and authorized scope.
        </p>
        <p>
          The rights include research activities, policy advocacy, and collaboration with law enforcement 
          and judicial systems.
        </p>
        <ul className="list-disc pl-6 space-y-2">
          <li>Right to conduct cybercrime awareness and education programs.</li>
          <li>Right to handle digital evidence under authorized conditions.</li>
          <li>Right to partner with investigative agencies for cyber-related cases.</li>
        </ul>
      </div>
    </section>
  );
};

export default CRCCFLegalRights;
