import { motion } from "framer-motion";
import { Helmet } from "react-helmet";
import { fadeIn } from "../animations";
import Comentarios from "../components/Comentarios"; // ✅ importante

export default function Galeria() {
  const imagenes = [
    "https://source.unsplash.com/800x600/?dj,1",
    "https://source.unsplash.com/800x600/?music,2",
    "https://source.unsplash.com/800x600/?concert,3",
    "https://source.unsplash.com/800x600/?club,4",
    "https://source.unsplash.com/800x600/?lights,5",
    "https://source.unsplash.com/800x600/?crowd,6",
  ];

  return (
    <motion.div
      className="max-w-6xl mx-auto px-4 py-12 md:py-20 text-center font-serif min-h-screen"
      {...fadeIn}
    >
      <Helmet>
        <title>Galería | DJ Sombra Caliente</title>
        <meta name="description" content="Explora la galería visual de DJ Sombra Caliente. Fotos de eventos, conciertos y arte visual de sus sets." />
        <meta property="og:title" content="Galería | DJ Sombra Caliente" />
        <meta property="og:description" content="Sumérgete en las imágenes más impactantes del universo musical de DJ Sombra." />
        <meta property="og:image" content="/favicon.png" />
        <meta property="og:type" content="gallery" />
        <meta property="og:url" content="https://tusitio.com/galeria" />
      </Helmet>

      <h1 className="text-5xl font-bold text-orange-500 mb-8 drop-shadow">
        🖼️ Galería
      </h1>
      <p className="text-lg text-gray-700 mb-10">
        Visuales de shows, fiestas, mezclas y vibras inolvidables 🎶✨
      </p>

      <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mb-16">
        {imagenes.map((src, index) => (
          <motion.div
            key={index}
            whileHover={{ scale: 1.03 }}
            className="overflow-hidden rounded-xl shadow-md hover:shadow-xl transition-all duration-300"
          >
            <img
              src={src}
              alt={`Galería ${index + 1}`}
              className="w-full h-60 object-cover"
            />
          </motion.div>
        ))}
      </div>

      {/* 💬 Comentarios por tipo */}
      <Comentarios tipo="galeria" />
    </motion.div>
  );
}

