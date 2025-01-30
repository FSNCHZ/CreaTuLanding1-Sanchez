import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyBOCAKqc0VslWNHbQk1h9oMQTVysuHLkQI",
  authDomain: "sanchezfrancisco-reactcoder.firebaseapp.com",
  projectId: "sanchezfrancisco-reactcoder",
  storageBucket: "sanchezfrancisco-reactcoder.firebasestorage.app",
  messagingSenderId: "648791414116",
  appId: "1:648791414116:web:d57219d9812782d0499671"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)