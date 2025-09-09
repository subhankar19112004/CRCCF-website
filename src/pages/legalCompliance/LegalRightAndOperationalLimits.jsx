import React from "react";
import { Link } from "react-router-dom";

const LegalRightAndOperationalLimits = () => {
  return (
    <section className="px-4 sm:px-6 lg:px-8 py-12 max-w-5xl mx-auto">
      <nav className="text-sm mb-6 text-gray-600">
        <Link to="/" className="hover:underline">Home</Link> /{" "}
        <Link to="/legal-compliance" className="hover:underline">Legal Compliance</Link> / Legal Right & Operational Limits
      </nav>

      <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
        Legal Right & Operational Limits
      </h1>

      <div className="space-y-5 text-gray-700 leading-relaxed">
        <p>
          While CRCCF has defined legal rights to carry out cybersecurity research and investigation, 
          we strictly adhere to operational limits defined by law.
        </p>
        <p>
          This ensures ethical handling of sensitive cases and prevents overreach beyond our approved jurisdiction.
        </p>
        <ul className="list-disc pl-6 space-y-2">
          <li>Boundaries defined by cyber investigation laws.</li>
          <li>No unauthorized surveillance or private data access.</li>
          <li>Full accountability for every investigation we conduct.</li>
        </ul>
      </div>
    </section>
  );
};

export default LegalRightAndOperationalLimits;
