import React from "react";
import { Link } from "react-router-dom";

const OurLegalEntity = () => {
  return (
    <section className="px-4 sm:px-6 lg:px-8 py-12 max-w-5xl mx-auto">
      <nav className="text-sm mb-6 text-gray-600">
        <Link to="/" className="hover:underline">Home</Link> /{" "}
        <Link to="/legal-compliance" className="hover:underline">Legal Compliance</Link> / Our Legal Entity
      </nav>

      <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
        Our Legal Entity
      </h1>

      <div className="space-y-5 text-gray-700 leading-relaxed">
        <p>
          CRCCF functions as a legally incorporated entity with full compliance to corporate governance rules.
          This ensures we have a legitimate standing to conduct cybersecurity research and deliver IT services.
        </p>
        <p>
          Our legal entity status allows us to form collaborations, undertake investigations, and partner 
          with both government and private organizations.
        </p>
        <ul className="list-disc pl-6 space-y-2">
          <li>Incorporation certificate with active legal status.</li>
          <li>Tax-exempt non-profit status under Indian corporate law.</li>
          <li>Legally binding Memorandum of Association (MoA).</li>
        </ul>
      </div>
    </section>
  );
};

export default OurLegalEntity;

