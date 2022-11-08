// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore/lite";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDoaPPM81QB8C_g9E8F1-xOpF8Si5MopxU",
  authDomain: "react-cursos-dc03e.firebaseapp.com",
  projectId: "react-cursos-dc03e",
  storageBucket: "react-cursos-dc03e.appspot.com",
  messagingSenderId: "850286460333",
  appId: "1:850286460333:web:66faf1fb9659bb89263524"
};

// Initialize Firebase
export const FirebaseApp = initializeApp(firebaseConfig);

export const  firebaseAuth = getAuth( FirebaseApp );

export const  firebaseDb = getFirestore( FirebaseApp );
