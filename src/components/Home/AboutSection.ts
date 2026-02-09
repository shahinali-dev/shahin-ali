import { html, raw } from "hono/html";

interface TechStack {
  name: string;
  icon: string;
  bgColor: string;
  borderColor: string;
  isFontAwesome?: boolean;
  fontAwesomeColor?: string;
  shouldInvert?: boolean;
}

interface Metric {
  value: string;
  label: string;
  color: string;
  href?: string;
}

interface Attribute {
  label: string;
  bgColor: string;
  textColor: string;
  hoverBgColor: string;
}

interface PhilosophyPoint {
  title: string;
  description: string;
  iconColor: string;
  iconBgColor: string;
  ringColor: string;
}

interface RealtimeProject {
  title: string;
  description: string;
  iconBgColor: string;
  icon: string;
}

const techStack: TechStack[] = [
  {
    name: "TypeScript",
    icon: "/icons/typescript.svg",
    bgColor: "bg-blue-50 dark:bg-blue-900/30",
    borderColor: "border-blue-200 dark:border-blue-700",
  },
  {
    name: "React",
    icon: "fab fa-react",
    bgColor: "bg-white dark:bg-blue-900/20",
    borderColor: "border-blue-200 dark:border-blue-700",
    isFontAwesome: true,
    fontAwesomeColor: "#61DAFB",
  },
  {
    name: "Next.js",
    icon: "/icons/next-js.svg",
    bgColor: "bg-gray-50 dark:bg-gray-800/50",
    borderColor: "border-gray-200 dark:border-gray-600",
    shouldInvert: true,
  },
  {
    name: "Node.js",
    icon: "fab fa-node-js",
    bgColor: "bg-green-50 dark:bg-green-900/20",
    borderColor: "border-green-200 dark:border-green-700",
    isFontAwesome: true,
    fontAwesomeColor: "#339933",
  },
  {
    name: "Express",
    icon: "/icons/Express.svg",
    bgColor: "bg-gray-50 dark:bg-gray-900/30",
    borderColor: "border-gray-300 dark:border-gray-700",
    shouldInvert: true,
  },
  {
    name: "Nest.js",
    icon: "/icons/nest-js.svg",
    bgColor: "bg-red-50 dark:bg-red-900/30",
    borderColor: "border-red-200 dark:border-red-700",
  },
  {
    name: "PostgreSQL",
    icon: "/icons/postgresql.svg",
    bgColor: "bg-indigo-50 dark:bg-indigo-900/30",
    borderColor: "border-indigo-200 dark:border-indigo-700",
  },
  {
    name: "MongoDB",
    icon: "/icons/MongoDB.svg",
    bgColor: "bg-green-50 dark:bg-green-900/30",
    borderColor: "border-green-200 dark:border-green-700",
  },
  {
    name: "LangChain",
    icon: "/icons/langchai.svg",
    bgColor: "bg-purple-50 dark:bg-purple-900/30",
    borderColor: "border-purple-200 dark:border-purple-700",
    shouldInvert: true,
  },
];

const metrics: Metric[] = [
  {
    value: "2+",
    label: "Years Experience",
    color: "text-primary-700 dark:text-primary-300",
    href: "#experience",
  },
  {
    value: "25+",
    label: "Projects Built",
    color: "text-secondary-700 dark:text-secondary-300",
    href: "#projects",
  },
  {
    value: "15+",
    label: "Technologies",
    color: "text-accent-700 dark:text-accent-300",
    href: "#skills",
  },
  {
    value: "100%",
    label: "Client Satisfaction",
    color: "text-gray-700 dark:text-gray-300",
  },
];

