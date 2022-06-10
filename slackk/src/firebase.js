import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyA9NYzR7wXpss7tPMFLrhnwC5zsnm314rQ",
  authDomain: "slackk-dc5e7.firebaseapp.com",
  projectId: "slackk-dc5e7",
  storageBucket: "slackk-dc5e7.appspot.com",
  messagingSenderId: "809522416506",
  appId: "1:809522416506:web:b21f13f97ade8d803664c3",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider, db };
