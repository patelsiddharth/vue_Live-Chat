import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

const firebaseConfig = {
    apiKey: "AIzaSyCOQmcL5ZStLRzymW3A0SzDw_rb4deNzjo",
    authDomain: "vue-firebase-e8e8e.firebaseapp.com",
    projectId: "vue-firebase-e8e8e",
    storageBucket: "vue-firebase-e8e8e.appspot.com",
    messagingSenderId: "650920250919",
    appId: "1:650920250919:web:ecc1c0a92b993d00228802"
};

firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();
const fireStore = firebase.firestore();
const timeStamp = firebase.firestore.FieldValue.serverTimestamp;

export {fireStore, timeStamp, auth}