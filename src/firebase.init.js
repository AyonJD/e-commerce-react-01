import { getAuth } from 'firebase/auth'
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCCxAZg6v-TJdd3NG-WUfrHXfoAj2wP_7A",
  authDomain: "ema-john-98b3d.firebaseapp.com",
  projectId: "ema-john-98b3d",
  storageBucket: "ema-john-98b3d.appspot.com",
  messagingSenderId: "490372178424",
  appId: "1:490372178424:web:f4dc7a63adf741a5d4360d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
export default auth;