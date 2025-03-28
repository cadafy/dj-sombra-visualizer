import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="min-h-screen bg-white text-gray-900 p-8">
      <Helmet>
        <title>Inicio | DJ Sombra Caliente</title>
      </Helmet>

      <h1 className="text-4xl font-extrabold mb-4 flex items-center gap-2">
        🎧 Bienvenido a DJ Sombra Caliente 🔥
      </h1>
      <p className="mb-6 text-lg">
        Descubre música, fotos y noticias del mundo DJ.
      </p>

      <ul className="space-y-2 text-blue-600 font-semibold underline">
        <li>📸 <Link to="/fotos">Fotos</Link></li>
        <li>🎨 <Link to="/galeria">Galería</Link></li>
        <li>🎶 <Link to="/reproducciones">Reproducciones</Link></li>
        <li>📰 <Link to="/noticias">Noticias</Link></li>
        <li>🌟 <Link to="/sube-tu-mix">Sube tu Mix</Link></li>
        <li>📬 <Link to="/contacto">Contacto</Link></li>
        <li>⚖️ <Link to="/politica">Política</Link></li>
      </ul>
    </div>
  );
}