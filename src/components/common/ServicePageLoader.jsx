// src/components/common/ServicePageLoader.jsx
import React, { useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
// 1. Import your NEW service-only data file
import { allServicesData } from '../../data/OurServices/allServicesData.js';
import PageTemplate from './PageTemplate.jsx';

export default function ServicePageLoader() {
  const location = useLocation();
  const navigate = useNavigate();
  const currentPath = location.pathname;

  // 2. Find the matching data from the 'allServicesData' array
  const pageData = allServicesData.find(item => item.path === currentPath);

  // Update the document title (and meta description if possible)
  useEffect(() => {
    if (pageData) {
      const pageTitle = pageData.heading || pageData.title || 'Service';
      document.title = `${pageTitle} — Your Company Name`;
      // optional: update meta description if present (non-destructive)
      const metaDesc = document.querySelector('meta[name="description"]');
      if (metaDesc && pageData.description) {
        metaDesc.setAttribute('content', pageData.description);
      }
    } else {
      document.title = '404 - Page Not Found — Your Company Name';
    }
  }, [pageData]);

  // If no data is found (bad URL), show a friendly 404 / story-style page
  if (!pageData) {
    return (
      <main
        role="main"
        aria-labelledby="error-heading"
        className="min-h-screen flex items-center justify-center bg-gray-50 p-6"
      >
        {/* scoped styles for small animations */}
        <style>{`
          @keyframes floatUp {
            0% { transform: translateY(0); }
            50% { transform: translateY(-8px); }
            100% { transform: translateY(0); }
          }
          .float-up { animation: floatUp 3.5s ease-in-out infinite; }
          .pulse { animation: pulse 2.5s infinite ease-in-out; }
          @keyframes pulse {
            0% { transform: scale(1); opacity: 1; }
            50% { transform: scale(1.03); opacity: 0.92; }
            100% { transform: scale(1); opacity: 1; }
          }
          .btn-focus:focus { outline: 3px solid rgba(99,102,241,0.25); outline-offset: 3px; }
        `}</style>

        <section className="max-w-4xl w-full bg-white rounded-2xl shadow-lg overflow-hidden">
          <div className="md:flex">
            {/* Left: SVG / visual */}
            <div className="md:w-1/2 flex items-center justify-center p-8 bg-gradient-to-br from-indigo-50 to-indigo-100">
              <div className="text-center">
                {/* Animated "video error" SVG */}
                <svg
                  className="w-48 h-48 float-up"
                  viewBox="0 0 200 200"
                  xmlns="http://www.w3.org/2000/svg"
                  role="img"
                  aria-label="Broken video icon"
                >
                  <defs>
                    <linearGradient id="g1" x1="0" x2="1">
                      <stop offset="0" stopColor="#7c3aed" />
                      <stop offset="1" stopColor="#06b6d4" />
                    </linearGradient>
                    <filter id="shadow" x="-40%" y="-40%" width="180%" height="180%">
                      <feDropShadow dx="0" dy="6" stdDeviation="10" floodColor="#000" floodOpacity="0.12"/>
                    </filter>
                  </defs>

                  {/* video rectangle */}
                  <rect x="18" y="36" width="120" height="88" rx="8" fill="url(#g1)" opacity="0.15" />
                  <rect x="18" y="36" width="120" height="88" rx="8" fill="#fff" filter="url(#shadow)" />

                  {/* play triangle with broken crack line */}
                  <g transform="translate(36,50)">
                    <polygon points="0,0 44,22 0,44" fill="url(#g1)" className="pulse" />
                    {/* crack path */}
                    <path d="M10 6 L40 20 L12 34" stroke="#ef4444" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" fill="none" />
                    {/* small exclamation badge */}
                    <g transform="translate(80,6)">
                      <circle r="14" cx="0" cy="0" fill="#ef4444" />
                      <text x="0" y="4" fontSize="14" fontWeight="700" textAnchor="middle" fill="#fff">!</text>
                    </g>
                  </g>

                  {/* filmstrip / frame */}
                  <rect x="142" y="46" width="28" height="56" rx="4" fill="#111827" opacity="0.06" />
                </svg>

                <p className="mt-6 text-sm text-indigo-600 font-semibold">Oops — the reel stopped</p>
              </div>
            </div>

            {/* Right: content */}
            <div className="md:w-1/2 p-8">
              <header className="mb-4">
                <h1 id="error-heading" className="text-2xl md:text-3xl font-extrabold text-gray-900">
                  We couldn't find that page
                </h1>
                <p className="mt-2 text-gray-600">
                  Looks like the service you're looking for either moved or never existed. Don't worry — we've got a map.
                </p>
              </header>

              {/* Story-like structure */}
              <article className="space-y-4 text-gray-700">
                <p>
                  <strong>1. What happened:</strong> You reached <span className="font-mono text-sm text-gray-800">{currentPath}</span>, but our navigation couldn't find a matching service entry.
                </p>

                <p>
                  <strong>2. Why it happened:</strong> The route might be outdated, mistyped, or the service lives in a different section now.
                </p>

                <p>
                  <strong>3. Next steps:</strong> Use the buttons below to go back to where you were, or jump home and try the service menu — everything is organized and searchable there.
                </p>
              </article>

              {/* Actions */}
              <div className="mt-6 flex gap-3">
                <button
                  type="button"
                  onClick={() => navigate(-1)}
                  className="btn-focus inline-flex items-center gap-2 px-4 py-2 rounded-md bg-indigo-600 text-white font-medium hover:bg-indigo-700 transition"
                  aria-label="Go back to previous page"
                >
                  ← Go back
                </button>

                <button
                  type="button"
                  onClick={() => navigate('/')}
                  className="btn-focus inline-flex items-center gap-2 px-4 py-2 rounded-md border border-gray-200 bg-white text-gray-800 hover:bg-gray-50 transition"
                  aria-label="Go to homepage"
                >
                  Take me home
                </button>

                <a
                  href="/service"
                  className="ml-auto self-center text-sm text-indigo-600 hover:underline"
                >
                  Browse services
                </a>
              </div>

              {/* tiny hint / debug */}
              <div className="mt-6 text-xs text-gray-400">
                Tip: If you typed the URL manually, check for typos. If this keeps happening, contact the site admin.
              </div>
            </div>
          </div>
        </section>
      </main>
    );
  }

  // 4. If data IS found, render the template with it
  return <PageTemplate data={pageData} />;
}
