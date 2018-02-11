import firebase from 'firebase'
require('firebase/firestore')

  var config = {
    apiKey: "AIzaSyBzvr7hDkQdPkO4pRNeU-_2DqxOHnz0hX0",
    authDomain: "fir-basics-4fa14.firebaseapp.com",
    databaseURL: "https://fir-basics-4fa14.firebaseio.com",
    projectId: "fir-basics-4fa14",
    storageBucket: "fir-basics-4fa14.appspot.com",
    messagingSenderId: "540091009424"
  };
  firebase.initializeApp(config);


  export const db = firebase.firestore()