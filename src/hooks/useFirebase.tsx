import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { doc, collection, addDoc, setDoc } from "firebase/firestore";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyC5GE8qA-G1-Dyb_uxB3QcXtO3ihnGj2Oc",
  authDomain: "whatsup-e904d.firebaseapp.com",
  projectId: "whatsup-e904d",
  storageBucket: "whatsup-e904d.appspot.com",
  messagingSenderId: "910324214499",
  appId: "1:910324214499:web:d4ec5eba63e4ab3094f3d6",
  measurementId: "G-JXE8KBP659",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

const addUser = async (user: any, id: string) => {
  try {
    // const docRef = await addDoc(collection(db, "users"), user);
    await setDoc(doc(db, "users", id), user);
  } catch (e) {}
};

// createUserWithEmailAndPassword(auth, email, password)
//   .then((userCredential) => {
//     // Signed in
//     const user = userCredential.user;
//     // ...
//   })
//   .catch((error) => {
//     const errorCode = error.code;
//     const errorMessage = error.message;
//     // ..
//   });

export default function useFirebase() {
  return { app, db, auth, addUser };
}
