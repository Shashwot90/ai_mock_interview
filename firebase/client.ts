import { getApp, getApps, initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDsIGRcaXNsrBvZCJTFtCRD1uxJp3GH_Q0",
  authDomain: "prepwise-7c47f.firebaseapp.com",
  projectId: "prepwise-7c47f",
  storageBucket: "prepwise-7c47f.firebasestorage.app",
  messagingSenderId: "727221741366",
  appId: "1:727221741366:web:de8950d89cc85efa8cb597",
  measurementId: "G-R9Z771F330"
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();

export const auth = getAuth(app);
export const db = getFirestore(app);