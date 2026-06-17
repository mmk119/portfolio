import { useScrollReveal } from '../../hooks/useScrollReveal';
import { hireReasons } from '../../data/portfolioData';

export default function HireMe() {
  const ref = useScrollReveal();

  return (
    <section id="hire" className="bg-bg">
      <div className="section-container">
        <div ref={ref} className="fade-up">
          <p className="section-label">Why Hire Me</p>
          <h2 className="section-title">What you'd get</h2>
          <p className="section-desc">
            Here's my honest pitch and what I think makes me useful on a team, based on what I've actually done so far.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-5 mb-8">
          {hireReasons.map((reason, i) => (
            <div key={i} className="card-3d p-5 group">
              <span className="text-xl mb-3 block">{reason.icon}</span>
              <h3 className="text-sm font-bold text-text mb-2 group-hover:text-accent transition-colors">{reason.title}</h3>
              <p className="text-sm text-muted leading-relaxed text-justify">{reason.body}</p>
            </div>
          ))}
        </div>

        <div className="gradient-border rounded-xl p-6 md:p-8 text-center">
          <h3 className="text-xl md:text-2xl font-bold text-white mb-3">Think we'd work well together?</h3>
          <p className="text-sm text-white/70 mb-5 max-w-lg mx-auto text-justify">
            I'm looking for full stack or backend roles where I can keep learning and ship things that matter. Happy to chat.
          </p>
          <div className="flex flex-wrap gap-3 justify-center">
            <button onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })} className="btn-primary">Let's connect</button>
            <a href="https://github.com/mmk119" target="_blank" rel="noopener noreferrer" className="btn-outline">
              See my work
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
