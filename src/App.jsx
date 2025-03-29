import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import Layout from "./components/Layout";

// Páginas
import Home from "./pages/Home";
import Galeria from "./pages/Galeria";
import Noticias from "./pages/Noticias";
import Reproducciones from "./pages/Reproducciones";
import Fotos from "./pages/Fotos";
import Contacto from "./pages/Contacto";
import Politica from "./pages/Politica";
import SubeTuMix from "./pages/SubeTuMix";

// Contenedor animado por página
const AnimatedRoutes = () => {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route
          path="/"
          element={
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -30 }}
              transition={{ duration: 0.4 }}
            >
              <Home />
            </motion.div>
          }
        />
        <Route path="/galeria" element={<Galeria />} />
        <Route path="/noticias" element={<Noticias />} />
        <Route path="/reproducciones" element={<Reproducciones />} />
        <Route path="/fotos" element={<Fotos />} />
        <Route path="/contacto" element={<Contacto />} />
        <Route path="/politica" element={<Politica />} />
        <Route path="/sube-tu-mix" element={<SubeTuMix />} />
      </Routes>
    </AnimatePresence>
  );
};

function App() {
  return (
    <Router>
      <Layout>
        <AnimatedRoutes />
      </Layout>
    </Router>
  );
}

export default App;