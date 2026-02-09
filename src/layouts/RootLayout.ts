import { html } from "hono/html";
import Footer from "../components/footer/Footer";
import Navbar from "../components/navbar/Navbar";

interface RootLayoutProps {
  title?: string;
  children: any;
  currentPage?: string;
}

const RootLayout = (props: RootLayoutProps) => html`
  <!DOCTYPE html>
  <html lang="en">
    <head>
      <meta charset="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />

      <title>${props.title || "Shahin Ali - Full Stack Developer"}</title>

      <!-- Primary Meta Tags -->
      <meta
        name="description"
        content="Shahin Ali is a Full Stack Developer with 1.5+ years of experience specializing in React, Next.js, TypeScript, Node.js, Express, NestJS, PostgreSQL, and MongoDB. Specialized in building scalable web applications and modern user interfaces. Available for new opportunities."
      />
      <meta name="author" content="Shahin Ali" />
      <meta name="robots" content="index, follow" />
      <meta name="googlebot" content="index, follow" />
      <meta name="language" content="English" />
      <meta name="revisit-after" content="7 days" />

      <!-- Keywords -->
      <meta
        name="keywords"
        content="full stack developer, frontend developer, backend developer, react developer, javascript developer, typescript developer, mern stack developer, node.js developer, next.js developer, mongodb developer, redis developer, nest.js developer, ui/ux specialist, react, node.js, express.js, nest.js, next.js, socket.io, postgresql, redis, javascript, typescript, redux, tailwind css, rest api, docker, ci/cd, react expert, next.js expert, express.js expert, frontend expert, backend expert, web development, shahin ali, shahinali.dev, shahinali-dev, shahin-ali.dev, shahin-ali, full stack web developer, full stack software engineer, web application developer, software developer, software engineer, web developer, frontend engineer, backend engineer, mern stack engineer, javascript engineer, typescript engineer, react engineer, node.js engineer, next.js engineer, mongodb engineer, postgresql engineer, redis engineer, nest.js engineer, ui/ux developer, ui/ux engineer, web solutions, scalable web applications, modern user interfaces"
      />

      <!-- Canonical URL -->
      <link
        rel="canonical"
        href="https://shahinali-dev.github.io/shahin-ali/"
      />
      <meta
        name="canonical"
        content="https://shahinali-dev.github.io/shahin-ali/"
      />

      <!-- Open Graph / Facebook -->
      <meta property="og:type" content="website" />
      <meta
        property="og:url"
        content="https://shahinali-dev.github.io/shahin-ali/"
      />
      <meta
        property="og:title"
        content="Shahin Ali - Full Stack Developer | Frontend Developer | Backend Developer"
      />
      <meta
        property="og:description"
        content="Full Stack Developer with 1.5+ years of experience specializing in React, Next.js, TypeScript, Node.js, Express, NestJS, PostgreSQL, and MongoDB. Specialized in building scalable web applications and modern user interfaces."
      />
      <meta
        property="og:image"
        content="https://shahinali-dev.github.io/shahin-ali/assets/images/shahin-ali.jpeg"
      />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta
        property="og:image:alt"
        content="Shahin Ali - Full Stack Developer Portfolio"
      />
      <meta property="og:site_name" content="Shahin Ali Portfolio" />
      <meta property="og:locale" content="en_US" />

      <!-- Twitter -->
      <meta property="twitter:card" content="summary_large_image" />
      <meta
        property="twitter:url"
        content="https://shahinali-dev.github.io/shahin-ali/"
      />
      <meta
        property="twitter:title"
        content="Shahin Ali - Full Stack Developer | Frontend Developer | Backend Developer"
      />
      <meta
        property="twitter:description"
        content="Full Stack Developer with 1.5+ years of experience specializing in React, Next.js, TypeScript, Node.js, Express, NestJS, PostgreSQL, and MongoDB. Specialized in building scalable web applications and modern user interfaces."
      />
      <meta
        property="twitter:image"
        content="https://shahinali-dev.github.io/shahin-ali/assets/images/shahin-ali.jpeg"
      />
      <meta
        property="twitter:image:alt"
        content="Shahin Ali - Full Stack Developer Portfolio"
      />
      <meta property="twitter:creator" content="@shahinali_dev" />

      <!-- Additional Meta Tags -->
      <meta
        name="theme-color"
        content="#ffffff"
        media="(prefers-color-scheme: light)"
      />
      <meta
        name="theme-color"
        content="#1a1a1a"
        media="(prefers-color-scheme: dark)"
      />
      <meta name="msapplication-TileColor" content="#4f46e5" />
      <meta name="application-name" content="Shahin Ali Portfolio" />
      <meta name="apple-mobile-web-app-title" content="Shahin Ali Portfolio" />
      <meta name="apple-mobile-web-app-capable" content="yes" />
      <meta name="apple-mobile-web-app-status-bar-style" content="default" />

      <!-- Person Structured Data -->
      <script type="application/ld+json">
        {
          "@context": "https://schema.org",
          "@type": "Person",
          "name": "Shahin Ali",
          "alternateName": "Shahin",
          "description": "Full Stack Developer with 1.5+ years of experience specializing in React, Next.js, TypeScript, Node.js, Express, NestJS, PostgreSQL, and MongoDB. Skilled in building scalable web applications and modern user interfaces.",
          "url": "https://shahinali.dev",
          "image": "https://shahinali-dev.github.io/shahin-ali/assets/images/profile.jpg",
          "sameAs": [
            "https://github.com/shahinali-dev",
            "https://www.linkedin.com/in/shahinali-dev/",
            "https://twitter.com/shahinali_dev",
            "https://calendly.com/shahinali-dev/30min"
          ],
          "jobTitle": "Full Stack Developer",
          "worksFor": {
            "@type": "Organization",
            "name": "Minimatic Solutions",
            "url": "https://minimaticsolutions.com/"
          },
          "alumniOf": {
            "@type": "EducationalOrganization",
            "name": "Rajshahi College",
            "url": "https://rc.gov.bd/"
          },
          "address": {
            "@type": "PostalAddress",
            "addressLocality": "Rajshahi",
            "addressCountry": "Bangladesh"
          },
          "email": "shahinali.dev@gmail.com",
          "telephone": "+8801723981861",
          "knowsAbout": [
            "React",
            "Next.js",
            "TypeScript",
            "JavaScript",
            "Node.js",
            "Express.js",
            "NestJS",
            "MongoDB",
            "PostgreSQL",
            "Redis",
            "Docker",
            "CI/CD",
            "Tailwind CSS",
            "REST API",
            "Web Development",
            "Frontend Development",
            "Backend Development"
          ],
          "hasOccupation": {
            "@type": "Occupation",
            "name": "Full Stack Developer",
            "occupationLocation": {
              "@type": "Place",
              "name": "Remote / Rajshahi, Bangladesh"
            },
            "skills": [
              "React Development",
              "Next.js Development",
              "TypeScript Development",
              "Node.js Development",
              "Express.js Development",
              "NestJS Development",
              "MongoDB Development",
              "PostgreSQL Development",
              "Redis Management",
              "Docker",
              "CI/CD",
              "Tailwind CSS",
              "REST API Development",
              "Web Application Architecture"
            ]
          }
        }
      </script>

      <!-- Website Structured Data -->
      <script type="application/ld+json">
        {
          "@context": "https://schema.org",
          "@type": "WebSite",
          "name": "Shahin Ali Portfolio",
          "alternateName": "Shahin Ali Portfolio",
          "url": "https://shahinali-dev.github.io/shahin-ali/",
          "description": "Professional portfolio of Shahin Ali, a Full Stack Developer with 1.5+ years of experience specializing in React, Next.js, TypeScript, Node.js, Express, NestJS, PostgreSQL, and MongoDB. Specialized in building scalable web applications and modern user interfaces.",
          "inLanguage": "en-US",
          "author": {
            "@type": "Person",
            "name": "Shahin Ali"
          },
          "potentialAction": {
            "@type": "SearchAction",
            "target": "https://shahinali-dev.github.io/shahin-ali/?q={search_term_string}",
            "query-input": "required name=search_term_string"
          }
        }
      </script>

      <!-- Professional Service Structured Data -->
      <script type="application/ld+json">
        {
          "@context": "https://schema.org",
          "@type": "ProfessionalService",
          "name": "Shahin Ali - Full Stack Developer Services",
          "description": "Professional Full Stack Developer with 1.5+ years of experience specializing in React, Next.js, TypeScript, Node.js, Express, NestJS, PostgreSQL, and MongoDB. Specialized in building scalable web applications and modern user interfaces. Offering services in backend development, frontend development, full-stack development, API development, microservices architecture, database design, cloud-native solutions, and DevOps services.",
          "provider": {
            "@type": "Person",
            "name": "Shahin Ali"
          },
          "areaServed": "Worldwide",
          "availableLanguage": "English",
          "serviceType": [
            "Backend Development",
            "Frontend Development",
            "Full-Stack Development",
            "API Development",
            "Microservices Architecture",
            "Database Design",
            "Cloud-Native Solutions",
            "DevOps Services"
          ],
          "url": "https://shahinali-dev.github.io/shahin-ali/"
        }
      </script>

      <!-- Favicon -->
      <link
        rel="apple-touch-icon"
        sizes="180x180"
        href="/assets/favicon/apple-touch-icon.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="32x32"
        href="/assets/favicon/favicon-32x32.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="16x16"
        href="/assets/favicon/favicon-16x16.png"
      />
      <link rel="manifest" href="/assets/favicon/site.webmanifest" />

      <!-- FontAwesome CSS -->
      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css"
        integrity="sha512-iecdLmaskl7CVkqkXNQ/ZH/XLlvWZOJyj7Yy7tcenmpD1ypASozpmT/E0iPtmFIB46ZmdtAc9eNBvH0H/ZpiBw=="
        crossorigin="anonymous"
        referrerpolicy="no-referrer"
      />

      <!-- Tailwind CSS -->
      <link href="/css/output.css" rel="stylesheet" />
    </head>

    <body
      class="font-sans min-h-screen bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100"
    >
      <!-- Skip to main content for accessibility -->
      <a
        href="#main-content"
        class="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2 focus:bg-indigo-600 focus:text-white focus:rounded-lg"
      >
        Skip to main content
      </a>

      <!-- Header/Navbar -->
      <header>${Navbar({ currentPage: props.currentPage })}</header>

      <!-- Main Content -->
      <main id="main-content" role="main">${props.children}</main>

      <!-- Footer -->
      ${Footer()}

      <!-- Scripts -->
      <script src="/js/index.js" type="module"></script>
    </body>
  </html>
`;

export default RootLayout;
