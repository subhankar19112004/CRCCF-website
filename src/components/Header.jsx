// import { useEffect, useState } from "react";
// import { motion } from "framer-motion";
// import Navbar from "./Navbar"; // This will now use the updated Navbar

// const Header = () => {
//   const [isScrolled, setIsScrolled] = useState(false);

//   useEffect(() => {
//     const handleScroll = () => {
//       setIsScrolled(window.scrollY > 10);
//     };
//     window.addEventListener("scroll", handleScroll);
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);

//   return (
//     // This is the single fixed container for the whole header area
//     <header
//       className={`fixed w-full z-50 rounded-b-md transition-all duration-300 ${
//         isScrolled ? "bg-white/80 backdrop-blur-md shadow-md" : "bg-gray-900/90"
//       }`}
//     >
//       {/* Your top announcement bar */}
//       <div
//         className={`transition-all duration-300 ${
//           isScrolled ? "py-2" : "py-4"
//         }`}
//       >
//         <div className="container mx-auto px-4 md:px-6 lg:px-8">
//           <div className="flex flex-col md:flex-row items-center justify-center">
//             <motion.div
//               initial={{ opacity: 0, y: -20 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ delay: 0.3, duration: 0.8 }}
//               className="flex items-center gap-2 md:gap-4 text-center max-w-4xl"
//             >
//               {/* Left SVG */}
//               <motion.div
//                 initial={{ scale: 0 }}
//                 animate={{ scale: 1 }}
//                 transition={{ delay: 0.2 }}
//                 className={`text-xl sm:block hidden ${
//                   isScrolled ? "text-gray-700" : "text-white"
//                 }`}
//               >
//                 {/* <svg
//                   width="40"
//                   height="40"
//                   viewBox="0 0 24 24"
//                   fill="none"
//                   xmlns="http://www.w3.org/2000/svg"
//                 >
//                   <path
//                     d="M3 12H21M3 12C2.44772 12 2 11.5523 2 11V5C2 4.44772 2.44772 4 3 4H21C21.5523 4 22 4.44772 22 5V11C22 11.5523 21.5523 12 21 12M3 12V19C3 19.5523 3.44772 20 4 20H20C20.5523 20 21 19.5523 21 19V12M12 16H12.01M16 16H16.01M8 16H8.01"
//                     stroke="currentColor"
//                     strokeWidth="2"
//                     strokeLinecap="round"
//                   />
//                   <path
//                     d="M12 12V16M16 12V16M8 12V16"
//                     stroke="currentColor"
//                     strokeWidth="2"
//                     strokeLinecap="round"
//                   />
//                 </svg> */}
//               </motion.div>
//               {/* tagline */}
//               <p
//                 className={`text-xs md:text-base sm:text-xs sm:font-light leading-tight font-medium ${
//                   isScrolled ? "text-gray-700" : "text-white"
//                 }`}
//               >
//                 ❤️ Welcome to CR Cyber Crime Foundation — one of the best organizations in India. With 24/7
//                 dedication, CR Cyber Crime strives to secure justice for cyber
//                 fraud victims, protect digital rights, and provide legal and
//                 technical assistance.
//               </p>

//               {/* Right SVG */}
//               <motion.div
//                 initial={{ scale: 0 }}
//                 animate={{ scale: 1 }}
//                 transition={{ delay: 0.4 }}
//                 className={`text-xl sm:block hidden ${
//                   isScrolled ? "text-gray-700" : "text-white"
//                 }`}
//               >
//                 {/* <svg
//                   width="40"
//                   height="40"
//                   viewBox="0 0 24 24"
//                   fill="none"
//                   xmlns="http://www.w3.org/2000/svg"
//                 >
//                   <path
//                     d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z"
//                     stroke="currentColor"
//                     strokeWidth="2"
//                     strokeLinecap="round"
//                     strokeLinejoin="round"
//                   />
//                   <path
//                     d="M8 12H16"
//                     stroke="currentColor"
//                     strokeWidth="2"
//                     strokeLinecap="round"
//                     strokeLinejoin="round"
//                   />
//                   <path
//                     d="M12 16V12"
//                     stroke="currentColor"
//                     strokeWidth="2"
//                     strokeLinecap="round"
//                     strokeLinejoin="round"
//                   />
//                   <path
//                     d="M17 7L15.5 8.5"
//                     stroke="currentColor"
//                     strokeWidth="2"
//                     strokeLinecap="round"
//                     strokeLinejoin="round"
//                   />
//                   <path
//                     d="M7 7L8.5 8.5"
//                     stroke="currentColor"
//                     strokeWidth="2"
//                     strokeLinecap="round"
//                     strokeLinejoin="round"
//                   />
//                   <path
//                     d="M7 17L8.5 15.5"
//                     stroke="currentColor"
//                     strokeWidth="2"
//                     strokeLinecap="round"
//                     strokeLinejoin="round"
//                   />
//                   <path
//                     d="M17 17L15.5 15.5"
//                     stroke="currentColor"
//                     strokeWidth="2"
//                     strokeLinecap="round"
//                     strokeLinejoin="round"
//                   />
//                 </svg> */}
//               </motion.div>
//             </motion.div>
//           </div>
//         </div>
//       </div>

