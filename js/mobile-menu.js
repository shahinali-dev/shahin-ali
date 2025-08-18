// Enhanced mobile menu toggle
export function initMobileMenu() {
  const mobileMenuBtn = document.getElementById("mobile-menu-btn");
  const mobileMenu = document.getElementById("mobile-menu");
  mobileMenuBtn.addEventListener("click", () => {
    mobileMenu.classList.toggle("hidden");
    mobileMenu.classList.toggle("show");
    const icon = mobileMenuBtn.querySelector("svg");
    icon.style.transform = mobileMenu.classList.contains("show")
      ? "rotate(90deg)"
      : "rotate(0deg)";
  });
  document.querySelectorAll(".mobile-nav-link").forEach((link) => {
    link.addEventListener("click", () => {
      mobileMenu.classList.add("hidden");
      mobileMenu.classList.remove("show");
      const icon = mobileMenuBtn.querySelector("svg");
      icon.style.transform = "rotate(0deg)";
    });
  });
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute("href"));
      if (target) {
        target.scrollIntoView({ behavior: "smooth", block: "start" });
        mobileMenu.classList.add("hidden");
        mobileMenu.classList.remove("show");
        const icon = mobileMenuBtn.querySelector("svg");
        icon.style.transform = "rotate(0deg)";
      }
    });
  });
}
