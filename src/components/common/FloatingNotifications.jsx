// import React, { useEffect, useMemo, useRef, useState } from "react";
// import { Bell, CheckCheck, X, ExternalLink } from "lucide-react";
// import { motion, AnimatePresence } from "framer-motion";
// import { Link } from "react-router-dom";
// import { notificationsData as initialData } from "../../data/notificationsData";

// /**
//  * FloatingNotifications
//  * - Floating bell button with unread red dot
//  * - Modal opens from the top (like your search) showing all notifications
//  * - Marks items as read and stores "last seen" in localStorage
//  * - Mobile-first sizing + smooth animations
//  */

// const STORAGE_KEYS = {
//   LAST_SEEN: "notif_last_seen",
//   READ_IDS: "notif_read_ids", // optional layer to persist explicit reads
// };

// function FloatingNotifications() {
//   const [open, setOpen] = useState(false);
//   const [data, setData] = useState(initialData);
//   const modalRef = useRef(null);

//   // Load persisted read info on mount
//   useEffect(() => {
//     try {
//       const raw = localStorage.getItem(STORAGE_KEYS.READ_IDS);
//       if (raw) {
//         const readIds = new Set(JSON.parse(raw));
//         setData((prev) =>
//           prev.map((n) => (readIds.has(n.id) ? { ...n, read: true } : n))
//         );
//       }
//     } catch {}
//   }, []);

//   // Derived: last seen timestamp (used to show the red dot when there are newer items)
//   const lastSeen = useMemo(() => {
//     const stored = localStorage.getItem(STORAGE_KEYS.LAST_SEEN);
//     return stored ? new Date(stored) : new Date(0);
//   }, []);

//   // Unread logic: either explicit unread (read === false) OR created after lastSeen
//   const unreadCount = useMemo(() => {
//     return data.reduce((acc, n) => {
//       const isNewer = new Date(n.createdAt) > lastSeen;
//       return acc + (isNewer || !n.read ? 1 : 0);
//     }, 0);
//   }, [data, lastSeen]);

//   // Close on outside click
//   useEffect(() => {
//     const onClick = (e) => {
//       if (open && modalRef.current && !modalRef.current.contains(e.target)) {
//         setOpen(false);
//       }
//     };
//     window.addEventListener("mousedown", onClick);
//     return () => window.removeEventListener("mousedown", onClick);
//   }, [open]);

//   // Keyboard shortcut: Ctrl/Cmd + B to toggle; Esc to close
//   useEffect(() => {
//     const handler = (e) => {
//       if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === "b") {
//         e.preventDefault();
//         setOpen((v) => !v);
//       }
//       if (e.key === "Escape") setOpen(false);
//     };
//     window.addEventListener("keydown", handler);
//     return () => window.removeEventListener("keydown", handler);
//   }, []);

//   // When opening, mark "last seen" (so the red dot clears next time)
//   useEffect(() => {
//     if (open) {
//       localStorage.setItem(STORAGE_KEYS.LAST_SEEN, new Date().toISOString());
//     }
//   }, [open]);

//   const markAllRead = () => {
//     const allIds = data.map((n) => n.id);
//     localStorage.setItem(STORAGE_KEYS.READ_IDS, JSON.stringify(allIds));
//     setData((prev) => prev.map((n) => ({ ...n, read: true })));
//   };

//   const markOneRead = (id) => {
//     setData((prev) =>
//       prev.map((n) => (n.id === id ? { ...n, read: true } : n))
//     );
//     try {
//       const raw = localStorage.getItem(STORAGE_KEYS.READ_IDS);
//       const arr = raw ? JSON.parse(raw) : [];
//       if (!arr.includes(id)) {
//         arr.push(id);
//         localStorage.setItem(STORAGE_KEYS.READ_IDS, JSON.stringify(arr));
//       }
//     } catch {}
//   };

//   const sorted = useMemo(() => {
//     // Newest first
//     return [...data].sort(
//       (a, b) => new Date(b.createdAt) - new Date(a.createdAt)
//     );
//   }, [data]);

