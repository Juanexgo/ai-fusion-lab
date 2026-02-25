// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: "ai-fusion-lab-2de9f.firebaseapp.com",
  projectId: "ai-fusion-lab-2de9f",
  storageBucket: "ai-fusion-lab-2de9f.firebasestorage.app",
  messagingSenderId: "715621768507",
  appId: "1:715621768507:web:1676d622e7fefdd6b46b1e",
  measurementId: "G-3QQFSNXF1Q"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db=getFirestore(app, 'default');
