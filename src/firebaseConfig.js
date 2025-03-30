// Importa las funciones necesarias de Firebase
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

// Tu configuración personalizada
const firebaseConfig = {
  apiKey: "AIzaSyC5asymQy69BnYLqVxI5PaPROU7ypoe1Bg",
  authDomain: "dj-sombra-visualizer.firebaseapp.com",
  projectId: "dj-sombra-visualizer",
  storageBucket: "dj-sombra-visualizer.firebasestorage.app",
  messagingSenderId: "59205836953",
  appId: "1:59205836953:web:53c0a2301213d89c985808"
};

// Inicializa Firebase
const app = initializeApp(firebaseConfig);

// Instancias de servicios
const auth = getAuth(app);
const storage = getStorage(app);
const db = getFirestore(app);

// Exporta todo lo necesario
export { auth, db, storage };