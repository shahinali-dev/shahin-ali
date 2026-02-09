// Enhanced navbar scroll effects
export function initNavbarScroll() {
  window.addEventListener("scroll", () => {
    const nav = document.getElementById("navbar");
    const navLinks = document.querySelectorAll(".nav-link");
    if (window.scrollY > 100) {
      nav.classList.add("scrolled", "navbar-floating");
    } else {
      nav.classList.remove("scrolled", "navbar-floating");
    }
    const sections = document.querySelectorAll("section[id]");
    const scrollPos = window.scrollY + 200;
    sections.forEach((section) => {
      const sectionTop = section.offsetTop;
      const sectionHeight = section.offsetHeight;
      const sectionId = section.getAttribute("id");
      if (scrollPos >= sectionTop && scrollPos < sectionTop + sectionHeight) {
        navLinks.forEach((link) => {
          link.classList.remove("active");
          if (link.getAttribute("href") === `#${sectionId}`) {
            link.classList.add("active");
          }
        });
      }
    });
  });
}
