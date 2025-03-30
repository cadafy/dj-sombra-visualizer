import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";  // Importa el Router
import App from "./App";  // Asegúrate de importar tu App

// Renderiza la aplicación dentro del Router
ReactDOM.render(
  <Router>
    <App />
  </Router>,
  document.getElementById("root")
);