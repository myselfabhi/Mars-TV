// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDK5o_fhjvV-Hquasr2OkGCtUiK9pc1dDw",
  authDomain: "netflixgpt-240124.firebaseapp.com",
  projectId: "netflixgpt-240124",
  storageBucket: "netflixgpt-240124.appspot.com",
  messagingSenderId: "22518348625",
  appId: "1:22518348625:web:062e96b7c836e7f14af170",
  measurementId: "G-2HPD91CNDK"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();