import { motion } from "framer-motion";
import { Helmet } from "react-helmet";
import { fadeIn } from "../animations";

export default function Politica() {
  return (
    <motion.div
      className="max-w-4xl mx-auto p-6 font-serif"
      {...fadeIn}
    >
      <Helmet>
        <title>Pol¨ªtica de Privacidad | DJ Sombra Caliente</title>
        <meta name="description" content="Lee nuestra pol¨ªtica de privacidad y c¨®mo protegemos tus datos en DJ Sombra Caliente." />
        <meta property="og:title" content="Pol¨ªtica de Privacidad | DJ Sombra Caliente" />
        <meta property="og:description" content="Transparencia, protecci¨®n y respeto a tu informaci¨®n como visitante y fan." />
        <meta property="og:image" content="/favicon.png" />
        <meta property="og:type" content="document" />
        <meta property="og:url" content="https://tusitio.com/politica" />
      </Helmet>

      <h1 className="text-4xl font-bold text-orange-500 mb-6 drop-shadow text-center">
        ?? Pol¨ªtica de Privacidad
      </h1>

      <p className="text-gray-800 text-base sm:text-lg mb-4 leading-relaxed">
        En DJ Sombra Caliente, tu privacidad es una prioridad. Toda la informaci¨®n recopilada a trav¨¦s de formularios o interacciones en el sitio ser¨¢ utilizada exclusivamente para fines relacionados con la comunidad musical y no ser¨¢ compartida con terceros sin tu consentimiento.
      </p>

      <p className="text-gray-800 text-base sm:text-lg mb-4 leading-relaxed">
        Utilizamos tecnolog¨ªas como cookies y formularios para brindarte una mejor experiencia en el sitio. Puedes desactivarlas desde tu navegador si as¨ª lo deseas.
      </p>

      <p className="text-gray-800 text-base sm:text-lg mb-4 leading-relaxed">
        Para cualquier duda o solicitud de eliminaci¨®n de tus datos, puedes contactarnos en cualquier momento a trav¨¦s de nuestra p¨¢gina de{" "}
        <a href="/contacto" className="text-blue-600 hover:text-orange-500 transition-all duration-300 underline">
          contacto
        </a>.
      </p>

      <p className="text-sm text-gray-500 mt-8 italic text-center">
        ¨²ltima actualizaci¨®n: 29 de marzo de 2025
      </p>
    </motion.div>
  );
}
