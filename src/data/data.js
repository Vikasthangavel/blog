// ─── Author ───────────────────────────────────────────────────────────────────
export const author = {
  name: "Alex Morgan",
  initials: "AM",
  title: "Senior Software Engineer",
  subtitle:
    "B.E. Computer Science · Crafting scalable systems, open-source tools & developer UX",
  avatar: null, // set to image URL if available
  links: {
    github: "https://github.com",
    twitter: "https://twitter.com",
    linkedin: "https://linkedin.com",
  },
};

// ─── Featured Post ────────────────────────────────────────────────────────────
export const featuredPost = {
  id: "featured-1",
  title: "Building a Real-Time Chat App with WebSockets & Redis Pub/Sub",
  excerpt:
    "How I designed a horizontally scalable chat service using Node.js, WebSocket clusters, Redis for pub/sub message brokering, and a React frontend — with full source code and benchmarks.",
  date: "Jun 10, 2025",
  readTime: "11 min read",
  category: "Architecture",
  slug: "realtime-chat-websocket-redis",
};

// ─── Posts ────────────────────────────────────────────────────────────────────
export const posts = [
  {
    id: "post-1",
    title: "Understanding Closures in JavaScript — The Deep Dive",
    excerpt:
      "A practical breakdown of lexical scoping, the closure mechanism, and real-world patterns like memoization and module encapsulation.",
    readTime: "6 min",
    date: "May 28",
    category: "JavaScript",
    tag: "Core Concepts",
  },
  {
    id: "post-2",
    title: "Designing REST APIs That Don't Suck",
    excerpt:
      "End-to-end walkthrough — versioning strategy, error contract design, pagination patterns, and OpenAPI documentation.",
    readTime: "10 min",
    date: "May 14",
    category: "Backend",
    tag: "API Design",
  },
  {
    id: "post-3",
    title: "Git Workflows for Teams That Actually Ship",
    excerpt:
      "Everything I wish someone explained before I broke a shared repo for the first time — trunk-based vs GitFlow, branch naming, and CI guards.",
    readTime: "5 min",
    date: "Apr 30",
    category: "DevOps",
    tag: "Tools",
  },
  {
    id: "post-4",
    title: "CSS Container Queries: The Layout Revolution",
    excerpt:
      "How container queries finally solve the responsive component problem that media queries could never address cleanly.",
    readTime: "7 min",
    date: "Apr 12",
    category: "Frontend",
    tag: "CSS",
  },
];

// ─── Projects ─────────────────────────────────────────────────────────────────
export const projects = [
  {
    id: "proj-1",
    title: "OpenMetrics Dashboard",
    excerpt:
      "An open-source observability dashboard built with React, D3.js and a Go backend — supports Prometheus and custom metric ingestion.",
    readTime: "12 min",
    date: "Jun 1",
    category: "Open Source",
    tag: "Project",
    stack: ["React", "Go", "D3.js", "Prometheus"],
    liveUrl: "#",
    repoUrl: "#",
  },
  {
    id: "proj-2",
    title: "AI-Powered Code Review Bot",
    excerpt:
      "A GitHub Action that integrates GPT-4 to provide inline PR reviews, style suggestions, and complexity analysis.",
    readTime: "8 min",
    date: "Apr 22",
    category: "AI / ML",
    tag: "Project",
    stack: ["TypeScript", "OpenAI API", "GitHub Actions"],
    liveUrl: "#",
    repoUrl: "#",
  },
  {
    id: "proj-3",
    title: "Distributed Task Queue in Rust",
    excerpt:
      "A lightweight, Redis-backed task queue with retry logic, dead-letter queues, and a minimal admin UI.",
    readTime: "15 min",
    date: "Mar 5",
    category: "Systems",
    tag: "Project",
    stack: ["Rust", "Redis", "Tokio"],
    liveUrl: null,
    repoUrl: "#",
  },
];

// ─── Notes ────────────────────────────────────────────────────────────────────
export const notes = [
  {
    id: "note-1",
    title: "TIL: PostgreSQL EXPLAIN ANALYZE is underrated",
    excerpt:
      "Quick note on using EXPLAIN ANALYZE to catch sequential scans hiding behind decent-looking query plans.",
    readTime: "2 min",
    date: "Jun 8",
    tag: "Note",
  },
  {
    id: "note-2",
    title: "Why I switched from Prettier to Biome",
    excerpt:
      "Biome formats 25x faster, supports lint rules, and requires zero config. Notes from migrating a monorepo.",
    readTime: "3 min",
    date: "May 20",
    tag: "Note",
  },
  {
    id: "note-3",
    title: "HTTP/3 and QUIC — what actually changed",
    excerpt:
      "A five-minute mental model for understanding QUIC's connection migration and how it differs from TCP.",
    readTime: "4 min",
    date: "May 2",
    tag: "Note",
  },
];

// ─── Skills ───────────────────────────────────────────────────────────────────
export const skills = [
  { id: "sk-1", label: "React / Next.js", icon: "⚛️" },
  { id: "sk-2", label: "Node.js / Express", icon: "🟢" },
  { id: "sk-3", label: "TypeScript", icon: "🔷" },
  { id: "sk-4", label: "PostgreSQL / Redis", icon: "🗄️" },
  { id: "sk-5", label: "Docker / Kubernetes", icon: "🐳" },
  { id: "sk-6", label: "Python / FastAPI", icon: "🐍" },
  { id: "sk-7", label: "AWS / GCP", icon: "☁️" },
  { id: "sk-8", label: "Rust (learning)", icon: "🦀" },
];