//       {/* The Navbar is now INSIDE the fixed header, so it will appear below the announcement bar */}
//       <Navbar />
//     </header>
//   );
// };

// export default Header;

// import { useEffect, useState } from "react";
// import { motion } from "framer-motion";
// import Navbar from "./Navbar"; // This will now use the updated Navbar

// const Header = () => {
//   const [isScrolled, setIsScrolled] = useState(false);

//   useEffect(() => {
//     const handleScroll = () => {
//       setIsScrolled(window.scrollY > 10);
//     };
//     window.addEventListener("scroll", handleScroll);
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);

//   return (
//     // Fixed container for the entire header
//     <header
//       className={`fixed w-full z-50 rounded-b-md transition-all duration-300 ${
//         isScrolled ? "bg-white/80 backdrop-blur-md shadow-md" : "bg-gray-900/90"
//       }`}
//     >
//       {/* Top announcement bar */}
//       <div
//         className={`transition-all duration-300 ${
//           isScrolled ? "py-2" : "py-4"
//         }`}
//       >
//         <div className="container mx-auto px-4 md:px-6 lg:px-8">
//           <div className="flex flex-col md:flex-row items-center justify-start">
//             <motion.div
//               initial={{ opacity: 0, y: -20 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ delay: 0.3, duration: 0.8 }}
//               className="flex items-center gap-2 md:gap-4 text-left max-w-4xl w-full"
//             >
//               {/* Optional Left SVG - Keep or remove */}
//               <motion.div
//                 initial={{ scale: 0 }}
//                 animate={{ scale: 1 }}
//                 transition={{ delay: 0.2 }}
//                 className={`text-xl sm:block hidden ${
//                   isScrolled ? "text-gray-700" : "text-white"
//                 }`}
//               >
//                 {/* Placeholder for future SVG if needed */}
//               </motion.div>

//               {/* Tagline */}
//               <p
//                 className={`text-xs md:text-base sm:text-xs sm:font-light leading-tight font-medium ${
//                   isScrolled ? "text-gray-700" : "text-white"
//                 }`}
//               >
//                 ❤️ Welcome to CR Cyber Crime Foundation — one of the best
//                 organizations in India. With 24/7 dedication, CR Cyber Crime
//                 strives to secure justice for cyber fraud victims, protect
//                 digital rights, and provide legal and technical assistance.
//               </p>

//               {/* Optional Right SVG - Keep or remove */}
//               <motion.div
//                 initial={{ scale: 0 }}
//                 animate={{ scale: 1 }}
//                 transition={{ delay: 0.4 }}
//                 className={`text-xl sm:block hidden ${
//                   isScrolled ? "text-gray-700" : "text-white"
//                 }`}
//               >
//                 {/* Placeholder for future SVG if needed */}
//               </motion.div>
//             </motion.div>
//           </div>
//         </div>
//       </div>

//       {/* Navbar now appears below the announcement bar */}
//       <Navbar />
//     </header>
//   );
// };

// export default Header;

// import { useEffect, useState } from "react";
// import { motion } from "framer-motion";
// import Navbar from "./Navbar";
// import DigitalClock from "./DigitalClock";

