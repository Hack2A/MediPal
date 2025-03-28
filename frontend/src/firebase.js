import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyCprf5NAlpG-o8R9iddJ19AwPajR9bBu8Q",
  authDomain: "smvit2025.firebaseapp.com",
  projectId: "smvit2025",
  storageBucket: "smvit2025.firebasestorage.app",
  messagingSenderId: "609498431283",
  appId: "1:609498431283:web:b56913e2a9e2044f418846",
  measurementId: "G-SKV1L47B02",
};

const app = initializeApp(firebaseConfig);
const storage = getStorage(app);
const db = getFirestore(app);

export { db, storage };
