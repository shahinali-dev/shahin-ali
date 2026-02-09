import { html, raw } from "hono/html";

interface Degree {
  level: string;
  title: string;
  institution: string;
  year: string;
  status: string;
  icon: string;
  gradientColors: string;
  borderColor: string;
}

const degrees: Degree[] = [
  {
    level: "Master's Degree",
    title: "M.S.S (Master of Social Science)",
    institution: "Rajshahi College",
    year: "2020 - 2022",
    status: "Completed",
    icon: `<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 14l9-5-9-5-9 5 9 5z"></path><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z"></path><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222"></path>`,
    gradientColors: "from-primary-500 to-secondary-500",
    borderColor: "border-primary-500",
  },
  {
    level: "Bachelor's Degree",
    title: "B.S.S (Bachelor of Social Science)",
    institution: "Rajshahi College",
    year: "2017 - 2020",
    status: "Completed",
    icon: `<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 14l9-5-9-5-9 5 9 5z"></path><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z"></path>`,
    gradientColors: "from-secondary-500 to-accent-500",
    borderColor: "border-secondary-500",
  },
];

const EducationSection = () => {
  return html`
    <section
      id="education"
      class="py-20 bg-white dark:bg-dark-900 relative overflow-hidden transition-all duration-500"
      aria-labelledby="education-heading"
    >
      <!-- Background Elements -->
      <div class="absolute inset-0" aria-hidden="true">
        <div
          class="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-primary-50/20 via-secondary-50/20 to-accent-50/20 dark:from-primary-900/10 dark:via-secondary-900/10 dark:to-accent-900/10"
        ></div>
        <!-- Floating Shapes -->
        <div
          class="absolute top-20 left-20 w-72 h-72 bg-gradient-to-r from-primary-500/10 to-secondary-500/10 rounded-full blur-3xl animate-float"
        ></div>
        <div
          class="absolute bottom-20 right-20 w-96 h-96 bg-gradient-to-r from-secondary-500/10 to-accent-500/10 rounded-full blur-3xl animate-float"
          style="animation-delay: 2s"
        ></div>
        <!-- Geometric Shapes -->
        <div
          class="absolute top-32 right-20 w-24 h-24 border-2 border-primary-400/20 rounded-xl rotate-12 animate-spin-slow"
        ></div>
        <div
          class="absolute bottom-32 left-20 w-16 h-16 border-2 border-secondary-400/20 rounded-full animate-bounce-slow"
        ></div>
      </div>

      <div class="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8">
        <!-- Section Header -->
        <header class="text-center mb-16 scroll-reveal">
          <h2
            id="education-heading"
            class="text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-6"
          >
            Educational <span class="text-gradient">Background</span>
          </h2>
          <div
            class="w-32 h-1.5 bg-gradient-to-r from-primary-500 via-secondary-500 to-accent-500 mx-auto mb-6 rounded-full"
            aria-hidden="true"
          ></div>
          <p class="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            My academic journey in social sciences
          </p>
        </header>

        <!-- Education Cards -->
        <div
          class="max-w-4xl mx-auto space-y-8"
          role="list"
          aria-label="Educational Qualifications"
        >
          ${degrees.map(
            (degree, index) => html`
              <article
                class="scroll-reveal bg-white/80 dark:bg-dark-800/90 backdrop-blur-xl border-l-4 ${degree.borderColor} dark:border-${degree.borderColor.split(
                  "-",
                )[1]}-600 p-8 sm:p-10 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-500 animated-card"
                style="animation-delay: ${index * 0.2}s"
                role="listitem"
              >
                <div class="flex flex-col sm:flex-row gap-6">
                  <!-- Icon -->
                  <div class="flex-shrink-0">
                    <div
                      class="w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-br ${degree.gradientColors} rounded-2xl flex items-center justify-center shadow-lg"
                    >
                      <svg
                        class="w-8 h-8 sm:w-10 sm:h-10 text-white"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        aria-hidden="true"
                      >
                        ${raw(degree.icon)}
                      </svg>
                    </div>
                  </div>

                  <!-- Content -->
                  <div class="flex-1 space-y-3">
                    <!-- Level Badge -->
                    <div
                      class="inline-flex items-center px-3 py-1 bg-gradient-to-r ${degree.gradientColors} bg-opacity-10 dark:bg-opacity-20 rounded-full text-sm font-medium"
                    >
                      <span
                        class="bg-gradient-to-r ${degree.gradientColors} bg-clip-text text-gray-900 dark:text-white font-semibold"
                      >
                        ${degree.level}
                      </span>
                    </div>

                    <!-- Degree Title -->
                    <h3
                      class="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white"
                    >
                      ${degree.title}
                    </h3>

                    <!-- Institution -->
                    <div
                      class="flex items-center gap-2 text-gray-600 dark:text-gray-300"
                    >
                      <svg
                        class="w-5 h-5 text-primary-500"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        aria-hidden="true"
                      >
                        ${raw(
                          `<path fill-rule="evenodd" d="M10 2a1 1 0 011 1v1.323l3.954 1.582 1.599-.8a1 1 0 01.894 1.79l-1.233.616 1.738.695a1 1 0 01.364 1.653l-2.905 2.905a1 1 0 01-1.414 0L11 10.586V15a1 1 0 11-2 0v-4.414l-2.997 2.997a1 1 0 01-1.414 0L1.684 10.68a1 1 0 01.364-1.653l1.738-.695-1.233-.617a1 1 0 11.894-1.788l1.599.799L9 5.323V3a1 1 0 011-1zm-5 8.274l-.818.327 3.682 3.682L8 14.414v-3.14zm10 0l-.137.137v3.14l.137-.137 3.682-3.682-.818-.327L15 10.274z" clip-rule="evenodd"></path>`,
                        )}
                      </svg>
                      <span class="text-lg font-medium"
                        >${degree.institution}</span
                      >
                    </div>

                    <!-- Year & Status -->
                    <div class="flex flex-wrap items-center gap-4 pt-2">
                      <!-- Year -->
                      <div class="flex items-center gap-2">
                        <svg
                          class="w-5 h-5 text-secondary-500"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                          aria-hidden="true"
                        >
                          ${raw(
                            `<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path>`,
                          )}
                        </svg>
                        <span
                          class="text-gray-700 dark:text-gray-300 font-medium"
                          >${degree.year}</span
                        >
                      </div>

                      <!-- Status -->
                      <div
                        class="flex items-center gap-2 px-3 py-1 bg-green-100 dark:bg-green-900/30 rounded-full"
                      >
                        <span
                          class="w-2 h-2 bg-green-500 rounded-full"
                          aria-hidden="true"
                        ></span>
                        <span
                          class="text-sm font-medium text-green-600 dark:text-green-400"
                          >${degree.status}</span
                        >
                      </div>
                    </div>
                  </div>
                </div>
              </article>
            `,
          )}
        </div>
      </div>
    </section>
  `;
};

export default EducationSection;
