import { useScrollReveal } from '../../hooks/useScrollReveal';
import { personalInfo, activities, certifications } from '../../data/portfolioData';

export default function About() {
  const ref = useScrollReveal();

  return (
    <section id="about" className="bg-bg">
      <div className="section-container">
        <div ref={ref} className="fade-up">
          <p className="section-label">About Me</p>
          <h2 className="section-title">Who I am</h2>
        </div>

        <div className="grid md:grid-cols-2 gap-10 items-start">
          <div className="space-y-4 text-muted text-base leading-relaxed text-justify">
            <p>
              I studied CS at{' '}
              <span className="text-accent font-semibold">AUB</span> on a full scholarship and graduated this year.
              Right now I'm interning at{' '}
              <span className="text-text font-semibold">SiiRA World</span>, bridging engineering and product.
              Before that I interned at{' '}
              <span className="text-text font-semibold">Tawasoul</span> (backend) and{' '}
              <span className="text-text font-semibold">The Digital Hub</span> (full-stack).
            </p>
            <p>
              I got into programming because I wanted to know how things work, not just use apps, but truly understand what's happening underneath.
              That curiosity took me from writing C in a terminal to building web APIs, training ML models, and making Android apps.
              I like being the person who can touch every layer of a project.
            </p>
            <p>
              Outside of code, I helped create{' '}
              <span className="text-text font-semibold">SheREADs</span>, a storytelling program for orphan girls
              affected by conflict in South Lebanon. Not everything I build lives on a screen.
            </p>
            <p>Based in Lebanon, happy to work remotely with anyone, anywhere.</p>

            <div className="flex flex-wrap gap-3 pt-2">
              <a href={personalInfo.github} target="_blank" rel="noopener noreferrer" className="btn-outline text-sm py-2.5 px-5">
                GitHub
              </a>
              <a href={personalInfo.linkedin} target="_blank" rel="noopener noreferrer" className="btn-outline text-sm py-2.5 px-5">
                LinkedIn
              </a>
              <a href={`mailto:${personalInfo.email}`} className="btn-primary text-sm py-2.5 px-5">
                Email me
              </a>
            </div>
          </div>

          <div className="space-y-4">
            <div className="card p-5">
              <h3 className="text-xs font-mono text-blue uppercase tracking-widest mb-3 font-semibold">Certifications</h3>
              <div className="space-y-2.5">
                {certifications.map((cert, i) => (
                  <div key={i} className="flex items-start gap-2.5">
                    <span className="text-green mt-0.5 text-xs font-bold">✓</span>
                    <div>
                      <div className="text-sm text-text font-medium">{cert.name}</div>
                      <div className="text-xs text-muted">{cert.issuer}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="card p-5">
              <h3 className="text-xs font-mono text-accent uppercase tracking-widest mb-3 font-semibold">Leadership & Activities</h3>
              <div className="space-y-3">
                {activities.map((act, i) => (
                  <div key={i} className="flex items-start gap-2.5">
                    {/\.(png|webp|svg|jpg|jfif)$/.test(act.icon) ? (
                      <img src={act.icon} alt="" className="w-5 h-5 flex-shrink-0 object-contain" />
                    ) : (
                      <span className="text-base flex-shrink-0">{act.icon}</span>
                    )}
                    <div>
                      <div className="text-sm text-text font-semibold">{act.title}</div>
                      <div className="text-xs text-muted mt-0.5 leading-relaxed">{act.description}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
