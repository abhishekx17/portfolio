import quickemsImg from "../assets/projects/quickems.png";
import veloraImg from "../assets/projects/velora.png";
import shopnestImg from "../assets/projects/shopnest.png";
import weatherscopeImg from "../assets/projects/weatherscope.png";

export const personalInfo = {
  name: "Abhishek",
  fullName: "Abhishek Kumar",
  title: "Full-Stack Web Developer",
  tagline:
    "Full-stack web developer building performant applications with React, Node.js, Express, MongoDB, and TypeScript.",
  email: "abhishek.0x17@gmail.com",
  location: "India",
  github: "https://github.com/abhishekx17",
  linkedin: "https://www.linkedin.com/in/abhishek-kumar-805194380/",
  resumeUrl: "/resume.pdf",
  availability: "Available for Software Engineering Roles",

  // Education details
  degree: "B.Tech in Computer Science & Engineering",
  timeline: "2022 – 2026",
  college: "Sri Sukhmani Institute of Engineering and Technology (PTU)",
  university: "IK Gujral Punjab Technical University (PTU)",
};

export const resumeDetails = {
  fileName: "Abhishek_Kumar_Resume.pdf",
  fileSize: "Official Resume • PDF",
  resumeUrl: "/resume.pdf",
  candidateName: "Abhishek Kumar",
  title: "Full-Stack Web Developer",
  education: "B.Tech CSE (2022–2026)",
  college: "Sri Sukhmani Institute of Eng. & Tech (PTU)",
  location: "India",
  primarySkills: ["React", "Node.js", "Express.js", "MongoDB", "TypeScript", "Tailwind CSS"],
  highlights: [
    "Full-Stack Web Applications (MERN & TypeScript)",
    "RESTful API & JWT Authentication Architecture",
    "Database Modeling & Cloud Services Integration",
    "Responsive, Accessible User Interface Design",
  ],
};

export const aboutParagraphs = [
  "I'm a CS undergrad (2022–2026) who spends most of his time building things end-to-end — from database schema to the UI someone actually clicks on. I care about code that's easy to read six months later, not just code that works today.",
  "Right now I'm looking for opportunities where I can keep building real products and leveling up alongside a team.",
];

export const techStack = [
  {
    name: "React",
    category: "Frontend",
    description: "Component-driven UIs, state management, custom hooks, and Framer Motion.",
    iconKey: "react",
    level: "Expert",
  },
  {
    name: "Node.js",
    category: "Backend",
    description: "Event-driven backend services and asynchronous API runtimes.",
    iconKey: "node",
    level: "Advanced",
  },
  {
    name: "MongoDB",
    category: "Database",
    description: "Document modeling, aggregation pipelines, and cloud database integration.",
    iconKey: "mongo",
    level: "Advanced",
  },
  {
    name: "Express.js",
    category: "Backend",
    description: "RESTful API routes, middleware validation, and JWT authentication.",
    iconKey: "express",
    level: "Advanced",
  },
  {
    name: "TypeScript",
    category: "Language",
    description: "Static typing for scalable full-stack application codebases.",
    iconKey: "typescript",
    level: "Intermediate",
  },
  {
    name: "Tailwind CSS",
    category: "Styling",
    description: "Utility-first styling system for responsive web application layouts.",
    iconKey: "tailwind",
    level: "Expert",
  },
  {
    name: "Git & GitHub",
    category: "Tools",
    description: "Version control, feature branching, and collaborative repositories.",
    iconKey: "git",
    level: "Advanced",
  },
  {
    name: "REST APIs",
    category: "Backend",
    description: "Designing, documenting, and integrating JSON HTTP endpoints.",
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
      "Employee management platform with role-based auth, payroll automation, and leave workflows.",
    description:
      "QuickEMS simplifies workforce administration through role-based access control (Admin & Employee), automated payslip generation, attendance logs, and an analytical dashboard built on the MERN stack.",
    image: quickemsImg,
    highlights: ["Payroll System", "JWT Auth"],
    tags: ["React", "Node.js", "MongoDB"],
    github: "https://github.com/abhishekx17/QuickEMS",
    live: "https://quick-ems-iota.vercel.app/login",
  },
  {
    id: "02",
    title: "Velora",
    domainUrl: "velora-rho-one.vercel.app",
    overview:
      "E-commerce application with product catalog, cart state, Cloudinary uploads, and payment gateway.",
    description:
      "Velora is an e-commerce platform offering product search and filtering, cart management, Cloudinary media hosting, Razorpay payment processing, and an admin management portal.",
    image: veloraImg,
    highlights: ["Razorpay Payments", "Cloudinary Hosting"],
    tags: ["React", "Node.js", "MongoDB"],
    github: "https://github.com/abhishekx17/E-commerce",
    live: "https://velora-rho-one.vercel.app/",
  },
];

export const navLinks = [
  { label: "About", href: "#about" },
  { label: "Tech Stack", href: "#stack" },
  { label: "Projects", href: "#projects" },
  { label: "Activity", href: "#activity" },
  { label: "Contact", href: "#contact" },
];
