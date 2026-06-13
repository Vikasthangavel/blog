// ─── Author ───────────────────────────────────────────────────────────────────
export const author = {
  name: "Vikas T",
  initials: "VT",
  title: "Full Stack Developer",
  subtitle:
    "B.Tech AI & Data Science · Building real-world web apps with React, Flask, Django & Node.js",
  location: "Erode, TN",
  links: {
    github: "https://github.com/Vikasthangavel/",
    portfolio: "https://vikast.me/",
    email: "mailto:vikasthangavel@gmail.com",
  },
};

// ─── Featured Post ────────────────────────────────────────────────────────────
export const featuredPost = {
  id: "featured-1",
  title: "Building TrueSight AI — A Deepfake Detection System Presented to Namakkal Cyber Cell",
  excerpt:
    "How I integrated Roboflow-trained CV models with a Flask backend for multimodal video + audio deepfake analysis, built automated forensic report generation, and designed an investigation-centric workflow aligned with real cybercrime operations.",
  date: "Jun 5, 2025",
  readTime: "12 min read",
  category: "AI / ML",
  slug: "truesight-ai-deepfake-detection",
  liveUrl: "https://tinyurl.com/cybernamakkal",
};

// ─── Posts ────────────────────────────────────────────────────────────────────
export const posts = [
  {
    id: "post-1",
    title: "How I Built a Preorder System for Local Shops Using Python & Cashfree API",
    excerpt:
      "A practical walkthrough of Time2Order — reducing shop wait times, managing crowd flow during peak hours, and integrating the Cashfree payment gateway with Python and SQL.",
    readTime: "8 min",
    date: "May 30",
    category: "Backend",
    tag: "Project Story",
    slug: "time2order",
    liveUrl: "https://time2orders.com",
  },
  {
    id: "post-2",
    title: "Deploying a Full-Stack App on Cloudflare + VPS — Lessons from DAKSHAA T26",
    excerpt:
      "How I deployed a national-level symposium portal with React on Cloudflare and Express.js/Supabase on a VPS — covering DNS config, auth flows, and payment gateway integration.",
    readTime: "9 min",
    date: "May 12",
    category: "DevOps",
    tag: "Deployment",
    liveUrl: "https://dakshaa.ksrct.ac.in",
  },
  {
    id: "post-3",
    title: "Using Gemini API to Add AI Insights to a Farm Finance App",
    excerpt:
      "How I integrated Google Gemini into Time2Farm to give farmers AI-driven profit/loss insights — section-wise income tracking with smart suggestions through a mobile-friendly React interface.",
    readTime: "6 min",
    date: "Apr 24",
    category: "AI / ML",
    tag: "Gemini API",
  },
  {
    id: "post-4",
    title: "What I Learned as a Web Developer Intern at Gradix Technologies",
    excerpt:
      "Real talk on building responsive frontends, collaborating on API integrations, improving app performance, and working in a team-based agile environment for the first time.",
    readTime: "5 min",
    date: "Apr 5",
    category: "Career",
    tag: "Internship",
  },
];

// ─── Projects ─────────────────────────────────────────────────────────────────
export const projects = [
  {
    id: "proj-1",
    title: "TrueSight AI — Deepfake Detection System",
    excerpt:
      "AI-powered deepfake detector integrating Roboflow CV models with a Flask backend for multimodal (video + audio) analysis. Generates structured forensic reports and was presented to Namakkal Cyber Cell for potential pilot.",
    readTime: "12 min",
    date: "Jun 5",
    category: "AI / ML",
    tag: "Project",
    stack: ["Flask", "Python", "Roboflow", "React"],
    liveUrl: "https://tinyurl.com/cybernamakkal",
    repoUrl: "https://github.com/Vikasthangavel/",
  },
  {
    id: "proj-2",
    title: "DAKSHAA T26 — National-Level Symposium Portal",
    excerpt:
      "Full-stack web app for a national technical symposium. Built with React frontend on Cloudflare, Express.js + REST APIs on VPS, Supabase auth/DB, and integrated college payment gateway for 500+ registrations.",
    readTime: "9 min",
    date: "Apr 20",
    category: "Full Stack",
    tag: "Project",
    stack: ["React", "Express.js", "Supabase", "Cloudflare"],
    liveUrl: "https://dakshaa.ksrct.ac.in",
    repoUrl: "https://github.com/Vikasthangavel/",
  },
  {
    id: "proj-3",
    title: "Time2Order — Preorder Management System",
    excerpt:
      "Web-based platform helping local shops manage preorders, reduce waiting time, and control crowd flow during peak hours. Built with Python, SQL, and the Cashfree payment API.",
    readTime: "8 min",
    date: "Mar 15",
    category: "Full Stack",
    tag: "Project",
    stack: ["Python", "SQL", "Cashfree API", "Flask"],
    liveUrl: "https://time2orders.com",
    repoUrl: "https://github.com/Vikasthangavel/",
  },
  {
    id: "proj-4",
    title: "Time2Due — Operations Management Platform",
    excerpt:
      "Web platform for cable operators to manage employees, track offline payments, and view secure mobile-friendly reports and dashboards.",
    readTime: "7 min",
    date: "Feb 28",
    category: "Full Stack",
    tag: "Project",
    stack: ["React", "Node.js", "MySQL"],
    liveUrl: "https://time2due.com",
    repoUrl: "https://github.com/Vikasthangavel/",
  },
  {
    id: "proj-5",
    title: "Time2Farm — Farm Finance & AI Insights",
    excerpt:
      "Farmer-focused app to manage section-wise income, expenses, and profit tracking. AI-driven insights powered by Gemini API through a simple, mobile-friendly React interface.",
    readTime: "6 min",
    date: "Feb 10",
    category: "Full Stack",
    tag: "Project",
    stack: ["React", "Flask", "Gemini API", "Supabase"],
    liveUrl: null,
    repoUrl: "https://github.com/Vikasthangavel/",
  },
  {
    id: "proj-6",
    title: "IPL Analysis — Power BI Dashboard",
    excerpt:
      "Interactive Power BI dashboard analyzing IPL match data from 2008–2024. Shows team performance, player statistics, and match trends using complex DAX measures.",
    readTime: "4 min",
    date: "Jan 20",
    category: "Data & BI",
    tag: "Project",
    stack: ["Power BI", "DAX", "Excel"],
    liveUrl: null,
    repoUrl: "https://github.com/Vikasthangavel/",
  },
];

