import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { signInWithEmailAndPassword, getAuth } from "firebase/auth";
import { motion } from "framer-motion";
import { Helmet } from "react-helmet";
import { fadeIn } from "../animations";
import { app } from "../firebaseConfig";

export default function Login() {
  const auth = getAuth(app);
  const navigate = useNavigate();

  const [correo, setCorreo] = useState("");
  const [clave, setClave] = useState("");
  const [error, setError] = useState("");

  const iniciarSesion = async (e) => {
    e.preventDefault();
    setError("");

    try {
      await signInWithEmailAndPassword(auth, correo, clave);
      navigate("/admin"); // Redirige al panel si el login fue exitoso
    } catch (err) {
      console.error("Error de login:", err.message);
      setError("Correo o contraseña incorrectos.");
    }
  };

  return (
    <motion.div
      className="max-w-md mx-auto mt-20 p-6 text-center font-serif"
      {...fadeIn}
    >
      <Helmet>
        <title>Login | DJ Sombra Caliente</title>
      </Helmet>

      <h1 className="text-4xl font-bold text-orange-500 mb-8 drop-shadow">
        🔐 Acceso Admin
      </h1>

      <form onSubmit={iniciarSesion} className="space-y-6 text-left">
        <input
          type="email"
          placeholder="Correo electrónico"
          value={correo}
          onChange={(e) => setCorreo(e.target.value)}
          className="w-full border p-3 rounded-lg shadow-sm"
        />
        <input
          type="password"
          placeholder="Contraseña"
          value={clave}
          onChange={(e) => setClave(e.target.value)}
          className="w-full border p-3 rounded-lg shadow-sm"
        />

        {error && <p className="text-red-600 text-sm">{error}</p>}

        <button
          type="submit"
          className="w-full bg-orange-500 text-white py-3 px-6 rounded-xl hover:bg-orange-600 hover:scale-105 transition-all duration-300 shadow-md"
        >
          Iniciar sesión
        </button>
      </form>
    </motion.div>
  );
}
