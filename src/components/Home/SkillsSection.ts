import { html } from "hono/html";

interface OrbitingTech {
  name: string;
  position: "top" | "right" | "bottom" | "left";
  icon: string;
  isFontAwesome?: boolean;
  color?: string;
  imagePath?: string;
  shouldInvert?: boolean;
  classes?: string;
}

interface SkillItem {
  name: string;
  icon: string;
  isFontAwesome?: boolean;
  color?: string;
  imagePath?: string;
  shouldInvert?: boolean;
}

interface SkillCategory {
  title: string;
  color: string;
  skills: SkillItem[];
}

interface FloatingHexagon {
  size: string;
  position: string;
  color: string;
  delay?: string;
}

const orbitingTechnologies: OrbitingTech[] = [
  // Frontend Technologies (Top Quarter)
  {
    name: "JavaScript",
    position: "top",
    icon: "fa-brands fa-js",
    isFontAwesome: true,
    color: "text-yellow-400",
    classes: "group-hover:animate-bounce",
  },
  {
    name: "React",
    position: "top",
    icon: "fa-brands fa-react",
    isFontAwesome: true,
    color: "text-cyan-400",
    classes: "animate-spin-slow",
  },
  // Backend Technologies (Right Quarter)
  {
    name: "Node.js",
    position: "right",
    icon: "fa-brands fa-node-js",
    isFontAwesome: true,
    color: "text-green-400",
  },
  {
    name: "NestJS",
    position: "right",
    imagePath: "./icons/nest-js.svg",
  },
  // Database Technologies (Bottom Quarter)
  {
    name: "MongoDB",
    position: "bottom",
    imagePath: "./icons/MongoDB.svg",
  },
  {
    name: "PostgreSQL",
    position: "bottom",
    imagePath: "./icons/postgresql.svg",
  },
  // Tools & Others (Left Quarter)
  {
    name: "TypeScript",
    position: "left",
    imagePath: "./icons/typescript.svg",
  },
  {
    name: "Next.js",
    position: "left",
    imagePath: "./icons/next-js.svg",
    shouldInvert: true,
  },
];

const skillCategories: SkillCategory[] = [
  {
    title: "Frontend Development",
    color: "text-orange-500 dark:text-orange-400",
    skills: [
      {
        name: "React.js",
        icon: "fa-brands fa-react",
        isFontAwesome: true,
        color: "text-cyan-400",
      },
      {
        name: "Next.js",
        imagePath: "./icons/next-js.svg",
        shouldInvert: true,
      },
      {
        name: "JavaScript",
        icon: "fa-brands fa-js",
        isFontAwesome: true,
        color: "text-yellow-400",
      },
      {
        name: "TypeScript",
        imagePath: "./icons/typescript.svg",
      },
      {
        name: "Tailwind CSS",
        imagePath: "./icons/tailwind.svg",
      },
      {
        name: "Redux",
        imagePath: "./icons/redux.svg",
      },
    ],
  },
  {
    title: "Backend Development",
    color: "text-blue-500 dark:text-blue-400",
    skills: [
      {
        name: "Node.js",
        icon: "fa-brands fa-node-js",
        isFontAwesome: true,
        color: "text-green-400",
      },
      {
        name: "Express.js",
        imagePath: "./icons/Express.svg",
        shouldInvert: true,
      },
      {
        name: "NestJS",
        imagePath: "./icons/nest-js.svg",
      },
      {
        name: "Socket.IO",
        imagePath: "./icons/Socket-io.svg",
        shouldInvert: true,
      },
    ],
  },
  {
    title: "API & Integration",
    color: "text-green-500 dark:text-green-400",
    skills: [
      {
        name: "REST APIs",
        icon: "fa-solid fa-code-branch",
        isFontAwesome: true,
      },
      {
        name: "OAuth 2.0",
        icon: "fa-solid fa-shield-halved",
        isFontAwesome: true,
      },
    ],
  },
  {
    title: "Database & Caching",
    color: "text-purple-500 dark:text-purple-400",
    skills: [
      {
        name: "PostgreSQL",
        imagePath: "./icons/postgresql.svg",
      },
      {
        name: "MongoDB",
        imagePath: "./icons/MongoDB.svg",
      },
      {
        name: "Redis",
        imagePath: "./icons/Redis.svg",
      },
      {
        name: "Prisma",
        imagePath: "./icons/prisma.svg",
        shouldInvert: true,
      },
    ],
  },
  {
    title: "DevOps & Cloud",
    color: "text-teal-500 dark:text-teal-400",
    skills: [
      {
        name: "Docker",
        icon: "fa-brands fa-docker",
        isFontAwesome: true,
        color: "text-blue-600",
      },
      {
        name: "CI/CD",
        icon: "fa-brands fa-github",
        isFontAwesome: true,
      },
    ],
  },
  {
    title: "Tools & Others",
    color: "text-pink-500 dark:text-pink-400",
    skills: [
      {
        name: "Git",
        icon: "fa-brands fa-git-alt",
        isFontAwesome: true,
        color: "text-accent-500",
      },
      {
        name: "VS Code",
        imagePath: "./icons/vs-code.svg",
      },
      {
        name: "Postman",
        imagePath: "./icons/Postman.svg",
      },
    ],
  },
];

