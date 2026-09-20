import { useScrollReveal } from '../../hooks/useScrollReveal';
import { certifications } from '../../data/portfolioData';

export default function Certifications() {
  const ref = useScrollReveal();
  const verifiable = certifications.filter(c => c.url).length;

  return (
    <section id="certifications" className="bg-surface2">
      <div className="section-container">
        <div ref={ref} className="fade-up">
          <p className="section-label">Certifications</p>
          <h2 className="section-title">What I've studied</h2>
          <p className="section-desc">
            Courses and programs I've actually finished, newest first. {verifiable} of them are
            verifiable, so click through if you want to check.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-5">
          {certifications.map((cert, i) => (
            <div key={i} className="card p-4 flex flex-col h-full">
              <div className="flex items-start gap-2.5">
                <span className="text-green mt-0.5 text-xs font-bold flex-shrink-0">✓</span>
                <div>
                  <h3 className="text-sm text-text font-semibold leading-snug">{cert.name}</h3>
                  <div className="text-xs text-muted mt-1">
                    {cert.issuer}{cert.year ? ` · ${cert.year}` : ''}
                  </div>
                </div>
              </div>

              {cert.url && (
                <a
                  href={cert.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-auto pt-3 text-xs font-mono text-accent hover:text-accent-light transition-colors self-start"
                >
                  Verify ↗
                </a>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
