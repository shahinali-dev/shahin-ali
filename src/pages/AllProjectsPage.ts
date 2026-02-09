import { html } from "hono/html";
import ProjectCard from "../components/projets/ProjectCard";
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
          ${projectsData.map((project) => ProjectCard({ project }))}
        </div>
      </div>
    </section>
  `;
};

export default AllProjectsPage;
