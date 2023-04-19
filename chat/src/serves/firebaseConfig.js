// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getAuth} from 'firebase/auth';
import { getFirestore} from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCIZA7KO8oem646NJmbvXOWnehXRmq2tTE",
  authDomain: "conversas-24701.firebaseapp.com",
  projectId: "conversas-24701",
  storageBucket: "conversas-24701.appspot.com",
  messagingSenderId: "1099491033206",
  appId: "1:1099491033206:web:885a1228576d0e12f39f57",
  measurementId: "G-J6405KH1W1"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
const analytics = getAnalytics(app);
export const dataabaseApp = getFirestore (app);