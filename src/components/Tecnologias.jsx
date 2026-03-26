import "../styles/tecnologias.css";

function Tecnologias() {
  return (
    <section className="tecnologias section-card" id="tecnologias">
      <div className="container">
        <h2 className="section-title">Tecnologías</h2>

        <div className="tech-grid">
          <div className="tech-item">
            <img src="/html.svg" alt="REST APIs" />
            <span>HTML</span>
          </div>
          <div className="tech-item">
            <img src="/css.svg" alt="CSS" />
            <span>CSS</span>
          </div>
          <div className="tech-item">
            <img src="/js.svg" alt="JavaScript" />
            <span>JavaScript</span>
          </div>

          <div className="tech-item">
            <img src="/react.svg" alt="React" />
            <span>React</span>
          </div>

          <div className="tech-item">
            <img src="/node.svg" alt="Node.js" />
            <span>Node.js</span>
          </div>

          <div className="tech-item">
            <img src="/mysql.svg" alt="MySQL" />
            <span>MySQL</span>
          </div>

          <div className="tech-item">
            <img src="/git.svg" alt="Git" />
            <span>Git</span>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Tecnologias;
