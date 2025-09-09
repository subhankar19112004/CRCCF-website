// import React, { useState, useEffect, useRef } from 'react';
// import { Link, useLocation, useNavigate } from 'react-router-dom';
// import { motion, AnimatePresence } from 'framer-motion';

// const Navbar = () => {
//   const [isMenuOpen, setIsMenuOpen] = useState(false);
//   const location = useLocation();
//   const navigate = useNavigate();
//   const menuRef = useRef(null);
//   const hamburgerRef = useRef(null);

//   const navItems = [
//     { label: "Home", path: "/" },
//     { label: "About Us", path: "/about" },
//     { label: "Education & internship", path: "/cyber-education" },
//     { label: "Gallery", path: "/gallery" },
//     { label: "IT and Software", path: "/software-services" },
//     { label: "Resource and Download", path: "/resource-and-download" },
//     { label: "Cyber crime report", path: "/report-a-cyber-crime" },
//     { label: "Recruitment Process", path: "/recruitment-process" },
//     { label: "Contact Us", path: "/contact-us" },
//   ];

//   const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
//   const closeMenu = () => setIsMenuOpen(false);
//   const handleNavigation = (path) => {
//     closeMenu();
//     navigate(path);
//   };

//   useEffect(() => {
//     const handleClickOutside = (event) => {
//       if (
//         menuRef.current && !menuRef.current.contains(event.target) &&
//         hamburgerRef.current && !hamburgerRef.current.contains(event.target)
//       ) {
//         closeMenu();
//       }
//     };
//     const handleEscape = (event) => event.key === 'Escape' && closeMenu();
//     document.addEventListener('mousedown', handleClickOutside);
//     document.addEventListener('keydown', handleEscape);
//     return () => {
//       document.removeEventListener('mousedown', handleClickOutside);
//       document.removeEventListener('keydown', handleEscape);
//     };
//   }, []);

//   useEffect(() => {
//     document.body.style.overflow = isMenuOpen ? 'hidden' : 'auto';
//     return () => {
//       document.body.style.overflow = 'auto';
//     };
//   }, [isMenuOpen]);

//   // Responsive menu variants
//   const menuVariants = {
//     hidden: { 
//       x: '100%',
//       transition: { 
//         type: 'spring', 
//         stiffness: 400, 
//         damping: 40,
//         when: "afterChildren"
//       } 
//     },
//     visible: { 
//       x: 0,
//       transition: { 
//         type: 'spring', 
//         stiffness: 400, 
//         damping: 40,
//         when: "beforeChildren",
//         staggerChildren: 0.1
//       } 
//     },
//   };

//   const menuItemVariants = {
//     hidden: { opacity: 0, x: 50 },
//     visible: { 
//       opacity: 1, 
//       x: 0,
//       transition: {
//         type: 'spring',
//         stiffness: 300,
//         damping: 25
//       }
//     },
//   };

//   // Hamburger icon animation variants
//   const topLine = {
//     closed: { rotate: 0, y: 0 },
//     open: { rotate: 45, y: 7 }
//   };
  
//   const middleLine = {
//     closed: { opacity: 1 },
//     open: { opacity: 0 }
//   };
  
//   const bottomLine = {
//     closed: { rotate: 0, y: 0 },
//     open: { rotate: -45, y: -7 }
//   };

//   return (
//     <>
//       <nav className="bg-cyan-700 shadow-lg sticky rounded-b-md top-0 z-50">
//         <div className="container mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="flex items-center justify-between h-20">
//             <Link to="/" className="flex items-center gap-3 z-50">
//               <div className="flex items-center gap-2">
//                 <img
//                   src="https://res.cloudinary.com/dlvmo4u97/image/upload/v1753994796/siysiomksfwsnjpx0kzn.png"
//                   alt="CRCCF Logo"
//                   className="h-24 w-auto"
//                   onError={(e) => { e.target.onerror = null; e.target.src = 'https://placehold.co/48x48/ffffff/333333?text=L'; }}
//                 />
//                 <img 
//                   src="/symbol.svg" 
//                   alt="CRCCF Symbol" 
//                   className="h-15 w-auto hidden sm:block" 
//                   onError={(e) => { e.target.onerror = null; e.target.src = 'https://placehold.co/24x24/ffffff/333333?text=S'; }}
//                 />
//               </div>
//               <span className="text-white font-bold text-xl md:text-2xl tracking-wider">CRCCF</span>
//             </Link>

