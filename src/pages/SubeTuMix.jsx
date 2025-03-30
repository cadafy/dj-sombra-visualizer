import { useState } from "react";
import { db, storage } from "../firebaseConfig";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";
import {
  ref,
  uploadBytesResumable,
  getDownloadURL,
} from "firebase/storage";
import { motion } from "framer-motion";
import { Helmet } from "react-helmet";
import { fadeIn } from "../animations";

export default function SubeTuMix() {
  const [nombre, setNombre] = useState("");
  const [archivo, setArchivo] = useState(null);
  const [imagen, setImagen] = useState(null);
  const [genero, setGenero] = useState("reggaeton");
  const [mensaje, setMensaje] = useState("");
  const [subiendo, setSubiendo] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!nombre || !archivo) {
      setMensaje("Por favor completa al menos tu nombre y el mix.");
      return;
    }

    try {
      setSubiendo(true);

      // Subir audio
      const archivoRef = ref(storage, `mixes/${archivo.name}`);
      const uploadAudio = uploadBytesResumable(archivoRef, archivo);
      await new Promise((resolve, reject) => {
        uploadAudio.on("state_changed", null, reject, resolve);
      });
      const archivoURL = await getDownloadURL(uploadAudio.snapshot.ref);

      // Subir imagen (opcional)
      let imagenURL = "";
      if (imagen) {
        const imagenRef = ref(storage, `portadas/${imagen.name}`);
        const uploadImg = uploadBytesResumable(imagenRef, imagen);
        await new Promise((resolve, reject) => {
          uploadImg.on("state_changed", null, reject, resolve);
        });
        imagenURL = await getDownloadURL(uploadImg.snapshot.ref);
      }

      // Guardar en Firestore
      await addDoc(collection(db, "submissions"), {
        nombre,
        archivoURL,
        imagenURL,
        genero,
        fecha: serverTimestamp(),
      });

      setMensaje("🎉 ¡Mix subido con éxito!");
      setNombre("");
      setArchivo(null);
      setImagen(null);
      setGenero("reggaeton");
    } catch (error) {
      console.error("Error al subir el mix:", error);
      setMensaje("Error al subir el mix.");
    } finally {
      setSubiendo(false);
    }
  };

  return (
    <motion.div
      className="max-w-3xl mx-auto px-4 py-12 md:py-20 text-center font-serif min-h-screen"
      {...fadeIn}
    >
      <Helmet>
        <title>Sube tu Mix | DJ Sombra Caliente</title>
        <meta name="description" content="¿Eres DJ? Comparte tu mix, selecciona tu género y ponle portada." />
      </Helmet>

      <h1 className="text-4xl sm:text-5xl font-bold text-orange-500 mb-6 drop-shadow">
        🎵 Sube tu Mix
      </h1>
      <p className="text-lg text-gray-700 mb-10">
        ¿Tienes talento? Comparte tu mezcla 🔥
      </p>

      <form onSubmit={handleSubmit} className="space-y-6 max-w-md mx-auto text-left">
        <input
          type="text"
          placeholder="Tu nombre o alias DJ"
          value={nombre}
          onChange={(e) => setNombre(e.target.value)}
          className="w-full border p-3 rounded-lg shadow-sm"
        />

        <input
          type="file"
          accept="audio/*"
          onChange={(e) => setArchivo(e.target.files[0])}
          className="w-full border p-3 rounded-lg shadow-sm"
        />

        <select
          value={genero}
          onChange={(e) => setGenero(e.target.value)}
          className="w-full border p-3 rounded-lg shadow-sm"
        >
          <option value="reggaeton">🎶 Reggaetón</option>
          <option value="techno">🔊 Techno</option>
          <option value="salsa">💃 Salsa</option>
          <option value="latino">🎺 Latino</option>
          <option value="trap">🎧 Trap</option>
        </select>

        <input
          type="file"
          accept="image/*"
          onChange={(e) => setImagen(e.target.files[0])}
          className="w-full border p-3 rounded-lg shadow-sm"
        />

        <button
          type="submit"
          disabled={subiendo}
          className={`w-full py-3 px-6 rounded-xl text-white font-semibold shadow-md transition-all duration-300 flex items-center justify-center gap-2
            ${
              subiendo
                ? "bg-gray-400 cursor-not-allowed"
                : "bg-orange-500 hover:bg-orange-600 hover:scale-105"
            }`}
        >
          {subiendo ? "Subiendo..." : "📤 Enviar mix"}
        </button>

        {mensaje && (
          <p className="text-sm text-center mt-2 text-orange-600 font-medium">{mensaje}</p>
        )}
      </form>
    </motion.div>
  );
}
