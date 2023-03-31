import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyD7W3TYOL2cyNyKZbAZVUuDL0_UCfObfrk",
  authDomain: "trabajo-react-b4d5f.firebaseapp.com",
  projectId: "trabajo-react-b4d5f",
  storageBucket: "trabajo-react-b4d5f.appspot.com",
  messagingSenderId: "943336422184",
  appId: "1:943336422184:web:115f16fbe2d6306ea06e1d",
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
