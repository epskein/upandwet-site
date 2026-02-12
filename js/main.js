/* ========================================================
   UP n WET — Main JS
   Preloader + scroll-triggered fade-in/out animations
   ======================================================== */

(function () {
  'use strict';

  // --- Preloader: wait for hero + logo images before revealing page ---
  function preloadImages() {
    var heroSrc = 'assets/hero.jpg';
    var logoSrc = 'assets/logo.png';

    var hero = new Image();
    var logo = new Image();
    var loaded = 0;
    var total = 2;

    function onLoad() {
      loaded++;
      if (loaded >= total) {
        document.body.classList.remove('loading');
      }
    }

    hero.onload = onLoad;
    hero.onerror = onLoad; // reveal even if image fails
    logo.onload = onLoad;
    logo.onerror = onLoad;

    hero.src = heroSrc;
    logo.src = logoSrc;

    // Safety timeout: reveal after 4s no matter what
    setTimeout(function () {
      document.body.classList.remove('loading');
    }, 4000);
  }

  preloadImages();

  // --- Scroll-triggered fade-in/out ---
  var fadeElements = document.querySelectorAll('.fade-in');

  if ('IntersectionObserver' in window) {
    var observer = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          } else {
            entry.target.classList.remove('visible');
          }
        });
      },
      {
        threshold: 0.15,
        rootMargin: '0px 0px -40px 0px',
      }
    );

    fadeElements.forEach(function (el) {
      observer.observe(el);
    });
  } else {
    fadeElements.forEach(function (el) {
      el.classList.add('visible');
    });
  }
})();
