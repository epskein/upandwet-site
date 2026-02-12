/* ========================================================
   UP n WET — Main JS
   Scroll-triggered fade-in animations via IntersectionObserver
   ======================================================== */

(function () {
  'use strict';

  // --- Scroll-triggered fade-in ---
  const fadeElements = document.querySelectorAll('.fade-in');

  if ('IntersectionObserver' in window) {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            observer.unobserve(entry.target); // animate once
          }
        });
      },
      {
        threshold: 0.15,
        rootMargin: '0px 0px -40px 0px',
      }
    );

    fadeElements.forEach((el) => observer.observe(el));
  } else {
    // Fallback: show everything immediately
    fadeElements.forEach((el) => el.classList.add('visible'));
  }
})();