const attributes: Attribute[] = [
  {
    label: "Full Stack Expert",
    bgColor: "bg-primary-100 dark:bg-primary-900/40",
    textColor: "text-primary-700 dark:text-primary-300",
    hoverBgColor: "hover:bg-primary-200 dark:hover:bg-primary-800/50",
  },
  {
    label: "Team Player",
    bgColor: "bg-secondary-100 dark:bg-secondary-900/40",
    textColor: "text-secondary-700 dark:text-secondary-300",
    hoverBgColor: "hover:bg-secondary-200 dark:hover:bg-secondary-800/50",
  },
  {
    label: "Quick Learner",
    bgColor: "bg-accent-100 dark:bg-accent-900/40",
    textColor: "text-accent-700 dark:text-accent-300",
    hoverBgColor: "hover:bg-accent-200 dark:hover:bg-accent-800/50",
  },
  {
    label: "Detail-Oriented",
    bgColor: "bg-emerald-100 dark:bg-emerald-900/40",
    textColor: "text-emerald-700 dark:text-emerald-300",
    hoverBgColor: "hover:bg-emerald-200 dark:hover:bg-emerald-800/50",
  },
  {
    label: "Adaptive",
    bgColor: "bg-purple-100 dark:bg-purple-900/40",
    textColor: "text-purple-700 dark:text-purple-300",
    hoverBgColor: "hover:bg-purple-200 dark:hover:bg-purple-800/50",
  },
  {
    label: "AI Integration Specialist",
    bgColor: "bg-amber-100 dark:bg-amber-900/40",
    textColor: "text-amber-700 dark:text-amber-300",
    hoverBgColor: "hover:bg-amber-200 dark:hover:bg-amber-800/50",
  },
];

const philosophyPoints: PhilosophyPoint[] = [
  {
    title: "User-Centric Design:",
    description:
      "I prioritize understanding user needs and creating intuitive interfaces that drive engagement and satisfaction.",
    iconColor: "text-primary-700 dark:text-primary-300",
    iconBgColor: "bg-primary-100 dark:bg-primary-900/40",
    ringColor: "ring-primary-50 dark:ring-primary-900/20",
  },
  {
    title: "Full Stack Excellence:",
    description:
      "I bridge frontend and backend development to create cohesive, performant applications with seamless user experiences.",
    iconColor: "text-secondary-700 dark:text-secondary-300",
    iconBgColor: "bg-secondary-100 dark:bg-secondary-900/40",
    ringColor: "ring-secondary-50 dark:ring-secondary-900/20",
  },
  {
    title: "Innovation & AI Integration:",
    description:
      "I leverage AI technologies like LangChain to build intelligent, adaptive systems that provide enhanced value to users.",
    iconColor: "text-accent-700 dark:text-accent-300",
    iconBgColor: "bg-accent-100 dark:bg-accent-900/40",
    ringColor: "ring-accent-50 dark:ring-accent-900/20",
  },
];

const realtimeProjects: RealtimeProject[] = [
  {
    title: "LangChain Powered Chatbots",
    description:
      "Developed intelligent conversational agents using LangChain, integrating with large language models to create context-aware chat experiences with memory and custom knowledge bases.",
    iconBgColor: "bg-green-500",
    icon: `<path d="M2 5a2 2 0 012-2h7a2 2 0 012 2v4a2 2 0 01-2 2H9l-3 3v-3H4a2 2 0 01-2-2V5z"></path><path d="M15 7v2a4 4 0 01-4 4H9.828l-1.766 1.767c.28.149.599.233.938.233h2l3 3v-3h2a2 2 0 002-2V9a2 2 0 00-2-2h-1z"></path>`,
  },
  {
    title: "Real-time Collaboration Platforms",
    description:
      "Built multi-user collaborative applications with WebSockets for instant updates, supporting features like live document editing, real-time notifications, and interactive dashboards.",
    iconBgColor: "bg-blue-500",
    icon: `<path fill-rule="evenodd" d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z" clip-rule="evenodd"></path>`,
  },
  {
    title: "Interactive Data Visualization",
    description:
      "Created dynamic analytics platforms with real-time data processing, enabling businesses to monitor metrics, visualize trends, and respond instantly to changing conditions.",
    iconBgColor: "bg-purple-500",
    icon: `<path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3zM6 8a2 2 0 11-4 0 2 2 0 014 0zM16 18v-3a5.972 5.972 0 00-.75-2.906A3.005 3.005 0 0119 15v3h-3zM4.75 12.094A5.973 5.973 0 004 15v3H1v-3a3 3 0 013.75-2.906z"></path>`,
  },
];

