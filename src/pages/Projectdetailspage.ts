import { html, raw } from "hono/html";
import { ProjectDetail } from "../data/projectsData";

interface ProjectDetailsPageProps {
  project: ProjectDetail;
}

const ProjectDetailsPage = ({ project }: ProjectDetailsPageProps) => {
  return html`
    <!-- Hero Section -->
    <section
      class="py-20 bg-lmnear-to-br ${project.gradientColors} relative overflow-hidden mt-10"
    >
      <!-- Background Pattern -->
      <div class="absolute inset-0 hero-pattern opacity-20"></div>

      <div class="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8">
        <div class="max-w-4xl mx-auto text-center text-white">
          <!-- Back Button -->
          <div class="mb-8 flex justify-center">
            <a
              href="/projects"
              class="inline-flex items-center gap-2 px-4 py-2 bg-white/20 backdrop-blur-sm hover:bg-white/30 rounded-lg transition-all duration-300 border border-white/30"
            >
              <svg
                class="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                ${raw(
                  `<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 19l-7-7m0 0l7-7m-7 7h18"></path>`,
                )}
              </svg>
              <span>Back to Projects</span>
            </a>
          </div>

          <h1 class="text-4xl lg:text-6xl font-bold mb-6 animate-slide-up">
            ${project.title}
          </h1>
          <p class="text-xl lg:text-2xl text-white/90 mb-8 animate-fade-in">
            ${project.shortDescription}
          </p>

          <!-- Action Buttons -->
          <div class="flex flex-wrap justify-center gap-4 animate-scale-in">
            ${project.liveUrl
              ? html`
                  <a
                    href="${project.liveUrl}"
                    target="_blank"
                    rel="noopener noreferrer"
                    class="inline-flex items-center gap-2 px-6 py-3 bg-white text-gray-900 rounded-xl font-semibold hover:bg-gray-100 transition-all duration-300 hover:scale-105 shadow-lg"
                  >
                    <svg
                      class="w-5 h-5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      ${raw(
                        `<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"></path>`,
                      )}
                    </svg>
                    <span>Visit Live Site</span>
                  </a>
                `
              : ""}
            ${project.githubUrl
              ? html`
                  <a
                    href="${project.githubUrl}"
                    target="_blank"
                    rel="noopener noreferrer"
                    class="inline-flex items-center gap-2 px-6 py-3 bg-white/20 backdrop-blur-sm text-white rounded-xl font-semibold hover:bg-white/30 transition-all duration-300 border border-white/30"
                  >
                    <svg
                      class="w-5 h-5"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      ${raw(
                        `<path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"></path>`,
                      )}
                    </svg>
                    <span>View Code</span>
                  </a>
                `
              : ""}
          </div>
        </div>
      </div>
    </section>

    <!-- Main Content -->
    <section class="py-20 bg-white dark:bg-dark-900">
      <div class="container mx-auto px-4 sm:px-6 lg:px-8">
        <div class="max-w-6xl mx-auto">
          <!-- Project Image -->
          <div class="mb-16 scroll-reveal">
            <figure class="rounded-2xl overflow-hidden shadow-2xl">
              <img
                src="${project.image}"
                alt="${project.imageAlt}"
                class="w-full h-auto object-cover"
                loading="lazy"
              />
            </figure>
          </div>

          <!-- Project Overview -->
          <div class="mb-16 scroll-reveal">
            <h2
              class="text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white mb-6"
            >
              Project <span class="text-gradient">Overview</span>
            </h2>
            <div class="prose prose-lg dark:prose-invert max-w-none">
              <p
                class="text-gray-700 dark:text-gray-300 leading-relaxed text-lg"
              >
                ${project.overview}
              </p>
            </div>
          </div>

          <!-- Full Description -->
          <div class="mb-16 scroll-reveal">
            <h2
              class="text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white mb-6"
            >
              About the <span class="text-gradient">Project</span>
            </h2>
            <div class="prose prose-lg dark:prose-invert max-w-none">
              <p
                class="text-gray-700 dark:text-gray-300 leading-relaxed text-lg"
              >
                ${project.fullDescription}
              </p>
            </div>
          </div>

          <!-- Key Features -->
          <div class="mb-16 scroll-reveal">
            <h2
              class="text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white mb-8"
            >
              Key <span class="text-gradient">Features</span>
            </h2>
            <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              ${project.features.map(
                (feature) => html`
                  <article
                    class="bg-gray-50 dark:bg-dark-800 p-6 rounded-xl border border-gray-200 dark:border-dark-700 hover:shadow-lg transition-all duration-300 animated-card"
                  >
                    <div
                      class="w-12 h-12 bg-gradient-to-r ${project.gradientColors} rounded-lg flex items-center justify-center mb-4"
                    >
                      <svg
                        class="w-6 h-6 text-white"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        ${raw(feature.icon)}
                      </svg>
                    </div>
                    <h3
                      class="text-lg font-bold text-gray-900 dark:text-white mb-2"
                    >
                      ${feature.title}
                    </h3>
                    <p
                      class="text-gray-600 dark:text-gray-300 text-sm leading-relaxed"
                    >
                      ${feature.description}
                    </p>
                  </article>
                `,
              )}
            </div>
          </div>

          <!-- Technologies Used -->
          <div class="mb-16 scroll-reveal">
            <h2
              class="text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white mb-8"
            >
              Technologies <span class="text-gradient">Used</span>
            </h2>
            <div class="flex flex-wrap gap-3">
              ${project.technologies.map(
                (tech) => html`
                  <span
                    class="px-6 py-3 ${tech.bgColor} ${tech.textColor} rounded-xl text-base font-semibold shadow-sm hover:shadow-md transition-all duration-300 hover:scale-105"
                    >${tech.name}</span
                  >
                `,
              )}
            </div>
          </div>

          <!-- Challenges (if exists) -->
          ${project.challenges
            ? html`
                <div class="mb-16 scroll-reveal">
                  <h2
                    class="text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white mb-6"
                  >
                    Challenges & <span class="text-gradient">Solutions</span>
                  </h2>
                  <div
                    class="bg-gradient-to-br from-amber-50 to-orange-50 dark:from-amber-900/20 dark:to-orange-900/20 p-8 rounded-2xl border border-amber-200 dark:border-amber-800"
                  >
                    <p
                      class="text-gray-700 dark:text-gray-300 leading-relaxed text-lg"
                    >
                      ${project.challenges}
                    </p>
                  </div>
                </div>
              `
            : ""}

          <!-- Learnings (if exists) -->
          ${project.learnings
            ? html`
                <div class="mb-16 scroll-reveal">
                  <h2
                    class="text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white mb-6"
                  >
                    Key <span class="text-gradient">Learnings</span>
                  </h2>
                  <div
                    class="bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20 p-8 rounded-2xl border border-blue-200 dark:border-blue-800"
                  >
                    <p
                      class="text-gray-700 dark:text-gray-300 leading-relaxed text-lg"
                    >
                      ${project.learnings}
                    </p>
                  </div>
                </div>
              `
            : ""}

          <!-- CTA Section -->
          <div class="scroll-reveal">
            <div
              class="bg-gradient-to-r ${project.gradientColors} p-8 sm:p-12 rounded-2xl text-center text-white"
            >
              <h2 class="text-2xl sm:text-3xl font-bold mb-4">
                Interested in This Project?
              </h2>
              <p class="text-lg text-white/90 mb-6 max-w-2xl mx-auto">
                Want to learn more or discuss a similar project? Feel free to
                reach out!
              </p>
              <div class="flex flex-wrap justify-center gap-4">
                <a
                  href="#contact"
                  class="inline-flex items-center gap-2 px-6 py-3 bg-white text-gray-900 rounded-xl font-semibold hover:bg-gray-100 transition-all duration-300 hover:scale-105 shadow-lg"
                >
                  <svg
                    class="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    ${raw(
                      `<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>`,
                    )}
                  </svg>
                  <span>Get in Touch</span>
                </a>
                <a
                  href="/projects"
                  class="inline-flex items-center gap-2 px-6 py-3 bg-white/20 backdrop-blur-sm text-white rounded-xl font-semibold hover:bg-white/30 transition-all duration-300 border border-white/30"
                >
                  <svg
                    class="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    ${raw(
                      `<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z"></path>`,
                    )}
                  </svg>
                  <span>View All Projects</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  `;
};

export default ProjectDetailsPage;
