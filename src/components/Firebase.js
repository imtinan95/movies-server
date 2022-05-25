import firebase from 'firebase'

var firebaseConfig = {
  apiKey: 'AIzaSyBWznaXtOaZEx3cK5-K349LA50ZxSJR4tg',
  authDomain: 'movie-server-c0e30.firebaseapp.com',
  projectId: 'movie-server-c0e30',
  storageBucket: 'movie-server-c0e30.appspot.com',
  messagingSenderId: '460496572558',
  appId: '1:460496572558:web:5e16e72bbffa0987cdb9df',
}

// Initialize Firebase
firebase.initializeApp(firebaseConfig)
var db = firebase.firestore()

export default db
