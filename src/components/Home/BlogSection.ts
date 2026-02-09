import { html } from "hono/html";

interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  category: string;
  readTime: string;
  date: string;
  status: "published" | "coming_soon";
  tags: string[];
  categoryColor: string;
  categoryBg: string;
}

const upcomingBlogPosts: BlogPost[] = [
  {
    id: "building-scalable-apis-with-nestjs",
    title: "Building Scalable APIs with NestJS and PostgreSQL",
    excerpt:
      "Learn how to architect and build production-ready REST APIs using NestJS, Prisma, and PostgreSQL with best practices for scalability and maintainability.",
    category: "Backend",
    readTime: "8 min read",
    date: "Coming Soon",
    status: "coming_soon",
    tags: ["NestJS", "PostgreSQL", "Prisma", "API Design"],
    categoryColor: "text-rose-600 dark:text-rose-400",
    categoryBg: "bg-rose-100 dark:bg-rose-900/30",
  },
  {
    id: "real-time-chat-with-websockets",
    title: "Building Real-Time Chat Applications with WebSockets",
    excerpt:
      "A comprehensive guide to implementing real-time communication features using Socket.io, React, and Node.js with authentication and message persistence.",
    category: "Full Stack",
    readTime: "10 min read",
    date: "Coming Soon",
    status: "coming_soon",
    tags: ["WebSockets", "Socket.io", "React", "Real-time"],
    categoryColor: "text-blue-600 dark:text-blue-400",
    categoryBg: "bg-blue-100 dark:bg-blue-900/30",
  },
  {
    id: "ai-chatbots-langchain",
    title: "Creating Intelligent Chatbots with LangChain and OpenAI",
    excerpt:
      "Explore how to build context-aware AI chatbots using LangChain, integrate them with custom knowledge bases, and deploy them in production applications.",
    category: "AI/ML",
    readTime: "12 min read",
    date: "Coming Soon",
    status: "coming_soon",
    tags: ["LangChain", "AI", "OpenAI", "Chatbots"],
    categoryColor: "text-purple-600 dark:text-purple-400",
    categoryBg: "bg-purple-100 dark:bg-purple-900/30",
  },
  {
    id: "nextjs-performance-optimization",
    title: "Next.js 14 Performance Optimization Techniques",
    excerpt:
      "Deep dive into advanced performance optimization strategies in Next.js 14, including Server Components, streaming, and caching strategies.",
    category: "Frontend",
    readTime: "9 min read",
    date: "Coming Soon",
    status: "coming_soon",
    tags: ["Next.js", "React", "Performance", "SSR"],
    categoryColor: "text-indigo-600 dark:text-indigo-400",
    categoryBg: "bg-indigo-100 dark:bg-indigo-900/30",
  },
  {
    id: "mongodb-schema-design",
    title: "MongoDB Schema Design Patterns for Modern Applications",
    excerpt:
      "Master MongoDB schema design patterns, indexing strategies, and aggregation pipelines for building high-performance NoSQL databases.",
    category: "Database",
    readTime: "11 min read",
    date: "Coming Soon",
    status: "coming_soon",
    tags: ["MongoDB", "Database Design", "NoSQL", "Optimization"],
    categoryColor: "text-green-600 dark:text-green-400",
    categoryBg: "bg-green-100 dark:bg-green-900/30",
  },
  {
    id: "react-state-management-2024",
    title: "Modern React State Management: Zustand vs Redux Toolkit",
    excerpt:
      "Compare modern state management solutions in React, learn when to use each approach, and implement clean, scalable state architecture.",
    category: "Frontend",
    readTime: "7 min read",
    date: "Coming Soon",
    status: "coming_soon",
    tags: ["React", "State Management", "Zustand", "Redux"],
    categoryColor: "text-indigo-600 dark:text-indigo-400",
    categoryBg: "bg-indigo-100 dark:bg-indigo-900/30",
  },
];

