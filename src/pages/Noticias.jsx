import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { fadeIn } from "../animations";
import { Helmet } from "react-helmet";

const Noticias = () => {
  return (
    <motion.div
      className="max-w-6xl mx-auto p-6 text-center font-serif"
      {...fadeIn}
    >
	 <Helmet>
    <title>Noticias | DJ Sombra Caliente</title>
    <meta name="description" content="Las últimas noticias del mundo DJ, lanzamientos, colaboraciones y eventos en los que brilla DJ Sombra Caliente." />
    <meta property="og:title" content="Noticias DJ | DJ Sombra Caliente" />
    <meta property="og:description" content="Entérate de todo lo nuevo en la vida musical de DJ Sombra Caliente." />
    <meta property="og:image" content="/favicon.png" />
    <meta property="og:type" content="article" />
    <meta property="og:url" content="https://dj-sombra-visualizer.vercel.app/noticias" />
  </Helmet>
      <h1 className="text-5xl font-bold mb-6 text-orange-500 drop-shadow">
        📰 Noticias DJ
      </h1>
      <p className="text-lg mb-10 text-gray-700">
        Lo último de la farándula musical y DJs top del mundo 🎧🔥
      </p>

      {/* GRID de noticias */}
      <div className="grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {/* Noticia 1 */}
        <motion.div
          whileHover={{ scale: 1.05 }}
          className="bg-white rounded-2xl shadow-md transition overflow-hidden"
        >
          <img
            src="https://source.unsplash.com/600x300/?dj"
            alt="DJ News"
            className="w-full h-40 object-cover"
          />
          <div className="p-4 text-left">
            <h2 className="text-xl font-semibold text-orange-600">
              DJ Alok rompe récords en Brasil
            </h2>
            <p className="text-sm text-gray-600 mt-2">
              Un show histórico con luces y beats al límite 🔊
            </p>
            <p className="text-xs text-gray-400 mt-1">
              Por <span className="font-semibold">Equipo Sombra</span> • 29 mar 2025 • #Brasil #DJAlok
            </p>
          </div>
        </motion.div>

        {/* Noticia 2 */}
        <motion.div
          whileHover={{ scale: 1.05 }}
          className="bg-white rounded-2xl shadow-md transition overflow-hidden"
        >
          <img
            src="https://source.unsplash.com/600x300/?concert"
            alt="Music Event"
            className="w-full h-40 object-cover"
          />
          <div className="p-4 text-left">
            <h2 className="text-xl font-semibold text-orange-600">
              Nueva colaboración: Tiësto & Karol G
            </h2>
            <p className="text-sm text-gray-600 mt-2">
              El reggaetón y el EDM se fusionan en un tema épico 🎶
            </p>
            <p className="text-xs text-gray-400 mt-1">
              Por <span className="font-semibold">Equipo Sombra</span> • 28 mar 2025 • #Tiësto #KarolG
            </p>
          </div>
        </motion.div>

        {/* Noticia 3 */}
        <motion.div
          whileHover={{ scale: 1.05 }}
          className="bg-white rounded-2xl shadow-md transition overflow-hidden"
        >
          <img
            src="https://source.unsplash.com/600x300/?music"
            alt="Trending"
            className="w-full h-40 object-cover"
          />
          <div className="p-4 text-left">
            <h2 className="text-xl font-semibold text-orange-600">
              Top 5 DJs latinos del momento
            </h2>
            <p className="text-sm text-gray-600 mt-2">
              Conoce a los reyes de la fiesta en América Latina 🇲🇽🇨🇴🇦🇷
            </p>
            <p className="text-xs text-gray-400 mt-1">
              Por <span className="font-semibold">Equipo Sombra</span> • 27 mar 2025 • #TopDJs #Latinoamérica
            </p>
          </div>
        </motion.div>
      </div>

      {/* Botón Ver más noticias */}
      <div className="mt-10">
        <button className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-2 rounded-full text-sm font-semibold shadow-md transition">
          Ver más noticias
        </button>
      </div>

      {/* Sección de comentarios (placeholder) */}
      <div className="mt-16 text-left max-w-2xl mx-auto">
        <h3 className="text-xl font-bold text-orange-600 mb-2">🗣️ Comentarios</h3>
        <p className="text-sm text-gray-500 italic">
          Los comentarios estarán disponibles próximamente... ¡prepárate para opinar!
        </p>
      </div>

      {/* Volver al inicio */}
      <div className="mt-12">
        <Link to="/" className="text-blue-600 underline hover:text-blue-800">
          ⬅ Volver al inicio
        </Link>
      </div>
    </motion.div>
  );
};

export default Noticias;
