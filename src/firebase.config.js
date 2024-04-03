// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBjh5FoqFMu8xLbe_BNbx241jeVw1rdplc",
    authDomain: "fir-part-3.firebaseapp.com",
    projectId: "fir-part-3",
    storageBucket: "fir-part-3.appspot.com",
    messagingSenderId: "598833193654",
    appId: "1:598833193654:web:e6a5482e47a941a3e97c17"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;
