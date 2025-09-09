import React from "react";
import { Link } from "react-router-dom";

const InvestigationScopeAndSocialResponsibility = () => {
  return (
    <section className="px-4 sm:px-6 lg:px-8 py-12 max-w-5xl mx-auto">
      <nav className="text-sm mb-6 text-gray-600">
        <Link to="/" className="hover:underline">Home</Link> /{" "}
        <Link to="/legal-compliance" className="hover:underline">Legal Compliance</Link> / Investigation Scope & Social Responsibility
      </nav>

      <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
        Investigation Scope & Social Responsibility
      </h1>

      <div className="space-y-5 text-gray-700 leading-relaxed">
        <p>
          CRCCF ensures its investigation scope is well-defined, focusing only on cases 
          where legal jurisdiction and ethical responsibility align.
        </p>
        <p>
          Social responsibility is at the core of our mission, ensuring that our work 
          benefits individuals, organizations, and society at large.
        </p>
        <ul className="list-disc pl-6 space-y-2">
          <li>Focus on impactful and relevant cybercrime cases.</li>
          <li>Protecting victim rights while ensuring due legal process.</li>
          <li>Promoting cyber safety awareness through case learnings.</li>
        </ul>
      </div>
    </section>
  );
};

export default InvestigationScopeAndSocialResponsibility;