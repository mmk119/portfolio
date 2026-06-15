import { useRef } from 'react';

export default function ProjectCard({ project }) {
  const cardRef = useRef(null);

  const handleMouseMove = (e) => {
    const card = cardRef.current;
    if (!card) return;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    card.style.transform = `perspective(1000px) rotateX(${(y - centerY) / 25}deg) rotateY(${(centerX - x) / 25}deg) translateY(-4px)`;
  };

  const handleMouseLeave = () => {
    if (cardRef.current) cardRef.current.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg) translateY(0px)';
  };

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="card-3d p-5 flex flex-col gap-3.5 group h-full"
    >
      <div className="flex items-start justify-between">
        <div className="flex items-center gap-2.5">
          {project.icon.startsWith('/') ? (
            <img src={project.icon} alt={project.name} className="w-7 h-7 rounded-md object-cover" />
          ) : (
            <span className="text-xl">{project.icon}</span>
          )}
          <div>
            <span className="font-mono text-xs text-blue font-medium">{project.type}</span>
            <h3 className="text-sm font-bold text-text group-hover:text-accent transition-colors leading-tight">
              {project.name}
            </h3>
          </div>
        </div>
        <span className="font-mono text-xs text-muted whitespace-nowrap ml-2">{project.period}</span>
      </div>

      <p className="text-sm text-muted leading-relaxed flex-1 text-justify">{project.description}</p>

      <div className="flex flex-wrap gap-1.5">
        {project.stack.map(tech => (
          <span key={tech} className="tag">{tech}</span>
        ))}
      </div>

      <div className="flex items-center gap-3 pt-2.5 border-t border-border">
        {project.github && (
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm font-mono text-muted hover:text-accent transition-colors flex items-center gap-1.5"
          >
            <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z"/>
            </svg>
            Source
          </a>
        )}
        {project.live && (
          <a
            href={project.live}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm font-mono text-green hover:text-green/80 transition-colors"
          >
            Live ↗
          </a>
        )}
      </div>
    </div>
  );
}
