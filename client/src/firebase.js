
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-auth-d4a10.firebaseapp.com",
  projectId: "mern-auth-d4a10",
  storageBucket: "mern-auth-d4a10.firebasestorage.app",
  messagingSenderId: "479485233337",
  appId: "1:479485233337:web:d0a4f6f5ad016d2114f368"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);