// const useIsLargeScreen = () => {
//   const [isLarge, setIsLarge] = useState(() =>
//     typeof window !== "undefined" ? window.matchMedia("(min-width: 1024px)").matches : true
//   );
//   useEffect(() => {
//     const mq = window.matchMedia("(min-width: 1024px)");
//     const onChange = (e) => setIsLarge(e.matches);
//     mq.addEventListener?.("change", onChange);
//     // Safari fallback
//     mq.addListener?.(onChange);
//     return () => {
//       mq.removeEventListener?.("change", onChange);
//       mq.removeListener?.(onChange);
//     };
//   }, []);
//   return isLarge;
// };

// const Header = () => {
//   const [isScrolled, setIsScrolled] = useState(false);
//   const [showTip, setShowTip] = useState(false);
//   const isLarge = useIsLargeScreen(); // lg breakpoint

//   useEffect(() => {
//     const handleScroll = () => {
//       const sc = window.scrollY > 10;
//       setIsScrolled(sc);

//       // show one-time tip on first scroll for mobile/tablet only
//       if (sc && !isLarge) {
//         try {
//           const seen = localStorage.getItem("clockTipSeen");
//           if (!seen) {
//             setShowTip(true);
//             localStorage.setItem("clockTipSeen", "1");
//             // auto-hide after a few seconds
//             setTimeout(() => setShowTip(false), 4000);
//           }
//         } catch {}
//       }
//     };
//     window.addEventListener("scroll", handleScroll, { passive: true });
//     // run once to set initial state if page starts scrolled
//     handleScroll();
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, [isLarge]);

//   return (
//     <header
//       className={`fixed w-full z-40 rounded-b-md transition-all duration-300 ${
//         isScrolled ? "bg-gray-900/80 backdrop-blur-md shadow-md" : "bg-gray-900/90"
//       }`}
//     >
//       {/* Announcement / Tagline Row */}
//       <div className={`transition-all duration-300 ${isScrolled ? "py-1.5" : "py-4"}`}>
//         <div className="container mx-auto px-4 md:px-6 lg:px-8">
//           <div className="flex items-center justify-between gap-3">
//             {/* Left: Tagline (hidden when scrolled to keep only the clock visible) */}
//             <motion.div
//               initial={{ opacity: 0, y: -12 }}
//               animate={{ opacity: isScrolled ? 0 : 1, y: isScrolled ? -8 : 0 }}
//               transition={{ duration: 0.3 }}
//               className={`${
//                 isScrolled ? "pointer-events-none h-0 overflow-hidden" : "h-auto"
//               } flex-1 text-left`}
//             >
//               <p
//                 className={`text-xs md:text-base sm:text-xs sm:font-light leading-tight font-medium ${
//                   isScrolled ? "text-gray-700" : "text-white"
//                 }`}
//               >
//                 ❤️ Welcome to CR Cyber Crime Foundation — one of the best organizations in India.
//                 With 24/7 dedication, CR Cyber Crime strives to secure justice for cyber fraud victims,
//                 protect digital rights, and provide legal and technical assistance.
//               </p>
//             </motion.div>

//             {/* Right: Clock (docked on desktop, floating on tablet/mobile) */}
//             <div className="hidden lg:flex">
//               <DigitalClock
//                 draggableEnabled={false}
//                 isScrolled={isScrolled}
//                 showTip={false}
//                 onTipDismiss={() => {}}
//               />
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* Navbar appears below the bar */}
//       <Navbar />

//       {/* Floating clock for tablet/mobile (rendered outside the container to not disturb layout) */}
//       <div className="lg:hidden">
//         <DigitalClock
//           draggableEnabled={true}
//           isScrolled={isScrolled}
//           showTip={showTip}
//           onTipDismiss={() => setShowTip(false)}
//         />
//       </div>
//     </header>
//   );
// };

// export default Header;

// import { useEffect, useState } from "react";
// import { motion, AnimatePresence } from "framer-motion";
// import Navbar from "./Navbar";
// import DigitalClock from "./DigitalClock";

// const Header = () => {
//   const [isScrolled, setIsScrolled] = useState(false);

//   useEffect(() => {
//     const handleScroll = () => setIsScrolled(window.scrollY > 10);
//     window.addEventListener("scroll", handleScroll, { passive: true });
//     handleScroll(); // init
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);

