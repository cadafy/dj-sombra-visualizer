import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
  const location = useLocation();

  return (
    <nav style={navStyle}>
      <div style={logoStyle}>🔥 DJ Sombra Caliente</div>
      <ul style={navListStyle}>
        {navItems.map(({ to, label }) => (
          <li key={to}>
            <Link
              to={to}
              style={{
                ...navLinkStyle,
                borderBottom: location.pathname === to ? "2px solid #FFD700" : "none",
              }}
            >
              {label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

const navItems = [
  { to: "/", label: "Inicio" },
  { to: "/fotos", label: "Fotos" },
  { to: "/galeria", label: "Galería" },
  { to: "/noticias", label: "Noticias" },
  { to: "/reproducciones", label: "Reproducciones" },
  { to: "/sube-tu-mix", label: "Sube tu Mix" },
  { to: "/contacto", label: "Contacto" },
  { to: "/politica", label: "Política" },
];

const navStyle = {
  backgroundColor: "#111",
  color: "#fff",
  padding: "1rem",
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  flexWrap: "wrap",
  position: "sticky",
  top: 0,
  zIndex: 1000,
};

const logoStyle = {
  fontWeight: "bold",
  fontSize: "1.3rem",
};

const navListStyle = {
  listStyle: "none",
  display: "flex",
  gap: "1rem",
  flexWrap: "wrap",
  padding: 0,
  margin: 0,
};

const navLinkStyle = {
  color: "#FFD700", // dorado
  textDecoration: "none",
  fontWeight: "bold",
  transition: "all 0.3s",
};

export default Navbar;