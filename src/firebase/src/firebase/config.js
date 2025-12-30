import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyC2JBYno_8gCDhVxJkrgT-cERDV7LOk",
  authDomain: "proyecto-final-react-2db75.firebaseapp.com",
  projectId: "proyecto-final-react-2db75",
  storageBucket: "proyecto-final-react-2db75.appspot.com",
  messagingSenderId: "542237914304",
  appId: "1:542237914304:web:b3f63c551d6893df0d6925"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
