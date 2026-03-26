import "../styles/proyectos.css";

// Sección donde mostramos los proyectos del portfolio

function Proyectos() {
  return (
    <section className="proyectos section-card" id="proyectos">
      <div className="container">
        {/* Título */}
        <h2 className="section-title">Proyectos</h2>

        {/* GRID DE PROYECTOS */}
        <div className="proyectos-grid">
          {/* Card del proyecto */}
          <div className="proyecto-card">
            <img
              src="/mrChispaCard.png"
              alt="Mr Chispa POS"
              className="proyecto-img"
            />
            <div className="proyecto-info">
              <h3 className="proyecto-titulo">Mr.Chispa POS</h3>

              <p className="proyecto-descripcion">
                Sistema de punto de venta que permite gestionar productos,
                registrar ventas y actualizar el stock en tiempo real.
                Desarrollado con React en el frontend y Node.js con MySQL en el
                backend.
              </p>

              <div className="proyecto-tech">
                <span>React</span>
                <span>Node.js</span>
                <span>Express</span>
                <span>MySQL</span>
              </div>

              <div className="proyecto-links">
                <a
                  href="https://github.com/nico-rotela/Mr-Chipa-Pos"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn"
                >
                  Ver código
                </a>
                <a
                  href="https://www.youtube.com/watch?v=D7Dh1VpulBg"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-outline"
                >
                  Ver demo
                </a>
              </div>
            </div>
          </div>

          {/* Card del portfolio */}
          <div className="proyecto-card">
            <img
              src="/portafolio-card.png"
              alt="Portfolio Personal"
              className="proyecto-img"
            />

            <div className="proyecto-info">
              <h3 className="proyecto-titulo">Portfolio Personal</h3>

              <p className="proyecto-descripcion">
                Portfolio personal desarrollado en React, enfocado en presentar
                proyectos, stack tecnológico y experiencia como desarrollador
                Full Stack.
              </p>

              <div className="proyecto-tech">
                <span>React</span>
                <span>JavaScript</span>
                <span>CSS</span>
                <span>Vite</span>
              </div>

              <div className="proyecto-links">
                <a
                  href="https://github.com/nico-rotela/portfolio-nicolas-rotela"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn"
                >
                  Ver código
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Proyectos;
