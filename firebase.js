// Import the functions you need from the SDKs you need
import { initializeApp,getApps,getApp } from "firebase/app";
import {getFireStore} from 'firebase/firestore';
import {getStorage} from 'firebase/storage'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDtl_wD7Xu97A7PtCCBb1Xc3vWPeY3Wt5E",
  authDomain: "instagram-nextjs-5efa7.firebaseapp.com",
  projectId: "instagram-nextjs-5efa7",
  storageBucket: "instagram-nextjs-5efa7.appspot.com",
  messagingSenderId: "957176615398",
  appId: "1:957176615398:web:9bce9b2eec4df6029e4627",
  measurementId: "G-N7MD3J4EBP"
};

// Initialize Firebase
const app = !getApps().length? initializeApp(firebaseConfig) : getApp() ;
const db= getFireStore()
const storage= getStorage() 