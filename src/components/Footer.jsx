import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer style={{ backgroundColor: "#111", color: "white", padding: "2rem 1rem", textAlign: "center" }}>
      <div style={{ marginBottom: "1rem" }}>
        <strong>🔥 DJ Sombra Caliente 🔥</strong>
      </div>
      <div style={{ display: "flex", justifyContent: "center", flexWrap: "wrap", gap: "1rem", marginBottom: "1rem" }}>
        <Link to="/" style={linkStyle}>Inicio</Link>
        <Link to="/fotos" style={linkStyle}>Fotos</Link>
        <Link to="/galeria" style={linkStyle}>Galería</Link>
        <Link to="/noticias" style={linkStyle}>Noticias</Link>
        <Link to="/reproducciones" style={linkStyle}>Reproducciones</Link>
        <Link to="/sube-tu-mix" style={linkStyle}>Sube tu Mix</Link>
        <Link to="/contacto" style={linkStyle}>Contacto</Link>
        <Link to="/politica" style={linkStyle}>Política</Link>
      </div>
      <small>© 2025 DJ Sombra Caliente. Todos los derechos reservados.</small>
    </footer>
  );
};

const linkStyle = {
  color: "#FFD700", // dorado
  textDecoration: "none",
  fontWeight: "bold",
  transition: "0.3s",
};

export default Footer;