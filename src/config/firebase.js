// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getAuth } from "firebase/auth";
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBFY43DQr-tRDiwLK1JDowhP2WsqhRUnjE",
  authDomain: "tycoon-d13e6.firebaseapp.com",
  projectId: "tycoon-d13e6",
  storageBucket: "tycoon-d13e6.firebasestorage.app",
  messagingSenderId: "230919279684",
  appId: "1:230919279684:web:6cd6d13a268643868f5811"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);