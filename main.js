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
  const cardControllers = document.querySelectorAll("[data-card-controller]");

cardControllers.forEach(controller => {
  controller.addEventListener("click", (e) => {
    const card = e.currentTarget.parentElement.parentElement;
    const isVisible = card.dataset.visible;

    if (isVisible === "false") {
      card.setAttribute("data-visible", true);
    } else {
      card.setAttribute("data-visible", false);
    }
  })
})



  