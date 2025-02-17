// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAJaaEptsAMG0u6PofYfmwtEm7emYrQ6nw",
  authDomain: "blood-art-948aa.firebaseapp.com",
  projectId: "blood-art-948aa",
  storageBucket: "blood-art-948aa.firebasestorage.app",
  messagingSenderId: "460130631616",
  appId: "1:460130631616:web:27883d31807bbcbfa45225",
  measurementId: "G-ZT9K91FS1F"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);