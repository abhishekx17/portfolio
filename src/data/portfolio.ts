import quickemsImg from "../assets/projects/quickems.png";
import veloraImg from "../assets/projects/velora.png";
import shopnestImg from "../assets/projects/shopnest.png";
import weatherscopeImg from "../assets/projects/weatherscope.png";

export const personalInfo = {
  name: "Abhishek",
  fullName: "Abhishek Kumar",
  title: "MERN Stack Developer",
  tagline:
    "Building high-performance full-stack web applications with clean code, modern UI aesthetics, and scalable backend architecture.",
  email: "abhishek.0x17@gmail.com",
  location: "India",
  github: "https://github.com/abhishekx17",
  linkedin: "https://www.linkedin.com/in/abhishek-kumar-805194380/",
  resumeUrl: "#",
  availability: "Available for Projects & Roles",

  // Education details
  degree: "B.Tech in Computer Science & Engineering",
  timeline: "2022 – 2026",
  college: "Sri Sukhmani Institute of Engineering and Technology (PTU)",
  university: "IK Gujral Punjab Technical University (PTU)",
};

export const aboutParagraphs = [
  "I am a B.Tech Computer Science & Engineering student (2022–2026) at Sri Sukhmani Institute of Engineering and Technology (PTU) with a strong passion for full-stack web engineering.",
  "Specializing in the MERN stack (MongoDB, Express.js, React, Node.js) and TypeScript, I build performant web applications, clean API architectures, and responsive user interfaces.",
];

export const techStack = [
  {
    name: "React",
    category: "Frontend",
    description: "Component UIs, State Management, Custom Hooks, & Framer Motion.",
    iconKey: "react",
    level: "Expert",
  },
  {
    name: "Node.js",
    category: "Backend",
    description: "Event-driven backends, async event loops, & server APIs.",
    iconKey: "node",
    level: "Advanced",
  },
  {
    name: "MongoDB",
    category: "Database",
    description: "NoSQL data modeling, aggregation pipelines, & Atlas cloud.",
    iconKey: "mongo",
    level: "Advanced",
  },
  {
    name: "Express.js",
    category: "Backend",
    description: "RESTful API design, middleware architecture, & JWT authentication.",
    iconKey: "express",
    level: "Advanced",
  },
  {
    name: "TypeScript",
    category: "Language",
    description: "Type-safe codebases for scalable full-stack web apps.",
    iconKey: "typescript",
    level: "Intermediate",
  },
  {
    name: "Tailwind CSS",
    category: "Styling",
    description: "Utility-first styling, dark theme systems, & responsive UI.",
    iconKey: "tailwind",
    level: "Expert",
  },
  {
    name: "Git & GitHub",
    category: "Tools",
    description: "Version control, branching workflows, & CI/CD basics.",
    iconKey: "git",
    level: "Advanced",
  },
  {
    name: "REST APIs",
    category: "Backend",
    description: "Designing, documenting, & consuming HTTP JSON endpoints.",
    iconKey: "rest",
    level: "Expert",
  },
];

export const projects = [
  {
    id: "01",
    title: "QuickEMS",
    domainUrl: "quick-ems-iota.vercel.app",
    overview:
      "HR & Employee Management platform with automated payroll, attendance tracking, and admin dashboard.",
    description:
      "QuickEMS streamlines workforce management with role-based auth (Admin/Employee), leave approval workflows, automatic payslip generation, real-time metrics, and attendance tracking built on MERN stack.",
    image: quickemsImg,
    highlights: ["HR Analytics Dashboard", "JWT Auth", "Payroll System", "Leave Approvals"],
    tags: ["React", "Node.js", "Express.js", "MongoDB", "JWT", "Tailwind CSS"],
    github: "https://github.com/abhishekx17/QuickEMS",
    live: "https://quick-ems-iota.vercel.app/login",
  },
  {
    id: "02",
    title: "Velora",
    domainUrl: "velora-rho-one.vercel.app",
    overview:
      "Full-stack MERN e-commerce platform with Cloudinary image upload, Razorpay payments, and admin panel.",
    description:
      "Velora provides a seamless e-commerce storefront with product search, category filter, cart & wishlist management, Cloudinary image hosting, Razorpay payment gateway integration, and a seller admin portal.",
    image: veloraImg,
    highlights: ["Razorpay Gateway", "Cloudinary Uploads", "Admin Panel", "Cart & Wishlist"],
    tags: ["React", "Node.js", "Express", "MongoDB", "Tailwind CSS", "Razorpay"],
    github: "https://github.com/abhishekx17/E-commerce",
    live: "https://velora-rho-one.vercel.app/",
  },
  {
    id: "03",
    title: "ShopNest",
    domainUrl: "shopnest-demo.vercel.app",
    overview:
      "Modern e-commerce platform with reactive cart management, Stripe checkout, and order tracking.",
    description:
      "Built with Redux Toolkit for state management, ShopNest delivers real-time cart updates, secure multi-currency Stripe payment processing, and responsive product filter layouts.",
    image: shopnestImg,
    highlights: ["Stripe Checkout", "Redux State", "Order Tracking", "Responsive Layout"],
    tags: ["React", "Redux", "Node.js", "Stripe", "Tailwind CSS"],
    github: "https://github.com/abhishekx17",
    live: "https://shopnest-demo.vercel.app",
  },
  {
    id: "04",
    title: "WeatherScope",
    domainUrl: "weatherscope-demo.vercel.app",
    overview:
      "Location-aware weather app delivering 7-day forecast metrics, interactive radar maps, and alerts.",
    description:
      "WeatherScope combines OpenWeather API with geolocation, featuring 7-day temperature forecast graphs, humidity radar metrics, and clean glassmorphism UI.",
    image: weatherscopeImg,
    highlights: ["7-Day Forecast", "Geolocation API", "Radar Metrics", "Glassmorphism"],
    tags: ["React", "TypeScript", "OpenWeather API", "Framer Motion"],
    github: "https://github.com/abhishekx17",
    live: "https://weatherscope-demo.vercel.app",
  },
];

export const navLinks = [
  { label: "About", href: "#about" },
  { label: "Tech Stack", href: "#stack" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];
