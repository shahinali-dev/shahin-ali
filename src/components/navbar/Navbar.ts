import { html } from "hono/html";

interface NavLink {
  href: string;
  label: string;
  ariaLabel?: string;
}

interface NavbarProps {
  currentPage?: string;
}

const navLinks: NavLink[] = [
  { href: "#home", label: "Home", ariaLabel: "Navigate to Home section" },
  { href: "#about", label: "About", ariaLabel: "Navigate to About section" },
  {
    href: "#experience",
    label: "Experience",
    ariaLabel: "Navigate to Experience section",
  },
  {
    href: "#education",
    label: "Education",
    ariaLabel: "Navigate to Education section",
  },
  { href: "#skills", label: "Skills", ariaLabel: "Navigate to Skills section" },
  {
    href: "#projects",
    label: "Projects",
    ariaLabel: "Navigate to Projects section",
  },
  {
    href: "#contact",
    label: "Contact",
    ariaLabel: "Navigate to Contact section",
  },
];

const Navbar = (props?: NavbarProps) => {
  const { currentPage } = props || {};

  return html`
    <!-- Navigation -->
    <nav
      class="fixed top-0 w-full bg-white/80 dark:bg-dark-900/80 glass-effect z-50 shadow-lg dark:shadow-dark-800/50 transition-all duration-300"
      role="navigation"
      aria-label="Main Navigation"
    >
      <div class="container mx-auto px-4 sm:px-6 lg:px-8">
        <div class="flex justify-between items-center py-4">
          <!-- Brand/Logo -->
          <div class="text-xl sm:text-2xl font-bold">
            <a
              href="#home"
              class="bg-gradient-to-r from-primary-500 to-secondary-500 bg-clip-text text-transparent animate-pulse-slow focus:outline-none focus:ring-2 focus:ring-primary-500 rounded p-0.5 transition-all duration-300"
              aria-label="Shahin Ali - Home"
            >
              &lt;Shahin Ali /&gt;
            </a>
          </div>

          <!-- Desktop Menu -->
          <ul class="hidden md:flex space-x-6 lg:space-x-8" role="menubar">
            ${navLinks.map(
              (link) => html`
                <li role="none">
                  <a
                    href="${link.href}"
                    class="nav-link focus:outline-none rounded p-0.5 focus:ring-2 focus:ring-primary-500 transition-all duration-300"
                    role="menuitem"
                    aria-label="${link.ariaLabel || link.label}"
                  >
                    ${link.label}
                  </a>
                </li>
              `,
            )}
          </ul>

          <!-- Action Buttons -->
          <div class="flex items-center space-x-4 md:space-x-0">
            <!-- Theme Toggle -->
            <button
              id="theme-toggle"
              class="p-2 rounded-lg bg-gray-200 dark:bg-dark-800 text-gray-800 dark:text-gray-200 hover:bg-gray-300 dark:hover:bg-dark-700 transition-all duration-300 hover:scale-110 focus:outline-none focus:ring-2 focus:ring-primary-500"
              aria-label="Toggle Dark/Light Mode"
              type="button"
            >
              <svg
                id="theme-toggle-light-icon"
                aria-hidden="true"
                fill="none"
                focusable="false"
                height="22"
                role="presentation"
                viewBox="0 0 24 24"
                width="22"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M12 17C14.7614 17 17 14.7614 17 12C17 9.23858 14.7614 7 12 7C9.23858 7 7 9.23858 7 12C7 14.7614 9.23858 17 12 17Z"
                  stroke="currentColor"
                  stroke-width="1.5"
                ></path>
                <path
                  d="M12 2V4M12 20V22M4 12H2M22 12H20M19.778 4.223L17.556 6.445M6.444 6.254L4.222 4.222M6.444 17.556L4.222 19.778M19.778 19.777L17.556 17.555"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-width="1.5"
                ></path>
              </svg>
              <svg
                id="theme-toggle-dark-icon"
                class="hidden w-5 h-5"
                fill="currentColor"
                viewBox="0 0 20 20"
                aria-hidden="true"
              >
                <path
                  d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z"
                ></path>
              </svg>
            </button>

            <!-- Mobile Menu Button -->
            <button
              id="mobile-menu-btn"
              class="md:hidden p-2 rounded-lg bg-gray-200 dark:bg-dark-800 text-gray-800 dark:text-gray-200 hover:bg-gray-300 dark:hover:bg-dark-700 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-primary-500"
              aria-label="Open mobile menu"
              aria-expanded="false"
              aria-controls="mobile-menu"
              type="button"
            >
              <!-- Hamburger Icon -->
              <svg
                id="icon-hamburger"
                class="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M4 6h16M4 12h16M4 18h16"
                ></path>
              </svg>

              <!-- Close (X) Icon -->
              <svg
                id="icon-close"
                class="w-6 h-6 hidden"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M6 18L18 6M6 6l12 12"
                ></path>
              </svg>
            </button>
          </div>
        </div>
      </div>

      <!-- Mobile Menu -->
      <div
        id="mobile-menu"
        class="hidden md:hidden bg-white/95 dark:bg-dark-900/95 glass-effect border-t dark:border-dark-800 transition-all duration-300"
        role="menu"
      >
        <ul class="p-8 space-y-3">
          ${navLinks.map(
            (link) => html`
              <li>
                <a
                  href="${link.href}"
                  class="mobile-nav-link"
                  role="menuitem"
                  aria-label="${link.ariaLabel || link.label}"
                >
                  ${link.label}
                </a>
              </li>
            `,
          )}
        </ul>
      </div>
    </nav>
  `;
};

export default Navbar;
