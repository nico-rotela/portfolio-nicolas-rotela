import "../styles/tecnologias.css";

function Tecnologias() {
  return (
    <section className="tecnologias section-card" id="tecnologias">
      <div className="container">
        <h2 className="section-title">Tecnologías</h2>

        <div className="tech-grid">
          <div className="tech-item">
            <img src="/src/assets/html.svg" alt="REST APIs" />
            <span>HTML</span>
          </div>
          <div className="tech-item">
            <img src="/src/assets/css.svg" alt="CSS" />
            <span>CSS</span>
          </div>
          <div className="tech-item">
            <img src="/src/assets/js.svg" alt="JavaScript" />
            <span>JavaScript</span>
          </div>

          <div className="tech-item">
            <img src="/src/assets/react.svg" alt="React" />
            <span>React</span>
          </div>

          <div className="tech-item">
            <img src="/src/assets/node.svg" alt="Node.js" />
            <span>Node.js</span>
          </div>

          <div className="tech-item">
            <img src="/src/assets/mysql.svg" alt="MySQL" />
            <span>MySQL</span>
          </div>

          <div className="tech-item">
            <img src="/src/assets/git.svg" alt="Git" />
            <span>Git</span>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Tecnologias;
