// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyBYOHhpML5pUAMbvwxx8inGDe5HJ1Ie_Co",
    authDomain: "jkims-f7347.firebaseapp.com",
    projectId: "jkims-f7347",
    storageBucket: "jkims-f7347.appspot.com",
    messagingSenderId: "363906957269",
    appId: "1:363906957269:web:74b64ca0789f9c49c9c75c",
    measurementId: "G-2LNTZ7JQGX"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);