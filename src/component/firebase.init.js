// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC4MhnPyrWP2Wa8YZsB6e0pellb_MHSJiQ",
  authDomain: "simplefirebase-3490c.firebaseapp.com",
  projectId: "simplefirebase-3490c",
  storageBucket: "simplefirebase-3490c.firebasestorage.app",
  messagingSenderId: "30973849885",
  appId: "1:30973849885:web:e7900bcb804219cada31f4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);
export default auth;