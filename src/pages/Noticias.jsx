import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { fadeIn } from "../animations";
import { Helmet } from "react-helmet";
import { db } from "../firebaseConfig";
import {
  collection,
  addDoc,
  serverTimestamp,
  onSnapshot,
  query,
  orderBy,
} from "firebase/firestore";
import { FaPaperPlane } from "react-icons/fa";

const Noticias = () => {
  const [nombre, setNombre] = useState("");
  const [mensaje, setMensaje] = useState("");
  const [comentarios, setComentarios] = useState([]);
  const [busqueda, setBusqueda] = useState("");

  const noticias = [
    {
      titulo: "DJ Alok rompe récords en Brasil",
      descripcion: "Un show histórico con luces y beats al límite 🖊️",
      fecha: "29 mar 2025",
    },
    {
      titulo: "Nueva colaboración: Tiësto & Karol G",
      descripcion: "El reggaetón y el EDM se fusionan en un tema épico 🎶",
      fecha: "28 mar 2025",
    },
    {
      titulo: "Top 5 DJs latinos del momento",
      descripcion: "Conoce a los reyes de la fiesta en América Latina 🇲🇽🇨🇴🇦🇷",
      fecha: "27 mar 2025",
    },
  ];

  const noticiasFiltradas = noticias.filter((noti) =>
    noti.titulo.toLowerCase().includes(busqueda.toLowerCase())
  );

  const handleEnviarComentario = async (e) => {
    e.preventDefault();
    if (!nombre || !mensaje) return alert("Completa todos los campos");

    try {
      await addDoc(collection(db, "comentarios"), {
        nombre,
        mensaje,
        fecha: serverTimestamp(),
      });
      setNombre("");
      setMensaje("");
    } catch (error) {
      console.error("Error al enviar comentario:", error);
    }
  };

  useEffect(() => {
    const q = query(collection(db, "comentarios"), orderBy("fecha", "desc"));
    const unsubscribe = onSnapshot(q, (snapshot) => {
      setComentarios(snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() })));
    });
    return () => unsubscribe();
  }, []);

  return (
    <motion.div
      className="max-w-6xl mx-auto px-4 py-12 md:py-20 text-center font-serif min-h-screen"
      {...fadeIn}
    >
      <Helmet>
        <title>Noticias | DJ Sombra Caliente</title>
        <meta name="description" content="Las últimas noticias del mundo DJ, lanzamientos, colaboraciones y eventos en los que brilla DJ Sombra Caliente." />
        <meta property="og:title" content="Noticias DJ | DJ Sombra Caliente" />
        <meta property="og:description" content="Entérate de todo lo nuevo en la vida musical de DJ Sombra Caliente." />
        <meta property="og:image" content="/favicon.png" />
        <meta property="og:type" content="article" />
        <meta property="og:url" content="https://tusitio.com/noticias" />
      </Helmet>

      <h1 className="text-5xl font-bold mb-6 text-orange-500 drop-shadow">
        📰 Noticias DJ
      </h1>
      <p className="text-lg mb-6 text-gray-700">
        Lo último de la farándula musical y DJs top del mundo 🎧🔥
      </p>

      {/* Buscador */}
      <input
        type="text"
        placeholder="🔎 Buscar noticias..."
        value={busqueda}
        onChange={(e) => setBusqueda(e.target.value)}
        className="w-full max-w-md mx-auto block border border-gray-300 p-3 rounded-xl mb-10 text-gray-700"
      />

      {/* Grid de noticias */}
      <div className="grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {noticiasFiltradas.map((noti, index) => (
          <motion.div
            key={index}
            whileHover={{ scale: 1.05 }}
            className="bg-white rounded-2xl shadow-md transition-all duration-300 hover:shadow-xl overflow-hidden"
          >
            <img
              src={`https://source.unsplash.com/600x300/?dj,${index}`}
              alt="Noticia"
              className="w-full h-40 object-cover"
            />
            <div className="p-4 text-left">
              <h2 className="text-xl font-semibold text-orange-600">{noti.titulo}</h2>
              <p className="text-sm text-gray-600 mt-2">{noti.descripcion}</p>
              <p className="text-xs text-gray-400 mt-1 italic">Publicado el {noti.fecha}</p>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Sección de Comentarios */}
      <div className="mt-16 max-w-2xl mx-auto text-left font-serif">
        <h3 className="text-xl font-bold text-orange-600 mb-2">🗣️ Comentarios</h3>

        <form onSubmit={handleEnviarComentario} className="space-y-4 mb-6">
          <input
            type="text"
            placeholder="Tu nombre o alias"
            value={nombre}
            onChange={(e) => setNombre(e.target.value)}
            className="w-full border p-3 rounded-lg"
          />
          <textarea
            placeholder="Tu comentario"
            value={mensaje}
            onChange={(e) => setMensaje(e.target.value)}
            rows="3"
            className="w-full border p-3 rounded-lg"
          />
          <button
            type="submit"
            className="bg-orange-500 text-white py-2 px-6 rounded hover:bg-orange-600 transition-all duration-300 flex items-center justify-center gap-2 hover:scale-105 shadow-md"
          >
            <FaPaperPlane />
            Enviar comentario
          </button>
        </form>

        <div className="space-y-4">
          {comentarios.map((com) => (
            <div
              key={com.id}
              className="bg-gray-100 p-4 rounded-lg shadow hover:shadow-md transition-all duration-300"
            >
              <p className="font-semibold text-orange-600">{com.nombre}</p>
              <p className="text-gray-800">{com.mensaje}</p>
              <p className="text-xs text-gray-500 italic">
                {com.fecha?.toDate().toLocaleString("es-ES") ?? "Ahora"}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Botón volver */}
      <div className="mt-12">
        <Link
          to="/"
          className="text-blue-600 underline hover:text-orange-500 transition-all duration-300"
        >
          ⬅ Volver al inicio
        </Link>
      </div>
    </motion.div>
  );
};

export default Noticias;