//   return (
//     <header
//       className={`fixed w-full z-40 rounded-b-md transition-all duration-300 ${
//         isScrolled ? "bg-gray-900/80 backdrop-blur-md shadow-md" : "bg-gray-900/90"
//       }`}
//     >
//       {/* Top bar: collapses to exactly the clock height when scrolled */}
//       <div className={`transition-all duration-300 ${isScrolled ? "py-0" : "py-4"}`}>
//         <div className="container mx-auto px-4 md:px-6 lg:px-8">
//           {/* Same row; layout animates so the clock glides from right to center */}
//           <motion.div
//             layout
//             transition={{ layout: { duration: 0.6, ease: "easeInOut" } }}
//             className={`flex items-center gap-3 ${
//               isScrolled ? "justify-center" : "justify-between"
//             }`}
//           >
//             {/* Tagline only when not scrolled (so height is only the clock when scrolled) */}
//             <AnimatePresence initial={false}>
//               {!isScrolled && (
//                 <motion.div
//                   key="tagline"
//                   initial={{ opacity: 0, y: -12 }}
//                   animate={{ opacity: 1, y: 0 }}
//                   exit={{ opacity: 0, y: -12, transition: { duration: 0.25 } }}
//                   className="flex-1 text-left flex-row"
//                 >
//                   <p
//                     className={`text-xs md:text-base sm:text-xs sm:font-light leading-tight font-medium ${
//                       isScrolled ? "text-gray-700 " : "text-white"
//                     }`}
//                   >
//                     ❤️ Welcome to CR Cyber Crime Foundation — one of the best organizations in India.
//                     With 24/7 dedication, CR Cyber Crime strives to secure justice for cyber fraud victims,
//                     protect digital rights, and provide legal and technical assistance.
//                   </p>
//                 </motion.div>
//               )}
//             </AnimatePresence>

//             {/* Clock: right when not scrolled, exact center when scrolled */}
//             <motion.div layout className="m-1">
//               <DigitalClock isScrolled={isScrolled} />
//             </motion.div>
//           </motion.div>
//         </div>
//       </div>

//       {/* Navbar below the top bar */}
//       <Navbar />
//     </header>
//   );
// };

// export default Header;


// import { useEffect, useState } from "react";
// import { motion, AnimatePresence } from "framer-motion";
// import Navbar from "./Navbar";
// import DigitalClock from "./DigitalClock";

// const Header = () => {
//   const [isScrolled, setIsScrolled] = useState(false);

//   useEffect(() => {
//     const handleScroll = () => setIsScrolled(window.scrollY > 10);
//     window.addEventListener("scroll", handleScroll, { passive: true });
//     handleScroll(); // init
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);

//   return (
//     <header
//       className={`fixed w-full z-40 rounded-b-md transition-all duration-300 ${
//         isScrolled ? "bg-gray-900/80 backdrop-blur-md shadow-md" : "bg-gray-900/90"
//       }`}
//     >
//       {/* Top bar: collapses to exactly the clock height when scrolled */}
//       <div className={`transition-all duration-300 ${isScrolled ? "py-0" : "py-4"}`}>
//         <div className="container mx-auto px-4 md:px-6 lg:px-8">
//           {/* Layout:
//               - NOT SCROLLED: stack on small/tablet (tagline then clock), row on lg (unchanged)
//               - SCROLLED: single row centered (unchanged) */}
//           <motion.div
//             layout
//             transition={{ layout: { duration: 0.6, ease: "easeInOut" } }}
//             className={
//               isScrolled
//                 ? "flex flex-row items-center gap-3 justify-center"
//                 : "flex flex-col lg:flex-row items-start lg:items-center gap-2 lg:gap-3 justify-between"
//             }
//           >
//             {/* Tagline only when not scrolled (so height is only the clock when scrolled) */}
//             <AnimatePresence initial={false}>
//               {!isScrolled && (
//                 <motion.div
//                   key="tagline"
//                   initial={{ opacity: 0, y: -12 }}
//                   animate={{ opacity: 1, y: 0 }}
//                   exit={{ opacity: 0, y: -12, transition: { duration: 0.10 } }}
//                   className="flex-1 text-left flex-row"
//                 >
//                   <p
//                     className={`text-xs md:text-base sm:text-xs sm:font-light leading-tight font-medium ${
//                       isScrolled ? "text-gray-700 " : "text-white"
//                     }`}
//                   >
//                     ❤️ Welcome to CR Cyber Crime Foundation — one of the best organizations in India.
//                     With 24/7 dedication, CR Cyber Crime strives to secure justice for cyber fraud victims,
//                     protect digital rights, and provide legal and technical assistance.
//                   </p>
//                 </motion.div>
//               )}
//             </AnimatePresence>

