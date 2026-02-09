import { html } from "hono/html";

interface Technology {
  name: string;
  bgColor: string;
  textColor: string;
}

interface Achievement {
  icon: string;
  text: string;
}

const technologies: Technology[] = [
  {
    name: "React",
    bgColor: "bg-blue-100 dark:bg-blue-900/30",
    textColor: "text-blue-600 dark:text-blue-400",
  },
  {
    name: "Next.js",
    bgColor: "bg-indigo-100 dark:bg-indigo-900/30",
    textColor: "text-indigo-600 dark:text-indigo-400",
  },
  {
    name: "Node.js",
    bgColor: "bg-green-100 dark:bg-green-900/30",
    textColor: "text-green-600 dark:text-green-400",
  },
  {
    name: "NestJS",
    bgColor: "bg-rose-100 dark:bg-rose-900/30",
    textColor: "text-rose-600 dark:text-rose-400",
  },
  {
    name: "Express",
    bgColor: "bg-gray-200 dark:bg-dark-700",
    textColor: "text-gray-700 dark:text-gray-300",
  },
  {
    name: "TypeScript",
    bgColor: "bg-yellow-100 dark:bg-yellow-900/30",
    textColor: "text-yellow-600 dark:text-yellow-400",
  },
  {
    name: "Prisma",
    bgColor: "bg-emerald-100 dark:bg-emerald-900/30",
    textColor: "text-emerald-600 dark:text-emerald-400",
  },
  {
    name: "MongoDB",
    bgColor: "bg-teal-100 dark:bg-teal-900/30",
    textColor: "text-teal-600 dark:text-teal-400",
  },
  {
    name: "PostgreSQL",
    bgColor: "bg-orange-100 dark:bg-orange-900/30",
    textColor: "text-orange-600 dark:text-orange-400",
  },
  {
    name: "LangChain",
    bgColor: "bg-purple-100 dark:bg-purple-900/30",
    textColor: "text-purple-600 dark:text-purple-400",
  },
];

const achievements: Achievement[] = [
  {
    icon: "✅",
    text: "Built 10+ production-ready web apps",
  },
  {
    icon: "🚀",
    text: "Experience with modern frameworks",
  },
  {
    icon: "🤝",
    text: "Collaborated with cross-functional teams",
  },
  {
    icon: "🧩",
    text: "Problem-solving & clean architecture",
  },
];

const ExperienceSection = () => {
  return html`
    <section
      id="experience"
      class="py-20 bg-gray-100 dark:bg-dark-900 transition-all duration-500"
      aria-labelledby="experience-heading"
    >
      <div class="max-w-4xl mx-auto px-6">
        <!-- Header -->
        <header class="text-center mb-14 scroll-reveal">
          <h2
            id="experience-heading"
            class="text-4xl lg:text-5xl font-extrabold text-gray-900 dark:text-white transition-all duration-500"
          >
            Professional <span class="text-gradient">Experience</span>
          </h2>
          <p class="mt-4 text-lg text-gray-600 dark:text-gray-300">
            My journey as a full-stack developer working with modern web & AI
            technologies
          </p>
        </header>

        <!-- Experience Card -->
        <article
          class="relative bg-white/80 dark:bg-dark-800/90 backdrop-blur-xl border border-gray-200/40 dark:border-dark-700 p-10 rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 scroll-reveal animated-card"
        >
          <!-- Badge -->
          <div
            class="inline-flex items-center px-4 py-2 bg-green-100 dark:bg-green-900/30 text-green-600 dark:text-green-400 rounded-full text-sm font-medium mb-6 transition-all duration-500"
          >
            <span
              class="w-2 h-2 bg-green-500 rounded-full mr-2 animate-pulse"
              aria-hidden="true"
            ></span>
            Current Role
          </div>

          <!-- Title -->
          <h3
            class="text-3xl font-bold text-gray-900 dark:text-white mb-2 transition-all duration-500"
          >
            Junior Web Developer
          </h3>
          <p
            class="text-primary-600 dark:text-primary-400 font-semibold text-lg mb-1 transition-all duration-500"
          >
            Minimatic Solution
          </p>
          <time
            class="text-gray-500 dark:text-gray-400 block mb-6 transition-all duration-500"
            datetime="2023"
            >2023 - Present</time
          >

          <!-- Description -->
          <p
            class="text-gray-600 dark:text-gray-300 leading-relaxed mb-8 transition-all duration-500"
          >
            Working as a Junior Web Developer focusing on building modern web
            apps and AI-powered solutions. I specialize in
            <span class="font-semibold text-primary-600 dark:text-primary-400"
              >React, Next.js, Node.js, NestJS</span
            >
            for scalable full-stack apps and leverage databases like
            <span
              class="font-semibold text-secondary-600 dark:text-secondary-400"
              >MongoDB & PostgreSQL</span
            >
            with
            <span class="font-semibold text-accent-600 dark:text-accent-400"
              >Prisma ORM</span
            >. Recently exploring
            <span class="font-semibold text-purple-600 dark:text-purple-400"
              >LangChain</span
            >
            for AI/LLM integrations.
          </p>

          <!-- Achievements -->
          <ul
            class="grid sm:grid-cols-2 gap-4 mb-8 text-gray-700 dark:text-gray-300 transition-all duration-500"
            role="list"
            aria-label="Key Achievements"
          >
            ${achievements.map(
              (achievement) => html`
                <li
                  class="flex items-center gap-3 p-3 rounded-xl bg-gray-100 dark:bg-dark-700/60 transition-all duration-500"
                  role="listitem"
                >
                  <span aria-hidden="true">${achievement.icon}</span>
                  ${achievement.text}
                </li>
              `,
            )}
          </ul>

          <!-- Tech Stack -->
          <div>
            <h4
              class="text-lg font-semibold text-gray-900 dark:text-white mb-3 transition-all duration-500"
            >
              Technologies I Use
            </h4>
            <div class="flex flex-wrap gap-3" role="list">
              ${technologies.map(
                (tech) => html`
                  <span
                    class="px-3 py-1 ${tech.bgColor} ${tech.textColor} rounded-full text-sm transition-all duration-500"
                    role="listitem"
                    >${tech.name}</span
                  >
                `,
              )}
            </div>
          </div>
        </article>
      </div>
    </section>
  `;
};

export default ExperienceSection;
