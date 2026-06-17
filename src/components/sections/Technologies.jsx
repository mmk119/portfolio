import { useState } from 'react';
import { useScrollReveal } from '../../hooks/useScrollReveal';
import { technologies } from '../../data/portfolioData';

const categories = [
  { key: 'all', label: 'All' },
  { key: 'language', label: 'Languages' },
  { key: 'frontend', label: 'Frontend' },
  { key: 'backend', label: 'Backend' },
  { key: 'database', label: 'Databases' },
  { key: 'tools', label: 'Tools' },
  { key: 'ai', label: 'AI & Data' },
  { key: 'practices', label: 'Practices' },
];

const categoryColors = {
  language: 'text-accent bg-accent/10 border-accent/20',
  frontend: 'text-blue bg-blue/10 border-blue/20',
  backend: 'text-green bg-green/10 border-green/20',
  database: 'text-orange-300 bg-orange-300/10 border-orange-300/20',
  tools: 'text-sky-300 bg-sky-300/10 border-sky-300/20',
  ai: 'text-violet-300 bg-violet-300/10 border-violet-300/20',
  practices: 'text-amber-300 bg-amber-300/10 border-amber-300/20',
};

export default function Technologies() {
  const [active, setActive] = useState('all');
  const ref = useScrollReveal();

  const filtered = active === 'all'
    ? technologies
    : technologies.filter(t => t.category === active);

  return (
    <section id="technologies" className="bg-bg">
      <div className="section-container">
        <div ref={ref} className="fade-up">
          <p className="section-label">Technologies</p>
          <h2 className="section-title">What I work with</h2>
          <p className="section-desc">
            The tools I actually use on a daily basis, not a wish list, but technologies I've shipped real code with.
          </p>
        </div>

        <div className="flex flex-wrap gap-2 mb-8">
          {categories.map(cat => (
            <button
              key={cat.key}
              onClick={() => setActive(cat.key)}
              aria-label={`Filter by ${cat.label}`}
              aria-pressed={active === cat.key}
              className={`font-mono text-xs px-4 py-2 rounded-lg border-2 transition-all duration-200 font-medium ${
                active === cat.key
                  ? 'text-white border-transparent shadow-md'
                  : 'bg-surface text-muted border-border/30 hover:border-accent/30 hover:text-text'
              }`}
              style={active === cat.key ? { background: 'linear-gradient(135deg, #3b82f6, #6366f1)' } : {}}
            >
              {cat.label}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-3">
          {filtered.map(tech => (
            <div
              key={tech.name}
              className={`font-mono text-xs px-3 py-2.5 rounded-lg border text-center transition-all duration-200 hover:-translate-y-0.5 hover:shadow-md cursor-default font-medium ${categoryColors[tech.category]}`}
            >
              {tech.name}
            </div>
          ))}
        </div>

        <p className="text-xs text-muted font-mono mt-5">
          {filtered.length} {active === 'all' ? 'total' : categories.find(c => c.key === active)?.label.toLowerCase()} technologies
        </p>
      </div>
    </section>
  );
}