const floatingHexagons: FloatingHexagon[] = [
  {
    size: "w-16 h-16",
    position: "top-20 left-20",
    color: "bg-primary-200/30 dark:bg-primary-800/30",
  },
  {
    size: "w-12 h-12",
    position: "top-40 right-32",
    color: "bg-secondary-200/30 dark:bg-secondary-800/30",
    delay: "1s",
  },
  {
    size: "w-20 h-20",
    position: "bottom-32 left-1/4",
    color: "bg-accent-200/30 dark:bg-accent-800/30",
    delay: "2s",
  },
  {
    size: "w-14 h-14",
    position: "bottom-20 right-20",
    color: "bg-purple-200/30 dark:bg-purple-800/30",
    delay: "3s",
  },
];

const renderOrbitingTech = (tech: OrbitingTech, index: number) => {
  const positionClasses = {
    top: "absolute top-0 left-1/2 -translate-x-1/2 -translate-y-[90%] flex gap-4",
    right:
      "absolute top-1/2 right-0 translate-x-[90%] -translate-y-1/2 flex flex-col gap-4",
    bottom:
      "absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-[90%] flex gap-4",
    left: "absolute top-1/2 left-0 -translate-x-[90%] -translate-y-1/2 flex flex-col gap-4",
  };

  const labelPositionClasses = {
    top: "-bottom-6",
    right: "-left-16",
    bottom: "-top-6",
    left: "-right-16",
  };

  const shadowColor = tech.color
    ? `hover:shadow-${tech.color.split("-")[1]}-500/40`
    : "hover:shadow-white/40";

  return html`
    <div
      class="w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-gray-50/80 dark:bg-white/10 backdrop-blur-md border border-gray-200/40 dark:border-white/20 flex items-center justify-center shadow-lg hover:scale-110 ${shadowColor} transition-all duration-500 group"
    >
      ${tech.isFontAwesome
        ? html`<i
            class="${tech.icon} ${tech.color || ""} ${tech.classes ||
            ""} ${tech.position === "top" ? "text-xl" : "text-lg"}"
          ></i>`
        : html`<img
            src="${tech.imagePath}"
            alt="${tech.name}"
            class="${tech.position === "left" && tech.name === "Next.js"
              ? "w-8 h-8"
              : "w-6 h-6"} ${tech.shouldInvert ? "dark:invert" : ""}"
          />`}
      <span
        class="absolute ${labelPositionClasses[
          tech.position
        ]} text-xs text-gray-700 dark:text-white opacity-0 group-hover:opacity-100 transition-opacity"
        >${tech.name}</span
      >
    </div>
  `;
};