const AboutSection = () => {
  return html`
    <section
      id="about"
      class="py-20 sm:py-28 bg-gradient-to-b from-gray-100 to-gray-200 dark:from-gray-900 dark:to-gray-800 transition-colors duration-300 relative overflow-hidden"
      aria-labelledby="about-heading"
    >
      <!-- Background Elements (decorative) -->
      <div class="absolute inset-0" aria-hidden="true">
        <!-- Modern gradient shapes -->
        <div
          class="absolute top-20 left-10 w-72 h-72 bg-gradient-to-r from-primary-500/15 to-secondary-500/15 dark:from-primary-400/15 dark:to-secondary-400/15 rounded-full blur-3xl"
          style="animation: float 6s ease-in-out infinite"
        ></div>
        <div
          class="absolute bottom-20 right-10 w-96 h-96 bg-gradient-to-r from-secondary-500/15 to-accent-500/15 dark:from-secondary-400/15 dark:to-accent-400/15 rounded-full blur-3xl"
          style="animation: float 6s ease-in-out infinite 2s"
        ></div>
        <!-- Geometric accent shapes -->
        <div
          class="absolute top-40 right-1/4 w-24 h-24 border-2 border-primary-400/20 rounded-xl rotate-12 animate-spin-slow"
        ></div>
        <div
          class="absolute bottom-40 left-1/4 w-16 h-16 border-2 border-secondary-400/20 rounded-full animate-bounce-slow"
        ></div>
      </div>

      <div
        class="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 space-y-12"
      >
        <!-- Section Header -->
        <header class="text-center mb-16 scroll-reveal">
          <h2
            id="about-heading"
            class="text-4xl lg:text-6xl font-bold text-gray-900 dark:text-white mb-6"
          >
            About <span class="text-gradient relative inline-block">Me </span>
          </h2>
          <div
            class="w-40 h-2 bg-gradient-to-r from-primary-600 via-secondary-600 to-accent-600 dark:from-primary-500 dark:via-secondary-500 dark:to-accent-500 mx-auto mb-8 rounded-full"
            aria-hidden="true"
          ></div>
          <p
            class="text-xl text-gray-800 dark:text-gray-200 max-w-3xl mx-auto font-medium"
          >
            Building powerful full-stack applications with cutting-edge
            technologies and innovative solutions
          </p>
        </header>

        <!-- Top Content -->
        <div class="grid lg:grid-cols-12 gap-10 lg:gap-16">
          <!-- Left Column: Profile & Journey -->
          <div class="lg:col-span-7 space-y-10">
            <!-- Profile Card -->
            <article
              class="scroll-reveal about-card bg-gradient-to-br from-white to-gray-50 dark:from-gray-800 dark:to-gray-900 rounded-3xl shadow-2xl dark:shadow-black/40 p-8 sm:p-10 border-l-4 border-primary-500 dark:border-primary-600"
              aria-labelledby="profile-heading"
            >
              <header
                class="flex flex-col sm:flex-row items-start sm:items-center gap-6 mb-6"
              >
                <div class="relative">
                  <div
                    class="w-20 h-20 bg-gradient-to-br from-primary-500 to-secondary-500 rounded-2xl flex items-center justify-center shadow-lg"
                  >
                    <i
                      class="fa-solid fa-user text-4xl text-white drop-shadow-md"
                    ></i>
                  </div>
                  <!-- Status indicator -->
                  <span
                    class="absolute -bottom-1 -right-1 w-6 h-6 bg-green-500 border-2 border-white dark:border-dark-700 rounded-full flex items-center justify-center"
                    aria-hidden="true"
                  >
                    <i class="fa-solid fa-check text-white text-xs"></i>
                  </span>
                </div>

                <div class="flex-1">
                  <h3
                    id="profile-heading"
                    class="text-2xl lg:text-3xl font-bold text-primary-600 dark:text-primary-400"
                  >
                    Full Stack Developer
                  </h3>
                  <div class="flex flex-wrap items-center gap-2 mt-2">
                    <p
                      class="text-primary-600 dark:text-primary-400 font-medium"
                    >
                      @ Minimatic Solutions
                    </p>
                    <span
                      class="w-1.5 h-1.5 rounded-full bg-gray-400 dark:bg-gray-600"
                      aria-hidden="true"
                    ></span>
                    <p class="text-gray-600 dark:text-gray-400 font-medium">
                      Available for new opportunities
                    </p>
                  </div>
                </div>
              </header>

              <div class="space-y-6">
                <p
                  class="text-gray-800 dark:text-gray-200 leading-relaxed text-lg lg:text-md xl:text-lg"
                >
                  I'm a passionate full-stack engineer with
                  <span
                    class="font-semibold text-primary-700 dark:text-primary-400"
                    >2+ years</span
                  >
                  of professional experience crafting modern web applications.
                  My expertise spans the entire development stack including
                  <span
                    class="font-semibold text-secondary-700 dark:text-secondary-400"
                    >React</span
                  >,
                  <span
                    class="font-semibold text-secondary-700 dark:text-secondary-400"
                    >Next.js</span
                  >,
                  <span
                    class="font-semibold text-secondary-700 dark:text-secondary-400"
                    >Node.js</span
                  >,
                  <span
                    class="font-semibold text-secondary-700 dark:text-secondary-400"
                    >Express</span
                  >,
                  <span
                    class="font-semibold text-secondary-700 dark:text-secondary-400"
                    >Nest.js</span
                  >,
                  <span
                    class="font-semibold text-secondary-700 dark:text-secondary-400"
                    >MongoDB</span
                  >, and
                  <span
                    class="font-semibold text-secondary-700 dark:text-secondary-400"
                    >PostgreSQL</span
                  >.
                </p>

                <p
                  class="text-gray-800 dark:text-gray-200 leading-relaxed text-lg lg:text-md xl:text-lg"
                >
                  I've built numerous real-time applications and integrated AI
                  capabilities using
                  <span
                    class="font-semibold text-primary-700 dark:text-primary-400"
                    >LangChain</span
                  >
                  for advanced chatbots. My approach combines deep technical
                  knowledge with creative problem-solving to build scalable,
                  user-focused applications that deliver exceptional
                  experiences. I bridge the gap between frontend and backend
                  development to create cohesive, end-to-end solutions.
                </p>
              </div>

              <!-- Key Metrics -->
              <ul
                class="grid grid-cols-2 sm:grid-cols-4 gap-6 lg:gap-4 xl:gap-6 mt-10 pb-2 relative before:absolute before:inset-0 before:bg-gradient-to-r before:from-primary-50 before:to-transparent dark:before:from-primary-900/10 dark:before:to-transparent before:rounded-xl before:-z-10"
                aria-label="Professional Achievements"
              >
                ${metrics.map(
                  (metric) => html`
                    <li class="group">
                      ${metric.href
                        ? html`
                            <a
                              href="${metric.href}"
                              class="block p-6 lg:p-4 xl:p-6 bg-gradient-to-br from-white to-gray-50 dark:from-gray-800 dark:to-gray-900 rounded-2xl transition-all duration-300 h-full shadow-md hover:shadow-xl card-hover border border-gray-200 dark:border-gray-600"
                            >
                              <div
                                class="flex flex-col items-center justify-center text-center h-full"
                              >
                                <span
                                  class="text-3xl lg:text-2xl xl:text-3xl font-bold ${metric.color} group-hover:scale-110 transition-transform duration-300"
                                  >${metric.value}</span
                                >
                                <span
                                  class="text-sm text-gray-600 dark:text-gray-400 mt-1"
                                  >${metric.label}</span
                                >
                              </div>
                            </a>
                          `
                        : html`
                            <div
                              class="p-6 lg:p-4 xl:p-6 bg-gradient-to-br from-white to-gray-50 dark:from-gray-800 dark:to-gray-900 rounded-2xl h-full shadow-md border border-gray-200 dark:border-gray-600"
                            >
                              <div
                                class="flex flex-col items-center justify-center text-center h-full"
                              >
                                <span
                                  class="text-3xl lg:text-2xl xl:text-3xl font-bold ${metric.color} group-hover:scale-110 transition-transform duration-300"
                                  >${metric.value}</span
                                >
                                <span
                                  class="text-sm text-gray-600 dark:text-gray-400 mt-1"
                                  >${metric.label}</span
                                >
                              </div>
                            </div>
                          `}
                    </li>
                  `,
                )}
              </ul>
            </article>
          </div>

          <!-- Right Column: Core Tech Stack & Professional Attributes -->
          <div class="lg:col-span-5 space-y-10">
            <!-- Core Tech Stack Card -->
            <section
              class="scroll-reveal about-card bg-gradient-to-br from-white to-gray-50 dark:from-gray-800 dark:to-gray-900 p-8 sm:p-10 rounded-3xl border-l-4 border-accent-500 dark:border-accent-600 shadow-lg col-span-12"
              aria-labelledby="tech-stack-heading"
            >
              <h3
                id="tech-stack-heading"
                class="text-xl font-bold text-gray-900 dark:text-white mb-6 flex items-center gap-2"
              >
                <svg
                  class="w-5 h-5 text-secondary-500"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  ${raw(`<path
                    fill-rule="evenodd"
                    d="M2 5a2 2 0 012-2h12a2 2 0 012 2v10a2 2 0 01-2 2H4a2 2 0 01-2-2V5zm3.293 1.293a1 1 0 011.414 0l3 3a1 1 0 010 1.414l-3 3a1 1 0 01-1.414-1.414L7.586 10 5.293 7.707a1 1 0 010-1.414zM11 12a1 1 0 100 2h3a1 1 0 100-2h-3z"
                    clip-rule="evenodd"
                  ></path>`)}
                </svg>
                Core Tech Stack
              </h3>

              <!-- Tech Grid -->
              <ul
                class="grid grid-cols-2 sm:grid-cols-3 gap-2 mt-8 relative before:absolute before:inset-0 before:bg-gradient-to-r before:from-secondary-50/50 before:to-transparent dark:before:from-secondary-900/10 dark:before:to-transparent before:rounded-xl before:-z-10 space-y-2"
                role="list"
              >
                ${techStack.map(
                  (tech) => html`
                    <li class="group" role="listitem">
                      <div
                        class="flex px-8 ${tech.name === "TypeScript" ||
                        tech.name === "PostgreSQL" ||
                        tech.name === "MongoDB" ||
                        tech.name === "LangChain"
                          ? "xl:px-4"
                          : ""} py-3 gap-2 ${tech.name === "TypeScript" ||
                        tech.name === "PostgreSQL" ||
                        tech.name === "LangChain"
                          ? "xl:gap-1"
                          : ""} items-center justify-center ${tech.bgColor} rounded-xl border ${tech.name ===
                          "Nest.js" ||
                        tech.name === "PostgreSQL" ||
                        tech.name === "MongoDB" ||
                        tech.name === "LangChain"
                          ? "border-2"
                          : ""} ${tech.borderColor} transition-all duration-300 ${tech.name ===
                          "Express" ||
                        tech.name === "Nest.js" ||
                        tech.name === "PostgreSQL" ||
                        tech.name === "MongoDB" ||
                        tech.name === "LangChain"
                          ? "shadow-sm hover:shadow-md"
                          : "shadow-md hover:shadow-lg"} card-hover ${tech.name !==
                          "Express" &&
                        tech.name !== "Nest.js" &&
                        tech.name !== "PostgreSQL" &&
                        tech.name !== "MongoDB" &&
                        tech.name !== "LangChain"
                          ? "transform hover:-translate-y-1"
                          : ""}"
                      >
                        ${tech.isFontAwesome
                          ? html`<i
                              class="${tech.icon} text-2xl"
                              style="color: ${tech.fontAwesomeColor}"
                              aria-hidden="true"
                            ></i>`
                          : html`<img
                              src="${tech.icon}"
                              alt="${tech.name}"
                              class="h-6 w-6 ${tech.name === "Next.js"
                                ? "object-cover"
                                : "object-center"} ${tech.name === "TypeScript"
                                ? "rounded-xs"
                                : ""} ${tech.shouldInvert ? "dark:invert" : ""}"
                            />`}
                        <span
                          class="text-sm ${tech.name === "TypeScript" ||
                          tech.name === "PostgreSQL" ||
                          tech.name === "LangChain"
                            ? "xl:text-xs"
                            : ""} font-medium text-gray-800 dark:text-gray-200 lg:hidden xl:block"
                          >${tech.name}</span
                        >
                      </div>
                    </li>
                  `,
                )}
              </ul>
            </section>

            <!-- Professional Attributes -->
            <section
              class="scroll-reveal about-card bg-gradient-to-br from-white to-gray-50 dark:from-gray-800 dark:to-gray-900 p-8 sm:p-10 rounded-3xl border-r-4 border-purple-500 dark:border-purple-600 shadow-lg"
              aria-labelledby="attributes-heading"
            >
              <h3
                id="attributes-heading"
                class="text-xl font-bold text-gray-900 dark:text-white mb-6 flex items-center gap-2"
              >
                <svg
                  class="w-5 h-5 text-secondary-500"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  ${raw(`<path
                    d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3zM6 8a2 2 0 11-4 0 2 2 0 014 0zM16 18v-3a5.972 5.972 0 00-.75-2.906A3.005 3.005 0 0119 15v3h-3zM4.75 12.094A5.973 5.973 0 004 15v3H1v-3a3 3 0 013.75-2.906z"
                  ></path>`)}
                </svg>
                Professional Attributes
              </h3>

              <div class="flex flex-wrap gap-4 mt-6">
                ${attributes.map(
                  (attr, index) => html`
                    <span
                      class="px-6 lg:px-4 xl:px-6 py-3 ${attr.bgColor} ${attr.textColor} rounded-full text-sm font-medium shadow-sm hover:shadow-md transition-all duration-300 ${attr.hoverBgColor} ${index ===
                      0
                        ? "border border-primary-200 dark:border-primary-800"
                        : ""}"
                      >${attr.label}</span
                    >
                  `,
                )}
              </div>
            </section>
          </div>
        </div>

        <!-- Middle Content -->
        <div class="grid lg:grid-cols-12 gap-10 lg:gap-16">
          <!-- Left Column: Development Philosophy -->
          <div class="lg:col-span-7 space-y-10">
            <article
              class="scroll-reveal about-card bg-gradient-to-br from-white to-gray-50 dark:from-gray-800 dark:to-gray-900 p-8 sm:p-10 rounded-3xl border-l-4 border-secondary-500 dark:border-secondary-600 shadow-lg"
              aria-labelledby="philosophy-heading"
            >
              <h3
                id="philosophy-heading"
                class="text-xl font-bold text-gray-900 dark:text-white mb-4 flex items-center gap-2"
              >
                <svg
                  class="w-5 h-5 text-primary-500"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  ${raw(`<path
                    fill-rule="evenodd"
                    d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z"
                    clip-rule="evenodd"
                  ></path>`)}
                </svg>
                My Development Philosophy
              </h3>

              <div class="space-y-6 mt-6">
                ${philosophyPoints.map(
                  (point) => html`
                    <div class="flex items-start gap-4">
                      <span
                        class="flex-shrink-0 w-12 h-12 rounded-full ${point.iconBgColor} flex items-center justify-center mt-0.5 shadow-md ring-4 ${point.ringColor}"
                      >
                        <i class="fa-solid fa-check ${point.iconColor}"></i>
                      </span>
                      <p class="text-gray-700 dark:text-gray-300">
                        <strong
                          class="font-medium text-gray-900 dark:text-white"
                          >${point.title}</strong
                        >
                        ${point.description}
                      </p>
                    </div>
                  `,
                )}
              </div>
            </article>
          </div>

          <!-- Right Column: Call to Action -->
          <div class="lg:col-span-5">
            <section
              class="scroll-reveal about-card bg-gradient-to-br from-primary-600 to-secondary-600 dark:from-primary-700 dark:to-secondary-700 p-6 sm:p-12 rounded-3xl shadow-2xl text-white relative overflow-hidden group border border-primary-400/50 dark:border-primary-600/50"
            >
              <!-- Background pattern -->
              <div
                class="absolute inset-0 bg-grid-pattern opacity-10 group-hover:opacity-20 transition-opacity duration-500"
                aria-hidden="true"
              ></div>

              <div class="relative z-10 space-y-4">
                <h3 class="text-3xl font-bold text-white drop-shadow-md">
                  Need a Full Stack Developer?
                </h3>
                <p class="text-white/90 text-lg">
                  Let's discuss how my real-time application expertise and
                  full-stack development skills can bring your project to life.
                </p>
                <a
                  href="#contact"
                  class="inline-flex items-center px-4 py-3 bg-white text-primary-700 rounded-xl font-semibold hover:bg-gray-100 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-primary-600 shadow-lg hover:shadow-xl transform hover:scale-105"
                >
                  Get in touch
                  <i
                    class="fa-solid fa-arrow-right-long ml-2 animate-pulse-slow"
                  ></i>
                </a>
              </div>
            </section>
          </div>
        </div>

        <!-- Bottom Content: Real-time Applications Showcase -->
        <article
          class="scroll-reveal about-card bg-gradient-to-br from-white to-gray-50 dark:from-gray-800 dark:to-gray-900 p-8 sm:p-10 rounded-3xl border-l-4 border-accent-500 dark:border-accent-600 shadow-lg col-span-12"
          aria-labelledby="realtime-heading"
        >
          <h3
            id="realtime-heading"
            class="text-xl font-bold text-gray-900 dark:text-white mb-4 flex items-center gap-2"
          >
            <svg
              class="w-5 h-5 text-accent-500"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              ${raw(`<path
                fill-rule="evenodd"
                d="M2 5a2 2 0 012-2h12a2 2 0 012 2v10a2 2 0 01-2 2H4a2 2 0 01-2-2V5zm3.293 1.293a1 1 0 011.414 0l3 3a1 1 0 010 1.414l-3 3a1 1 0 01-1.414-1.414L7.586 10 5.293 7.707a1 1 0 010-1.414zM11 12a1 1 0 100 2h3a1 1 0 100-2h-3z"
                clip-rule="evenodd"
              ></path>`)}
            </svg>
            Real-time Applications & AI Chatbots
          </h3>

          <div class="mt-8 space-y-8">
            ${realtimeProjects.map(
              (project) => html`
                <div
                  class="bg-gradient-to-br from-white to-gray-50 dark:from-gray-800 dark:to-gray-900 p-6 rounded-xl shadow-md transition-all duration-300 hover:shadow-lg border border-gray-200 dark:border-gray-600 card-hover backdrop-blur-sm"
                >
                  <div class="flex items-center gap-3 mb-3">
                    <div
                      class="w-8 h-8 ${project.iconBgColor} rounded-full flex items-center justify-center"
                    >
                      <svg
                        class="w-4 h-4 text-white"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        ${raw(project.icon)}
                      </svg>
                    </div>
                    <h4 class="text-lg font-bold text-gray-900 dark:text-white">
                      ${project.title}
                    </h4>
                  </div>
                  <p class="text-gray-700 dark:text-gray-300">
                    ${project.description}
                  </p>
                </div>
              `,
            )}
          </div>
        </article>
      </div>
    </section>
  `;
};

export default AboutSection;
