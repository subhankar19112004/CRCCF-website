// import { useEffect, useRef, useState } from "react";
// import { motion } from "framer-motion";

// /**
//  * Props:
//  * - draggableEnabled: boolean (true on tablet/mobile, false on laptop/desktop)
//  * - isScrolled: boolean (for subtle style tweaks when header shrinks)
//  * - showTip: boolean (whether to show the "drag me" tip)
//  * - onTipDismiss: () => void (call to hide tip permanently)
//  */
// export default function DigitalClock({
//   draggableEnabled,
//   isScrolled,
//   showTip,
//   onTipDismiss,
// }) {
//   const [now, setNow] = useState(new Date());
//   const [pos, setPos] = useState({ top: 88, left: null, right: 16 }); // sensible default
//   const ref = useRef(null);

//   // tick each second
//   useEffect(() => {
//     const id = setInterval(() => setNow(new Date()), 1000);
//     return () => clearInterval(id);
//   }, []);

//   // read saved position (only for draggable mode)
//   useEffect(() => {
//     if (!draggableEnabled) return;
//     try {
//       const saved = localStorage.getItem("clockPos");
//       if (saved) {
//         const parsed = JSON.parse(saved);
//         // ensure within viewport
//         const clamped = clampToViewport(parsed);
//         setPos(clamped);
//       }
//     } catch {}
//   }, [draggableEnabled]);

//   // format: Thursday, September 4, 2025 16:06:51 IST (always IST, 24h)
//   const formatter = new Intl.DateTimeFormat("en-IN", {
//     timeZone: "Asia/Kolkata",
//     weekday: "long",
//     year: "numeric",
//     month: "long",
//     day: "numeric",
//     hour: "2-digit",
//     minute: "2-digit",
//     second: "2-digit",
//     hour12: false,
//   });
//   // Some browsers insert a comma before time—normalize to your exact style
//   const formatted = formatter.format(now).replace(", ", " ").replace(", ", " ") + " IST";

//   // motion variants: a gentle breathe effect
//   const breathe = {
//     initial: { opacity: 0, y: -6, scale: 0.98 },
//     animate: {
//       opacity: 1,
//       y: 0,
//       scale: 1,
//       transition: { duration: 0.35, ease: "easeOut" },
//     },
//   };

//   // drag handling (only when draggableEnabled)
//   const handleDragEnd = (_, info) => {
//     if (!draggableEnabled) return;

//     const rect = ref.current?.getBoundingClientRect();
//     if (!rect) return;

//     const next = clampToViewport({
//       top: rect.top,
//       left: rect.left,
//       // Prefer right anchoring so it feels natural with header
//       right: window.innerWidth - rect.right,
//     });

//     setPos(next);
//     try {
//       localStorage.setItem("clockPos", JSON.stringify(next));
//     } catch {}
//   };

//   // helper: keep within viewport (with small margins)
//   function clampToViewport(p) {
//     const margin = 8;
//     const width = ref.current?.offsetWidth ?? 280;
//     const height = ref.current?.offsetHeight ?? 44;

//     let top = Math.max(margin, Math.min((p.top ?? 88), window.innerHeight - height - margin));

//     // Use either left or right (prefer right key if provided)
//     let left = p.left ?? null;
//     let right = p.right ?? 16;

//     if (left != null) {
//       left = Math.max(margin, Math.min(left, window.innerWidth - width - margin));
//       right = null;
//     } else if (right != null) {
//       right = Math.max(margin, Math.min(right, window.innerWidth - width - margin));
//       left = null;
//     }

//     return { top, left, right };
//   }

//   // styles shared between docked and floating modes
//   const baseClass =
//     "select-none font-medium tracking-tight rounded-xl shadow-md backdrop-blur-md " +
//     (isScrolled ? "bg-gray-800/70 text-gray-100" : "bg-black text-gray-100") +
//     " px-3 py-1.5 md:px-3.5 md:py-2";
//   const textClass = "font-mono tabular-nums text-[11px] sm:text-xs md:text-sm lg:text-base leading-none";

//   // TIP bubble
//   const Tip = () =>
//     showTip ? (
//       <motion.div
//         initial={{ opacity: 0, y: -6 }}
//         animate={{ opacity: 1, y: 0 }}
//         exit={{ opacity: 0 }}
//         className="absolute -top-8 right-0 md:right-0 bg-gray-900 text-white text-[10px] sm:text-xs rounded-md px-2 py-1 shadow"
//         onClick={onTipDismiss}
//       >
//         Drag me anywhere
//       </motion.div>
//     ) : null;

//   if (!draggableEnabled) {
//     // Docked (desktop/laptop ≥ lg): sit inline on the right
//     return (
//       <motion.div
//         variants={breathe}
//         initial="initial"
//         animate="animate"
//         className={`${baseClass} inline-flex items-center justify-center`}
//       >
//         <span className={textClass}>{formatted}</span>
//       </motion.div>
//     );
//   }

//   // Floating (tablet/mobile): position: fixed + draggable
//   return (
//     <motion.div
//       ref={ref}
//       drag
//       dragMomentum={false}
//       onDragEnd={handleDragEnd}
//       variants={breathe}
//       initial="initial"
//       animate="animate"
//       className={`${baseClass} fixed z-50 inline-flex items-center justify-center`}
//       style={{
//         top: pos.top,
//         left: pos.left ?? "auto",
//         right: pos.right ?? "auto",
//       }}
//     >
//       <Tip />
//       <span className={textClass}>{formatted}</span>
//     </motion.div>
//   );
// }

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

/**
 * Professional Digital Clock
 * - No draggable
 * - Smooth transition styling based on scroll
 * - Moves between right-aligned and center-aligned positions
 */
export default function DigitalClock({ isScrolled = false }) {
  const [now, setNow] = useState(new Date());

  // Align updates to exact next second boundary
  useEffect(() => {
    let timerId;
    const tick = () => {
      const t = new Date();
      setNow(t);
      const msToNextSecond = 1000 - (t.getTime() % 1000);
      timerId = setTimeout(tick, msToNextSecond);
    };
    tick();
    return () => clearTimeout(timerId);
  }, []);

  // Format: Thursday, September 4, 2025 16:06:51 IST
  const formatter = new Intl.DateTimeFormat("en-IN", {
    timeZone: "Asia/Kolkata",
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
    hour12: false,
  });
  const formatted =
    formatter.format(now).replace(", ", " ").replace(", ", " ") + " IST";

  const containerClass =
    "select-none font-medium tracking-tight rounded-xl shadow-md backdrop-blur-md transition-colors duration-300 " +
    (isScrolled ? "bg-gray-800/70 text-gray-100" : "bg-black text-gray-100") +
    " px-3 py-1.5 md:px-3.5 md:py-2";

  const textClass =
    "font-mono tabular-nums text-[11px] sm:text-xs md:text-sm lg:text-base leading-none";

  return (
    <motion.div
      aria-label="Current date and time in IST"
      className={`${containerClass} inline-flex items-center justify-center`}
      initial={{ x: 0, opacity: 0 }}
      animate={{
        x: isScrolled ? 0 : 0,
        opacity: 1,
      }}
      transition={{ duration: 0.5 }}
    >
      <span className={textClass}>{formatted}</span>
    </motion.div>
  );
}
