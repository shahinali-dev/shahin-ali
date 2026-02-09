import { html, raw } from "hono/html";

interface NavbarProps {
  currentPage?: string;
}

interface NavLink {
  href: string;
  label: string;
}

const navLinks: NavLink[] = [
  { href: "/#home", label: "Home" },
  { href: "/#about", label: "About" },
  { href: "/#education", label: "Education" },
  { href: "/#experience", label: "Experience" },
  { href: "/#skills", label: "Skills" },
  { href: "/projects", label: "Projects" },
  { href: "/#contact", label: "Contact" },
];

const Navbar = (props: NavbarProps) => {
  return html`
    <nav
      id="navbar"
      class="fixed top-0 left-0 right-0 z-50 transition-all duration-300 bg-white/80 dark:bg-dark-900/80 backdrop-blur-md border-b border-gray-200/50 dark:border-gray-800/50"
      role="navigation"
      aria-label="Main navigation"
    >
      <div class="container mx-auto px-4 sm:px-6 lg:px-8">
        <div class="flex items-center justify-between h-16 sm:h-20">
          <!-- Logo -->
          <a
            href="/"
            class="text-xl sm:text-2xl font-bold bg-gradient-to-r from-primary-600 to-secondary-600 dark:from-primary-400 dark:to-secondary-400 bg-clip-text text-transparent hover:scale-105 transition-transform duration-300"
            aria-label="Shahin Ali - Home"
          >
            Shahin Ali
          </a>

          <!-- Desktop Navigation -->
          <ul
            class="hidden md:flex items-center space-x-1 lg:space-x-2"
            role="list"
          >
            ${navLinks.map(
              (link) => html`
                <li role="listitem">
                  <a
                    href="${link.href}"
                    class="nav-link px-3 lg:px-4 py-2 rounded-lg text-gray-700 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400 hover:bg-gray-100 dark:hover:bg-dark-800 transition-all duration-300 font-medium text-sm lg:text-base ${props.currentPage ===
                    link.label.toLowerCase()
                      ? "text-primary-600 dark:text-primary-400 bg-gray-100 dark:bg-dark-800"
                      : ""}"
                    >${link.label}</a
                  >
                </li>
              `,
            )}
          </ul>

          <!-- Theme Toggle & Mobile Menu Button -->
          <div class="flex items-center gap-2 sm:gap-4">
            <!-- Theme Toggle -->
            <button
              id="theme-toggle"
              type="button"
              class="p-2 sm:p-2.5 rounded-lg hover:bg-gray-100 dark:hover:bg-dark-800 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-primary-500"
              aria-label="Toggle theme"
            >
              <svg
                id="theme-toggle-dark-icon"
                class="w-5 h-5 sm:w-6 sm:h-6 text-gray-700 dark:text-gray-300"
                fill="currentColor"
                viewBox="0 0 20 20"
                aria-hidden="true"
              >
                ${raw(
                  `<path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z"></path>`,
                )}
              </svg>
              <svg
                id="theme-toggle-light-icon"
                class="hidden w-5 h-5 sm:w-6 sm:h-6 text-gray-700 dark:text-gray-300"
                fill="currentColor"
                viewBox="0 0 20 20"
                aria-hidden="true"
              >
                ${raw(
                  `<path d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z" fill-rule="evenodd" clip-rule="evenodd"></path>`,
                )}
              </svg>
            </button>

            <!-- Mobile Menu Button -->
            <button
              id="mobile-menu-btn"
              type="button"
              class="md:hidden p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-dark-800 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-primary-500"
              aria-expanded="false"
              aria-label="Toggle navigation menu"
            >
              <!-- Hamburger Icon -->
              <svg
                id="icon-hamburger"
                class="w-6 h-6 text-gray-700 dark:text-gray-300"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                ${raw(
                  `<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path>`,
                )}
              </svg>
              <!-- Close Icon -->
              <svg
                id="icon-close"
                class="hidden w-6 h-6 text-gray-700 dark:text-gray-300"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                ${raw(
                  `<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>`,
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      <!-- Mobile Menu -->
      <div
        id="mobile-menu"
        class="hidden md:hidden mobile-menu bg-white dark:bg-dark-900 border-t border-gray-200 dark:border-gray-800"
      >
        <ul class="px-4 py-4 space-y-2" role="list">
          ${navLinks.map(
            (link) => html`
              <li role="listitem">
                <a
                  href="${link.href}"
                  class="mobile-nav-link block px-4 py-3 rounded-lg text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-dark-800 hover:text-primary-600 dark:hover:text-primary-400 transition-all duration-300 font-medium ${props.currentPage ===
                  link.label.toLowerCase()
                    ? "text-primary-600 dark:text-primary-400 bg-gray-100 dark:bg-dark-800"
                    : ""}"
                  >${link.label}</a
                >
              </li>
            `,
          )}
        </ul>
      </div>
    </nav>
  `;
};

export default Navbar;
