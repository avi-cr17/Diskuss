import { initializeApp, getApp, getApps } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";


const firebaseConfig = {
  apiKey: "AIzaSyDYWfwgJwH7bHO2ChwHbEgrDuYNfrtlFn4",
  authDomain: "reddit-4de9d.firebaseapp.com",
  projectId: "reddit-4de9d",
  storageBucket: "reddit-4de9d.appspot.com",
  messagingSenderId: "807543939537",
  appId: "1:807543939537:web:24f1ff278091474f49c0f0",
  measurementId: "G-PHMYM69TP6"
};

// Initialize Firebase for SSR
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const firestore = getFirestore(app);
const auth = getAuth(app);
const storage = getStorage(app);

export { app, auth, firestore, storage };