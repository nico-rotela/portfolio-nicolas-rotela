import Hero from "./components/Hero";
import SobreMi from "./components/SobreMi";
import Proyectos from "./components/Proyectos";
import Tecnologias from "./components/Tecnologias";
import Contacto from "./components/Contacto";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
// Componente raíz de la aplicación

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <SobreMi />
      <Proyectos />
      <Tecnologias />
      <Contacto />
      <Footer />
    </>
  );
}

export default App;
