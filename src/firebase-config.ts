// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
//import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAEHqiTC0PdYU57jEU1cGObm40RYDxZp7k",
  authDomain: "santaclara-homelessness.firebaseapp.com",
  projectId: "santaclara-homelessness",
  storageBucket: "santaclara-homelessness.firebasestorage.app",
  messagingSenderId: "136595909546",
  appId: "1:136595909546:web:4d025b7bc073ea3ffbd9d3",
  measurementId: "G-0ESGF260J5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
//const analytics = getAnalytics(app);
export const auth = getAuth(app);