# Shahin Ali - Full Stack Developer Portfolio

![Portfolio Preview](/images/shahin-ali.jpeg)

A modern, high-performance portfolio website built with Hono.js and deployed on Cloudflare Workers. Features an elegant, interactive design with dark/light mode support, showcasing my skills, projects, education, and technical blog.

## 🌟 Features

- **Blazing Fast Performance**: Server-side rendered with Hono.js on Cloudflare's edge network
- **Responsive Design**: Fully responsive layout that works seamlessly across all devices
- **Dark/Light Mode**: Dynamic theme switching with smooth transitions
- **Interactive UI Elements**:
  - Animated skill orbit with technology icons
  - Smooth scrolling animations
  - Hover effects and transitions
  - Glass-morphism design elements
- **Blog Section**: Technical articles and insights
- **Education Timeline**: Academic background and certifications

## 🛠 Tech Stack

### Backend Framework

- **Hono.js**: Ultra-fast web framework for Cloudflare Workers
- **Cloudflare Workers**: Serverless edge computing platform

### Frontend

- HTML5 (Server-side rendered)
- Tailwind CSS (with custom animations and utilities)
- JavaScript (Vanilla JS for client-side interactions)
- Font Awesome Icons

### Deployment

- Cloudflare Workers
- Cloudflare Pages (for static assets)

## 📋 Key Features & Sections

#### 🏠 Hero Section

- Modern gradient background
- Professional introduction
- Smooth scroll indicator

#### 👨‍💻 About Section

- Professional profile
- Core tech stack
- Development philosophy
- Real-time applications showcase

#### 💼 Experience Section

- Current role details
- Professional achievements
- Technology expertise

#### 🎓 Education Section

- Academic qualifications
- Certifications
- Training and courses

#### 🎯 Skills Section

- Interactive rotating technology orbit
- Categorized skill display:
  - Frontend Development
  - Backend Development
  - API & Integration
  - Database & Caching
  - DevOps & Cloud
  - Tools & Others

#### 🚀 Projects Section

- Featured projects showcase
- Project descriptions and technologies used
- Live demo and code links

#### 📝 Blog Section

- Technical articles
- Development insights
- Tutorial and guides
- Best practices

#### 📞 Contact Section

- Contact form
- Social media links
- Professional profiles

## 📁 Project Structure

```
├── src/
│   ├── index.ts              # Main Hono application entry point
│   ├── layouts/              # Page layouts and templates
│   ├── pages/                # Individual page components
│   ├── components/           # Reusable UI components
│   └── data/                 # Static data (projects, skills, education, blogs)
├── public/
│   ├── css/
│   │   ├── input.css         # Tailwind source
│   │   └── output.css        # Compiled CSS
│   ├── favicon/              # Favicon files
│   ├── icons/                # Icon assets
│   ├── images/               # Image assets
│   ├── js/
│   │   ├── cursor.js
│   │   ├── form.js
│   │   ├── index.js
│   │   ├── loading.js
│   │   ├── mobile-menu.js
│   │   ├── navbar.js
│   │   ├── parallax.js
│   │   ├── preload.js
│   │   ├── quick-reply.js
│   │   ├── scroll-reveal.js
│   │   ├── skills.js
│   │   └── theme.js
│   └── resume/               # Resume/CV files
├── wrangler.toml             # Cloudflare Workers configuration
└── package.json
```

## 🎨 Design Features

- **Glass-morphism Effects**: Modern, translucent UI elements
- **Gradient Backgrounds**: Subtle, professional color schemes
- **Animated Elements**:
  - Floating animations
  - Pulse effects
  - Rotating skill orbit
  - Scroll reveal animations
- **Interactive Components**:
  - Hoverable skill cards
  - Responsive navigation
  - Smooth transitions
  - Dynamic content loading

## 💻 Technologies & Tools

### Frontend

- React.js
- Next.js
- JavaScript
- TypeScript
- Tailwind CSS
- Redux

### Backend

- Node.js
- Express.js
- NestJS
- **Hono.js**
- Socket.IO

### Databases & Storage

- MongoDB
- PostgreSQL
- Redis
- Prisma ORM

### DevOps & Deployment

- **Cloudflare Workers**
- Docker
- Git
- Wrangler CLI

### Development Tools

- VS Code
- Postman
- npm/yarn

## 🚀 Getting Started

### Prerequisites

- Node.js (v18 or higher)
- npm or yarn
- Wrangler CLI (for Cloudflare Workers)

### Installation

1. Clone the repository:

```bash
git clone https://github.com/shahinali-dev/shahin-ali.git
cd shahin-ali
```

2. Install dependencies:

```bash
npm install
```

3. Install Wrangler CLI (if not already installed):

```bash
npm install -g wrangler
```

4. Login to Cloudflare:

```bash
wrangler login
```

### Development

1. Start the development server:

```bash
npm run dev
```

2. For Tailwind CSS development:

```bash
npm run tailwind:dev
```

3. The site will be available at `http://localhost:8787`

### Deployment

1. Build the project:

```bash
npm run build
```

2. Deploy to Cloudflare Workers:

```bash
npm run deploy
```

Or using Wrangler directly:

```bash
wrangler deploy
```

## 📱 Responsive Design

The portfolio is fully responsive and optimized for:

- Desktop screens (1024px and above)
- Tablets (768px to 1023px)
- Mobile devices (320px to 767px)

## 🌗 Theme Support

- Supports both light and dark modes
- Automatically detects system preference
- Manual theme toggle option
- Smooth transition between themes
- Theme persistence across sessions

## ⚡ Performance

- **Edge Computing**: Deployed on Cloudflare's global edge network
- **Fast Response Times**: Sub-100ms response times globally
- **Optimized Assets**: Compressed and cached static assets
- **Minimal JavaScript**: Vanilla JS for optimal performance

## 🔍 SEO & Accessibility

- Semantic HTML structure
- ARIA labels and roles
- Alt text for images
- Meta tags for SEO optimization
- Keyboard navigation support
- Screen reader compatible

## 📝 Available Scripts

```bash
npm run dev          # Start development server
npm run build        # Build for production
npm run deploy       # Deploy to Cloudflare Workers
npm run tailwind:watch # Watch Tailwind CSS changes
npm run tailwind:build # Build Tailwind CSS for production
```

## 🤝 Contributing

Feel free to fork this project and customize it for your own use. If you find any bugs or have suggestions for improvements, please open an issue or submit a pull request.

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 📞 Contact

- **Website**: [shahinali.dev](https://shahin-ali.prochesta.workers.dev)
- **GitHub**: [@shahinali-dev](https://github.com/shahinali-dev)
- **LinkedIn**: [Shahin Ali](https://www.linkedin.com/in/shahinali-dev)
- **Email**: shahinali.dev@gmail.com

## 🙏 Acknowledgments

- Built with [Hono.js](https://hono.dev/)
- Deployed on [Cloudflare Workers](https://workers.cloudflare.com/)
- Styled with [Tailwind CSS](https://tailwindcss.com/)
- Icons from [Font Awesome](https://fontawesome.com/)

---

⚡ Built with Hono.js & deployed on Cloudflare Workers by **Shahin Ali**