//             {/* Desktop Menu (lg and up) */}
//             <div className="hidden lg:flex items-center space-x-1">
//               {navItems.map((item) => (
//                 <motion.div key={item.path} className="relative">
//                   <Link
//                     to={item.path}
//                     className={`relative text-[15px] font-medium rounded-md px-3 py-2 transition-all duration-300 ${location.pathname === item.path ? 'text-yellow-300' : 'text-white/90 hover:text-white'}`}
//                   >
//                     <motion.span 
//                       whileHover={{ y: -2 }} 
//                       className="inline-block"
//                       transition={{ type: 'spring', stiffness: 300 }}
//                     >
//                       {item.label}
//                     </motion.span>
//                     {location.pathname === item.path && (
//                       <motion.span 
//                         layoutId="underline" 
//                         className="absolute left-0 bottom-1 w-full h-0.5 bg-yellow-300" 
//                         transition={{ type: 'spring', stiffness: 500, damping: 30 }} 
//                       />
//                     )}
//                   </Link>
//                 </motion.div>
//               ))}
//             </div>

//             {/* Mobile/Tablet Hamburger Menu (lg down) */}
//             <div className="lg:hidden" ref={hamburgerRef}>
//               <button 
//                 onClick={toggleMenu}
//                 className="z-50 w-10 h-10 relative focus:outline-none flex flex-col items-center justify-center gap-1.5"
//                 aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
//               >
//                 <motion.span 
//                   className="w-7 h-0.5 bg-white rounded-full"
//                   variants={topLine}
//                   animate={isMenuOpen ? "open" : "closed"}
//                   transition={{ type: 'spring', stiffness: 500, damping: 20 }}
//                 />
//                 <motion.span 
//                   className="w-7 h-0.5 bg-white rounded-full"
//                   variants={middleLine}
//                   animate={isMenuOpen ? "open" : "closed"}
//                   transition={{ type: 'spring', stiffness: 500, damping: 20 }}
//                 />
//                 <motion.span 
//                   className="w-7 h-0.5 bg-white rounded-full"
//                   variants={bottomLine}
//                   animate={isMenuOpen ? "open" : "closed"}
//                   transition={{ type: 'spring', stiffness: 500, damping: 20 }}
//                 />
//               </button>
//             </div>
//           </div>
//         </div>
//       </nav>

//       {/* Mobile/Tablet Menu Overlay */}
//       <AnimatePresence>
//         {isMenuOpen && (
//           <>
//             <motion.div 
//               initial={{ opacity: 0 }}
//               animate={{ opacity: 0.5 }}
//               exit={{ opacity: 0 }}
//               onClick={closeMenu}
//               className="fixed inset-0 z-40 bg-black lg:hidden"
//               transition={{ duration: 0.2 }}
//             />

//             <motion.div 
//               ref={menuRef}
//               variants={menuVariants}
//               initial="hidden"
//               animate="visible"
//               exit="hidden"
//               className="fixed top-0 right-0 h-screen w-80 max-w-full bg-cyan-800 shadow-xl z-50 flex flex-col"
//             >
//               <div className="h-20 flex items-center justify-between px-6 border-b border-cyan-700">
//                 <Link to="/" className="flex items-center gap-3" onClick={closeMenu}>
//                   <div className="flex items-center gap-2">
//                     <img
//                       src="https://res.cloudinary.com/dlvmo4u97/image/upload/v1753994796/siysiomksfwsnjpx0kzn.png"
//                       alt="CRCCF Logo"
//                       className="h-12 w-auto"
//                     />
//                     <img 
//                       src="/symbol.svg" 
//                       alt="CRCCF Symbol" 
//                       className="h-12 w-auto" 
//                     />
//                   </div>
//                   <span className="text-white font-bold text-lg">CRCCF</span>
//                 </Link>
//                 <button 
//                   onClick={closeMenu}
//                   className="w-10 h-10 relative focus:outline-none flex items-center justify-center"
//                   aria-label="Close menu"
//                 >
//                   <motion.span 
//                     className="absolute w-6 h-0.5 bg-white rounded-full"
//                     animate={{ rotate: 45 }}
//                   />
//                   <motion.span 
//                     className="absolute w-6 h-0.5 bg-white rounded-full"
//                     animate={{ rotate: -45 }}
//                   />
//                 </button>
//               </div>

