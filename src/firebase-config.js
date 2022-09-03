import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCBivwQd_DC3HWOfpgRaEhnpsz7wo-4Bv8",
  authDomain: "react-blog-6e9c4.firebaseapp.com",
  projectId: "react-blog-6e9c4",
  storageBucket: "react-blog-6e9c4.appspot.com",
  messagingSenderId: "282583272381",
  appId: "1:282583272381:web:2dfc1c00dbf68bc62860d4"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();
export const db = getFirestore(app);
