import { useState } from "react";
import { motion } from "framer-motion";
import { Helmet } from "react-helmet";
import { fadeIn } from "../animations";
import { FaPaperPlane } from "react-icons/fa";

export default function Contacto() {
  const [nombre, setNombre] = useState("");
  const [correo, setCorreo] = useState("");
  const [mensaje, setMensaje] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!nombre || !correo || !mensaje) {
      alert("Por favor completa todos los campos.");
      return;
    }
    alert("¡Mensaje enviado correctamente!");
    setNombre("");
    setCorreo("");
    setMensaje("");
  };

  return (
    <motion.div
      className="max-w-3xl mx-auto p-6 text-center font-serif"
      {...fadeIn}
    >
      <Helmet>
        <title>Contacto | DJ Sombra Caliente</title>
        <meta name="description" content="Contáctate con DJ Sombra Caliente para colaboraciones, eventos o consultas." />
        <meta property="og:title" content="Contacto | DJ Sombra Caliente" />
        <meta property="og:description" content="¿Quieres trabajar con DJ Sombra Caliente? Este es el lugar para hacerlo." />
        <meta property="og:image" content="/favicon.png" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://tusitio.com/contacto" />
      </Helmet>

      <h1 className="text-5xl font-bold text-orange-500 mb-6 drop-shadow">
        📩 Contacto
      </h1>
      <p className="text-lg text-gray-700 mb-10">
        ¿Tienes una propuesta, evento o colaboración? ¡Hablemos!
      </p>

      <form onSubmit={handleSubmit} className="space-y-6 text-left">
        <input
          type="text"
          placeholder="Nombre"
          value={nombre}
          onChange={(e) => setNombre(e.target.value)}
          className="w-full border p-3 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-orange-400"
        />
        <input
          type="email"
          placeholder="Correo electrónico"
          value={correo}
          onChange={(e) => setCorreo(e.target.value)}
          className="w-full border p-3 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-orange-400"
        />
        <textarea
          placeholder="Mensaje"
          rows="4"
          value={mensaje}
          onChange={(e) => setMensaje(e.target.value)}
          className="w-full border p-3 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-orange-400"
        />

        <button
          type="submit"
          className="bg-orange-500 text-white py-3 px-6 rounded-xl hover:bg-orange-600 hover:scale-105 shadow-md flex items-center justify-center gap-2 transition-all duration-300"
        >
          <FaPaperPlane />
          Enviar mensaje
        </button>
      </form>
    </motion.div>
  );
}
