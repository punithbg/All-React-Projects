import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDQbMNHd0iFdlPvCW6SROzEBafq-5iZzco",
  authDomain: "flipkart-17011.firebaseapp.com",
  projectId: "flipkart-17011",
  storageBucket: "flipkart-17011.appspot.com",
  messagingSenderId: "997805642223",
  appId: "1:997805642223:web:1f1b8d1b1e30ce02f3661a",
  measurementId: "G-Q3VZ673RYN",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider, db, firebase };
