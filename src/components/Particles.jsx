import { useCallback } from "react";
import TSParticles from "react-tsparticles";
import { loadSlim } from "tsparticles-slim";

export default function Particles() {
  const particlesInit = useCallback(async (engine) => {
    await loadSlim(engine);
  }, []);

  return (
    <TSParticles
      id="tsparticles"
      init={particlesInit}
      className="absolute inset-0 z-0"
      options={{
        particles: {
          number: { value: 160, density: { enable: true, area: 1500 } },
          color: { value: "#ffffff" },
          opacity: { value: 0.3, random: true },
          size: { value: { min: 0.5, max: 1 }, random: true },
          move: {
            enable: true,
            direction: "right",
            speed: 0.05,
            outModes: { default: "out" },
          },
          links: { enable: false },
        },
        interactivity: {
          events: {
            onClick: { enable: true, mode: "push" },
          },
          modes: {
            push: { quantity: 4 },
          },
        },
        detectRetina: true,
        fullScreen: { enable: false },
      }}
    />
  );
}
