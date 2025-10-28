import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCUwZm-HfWcgtkI3-oh0b7CA-M6kbJS_Is",
  authDomain: "payment-27d8b.firebaseapp.com",
  projectId: "payment-27d8b",
  storageBucket: "payment-27d8b.firebasestorage.app",
  messagingSenderId: "878586390518",
  appId: "1:878586390518:web:b989666fab69859cc3c9d7",
  measurementId: "G-GK04TP920Y"
};

// Initialize Firebase
// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const db = getFirestore();
export const storage = getStorage();
