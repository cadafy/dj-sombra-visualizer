import { BrowserRouter, Routes, Route } from 'react-router-dom';
import PerreoTropicalVisuals from './PerreoTropicalVisuals';
import Politica from './pages/Politica';
import Contacto from './pages/Contacto';
import SubeTuMix from './pages/SubeTuMix';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<PerreoTropicalVisuals />} />
        <Route path='/politica' element={<Politica />} />
        <Route path='/contacto' element={<Contacto />} />
        <Route path='/sube-tu-mix' element={<SubeTuMix />} />
      </Routes>
    </BrowserRouter>
  );
}