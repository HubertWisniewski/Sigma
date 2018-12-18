import React from "react";
import ReactDOM from "react-dom";
import { Router } from "react-router-dom";
import "./index.css";
import App from "./components/App/App";
import setupFirebase from "./setupFirebase"
import firebase from 'firebase'
import * as serviceWorker from "./serviceWorker";

firebase.initializeApp(setupFirebase)

firebase.auth().onAuthStateChanged(user => {
  console.log(user)
} )

firebase.auth().signInWithEmailAndPassword("janusz@gmail.com", "test1234").then(
  firebase.auth().signOut()
)

ReactDOM.render(
  
    <App />
 ,

  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
