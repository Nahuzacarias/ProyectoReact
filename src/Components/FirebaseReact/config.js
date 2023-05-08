import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore";


const firebaseConfig = {
  apiKey: "AIzaSyBj9rEspkz1ZSc28bWuRlaRwA6eipbpH7E",
  authDomain: "e-commerce-540c5.firebaseapp.com",
  projectId: "e-commerce-540c5",
  storageBucket: "e-commerce-540c5.appspot.com",
  messagingSenderId: "1045200788080",
  appId: "1:1045200788080:web:ad61e6c5744cad3d91f2b5"
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app)

