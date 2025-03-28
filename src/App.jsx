import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SubeTuMix from "./pages/SubeTuMix";
import Politica from "./pages/Politica";
import Contacto from "./pages/Contacto";
import Home from "./pages/Home";
import Galeria from "./pages/Galería";
import Fotos from "./pages/Fotos";
import Noticias from "./pages/Noticias";
import Reproducciones from "./pages/Reproducciones";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/sube-tu-mix" element={<SubeTuMix />} />
        <Route path="/politica" element={<Politica />} />
        <Route path="/contacto" element={<Contacto />} />
        <Route path="/galeria" element={<Galeria />} />
        <Route path="/fotos" element={<Fotos />} />
        <Route path="/noticias" element={<Noticias />} />
        <Route path="/reproducciones" element={<Reproducciones />} />
      </Routes>
    </Router>
  );
}

export default App;

