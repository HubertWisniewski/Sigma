
import firebase from 'firebase'

const config = {    
    apiKey: "AIzaSyAL0s3KwxE96QEm6KBsfy_GUANHO4fo0Z0",
    authDomain: "sigma-a5d06.firebaseapp.com",
    databaseURL: "https://sigma-a5d06.firebaseio.com",
    projectId: "sigma-a5d06",
    storageBucket: "sigma-a5d06.appspot.com",
    messagingSenderId: "858771468559"
  };
  firebase.initializeApp(config);

  export const rootRef = firebase.database().ref();
