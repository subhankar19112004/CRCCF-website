import React from "react";
import { Link } from "react-router-dom";

const OurLegalIdentity = () => {
  return (
    <section className="px-4 sm:px-6 lg:px-8 py-12 max-w-5xl mx-auto">
      {/* Breadcrumb */}
      <nav className="text-sm mb-6 text-gray-600">
        <Link to="/" className="hover:underline">Home</Link> /{" "}
        <Link to="/legal-compliance" className="hover:underline">Legal Compliance</Link> / Our Legal Identity
      </nav>

      {/* Title */}
      <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
        Our Legal Identity
      </h1>

      {/* Content */}
      <div className="space-y-5 text-gray-700 leading-relaxed">
        <p>
          CRCCF’s legal identity is rooted in statutory recognition, ensuring that every activity we undertake
          is backed by legitimate legal status. We operate as a registered non-profit organization recognized 
          under Indian corporate and cyber laws.
        </p>
        <p>
          This identity establishes CRCCF as a trusted authority in cybersecurity, allowing us to engage in 
          research, digital forensics, and cybercrime prevention in full compliance with regulatory frameworks.
        </p>
        <ul className="list-disc pl-6 space-y-2">
          <li>Registered under Section 8 of the Companies Act, 2013.</li>
          <li>Compliant with Ministry of Corporate Affairs (MCA) guidelines.</li>
          <li>Recognized by leading cyber regulatory bodies.</li>
        </ul>
      </div>
    </section>
  );
};

export default OurLegalIdentity;

