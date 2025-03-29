import { useState } from "react";
import { motion } from "framer-motion";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";
import { db } from "../firebaseConfig";
import { Helmet } from "react-helmet";

function Contacto() {
  const [nombre, setNombre] = useState("");
  const [mensaje, setMensaje] = useState("");
  const [enviado, setEnviado] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (nombre.length < 3 || mensaje.length < 5) {
      setError("Por favor, completa el formulario correctamente.");
      return;
    }

    try {
      await addDoc(collection(db, "mensajes"), {
        nombre,
        mensaje,
        timestamp: serverTimestamp(),
      });
      setEnviado(true);
      setNombre("");
      setMensaje("");
      setError("");
    } catch (error) {
      console.error("Error al enviar mensaje: ", error);
      setError("Hubo un problema al enviar. Intenta más tarde.");
    }
  };

  return (
    <motion.div
      className="p-8 max-w-2xl mx-auto text-justify bg-white text-black font-serif leading-relaxed shadow-2xl rounded-3xl"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >
	  <Helmet>
      <title>Contacto | DJ Sombra Caliente</title>
      <meta name="description" content="¿Tienes una propuesta o solo quieres saludar? Escríbenos y conecta con DJ Sombra Caliente." />
      <meta property="og:title" content="Contáctanos | DJ Sombra Caliente" />
      <meta property="og:description" content="Tu mensaje llega directo al corazón del beat. ¡Hablemos!" />
      <meta property="og:image" content="/favicon.png" />
      <meta property="og:type" content="website" />
      <meta property="og:url" content="https://dj-sombra-visualizer.vercel.app/contacto" />
    </Helmet>
      <h1 className="text-4xl font-bold mb-2 text-center text-orange-600 tracking-wide">
        💬 Contáctanos
      </h1>
      <p className="text-sm text-gray-500 text-center mb-8">
        ¿Tienes una duda, propuesta o solo quieres saludar? ¡Escríbenos aquí abajo!
      </p>

      {enviado ? (
        <p className="text-green-700 font-semibold text-center">✅ ¡Mensaje enviado con éxito!</p>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label className="block mb-1 font-bold">Tu nombre o alias:</label>
            <input
              type="text"
              value={nombre}
              onChange={(e) => setNombre(e.target.value)}
              required
              className="w-full border border-gray-400 p-3 rounded-xl focus:outline-none focus:ring-2 focus:ring-orange-400"
            />
          </div>
          <div>
            <label className="block mb-1 font-bold">Tu mensaje:</label>
            <textarea
              value={mensaje}
              onChange={(e) => setMensaje(e.target.value)}
              required
              rows="5"
              className="w-full border border-gray-400 p-3 rounded-xl focus:outline-none focus:ring-2 focus:ring-orange-400"
            />
          </div>
          {error && <p className="text-red-500 text-sm">{error}</p>}
          <motion.button
            type="submit"
            whileTap={{ scale: 0.95 }}
            className="bg-orange-500 hover:bg-orange-600 text-white py-2 px-6 rounded-xl font-bold shadow-md transition-colors duration-300"
          >
            Enviar mensaje
          </motion.button>
        </form>
      )}
    </motion.div>
  );
}

export default Contacto;
