import { useScrollReveal } from '../../hooks/useScrollReveal';
import { experiences } from '../../data/portfolioData';

export default function Experience() {
  const ref = useScrollReveal();

  return (
    <section id="experience" className="bg-surface2">
      <div className="section-container">
        <div ref={ref} className="fade-up">
          <p className="section-label">Experience</p>
          <h2 className="section-title">Where I've worked</h2>
          <p className="section-desc">
            Not just coursework. These are real teams, real codebases, and real deadlines I've shipped under.
          </p>
        </div>

        <div className="relative">
          <div className="absolute left-4 top-0 bottom-0 w-0.5 hidden md:block" style={{ background: 'linear-gradient(to bottom, #3b82f6, #6366f1, transparent)' }} />

          <div className="space-y-6">
            {experiences.map((exp) => (
              <div key={exp.id} className="relative md:pl-12">
                <div className="absolute left-0 top-5 hidden md:flex items-center justify-center w-7 h-7">
                  <div
                    className={`w-3 h-3 rounded-full border-2 border-surface ${
                      exp.current ? 'bg-green' : 'bg-border'
                    }`}
                    style={exp.current ? { boxShadow: '0 0 8px rgba(5,150,105,0.4)' } : {}}
                  />
                </div>

                <div className="card-3d p-5">
                  <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-1.5 mb-3">
                    <div>
                      <div className="flex items-center gap-2 flex-wrap">
                        <h3 className="text-base font-bold text-text">{exp.role}</h3>
                        {exp.current && (
                          <span className="inline-flex items-center gap-1 text-xs font-mono text-green bg-green/10 border border-green/20 px-2 py-0.5 rounded-full">
                            <span className="w-1.5 h-1.5 rounded-full bg-green animate-pulse" />
                            Now
                          </span>
                        )}
                      </div>
                      <div className="text-sm text-accent font-semibold mt-0.5">{exp.company}</div>
                    </div>
                    <div className="flex flex-col items-start sm:items-end gap-0.5 flex-shrink-0">
                      <span className="font-mono text-xs text-muted bg-surface2 border border-border px-2.5 py-0.5 rounded-md">
                        {exp.period}
                      </span>
                      <span className="text-xs text-muted">{exp.location}</span>
                    </div>
                  </div>

                  <ul className="space-y-2 mb-3">
                    {exp.bullets.map((bullet, j) => (
                      <li key={j} className="text-sm text-muted flex items-start gap-2">
                        <span className="text-blue mt-0.5 flex-shrink-0 text-xs font-bold">→</span>
                        <span>{bullet}</span>
                      </li>
                    ))}
                  </ul>

                  {exp.stack.length > 0 && (
                    <div className="flex flex-wrap gap-1.5 pt-3 border-t border-border">
                      {exp.stack.map(tech => (
                        <span key={tech} className="tag-accent">{tech}</span>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
