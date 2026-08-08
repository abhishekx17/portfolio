import quickemsImg from '../assets/projects/quickems.png';
import veloraImg from '../assets/projects/velora.png';
import prepaiImg from '../assets/projects/prepAi.png';

export const personalInfo = {
  name: 'Abhishek',
  fullName: 'Abhishek Kumar',
  title: 'Full-Stack Developer',
  tagline:
    'Self-taught Full Stack Developer skilled in building scalable MERN applications - React, Node.js, Express, MongoDB, REST APIs, and third-party integrations with clean architecture.',
  email: 'abhishek.0x17@gmail.com',
  phone: '+91 6284636767',
  location: 'Derabassi, India',
  github: 'https://github.com/abhishekx17',
  linkedin: 'https://www.linkedin.com/in/abhishek-kumar-805194380/',
  instagram: 'https://www.instagram.com/abhi_.notfound/',
  resumeUrl: '/resume.pdf',
  availability: 'Open to Full Stack Developer Roles',

  // Education details
  degree: 'Bachelor of Technology - Computer Science & Engineering',
  timeline: '2022 – 2026',
  college: 'Sri Sukhmani Institute of Engineering & Technology, Derabassi',
  university: 'IKG Punjab Technical University, Jalandhar',
};

export const projects = [
  {
    id: '01',
    title: 'PrepAI',
    domainUrl: 'prepai-interview.vercel.app',
    overview:
      'AI-powered preparation platform evaluating job-role fit, vector resume analysis, and real-time interactive mock interviews.',
    description:
      'PrepAI evaluates candidate resumes, parses fit vectors against job descriptions, and operates real-time mock interviews and customizable quizzes with complete performance analytics scorecards.',
    image: prepaiImg,
    highlights: [
      'Dual-Model LLM Fallback (Llama 3.3/3.1)',
      'Custom Sliding-Window Rate Limiter',
      'Puppeteer Resume Parsing Engine',
    ],
    tags: ['React 19', 'Node.js', 'Express', 'MongoDB', 'Groq AI', 'Puppeteer'],
    github: 'https://github.com/abhishekx17/PrepAI',
    live: 'https://prep-ai-pied-eta.vercel.app/',
  },
  {
    id: '02',
    title: 'Velora',
    domainUrl: 'velora-rho-one.vercel.app',
    overview:
      'Dual-portal MERN e-commerce application featuring product catalog management, cart persistency, and Razorpay gateways.',
    description:
      'Velora is a modern e-commerce storefront linked to an administrative backend dashboard that tracks sales metrics, order fulfillment statuses, inventory levels, and real-time customer sessions.',
    image: veloraImg,
    highlights: [
      'Razorpay Payments & COD checkout',
      'Cloudinary Media Hosting Layer',
      'Google OAuth Session Management',
    ],
    tags: ['React 19', 'Node.js', 'Express', 'MongoDB', 'Cloudinary', 'Razorpay'],
    github: 'https://github.com/abhishekx17/E-commerce',
    live: 'https://velora-rho-one.vercel.app/',
  },
  {
    id: '03',
    title: 'QuickEMS',
    domainUrl: 'quick-ems-iota.vercel.app',
    overview:
      'Workforce portal automating employee attendance logging, payslip generation, and Inngest workflows.',
    description:
      'QuickEMS simplifies business workforce operations through role-based access portals, automated PDF payslip downloads, attendance tracking, and serverless Inngest background cron operations.',
    image: quickemsImg,
    highlights: [
      'Inngest-driven Cron Workflows',
      'Late/Absence Auto Email Detection',
      'JWT & Bcrypt Security Layer',
    ],
    tags: ['React 19', 'Node.js', 'Express', 'MongoDB', 'Inngest', 'Nodemailer'],
    github: 'https://github.com/abhishekx17/QuickEMS',
    live: 'https://quick-ems-iota.vercel.app/login',
  },
];

export const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Projects', href: '#projects' },
  { label: 'Contact', href: '#contact' },
];
