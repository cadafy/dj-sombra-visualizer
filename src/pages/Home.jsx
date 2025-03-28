import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";

const Home = () => {
  return (
    <div className="p-4 text-center">
      <Helmet>
        <title>Inicio | DJ Sombra Caliente</title>
      </Helmet>
      <h1 className="text-3xl font-bold mb-4">Bienvenido a DJ Sombra Caliente 🎧🔥</h1>
      <p className="mb-6">Descubre música, fotos y noticias del mundo DJ.</p>

      <nav className="space-y-2 flex flex-col items-center">
        <Link to="/fotos" className="text-blue-500 hover:underline">📸 Fotos</Link>
        <Link to="/galeria" className="text-blue-500 hover:underline">🎨 Galería</Link>
        <Link to="/reproducciones" className="text-blue-500 hover:underline">🎶 Reproducciones</Link>
        <Link to="/noticias" className="text-blue-500 hover:underline">📰 Noticias</Link>
        <Link to="/sube-tu-mix" className="text-blue-500 hover:underline">📤 Sube tu Mix</Link>
        <Link to="/contacto" className="text-blue-500 hover:underline">📬 Contacto</Link>
        <Link to="/politica" className="text-blue-500 hover:underline">⚖️ Política</Link>
      </nav>
    </div>
  );
};

export default Home;