//   const timeAgo = (iso) => {
//     const diffMs = Date.now() - new Date(iso).getTime();
//     const sec = Math.floor(diffMs / 1000);
//     if (sec < 60) return `${sec}s ago`;
//     const min = Math.floor(sec / 60);
//     if (min < 60) return `${min}m ago`;
//     const hr = Math.floor(min / 60);
//     if (hr < 24) return `${hr}h ago`;
//     const day = Math.floor(hr / 24);
//     return `${day}d ago`;
//   };

//   return (
//     <>
//       {/* Floating Bell */}
//       <motion.button
//         onClick={() => setOpen(true)}
//         aria-label="Open notifications (Ctrl/Cmd + B)"
//         title="Notifications (Ctrl/Cmd + B)"
//         className="fixed bottom-20 right-4 sm:bottom-24 sm:right-6 z-50 w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-gradient-to-br from-rose-500 to-pink-600 shadow-xl text-white flex items-center justify-center"
//         whileHover={{ scale: 1.1, rotate: 5 }}
//         whileTap={{ scale: 0.95, rotate: -5 }}
//       >
//         <div className="relative">
//           <Bell className="w-5 h-5 sm:w-6 sm:h-6" />
//           {unreadCount > 0 && (
//             <span className="absolute -top-1.5 -right-1.5 inline-flex items-center justify-center w-3.5 h-3.5 sm:w-4 sm:h-4 rounded-full bg-red-600 ring-2 ring-white text-[10px] font-bold">
//               {/* dot only; swap to {unreadCount} to show a number */}
//             </span>
//           )}
//         </div>
//       </motion.button>

//       {/* Modal from TOP (like your search) */}
//       <AnimatePresence>
//         {open && (
//           <motion.div
//             className="fixed inset-0 z-50 flex items-start justify-center bg-black/50 backdrop-blur-sm p-3 sm:p-6"
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             exit={{ opacity: 0 }}
//           >
//             <motion.div
//               ref={modalRef}
//               className="w-full sm:max-w-3xl md:max-w-4xl bg-white rounded-b-2xl sm:rounded-2xl shadow-2xl overflow-hidden mt-6"
//               initial={{ y: -60, opacity: 0 }}
//               animate={{ y: 0, opacity: 1 }}
//               exit={{ y: -60, opacity: 0 }}
//               transition={{ type: "spring", stiffness: 220, damping: 26 }}
//             >
//               {/* Header */}
//               <div className="flex items-center justify-between gap-3 px-4 sm:px-5 py-3 sm:py-4 border-b">
//                 <div className="flex items-center gap-3">
//                   <Bell className="w-5 h-5 text-gray-600" />
//                   <h3 className="text-base sm:text-lg font-semibold text-slate-800">
//                     Notifications
//                   </h3>
//                   {unreadCount > 0 && (
//                     <span className="ml-1 text-xs text-white bg-red-600 px-2 py-0.5 rounded-full">
//                       new
//                     </span>
//                   )}
//                 </div>

//                 <div className="flex items-center gap-2">
//                   <button
//                     onClick={markAllRead}
//                     className="hidden sm:inline-flex items-center gap-1 text-xs sm:text-sm text-emerald-700 hover:text-emerald-900 px-2 py-1 rounded-md hover:bg-emerald-50"
//                     title="Mark all as read"
//                   >
//                     <CheckCheck className="w-4 h-4" />
//                     Mark all read
//                   </button>
//                   <button
//                     onClick={() => setOpen(false)}
//                     className="p-2 rounded hover:bg-gray-100"
//                     aria-label="Close notifications"
//                     title="Close"
//                   >
//                     <X className="w-5 h-5 text-gray-700" />
//                   </button>
//                 </div>
//               </div>

