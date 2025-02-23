import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyBPgV_PAneUFFbk_5X_eH81jbD1PLsEOvU",
  authDomain: "serenilink-8d39e.firebaseapp.com",
  projectId: "serenilink-8d39e",
  storageBucket: "serenilink-8d39e.firebasestorage.app",
  messagingSenderId: "993533863773",
  appId: "1:993533863773:web:8519d21f5813cc6387aab4",
  measurementId: "G-RPNXES58HN"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
