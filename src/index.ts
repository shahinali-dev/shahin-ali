import { Hono } from "hono";
import { getProjectById } from "./data/ProjectData";
import RootLayout from "./layouts/RootLayout";
import AllProjectsPage from "./pages/AllProjectsPage";
import Home from "./pages/Home";
import ProjectDetailsPage from "./pages/Projectdetailspage";

const app = new Hono();

// Home page
app.get("/", (c) => {
  return c.html(
    RootLayout({
      title: "Shahin Ali - Full Stack Developer",
      children: Home(),
      currentPage: "home",
    }),
  );
});

// All projects page
app.get("/projects", (c) => {
  return c.html(
    RootLayout({
      title: "All Projects - Shahin Ali",
      children: AllProjectsPage(),
      currentPage: "projects",
    }),
  );
});

// Individual project details page
app.get("/projects/:id", (c) => {
  const projectId = c.req.param("id");
  const project = getProjectById(projectId);

  if (!project) {
    return c.html(
      RootLayout({
        title: "Project Not Found - Shahin Ali",
        children: `
          <section class="min-h-screen flex items-center justify-center bg-gray-50 dark:bg-dark-900">
            <div class="text-center px-4">
              <h1 class="text-6xl font-bold text-gray-900 dark:text-white mb-4">404</h1>
              <p class="text-xl text-gray-600 dark:text-gray-300 mb-8">Project not found</p>
              <a href="/projects" class="inline-flex items-center gap-2 px-6 py-3 bg-linear-to-r from-primary-500 to-secondary-500 text-white rounded-xl font-semibold hover:shadow-lg transition-all duration-300">
                <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 19l-7-7m0 0l7-7m-7 7h18"></path>
                </svg>
                <span>Back to Projects</span>
              </a>
            </div>
          </section>
        `,
      }),
    );
  }

  return c.html(
    RootLayout({
      title: `${project.title} - Projects - Shahin Ali`,
      children: ProjectDetailsPage({ project }),
      currentPage: "projects",
    }),
  );
});

export default app;
