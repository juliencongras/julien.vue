// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getDatabase } from "firebase/database";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCNQsgrUrbLh68OwOoA68RnvBALnfoKBfQ",
  authDomain: "super-fire-40e86.firebaseapp.com",
  databaseURL: "https://super-fire-40e86-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "super-fire-40e86",
  storageBucket: "super-fire-40e86.firebasestorage.app",
  messagingSenderId: "847452218572",
  appId: "1:847452218572:web:7a2db9abfe02f300d7ce69"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const database = getDatabase(app);