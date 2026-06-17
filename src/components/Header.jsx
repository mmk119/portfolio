import { useState, useEffect, useRef } from 'react';
import { personalInfo } from '../data/portfolioData';

const navLinks = [
  { label: 'About', href: '#about' },
  { label: 'Experience', href: '#experience' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Contact', href: '#contact' },
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('');
  const menuRef = useRef(null);
  const buttonRef = useRef(null);

  useEffect(() => {
    const sections = navLinks.map(l => l.href.replace('#', ''));
    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(e => {
          if (e.isIntersecting) setActiveSection(e.target.id);
        });
      },
      { rootMargin: '-40% 0px -55% 0px' }
    );
    sections.forEach(id => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!menuOpen) return;
    function handleClick(e) {
      if (
        menuRef.current && !menuRef.current.contains(e.target) &&
        buttonRef.current && !buttonRef.current.contains(e.target)
      ) {
        setMenuOpen(false);
      }
    }
    document.addEventListener('click', handleClick);
    return () => document.removeEventListener('click', handleClick);
  }, [menuOpen]);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [menuOpen]);

  const scrollTo = (href) => {
    const el = document.getElementById(href.replace('#', ''));
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[#0f172a80] backdrop-blur-[15px] border-b border-border/30 shadow-sm">
      <div className="w-full px-4 md:px-8 lg:px-12 h-16 md:h-20 flex items-center justify-between">
        <div className="inline-block text-center leading-none group cursor-default select-none">
          <span
            className="block text-gradient transition-transform duration-300 group-hover:scale-110"
            style={{ fontFamily: "'Sacramento', cursive", fontSize: '46px', letterSpacing: '3px' }}
          >
            mk
          </span>
          <svg className="block mx-auto -mt-2" width="120" height="16" viewBox="0 0 300 40" aria-hidden="true">
            <path
              d="M10 26 C 60 8, 110 8, 150 18 C 190 28, 240 30, 290 14"
              fill="none"
              stroke="url(#flourish-grad)"
              strokeWidth="2"
              strokeLinecap="round"
              className="mk-flourish-path"
            />
            <defs>
              <linearGradient id="flourish-grad" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#60a5fa" />
                <stop offset="100%" stopColor="#818cf8" />
              </linearGradient>
            </defs>
          </svg>
        </div>

        <nav className="hidden md:flex items-center gap-8" aria-label="Main navigation">
          {navLinks.map(link => (
            <button
              key={link.href}
              onClick={() => scrollTo(link.href)}
              className={`text-base font-medium transition-colors duration-200 bg-transparent border-none cursor-pointer ${
                activeSection === link.href.replace('#', '')
                  ? 'text-accent'
                  : 'text-text hover:text-accent'
              }`}
            >
              {link.label}
            </button>
          ))}
        </nav>

        <button
          ref={buttonRef}
          className="md:hidden p-2 -mr-2 text-muted hover:text-text transition-colors"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
          aria-expanded={menuOpen}
        >
          <div className="w-6 flex flex-col gap-1.5">
            <span className={`block h-0.5 bg-current transition-all duration-300 ${menuOpen ? 'rotate-45 translate-y-2' : ''}`} />
            <span className={`block h-0.5 bg-current transition-all duration-300 ${menuOpen ? 'opacity-0' : ''}`} />
            <span className={`block h-0.5 bg-current transition-all duration-300 ${menuOpen ? '-rotate-45 -translate-y-2' : ''}`} />
          </div>
        </button>
      </div>

      <div
        ref={menuRef}
        className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${
          menuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <nav className="bg-surface border-b border-border/30 px-6 py-4 flex flex-col gap-1">
          {navLinks.map(link => (
            <button
              key={link.href}
              onClick={() => {
                setMenuOpen(false);
                scrollTo(link.href);
              }}
              className={`text-base font-medium py-3 px-3 rounded-lg text-left bg-transparent border-none cursor-pointer transition-colors ${
                activeSection === link.href.replace('#', '')
                  ? 'text-accent bg-accent/5'
                  : 'text-text hover:text-accent hover:bg-accent/5'
              }`}
            >
              {link.label}
            </button>
          ))}
        </nav>
      </div>
    </header>
  );
}
