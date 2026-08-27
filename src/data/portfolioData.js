export const personalInfo = {
  name: "Mohammad Kassem",
  initials: "MK",
  role: "Backend-Focused Software Engineer",
  tagline: "I build and secure the systems behind the product.",
  summary:
    "I'm a backend-focused software engineer and a CS graduate of AUB, where I studied on a full scholarship. I build and secure REST APIs with Node.js, Express, and TypeScript, with hands-on work in JWT authentication, access control, and API security review, plus Python backends, LLM-based systems, and workflow automation. Most recently I spent the summer at SiiRA Inc. building AI agents and internal automation tooling.",
  location: "Lebanon",
  email: "mohammad15kassem@gmail.com",
  phone: "+961 76 704 944",
  github: "https://github.com/mmk119",
  linkedin: "https://www.linkedin.com/in/mohammad-kassem-74a2241a5",
  instagram: "https://www.instagram.com/mohamad_kassem55/",
  availableForWork: true,
};

export const experiences = [
  {
    id: 6,
    role: "Technology Generalist Intern",
    company: "SiiRA Inc.",
    period: "Jun - Aug 2026",
    location: "Beirut (Hybrid)",
    current: false,
    bullets: [
      "Delivered R&D projects across AI agents, internal automation tooling, and an intranet portal hub inside the Product/R&D unit.",
      "Built an n8n workflow that classifies inbound email, automating triage that used to be done by hand.",
      "Integrated LLM-based agent components into internal tools and documented their behaviour so the product team could take them over.",
    ],
    stack: ["AI Agents", "LLMs", "n8n", "Automation"],
  },
  {
    id: 2,
    role: "Backend / Full-Stack Developer Intern",
    company: "Tawasoul",
    period: "Apr - Jul 2026",
    location: "Remote",
    current: false,
    bullets: [
      "Audited the platform's Supabase implementation end to end, documenting security vulnerabilities and access-control gaps with prioritized remediation recommendations.",
      "Implemented and hardened user authentication, including JWT issuance and validation, login, and password recovery flows.",
      "Built and tested REST API endpoints in TypeScript and Node.js, refactoring legacy backend logic into modular components.",
    ],
    stack: ["TypeScript", "Node.js", "Supabase", "JWT", "REST APIs"],
  },
  {
    id: 1,
    role: "Full Stack Engineer Trainee",
    company: "The Digital Hub (UNRWA)",
    period: "May - Jun 2026",
    location: "Remote",
    current: false,
    bullets: [
      "Built REST APIs, authentication systems, and database integrations with Node.js/Express, Flask, and Django on weekly delivery cycles.",
      "Coordinated with remote teammates in Agile workflows to define, build, and deploy full stack web applications.",
      "Every week brought a new project on a real database with a real deadline, which is what made me fast.",
    ],
    stack: ["Node.js", "Express", "Flask", "Django", "MongoDB", "MySQL"],
  },
  {
    id: 3,
    role: "Computer Science Tutor",
    company: "Our Easy Game Tutoring (OEG)",
    period: "Jun 2025 - Apr 2026",
    location: "Remote",
    current: false,
    bullets: [
      "Tutored students in programming, debugging, and problem solving, guiding projects in Java, Node.js, and React.",
      "Walked them through full projects from start to finish, from planning to late night debugging to getting it across the line.",
    ],
    stack: ["Java", "Node.js", "React"],
  },
  {
    id: 4,
    role: "Excel Lab Assistant",
    company: "American University of Beirut",
    period: "Sep - Dec 2025",
    location: "Beirut",
    current: false,
    bullets: [
      "Ran the lab sessions for a business analytics course and walked students through real data problems in Excel.",
      "Got good at explaining technical concepts to people who don't think in code.",
    ],
    stack: ["Excel", "Data Analysis"],
  },
];

