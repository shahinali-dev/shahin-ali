import { html, raw } from "hono/html";

interface Technology {
  name: string;
  bgColor: string;
  textColor: string;
}

interface ProjectLink {
  label: string;
  url: string;
  isPrimary: boolean;
}

interface Project {
  title: string;
  description: string;
  image: string;
  imageAlt: string;
  gradientColors: string;
  isLive: boolean;
  links: ProjectLink[];
  technologies: Technology[];
}

interface BackgroundElement {
  size: string;
  position: string;
  gradient: string;
  animation: string;
}

const projects: Project[] = [
  {
    title: "DishDynamo",
    description:
      "A modern restaurant management system with real-time ordering, menu customization, and user authentication.",
    image: "./images/dish-dynamo-home.png",
    imageAlt: "Screenshot of DishDynamo Restaurant App",
    gradientColors: "from-primary-500 to-secondary-500",
    isLive: true,
    links: [
      {
        label: "Live Demo",
        url: "https://dishdynamo-c649f.web.app",
        isPrimary: true,
      },
      {
        label: "GitHub",
        url: "https://github.com/shahinali-dev/Dish-Dynamo-Client",
        isPrimary: false,
      },
    ],
    technologies: [
      {
        name: "React",
        bgColor: "bg-blue-100 dark:bg-blue-900/30",
        textColor: "text-blue-600 dark:text-blue-400",
      },
      {
        name: "Firebase",
        bgColor: "bg-yellow-100 dark:bg-yellow-900/30",
        textColor: "text-yellow-600 dark:text-yellow-400",
      },
      {
        name: "Stripe",
        bgColor: "bg-purple-100 dark:bg-purple-900/30",
        textColor: "text-purple-600 dark:text-purple-400",
      },
      {
        name: "Tailwind",
        bgColor: "bg-teal-100 dark:bg-teal-900/30",
        textColor: "text-teal-600 dark:text-teal-400",
      },
    ],
  },
  {
    title: "ContestHub",
    description:
      "A contest management platform with real-time updates, secure payments, and multiple user roles.",
    image: "./images/contest-hub.png",
    imageAlt: "Screenshot of ContestHub Platform",
    gradientColors: "from-secondary-500 to-accent-500",
    isLive: true,
    links: [
      {
        label: "Live Demo",
        url: "https://contesthub-e5119.web.app",
        isPrimary: true,
      },
      {
        label: "GitHub",
        url: "https://github.com/shahinali-dev/Contest-Hub-Client",
        isPrimary: false,
      },
    ],
    technologies: [
      {
        name: "React",
        bgColor: "bg-blue-100 dark:bg-blue-900/30",
        textColor: "text-blue-600 dark:text-blue-400",
      },
      {
        name: "Node.js",
        bgColor: "bg-green-100 dark:bg-green-900/30",
        textColor: "text-green-600 dark:text-green-400",
      },
      {
        name: "MongoDB",
        bgColor: "bg-purple-100 dark:bg-purple-900/30",
        textColor: "text-purple-600 dark:text-purple-400",
      },
      {
        name: "JWT",
        bgColor: "bg-pink-100 dark:bg-pink-900/30",
        textColor: "text-pink-600 dark:text-pink-400",
      },
    ],
  },
  {
    title: "CodeBuySell",
    description:
      "A marketplace for developers to buy and sell code snippets, templates, and digital assets.",
    image: "./images/code-buysell.png",
    imageAlt: "Screenshot of CodeBuySell Marketplace",
    gradientColors: "from-accent-500 to-primary-500",
    isLive: true,
    links: [
      {
        label: "Live Demo",
        url: "https://codebuysell.com",
        isPrimary: true,
      },
      {
        label: "GitHub",
        url: "https://github.com/shahinali-dev/Code-BuySell-Frontend",
        isPrimary: false,
      },
    ],
    technologies: [
      {
        name: "Next.js",
        bgColor: "bg-blue-100 dark:bg-blue-900/30",
        textColor: "text-blue-600 dark:text-blue-400",
      },
      {
        name: "Node.js",
        bgColor: "bg-green-100 dark:bg-green-900/30",
        textColor: "text-green-600 dark:text-green-400",
      },
      {
        name: "PostgreSQL",
        bgColor: "bg-indigo-100 dark:bg-indigo-900/30",
        textColor: "text-indigo-600 dark:text-indigo-400",
      },
      {
        name: "Stripe",
        bgColor: "bg-orange-100 dark:bg-orange-900/30",
        textColor: "text-orange-600 dark:text-orange-400",
      },
    ],
  },
];

