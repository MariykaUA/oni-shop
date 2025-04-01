// Description: Firebase configuration file.
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore'; 

const firebaseConfig = {
  apiKey: "AIzaSyC5admnD4R2z2u6M7d4kv1MRRk8L6jJ7ws",
  authDomain: "oni-shop.firebaseapp.com",
  projectId: "oni-shop",
  storageBucket: "oni-shop.firebasestorage.app",
  messagingSenderId: "35683104324",
  appId: "1:35683104324:web:17a5adccb103d3fbf3ae11",
  measurementId: "G-3XPZVXEFL0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
export { db };