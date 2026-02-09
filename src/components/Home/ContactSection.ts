import { html, raw } from "hono/html";

interface ContactCard {
  title: string;
  icon: string;
  iconColor: string;
  gradientColors: string;
  content: string;
  link?: {
    href: string;
    text: string;
    isExternal?: boolean;
  };
}

interface ChatBubble {
  size: string;
  position: string;
  color: string;
  delay?: string;
}

interface BackgroundGradient {
  size: string;
  position: string;
  colors: string;
}

const contactCards: ContactCard[] = [
  {
    title: "Email",
    icon: `<path
      stroke-linecap="round"
      stroke-linejoin="round"
      stroke-width="2"
      d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
    />`,
    iconColor: "text-primary-500",
    gradientColors: "from-primary-500/10 to-secondary-500/10",
    content: "shahinali.dev@gmail.com",
    link: {
      href: "mailto:shahinali.dev@gmail.com",
      text: "shahinali.dev@gmail.com",
    },
  },
  {
    title: "LinkedIn",
    icon: `<path
      d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"
    />`,
    iconColor: "text-accent-500",
    gradientColors: "from-accent-500/10 to-primary-500/10",
    content: "Shahin Ali",
    link: {
      href: "https://www.linkedin.com/in/shahinali-dev",
      text: "Shahin Ali",
      isExternal: true,
    },
  },
  {
    title: "Github",
    icon: `<path
      d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
    />`,
    iconColor: "text-primary-500",
    gradientColors: "from-accent-500/10 to-primary-500/10",
    content: "Shahin Ali",
    link: {
      href: "https://github.com/shahinali-dev",
      text: "Shahin Ali",
      isExternal: true,
    },
  },
  {
    title: "Location",
    icon: `<path
      stroke-linecap="round"
      stroke-linejoin="round"
      stroke-width="2"
      d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
    />
    <path
      stroke-linecap="round"
      stroke-linejoin="round"
      stroke-width="2"
      d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
    />`,
    iconColor: "text-secondary-500",
    gradientColors: "from-secondary-500/10 to-accent-500/10",
    content: "Rajshahi, Bangladesh",
  },
  {
    title: "Languages",
    icon: `<path
      stroke-linecap="round"
      stroke-linejoin="round"
      stroke-width="2"
      d="M3 5h12M9 3v2m1.048 9.5A18.022 18.022 0 016.412 9m6.088 9h7M11 21l5-10 5 10M12.751 5C11.783 10.77 8.07 15.61 3 18.129"
    />`,
    iconColor: "text-purple-500",
    gradientColors: "from-purple-500/10 to-pink-500/10",
    content: "English, Bangla, Hindi",
  },
];

const chatBubbles: ChatBubble[] = [
  {
    size: "w-32 h-20",
    position: "top-20 left-20",
    color: "bg-primary-200/30 dark:bg-primary-800/30",
  },
  {
    size: "w-28 h-16",
    position: "top-40 right-32",
    color: "bg-secondary-200/30 dark:bg-secondary-800/30",
    delay: "1s",
  },
  {
    size: "w-24 h-18",
    position: "bottom-20 right-20",
    color: "bg-purple-200/30 dark:bg-purple-800/30",
    delay: "3s",
  },
];

const backgroundGradients: BackgroundGradient[] = [
  {
    size: "w-32 h-32",
    position: "top-20 left-20",
    colors: "from-primary-500/20 to-secondary-500/20",
  },
  {
    size: "w-40 h-40",
    position: "bottom-20 right-20",
    colors: "from-secondary-500/20 to-accent-500/20",
  },
];

const renderContactCard = (card: ContactCard) => {
  return html`
    <article
      class="bg-white/80 dark:bg-dark-800/80 backdrop-blur-xl rounded-2xl p-6 border border-gray-200/50 dark:border-gray-700/50 shadow-lg hover:shadow-xl transition-shadow duration-300 animated-card"
    >
      <div class="flex items-start space-x-4">
        <div
          class="p-3 bg-gradient-to-br ${card.gradientColors} rounded-xl flex-shrink-0"
        >
          ${card.title === "LinkedIn" || card.title === "Github"
            ? html`<svg
                class="${card.title === "Github"
                  ? "w-4 h-4 sm:w-5 sm:h-5"
                  : "w-6 h-6"} ${card.iconColor}"
                fill="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                ${raw(card.icon)}
              </svg>`
            : html`<svg
                class="w-6 h-6 ${card.iconColor}"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                ${raw(card.icon)}
              </svg>`}
        </div>
        <div class="flex-1 min-w-0">
          <h3 class="text-lg font-semibold text-gray-900 dark:text-white mb-1">
            ${card.title}
          </h3>
          ${card.link
            ? html`<a
                href="${card.link.href}"
                ${card.link.isExternal
                  ? 'target="_blank" rel="noopener noreferrer"'
                  : ""}
                class="${card.title === "LinkedIn"
                  ? "text-accent-500 hover:text-accent-600"
                  : "text-primary-500 hover:text-primary-600"} transition-colors break-words"
              >
                ${card.link.text}
              </a>`
            : html`<p class="text-gray-600 dark:text-gray-300">
                ${card.content}
              </p>`}
        </div>
      </div>
    </article>
  `;
};

