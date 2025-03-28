import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";

const Home = () => {
  return (
    <div className="p-4 text-center">
      <Helmet>
        <title>Inicio | DJ Sombra Caliente</title>
      </Helmet>
      <h1 className="text-3xl font-bold mb-4">
  🎧 Bienvenido de nuevo a DJ Sombra Caliente 🔥
</h1>
      <p className="mb-6">Descubre música, fotos y noticias del mundo DJ.</p>

      <nav className="mt-4 grid gap-2 w-fit mx-auto text-left">
        <Link to="/fotos" className="hover:text-orange-600">📸 Fotos</Link>
        <Link to="/galeria" className="hover:text-orange-600">🎨 Galería</Link>
        <Link to="/reproducciones" className="hover:text-orange-600">🎶 Reproducciones</Link>
        <Link to="/noticias" className="hover:text-orange-600">📰 Noticias</Link>
        <Link to="/sube-tu-mix" className="hover:text-orange-600">📤 Sube tu Mix</Link>
        <Link to="/contacto" className="hover:text-orange-600">📬 Contacto</Link>
        <Link to="/politica" className="hover:text-orange-600">⚖️ Política</Link>
      </nav>
    </div>
  );
};

export default Home;