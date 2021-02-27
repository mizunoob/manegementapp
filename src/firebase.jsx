import firebase from "firebase"

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyBRwAUW40IyO7omFjnH6rYCR22Rx1Pe9qM",
  authDomain: "task-manegementapp.firebaseapp.com",
  databaseURL: "https://task-manegementapp-default-rtdb.firebaseio.com",
  projectId: "task-manegementapp",
  storageBucket: "task-manegementapp.appspot.com",
  messagingSenderId: "897012675692",
  appId: "1:897012675692:web:b2d4561e5ddb1edaf05449"
})

export const db = firebaseApp.firestore()
export const auth = firebase.auth()

export default firebase