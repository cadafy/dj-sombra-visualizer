import { Helmet } from "react-helmet";
import { motion } from "framer-motion";

export default function Politica() {
  return (
    <motion.div
      className="max-w-3xl mx-auto py-12 px-6 font-serif bg-white text-gray-800 rounded-3xl shadow-xl"
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
    <Helmet>
  <title>Pol��tica de Privacidad | DJ Sombra Caliente</title>
  <meta name="description" content="Lee c��mo protegemos tus datos en el sitio oficial de DJ Sombra Caliente." />
  <meta property="og:title" content="Pol��tica de Privacidad" />
  <meta property="og:description" content="Tu privacidad es importante. Aqu�� te explicamos c��mo manejamos tus datos." />
  <meta property="og:image" content="/favicon.png" />
  <meta property="og:type" content="website" />
  <meta property="og:url" content="https://dj-sombra-visualizer.vercel.app/politica" />
</Helmet>

      <h1 className="text-4xl font-bold text-center mb-6 text-orange-600 tracking-wide">
        📖 Política de Privacidad
      </h1>

      <section className="text-lg leading-relaxed space-y-6">
        <p>
          En DJ Sombra Caliente, valoramos profundamente tu privacidad. Esta página
          detalla cómo recopilamos, usamos y protegemos tu información.
        </p>

        <h2 className="text-xl font-bold text-orange-500 mt-6">📌 Datos que recopilamos</h2>
        <p>
          Podemos recopilar tu nombre, correo electrónico y mensaje cuando usas nuestro
          formulario de contacto o subes un mix. Nunca vendemos ni compartimos tus datos.
        </p>

        <h2 className="text-xl font-bold text-orange-500 mt-6">🔒 Protección de datos</h2>
        <p>
          Tus datos se almacenan en Firebase y están protegidos con autenticación y
          cifrado. Solo el equipo autorizado puede acceder a esta información.
        </p>

        <h2 className="text-xl font-bold text-orange-500 mt-6">📬 Contacto</h2>
        <p>
          Si tienes dudas sobre nuestra política de privacidad, puedes escribirnos en
          la sección de <a href="/contacto" className="text-blue-600 underline hover:text-blue-800">Contacto</a>.
        </p>
      </section>
    </motion.div>
  );
}
