// Animate skill circles when they come into view
export function initSkillsAnimation() {
  const observerOptions = {
    threshold: 0.1,
    rootMargin: "0px 0px -50px 0px",
  };
  const skillObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const skillCircles = entry.target.querySelectorAll(".skill-circle");
        skillCircles.forEach((circle, index) => {
          setTimeout(() => {
            circle.classList.add("animate");
          }, index * 200);
        });
      }
    });
  }, observerOptions);
  document.addEventListener("DOMContentLoaded", () => {
    document.querySelectorAll(".bg-white/80").forEach((el) => {
      if (el.querySelector(".skill-circle")) {
        skillObserver.observe(el);
      }
    });
  });
}
