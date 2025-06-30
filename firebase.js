// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAbezEufAr9r1Lxx2969d2_Lfiyqf4dPXQ",
  authDomain: "thursday-51c18.firebaseapp.com",
  projectId: "thursday-51c18",
  storageBucket: "thursday-51c18.firebasestorage.app",
  messagingSenderId: "349887257515",
  appId: "1:349887257515:web:5e28c21e7fdad7b15810ee",
  measurementId: "G-969QVW9G8H"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);