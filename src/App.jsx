
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
  if (path === "/about/department") {
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