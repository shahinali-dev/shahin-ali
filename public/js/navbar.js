// Enhanced navbar scroll effects with hash-based active state
export function initNavbarScroll() {
  const nav = document.getElementById("navbar");
  const navLinks = document.querySelectorAll(".nav-link");
  const mobileNavLinks = document.querySelectorAll(".mobile-nav-link");

  // Function to update active nav links based on current hash or scroll position
  function updateActiveNavLink() {
    const currentPath = window.location.pathname;
    const currentHash = window.location.hash;

    // For /projects page - set projects link as active
    if (currentPath === "/projects") {
      [...navLinks, ...mobileNavLinks].forEach((link) => {
        link.classList.remove(
          "active",
          "text-primary-600",
          "dark:text-primary-400",
          "bg-gray-100",
          "dark:bg-dark-800",
        );
        if (link.getAttribute("href") === "/projects") {
          link.classList.add(
            "active",
            "text-primary-600",
            "dark:text-primary-400",
            "bg-gray-100",
            "dark:bg-dark-800",
          );
        }
      });
      return;
    }

    // For home page - use hash or scroll position
    if (currentHash) {
      // If there's a hash in URL, use it
      [...navLinks, ...mobileNavLinks].forEach((link) => {
        link.classList.remove(
          "active",
          "text-primary-600",
          "dark:text-primary-400",
          "bg-gray-100",
          "dark:bg-dark-800",
        );
        if (
          link.getAttribute("href") === `/${currentHash}` ||
          link.getAttribute("href") === currentHash
        ) {
          link.classList.add(
            "active",
            "text-primary-600",
            "dark:text-primary-400",
            "bg-gray-100",
            "dark:bg-dark-800",
          );
        }
      });
    } else {
      // No hash - use scroll position to determine active section
      const sections = document.querySelectorAll("section[id]");
      const scrollPos = window.scrollY + 200;

      let activeSection = "home"; // default to home

      sections.forEach((section) => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.offsetHeight;
        const sectionId = section.getAttribute("id");

        if (scrollPos >= sectionTop && scrollPos < sectionTop + sectionHeight) {
          activeSection = sectionId;
        }
      });

      // Update nav links
      [...navLinks, ...mobileNavLinks].forEach((link) => {
        link.classList.remove(
          "active",
          "text-primary-600",
          "dark:text-primary-400",
          "bg-gray-100",
          "dark:bg-dark-800",
        );
        const linkHref = link.getAttribute("href");
        if (
          linkHref === `/#${activeSection}` ||
          linkHref === `#${activeSection}`
        ) {
          link.classList.add(
            "active",
            "text-primary-600",
            "dark:text-primary-400",
            "bg-gray-100",
            "dark:bg-dark-800",
          );
        }
      });
    }
  }

  // Navbar scroll effect (floating navbar)
  window.addEventListener("scroll", () => {
    if (window.scrollY > 100) {
      nav.classList.add("scrolled", "navbar-floating");
    } else {
      nav.classList.remove("scrolled", "navbar-floating");
    }

    // Update active link based on scroll position (only if no hash in URL)
    if (!window.location.hash) {
      updateActiveNavLink();
    }
  });

  // Update active link on hash change
  window.addEventListener("hashchange", () => {
    updateActiveNavLink();
  });

  // Update active link on page load
  window.addEventListener("load", () => {
    updateActiveNavLink();
  });

  // Update on initial run
  updateActiveNavLink();
}
