// Enhanced mobile menu toggle with icon switch
export function initMobileMenu() {
  const mobileMenuBtn = document.getElementById("mobile-menu-btn");
  const mobileMenu = document.getElementById("mobile-menu");
  const iconHamburger = document.getElementById("icon-hamburger");
  const iconClose = document.getElementById("icon-close");

  mobileMenuBtn.addEventListener("click", () => {
    const isOpen = mobileMenu.classList.contains("show");

    if (isOpen) {
      mobileMenu.classList.remove("show");
      mobileMenu.classList.add("hidden");
      mobileMenuBtn.setAttribute("aria-expanded", "false");
      iconHamburger.classList.remove("hidden");
      iconClose.classList.add("hidden");
    } else {
      mobileMenu.classList.add("show");
      mobileMenu.classList.remove("hidden");
      mobileMenuBtn.setAttribute("aria-expanded", "true");
      iconHamburger.classList.add("hidden");
      iconClose.classList.remove("hidden");
    }
  });

  // Close menu when clicking nav link
  document.querySelectorAll(".mobile-nav-link").forEach((link) => {
    link.addEventListener("click", () => {
      mobileMenu.classList.add("hidden");
      mobileMenu.classList.remove("show");
      mobileMenuBtn.setAttribute("aria-expanded", "false");
      iconHamburger.classList.remove("hidden");
      iconClose.classList.add("hidden");
    });
  });

  // Smooth scroll
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute("href"));
      if (target) {
        target.scrollIntoView({ behavior: "smooth", block: "start" });
        mobileMenu.classList.add("hidden");
        mobileMenu.classList.remove("show");
        mobileMenuBtn.setAttribute("aria-expanded", "false");
        iconHamburger.classList.remove("hidden");
        iconClose.classList.add("hidden");
      }
    });
  });
}
