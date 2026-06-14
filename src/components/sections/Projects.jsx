import { useState } from 'react';
import { useScrollReveal } from '../../hooks/useScrollReveal';
import { projects } from '../../data/portfolioData';
import ProjectCard from '../ProjectCard';

export default function Projects() {
  const [showAll, setShowAll] = useState(false);
  const ref = useScrollReveal();

  const featured = projects.filter(p => p.featured);
  const rest = projects.filter(p => !p.featured);
  const visible = showAll ? projects : featured;

  return (
    <section id="projects" className="bg-white">
      <div className="section-container">
        <div ref={ref} className="fade-up">
          <p className="section-label">Projects</p>
          <h2 className="section-title">Things I've built</h2>
          <p className="section-desc">
            Side projects and coursework that I actually cared about. Most of these started because I wanted to solve something specific.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 mb-8">
          {visible.map(project => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>

        {!showAll && rest.length > 0 && (
          <div className="text-center">
            <button onClick={() => setShowAll(true)} className="btn-outline">
              Show {rest.length} more projects
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M12 5v14M5 12l7 7 7-7"/>
              </svg>
            </button>
          </div>
        )}

        {showAll && (
          <div className="text-center">
            <button onClick={() => setShowAll(false)} className="btn-outline">Show less</button>
          </div>
        )}
      </div>
    </section>
  );
}
