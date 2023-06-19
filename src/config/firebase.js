import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore/lite"

const firebaseConfig = {
  apiKey: "AIzaSyDb3UpvkdjIhhqvYlBiI-tHyru2GD8i1kU",
  authDomain: "tiktok---jornada-f3b8a.firebaseapp.com",
  projectId: "tiktok---jornada-f3b8a",
  storageBucket: "tiktok---jornada-f3b8a.appspot.com",
  messagingSenderId: "997319589740",
  appId: "1:997319589740:web:f935f0d7eb1c9fb6147d49"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app)

export default db;