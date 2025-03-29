import { useState } from "react";
import { motion } from "framer-motion";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";
import { usePageTitle } from "../usePageTitle";
import { storage, db } from "../firebaseConfig";
import { Helmet } from "react-helmet";

export default function SubeTuMix() {
  const [nombre, setNombre] = useState("");
  const [archivo, setArchivo] = useState(null);
  const [mensaje, setMensaje] = useState("");
  const [error, setError] = useState("");
  const [cargando, setCargando] = useState(false);

  usePageTitle("Sube tu Mix 🎧 - DJ Sombra Caliente");

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!nombre || !archivo) {
      setError("Por favor completa todos los campos.");
      setMensaje("");
      return;
    }

    setError("");
    setMensaje("");
    setCargando(true);

    try {
      const archivoRef = ref(storage, `mixes/${Date.now()}-${archivo.name}`);
      const uploadTask = uploadBytesResumable(archivoRef, archivo);

      uploadTask.on(
        "state_changed",
        null,
        (err) => {
          console.error(err);
          setError("Error al subir el archivo.");
          setCargando(false);
        },
        async () => {
          const url = await getDownloadURL(uploadTask.snapshot.ref);

          await addDoc(collection(db, "submissions"), {
            nombre,
            archivoURL: url,
            creado: serverTimestamp(),
          });

          setMensaje("✅ ¡Tu mix ha sido enviado con éxito!");
          setNombre("");
          setArchivo(null);
          setCargando(false);
        }
      );
    } catch (err) {
      console.error("Error al subir:", err);
      setMensaje("");
      setError("Error al subir el archivo.");
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="max-w-2xl mx-auto px-6 py-10 mt-10 bg-gradient-to-tr from-orange-100 to-white rounded-3xl shadow-2xl border border-orange-300 font-serif"
    >
	<Helmet>
  <title>Sube tu Mix | DJ Sombra Caliente</title>
  <meta name="description" content="¿Eres DJ? Sube tu mix y haz vibrar al mundo. DJ Sombra Caliente quiere escucharte." />
  <meta property="og:title" content="Sube tu Mix | DJ Sombra Caliente" />
  <meta property="og:description" content="¡Conviértete en parte del movimiento y comparte tu talento con la comunidad!" />
  <meta property="og:image" content="/favicon.png" />
  <meta property="og:type" content="website" />
  <meta property="og:url" content="https://tusitio.com/sube-tu-mix" />
</Helmet>
      <h1 className="text-4xl font-bold text-orange-600 mb-4 text-center tracking-wider">
        🎧 Sube tu Mix
      </h1>
      <p className="text-center text-gray-700 mb-8">
        Comparte tu talento y forma parte del universo de DJ Sombra Caliente. Solo sube tu mix y déjanos escucharte.
      </p>

      <form onSubmit={handleSubmit} className="flex flex-col gap-5">
        <input
          type="text"
          placeholder="Tu nombre o alias"
          className="p-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-orange-400 outline-none"
          value={nombre}
          onChange={(e) => setNombre(e.target.value)}
        />
        <input
          type="file"
          accept="audio/*"
          className="p-3 border border-gray-300 rounded-xl bg-white file:mr-4 file:py-2 file:px-4 file:rounded-lg file:border-0 file:text-sm file:font-semibold file:bg-orange-500 file:text-white hover:file:bg-orange-600"
          onChange={(e) => setArchivo(e.target.files[0])}
        />
        <button
          type="submit"
          disabled={cargando}
          className="bg-orange-600 text-white font-bold py-3 rounded-xl hover:bg-orange-700 transition"
        >
          {cargando ? "Subiendo..." : "🔥 Subir Mix Ahora"}
        </button>
      </form>

      {mensaje && <p className="mt-4 text-green-600 font-medium text-center">{mensaje}</p>}
      {error && <p className="mt-4 text-red-500 font-medium text-center">{error}</p>}
    </motion.div>
  );
}
