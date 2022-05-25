import firebase from "firebase/compat/app";
import "firebase/compat/database";
import "firebase/compat/auth";

var firebaseConfig = {
   // your firebase configuration goes here
   apiKey: "AIzaSyBJ5pTOlkInp3EqElri7A8mr0OKTJLcDrg",
  authDomain: "fir-81eae.firebaseapp.com",
  projectId: "fir-81eae",
  storageBucket: "fir-81eae.appspot.com",
  messagingSenderId: "1017745808878",
  appId: "1:1017745808878:web:892d11c7d1ef5a8b6242ff",
  measurementId: "G-6PNV44D90X"
};

const firebaseDB = firebase.initializeApp(firebaseConfig);

const db = firebaseDB.database().ref();
const auth = firebase.auth();
const googleAuthProvider = new firebase.auth.GoogleAuthProvider();
const facebookAuthProvider = new firebase.auth.FacebookAuthProvider();

export { auth, googleAuthProvider, facebookAuthProvider, db };
