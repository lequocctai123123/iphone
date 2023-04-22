import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth';
import {getFirestore} from 'firebase/firestore';
import {getStorage} from 'firebase/storage';

const firebaseConfig = {
  apiKey: "AIzaSyA2ydn1TrLaKDLvw2muZXLv-vfDaetaxok",
  authDomain: "eshop-ead32.firebaseapp.com",
  projectId: "eshop-ead32",
  storageBucket: "eshop-ead32.appspot.com",
  messagingSenderId: "294290363395",
  appId: "1:294290363395:web:d60c0b337c1170b13aea36"
};



// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);

export default app;