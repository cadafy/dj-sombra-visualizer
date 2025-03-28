import React, { useEffect } from "react";
import { Helmet } from "react-helmet";

const Home = () => {
  useEffect(() => {
    document.title = "DJ Sombra Caliente | Inicio";
  }, []);

  return (
    <main style={{ padding: "2rem" }}>
      <h1>Bienvenido a DJ Sombra Caliente 🎧🔥</h1>
      <p>Explora nuestras secciones para subir tu mix, escuchar mezclas, ver fotos y mucho más.</p>

      <ul style={{ marginTop: "1rem" }}>
	    <li><a href="/fotos">Fotos</a></li>
		<Link to="/noticias">Noticias</Link>
		<li><a href="/galeria">Galería</a></li>
		<li><a href="/reproduccion">Reproducción</a></li>
        <li><a href="/sube-tu-mix">Sube tu Mix</a></li>
        <li><a href="/contacto">Contacto</a></li>
        <li><a href="/politica">Política de Privacidad</a></li>
      </ul>
    </main>
  );
};

export default Home;
