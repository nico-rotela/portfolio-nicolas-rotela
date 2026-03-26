import "../styles/contacto.css";
import { useState } from "react";
import emailjs from "@emailjs/browser";

// Sección de contacto del portfolio
function Contacto() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .send(
        "service_5i4zgjv",
        "template_p1kskqd",
        formData,
        "efLO82uQXpeTXvtq2",
      )
      .then(
        (result) => {
          console.log("Email enviado:", result.text);
          alert("Mensaje enviado correctamente");

          // limpiar form
          setFormData({
            name: "",
            email: "",
            message: "",
          });
        },
        (error) => {
          console.log("Error:", error.text);
          alert("Hubo un error al enviar el mensaje");
        },
      );
  };
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
        </div>

        {/* Formulario */}
        <form className="contacto-form" onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            placeholder="Tu nombre"
            value={formData.name}
            onChange={handleChange}
            required
          />

          <input
            type="email"
            name="email"
            placeholder="Tu email"
            value={formData.email}
            onChange={handleChange}
            required
          />

          <textarea
            name="message"
            placeholder="Tu mensaje"
            value={formData.message}
            onChange={handleChange}
            required
          ></textarea>

          <button type="submit">Enviar</button>
        </form>
      </div>
    </section>
  );
}

export default Contacto;
