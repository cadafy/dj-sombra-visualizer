import { Helmet } from "react-helmet";
import { motion } from "framer-motion";

const Home = () => {
  return (
    <motion.div
      className="max-w-3xl mx-auto px-6 py-14 bg-white text-gray-800 rounded-3xl shadow-2xl font-serif"
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <Helmet>
  <title>Inicio | DJ Sombra Caliente</title>
  <meta name="description" content="Sitio oficial de DJ Sombra Caliente: mixes, fotos, visuales y noticias frescas del mundo DJ. ¡Siente el ritmo!" />
  
  {/* Open Graph para redes sociales */}
  <meta property="og:title" content="DJ Sombra Caliente" />
  <meta property="og:description" content="Descubre lo último de DJ Sombra Caliente: mezclas, fotos, noticias y más." />
  <meta property="og:image" content="/favicon.png" />
  <meta property="og:type" content="website" />
  <meta property="og:url" content="https://dj-sombra-visualizer.vercel.app/" />
</Helmet>

      <h1 className="text-5xl font-bold text-center text-orange-600 mb-6 tracking-wide">
        🎧 Bienvenido a DJ Sombra Caliente 🔥
      </h1>

      <p className="text-lg leading-relaxed text-center max-w-xl mx-auto">
        Descubre mezclas, fotos, visuales, y noticias del mundo DJ con el estilo que
        enciende la pista. Este es tu espacio para vibrar con la música más caliente 🎶
      </p>
    </motion.div>
  );
};

export default Home;
