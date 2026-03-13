// Hero.jsx
// Sección principal del portfolio (Hero section)

import "../styles/hero.css";

function Hero() {
  return (
    <section className="hero" id="hero">
      {/* Glow decorativo */}
      <div className="hero-glow"></div>

      {/* Contenedor principal */}
      <div className="hero-container">
        {/* Nombre */}
        <h1 className="hero-title">Nicolas Rotela</h1>

        {/* Profesión */}
        <h2 className="hero-subtitle">Full Stack Developer</h2>

        {/* Descripción corta */}
        <p className="hero-description">
          Construyo aplicaciones web modernas utilizando JavaScript, React y
          Node.js.
        </p>
      </div>
    </section>
  );
}

export default Hero;
