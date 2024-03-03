import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_KEY,
  authDomain: "chat-web-b1ddb.firebaseapp.com",
  projectId: "chat-web-b1ddb",
  storageBucket: "chat-web-b1ddb.appspot.com",
  messagingSenderId: "683063760540",
  appId: "1:683063760540:web:c3311fdf9ba61e7a10bf59",
  measurementId: "G-JZ4FN5PSQM"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
export const db = getFirestore()