const backgroundElements: BackgroundElement[] = [
  {
    size: "w-24 h-24",
    position: "top-20 left-20",
    gradient: "from-primary-200/20 to-secondary-200/20",
    animation: "animate-pulse",
  },
  {
    size: "w-32 h-32",
    position: "bottom-20 right-20",
    gradient: "from-accent-200/20 to-primary-200/20",
    animation: "animate-float",
  },
];

const renderProjectCard = (project: Project) => {
  return html`
    <article
      class="group relative bg-white dark:bg-dark-800 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-500"
    >
      <figure class="relative h-64 overflow-hidden">
        <img
          src="${project.image}"
          alt="${project.imageAlt}"
          class="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
          loading="lazy"
        />
        <figcaption
          class="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        >
          <div class="absolute bottom-0 left-0 right-0 p-6">
            <nav
              class="flex space-x-4 justify-center"
              aria-label="${project.title} links"
            >
              ${project.links.map(
                (link) => html`
                  <a
                    href="${link.url}"
                    target="_blank"
                    rel="noopener noreferrer"
                    class="px-6 py-3 ${link.isPrimary
                      ? "bg-white/90 backdrop-blur-sm text-gray-900 hover:bg-white"
                      : "bg-gray-900/90 backdrop-blur-sm text-white hover:bg-gray-900"} rounded-xl font-semibold transition-colors"
                  >
                    ${link.label}
                  </a>
                `,
              )}
            </nav>
          </div>
        </figcaption>
      </figure>
      <div class="p-6">
        <header class="flex items-center justify-between mb-3">
          <h3
            class="text-xl font-bold bg-gradient-to-r ${project.gradientColors} bg-clip-text text-transparent"
          >
            ${project.title}
          </h3>
          ${project.isLive
            ? html`
                <span class="flex items-center">
                  <span
                    class="w-3 h-3 bg-green-500 rounded-full animate-pulse mr-2"
                    aria-hidden="true"
                  ></span>
                  <span class="text-sm text-green-500">Live</span>
                </span>
              `
            : ""}
        </header>
        <p class="text-gray-600 dark:text-gray-300 mb-4 leading-relaxed">
          ${project.description}
        </p>
        <footer
          class="flex flex-wrap gap-2 mb-4"
          aria-label="Technologies used"
        >
          ${project.technologies.map(
            (tech) => html`
              <span
                class="px-3 py-1 ${tech.bgColor} ${tech.textColor} rounded-full text-xs font-medium"
                >${tech.name}</span
              >
            `,
          )}
        </footer>
      </div>
    </article>
  `;
};

const ProjectsSection = () => {
  return html`
    <section
      id="projects"
      class="py-20 bg-gray-50 dark:bg-dark-900 transition-colors duration-300 relative overflow-hidden"
      aria-labelledby="projects-heading"
    >
      <!-- Background Elements -->
      <div class="absolute inset-0" aria-hidden="true">
        ${backgroundElements.map(
          (element) => html`
            <div
              class="absolute ${element.position} ${element.size} bg-gradient-to-r ${element.gradient} rounded-full blur-2xl ${element.animation}"
            ></div>
          `,
        )}
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
            class="w-32 h-1.5 bg-gradient-to-r from-primary-500 via-secondary-500 to-accent-500 mx-auto mb-6 rounded-full"
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
          ${projects.map((project) => renderProjectCard(project))}
        </section>

        <!-- View More Projects Button -->
        <div class="text-center mt-12 scroll-reveal">
          <a
            href="#"
            class="inline-flex items-center px-8 py-4 bg-gradient-to-r from-primary-500 to-secondary-500 text-white rounded-2xl font-semibold hover:from-primary-600 hover:to-secondary-600 transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl"
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
