import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Button } from "@/components/ui/button"
import { storage, db } from "../firebaseConfig";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";

const Contacto = () => {
  const [nombre, setNombre] = useState('');
  const [mensaje, setMensaje] = useState('');
  const [enviado, setEnviado] = useState(false);

 const handleSubmit = async (e) => {
  e.preventDefault();
  try {
    await addDoc(collection(db, "mensajesContacto"), {
      nombre,
      mensaje,
      creado: serverTimestamp()
    });
    setEnviado(true);
    setNombre('');
    setMensaje('');
  } catch (error) {
    console.error("Error al enviar el mensaje:", error);
  }
};

  return (
    <div className="p-6 max-w-xl mx-auto text-center">
      <h1 className="text-3xl font-bold mb-4">Contáctanos 💬</h1>
      
      <motion.form 
        onSubmit={handleSubmit}
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="space-y-4"
      >
        <input 
          type="text"
          placeholder="Tu nombre"
          value={nombre}
          onChange={(e) => setNombre(e.target.value)}
          className="w-full border p-2 rounded"
          required
        />
        <textarea 
          placeholder="Tu mensaje"
          value={mensaje}
          onChange={(e) => setMensaje(e.target.value)}
          className="w-full border p-2 rounded"
          required
        ></textarea>

        <Button type="submit">Enviar</Button>

        {enviado && <p className="text-green-600 mt-2">¡Mensaje enviado con éxito!</p>}
      </motion.form>
    </div>
  );
};

export default Contacto;