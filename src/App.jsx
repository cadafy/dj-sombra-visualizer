import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Fotos from "./pages/Fotos";
import Noticias from "./pages/Noticias";
import Galeria from "./pages/Galería";
import Reproducciones from "./pages/Reproducciones";
import SubeTuMix from "./pages/SubeTuMix";
import Politica from "./pages/Politica";
import Contacto from "./pages/Contacto";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/fotos" element={<Fotos />} />
        <Route path="/noticias" element={<Noticias />} />
        <Route path="/galeria" element={<Galeria />} />
        <Route path="/reproducciones" element={<Reproducciones />} />
        <Route path="/sube-tu-mix" element={<SubeTuMix />} />
        <Route path="/politica" element={<Politica />} />
        <Route path="/contacto" element={<Contacto />} />
      </Routes>
    </Router>
  );
}

export default App;

