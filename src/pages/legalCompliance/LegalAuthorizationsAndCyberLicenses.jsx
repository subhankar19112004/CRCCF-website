import React from "react";
import { Link } from "react-router-dom";

const LegalAuthorizationsAndCyberLicenses = () => {
  return (
    <section className="px-4 sm:px-6 lg:px-8 py-12 max-w-5xl mx-auto">
      <nav className="text-sm mb-6 text-gray-600">
        <Link to="/" className="hover:underline">Home</Link> /{" "}
        <Link to="/legal-compliance" className="hover:underline">Legal Compliance</Link> / Legal Authorizations & Cyber Licenses
      </nav>

      <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
        Legal Authorizations & Cyber Licenses
      </h1>

      <div className="space-y-5 text-gray-700 leading-relaxed">
        <p>
          CRCCF holds specialized legal authorizations that enable us to handle sensitive cyber investigations 
          and security operations. These include licenses granted by relevant authorities for secure digital 
          evidence handling and cyber forensics.
        </p>
        <p>
          We ensure continuous renewal of all licenses and follow strict compliance with licensing obligations.
        </p>
        <ul className="list-disc pl-6 space-y-2">
          <li>Licensed for cyber forensic operations.</li>
          <li>Authorized for incident response and evidence collection.</li>
          <li>Certified under data security compliance programs.</li>
        </ul>
      </div>
    </section>
  );
};

export default LegalAuthorizationsAndCyberLicenses;