//               {/* List */}
//               <div className="p-3 sm:p-5 max-h-[65vh] overflow-auto">
//                 {sorted.length === 0 ? (
//                   <div className="text-center text-gray-500 py-10 sm:py-12">
//                     <p className="text-sm sm:text-base">
//                       No notifications yet.
//                     </p>
//                   </div>
//                 ) : (
//                   <ul className="space-y-2 sm:space-y-3">
//                     {sorted.map((n) => {
//                       const isNew =
//                         !n.read || new Date(n.createdAt) > lastSeen;
//                       return (
//                         <motion.li
//                           key={n.id}
//                           className={`border rounded-lg p-3 sm:p-4 bg-white hover:shadow-md transition ${
//                             isNew ? "border-amber-300" : "border-gray-200"
//                           }`}
//                           initial={{ y: 8, opacity: 0 }}
//                           animate={{ y: 0, opacity: 1 }}
//                         >
//                           <div className="flex items-start gap-3">
//                             {/* Dot for unread/new */}
//                             <span
//                               className={`mt-1.5 w-2 h-2 rounded-full ${
//                                 isNew ? "bg-red-500" : "bg-gray-300"
//                               }`}
//                               title={isNew ? "New" : "Read"}
//                             />
//                             <div className="flex-1 min-w-0">
//                               <div className="flex flex-wrap items-center gap-2">
//                                 <h4 className="font-semibold text-slate-800 text-sm sm:text-base truncate">
//                                   {n.title}
//                                 </h4>
//                                 {n.tag && (
//                                   <span className="text-[10px] sm:text-xs px-2 py-0.5 rounded-full bg-slate-100 text-slate-600">
//                                     {n.tag}
//                                   </span>
//                                 )}
//                                 <span className="text-[10px] sm:text-xs text-gray-400">
//                                   • {timeAgo(n.createdAt)}
//                                 </span>
//                               </div>
//                               <p className="text-xs sm:text-sm text-gray-600 mt-1 line-clamp-3">
//                                 {n.body}
//                               </p>

//                               <div className="mt-2 flex items-center gap-2">
//                                 {n.href && (
//                                   <Link
//                                     to={n.href}
//                                     onClick={() => {
//                                       markOneRead(n.id);
//                                       setOpen(false);
//                                     }}
//                                     className="inline-flex items-center gap-1 text-xs sm:text-sm text-blue-700 hover:text-blue-900 hover:underline"
//                                   >
//                                     View
//                                     <ExternalLink className="w-3.5 h-3.5" />
//                                   </Link>
//                                 )}

//                                 {!n.read && (
//                                   <button
//                                     onClick={() => markOneRead(n.id)}
//                                     className="text-xs sm:text-sm text-emerald-700 hover:text-emerald-900 px-1.5 py-0.5 rounded hover:bg-emerald-50"
//                                   >
//                                     Mark as read
//                                   </button>
//                                 )}
//                               </div>
//                             </div>
//                           </div>
//                         </motion.li>
//                       );
//                     })}
//                   </ul>
//                 )}
//               </div>
//             </motion.div>
//           </motion.div>
//         )}
//       </AnimatePresence>
//     </>
//   );
// }

// export default FloatingNotifications;
// src/components/common/FloatingNotifications.jsx
import React, { useEffect, useMemo, useRef, useState } from "react";
import { Bell, CheckCheck, X, ExternalLink } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import { notificationsData as initialData } from "../../data/notificationsData";

/**
 * FloatingNotifications
 * - Floating bell with unread red dot (mobile-first, very compact)
 * - Modal opens from TOP (like your search), lists notifications
 * - Persists "read" + "last seen" in localStorage
 * - Keyboard: Ctrl/Cmd+B toggles, Esc closes
 */

const STORAGE_KEYS = {
  LAST_SEEN: "notif_last_seen",
  READ_IDS: "notif_read_ids",
};

