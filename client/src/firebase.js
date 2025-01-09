// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-auth-504c3.firebaseapp.com",
  projectId: "mern-auth-504c3",
  storageBucket: "mern-auth-504c3.firebasestorage.app",
  messagingSenderId: "195969634512",
  appId: "1:195969634512:web:7217b1194119accb848ed5"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);