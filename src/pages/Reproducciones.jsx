import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { fadeIn } from "../animations";
import { Helmet } from "react-helmet";
import { FaPlay, FaPause } from "react-icons/fa";
import { db } from "../firebaseConfig";
import { collection, onSnapshot, orderBy, query, where } from "firebase/firestore";
import Comentarios from "../components/Comentarios";

const Reproducciones = () => {
  const [reproducciones, setReproducciones] = useState([]);
  const [reproduciendo, setReproduciendo] = useState(null);
  const [filtroGenero, setFiltroGenero] = useState("");
  const [filtroDJ, setFiltroDJ] = useState("");
  const [noResultados, setNoResultados] = useState(false); // Control de no resultados
  const [aplicarFiltros, setAplicarFiltros] = useState(false); // Estado para aplicar filtros
  const audioRefs = useRef({});

  useEffect(() => {
    let q = query(collection(db, "submissions"), orderBy("fecha", "desc"));

    // Aplicar filtros
    if (filtroGenero) {
      q = query(q, where("genero", "==", filtroGenero));
    }

    if (filtroDJ) {
      q = query(q, where("nombre", "==", filtroDJ));
    }

    const unsubscribe = onSnapshot(q, (snapshot) => {
      const data = snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
      setReproducciones(data);

      // Si no hay resultados, mostrar el mensaje
      if (data.length === 0) {
        setNoResultados(true);
      } else {
        setNoResultados(false);
      }
    });
    return () => unsubscribe();
  }, [filtroGenero, filtroDJ, aplicarFiltros]); // Aplicamos filtros y controlamos el estado

  const toggleAudio = (id) => {
    const currentAudio = audioRefs.current[id];
    if (!currentAudio) return;

    if (reproduciendo === id) {
      currentAudio.pause();
      setReproduciendo(null);
    } else {
      Object.values(audioRefs.current).forEach((audio) => audio.pause());
      currentAudio.play();
      setReproduciendo(id);
    }
  };

  const getGeneroColor = (genero) => {
    const map = {
      reggaeton: "bg-pink-500",
      techno: "bg-blue-500",
      salsa: "bg-green-500",
      latino: "bg-yellow-500",
      trap: "bg-purple-500",
    };
    return map[genero] || "bg-gray-500";
  };

  const handleBuscar = () => {
    // Activar filtro de búsqueda
    setAplicarFiltros(true);
  };

  return (
    <motion.div
      className="max-w-6xl mx-auto px-4 py-12 md:py-20 text-center font-serif min-h-screen"
      {...fadeIn}
    >
      <Helmet>
        <title>Reproducciones | DJ Sombra Caliente</title>
        <meta name="description" content="Escucha mixes subidos por DJs con su género y portada. Ritmos calientes en un solo lugar." />
      </Helmet>

      <h1 className="text-5xl font-bold text-orange-500 mb-6 drop-shadow">
        🎚️ Reproducciones
      </h1>
      <p className="text-lg mb-10 text-gray-700">
        Disfruta los mixes enviados por DJs 🔥🎵
      </p>

      {/* Filtros */}
      <div className="flex justify-center gap-4 mb-8">
        <select
          className="px-4 py-2 border rounded-md"
          onChange={(e) => setFiltroGenero(e.target.value)}
        >
          <option value="">Filtrar por género</option>
          <option value="reggaeton">🎶 Reggaetón</option>
          <option value="techno">🔊 Techno</option>
          <option value="salsa">💃 Salsa</option>
          <option value="latino">🎺 Latino</option>
          <option value="trap">🎧 Trap</option>
        </select>

        <input
          type="text"
          placeholder="Filtrar por DJ"
          value={filtroDJ}
          onChange={(e) => setFiltroDJ(e.target.value)}
          className="px-4 py-2 border rounded-md"
        />

        <button
          onClick={handleBuscar}
          className="bg-orange-500 text-white px-6 py-2 rounded-md hover:bg-orange-600 transition duration-300"
        >
          Buscar
        </button>
      </div>

      {/* Mostrar mensaje si no hay resultados */}
      {noResultados && (
        <div className="text-center text-red-500 font-semibold mb-8">
          Lo sentimos, no encontramos resultados con esos filtros. 🙁
        </div>
      )}

      {reproducciones.length === 0 && !noResultados ? (
        <p className="text-gray-500">Aún no hay mezclas subidas.</p>
      ) : (
        <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 mb-12">
          {reproducciones.map((mix) => (
            <motion.div
              key={mix.id}
              whileHover={{ scale: 1.02 }}
              className="bg-white p-6 rounded-xl shadow-md transition-all duration-300 hover:shadow-xl text-left relative"
            >
              {mix.imagenURL && (
                <img
                  src={mix.imagenURL}
                  alt="Portada del mix"
                  className="w-full h-48 object-cover rounded-lg mb-4"
                />
              )}

              <div className="flex justify-between items-center mb-2">
                <h2 className="text-xl font-bold text-orange-600">{mix.nombre}</h2>
                {mix.genero && (
                  <span
                    className={`text-white text-xs px-3 py-1 rounded-full font-semibold ${getGeneroColor(
                      mix.genero
                    )}`}
                  >
                    {mix.genero}
                  </span>
                )}
              </div>

              <p className="text-sm text-gray-500 italic mb-2">
                Subido el{" "}
                {mix.fecha?.toDate().toLocaleDateString("es-ES") ?? "Ahora"}
              </p>

              <audio
                ref={(el) => (audioRefs.current[mix.id] = el)}
                src={mix.archivoURL}
                onEnded={() => setReproduciendo(null)}
                className="w-full mt-2"
              />

              <button
                onClick={() => toggleAudio(mix.id)}
                className={`mt-4 w-full px-6 py-2 text-white font-semibold rounded-full transition-all duration-300 flex items-center justify-center gap-2 text-base hover:scale-105 shadow-md
              ${
                reproduciendo === mix.id
                  ? "bg-red-500 hover:bg-red-600"
                  : "bg-orange-500 hover:bg-orange-600"
              }`}
              >
                {reproduciendo === mix.id ? (
                  <>
                    <FaPause />
                    Pausar
                  </>
                ) : (
                  <>
                    <FaPlay />
                    Reproducir
                  </>
                )}
              </button>
            </motion.div>
          ))}
        </div>
      )}

      <Comentarios tipo="reproducciones" />
    </motion.div>
  );
};

export default Reproducciones;








