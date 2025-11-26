// import React, { useEffect, useState, useRef } from "react";

// export default function ScreenshotGuard({
//   privacyUrl = "/privacy",
//   countdownMs = 5000,
//   watermarkText = null,
// }) {
//   const [visible, setVisible] = useState(false);
//   const [remaining, setRemaining] = useState(0);
//   const timerRef = useRef(null);

//   const triggerOverlay = (reason = "screenshot-detected") => {
//     clearInterval(timerRef.current);
//     setVisible(true);
//     setRemaining(Math.ceil(countdownMs / 1000));
//     const start = Date.now();

//     timerRef.current = setInterval(() => {
//       const elapsed = Date.now() - start;
//       const left = Math.ceil((countdownMs - elapsed) / 1000);
//       setRemaining(Math.max(0, left));
//       if (elapsed >= countdownMs) {
//         clearInterval(timerRef.current);
//         setVisible(false);
//       }
//     }, 250);
//   };

//   useEffect(() => {
//     function onKeyDown(e) {
//       if (e.key === "PrintScreen" || e.code === "PrintScreen") {
//         e.preventDefault?.();
//         triggerOverlay("printscreen-key");
//       }
//       const isCtrlShiftS = (e.ctrlKey || e.metaKey) && e.shiftKey && e.key.toLowerCase() === "s";
//       if (isCtrlShiftS) {
//         e.preventDefault?.();
//         triggerOverlay("ctrl-shift-s");
//       }
//     }

//     function onVisibilityChange() {
//       if (document.visibilityState === "hidden") triggerOverlay("visibility-hidden");
//     }

//     function onBlur() {
//       triggerOverlay("blur");
//     }

//     window.addEventListener("keydown", onKeyDown, true);
//     document.addEventListener("visibilitychange", onVisibilityChange);
//     window.addEventListener("blur", onBlur);

//     return () => {
//       window.removeEventListener("keydown", onKeyDown, true);
//       document.removeEventListener("visibilitychange", onVisibilityChange);
//       window.removeEventListener("blur", onBlur);
//       clearInterval(timerRef.current);
//     };
//   }, [countdownMs]);

//   return (
//     <>
//       {watermarkText && (
//         <div
//           style={{
//             position: "fixed",
//             inset: 0,
//             pointerEvents: "none",
//             zIndex: 9997,
//             display: "flex",
//             alignItems: "flex-end",
//             justifyContent: "flex-end",
//             padding: 12,
//             fontSize: 12,
//             opacity: 0.25,
//             transform: "rotate(-20deg)",
//             whiteSpace: "nowrap",
//           }}
//         >
//           {watermarkText} — {new Date().toLocaleString()}
//         </div>
//       )}

//       {visible && (
//         <div
//           style={{
//             position: "fixed",
//             inset: 0,
//             zIndex: 9999,
//             backdropFilter: "blur(8px)",
//             background: "rgba(0,0,0,0.4)",
//             display: "flex",
//             alignItems: "center",
//             justifyContent: "center",
//             transition: "opacity 0.2s ease",
//           }}
//         >
//           <div
//             style={{
//               background: "#fff",
//               borderRadius: 12,
//               padding: 22,
//               maxWidth: 500,
//               width: "90%",
//               textAlign: "center",
//               boxShadow: "0 4px 30px rgba(0,0,0,0.4)",
//             }}
//           >
//             <h3 style={{ margin: 0, fontSize: "1.5rem" }}>Screenshot Restricted</h3>
//             <p style={{ marginTop: 10, marginBottom: 20 }}>
//               Screenshots are restricted on this page.<br />
//               For more information, read our{" "}
//               <a href={privacyUrl} target="_blank" rel="noreferrer">
//                 privacy policy
//               </a>.
//             </p>
//             <div style={{ fontSize: "2rem", fontWeight: "bold" }}>{remaining}s</div>
//             <button
//               onClick={() => setVisible(false)}
//               style={{
//                 marginTop: 15,
//                 padding: "8px 14px",
//                 borderRadius: 6,
//                 background: "#111",
//                 color: "#fff",
//                 border: "none",
//                 cursor: "pointer",
//               }}
//             >
//               Dismiss
//             </button>
//           </div>
//         </div>
//       )}
//     </>
//   );
// }

import React, { useEffect, useState, useRef } from "react";

