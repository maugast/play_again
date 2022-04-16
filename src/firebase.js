// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDvy_mDnJBVYPhFCARfxN8ZznCzwsyoMEY",
  authDomain: "ecommerce-playagain.firebaseapp.com",
  projectId: "ecommerce-playagain",
  storageBucket: "ecommerce-playagain.appspot.com",
  messagingSenderId: "718688384364",
  appId: "1:718688384364:web:182faf2cd173f1e0872f49"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const db = getFirestore(app)

export default db