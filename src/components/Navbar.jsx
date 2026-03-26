import { useState } from "react";
import "../styles/navbar.css";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="navbar">
      <div className="container navbar-container">
        <a href="#hero" className="logo">
          <img src="/logo.png" alt="NR logo" className="logo-img" />
        </a>

        {/* BOTÓN HAMBURGUESA */}
        <div className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)}>
          ☰
        </div>

        {/* Links */}
        <div className={`nav-links ${menuOpen ? "active" : ""}`}>
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
