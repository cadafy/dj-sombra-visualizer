import { useState } from "react";
import { motion } from "framer-motion";
import app from "../firebaseConfig";
import { getStorage, ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { getFirestore, collection, addDoc, serverTimestamp } from "firebase/firestore";

export default function SubeTuMix() {
  const [nombre, setNombre] = useState("");
  const [archivo, setArchivo] = useState(null);
  const [mensaje, setMensaje] = useState("");
  const [error, setError] = useState("");
  const [cargando, setCargando] = useState(false);

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
      // Referencias a Firebase
      const storage = getStorage(app, "gs://dj-sombra-visualizer.firebasestorage.app");
      const firestore = getFirestore(app);

      const archivoRef = ref(storage, `mixes/${Date.now()}-${archivo.name}`);
      const uploadTask = uploadBytesResumable(archivoRef, archivo);

      uploadTask.on("state_changed", null, (err) => {
        console.error(err);
        setError("Error al subir el archivo.");
        setCargando(false);
      }, async () => {
        const url = await getDownloadURL(uploadTask.snapshot.ref);

        await addDoc(collection(firestore, "submissions"), {
          nombre,
          archivoURL: url,
          creado: serverTimestamp(),
        });

        setMensaje("✅ ¡Tu mix ha sido enviado con éxito!");
        setNombre("");
        setArchivo(null);
        setCargando(false);
      });
   } catch (err) {
  console.error("Error al subir:", err); // <-- Mostrará en consola el error real
  setMensaje("");
  setError("Error al subir el archivo.");
}
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="max-w-xl mx-auto p-6 mt-10 bg-white rounded-2xl shadow-xl"
    >
      <h1 className="text-2xl font-bold mb-4 text-center">Sube tu Mix 🎶</h1>
      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        <input
          type="text"
          placeholder="Tu nombre o alias"
          className="p-2 border border-gray-300 rounded-xl"
          value={nombre}
          onChange={(e) => setNombre(e.target.value)}
        />
        <input
          type="file"
          accept="audio/*"
          className="p-2 border border-gray-300 rounded-xl"
          onChange={(e) => setArchivo(e.target.files[0])}
        />
        <button
          type="submit"
          disabled={cargando}
          className="bg-black text-white py-2 rounded-xl hover:bg-gray-800 transition"
        >
          {cargando ? "Subiendo..." : "Subir Mix 🔥"}
        </button>
      </form>
      {mensaje && <p className="mt-4 text-green-600">{mensaje}</p>}
      {error && <p className="mt-4 text-red-500">{error}</p>}
    </motion.div>
  );
}