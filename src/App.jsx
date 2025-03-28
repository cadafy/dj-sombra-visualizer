import { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import SubeTuMix from "./pages/SubeTuMix";

function App() {
  useEffect(() => {
    // Redirección al dominio principal si no estás en el correcto
    const dominioPrincipal = "https://dj-sombra.vercel.app";
    if (window.location.hostname !== "dj-sombra.vercel.app") {
      window.location.href = dominioPrincipal + window.location.pathname;
    }
  }, []);

  return (
    <Router>
      <Routes>
        <Route path="/sube-tu-mix" element={<SubeTuMix />} />
        <Route path="*" element={<Navigate to="/sube-tu-mix" />} />
      </Routes>
    </Router>
  );
}

export default App;

