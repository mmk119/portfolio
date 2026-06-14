import { useScrollReveal } from '../../hooks/useScrollReveal';
import { hireReasons } from '../../data/portfolioData';

export default function HireMe() {
  const ref = useScrollReveal();

  return (
    <section id="hire" className="bg-white">
      <div className="section-container">
        <div ref={ref} className="fade-up">
          <p className="section-label">Why Hire Me</p>
          <h2 className="section-title">What you'd get</h2>
          <p className="section-desc">
            Here's my honest pitch and what I think makes me useful on a team, based on what I've actually done so far.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 mb-12">
          {hireReasons.map((reason, i) => (
            <div key={i} className="card-3d p-7 group">
              <span className="text-3xl mb-5 block">{reason.icon}</span>
              <h3 className="text-lg font-bold text-text mb-3 group-hover:text-accent transition-colors">{reason.title}</h3>
              <p className="text-base text-muted leading-relaxed text-justify">{reason.body}</p>
            </div>
          ))}
        </div>

        <div className="gradient-border rounded-2xl p-10 text-center">
          <h3 className="text-3xl font-bold text-text mb-4">Think we'd work well together?</h3>
          <p className="text-lg text-muted mb-8 max-w-lg mx-auto text-justify">
            I'm looking for full stack or backend roles where I can keep learning and ship things that matter. Happy to chat.
          </p>
          <div className="flex flex-wrap gap-3 justify-center">
            <a href="#contact" className="btn-primary">Let's connect</a>
            <a href="https://github.com/mmk119" target="_blank" rel="noopener noreferrer" className="btn-outline">
              See my work
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
