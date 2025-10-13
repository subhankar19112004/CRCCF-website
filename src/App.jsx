// import React, { useEffect, useRef } from "react";
// import { BrowserRouter as Router, useLocation } from "react-router-dom";
// import Header from "./components/Header";
// import AnimatedRoutes from "./AnimatedRoutes";
// import ScrollToTop from "./components/common/ScrollToTop";
// import Footer from "./components/common/Footer";
// import FloatingSearch from "./components/common/FloatingSearch";
// import FloatingNotifications from "./components/common/FloatingNotifications";

// function AppContent() {
//   const location = useLocation();
//   const path = location.pathname;

//   // === Layout rules ===
//   let hideLayout = path.startsWith("/about/");
//   if (path === "/about/legal-compliance") {
//     hideLayout = false;
//   }

//   // Overlay reference
//   const overlayRef = useRef(null);

//   useEffect(() => {
//     // Create overlay element if not exists
//     let overlay = document.getElementById("__security_overlay");
//     if (!overlay) {
//       overlay = document.createElement("div");
//       overlay.id = "__security_overlay";
//       overlay.style.cssText = `
//         position: fixed;
//         inset: 0;
//         background: rgba(0,0,0,0.97);
//         backdrop-filter: blur(8px);
//         -webkit-backdrop-filter: blur(8px);
//         z-index: 999999;
//         display: none;
//       `;
//       document.body.appendChild(overlay);
//     }
//     overlayRef.current = overlay;

//     const showOverlay = () => {
//       if (overlayRef.current) {
//         overlayRef.current.style.display = "block";
//         setTimeout(() => {
//           if (overlayRef.current) overlayRef.current.style.display = "none";
//         }, 3000); // Hide after 3s
//       }
//     };

//     // === Disable copy/cut/paste/right-click ===
//     const blockDefault = (e) => e.preventDefault();
//     document.addEventListener("contextmenu", blockDefault);
//     document.addEventListener("copy", blockDefault);
//     document.addEventListener("cut", blockDefault);
//     document.addEventListener("paste", blockDefault);

//     // === Block keys (PrintScreen, devtools shortcuts) ===
//     const blockKeys = (e) => {
//       // PrintScreen
//       if (e.key === "PrintScreen") {
//         if (navigator.clipboard && navigator.clipboard.writeText) {
//           navigator.clipboard.writeText(""); // clear clipboard if allowed
//         }
//         showOverlay();
//         e.preventDefault();
//       }

//       const isCtrl = e.ctrlKey || e.metaKey;
//       if (
//         e.keyCode === 123 || // F12
//         (isCtrl && e.shiftKey && (e.key.toLowerCase() === "i" || e.key.toLowerCase() === "j")) ||
//         (isCtrl && e.key.toLowerCase() === "u") || // View Source
//         (isCtrl && e.key.toLowerCase() === "s")    // Save
//       ) {
//         showOverlay();
//         e.preventDefault();
//       }
//     };
//     document.addEventListener("keydown", blockKeys);

//     // === Tab visibility / blur detection (extra protection) ===
//     const onVisibility = () => {
//       if (document.hidden) {
//         showOverlay();
//       }
//     };
//     const onBlur = () => showOverlay();

//     document.addEventListener("visibilitychange", onVisibility);
//     window.addEventListener("blur", onBlur);

//     return () => {
//       document.removeEventListener("contextmenu", blockDefault);
//       document.removeEventListener("copy", blockDefault);
//       document.removeEventListener("cut", blockDefault);
//       document.removeEventListener("paste", blockDefault);
//       document.removeEventListener("keydown", blockKeys);
//       document.removeEventListener("visibilitychange", onVisibility);
//       window.removeEventListener("blur", onBlur);
//     };
//   }, []);

//   return (
//     <div className="App bg-white text-gray-900 font-sans">
//       {/* Header */}
//       {!hideLayout && <Header />}

//       {/* Main content */}
//       <main className={`px-2 sm:px-6 md:px-8 ${!hideLayout ? "pt-[140px]" : ""}`}>
//         <ScrollToTop />
//         <AnimatedRoutes />
//       </main>

//       {/* Floating elements (always visible) */}
//       <FloatingSearch />
//       <FloatingNotifications />

//       {/* Footer */}
//       {!hideLayout && <Footer />}
//     </div>
//   );
// }

// function App() {
//   return (
//     <Router>
//       <AppContent />
//     </Router>
//   );
// }

// export default App;

import React from "react";
import { BrowserRouter as Router, useLocation } from "react-router-dom";
import Header from "./components/Header";
import AnimatedRoutes from "./AnimatedRoutes";
import ScrollToTop from "./components/common/ScrollToTop";
import Footer from "./components/common/Footer";
import FloatingSearch from "./components/common/FloatingSearch";
import FloatingNotifications from "./components/common/FloatingNotifications";

function AppContent() {
  const location = useLocation();
  const path = location.pathname;

  // === Layout rules ===
  // Hide header/footer for /about/* pages by default
  let hideLayout = path.startsWith("/about/");

  // Exception: keep header/footer for /about/legal-compliance
  if (path === "/about/legal-compliance") {
    hideLayout = false;
  }

  return (
    <div className="App bg-white text-gray-900 font-sans">
      {/* Header */}
      {!hideLayout && <Header />}

      {/* Main content */}
      <main className={`px-2 sm:px-6 md:px-8 ${!hideLayout ? "pt-[140px]" : ""}`}>
        <ScrollToTop />
        <AnimatedRoutes />
      </main>

      {/* Floating elements (always visible) */}
      <FloatingSearch />
      <FloatingNotifications />

      {/* Footer */}
      {!hideLayout && <Footer />}
    </div>
  );
}

function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}

export default App;
