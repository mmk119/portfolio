import { useEffect, useState } from 'react';
import { personalInfo } from '../../data/portfolioData';
import Particles from '../Particles';

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
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-bg bg-grid pt-24">
      <Particles />

      {/* Background shapes */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div
          className="absolute animate-morph animate-float-slow"
          style={{
            width: 500,
            height: 500,
            background: 'radial-gradient(circle, rgba(96,165,250,0.10) 0%, transparent 70%)',
            top: '10%',
            right: '5%',
          }}
        />
        <div
          className="absolute animate-float-reverse"
          style={{
            width: 400,
            height: 400,
            background: 'radial-gradient(circle, rgba(99,102,241,0.08) 0%, transparent 70%)',
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
            border: '2px solid rgba(96,165,250,0.15)',
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
            border: '2px dashed rgba(96,165,250,0.12)',
            borderRadius: '50%',
            bottom: '28%',
            right: '18%',
            animation: 'spin 30s linear infinite',
          }}
        />
        <div className="absolute w-3 h-3 rounded-full bg-accent/25 top-[30%] left-[20%] animate-float" />
        <div className="absolute w-2 h-2 rounded-full bg-blue/25 top-[50%] right-[25%] animate-float-slow" />
        <div className="absolute w-3 h-3 rounded-full bg-green/20 bottom-[35%] left-[35%] animate-float-reverse" />
      </div>

      <div className="relative z-10 w-full max-w-4xl mx-auto px-5 md:px-10 text-center">
        {/* Photo */}
        <div className="mb-6">
          <img
            src={import.meta.env.BASE_URL + "myphoto.jpeg"}
            alt="Mohammad Kassem"
            className="w-28 h-28 sm:w-36 sm:h-36 rounded-full object-cover mx-auto border-3 border-surface shadow-lg ring-2 ring-accent/30"
          />
        </div>

        {/* Status badge */}
        <div className="inline-flex items-center gap-2 bg-surface border border-border/30 rounded-full px-4 py-2 mb-6 text-sm font-mono text-muted shadow-sm">
          <span className="glow-dot" />
          {personalInfo.availableForWork ? 'Open to opportunities' : 'Currently working'}
        </div>

        {/* Name */}
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold leading-none tracking-tight mb-6">
          <span className="text-text">Hi, I'm </span>
          <span className="text-gradient">Mohammad</span>
        </h1>

        {/* Typewriter */}
        <div className="h-10 flex items-center justify-center mb-6">
          <span className="font-mono text-xl sm:text-2xl md:text-3xl text-blue">
            {displayed}
            <span className="animate-pulse text-accent">|</span>
          </span>
        </div>

        {/* Summary */}
        <p className="text-muted text-base sm:text-lg max-w-2xl mx-auto leading-relaxed mb-10 text-justify">
          {personalInfo.summary}
        </p>

        {/* CTAs */}
        <div className="flex flex-wrap items-center justify-center gap-3 mb-12">
          <button onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })} className="btn-primary">
            View Projects
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M5 12h14M12 5l7 7-7 7"/>
            </svg>
          </button>
          <button onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })} className="btn-outline">Get in touch</button>
          <a href={personalInfo.github} target="_blank" rel="noopener noreferrer" className="btn-outline">
            GitHub
          </a>
          <a href="https://drive.google.com/file/d/1G6D_pHPf9hSqnJo8ihxZHrHuzNwXArAz/view?usp=sharing" target="_blank" rel="noopener noreferrer" className="btn-outline">
            Resume
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M12 5v14M5 12l7 7 7-7"/>
            </svg>
          </a>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-3 gap-3 sm:gap-4 max-w-md mx-auto">
          {[
            { num: '6+', label: 'Projects' },
            { num: '2', label: 'Active Roles' },
            { num: 'AUB', label: 'Scholar' },
          ].map(stat => (
            <div key={stat.label} className="text-center bg-surface border border-border/30 rounded-xl p-3 sm:p-4 shadow-sm">
              <div className="font-mono text-xl sm:text-2xl font-bold text-gradient">{stat.num}</div>
              <div className="text-xs text-muted uppercase tracking-widest mt-1">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll cue */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-muted animate-float" aria-hidden="true">
        <span className="text-xs font-mono tracking-widest">scroll</span>
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M12 5v14M5 12l7 7 7-7"/>
        </svg>
      </div>
    </section>
  );
}