//               <motion.ul className="flex-1 px-6 py-4 overflow-y-auto">
//                 {navItems.map((item) => (
//                   <motion.li 
//                     key={item.path}
//                     variants={menuItemVariants}
//                     className="border-b border-cyan-700/30 last:border-0"
//                   >
//                     <Link
//                       to={item.path}
//                       onClick={() => handleNavigation(item.path)}
//                       className={`block w-full text-left text-lg font-medium py-4 transition-colors duration-200 ${
//                         location.pathname === item.path 
//                           ? 'text-yellow-300' 
//                           : 'text-white/90 hover:text-white'
//                       }`}
//                     >
//                       {item.label}
//                     </Link>
//                   </motion.li>
//                 ))}
//               </motion.ul>

//               <div className="p-6 border-t border-cyan-700">
//                 <button className="w-full py-3 px-6 bg-cyan-600 hover:bg-cyan-500 text-white font-medium rounded-md transition-colors">
//                   Contact Us
//                 </button>
//               </div>
//             </motion.div>
//           </>
//         )}
//       </AnimatePresence>
//     </>
//   );
// };

// export default Navbar;


import React, { useEffect, useLayoutEffect, useRef, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

/**
 * Auto-fit Navbar:
 * - Renders a hidden "measurer" with the same nav items to get true pixel width.
 * - Compares measurer width vs available header space (bar width - brand width - buffer).
 * - Shows desktop links if they fit, otherwise shows hamburger/slideout.
 * - Reacts to resize, orientation, zoom, and font load.
 */

const NAV_ITEMS = [
  { label: "Home", path: "/" },
  { label: "About Us", path: "/about" },
  { label: "Education & internship", path: "/cyber-education" },
  { label: "Gallery", path: "/gallery" },
  { label: "IT and Software", path: "/software-services" },
  { label: "Resource and Download", path: "/resource-and-download" },
  { label: "Cyber crime report", path: "/report-a-cyber-crime" },
  { label: "Recruitment Process", path: "/recruitment-process" },
  { label: "Contact Us", path: "/contact-us" },
];

const Navbar = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const [menuOpen, setMenuOpen] = useState(false);
  const [needsHamburger, setNeedsHamburger] = useState(true);

  // layout refs
  const barRef = useRef(null);        // full bar width
  const brandRef = useRef(null);      // logo+name
  const deskRef = useRef(null);       // real desktop container
  const ghostRef = useRef(null);      // hidden measurer
  const panelRef = useRef(null);      // slideout panel
  const burgerRef = useRef(null);     // hamburger button

  const closeMenu = () => setMenuOpen(false);
  const go = (p) => { closeMenu(); navigate(p); };

  // lock scroll when slideout open
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "auto";
    return () => { document.body.style.overflow = "auto"; };
  }, [menuOpen]);

  // click-outside & ESC
  useEffect(() => {
    const onDown = (e) => {
      if (
        panelRef.current && !panelRef.current.contains(e.target) &&
        burgerRef.current && !burgerRef.current.contains(e.target)
      ) closeMenu();
    };
    const onEsc = (e) => e.key === "Escape" && closeMenu();
    document.addEventListener("mousedown", onDown);
    document.addEventListener("keydown", onEsc);
    return () => {
      document.removeEventListener("mousedown", onDown);
      document.removeEventListener("keydown", onEsc);
    };
  }, []);

  // core fit calculation
  const recalc = () => {
    const barW   = barRef.current?.clientWidth   ?? 0;
    const brandW = brandRef.current?.clientWidth ?? 0;
    const needed = ghostRef.current?.scrollWidth ?? 99999;

    // small padding/gap safety so it never kisses the edges
    const buffer = 56; // px
    const avail = Math.max(0, barW - brandW - buffer);

    setNeedsHamburger(needed > avail);
  };

  // run on layout, font load, and resize/zoom/orientation
  useLayoutEffect(() => {
    recalc();

    // observe size changes
    const ros = [];
    const addRO = (el) => {
      if (!el) return;
      const ro = new ResizeObserver(recalc);
      ro.observe(el);
      ros.push(ro);
    };
    addRO(document.body);
    addRO(barRef.current);
    addRO(brandRef.current);
    addRO(ghostRef.current);

    // zoom/DPR changes
    let mql;
    try {
      mql = window.matchMedia(`(resolution: ${window.devicePixelRatio || 1}dppx)`);
      mql.addEventListener?.("change", recalc);
    } catch {}

    // fonts can shift widths
    document.fonts?.ready?.then(recalc);

    // classic listeners as fallback
    window.addEventListener("resize", recalc);
    window.addEventListener("orientationchange", recalc);

    return () => {
      ros.forEach((ro) => ro.disconnect());
      mql && mql.removeEventListener?.("change", recalc);
      window.removeEventListener("resize", recalc);
      window.removeEventListener("orientationchange", recalc);
    };
  }, []);

  // animations
  const menuVariants = {
    hidden:  { x: "100%", transition: { type: "spring", stiffness: 400, damping: 40, when: "afterChildren" } },
    visible: { x: 0,      transition: { type: "spring", stiffness: 400, damping: 40, when: "beforeChildren", staggerChildren: 0.08 } },
  };
  const itemVariants = {
    hidden:  { opacity: 0, x: 50 },
    visible: { opacity: 1, x: 0, transition: { type: "spring", stiffness: 300, damping: 24 } },
  };
  const topLine    = { closed: { rotate: 0, y: 0 },  open: { rotate: 45,  y: 7 } };
  const middleLine = { closed: { opacity: 1 },       open: { opacity: 0 } };
  const botLine    = { closed: { rotate: 0, y: 0 },  open: { rotate: -45, y: -7 } };

  return (
    <>
      <nav className="bg-cyan-700 shadow-lg sticky rounded-b-md top-0 z-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div ref={barRef} className="flex items-center justify-between h-16 md:h-18 lg:h-20">
            {/* Brand */}
            <Link ref={brandRef} to="/" className="flex items-center gap-3 z-50">
              <div className="flex items-center gap-2">
                <img
                  src="https://res.cloudinary.com/dlvmo4u97/image/upload/v1753994796/siysiomksfwsnjpx0kzn.png"
                  alt="CRCCF Logo"
                  className="h-10 w-auto md:h-12 lg:h-14"
                  onError={(e) => { e.currentTarget.onerror = null; e.currentTarget.src = "https://placehold.co/48x48/ffffff/333333?text=L"; }}
                />
                <img
                  src="/symbol.svg"
                  alt="CRCCF Symbol"
                  className="hidden sm:block h-8 w-auto md:h-10"
                  onError={(e) => { e.currentTarget.onerror = null; e.currentTarget.src = "https://placehold.co/24x24/ffffff/333333?text=S"; }}
                />
              </div>
              <span className="text-white font-bold text-lg md:text-xl lg:text-2xl tracking-wider">CRCCF</span>
            </Link>

            {/* Desktop menu (shows only when it fits) */}
            <div ref={deskRef} className={`${needsHamburger ? "hidden" : "flex"} items-center space-x-1`}>
              {NAV_ITEMS.map((it) => (
                <motion.div key={it.path} className="relative">
                  <Link
                    to={it.path}
                    className={`relative text-sm lg:text-[15px] font-medium rounded-md px-2.5 py-2 transition-all duration-300 ${
                      location.pathname === it.path ? "text-yellow-300" : "text-white/90 hover:text-white"
                    }`}
                  >
                    <motion.span whileHover={{ y: -2 }} className="inline-block" transition={{ type: "spring", stiffness: 300 }}>
                      {it.label}
                    </motion.span>
                    {location.pathname === it.path && (
                      <motion.span layoutId="underline" className="absolute left-0 -bottom-0.5 w-full h-0.5 bg-yellow-300"
                        transition={{ type: "spring", stiffness: 500, damping: 30 }} />
                    )}
                  </Link>
                </motion.div>
              ))}
            </div>

            {/* Hamburger (shows when it *doesn't* fit) */}
            <div className={`${needsHamburger ? "block" : "hidden"}`} ref={burgerRef}>
              <button
                onClick={() => setMenuOpen((s) => !s)}
                className="z-50 w-10 h-10 relative focus:outline-none flex flex-col items-center justify-center gap-1.5"
                aria-label={menuOpen ? "Close menu" : "Open menu"}
              >
                <motion.span className="w-7 h-0.5 bg-white rounded-full" variants={topLine}    animate={menuOpen ? "open" : "closed"} transition={{ type: "spring", stiffness: 500, damping: 20 }} />
                <motion.span className="w-7 h-0.5 bg-white rounded-full" variants={middleLine} animate={menuOpen ? "open" : "closed"} transition={{ type: "spring", stiffness: 500, damping: 20 }} />
                <motion.span className="w-7 h-0.5 bg-white rounded-full" variants={botLine}    animate={menuOpen ? "open" : "closed"} transition={{ type: "spring", stiffness: 500, damping: 20 }} />
              </button>
            </div>
          </div>
        </div>

        {/* Hidden measurer (exact same labels & spacing) */}
        <div aria-hidden="true" className="absolute opacity-0 -z-10 pointer-events-none">
          <div ref={ghostRef} className="flex items-center space-x-1 px-2.5 py-2">
            {NAV_ITEMS.map((it) => (
              <span key={it.path} className="text-sm lg:text-[15px] font-medium px-2.5 py-2">{it.label}</span>
            ))}
          </div>
        </div>
      </nav>

      {/* Slide-out menu */}
      <AnimatePresence>
        {menuOpen && needsHamburger && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.5 }}
              exit={{ opacity: 0 }}
              onClick={closeMenu}
              className="fixed inset-0 z-40 bg-black"
              transition={{ duration: 0.2 }}
            />
            <motion.div
              ref={panelRef}
              variants={menuVariants}
              initial="hidden"
              animate="visible"
              exit="hidden"
              className="fixed top-0 right-0 h-screen w-[22rem] max-w-[90vw] bg-cyan-800 shadow-xl z-50 flex flex-col overscroll-contain"
            >
              <div className="h-16 md:h-18 lg:h-20 flex items-center justify-between px-6 border-b border-cyan-700">
                <Link to="/" className="flex items-center gap-3" onClick={closeMenu}>
                  <div className="flex items-center gap-2">
                    <img src="https://res.cloudinary.com/dlvmo4u97/image/upload/v1753994796/siysiomksfwsnjpx0kzn.png" alt="CRCCF Logo" className="h-10 md:h-12 w-auto" />
                    <img src="/symbol.svg" alt="CRCCF Symbol" className="h-10 md:h-12 w-auto" />
                  </div>
                  <span className="text-white font-bold text-lg">CRCCF</span>
                </Link>
                <button onClick={closeMenu} className="w-10 h-10 relative focus:outline-none flex items-center justify-center" aria-label="Close menu">
                  <motion.span className="absolute w-6 h-0.5 bg-white rounded-full" animate={{ rotate: 45 }} />
                  <motion.span className="absolute w-6 h-0.5 bg-white rounded-full" animate={{ rotate: -45 }} />
                </button>
              </div>

              <motion.ul className="flex-1 px-6 py-3 overflow-y-auto">
                {NAV_ITEMS.map((it) => (
                  <motion.li key={it.path} variants={itemVariants} className="border-b border-cyan-700/30 last:border-0">
                    <Link
                      to={it.path}
                      onClick={() => go(it.path)}
                      className={`block w-full text-left text-base md:text-lg font-medium py-3 md:py-4 transition-colors duration-200 ${
                        location.pathname === it.path ? "text-yellow-300" : "text-white/90 hover:text-white"
                      }`}
                    >
                      {it.label}
                    </Link>
                  </motion.li>
                ))}
              </motion.ul>

              <div className="p-6 border-t border-cyan-700">
                <Link to="/contact-us" onClick={() => go("/contact-us")}
                  className="w-full inline-flex justify-center py-3 px-6 bg-cyan-600 hover:bg-cyan-500 text-white font-medium rounded-md transition-colors">
                  Contact Us
                </Link>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
