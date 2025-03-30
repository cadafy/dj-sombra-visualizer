import { useState, useEffect } from "react";
import { db } from "../firebaseConfig";
import {
  collection,
  addDoc,
  query,
  where,
  orderBy,
  onSnapshot,
  serverTimestamp,
} from "firebase/firestore";
import { FaPaperPlane } from "react-icons/fa";

export default function Comentarios({ tipo }) {
  const [nombre, setNombre] = useState("");
  const [mensaje, setMensaje] = useState("");
  const [comentarios, setComentarios] = useState([]);

  useEffect(() => {
    const q = query(
      collection(db, "comentarios"),
      where("tipo", "==", tipo),
      orderBy("fecha", "desc")
    );
    const unsubscribe = onSnapshot(q, (snapshot) => {
      setComentarios(snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() })));
    });
    return () => unsubscribe();
  }, [tipo]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!nombre || !mensaje) return alert("Completa todos los campos");

    try {
      await addDoc(collection(db, "comentarios"), {
        nombre,
        mensaje,
        tipo,
        fecha: serverTimestamp(),
      });
      setNombre("");
      setMensaje("");
    } catch (error) {
      console.error("Error al enviar comentario:", error);
    }
  };

  return (
    <div className="mt-16 max-w-2xl mx-auto text-left font-serif">
      <h3 className="text-xl font-bold text-orange-600 mb-4">🗣️ Comentarios</h3>

      <form onSubmit={handleSubmit} className="space-y-4 mb-6">
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
  );
}