const renderSkillItem = (skill: SkillItem) => {
  return html`
    <div
      class="flex flex-col items-center text-gray-700 dark:text-gray-300 transition-all duration-500"
    >
      ${skill.isFontAwesome
        ? html`<i class="${skill.icon} text-2xl mb-2 ${skill.color || ""}"></i>`
        : html`<img
            src="${skill.imagePath}"
            alt="${skill.name}"
            class="w-6 h-6 ${skill.name === "TypeScript"
              ? "object-center rounded-xs"
              : skill.name === "Express.js" || skill.name === "Socket.IO"
                ? "object-center"
                : ""} mb-2 ${skill.shouldInvert
              ? "dark:invert"
              : ""} ${skill.name === "MongoDB"
              ? "object-cover"
              : ""} transition-all duration-500"
          />`}
      <span>${skill.name}</span>
    </div>
  `;
};

const SkillsSection = () => {
  // Group orbiting technologies by position
  const topTechs = orbitingTechnologies.filter(
    (tech) => tech.position === "top",
  );
  const rightTechs = orbitingTechnologies.filter(
    (tech) => tech.position === "right",
  );
  const bottomTechs = orbitingTechnologies.filter(
    (tech) => tech.position === "bottom",
  );
  const leftTechs = orbitingTechnologies.filter(
    (tech) => tech.position === "left",
  );

  return html`
    <section
      id="skills"
      class="py-20 bg-white dark:bg-dark-800 relative overflow-hidden transition-all duration-500"
      aria-labelledby="skills-heading"
    >
      <!-- Animated Background -->
      <div class="absolute inset-0" aria-hidden="true">
        <div
          class="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-indigo-50/30 via-purple-50/20 to-pink-50/30 dark:from-indigo-950/20 dark:via-purple-950/10 dark:to-pink-950/20"
        ></div>
        <!-- Floating Hexagons -->
        ${floatingHexagons.map(
          (hexagon) => html`
            <div
              class="absolute ${hexagon.position} ${hexagon.size} hexagon ${hexagon.color} animate-float"
              style="${hexagon.delay
                ? `animation-delay: ${hexagon.delay}`
                : ""}"
            ></div>
          `,
        )}
      </div>

      <div class="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8">
        <!-- Title -->
        <header class="text-center mb-16 scroll-reveal">
          <h2
            id="skills-heading"
            class="text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-6 transition-all duration-500"
          >
            My <span class="text-gradient">Tech Arsenal</span>
          </h2>
          <div
            class="w-32 h-1.5 bg-gradient-to-r from-primary-500 via-secondary-500 to-accent-500 mx-auto mb-6 rounded-full"
            aria-hidden="true"
          ></div>
          <p
            class="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto transition-all duration-500"
          >
            Mastering the art of full-stack development with cutting-edge
            technologies
          </p>
        </header>

        <div class="relative">
          <!-- Central Hub -->
          <div class="flex justify-center mb-16 scroll-reveal py-10">
            <div class="relative">
              <!-- Central Circle -->
              <div
                class="w-28 h-28 sm:w-36 sm:h-36 rounded-full relative flex items-center justify-center"
              >
                <!-- Multi-layered background -->
                <div
                  class="absolute inset-0 rounded-full bg-gradient-to-br from-violet-600 via-primary-500 to-pink-500 dark:opacity-80 opacity-90 animate-pulse-slow"
                  aria-hidden="true"
                ></div>
                <div
                  class="absolute inset-1 rounded-full bg-gradient-to-tr from-blue-500 via-secondary-500 to-purple-500 dark:opacity-80 opacity-90 blur-sm"
                  aria-hidden="true"
                ></div>
                <div
                  class="absolute inset-2 rounded-full bg-gradient-to-br from-gray-100 to-white dark:from-dark-800/90 dark:to-dark-900/90 backdrop-blur-xl border border-gray-200/20 dark:border-white/10"
                  aria-hidden="true"
                ></div>

                <!-- Glass effect overlay -->
                <div
                  class="absolute inset-0 rounded-full bg-gradient-to-br from-gray-200/30 to-gray-100/20 dark:from-white/10 dark:to-white/5 backdrop-blur-sm border border-gray-200/30 dark:border-white/10"
                  aria-hidden="true"
                ></div>

                <!-- Content -->
                <div class="text-center relative z-10">
                  <div
                    class="text-lg sm:text-2xl font-bold bg-gradient-to-r from-gray-800 to-gray-600 dark:from-white dark:to-gray-300 bg-clip-text text-transparent"
                  >
                    Full
                  </div>
                  <div
                    class="text-sm sm:text-lg text-gray-700 dark:text-white/90"
                  >
                    Stack
                  </div>
                </div>

                <!-- Outer glow -->
                <div
                  class="absolute -inset-2 rounded-full bg-gradient-to-r from-primary-500 to-secondary-500 opacity-30 blur-2xl animate-pulse-slow"
                  aria-hidden="true"
                ></div>
              </div>

              <!-- Orbiting Skills -->
              <div class="absolute inset-0">
                <!-- Rotating Technologies Circle -->
                <div class="absolute inset-0">
                  <!-- Orbit Path (visible circle) -->
                  <div
                    class="absolute inset-[-30px] rounded-full border border-gray-300/20 dark:border-white/10"
                    aria-hidden="true"
                  ></div>

                  <!-- Rotating Technologies -->
                  <div
                    class="absolute inset-0 animate-spin-slow"
                    style="animation-duration: 30s"
                  >
                    <!-- Frontend Technologies (Top Quarter) -->
                    <div
                      class="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-[90%] flex gap-4"
                    >
                      ${topTechs.map((tech, index) =>
                        renderOrbitingTech(tech, index),
                      )}
                    </div>

                    <!-- Backend Technologies (Right Quarter) -->
                    <div
                      class="absolute top-1/2 right-0 translate-x-[90%] -translate-y-1/2 flex flex-col gap-4"
                    >
                      ${rightTechs.map((tech, index) =>
                        renderOrbitingTech(tech, index),
                      )}
                    </div>

                    <!-- Database Technologies (Bottom Quarter) -->
                    <div
                      class="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-[90%] flex gap-4"
                    >
                      ${bottomTechs.map((tech, index) =>
                        renderOrbitingTech(tech, index),
                      )}
                    </div>

                    <!-- Tools & Others (Left Quarter) -->
                    <div
                      class="absolute top-1/2 left-0 -translate-x-[90%] -translate-y-1/2 flex flex-col gap-4"
                    >
                      ${leftTechs.map((tech, index) =>
                        renderOrbitingTech(tech, index),
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <!-- Skills Categories Grid -->
          <div
            class="grid gap-8 md:grid-cols-2 lg:grid-cols-3"
            role="list"
            aria-label="Skill Categories"
          >
            ${skillCategories.map(
              (category) => html`
                <article
                  class="bg-gray-100 dark:bg-dark-800 rounded-2xl shadow-lg p-6 text-center border border-gray-200 dark:border-dark-700 transition-all duration-500 scroll-reveal animated-card"
                  role="listitem"
                >
                  <h3
                    class="text-xl font-semibold ${category.color} mb-4 transition-all duration-500"
                  >
                    ${category.title}
                  </h3>
                  <div
                    class="flex flex-wrap justify-center gap-6"
                    role="list"
                    aria-label="${category.title} skills"
                  >
                    ${category.skills.map((skill) => renderSkillItem(skill))}
                  </div>
                </article>
              `,
            )}
          </div>
        </div>
      </div>
    </section>
  `;
};

export default SkillsSection;
