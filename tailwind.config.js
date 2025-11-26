// tailwind.config.js
module.exports = {
  theme: {
    extend: {
      keyframes: {
        // --- For the error shake ---
        shake: {
          '0%, 100%': { transform: 'translateX(0)' },
          '10%, 30%, 50%, 70%, 90%': { transform: 'translateX(-8px)' },
          '20%, 40%, 60%, 80%': { transform: 'translateX(8px)' },
        },
        // --- For the glowing corners ---
        'corner-pulse': {
          '0%, 100%': { opacity: '0.5' },
          '50%': { opacity: '1' },
        },
      },
      animation: {
        shake: 'shake 0.6s ease-in-out',
        'corner-pulse': 'corner-pulse 3s infinite ease-in-out',
      },
    },
  },
  plugins: [
    // You might already have this, it helps with the form fields
    require('@tailwindcss/forms'),
  ],
};