const BlogSection = () => {
  return html`
    <section
      id="blog"
      class="py-20 sm:py-28 bg-white dark:bg-gray-900 transition-colors duration-300 relative overflow-hidden"
      aria-labelledby="blog-heading"
    >
      <!-- Background Elements -->
      <div class="absolute inset-0" aria-hidden="true">
        <div
          class="absolute top-20 right-10 w-72 h-72 bg-linear-to-r from-primary-500/10 to-secondary-500/10 dark:from-primary-400/10 dark:to-secondary-400/10 rounded-full blur-3xl"
          style="animation: float 8s ease-in-out infinite"
        ></div>
        <div
          class="absolute bottom-20 left-10 w-96 h-96 bg-linear-to-r from-accent-500/10 to-purple-500/10 dark:from-accent-400/10 dark:to-purple-400/10 rounded-full blur-3xl"
          style="animation: float 8s ease-in-out infinite 3s"
        ></div>
      </div>

      <div
        class="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 space-y-12"
      >
        <!-- Section Header -->
        <header class="text-center mb-16 scroll-reveal">
          <h2
            id="blog-heading"
            class="text-4xl lg:text-6xl font-bold text-gray-900 dark:text-white mb-6"
          >
            Blog &amp;
            <span class="text-gradient relative inline-block">Insights</span>
          </h2>
          <div
            class="w-40 h-2 bg-linear-to-r from-primary-600 via-secondary-600 to-accent-600 dark:from-primary-500 dark:via-secondary-500 dark:to-accent-500 mx-auto mb-8 rounded-full"
            aria-hidden="true"
          ></div>
          <p class="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Sharing knowledge and insights about full-stack development, AI
            integration, and modern web technologies
          </p>
        </header>

        <!-- Coming Soon Notice -->
        <div
          class="scroll-reveal max-w-2xl mx-auto mb-12 bg-linear-to-r from-primary-50 to-secondary-50 dark:from-primary-900/20 dark:to-secondary-900/20 border-l-4 border-primary-500 dark:border-primary-600 p-6 rounded-xl"
        >
          <div class="flex items-start gap-4">
            <div
              class="shrink-0 w-12 h-12 bg-primary-100 dark:bg-primary-900/40 rounded-full flex items-center justify-center"
            >
              <svg
                class="w-6 h-6 text-primary-600 dark:text-primary-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z"
                ></path>
              </svg>
            </div>
            <div class="flex-1">
              <h3
                class="text-lg font-semibold text-gray-900 dark:text-white mb-2"
              >
                Blog Posts Coming Soon!
              </h3>
              <p class="text-gray-700 dark:text-gray-300">
                I'm currently working on a series of in-depth technical articles
                covering modern web development, AI integration, and best
                practices. Subscribe below to get notified when new posts are
                published!
              </p>
            </div>
          </div>
        </div>

        <!-- Blog Posts Grid -->
        <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          ${upcomingBlogPosts.map(
            (post) => html`
              <article
                class="scroll-reveal group bg-white dark:bg-gray-800 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden border border-gray-200 dark:border-gray-700 hover:border-primary-300 dark:hover:border-primary-700 h-full flex flex-col"
              >
                <!-- Status Badge -->
                <div class="relative p-6 pb-4">
                  <div class="flex items-center justify-between mb-4">
                    <span
                      class="inline-flex items-center px-3 py-1 ${post.categoryBg} ${post.categoryColor} rounded-full text-xs font-semibold"
                    >
                      ${post.category}
                    </span>
                    <span
                      class="inline-flex items-center px-3 py-1 bg-amber-100 dark:bg-amber-900/30 text-amber-600 dark:text-amber-400 rounded-full text-xs font-semibold"
                    >
                      <svg
                        class="w-3 h-3 mr-1"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z"
                          clip-rule="evenodd"
                        ></path>
                      </svg>
                      ${post.status === "coming_soon" ? "Coming Soon" : ""}
                    </span>
                  </div>

                  <!-- Title -->
                  <h3
                    class="text-xl font-bold text-gray-900 dark:text-white mb-3 group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors duration-300 line-clamp-2"
                  >
                    ${post.title}
                  </h3>

                  <!-- Excerpt -->
                  <p
                    class="text-gray-600 dark:text-gray-400 text-sm leading-relaxed line-clamp-3 mb-4"
                  >
                    ${post.excerpt}
                  </p>

                  <!-- Tags -->
                  <div class="flex flex-wrap gap-2 mb-4">
                    ${post.tags.map(
                      (tag) => html`
                        <span
                          class="px-2 py-1 bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-400 rounded text-xs font-medium"
                        >
                          #${tag}
                        </span>
                      `,
                    )}
                  </div>
                </div>

                <!-- Footer -->
                <div
                  class="mt-auto px-6 py-4 bg-gray-50 dark:bg-gray-900/50 border-t border-gray-200 dark:border-gray-700"
                >
                  <div
                    class="flex items-center justify-between text-sm text-gray-500 dark:text-gray-400"
                  >
                    <div class="flex items-center gap-2">
                      <svg
                        class="w-4 h-4"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                        ></path>
                      </svg>
                      <span>${post.readTime}</span>
                    </div>
                    <span class="font-medium">${post.date}</span>
                  </div>
                </div>
              </article>
            `,
          )}
        </div>

        <!-- Call to Action -->
        <div class="text-center scroll-reveal mt-12">
          <p class="text-gray-600 dark:text-gray-400 mb-6">
            Want to discuss a topic or suggest an article?
          </p>
          <a
            href="#contact"
            class="inline-flex items-center gap-2 px-8 py-4 bg-linear-to-r from-primary-600 to-secondary-600 dark:from-primary-500 dark:to-secondary-500 text-white rounded-xl font-semibold hover:shadow-lg transition-all duration-300 hover:scale-105"
          >
            <svg
              class="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
              ></path>
            </svg>
            <span>Get in Touch</span>
          </a>
        </div>
      </div>
    </section>
  `;
};

export default BlogSection;
