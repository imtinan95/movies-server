import { initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyBWznaXtOaZEx3cK5-K349LA50ZxSJR4tg',
  authDomain: 'movie-server-c0e30.firebaseapp.com',
  projectId: 'movie-server-c0e30',
  storageBucket: 'movie-server-c0e30.appspot.com',
  messagingSenderId: '460496572558',
  appId: '1:460496572558:web:5e16e72bbffa0987cdb9df',
}

// Initialize Firebase
export const app = initializeApp(firebaseConfig)
export const firestore = getFirestore(app)