export default function ScreenshotGuard({
  privacyUrl = "/privacy",
  countdownMs = 5000,
  watermarkText = null,
}) {
  const [visible, setVisible] = useState(false);
  const [remaining, setRemaining] = useState(0);
  const timerRef = useRef(null);
  const lastClipboard = useRef("");

  const triggerOverlay = (reason = "screenshot-detected") => {
    clearInterval(timerRef.current);
    setVisible(true);
    setRemaining(Math.ceil(countdownMs / 1000));
    const start = Date.now();

    timerRef.current = setInterval(() => {
      const elapsed = Date.now() - start;
      const left = Math.ceil((countdownMs - elapsed) / 1000);
      setRemaining(Math.max(0, left));
      if (elapsed >= countdownMs) {
        clearInterval(timerRef.current);
        setVisible(false);
      }
    }, 250);
  };

  // --- Main heuristic listeners ---
  useEffect(() => {
    function onKeyDown(e) {
      const key = e.key?.toLowerCase();
      const code = e.code?.toLowerCase();

      // Try all variations of PrintScreen naming
      if (
        key.includes("printscreen") ||
        code.includes("printscreen") ||
        key === "print" ||
        key === "prt" ||
        code === "print" ||
        code === "prt"
      ) {
        e.preventDefault?.();
        triggerOverlay("printscreen-key");
      }

      // Known screenshot combos
      const isCtrlShiftS =
        (e.ctrlKey || e.metaKey) && e.shiftKey && key === "s";
      const isAltPrint = e.altKey && key.includes("print");
      if (isCtrlShiftS || isAltPrint) {
        e.preventDefault?.();
        triggerOverlay("combo-screenshot");
      }
    }

    // Window loses focus or tab becomes hidden
    function onBlur() {
      if (!document.hasFocus()) triggerOverlay("window-blur");
    }
    function onVisibilityChange() {
      if (document.visibilityState === "hidden") triggerOverlay("tab-hidden");
    }

    // Clipboard polling trick (detects new screenshot in clipboard)
    async function checkClipboard() {
      try {
        const text = await navigator.clipboard.readText();
        if (text && text !== lastClipboard.current) {
          lastClipboard.current = text;
        }
      } catch {
        /* ignore - browser blocks clipboard access if not granted */
      }
    }
    const clipboardPoll = setInterval(checkClipboard, 1200);

    window.addEventListener("keydown", onKeyDown, true);
    window.addEventListener("blur", onBlur);
    document.addEventListener("visibilitychange", onVisibilityChange);

    return () => {
      window.removeEventListener("keydown", onKeyDown, true);
      window.removeEventListener("blur", onBlur);
      document.removeEventListener("visibilitychange", onVisibilityChange);
      clearInterval(timerRef.current);
      clearInterval(clipboardPoll);
    };
  }, [countdownMs]);

  return (
    <>
      {/* Watermark overlay */}
      {watermarkText && (
        <div
          style={{
            position: "fixed",
            inset: 0,
            pointerEvents: "none",
            zIndex: 9997,
            display: "flex",
            alignItems: "flex-end",
            justifyContent: "flex-end",
            padding: 12,
            fontSize: 12,
            opacity: 0.25,
            transform: "rotate(-20deg)",
            whiteSpace: "nowrap",
          }}
        >
          {watermarkText} — {new Date().toLocaleString()}
        </div>
      )}

      {/* Blur + Popup */}
      {visible && (
        <div
          style={{
            position: "fixed",
            inset: 0,
            zIndex: 9999,
            backdropFilter: "blur(8px)",
            background: "rgba(0,0,0,0.45)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            transition: "opacity 0.2s ease",
          }}
        >
          <div
            style={{
              background: "#fff",
              borderRadius: 12,
              padding: 22,
              maxWidth: 500,
              width: "90%",
              textAlign: "center",
              boxShadow: "0 4px 30px rgba(0,0,0,0.4)",
            }}
          >
            <h3 style={{ margin: 0, fontSize: "1.5rem" }}>
              Screenshot Restricted
            </h3>
            <p style={{ marginTop: 10, marginBottom: 20 }}>
              Screenshots are restricted on this page.
              <br />
              For more information, read our{" "}
              <a href={privacyUrl} target="_blank" rel="noreferrer">
                privacy policy
              </a>
              .
            </p>
            <div style={{ fontSize: "2rem", fontWeight: "bold" }}>
              {remaining}s
            </div>
            <button
              onClick={() => setVisible(false)}
              style={{
                marginTop: 15,
                padding: "8px 14px",
                borderRadius: 6,
                background: "#111",
                color: "#fff",
                border: "none",
                cursor: "pointer",
              }}
            >
              Dismiss
            </button>
          </div>
        </div>
      )}
    </>
  );
}
