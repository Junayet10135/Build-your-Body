// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyD_6eK1NuR4LOVfr9dvFd34vUGwOqPYUCs",
    authDomain: "build-your-body-e2805.firebaseapp.com",
    projectId: "build-your-body-e2805",
    storageBucket: "build-your-body-e2805.appspot.com",
    messagingSenderId: "93732830976",
    appId: "1:93732830976:web:4ac136a08f9f6a839cbde5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;