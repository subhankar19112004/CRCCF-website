// src/components/common/GlobalErrorPage.jsx
import React from "react";
import { useNavigate, useLocation } from "react-router-dom";

/**
 * GlobalErrorPage
 * - Complex responsive SVG "broken video" illustration with animations
 * - Story-like content + actions
 * - Accessible: roles, aria-labels, keyboard-focusable buttons
 */
export default function GlobalErrorPage() {
  const navigate = useNavigate();
  const location = useLocation();

  return (
    <main className="min-h-screen bg-gray-50 flex items-center justify-center p-4">
      <section
        className="max-w-6xl w-full bg-white rounded-2xl shadow-xl overflow-hidden"
        role="region"
        aria-labelledby="error-heading"
      >
        <div className="md:flex">
          {/* Left: complex responsive SVG */}
          <div className="md:w-1/2 w-full bg-gradient-to-br from-indigo-50 to-cyan-50 p-6 flex items-center justify-center">
            <div className="w-full max-w-md">
              {/* Inline styles for animations scoped to this component */}
              <style>{`
                .g-float { animation: float 4s ease-in-out infinite; transform-origin: center; }
                @keyframes float { 0%{ transform: translateY(0);} 50%{ transform: translateY(-10px);} 100%{ transform: translateY(0);} }

                .g-pulse { animation: pulse 2.8s infinite ease-in-out; transform-origin: center; }
                @keyframes pulse { 0%{ transform: scale(1);} 50%{ transform: scale(1.03);} 100%{ transform: scale(1);} }

                .g-progress { animation: progress 6s linear infinite; }
                @keyframes progress {
                  0% { transform: translateX(-100%); opacity: 0; }
                  5% { opacity: 1; }
                  60% { transform: translateX(0%); opacity: 1; }
                  100% { transform: translateX(100%); opacity: 0; }
                }

                .g-wave { animation: wave 1.6s linear infinite; }
                @keyframes wave {
                  0% { transform: translateX(0); }
                  100% { transform: translateX(-50%); }
                }

                .g-flicker { animation: flicker 2.2s infinite; }
                @keyframes flicker {
                  0% { opacity: 1; }
                  30% { opacity: 0.7; }
                  60% { opacity: 1; }
                  100% { opacity: 0.95; }
                }

                /* make SVG scale nicely */
                .video-illustration { width: 100%; height: auto; display: block; }
              `}</style>

              {/* SVG is responsive via viewBox and preserveAspectRatio */}
              <svg
                className="video-illustration g-float"
                viewBox="0 0 900 600"
                preserveAspectRatio="xMidYMid meet"
                role="img"
                aria-label="Illustration showing a broken video player with animated waveform and progress"
                xmlns="http://www.w3.org/2000/svg"
              >
                <defs>
                  {/* animated gradient */}
                  <linearGradient id="gradA" x1="0" x2="1">
                    <stop offset="0%" stopColor="#7c3aed" />
                    <stop offset="50%" stopColor="#06b6d4" />
                    <stop offset="100%" stopColor="#06b6d4" />
                  </linearGradient>

                  <linearGradient id="gradB" x1="0" x2="1">
                    <stop offset="0%" stopColor="#f97316" />
                    <stop offset="100%" stopColor="#ef4444" />
                  </linearGradient>

                  <filter id="softShadow" x="-50%" y="-50%" width="200%" height="200%">
                    <feDropShadow dx="0" dy="20" stdDeviation="30" floodColor="#000" floodOpacity="0.15"/>
                  </filter>

                  <clipPath id="playerClip">
                    <rect x="40" y="40" width="620" height="360" rx="18" />
                  </clipPath>

                  {/* subtle grain mask for texture */}
                  <pattern id="dots" width="6" height="6" patternUnits="userSpaceOnUse">
                    <circle cx="1" cy="1" r="0.8" fill="rgba(0,0,0,0.03)"></circle>
                  </pattern>
                </defs>

                {/* Background rounded panel */}
                <rect x="20" y="20" width="860" height="560" rx="30" fill="url(#gradA)" opacity="0.06" />

                {/* Video panel with drop shadow */}
                <g filter="url(#softShadow)">
                  <rect x="40" y="40" width="620" height="360" rx="18" fill="#ffffff" />
                </g>

                {/* film strip / side controls */}
                <g transform="translate(680,80)">
                  <rect x="0" y="0" width="160" height="280" rx="12" fill="#0f172a" opacity="0.06" />
                  {/* small thumbnails */}
                  <g transform="translate(12,12)" opacity="0.95">
                    <rect width="136" height="56" rx="8" fill="#fff" opacity="0.06" />
                    <rect y="72" width="136" height="56" rx="8" fill="#fff" opacity="0.04" />
                    <rect y="144" width="136" height="56" rx="8" fill="#fff" opacity="0.04" />
                  </g>
                </g>

                {/* PLAY TRIANGLE — cracked */}
                <g transform="translate(120,80)">
                  {/* circular backdrop */}
                  <circle cx="280" cy="160" r="92" fill="url(#gradA)" opacity="0.12" />
                  {/* triangle (play) */}
                  <polygon
                    points="220,120 320,160 220,200"
                    fill="url(#gradA)"
                    stroke="#0f172a"
                    strokeOpacity="0.06"
                  />
                  {/* crack overlay */}
                  <path
                    d="M250 130 L290 150 L248 172 M260 148 L300 168"
                    stroke="#ef4444"
                    strokeWidth="4"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    fill="none"
                  />
                </g>

                {/* film-like progress overlay (animated) */}
                <g clipPath="url(#playerClip)">
                  {/* top decorative strip */}
                  <rect x="40" y="40" width="620" height="24" rx="12" fill="url(#dots)" opacity="0.08" />

                  {/* mid-left: big content blocks that simulate cards */}
                  <g transform="translate(80,120)">
                    <rect width="360" height="200" rx="10" fill="#f3f4f6" />
                    <rect x="8" y="8" width="160" height="20" rx="6" fill="#e6eef6" />
                    <rect x="8" y="40" width="320" height="12" rx="6" fill="#e6eef6" />
                    <rect x="8" y="64" width="280" height="10" rx="5" fill="#e6eef6" />
                  </g>

                  {/* animated scanning progress bar */}
                  <g transform="translate(80,340)">
                    <rect x="0" y="0" width="560" height="8" rx="4" fill="#e5e7eb" />
                    <rect
                      x="-560"
                      y="0"
                      width="560"
                      height="8"
                      rx="4"
                      fill="url(#gradB)"
                      className="g-progress"
                    />
                    <text x="0" y="-8" fontSize="12" fill="#374151">Detecting playback issues...</text>
                  </g>

                  {/* waveform at bottom (repeating) */}
                  <g transform="translate(80,380)">
                    <g transform="translate(0,0)" className="g-wave" style={{ transformOrigin: "0 0" }}>
                      {/* repeated small rectangles to simulate waveform; clipped and animated */}
                      {Array.from({ length: 40 }).map((_, i) => {
                        const x = i * 14;
                        const h = 6 + ((i % 5) * 6);
                        return (
                          <rect key={i} x={x} y={20 - h} width="8" height={h} rx="2" fill="#60a5fa" opacity={0.85 - (i % 4) * 0.08} />
                        );
                      })}
                      {/* duplicate track to create smooth movement */}
                      <g transform="translate(560,0)">
                        {Array.from({ length: 40 }).map((_, i) => {
                          const x = i * 14;
                          const h = 4 + ((i % 7) * 4);
                          return (
                            <rect key={'d'+i} x={x} y={22 - h} width="8" height={h} rx="2" fill="#06b6d4" opacity={0.7 - (i % 4) * 0.06} />
                          );
                        })}
                      </g>
                    </g>
                  </g>

                  {/* tiny floating particles */}
                  {[
                    { cx: 540, cy: 80, r: 3, o: 0.12 },
                    { cx: 580, cy: 130, r: 2.5, o: 0.08 },
                    { cx: 500, cy: 200, r: 2, o: 0.06 },
                  ].map((p, idx) => (
                    <circle key={idx} cx={p.cx} cy={p.cy} r={p.r} fill="#7c3aed" opacity={p.o} className={idx % 2 ? "g-pulse" : ""} />
                  ))}
                </g>

                {/* Right-bottom: big exclamation badge */}
                <g transform="translate(700,420)" className="g-flicker" role="img" aria-hidden="true">
                  <circle cx="0" cy="0" r="36" fill="#ef4444" />
                  <text x="0" y="6" fontSize="26" fontWeight="700" textAnchor="middle" fill="#fff">!</text>
                </g>

                {/* subtle overlay text */}
                <g>
                  <text x="80" y="32" fontSize="14" fill="#374151" opacity="0.9">Playback error</text>
                </g>
              </svg>
            </div>
          </div>

          {/* Right: content (story-like) */}
          <div className="md:w-1/2 w-full p-6 md:p-8">
            <header>
              <h1 id="error-heading" className="text-2xl md:text-3xl font-extrabold text-gray-900">
                Oops — Playback interrupted
              </h1>
              <p className="mt-2 text-gray-600">
                We tried to load the page you asked for, but the playback stopped mid-stream.
              </p>
            </header>

            <article className="mt-4 space-y-4 text-gray-700">
              <p><strong>1. Where you are:</strong> <span className="font-mono text-sm text-gray-800">{location.pathname}</span></p>
              <p><strong>2. What we tried:</strong> Our systems scanned the route and attempted to map it to a service page — no match was found.</p>
              <p><strong>3. What you can do:</strong> Use the actions below to go back, return home, or browse services. If this is unexpected, please report it — we’ll investigate the broken reel.</p>
            </article>

            <div className="mt-6 flex flex-wrap gap-3">
              <button
                onClick={() => navigate(-1)}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-md bg-indigo-600 text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-300"
                aria-label="Go back to previous page"
              >
                ← Go back
              </button>

              <button
                onClick={() => navigate("/")}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-md border border-gray-200 bg-white text-gray-800 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-gray-200"
                aria-label="Go to homepage"
              >
                Take me home
              </button>

              <a href="/services" className="ml-auto self-center text-sm text-indigo-600 hover:underline">
                Browse services
              </a>
            </div>

            <p className="mt-6 text-xs text-gray-400">
              Tip: If you typed the address manually, check for typos. If this repeats, send us the link so we can fix it quickly.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
