// script.js
document.addEventListener("DOMContentLoaded", function() {
    gsap.from(".animated-title", {
      opacity: 0,
      y: -50,
      duration: 1.5,
      delay: 0.5,
      ease: "power3.out"
    });
  });
  