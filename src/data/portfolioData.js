export const personalInfo = {
  name: "Mohammad Kassem",
  initials: "MK",
  role: "Software Engineer",
  tagline: "I take rough ideas and turn them into things people use.",
  summary:
    "I'm a software engineer and a CS graduate of AUB, where I studied on a full scholarship. I build and secure REST APIs with Node.js, Express, and TypeScript, work in Python for data and ML, and ship React front ends when they're needed. Recently that's meant an internal AI tools hub used by 20+ employees, an n8n workflow that cut 2-3 hours of manual triage a week, and a security review of an authentication system serving 500+ users. Most of it came from small teams, taking a rough idea all the way to something people actually use.",
  location: "Lebanon",
  email: "mohammad15kassem@gmail.com",
  phone: "+961 76 704 944",
  github: "https://github.com/mmk119",
  linkedin: "https://www.linkedin.com/in/mohammad-kassem-74a2241a5",
  instagram: "https://www.instagram.com/mohamad_kassem55/",
  resume: "https://drive.google.com/file/d/1FjLto3w4HRWp3i_pErajd7QA_buU1wgn/view?usp=sharing",
  availableForWork: true,
};

export const experiences = [
  {
    id: 6,
    role: "Software Engineer Intern, Product/R&D",
    company: "SiiRA Inc.",
    period: "Jun - Aug 2026",
    location: "Beirut (Hybrid)",
    current: false,
    bullets: [
      "Delivered three R&D projects in 8 weeks: automation tooling, LLM agents, and an internal AI hub now used by 20+ employees.",
      "Cut 2-3 hours of manual email triage a week with an n8n workflow that classifies every inbound message into four categories, sends an AI-written reply, and logs 300+ records to a shared sheet.",
      "Worked with the Head of Product to pick the hub's platform, weighing LibreChat against Open WebUI on SSO and cost.",
    ],
    stack: ["LLM Agents", "n8n", "Automation", "LibreChat"],
  },
  {
    id: 2,
    role: "Backend Software Engineer Intern",
    company: "Tawasoul",
    period: "Apr - Jul 2026",
    location: "Remote",
    current: false,
    bullets: [
      "Delivered a full security review of the Supabase (PostgreSQL) backend serving 500+ users, handing the founder a prioritized fix list across authentication flows and access controls.",
      "Rebuilt user authentication after that review: JWT issuance and validation, login, and password recovery.",
      "Shipped and tested REST API endpoints in TypeScript and Node.js, refactoring legacy logic into modules.",
    ],
    stack: ["TypeScript", "Node.js", "Supabase", "PostgreSQL", "JWT"],
  },
  {
    id: 1,
    role: "Software Engineer Trainee",
    company: "The Digital Hub (UNRWA)",
    period: "May - Jun 2026",
    location: "Remote",
    current: false,
    bullets: [
      "Delivered a full stack app every week with Node.js/Express, Flask, and Django, covering REST APIs, auth, and databases.",
      "Worked with a remote Agile team to define, build, and deploy features on weekly sprints.",
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
      "Coached students through Java, Node.js, and React projects, focused on debugging and problem solving.",
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
    id: 7,
    icon: "🎾",
    name: "Rally",
    period: "2026",
    type: "AI-Powered Booking Platform",
    description:
      "A padel court booking app with a multi-step booking flow, live availability, and an analytics dashboard. The part I like most is Coach, an embedded OpenAI assistant that books, cancels, and reschedules courts from plain-language chat and stays in sync with the rest of the app state.",
    stack: ["React", "Tailwind CSS", "OpenAI API", "Recharts", "Vite"],
    github: "https://github.com/mmk119/Rally",
    live: "https://mmk119.github.io/Rally/",
    featured: true,
  },
  {
    id: 1,
    icon: import.meta.env.BASE_URL + "CivicConnect.png",
    name: "CivicConnect",
    period: "2026",
    type: "Full Stack · FYP",
    description:
      "My final year project. People in my community were finding volunteer gigs through scattered WhatsApp groups and Facebook posts, so I built a proper platform where NGOs post opportunities, volunteers apply, and admins moderate. I built the Node/Express REST API and the MongoDB schema behind it, and shipped token-based auth with role-based access control across all three roles.",
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
      "A mood journal where you simply talk instead of typing. You open the app, say how you're feeling, and it transcribes and logs everything. I built the Python speech backend, wiring Vosk and Whisper into a native Android journaling client my teammate built in Kotlin.",
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
      "Trained a U-Net model to segment brain tumors in medical scans, pixel by pixel, owning both the training and the evaluation side. It was my first real deep dive into medical imaging and honestly one of the most satisfying projects I've done.",
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
  { name: "React", category: "frontend" },
  { name: "Astro", category: "frontend" },
  { name: "Tailwind CSS", category: "frontend" },
  { name: "HTML5", category: "frontend" },
  { name: "CSS3", category: "frontend" },
  { name: "Vite", category: "frontend" },
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
  { name: "LLM Agents", category: "ai" },
  { name: "OpenAI API", category: "ai" },
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
      "Reviewed a Postgres backend serving 500+ users end to end and wrote up what I found",
      "Read auth flows and access controls looking for the gap, not just the happy path",
      "Prioritize findings by real risk so a small team can actually act on the report",
      "Think about what happens when someone sends the request you didn't expect",
    ],
  },
  {
    label: "AI & ML",
    icon: import.meta.env.BASE_URL + "images/brain.jfif",
    color: "accent",
    items: [
      "Built LLM agents and shipped an internal AI hub that 20+ people use",
      "Automated manual email triage with n8n, saving 2-3 hours a week",
      "Trained a U-Net segmentation model and owned the pipeline around it",
      "Comfortable with RAG concepts, speech processing, and thinking in data",
    ],
  },
  {
    label: "Frontend",
    icon: import.meta.env.BASE_URL + "images/frontend.png",
    color: "orange",
    items: [
      "Build UIs in React with components, hooks, and the whole ecosystem",
      "Make things look good on every screen size, usually with Tailwind",
      "Wire real product flows: multi-step booking, live availability, analytics dashboards",
      "Care about performance and SEO, and Astro taught me a lot there",
    ],
  },
];

