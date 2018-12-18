import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./components/App/App";
import setupFirebase from "./setupFirebase";
import { BrowserRouter as Router } from 'react-router-dom'
import firebase from "firebase";
import * as serviceWorker from "./serviceWorker";
import Auth from "./components/Auth/Auth";

firebase.initializeApp(setupFirebase);



ReactDOM.render(
  <Auth>
    <Router>
    <App />
    </Router>
  </Auth>,

  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
