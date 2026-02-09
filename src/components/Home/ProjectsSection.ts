import { html, raw } from "hono/html";
import { projectsData } from "../../data/ProjectData";
import ProjectCard from "../projets/ProjectCard";

const ProjectsSection = () => {
  return html`
    <section
      id="projects"
      class="py-20 bg-gray-50 dark:bg-dark-900 transition-colors duration-300 relative overflow-hidden"
      aria-labelledby="projects-heading"
    >
      <!-- Background Elements -->
      <div class="absolute inset-0" aria-hidden="true">
        <div
          class="absolute top-20 left-20 w-72 h-72 bg-linear-to-r from-primary-500/10 to-secondary-500/10 rounded-full blur-3xl animate-float"
        ></div>
        <div
          class="absolute bottom-20 right-20 w-96 h-96 bg-linear-to-r from-secondary-500/10 to-accent-500/10 rounded-full blur-3xl animate-float"
          style="animation-delay: 2s"
        ></div>
      </div>

      <div class="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8">
        <!-- Section Header -->
        <header class="text-center mb-16 scroll-reveal">
          <h2
            id="projects-heading"
            class="text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-6"
          >
            Featured <span class="text-gradient">Projects</span>
          </h2>
          <div
            class="w-32 h-1.5 bg-linear-to-r from-primary-500 via-secondary-500 to-accent-500 mx-auto mb-6 rounded-full"
            aria-hidden="true"
          ></div>
          <p class="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Showcasing my latest work and creative solutions built with modern
            technologies
          </p>
        </header>

        <!-- Projects Grid -->
        <section
          class="grid md:grid-cols-2 lg:grid-cols-3 gap-8 scroll-reveal"
          role="list"
          aria-label="Featured Projects"
        >
          ${projectsData.slice(0, 3).map((project) => ProjectCard({ project }))}
        </section>

        <!-- View All Projects Button -->
        <div class="text-center mt-12 scroll-reveal">
          <a
            href="/projects"
            class="inline-flex items-center px-8 py-4 bg-linear-to-r from-primary-500 to-secondary-500 text-white rounded-2xl font-semibold hover:from-primary-600 hover:to-secondary-600 transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl"
            aria-label="View all projects"
          >
            <span>View All Projects</span>
            <svg
              class="w-5 h-5 ml-2"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              ${raw(`<path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              ></path>`)}
            </svg>
          </a>
        </div>
      </div>
    </section>
  `;
};

export default ProjectsSection;
