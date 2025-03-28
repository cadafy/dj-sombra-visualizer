import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        backgroundColor: "#111",
        padding: "10px 20px",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        zIndex: 1000,
        boxShadow: "0 2px 4px rgba(0,0,0,0.5)",
      }}
    >
      <h1 style={{ color: "#f90", fontSize: "20px", margin: 0 }}>DJ Sombra</h1>
      <div style={{ display: "flex", gap: "15px" }}>
        <Link to="/" style={linkStyle}>Home</Link>
        <Link to="/fotos" style={linkStyle}>Fotos</Link>
        <Link to="/galeria" style={linkStyle}>Galería</Link>
        <Link to="/noticias" style={linkStyle}>Noticias</Link>
        <Link to="/reproducciones" style={linkStyle}>Reproducciones</Link>
        <Link to="/sube-tu-mix" style={linkStyle}>Sube tu Mix</Link>
        <Link to="/contacto" style={linkStyle}>Contacto</Link>
      </div>
    </nav>
  );
}

const linkStyle = {
  color: "#fff",
  textDecoration: "none",
  fontWeight: "bold",
  transition: "color 0.3s",
};

export default Navbar;