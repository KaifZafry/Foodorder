// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyANQoKFSPy4o8LtFs1Wr-OllpqSnfOFf40",
  authDomain: "kitchen-4a9f6.firebaseapp.com",
  projectId: "kitchen-4a9f6",
  storageBucket: "kitchen-4a9f6.appspot.com",
  messagingSenderId: "1087441465740",
  appId: "1:1087441465740:web:c2cc3e21d708e74a3426a9",
  measurementId: "G-KHHM7C2T0F"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);