//             {/* Clock:
//                 - NOT SCROLLED: below tagline on small/tablet; right on lg (unchanged)
//                 - SCROLLED: centered on all screens (unchanged) */}
//             <motion.div
//               layout
//               className={
//                 isScrolled
//                   ? "m-1"
//                   : "m-1 w-full flex justify-start lg:w-auto lg:flex-none lg:justify-end"
//               }
//             >
//               <DigitalClock isScrolled={isScrolled} />
//             </motion.div>
//           </motion.div>
//         </div>
//       </div>

//       {/* Navbar below the top bar */}
//       <Navbar />
//     </header>
//   );
// };

// export default Header;


// import { useEffect, useRef, useState } from "react";
// import { motion, AnimatePresence } from "framer-motion";
// import Navbar from "./Navbar";
// import DigitalClock from "./DigitalClock";

// const Header = () => {
//   const [isHidden, setIsHidden] = useState(false);
//   const rootRef = useRef(null);
//   const lastY = useRef(0);
//   const ticking = useRef(false);

//   // Measure header height and expose it as a CSS var so <main> can pad correctly.
//   const setHeaderHeightVar = (px) => {
//     document.documentElement.style.setProperty("--header-height", `${px}px`);
//   };

//   useEffect(() => {
//     const el = rootRef.current;
//     if (!el) return;

//     // Initial measure
//     const updateHeight = () => {
//       const h = isHidden ? 0 : el.offsetHeight;
//       setHeaderHeightVar(h || 0);
//     };
//     updateHeight();

//     // Observe size changes (e.g., responsive text, navbar wrap)
//     const ro = new ResizeObserver(updateHeight);
//     ro.observe(el);

//     return () => {
//       ro.disconnect();
//       // Optional: clear the var on unmount
//       // document.documentElement.style.removeProperty("--header-height");
//     };
//   }, [isHidden]);

//   useEffect(() => {
//     // Simple hide-on-scroll: hide when scrolled > 8px, show again at top.
//     const UPPER_ON = 8; // hide when >= 8
//     const LOWER_OFF = 2; // show when <= 2 (hysteresis)
//     const onScroll = () => {
//       if (ticking.current) return;
//       ticking.current = true;
//       requestAnimationFrame(() => {
//         const y = window.scrollY || 0;
//         setIsHidden((prev) => (prev ? (y <= LOWER_OFF ? false : true) : (y >= UPPER_ON ? true : false)));
//         lastY.current = y;
//         ticking.current = false;
//       });
//     };

//     window.addEventListener("scroll", onScroll, { passive: true });
//     onScroll(); // init
//     return () => window.removeEventListener("scroll", onScroll);
//   }, []);

//   return (
//     <header
//       ref={rootRef}
//       className={[
//         "fixed inset-x-0 top-0 z-50",
//         "rounded-b-md",
//         "bg-gray-900/90 supports-[backdrop-filter]:bg-gray-900/70 supports-[backdrop-filter]:backdrop-blur-md",
//         "transition-all duration-300",
//         // Fully hide when scrolled: slide up + fade + block interactions
//         isHidden ? "opacity-0 -translate-y-full pointer-events-none" : "opacity-100 translate-y-0 pointer-events-auto",
//       ].join(" ")}
//       style={{
//         paddingTop: "env(safe-area-inset-top)",
//         willChange: "transform, opacity",
//         WebkitTapHighlightColor: "transparent",
//       }}
//       aria-hidden={isHidden ? "true" : "false"}
//     >
//       {/* Top bar with tagline + clock */}
//       <div className="py-3">
//         <div className="mx-auto w-full max-w-screen-2xl px-4 md:px-6 lg:px-8">
//           <motion.div layout="position" transition={{ duration: 0.25, ease: "easeInOut" }} className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-2 lg:gap-3">
//             <AnimatePresence initial={false}>
//               {!isHidden && (
//                 <motion.div
//                   key="tagline"
//                   initial={{ opacity: 0, y: -8 }}
//                   animate={{ opacity: 1, y: 0 }}
//                   exit={{ opacity: 0, y: -8, transition: { duration: 0.12 } }}
//                   className="flex flex-row flex-1 text-left"
//                 >
//                   <p className="text-[11px] sm:text-xs md:text-sm lg:text-base leading-snug md:leading-tight font-medium text-white/95">
//                     ❤️ Welcome to CR Cyber Crime Foundation — one of the best organizations in India.
//                     With 24/7 dedication, CR Cyber Crime strives to secure justice for cyber fraud victims,
//                     protect digital rights, and provide legal and technical assistance.
//                   </p>
//                 </motion.div>
//               )}
//             </AnimatePresence>

