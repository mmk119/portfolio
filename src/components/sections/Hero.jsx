import { useEffect, useState } from 'react';
import { personalInfo } from '../../data/portfolioData';

const roles = ['Full Stack Engineer', 'Backend Developer', 'Problem Solver', 'CS Graduate'];

export default function Hero() {
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayed, setDisplayed] = useState('');
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const current = roles[roleIndex];
    let timeout;

    if (!deleting && displayed.length < current.length) {
      timeout = setTimeout(() => setDisplayed(current.slice(0, displayed.length + 1)), 80);
    } else if (!deleting && displayed.length === current.length) {
      timeout = setTimeout(() => setDeleting(true), 2200);
    } else if (deleting && displayed.length > 0) {
      timeout = setTimeout(() => setDisplayed(displayed.slice(0, -1)), 40);
    } else if (deleting && displayed.length === 0) {
      setDeleting(false);
      setRoleIndex(i => (i + 1) % roles.length);
    }

    return () => clearTimeout(timeout);
  }, [displayed, deleting, roleIndex]);

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-white bg-grid pt-24">
      {/* Background shapes */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div
          className="absolute animate-morph animate-float-slow"
          style={{
            width: 500,
            height: 500,
            background: 'radial-gradient(circle, rgba(109,40,217,0.08) 0%, transparent 70%)',
            top: '10%',
            right: '5%',
          }}
        />
        <div
          className="absolute animate-float-reverse"
          style={{
            width: 400,
            height: 400,
            background: 'radial-gradient(circle, rgba(30,64,175,0.07) 0%, transparent 70%)',
            bottom: '10%',
            left: '5%',
            borderRadius: '30% 60% 70% 40% / 50% 60% 30% 60%',
            animation: 'morph 10s ease-in-out infinite reverse, floatReverse 7s ease-in-out infinite',
          }}
        />

        {/* Decorative shapes */}
        <div
          className="absolute hidden md:block"
          style={{
            width: 70,
            height: 70,
            border: '2px solid rgba(30,64,175,0.15)',
            top: '22%',
            left: '10%',
            animation: 'float 6s ease-in-out infinite, spin 25s linear infinite',
            transform: 'rotate(45deg)',
            borderRadius: '4px',
          }}
        />
        <div
          className="absolute hidden md:block"
          style={{
            width: 100,
            height: 100,
            border: '2px dashed rgba(109,40,217,0.12)',
            borderRadius: '50%',
            bottom: '28%',
            right: '18%',
            animation: 'spin 30s linear infinite',
          }}
        />
        <div className="absolute w-3 h-3 rounded-full bg-accent/20 top-[30%] left-[20%] animate-float" />
        <div className="absolute w-2 h-2 rounded-full bg-blue/20 top-[50%] right-[25%] animate-float-slow" />
        <div className="absolute w-3 h-3 rounded-full bg-green/15 bottom-[35%] left-[35%] animate-float-reverse" />
      </div>

      <div className="relative z-10 w-full max-w-5xl mx-auto px-6 md:px-12 lg:px-16 text-center">
        {/* Photo */}
        <div className="mb-10">
          <img
            src="/myphoto.jpeg"
            alt="Mohammad Kassem"
            className="w-36 h-36 sm:w-44 sm:h-44 rounded-full object-cover mx-auto border-4 border-white shadow-lg ring-2 ring-accent/20"
          />
        </div>

        {/* Status badge */}
        <div className="inline-flex items-center gap-2.5 bg-white border border-border rounded-full px-5 py-2.5 mb-8 text-base font-mono text-muted shadow-sm">
          <span className="glow-dot" />
          {personalInfo.availableForWork ? 'Open to opportunities' : 'Currently working'}
        </div>

        {/* Name */}
        <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-extrabold leading-none tracking-tight mb-8">
          <span className="text-text">Hi, I'm </span>
          <span className="text-gradient">Mohammad</span>
        </h1>

        {/* Typewriter */}
        <div className="h-14 flex items-center justify-center mb-10">
          <span className="font-mono text-2xl sm:text-3xl md:text-4xl text-blue">
            {displayed}
            <span className="animate-pulse text-accent">|</span>
          </span>
        </div>

        {/* Summary */}
        <p className="text-muted text-lg sm:text-xl md:text-2xl max-w-4xl mx-auto leading-relaxed mb-14 text-justify">
          {personalInfo.summary}
        </p>

        {/* CTAs */}
        <div className="flex flex-wrap items-center justify-center gap-4 mb-16">
          <a href="#projects" className="btn-primary">
            View Projects
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M5 12h14M12 5l7 7-7 7"/>
            </svg>
          </a>
          <a href="#contact" className="btn-outline">Get in touch</a>
          <a href={personalInfo.github} target="_blank" rel="noopener noreferrer" className="btn-outline">
            GitHub
          </a>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-3 gap-4 sm:gap-6 max-w-xl mx-auto">
          {[
            { num: '6+', label: 'Projects' },
            { num: '2', label: 'Active Roles' },
            { num: 'AUB', label: 'Scholar' },
          ].map(stat => (
            <div key={stat.label} className="text-center bg-white border border-border rounded-2xl p-4 sm:p-6 shadow-sm">
              <div className="font-mono text-2xl sm:text-3xl font-bold text-gradient">{stat.num}</div>
              <div className="text-xs sm:text-sm text-muted uppercase tracking-widest mt-1.5">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll cue */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-muted animate-float">
        <span className="text-xs font-mono tracking-widest">scroll</span>
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M12 5v14M5 12l7 7 7-7"/>
        </svg>
      </div>
    </section>
  );
}
