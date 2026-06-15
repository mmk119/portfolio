import { personalInfo } from '../data/portfolioData';

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-border bg-white">
      <div className="w-full px-6 md:px-12 lg:px-16 py-8 flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="font-mono text-sm text-text">
          <span className="text-accent font-semibold">{personalInfo.name}</span>
          {' '}&middot; {year}
        </div>

        <div className="flex items-center gap-7">
          <a href={personalInfo.github} target="_blank" rel="noopener noreferrer" className="text-sm text-text hover:text-accent transition-colors font-mono">
            GitHub
          </a>
          <a href={personalInfo.linkedin} target="_blank" rel="noopener noreferrer" className="text-sm text-text hover:text-accent transition-colors font-mono">
            LinkedIn
          </a>
          <a href={`mailto:${personalInfo.email}`} className="text-sm text-text hover:text-accent transition-colors font-mono">
            Email
          </a>
        </div>
      </div>
    </footer>
  );
}
