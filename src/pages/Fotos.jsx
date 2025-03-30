import { motion } from "framer-motion";
import { Helmet } from "react-helmet";
import { fadeIn } from "../animations";
import Comentarios from "../components/Comentarios";

export default function Fotos() {
  const fotos = [
    "https://source.unsplash.com/800x600/?dj,7",
    "https://source.unsplash.com/800x600/?music,8",
    "https://source.unsplash.com/800x600/?crowd,9",
    "https://source.unsplash.com/800x600/?visuals,10",
    "https://source.unsplash.com/800x600/?party,11",
    "https://source.unsplash.com/800x600/?club,12",
  ];

  return (
    <motion.div
      className="max-w-6xl mx-auto px-4 py-12 md:py-20 text-center font-serif min-h-screen"
      {...fadeIn}
    >
      <Helmet>
        <title>Fotos | DJ Sombra Caliente</title>
        <meta name="description" content="Explora las fotos más intensas de DJ Sombra Caliente en vivo y en eventos especiales." />
        <meta property="og:title" content="Fotos | DJ Sombra Caliente" />
        <meta property="og:description" content="Mira los momentos más calientes capturados en imágenes." />
        <meta property="og:image" content="/favicon.png" />
        <meta property="og:type" content="image.gallery" />
        <meta property="og:url" content="https://tusitio.com/fotos" />
      </Helmet>

      <h1 className="text-5xl font-bold text-orange-500 mb-8 drop-shadow">
        📸 Fotos en Acción
      </h1>
      <p className="text-lg text-gray-700 mb-10">
        Momentos capturados en sets 🔥, shows 🎧 y fiesta total 🎉
      </p>

      <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mb-12">
        {fotos.map((src, index) => (
          <motion.div
            key={index}
            whileHover={{ scale: 1.03 }}
            className="overflow-hidden rounded-xl shadow-md hover:shadow-xl transition-all duration-300"
          >
            <img
              src={src}
              alt={`Foto ${index + 1}`}
              className="w-full h-60 object-cover"
            />
          </motion.div>
        ))}
      </div>

      {/* Comentarios por tipo */}
      <Comentarios tipo="fotos" />
    </motion.div>
  );
}