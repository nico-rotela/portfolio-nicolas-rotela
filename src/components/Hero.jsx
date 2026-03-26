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
        <h2 className="hero-subtitle">Desarrollador Web Full Stack</h2>

        {/* Descripción corta */}
        <p className="hero-description">
          Desarrollador web enfocado en React, Node.js y bases de datos SQL.
          Estudiante en la UTN.
        </p>
      </div>
    </section>
  );
}

export default Hero;
