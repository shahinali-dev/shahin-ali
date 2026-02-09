import { Hono } from "hono";
import { Resend } from "resend";
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

const resend = new Resend(process.env.RESEND_API_KEY);

app.post("/api/contact", async (c) => {
  try {
    const body = await c.req.json();
    const { name, email, phone, subject, message } = body;

    // Validate required fields
    if (!name || !email || !subject || !message) {
      return c.json(
        { error: "Please fill in all required fields" },
        { status: 400 },
      );
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return c.json({ error: "Please provide a valid email" }, { status: 400 });
    }

    // Create HTML email template
    const htmlContent = `
      <!DOCTYPE html>
      <html>
        <head>
          <meta charset="UTF-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <style>
            body {
              font-family: 'Arial', sans-serif;
              line-height: 1.6;
              color: #333;
              background-color: #f4f4f4;
              margin: 0;
              padding: 0;
            }
            .container {
              max-width: 600px;
              margin: 20px auto;
              background: #ffffff;
              border-radius: 10px;
              overflow: hidden;
              box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
            }
            .header {
              background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
              padding: 30px;
              text-align: center;
            }
            .header h1 {
              color: #ffffff;
              margin: 0;
              font-size: 24px;
            }
            .content {
              padding: 30px;
            }
            .field {
              margin-bottom: 20px;
            }
            .field-label {
              font-weight: bold;
              color: #667eea;
              margin-bottom: 5px;
              display: block;
            }
            .field-value {
              background: #f8f9fa;
              padding: 12px;
              border-radius: 5px;
              border-left: 3px solid #667eea;
            }
            .message-box {
              background: #f8f9fa;
              padding: 15px;
              border-radius: 5px;
              border-left: 3px solid #764ba2;
              white-space: pre-wrap;
            }
            .footer {
              background: #f8f9fa;
              padding: 20px;
              text-align: center;
              font-size: 12px;
              color: #666;
            }
          </style>
        </head>
        <body>
          <div class="container">
            <div class="header">
              <h1>📬 New Contact Form Submission</h1>
            </div>
            <div class="content">
              <div class="field">
                <span class="field-label">👤 Name:</span>
                <div class="field-value">${name}</div>
              </div>
              
              <div class="field">
                <span class="field-label">📧 Email:</span>
                <div class="field-value">
                  <a href="mailto:${email}" style="color: #667eea; text-decoration: none;">
                    ${email}
                  </a>
                </div>
              </div>
              
              <div class="field">
                <span class="field-label">📱 Phone:</span>
                <div class="field-value">${phone}</div>
              </div>
              
              <div class="field">
                <span class="field-label">📌 Subject:</span>
                <div class="field-value">${subject}</div>
              </div>
              
              <div class="field">
                <span class="field-label">💬 Message:</span>
                <div class="message-box">${message}</div>
              </div>
            </div>
            <div class="footer">
              <p>This message was sent from your portfolio contact form.</p>
              <p>Received on ${new Date().toLocaleString("en-US", {
                dateStyle: "full",
                timeStyle: "short",
              })}</p>
            </div>
          </div>
        </body>
      </html>
    `;

    // Send email using Resend
    const data = await resend.emails.send({
      from: "Portfolio Contact <onboarding@resend.dev>", // Change this after domain verification
      to: ["shahinali.dev@gmail.com"], // Your email
      replyTo: email, // User's email for easy reply
      subject: `Portfolio Contact: ${subject}`,
      html: htmlContent,
    });

    return c.json({
      message: "Message sent successfully! I will get back to you soon.",
      id: data.id,
    });
  } catch (error) {
    console.error("Contact form error:", error);
    return c.json(
      { error: "Failed to send message. Please try again later." },
      { status: 500 },
    );
  }
});

export default app;
