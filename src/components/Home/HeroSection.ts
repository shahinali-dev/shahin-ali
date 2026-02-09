import { html } from "hono/html";

interface TechIcon {
  name: string;
  icon: string;
  color: string;
  link?: string;
}

interface SocialLink {
  href: string;
  label: string;
  icon: string;
}

interface HeroStats {
  value: string;
  label: string;
  color: string;
}

const coreTechnologies: TechIcon[] = [
  { name: "React", icon: "fab fa-react", color: "#61DAFB" },
  { name: "Next.js", icon: "/assets/icons/next-js.svg", color: "" },
  { name: "JavaScript", icon: "fab fa-js-square", color: "#F7DF1E" },
  { name: "Node.js", icon: "fab fa-node-js", color: "#339933" },
  { name: "TypeScript", icon: "/assets/icons/typescript.svg", color: "" },
  { name: "MongoDB", icon: "fa-solid fa-leaf", color: "text-green-400" },
  { name: "PostgreSQL", icon: "/assets/icons/postgresql.svg", color: "" },
];

const stats: HeroStats[] = [
  {
    value: "1.5+",
    label: "Years Experience",
    color: "text-primary-400 light:text-primary-600",
  },
  {
    value: "25+",
    label: "Projects Built",
    color: "text-secondary-400 light:text-secondary-600",
  },
  {
    value: "98%",
    label: "Client Satisfaction",
    color: "text-accent-400 light:text-accent-600",
  },
];

const socialLinks: SocialLink[] = [
  {
    href: "https://github.com/shahinali-dev",
    label: "GitHub Profile",
    icon: `<path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />`,
  },
  {
    href: "https://linkedin.com/in/shahinali-dev",
    label: "LinkedIn Profile",
    icon: `<path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />`,
  },
  {
    href: "mailto:shahinali.dev@gmail.com",
    label: "Send Email",
    icon: `<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />`,
  },
];