const ContactSection = () => {
  return html`
    <section
      id="contact"
      class="py-20 bg-white dark:bg-dark-800 relative overflow-hidden"
      aria-labelledby="contact-heading"
    >
      <!-- Background Elements -->
      <div class="absolute inset-0" aria-hidden="true">
        <div
          class="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-primary-50/10 via-secondary-50/10 to-accent-50/10 dark:from-primary-900/10 dark:via-secondary-900/10 dark:to-accent-900/10"
        ></div>
        ${backgroundGradients.map(
          (gradient) => html`
            <div
              class="absolute ${gradient.position} ${gradient.size} bg-gradient-to-r ${gradient.colors} rounded-full blur-3xl"
            ></div>
          `,
        )}
      </div>

      <!-- Floating Chat Bubbles -->
      <div class="absolute inset-0 overflow-hidden" aria-hidden="true">
        ${chatBubbles.map(
          (bubble) => html`
            <div
              class="absolute ${bubble.position} ${bubble.size} ${bubble.color} rounded-2xl animate-float chat-bubble"
              style="${bubble.delay ? `animation-delay: ${bubble.delay}` : ""}"
            ></div>
          `,
        )}
      </div>

      <div class="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8">
        <!-- Section Header -->
        <header class="text-center mb-16">
          <h2
            id="contact-heading"
            class="text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-6"
          >
            Get In <span class="text-gradient">Touch</span>
          </h2>
          <div
            class="w-32 h-1.5 bg-gradient-to-r from-primary-500 via-secondary-500 to-accent-500 mx-auto mb-6 rounded-full"
            aria-hidden="true"
          ></div>
          <p class="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Let's connect and discuss how we can work together on your next
            project
          </p>
        </header>

        <!-- Contact Content -->
        <div class="grid lg:grid-cols-5 gap-12 items-start">
          <!-- Left Column: Contact Cards -->
          <aside
            class="space-y-6 col-span-5 lg:col-span-2"
            role="complementary"
            aria-label="Contact Information"
          >
            ${contactCards.map((card) => renderContactCard(card))}
          </aside>

          <!-- Right Column: Contact Form -->
          <div
            class="bg-white/80 dark:bg-dark-800/80 backdrop-blur-xl rounded-2xl p-10 border border-gray-200/50 dark:border-gray-700/50 shadow-xl animated-card col-span-5 lg:col-span-3"
          >
            <h3 class="text-2xl font-bold text-gray-900 dark:text-white mb-6">
              Send a Message
            </h3>
            <form class="space-y-6 py-4" aria-label="Contact form">
              <!-- Name and Email Fields in one line -->
              <div class="grid grid-cols-2 gap-4">
                <div class="col-span-2 md:col-span-1">
                  <label
                    for="name"
                    class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
                  >
                    Name <span class="text-red-500" aria-hidden="true">*</span>
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    class="block w-full px-4 py-3 bg-gray-50 dark:bg-dark-700 border border-gray-200 dark:border-gray-700 rounded-xl focus:border-primary-500 focus:ring-2 focus:ring-primary-500 focus:ring-opacity-50 transition-colors duration-300 text-gray-900 dark:text-white"
                    placeholder="Your name"
                    aria-required="true"
                  />
                </div>
                <div class="col-span-2 md:col-span-1">
                  <label
                    for="email"
                    class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
                  >
                    Email
                    <span class="text-red-500" aria-hidden="true">*</span>
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    class="block w-full px-4 py-3 bg-gray-50 dark:bg-dark-700 border border-gray-200 dark:border-gray-700 rounded-xl focus:border-primary-500 focus:ring-2 focus:ring-primary-500 focus:ring-opacity-50 transition-colors duration-300 text-gray-900 dark:text-white"
                    placeholder="your@email.com"
                    aria-required="true"
                  />
                </div>
              </div>

              <!-- Subject Field -->
              <div>
                <label
                  for="subject"
                  class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
                >
                  Subject
                  <span class="text-red-500" aria-hidden="true">*</span>
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  required
                  class="block w-full px-4 py-3 bg-gray-50 dark:bg-dark-700 border border-gray-200 dark:border-gray-700 rounded-xl focus:border-primary-500 focus:ring-2 focus:ring-primary-500 focus:ring-opacity-50 transition-colors duration-300 text-gray-900 dark:text-white"
                  placeholder="What's this about?"
                  aria-required="true"
                />
              </div>

              <!-- Message Field -->
              <div>
                <label
                  for="message"
                  class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
                >
                  Message
                  <span class="text-red-500" aria-hidden="true">*</span>
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows="5"
                  required
                  class="block w-full px-4 py-3 bg-gray-50 dark:bg-dark-700 border border-gray-200 dark:border-gray-700 rounded-xl focus:border-primary-500 focus:ring-2 focus:ring-primary-500 focus:ring-opacity-50 transition-colors duration-300 text-gray-900 dark:text-gray-300"
                  placeholder="Your message here..."
                  aria-required="true"
                ></textarea>
              </div>

              <!-- Submit Button -->
              <button
                type="submit"
                class="w-full inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-primary-500 to-secondary-500 text-white rounded-xl font-semibold hover:from-primary-600 hover:to-secondary-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500 transition-all duration-300 transform hover:scale-[1.02] shadow-lg hover:shadow-xl"
              >
                Send Message
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
                    d="M14 5l7 7m0 0l-7 7m7-7H3"
                  />`)}
                </svg>
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  `;
};

export default ContactSection;
