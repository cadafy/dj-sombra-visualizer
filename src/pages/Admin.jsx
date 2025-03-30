import { useEffect, useState } from "react";
import { db } from "../firebaseConfig";
import {
  collection,
  deleteDoc,
  doc,
  onSnapshot,
  query,
  orderBy,
} from "firebase/firestore";
import { getAuth, signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { Helmet } from "react-helmet";
import { FaTrashAlt } from "react-icons/fa";

export default function Admin() {
  const [comentarios, setComentarios] = useState([]);
  const auth = getAuth();
  const navigate = useNavigate();

  useEffect(() => {
    const q = query(collection(db, "comentarios"), orderBy("fecha", "desc"));
    const unsubscribe = onSnapshot(q, (snapshot) => {
      const datos = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setComentarios(datos);
    });
    return () => unsubscribe();
  }, []);

  const eliminarComentario = async (id) => {
    const confirm = window.confirm("¿Eliminar este comentario?");
    if (!confirm) return;
    try {
      await deleteDoc(doc(db, "comentarios", id));
    } catch (error) {
      console.error("Error al eliminar:", error);
    }
  };

  const handleLogout = async () => {
    try {
      await signOut(auth);
      navigate("/login");
    } catch (error) {
      console.error("Error al cerrar sesión:", error);
    }
  };

  return (
    <motion.div
      className="max-w-4xl mx-auto p-8 bg-white rounded-3xl shadow-2xl font-serif mt-10 mb-20"
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <Helmet>
        <title>Panel Admin | DJ Sombra Caliente</title>
      </Helmet>

      {/* Botón Logout */}
      <div className="flex justify-end mb-6">
        <button
          onClick={handleLogout}
          className="bg-gray-800 text-white px-4 py-2 rounded hover:bg-gray-700 transition-all duration-300"
        >
          🔓 Cerrar sesión
        </button>
      </div>

      <h1 className="text-4xl font-bold text-orange-600 text-center mb-8">
        🛠️ Panel de Administración
      </h1>

      {comentarios.length === 0 ? (
        <p className="text-center text-gray-600">No hay comentarios por ahora.</p>
      ) : (
        <div className="space-y-6">
          {comentarios.map((com) => (
            <motion.div
              key={com.id}
              whileHover={{ scale: 1.01 }}
              className="bg-gray-100 p-4 rounded-lg shadow hover:shadow-md transition-all duration-300 flex justify-between items-start"
            >
              <div>
                <p className="font-bold text-orange-700">{com.nombre}</p>
                <p className="text-gray-800">{com.mensaje}</p>
                <p className="text-xs text-gray-500 italic">
                  {com.fecha?.toDate().toLocaleString("es-ES") ?? "Sin fecha"}
                </p>
              </div>
              <button
                onClick={() => eliminarComentario(com.id)}
                className="bg-red-500 hover:bg-red-600 text-white text-sm px-4 py-2 rounded flex items-center gap-2 transition-all duration-300 hover:scale-105 shadow-md"
              >
                <FaTrashAlt />
                Eliminar
              </button>
            </motion.div>
          ))}
        </div>
      )}
    </motion.div>
  );
}


