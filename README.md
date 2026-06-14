# Mohammad Kassem - Personal Portfolio

A professional personal portfolio website built with React to showcase my background, skills, projects, and professional value as a full stack engineer.

## Technologies Used

- **Framework:** React 19
- **Build Tool:** Vite
- **Styling:** Tailwind CSS
- **Language:** JavaScript (ES6+)
- **Fonts:** Inter, JetBrains Mono (Google Fonts)

## Features

- Responsive design (desktop, tablet, mobile)
- Component-based architecture
- Scroll reveal animations
- Interactive 3D card hover effects
- Typewriter role animation in the hero section
- Contact form (frontend only, opens email client)
- Filterable technologies grid

## Project Structure

```
src/
├── components/
│   ├── Header.jsx
│   ├── Footer.jsx
│   ├── ProjectCard.jsx
│   └── sections/
│       ├── Hero.jsx
│       ├── About.jsx
│       ├── Experience.jsx
│       ├── Technologies.jsx
│       ├── Skills.jsx
│       ├── Projects.jsx
│       ├── HireMe.jsx
│       └── Contact.jsx
├── data/
│   └── portfolioData.js
├── hooks/
│   └── useScrollReveal.js
├── pages/
│   └── Home.jsx
├── styles/
│   └── index.css
├── App.jsx
└── main.jsx
```

## How to Run Locally

1. Clone the repository:
   ```bash
   git clone https://github.com/mmk119/portfolio.git
   cd portfolio
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm run dev
   ```

4. Open your browser and navigate to `http://localhost:5173`

## Build for Production

```bash
npm run build
```

The output will be in the `dist/` folder.
