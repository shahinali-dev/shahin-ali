import { html } from "hono/html";

interface FooterLink {
  href: string;
  label: string;
}

const footerLinks: FooterLink[] = [
  { href: "#home", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#experience", label: "Experience" },
  { href: "#skills", label: "Skills" },
  { href: "#projects", label: "Projects" },
  { href: "#contact", label: "Contact" },
];

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return html`
    <footer
      class="bg-gray-900 dark:bg-dark-900 text-white py-12 border-t border-gray-800 dark:border-dark-700"
    >
      <div class="container mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center">
          <!-- Brand/Logo -->
          <div class="text-2xl font-bold mb-4">
            <a
              href="#home"
              class="bg-gradient-to-r from-primary-500 to-secondary-500 bg-clip-text text-transparent animate-pulse-slow focus:outline-none focus:ring-2 focus:ring-primary-500 rounded p-0.5 transition-all duration-300"
              aria-label="Shahin Ali - Home"
            >
              &lt;Shahin Ali /&gt;
            </a>
          </div>

          <!-- Tagline -->
          <p class="text-gray-400 mb-6">Full Stack Web Developer</p>

          <!-- Navigation Links -->
          <nav aria-label="Footer Navigation">
            <ul class="flex flex-wrap justify-center space-x-6 mb-8">
              ${footerLinks.map(
                (link) => html`
                  <li>
                    <a
                      href="${link.href}"
                      class="text-gray-400 hover:text-primary-400 transition-all duration-300 hover:scale-110"
                    >
                      ${link.label}
                    </a>
                  </li>
                `,
              )}
            </ul>
          </nav>

          <!-- Copyright -->
          <div class="border-t border-gray-800 dark:border-dark-700 pt-8">
            <p class="text-gray-400">
              &copy; ${currentYear} Shahin Ali. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  `;
};

export default Footer;
