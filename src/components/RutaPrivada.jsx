<Routes>
  <Route path="/" element={<Layout />}>
    <Route index element={<Home />} />
    <Route path="/galeria" element={<Galeria />} />
    <Route path="/fotos" element={<Fotos />} />
    <Route path="/noticias" element={<Noticias />} />
    <Route path="/reproducciones" element={<Reproducciones />} />
    <Route path="/sube-tu-mix" element={<SubeTuMix />} />
    <Route path="/contacto" element={<Contacto />} />
    <Route path="/politica" element={<Politica />} />

    {/* Ruta protegida */}
    <Route
      path="/admin"
      element={
        <RutaPrivada>
          <Admin />
        </RutaPrivada>
      }
    />

    {/* Login público */}
    <Route path="/login" element={<Login />} />
  </Route>
</Routes>

