// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD53se4k5jctQemWcHKjb1j8cJJrMIZhGw",
  authDomain: "e-commercesite-29058.firebaseapp.com",
  projectId: "e-commercesite-29058",
  storageBucket: "e-commercesite-29058.appspot.com",
  messagingSenderId: "822839526312",
  appId: "1:822839526312:web:28eec84857012a1134939d",
  measurementId: "G-CHD0MSM2BN"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