// ─── Notes ────────────────────────────────────────────────────────────────────
export const notes = [
  {
    id: "note-1",
    title: "TIL: Cashfree API webhook verification is stricter than you think",
    excerpt:
      "Quick note on HMAC signature validation, idempotency keys, and the gotcha that will silently fail your payment callbacks in production.",
    readTime: "3 min",
    date: "Jun 2",
    tag: "Note",
  },
  {
    id: "note-2",
    title: "Supabase Row Level Security — the one thing most tutorials skip",
    excerpt:
      "How RLS policies interact with service-role keys vs anon keys, and why enabling RLS without policies is the same as disabling it entirely.",
    readTime: "4 min",
    date: "May 18",
    tag: "Note",
  },
  {
    id: "note-3",
    title: "Cloudflare Pages + VPS split deployment — my go-to setup",
    excerpt:
      "Static React frontend on Cloudflare Pages (free, fast CDN) + Express.js API on a VPS. How I wire them together with environment variables and CORS.",
    readTime: "5 min",
    date: "Apr 30",
    tag: "Note",
  },
  {
    id: "note-4",
    title: "Why I chose Flask over Django for AI-heavy backends",
    excerpt:
      "For ML inference endpoints — lower overhead, easier model integration, and faster iteration. Django is great, but Flask wins when your app is mostly a wrapper around a model.",
    readTime: "3 min",
    date: "Apr 8",
    tag: "Note",
  },
];

// ─── Skills ───────────────────────────────────────────────────────────────────
export const skills = [
  { id: "sk-1",  label: "React.js / HTML / CSS",      icon: "⚛️" },
  { id: "sk-2",  label: "Node.js / Express.js",        icon: "🟢" },
  { id: "sk-3",  label: "Python / Flask / Django",     icon: "🐍" },
  { id: "sk-4",  label: "SQL / Supabase / MySQL",      icon: "🗄️" },
  { id: "sk-5",  label: "Machine Learning / CV",       icon: "🤖" },
  { id: "sk-6",  label: "Power BI / DAX",              icon: "📊" },
  { id: "sk-7",  label: "Cloudflare / VPS / Git",      icon: "☁️" },
  { id: "sk-8",  label: "REST APIs / Authentication",  icon: "🔐" },
];

// ─── Experience ───────────────────────────────────────────────────────────────
export const experience = [
  {
    id: "exp-1",
    role: "Web Developer Intern",
    company: "Gradix Technologies",
    period: "2024",
    bullets: [
      "Developed responsive web interfaces using modern frontend technologies",
      "Collaborated on backend API integration and feature development",
      "Improved application performance and user experience",
      "Worked in a team-based agile development environment",
    ],
  },
];

// ─── Education ────────────────────────────────────────────────────────────────
export const education = {
  degree: "Bachelor of Technology in Artificial Intelligence and Data Science",
  college: "K.S.Rangasamy College of Technology",
  period: "Sep 2023 – Jun 2027",
  cgpa: "8.2",
};

// ─── Achievements ─────────────────────────────────────────────────────────────
export const achievements = [
  {
    id: "ach-1",
    title: "2nd Place — Namakkal Police Cybersecurity Hackathon 2025",
    description:
      "Developed an AI-based cybercrime detection solution (TrueSight AI) that secured 2nd place among teams from across Tamil Nadu.",
  },
];
