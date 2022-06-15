import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAy8nrVW3-B5imAQ6SPgr-_Kbf1xp0_8Ms",
  authDomain: "prime-dc95c.firebaseapp.com",
  projectId: "prime-dc95c",
  storageBucket: "prime-dc95c.appspot.com",
  messagingSenderId: "278814187768",
  appId: "1:278814187768:web:0bddb03f484300b0c6db0d",
  measurementId: "G-T127BBD8FG",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider, db, firebase };
