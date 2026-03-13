// Pie de página del portfolio

import "../styles/footer.css";

function Footer() {
  return (
    <footer className="footer">
      <p>© {new Date().getFullYear()} Nicolás Rotela</p>
    </footer>
  );
}

export default Footer;