export const hireReasons = [
  {
    icon: "📦",
    title: "I ship, and it gets used",
    body: "Three R&D projects in eight weeks at SiiRA, including an internal AI hub that 20+ employees use daily. I'm not interested in demos that die in a branch. I like the part where real people start depending on the thing.",
  },
  {
    icon: "🔐",
    title: "I take security seriously",
    body: "At Tawasoul I reviewed a Postgres backend serving 500+ users, handed the founder a prioritized fix list across auth flows and access controls, then rebuilt the authentication myself. I don't just make the feature work, I think about how it breaks.",
  },
  {
    icon: "🏗️",
    title: "I own the whole feature",
    body: "Give me a feature and I'll handle it from database to API to frontend to deployment. I've done this across three internships, so context switching between layers is just how I work.",
  },
  {
    icon: "🤖",
    title: "I ship with AI, not around it",
    body: "An n8n workflow that saved 2-3 hours a week, LLM agents in internal tools, and an OpenAI assistant that books courts from plain-language chat. I've also trained models from scratch, so I know where these tools are genuinely useful and where they aren't.",
  },
  {
    icon: "⚡",
    title: "I learn fast under pressure",
    body: "At The Digital Hub it was a new full stack app every single week, on real databases with real deadlines. When I need a new tool, I figure it out and ship with it.",
  },
  {
    icon: "🤝",
    title: "I communicate well",
    body: "Two years of tutoring and working in small remote and hybrid teams means I know how to explain my thinking, ask the right questions, and not disappear into a hole for three days without updates.",
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
    description: "Co-designed a bibliotherapy initiative supporting orphan girls in South Lebanon affected by conflict.",
  },
  {
    icon: "🤝",
    title: "Community Volunteer",
    description: "Volunteered with Beit Atfal Assomoud and HEAVEN, working with kids and patients in underserved communities across Lebanon.",
  },
];
