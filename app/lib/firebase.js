// lib/firebase.js

import { initializeApp, getApps } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Your Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCvN2_0SkmcODcqOVqg3Tl0sRmwyHvaSdo",
  authDomain: "vjc-project.firebaseapp.com",
  projectId: "vjc-project",
  storageBucket: "vjc-project.appspot.com",
  messagingSenderId: "232845886321",
  appId: "1:232845886321:web:fbef48eda41d6c188b2cd0",
  measurementId: "G-JPH0CGYTXT",
};

const app = getApps().length === 0 ? initializeApp(firebaseConfig) : getApps()[0];
const db = getFirestore(app);

export { db };
