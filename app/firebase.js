// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBLHv0uncWD5o_ckfEwYffaxYDKDOnitUE",
  authDomain: "aryankarani-personal-website.firebaseapp.com",
  databaseURL:
    "https://aryankarani-personal-website-default-rtdb.firebaseio.com",
  projectId: "aryankarani-personal-website",
  storageBucket: "aryankarani-personal-website.appspot.com",
  messagingSenderId: "292808428672",
  appId: "1:292808428672:web:8753e910d4f77c33562a65",
  measurementId: "G-28TH9EM2ZV",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const db = getDatabase(app);

export { app, db };
