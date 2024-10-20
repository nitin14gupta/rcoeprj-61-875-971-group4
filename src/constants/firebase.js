// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";
import {getFirestore} from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDFo2BVd6OtHAtfV_UilCnE295nL-XSsRA",
  authDomain: "travelauth-84610.firebaseapp.com",
  projectId: "travelauth-84610",
  storageBucket: "travelauth-84610.appspot.com",
  messagingSenderId: "443483035518",
  appId: "1:443483035518:web:4b2e7719945773fb43052f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth=getAuth();
export const db=getFirestore(app);
export default app;