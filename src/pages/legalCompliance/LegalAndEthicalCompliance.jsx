import React from "react";
import { Link } from "react-router-dom";

const LegalAndEthicalCompliance = () => {
  return (
    <section className="px-4 sm:px-6 lg:px-8 py-12 max-w-5xl mx-auto">
      <nav className="text-sm mb-6 text-gray-600">
        <Link to="/" className="hover:underline">Home</Link> /{" "}
        <Link to="/legal-compliance" className="hover:underline">Legal Compliance</Link> / Legal & Ethical Compliance
      </nav>

      <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
        Legal & Ethical Compliance
      </h1>

      <div className="space-y-5 text-gray-700 leading-relaxed">
        <p>
          CRCCF follows a strict code of ethics and compliance with all relevant legal frameworks. 
          Every investigation, partnership, and research activity undergoes ethical review.
        </p>
        <p>
          Our compliance model integrates legal obligations and professional ethical standards for 
          transparency and trustworthiness.
        </p>
        <ul className="list-disc pl-6 space-y-2">
          <li>Adherence to IT Act and data privacy laws.</li>
          <li>Internal ethics review committee oversight.</li>
          <li>Compliance audits conducted annually.</li>
        </ul>
      </div>
    </section>
  );
};

export default LegalAndEthicalCompliance;