export default function FloatingNotifications() {
  const [open, setOpen] = useState(false);
  const [data, setData] = useState(initialData);
  const modalRef = useRef(null);

  // Load persisted read flags
  useEffect(() => {
    try {
      const raw = localStorage.getItem(STORAGE_KEYS.READ_IDS);
      if (raw) {
        const readIds = new Set(JSON.parse(raw));
        setData((prev) =>
          prev.map((n) => (readIds.has(n.id) ? { ...n, read: true } : n))
        );
      }
    } catch {}
  }, []);

  // Last seen (for red dot if newer items exist)
  const lastSeen = useMemo(() => {
    const stored = localStorage.getItem(STORAGE_KEYS.LAST_SEEN);
    return stored ? new Date(stored) : new Date(0);
  }, []);

  // Count unread or newer-than-lastSeen
  const unreadCount = useMemo(() => {
    return data.reduce((acc, n) => {
      const isNewer = new Date(n.createdAt) > lastSeen;
      return acc + (isNewer || !n.read ? 1 : 0);
    }, 0);
  }, [data, lastSeen]);

  // Close on outside click
  useEffect(() => {
    const onClick = (e) => {
      if (open && modalRef.current && !modalRef.current.contains(e.target)) {
        setOpen(false);
      }
    };
    window.addEventListener("mousedown", onClick);
    return () => window.removeEventListener("mousedown", onClick);
  }, [open]);

  // Keyboard shortcuts
  useEffect(() => {
    const handler = (e) => {
      if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === "b") {
        e.preventDefault();
        setOpen((v) => !v);
      }
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, []);

  // Mark last seen when opening modal
  useEffect(() => {
    if (open) {
      localStorage.setItem(STORAGE_KEYS.LAST_SEEN, new Date().toISOString());
    }
  }, [open]);

  const markAllRead = () => {
    const allIds = data.map((n) => n.id);
    localStorage.setItem(STORAGE_KEYS.READ_IDS, JSON.stringify(allIds));
    setData((prev) => prev.map((n) => ({ ...n, read: true })));
  };

  const markOneRead = (id) => {
    setData((prev) =>
      prev.map((n) => (n.id === id ? { ...n, read: true } : n))
    );
    try {
      const raw = localStorage.getItem(STORAGE_KEYS.READ_IDS);
      const arr = raw ? JSON.parse(raw) : [];
      if (!arr.includes(id)) {
        arr.push(id);
        localStorage.setItem(STORAGE_KEYS.READ_IDS, JSON.stringify(arr));
      }
    } catch {}
  };

  const sorted = useMemo(
    () => [...data].sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt)),
    [data]
  );

  const timeAgo = (iso) => {
    const diffMs = Date.now() - new Date(iso).getTime();
    const s = Math.floor(diffMs / 1000);
    if (s < 60) return `${s}s ago`;
    const m = Math.floor(s / 60);
    if (m < 60) return `${m}m ago`;
    const h = Math.floor(m / 60);
    if (h < 24) return `${h}h ago`;
    const d = Math.floor(h / 24);
    return `${d}d ago`;
  };

  return (
    <>
      {/* Floating Bell (pro, compact, responsive) */}
      <motion.button
        onClick={() => setOpen(true)}
        aria-label="Open notifications (Ctrl/Cmd + B)"
        title="Notifications (Ctrl/Cmd + B)"
        className="fixed top-96 right-3 sm:bottom-24 sm:right-6 z-50
                   w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14
                   rounded-full shadow-xl
                   bg-gradient-to-br from-indigo-500 to-indigo-600
                   text-white flex items-center justify-center"
        whileHover={{ scale: 1.08 }}
        whileTap={{ scale: 0.95 }}
      >
        <div className="relative">
          {/* Bell icon scales by breakpoint */}
          <Bell className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6" />
          {/* Minimal, sharp red dot with white ring */}
          {unreadCount > 0 && (
            <span
              className="absolute -top-1 -right-1
                         w-2.5 h-2.5 sm:w-3 sm:h-3 md:w-3.5 md:h-3.5
                         rounded-full bg-red-600 ring-2 ring-white
                         animate-pulse"
            />
          )}
        </div>
      </motion.button>

      {/* Modal from TOP (mirrors your search) */}
      <AnimatePresence>
        {open && (
          <motion.div
            className="fixed inset-0 z-50 flex items-start justify-center bg-black/50 backdrop-blur-sm p-3 sm:p-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              ref={modalRef}
              className="w-full sm:max-w-3xl md:max-w-4xl bg-white rounded-b-2xl sm:rounded-2xl shadow-2xl overflow-hidden mt-6"
              initial={{ y: -60, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -60, opacity: 0 }}
              transition={{ type: "spring", stiffness: 220, damping: 26 }}
            >
              {/* Header */}
              <div className="flex items-center justify-between gap-3 px-4 sm:px-5 py-3 sm:py-4 border-b">
                <div className="flex items-center gap-2 sm:gap-3">
                  <Bell className="w-5 h-5 text-gray-700" />
                  <h3 className="text-sm sm:text-base md:text-lg font-semibold text-slate-800">
                    Notifications
                  </h3>
                  {unreadCount > 0 && (
                    <span className="ml-1 text-[10px] sm:text-xs text-white bg-red-600 px-2 py-0.5 rounded-full">
                      new
                    </span>
                  )}
                </div>

                <div className="flex items-center gap-2">
                  <button
                    onClick={markAllRead}
                    className="hidden sm:inline-flex items-center gap-1 text-xs sm:text-sm text-emerald-700 hover:text-emerald-900 px-2 py-1 rounded-md hover:bg-emerald-50"
                    title="Mark all as read"
                  >
                    <CheckCheck className="w-4 h-4" />
                    Mark all read
                  </button>
                  <button
                    onClick={() => setOpen(false)}
                    className="p-2 rounded hover:bg-gray-100"
                    aria-label="Close notifications"
                    title="Close"
                  >
                    <X className="w-5 h-5 text-gray-700" />
                  </button>
                </div>
              </div>

              {/* List */}
              <div className="p-3 sm:p-5 max-h-[65vh] overflow-auto">
                {sorted.length === 0 ? (
                  <div className="text-center text-gray-500 py-10 sm:py-12">
                    <p className="text-sm sm:text-base">No notifications yet.</p>
                  </div>
                ) : (
                  <ul className="space-y-2 sm:space-y-3">
                    {sorted.map((n) => {
                      const isNew = !n.read || new Date(n.createdAt) > lastSeen;
                      return (
                        <motion.li
                          key={n.id}
                          className={`border rounded-lg p-3 sm:p-4 bg-white hover:shadow-md transition ${
                            isNew ? "border-amber-300" : "border-gray-200"
                          }`}
                          initial={{ y: 8, opacity: 0 }}
                          animate={{ y: 0, opacity: 1 }}
                        >
                          <div className="flex items-start gap-3">
                            {/* Dot indicator per item */}
                            <span
                              className={`mt-1.5 w-2 h-2 rounded-full ${
                                isNew ? "bg-red-500" : "bg-gray-300"
                              }`}
                              title={isNew ? "New" : "Read"}
                            />
                            <div className="flex-1 min-w-0">
                              <div className="flex flex-wrap items-center gap-2">
                                <h4 className="font-semibold text-slate-800 text-sm sm:text-base truncate">
                                  {n.title}
                                </h4>
                                {n.tag && (
                                  <span className="text-[10px] sm:text-xs px-2 py-0.5 rounded-full bg-slate-100 text-slate-600">
                                    {n.tag}
                                  </span>
                                )}
                                <span className="text-[10px] sm:text-xs text-gray-400">
                                  • {timeAgo(n.createdAt)}
                                </span>
                              </div>

                              <p className="text-xs sm:text-sm text-gray-600 mt-1 line-clamp-3">
                                {n.body}
                              </p>

                              <div className="mt-2 flex items-center gap-2">
                                {n.href && (
                                  <Link
                                    to={n.href}
                                    onClick={() => {
                                      markOneRead(n.id);
                                      setOpen(false);
                                    }}
                                    className="inline-flex items-center gap-1 text-xs sm:text-sm text-blue-700 hover:text-blue-900 hover:underline"
                                  >
                                    View
                                    <ExternalLink className="w-3.5 h-3.5" />
                                  </Link>
                                )}

                                {!n.read && (
                                  <button
                                    onClick={() => markOneRead(n.id)}
                                    className="text-xs sm:text-sm text-emerald-700 hover:text-emerald-900 px-1.5 py-0.5 rounded hover:bg-emerald-50"
                                  >
                                    Mark as read
                                  </button>
                                )}
                              </div>
                            </div>
                          </div>
                        </motion.li>
                      );
                    })}
                  </ul>
                )}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
