import "../styles/navbar.css";

// Barra de navegación del portfolio

function Navbar() {
  return (
    <nav className="navbar">
      <div className="container navbar-container">
        {/* Logo / Nombre */}
        <a href="#hero" className="logo">
          <img src="/logo.png" alt="NR logo" className="logo-img" />
        </a>

        {/* Links */}
        <div className="nav-links">
          <a href="#sobre-mi">Sobre mí</a>
          <a href="#proyectos">Proyectos</a>
          <a href="#tecnologias">Tecnologías</a>
          <a href="#contacto">Contacto</a>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
