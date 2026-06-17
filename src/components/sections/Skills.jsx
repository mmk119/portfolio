import { useRef } from 'react';
import { useScrollReveal } from '../../hooks/useScrollReveal';
import { skillCategories } from '../../data/portfolioData';

const colorMap = {
  accent: { icon: 'bg-violet-50 border-violet-200', title: 'text-accent', check: 'text-accent' },
  green: { icon: 'bg-emerald-50 border-emerald-200', title: 'text-green', check: 'text-green' },
  purple: { icon: 'bg-purple-50 border-purple-200', title: 'text-purple-600', check: 'text-purple-600' },
  orange: { icon: 'bg-orange-50 border-orange-200', title: 'text-orange-600', check: 'text-orange-600' },
};

function SkillCard({ cat }) {
  const cardRef = useRef(null);
  const colors = colorMap[cat.color] || colorMap.accent;

  const handleMouseMove = (e) => {
    const card = cardRef.current;
    if (!card) return;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    card.style.transform = `perspective(800px) rotateX(${(y - centerY) / 30}deg) rotateY(${(centerX - x) / 30}deg) translateY(-4px)`;
  };

  const handleMouseLeave = () => {
    if (cardRef.current) cardRef.current.style.transform = 'perspective(800px) rotateX(0deg) rotateY(0deg) translateY(0px)';
  };

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="card-3d p-5"
    >
      <div className="flex items-center gap-3 mb-4">
        <div className={`w-9 h-9 rounded-lg border flex items-center justify-center text-lg ${colors.icon}`}>
          {/\.(png|webp|svg|jpg|jfif)$/.test(cat.icon) ? (
            <img src={cat.icon} alt="" className="w-5 h-5 object-contain" />
          ) : (
            cat.icon
          )}
        </div>
        <h3 className={`font-bold text-sm ${colors.title}`}>{cat.label}</h3>
      </div>
      <ul className="space-y-2.5">
        {cat.items.map((item, i) => (
          <li key={i} className="flex items-start gap-2.5 text-sm text-muted">
            <span className={`${colors.check} mt-0.5 flex-shrink-0 font-bold text-xs`}>✓</span>
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default function Skills() {
  const ref = useScrollReveal();

  return (
    <section id="skills" className="bg-surface2">
      <div className="section-container">
        <div ref={ref} className="fade-up">
          <p className="section-label">Skills</p>
          <h2 className="section-title">How I actually work</h2>
          <p className="section-desc">
            Beyond just knowing the syntax, here's what I'm like to work with on a team.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 gap-4 lg:gap-5">
          {skillCategories.map((cat) => (
            <SkillCard key={cat.label} cat={cat} />
          ))}
        </div>
      </div>
    </section>
  );
}
