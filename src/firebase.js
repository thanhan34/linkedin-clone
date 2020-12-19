import firebase from 'firebase'
const firebaseConfig = {
    apiKey: "AIzaSyAsKOUqSacWyzjl1v8XftNLMn5u7yJXVwU",
    authDomain: "linkedin-cl.firebaseapp.com",
    projectId: "linkedin-cl",
    storageBucket: "linkedin-cl.appspot.com",
    messagingSenderId: "641424400238",
    appId: "1:641424400238:web:27525c6fc2f7731441eb7f"
};
const firebaseApp = firebase.initializeApp(firebaseConfig)
const db = firebaseApp.firestore()
const auth = firebase.auth()
export { db, auth }