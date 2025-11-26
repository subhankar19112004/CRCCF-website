// import React from 'react';
// import ReactDOM from 'react-dom/client';
// import App from './App.jsx';
// import './index.css';

// ReactDOM.createRoot(document.getElementById('root')).render(
//   <React.StrictMode>
//       <App />
//   </React.StrictMode>
// );
// src/main.jsx
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';

// --- 1. THE CORRECT IMPORT ---
import Lenis from '@studio-freight/lenis';

// 2. Initialize Lenis (this part was fine)
const lenis = new Lenis({
  lerp: 0.07,
  smoothWheel: true,
});

// 3. Create a function to update Lenis on every animation frame
function raf(time) {
  lenis.raf(time);
  requestAnimationFrame(raf);
}

// 4. Start the animation loop
requestAnimationFrame(raf);
// --- END OF LENIS SETUP ---

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);