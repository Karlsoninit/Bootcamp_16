import * as firebase from "firebase/app";
import "firebase/auth";

const app = firebase.initializeApp({
  apiKey: "AIzaSyDrgILcTg4U4_Va7nYPGVqi_Iv3BnBGjE4",
  authDomain: "authorization-3e689.firebaseapp.com",
  databaseURL: "https://authorization-3e689.firebaseio.com",
  projectId: "authorization-3e689",
  storageBucket: "authorization-3e689.appspot.com",
  messagingSenderId: "820706513856"
});

export default app;