export const projects = [
  {
    id: 1,
    icon: import.meta.env.BASE_URL + "CivicConnect.png",
    name: "CivicConnect",
    period: "2026",
    type: "Full Stack · FYP",
    description:
      "My final year project. People in my community were finding volunteer gigs through scattered WhatsApp groups and Facebook posts, so I built a proper platform where NGOs post opportunities, volunteers apply, and admins moderate. I designed the Node/Express REST API and the MongoDB schema, and implemented token-based auth with role-based access control across all three roles.",
    stack: ["React", "Node.js", "Express", "MongoDB", "JWT", "RBAC"],
    github: "https://github.com/mmk119/CivicConnect",
    live: null,
    featured: true,
  },
  {
    id: 2,
    icon: "🎙️",
    name: "MoodakLyom",
    period: "2026",
    type: "AI Voice Journaling",
    description:
      "A mood journal where you simply talk instead of typing. You open the app, say how you're feeling, and it transcribes and logs everything. I built the Python backend that handles speech processing and transcription with Vosk and Whisper, and my teammate built the native Kotlin Android client.",
    stack: ["Python", "Vosk", "Whisper", "Kotlin", "Android"],
    github: "https://github.com/Zeinab2756/MoodakLyom",
    live: null,
    featured: true,
  },
  {
    id: 3,
    icon: import.meta.env.BASE_URL + "images/brain.jfif",
    name: "Brain Tumor Detection",
    period: "2025",
    type: "Deep Learning",
    description:
      "A U-Net image segmentation pipeline that finds tumors in brain MRI scans, pixel by pixel. I built the whole thing end to end including data loading, the training loop, and evaluation metrics. It was my first real deep dive into medical imaging and honestly one of the most satisfying projects I've done.",
    stack: ["Python", "U-Net", "CNN", "PyTorch"],
    github: "https://github.com/mmk119",
    live: null,
    featured: true,
  },
  {
    id: 4,
    icon: "🏥",
    name: "HealHub",
    period: "Jan - Apr 2025",
    type: "Database Design",
    description:
      "A hospital management database covering patients, doctors, appointments, medical records, and more. Fully normalized schema with stored procedures and complex queries. The kind of project that teaches you why database design matters before you write a single line of app code.",
    stack: ["MySQL", "Database Design", "SQL"],
    github: "https://github.com/mmk119",
    live: null,
    featured: false,
  },
  {
    id: 5,
    icon: "🔬",
    name: "Bioinformatics: NPM1 Analysis",
    period: "2025",
    type: "Data Science",
    description:
      "Analyzed how the NPM1 protein interacts with other proteins during ribosome assembly. Used network analysis to map out the connections and figure out which pathways matter most. A fascinating intersection of biology and graph theory.",
    stack: ["Python", "Jupyter", "NetworkX", "BioPython"],
    github: "https://github.com/mmk119/Bioinformatics",
    live: null,
    featured: false,
  },
  {
    id: 6,
    icon: "🚢",
    name: "Advanced Battleship Game",
    period: "Sep - Dec 2024",
    type: "Systems Programming",
    description:
      "Battleship in C, but not the basic version. Added radar sweeps, smoke screens, artillery strikes, and torpedoes. Then I built an AI opponent that actually plays smart by tracking hit patterns and narrowing down ship locations. Pure C, no libraries.",
    stack: ["C", "Algorithms", "AI"],
    github: "https://github.com/mmk119/BattleShip-Innovative-Coders",
    live: null,
    featured: false,
  },
];

export const technologies = [
  { name: "TypeScript", category: "language" },
  { name: "JavaScript", category: "language" },
  { name: "Python", category: "language" },
  { name: "Java", category: "language" },
  { name: "Kotlin", category: "language" },
  { name: "C / C++", category: "language" },
  { name: "Node.js", category: "backend" },
  { name: "Express.js", category: "backend" },
  { name: "Flask", category: "backend" },
  { name: "Django", category: "backend" },
  { name: "REST API Design", category: "backend" },
  { name: "JWT Auth", category: "backend" },
  { name: "Role-Based Access", category: "backend" },
  { name: "API Security Review", category: "backend" },
  { name: "React", category: "frontend" },
  { name: "Astro", category: "frontend" },
  { name: "HTML5", category: "frontend" },
  { name: "CSS3", category: "frontend" },
  { name: "Tailwind CSS", category: "frontend" },
  { name: "MongoDB", category: "database" },
  { name: "MySQL", category: "database" },
  { name: "Supabase", category: "database" },
  { name: "PostgreSQL", category: "database" },
  { name: "Git", category: "tools" },
  { name: "GitHub", category: "tools" },
  { name: "Postman", category: "tools" },
  { name: "CI/CD", category: "tools" },
  { name: "n8n", category: "tools" },
  { name: "VS Code", category: "tools" },
  { name: "LLMs", category: "ai" },
  { name: "AI Agents", category: "ai" },
  { name: "RAG", category: "ai" },
  { name: "Machine Learning", category: "ai" },
  { name: "Deep Learning", category: "ai" },
  { name: "Speech Processing", category: "ai" },
  { name: "Agile / Scrum", category: "practices" },
  { name: "Workflow Automation", category: "practices" },
];

