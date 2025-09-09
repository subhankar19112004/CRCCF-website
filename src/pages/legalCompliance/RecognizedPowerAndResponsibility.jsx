import React from "react";
import { Link } from "react-router-dom";

const RecognizedPowerAndResponsibility = () => {
  return (
    <section className="px-4 sm:px-6 lg:px-8 py-12 max-w-5xl mx-auto">
      <nav className="text-sm mb-6 text-gray-600">
        <Link to="/" className="hover:underline">Home</Link> /{" "}
        <Link to="/legal-compliance" className="hover:underline">Legal Compliance</Link> / Recognized Power & Responsibility
      </nav>

      <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
        Recognized Power & Responsibility
      </h1>

      <div className="space-y-5 text-gray-700 leading-relaxed">
        <p>
          CRCCF operates under recognized legal authority, ensuring our power and responsibilities 
          are exercised within established legal limits.
        </p>
        <p>
          Our approach emphasizes accountability, transparency, and ethical enforcement.
        </p>
        <ul className="list-disc pl-6 space-y-2">
          <li>Defined jurisdiction and powers.</li>
          <li>Ethical and legal responsibility in investigations.</li>
          <li>Transparent governance and reporting structure.</li>
        </ul>
      </div>
    </section>
  );
};

export default RecognizedPowerAndResponsibility;
