// Theme toggle functionality (data-theme version)
export function initThemeToggle() {
  const themeToggle = document.getElementById("theme-toggle");
  const themeToggleDarkIcon = document.getElementById("theme-toggle-dark-icon");
  const themeToggleLightIcon = document.getElementById(
    "theme-toggle-light-icon"
  );

  // Default theme set করো (যদি localStorage এ না থাকে)
  if (!localStorage.getItem("color-theme")) {
    localStorage.setItem("color-theme", "dark");
  }

  // Page load এর সময় theme apply করো
  if (
    localStorage.getItem("color-theme") === "dark" ||
    !("color-theme" in localStorage)
  ) {
    document.documentElement.setAttribute("data-theme", "dark");
    themeToggleLightIcon.classList.remove("hidden");
    themeToggleDarkIcon.classList.add("hidden");
  } else {
    document.documentElement.setAttribute("data-theme", "light");
    themeToggleDarkIcon.classList.remove("hidden");
    themeToggleLightIcon.classList.add("hidden");
  }

  // Toggle button এ click করলে theme switch করো
  themeToggle.addEventListener("click", () => {
    themeToggleDarkIcon.classList.toggle("hidden");
    themeToggleLightIcon.classList.toggle("hidden");

    if (document.documentElement.getAttribute("data-theme") === "dark") {
      document.documentElement.setAttribute("data-theme", "light");
      localStorage.setItem("color-theme", "light");
    } else {
      document.documentElement.setAttribute("data-theme", "dark");
      localStorage.setItem("color-theme", "dark");
    }
  });
}
