import { Link } from "react-router-dom";

export default function Layout({ children }) {
  return (
    <div className="min-h-screen flex flex-col font-serif bg-[#fdfbf8] text-[#333]">
      {/* Encabezado */}
      <header className="bg-[#fff9f0] shadow-md p-6">
        <h1 className="text-4xl font-bold text-center text-[#e25822] tracking-wider">
          DJ Sombra Caliente
        </h1>
        <nav className="mt-4 flex flex-wrap justify-center gap-4 text-sm font-semibold text-[#4b2e83]">
          <Link to="/">Inicio</Link>
          <Link to="/fotos">Fotos</Link>
          <Link to="/galeria">Galería</Link>
          <Link to="/noticias">Noticias</Link>
          <Link to="/reproducciones">Reproducciones</Link>
          <Link to="/sube-tu-mix">Sube tu Mix</Link>
          <Link to="/contacto">Contacto</Link>
        </nav>
      </header>

      {/* Contenido dinámico */}
      <main className="flex-grow container mx-auto px-4 py-6">
        {children}
      </main>

      {/* Footer */}
      <footer className="bg-[#fff9f0] text-center py-4 border-t text-sm text-gray-500">
        © {new Date().getFullYear()} DJ Sombra Caliente. Todos los derechos reservados.
      </footer>
    </div>
  );
}
