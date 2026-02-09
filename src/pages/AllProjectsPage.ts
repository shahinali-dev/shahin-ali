import { html, raw } from "hono/html";
import { projectsData } from "../data/ProjectData";

const AllProjectsPage = () => {
  return html`
    <!-- Hero Section -->
    <section
      class="py-20 bg-linear-to-br from-primary-500 via-secondary-500 to-accent-500 relative overflow-hidden mt-20"
    >
      <!-- Background Pattern -->
      <div class="absolute inset-0 hero-pattern opacity-20"></div>

      <div class="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center text-white">
          <h1 class="text-4xl lg:text-6xl font-bold mb-6 animate-slide-up">
            All Projects
          </h1>
          <p
            class="text-xl lg:text-2xl text-white/90 max-w-3xl mx-auto animate-fade-in"
          >
            Explore my complete portfolio of web applications and digital
            solutions
          </p>
        </div>
      </div>
    </section>

    <!-- Projects Grid -->
    <section
      class="py-20 bg-gray-50 dark:bg-dark-900 transition-colors duration-300"
    >
      <div class="container mx-auto px-4 sm:px-6 lg:px-8">
        <!-- Filter/Sort Section (Future Enhancement) -->
        <div class="mb-12 flex flex-wrap items-center justify-between gap-4">
          <div>
            <p class="text-gray-600 dark:text-gray-300">
              Showing
              <span class="font-semibold text-gray-900 dark:text-white"
                >${projectsData.length}</span
              >
              projects
            </p>
          </div>
        </div>

        <!-- Projects Grid -->
        <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          ${projectsData.map(
            (project) => html`
              <article
                class="group relative bg-white dark:bg-dark-800 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-500 scroll-reveal"
              >
                <figure class="relative h-64 overflow-hidden">
                  <img
                    src="${project.image}"
                    alt="${project.imageAlt}"
                    class="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                    loading="lazy"
                  />
                  <div
                    class="absolute inset-0 bg-linear-to-t from-black/60 to-transparent"
                  ></div>
                  ${project.isLive
                    ? html`
                        <span
                          class="absolute top-4 right-4 flex items-center px-3 py-1 bg-green-500/90 backdrop-blur-sm rounded-full"
                        >
                          <span
                            class="w-2 h-2 bg-white rounded-full animate-pulse mr-2"
                          ></span>
                          <span class="text-xs font-semibold text-white"
                            >Live</span
                          >
                        </span>
                      `
                    : ""}
                </figure>
                <div class="p-6">
                  <header class="mb-3">
                    <h3
                      class="text-xl font-bold bg-linear-to-r ${project.gradientColors} bg-clip-text text-transparent"
                    >
                      ${project.title}
                    </h3>
                  </header>
                  <p
                    class="text-gray-600 dark:text-gray-300 mb-4 leading-relaxed line-clamp-3"
                  >
                    ${project.shortDescription}
                  </p>
                  <footer
                    class="flex flex-wrap gap-2 mb-6"
                    aria-label="Technologies used"
                  >
                    ${project.technologies
                      .slice(0, 4)
                      .map(
                        (tech) => html`
                          <span
                            class="px-3 py-1 ${tech.bgColor} ${tech.textColor} rounded-full text-xs font-medium"
                            >${tech.name}</span
                          >
                        `,
                      )}
                    ${project.technologies.length > 4
                      ? html`
                          <span
                            class="px-3 py-1 bg-gray-200 dark:bg-dark-700 text-gray-600 dark:text-gray-300 rounded-full text-xs font-medium"
                            >+${project.technologies.length - 4} more</span
                          >
                        `
                      : ""}
                  </footer>

                  <!-- Action Buttons -->
                  <nav class="flex flex-col sm:flex-row gap-3">
                    ${project.liveUrl
                      ? html`
                          <a
                            href="${project.liveUrl}"
                            target="_blank"
                            rel="noopener noreferrer"
                            class="flex-1 inline-flex items-center justify-center gap-2 px-4 py-2.5 bg-linear-to-r ${project.gradientColors} text-white rounded-lg font-semibold hover:shadow-lg transition-all duration-300 hover:scale-105"
                          >
                            <svg
                              class="w-4 h-4"
                              fill="none"
                              stroke="currentColor"
                              viewBox="0 0 24 24"
                            >
                              ${raw(
                                `<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"></path>`,
                              )}
                            </svg>
                            <span>Live Link</span>
                          </a>
                        `
                      : ""}
                    <a
                      href="/projects/${project.id}"
                      class="flex-1 inline-flex items-center justify-center gap-2 px-4 py-2.5 bg-gray-100 dark:bg-dark-700 text-gray-900 dark:text-white rounded-lg font-semibold hover:bg-gray-200 dark:hover:bg-dark-600 transition-all duration-300 border border-gray-200 dark:border-gray-600"
                    >
                      <svg
                        class="w-4 h-4"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        ${raw(
                          `<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>`,
                        )}
                      </svg>
                      <span>View Details</span>
                    </a>
                  </nav>
                </div>
              </article>
            `,
          )}
        </div>
      </div>
    </section>
  `;
};

export default AllProjectsPage;
