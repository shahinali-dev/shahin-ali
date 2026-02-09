export interface Technology {
  name: string;
  bgColor: string;
  textColor: string;
}

export interface ProjectFeature {
  title: string;
  description: string;
  icon: string;
}

export interface ProjectDetail {
  id: string;
  title: string;
  shortDescription: string;
  fullDescription: string;
  image: string;
  imageAlt: string;
  gradientColors: string;
  isLive: boolean;
  liveUrl?: string;
  githubUrl?: string;
  technologies: Technology[];
  features: ProjectFeature[];
  overview: string;
  challenges?: string;
  learnings?: string;
  gallery?: string[];
}

export const projectsData: ProjectDetail[] = [
  {
    id: "dishdynamo",
    title: "DishDynamo",
    shortDescription:
      "A modern restaurant management system with real-time ordering, menu customization, and user authentication.",
    fullDescription:
      "DishDynamo is a comprehensive restaurant management solution that streamlines the entire dining experience. From order placement to payment processing, this platform provides restaurants with powerful tools to manage their operations efficiently while offering customers a seamless ordering experience.",
    image: "./images/dish-dynamo-home.png",
    imageAlt: "Screenshot of DishDynamo Restaurant App",
    gradientColors: "from-primary-500 to-secondary-500",
    isLive: true,
    liveUrl: "https://dishdynamo-c649f.web.app",
    githubUrl: "https://github.com/shahinali-dev/Dish-Dynamo-Client",
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
        name: "Tailwind CSS",
        bgColor: "bg-teal-100 dark:bg-teal-900/30",
        textColor: "text-teal-600 dark:text-teal-400",
      },
      {
        name: "Node.js",
        bgColor: "bg-green-100 dark:bg-green-900/30",
        textColor: "text-green-600 dark:text-green-400",
      },
      {
        name: "Express",
        bgColor: "bg-gray-200 dark:bg-dark-700",
        textColor: "text-gray-700 dark:text-gray-300",
      },
    ],
    features: [
      {
        title: "Real-time Ordering",
        description:
          "Customers can place orders in real-time with instant updates to the kitchen dashboard.",
        icon: `<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>`,
      },
      {
        title: "Menu Customization",
        description:
          "Restaurant owners can easily update menu items, prices, and availability through an intuitive dashboard.",
        icon: `<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path>`,
      },
      {
        title: "Secure Payments",
        description:
          "Integrated Stripe payment gateway for secure and seamless payment processing.",
        icon: `<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z"></path>`,
      },
      {
        title: "User Authentication",
        description:
          "Firebase-based authentication system with email/password and social login options.",
        icon: `<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path>`,
      },
      {
        title: "Order Tracking",
        description:
          "Customers can track their order status from preparation to delivery in real-time.",
        icon: `<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"></path>`,
      },
      {
        title: "Responsive Design",
        description:
          "Fully responsive design that works seamlessly across all devices and screen sizes.",
        icon: `<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z"></path>`,
      },
    ],
    overview:
      "DishDynamo revolutionizes restaurant management by providing a complete digital solution for modern dining establishments. The platform seamlessly integrates ordering, payment processing, and menu management into a single, user-friendly interface. Built with cutting-edge technologies like React and Firebase, it ensures high performance and reliability while maintaining an exceptional user experience.",
    challenges:
      "One of the main challenges was implementing real-time synchronization between the customer interface and the kitchen dashboard. We solved this using Firebase Realtime Database, which provides instant updates across all connected devices. Another challenge was ensuring secure payment processing, which was addressed by integrating Stripe's robust payment infrastructure.",
    learnings:
      "This project deepened my understanding of real-time data synchronization, payment gateway integration, and the importance of creating intuitive user interfaces for both customers and business owners. I also gained valuable experience in managing complex state in React applications and implementing secure authentication flows.",
  },
  {
    id: "contesthub",
    title: "ContestHub",
    shortDescription:
      "A contest management platform with real-time updates, secure payments, and multiple user roles.",
    fullDescription:
      "ContestHub is a comprehensive platform designed to streamline the organization and participation in various contests and competitions. The platform supports multiple user roles including participants, organizers, and administrators, each with their own tailored interface and capabilities.",
    image: "./images/contest-hub.png",
    imageAlt: "Screenshot of ContestHub Platform",
    gradientColors: "from-secondary-500 to-accent-500",
    isLive: true,
    liveUrl: "https://contesthub-e5119.web.app",
    githubUrl: "https://github.com/shahinali-dev/Contest-Hub-Client",
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
      {
        name: "Express",
        bgColor: "bg-gray-200 dark:bg-dark-700",
        textColor: "text-gray-700 dark:text-gray-300",
      },
      {
        name: "Tailwind CSS",
        bgColor: "bg-teal-100 dark:bg-teal-900/30",
        textColor: "text-teal-600 dark:text-teal-400",
      },
    ],
    features: [
      {
        title: "Multi-Role System",
        description:
          "Support for participants, organizers, and administrators with role-based access control.",
        icon: `<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"></path>`,
      },
      {
        title: "Real-time Updates",
        description:
          "Live updates for contest status, participant entries, and results announcements.",
        icon: `<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path>`,
      },
      {
        title: "Secure Payments",
        description:
          "Entry fee processing and prize distribution through secure payment gateways.",
        icon: `<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"></path>`,
      },
      {
        title: "Contest Creation",
        description:
          "Organizers can create and manage contests with custom rules and prize structures.",
        icon: `<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v16m8-8H4"></path>`,
      },
      {
        title: "Submission Management",
        description:
          "Participants can submit entries and track their submission status in real-time.",
        icon: `<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path>`,
      },
      {
        title: "Leaderboard System",
        description:
          "Dynamic leaderboards showing participant rankings and scores.",
        icon: `<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"></path>`,
      },
    ],
    overview:
      "ContestHub serves as a centralized platform for hosting and participating in various types of contests. Whether it's coding challenges, design competitions, or creative writing contests, the platform provides all the necessary tools for organizers to run successful events and for participants to showcase their skills. The system is built with scalability in mind, supporting contests of any size.",
    challenges:
      "Implementing a robust role-based access control system was challenging, as different user types needed distinct permissions and interfaces. We utilized JWT tokens for secure authentication and implemented middleware to verify user roles. Another challenge was handling concurrent submissions during popular contests, which we addressed through optimized database queries and efficient state management.",
    learnings:
      "This project taught me valuable lessons about building multi-tenant applications, implementing secure authentication systems, and managing complex user permissions. I also gained experience in optimizing database queries for high-traffic scenarios and implementing real-time features without compromising application performance.",
  },
  {
    id: "codebuysell",
    title: "CodeBuySell",
    shortDescription:
      "A marketplace for developers to buy and sell code snippets, templates, and digital assets.",
    fullDescription:
      "CodeBuySell is a specialized marketplace that connects developers who create reusable code components with those who need them. The platform facilitates the buying and selling of code snippets, templates, UI components, and other digital development assets, creating a thriving ecosystem for code commerce.",
    image: "./images/code-buysell.png",
    imageAlt: "Screenshot of CodeBuySell Marketplace",
    gradientColors: "from-accent-500 to-primary-500",
    isLive: true,
    liveUrl: "https://codebuysell.com",
    githubUrl: "https://github.com/shahinali-dev/Code-BuySell-Frontend",
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
      {
        name: "Prisma",
        bgColor: "bg-emerald-100 dark:bg-emerald-900/30",
        textColor: "text-emerald-600 dark:text-emerald-400",
      },
      {
        name: "TypeScript",
        bgColor: "bg-yellow-100 dark:bg-yellow-900/30",
        textColor: "text-yellow-600 dark:text-yellow-400",
      },
    ],
    features: [
      {
        title: "Code Marketplace",
        description:
          "Browse and purchase high-quality code snippets, templates, and components from verified sellers.",
        icon: `<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"></path>`,
      },
      {
        title: "Seller Dashboard",
        description:
          "Comprehensive dashboard for sellers to manage listings, track sales, and view analytics.",
        icon: `<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"></path>`,
      },
      {
        title: "Secure Transactions",
        description:
          "Stripe-powered payment processing with escrow protection for buyers and sellers.",
        icon: `<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path>`,
      },
      {
        title: "Code Preview",
        description:
          "Interactive code previews with syntax highlighting and live demos before purchase.",
        icon: `<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"></path>`,
      },
      {
        title: "Rating & Reviews",
        description:
          "Community-driven rating system to help buyers make informed decisions.",
        icon: `<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"></path>`,
      },
      {
        title: "License Management",
        description:
          "Flexible licensing options including single-use, multi-use, and unlimited licenses.",
        icon: `<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path>`,
      },
    ],
    overview:
      "CodeBuySell addresses the growing need for a dedicated marketplace where developers can monetize their code creations and find ready-made solutions for their projects. The platform ensures quality through a verification process for sellers and provides buyers with the confidence of purchasing tested, documented code. Built with Next.js for optimal performance and SEO, it offers a seamless experience for both buyers and sellers.",
    challenges:
      "The biggest challenge was implementing a secure file delivery system that prevents unauthorized downloads while ensuring legitimate buyers have reliable access to their purchases. We implemented a token-based download system with expiring links and IP verification. Additionally, handling different licensing models required careful database schema design and transaction management.",
    learnings:
      "This project enhanced my understanding of e-commerce platforms, digital asset management, and complex payment flows. I learned about implementing secure file delivery systems, managing user permissions for digital products, and creating effective search and filtering mechanisms for technical content. Working with Next.js also deepened my knowledge of server-side rendering and optimization techniques.",
  },
];

export const getFeaturedProjects = (): ProjectDetail[] => {
  return projectsData;
};

export const getProjectById = (id: string): ProjectDetail | undefined => {
  return projectsData.find((project) => project.id === id);
};
