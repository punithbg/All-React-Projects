import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCmyNL7-1w0hM5BDYcIVZi6twwhCXxPCOs",
  authDomain: "linkedin-clone-7b3e4.firebaseapp.com",
  projectId: "linkedin-clone-7b3e4",
  storageBucket: "linkedin-clone-7b3e4.appspot.com",
  messagingSenderId: "284544442822",
  appId: "1:284544442822:web:bc3a8ecb810aedfced92c7",
  measurementId: "G-N9JXDB3KRG",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
