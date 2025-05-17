// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBF9dyuhxdz76jl6HkvYxXlXGvBDyG9H1o",
  authDomain: "imagegrnai.firebaseapp.com",
  projectId: "imagegrnai",
  storageBucket: "imagegrnai.firebasestorage.app",
  messagingSenderId: "885047916818",
  appId: "1:885047916818:web:5a43dc76c9eced4cafdbcb",
  measurementId: "G-PDXVHKP0TE"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);