// Scroll reveal animation
export function initScrollReveal() {
  const observerOptions = {
    threshold: 0.1,
    rootMargin: "0px 0px -50px 0px",
  };
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("revealed");
      }
    });
  }, observerOptions);
  document.addEventListener("DOMContentLoaded", () => {
    document.querySelectorAll(".scroll-reveal").forEach((el) => {
      observer.observe(el);
    });
  });
}
