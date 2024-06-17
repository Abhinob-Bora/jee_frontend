// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCynCuPri9pbdRxX39c8KNBcrfQWZ4180I",
  authDomain: "stylesenseai1.firebaseapp.com",
  projectId: "stylesenseai1",
  storageBucket: "stylesenseai1.appspot.com",
  messagingSenderId: "282279592964",
  appId: "1:282279592964:web:73498aaa80862492aaa151",
  measurementId: "G-4B3F0MD9B0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;