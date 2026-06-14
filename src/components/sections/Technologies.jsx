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
  language: 'text-accent bg-violet-50 border-violet-200',
  frontend: 'text-blue bg-blue-50 border-blue-200',
  backend: 'text-green bg-emerald-50 border-emerald-200',
  database: 'text-orange-600 bg-orange-50 border-orange-200',
  tools: 'text-slate-600 bg-slate-50 border-slate-200',
  ai: 'text-purple-600 bg-purple-50 border-purple-200',
  practices: 'text-amber-600 bg-amber-50 border-amber-200',
};

export default function Technologies() {
  const [active, setActive] = useState('all');
  const ref = useScrollReveal();

  const filtered = active === 'all'
    ? technologies
    : technologies.filter(t => t.category === active);

  return (
    <section id="technologies" className="bg-white">
      <div className="section-container">
        <div ref={ref} className="fade-up">
          <p className="section-label">Technologies</p>
          <h2 className="section-title">What I work with</h2>
          <p className="section-desc">
            The tools I actually use on a daily basis, not a wish list, but technologies I've shipped real code with.
          </p>
        </div>

        <div className="flex flex-wrap gap-2.5 mb-12">
          {categories.map(cat => (
            <button
              key={cat.key}
              onClick={() => setActive(cat.key)}
              className={`font-mono text-sm px-5 py-2.5 rounded-xl border-2 transition-all duration-200 font-medium ${
                active === cat.key
                  ? 'text-white border-transparent shadow-md'
                  : 'bg-white text-muted border-border hover:border-accent/30 hover:text-text'
              }`}
              style={active === cat.key ? { background: 'linear-gradient(135deg, #6d28d9, #1e40af)' } : {}}
            >
              {cat.label}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4">
          {filtered.map(tech => (
            <div
              key={tech.name}
              className={`font-mono text-sm px-5 py-4 rounded-xl border text-center transition-all duration-200 hover:-translate-y-1 hover:shadow-md cursor-default font-medium ${categoryColors[tech.category]}`}
            >
              {tech.name}
            </div>
          ))}
        </div>

        <p className="text-sm text-muted font-mono mt-8">
          {filtered.length} {active === 'all' ? 'total' : categories.find(c => c.key === active)?.label.toLowerCase()} technologies
        </p>
      </div>
    </section>
  );
}
