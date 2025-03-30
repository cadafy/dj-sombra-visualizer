import { FaInstagram, FaYoutube, FaTiktok } from "react-icons/fa";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="bg-black text-white py-8 mt-20 font-serif">
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
        
        {/* Frase legal */}
        <p className="text-sm text-gray-300 text-center md:text-left">
          &copy; {new Date().getFullYear()} DJ Sombra Caliente. Todos los derechos reservados.
        </p>

        {/* Íconos de redes */}
        <div className="flex gap-6 text-2xl">
          <a
            href="https://instagram.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-orange-500 transition"
          >
            <FaInstagram />
          </a>
          <a
            href="https://youtube.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-red-500 transition"
          >
            <FaYoutube />
          </a>
          <a
            href="https://tiktok.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-pink-500 transition"
          >
            <FaTiktok />
          </a>
        </div>

        {/* Navegación adicional */}
        <div className="text-sm flex gap-4">
          <Link to="/politica" className="hover:text-gray-300 transition">Política</Link>
          <Link to="/contacto" className="hover:text-gray-300 transition">Contacto</Link>
          <Link to="/sube-tu-mix" className="hover:text-gray-300 transition">Sube tu Mix</Link>
        </div>
      </div>
    </footer>
  );
}