//             <motion.div layout="position" className="m-1 w-full flex justify-start lg:w-auto lg:flex-none lg:justify-end">
//               <DigitalClock isScrolled={isHidden} />
//             </motion.div>
//           </motion.div>
//         </div>
//       </div>

//       {/* Navbar */}
//       <Navbar />
//     </header>
//   );
// };

// export default Header;


// src/components/Header.jsx
import { useEffect, useRef, useState } from "react";
import Navbar from "./Navbar";
import DigitalClock from "./DigitalClock";

const Header = () => {
  const [hideTopBar, setHideTopBar] = useState(false);
  const topBarRef = useRef(null);
  const ticking = useRef(false);

  useEffect(() => {
    const UPPER_ON = 24; // hide when >= 24px
    const LOWER_OFF = 6; // show when <= 6px

    const onScroll = () => {
      if (ticking.current) return;
      ticking.current = true;
      requestAnimationFrame(() => {
        const y = window.scrollY || 0;
        setHideTopBar(prev =>
          prev ? (y <= LOWER_OFF ? false : true) : (y >= UPPER_ON ? true : false)
        );
        ticking.current = false;
      });
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll(); // initial
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Measure content height once for a smooth max-height animation
  useEffect(() => {
    const el = topBarRef.current;
    if (!el) return;
    const measure = () => {
      const inner = el.querySelector("[data-inner]");
      if (inner) {
        const h = inner.offsetHeight || 0;
        el.style.setProperty("--topbar-max", `${h}px`);
      }
    };
    measure();
    const ro = new ResizeObserver(measure);
    ro.observe(el);
    return () => ro.disconnect();
  }, []);

  return (
    <header
      className="fixed inset-x-0 top-0 z-50 w-full"
      role="banner"
      style={{
        paddingTop: "env(safe-area-inset-top)",
        WebkitTapHighlightColor: "transparent",
      }}
    >
      {/* Top bar (always mounted) */}
      <div
        ref={topBarRef}
        className={[
          // Base visuals
          "text-white  shadow-sm overflow-hidden",
          // Light blur only on md+ (mobile GPUs can stutter with blur)
          "bg-gray-900 md:supports-[backdrop-filter]:bg-gray-900 md:supports-[backdrop-filter]:backdrop-blur-md",
          // Animations: transform + opacity + max-height (GPU-friendly)
          "transition-[opacity,transform,max-height] duration-300 ease-out",
          hideTopBar ? "opacity-0 -translate-y-4" : "opacity-100 translate-y-0",
        ].join(" ")}
        // Smoothly collapse vertical space so it doesn't look like it's “hanging”
        style={{
          maxHeight: hideTopBar ? "0px" : "var(--topbar-max, 200px)",
          willChange: "transform, opacity",
          transform: "translateZ(0)", // promote to its own layer
        }}
        aria-hidden={hideTopBar ? "true" : "false"}
      >
        <div data-inner className="mx-auto max-w-screen-2xl px-4 md:px-6 lg:px-8 py-3">
          <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-2">
            <p className="text-xs md:text-sm lg:text-base leading-snug md:leading-tight font-medium text-white/95">
              ❤️ Welcome to CR Cyber Crime Foundation — one of the best organizations in India.
              With 24/7 dedication, CR Cyber Crime strives to secure justice for cyber fraud victims,
              protect digital rights, and provide legal and technical assistance.
            </p>
            <div className="w-full lg:w-auto flex justify-start lg:justify-end">
              <DigitalClock />
            </div>
          </div>
        </div>
      </div>

      {/* Navbar (always visible) */}
      <div className=" text-white shadow-md">
        <Navbar />
      </div>
    </header>
  );
};

export default Header;
