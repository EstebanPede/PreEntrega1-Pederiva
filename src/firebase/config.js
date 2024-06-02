// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDlsUqEcvZeIsuEQ87qZvH3A3KZjS1rjwI",
  authDomain: "aberturasoeste-8b82e.firebaseapp.com",
  projectId: "aberturasoeste-8b82e",
  storageBucket: "aberturasoeste-8b82e.appspot.com",
  messagingSenderId: "630891672729",
  appId: "1:630891672729:web:206cfc0b22fdb3932ef408"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);