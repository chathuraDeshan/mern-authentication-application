
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "auth-mern-3d5e7.firebaseapp.com",
  projectId: "auth-mern-3d5e7",
  storageBucket: "auth-mern-3d5e7.firebasestorage.app",
  messagingSenderId: "182941707303",
  appId: "1:182941707303:web:971f03e86fc018ee71b202"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);