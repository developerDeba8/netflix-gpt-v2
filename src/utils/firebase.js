// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDMX6p-MFZV_0fgUyIxm3moJMyZAOkH0lc",
  authDomain: "netflix-gpt-v2.firebaseapp.com",
  projectId: "netflix-gpt-v2",
  storageBucket: "netflix-gpt-v2.firebasestorage.app",
  messagingSenderId: "46998391761",
  appId: "1:46998391761:web:4952648b07ea848ca96ef0",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

//auth - getAuth()
export const auth = getAuth();
