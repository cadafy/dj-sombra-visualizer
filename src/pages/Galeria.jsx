import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";
import { motion } from "framer-motion";

export default function Galeria() {
  return (
    <motion.div
      className="max-w-4xl mx-auto px-6 py-12 font-serif text-gray-800 bg-white rounded-3xl shadow-xl mt-10 mb-20"
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7 }}
    >
      <Helmet>
  <title>Galería | DJ Sombra Caliente</title>
  <meta name="description" content="Explora visuales, efectos y experiencias inolvidables en la galería oficial de DJ Sombra Caliente." />
  <meta property="og:title" content="Galería de Visuales" />
  <meta property="og:description" content="Imágenes y vibras que capturan la energía de cada show de DJ Sombra Caliente." />
  <meta property="og:image" content="/favicon.png" />
  <meta property="og:type" content="website" />
  <meta property="og:url" content="https://dj-sombra-visualizer.vercel.app/galeria" />
</Helmet>

      <h1 className="text-5xl font-bold mb-4 text-center text-orange-600 tracking-wider">
        🎨 Galería de Visuales
      </h1>

      <p className="text-lg text-center text-gray-600 mb-8 max-w-2xl mx-auto">
        Explora los mejores visuales, efectos y momentos capturados durante las presentaciones
        en vivo de DJ Sombra Caliente. Una colección que resalta la esencia vibrante y única
        de cada show.
      </p>

      <div className="space-y-6 text-lg text-left max-w-2xl mx-auto">
        <p>
          📸{" "}
          <Link to="/fotos" className="text-blue-600 hover:text-blue-800 underline transition">
            Ver fotos destacadas
          </Link>
        </p>
        <p>
          🎧{" "}
          <Link to="/reproducciones" className="text-blue-600 hover:text-blue-800 underline transition">
            Ir a la página de reproducción
          </Link>
        </p>
        <p>
          🏠{" "}
          <Link to="/" className="text-blue-600 hover:text-blue-800 underline transition">
            Volver al inicio
          </Link>
        </p>
      </div>
    </motion.div>
  );
}
