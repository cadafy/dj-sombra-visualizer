import { motion } from "framer-motion";
import { Helmet } from "react-helmet";
import { fadeIn } from "../animations";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <motion.div
      className="max-w-6xl mx-auto px-4 py-12 text-center font-serif"
      {...fadeIn}
    >
      <Helmet>
        <title>Inicio | DJ Sombra Caliente</title>
        <meta name="description" content="Bienvenido al sitio oficial de DJ Sombra Caliente: mezclas exclusivas, visuales, noticias y más." />
        <meta property="og:title" content="Inicio | DJ Sombra Caliente" />
        <meta property="og:description" content="Explora el universo musical de DJ Sombra Caliente con vibras únicas y contenido ardiente." />
        <meta property="og:image" content="/favicon.ico" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://dj-sombra-visualizer.vercel.app/" />
      </Helmet>

      <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-orange-600 drop-shadow mb-6">
        🎧 DJ Sombra Caliente
      </h1>
      <p className="text-base sm:text-lg md:text-xl text-gray-700 mb-8 max-w-2xl mx-auto leading-relaxed">
        ¡Bienvenido al universo sonoro donde el beat nunca se detiene!  
        Descubre mezclas 🔥, visuales 🎬 y más.
      </p>

      {/* Botones principales */}
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 mt-12">
        <Link
          to="/reproducciones"
          className="bg-orange-500 text-white py-3 px-6 rounded-xl hover:bg-orange-600 hover:scale-105 hover:shadow-xl transition-all duration-300 text-lg"
        >
          ▶️ Escucha mixes
        </Link>
        <Link
          to="/galeria"
          className="bg-gray-200 hover:bg-gray-300 py-3 px-6 rounded-xl transition-all duration-300 shadow text-gray-800 text-lg hover:scale-105 hover:shadow-lg"
        >
          🎨 Visuales
        </Link>
        <Link
          to="/noticias"
          className="bg-blue-500 text-white py-3 px-6 rounded-xl hover:bg-blue-600 transition-all duration-300 shadow text-lg hover:scale-105 hover:shadow-lg"
        >
          📰 Noticias
        </Link>
      </div>

      {/* Llamado a acción */}
      <div className="mt-16">
        <Link
          to="/sube-tu-mix"
          className="inline-block bg-black text-white py-2 px-8 rounded-full hover:bg-gray-800 transition-all duration-300 text-base sm:text-lg hover:scale-105 shadow"
        >
          🎶 ¿Eres DJ? ¡Sube tu mix aquí!
        </Link>
      </div>
    </motion.div>
  );
}