const HeroSection = () => {
  return html`
    <!-- Hero Section -->
    <section
      id="home"
      class="min-h-screen relative overflow-hidden dark:bg-gradient-to-br dark:from-slate-900 dark:via-purple-900 dark:to-slate-900 light:bg-gradient-to-br light:from-blue-50 light:via-indigo-100 light:to-purple-100 transition-all duration-300"
      aria-labelledby="hero-heading"
    >
      <!-- Animated Background Pattern -->
      <div class="absolute inset-0 hero-pattern" aria-hidden="true"></div>

      <!-- Floating Elements -->
      <div class="absolute inset-0 overflow-hidden" aria-hidden="true">
        <div
          class="absolute top-10 sm:top-20 left-5 sm:left-10 w-48 h-48 sm:w-72 sm:h-72 bg-gradient-to-r from-primary-500/20 to-secondary-500/20 rounded-full blur-3xl animate-float"
        ></div>
        <div
          class="absolute bottom-10 sm:bottom-20 right-5 sm:right-10 w-64 h-64 sm:w-96 sm:h-96 bg-gradient-to-r from-secondary-500/20 to-accent-500/20 rounded-full blur-3xl animate-float"
          style="animation-delay: 2s"
        ></div>
        <div
          class="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-48 h-48 sm:w-64 sm:h-64 bg-gradient-to-r from-accent-500/20 to-primary-500/20 rounded-full blur-3xl animate-pulse-slow"
        ></div>
      </div>

      <!-- Geometric Shapes -->
      <div class="absolute inset-0" aria-hidden="true">
        <div
          class="absolute top-20 sm:top-32 right-10 sm:right-20 w-16 h-16 sm:w-24 sm:h-24 border-2 border-primary-400/30 rotate-45 animate-spin"
          style="animation-duration: 20s"
        ></div>
        <div
          class="absolute bottom-20 sm:bottom-32 left-10 sm:left-20 w-12 h-12 sm:w-16 sm:h-16 bg-secondary-500/20 rotate-12 animate-bounce-slow"
        ></div>
        <div
          class="absolute top-1/2 right-1/4 w-6 h-6 sm:w-8 sm:h-8 bg-accent-500/40 rounded-full animate-ping"
        ></div>
      </div>

      <div class="relative z-10 min-h-screen flex items-center py-16 sm:py-20">
        <div class="container mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div
            class="grid lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 items-center"
          >
            <!-- Left Content -->
            <article
              class="text-gray-900 dark:text-white light:text-gray-900 space-y-6 sm:space-y-8 animate-slide-up order-2 lg:order-1"
            >
              <!-- Availability Status -->
              <div
                class="inline-flex items-center px-3 sm:px-4 py-2 glass-morphism rounded-full text-sm font-medium dark:bg-green-500/20 light:bg-green-100/30 dark:text-green-300 text-green-400 light:text-green-600 animate-fade-in dark:border-green-500/30 border border-green-200/40"
                role="status"
                aria-live="polite"
              >
                <div
                  class="w-2 h-2 bg-green-500 rounded-full mr-2 animate-pulse"
                  aria-hidden="true"
                ></div>
                Available for new opportunities
              </div>

              <!-- Main Heading -->
              <header class="space-y-4">
                <div class="space-y-2">
                  <h1
                    id="hero-heading"
                    class="text-3xl sm:text-4xl md:text-5xl lg:text-4xl xl:text-6xl font-bold leading-tight dark:text-white light:text-gray-900"
                  >
                    Hi, I'm
                    <span class="text-gradient animate-pulse">Shahin Ali</span>
                  </h1>
                  <h2
                    class="text-xl sm:text-2xl md:text-3xl lg:text-2xl xl:text-4xl dark:text-gray-300 light:text-gray-700 font-semibold"
                  >
                    Full Stack Developer
                  </h2>
                </div>

                <!-- Description -->
                <p
                  class="text-base sm:text-lg lg:text-sm xl:text-base dark:text-gray-300 light:text-gray-600 leading-relaxed max-w-xl"
                >
                  Full Stack Developer with
                  <span
                    class="text-primary-400 light:text-primary-600 font-semibold"
                    >1.5+ years</span
                  >
                  of experience specializing in React, Next.js, TypeScript,
                  Node.js, Express, NestJS, PostgreSQL, and MongoDB. Specialized
                  in building scalable web applications and modern user
                  interfaces.
                </p>
              </header>

              <!-- Stats Grid -->
              <section
                class="flex flex-wrap items-center gap-4 sm:gap-6 py-4 sm:py-6"
                aria-label="Professional Statistics"
              >
                ${stats.map(
                  (stat, index) => html`
                    ${index > 0
                      ? html`<div
                          class="h-8 sm:h-12 w-px bg-gray-300 dark:bg-green-500/30"
                          aria-hidden="true"
                        ></div>`
                      : ""}
                    <div class="text-center lg:text-left">
                      <div
                        class="text-2xl sm:text-3xl lg:text-3xl xl:text-4xl font-bold ${stat.color} mb-1"
                      >
                        ${stat.value}
                      </div>
                      <div
                        class="text-xs sm:text-sm text-gray-500 light:text-gray-600"
                      >
                        ${stat.label}
                      </div>
                    </div>
                  `,
                )}
              </section>

              <!-- Core Technologies -->
              <section class="space-y-4" aria-label="Core Technologies">
                <h3
                  class="text-base sm:text-lg font-semibold text-gray-800 dark:text-gray-300 uppercase tracking-wider"
                >
                  Core Technologies
                </h3>
                <div
                  class="flex flex-wrap items-center gap-4 sm:gap-6"
                  role="list"
                >
                  ${coreTechnologies.map(
                    (tech) => html`
                      <div class="group" title="${tech.name}" role="listitem">
                        ${tech.icon.startsWith("/")
                          ? html`<img
                              src="${tech.icon}"
                              alt="${tech.name}"
                              class="h-8 w-8 object-center transition-all duration-300 group-hover:scale-110 ${tech.name ===
                              "TypeScript"
                                ? "rounded-xs"
                                : ""}"
                            />`
                          : tech.icon.includes("fa-leaf")
                            ? html`<i
                                class="${tech.icon} ${tech.color} text-3xl transition-all duration-300 group-hover:scale-110"
                              ></i>`
                            : html`<i
                                class="${tech.icon} text-2xl sm:text-3xl transition-all duration-300 group-hover:scale-110"
                                style="color: ${tech.color}"
                                aria-label="${tech.name}"
                              ></i>`}
                      </div>
                    `,
                  )}
                </div>
              </section>

              <!-- CTA Buttons -->
              <section
                class="flex flex-col sm:flex-row gap-3 sm:gap-4 pt-4"
                aria-label="Call to Action"
              >
                <!-- Explore My Work -->
                <a
                  href="#projects"
                  class="group relative px-4 sm:px-6 py-3 rounded-xl font-semibold text-white overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-2xl text-center focus:outline-none focus:ring-4 focus:ring-primary-300 dark:bg-gradient-to-r dark:from-primary-500 dark:to-secondary-500 bg-gradient-to-r from-indigo-600 to-purple-600"
                >
                  <span class="relative z-10 lg:text-sm xl:text-base"
                    >Explore My Work</span
                  >
                  <div
                    class="absolute inset-0 bg-gradient-to-r from-primary-600 to-secondary-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  ></div>
                </a>

                <!-- Talk Via AI -->
                <a
                  href="#contact"
                  class="group px-4 sm:px-6 py-3 rounded-xl font-semibold dark:bg-white/10 bg-gray-200/20 dark:text-white text-gray-800 border border-gray-300 hover:border-gray-400/70 transition-all duration-300 hover:scale-105 dark:hover:bg-white/20 hover:bg-gray-300/30 text-center focus:outline-none focus:ring-4 focus:ring-gray-300 dark:focus:ring-white/20 lg:text-sm xl:text-base"
                >
                  Talk Via AI
                </a>

                <!-- View Resume -->
                <a
                  href="/assets/resume/Shahin ali.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  class="group px-4 sm:px-6 py-3 rounded-xl font-semibold bg-transparent dark:text-white text-gray-800 border border-gray-300 hover:border-gray-400/70 transition-all duration-300 hover:scale-105 dark:hover:bg-white/10 hover:bg-gray-200/20 text-center focus:outline-none focus:ring-4 focus:ring-gray-300 dark:focus:ring-white/20 lg:text-sm xl:text-base"
                >
                  Resume
                </a>
              </section>

              <!-- Social Links -->
              <nav
                class="flex flex-wrap items-center gap-3 sm:gap-4 pt-4 sm:pt-6"
                aria-label="Social Links"
              >
                ${socialLinks.map(
                  (link) => html`
                    <a
                      href="${link.href}"
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="${link.label}"
                      class="p-2 sm:p-3 glass-morphism rounded-full dark:text-gray-400 text-gray-600 dark:hover:text-white hover:text-gray-900 hover:scale-110 transition-all duration-300 border dark:border-white/10 border-gray-300 dark:hover:border-white/20 hover:border-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-400 dark:focus:ring-white/20"
                    >
                      <svg
                        class="w-4 h-4 sm:w-5 sm:h-5"
                        fill="${link.href.includes("mailto")
                          ? "none"
                          : "currentColor"}"
                        stroke="${link.href.includes("mailto")
                          ? "currentColor"
                          : "none"}"
                        viewBox="0 0 24 24"
                        aria-hidden="true"
                      >
                        ${link.icon}
                      </svg>
                    </a>
                  `,
                )}
                <div
                  class="h-6 sm:h-10 w-px bg-gray-300 dark:bg-green-500/30"
                  aria-hidden="true"
                ></div>
                <a
                  href="https://calendly.com/shahinali-dev/30min"
                  target="_blank"
                  rel="noopener noreferrer"
                  class="inline-flex items-center gap-2 text-xs sm:text-sm text-gray-600 dark:text-gray-400 light:text-gray-600 hover:text-gray-900 dark:hover:text-white transition-all duration-300 p-0.5 rounded focus:outline-none focus:ring-2 focus:ring-gray-400 dark:focus:ring-white/20"
                  aria-label="Schedule a call via Calendly"
                >
                  <i class="far fa-calendar-alt" aria-hidden="true"></i>
                  <span>Schedule a call</span>
                </a>
              </nav>
            </article>

            <!-- Right Content - Profile Image -->
            <aside
              class="relative animate-scale-in order-1 lg:order-2 flex justify-center pt-10 md:pt-0"
              style="animation-delay: 0.5s"
            >
              <div class="relative w-64 h-64 sm:w-80 sm:h-80 lg:w-96 lg:h-96">
                <!-- Rotating Border -->
                <div
                  class="absolute inset-0 rounded-full bg-gradient-to-r from-primary-500 via-secondary-500 to-accent-500 animate-spin"
                  style="animation-duration: 10s"
                  aria-hidden="true"
                ></div>
                <div
                  class="absolute inset-2 rounded-full bg-slate-900 dark:bg-dark-900 light:bg-white light:shadow-xl"
                ></div>

                <!-- Profile Image -->
                <figure
                  class="absolute inset-3 sm:inset-4 rounded-full overflow-hidden border-2 sm:border-4 border-white/20 light:border-gray-200/50"
                >
                  <img
                    src="/assets/images/shahin-ali.jpeg"
                    alt="Shahin Ali - Full Stack Developer"
                    class="w-full h-full object-cover object-center"
                    loading="lazy"
                  />
                </figure>

                <!-- Floating Tech Icons -->
                <div
                  class="absolute -top-2 sm:-top-4 -right-2 sm:-right-4 w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-r from-primary-500 to-primary-600 rounded-xl flex items-center justify-center text-white font-bold text-base sm:text-xl animate-float shadow-lg"
                  aria-label="JavaScript"
                  role="img"
                >
                  JS
                </div>
                <div
                  class="absolute -bottom-2 sm:-bottom-4 -left-2 sm:-left-4 w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-r from-secondary-500 to-secondary-600 rounded-xl flex items-center justify-center text-white font-bold text-base sm:text-xl animate-float shadow-lg"
                  style="animation-delay: 1s"
                  aria-label="React"
                  role="img"
                >
                  ⚛️
                </div>
                <div
                  class="absolute top-1/2 -right-4 sm:-right-6 w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-r from-accent-500 to-accent-600 rounded-full flex items-center justify-center text-white font-bold text-sm sm:text-base animate-bounce-slow shadow-lg"
                  aria-label="TypeScript"
                  role="img"
                >
                  TS
                </div>

                <!-- Currently Working At Badge -->
                <div
                  class="absolute -bottom-4 sm:-bottom-6 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-purple-600 to-pink-600 px-3 sm:px-6 py-2 sm:py-3 rounded-full shadow-xl"
                >
                  <div class="text-center">
                    <div class="text-xs text-purple-200 mb-1">Currently at</div>
                    <div
                      class="font-bold text-white text-xs sm:text-sm whitespace-nowrap"
                    >
                      Minimatic Solutions
                    </div>
                  </div>
                </div>
              </div>
            </aside>
          </div>
        </div>
      </div>

      <!-- Scroll Indicator -->
      <div
        class="absolute bottom-6 sm:bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce"
        aria-label="Scroll down indicator"
      >
        <div
          class="w-5 h-8 sm:w-6 sm:h-10 border-2 border-gray-500 dark:border-white/30 rounded-full flex justify-center"
        >
          <div
            class="w-1 h-2 sm:h-3 dark:bg-white/50 bg-gray-600 rounded-full mt-2 animate-pulse"
          ></div>
        </div>
      </div>
    </section>
  `;
};

export default HeroSection;
