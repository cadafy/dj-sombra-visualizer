import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";

export default function Fotos() {
  return (
    <div className="p-4">
      <Helmet>
        <title>Fotos | DJ Sombra Caliente</title>
      </Helmet>
      <h1 className="text-3xl font-bold mb-4">Galería de Fotos 📸</h1>
      <p className="mb-4">Bienvenido a la sección de fotos de eventos, presentaciones y momentos especiales de DJ Sombra Caliente.</p>
      <nav className="flex gap-4">
        <Link to="/">Inicio</Link>
        <Link to="/galeria">Galería</Link>
        <Link to="/reproduccion">Reproducción</Link>
        <Link to="/noticias">Noticias</Link>
      </nav>
    </div>
  );
}
