import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyBw0AF12Mn7SJaDgYZ6NYkrj20pq-_0htI",
  authDomain: "smvit2025-f5fcb.firebaseapp.com",
  projectId: "smvit2025-f5fcb",
  storageBucket: "smvit2025-f5fcb.firebasestorage.app",
  messagingSenderId: "683675699838",
  appId: "1:683675699838:web:c82a9487f5e56d7c30662f",
  measurementId: "G-9QEEMYW5TW",
};

const app = initializeApp(firebaseConfig);
const storage = getStorage(app);
const db = getFirestore(app);

export { db, storage };
