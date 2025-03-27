import React from 'react';

import React, { useEffect } from 'react';

function App() {
  useEffect(() => {
    if (window.location.hostname !== 'dj-sombra.vercel.app') {
      window.location.href = 'https://dj-sombra.vercel.app';
    }
  }, []); {
   return (
    <div className="text-white min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-black via-zinc-900 to-neutral-800 p-4">
      <h1 className="text-5xl font-bold mb-6 drop-shadow-md text-center">
        🎧 Bienvenido al Visualizer de DJ Sombra Caliente 🔥
      </h1>
      <p className="text-lg text-center max-w-xl text-neutral-300 mb-8">
        ¡Enciende la pista con visuales únicos! Este será tu espacio para mezclar,
        subir tu contenido, y compartir tu flow.
      </p>
      <p className="italic text-sm text-neutral-400">Powered by DJ Console 💻</p>
    </div>
  );
}

export default App;

