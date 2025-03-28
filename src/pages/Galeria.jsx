import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";

export default function Galeria() {
  return (
    <div className="p-6">
      <Helmet>
        <title>Galería | DJ Sombra Caliente</title>
      </Helmet>
      <h1 className="text-3xl font-bold mb-4">Galería de Visuales 🎨</h1>
      <p className="mb-6">Explora los visuales, efectos y momentos capturados en escena por DJ Sombra Caliente.</p>
      <div className="space-y-2">
        <Link to="/fotos" className="text-blue-500 hover:underline">Ver fotos</Link><br />
        <Link to="/reproduccion" className="text-blue-500 hover:underline">Ir a la página de reproducción</Link><br />
        <Link to="/" className="text-blue-500 hover:underline">Volver al Home</Link>
      </div>
    </div>
  );
}
