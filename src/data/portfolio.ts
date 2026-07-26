import quickemsImg from "../assets/projects/quickems.png";
import veloraImg from "../assets/projects/velora.png";

export const personalInfo = {
  name: "Abhishek",
  fullName: "Abhishek Kumar",
  title: "Full-Stack Engineer & MERN Specialist",
  tagline:
    "Building performant web applications, scalable backend architectures, and modern user experiences.",
  email: "abhishek.0x17@gmail.com",
  location: "India",
  github: "https://github.com/abhishekx17",
  linkedin: "https://www.linkedin.com/in/abhishek-kumar-805194380/",
  instagram: "https://www.instagram.com/abhi_.notfound/",
  resumeUrl: "/resume.pdf",
  availability: "Available for Software Engineering Roles",

  // Education details
  degree: "B.Tech in Computer Science & Engineering",
  timeline: "2022 – 2026",
  college: "Sri Sukhmani Institute of Engineering and Technology (PTU)",
  university: "IK Gujral Punjab Technical University (PTU)",
};

export const linkedinDetails = {
  profilePic: "/linkedin-pfp.jpeg",
  name: "Abhishek Kumar",
  headline: "Full Stack Developer | React, Node.js, Express & MongoDB | Building Scalable Web Applications",
  location: "Dera Bassi, Punjab, India",
  college: "I. K. Gujral Punjab Technical University (IKGPTU)",
  company: "Excellence Technology",
  connections: "322 connections",
  profileUrl: "https://www.linkedin.com/in/abhishek-kumar-805194380/",
  openToWork: "Open to work • Sahibzada Ajit Singh Nagar & Mohali | On-site / Hybrid",
  bannerCode: "< Code. Build. Ship. Repeat />",
  bannerHeading: "Building Digital Experiences that make an Impact.",
  bannerSubtext: "Clean Code • Modern UI • Real Solutions",
  skills: ["React.js", "Node.js", "Express.js", "MongoDB", "TypeScript", "REST APIs", "Tailwind CSS", "GitHub"],
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

export const developerTools = [
  { name: "VS Code", key: "vscode", category: "IDE" },
  { name: "Antigravity", key: "antigravity", category: "AI Assistant" },
  { name: "Postman", key: "postman", category: "API Testing" },
  { name: "Cursor AI", key: "cursorai", category: "AI Editor" },
  { name: "Codex", key: "codex", category: "AI Models" },
  { name: "Notion", key: "notion", category: "Docs & Planning" },
  { name: "GitHub", key: "github", category: "Version Control" },
  { name: "Internet", key: "internet", category: "Web & Research" },
];

export const openSourceHighlights = [
  {
    title: "fix(quickems): role-based JWT auth validation & token refresh logic",
    repo: "abhishekx17/QuickEMS",
    status: "merged",
    date: "Jun 2026",
    link: "https://github.com/abhishekx17/QuickEMS",
    category: "Full-Stack Security",
    snippet: `const verifyRole = (roles) => (req, res, next) => {
  if (!roles.includes(req.user.role)) return res.status(403).json({ error: 'Access Forbidden' });
  next();
};`,
  },
  {
    title: "feat(velora): razorpay webhooks integration & transactional order workflow",
    repo: "abhishekx17/E-commerce",
    status: "merged",
    date: "May 2026",
    link: "https://github.com/abhishekx17/E-commerce",
    category: "E-Commerce",
    snippet: `const handlePaymentWebhook = async (event) => {
  const { payment_id, order_id } = event.payload;
  await Order.findOneAndUpdate({ orderId: order_id }, { status: 'PAID', paymentId: payment_id });
};`,
  },
  {
    title: "perf(api): mongoose aggregation pipeline for payroll & attendance analytics",
    repo: "abhishekx17/QuickEMS",
    status: "merged",
    date: "May 2026",
    link: "https://github.com/abhishekx17/QuickEMS",
    category: "Backend / Database",
    snippet: `const payrollStats = await Employee.aggregate([
  { $match: { status: 'ACTIVE' } },
  { $group: { _id: '$department', totalPayout: { $sum: '$salary' } } }
]);`,
  },
  {
    title: "feat(ui): responsive glassmorphic bento grid & dark theme context system",
    repo: "abhishekx17/portfolio",
    status: "merged",
    date: "Apr 2026",
    link: "https://github.com/abhishekx17",
    category: "Frontend UI",
    snippet: `export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) throw new Error('useTheme must be used within ThemeProvider');
  return context;
};`,
  },
];

export const aboutParagraphs = [
  "I'm a Computer Science Engineering undergrad (2022–2026) who loves building products from the ground up — from database schemas and authentication middleware to responsive UIs.",
  "I specialize in React, Node.js, Express, MongoDB, and TypeScript, focusing on clean API design, maintainability, and micro-animations that make software feel alive.",
];

export const techStack = [
  {
    name: "React",
    category: "Frontend",
    description: "Component-driven UIs, custom hooks, state management, and Framer Motion animations.",
    iconKey: "react",
    level: "Expert",
  },
  {
    name: "Node.js",
    category: "Backend",
    description: "Asynchronous API services, event-driven runtime, and middleware architectures.",
    iconKey: "node",
    level: "Advanced",
  },
  {
    name: "MongoDB",
    category: "Database",
    description: "Document schemas, indexing, aggregation pipelines, and MongoDB Atlas cloud.",
    iconKey: "mongo",
    level: "Advanced",
  },
  {
    name: "Express.js",
    category: "Backend",
    description: "RESTful HTTP routes, middleware validation, and secure JWT authentication.",
    iconKey: "express",
    level: "Advanced",
  },
  {
    name: "TypeScript",
    category: "Language",
    description: "Static typing, interface contracts, and scalable codebase architecture.",
    iconKey: "typescript",
    level: "Intermediate",
  },
  {
    name: "Tailwind CSS",
    category: "Styling",
    description: "Utility-first design systems, dark modes, and fluid responsive layouts.",
    iconKey: "tailwind",
    level: "Expert",
  },
  {
    name: "Git & GitHub",
    category: "Tools",
    description: "Version control, feature branching, pull requests, and CI workflows.",
    iconKey: "git",
    level: "Advanced",
  },
  {
    name: "REST APIs",
    category: "Backend",
    description: "JSON endpoints design, HTTP specifications, and integration patterns.",
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
    highlights: ["Payroll Automation Engine", "Role-Based JWT Auth", "MongoDB Aggregations"],
    tags: ["React", "Node.js", "Express", "MongoDB"],
    github: "https://github.com/abhishekx17/QuickEMS",
    live: "https://quick-ems-iota.vercel.app/login",
  },
  {
    id: "02",
    title: "Velora",
    domainUrl: "velora-rho-one.vercel.app",
    overview:
      "E-commerce application with product catalog, cart state, Cloudinary uploads, and Razorpay gateway.",
    description:
      "Velora is a modern e-commerce platform offering product search and filtering, real-time cart state, Cloudinary media hosting, Razorpay payment processing, and an admin management portal.",
    image: veloraImg,
    highlights: ["Razorpay Payments Integration", "Cloudinary Media Hosting", "Admin Catalog Management"],
    tags: ["React", "Node.js", "Express", "MongoDB"],
    github: "https://github.com/abhishekx17/E-commerce",
    live: "https://velora-rho-one.vercel.app/",
  },
];

export const navLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Tech Stack", href: "#stack" },
  { label: "Projects", href: "#projects" },
  { label: "Highlights", href: "#highlights" },
  { label: "Contact", href: "#contact" },
];
