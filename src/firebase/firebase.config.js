// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD8Wm10vKtkRYNOnOmqIR5m-qB6yFY50TY",
  authDomain: "movie-mania-f1044.firebaseapp.com",
  projectId: "movie-mania-f1044",
  storageBucket: "movie-mania-f1044.firebasestorage.app",
  messagingSenderId: "577125627825",
  appId: "1:577125627825:web:f11266c19f166a0383af90"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;