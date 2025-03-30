import { Link, useLocation } from "react-router-dom";
import { useState } from "react";

const Navbar = () => {
  const location = useLocation();
  const [menuAbierto, setMenuAbierto] = useState(false);

  const toggleMenu = () => setMenuAbierto(!menuAbierto);

  return (
    <nav className="bg-black text-yellow-400 px-4 py-4 flex items-center justify-between flex-wrap sticky top-0 z-50 shadow-md">
      <div className="text-xl font-bold">🔥 DJ Sombra Caliente</div>

      {/* Botón hamburguesa */}
      <button
        className="block lg:hidden text-yellow-400 focus:outline-none"
        onClick={toggleMenu}
      >
        ☰
      </button>

      {/* Menú */}
      <ul
        className={`w-full lg:w-auto lg:flex items-center gap-6 font-semibold mt-4 lg:mt-0 transition-all duration-300 ease-in-out ${
          menuAbierto ? "block" : "hidden lg:flex"
        }`}
      >
        {navItems.map(({ to, label }) => (
          <li key={to} className="my-2 lg:my-0">
            <Link
              to={to}
              className={`hover:text-orange-500 transition duration-300 ${
                location.pathname === to ? "border-b-2 border-orange-400 pb-1" : ""
              }`}
              onClick={() => setMenuAbierto(false)}
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

export default Navbar;
