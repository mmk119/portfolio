import Hero from '../components/sections/Hero';
import About from '../components/sections/About';
import Experience from '../components/sections/Experience';
import Technologies from '../components/sections/Technologies';
import Skills from '../components/sections/Skills';
import Projects from '../components/sections/Projects';
import Certifications from '../components/sections/Certifications';
import HireMe from '../components/sections/HireMe';
import Contact from '../components/sections/Contact';

export default function Home() {
  return (
    <main>
      <Hero />
      <About />
      <Experience />
      <Technologies />
      <Skills />
      <Projects />
      <Certifications />
      <HireMe />
      <Contact />
    </main>
  );
}
