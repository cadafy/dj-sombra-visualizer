// src/pages/Reproduccion.jsx
import { Link } from "react-router-dom";

export default function Reproduccion() {
  return (
    <div>
      <h1>♬ Reproducción en Vivo ♬</h1>
      <p>Explora las sesiones de mezcla en vivo de DJ Sombra Caliente y vibra con el momento.</p>
      <nav>
        <ul>
          <li><Link to="/">Inicio</Link></li>
          <li><Link to="/galeria">Galería</Link></li>
          <li><Link to="/fotos">Fotos</Link></li>
          <li><Link to="/noticias">Noticias</Link></li>
        </ul>
      </nav>
    </div>
  );
}
