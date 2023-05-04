// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyBi89R8jDDmiOHu4JrHa3GVsGs_Pu2ny_k",
    authDomain: "linkedin-react-app-f111d.firebaseapp.com",
    projectId: "linkedin-react-app-f111d",
    storageBucket: "linkedin-react-app-f111d.appspot.com",
    messagingSenderId: "944831809324",
    appId: "1:944831809324:web:808d75a7f8a48c9db78e89",
    measurementId: "G-58YDRSVF5Z"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const firestore = getFirestore(app)


export { auth, app, firestore }