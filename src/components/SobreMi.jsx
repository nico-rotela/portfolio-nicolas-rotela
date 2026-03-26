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
            Empecé a programar por curiosidad y terminé encontrando algo que
            realmente me gusta. Me formé con cursos en CoderHouse y actualmente
            estudio en la UTN, con especial interés en el backend y la
            resolución de problemas. Estoy desarrollando proyectos propios con
            JavaScript, React y Node.js mientras busco mi primera oportunidad en
            IT. Vengo de más de 10 años en atención al cliente, lo que me dio
            una base sólida en comunicación, trabajo en equipo y manejo de
            relaciones.
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