export const skillCategories = [
  {
    label: "Backend",
    icon: import.meta.env.BASE_URL + "images/backend.png",
    color: "green",
    items: [
      "Design and build REST APIs that are easy to work with, in Node/Express, Flask, and Django",
      "Handle auth properly: JWT issuance and validation, login and recovery flows, role-based access control",
      "Design database schemas that don't fall apart at scale, across MongoDB, MySQL, and Postgres",
      "TypeScript everywhere I can because it means fewer bugs and better autocomplete",
    ],
  },
  {
    label: "Security",
    icon: import.meta.env.BASE_URL + "images/problem-solving.webp",
    color: "purple",
    items: [
      "Audited a production Supabase setup end to end and wrote up the vulnerabilities I found",
      "Read auth flows and access controls looking for the gap, not just the happy path",
      "Prioritize findings by real risk so a team can actually act on the report",
      "Think about what happens when someone sends the request you didn't expect",
    ],
  },
  {
    label: "AI & Automation",
    icon: import.meta.env.BASE_URL + "images/brain.jfif",
    color: "accent",
    items: [
      "Built AI agents and LLM-backed components into internal tools",
      "Automated manual email triage with n8n classification workflows",
      "Trained a U-Net segmentation model and built the full pipeline around it",
      "Comfortable with RAG concepts, speech processing, and thinking in data",
    ],
  },
  {
    label: "Collaboration",
    icon: import.meta.env.BASE_URL + "images/collaboration.jpg",
    color: "orange",
    items: [
      "Worked in Agile sprints with real standups and retros, remote and hybrid",
      "Give and receive code review feedback without ego",
      "Document what I build so the next person can pick it up without me in the room",
      "Two years of tutoring means I can explain things clearly",
    ],
  },
];

export const hireReasons = [
  {
    icon: "🔐",
    title: "I take security seriously",
    body: "At Tawasoul I audited their entire Supabase implementation, documented the vulnerabilities and access-control gaps, and then built the hardened JWT auth, login, and password-recovery flows myself. I don't just make the feature work, I think about how it breaks.",
  },
  {
    icon: "🏗️",
    title: "I own the whole feature",
    body: "Give me a feature and I'll handle it from database to API to frontend to deployment. I've done this across three internships, so context switching between layers is just how I work.",
  },
  {
    icon: "🤖",
    title: "I ship with AI, not around it",
    body: "At SiiRA I built AI agents, integrated LLM components into internal tools, and automated manual email triage with n8n. I've also trained models from scratch, so I know where these tools are genuinely useful and where they aren't.",
  },
  {
    icon: "📐",
    title: "I write code people can read",
    body: "I took messy legacy backend logic and refactored it into typed, modular components the team could actually maintain. I think about the next person who reads my code, not just making it work today.",
  },
  {
    icon: "⚡",
    title: "I learn fast under pressure",
    body: "At The Digital Hub it was a new full stack project every single week, on real databases with real deadlines. When I need a new tool, I figure it out and ship with it.",
  },
  {
    icon: "🤝",
    title: "I communicate well",
    body: "Two years of tutoring and working in remote and hybrid Agile teams means I know how to explain my thinking, ask the right questions, and not disappear into a hole for three days without updates.",
  },
];

export const certifications = [
  { name: "Java Programming", issuer: "American University of Beirut" },
  { name: "Offensive Cybersecurity Bootcamp", issuer: "Semi-colon and Google Developer Group" },
  { name: "SEO Certification", issuer: "" },
  { name: "Web Development", issuer: "FEKRA Organization" },
  { name: "Presentation and Training Skills (TOT)", issuer: "EdTech Syndicate, Lebanon" },
];

export const activities = [
  {
    icon: import.meta.env.BASE_URL + "images/PCC.png",
    title: "Treasurer, AUB Palestinian Cultural Club",
    description: "Handled the money side of things, including budgeting for campus events, coordinating with other clubs, and making sure we didn't overspend.",
  },
  {
    icon: import.meta.env.BASE_URL + "images/HES.png",
    title: "HES University Scholarship Program Scholar",
    description: "Full tuition scholarship through the HES University Scholarship Program. Beyond academics, went through workshops on leadership, communication, and entrepreneurship.",
  },
  {
    icon: "📚",
    title: "Co-designer, SheREADs Initiative",
    description: "Co-designed a psychosocial support initiative using bibliotherapy to support orphan girls in South Lebanon affected by conflict.",
  },
  {
    icon: "🤝",
    title: "Community Volunteer",
    description: "Volunteered with Beit Atfal Assomoud and HEAVEN, working with kids and patients in underserved communities across Lebanon.",
  },
];
