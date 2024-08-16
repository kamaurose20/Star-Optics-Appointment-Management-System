// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";


// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDNsgmkBC6Ni1ESlw1G7PdZGOnrH5TSVQ8",
  authDomain: "appointment-management-s-dce77.firebaseapp.com",
  projectId: "appointment-management-s-dce77",
  storageBucket: "appointment-management-s-dce77.appspot.com",
  messagingSenderId: "781801645264",
  appId: "1:781801645264:web:038f45b52b15c83b67aad5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { auth };