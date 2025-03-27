import React from 'react';

function App() {
  return (
    <div style={{
      fontFamily: 'Poppins, sans-serif',
      background: 'black',
      color: 'white',
      minHeight: '100vh',
      padding: '2rem',
      textAlign: 'center'
    }}>
      <h1 style={{
        fontSize: '3rem',
        color: '#ff0055',
        textShadow: '2px 2px 8px #fff'
      }}>
        DJ Sombra Caliente 🎧🔥
      </h1>
      <p style={{
        fontSize: '1.25rem',
        marginTop: '1rem',
        color: '#ccc'
      }}>
        ¡Bienvenido a la web oficial! Siente el ritmo. Sube tu mix. Conecta con el flow.
      </p>
      <p style={{
        marginTop: '2rem',
        fontSize: '0.9rem',
        color: '#666'
      }}>
        powered by React + Vite + GitHub Pages 💻
      </p>
    </div>
  );
}

export default App;