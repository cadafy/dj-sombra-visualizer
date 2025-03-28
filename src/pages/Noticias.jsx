// src/pages/Noticias.jsx
import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const Noticias = () => {
  return (
    <div className="p-4 text-center">
      <h1 className="text-4xl font-bold mb-4 text-orange-600">📰 Noticias DJ</h1>
      <p className="text-lg mb-6">Descubre lo último de la farándula musical y DJs top del mundo 🎧🔥</p>

      <motion.div
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        {/* Noticias ejemplo */}
        <div className="p-4 border rounded-xl shadow hover:scale-105 transition">
          <img src="https://source.unsplash.com/400x200/?dj" alt="DJ News" className="rounded mb-2" />
          <h2 className="text-xl font-semibold">DJ Alok rompe récords en Brasil</h2>
          <p className="text-sm mt-2">Un show histórico con luces y beats al límite 🔊</p>
        </div>

        <div className="p-4 border rounded-xl shadow hover:scale-105 transition">
          <img src="https://source.unsplash.com/400x200/?concert" alt="Music Event" className="rounded mb-2" />
          <h2 className="text-xl font-semibold">Nueva colaboración: Tiësto & Karol G</h2>
          <p className="text-sm mt-2">El reggaetón y el EDM se fusionan en un tema épico 🎶</p>
        </div>

        <div className="p-4 border rounded-xl shadow hover:scale-105 transition">
          <img src="https://source.unsplash.com/400x200/?music" alt="Trending" className="rounded mb-2" />
          <h2 className="text-xl font-semibold">Top 5 DJs latinos del momento</h2>
          <p className="text-sm mt-2">Conoce a los reyes de la fiesta en América Latina 🇲🇽🇨🇴🇦🇷</p>
        </div>
      </motion.div>

      <div className="mt-10">
        <Link to="/" className="text-blue-500 underline">
          ⬅ Volver al inicio
        </Link>
      </div>
    </div>
  );
};

export default Noticias;
