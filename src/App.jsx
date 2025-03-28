import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Fotos from "./pages/Fotos";
import Noticias from "./pages/Noticias";
import Galeria from "./pages/Galeria";
import Reproducciones from "./pages/Reproducciones";
import SubeTuMix from "./pages/SubeTuMix";
import Politica from "./pages/Politica";
import Contacto from "./pages/Contacto";
import Navbar from "./components/Navbar"; // asegúrate de que el path sea correcto

function App() {
  return (
    <Router>
	<Navbar />
	<div style={{ paddingTop: "70px" }}>
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/fotos" element={<Fotos />} />
    <Route path="/galeria" element={<Galeria />} />
    <Route path="/noticias" element={<Noticias />} />
    <Route path="/reproducciones" element={<Reproducciones />} />
    <Route path="/sube-tu-mix" element={<SubeTuMix />} />
    <Route path="/contacto" element={<Contacto />} />
    <Route path="/politica" element={<Politica />} />
  </Routes>
</div>
    </Router>
  );
}

export default App;

