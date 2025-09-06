// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getFunctions } from "firebase/functions";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCTHFh5YwAyezHlxD6LFlywnAl1wTTbRjk",
  authDomain: "wahidulislam-site.firebaseapp.com",
  projectId: "wahidulislam-site",
  storageBucket: "wahidulislam-site.firebasestorage.app",
  messagingSenderId: "90536514479",
  appId: "1:90536514479:web:c93174c27844c1d595155a",
  measurementId: "G-H5CSWTTKS1"
};



const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
export const functions = getFunctions(app, "us-central1");
