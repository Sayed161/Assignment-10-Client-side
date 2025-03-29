import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";


const firebaseConfig = {
    apiKey: "AIzaSyDHjTzfmnjhpyZSyPTSkVMvZ94WckEV2-8",
    authDomain: "movieflix-f2433.firebaseapp.com",
    projectId: "movieflix-f2433",
    storageBucket: "movieflix-f2433.firebasestorage.app",
    messagingSenderId: "688737346451",
    appId: "1:688737346451:web:42048dff3521235cef3e66"
  };
const app = initializeApp(firebaseConfig);
export default app;