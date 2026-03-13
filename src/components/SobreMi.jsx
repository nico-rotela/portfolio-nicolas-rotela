import "../styles/sobreMi.css";
import avatar from "../assets/avatar.png";

function SobreMi() {
  return (
    <section className="sobre-mi section-card" id="sobre-mi">
      <div className="container">
        {/* título */}
        <h2 className="section-title sobre-mi-title">Sobre mí</h2>

        {/* contenido */}
        <div className="sobre-mi-content">
          <p className="sobre-mi-texto">
            Soy desarrollador Full Stack enfocado en construir aplicaciones web
            modernas utilizando tecnologías como JavaScript, React, Node.js y
            MySql. Me gusta desarrollar sistemas completos, desde el diseño de
            la base de datos hasta la interfaz de usuario.
          </p>

          <img
            src={avatar}
            alt="Ilustración programador"
            className="sobre-mi-avatar"
          />
        </div>
      </div>
    </section>
  );
}

export default SobreMi;
