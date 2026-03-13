import "../styles/contacto.css";

// Sección de contacto del portfolio
function Contacto() {
  return (
    <section className="contacto section-card" id="contacto">
      <div className="container">
        {/* Título */}
        <h2 className="section-title">Contacto</h2>

        <p className="contacto-texto">
          Si querés contactarme o ver más de mi trabajo, podés encontrarme en:
        </p>

        {/* Links */}
        <div className="contacto-links">
          <a
            href="https://github.com/nico-rotela"
            target="_blank"
            className="contacto-link"
          >
            GitHub
          </a>

          <a
            href="https://www.linkedin.com/in/nicolas-rotela-67a3aa23a/"
            target="_blank"
            className="contacto-link"
          >
            LinkedIn
          </a>

          <a href="mailto:nicolasrotela@hotmail.com" className="contacto-link">
            Email
          </a>
        </div>
      </div>
    </section>
  );
}

export default Contacto;
