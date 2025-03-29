import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";
import { motion } from "framer-motion";

export default function Fotos() {
  const fotos = [
    "https://source.unsplash.com/600x400/?dj,party",
    "https://source.unsplash.com/600x400/?concert,lights",
    "https://source.unsplash.com/600x400/?music,crowd",
    "https://source.unsplash.com/600x400/?dj,club",
    "https://source.unsplash.com/600x400/?dj,festival",
    "https://source.unsplash.com/600x400/?dj,stage",
  ];

  return (
    <motion.div
      className="p-6 max-w-6xl mx-auto bg-white shadow-xl rounded-3xl mt-10 mb-20"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <Helmet>
  <title>Fotos | DJ Sombra Caliente</title>
  <meta name="description" content="Mira las mejores capturas de los shows más encendidos de DJ Sombra Caliente." />
  <meta property="og:title" content="Galería de Fotos | DJ Sombra Caliente" />
  <meta property="og:description" content="Recorre momentos inolvidables y la energía en vivo de cada evento." />
  <meta property="og:image" content="/favicon.png" />
  <meta property="og:type" content="website" />
  <meta property="og:url" content="https://dj-sombra-visualizer.vercel.app/fotos" />
</Helmet>

      <h1 className="text-5xl font-bold text-center text-orange-600 mb-4 tracking-wide">
        📸 Galería de Fotos
      </h1>
      <p className="text-center text-gray-600 text-lg mb-10 font-serif">
        Capturando la energía, el fuego y los momentos inolvidables de DJ Sombra Caliente.
      </p>

      {/* Grid de fotos */}
      <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
        {fotos.map((src, index) => (
          <motion.div
            key={index}
            whileHover={{ scale: 1.05 }}
            className="overflow-hidden rounded-2xl shadow-lg"
          >
            <img
              src={src}
              alt={`Foto ${index + 1}`}
              className="w-full h-60 object-cover"
            />
          </motion.div>
        ))}
      </div>

      {/* Navegación inferior */}
      <nav className="mt-10 flex flex-wrap justify-center gap-4 text-orange-600 font-semibold">
        <Link to="/" className="hover:underline hover:text-orange-800 transition">🏠 Inicio</Link>
        <Link to="/galeria" className="hover:underline hover:text-orange-800 transition">🎨 Galería</Link>
        <Link to="/reproducciones" className="hover:underline hover:text-orange-800 transition">🎵 Reproducciones</Link>
        <Link to="/noticias" className="hover:underline hover:text-orange-800 transition">📰 Noticias</Link>
      </nav>
    </motion.div>
  );
}
