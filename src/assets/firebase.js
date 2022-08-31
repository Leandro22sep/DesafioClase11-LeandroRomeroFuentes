import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyAO-HN3mSxkXlhcob2ZlZyxGY-Wg4H925c",
  authDomain: "maedre-f1474.firebaseapp.com",
  projectId: "maedre-f1474",
  storageBucket: "maedre-f1474.appspot.com",
  messagingSenderId: "368795758241",
  appId: "1:368795758241:web:2ffba13d7660bd544ccae0"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)