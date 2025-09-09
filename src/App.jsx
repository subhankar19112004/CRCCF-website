// import React from "react";
// import { BrowserRouter as Router } from "react-router-dom";
// import Header from "./components/Header";
// import AnimatedRoutes from "./AnimatedRoutes";
// import ScrollToTop from "./components/common/ScrollToTop";
// import Footer from "./components/common/Footer"; // <-- Import Footer

// function App() {
//   return (
//     <Router>
//       <div className="App bg-white text-gray-900 font-sans">
//         {/* Header contains both Banner + Navbar */}
//         <Header />

//         {/* Main content with top padding to avoid overlap from fixed header */}
//         <main className="pt-[140px] px-2 sm:px-6 md:px-8">
//           <ScrollToTop />
//           <AnimatedRoutes />  /** here all the routes for all apps present here */
//         </main>

//         {/* Footer at bottom of all pages */}
//         <Footer />
//       </div>
//     </Router>
//   );
// }

// export default App;

import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Header from "./components/Header";
import AnimatedRoutes from "./AnimatedRoutes";
import ScrollToTop from "./components/common/ScrollToTop";
import Footer from "./components/common/Footer";
import FloatingSearch from "./components/common/FloatingSearch"; // <-- import
import FloatingNotifications from "./components/common/FloatingNotifications";

function App() {
  return (
    <Router>
      <div className="App bg-white text-gray-900 font-sans">
        {/* Header contains both Banner + Navbar */}
        <Header />

        {/* Main content with top padding to avoid overlap from fixed header */}
        <main className="pt-[140px] px-2 sm:px-6 md:px-8">
          <ScrollToTop />
          <AnimatedRoutes /> {/* all your routes */}
        </main>

        {/* Floating search button, visible on all pages */}
        <FloatingSearch />

        {/* Floating notifications button, visible on all pages */}
        <FloatingNotifications />

        {/* Footer at bottom of all pages */}
        <Footer />
      </div>
    </Router>
  );
}

export default App;
