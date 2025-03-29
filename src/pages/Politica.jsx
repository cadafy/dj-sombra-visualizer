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
  <title>Política de Privacidad | DJ Sombra Caliente</title>
  <meta name="description" content="Lee cómo protegemos tus datos en el sitio oficial de DJ Sombra Caliente." />
  <meta property="og:title" content="Política de Privacidad" />
  <meta property="og:description" content="Tu privacidad es importante. Aquí te explicamos cómo manejamos tus datos." />
  <meta property="og:image" content="/favicon.png" />
  <meta property="og:type" content="website" />
  <meta property="og:url" content="https://dj-sombra-visualizer.vercel.app/politica" />
</Helmet>

      <h1 className="text-4xl font-bold text-center mb-6 text-orange-600 tracking-wide">
        馃摉 Pol铆tica de Privacidad
      </h1>

      <section className="text-lg leading-relaxed space-y-6">
        <p>
          En DJ Sombra Caliente, valoramos profundamente tu privacidad. Esta p谩gina
          detalla c贸mo recopilamos, usamos y protegemos tu informaci贸n.
        </p>

        <h2 className="text-xl font-bold text-orange-500 mt-6">馃搶 Datos que recopilamos</h2>
        <p>
          Podemos recopilar tu nombre, correo electr贸nico y mensaje cuando usas nuestro
          formulario de contacto o subes un mix. Nunca vendemos ni compartimos tus datos.
        </p>

        <h2 className="text-xl font-bold text-orange-500 mt-6">馃敀 Protecci贸n de datos</h2>
        <p>
          Tus datos se almacenan en Firebase y est谩n protegidos con autenticaci贸n y
          cifrado. Solo el equipo autorizado puede acceder a esta informaci贸n.
        </p>

        <h2 className="text-xl font-bold text-orange-500 mt-6">馃摤 Contacto</h2>
        <p>
          Si tienes dudas sobre nuestra pol铆tica de privacidad, puedes escribirnos en
          la secci贸n de <a href="/contacto" className="text-blue-600 underline hover:text-blue-800">Contacto</a>.
        </p>
      </section>
    </motion.div>
  );
}
