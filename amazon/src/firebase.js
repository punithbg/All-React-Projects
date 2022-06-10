import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAv3ajJ4LFESToBAOu-qvvANagaKBIFJIo",
  authDomain: "fir-75570.firebaseapp.com",
  projectId: "fir-75570",
  storageBucket: "fir-75570.appspot.com",
  messagingSenderId: "102262190251",
  appId: "1:102262190251:web:97370009da396cf0fb07ee",
  measurementId: "G-N95PBPMBF0",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider, db };
