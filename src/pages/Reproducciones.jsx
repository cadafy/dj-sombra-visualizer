import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";
import { motion } from "framer-motion";

export default function Reproducciones() {
  const reproducciones = [
    {
      titulo: "🔥 Set en vivo - Noche de Fuego",
      descripcion: "Una mezcla intensa grabada en vivo desde Medellín.",
      fecha: "22 mar 2025",
    },
    {
      titulo: "🎧 Sesión Sunset Beat",
      descripcion: "Ritmos suaves al atardecer con vibras latinas.",
      fecha: "15 mar 2025",
    },
    {
      titulo: "🌙 Electrónica bajo la luna",
      descripcion: "Una noche mágica en la costa con house y techno.",
      fecha: "8 mar 2025",
    },
  ];

  return (
    <motion.div
      className="max-w-4xl mx-auto px-6 py-12 font-serif bg-white text-gray-800 rounded-3xl shadow-xl mt-10 mb-20"
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
     <Helmet>
  <title>Reproducciones | DJ Sombra Caliente</title>
  <meta name="description" content="Reproduce los sets más calientes de DJ Sombra Caliente. Electrónica, reggaetón y ritmos latinos." />
  <meta property="og:title" content="Sesiones en Vivo | DJ Sombra Caliente" />
  <meta property="og:description" content="Disfruta las mezclas que hacen vibrar la pista, en cualquier momento." />
  <meta property="og:image" content="/favicon.png" />
  <meta property="og:type" content="music.playlist" />
  <meta property="og:url" content="https://dj-sombra-visualizer.vercel.app/reproducciones" />
</Helmet>

      <h1 className="text-5xl font-bold text-center text-orange-600 mb-4 tracking-wide">
        ♬ Reproducción en Vivo
      </h1>
      <p className="text-center text-lg text-gray-600 mb-10">
        Revive los mejores sets y sesiones grabadas en directo por DJ Sombra Caliente.
      </p>

      <div className="space-y-8">
        {reproducciones.map((mix, index) => (
          <div
            key={index}
            className="bg-[#fff9f0] border-l-4 border-orange-500 p-6 rounded-xl shadow-sm"
          >
            <h2 className="text-xl font-bold text-[#4b2e83] mb-1">{mix.titulo}</h2>
            <p className="text-gray-700 mb-1">{mix.descripcion}</p>
            <p className="text-sm text-gray-500 italic">Publicado el {mix.fecha}</p>
          </div>
        ))}
      </div>

      <nav className="mt-10 flex flex-wrap justify-center gap-4 text-orange-600 font-semibold">
        <Link to="/" className="hover:underline hover:text-orange-800 transition">🏠 Inicio</Link>
        <Link to="/galeria" className="hover:underline hover:text-orange-800 transition">🎨 Galería</Link>
        <Link to="/fotos" className="hover:underline hover:text-orange-800 transition">📸 Fotos</Link>
        <Link to="/noticias" className="hover:underline hover:text-orange-800 transition">📰 Noticias</Link>
      </nav>
    </motion.div>
  );
}
