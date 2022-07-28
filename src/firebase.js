// Import the functions you need from the SDKs you need
import firebase from '@firebase/app'
import "firebase/firestore";
// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: process.env.API_KEY,
    authDomain: "tiktok-e3bd1.firebaseapp.com",
    projectId: "tiktok-e3bd1",
    storageBucket: "tiktok-e3bd1.appspot.com",
    messagingSenderId: "454610954891",
    appId: "1:454610954891:web:38547f067cdb36d84e028e"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export const db = firebase.firestore();
