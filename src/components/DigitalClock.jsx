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
