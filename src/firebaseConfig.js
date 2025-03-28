// Importa la función para inicializar Firebase
import { initializeApp } from "firebase/app";

// Tu configuración personalizada
const firebaseConfig = {
  apiKey: "AIzaSyC5asymQv69BnYLqX15PaPROU7ypoe1Bg",
  authDomain: "dj-sombra-visualizer.firebaseapp.com",
  projectId: "dj-sombra-visualizer",
  storageBucket: "dj-sombra-visualizer.firebasestorage.app",
  messagingSenderId: "5925836953",
  appId: "1:5925836953:web:53c0a2301213d89c985808"
};

// Inicializa Firebase
const app = initializeApp(firebaseConfig);

export default app;