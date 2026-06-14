export const personalInfo = {
  name: "Mohammad Kassem",
  initials: "MK",
  role: "Full Stack Engineer",
  tagline: "I build things for the web, end to end.",
  summary:
    "I recently graduated from AUB with a CS degree and I'm currently balancing two internships. I love building things that matter, whether that's a volunteer platform used by hundreds of real people, an ML model that segments brain tumors, or a mood journaling app that listens to you speak. I care deeply about writing code that still makes sense six months later.",
  location: "Lebanon",
  email: "mohammad15kassem@gmail.com",
  github: "https://github.com/mmk119",
  linkedin: "https://www.linkedin.com/in/mohammad-kassem-74a2241a5",
  instagram: "https://www.instagram.com/mohamad_kassem55/",
  availableForWork: true,
};

export const experiences = [
  {
    id: 1,
    role: "Full Stack Engineer Trainee",
    company: "The Digital Hub (UNRWA)",
    period: "May 2026 - Present",
    location: "Remote",
    current: true,
    bullets: [
      "Every week brings a new full stack project with a React frontend, Node or Django backend, and a real database. It's intense but I've gotten fast.",
      "Built auth flows, REST APIs, and database schemas from scratch with no hand holding.",
      "Working in sprints with a team has made me comfortable with code reviews and shipping under tight deadlines.",
    ],
    stack: ["React", "Next.js", "Node.js", "Flask", "Django", "MongoDB", "MySQL"],
  },
  {
    id: 2,
    role: "Backend Engineering Intern",
    company: "Tawasoul",
    period: "Apr 2026 - Present",
    location: "Remote",
    current: true,
    bullets: [
      "Writing and testing API endpoints in TypeScript on a production codebase used by real users.",
      "Took messy legacy code and broke it into clean, typed modules the team could actually work with.",
      "Picked up Astro on the fly to help with performance and SEO, including islands architecture, static generation, and more.",
    ],
    stack: ["TypeScript", "Node.js", "Astro", "REST APIs"],
  },
  {
    id: 3,
    role: "CS Tutor",
    company: "Our Easy Game Tutoring LLC",
    period: "Jun 2025 - Apr 2026",
    location: "Remote",
    current: false,
    bullets: [
      "Helped students get through Data Structures, Systems, and project heavy courses, especially the ones that actually trip people up.",
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
  {
    id: 5,
    role: "Peer Tutor",
    company: "Beit Atfal Assomoud",
    period: "Jun - Aug 2024",
    location: "Sour",
    current: false,
    bullets: [
      "Tutored kids aged 8 to 16 in school subjects, which meant getting creative to keep them engaged.",
      "Ran workshops on bullying and healthy habits. Teaching soft skills turned out to be harder than teaching math.",
    ],
    stack: [],
  },
];

export const projects = [
  {
    id: 1,
    icon: "/CivicConnect.png",
    name: "CivicConnect",
    period: "2026",
    type: "Full Stack",
    description:
      "People in my community were finding volunteer gigs through scattered WhatsApp groups and Facebook posts. So I built a proper platform where NGOs post opportunities, volunteers apply, and admins moderate. Three roles, real auth, real moderation. Hundreds of people actually used it.",
    stack: ["React", "Node.js", "Express", "MongoDB", "Mongoose"],
    github: "https://github.com/mmk119/CivicConnect",
    live: null,
    featured: true,
  },
  {
    id: 2,
    icon: "🎙️",
    name: "MoodakLyom",
    period: "2026",
    type: "Mobile + Backend",
    description:
      "A mood journal where you simply talk instead of typing. You open the app, say how you're feeling, and it transcribes and logs everything. I built the Python backend that handles speech to text with Vosk and Whisper, and my teammate built the Kotlin Android side.",
    stack: ["Kotlin", "Python", "Vosk", "Whisper", "Android"],
    github: "https://github.com/Zeinab2756/MoodakLyom",
    live: null,
    featured: true,
  },
  {
    id: 3,
    icon: "🧠",
    name: "Brain Tumor Detection",
    period: "2025",
    type: "ML Pipeline",
    description:
      "Trained a UNet neural network to find tumors in brain MRI scans, pixel by pixel. Built the entire pipeline including data loading, training loop, and evaluation metrics. It was my first real deep dive into medical imaging and honestly one of the most satisfying projects I've done.",
    stack: ["Python", "UNet", "CNN", "PyTorch"],
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
  { name: "JavaScript", category: "language" },
  { name: "TypeScript", category: "language" },
  { name: "Python", category: "language" },
  { name: "Java", category: "language" },
  { name: "Kotlin", category: "language" },
  { name: "C / C++", category: "language" },
  { name: "React", category: "frontend" },
  { name: "Next.js", category: "frontend" },
  { name: "Astro", category: "frontend" },
  { name: "HTML5", category: "frontend" },
  { name: "CSS3", category: "frontend" },
  { name: "Tailwind CSS", category: "frontend" },
  { name: "Node.js", category: "backend" },
  { name: "Express.js", category: "backend" },
  { name: "Flask", category: "backend" },
  { name: "Django", category: "backend" },
  { name: "REST APIs", category: "backend" },
  { name: "MongoDB", category: "database" },
  { name: "MySQL", category: "database" },
  { name: "Mongoose", category: "database" },
  { name: "Git", category: "tools" },
  { name: "GitHub", category: "tools" },
  { name: "Postman", category: "tools" },
  { name: "VS Code", category: "tools" },
  { name: "Cypress", category: "tools" },
  { name: "GitHub Actions", category: "tools" },
  { name: "Agile / Scrum", category: "practices" },
  { name: "Machine Learning", category: "ai" },
  { name: "LLMs", category: "ai" },
  { name: "Data Science", category: "ai" },
];

export const skillCategories = [
  {
    label: "Frontend",
    icon: "⚡",
    color: "accent",
    items: [
      "Build UIs in React with components, hooks, and the whole ecosystem",
      "Make things look good on every screen size",
      "Know when to reach for state management and when to keep it simple",
      "Care about performance and SEO, and Astro taught me a lot here",
    ],
  },
  {
    label: "Backend",
    icon: "🔧",
    color: "green",
    items: [
      "Design and build REST APIs that are easy to work with",
      "Handle auth properly, including tokens, roles, and all the important details",
      "Design database schemas that don't fall apart at scale",
      "TypeScript everywhere I can because it means fewer bugs and better autocomplete",
    ],
  },
  {
    label: "Problem Solving",
    icon: "🧩",
    color: "purple",
    items: [
      "Comfortable with algorithms and thinking about complexity",
      "Can debug across the whole stack from frontend to database",
      "Good at breaking a big messy problem into smaller clear ones",
      "Built ML pipelines, so I can think in data too",
    ],
  },
  {
    label: "Collaboration",
    icon: "🤝",
    color: "orange",
    items: [
      "Worked in Agile sprints with real standups and retros",
      "Give and receive code review feedback without ego",
      "Thrive in remote first environments where async communication is second nature",
      "Two years of tutoring means I can explain things clearly",
    ],
  },
];

export const hireReasons = [
  {
    icon: "🏗️",
    title: "I own the whole feature",
    body: "Give me a feature and I'll handle it from database to API to frontend to deployment. I'm doing this at two internships right now, so context switching between layers is just how I work.",
  },
  {
    icon: "📐",
    title: "I write code people can read",
    body: "At Tawasoul I inherited messy legacy code and turned it into typed, modular stuff the team could actually maintain. I think about the next person who reads my code, not just making it work today.",
  },
  {
    icon: "⚡",
    title: "I learn fast under pressure",
    body: "Astro, Flask, and Django are all tools I picked up during active internships with real deadlines, not in sandbox tutorials. When I need a new tool, I figure it out and ship with it.",
  },
  {
    icon: "🧠",
    title: "I've touched a lot of domains",
    body: "ML models, bioinformatics, Android apps, hospital databases, community platforms. I'm not a specialist in all of these, but working across them taught me how systems connect.",
  },
  {
    icon: "🤝",
    title: "I communicate well",
    body: "Two years of tutoring and working in remote Agile teams means I know how to explain my thinking, ask the right questions, and not disappear into a hole for three days without updates.",
  },
];

export const certifications = [
  { name: "Java Programming", issuer: "American University of Beirut" },
  { name: "Offensive Cybersecurity Bootcamp", issuer: "Semi-colon and Google Developer Group" },
  { name: "SEO Certification", issuer: "USAID" },
  { name: "Web Development", issuer: "FEKRA Organization" },
  { name: "Presentation and Training Skills (TOT)", issuer: "EdTech Syndicate, Lebanon" },
];

export const activities = [
  {
    icon: "🇵🇸",
    title: "Treasurer, AUB Palestinian Cultural Club",
    description: "Handled the money side of things, including budgeting for campus events, coordinating with other clubs, and making sure we didn't overspend.",
  },
  {
    icon: "🏅",
    title: "HES University Scholarship Program Scholar",
    description: "Full tuition scholarship. Beyond academics, went through workshops on leadership, public speaking, and entrepreneurship.",
  },
  {
    icon: "📚",
    title: "Co-designer, SheREADs Initiative",
    description: "Helped design a program that uses storytelling and books to support orphan girls in South Lebanon who've been through conflict.",
  },
  {
    icon: "🤝",
    title: "Community Volunteer",
    description: "Volunteered with Beit Atfal Assomoud and HEAVEN, working with kids and patients in underserved communities across Lebanon.",
  },
];
