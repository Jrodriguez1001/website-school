// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
///////////

//////////
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAZ6Qy1srltpBAvnYalBef9hVLJFbeaH8A",
  authDomain: "veritatis-splendor-a0636.firebaseapp.com",
  projectId: "veritatis-splendor-a0636",
  storageBucket: "veritatis-splendor-a0636.appspot.com",
  messagingSenderId: "907481061448",
  appId: "1:907481061448:web:976a7fc8f8586ab8aee07d",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);

export const db = getFirestore();
