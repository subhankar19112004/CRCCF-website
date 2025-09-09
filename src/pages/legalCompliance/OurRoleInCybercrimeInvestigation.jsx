import React from "react";
import { Link } from "react-router-dom";

const OurRoleInCybercrimeInvestigation = () => {
  return (
    <section className="px-4 sm:px-6 lg:px-8 py-12 max-w-5xl mx-auto">
      <nav className="text-sm mb-6 text-gray-600">
        <Link to="/" className="hover:underline">Home</Link> /{" "}
        <Link to="/legal-compliance" className="hover:underline">Legal Compliance</Link> / Our Role in Cybercrime Investigation
      </nav>

      <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
        Our Role in Cybercrime Investigation
      </h1>

      <div className="space-y-5 text-gray-700 leading-relaxed">
        <p>
          CRCCF acts as a trusted partner to law enforcement agencies by providing 
          technical expertise and forensic analysis in cybercrime investigations.
        </p>
        <p>
          We maintain a neutral and professional approach, ensuring that investigations 
          are conducted with transparency and adherence to the rule of law.
        </p>
        <ul className="list-disc pl-6 space-y-2">
          <li>Support for evidence collection and validation.</li>
          <li>Technical guidance for complex cybercrime cases.</li>
          <li>Policy recommendations based on investigation findings.</li>
        </ul>
      </div>
    </section>
  );
};

export default OurRoleInCybercrimeInvestigation;
